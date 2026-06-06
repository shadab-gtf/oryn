import type { Metadata } from "next";
import { ShowcaseIndexSection } from "@/components/sections/showcase/ShowcaseIndexSection";
import { getProperties } from "@/lib/api/properties";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Transformation Gallery | SS Interior",
  description:
    "A curated collection of luxury sofa restorations, bespoke upholstery transformations, leather renewals, and heritage furniture studies.",
  path: "/showcase",
});

export default async function ShowcasePage() {
  const properties = await getProperties();

  return <ShowcaseIndexSection properties={properties} />;
}
