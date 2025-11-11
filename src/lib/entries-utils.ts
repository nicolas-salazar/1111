import {
	differenceInMonths,
	differenceInYears,
	getDate,
	getMonth,
} from "date-fns";
import { ENTRIES, type Entry } from "@/entries";

export type KeyEntryDistance = {
	n: number;
	range: "year" | "month";
};

export const getEntriesThatHappenedYearsAgo = ({
	referenceDate,
}: {
	referenceDate: Date;
}): {
	entry: Entry;
	distance: KeyEntryDistance;
}[] => {
	return ENTRIES.filter(
		(entry) =>
			getDate(referenceDate) === getDate(entry.date) &&
			getMonth(referenceDate) === getMonth(entry.date),
	).map((entry) => ({
		entry,
		distance: {
			range: "year",
			n: differenceInYears(referenceDate, entry.date),
		},
	}));
};

export const getEntriesThatHappenedNMonthsAgo = ({
	distanceInMonths,
	referenceDate,
}: {
	distanceInMonths: number;
	referenceDate: Date;
}): {
	entry: Entry;
	distance: KeyEntryDistance;
}[] => {
	return ENTRIES.filter(
		(entry) =>
			getDate(referenceDate) === getDate(entry.date) &&
			differenceInMonths(referenceDate, entry.date) === distanceInMonths,
	).map((entry) => ({
		entry,
		distance: {
			range: "month",
			n: differenceInMonths(referenceDate, entry.date),
		},
	}));
};
