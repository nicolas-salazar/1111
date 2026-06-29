import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import { AuthProvider } from "@/contexts/AuthContext";
import App from "./App.tsx";

import "./index.css";

const QUERY_CLIENT = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 24 * 60 * 60 * 1000, // 24 hours — matches server-side cache TTL
			retry: 1,
		},
	},
});

// biome-ignore lint/style/noNonNullAssertion: main file
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<QueryClientProvider client={QUERY_CLIENT}>
			<AuthProvider>
				<BrowserRouter>
					<App />
				</BrowserRouter>
			</AuthProvider>
		</QueryClientProvider>

		<Toaster />
	</StrictMode>,
);
