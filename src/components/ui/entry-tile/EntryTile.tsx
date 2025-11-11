import { format } from "date-fns";
import { Link } from "react-router-dom";
import type { Entry } from "@/entries";

export const EntryTile = ({ entry }: { entry: Entry }) => {
	return (
		<Link
			className="flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent hover:text-accent-foreground"
			to={`/entry/${entry.n}`}
		>
			<div className="flex w-full items-center justify-between gap-1">
				<h3 className="font-semibold">{entry.title}</h3>
				<div className="ml-auto text-right text-foreground text-xs">
					{format(entry.date, "MMM dd, yyyy")}
				</div>
			</div>
			<div className="line-clamp-2 text-muted-foreground text-xs">
				{entry.content[0]}
			</div>
		</Link>
	);
};
