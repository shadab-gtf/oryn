# SS Interior Reverse Engineering Audit And Master Recreation Prompt

## 1. Executive Summary

SS Interior is a luxury furniture restoration and bespoke upholstery atelier dedicated to preserving exceptional furniture through handcrafted technique, premium materials, and timeless restoration judgment. The slogan is:

Restoring Luxury. Preserving Stories.

The brand category is not a local repair service, home maintenance provider, marketplace vendor, or low-cost upholstery shop. SS Interior must be positioned as an ultra-premium restoration house for sofas, lounge chairs, heritage seating, leather furniture, executive interiors, hospitality pieces, and design-led furniture transformations.

The desired digital experience should feel inspired by Natuzzi Italia, Poltrona Frau, Restoration Hardware, Minotti, Flexform, and B&B Italia. It should communicate the calm authority of an Italian-inspired furniture atelier: tactile, intimate, material-led, cinematic, editorial, and built around trust in craft.

The website should frame restoration as a luxury decision:

- A treasured sofa deserves preservation rather than disposal.
- Original proportions, memory, and comfort should be respected.
- Fine leather, velvet, boucle, suede, linen, and wood deserve expert handling.
- Repair is not the story; renewal, heritage, and material intelligence are the story.

The future application should use a strict production architecture:

API/data -> `lib/api` -> Page -> Section -> UI.

Pages fetch data and pass props. Sections own layout. UI components remain reusable, stateless, and presentational. Client components are reserved for forms, upload interactions, GSAP motion, before/after reveals, and browser-specific behavior.

The strongest signature moments to build are:

- A cinematic loader that feels like a workshop preparing itself: leather grain, stitch-line drawing, and warm bronze light.
- A fullscreen hero with luxury furniture closeups and slow material reveals.
- A restoration process section built around assessment, material selection, artisan restoration, and final refinement.
- A pinned before/after transformation gallery where pieces are revealed through fabric-mask transitions.
- A material collection section with tactile macro photography and refined editorial copy.
- A consultation experience that feels like a private atelier appointment.

The main implementation risks to avoid are:

- Copy that sounds like cheap sofa repair.
- Overly busy animations that make craft feel gimmicky.
- Generic stock interiors without material detail.
- Bright colors, startup gradients, or service-marketplace UI patterns.
- Form experiences that feel transactional rather than consultative.
- Client-heavy implementation where server-rendered editorial content would be more performant.

## 2. Brand Analysis

Industry: luxury furniture restoration, bespoke upholstery, leather repair, heritage furniture revival, premium sofa transformation, and interior craftsmanship.

Product category:

- Luxury sofa restoration.
- Bespoke reupholstery.
- Premium leather restoration.
- Furniture frame repair and refinement.
- Designer furniture revival.
- Hospitality and commercial seating renewal.
- Material-led interior craftsmanship.

Target audience:

- Owners of luxury homes, villas, and private residences.
- Interior designers and decorators.
- Boutique hotels, restaurants, clubs, and lounges.
- Corporate offices with executive seating and reception furniture.
- Collectors of heritage furniture.
- Families preserving sentimental furniture with high material or emotional value.
- Premium developers and hospitality operators maintaining furnished environments.

Brand positioning:

SS Interior should be positioned as a luxury furniture restoration atelier, not a service vendor. The brand exists to protect the story, proportion, comfort, and material dignity of exceptional furniture. Its value is in taste, craftsmanship, material knowledge, discretion, and refined transformation.

Premium vs luxury vs enterprise vs startup style:

- Premium: because materials, finish, and service quality are elevated.
- Luxury: because the site should communicate scarcity, restraint, discretion, and emotional preservation.
- Enterprise-capable: because hotels, offices, and designers need reliability.
- Not startup: avoid feature grids, loud CTAs, playful icons, and aggressive conversion language.

Design philosophy:

- Craft is revealed slowly.
- Materials carry emotion.
- Detail creates trust.
- Restoration is a continuation of memory, not a replacement.
- Luxury is communicated through restraint, precision, and tactile atmosphere.

Visual hierarchy:

1. Fullscreen tactile imagery: leather grain, hand stitching, velvet nap, sofa silhouette, artisan hands.
2. Large editorial serif headlines.
3. Small uppercase craft labels.
4. Narrow, measured body copy.
5. Before/after transformations as proof.
6. Consultation CTA as a private appointment.

Information architecture:

- Home: hero, craft philosophy, restoration process, signature transformations, material collection, trusted partnerships, restoration consultation.
- Transformation Gallery: curated restoration case studies.
- Transformation Detail: original condition, challenges, material selection, craftsmanship process, final transformation.
- Philosophy: five-chapter manifesto on preserving original furniture.
- Journal: editorial guidance on materials, care, restoration thinking, and interior heritage.
- Homes, Hotels & Commercial Spaces: trusted environments and partnership use cases.
- Restoration Consultation: premium form and photo upload flow.

User journey:

1. The visitor enters through a cinematic material world.
2. The brand reframes restoration as preservation and transformation.
3. The process builds confidence in technical skill and care.
4. Case studies prove visible outcomes.
5. Materials demonstrate luxury taste.
6. Partnership signals reduce risk for high-value clients.
7. Consultation converts through a calm, private appointment model.

Conversion strategy:

