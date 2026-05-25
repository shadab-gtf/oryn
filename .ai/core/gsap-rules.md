# GSAP Governance

Mandatory:
- gsap.context()
- ctx.revert()
- scoped selectors
- transform-only animation
- timeline cleanup
- isolated motion systems

Forbidden:
- global selectors
- orphan timelines
- unmanaged ScrollTriggers
- layout thrashing
- excessive scrub calculations
- nested pinning abuse

ScrollTrigger:
- cleanup mandatory
- throttle expensive calculations
- avoid nested pinning abuse
- preserve smooth scrolling

Performance:
- reduce simultaneous timelines
- avoid oversized scrub ranges
- minimize repaint areas
- minimize DOM mutation

Motion architecture:
- one motion controller per feature
- isolated animation lifecycle