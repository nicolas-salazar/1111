import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { ButtonWithLoading } from "@/components/ui/button-with-loading";
import { useAuth } from "@/contexts/AuthContext";
import { RAW_ENTRIES, type RawEntry } from "@/entries";
import { api } from "@/lib/api";
import type { MediaItem } from "@1111/shared";

// Nov 10 2025, noon ET (EST = UTC−5 → 17:00 UTC)
const MIGRATION_COMMENT_DATE = "2025-11-10T17:00:00.000Z";

// ─── Persistence ──────────────────────────────────────────────────────────────

const STEP_KEY = "migrate-step";
const CONFIRMED_KEY = "migrate-confirmed";

function loadStep(): number {
	return Number(localStorage.getItem(STEP_KEY) ?? "0");
}

function loadConfirmed(): Set<string> {
	try {
		const raw = localStorage.getItem(CONFIRMED_KEY);
		return new Set(raw ? (JSON.parse(raw) as string[]) : []);
	} catch {
		return new Set();
	}
}

function saveStep(step: number) {
	localStorage.setItem(STEP_KEY, String(step));
}

function markConfirmed(date: string) {
	const confirmed = loadConfirmed();
	confirmed.add(date);
	localStorage.setItem(CONFIRMED_KEY, JSON.stringify([...confirmed]));
}

// ─── Draft types ──────────────────────────────────────────────────────────────

type ExistingMedia = {
	kind: "existing";
	tempId: string;
	src: string;
	type: "image" | "video";
	owner: "Nicolas" | "Lau";
};

type NewMedia = {
	kind: "new";
	tempId: string;
	file: File;
	previewUrl: string;
	type: "image" | "video";
};

type MediaDraft = ExistingMedia | NewMedia;

