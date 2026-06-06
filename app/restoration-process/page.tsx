import type { Metadata } from "next";
import { TopicalPageSection } from "@/components/sections/topical/TopicalPageSection";
import { getTopicalPageBySlug } from "@/content/seed/topical-pages";
import { buildMetadata } from "@/lib/seo/metadata";
import { faqSchema } from "@/lib/seo/schema";

const page = getTopicalPageBySlug("restoration-process");

export const metadata: Metadata = buildMetadata({
  title: page?.title ?? "Restoration Process | SS Interior",
  description: page?.description ?? "SS Interior restoration process.",
  path: "/restoration-process",
  image: page?.hero.image.src,
});

export default function RestorationProcessPage() {
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
