import { Route, Routes } from "react-router-dom";
import { DevToolsPage, HomePage, WelcomePage } from "@/pages";

const App = () => {
	return (
		<main className="mx-auto flex min-h-dvh w-screen max-w-[768px] flex-col items-center justify-start gap-6 overflow-y-auto overflow-x-hidden px-4 py-6">
			<Routes>
				<Route path="/welcome" element={<WelcomePage />} />
				<Route path="/dev-tools" element={<DevToolsPage />} />

				<Route index element={<HomePage />} />
			</Routes>
		</main>
	);
};

export default App;
