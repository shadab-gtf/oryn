import type { Metadata } from "next";
import { PrivateInquiryPageSection } from "@/components/sections/private-inquiry/PrivateInquiryPageSection";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Restoration Consultation | SS Interior",
  description:
    "Request a private SS Interior consultation for luxury sofa restoration, bespoke upholstery, leather renewal, and heritage furniture transformation.",
  path: "/private-inquiry",
});

export default function PrivateInquiryPage() {
  return <PrivateInquiryPageSection />;
}