SS Interior should not rely on discounting, urgency, or repair-shop language. The conversion strategy is based on emotional attachment, material confidence, visible craftsmanship, and the reassurance that treasured furniture will be handled with taste. The main CTA should be "Request a Restoration Consultation" or "Begin a Private Restoration Review."

Trust-building elements:

- Before/after case-study structure.
- Material education and care language.
- Artisan process documentation.
- Upload-photo consultation flow.
- Hospitality and designer partnership categories.
- Editorial restraint and precise technical vocabulary.
- SEO metadata and schema for services, local business, and creative work.

Accessibility level:

The experience should preserve luxury while remaining usable. It should include semantic HTML, visible focus states, keyboard-operable navigation and galleries, reduced-motion alternatives, clear form labels, accessible upload controls, meaningful image alt text, and no interaction that depends only on hover.

## 3. Design System

### Colors

Primary backgrounds:

- `#0B0B0B`: main black atelier background.
- `#111111`: secondary dark surface for navigation, forms, and section depth.
- `#1A1A1A`: elevated charcoal surface for panels, media placeholders, and subtle contrast.

Primary text:

- `#F5F2EC`: warm ivory editorial text.
- `rgba(245, 242, 236, 0.72)`: primary body copy.
- `rgba(245, 242, 236, 0.48)`: metadata, captions, secondary notes.

Luxury metals:

- `#C7A56A`: luxury bronze accent for active states, rules, and premium labels.
- `#B8935A`: premium gold for high-emphasis details and warm highlights.
- `#9D7B4F`: deeper accent for understated borders and material warmth.

Material neutrals:

- `#2A2420`: dark leather brown-black.
- `#3A3028`: walnut shadow.
- `#6F6255`: muted linen/taupe copy on light surfaces.
- `#D8D0C3`: softened textile ivory.
- `#EEE8DC`: warm editorial paper tone for occasional light sections.

Gradient usage:

- Radial bronze light leaks should be subtle and never decorative blobs.
- Leather/vignette overlays should deepen image edges.
- Before/after sections may use a soft linear split mask.
- Button sweeps should use a restrained bronze-to-transparent sheen.

Transparency usage:

- Borders: `rgba(245,242,236,0.10-0.20)` or `rgba(199,165,106,0.22-0.45)`.
- Form surfaces: `rgba(17,17,17,0.72)` with blur where appropriate.
- Image overlays: `rgba(11,11,11,0.35-0.86)`.
- Gold highlights: low opacity except for active states.

Hover colors:

- Ivory links move toward bronze.
- Bronze rules brighten slightly.
- Dark buttons reveal warm ivory or bronze fill.
- Images scale subtly and increase contrast.

### Typography

Heading font direction:

- Primary choice: Canela.
- Fallback choice: Cormorant Garamond.
- System fallback: Georgia, Times New Roman, serif.

Body font direction:

- Primary choice: Neue Haas Grotesk.
- Fallback choice: Inter.
- System fallback: system-ui, sans-serif.

Typography must feel like luxury magazines: elegant, spacious, quiet, and tactile.

Typography behavior:

- Headlines use low weight, high contrast, and controlled line height.
- Body copy is narrow and readable, with generous leading.
- Metadata uses uppercase with moderate tracking.
- Avoid oversized body copy in dense panels.
- Do not use negative letter spacing.

Typography scale:

| Token | CSS | Use |
| --- | --- | --- |
| Hero Display | `clamp(3rem, 8vw, 7.25rem)` | Fullscreen hero statements |
| Display | `clamp(2.5rem, 5.6vw, 5.5rem)` | Page-level editorial titles |
| Title | `clamp(2rem, 3.6vw, 3.75rem)` | Section and gallery titles |
| Section | `clamp(1.65rem, 2.2vw, 2.5rem)` | Interior section headings |
| Lead | `clamp(1rem, 0.95rem + 0.3vw, 1.25rem)` | Editorial intro paragraphs |
| Body | `1rem` | Main copy |
| Small | `0.875rem` | Captions and form help |
| Eyebrow | `0.625rem-0.75rem`, uppercase, `0.18em-0.24em` | Labels, process steps, nav |

Line heights:

- Hero: `0.9-0.96`.
- Display: `0.98-1.04`.
- Section: `1.08-1.16`.
- Body: `1.7-1.9`.
- Captions: `1.5-1.65`.

Paragraph spacing:

- Hero support: `1.5rem-2rem` below headline.
- Section body: `1.25rem-2rem` below heading.
- Case-study chapters: `2.5rem-4rem` between content groups.

Responsive typography:

- Hero remains cinematic on mobile but should not exceed viewport width.
- Long words must wrap safely.
- Metadata stays small but readable.
- Use clamp values, not viewport-only font sizes.

## 4. Layout System

Container widths:

- Luxury container: max `1440px`, padding `20px -> 64px`.
- Editorial container: max `1120px`, padding `20px -> 48px`.
- Intimate container: max `760px`, used for consultation copy and journal.
- Fullscreen cinematic scenes: `100svh`, full bleed.

Grid system:

- Use 12-column grids for cinematic sections.
- Use two-column editorial layouts for process and consultation.
- Use horizontal pinned layouts for signature transformations on desktop.
- Use vertical stacked case studies on mobile.

Column structure:

