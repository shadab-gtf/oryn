# ORYN Cinematic Page Experience Architecture

This document defines the page-by-page cinematic experience system for ORYN. It is written as an implementation guide for the next frontend pass: section structure, visual atmosphere, GSAP ScrollTrigger behavior, SVG masking, image choreography, typography reveals, pinned storytelling, footer reveals, page transitions, mobile adaptation, and production constraints.

The goal is not to make the website busier. The goal is to make every page feel directed, sequenced, and emotionally continuous.

## 1. Experience Philosophy

ORYN should feel like moving through a luxury architecture film:

- Each page is a scene.
- Each section is a room.
- Each scroll movement is a quiet camera move.
- Each transition preserves atmosphere instead of interrupting it.
- Each image reveal feels architectural, not decorative.

The experience must never rely on animation volume. Luxury comes from timing, absence, image discipline, typography restraint, and continuity.

Motion hierarchy:

1. Page transitions: GSAP controls cinematic fullscreen masks and route handoff.
2. Scroll storytelling: GSAP ScrollTrigger controls pinned sequences, image masks, and section timelines.
3. Local UI motion: Framer Motion controls lightweight reveal and interaction continuity.
4. Scroll feel: Lenis controls smooth momentum, never scroll-jacking.

Production rule: if an animation does not clarify hierarchy, deepen atmosphere, or support a transition, remove it.

## 2. Shared Motion System

### GSAP Responsibilities

Use GSAP only in isolated client components:

- Page transition overlay.
- ScrollTrigger storytelling sections.
- SVG mask timeline control.
- Fullscreen project gallery sequencing.
- Pinned image/copy chapters.
- Footer reveal choreography.

Implementation rules:

- Register `ScrollTrigger` inside client-only modules.
- Initialize timelines in `useLayoutEffect` or a safe isomorphic layout effect.
- Scope selectors with `gsap.context`.
- Kill timelines and ScrollTriggers on unmount.
- Do not create global ScrollTrigger timelines for the whole app.
- Use `ScrollTrigger.matchMedia` or custom viewport checks for mobile variants.

### Framer Motion Responsibilities

Use Framer Motion for:

- Text and UI reveal primitives.
- Button hover opacity or line movement.
- Mobile menu reveal.
- Lightweight route-mounted page content fade.
- Reduced-motion-friendly local transitions.

Avoid using Framer for heavy scroll choreography.

### Lenis Responsibilities

Use Lenis for:

- Calm scroll momentum.
- ScrollTrigger synchronization through `lenis.on("scroll", ScrollTrigger.update)`.
- RAF connection between GSAP ticker and Lenis where needed.

Rules:

- Never hijack scroll.
- No forced snap scrolling.
- No pinned section should exceed the emotional value it provides.

## 3. Timing Architecture

Global motion tokens:

```ts
export const motionTimings = {
  micro: 0.18,
  hover: 0.28,
  textReveal: 0.72,
  imageReveal: 1.05,
  sectionEnter: 1.2,
  pinnedChapter: 1.6,
  routeExit: 0.82,
  routeEntry: 0.92,
};

export const motionEases = {
  luxuryOut: "power4.out",
  luxuryInOut: "power3.inOut",
  quietOut: "power2.out",
};
```

ScrollTrigger defaults:

- Section start: `top 78%` for regular reveal.
- Cinematic section start: `top 70%`.
- Pinned start: `top top`.
- Pinned end: based on content, usually `+=120%` to `+=180%`, rarely more.
- Scrub: `0.8` to `1.4` for image/camera-like progress.
- Text reveals: timeline-based, not aggressive scrub.
- Image movement: subtle, usually scale `1.04 -> 1.0` or y `24px -> 0`.

## 4. Typography Reveal System

Typography should feel editorial and intelligent.

Headline reveal:

- Mask each line inside an overflow-hidden wrapper.
- Animate line y from `105%` to `0%`.
- Animate opacity `0 -> 1`.
- Stagger lines by `0.08` to `0.12`.
- Use one reveal per section, not every sentence.

