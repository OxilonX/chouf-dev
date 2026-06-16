App Idea & Description:
DZ-DevDirectory is an open-source, localized full-stack professional networking directory built specifically for the Algerian tech ecosystem. The platform acts as a talent index where Algerian software engineers, UI/UX designers, and tech professionals can showcase their skills, map out their expertise using dynamic tags, and maintain a visually driven digital portfolio of their work.

The core engineering philosophy centers on frictionless peer-to-peer networking. It completely omits internal payment gateways, bidding mechanics, or transaction systems to avoid complex financial overhead and regulatory compliance issues. Instead, it functions purely as an open search directory. Recruiters, local startups, and project managers ("Guests") can instantly discover engineering talent across all 58 Algerian Wilayas and initiate professional contact directly via the developer’s verified external communication channels.

Platform Features:

1. Authentication & Security Guardrails: Secure email/password auth managed on local-first database adapters to prioritize data sovereignty. Includes an onboarding gate forcing users to complete profile details before publishing.
2. Skill Matrix & Profile Engine: Dynamic Many-to-Many tagging system for tech capabilities (e.g., TypeScript, Next.js). Structured regional lookup covering all 58 Algerian Wilayas. Direct hooks to external socials (GitHub, LinkedIn, Portfolio, and Business Email).
3. Assetless Portfolio Showcase: Users can create a portfolio inside their profile. You cannot in the app deploy any PDF files; instead, you can deploy only project posts that have text descriptions and images (optional). Images are hosted externally using imgBB as a free image deployment service (only URLs are saved locally). The creation date for any portfolio post is automatically filled and locked by the system at the millisecond of deployment.
4. Guest Discovery & Multi-Criteria Search: Guests and recruiters can search and contact developers openly without an account. Includes a concurrent multi-filter matching system (Name, Wilaya, and multiple Skill Tags simultaneously) paired with an intelligent network debounce to limit backend database strain.

---

Act as a Senior Software Architect. I am going to give you my app description and feature list.

Your task is to generate complete, production-grade documentation formatted specifically for an Obsidian Vault (.md files).

Strictly follow these formatting rules:

1. Use markdown tables for all structured data (like API routing, folder structures, or feature matrixes).
2. Use Obsidian Callouts (> [!NOTE], > [!IMPORTANT], > [!WARNING]) to highlight architectural constraints or security details.
3. Use Mermaid.js syntax inside standard ```mermaid code blocks to draw visual schemas (like Database relations or Data flow).
4. Provide the output inside clean, separate code blocks so I can easily click "Copy" and paste them into separate .md files in my Obsidian vault.
