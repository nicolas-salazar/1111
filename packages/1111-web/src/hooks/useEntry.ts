import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/contexts/AuthContext";
import { api } from "@/lib/api";

export function useEntry(entryId: string) {
	const { currentUser } = useAuth();
	const coupleId = currentUser?.coupleId ?? null;

	return useQuery({
		queryKey: ["entries", coupleId, entryId],
		queryFn: () => api.entries.get(coupleId!, entryId),
		enabled: !!coupleId && !!entryId,
	});
}