Body reveal:

- Opacity `0 -> 1`.
- Y `16px -> 0`.
- Delay after headline by `0.12` to `0.2`.

Labels:

- Fade in before headline.
- Very small y movement only.

Strictly avoid:

- Letter-by-letter animation for core reading.
- Rotating text.
- Bouncing text.
- Long stagger chains.
- Text moving while the user is trying to read it.

## 5. Image Mask and SVG Transition System

Use SVG masks as an architectural reveal language.

Core mask types:

1. Vertical aperture mask: a quiet opening from center or top edge.
2. Plan-line mask: thin rectangular reveals inspired by architectural drawings.
3. Threshold mask: full image emerges as if passing through a doorway.
4. Detail crop mask: material details reveal in smaller framed areas.
5. Fullscreen atmosphere mask: page/project transitions use dark tonal layers.

SVG mask behavior:

- Mask rectangles animate scaleY or width.
- Keep masks simple: rects, linear gradients, clipPaths.
- Use `transformBox: "fill-box"` and `transformOrigin`.
- Avoid complex morphing paths.
- Use CSS/SVG masks for reveal; animate transforms, not layout.

Image reveal sequence:

1. Outer mask opens.
2. Image opacity rises from `0.72 -> 1`.
3. Image scale settles from `1.04 -> 1`.
4. Overlay gradient fades slightly.
5. Caption appears last.

Hover mask behavior:

- Showcase hover expands a restrained mask line or image crop by 3% to 5%.
- Never zoom beyond `scale(1.035)`.
- Text shifts should be 4px maximum.

## 6. Page Transition Choreography

Current route transition should evolve into a three-layer system:

1. Atmospheric layer: charcoal fullscreen overlay with subtle bronze radial tone.
2. Architectural line: thin center rule that draws and retracts.
3. Page content release: incoming page reveals after overlay begins to dissolve.

Exit:

- Triggered by `TransitionLink`.
- GSAP fades overlay in and gently raises atmosphere by `1%` to `2%`.
- Center rule draws left to right.
- Navigation occurs only after overlay is fully covering the viewport.

Entry:

- New page mounts behind overlay.
- Scroll position resets to top unless route-specific continuity is required.
- Rule retracts right to left.
- Overlay opacity dissolves.
- First page section begins reveal after overlay opacity drops below 0.55.

Showcase to project continuity:

- On project-card click, store selected project slug and image rect in session memory.
- Transition overlay uses the project's hero tone if available.
- Project page hero image begins slightly scaled (`1.03`) and settles to `1`.
- First project label appears after image stabilizes, not immediately.

Reduced motion:

- Replace overlay movement with a 180ms opacity crossfade.
- Keep route continuity but remove y movement and line drawing.

## 7. Home Page Architecture

### 7.1 Cinematic Hero

Visual direction:

- Fullscreen architectural image.
- Charcoal atmospheric overlay.
- ORYN navigation floats quietly above.
- Copy sits low and left, with enough room for image atmosphere.
- The next section should be hinted below the fold.

Emotional purpose:

- Establish confidence and silence.
- Make ORYN feel like an architectural film, not a homepage.

ScrollTrigger behavior:

- Start: page load after loader completion.
- Timeline:
  - Hero image scale `1.035 -> 1`.
  - Overlay opacity softens by 8% while scrolling first 40vh.
  - Headline lines reveal after loader handoff.
  - Supporting copy reveals after headline.
  - CTA appears last.
- Exit:
  - Hero copy fades to 0.35 opacity.
  - Image remains present until philosophy begins.

Image behavior:

- LCP image is static server-rendered.
- Client timeline only adjusts transform/opacity.
- No heavy parallax.

Typography:

- Hero max size: 5rem desktop.
- Line reveal with 0.1 stagger.
- Body copy no larger than calm lead scale.

Mobile:

- No hero parallax.
- Image height `100svh`.
- Copy sits lower but avoids bottom browser controls.
- CTA stack remains visible.

Transition continuity:

- Loader overlay dissolves into hero overlay.
- Hero should not animate before loader complete.

