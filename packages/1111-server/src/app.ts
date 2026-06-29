import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { entriesRouter } from "./routes/entries.js";

const app = new Hono();

app.use("*", logger());

if (process.env.NODE_ENV !== "production") {
	app.use(
		"*",
		cors({
			origin: process.env.CORS_ORIGIN ?? "http://localhost:5173",
			allowMethods: ["GET", "POST", "PUT", "DELETE"],
			allowHeaders: ["Content-Type", "Authorization"],
		}),
	);
}

/** Health check — useful to verify the server is up. */
app.get("/health", (c) => c.json({ ok: true }));

app.route("/couples/:coupleId/entries", entriesRouter);

export { app };
