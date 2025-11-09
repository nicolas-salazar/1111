import { Route, Routes } from "react-router-dom";
import { DevToolsPage, HomePage, WelcomePage } from "@/pages";

const App = () => {
	return (
		<main className="flex h-dvh w-screen items-center justify-center overflow-y-auto overflow-x-hidden bg-background px-4 py-6 text-foreground">
			<Routes>
				<Route path="/welcome" element={<WelcomePage />} />
				<Route path="/dev-tools" element={<DevToolsPage />} />

				<Route index element={<HomePage />} />
			</Routes>
		</main>
	);
};

export default App;