- Hero: centered axial composition over full-bleed material imagery.
- Philosophy/process: left label, right editorial text or step sequence.
- Gallery: image-led rows or pinned transformation cards.
- Detail pages: large hero, then split chapters.
- Consultation: left trust/copy, right form.

Spacing system:

- Section vertical spacing: `5rem` mobile, `7rem` tablet, `10rem` desktop.
- Fullscreen scenes use internal `padding-top` equal to header safety and bottom breathing space.
- Between process steps: `2rem-4rem`.
- Between case-study cards: `3rem-5rem`.
- Form field gaps: `1rem-1.25rem`.

Breakpoints:

- Mobile: `<640px`, single column, reduced pinned behavior, vertical before/after.
- Tablet: `640px-1024px`, two-column where safe.
- Desktop: `1024px+`, cinematic pinning, horizontal sequences, multi-column editorial layouts.
- Wide: `1440px+`, expanded negative space and larger media.

Why spacing choices exist:

Luxury furniture restoration needs visual calm so material detail can be inspected. Negative space makes the work feel considered rather than rushed. Large section spacing also mirrors the pace of atelier consultation: assessment, deliberation, craft, refinement.

Visual rhythm:

- Dense tactile image moments alternate with quiet editorial pauses.
- Before/after proof is placed after emotional positioning.
- Material education appears before consultation to increase confidence.
- The final CTA should feel inevitable, not abrupt.

Alignment strategy:

- Use strong left alignment for editorial credibility.
- Use center alignment only for hero, loader, and signature moments.
- Avoid floating cards inside cards.
- Let media frames align to grid edges for a furniture-catalogue feel.

## 5. Component Library

Header / Navbar:

- Purpose: premium atelier navigation.
- Structure: fixed header, SS Interior wordmark left, centered nav, material-detail mark or stitch-line symbol, consultation/menu right.
- States: transparent over hero, dark blurred after scroll, hidden during immersive philosophy/process moments.
- Interactions: underline grows like a thread line; nav text warms to bronze; consultation indicator glows softly.
- Responsive: desktop nav hidden on mobile; menu remains accessible.

Navigation Overlay:

- Purpose: private showroom-style navigation and contact surface.
- Structure: full-screen black atelier panel, left brand/contact, center craft image, right large serif nav links, bottom legal row.
- Imagery: hand stitching leather, upholstery workshop, velvet closeup, restored sofa silhouette.
- Animation: panel fades in; links rise slowly; center image scales `0.94 -> 1`; close icon rotates into place.
- Accessibility: ESC closes, focus trap recommended, scroll lock, clear ARIA labels.

Hero:

- Purpose: establish furniture restoration as luxury preservation.
- Structure: fullscreen media, dark leather vignette, centered serif headline, small atelier label, consultation CTA.
- Headline options: "Furniture Deserves a Second Life", "Where Craftsmanship Lives On", "The Art of Luxury Restoration".
- States: loader-gated intro, material reveal, text mask reveal.
- Interaction: scroll transitions through craft scenes: leather, velvet, frame, final restored sofa.

Button:

- Purpose: restrained premium action.
- Variants: primary, secondary, quiet.
- Structure: border-led rectangle, warm ivory/bronze fill on hover, optional stitch-line sweep.
- States: hover, focus-visible, disabled, loading.
- Copy examples: "Request a Restoration Consultation", "View Transformations", "Explore Materials".

MediaFrame:

- Purpose: optimized tactile image presentation.
- Structure: `figure`, `next/image`, stable aspect ratio, caption slot optional.
- States: loading skeleton, reveal, hover scale.
- Imagery rules: show material truth: leather grain, seam, cushion profile, velvet nap, wood finish.

BeforeAfterReveal:

- Purpose: signature proof component.
- Structure: two optimized images layered in one stable frame with a draggable or scroll-controlled mask.
- States: initial before, active split, final after.
- Accessibility: keyboard range input fallback and descriptive labels.

ProcessStep:

- Purpose: communicate the restoration process.
- Fields: number, title, summary, material note, optional image.
- Steps: Assessment, Material Selection, Artisan Restoration, Final Refinement.

TransformationCard:

- Purpose: case-study preview.
- Fields: slug, title, furniture type, material, original condition, final result, hero image.
- Interaction: hover reveals material metadata and a refined underline.

MaterialSwatch:

- Purpose: material collection item.
- Fields: name, category, texture image, care note, suitable use.
- Materials: Italian Leather, Velvet, Boucle, Suede, Linen, Premium Wood Finishes.

ConsultationForm:

- Purpose: premium inquiry and photo upload.
- Fields: name, phone, email, location, upload furniture photos, service required, message.
- States: idle, validation error, uploading, submitting, success.
- UX: labels always visible; errors are precise; upload area feels like a curated document drop, not a generic file input.

Skeleton:

- Purpose: layout-matching loading state.
- Rule: use skeletons, never spinners.
- Shape should match hero, cards, process rows, and form fields.

Footer:

- Purpose: final atelier scene.
- Structure: oversized SS Interior wordmark, slogan, consultation CTA, service categories, contact details.
- Tone: closure, warmth, discretion.

## 6. Animation Audit

Global loader:

