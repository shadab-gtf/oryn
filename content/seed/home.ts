import type { HomePageContent, JournalArticle } from "@/types/content";

export const homePageContent: HomePageContent = {
  hero: {
    label: "Oryn Architecture",
    headline: "LUXURY ENGINEERED THROUGH SILENCE.",
    body: "We construct globally elite cinematic experiences for the world's finest architectural assets. The interface remains silent so the property's atmosphere can speak.",
    support: "Engineered for luxury developers where light, geometry, and spatial pacing command the highest perception.",
    primaryCta: {
      label: "Enter the showcase",
      href: "/showcase",
    },
    secondaryCta: {
      label: "Initiate a private inquiry",
      href: "/private-inquiry",
    },
    media: {
      src: "/videos/hero.mp4",
      alt: "A restrained concrete and glass estate breathing with evening light",
      width: 1920,
      height: 1080,
    },
  },
  philosophy: {
    label: "The Doctrine",
    headline: "Architecture is emotion. A website is a physical space.",
    body: "We organize digital presence exactly as a master architect organizes physical space: through the strict control of pacing, negative space, and material shadow. Our luxury is our restraint.",
    support: "We do not follow trends. We establish timeless digital permanence.",
  },
  spatialIntelligence: {
    label: "Spatial Intelligence",
    headline: "The manipulation of perceived time.",
    body: "By utilizing cinematic scroll inertia, atmospheric parallax, and editorial typography rhythms, we physically slow the viewer down. We force them to absorb the gravity of the property.",
    support: "Every interaction behaves as a deliberate threshold.",
  },
  materialLanguage: {
    label: "Material Language",
    headline: "Surfaces with absolute tactile weight.",
    body: "We do not merely display images. We render architectural glass, deep charcoal shadow, and metallic reflections using deterministic, GPU-accelerated motion systems.",
  },
  futureArchitecture: {
    label: "Enterprise Governance",
    headline: "Built to outlast the internet's chaos.",
    body: "Our ecosystems are built on a strict server-first, hydration-safe Next.js architecture. They are flawlessly performant, globally scalable, and perfectly memory-safe.",
  },
  privateInquiry: {
    label: "Private Commission",
    headline: "A conversation requires an invitation.",
    body: "Submit the architectural context, location, and aspiration of your spatial project. We curate our partnerships selectively to maintain our standard of execution.",
    support: "Reserved for ultra-high-net-worth real estate and global hospitality.",
  },
};

export const journalArticles: JournalArticle[] = [
  {
    slug: "cinematic-property-storytelling",
    title: "Cinematic Property Storytelling Without The Spectacle",
    excerpt:
      "An exploration of how intentional visual silence and architectural typography can command higher perceived property value than generic digital noise.",
    category: "Philosophy",
    publishedAt: "2026-05-01",
  },
  {
    slug: "architecture-as-digital-atmosphere",
    title: "When Code Becomes Architectural Atmosphere",
    excerpt:
      "A technical monograph on our use of GSAP context isolation and deterministic hydration to render flawless, 60fps glass and shadow interactions.",
    category: "Engineering",
    publishedAt: "2026-04-18",
  },
];
