import { cache } from "react";
import { properties } from "@/content/seed/properties";

export const getProperties = cache(async () => properties);

export const getFeaturedProperties = cache(async () => properties.slice(0, 3));

export const getPropertyBySlug = cache(async (slug: string) =>
  properties.find((property) => property.slug === slug),
);