- Trigger: initial app mount until motion gate completes.
- Concept: the atelier prepares itself.
- Visual: black background, leather grain texture, bronze stitch path, small SS Interior wordmark, warm light passing across a material surface.
- Duration: 2.8s-3.2s plus 0.7s dissolve.
- Ease: `power3.inOut`, `power3.out`, `power2.out`.
- Sequence:
  1. Leather grain appears from darkness.
  2. Stitch path draws horizontally or circularly using SVG stroke-dashoffset.
  3. Brand appears softly.
  4. Material macro brightens with warm bronze edge light.
  5. Slogan appears: "Restoring Luxury. Preserving Stories."
  6. Loader dissolves before hero begins.
- Reduced motion: immediate brand reveal, no path animation, quick dissolve.

Hero intro:

- Trigger: loader completion.
- Initial states: media scale `1.06`, opacity `0`; headline lines yPercent `120`; CTA yPercent `80`; header yPercent `-100`.
- Animation: media settles to scale `1`, headline reveals line by line through mask, CTA enters last.
- Duration: media 2.2s, headline 1.4s with 0.12s stagger, CTA 1s.
- Intent: the furniture feels unveiled, not advertised.

Hero scroll:

- Trigger: hero root, start `top top`, end `+=400%`.
- Pinning: true on desktop.
- Scrub: `1.3-1.6`.
- Scenes:
  1. Leather closeup and hand stitching.
  2. Velvet upholstery and cushion shaping.
  3. Frame repair and wood detail.
  4. Finished luxury sofa in an interior.
- Transition: incoming scene uses clip-path fabric reveal from bottom or side; previous text exits upward; new text enters from masked baseline.
- Image behavior: scale `1.1 -> 1`, yPercent `8 -> 0`, contrast subtly warms.

Restoration process animation:

- Trigger: section scroll.
- Pattern: process steps reveal as measured atelier chapters.
- Values: step line draws from `scaleX(0) -> 1`; number deblurs; image mask opens from center.
- Motion density: low. Each process step needs enough stillness to read.

Signature transformations horizontal sequence:

- Trigger: transformation section, start `top top`, end based on card count.
- Pinning: desktop only.
- Scrub: `1.5`.
- Behavior: case-study cards move horizontally; active card centers; before/after mask opens; image expands from all sides equally.
- Depth: inactive cards slightly smaller and lower opacity; active card has clean contrast and bronze metadata.
- Mobile: no pinning; vertical cards with tap/drag before-after reveal.

Before/after reveal:

- Trigger: scroll active state, hover, drag, or keyboard range.
- Values: after image mask width `0% -> 100%`; center divider follows progress.
- Ease: for scroll use `none`; for hover use `power3.out`.
- Accessibility: provide separate before and after captions for screen readers.

Material texture transitions:

- Trigger: swatch hover or active material tab.
- Behavior: texture image scale `1.02 -> 1.06`, overlay warms, caption line draws.
- Avoid: spinning, bouncing, elastic cartoon physics.

Navigation overlay:

- Trigger: menu button.
- Duration: panel 0.5s, content 0.8-1.2s.
- Ease: `power4.out`.
- Values: panel opacity `0 -> 1`; links y `36 -> 0`; image scale `0.94 -> 1`; contact block x `-32 -> 0`.

Page transitions:

- Concept: moving from one showroom room to another.
- Behavior: dark veil, typography dissolve, subtle material grain continuity.
- Duration: 420ms-700ms.

CSS equivalents:

- Use `clip-path` transitions for simple reveals.
- Use `stroke-dashoffset` keyframes for stitch-line loader.
- Use `transform` and `opacity` only for performant hover states.

GSAP equivalents:

- Use `ScrollTrigger` for pinned hero, process chapters, and horizontal transformations.
- Use `gsap.context()` with cleanup.
- Dynamically import GSAP only inside client motion directors.

Framer Motion equivalents:

- Use sparingly for page transition opacity or small component state.
- Do not use Framer Motion for heavy scroll timelines when GSAP is more precise.

## 7. Page-by-Page Breakdown

Homepage:

- Purpose: reposition restoration as luxury preservation and drive consultation requests.
- Section order:
  1. Hero.
  2. The Craft Behind Every Restoration.
  3. Restoration Process.
  4. Signature Transformations.
  5. Material Collection.
  6. Trusted Partnerships.
  7. Restoration Consultation.
- Conversion goal: move qualified clients from emotional attachment to private consultation.
- Content hierarchy: tactile proof first, philosophy second, process third, case studies fourth, materials fifth, trusted environments sixth, form seventh.
- Animation strategy: hero and signature transformations can be immersive; philosophy/process should be calm; consultation should be mostly still.
- Mobile behavior: full-bleed hero, stacked process, vertical transformations, accessible upload form.
- SEO: target luxury upholstery, premium furniture restoration, sofa restoration, leather repair, bespoke upholstery, furniture transformation.
- Wireframe:
  - Loader.
  - Header.
  - Fullscreen hero with material imagery.
  - Editorial craft statement.
  - Four-step restoration process.
  - Pinned/stacked transformation gallery.
  - Material swatches and macro photography.
  - Trusted environments grid.
  - Consultation form.
  - Atmospheric footer.

Transformation Gallery:

- Purpose: show proof through premium case studies.
- Layout: editorial intro, filter by service/material/furniture type, image-led case-study rows or cards.
- Case studies:
  - Chesterfield Revival.
  - Leather Restoration.
  - Velvet Transformation.
  - Heritage Sofa Restoration.
  - Executive Lounge Renewal.
  - Designer Furniture Revival.
