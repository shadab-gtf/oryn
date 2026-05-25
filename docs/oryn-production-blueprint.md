# ORYN Production Blueprint

ORYN is a cinematic architectural digital experience platform for luxury real estate, designed for ultra-high-net-worth audiences, developers, architects, hospitality groups, and design-conscious investors across Dubai, Jeddah, Monaco, London, Shanghai, New York, Berlin, and Los Angeles.

This blueprint is the execution contract for design, engineering, content, SEO, motion, media, and long-term scale. It favors server-rendered clarity, restrained motion, editorial composition, and premium performance over spectacle.

## 1. Brand Philosophy

ORYN should feel like an architectural film that happens to be delivered through the web. The product is not a listing portal, not an agency template, and not a dashboard. It is a spatial storytelling system for residences, developments, and architectural destinations.

Core brand qualities:

- Quiet confidence: fewer elements, stronger intent.
- Architectural intelligence: every layout decision should feel structural.
- Cinematic calm: movement supports atmosphere, not attention-seeking.
- Editorial restraint: copy and typography leave room for imagery.
- Global luxury: culturally neutral, refined, and legible across markets.
- Technical discipline: immersive without blocking SEO, accessibility, or Lighthouse.

Design principle: expensive without trying too hard.

## 2. Experience Principles

1. Server first by default.
   Pages fetch data, pass typed props to sections, and contain no UI logic.

2. Client code is earned.
   Client Components exist only for interaction, Lenis, Framer Motion, loader state, galleries, maps, inquiry forms, and selective motion.

3. Motion follows narrative.
   Animation is choreographed around section progression, image reveals, and inquiry moments. No motion exists only to prove that motion exists.

4. Media carries emotion.
   Photography, video, cropping, contrast, and pacing do the heavy lifting. UI stays quiet.

5. SEO remains structural.
   All primary content is crawlable, semantic, and server-rendered. Cinematic layers enhance the page after content is already meaningful.

6. Performance is part of luxury.
   A premium experience that stutters, shifts layout, delays input, or drains mobile memory is not premium.

## 3. Website Structure

Recommended sitemap:

```txt
/
/showcase
/showcase/[slug]
/philosophy
/journal
/journal/[slug]
/global-presence
/private-inquiry
```

Page roles:

| Page | Emotional role | SEO role | Cinematic role | Conversion role |
| --- | --- | --- | --- | --- |
| Home | Establish aura, trust, and restraint | Broad brand and service relevance | Flagship scroll narrative | Guide to inquiry and showcase |
| Showcase | Present curated residences | Luxury property showcase queries | Editorial browsing, image sequencing | Move users into project pages |
| Project Experience | Deep property immersion | Long-tail property and location relevance | Fullscreen gallery, plans, detail reveals | Private inquiry for a specific project |
| Philosophy | Brand authority and taste | Architectural storytelling terms | Calm manifesto, spatial principles | Qualify premium clients |
| Journal | Topical authority | Editorial SEO growth | High-end publishing rhythm | Build trust over time |
| Global Presence | Market credibility | Geo-luxury search relevance | City-by-city spatial atmosphere | Regional inquiry paths |
| Private Inquiry | Discretion and access | Branded conversion search | Minimal, quiet interaction | Primary conversion endpoint |

Avoid bloated corporate pages. If a page cannot serve emotion, SEO, or conversion with distinction, keep it out of the first release.

## 4. Frontend Architecture Contract

Data flow:

```txt
API or CMS -> lib/api -> app route page -> section components -> presentational UI
```

Layer responsibilities:

- Page: Server Component. Fetches data, builds metadata, chooses sections, passes props. No UI logic.
- Section: Layout layer. Structures content and composition. Server by default.
- UI: Presentational layer. Stateless, reusable, typed, and free of fetching.
- Client Motion: Small hydration boundaries only around elements that animate or interact.
- Data: Centralized in `lib/api`, normalized into typed view models before reaching pages.

Server Component defaults:

- All route pages.
- Static editorial sections.
- Property facts, copy blocks, metadata, image lists.
- SEO schema generation.

Client Component justifications:

- Loader orchestration.
- Lenis scroll provider.
- Framer Motion reveal wrappers.
- Fullscreen gallery state.
- Map and filter interactions.
- Inquiry form validation and submission.
- Reduced-motion detection.

Never place `"use client"` in pages.

## 5. Enterprise Folder Structure

```txt
app/
  layout.tsx
  page.tsx
  loading.tsx
  error.tsx
  not-found.tsx
  sitemap.ts
  robots.ts
  showcase/
    page.tsx
    loading.tsx
    error.tsx
    [slug]/
      page.tsx
      loading.tsx
      error.tsx
  philosophy/
    page.tsx
  journal/
    page.tsx
    [slug]/
      page.tsx
  global-presence/
    page.tsx
  private-inquiry/
    page.tsx

components/
  sections/
    home/
      HeroSection.tsx
      PhilosophyPreviewSection.tsx
      SignatureResidencesSection.tsx
      SpatialIntelligenceSection.tsx
      GlobalPresenceSection.tsx
      PrivateInquirySection.tsx
    showcase/
      ShowcaseIndexSection.tsx
      PropertyNarrativeSection.tsx
      PropertyGallerySection.tsx
      MasterplanSection.tsx
    philosophy/
      ManifestoSection.tsx
      MaterialLanguageSection.tsx
      DesignIntelligenceSection.tsx
  ui/
    Button.tsx
    Container.tsx
    Eyebrow.tsx
    Heading.tsx
    MediaFrame.tsx
    RichText.tsx
    SectionShell.tsx
    Skeleton.tsx
    Surface.tsx
  motion/
    MotionGate.tsx
    Reveal.tsx
    Stagger.tsx
    PageTransition.tsx
    ScrollProgress.tsx
  navigation/
    SiteHeader.tsx
    MobileNavigation.tsx
    SiteFooter.tsx
  inquiry/
    InquiryForm.tsx
    InquiryField.tsx

content/
  seed/
    home.ts
    properties.ts
    markets.ts

lib/
  api/
    cms.ts
    properties.ts
    journal.ts
    inquiries.ts
    markets.ts
  cms/
    adapters.ts
    serializers.ts
  seo/
    metadata.ts
    schema.ts
  motion/
    easing.ts
    variants.ts
    orchestration.ts
  media/
    image-loader.ts
    crops.ts
    video.ts
  utils/
    cn.ts
    format.ts
    guards.ts

styles/
  tokens.css
  typography.css
  motion.css

types/
  content.ts
  property.ts
  seo.ts
  inquiry.ts
  market.ts
```

