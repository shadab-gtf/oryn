import type { Metadata } from "next";
import type { SeoConfig } from "@/types/seo";

const siteUrl = "https://ssinterior.com";
const defaultImage = "/og-image.jpg";

export function buildMetadata(config: SeoConfig): Metadata {
  const path = config.path ?? "/";
  const url = new URL(path, siteUrl);
  const image = config.image ?? defaultImage;

  return {
    metadataBase: new URL(siteUrl),
    title: config.title,
    description: config.description,
    alternates: {
      canonical: url.pathname,
    },
    openGraph: {
      title: config.title,
      description: config.description,
      url,
      siteName: "SS Interior",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: "SS Interior luxury furniture restoration and bespoke upholstery atelier",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: config.title,
      description: config.description,
      images: [image],
    },
  };
}