- Conversion goal: get users to request a similar restoration.
- Animation: reveal rows with clip masks; before/after interactions.
- Mobile: filter controls become segmented or select menu; cards stack.
- SEO: gallery metadata should use transformation and restoration language, not portfolio-only terms.

Transformation Detail:

- Purpose: document one restoration with enough evidence to build trust.
- Section order:
  1. Hero with finished furniture.
  2. Original Condition.
  3. Restoration Challenges.
  4. Material Selection.
  5. Craftsmanship Process.
  6. Final Transformation.
  7. Consultation CTA.
- Visual hierarchy: final result creates aspiration; process proves competence.
- Animation: before/after reveal and process image masks.
- SEO: dynamic metadata per transformation.
- Schema: creative work/service schema with image and description.

Philosophy:

- Purpose: establish SS Interior's restoration doctrine.
- Chapters:
  1. Respect the Original.
  2. Restore, Don't Replace.
  3. Craftsmanship Matters.
  4. Materials Define Quality.
  5. Luxury Lives in Details.
- Layout: pinned editorial sequence with material imagery and chapter tracker.
- Conversion goal: communicate taste and ethics of preservation.
- Animation: slow chapter crossfades, stitch-line progress, material macro transitions.
- Mobile: simplified vertical chapters with reduced motion.

Journal:

- Purpose: editorial authority.
- Article themes: leather care, choosing upholstery fabric, when to restore vs replace, preserving heirloom sofas, hotel seating maintenance, velvet and boucle care.
- Layout: quiet editorial list with category labels.
- Conversion goal: educate and build trust.

Homes, Hotels & Commercial Spaces:

- Purpose: trusted partnerships.
- Audience categories:
  - Luxury Homes.
  - Villas.
  - Hotels.
  - Restaurants.
  - Corporate Offices.
  - Interior Designers.
- Layout: environment-led editorial grid with use-case copy.
- Conversion goal: prove that SS Interior can serve both private and professional clients.

Restoration Consultation:

- Purpose: qualified lead capture.
- Layout: two-column editorial intro and premium form.
- Fields: name, phone, email, location, upload furniture photos, service required, message.
- UX: the upload step should encourage front, side, damage/detail, and full-room context photos.
- Success state: refined confirmation and next-step expectation.

## 8. Code Architecture Analysis

Recommended architecture:

- Next.js App Router with Server Components by default.
- Pages fetch data only.
- Sections receive typed props and own layout.
- UI components remain stateless and reusable.
- Client components exist only for interactions, forms, uploads, before/after reveal, GSAP motion, and navigation state.

Folder structure:

- `app/`: routes, metadata, loading/error boundaries.
- `components/sections/`: homepage and route sections.
- `components/ui/`: buttons, headings, containers, media, skeletons, swatches.
- `components/motion/`: loader, page transition, scroll directors, reveal hooks.
- `components/navigation/`: header, overlay, mobile menu.
- `components/consultation/`: consultation form and upload UI.
- `lib/api/`: data fetching and CMS adapters.
- `lib/media/`: image sizes and media helpers.
- `lib/seo/`: metadata and schema helpers.
- `types/`: content, transformation, material, consultation, SEO.
- `content/seed/`: local seed content.

Naming conventions:

- Use domain language: `Transformation`, `Material`, `ProcessStep`, `ConsultationRequest`.
- Avoid generic service-shop names like `RepairItem` or `FixCard`.
- Components should describe their role: `SignatureTransformationsSection`, `MaterialCollectionSection`, `RestorationConsultationSection`.

State management:

- Local state for menu overlay and form field interaction.
- Server actions or API routes for consultation submission.
- Upload state isolated to consultation form.
- No global business state unless adding cart-like quote management later.

API architecture:

- `getHomePage()`.
- `getTransformations()`.
- `getTransformationBySlug(slug)`.
- `getMaterials()`.
- `getTrustedPartnerships()`.
- `submitConsultationRequest(formData)`.

SEO implementation:

- Metadata helper for titles, descriptions, canonical paths, Open Graph.
- Organization/local business schema.
- Service schema for upholstery/restoration.
- CreativeWork or Product-like schema for transformation case studies.
- Sitemap and robots routes.

Performance optimization:

- Use `next/image` for all media.
- Stable aspect ratios for every image frame.
- Priority only for hero LCP image/video poster.
- Lazy-load gallery and material images.
- Dynamic import GSAP and ScrollTrigger.
- Use Suspense for async sections and skeleton loaders.
- Keep before/after components lightweight and only hydrate when visible if possible.

Image optimization:

- Store multiple furniture image types:
  - Hero material closeups.
  - Before images.
  - After images.
  - Process images.
  - Material macro swatches.
- Always define alt text:
  - Meaningful: "Restored tan leather Chesterfield sofa with hand-finished seams."
  - Decorative: empty alt with `aria-hidden` where appropriate.

Accessibility implementation:

- Semantic sectioning and headings.
- Keyboard-operable before/after reveal.
- Clear form labels.
- Accessible upload instructions.
- `prefers-reduced-motion` support.
- Visible focus states using bronze outlines.
- Do not globally hide all scrollbars unless a visible scroll cue exists.

Code quality:

- Strict TypeScript.
- No `any`.
- Typed API responses.
- Reusable interfaces in `types/`.
- No API calls inside presentational components.
- Avoid duplicate fetching.
- Keep GSAP selectors scoped with refs and `gsap.context()`.

