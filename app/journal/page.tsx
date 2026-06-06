import type { Metadata } from "next";
import { Reveal } from "@/components/motion/Reveal";
import { TransitionLink } from "@/components/motion/TransitionLink";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { SectionShell } from "@/components/ui/SectionShell";
import { getJournalArticles } from "@/lib/api/home";
import { buildMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Journal | SS Interior Craft & Materials",
  description:
    "Editorial notes on heritage furniture restoration, luxury upholstery materials, leather care, and refined interior craftsmanship.",
  path: "/journal",
});

export default async function JournalPage() {
  const articles = await getJournalArticles();

  return (
    <SectionShell tone="ivory" className="pt-32 sm:pt-40">
      <Container>
        <Reveal>
          <Eyebrow className="text-bronze-500">Journal</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <Heading as="h1" variant="title" className="mt-6 text-void-950">
            Notes on heritage, upholstery materials, and the quiet art of furniture transformation.
          </Heading>
        </Reveal>
        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {articles.map((article, index) => (
            <Reveal key={article.slug} delay={index * 0.06}>
              <TransitionLink
                href={`/journal/${article.slug}`}
                className="block min-h-72 border-t border-void-950/12 pt-6"
              >
                <p className="text-xs uppercase tracking-[0.18em] text-bronze-500">
                  {article.category}
                </p>
                <h2 className="mt-4 font-sans text-[clamp(1.9rem,2.4vw,2.5rem)] font-medium leading-tight text-void-950">
                  {article.title}
                </h2>
                <p className="mt-5 text-base leading-8 text-stone-700">
                  {article.excerpt}
                </p>
              </TransitionLink>
            </Reveal>
          ))}
        </div>
      </Container>
    </SectionShell>
  );
}
