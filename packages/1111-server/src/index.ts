import dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.NODE_ENV ?? "development"}` });
import "./lib/firebase.js"; // initialize Firebase Admin before anything else
import { serve } from "@hono/node-server";
import { app } from "./app.js";

const port = Number(process.env.PORT ?? 3001);

serve({ fetch: app.fetch, port }, () => {
	console.log(`1111-server running on http://localhost:${port}`);
});
