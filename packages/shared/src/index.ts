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
	name: string;
	memberIds: string[];
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

// Returned by GET /entries/:id — includes position and adjacent full entries for prev/next navigation
export type EntryDetail = Entry & {
	n: number; // 1-based position in date-sorted list
	previousEntry: Entry | null;
	nextEntry: Entry | null;
};

// ─── Milestones ──────────────────────────────────────────────────────────────

// Returned by GET /entries/milestones — entries that hit a milestone on today
// or tomorrow (3/6/9 month anniversaries or year anniversaries).
// The client uses date-fns to compute the display label.
export type MilestonesResponse = Entry[];

