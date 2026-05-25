# Hydration Protection

Never:
- use random SSR output
- use Date.now() during SSR
- use browser APIs during SSR
- mutate DOM structure during hydration
- create responsive divergence during hydration

Mandatory:
- deterministic server output
- stable client hydration
- stable node structure
- isolated client boundaries

All client-only rendering:
- deferred after mount
- isolated behind client boundaries
- hydration-safe

Dynamic systems:
- must preserve DOM stability
- must preserve consistent HTML

Window/document usage:
- wrapped inside mounted checks
- executed after client mount only

Hydration warnings:
- suppress locally only
- never suppress globally