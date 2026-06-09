# 11:11

A web app to keep track of the dates Nicolas and Lau have had together. Each entry has a title, a date, a written account, and optionally photos or videos stored in Firebase Storage.

Built with React 19, TypeScript, Vite, TailwindCSS 4, and Radix UI. Deployed on Firebase Hosting.

## Running locally

```bash
nvm use
npm install
npm run dev
```

## Deploying

```bash
npm run build
firebase deploy
```

> Requires the Firebase CLI (`npm install -g firebase-tools`) and being logged in (`firebase login`).

## Tech stack

- **React 19** + **TypeScript**
- **Vite** (rolldown-vite)
- **TailwindCSS 4** — theme configured in `src/index.css`
- **Radix UI** — base for all UI components
- **React Router v6** — client-side routing
- **date-fns** — date formatting and distance calculations (Spanish locale)
- **Biome** — linter and formatter (see `biome.json`)
- **Firebase Hosting** — deployment target
- **Firebase Storage** — stores entry media (photos and videos)

## Project structure

```
src/
  entries.ts          # all date entries data
  App.tsx             # route definitions
  pages/
    welcome/          # animated intro screen
    home/             # full list + "on this day" highlights
    entry/            # single entry view
  components/ui/      # reusable UI components
  lib/                # utility functions
```
