import type { Metadata } from "next";
import { TopicalPageSection } from "@/components/sections/topical/TopicalPageSection";
import { getTopicalPageBySlug } from "@/content/seed/topical-pages";
import { buildMetadata } from "@/lib/seo/metadata";
import { faqSchema } from "@/lib/seo/schema";

const page = getTopicalPageBySlug("material-collection");

export const metadata: Metadata = buildMetadata({
  title: page?.title ?? "Material Collection | SS Interior",
  description: page?.description ?? "Luxury upholstery material collection.",
  path: "/material-collection",
  image: page?.hero.image.src,
});

export default function MaterialCollectionPage() {
  if (!page) return null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(page.faqs)) }}
      />
      <TopicalPageSection page={page} />
    </>
  );
}
