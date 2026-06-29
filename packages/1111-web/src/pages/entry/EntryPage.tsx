import { useParams } from "react-router-dom";
import { EntryCard } from "@/components/ui/entry-card";
import { useEntry } from "@/hooks/useEntry";

export const EntryPage = () => {
	const { id } = useParams();
	const { data: entry, isLoading, isError } = useEntry(id ?? "");

	if (isLoading) return <EntryPageSkeleton />;
	if (isError || !entry) return <EntryPageError />;

	return <EntryCard entry={entry} key={`entry-card.${entry.id}`} />;
};

const EntryPageSkeleton = () => (
	<div className="flex min-h-fit w-full flex-col rounded-xl border bg-background shadow">
		<div className="flex items-center justify-between rounded-t-xl border-b bg-card px-4 py-2">
			<div className="flex gap-2">
				<div className="size-3 rounded-full bg-red-500" />
				<div className="size-3 rounded-full bg-yellow-500" />
				<div className="size-3 rounded-full bg-green-500" />
			</div>
			<div className="flex gap-2">
				<div className="h-7 w-16 animate-pulse rounded-md bg-muted" />
				<div className="h-7 w-16 animate-pulse rounded-md bg-muted" />
			</div>
		</div>

		<div className="flex flex-col gap-6 px-4 py-8">
			<div className="h-10 w-3/4 animate-pulse rounded-lg bg-muted" />

			<div className="flex flex-col gap-3">
				<div className="h-4 w-full animate-pulse rounded bg-muted" />
				<div className="h-4 w-5/6 animate-pulse rounded bg-muted" />
				<div className="h-4 w-4/5 animate-pulse rounded bg-muted" />
				<div className="h-4 w-full animate-pulse rounded bg-muted" />
				<div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
			</div>

			<div className="h-[1px] w-full bg-border" />

			<div className="flex items-center justify-between gap-4">
				<div className="flex items-center gap-3">
					<div className="size-12 animate-pulse rounded-full bg-muted" />
					<div className="h-4 w-24 animate-pulse rounded bg-muted" />
				</div>
				<div className="flex flex-col items-end gap-1">
					<div className="h-3 w-20 animate-pulse rounded bg-muted" />
					<div className="h-3 w-16 animate-pulse rounded bg-muted" />
				</div>
			</div>
		</div>
	</div>
);

const EntryPageError = () => (
	<div className="flex w-full flex-col items-center gap-3 rounded-xl border bg-card py-16 text-center shadow">
		<span className="text-4xl">🦔</span>
		<p className="text-muted-foreground text-sm">Esta cita no existe (todavía).</p>
	</div>
);
