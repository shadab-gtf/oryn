import type { Metadata } from "next";
import { PrivateInquiryPageSection } from "@/components/sections/private-inquiry/PrivateInquiryPageSection";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Private Inquiry | ORYN",
  description:
    "Begin a discreet conversation about a luxury residence, development launch, or architectural digital experience.",
  path: "/private-inquiry",
});

export default function PrivateInquiryPage() {
  return <PrivateInquiryPageSection />;
}
