import { EntryCard } from "@/components/ui/entry-card";
import { ENTRIES } from "@/entries";

export const EntryPage = () => {
	return (
		<EntryCard
			content={ENTRIES[0].content}
			date={ENTRIES[0].date}
			media={ENTRIES[0].media}
			title={ENTRIES[0].title}
		/>
	);
};
