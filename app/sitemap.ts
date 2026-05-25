import type { MetadataRoute } from "next";
import { getJournalArticles } from "@/lib/api/home";
import { getProperties } from "@/lib/api/properties";

const baseUrl = "https://oryn.studio";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [properties, articles] = await Promise.all([
    getProperties(),
    getJournalArticles(),
  ]);

  const staticRoutes = [
    "",
    "/showcase",
    "/philosophy",
    "/journal",
    "/global-presence",
    "/private-inquiry",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
    })),
    ...properties.map((property) => ({
      url: `${baseUrl}/showcase/${property.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...articles.map((article) => ({
      url: `${baseUrl}/journal/${article.slug}`,
      lastModified: new Date(article.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.55,
    })),
  ];
}
