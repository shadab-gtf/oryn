# ORYN Animated SVG Logo System

The ORYN identity is an architectural signature: quiet, geometric, editorial, and built for cinematic digital environments.

## Wordmark Direction

The wordmark uses a custom SVG line construction rather than live text. Each letter is reduced to essential architectural strokes:

- O: framed spatial aperture.
- R: structural upright with a controlled diagonal.
- Y: converging threshold lines.
- N: single continuous directional movement.

The spacing is intentionally wide. The wordmark should feel like a title card in an architectural film, not a startup logo.

## Monogram System

The monogram is a nested square aperture. It is not a building icon, roofline, or literal real estate symbol. It represents:

- spatial framing
- private thresholds
- architectural order
- controlled negative space

The mark works independently for favicons, loading states, mobile UI, and restrained brand moments.

## SVG Structure

Implementation files:

- [OrynLogo.tsx](C:/oryn/components/brand/OrynLogo.tsx)
- [AnimatedOrynLogo.tsx](C:/oryn/components/brand/AnimatedOrynLogo.tsx)

Structure:

```txt
svg.oryn-logo
  g.oryn-logo-mark
    path.oryn-logo-path
  g.oryn-logo-wordmark
    path.oryn-logo-path
```

All visible logo geometry uses `currentColor`, so color is controlled by the surface context. Paths use `vectorEffect="non-scaling-stroke"` to preserve crispness across sizes.

## GSAP Reveal

The animated loader logo uses GSAP to reveal each path through stroke dash animation:

1. Paths are measured with `getTotalLength`.
2. `strokeDasharray` and `strokeDashoffset` are set to the measured length.
3. GSAP animates `strokeDashoffset` to `0`.
4. The atmospheric rule fades in first, then settles back.

Timing:

- Atmosphere rule: 0.9s
- Path reveal: 1.35s
- Path stagger: 0.055s
- Ease: `power4.out`

The reveal should feel like a drawn architectural signature, not a tech logo animation.

## Loader Integration

The loader uses the animated SVG as the emotional first impression:

- dark architectural field
- muted bronze rule
- line-based SVG reveal
- no spinning, bouncing, or scaling gimmicks

Major page animations should still wait for loader completion through the existing `MotionGate`.

## Interaction Behavior

Header and footer logos use the static SVG:

- hover changes color only
- no scale bounce
- no rotation
- no decorative animation

The logo should feel stable and confident in navigation.

## Responsive Behavior

Recommended sizes:

- Header: 112px to 128px wide
- Footer: 144px wide
- Loader: 224px to 288px wide
- Mark-only uses `variant="mark"` with a square viewport

The SVG remains crisp on retina and ultra-wide displays because the geometry is stroke-based and scalable.

## Color System

Use:

- dark surface: warm ivory logo
- hover/accent: muted bronze
- light editorial surface: deep charcoal
- transition/loader: ivory with bronze atmospheric rule

Avoid fake metallic gradients. Luxury comes from proportion and restraint, not simulated gold.

## Performance Rules

- Keep SVG paths simple.
- Animate stroke dash and opacity only.
- Do not animate layout.
- Keep the logo DOM small.
- Use GSAP context cleanup.
- Respect reduced motion by showing the completed logo immediately.

The final effect should read as: a globally elite architectural signature emerging with calm precision.
