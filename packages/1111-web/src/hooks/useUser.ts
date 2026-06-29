import { useQuery } from "@tanstack/react-query";
import { doc, getDoc } from "firebase/firestore";
import type { AppUser } from "@1111/shared";
import { db } from "@/lib/firebase";

export function useUser(uid: string) {
	return useQuery({
		queryKey: ["user", uid],
		queryFn: async () => {
			const snap = await getDoc(doc(db, "users", uid));
			return snap.exists() ? (snap.data() as AppUser) : null;
		},
		enabled: !!uid,
		staleTime: Number.POSITIVE_INFINITY,
	});
}
