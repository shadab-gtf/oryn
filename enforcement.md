# Enterprise Frontend Compiler Enforcement
- handles mapping
- handles caching
- handles retries
- handles revalidation

feature.types.ts
- strict contracts only
- no implicit any
- separate API models from UI models
- separate DTOs

feature.data.ts
- fallback data only
- CMS-ready shape
- future API compatibility

feature-orchestrator.tsx
- client boundary
- manages state
- manages interaction lifecycle
- manages loading transitions
- manages animation coordination
- manages optimistic updates

feature-primitive.tsx
- presentation only
- no business logic
- no data fetching
- no orchestration
- no side effects

use-feature-motion.ts
- GSAP isolation layer
- cleanup mandatory
- scoped contexts mandatory
- animation lifecycle only

Mandatory rendering behavior:

- stable SSR structure
- deterministic hydration
- predictable rendering
- no client/server divergence

Forbidden:

- giant monolithic files
- inline fetch calls
- layout animations
- hydration-risk rendering
- untyped systems
- duplicated business logic
- client page.tsx
- render-loop allocations
- browser APIs during SSR

All systems must:
- scale horizontally
- remain CMS-ready
- remain API-ready
- remain motion-safe
- remain mobile-safe
- remain Lighthouse-safe