type Draft = {
	title: string;
	date: string;
	content: string[];
	comments: string[];
	media: MediaDraft[];
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

function splitContent(raw: RawEntry): { content: string[]; comments: string[] } {
	const content: string[] = [];
	const comments: string[] = [];
	for (const p of raw.content) {
		if (p.startsWith("💬")) {
			comments.push(p.replace(/^💬\s*/, ""));
		} else {
			content.push(p);
		}
	}
	return { content, comments };
}

function initDraft(raw: RawEntry): Draft {
	const { content, comments } = splitContent(raw);
	return {
		title: raw.title,
		date: raw.date.slice(0, 10),
		content,
		comments,
		media: raw.media.map((m) => ({
			kind: "existing",
			tempId: crypto.randomUUID(),
			src: m.src,
			type: m.type as "image" | "video",
			owner: m.owner,
		})),
	};
}

// ─── MigrateStep ─────────────────────────────────────────────────────────────

type MigrateStepProps = {
	uid: string;
	coupleId: string;
	raw: RawEntry;
	step: number;
	total: number;
	confirmedCount: number;
	onAdvance: () => void;
};

const MigrateStep = ({
	uid,
	coupleId,
	raw,
	step,
	total,
	confirmedCount,
	onAdvance,
}: MigrateStepProps) => {
	const [draft, setDraft] = useState<Draft>(() => initDraft(raw));
	const [busy, setBusy] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const fileInputRef = useRef<HTMLInputElement>(null);
	const createdUrlsRef = useRef<string[]>([]);

	useEffect(() => {
		return () => {
			for (const url of createdUrlsRef.current) {
				URL.revokeObjectURL(url);
			}
		};
	}, []);

	const progress = ((step + 1) / total) * 100;

	const updateContent = (i: number, v: string) =>
		setDraft((d) => { const c = [...d.content]; c[i] = v; return { ...d, content: c }; });
	const removeContent = (i: number) =>
		setDraft((d) => ({ ...d, content: d.content.filter((_, idx) => idx !== i) }));
	const addContent = () =>
		setDraft((d) => ({ ...d, content: [...d.content, ""] }));

	const updateComment = (i: number, v: string) =>
		setDraft((d) => { const c = [...d.comments]; c[i] = v; return { ...d, comments: c }; });
	const removeComment = (i: number) =>
		setDraft((d) => ({ ...d, comments: d.comments.filter((_, idx) => idx !== i) }));
	const addComment = () =>
		setDraft((d) => ({ ...d, comments: [...d.comments, ""] }));

	const removeMedia = (tempId: string) =>
		setDraft((d) => ({ ...d, media: d.media.filter((m) => m.tempId !== tempId) }));

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const files = Array.from(e.target.files ?? []);
		const newItems: NewMedia[] = files.map((file) => {
			const previewUrl = URL.createObjectURL(file);
			createdUrlsRef.current.push(previewUrl);
			return {
				kind: "new",
				tempId: crypto.randomUUID(),
				file,
				previewUrl,
				type: file.type.startsWith("video/") ? "video" : "image",
			};
		});
		setDraft((d) => ({ ...d, media: [...d.media, ...newItems] }));
		e.target.value = "";
	};

	const handleConfirm = async () => {
		setBusy(true);
		setError(null);
		try {
			const confirmed = loadConfirmed();

			if (!confirmed.has(raw.date)) {
				const existingMedia: MediaItem[] = draft.media
					.filter((m): m is ExistingMedia => m.kind === "existing")
					.map((m) => ({
						id: crypto.randomUUID(),
						owner: { uid: m.owner === "Nicolas" ? uid : "lau-tbd", displayName: m.owner },
						src: m.src,
						type: m.type,
						addedAt: raw.date,
					}));

				const { id: entryId } = await api.entries.create(coupleId, {
					title: draft.title,
					date: new Date(draft.date).toISOString(),
					content: draft.content.filter(Boolean),
					media: existingMedia,
				});

				for (const m of draft.media.filter((m): m is NewMedia => m.kind === "new")) {
					await api.entries.addMedia(coupleId, entryId, m.file, m.type);
				}

				for (const text of draft.comments.filter(Boolean)) {
					await api.entries.addComment(coupleId, entryId, text, MIGRATION_COMMENT_DATE);
				}

				markConfirmed(raw.date);
			}

			toast.success(`Cita migrada`, { description: draft.title });
			onAdvance();
		} catch (err) {
			const msg = err instanceof Error ? err.message : "Error desconocido";
			setError(msg);
			toast.error("Error al migrar", { description: msg });
		} finally {
			setBusy(false);
		}
	};

	return (
		<div className="flex w-full flex-col gap-4">
			{/* Progress */}
			<div className="flex flex-col gap-1.5">
				<div className="flex items-center justify-between">
					<h1 className="font-bold text-lg">Migración</h1>
					<span className="text-muted-foreground text-sm">
						{step + 1} / {total} · {confirmedCount} migradas
					</span>
				</div>
				<div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
					<div
						className="h-full rounded-full bg-primary transition-all duration-300"
						style={{ width: `${progress}%` }}
					/>
				</div>
			</div>

			{/* Title + Date */}
			<div className="grid grid-cols-[1fr_160px] gap-3">
				<label className="flex flex-col gap-1">
					<span className="text-muted-foreground text-xs uppercase tracking-wide">Título</span>
					<input
						className="rounded-md border bg-background px-3 py-1.5 text-sm"
						type="text"
						value={draft.title}
						onChange={(e) => setDraft((d) => ({ ...d, title: e.target.value }))}
					/>
				</label>
				<label className="flex flex-col gap-1">
					<span className="text-muted-foreground text-xs uppercase tracking-wide">Fecha</span>
					<input
						className="rounded-md border bg-background px-3 py-1.5 text-sm"
						type="date"
						value={draft.date}
						onChange={(e) => setDraft((d) => ({ ...d, date: e.target.value }))}
					/>
				</label>
			</div>

			{/* Content + Comments side by side */}
			<div className="grid grid-cols-2 gap-3">
				{/* Content */}
				<div className="flex flex-col gap-1.5 rounded-md border p-3">
					<span className="text-muted-foreground text-xs uppercase tracking-wide">
						Contenido · {draft.content.length}
					</span>
					{draft.content.length === 0 && (
						<p className="italic text-muted-foreground text-xs">Sin párrafos.</p>
					)}
					{draft.content.map((p, i) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: ordered editable list
						<div className="flex items-start gap-1" key={i}>
							<textarea
								className="min-h-[60px] flex-1 rounded border bg-background px-2 py-1 text-xs"
								value={p}
								onChange={(e) => updateContent(i, e.target.value)}
							/>
							<button
								aria-label="Eliminar"
								className="mt-1 text-muted-foreground hover:text-destructive"
								type="button"
								onClick={() => removeContent(i)}
							>
								×
							</button>
						</div>
					))}
					<Button className="mt-1 w-fit cursor-pointer" size="sm" type="button" variant="outline" onClick={addContent}>
						+ Párrafo
					</Button>
				</div>

				{/* Comments */}
				<div className="flex flex-col gap-1.5 rounded-md border p-3">
					<span className="text-muted-foreground text-xs uppercase tracking-wide">
						Comentarios de Nico · {draft.comments.length}
					</span>
					{draft.comments.length === 0 && (
						<p className="italic text-muted-foreground text-xs">Sin comentarios.</p>
					)}
					{draft.comments.map((c, i) => (
						// biome-ignore lint/suspicious/noArrayIndexKey: ordered editable list
						<div className="flex items-start gap-1" key={i}>
							<textarea
								className="min-h-[120px] flex-1 rounded border bg-background px-2 py-1 text-xs"
								value={c}
								onChange={(e) => updateComment(i, e.target.value)}
							/>
							<button
								aria-label="Eliminar"
								className="mt-1 text-muted-foreground hover:text-destructive"
								type="button"
								onClick={() => removeComment(i)}
							>
								×
							</button>
						</div>
					))}
					<Button className="mt-1 w-fit cursor-pointer" size="sm" type="button" variant="outline" onClick={addComment}>
						+ Comentario
					</Button>
				</div>
			</div>

			{/* Media */}
			<div className="flex flex-col gap-2 rounded-md border p-3">
				<span className="text-muted-foreground text-xs uppercase tracking-wide">
					Media · {draft.media.length}
				</span>
				<div className="flex flex-wrap gap-2">
					{draft.media.map((m) => {
						const src = m.kind === "existing" ? m.src : m.previewUrl;
						return (
							<div className="relative" key={m.tempId}>
								{m.type === "video" ? (
									<video className="h-20 w-20 rounded object-cover" src={src} />
								) : (
									<img alt="" className="h-20 w-20 rounded object-cover" src={src} />
								)}
								<button
									aria-label="Eliminar"
									className="-right-1 -top-1 absolute flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-destructive text-white text-xs"
									type="button"
									onClick={() => removeMedia(m.tempId)}
								>
									×
								</button>
							</div>
						);
					})}
					<button
						className="flex h-20 w-20 cursor-pointer items-center justify-center rounded border-2 border-dashed text-muted-foreground text-xl hover:border-primary hover:text-primary"
						type="button"
						onClick={() => fileInputRef.current?.click()}
					>
						+
					</button>
				</div>
				<input
					accept="image/*,video/*"
					className="hidden"
					multiple
					ref={fileInputRef}
					type="file"
					onChange={handleFileChange}
				/>
			</div>

			{error && (
				<p className="text-destructive text-sm" role="alert">
					{error}
				</p>
			)}

			{/* Actions */}
			<div className="flex justify-end gap-3">
				<Button className="cursor-pointer" disabled={busy} type="button" variant="ghost" onClick={onAdvance}>
					Saltar
				</Button>
				<ButtonWithLoading loading={busy} type="button" onClick={handleConfirm}>
					Confirmar y siguiente →
				</ButtonWithLoading>
			</div>
		</div>
	);
};