### 7.2 Spatial Philosophy

Visual direction:

- Mostly dark, text-led, editorial.
- Sparse composition with label offset left and headline/body on right.
- One thin bronze rule may stretch as the section enters.

Emotional purpose:

- Slow the pace.
- Define ORYN's worldview.

ScrollTrigger behavior:

- Start: `top 72%`.
- Label fades in.
- Bronze rule scales x from 0 to 1.
- Headline line mask reveals.
- Body fades in after a small pause.
- Exit: text holds, then dims to 0.5 as next visual section enters.

Image behavior:

- No primary image needed.
- If used later, one faint architectural plan texture can fade in at 8% opacity.

Mobile:

- No split offset.
- Section remains text-first.
- Rule becomes shorter and left-aligned.

### 7.3 Signature Residences

Visual direction:

- Curated project sequence, not a generic card grid.
- Desktop can use three editorial panels with varied vertical rhythm.
- First residence slightly larger or lower to create editorial movement.

Emotional purpose:

- Move from brand atmosphere into tangible properties.
- Make projects feel scarce and selected.

ScrollTrigger behavior:

- Start: `top 72%`.
- Section heading reveals.
- Cards reveal sequentially with 0.12 stagger.
- Each card image uses SVG aperture mask.
- As the section scrolls, each image subtly settles from `scale(1.04)` to `1`.

Hover:

- Image gently scales to `1.025`.
- Bronze rule grows.
- Status text fades from 45% to 75%.
- Cursor remains native; no gimmick cursor.

Exit:

- Cards do not fly away.
- Last card remains visible as Material Language begins.

Mobile:

- Convert to vertical editorial list.
- One image per viewport rhythm.
- Remove stagger if it delays reading.

Showcase-to-project transition:

- Clicking a project triggers page mask.
- Store project hero image metadata for project hero continuity.

### 7.4 Architectural Narrative

Visual direction:

- Introduce a more cinematic split between copy and a tall architectural interior.
- The section should feel like entering deeper into the system.

Emotional purpose:

- Explain ORYN's method without becoming a services section.

Pinned storytelling:

- This can be the homepage's first meaningful pin.
- Desktop only.
- Pin duration: `+=140%`.
- Left copy has three short chapters:
  - Context
  - Sequence
  - Detail
- Right image changes subtly through layered opacity, not hard swaps.

ScrollTrigger behavior:

- Pin at `top top`.
- Chapter 1 active from 0 to 33%.
- Chapter 2 active from 33% to 66%.
- Chapter 3 active from 66% to 100%.
- Image mask shifts per chapter.

Image behavior:

- Three layers stacked absolute.
- Crossfade opacity, scale `1.03 -> 1`.
- Use SVG mask on each incoming layer.

Mobile:

- No pin.
- Render chapters as stacked editorial blocks.
- Image appears once per chapter.

### 7.5 Material Language

Visual direction:

- Warm stone surface.
- Detail imagery, close crops, texture, joinery, shadow.
- More intimate than the previous sections.

Emotional purpose:

- Prove taste through material sensitivity.

ScrollTrigger behavior:

- Start: `top 75%`.
- Detail image mask opens slowly.
- Headline appears after image is partially revealed.
- Body copy fades in last.
- Optional small detail images drift 10px maximum while section passes.

Image behavior:

- Use smaller crops and one main detail image.
- Avoid decorative collage.

Mobile:

- Image first, text second.
- No layered detail motion.

### 7.6 Immersive Experience

Visual direction:

- Fullscreen dark section.
- One large project-like image or gallery preview.
- Minimal interface details, like a private preview module.

Emotional purpose:

- Show the platform's immersive capability.
- This is the strongest cinematic moment on the homepage.

Pinned storytelling:

- Desktop pin recommended.
- Pin duration: `+=160%`.
- Timeline:
  - Fullscreen image fades in.
  - Mask opens from a central architectural aperture.
  - Caption appears as a quiet overlay.
  - Secondary detail image appears inset.
  - UI frame line draws.
  - CTA appears only near the final 25%.

