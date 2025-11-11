import { addDays } from "date-fns";
import { useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { EntryTile } from "@/components/ui/entry-tile";
import { KeyEntryTile } from "@/components/ui/key-entry-tile";
import { ENTRIES } from "@/entries";
import {
	getEntriesThatHappenedNMonthsAgo,
	getEntriesThatHappenedYearsAgo,
} from "@/lib/entries-utils";

export const HomePage = () => {
	const keyEntriesList = useMemo(() => {
		return [
			// Hoy, hace x años:
			...getEntriesThatHappenedYearsAgo({
				referenceDate: new Date(),
			}).map((record) => ({
				distance: record.distance,
				entry: record.entry,
				suffix: "Hoy",
			})),
			// Mañana, hace x años:
			...getEntriesThatHappenedYearsAgo({
				referenceDate: addDays(new Date(), 1),
			}).map((record) => ({
				distance: record.distance,
				entry: record.entry,
				suffix: "Mañana",
			})),
			// Hoy, hace 9 meses:
			...getEntriesThatHappenedNMonthsAgo({
				distanceInMonths: 9,
				referenceDate: new Date(),
			}).map((record) => ({
				distance: record.distance,
				entry: record.entry,
				suffix: "Hoy",
			})),
			// Hoy, hace 6 meses:
			...getEntriesThatHappenedNMonthsAgo({
				distanceInMonths: 6,
				referenceDate: new Date(),
			}).map((record) => ({
				distance: record.distance,
				entry: record.entry,
				suffix: "Hoy",
			})),
			// Hoy, hace 3 meses:
			...getEntriesThatHappenedNMonthsAgo({
				distanceInMonths: 6,
				referenceDate: new Date(),
			}).map((record) => ({
				distance: record.distance,
				entry: record.entry,
				suffix: "Hoy",
			})),
		];
	}, []);

	return (
		<div className="flex w-full flex-col gap-8">
			<div className="flex w-full flex-col gap-2">
				<h1 className="px-4 text-right font-bold text-2xl text-foreground">
					11:11 🦔
				</h1>

				{keyEntriesList.length > 0 ? (
					<>
						<h2 className="px-4 text-right font-bold text-2xl text-foreground">
							Hoy, pero hace...
						</h2>

						{keyEntriesList.map(({ distance, entry, suffix }) => (
							<KeyEntryTile
								distance={{ ...distance, suffix }}
								entry={entry}
								key={`home.key-entry.${suffix}.${distance.n}-${distance.range}.${entry.n}`}
							/>
						))}
					</>
				) : (
					<p className="text-muted-foreground text-sm">
						Parece que hemos tenido ninguna cita un 11 de noviembre... Tengamos
						una.
					</p>
				)}
			</div>

			<div className="flex w-full flex-col gap-2">
				<h2 className="px-4 text-right font-bold text-2xl text-foreground">
					Aquí, todas nuestras 69 citas 👀✨⭐️😱🧡
				</h2>

				{ENTRIES.map((entry) => (
					<EntryTile key={`home.entry.${entry.n}`} entry={entry} />
				))}
			</div>

			<Link
				className="ml-auto w-fit text-right text-sm underline"
				to="/welcome"
			>
				Volver a ver la intro gei
			</Link>
		</div>
	);
};
