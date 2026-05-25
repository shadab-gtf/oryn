import type { Metadata } from "next";
import { PhilosophyPageSection } from "@/components/sections/philosophy/PhilosophyPageSection";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Philosophy | ORYN Architectural Digital Storytelling",
  description:
    "ORYN's philosophy for cinematic luxury real estate experiences, spatial storytelling, and architectural digital narratives.",
  path: "/philosophy",
});

export default function PhilosophyPage() {
  return <PhilosophyPageSection />;
}
