import { addDays, formatDistanceStrict, getDate } from "date-fns";
import { es } from "date-fns/locale/es";
import { Link } from "react-router-dom";
import { EntryTile } from "@/components/ui/entry-tile";
import { KeyEntryTile } from "@/components/ui/key-entry-tile";
import { useEntries } from "@/hooks/useEntries";
import { useMilestones } from "@/hooks/useMilestones";

const SKELETON_KEYS = ["sk-a", "sk-b", "sk-c", "sk-d", "sk-e", "sk-f"];

export const HomePage = () => {
	const { data: entries = [], isLoading: entriesLoading } = useEntries();
	const { data: milestones = [] } = useMilestones();

	const today = new Date();
	const tomorrow = addDays(today, 1);

	const keyEntriesList = milestones.map((entry) => {
		const entryDate = new Date(entry.date);
		const isToday = getDate(entryDate) === getDate(today);
		const refDate = isToday ? today : tomorrow;
		const prefix = isToday ? "Hoy" : "Mañana";
		const distance = formatDistanceStrict(entryDate, refDate, {
			locale: es,
			addSuffix: true,
		});
		return { entry, label: `${prefix}, ${distance}` };
	});

	return (
		<div className="flex w-full flex-col gap-8">
			<div className="flex w-full flex-col gap-2">
				<h1 className="px-4 text-right font-bold text-2xl text-foreground">
					11:11 🦔
				</h1>

				{keyEntriesList.length > 0 && (
					<>
						<h2 className="px-4 text-right font-bold text-2xl text-foreground">
							Hoy, pero hace...
						</h2>

						{keyEntriesList.map(({ entry, label }) => (
							<KeyEntryTile
								entry={entry}
								key={`home.key-entry.${entry.id}`}
								label={label}
							/>
						))}
					</>
				)}
			</div>

			<div className="flex w-full flex-col gap-2">
				<h2 className="px-4 text-right font-bold text-2xl text-foreground">
					{entriesLoading
						? "Cargando citas…"
						: `Aquí, todas nuestras ${entries.length} citas 👀✨⭐️😱🧡`}
				</h2>

				{entriesLoading ? (
					<div className="flex flex-col gap-2">
						{SKELETON_KEYS.map((k) => (
							<div key={k} className="flex flex-col gap-2 rounded-lg border p-3">
								<div className="flex items-center justify-between">
									<div className="h-4 w-1/3 animate-pulse rounded bg-muted" />
									<div className="h-3 w-20 animate-pulse rounded bg-muted" />
								</div>
								<div className="h-3 w-2/3 animate-pulse rounded bg-muted" />
							</div>
						))}
					</div>
				) : (
					entries.map((entry) => (
						<EntryTile key={`home.entry.${entry.id}`} entry={entry} />
					))
				)}
			</div>

			<Link
				className="ml-auto w-fit text-right text-sm underline"
				to="/onboarding"
			>
				Volver a ver la intro gei
			</Link>
		</div>
	);
};
