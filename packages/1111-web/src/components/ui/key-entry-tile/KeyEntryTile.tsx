import { Link } from "react-router-dom";
import type { Entry } from "@1111/shared";

export const KeyEntryTile = ({
	entry,
	label,
}: {
	entry: Entry;
	label: string;
}) => {
	return (
		<Link
			className="flex flex-col items-start gap-2 rounded-lg border bg-card p-3 text-left text-sm shadow transition-all hover:bg-accent hover:text-accent-foreground"
			to={`/entry/${entry.id}`}
		>
			<div className="flex w-full items-center justify-between gap-1">
				<h3 className="font-semibold">{entry.title}</h3>
				<div className="flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-secondary px-3 py-2 font-medium text-secondary-foreground text-xs shadow-none transition-colors">
					{label}
				</div>
			</div>
			<div className="line-clamp-2 text-muted-foreground text-xs">
				{entry.content[0]}
			</div>
		</Link>
	);
};
