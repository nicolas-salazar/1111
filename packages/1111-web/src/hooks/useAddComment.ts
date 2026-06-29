import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useAuth } from "@/contexts/AuthContext";
import { api } from "@/lib/api";

export function useAddComment(entryId: string) {
	const { currentUser } = useAuth();
	const coupleId = currentUser?.coupleId ?? null;
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: (text: string) => api.entries.addComment(coupleId!, entryId, text),
		onSuccess: () => {
			queryClient.invalidateQueries({ queryKey: ["entries", coupleId] });
		},
	});
}
