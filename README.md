# 11:11

A web app to keep track of the dates Nicolas and Lau have had together. Each entry has a title, a date, a written account, photos or videos, and comments from both partners.

Built with React 19, TypeScript, Vite, TailwindCSS 4, and Radix UI. Backend is a Node.js server (Hono) running as a Firebase Function. Data lives in Firestore. Media in Firebase Storage.

## Monorepo structure

```
packages/
  shared/       # shared TypeScript types used by both web and server
  1111-web/     # React frontend
  1111-server/  # Node.js backend (Hono + Firebase Admin)
```

---

## First-time setup

### 1. Install dependencies

```bash
nvm use
npm install
```

### 2. Set up the frontend env files

The frontend uses two Firebase projects — one for dev, one for prod.
Both files are already committed with the real values (Firebase client config is not secret).

- `packages/1111-web/.env.development` — used by `npm run dev:web`
- `packages/1111-web/.env.production` — used by `npm run build:web`

No action needed unless you change the Firebase projects.

### 3. Set up the server env files

The server env files contain credentials and are **gitignored** — you must create them manually.

**`packages/1111-server/.env.development`**
```
GOOGLE_APPLICATION_CREDENTIALS=./serviceAccountKey.development.json
PORT=3001
CORS_ORIGIN=http://localhost:5173
```

**`packages/1111-server/.env.production`**
```
GOOGLE_APPLICATION_CREDENTIALS=./serviceAccountKey.production.json
PORT=3001
CORS_ORIGIN=http://localhost:5173
```

### 4. Set up the service account keys

The server needs a Firebase service account key to access Firestore and Storage.
These files are **gitignored** and must never be committed.

For each Firebase project:
1. Go to Firebase Console → Project Settings → Service accounts
2. Click **Generate new private key**
3. Save the downloaded JSON as:
   - `packages/1111-server/serviceAccountKey.development.json` (for `dev-1ef0d`)
   - `packages/1111-server/serviceAccountKey.production.json` (for `onceonce-11413`)

---

## Running locally

```bash
# Run both frontend and server together
npm run dev

# Or run them separately
npm run dev:web     # frontend only  → http://localhost:5173
npm run dev:server  # server only    → http://localhost:3001
```

To run the server against the **production** Firebase project (e.g. for the migration wizard):

```bash
npm run dev:prod    # runs server with .env.production
```

---

## Building and deploying

```bash
# Build the frontend
npm run build:web

# Deploy frontend to Firebase Hosting
firebase deploy --only hosting

# Deploy server as a Firebase Function
firebase deploy --only functions
```

> Requires the Firebase CLI (`npm install -g firebase-tools`) and being logged in (`firebase login`).

---

## Tech stack

- **React 19** + **TypeScript**
- **Vite** (rolldown-vite) — frontend bundler
- **TailwindCSS 4** — theme configured in `packages/1111-web/src/index.css`
- **Radix UI** — base for all UI components
- **React Router v6** — client-side routing
- **date-fns** — date formatting (Spanish locale)
- **Firebase Auth** — Google and Microsoft sign-in
- **Firebase Firestore** — entry and user data
- **Firebase Storage** — photos and videos
- **Firebase Hosting** — frontend deployment
- **Firebase Functions** — backend deployment
- **Hono** — lightweight Node.js HTTP framework
- **Biome** — linter and formatter

---

## Project structure

```
packages/
  shared/
    src/index.ts          # Entry, Comment, MediaItem, Couple, AppUser types

  1111-web/
    src/
      entries.ts          # legacy hardcoded data (used only by migration wizard)
      App.tsx             # route definitions
      lib/
        firebase.ts       # Firebase client SDK init
        api.ts            # typed API client
      contexts/
        AuthContext.tsx   # auth state + user profile (coupleId)
      hooks/
        useEntries.ts     # fetch all entries
        useEntry.ts       # fetch single entry
      pages/
        welcome/          # animated intro screen
        home/             # full list + "on this day" highlights
        entry/            # single entry view
        create-entry/     # form to add a new entry
        migrate/          # one-time wizard to migrate hardcoded entries to Firestore
      components/ui/      # reusable UI components

  1111-server/
    src/
      index.ts            # server entry point
      app.ts              # Hono app + middleware
      routes/
        entries.ts        # entry CRUD + comments + media endpoints
      middleware/
        auth.ts           # Firebase ID token verification
      lib/
        firebase.ts       # Firebase Admin SDK init
        cache.ts          # in-memory TTL cache
```
