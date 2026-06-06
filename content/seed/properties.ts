import type { Property } from "@/types/property";

export const properties: Property[] = [
  {
    slug: "chesterfield-revival",
    title: "Chesterfield Revival",
    market: "Italian Leather",
    location: "Private villa lounge",
    typology: "Heritage sofa",
    status: "Atelier review",
    summary:
      "A deep-buttoned Chesterfield renewed through hand-selected leather, careful cushioning, and a restrained finish that preserves the authority of the original silhouette.",
    hero: {
      src: "/media/ss-chesterfield-revival.png",
      alt: "A restored leather Chesterfield sofa with deep buttoning and warm atelier lighting",
      width: 1800,
      height: 1200,
    },
    metrics: [
      { label: "Material", value: "Italian leather" },
      { label: "Piece", value: "Chesterfield" },
      { label: "Focus", value: "Heritage continuity" },
    ],
    chapters: [
      {
        label: "Original Condition",
        headline: "The piece carried presence, memory, and visible years of use.",
        body: "The original frame and buttoning were retained wherever possible, allowing the restoration to protect the sofa's identity rather than replace its character.",
      },
      {
        label: "Final Transformation",
        headline: "Leather, depth, and proportion returned with quiet authority.",
        body: "A warmer leather tone, refined cushioning, and hand-finished seams brought the Chesterfield back to a state of elegance suited to a private lounge.",
      },
    ],
  },
  {
    slug: "velvet-transformation",
    title: "Velvet Transformation",
    market: "Deep Velvet",
    location: "Boutique hospitality suite",
    typology: "Curved lounge sofa",
    status: "By appointment",
    summary:
      "A sculptural lounge piece transformed with premium velvet, softened volume, and a richer tonal presence for a hospitality interior.",
    hero: {
      src: "/media/ss-velvet-transformation.png",
      alt: "A luxury velvet upholstered sofa with sculptural cushions in a refined hospitality suite",
      width: 1800,
      height: 1200,
    },
    metrics: [
      { label: "Material", value: "Velvet" },
      { label: "Piece", value: "Lounge sofa" },
      { label: "Focus", value: "Hospitality elegance" },
    ],
    chapters: [
      {
        label: "Material Selection",
        headline: "Velvet was chosen for depth, softness, and evening presence.",
        body: "The textile direction balanced durability with a luxurious hand, creating a surface that holds light beautifully without overwhelming the room.",
      },
      {
        label: "Craftsmanship Process",
        headline: "Every curve was shaped to feel tailored, not newly imposed.",
        body: "The upholstery work restored volume and tactility while keeping the sofa's sculptural rhythm calm and refined.",
      },
    ],
  },
  {
    slug: "executive-lounge-renewal",
    title: "Executive Lounge Renewal",
    market: "Leather & Wood",
    location: "Corporate reception lounge",
    typology: "Executive seating",
    status: "Transformation study",
    summary:
      "A suite of executive seating renewed with supple leather, disciplined seam work, and restored wood detailing for a quieter, more assured reception environment.",
    hero: {
      src: "/media/ss-executive-lounge-renewal.png",
      alt: "Executive lounge chairs renewed in dark leather with refined wood detailing",
      width: 1800,
      height: 1200,
    },
    metrics: [
      { label: "Material", value: "Leather & wood" },
      { label: "Piece", value: "Lounge seating" },
      { label: "Focus", value: "Commercial refinement" },
    ],
    chapters: [
      {
        label: "Restoration Challenges",
        headline: "The seating needed authority without becoming visually heavy.",
        body: "Material tone, cushion density, and wood finish were considered together so the renewed lounge would feel composed, durable, and discreet.",
      },
      {
        label: "Final Transformation",
        headline: "A professional interior regained tactile confidence.",
        body: "The renewed pieces now carry a refined executive presence, shaped by leather depth, polished wood, and exacting upholstery detail.",
      },
    ],
  },
];
