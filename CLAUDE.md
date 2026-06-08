# 11:11 - Project Context

A romantic web app made by Nicolas for his girlfriend Lau. It presents a timeline of all their dates ("citas") with pictures, videos, and personal notes. Built as a surprise gift for November 11, 2025 while Nicolas was in Buenos Aires.

## Project Identity

- **App name in UI**: "11:11 🦔"
- **Package name**: `26`
- **Firebase project**: `onceonce-11413`
- **Firebase Storage bucket**: `onceonce-11413.firebasestorage.app`
- **Media path in Storage**: `entries-media/`
- **Deployed via**: Firebase Hosting (`dist/` folder, SPA rewrite)

## Tech Stack

- **Framework**: React 19 + TypeScript + Vite (using `rolldown-vite@7.1.14`)
- **Styling**: TailwindCSS 4, `tw-animate-css`, custom theme via `src/index.css`
- **UI components**: Radix UI primitives, shadcn-style components in `src/components/ui/`
- **Theme base**: tweakcn.com — pink/rose tones with oklch color variables, light + dark mode
- **Fonts**: Poppins (light sans), Quicksand (dark sans), Playfair Display (serif), Space Mono (mono)
- **Routing**: React Router v6 (`BrowserRouter`)
- **Dates**: `date-fns` with Spanish locale (`es`)
- **Animations**: GSAP, `motion`, custom `TypingText` component
- **Toasts**: `sonner`
- **Linter/Formatter**: **Biome** (`biome.json`) — tabs, double quotes, sorted classes enforced. ESLint config also exists but Biome is primary.
- **Path alias**: `@/` -> `src/`

## Data Model

```ts
type Entry = {
  n: number;          // auto-assigned index (1-based)
  title: string;
  date: string;       // ISO date string
  content: string[];  // array of paragraphs; emoji "💬" prefix = Nicolas's commentary
  media: Array<{
    owner: "Nicolas" | "Lau";
    src: string;      // Firebase Storage URL
    type: "image" | "video";
  }>;
};
```

Currently all entries are hardcoded in `src/entries.ts` (~2437 lines, ~100+ entries). `ENTRIES` is exported as a sorted array with `n` assigned by index.

## Routes

| Path | Component | Notes |
|------|-----------|-------|
| `/welcome` | `WelcomePage` | Typewriter intro, sets `has-visited-the-welcome-page` in localStorage |
| `/home` | `HomePage` | Lists all entries + "on this day" key tiles |
| `/entry/:id` | `EntryPage` | Single entry card, prev/next navigation; `:id` = entry `n` |
| `/dev-tools` | `DevToolsPage` | Clears localStorage cache |
| `*` | redirect | -> `/home` or `/welcome` based on localStorage flag |

## Key Files

```
src/
  entries.ts              # all hardcoded entry data + Entry type
  App.tsx                 # router setup
  main.tsx                # React root + BrowserRouter + Toaster
  index.css               # all CSS variables (theme + dark mode)
  lib/
    entries-utils.ts      # getEntriesThatHappenedYearsAgo / NMonthsAgo
    tailwind-utils.ts     # cn() helper (clsx + twMerge)
  pages/
    welcome/              # WelcomePage + welcome-sentences.ts
    home/                 # HomePage (key tiles + full list)
    entry/                # EntryPage
    dev-tools/            # DevToolsPage
  components/ui/
    entry-card/           # EntryCard — full entry view with typewriter + media
    entry-tile/           # EntryTile — compact list row
    key-entry-tile/       # KeyEntryTile — "on this day" highlight tile
    loadable-image/       # LoadableImage — lazy image with loading state
    shadcn-io/
      image-zoom/         # ImageZoom wrapper (react-medium-image-zoom)
      typing-text/        # TypingText typewriter component
    button.tsx            # Button (Radix Slot + CVA)
    sonner.tsx            # Toaster wrapper
firebase.json             # Hosting config (public: dist, SPA rewrite)
.firebaserc               # project: onceonce-11413
biome.json                # linter config
vite.config.ts            # plugins: react, tailwindcss; alias @/ -> src/
```

## The Roadmap (what comes next)

The app is being evolved from a static hardcoded app into a real multi-user app:

1. **Firebase Firestore** — migrate entries from `src/entries.ts` into a Firestore collection
2. **Firebase Auth** — add authentication (email/password or Google)
3. **User model** — two users: Nicolas + Lau, linked to their Firebase UID
4. **Add entries through the app** — form UI for either user to create new date entries (title, date, content paragraphs, media upload to Firebase Storage)
5. **Keep `owner` concept on media** — media items are tagged to Nicolas or Lau

## Conventions

- Tabs for indentation (Biome enforces)
- Double quotes for JS strings (Biome enforces)
- Sorted Tailwind classes (Biome enforces — `useSortedClasses: error`)
- Imports organized automatically by Biome assist
- Components export from `index.ts` barrel files
- Spanish-language UI (the app is for a Colombian couple)
- `biome-ignore` comments used sparingly with reasons
- No Firebase SDK in the project yet — needs to be installed (`firebase` npm package)