This structure keeps page fetching separate from section composition and UI primitives. It also creates clear seams for CMS, CRM, analytics, and multilingual expansion without changing section APIs.

## 6. Design System Architecture

Container system:

- `container-luxury`: max width 1440px, side padding fluid from 20px to 64px.
- `container-editorial`: max width 1120px for copy-led sections.
- `container-intimate`: max width 760px for manifestos and inquiry copy.
- Full-bleed media sections use viewport width with internal safe padding.

Grid system:

- Desktop: 12 columns, 24px gutters, 64px outer safe area.
- Tablet: 8 columns, 20px gutters, 32px safe area.
- Mobile: 4 columns, 16px gutters, 20px safe area.
- Editorial offset rules: important text rarely sits centered by default; use asymmetry with structural intent.

Spacing tokens:

```txt
space-1: 4px
space-2: 8px
space-3: 12px
space-4: 16px
space-5: 24px
space-6: 32px
space-7: 48px
space-8: 64px
space-9: 96px
space-10: 128px
space-11: 160px
space-12: 208px
```

Section pacing:

- Hero: 100svh maximum with next section hint visible on common laptop sizes.
- Narrative sections: 128px to 208px vertical rhythm on desktop.
- Mobile: compress vertical rhythm but preserve pauses; 72px to 112px between major sections.
- Avoid equal spacing everywhere. Luxury rhythm needs contrast: quiet passages, then cinematic media.

Surface system:

- `surface-void`: deep charcoal.
- `surface-ivory`: warm ivory.
- `surface-stone`: muted neutral.
- `surface-mist`: low-contrast editorial panels.
- `surface-bronze-line`: accent rules and tiny dividers only.

Radius system:

- 0px for full-bleed media and architectural panels.
- 2px for image masks.
- 4px for form fields and controlled UI.
- 6px maximum for repeated cards. No pill-shaped luxury UI unless the function demands it.

Shadow system:

- Avoid heavy shadows.
- Use tonal separation, borders, ambient overlays, and image contrast.
- If needed, use one soft elevation token for floating navigation only.

## 7. Typography System

Recommended pairings:

- Serif: Canela, Editorial New, Tiempos Headline, or a licensed equivalent.
- Sans: Neue Haas Grotesk, Scto Grotesk, Suisse Int'l, Inter fallback.
- Monospace only for technical property data if it serves clarity.

Implementation:

- Use `next/font` for self-hosted or Google-hosted fonts where licensing allows.
- Use `font-display: swap` or optional depending on brand tolerance for font shift.
- Define fallback metrics to reduce CLS.

Fluid type scale:

```css
--text-micro: clamp(0.68rem, 0.65rem + 0.12vw, 0.76rem);
--text-caption: clamp(0.75rem, 0.72rem + 0.15vw, 0.86rem);
--text-body: clamp(1rem, 0.96rem + 0.2vw, 1.125rem);
--text-lead: clamp(1.125rem, 1.02rem + 0.55vw, 1.5rem);
--text-title: clamp(2.5rem, 1.65rem + 4.2vw, 6.25rem);
--text-display: clamp(3.25rem, 1.9rem + 7vw, 9.5rem);
```

Typography rules:

- Hero headlines use calm scale, not shouting scale.
- Letter spacing: slight positive tracking for labels only.
- Body line height: 1.55 to 1.75.
- Display line height: 0.92 to 1.02.
- Avoid negative letter spacing.
- Do not center long copy. Centering is reserved for short ceremonial moments.
- Headlines should break by meaning, not by arbitrary width.

Editorial hierarchy:

- Label: market, theme, or chapter.
- Headline: spatial promise.
- Paragraph: restrained explanation.
- Supporting line: optional atmosphere, never filler.
- CTA: discreet invitation.

## 8. Color System

Palette:

```txt
void-950: #0E0E0C
charcoal-900: #171715
charcoal-800: #24231F
stone-700: #5C5850
stone-500: #8D877B
stone-300: #C7BFB0
ivory-100: #F3EEE4
ivory-050: #FAF7F0
bronze-500: #9A7250
bronze-300: #B99A78
mist-100: #E8E1D5
line-dark: rgba(250, 247, 240, 0.14)
line-light: rgba(14, 14, 12, 0.12)
```

Usage rules:

- Charcoal is atmospheric, not a generic dark theme.
- Ivory is warm but not beige-heavy.
- Bronze is a whisper: hairlines, small labels, active state accents.
- Gradients must be atmospheric overlays, not decorative color events.
- Image grading should do more than UI color.

## 9. Luxury Media Direction

Image treatment:

- Favor architectural atmosphere, human scale, material detail, horizon control, and light direction.
- Use restrained contrast, warm-neutral grading, and low visual noise.
- Avoid stock-like lifestyle images, over-smiling subjects, and glossy real estate cliches.

Image system:

