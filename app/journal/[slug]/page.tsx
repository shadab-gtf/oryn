import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { SectionShell } from "@/components/ui/SectionShell";
import { getJournalArticles } from "@/lib/api/home";
import { buildMetadata } from "@/lib/seo/metadata";

type JournalArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const articles = await getJournalArticles();

  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: JournalArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const articles = await getJournalArticles();
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    return buildMetadata({
      title: "Journal Article Not Found | SS Interior",
      description: "The requested SS Interior journal article could not be found.",
      path: `/journal/${slug}`,
    });
  }

  return buildMetadata({
    title: `${article.title} | SS Interior Journal`,
    description: article.excerpt,
    path: `/journal/${article.slug}`,
  });
}

export default async function JournalArticlePage({
  params,
}: JournalArticlePageProps) {
  const { slug } = await params;
  const articles = await getJournalArticles();
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <SectionShell tone="ivory" className="pt-32 sm:pt-40">
      <Container size="editorial">
        <Eyebrow className="text-bronze-500">{article.category}</Eyebrow>
        <Heading as="h1" variant="title" className="mt-6 text-void-950">
          {article.title}
        </Heading>
        <p className="mt-8 max-w-2xl text-fluid-lead leading-9 text-stone-700">
          {article.excerpt}
        </p>
        <div className="mt-14 border-t border-void-950/12 pt-8 text-base leading-8 text-stone-700">
          <p>
            SS Interior treats every transformation as a sequence of respect:
            understanding the original piece, selecting the right material, and
            refining each surface until it belongs naturally to its next life.
          </p>
          <p className="mt-6">
            The goal is not to make furniture feel newly anonymous. The goal is
            to preserve memory while returning comfort, proportion, and material
            confidence.
          </p>
        </div>
      </Container>
    </SectionShell>
  );
}
