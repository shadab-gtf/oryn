import type { Metadata } from "next";
import { GlobalPresencePageSection } from "@/components/sections/global-presence/GlobalPresencePageSection";
import { getMarkets } from "@/lib/api/markets";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Global Presence | ORYN Luxury Real Estate Markets",
  description:
    "Luxury real estate digital experiences for Dubai, Monaco, London, Los Angeles, Shanghai, New York, Jeddah, and Berlin.",
  path: "/global-presence",
});

export default async function GlobalPresencePage() {
  const markets = await getMarkets();

  return <GlobalPresencePageSection markets={markets} />;
}
