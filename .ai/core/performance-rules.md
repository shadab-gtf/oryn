# Performance Governance

Target:
- Lighthouse 95-100
- low INP
- low TBT
- low CLS
- low memory usage

Mandatory:
- code splitting
- lazy hydration
- route chunking
- optimized images
- optimized fonts
- deferred interaction systems
- memoization where appropriate

LCP:
- prioritize hero assets
- preload hero typography
- avoid animation-blocked rendering
- preserve fast paint

Bundle Rules:
- minimize client JS
- avoid oversized dependencies
- tree-shake aggressively
- split heavy motion systems

Memory Rules:
- cleanup listeners
- cleanup observers
- cleanup timelines
- cleanup WebGL resources

Mobile Rules:
- reduce motion complexity
- reduce GPU pressure
- clamp DPR for WebGL
- reduce heavy effects

Image Rules:
- use responsive sizes
- prioritize hero images
- lazy load secondary assets

Scroll Rules:
- avoid heavy scroll calculations
- throttle expensive listeners