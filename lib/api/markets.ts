import { cache } from "react";
import { markets } from "@/content/seed/markets";

export const getMarkets = cache(async () => markets);

export const getMarketBySlug = cache(async (slug: string) =>
  markets.find((market) => market.slug === slug),
);