- Use `next/image` for all local and remote images.
- Define width, height, sizes, and meaningful alt text.
- Use priority only for the above-the-fold LCP image.
- Use responsive crops per breakpoint.
- Use blur placeholders only where they do not feel cheap or slow.
- Keep CMS crop metadata: focal point, art direction notes, mobile crop, alt, credit.

Video system:

- Use short, compressed ambient loops only where they are essential.
- No autoplay video as the sole carrier of primary content.
- Provide poster images and reduced-motion alternatives.
- Prefer muted, inline, short loops with `preload="metadata"`.
- Use HLS or CDN variants for production.

Media pacing:

- Opening: one strong architectural atmosphere.
- Middle: sequence wide space, detail, human scale, plan, city context.
- Closing: quiet invitation or detail, not a hard sell.

## 10. Motion Engineering System

Motion philosophy:

- Camera-inspired, not interface-showy.
- Motion should feel like a slow aperture, a dolly, or a reveal of material depth.
- Use transform and opacity as the default properties.
- Use GSAP only for narrow cases that require precise timeline control or ScrollTrigger-like coordination.
- Prefer Framer Motion for local component transitions and view-level choreography.

Easing:

```ts
export const luxuryEase = [0.22, 1, 0.36, 1] as const;
export const quietEase = [0.16, 1, 0.3, 1] as const;
export const exitEase = [0.7, 0, 0.84, 0] as const;
```

Durations:

- Micro hover: 180ms to 260ms.
- Text reveal: 700ms to 1100ms.
- Media reveal: 900ms to 1400ms.
- Page transition: 600ms to 900ms.
- Loader: 1600ms to 2600ms maximum, with skip after repeat visits.

Performance rules:

- Animate `transform` and `opacity`.
- Avoid animating layout properties.
- Use `will-change` shortly before animation, then release it.
- Batch scroll reads and writes.
- Throttle pointer movement effects.
- Use IntersectionObserver for reveal activation.
- Disable nonessential parallax on mobile and low-power contexts.
- Respect `prefers-reduced-motion`.

Motion primitives:

- `MotionGate`: prevents major motion until loader completes.
- `Reveal`: reusable text and media reveal.
- `Stagger`: controlled child reveal.
- `PageTransition`: route transition wrapper.
- `ScrollProgress`: low-cost progress line or chapter indicator.

No scroll-jacking. Lenis may smooth scroll, but native scroll ownership stays with the user.

## 11. Loader and Transition System

Loader lifecycle:

1. Server renders meaningful content and metadata.
2. Client loader mounts as a small island.
3. Logo mark appears with restrained opacity and mask reveal.
4. Background shifts from void to first scene tone.
5. Loader completes and writes `loaderComplete = true` into a tiny client store or context.
6. `MotionGate` releases hero and section animations.
7. Scroll and focus are restored.

Hydration-safe logic:

- Never block server-rendered content from existing.
- Loader overlay may cover content visually, but content must be present in DOM.
- Store repeat-visit state in session storage.
- Use reduced-motion mode to shorten loader and remove cinematic masks.
- Prevent focus trapping unless loader contains interactive controls.

Animation synchronization:

- All major Framer Motion variants wait for `MotionGate`.
- Lenis initializes after loader or immediately in reduced-motion-safe mode with no dramatic scroll easing.
- Route transitions run independently of the first-load loader.

Loader style:

- ORYN wordmark or monogram.
- Thin architectural rule.
- Soft atmospheric fade.
- No progress percentages, spinners, particles, or dramatic effects.

## 12. Scroll Storytelling System

Narrative sequence for Home:

1. Hero: architectural mood, ORYN position, one discreet CTA.
2. Philosophy: quiet statement of spatial storytelling.
3. Spatial Intelligence: how the platform structures property narratives.
4. Signature Residences: curated project previews.
5. Material Language: detail, texture, light, plan, proportion.
6. Global Presence: market-specific credibility.
7. Immersive Experience: fullscreen property interaction preview.
8. Private Inquiry: invitation to begin a confidential conversation.

Scroll rhythm:

- Begin with stillness.
- Reveal text before detail, detail before full context.
- Alternate dense editorial blocks with visual silence.
- Use sticky moments sparingly for one or two flagship sequences.
- Preserve touch control and native scroll confidence.

Production rule: one memorable scroll sequence is stronger than six expensive timelines.

## 13. Component System

Core UI primitives:

- `Container`: width and safe padding.
- `SectionShell`: vertical spacing, theme, semantic wrapper.
- `Heading`: typed levels with visual variants.
- `Eyebrow`: labels for chapters and markets.
- `RichText`: CMS-safe prose rendering.
- `MediaFrame`: image/video art direction.
- `Button`: text or icon-text only for clear commands.
- `Skeleton`: layout-matching placeholders.
- `Surface`: controlled tonal panels.

Section systems:

- Cinematic hero.
- Philosophy manifesto.
- Editorial split narrative.
- Fullscreen media sequence.
- Signature residences index.
- Property detail reveal.
- Interactive masterplan.
- Market presence grid.
- Journal editorial feed.
- Private inquiry.

Property systems:

- Fullscreen cinematic gallery.
- Editorial property narrative.
- Architectural facts panel.
- Material and detail sequence.
- Plan and masterplan viewer.
- Market context.
- Inquiry tied to property slug.

State strategy:

- Keep state local to interaction islands.
- No global store for static content.
- Use server data and URL state for filters where possible.
- Use memoization only where repeated expensive rendering exists.
- Isolate gallery, map, and form hydration boundaries.

## 14. Rendering and Suspense Strategy

Every route includes:

- `loading.tsx` with skeletons matching actual layout.
- `error.tsx` with calm recovery copy.
- Page-level metadata.
- Structured data where relevant.

Suspense usage:

