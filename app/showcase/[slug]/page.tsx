import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PropertyExperienceSection } from "@/components/sections/showcase/PropertyExperienceSection";
import { getProperties, getPropertyBySlug } from "@/lib/api/properties";
import { buildMetadata } from "@/lib/seo/metadata";
import { propertySchema } from "@/lib/seo/schema";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const properties = await getProperties();

  return properties.map((property) => ({
    slug: property.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);

  if (!property) {
    return buildMetadata({
      title: "Transformation Not Found | SS Interior",
      description: "The requested SS Interior transformation study could not be found.",
      path: `/showcase/${slug}`,
    });
  }

  return buildMetadata({
    title: `${property.title} | ${property.market} Transformation | SS Interior`,
    description: property.summary,
    path: `/showcase/${property.slug}`,
    image: property.hero.src,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(propertySchema(property)),
        }}
      />
      <PropertyExperienceSection property={property} />
    </>
  );
}