ScrollTrigger behavior:

- Scrub `1.1`.
- Avoid rapid state changes.
- Section should feel like a private screening.

Mobile:

- No pin.
- Use a single fullscreen-ish image with a simple fade.
- CTA visible without waiting through long scroll.

### 7.7 Global Presence

Visual direction:

- Light ivory field after the immersive dark section.
- City names as editorial anchors, not cards.
- Sparse grid with bronze region labels.

Emotional purpose:

- Establish global credibility and market range.

ScrollTrigger behavior:

- Background transitions from dark to ivory.
- City rows reveal in pairs.
- Each city has small y reveal and opacity.
- No heavy animation.

Image behavior:

- Optional atmospheric city strip can fade at top or bottom.
- Keep it muted; cities should not become travel marketing.

Mobile:

- Single-column city index.
- Reduced reveal timing.

### 7.8 Private Inquiry

Visual direction:

- Return to dark.
- Intimate centered copy.
- One discreet CTA.
- No aggressive conversion layout.

Emotional purpose:

- Close with discretion and invitation.

ScrollTrigger behavior:

- Section fades from ivory to void.
- Label appears first.
- Headline reveals as one calm block.
- Body and CTA follow.
- Footer begins to emerge from below as this section exits.

Mobile:

- Keep CTA above fold within the section.
- Avoid excessive vertical dead space.

### 7.9 Footer Reveal

Visual direction:

- Footer is the final scene, not a link dump.
- A dark cinematic closure with ORYN mark, short editorial copy, and restrained links.

ScrollTrigger behavior:

- Footer starts hidden behind final inquiry section.
- As inquiry exits, footer rises 48px and fades from 0 to 1.
- Background deepens from charcoal to void.
- ORYN mark appears after the rule draws.

Mobile:

- No rise animation beyond 16px.
- Links stack clearly.

## 8. Showcase Page Architecture

### 8.1 Showcase Intro

Visual direction:

- Dark editorial intro.
- Large but controlled heading.
- One short paragraph.

Emotional purpose:

- Frame the collection as curated and private.

ScrollTrigger:

- Page entry reveals label, headline, body.
- Background remains still.

### 8.2 Curated Project Index

Visual direction:

- Large editorial project rows on desktop.
- Alternating image/text rhythm.
- No uniform card grid.

Motion:

- Each row enters with image mask first, then market label, then title.
- Hover expands image mask subtly.
- Active row can dim other rows to 70% opacity on desktop.

ScrollTrigger:

- Row starts at `top 78%`.
- Image aperture opens.
- Text y `20 -> 0`.
- On exit, no dramatic movement; row remains stable.

Image continuity:

- Clicked row image metadata feeds project transition.
- Project page begins with related hero atmosphere.

Filtering:

- Filters should be minimal: market, typology, availability.
- Filter transitions use opacity and y only.
- Avoid animated rearrangement chaos.

Mobile:

- Single-column rows.
- Filters become horizontal scroll or compact disclosure.
- Hover states become tap-safe focus states.

### 8.3 Showcase Footer Inquiry

Visual direction:

- Short private collection inquiry.
- Dark-to-dark footer continuity.

Motion:

- CTA rule draws on viewport entry.
- Footer reveal follows.

## 9. Individual Project Experience Page

The project page should feel like a luxury architecture documentary.

### 9.1 Project Cinematic Intro

Visual direction:

- Fullscreen hero image.
- Market/status label.
- Project title.
- Short summary.
- Minimal metrics.

Motion:

- Page transition overlay dissolves into hero image.
- Hero image scale `1.03 -> 1`.
- Label appears after image stabilizes.
- Title line reveal.

ScrollTrigger:

- As user scrolls first 60vh, title opacity lowers slightly.
- Image remains atmospheric, not aggressively parallaxed.

Mobile:

- Summary remains readable.
- Metrics move below hero.

### 9.2 Architectural Orientation

Visual direction:

- Ivory section with three metrics and a narrative paragraph.
- Calm, fact-based, editorial.

