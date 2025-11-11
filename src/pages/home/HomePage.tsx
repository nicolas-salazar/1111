import { EntryCard } from "@/components/ui/entry-card";
import { ENTRIES } from "@/entries";

export const HomePage = () => {
	return <EntryCard entry={ENTRIES[1]} />;
};