- Wrap slower async sections such as property recommendations, journal previews, and market insights.
- Keep hero critical content fast and server-rendered.
- Stream lower-priority sections after the first contentful experience.
- Skeletons must match geometry to avoid layout shift.

Dynamic imports:

- Map modules.
- Gallery lightbox.
- Lenis provider.
- Heavy animation timelines.
- Form validation enhancements if needed.

Route prefetching:

- Prefetch key routes visible in navigation.
- Avoid prefetching every property in large collections.
- Use intent-based prefetch for hovered or focused property cards.

Edge rendering opportunities:

- Market pages with geo-personalized copy.
- Inquiry routing.
- Lightweight personalization.

Do not move core SEO content into client-only rendering.

## 15. Performance Engineering

Targets:

```txt
Desktop:
Performance 95+
Accessibility 95+
Best Practices 95+
SEO 100

Mobile:
Performance 85-95+
Accessibility 95+
Best Practices 95+
SEO 100
```

How targets are achieved:

- Server Components minimize shipped JavaScript.
- Route-level code splitting limits each page bundle.
- Client islands isolate Lenis, gallery, map, and forms.
- `next/image` controls dimensions, formats, and responsive delivery.
- Critical hero image is preloaded with accurate `sizes`.
- Noncritical media lazy loads with reserved aspect ratios.
- Fonts use metric-safe loading and limited weights.
- Motion uses transform and opacity.
- Scroll-linked effects are sparse and adaptive.
- Structured content remains crawlable without hydration.
- Skeletons prevent blank screens and reduce perceived wait.

Enterprise animation vs demo animation:

- Demo: many simultaneous scroll effects, global timelines, forced pinned sections, oversized video, visual novelty.
- Production: few meaningful sequences, cancellable animation, reduced-motion support, memory-aware media, measurable frame stability.

Budget recommendations:

- Initial JS for Home: keep aggressive, ideally under 180KB compressed excluding framework.
- Font weights: 2 families, 2 to 3 weights each.
- Hero media: one optimized LCP asset, not a stack of competing assets.
- Video: no mandatory full-screen heavy playback on mobile.

## 16. SEO and Semantic Architecture

Metadata system:

- `generateMetadata` per route from typed content.
- Title pattern: `ORYN | Cinematic Luxury Real Estate Experiences`.
- Project title pattern: `{Project Name} | {Market} Architectural Residence | ORYN`.
- Descriptions should read like editorial summaries, not keyword blocks.

Schema:

- Organization.
- WebSite.
- BreadcrumbList.
- Article for journal.
- Residence or Product-like structured data for property pages where appropriate.
- LocalBusiness only if ORYN has a real office or service-area basis.

Heading structure:

- One H1 per page.
- H2 for major narrative chapters.
- H3 for property facts, material details, market subchapters.
- Avoid hiding real headings inside animated spans without semantic text.

URL strategy:

```txt
/showcase/monaco-waterfront-residence
/showcase/dubai-private-villa
/journal/cinematic-property-storytelling
/global-presence/dubai
```

Internal linking:

- Home links to showcase, philosophy, global presence, inquiry.
- Project pages link to related markets and journal narratives.
- Journal articles link back to relevant services, markets, and showcase pages.
- Inquiry receives contextual source from property or page.

Image alt strategy:

- Describe actual scene and architectural relevance.
- Include market or project when natural.
- Avoid stuffing repeated brand terms.

Keyword architecture:

Primary:

- luxury real estate digital experience
- cinematic property showcase
- architectural real estate presentation
- luxury residence storytelling
- premium property experience
- architectural digital narrative
- luxury real estate UX
- immersive property storytelling
- high-end property presentation
- cinematic real estate website
- luxury property storytelling system
- architectural brand experience

Secondary semantic:

- spatial storytelling
- editorial property narrative
- luxury digital architecture
- premium real estate presentation
- immersive residence experience
- architectural content system
- private property showcase
- luxury real estate branding
- property experience design
- residence narrative platform

Architectural:

- spatial intelligence
- material language
- architectural minimalism
- contemporary luxury living
- residence composition
- architectural atmosphere
- spatial hierarchy
- private living architecture
- design intelligence
- immersive architecture

Cinematic:

- cinematic visual sequence
- atmospheric property storytelling
- editorial image sequencing
- filmic real estate presentation
- immersive visual narrative
- architectural documentary style
- quiet cinematic pacing
- fullscreen residence gallery

Geo-luxury:

- Dubai luxury residence storytelling
- Monaco waterfront residence experience
- London architectural living presentation
- Los Angeles modern estate showcase
- Shanghai luxury development narrative
- New York penthouse experience design
- Berlin architectural residence presentation
- Jeddah private living showcase

High-intent:

- luxury real estate website design
- premium property showcase platform
- cinematic property website studio
- high-end real estate presentation system
- luxury development digital experience
- architectural real estate branding studio

Long-tail editorial:

- how cinematic storytelling changes luxury real estate presentation
- digital experience design for private residences
- architectural storytelling for luxury developments
- editorial UX for high-end real estate brands
- spatial branding systems for luxury property launches

SEO rule: keywords should inform structure and language, not dominate sentences.

## 17. Luxury Content System

Navigation labels:

- Home
- Showcase
- Philosophy
- Journal
- Global Presence
- Private Inquiry

CTA language:

- Begin a private conversation
- View the residence
- Explore the collection
- Request a private preview
- Enter the showcase
- Discuss a project

Homepage hero:

- Label: Cinematic real estate experiences
- Headline: Architecture, composed for a quieter kind of attention.
- Paragraph: ORYN shapes digital experiences for residences, developments, and spatial brands that need more than visibility. Each story is paced through architecture, atmosphere, and restraint.
- Supporting line: Designed for properties where silence, light, and proportion carry the strongest message.

