import type { TopicalPage } from "@/types/topical-page";

const atelierHero = {
  src: "/media/ss-hero-atelier-stitching.png",
  alt: "Luxury furniture restoration atelier with hand-stitched Italian leather",
  width: 1800,
  height: 1200,
};

const chesterfield = {
  src: "/media/ss-chesterfield-revival.png",
  alt: "Restored cognac leather Chesterfield sofa with deep button tufting",
  width: 1800,
  height: 1200,
};

const velvet = {
  src: "/media/ss-velvet-transformation.png",
  alt: "Luxury velvet upholstery transformation on a curved lounge sofa",
  width: 1800,
  height: 1200,
};

const executive = {
  src: "/media/ss-executive-lounge-renewal.png",
  alt: "Executive lounge furniture renewed in dark leather and warm wood",
  width: 1800,
  height: 1200,
};

const materials = {
  src: "/media/ss-material-collection.png",
  alt: "Luxury upholstery material collection with leather, velvet, boucle, linen, suede, and wood",
  width: 1800,
  height: 1200,
};

const consultationLinks = [
  { href: "/private-inquiry", label: "Request a WhatsApp consultation" },
  { href: "/showcase", label: "View transformation gallery" },
  { href: "/material-collection", label: "Explore material collection" },
];

function servicePage(input: {
  slug: string;
  title: string;
  description: string;
  headline: string;
  service: string;
  image: typeof atelierHero;
  promptSubject: string;
}): TopicalPage {
  return {
    slug: input.slug,
    path: `/services/${input.slug}`,
    label: input.title,
    title: `${input.title} | SS Interior Luxury Restoration Atelier`,
    description: input.description,
    hero: {
      eyebrow: "Luxury Restoration Service",
      headline: input.headline,
      body: `${input.service} at SS Interior is approached as a material and emotional transformation, not a casual service task. Each commission is reviewed through proportion, comfort, fabric behavior, structure, patina, room context, and the long-term life of the piece.`,
      image: input.image,
      imagePrompt: `Photorealistic luxury editorial image of ${input.promptSubject}, dark atelier setting, warm bronze light, premium furniture materials, handcrafted details, no text, no watermark, no local repair shop cues.`,
    },
    sections: [
      {
        label: "Assessment",
        headline: "The original piece is studied before any material decision is made.",
        body: [
          `A refined restoration begins by understanding what should remain. SS Interior reviews the frame, cushioning, joinery, seams, previous upholstery, surface wear, and the way the furniture sits within its living environment.`,
          `This protects the client from unnecessary replacement and helps preserve the identity of the piece. The goal is to restore presence, not erase history.`,
        ],
        image: input.image,
        imagePrompt: `Close editorial photograph of artisan assessment for ${input.promptSubject}, measuring proportions, inspecting seams, luxury workshop, dark background, bronze light.`,
      },
      {
        label: "Material Direction",
        headline: "Materials are selected for touch, endurance, and atmosphere.",
        body: [
          `Italian leather, velvet, boucle, suede, linen, and wood finishes each create a different emotional temperature. The right material is not chosen only for appearance; it is chosen for the room, the level of use, the furniture silhouette, and the way light moves across the surface.`,
          `This is where luxury perception is created. Fine upholstery should feel natural to the object and quietly elevate everything around it.`,
        ],
        image: materials,
        imagePrompt: `Luxury material swatches for ${input.promptSubject}, Italian leather, velvet, boucle, linen, suede, wood veneer, macro detail, editorial composition.`,
      },
      {
        label: "Craftsmanship",
        headline: "The restoration is shaped through controlled handwork.",
        body: [
          `The work may include reupholstery, leather renewal, seam refinement, cushion rebuilding, frame stabilization, buttoning, piping, edge finishing, and surface conditioning. Each stage is handled to support comfort and quiet visual authority.`,
          `The most successful restoration does not announce itself. It makes the furniture feel as if it has returned to its proper state.`,
        ],
        image: atelierHero,
        imagePrompt: `Hands stitching premium upholstery for ${input.promptSubject}, shallow depth of field, warm leather or textile, luxury atelier mood.`,
      },
    ],
    faqs: [
      {
        question: `How does SS Interior evaluate ${input.service.toLowerCase()}?`,
        answer:
          "The atelier reviews photographs, material condition, dimensions, frame integrity, usage level, and the room context before recommending a restoration path.",
      },
      {
        question: "Can I send furniture photos on WhatsApp?",
        answer:
          "Yes. The preferred flow is to request a private consultation and continue on WhatsApp with photographs, notes, and any material preferences.",
      },
      {
        question: "Do you help choose the upholstery material?",
        answer:
          "Yes. Material selection is part of the consultation, with guidance across leather, velvet, boucle, suede, linen, and wood finishes.",
      },
    ],
    internalLinks: consultationLinks,
    cta: {
      headline: "Begin with a private restoration review.",
      body: "Share the furniture, its condition, and a few images. SS Interior will respond through WhatsApp with a considered restoration direction.",
    },
  };
}