Scalability:

- Content can later move from seed files to CMS without changing sections.
- Materials and transformations should be data-driven.
- Consultation services should be enum-backed.
- Gallery filters should use typed categories.

Security considerations:

- Validate uploaded file types and sizes.
- Never trust client file metadata.
- Sanitize form input.
- Rate-limit consultation submissions.
- Store uploads securely.
- Avoid exposing private client project details without consent.

Technical debt to avoid:

- Raw `<img>` tags for important content.
- Hardcoded transformation data inside UI components.
- Client-side fetching in sections.
- Animation code mixed into server components.
- Placeholder `href="#"` links.
- Inaccessible custom upload controls.

## 9. Design Tokens

### colors.ts

```ts
export const colors = {
  atelierBlack: "#0B0B0B",
  atelierSurface: "#111111",
  charcoal: "#1A1A1A",
  leatherShadow: "#2A2420",
  walnutShadow: "#3A3028",
  ivory: "#F5F2EC",
  textileIvory: "#D8D0C3",
  editorialPaper: "#EEE8DC",
  bronze: "#C7A56A",
  premiumGold: "#B8935A",
  deepGold: "#9D7B4F",
  taupeText: "#6F6255",
  borderIvory: "rgba(245, 242, 236, 0.14)",
  borderBronze: "rgba(199, 165, 106, 0.34)",
  overlayDark: "rgba(11, 11, 11, 0.72)",
  overlayDeep: "rgba(11, 11, 11, 0.88)",
} as const;
```

### typography.ts

```ts
export const typography = {
  fontHeading: "Canela, 'Cormorant Garamond', Georgia, serif",
  fontBody: "'Neue Haas Grotesk', Inter, system-ui, sans-serif",
  fontMono: "'Neue Haas Grotesk Text', Inter, system-ui, sans-serif",
  hero: { size: "clamp(3rem, 8vw, 7.25rem)", lineHeight: "0.92", weight: 300 },
  display: { size: "clamp(2.5rem, 5.6vw, 5.5rem)", lineHeight: "1", weight: 300 },
  title: { size: "clamp(2rem, 3.6vw, 3.75rem)", lineHeight: "1.04", weight: 300 },
  section: { size: "clamp(1.65rem, 2.2vw, 2.5rem)", lineHeight: "1.12", weight: 300 },
  lead: { size: "clamp(1rem, 0.95rem + 0.3vw, 1.25rem)", lineHeight: "1.82", weight: 400 },
  body: { size: "1rem", lineHeight: "1.75", weight: 400 },
  eyebrow: { size: "0.6875rem", lineHeight: "1.2", weight: 500, letterSpacing: "0.2em" },
} as const;
```

### spacing.ts

```ts
export const spacing = {
  containerLuxury: "min(1440px, calc(100vw - 40px))",
  containerEditorial: "min(1120px, calc(100vw - 40px))",
  containerIntimate: "min(760px, calc(100vw - 40px))",
  sectionYMobile: "5rem",
  sectionYTablet: "7rem",
  sectionYDesktop: "10rem",
  headerHome: "88px",
  headerInner: "68px",
  processGap: "clamp(2rem, 4vw, 4rem)",
  formGap: "1.125rem",
} as const;
```

### animations.ts

```ts
export const animations = {
  luxuryEase: "cubic-bezier(0.22, 1, 0.36, 1)",
  materialEase: "cubic-bezier(0.19, 1, 0.22, 1)",
  gsapEaseOut: "power3.out",
  gsapEaseInOut: "power3.inOut",
  loaderDuration: 3,
  loaderDissolve: 0.7,
  scrollScrub: 1.5,
  parallaxScrub: 1.2,
  revealDuration: 1.2,
  beforeAfterDuration: 1,
  hoverDuration: 0.5,
} as const;
```

### breakpoints.ts

```ts
export const breakpoints = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;
```

### shadows.ts

```ts
export const shadows = {
  deepAtelier: "0 28px 80px rgba(0, 0, 0, 0.42)",
  materialInset: "inset 0 0 90px rgba(0, 0, 0, 0.72)",
  bronzeGlow: "0 0 22px rgba(199, 165, 106, 0.22)",
  formElevation: "0 24px 70px rgba(0, 0, 0, 0.34)",
  imagePlate: "0 18px 56px rgba(0, 0, 0, 0.3)",
} as const;
```

### zIndex.ts

```ts
export const zIndex = {
  base: 0,
  atmosphere: 10,
  content: 20,
  sticky: 40,
  header: 50,
  consultationPanel: 70,
  navigationOverlay: 100,
  loader: 9999,
} as const;
```

### borderRadius.ts

```ts
export const borderRadius = {
  none: "0",
  subtle: "4px",
  card: "8px",
  form: "10px",
  mediaSoft: "12px",
  circle: "9999px",
} as const;
```

## 10. Technical Improvements

1. Build a data-driven SS Interior content layer.
   - Define typed seed data for transformations, materials, process steps, partnerships, and journal articles.
   - Keep all copy outside UI components.

2. Implement Suspense for async sections.
   - Wrap transformation gallery previews, material collection, and trusted partnerships with layout-matching skeletons.
   - Avoid blocking the entire homepage while non-critical sections load.