Philosophy:

- Label: Philosophy
- Headline: Space should be felt before it is explained.
- Paragraph: We build digital narratives around proportion, material, light, and movement. The interface stays quiet so the architecture can hold the room.
- Supporting line: Nothing is added unless it deepens the experience.

Architectural Vision:

- Label: Architectural Vision
- Headline: Digital presence shaped with spatial discipline.
- Paragraph: Every section is treated as a room, every transition as a threshold, every image as a measured pause in the story.

Spatial Intelligence:

- Label: Spatial Intelligence
- Headline: Property storytelling with structure beneath the atmosphere.
- Paragraph: ORYN organizes residences through context, sequence, detail, and desire, giving each project a clear narrative without reducing it to a listing.

Signature Residences:

- Label: Signature Residences
- Headline: A curated view into places made for lasting attention.
- Paragraph: From waterfront apartments to private villas and urban penthouses, each residence is presented through rhythm, scale, and architectural presence.

Material Language:

- Label: Material Language
- Headline: Stone, shadow, grain, and silence.
- Paragraph: Detail is never secondary. Surfaces, finishes, joinery, and light reveal the emotional intelligence of a place.

Future Architecture:

- Label: Future Architecture
- Headline: Technology made quiet enough for timeless spaces.
- Paragraph: The system is built for modern property ecosystems, but its surface remains calm, human, and enduring.

Private Living:

- Label: Private Living
- Headline: Residences held away from the ordinary market.
- Paragraph: Some properties require discretion, sequence, and a more considered path to attention.

Global Presence:

- Label: Global Presence
- Headline: Different cities. One standard of restraint.
- Paragraph: ORYN adapts to the atmosphere of each market, from Dubai and Jeddah to Monaco, London, Shanghai, New York, Berlin, and Los Angeles.

Private Inquiry:

- Label: Private Inquiry
- Headline: Begin with a quiet conversation.
- Paragraph: Share the nature of the residence, development, or spatial brand. A considered response will follow.
- Supporting line: For private projects, launch presentations, and architectural property experiences.

Footer:

- ORYN creates cinematic digital experiences for luxury real estate, architecture, and private spatial brands.
- Discretion, atmosphere, and architectural clarity guide every project.

## 18. CMS and API Readiness

Content models:

```txt
Project
  id
  slug
  title
  market
  status
  heroMedia
  summary
  narrativeChapters[]
  gallery[]
  facts[]
  materials[]
  plans[]
  inquiryMode
  seo

Market
  slug
  name
  description
  heroMedia
  featuredProjects[]
  seo

JournalArticle
  slug
  title
  excerpt
  body
  author
  publishDate
  relatedProjects[]
  seo

Inquiry
  name
  email
  market
  projectSlug
  budgetRange
  message
  consent
```

Integration readiness:

- CMS: Sanity, Contentful, Strapi, or Payload through `lib/cms` adapters.
- CRM: HubSpot, Salesforce, or custom CRM through `lib/api/inquiries`.
- Multilingual: route segments or locale-aware content adapters.
- Analytics: privacy-safe event layer with consent handling.
- Property APIs: normalize inventory into view models before reaching UI.
- Booking: optional private-preview scheduling module.
- AI personalization: server-side recommendations only after consent and clear data strategy.

Rules:

- Never let CMS shape leak directly into components.
- Use serializers to produce stable section props.
- Validate external data with typed guards or schema validation.
- Keep inquiry data handling separated from display components.

## 19. Mobile Luxury UX

Mobile principles:

- Keep motion lighter and more intentional.
- Replace large pinned sequences with simple reveal progression.
- Keep tap targets at least 44px.
- Use bottom-safe spacing for inquiry actions.
- Preserve image dignity through art-directed crops.
- Do not compress premium copy into dense blocks.
- Avoid heavy video as the opening mobile experience.

Mobile layout:

- Hero: strong image, readable headline, visible next-section hint.
- Showcase: editorial list over dense grid.
- Project gallery: swipe-first, with clear progress and exit.
- Inquiry: short fields, progressive disclosure, minimal friction.

Mobile performance:

- Use lower-resolution media variants.
- Reduce simultaneous animated elements.
- Disable pointer effects.
- Avoid large fixed backgrounds on Safari.
- Watch image memory pressure on long galleries.

## 20. Reference Research System

Strategic principle:

Luxury real estate direction should not come primarily from real estate websites. Most property websites inherit the same listing logic, card grids, and sales language. ORYN should combine hospitality atmosphere, architecture discipline, editorial pacing, automotive confidence, and cinematic restraint to create a more original system.

Research categories:

- Luxury hospitality: Aman, Six Senses, Rosewood, Bulgari Hotels, Edition Hotels.
- Architecture studios: Foster + Partners, Zaha Hadid Architects, BIG, OMA, Snohetta.
- Editorial: Kinfolk, Monocle, Wallpaper, Dezeen, ArchDaily.
- Automotive: Bentley, Rolls-Royce, Porsche, Aston Martin.
- Product and interface: Apple and other minimal product systems.
- Cinema: architectural documentaries, slow interior sequences, environmental films.
- Interior design: material palettes, proportion, quiet atmosphere.
- Motion: title sequences, product reveals, gallery transitions.
- Real estate: study selectively for market expectations and conversion patterns only.

What to extract:

- Typography hierarchy.
- Spacing rhythm.
- Image sequencing.
- Navigation restraint.
- Emotional pacing.
- Material treatment.
- Motion timing.
- Contrast discipline.
- Section transitions.
- Copy density.

What not to copy:

- Layouts one-to-one.
- Brand colors.
- Logo behavior.
- Signature interactions.
- Awwwards novelty patterns.
- WebGL-heavy scenes without production purpose.

Moodboard discipline:

