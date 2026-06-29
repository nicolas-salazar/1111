import type { Comment, CreateEntryInput, Entry, EntryDetail, MediaItem, MilestonesResponse } from "@1111/shared";
import { auth } from "@/lib/firebase";

const BASE_URL = (import.meta.env.VITE_API_URL as string | undefined) ?? "";

async function request<T>(path: string, init?: RequestInit & { body?: BodyInit }): Promise<T> {
	const token = await auth.currentUser?.getIdToken();
	const isFormData = init?.body instanceof FormData;

	const res = await fetch(`${BASE_URL}${path}`, {
		...init,
		headers: {
			...(isFormData ? {} : { "Content-Type": "application/json" }),
			...(token ? { Authorization: `Bearer ${token}` } : {}),
			...init?.headers,
		},
	});

	if (!res.ok) {
		const body = await res.json().catch(() => ({}));
		throw new Error((body as { error?: string }).error ?? res.statusText);
	}

	return res.json() as Promise<T>;
}

export const api = {
	entries: {
		/** Fetch all entries for a couple, ordered by date. */
		list: (coupleId: string) =>
			request<Entry[]>(`/couples/${coupleId}/entries`),

		/**
		 * Fetch a single entry including all media, comments,
		 * and the IDs of the previous and next entries by date.
		 */
		get: (coupleId: string, entryId: string) =>
			request<EntryDetail>(`/couples/${coupleId}/entries/${entryId}`),

		/** Create a new entry. Returns the new Firestore document ID. */
		create: (coupleId: string, data: CreateEntryInput) =>
			request<{ id: string }>(`/couples/${coupleId}/entries`, {
				method: "POST",
				body: JSON.stringify(data),
			}),

		/** Update editable fields of an entry (title, date, content). */
		update: (coupleId: string, entryId: string, data: Partial<CreateEntryInput>) =>
			request<{ ok: true }>(`/couples/${coupleId}/entries/${entryId}`, {
				method: "PUT",
				body: JSON.stringify(data),
			}),

		/** Add a comment to an entry on behalf of the current user. */
		addComment: (coupleId: string, entryId: string, text: string) =>
			request<Comment>(`/couples/${coupleId}/entries/${entryId}/comments`, {
				method: "POST",
				body: JSON.stringify({ text }),
			}),

		/** Entries that hit a 3/6/9-month or year anniversary today or tomorrow. */
		milestones: (coupleId: string) =>
			request<MilestonesResponse>(`/couples/${coupleId}/entries/milestones`),

		/** Upload a media file and attach it to an entry. */
		addMedia: (coupleId: string, entryId: string, file: File, type: "image" | "video") => {
			const formData = new FormData();
			formData.append("file", file);
			formData.append("type", type);

			return request<MediaItem>(`/couples/${coupleId}/entries/${entryId}/media`, {
				method: "POST",
				body: formData,
			});
		},
	},
};
