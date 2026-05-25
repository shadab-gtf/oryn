import type { MediaAsset } from "./content";

export type PropertyMetric = {
  label: string;
  value: string;
};

export type PropertyChapter = {
  label: string;
  headline: string;
  body: string;
  media?: MediaAsset;
};

export type Property = {
  slug: string;
  title: string;
  market: string;
  location: string;
  typology: string;
  status: "Private preview" | "By appointment" | "Concept narrative";
  summary: string;
  hero: MediaAsset;
  metrics: PropertyMetric[];
  chapters: PropertyChapter[];
};
