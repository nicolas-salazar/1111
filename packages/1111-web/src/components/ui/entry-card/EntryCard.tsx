import { format, formatDistanceToNowStrict } from "date-fns";
import { es } from "date-fns/locale/es";
import { useState } from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import type { Entry, EntryDetail } from "@1111/shared";
import { Button } from "@/components/ui/button";
import { LoadableImage } from "@/components/ui/loadable-image";
import { ImageZoom } from "@/components/ui/shadcn-io/image-zoom";
import TypingText from "@/components/ui/shadcn-io/typing-text";
import { useUser } from "@/hooks/useUser";

export const EntryCard = ({ entry }: { entry: EntryDetail }) => {
	const { content, date, media, n, title, previousEntry, nextEntry, createdBy } = entry;
	const { data: author } = useUser(createdBy);

	const [typewriterDone, setTypewriterDone] = useState(false);

	const authorName = author?.displayName ?? "…";
	const authorInitial = authorName.charAt(0).toUpperCase();

	return (
		<div className="flex min-h-fit w-full flex-col rounded-xl border bg-background text-card-foreground shadow">
			<Header previousEntry={previousEntry} nextEntry={nextEntry} />

			<div className="flex flex-col gap-6 px-4 py-8">
				<h2 className="font-bold text-4xl leading-tight tracking-tight">
					{title}
				</h2>

				<div className="relative">
					<TypingText
						as="p"
						className="hyphens-auto text-left text-l text-muted-foreground leading-relaxed"
						completeOnClick={true}
						cursorCharacter="|"
						initialDelay={1000}
						loop={false}
						onSentenceComplete={() =>
							setTimeout(() => setTypewriterDone(true), 250)
						}
						showCursor={true}
						text={content.join("\n\n")}
						typingSpeed={45}
					/>
				</div>

				<div
					className={twMerge(
						"flex flex-col gap-6",
						typewriterDone ? "h-unset opacity-100" : "h-0 opacity-0",
						"transition-opacity duration-500",
						"transition-height duration-500",
					)}
				>
					{media.length > 0 &&
						media.map((item) => {
							if (item.type === "image") {
								return (
									<ImageZoom
										backdropClassName='[&_[data-rmiz-modal-overlay="visible"]]:bg-black/80'
										key={`entry-card.image-${item.src}`}
									>
										<LoadableImage
											className="h-auto max-h-[400px] w-full rounded-2xl object-cover"
											src={item.src}
										/>
									</ImageZoom>
								);
							}

							if (item.type === "video") {
								return (
									<div
										className="relative"
										key={`entry-card.video-container-${item.src}`}
									>
										<video
											autoPlay
											className="w-full rounded-2xl"
											controls
											src={item.src}
											muted
										>
											<track
												kind="captions"
												srcLang="es"
												label="Español"
												src=""
												default
											/>
										</video>

										{/* biome-ignore lint/a11y/useAnchorContent: Will skip it for now */}
										<a
											className="video-anchor absolute top-0 left-0 h-full w-full"
											href={item.src}
											rel="noreferrer"
											target="_blank"
										/>
									</div>
								);
							}

							return null;
						})}

					<div className="h-[1px] w-full shrink-0 bg-border" />

					<div className="flex w-full flex-col gap-4">
						<h3 className="text-xs leading-tight tracking-tight">
							Esta fue nuestra cita número {n}.
						</h3>

						<div className="flex items-center justify-between gap-4">
							<div className="flex items-center gap-3">
								<span
									className="flex h-12 w-12 items-center justify-center rounded-full font-bold text-lg"
									style={{ background: "#eaeaea", color: "#f5f5f5" }}
								>
									{authorInitial}
								</span>
								<div>
									<p className="font-semibold">{authorName}</p>
								</div>
							</div>

							<div className="flex flex-col items-end">
								<span className="text-xs">
									{format(date, "MMM dd, yyyy", { locale: es })}
								</span>
								<span className="text-xs">
									{`(hace ${formatDistanceToNowStrict(date, { locale: es })})`}
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const Header = ({
	previousEntry,
	nextEntry,
}: {
	previousEntry: Entry | null;
	nextEntry: Entry | null;
}) => (
	<div className="flex items-center justify-between rounded-t-xl border-b bg-card px-4 py-2">
		<Button className="flex items-center gap-3 px-0" size="sm" variant="ghost">
			<Link className="flex gap-2" to="/home">
				<div className="size-3 rounded-full bg-red-500"></div>
				<div className="size-3 rounded-full bg-yellow-500"></div>
				<div className="size-3 rounded-full bg-green-500"></div>
			</Link>
		</Button>

		<div className="flex items-center gap-2">
			{previousEntry && (
				<Link to={`/entry/${previousEntry.id}`}>
					<Button className="text-xs" size="sm" variant="outline">
						Anterior
					</Button>
				</Link>
			)}
			{nextEntry && (
				<Link to={`/entry/${nextEntry.id}`}>
					<Button className="text-xs" size="sm" variant="outline">
						Siguiente
					</Button>
				</Link>
			)}
		</div>
	</div>
);
