# Next.js RSC Governance

Default:
- server components first

Client components only for:
- interaction
- animation
- browser APIs
- local state

Forbidden:
- use client page.tsx
- browser APIs during SSR
- client-heavy root trees
- unnecessary client rendering

Data Rules:
- fetch on server where possible
- isolate client boundaries
- preserve SSR stability

Suspense:
- isolate loading boundaries
- avoid waterfall rendering
- preserve predictable loading behavior

Architecture:
Server Components → Client Orchestrators → Presentation Components