export const servicePages: TopicalPage[] = [
  servicePage({
    slug: "sofa-restoration",
    title: "Sofa Restoration",
    description:
      "Luxury sofa restoration for heritage seating, designer sofas, and refined living interiors through bespoke upholstery and material renewal.",
    headline: "Sofa restoration for pieces that deserve continuity.",
    service: "Sofa restoration",
    image: chesterfield,
    promptSubject: "a restored cognac leather sofa with elegant cushion structure",
  }),
  servicePage({
    slug: "leather-restoration",
    title: "Leather Restoration",
    description:
      "Premium leather furniture restoration, conditioning, color refinement, and upholstery renewal for luxury homes and commercial interiors.",
    headline: "Leather restoration with depth, patina, and restraint.",
    service: "Leather restoration",
    image: chesterfield,
    promptSubject: "close-up leather restoration on a luxury Chesterfield sofa",
  }),
  servicePage({
    slug: "custom-upholstery",
    title: "Custom Upholstery",
    description:
      "Bespoke upholstery for sofas, chairs, lounges, hospitality seating, and designer furniture using refined luxury materials.",
    headline: "Custom upholstery shaped around the piece, not a trend.",
    service: "Custom upholstery",
    image: velvet,
    promptSubject: "a curved velvet lounge sofa with tailored upholstery seams",
  }),
  servicePage({
    slug: "dining-chair-restoration",
    title: "Dining Chair Restoration",
    description:
      "Luxury dining chair restoration, seat rebuilding, upholstery renewal, and wood detail refinement for elegant dining spaces.",
    headline: "Dining chair restoration for rooms built around ceremony.",
    service: "Dining chair restoration",
    image: materials,
    promptSubject: "luxury dining chairs with refined textile seats and polished wood",
  }),
  servicePage({
    slug: "commercial-furniture-restoration",
    title: "Commercial Furniture Restoration",
    description:
      "Commercial furniture restoration for hotels, offices, restaurants, lounges, and interior design projects requiring premium finish and durability.",
    headline: "Commercial furniture restoration with a hospitality standard.",
    service: "Commercial furniture restoration",
    image: executive,
    promptSubject: "premium commercial lounge seating in dark leather and walnut",
  }),
  servicePage({
    slug: "luxury-furniture-repair",
    title: "Luxury Furniture Repair",
    description:
      "Luxury furniture repair and restoration for high-value sofas, chairs, seating, and interior pieces where craftsmanship and finish matter.",
    headline: "Luxury furniture repair elevated into restoration.",
    service: "Luxury furniture repair",
    image: atelierHero,
    promptSubject: "artisan repairing luxury furniture frame and upholstery details",
  }),
  servicePage({
    slug: "hotel-furniture-restoration",
    title: "Hotel Furniture Restoration",
    description:
      "Hotel furniture restoration for suites, lobbies, lounges, banquettes, and hospitality seating with luxury upholstery standards.",
    headline: "Hotel furniture restoration for spaces that receive guests daily.",
    service: "Hotel furniture restoration",
    image: velvet,
    promptSubject: "luxury hotel lounge sofa restored in velvet upholstery",
  }),
  servicePage({
    slug: "restaurant-seating-restoration",
    title: "Restaurant Seating Restoration",
    description:
      "Restaurant seating restoration for banquettes, dining chairs, lounge pieces, and hospitality upholstery requiring durability and atmosphere.",
    headline: "Restaurant seating restoration with atmosphere and endurance.",
    service: "Restaurant seating restoration",
    image: materials,
    promptSubject: "luxury restaurant banquette seating with refined upholstery",
  }),
  servicePage({
    slug: "office-furniture-restoration",
    title: "Office Furniture Restoration",
    description:
      "Office furniture restoration for executive lounges, reception seating, boardroom chairs, and premium commercial interiors.",
    headline: "Office furniture restoration for executive first impressions.",
    service: "Office furniture restoration",
    image: executive,
    promptSubject: "executive office lounge furniture restored in dark leather",
  }),
  servicePage({
    slug: "custom-cushion-replacement",
    title: "Custom Cushion Replacement",
    description:
      "Custom cushion replacement and rebuilding for luxury sofas, lounge chairs, banquettes, and designer seating.",
    headline: "Custom cushion replacement that restores comfort and proportion.",
    service: "Custom cushion replacement",
    image: atelierHero,
    promptSubject: "luxury sofa cushion rebuilding with upholstery foam and fabric",
  }),
  servicePage({
    slug: "furniture-reupholstery",
    title: "Furniture Reupholstery",
    description:
      "Luxury furniture reupholstery for sofas, chairs, benches, banquettes, and designer pieces using refined fabrics and leather.",
    headline: "Furniture reupholstery guided by material intelligence.",
    service: "Furniture reupholstery",
    image: velvet,
    promptSubject: "bespoke furniture reupholstery in premium velvet and leather",
  }),
];