3. Use optimized media everywhere.
   - Convert all furniture imagery to `next/image`.
   - Use stable aspect ratios and responsive `sizes`.
   - Use priority only for the hero image or video poster.

4. Create a robust before/after component.
   - Support scroll-driven reveal, pointer drag, keyboard range, and reduced-motion fallback.
   - Provide accessible labels for original and final states.

5. Add premium upload handling.
   - Allow multiple furniture photos.
   - Validate file type and size.
   - Show elegant thumbnails and upload progress.
   - Provide guidance on recommended photo angles.

6. Complete loading and error systems.
   - Add global and route-level `loading.tsx`.
   - Add global and route-level `error.tsx`.
   - Use skeleton loaders, never spinners.

7. Preserve minimal JavaScript.
   - Keep editorial sections server-rendered.
   - Hydrate only motion directors, forms, upload controls, and interactive before/after components.
   - Dynamically import heavy animation code.

8. Improve accessibility without losing luxury.
   - Add refined `:focus-visible` rings.
   - Ensure menu overlay is keyboard usable.
   - Respect reduced motion.
   - Keep contrast high against dark imagery.

9. Add SEO schema.
   - Organization or LocalBusiness.
   - Service schema for upholstery and restoration.
   - Case-study schema for transformations.
   - Breadcrumb schema for gallery detail pages.

10. Prepare degraded experiences.
   - Mobile and weak devices should receive simplified scroll effects.
   - Before/after reveal should work without GSAP.
   - Video should have image fallback.
   - Reduced motion should keep all content visible.

## 11. Master Recreation Prompt

Build a production-grade Next.js 15+ or 16 App Router website named SS Interior. SS Interior is a luxury furniture restoration and bespoke upholstery atelier with the slogan "Restoring Luxury. Preserving Stories." It must not feel like a local repair shop, cheap upholstery service, home-service provider, marketplace vendor, or furniture technician website. It must feel like an ultra-premium Italian-inspired restoration house dedicated to preserving and transforming exceptional furniture through handcrafted craftsmanship, premium materials, and timeless restoration techniques.

The experience should be inspired by Natuzzi Italia, Poltrona Frau, Restoration Hardware, Minotti, Flexform, and B&B Italia. It should feel tactile, cinematic, warm, quiet, editorial, and deeply material-led. The user should feel they are entering a private restoration atelier where leather, velvet, wood, stitching, proportion, and memory are treated with respect.

Use Next.js App Router, TypeScript strict mode, Tailwind CSS, React Server Components by default, GSAP for cinematic scroll/mask/pinning animations, and `next/image` for all imagery. Use Framer Motion only for lightweight route or component transitions where it does not increase unnecessary bundle weight.

Follow strict architecture:

- Page = data layer, server only.
- Section = layout layer.
- UI = presentational layer.
- Data flow = API -> `lib/api` -> Page -> Section -> UI.
- No API calls inside components.
- No `"use client"` in pages.
- Client components only for interaction, forms, uploads, GSAP, browser APIs, and before/after reveal.
- No `any`.
- Use reusable TypeScript interfaces.

Create this folder structure:

```txt
app/
  layout.tsx
  page.tsx
  loading.tsx
  error.tsx
  not-found.tsx
  sitemap.ts
  robots.ts
  transformation-gallery/
    page.tsx
    loading.tsx
    error.tsx
    [slug]/
      page.tsx
      loading.tsx
      error.tsx
  philosophy/
    page.tsx
    loading.tsx
    error.tsx
  journal/
    page.tsx
    [slug]/page.tsx
  spaces/
    page.tsx
  restoration-consultation/
    page.tsx
    actions.ts
components/
  brand/
  consultation/
  motion/
  navigation/
  sections/
  ui/
content/
  seed/
lib/
  api/
  media/
  seo/
  utils/
types/
public/
```

Use this visual language:

- Backgrounds: `#0B0B0B`, `#111111`, `#1A1A1A`.
- Text: `#F5F2EC`.
- Luxury bronze: `#C7A56A`.
- Premium gold: `#B8935A`.
- Deep accent: `#9D7B4F`.
- Avoid all bright colors.
- Use leather grain, fabric texture, warm bronze light, charcoal darkness, subtle shadow, and editorial restraint.
- Never use decorative gradient blobs or startup-style visuals.

Use these imagery directions:

- Hand stitching leather.
- Premium velvet upholstery.
- Italian leather textures.
- Luxury sofa closeups.
- Furniture craftsmanship.
- Wood detailing.
- Heritage restoration.
- Artisan workshops.
- Material macro photography.
- Before and after transformations.
- Finished sofas in refined homes, hotels, lounges, restaurants, and offices.

Do not use:

- Buildings as the main subject.
- Villas or real estate hero imagery.
- City skylines.
- Generic handyman repair imagery.
- Cheap service photos.
- Overly staged stock smiles.

Use this typography direction:

- Headings: Canela or Cormorant Garamond.
- Body: Neue Haas Grotesk or Inter.
- Typography must feel like a luxury interiors magazine.
- Use large serif headlines, quiet body copy, small uppercase labels, and restrained line lengths.

Implement these core UI components:

