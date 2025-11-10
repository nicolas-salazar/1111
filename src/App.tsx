import { Route, Routes } from "react-router-dom";
import { DevToolsPage, EntryPage, HomePage, WelcomePage } from "@/pages";

const App = () => {
	return (
		<main className="mx-auto flex max-h-dvh min-h-dvh w-screen max-w-[768px] flex-col items-center justify-start gap-6 overflow-x-hidden px-4 py-6">
			<Routes>
				<Route path="/welcome" element={<WelcomePage />} />
				<Route path="/entry/:id" element={<EntryPage />} />
				<Route path="/dev-tools" element={<DevToolsPage />} />

				<Route index element={<HomePage />} />
			</Routes>
		</main>
	);
};

export default App;