// ─── MigratePage ──────────────────────────────────────────────────────────────

export const MigratePage = () => {
	const { currentUser } = useAuth();
	const [step, setStep] = useState(loadStep);

	if (!currentUser?.coupleId) {
		return (
			<div className="flex w-full flex-col gap-4">
				<h1 className="font-bold text-2xl">Migración</h1>
				<p className="text-destructive text-sm">
					Tu usuario no tiene un <code>coupleId</code> configurado en Firestore.
				</p>
			</div>
		);
	}

	const confirmedCount = loadConfirmed().size;

	if (step >= RAW_ENTRIES.length) {
		return (
			<div className="flex w-full flex-col items-center gap-4 text-center">
				<span aria-label="Completado" className="text-6xl" role="img">🎉</span>
				<h1 className="font-bold text-2xl">¡Migración completa!</h1>
				<p className="text-muted-foreground">
					{confirmedCount} de {RAW_ENTRIES.length} citas migradas.
				</p>
			</div>
		);
	}

	const advance = () => {
		const next = step + 1;
		saveStep(next);
		setStep(next);
	};

	return (
		<MigrateStep
			key={step}
			confirmedCount={confirmedCount}
			coupleId={currentUser.coupleId}
			raw={RAW_ENTRIES[step]}
			step={step}
			total={RAW_ENTRIES.length}
			uid={currentUser.uid}
			onAdvance={advance}
		/>
	);
};
