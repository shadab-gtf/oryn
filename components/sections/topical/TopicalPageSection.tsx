import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { SectionShell } from "@/components/ui/SectionShell";
import type { TopicalPage } from "@/types/topical-page";

type TopicalPageSectionProps = {
  page: TopicalPage;
};

export function TopicalPageSection({ page }: TopicalPageSectionProps) {
  return (
    <>
      <section className="relative min-h-[88svh] overflow-hidden bg-void-950 text-ivory-050">
        <MediaFrame
          className="absolute inset-0 h-full w-full opacity-65"
          imageClassName="h-full w-full object-cover"
          media={page.hero.image}
          priority
          sizes="hero"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void-950/65 via-void-950/42 to-void-950" />
        <Container className="relative flex min-h-[88svh] items-end pb-16 pt-32">
          <div className="max-w-5xl">
            <Eyebrow>{page.hero.eyebrow}</Eyebrow>
            <Heading as="h1" variant="display" className="mt-6">
              {page.hero.headline}
            </Heading>
            <p className="mt-8 max-w-2xl text-fluid-lead leading-9 text-ivory-050/74">
              {page.hero.body}
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/private-inquiry">Request WhatsApp Consultation</Button>
              <Button href="/showcase" variant="secondary">
                View Transformations
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <SectionShell tone="ivory">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <div>
              <Eyebrow className="text-bronze-500">{page.label}</Eyebrow>
              <Heading className="mt-6 text-void-950">
                Built as a reference page for clients who value craft, material,
                and confidence before a commission begins.
              </Heading>
            </div>
            <div className="grid gap-8 text-base leading-8 text-stone-700">
              <p>
                SS Interior is designed for clients who want more than a
                transactional furniture service. Each page in the atelier
                ecosystem explains the decisions that shape a restoration:
                structure, comfort, textile behavior, leather depth, material
                aging, daily use, and the final presence of the furniture in its
                room.
              </p>
              <p>
                This content is intentionally detailed because luxury clients
                need confidence before they share a valued piece. The objective
                is to make the restoration path clear while preserving an
                editorial tone worthy of a premium furniture house.
              </p>
            </div>
          </div>
        </Container>
      </SectionShell>

      {page.sections.map((section, index) => (
        <SectionShell key={section.label} tone={index % 2 === 0 ? "void" : "stone"}>
          <Container>
            <article className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div className={index % 2 === 0 ? "" : "lg:order-2"}>
                <Eyebrow className={index % 2 === 0 ? undefined : "text-bronze-500"}>
                  {section.label}
                </Eyebrow>
                <Heading
                  className={index % 2 === 0 ? "mt-6" : "mt-6 text-void-950"}
                >
                  {section.headline}
                </Heading>
                <div
                  className={
                    index % 2 === 0
                      ? "mt-8 grid gap-6 text-fluid-lead leading-9 text-ivory-050/70"
                      : "mt-8 grid gap-6 text-fluid-lead leading-9 text-stone-700"
                  }
                >
                  {section.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
              {section.image ? (
                <MediaFrame
                  className="aspect-[4/3]"
                  media={section.image}
                  sizes="half"
                />
              ) : null}
            </article>
          </Container>
        </SectionShell>
      ))}

      <SectionShell tone="ivory">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <Eyebrow className="text-bronze-500">Questions</Eyebrow>
              <Heading className="mt-6 text-void-950">
                Answers before the first WhatsApp conversation.
              </Heading>
            </div>
            <div className="grid gap-6">
              {page.faqs.map((faq) => (
                <article
                  className="border-t border-void-950/12 pt-6"
                  key={faq.question}
                >
                  <h2 className="font-sans text-xl font-medium text-void-950">
                    {faq.question}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-stone-700">
                    {faq.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </SectionShell>

      <SectionShell tone="void" className="py-24 sm:py-32">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <Eyebrow>Private Consultation</Eyebrow>
              <Heading className="mt-6">{page.cta.headline}</Heading>
              <p className="mt-8 text-fluid-lead leading-9 text-ivory-050/70">
                {page.cta.body}
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {page.internalLinks.map((link) => (
                <Button href={link.href} key={link.href} variant="secondary">
                  {link.label}
                </Button>
              ))}
            </div>
          </div>
        </Container>
      </SectionShell>
    </>
  );
}
