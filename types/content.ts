import type { Property } from "./property";

export type MediaAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type EditorialBlock = {
  label: string;
  headline: string;
  body: string;
  support?: string;
};

export type HeroContent = EditorialBlock & {
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  media: MediaAsset;
};

export type HomePageContent = {
  hero: HeroContent;
  philosophy: EditorialBlock;
  spatialIntelligence: EditorialBlock;
  materialLanguage: EditorialBlock;
  futureArchitecture: EditorialBlock;
  privateInquiry: EditorialBlock;
};

export type Market = {
  slug: string;
  name: string;
  region: string;
  description: string;
};

export type ShowcasePageContent = {
  label: string;
  headline: string;
  body: string;
  featuredProperties: Property[];
};

export type JournalArticle = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
};
