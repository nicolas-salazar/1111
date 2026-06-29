import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/contexts/AuthContext";
import { api } from "@/lib/api";

export function useMilestones() {
	const { currentUser } = useAuth();
	const coupleId = currentUser?.coupleId ?? null;

	return useQuery({
		queryKey: ["milestones", coupleId],
		queryFn: () => api.entries.milestones(coupleId!),
		enabled: !!coupleId,
	});
}
