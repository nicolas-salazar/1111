import { FieldValue } from "firebase-admin/firestore";
import { Hono } from "hono";
import type { Comment, CreateEntryInput, Entry, MediaItem } from "@1111/shared";
import { db, storageBucket } from "../lib/firebase.js";
import { TtlCache } from "../lib/cache.js";
import { requireAuth } from "../middleware/auth.js";

export const entriesRouter = new Hono();

const cache = new TtlCache<Entry[]>(5 * 60 * 1000);

function entriesCol(coupleId: string) {
	return db.collection("couples").doc(coupleId).collection("entries");
}

/**
 * Returns all entries for a couple, ordered by date ascending.
 * Results are cached for 5 minutes.
 */
entriesRouter.get("/", async (c) => {
	const coupleId = c.req.param("coupleId");
	const cacheKey = `entries:${coupleId}`;
	const cached = cache.get(cacheKey);
	if (cached) return c.json(cached);

	const snapshot = await entriesCol(coupleId).orderBy("date", "asc").get();
	const entries: Entry[] = snapshot.docs.map((doc) => ({
		...(doc.data() as Omit<Entry, "id">),
		id: doc.id,
	}));

	cache.set(cacheKey, entries);
	return c.json(entries);
});

/**
 * Returns a single entry by its Firestore ID, including all media and comments.
 * Serves from the list cache when available to avoid an extra Firestore read.
 */
entriesRouter.get("/:entryId", async (c) => {
	const { coupleId, entryId } = c.req.param();

	const cacheKey = `entries:${coupleId}`;
	const cached = cache.get(cacheKey);
	if (cached) {
		const entry = cached.find((e) => e.id === entryId);
		if (!entry) return c.json({ error: "Not found" }, 404);
		return c.json(entry);
	}

	const doc = await entriesCol(coupleId).doc(entryId).get();
	if (!doc.exists) return c.json({ error: "Not found" }, 404);

	const entry: Entry = { ...(doc.data() as Omit<Entry, "id">), id: doc.id };
	return c.json(entry);
});

/**
 * Creates a new entry for the couple.
 * Increments the couple's total entry counter in metadata/stats.
 * Requires authentication.
 */
entriesRouter.post("/", requireAuth, async (c) => {
	const coupleId = c.req.param("coupleId");
	const userId = c.get("userId") as string;
	const body = await c.req.json<CreateEntryInput>();

	if (!body.title || !body.date || !Array.isArray(body.content)) {
		return c.json({ error: "Missing required fields: title, date, content" }, 400);
	}

	const now = new Date().toISOString();
	const newEntry = {
		title: body.title,
		date: body.date,
		content: body.content,
		media: body.media ?? [],
		comments: [],
		createdBy: userId,
		createdAt: now,
		updatedAt: now,
	};

	const ref = await entriesCol(coupleId).add(newEntry);

	await db
		.collection("couples")
		.doc(coupleId)
		.collection("metadata")
		.doc("stats")
		.set({ totalEntries: FieldValue.increment(1) }, { merge: true });

	cache.invalidate(`entries:${coupleId}`);
	return c.json({ id: ref.id }, 201);
});

/**
 * Updates the editable fields of an entry (title, date, content).
 * Does not touch media or comments — those have dedicated endpoints.
 * Requires authentication.
 */
entriesRouter.put("/:entryId", requireAuth, async (c) => {
	const { coupleId, entryId } = c.req.param();
	const body = await c.req.json<Partial<Pick<Entry, "title" | "date" | "content">>>();

	const ref = entriesCol(coupleId).doc(entryId);
	const snap = await ref.get();
	if (!snap.exists) return c.json({ error: "Not found" }, 404);

	await ref.update({ ...body, updatedAt: new Date().toISOString() });
	cache.invalidate(`entries:${coupleId}`);
	return c.json({ ok: true });
});

/**
 * Adds a comment to an entry on behalf of the authenticated user.
 * The comment is appended atomically via Firestore arrayUnion.
 */
entriesRouter.post("/:entryId/comments", requireAuth, async (c) => {
	const { coupleId, entryId } = c.req.param();
	const userId = c.get("userId") as string;
	const authorName = c.get("userDisplayName") as string;
	const authorPhoto = c.get("userPhotoURL") as string | null;
	const { text } = await c.req.json<{ text: string }>();

	if (!text?.trim()) return c.json({ error: "Comment text is required" }, 400);

	const ref = entriesCol(coupleId).doc(entryId);
	const snap = await ref.get();
	if (!snap.exists) return c.json({ error: "Entry not found" }, 404);

	const comment: Comment = {
		id: crypto.randomUUID(),
		entryId,
		userId,
		authorName,
		...(authorPhoto ? { authorPhoto } : {}),
		text: text.trim(),
		createdAt: new Date().toISOString(),
	};

	await ref.update({
		comments: FieldValue.arrayUnion(comment),
		updatedAt: new Date().toISOString(),
	});

	cache.invalidate(`entries:${coupleId}`);
	return c.json(comment, 201);
});

/**
 * Uploads a media file to Firebase Storage and appends the resulting MediaItem
 * to the entry's media array. The owner is set to the authenticated user.
 * Requires authentication.
 */
entriesRouter.post("/:entryId/media", requireAuth, async (c) => {
	const { coupleId, entryId } = c.req.param();
	const userId = c.get("userId") as string;
	const authorName = c.get("userDisplayName") as string;

	const formData = await c.req.formData();
	const file = formData.get("file") as File | null;
	const mediaType = formData.get("type") as string | null;

	if (!file || !mediaType) {
		return c.json({ error: "Missing file or type" }, 400);
	}
	if (mediaType !== "image" && mediaType !== "video") {
		return c.json({ error: "type must be 'image' or 'video'" }, 400);
	}

	const ref = entriesCol(coupleId).doc(entryId);
	const snap = await ref.get();
	if (!snap.exists) return c.json({ error: "Entry not found" }, 404);

	const arrayBuffer = await file.arrayBuffer();
	const buffer = Buffer.from(arrayBuffer);
	const fileName = `entries-media/${coupleId}/${entryId}/${crypto.randomUUID()}-${file.name}`;
	const fileRef = storageBucket.file(fileName);

	await fileRef.save(buffer, { metadata: { contentType: file.type } });
	await fileRef.makePublic();

	const src = `https://storage.googleapis.com/${storageBucket.name}/${fileName}`;

	const mediaItem: MediaItem = {
		id: crypto.randomUUID(),
		owner: { uid: userId, displayName: authorName },
		src,
		type: mediaType,
		addedAt: new Date().toISOString(),
	};

	await ref.update({
		media: FieldValue.arrayUnion(mediaItem),
		updatedAt: new Date().toISOString(),
	});

	cache.invalidate(`entries:${coupleId}`);
	return c.json(mediaItem, 201);
});
