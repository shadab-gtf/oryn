import type { Metadata } from "next";
import { GlobalPresencePageSection } from "@/components/sections/global-presence/GlobalPresencePageSection";
import { getMarkets } from "@/lib/api/markets";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Homes, Hotels & Commercial Spaces | SS Interior",
  description:
    "Luxury furniture restoration and bespoke upholstery for refined homes, villas, hotels, restaurants, corporate offices, and interior designers.",
  path: "/global-presence",
});

export default async function GlobalPresencePage() {
  const markets = await getMarkets();

  return <GlobalPresencePageSection markets={markets} />;
}
