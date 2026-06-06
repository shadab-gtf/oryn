import type { MetadataRoute } from "next";
import { getJournalArticles } from "@/lib/api/home";
import { getProperties } from "@/lib/api/properties";
import { topicalPages } from "@/content/seed/topical-pages";

const baseUrl = "https://ssinterior.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [properties, articles] = await Promise.all([
    getProperties(),
    getJournalArticles(),
  ]);

  const staticRoutes = [
    "",
    "/showcase",
    "/restoration-gallery",
    "/philosophy",
    "/our-craft",
    "/material-collection",
    "/restoration-process",
    "/client-stories",
    "/journal",
    "/global-presence",
    "/private-inquiry",
    "/private-consultation",
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
    ...topicalPages.map((page) => ({
      url: `${baseUrl}${page.path}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: page.path.startsWith("/services") ? 0.7 : 0.78,
    })),
  ];
}
