import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/contexts/AuthContext";
import { api } from "@/lib/api";

export function useEntries() {
	const { currentUser } = useAuth();
	const coupleId = currentUser?.coupleId ?? null;

	return useQuery({
		queryKey: ["entries", coupleId],
		queryFn: () => api.entries.list(coupleId!),
		enabled: !!coupleId,
	});
}
