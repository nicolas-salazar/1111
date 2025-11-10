import { EntryCard } from "@/components/ui/entry-card";
import { ENTRIES } from "@/entries";

export const EntryPage = () => {
	return (
		<EntryCard
			date={ENTRIES[0].date}
			description={ENTRIES[0].content}
			media={ENTRIES[0].media}
			title={ENTRIES[0].title}
		/>
	);
};
