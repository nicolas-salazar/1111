import { useParams } from "react-router-dom";
import { EntryCard } from "@/components/ui/entry-card";
import { ENTRIES } from "@/entries";

export const EntryPage = () => {
	const { id } = useParams();
	const index = parseInt(id || "0", 10);

	return (
		<EntryCard
			entry={ENTRIES[index - 1]}
			key={`entry-card.${ENTRIES[index - 1].n}`}
			nextEntry={ENTRIES[index] || null}
			previousEntry={ENTRIES[index - 2] || null}
		/>
	);
};
