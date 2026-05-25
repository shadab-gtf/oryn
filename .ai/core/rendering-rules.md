# Rendering Governance

Mandatory:

- deterministic HTML
- SSR-safe rendering
- stable DOM structure
- predictable hydration
- isolated client boundaries
- progressive enhancement

All dynamic boundaries must:
- preserve SSR consistency
- avoid client/server divergence
- defer browser APIs until mounted

Use:
- server components by default
- dynamic imports where appropriate
- suspense-safe rendering
- deterministic rendering pipelines

Hydration Rules:
- never conditionally render based on window during SSR
- never mutate structure during hydration
- never generate random SSR values
- never use timestamps during SSR rendering

CLS Prevention:
- reserve layout dimensions
- use aspect-ratio containers
- avoid dynamic reflow animations
- preload structural assets

LCP Rules:
- prioritize hero images
- prioritize hero typography
- avoid hidden LCP content
- avoid delayed LCP rendering

Rendering hierarchy:
Server Component → Client Boundary → Motion Layer → Presentation Layer

Performance constraints:
- minimize client JavaScript
- minimize hydration cost
- minimize blocking resources

Responsive rendering:
- preserve layout consistency
- avoid hydration divergence between breakpoints