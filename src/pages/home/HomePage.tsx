import { EntryCard } from "@/components/ui/entry-card";
import { ENTRIES } from "@/entries";

export const HomePage = () => {
	return (
		<EntryCard
			content={ENTRIES[1].content}
			date={ENTRIES[1].date}
			media={ENTRIES[1].media}
			title={ENTRIES[1].title}
		/>
	);
};
