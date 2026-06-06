import type { Property } from "@/types/property";
import type { TopicalPage, TopicalPageFaq } from "@/types/topical-page";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "SS Interior",
    url: "https://ssinterior.com",
    description:
      "Luxury furniture restoration and bespoke upholstery atelier preserving exceptional sofas, seating, leather, textiles, and heritage furniture.",
    areaServed: [
      "Luxury Homes",
      "Villas",
      "Hotels",
      "Restaurants",
      "Corporate Offices",
      "Interior Designers",
    ],
  };
}

export function serviceSchema(page: TopicalPage) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.label,
    description: page.description,
    provider: {
      "@type": "LocalBusiness",
      name: "SS Interior",
      telephone: "+91 92053 74846",
      email: "saifboby128@gmail.com",
    },
    areaServed: "India",
    serviceType: page.label,
    url: `https://ssinterior.com${page.path}`,
  };
}

export function faqSchema(faqs: TopicalPageFaq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function propertySchema(property: Property) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: property.title,
    description: property.summary,
    about: property.typology,
    material: property.market,
    image: property.hero.src,
  };
}