- Choose 1 main direction and 2 supporting influences.
- Example structure: Aman for atmosphere, Foster + Partners for spatial order, Bentley for confidence.
- Reject references that conflict with the chosen emotional temperature.
- Build principles, not collage.

Awwwards use:

- Study experimentation, sequencing, and interaction ideas.
- Reject scroll-jacking, navigation confusion, heavy WebGL, and effects that cannot survive mobile budgets.
- Filter every reference through Lighthouse, accessibility, maintainability, and CMS reality.

## 21. Stage-by-Stage Execution Roadmap

### Stage 1 - Brand Foundation

Primary objective: define the ORYN identity, emotional territory, tone, and luxury guardrails.

Deliverables: brand position, audience map, mood direction, typography references, color territory, voice principles, cinematic philosophy.

Technical tasks: document product goals, markets, page scope, performance targets, and data assumptions.

Design tasks: create moodboards around hospitality calm, architectural order, editorial restraint, and automotive confidence.

Motion tasks: define prohibited motion, desired pacing, loader mood, and reduced-motion expectations.

Content tasks: write brand thesis, navigation language, hero direction, and inquiry tone.

Performance tasks: set budgets for JS, fonts, media, video, and animation.

SEO tasks: define core semantic territory and branded search language.

Business tasks: clarify target clients, offer structure, premium positioning, and proof needs.

Timeline: 3 to 5 days.

Quality checkpoint: ORYN can be explained in one refined paragraph without sounding generic.

Common mistakes: copying real estate sites, choosing decorative luxury, overloading visual references.

Production constraints: font licensing, image access, market specificity, client proof.

Go/no-go: proceed only when the brand has a clear emotional center and a restrained visual direction.

### Stage 2 - Reference Intelligence System

Primary objective: study premium references and extract principles without cloning.

Deliverables: reference matrix, deconstruction notes, motion study, typography study, media rules, anti-copying checklist.

Technical tasks: audit reference performance, media weight, interaction complexity, and accessibility risks.

Design tasks: deconstruct spacing, hierarchy, image treatment, contrast, and layout rhythm.

Motion tasks: classify motion into usable, risky, and production-rejected patterns.

Content tasks: note copy density, voice restraint, chapter naming, and editorial rhythm.

Performance tasks: identify which reference effects would harm mobile or Lighthouse.

SEO tasks: study how premium brands preserve crawlability and metadata.

Business tasks: identify how premium perception is created through restraint, not volume.

Timeline: 4 to 7 days.

Quality checkpoint: the team can describe extracted principles without showing copied screens.

Common mistakes: random Pinterest boards, conflicting aesthetics, copying a hero layout.

Production constraints: many reference sites are not performance models.

Go/no-go: proceed only with one main direction and two supporting influences.

### Stage 3 - Information Architecture

Primary objective: define sitemap, narrative flow, conversion paths, and section sequencing.

Deliverables: sitemap, route map, homepage narrative, project page sequence, inquiry paths, internal linking plan.

Technical tasks: define route groups, dynamic routes, metadata needs, loading and error boundaries.

Design tasks: map emotional pacing from stillness to immersion to inquiry.

Motion tasks: identify one or two moments deserving advanced choreography.

Content tasks: define H1/H2 structure, page summaries, and chapter labels.

Performance tasks: decide which sections stream and which media is critical.

SEO tasks: define URL structure, sitemap priorities, schema types, and journal clusters.

Business tasks: map high-value visitor journeys: developer, architect, investor, private buyer.

Timeline: 3 to 5 days.

Quality checkpoint: every page has a clear emotional, SEO, cinematic, and conversion role.

Common mistakes: adding pages because competitors have them.

Production constraints: too many pages dilute quality and content operations.

Go/no-go: proceed when IA is minimal, intentional, and implementation-ready.

### Stage 4 - Design System Engineering

Primary objective: build the visual rules that prevent inconsistency at scale.

Deliverables: tokens, grids, typography scale, spacing rhythm, surfaces, components, responsive rules.

Technical tasks: implement Tailwind token mapping and CSS custom properties.

Design tasks: define containers, section rhythm, editorial alignment, and media ratios.

Motion tasks: define motion tokens and shared easing.

Content tasks: define copy length limits by component.

Performance tasks: limit font weights, avoid heavy shadows, reserve layout dimensions.

SEO tasks: ensure visual variants do not break semantic heading levels.

Business tasks: make the system reusable across future client projects.

Timeline: 5 to 8 days.

Quality checkpoint: new sections can be composed without inventing new spacing, colors, or type styles.

Common mistakes: building too many primitives too early.

Production constraints: token systems must serve real components, not abstract beauty.

Go/no-go: proceed when the first section can be built using only approved primitives.

### Stage 5 - Frontend System Architecture

Primary objective: establish the Next.js App Router architecture and data boundaries.

Deliverables: folder structure, typed models, API adapters, SEO utilities, skeletons, error pages.

Technical tasks: create route files, `lib/api`, `types`, section folders, UI primitives, and metadata helpers.

Design tasks: translate design tokens into Tailwind utilities and layout components.

Motion tasks: scaffold `MotionGate`, reveal primitives, and Lenis island.

Content tasks: move seed content into typed content modules.

Performance tasks: configure dynamic imports, media strategy, and bundle checks.

SEO tasks: add sitemap, robots, metadata generation, and structured data helpers.

Business tasks: keep architecture explainable for future client confidence.

Timeline: 4 to 7 days.

Quality checkpoint: page data flows only through API -> page -> section -> UI.

Common mistakes: turning whole pages into Client Components.

Production constraints: Next version changes must be checked against local docs before code changes.

Go/no-go: proceed when strict TypeScript, linting, and architecture boundaries pass.

### Stage 6 - Flagship Homepage Wireframe