Motion:

- Metrics reveal one by one.
- Paragraph fades in after metrics.

ScrollTrigger:

- Start `top 76%`.
- No pin.

### 9.3 Spatial Sequence

Visual direction:

- Pinned chapter sequence.
- Left: chapter copy.
- Right: image layers or plan/detail stack.

Pinned storytelling:

- Desktop pin duration: `+=180%`.
- Chapters:
  - Arrival
  - Threshold
  - Living
  - Detail
- Each chapter controls image layer opacity and mask.

ScrollTrigger:

- Pin entire section.
- Timeline progress maps to chapter active states.
- Use one ScrollTrigger timeline, not one trigger per micro element.

Mobile:

- Convert chapters to linear blocks.
- Images load lazily.
- No pin.

### 9.4 Material Storytelling

Visual direction:

- Detail image sequence: stone, timber, bronze, water, glass.
- Captions are sparse.

Motion:

- Images reveal through small architectural masks.
- Captions fade in after each mask.

ScrollTrigger:

- Staggered reveals as details enter viewport.
- No scrub needed unless using a single horizontal detail strip.

### 9.5 Immersive Gallery

Visual direction:

- Fullscreen gallery module.
- Dark UI, minimal controls.
- Image-first experience.

Motion:

- Current image dissolves out.
- Next image reveals with mask and small scale settle.
- Controls fade, never slide aggressively.

ScrollTrigger:

- Gallery intro can pin briefly `+=100%`.
- After that, user controls gallery manually.

Performance:

- Preload current and next image only.
- Keep gallery as a dynamic client island.

### 9.6 Lifestyle Narrative

Visual direction:

- Not lifestyle marketing.
- Human scale, private rhythm, arrival, evening, light.

Motion:

- Two-column editorial layout.
- Image fades in before text.

### 9.7 Inquiry Transition

Visual direction:

- Dark final chapter.
- Private preview CTA.

Motion:

- CTA appears after a thin rule draws.
- Footer reveal begins after CTA section.

Page transition continuity:

- Inquiry button uses same overlay but shortened exit.
- Project slug can prefill inquiry context.

## 10. Philosophy Page Architecture

### 10.1 Manifesto Intro

Visual direction:

- Minimal dark editorial page.
- Strong headline, short copy, lots of silence.

Motion:

- Slow typography line reveal.
- No image required at top.

ScrollTrigger:

- Intro stays calm; no pin.

### 10.2 Principles as Architectural Rooms

Sections:

- Restraint
- Structure
- Atmosphere
- Performance
- Discretion

Visual direction:

- Each principle is a full-width editorial band.
- Alternating dark/ivory tones only where meaningful.

Motion:

- One thin rule draws per principle.
- Headline reveals.
- Body fades in.

ScrollTrigger:

- Start each principle at `top 74%`.
- Previous principle dims as next emerges.

### 10.3 Quiet Technical Confidence

Visual direction:

- Explain performance, CMS readiness, and motion restraint without sounding like SaaS.

Motion:

- Very limited.
- Use reveal only.

### 10.4 Philosophy Footer Reveal

Footer should emerge slowly from the manifesto close, like end credits.

## 11. Journal Page Architecture

### 11.1 Editorial Masthead

Visual direction:

- Ivory publication-like introduction.
- Journal should feel like a luxury architecture publication.

Motion:

- Masthead label and headline reveal.
- No overdone hero image.

### 11.2 Featured Essay

Visual direction:

- One large featured article with strong image and editorial intro.

ScrollTrigger:

- Image mask opens at `top 72%`.
- Title reveals after image.
- Excerpt fades in.

### 11.3 Article Index

Visual direction:

- Editorial rows or quiet two-column article list.
- Avoid generic blog cards.

Hover:

- Article title shifts color slightly.
- Tiny rule expands.
- Optional thumbnail reveals on desktop only.

ScrollTrigger:

- Rows reveal progressively.
- Stagger no more than 0.06.

Mobile:

- No hover previews.
- Large readable article rows.

