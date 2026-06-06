import type { HomePageContent, JournalArticle } from "@/types/content";

export const homePageContent: HomePageContent = {
  hero: {
    label: "SS Interior Atelier",
    headline: "RESTORING LUXURY. PRESERVING STORIES.",
    body: "We restore distinguished sofas, lounge pieces, and heritage furniture through hand-led upholstery, considered materials, and a quiet respect for the life already held within each piece.",
    support: "Created for homes, villas, hotels, restaurants, offices, and interior designers who believe exceptional furniture deserves continuity.",
    primaryCta: {
      label: "View transformations",
      href: "/showcase",
    },
    secondaryCta: {
      label: "Request a consultation",
      href: "/private-inquiry",
    },
    media: {
      src: "/media/ss-hero-atelier-stitching.png",
      alt: "A luxury upholstery atelier scene with warm leather, hand stitching, and refined material detail",
      width: 1920,
      height: 1080,
    },
  },
  philosophy: {
    label: "The Craft",
    headline: "The craft behind every restoration begins with respect.",
    body: "SS Interior studies proportion, age, material memory, and daily ritual before a single seam is opened. Every decision is made to preserve character while elevating comfort, finish, and longevity.",
    support: "We do not erase the story of a piece. We refine it until its next chapter feels inevitable.",
  },
  spatialIntelligence: {
    label: "Restoration Process",
    headline: "Assessment, material selection, artisan restoration, final refinement.",
    body: "Each transformation follows a deliberate atelier sequence: the original condition is understood, materials are selected with restraint, the work is shaped by hand, and the final surface is refined until it feels quietly complete.",
    support: "Nothing is rushed. Luxury is protected through patience, judgment, and detail.",
  },
  materialLanguage: {
    label: "Material Collection",
    headline: "Leather, velvet, boucle, suede, linen, and wood chosen with intention.",
    body: "Material is the soul of restoration. Italian leather, deep velvet, tailored boucle, quiet linen, soft suede, and refined wood finishes are selected for touch, durability, proportion, and emotional temperature.",
  },
  futureArchitecture: {
    label: "Atelier Standard",
    headline: "A restoration house built on material discipline.",
    body: "SS Interior combines traditional upholstery judgment with a precise digital consultation system, making each commission traceable, considered, and beautifully documented.",
  },
  privateInquiry: {
    label: "Restoration Consultation",
    headline: "Begin with the piece, its history, and the room it belongs to.",
    body: "Share the furniture, material, location, and desired transformation. SS Interior will review the details with the discretion of an atelier appointment.",
    support: "For luxury homes, villas, hotels, restaurants, executive spaces, and interior design studios.",
  },
};

export const journalArticles: JournalArticle[] = [
  {
    slug: "heritage-sofa-restoration",
    title: "Heritage Sofa Restoration Without Erasing Character",
    excerpt:
      "A study in preserving proportion, comfort, and patina while giving a treasured piece a more refined second life.",
    category: "Craft",
    publishedAt: "2026-05-01",
  },
  {
    slug: "materials-that-define-luxury",
    title: "Materials That Define Luxury Upholstery",
    excerpt:
      "Italian leather, velvet, boucle, suede, linen, and wood finishes each carry a different language of touch, restraint, and permanence.",
    category: "Materials",
    publishedAt: "2026-04-18",
  },
];