Primary objective: design and implement the flagship narrative experience.

Deliverables: hero, philosophy preview, spatial intelligence, showcase preview, global presence, inquiry.

Technical tasks: build sections as Server Components with isolated motion wrappers.

Design tasks: set art direction, responsive compositions, image ratios, and text density.

Motion tasks: choreograph loader release, hero reveal, media entrance, and section progression.

Content tasks: finalize homepage editorial copy and CTA language.

Performance tasks: optimize LCP image, reserve dimensions, lazy-load lower sections.

SEO tasks: ensure semantic H1/H2 structure and crawlable copy.

Business tasks: ensure inquiry path is present but discreet.

Timeline: 7 to 12 days.

Quality checkpoint: homepage feels like an architectural film, yet remains fast and usable.

Common mistakes: overproducing the hero while neglecting mobile and conversion.

Production constraints: fullscreen media must not hide next content or block scroll.

Go/no-go: proceed when desktop and mobile homepage audits are stable.

### Stage 7 - Motion Engineering System

Primary objective: implement production-grade motion primitives and rules.

Deliverables: easing tokens, reveal wrappers, page transitions, loader synchronization, reduced-motion mode.

Technical tasks: isolate client motion components and avoid global rerender cascades.

Design tasks: define per-section motion hierarchy and visual stillness.

Motion tasks: implement transform-based reveals, gallery transitions, and minimal scroll cues.

Content tasks: tune headline breaks to match motion rhythm.

Performance tasks: profile frame rate, layout thrash, memory, and hydration cost.

SEO tasks: keep animated text present in DOM as real text.

Business tasks: ensure motion supports premium perception and does not become a novelty.

Timeline: 5 to 10 days.

Quality checkpoint: motion feels calm at 60fps on realistic devices.

Common mistakes: heavy timelines, too many animated children, pinned-scroll excess.

Production constraints: Safari and mobile GPUs punish layered animation and fixed backgrounds.

Go/no-go: proceed when reduced motion, mobile fallback, and frame stability are verified.

### Stage 8 - Luxury Content System

Primary objective: write the editorial language that gives the product emotional depth.

Deliverables: homepage copy, page intros, property narrative templates, inquiry copy, metadata, journal themes.

Technical tasks: structure content as typed objects ready for CMS migration.

Design tasks: test copy in real layouts, not in documents alone.

Motion tasks: align line breaks and reveal timing with reading rhythm.

Content tasks: write concise, human, spatial, non-sales copy.

Performance tasks: avoid copy hidden behind client-only systems.

SEO tasks: integrate semantic terms naturally.

Business tasks: make the offering legible to developers, architects, and premium brands.

Timeline: 4 to 8 days.

Quality checkpoint: copy feels specific, restrained, and readable without visual context.

Common mistakes: generic luxury adjectives, over-poetry, repetitive sentence structures.

Production constraints: multilingual expansion requires clear source copy.

Go/no-go: proceed when content supports both atmosphere and comprehension.

### Stage 9 - Performance Engineering

Primary objective: make cinematic quality measurable and stable.

Deliverables: Lighthouse plan, bundle budget, image pipeline, video rules, profiling checklist.

Technical tasks: run builds, analyze bundles, split routes, optimize imports, verify static rendering.

Design tasks: simplify costly visual decisions before they become code debt.

Motion tasks: remove nonessential animation and tune will-change lifecycle.

Content tasks: prioritize above-fold content and defer secondary stories.

Performance tasks: audit LCP, CLS, INP, TBT, memory, and long tasks.

SEO tasks: confirm server-rendered content and metadata.

Business tasks: position performance as part of luxury delivery quality.

Timeline: continuous, with 3 to 5 focused hardening days before launch.

Quality checkpoint: desktop 95+, mobile 85-95+, SEO 100 in realistic production mode.

Common mistakes: judging performance from dev mode or high-end laptops only.

Production constraints: third-party scripts and video can destroy budgets quickly.

Go/no-go: no launch if LCP, CLS, INP, metadata, or crawlability are unstable.

### Stage 10 - Responsive Luxury UX

Primary objective: preserve premium pacing and usability across mobile, tablet, and desktop.

Deliverables: responsive layout specs, mobile gallery, touch inquiry, reduced motion behavior.

Technical tasks: implement responsive variants and test breakpoints.

Design tasks: art-direct crops, simplify grids, and protect typography.

Motion tasks: reduce parallax and advanced scroll choreography on mobile.

Content tasks: shorten mobile-supporting lines where needed.

Performance tasks: serve smaller images and reduce animated layers.

SEO tasks: preserve semantic parity across breakpoints.

Business tasks: make mobile inquiry easy for high-intent visitors.

Timeline: 4 to 7 days.

Quality checkpoint: mobile feels intentionally designed, not compressed from desktop.

Common mistakes: tiny text, oversized hero, hidden navigation, heavy video.

Production constraints: mobile Safari viewport behavior and memory limits.

Go/no-go: proceed when touch, reading, scroll, and inquiry are polished.

### Stage 11 - CMS and API Preparation

Primary objective: prepare the system for real inventory, multilingual content, and CRM flows.

Deliverables: content models, serializers, API adapters, validation, inquiry pipeline plan.

Technical tasks: define CMS adapters, view models, type guards, and integration boundaries.

Design tasks: account for variable content length and missing media.

Motion tasks: ensure animation wrappers tolerate CMS-driven content.

Content tasks: create editorial templates for projects, markets, and journal articles.

Performance tasks: define caching, revalidation, and image CDN strategy.

SEO tasks: map CMS fields to metadata, schema, alt text, and slugs.

Business tasks: plan CRM routing, inquiry qualification, and private project access.

Timeline: 5 to 10 days.

