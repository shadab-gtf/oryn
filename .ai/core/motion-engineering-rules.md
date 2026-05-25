# Motion Engineering Standards

Motion must feel:
- cinematic
- physically smooth
- premium
- responsive
- low latency
- refined
- architectural

Mandatory:
- transform-only animations
- opacity-only transitions
- translate3d acceleration
- will-change optimization
- scoped gsap.context()
- ctx.revert() cleanup
- isolated timelines

Forbidden:
- width animation
- height animation
- top/left animation
- expensive blur animation
- unbounded RAF loops
- layout reads during animation writes
- unoptimized scroll systems

All scroll systems must:
- throttle observers
- minimize layout calculations
- avoid scroll jank
- minimize repaint pressure

Animation Lifecycle:
- initialize after mount
- cleanup on unmount
- isolate timelines per component
- cleanup observers
- cleanup listeners
- cleanup ScrollTriggers

Performance:
- maintain 60fps minimum
- degrade gracefully on mobile
- reduce GPU pressure
- avoid excessive compositing

Luxury motion philosophy:
- intentional pacing
- restrained transitions
- cinematic timing
- editorial movement
- physical smoothness