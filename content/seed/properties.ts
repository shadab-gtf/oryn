import type { Property } from "@/types/property";

export const properties: Property[] = [
  {
    slug: "monaco-waterfront-residence",
    title: "Monaco Waterfront Residence",
    market: "Monaco",
    location: "Larvotto Waterfront",
    typology: "Private residence",
    status: "Private preview",
    summary:
      "A study in restrained atmosphere. This waterfront residence uses soft stone, glass, and the measured theatre of Mediterranean light to command emotional gravity.",
    hero: {
      src: "/media/monaco-residence.jpg",
      alt: "A refined waterfront residence immersed in warm interior light and structural glass",
      width: 1800,
      height: 1200,
    },
    metrics: [
      { label: "Market", value: "Monaco" },
      { label: "Mode", value: "Private preview" },
      { label: "Focus", value: "Waterfront exclusivity" },
    ],
    chapters: [
      {
        label: "Atmosphere",
        headline: "A cinematic composition of horizon and restraint.",
        body: "The digital experience opens deliberately slowly, allowing the water, stone, and interior shadow sufficient breathing room to establish an elite emotional register.",
      },
      {
        label: "Detail",
        headline: "Material silence carries the narrative.",
        body: "Bronze joinery, pale stone, and softened glass reflections are sequenced as profound architectural details rather than mere decorative claims. The UI dissolves to let the material speak.",
      },
    ],
  },
  {
    slug: "dubai-private-villa",
    title: "Dubai Private Villa",
    market: "Dubai",
    location: "Palm Jumeirah",
    typology: "Private villa",
    status: "By appointment",
    summary:
      "An architectural documentary wrapped in a digital interface. Designed around absolute privacy, axial movement, and a cinematic relationship between interior and sky.",
    hero: {
      src: "/media/dubai-villa.jpg",
      alt: "A private, monolithic modern villa with warm architectural lighting cutting through the evening",
      width: 1800,
      height: 1200,
    },
    metrics: [
      { label: "Market", value: "Dubai" },
      { label: "Mode", value: "By appointment" },
      { label: "Focus", value: "Private resort sanctuary" },
    ],
    chapters: [
      {
        label: "Arrival",
        headline: "The first impression is intentionally withheld.",
        body: "The digital loading sequence mirrors a private arrival. We reveal the scale, threshold, and water only after the cinematic inertia of the page has set its calm pace.",
      },
      {
        label: "Living",
        headline: "Hospitality calm, engineered at residential scale.",
        body: "The narrative rejects the chaotic standard of real estate marketing, favoring absolute silence and proportion. The villa feels deeply considered, not merely displayed.",
      },
    ],
  },
  {
    slug: "new-york-sky-residence",
    title: "New York Sky Residence",
    market: "New York",
    location: "Tribeca",
    typology: "Penthouse residence",
    status: "Concept narrative",
    summary:
      "A vertical sanctuary where the chaotic skyline, raw material texture, and open plan are edited into a perfectly composed, private cinematic viewing.",
    hero: {
      src: "/media/new-york-sky.jpg",
      alt: "A contemporary penthouse living space defined by city light, deep shadow, and architectural restraint",
      width: 1800,
      height: 1200,
    },
    metrics: [
      { label: "Market", value: "New York" },
      { label: "Mode", value: "Concept narrative" },
      { label: "Focus", value: "Vertical sanctuary" },
    ],
    chapters: [
      {
        label: "Elevation",
        headline: "The skyline becomes a controlled architectural material.",
        body: "Views are framed via GSAP-driven scroll inertia as atmosphere, not spectacle. This editorial approach ensures the residence itself remains the commanding center of the experience.",
      },
      {
        label: "Sequence",
        headline: "A deliberate, quiet rhythm for a city that rarely pauses.",
        body: "By implementing a massive injection of negative space and highly regulated typography scaling, we slow the property down enough for its texture and proportion to truly register.",
      },
    ],
  },
];
