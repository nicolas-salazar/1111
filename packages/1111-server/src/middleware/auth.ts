import { getAuth } from "firebase-admin/auth";
import type { Context, Next } from "hono";

export type AuthVariables = {
	userId: string;
	userDisplayName: string;
	userPhotoURL: string | null;
};

export async function requireAuth(c: Context, next: Next) {
	const authHeader = c.req.header("Authorization");
	if (!authHeader?.startsWith("Bearer ")) {
		return c.json({ error: "Unauthorized" }, 401);
	}

	const token = authHeader.slice(7);
	try {
		const decoded = await getAuth().verifyIdToken(token);
		c.set("userId", decoded.uid);
		c.set("userDisplayName", decoded.name ?? decoded.email ?? decoded.uid);
		c.set("userPhotoURL", decoded.picture ?? null);
		await next();
	} catch {
		return c.json({ error: "Invalid or expired token" }, 401);
	}
}
