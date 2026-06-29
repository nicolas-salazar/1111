import { Navigate, Route, Routes } from "react-router-dom";
import { DevToolsPage, EntryPage, HomePage, WelcomePage } from "@/pages";
import { HAS_VISITED_THE_WELCOME_PAGE_PERSISTENCE_KEY } from "./pages/welcome/WelcomePage";

const App = () => {
	const hasVisitedTheWelcomePage = JSON.parse(
		localStorage.getItem(HAS_VISITED_THE_WELCOME_PAGE_PERSISTENCE_KEY) ??
			"false",
	);

	return (
		<main className="mx-auto flex max-h-dvh min-h-dvh w-screen max-w-[768px] flex-col items-center justify-start gap-6 overflow-x-hidden px-4 py-6">
			<Routes>
				<Route path="/home" element={<HomePage />} />
				<Route path="/welcome" element={<WelcomePage />} />
				<Route path="/entry/:id" element={<EntryPage />} />
				<Route path="/dev-tools" element={<DevToolsPage />} />

				<Route
					path="*"
					element={
						<Navigate to={hasVisitedTheWelcomePage ? "/home" : "/welcome"} />
					}
				/>
			</Routes>
		</main>
	);
};

export default App;