export const authorityPages: TopicalPage[] = [
  {
    slug: "our-craft",
    path: "/our-craft",
    label: "Our Craft",
    title: "Our Craft | SS Interior Luxury Furniture Restoration",
    description:
      "The SS Interior craft philosophy: preserving heritage furniture through material knowledge, hand upholstery, and refined restoration judgment.",
    hero: {
      eyebrow: "Our Craft",
      headline: "Restoration begins with respect for what already exists.",
      body:
        "SS Interior approaches every sofa, chair, banquette, and lounge piece as an object with memory. The craft is not simply technical; it is editorial, material, and emotional.",
      image: atelierHero,
      imagePrompt:
        "Luxury atelier image of artisan hand stitching leather upholstery, dark background, warm bronze light, editorial furniture house mood.",
    },
    sections: [
      {
        label: "Heritage",
        headline: "The original silhouette remains the reference point.",
        body: [
          "A piece of furniture carries proportion, use, touch, and memory. SS Interior studies those qualities before altering fabric, leather, structure, or finish.",
          "The aim is not to make every object look new. The aim is to let the best version of the original return with dignity.",
        ],
        image: chesterfield,
      },
      {
        label: "Artistry",
        headline: "Luxury is created through decisions most people only feel.",
        body: [
          "Cushion density, seam placement, fabric direction, button tension, piping scale, and edge finishing all shape perception. These details determine whether a restoration feels ordinary or exceptional.",
          "The SS Interior standard is quiet: a finished piece should feel inevitable, not forced.",
        ],
        image: velvet,
      },
    ],
    faqs: [
      {
        question: "What makes SS Interior different from a typical upholstery provider?",
        answer:
          "SS Interior is positioned as a restoration atelier, with emphasis on material direction, heritage, proportion, and luxury finish rather than transactional service work.",
      },
      {
        question: "Can SS Interior preserve the character of older furniture?",
        answer:
          "Yes. The atelier begins by identifying what should remain, then refines structure, comfort, and material without erasing the piece's identity.",
      },
    ],
    internalLinks: consultationLinks,
    cta: {
      headline: "Discuss the piece before deciding the material.",
      body: "A private WhatsApp consultation helps establish the restoration direction with photographs, notes, and material preferences.",
    },
  },
  {
    slug: "material-collection",
    path: "/material-collection",
    label: "Material Collection",
    title: "Material Collection | Leather, Velvet, Boucle & Luxury Upholstery",
    description:
      "Explore SS Interior's luxury material direction across Italian leather, velvet, boucle, suede, linen, and premium wood finishes.",
    hero: {
      eyebrow: "Material Collection",
      headline: "Material determines how a restoration feels before it is understood.",
      body:
        "Leather, velvet, boucle, suede, linen, and wood each hold light and touch differently. SS Interior guides material decisions through use, room character, silhouette, and longevity.",
      image: materials,
      imagePrompt:
        "Luxury material library with leather, velvet, boucle, suede, linen, wood veneer, bronze lighting, dark atelier table.",
    },
    sections: [
      {
        label: "Leather",
        headline: "Italian leather creates depth, patina, and authority.",
        body: [
          "Leather is chosen for pieces that need presence and longevity. It works beautifully on Chesterfields, lounge chairs, executive seating, and interiors where tactile confidence matters.",
          "The finish must match the furniture's age and room context. Too polished, and it loses soul; too distressed, and it loses refinement.",
        ],
        image: chesterfield,
      },
      {
        label: "Textiles",
        headline: "Velvet, boucle, suede, and linen each change the emotional temperature.",
        body: [
          "Velvet brings evening depth. Boucle adds softness and sculptural texture. Suede feels intimate and quiet. Linen brings natural restraint.",
          "SS Interior selects these materials with the same discipline as a furniture house: the textile must serve comfort, proportion, durability, and atmosphere.",
        ],
        image: velvet,
      },
    ],
    faqs: [
      {
        question: "Which upholstery material is best for a sofa?",
        answer:
          "The best material depends on usage, room light, furniture shape, climate, and desired atmosphere. SS Interior recommends materials after reviewing photographs and context.",
      },
      {
        question: "Can leather and fabric be combined in one restoration?",
        answer:
          "Yes, when the design language supports it. Mixed material direction can work for cushions, panels, piping, and accent detailing.",
      },
    ],
    internalLinks: consultationLinks,
    cta: {
      headline: "Let the material direction begin with the room.",
      body: "Send photos of the furniture and interior context to receive a considered material recommendation.",
    },
  },
  {
    slug: "restoration-process",
    path: "/restoration-process",
    label: "Restoration Process",
    title: "Restoration Process | SS Interior Luxury Upholstery Atelier",
    description:
      "The SS Interior restoration process: assessment, material selection, artisan restoration, and final refinement.",
    hero: {
      eyebrow: "Restoration Process",
      headline: "A disciplined process protects the value of the piece.",
      body:
        "Every restoration moves through four stages: assessment, material selection, artisan restoration, and final refinement. The process is built to reduce risk and elevate outcome.",
      image: atelierHero,
      imagePrompt:
        "Luxury furniture restoration process in atelier, leather stitching, material samples, artisan hands, warm bronze light.",
    },
    sections: [
      {
        label: "01 Assessment",
        headline: "We begin with condition, structure, proportion, and memory.",
        body: [
          "The first review considers photographs, dimensions, material condition, frame strength, cushion behavior, seam failure, and the emotional importance of the furniture.",
          "This prevents unnecessary intervention and establishes a restoration path that respects the original object.",
        ],
        image: chesterfield,
      },
      {
        label: "02-04 Refinement",
        headline: "Material, handwork, and final surface quality complete the transformation.",
        body: [
          "Once the direction is approved, materials are selected and the work is completed through controlled upholstery craft. Cushions, seams, frames, and surfaces are refined until the piece feels resolved.",
          "The final inspection focuses on touch, silhouette, finish, and the way the restored furniture belongs in its environment.",
        ],
        image: materials,
      },
    ],
    faqs: [
      {
        question: "How long does furniture restoration take?",
        answer:
          "Timelines depend on condition, material availability, complexity, and quantity. SS Interior provides guidance after reviewing the piece.",
      },
      {
        question: "Can the process start through WhatsApp?",
        answer:
          "Yes. WhatsApp is the preferred first step because it allows photographs, notes, and direct material discussion.",
      },
    ],
    internalLinks: consultationLinks,
    cta: {
      headline: "Begin the process with photographs.",
      body: "Upload or send images of the furniture so SS Interior can review condition and recommend the next step.",
    },
  },
  {
    slug: "client-stories",
    path: "/client-stories",
    label: "Client Stories",
    title: "Client Stories | SS Interior Furniture Transformation Studies",
    description:
      "Luxury furniture transformation stories for private homes, hotels, restaurants, offices, and interior design clients.",
    hero: {
      eyebrow: "Client Stories",
      headline: "Every transformation begins with a reason to preserve.",
      body:
        "Client stories document the emotional and practical motivations behind restoration: a sofa that shaped family rituals, a hotel lounge that needed renewed presence, or seating that needed to regain comfort without losing identity.",
      image: executive,
      imagePrompt:
        "Luxury restored furniture in private interior, editorial client story mood, warm light, no people, premium atmosphere.",
    },
    sections: [
      {
        label: "Private Homes",
        headline: "Furniture often carries memory before it carries value.",
        body: [
          "In private homes, restoration is frequently about continuity. The piece may belong to a room, a family rhythm, or a particular way of living.",
          "SS Interior protects that emotional value while improving comfort, structure, and finish.",
        ],
        image: chesterfield,
      },
      {
        label: "Hospitality & Commercial",
        headline: "Public interiors need durability without losing atmosphere.",
        body: [
          "Hotels, restaurants, and offices require furniture that can perform daily while still feeling refined. Restoration allows important pieces to regain authority without discarding the interior language.",
          "The work balances guest impression, material resilience, and design continuity.",
        ],
        image: executive,
      },
    ],
    faqs: [
      {
        question: "Can SS Interior support commercial furniture projects?",
        answer:
          "Yes. The atelier supports hotels, restaurants, corporate spaces, and interior designers with restoration and upholstery direction.",
      },
      {
        question: "Are client projects kept private?",
        answer:
          "Yes. Discretion is part of the atelier standard, and case studies can be anonymized when needed.",
      },
    ],
    internalLinks: consultationLinks,
    cta: {
      headline: "Share the story behind the furniture.",
      body: "A short WhatsApp consultation is enough to begin reviewing the restoration possibilities.",
    },
  },
];

export const topicalPages = [...authorityPages, ...servicePages];

export function getTopicalPageBySlug(slug: string) {
  return topicalPages.find((page) => page.slug === slug);
}

export function getServicePageBySlug(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}
