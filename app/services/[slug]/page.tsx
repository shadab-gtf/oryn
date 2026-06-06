import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TopicalPageSection } from "@/components/sections/topical/TopicalPageSection";
import { getServicePageBySlug, servicePages } from "@/content/seed/topical-pages";
import { buildMetadata } from "@/lib/seo/metadata";
import { faqSchema, serviceSchema } from "@/lib/seo/schema";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getServicePageBySlug(slug);

  if (!page) {
    return buildMetadata({
      title: "Service Not Found | SS Interior",
      description: "The requested SS Interior restoration service could not be found.",
      path: `/services/${slug}`,
    });
  }

  return buildMetadata({
    title: page.title,
    description: page.description,
    path: page.path,
    image: page.hero.image.src,
  });
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const page = getServicePageBySlug(slug);

  if (!page) notFound();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([serviceSchema(page), faqSchema(page.faqs)]),
        }}
      />
      <TopicalPageSection page={page} />
    </>
  );
}