- `Container`: luxury, editorial, intimate widths.
- `SectionShell`: dark, charcoal, and warm editorial tones.
- `Heading`: hero, display, title, section variants.
- `Eyebrow`: uppercase craft label.
- `Button`: primary, secondary, quiet variants with bronze or ivory hover fill.
- `MediaFrame`: optimized image wrapper with reveal and caption support.
- `BeforeAfterReveal`: accessible transformation reveal.
- `MaterialSwatch`: tactile material item.
- `ProcessStep`: numbered restoration process.
- `TransformationCard`: case-study preview.
- `Skeleton`: layout-matching shimmer blocks.
- `ConsultationForm`: premium form with file upload.

Homepage requirements:

1. Hero:
   - Fullscreen cinematic material scene.
   - Headline options: "Furniture Deserves a Second Life", "Where Craftsmanship Lives On", "The Art of Luxury Restoration".
   - Supporting copy should position SS Interior as a luxury atelier preserving furniture stories through premium restoration.
   - CTA: "Request a Restoration Consultation".
   - Secondary CTA: "View Transformations".
   - Use video or optimized imagery of hand stitching, leather, velvet, and finished sofa.
   - Loader must complete before hero animation starts.

2. The Craft Behind Every Restoration:
   - Replace generic philosophy with heritage, craftsmanship, materials, attention to detail, and preservation.
   - Copy should feel editorial and human.
   - Use slow text masks and material imagery.

3. Restoration Process:
   - Four steps:
     - 01 Assessment.
     - 02 Material Selection.
     - 03 Artisan Restoration.
     - 04 Final Refinement.
   - Each step should explain what happens and why it protects the furniture's value.
   - Use line-drawing or stitch-path animation.

4. Signature Transformations:
   - Replace residences with luxury furniture case studies.
   - Include Chesterfield Revival, Leather Restoration, Velvet Transformation, Heritage Sofa Restoration, Executive Lounge Renewal, Designer Furniture Revival.
   - Desktop: pinned horizontal cinematic sequence.
   - Mobile: vertical cards.
   - Use before/after reveals and premium image scaling.

5. Material Collection:
   - Include Italian Leather, Velvet, Boucle, Suede, Linen, Premium Wood Finishes.
   - Show macro photography, usage guidance, and care notes.
   - Motion should feel like fabric being revealed, not a generic fade.

6. Trusted Partnerships:
   - Position SS Interior as trusted by luxury homes, villas, hotels, restaurants, corporate offices, and interior designers.
   - Use refined environment categories and restrained proof language.

7. Restoration Consultation:
   - Premium consultation section and form.
   - Fields: name, phone, email, location, upload furniture photos, service required, message.
   - Upload guidance should ask for front view, side view, damaged areas, and material closeups.
   - Success state should describe the next step calmly.

Transformation Gallery page:

- Rename showcase to Transformation Gallery.
- Every project is a restoration case study.
- Structure each case study around Original Condition, Restoration Challenges, Material Selection, Craftsmanship Process, Final Transformation.
- Include filters by service, material, and furniture type.
- Use premium before/after imagery.

Philosophy page:

- Create five chapters:
  - Chapter 01: Respect the Original.
  - Chapter 02: Restore, Don't Replace.
  - Chapter 03: Craftsmanship Matters.
  - Chapter 04: Materials Define Quality.
  - Chapter 05: Luxury Lives in Details.
- Use pinned editorial storytelling with material imagery, stitch-line progress, and chapter tracker.
- Navbar may disappear during immersive section and return after exit.

Animation requirements:

- Use leather reveal animations, stitch path drawing, material texture transitions, before/after reveals, luxury image scaling, editorial parallax, fabric overlays, and cinematic craftsmanship storytelling.
- Motion should be slow, premium, intentional, and refined.
- Never playful.
- Use GSAP only in client components.
- Dynamically import GSAP and ScrollTrigger.
- Use `gsap.context()` and cleanup.
- Respect `prefers-reduced-motion`.
- Avoid heavy animation on initial load.

Performance requirements:

- Use `next/image` for every image.
- Define width and height or stable `fill` parent dimensions.
- Use priority only for above-the-fold LCP media.
- Lazy load all other images.
- Prevent CLS.
- Stream async sections with Suspense.
- Use route-level and global loading/error files.
- Use skeleton loaders, not spinners.
- Keep JavaScript minimal.
- Target Lighthouse 95+.

Accessibility requirements:

- Semantic HTML.
- Proper alt text.
- Empty alt for decorative texture images.
- Keyboard-accessible navigation and before/after reveal.
- Clear form labels and validation.
- Accessible file upload.
- Visible bronze/ivory focus states.
- Reduced motion mode.

SEO requirements:

- Use Next.js metadata API.
- Add canonical paths and Open Graph metadata.
- Use luxury editorial SEO language: luxury furniture restoration, bespoke upholstery, sofa restoration, leather repair, furniture transformation, heritage furniture revival, premium upholstery atelier.
- Avoid keyword stuffing.
- Add Organization/LocalBusiness schema, Service schema, and transformation case-study schema.

Copywriting requirements:

- All copy must feel editorial, luxury, sophisticated, timeless, and high-ticket.
- Avoid generic AI phrasing, marketing cliches, startup language, salesy copy, and cheap service language.
- Write as if for an international luxury furniture house.
- Emphasize preservation, material intelligence, craftsmanship, discretion, and emotional continuity.

The finished website must make visitors feel that their furniture is not being repaired; it is being respectfully restored, materially refined, and given a second life worthy of the spaces and stories it belongs to.