## 12. Private Inquiry Page Architecture

### 12.1 Discreet Intro

Visual direction:

- Dark, intimate, low-noise.
- Copy feels like a private invitation.

Motion:

- Headline line reveal.
- Body fades.
- Form appears after intro.

### 12.2 Cinematic Form

Visual direction:

- No boxed corporate form.
- Inputs as quiet architectural lines.
- Labels small and precise.

Input interaction:

- Focus line shifts to bronze.
- Label opacity increases.
- No bouncing validation.
- Success state reads as a calm confirmation.

ScrollTrigger:

- Form fields reveal in two soft groups.
- No pin.

Background motion:

- Optional 6% opacity architectural gradient.
- No animated particles or moving blobs.

Mobile:

- Single-column fields.
- Submit CTA remains clear.
- Avoid fixed submit bars unless necessary.

### 12.3 Inquiry Closure and Footer

Visual direction:

- Footer feels like a private end note.

Motion:

- After form, footer fades in with a rule draw.

## 13. Mobile Cinematic Adaptation

Mobile rules:

- Remove desktop pinned sequences.
- Convert pins into stacked chapters.
- Reduce SVG masks to simple vertical aperture or opacity reveal.
- Reduce image layers to one active image at a time.
- No scrubbed text movement.
- Keep reveal durations 20% shorter.
- Keep y movement below 16px.
- Disable hover-only image previews.
- Preserve large whitespace, but avoid empty scroll fatigue.

Mobile ScrollTrigger:

- Use `ScrollTrigger.matchMedia`.
- Initialize only necessary triggers.
- Kill desktop triggers on breakpoint changes.
- Avoid more than one active scrub timeline.

Mobile image rules:

- Serve smaller image sizes.
- Do not pin large full-bleed images on low-power devices.
- Avoid fixed backgrounds on mobile Safari.

## 14. Performance-Safe Motion Engineering

Animation properties:

- Preferred: `opacity`, `transform`, `clipPath` when simple.
- SVG: animate mask rect transforms.
- Avoid: width, height, top, left, filter blur, box-shadow animation.

ScrollTrigger optimization:

- Batch simple reveal triggers with `ScrollTrigger.batch`.
- Use one timeline per complex section.
- Set `invalidateOnRefresh: true` for responsive layouts.
- Call `ScrollTrigger.refresh()` after critical images load if layout depends on them.
- Avoid nested pinned sections.
- Avoid pinning inside transformed parents.

Cleanup:

- Use `gsap.context`.
- Kill timeline on unmount.
- Kill ScrollTriggers created inside component.
- Remove event listeners.
- Clear `will-change` after animation completes.

Image performance:

- Use `next/image`.
- Reserve dimensions/aspect ratios.
- Prioritize only first hero image.
- Lazy load below-fold images.
- Preload next gallery image only.

Reduced motion:

- Keep opacity fades.
- Remove scrubbed transforms.
- Remove pins.
- Remove mask travel.
- Preserve page atmosphere through simple tonal fades.

## 15. Production Implementation Sequence

1. Build shared `useGsapContext` utility.
2. Add ScrollTrigger registration in a tiny client module.
3. Implement text line mask primitive.
4. Implement SVG image mask primitive.
5. Upgrade homepage hero and philosophy ScrollTriggers.
6. Build Signature Residences mask and hover system.
7. Build one desktop pinned section: Architectural Narrative.
8. Build project page pinned Spatial Sequence.
9. Add footer reveal timeline.
10. Add mobile matchMedia fallbacks.
11. Profile on production build.
12. Remove any animation that reduces clarity or frame stability.

## 16. Final Continuity Principle

ORYN should never feel like stacked animated sections. It should feel like a composed spatial sequence:

- Hero creates atmosphere.
- Philosophy slows attention.
- Residences give proof.
- Narrative explains method.
- Material creates intimacy.
- Immersive sections deepen emotion.
- Inquiry closes quietly.
- Footer resolves the film.

The user should not remember the animations. They should remember the feeling of architectural calm, visual intelligence, and private confidence.
