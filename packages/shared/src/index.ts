// ─── User ────────────────────────────────────────────────────────────────────

// Firestore: users/{uid}
export type AppUser = {
	uid: string;
	displayName: string | null;
	email: string | null;
	photoURL: string | null;
	coupleId: string | null; // set once the user belongs to a couple
};

// ─── Couple ──────────────────────────────────────────────────────────────────

// Firestore: couples/{coupleId}
export type Couple = {
	id: string;
	user1Id: string;
	user2Id: string;
	createdAt: string;
};

// ─── Entry ───────────────────────────────────────────────────────────────────

export type MediaOwner = {
	uid: string;
	displayName: string;
};

export type MediaItem = {
	id: string; // client-generated UUID
	owner: MediaOwner;
	src: string; // Firebase Storage download URL
	type: "image" | "video";
	addedAt: string; // ISO string
};

export type Comment = {
	id: string; // client-generated UUID
	userId: string;
	authorName: string;
	authorPhoto?: string;
	text: string;
	createdAt: string; // ISO string
};

// Firestore: couples/{coupleId}/entries/{entryId}
// A single GET returns the full entry including all media and comments.
export type Entry = {
	id: string; // Firestore document ID — used as the URL param
	title: string;
	date: string; // ISO date string
	content: string[];
	media: MediaItem[];
	comments: Comment[];
	createdBy: string; // uid
	createdAt: string;
	updatedAt: string;
};

// Shape sent when creating a new entry (media is optional — can be added after)
export type CreateEntryInput = Pick<Entry, "title" | "date" | "content"> & {
	media?: MediaItem[];
};

// ─── Metadata ────────────────────────────────────────────────────────────────

// Firestore: couples/{coupleId}/metadata/stats
export type CoupleStats = {
	totalEntries: number;
};
