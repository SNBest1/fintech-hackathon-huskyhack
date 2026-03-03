# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start Vite dev server on port 3000 (opens browser automatically)
npm run build      # Production build to /build directory
npm run deploy     # Build and deploy to GitHub Pages (via gh-pages)
```

There is no test suite. The project has no linting scripts configured in package.json.

**Backend server** (optional, for AI insights):
```bash
node src/server/index.js   # Express server on port 4000, requires OPENAI_API_KEY env var
```

**Docker:**
```bash
docker-compose up -d       # Build and serve on http://localhost:8080
```

## Architecture

React 18 + TypeScript SPA built with Vite. The entire UI is a mobile phone mockup (400px wide frame) simulating a fintech app for "Sound Credit Union."

**State management**: All state lives in `src/App.tsx` via `useState`. No external state library. `App.tsx` controls:
- Authentication gate (renders `<SignIn>` until user authenticates)
- Active tab (`nudge` | `savings` | `more`)
- Selected deal (null or a deal object → shows `<FullPageDeal>`)
- Category filter for deals

**Navigation**: Tab-based (no router). The active tab prop determines which component renders inside the mobile frame. Bottom nav is rendered inline in `App.tsx`.

**Data**: All deal/savings/category data is hardcoded as arrays/objects directly in the components that use them — no API calls for content, no global data store.

**UI components**: `src/components/ui/` contains ~30 shadcn/ui components (Radix UI primitives + Tailwind). Import these before creating new UI primitives.

**Styling**: Tailwind CSS. Dark blue `#0A1F44` + teal `#7DD3C0` color theme. Mobile frame is fixed 400px width.

**Backend** (`src/server/index.js`): Single Express endpoint `GET /api/savings/analysis` that calls OpenAI `gpt-4o-mini` with hardcoded mock savings data and returns `{ totalSaved, changePercent, timeline, insight }`.

**Build output**: Vite outputs to `/build` (not the default `/dist`). The base path is `/fintech-hackathon-huskyhack/` for GitHub Pages deployment.

**Alias**: Use `@/` to import from `src/` (e.g., `@/components/ui/button`).
