import type { Property } from "@/types/property";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ORYN",
    url: "https://oryn.studio",
    description:
      "Cinematic digital experiences for luxury real estate, architecture, and private spatial brands.",
    areaServed: [
      "Dubai",
      "Jeddah",
      "Monaco",
      "London",
      "Shanghai",
      "New York",
      "Berlin",
      "Los Angeles",
    ],
  };
}

export function propertySchema(property: Property) {
  return {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: property.title,
    description: property.summary,
    address: {
      "@type": "PostalAddress",
      addressLocality: property.market,
    },
    image: property.hero.src,
  };
}