Quality checkpoint: replacing seed content with CMS data does not change component contracts.

Common mistakes: binding UI directly to raw CMS shape.

Production constraints: CMS editors need guardrails and preview workflows.

Go/no-go: proceed when content can scale without redesigning components.

### Stage 12 - Deployment and Infrastructure

Primary objective: deploy safely with observability and rollback.

Deliverables: Vercel deployment, environments, previews, cache strategy, monitoring, release checklist.

Technical tasks: configure env vars, CI checks, production build, image domains, headers, redirects.

Design tasks: verify production media, fonts, and responsive rendering.

Motion tasks: test production animation timing after minification and real network.

Content tasks: proofread final production copy and metadata.

Performance tasks: run Lighthouse, WebPageTest, and real-device checks.

SEO tasks: verify sitemap, robots, canonical URLs, OG images, and schema.

Business tasks: prepare launch presentation and private demos.

Timeline: 2 to 5 days.

Quality checkpoint: preview and production match design, performance, and SEO expectations.

Common mistakes: launching with dev media paths, missing OG, or untested forms.

Production constraints: CDN caching and image optimization behavior can differ from local.

Go/no-go: launch only after rollback, monitoring, and inquiry capture are verified.

### Stage 13 - Content Distribution and Client Acquisition

Primary objective: turn ORYN into a premium acquisition asset.

Deliverables: LinkedIn narrative, Instagram reels plan, Behance case study, direct outreach deck, short films.

Technical tasks: create case-study pages and shareable media exports.

Design tasks: adapt visuals into editorial crops and presentation frames.

Motion tasks: create short restrained motion clips from site sequences.

Content tasks: write posts about spatial storytelling, property presentation, and architectural UX.

Performance tasks: optimize embedded videos and social landing pages.

SEO tasks: publish journal articles for topical authority.

Business tasks: target luxury developers, architecture studios, hospitality groups, and premium agencies.

Timeline: starts before launch, then weekly cadence.

Quality checkpoint: distribution feels like an editorial practice, not mass marketing.

Common mistakes: posting generic screenshots without strategic narrative.

Production constraints: luxury clients respond to proof, discretion, and taste.

Go/no-go: publish only assets that reinforce the same premium standard as the site.

### Stage 14 - Premium Proposal System

Primary objective: package ORYN as a high-value strategic offer.

Deliverables: proposal template, pricing logic, timeline, deliverables, maintenance retainers, revision model.

Technical tasks: define implementation scopes: flagship, CMS-enabled, multi-market, enterprise.

Design tasks: include visual direction, section architecture, and art direction process.

Motion tasks: specify motion scope and production limits.

Content tasks: include editorial copywriting, metadata, and content modeling scope.

Performance tasks: include measurable performance targets as deliverables.

SEO tasks: include semantic architecture and technical SEO setup.

Business tasks: present premium pricing around value, risk reduction, and launch quality.

Timeline: 2 to 4 days for first proposal system.

Quality checkpoint: proposal feels precise, calm, and commercially serious.

Common mistakes: underpricing high-complexity cinematic work.

Production constraints: revisions need boundaries or luxury quality erodes.

Go/no-go: send proposals only when scope, dependencies, and approval process are clear.

### Stage 15 - Long-Term Scalability

Primary objective: turn ORYN into a reusable luxury digital experience framework.

Deliverables: internal component library, CMS templates, motion library, media playbook, analytics dashboards.

Technical tasks: extract reusable modules, document APIs, add testing, improve content validation.

Design tasks: build variants for residences, hospitality, architecture, and private developments.

Motion tasks: maintain a restrained library of proven transitions.

Content tasks: develop reusable editorial patterns and journal series.

Performance tasks: track budgets over time and prevent dependency creep.

SEO tasks: expand topical authority through high-quality architectural content.

Business tasks: package ORYN into repeatable premium offerings and retainers.

Timeline: ongoing after first production release.

Quality checkpoint: new projects can reuse the system without looking templated.

Common mistakes: turning the system into a generic template kit.

Production constraints: scale requires governance, not just more components.

Go/no-go: scale only after the flagship experience proves quality, performance, and commercial clarity.

## 22. Real-World Production Constraints

Safari:

- Fixed backgrounds and large blurred overlays can perform poorly.
- Viewport units require careful use of `svh`, `lvh`, and fallbacks.
- Video autoplay behavior varies.

Mobile GPU:

- Too many transformed layers cause memory pressure.
- Large images and video can trigger reloads or blank frames.
- Parallax should be reduced or removed.

Hydration:

- Large global providers create avoidable cost.
- Client-only animated content can delay meaning and harm SEO.
- Keep interactivity islands small.

CMS:

- Editors will upload imperfect media and variable copy lengths.
- Components must handle missing optional fields gracefully.
- Preview workflows matter for luxury content approval.

Video:

- Delivery cost and startup delay rise fast.
- Always provide poster, fallback, and mobile strategy.

Maintainability:

- A visually impressive prototype can become expensive to change if section APIs are vague.
- Motion should be reusable and tokenized.
- Design tokens must be enforced in code review.

## 23. Production Quality Checklist

Before launch:

- No `"use client"` in pages.
- Data fetched only in pages or server data helpers.
- TypeScript strict mode passes.
- No `any`.
- Global and route loading states exist.
- Skeletons match real layouts.
- Error boundaries exist.
- Images use dimensions, alt, sizes, and priority only where justified.
- Metadata and schema are generated server-side.
- Sitemap and robots are configured.
- Motion waits for loader completion.
- Reduced motion works.
- Mobile performance is tested on real devices.
- Inquiry flow is secure, accessible, and verified.
- Lighthouse targets are met in production build.

ORYN should launch only when it feels calm, fast, crawlable, visually disciplined, and commercially credible.
