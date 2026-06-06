import type { MediaAsset } from "./content";

export type TopicalPageSection = {
  label: string;
  headline: string;
  body: string[];
  image?: MediaAsset;
  imagePrompt?: string;
};

export type TopicalPageFaq = {
  question: string;
  answer: string;
};

export type TopicalPageLink = {
  href: string;
  label: string;
};

export type TopicalPage = {
  slug: string;
  path: string;
  label: string;
  title: string;
  description: string;
  hero: {
    eyebrow: string;
    headline: string;
    body: string;
    image: MediaAsset;
    imagePrompt: string;
  };
  sections: TopicalPageSection[];
  faqs: TopicalPageFaq[];
  internalLinks: TopicalPageLink[];
  cta: {
    headline: string;
    body: string;
  };
};
