# Architecture Overview

> [!NOTE] This document describes the high-level system architecture of DZ-DevDirectory. Database schema details and API routes are documented separately.

---

## System Context (C4 Level 1)

```mermaid
C4Context
  title System Context — DZ-DevDirectory

  Person(dev, "Developer", "Algerian tech professional seeking to showcase skills & portfolio")
  Person(guest, "Guest", "Recruiter, startup founder, or project manager searching for talent")

  System(dzdd, "DZ-DevDirectory", "Localized professional networking directory for the Algerian tech ecosystem")

  System_Ext(imgbb, "imgBB", "External free image hosting service")

  Rel(dev, dzdd, "Registers, creates profile, manages portfolio", "HTTPS")
  Rel(guest, dzdd, "Searches & browses developers without account", "HTTPS")
  Rel(dzdd, imgbb, "Stores hosted image URLs", "HTTPS")
```

---

## Container Diagram (C4 Level 2)

```mermaid
C4Container
  title Container Diagram — DZ-DevDirectory

  Person(dev, "Developer", "Algerian tech professional")
  Person(guest, "Guest", "Recruiter / Project Manager")

  System_Boundary(dzdd, "DZ-DevDirectory") {
    Container(frontend, "Frontend SPA", "Next.js", "User interface for developers and guests")
    Container(api, "Backend API", "Node.js / Hono", "Handles auth, profiles, portfolio, search")
    Container(db, "Data Store", "TBD", "Persists user data, skills, portfolio, wilayas")
  }

  System_Ext(imgbb, "imgBB", "External image hosting")

  Rel(dev, frontend, "Interacts via browser", "HTTPS")
  Rel(guest, frontend, "Interacts via browser", "HTTPS")
  Rel(frontend, api, "API calls", "HTTPS")
  Rel(api, db, "Read/write data", "DB Protocol")
  Rel(frontend, imgbb, "Uploads images, receives URL", "HTTPS")
```

---

## Tech Stack Decision Matrix

| Layer            | Technology       | Rationale                                                                 |
|------------------|------------------|---------------------------------------------------------------------------|
| Frontend         | Next.js          | SSR/SSG, App Router, React ecosystem, TypeScript-first                    |
| Styling          | Tailwind CSS     | Utility-first, rapid UI development, small bundle                         |
| Backend          | Node.js / Hono   | Lightweight, fast, TypeScript-native, edge-ready                          |
| Auth             | Better Auth      | Built-in session management, CSRF, rate limiting, password hashing        |
| Database Adapter | TBD              | Will be decided later — Better Auth supports Drizzle, Prisma, Kysely, etc.|
| Image Hosting    | imgBB            | Free, no server-side binary storage, only URLs persisted                  |
| Language         | TypeScript       | End-to-end type safety across frontend and backend                        |

---

## High-Level Data Flow

```mermaid
flowchart TD
  subgraph GuestPath ["Guest (No Auth)"]
    G1[Land on Home] --> G2[Search / Filter]
    G2 --> G3[Browse Developer Cards]
    G3 --> G4[Click Contact Link]
    G4 --> G5[Redirect to dev's external channel]
  end

  subgraph DevPath ["Developer (Authenticated)"]
    D1[Register] --> D2[Better Auth Session Created]
    D2 --> D3{Profile Complete?}
    D3 -->|No| D4[Onboarding Form]
    D4 --> D3
    D3 -->|Yes| D5[Access Dashboard]
    D5 --> D6[Manage Profile]
    D5 --> D7[Create Portfolio Posts]
    D5 --> D8[Manage Skills]
  end

  subgraph ImageFlow ["Image Upload"]
    I1[User selects image] --> I2[Upload to imgBB via client]
    I2 --> I3[imgBB returns hosted URL]
    I3 --> I4[Store URL in DB]
  end
```

---

> [!IMPORTANT] The app has zero internal messaging, payment, or notification systems. All professional contact flows through the developer's verified external channels (GitHub, LinkedIn, Email, Portfolio).
