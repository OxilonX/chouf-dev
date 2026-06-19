# Folder Structure

> [!NOTE] This structure is designed to be extensible. Additional directories for contexts, shared modules, or other concerns can be added at any level.

---

## Monorepo Root

```
dz-devdirectory/
├── frontend/          # Next.js SPA
├── backend/           # Node.js / Hono API
├── docs/              # Obsidian vault documentation
├── AGENTS.md          # AI agent instructions
├── .gitignore
├── README.md
└── package.json       # Workspace-level scripts (optional)
```

---

## Frontend (`frontend/`)

```
frontend/
├── public/                  # Static assets (favicon, og-image, etc.)
│
├── src/
│   ├── app/                 # Next.js App Router pages
│   │   ├── layout.tsx       # Root layout
│   │   ├── page.tsx         # Home / landing page
│   │   ├── auth/
│   │   │   ├── sign-in/
│   │   │   │   └── page.tsx
│   │   │   ├── sign-up/
│   │   │   │   └── page.tsx
│   │   │   └── onboarding/
│   │   │       └── page.tsx
│   │   ├── developers/      # Guest-facing search & profiles
│   │   │   ├── page.tsx     # Search results
│   │   │   └── [id]/
│   │   │       └── page.tsx # Developer detail
│   │   └── dashboard/       # Authenticated developer area
│   │       ├── page.tsx
│   │       ├── profile/
│   │       │   └── page.tsx
│   │       └── portfolio/
│   │           ├── page.tsx
│   │           └── [postId]/
│   │               └── page.tsx
│   │
│   ├── components/          # Reusable UI components
│   │   ├── ui/              # Primitives (Button, Input, Card, Modal)
│   │   ├── layout/          # Header, Footer, Sidebar
│   │   ├── profile/         # Profile-specific components
│   │   ├── portfolio/       # Portfolio-specific components
│   │   └── search/          # Search & filter components
│   │
│   ├── lib/                 # Client-side utilities
│   │   ├── auth-client.ts   # Better Auth client config
│   │   ├── api.ts           # API client (fetch wrapper)
│   │   ├── imgbb.ts         # imgBB upload helper
│   │   └── debounce.ts      # Search debounce utility
│   │
│   ├── types/               # TypeScript type definitions
│   │   ├── user.ts
│   │   ├── portfolio.ts
│   │   ├── skill.ts
│   │   └── search.ts
│   │
│   └── styles/
│       └── globals.css      # Tailwind imports + custom styles
│
├── .env.local               # Client-safe env vars (NEXT_PUBLIC_*)
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Backend (`backend/`)

```
backend/
├── src/
│   ├── index.ts             # Entry point — Hono app bootstrap
│   │
│   ├── routes/              # Route handlers
│   │   ├── auth.ts          # Better Auth route mounting
│   │   ├── developers.ts    # Guest search & developer lookup
│   │   ├── profile.ts       # Authenticated profile CRUD
│   │   ├── portfolio.ts     # Portfolio post CRUD
│   │   └── skills.ts        # Skill tag listing
│   │
│   ├── middleware/           # Custom middleware
│   │   ├── auth.ts          # Better Auth session middleware
│   │   ├── onboarding-gate.ts # Profile completeness check
│   │   └── rate-limit.ts    # Rate limiter config
│   │
│   ├── lib/                 # Server-side utilities
│   │   ├── auth-server.ts   # Better Auth server config
│   │   ├── db.ts            # Database adapter client
│   │   └── validators.ts    # Input validation schemas
│   │
│   ├── data/                # Static data & seed files
│   │   ├── wilayas.ts       # 58 Algerian Wilayas list
│   │   └── default-skills.ts # Predefined skill tags
│   │
│   └── types/               # TypeScript type definitions
│       ├── user.ts
│       ├── portfolio.ts
│       └── skill.ts
│
├── .env                     # Server-side env vars
├── tsconfig.json
└── package.json
```

---

## Documentation (`docs/`)

```
docs/
├── Architecture Overview.md
├── Authentication & Security.md
├── Feature Specification.md
├── Search & Discovery.md
├── Folder Structure.md
└── Database Schema.md       (to be added later)
```

---

> [!NOTE] This structure follows a **layered architecture** on the backend and a **feature-based route structure** on the frontend. Add context folders, shared modules, or additional infrastructure folders as your project grows.
