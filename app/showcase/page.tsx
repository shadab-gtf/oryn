import type { Metadata } from "next";
import { ShowcaseIndexSection } from "@/components/sections/showcase/ShowcaseIndexSection";
import { getProperties } from "@/lib/api/properties";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Showcase | ORYN Luxury Property Experiences",
  description:
    "A curated collection of cinematic luxury property experiences and architectural real estate presentations.",
  path: "/showcase",
});

export default async function ShowcasePage() {
  const properties = await getProperties();

  return <ShowcaseIndexSection properties={properties} />;
}
