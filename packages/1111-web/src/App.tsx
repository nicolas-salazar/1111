import type { ReactNode } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import {
	DevToolsPage,
	EntryPage,
	HomePage,
	LoginPage,
	OnboardingPage,
} from "@/pages";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
	const { currentUser, loading } = useAuth();
	if (loading)
		return (
			<div className="flex flex-1 items-center justify-center">
				<span
					aria-label="Cargando"
					className="animate-pulse text-5xl"
					role="img"
				>
					🦔
				</span>
			</div>
		);
	if (!currentUser) return <Navigate replace to="/login" />;
	return <>{children}</>;
};

const App = () => (
	<main className="mx-auto flex max-h-dvh min-h-dvh w-screen max-w-[768px] flex-col items-center justify-start gap-6 overflow-x-hidden px-4 py-6">
		<Routes>
			<Route path="/login" element={<LoginPage />} />

			<Route
				path="/home"
				element={<ProtectedRoute><HomePage /></ProtectedRoute>}
			/>
			<Route
				path="/onboarding"
				element={<ProtectedRoute><OnboardingPage /></ProtectedRoute>}
			/>
			<Route
				path="/entry/:id"
				element={<ProtectedRoute><EntryPage /></ProtectedRoute>}
			/>
			<Route path="/dev-tools" element={<DevToolsPage />} />

			<Route path="*" element={<Navigate replace to="/home" />} />
		</Routes>
	</main>
);

export default App;
