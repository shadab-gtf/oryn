import type { Metadata } from "next";
import { PhilosophyPageSection } from "@/components/sections/philosophy/PhilosophyPageSection";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Philosophy | SS Interior Restoration Atelier",
  description:
    "SS Interior's philosophy for respecting original furniture, preserving heritage, selecting exceptional materials, and restoring luxury through craftsmanship.",
  path: "/philosophy",
});

export default function PhilosophyPage() {
  return <PhilosophyPageSection />;
}
