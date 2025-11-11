import { Link } from "react-router-dom";
import type { Entry } from "@/entries";
import type { KeyEntryDistance } from "@/lib/entries-utils";

export const KeyEntryTile = ({
	distance,
	entry,
}: {
	distance: KeyEntryDistance & { suffix: string };
	entry: Entry;
}) => {
	return (
		<Link
			className="flex flex-col items-start gap-2 rounded-lg border bg-card p-3 text-left text-sm shadow transition-all hover:bg-accent hover:text-accent-foreground"
			to={`/entry/${entry.n}`}
		>
			<div className="flex w-full items-center justify-between gap-1">
				<h3 className="font-semibold">{entry.title}</h3>
				<div className="flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-secondary px-3 py-2 font-medium text-secondary-foreground text-xs shadow-none transition-colors">
					{`${distance.suffix}, hace ${distance.n} ${(() => {
						if (distance.range === "month") {
							return distance.n === 1 ? "mes" : "meses";
						}

						if (distance.range === "year") {
							return distance.n === 1 ? "año" : "años";
						}
					})()}`}
				</div>
			</div>
			<div className="line-clamp-2 text-muted-foreground text-xs">
				{entry.content[0]}
			</div>
		</Link>
	);
};
