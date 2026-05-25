import { cache } from "react";
import { homePageContent, journalArticles } from "@/content/seed/home";

export const getHomePage = cache(async () => homePageContent);

export const getJournalArticles = cache(async () => journalArticles);
