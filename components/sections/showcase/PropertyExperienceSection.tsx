import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { SectionShell } from "@/components/ui/SectionShell";
import { imageSizes } from "@/lib/media/images";
import type { Property } from "@/types/property";

type PropertyExperienceSectionProps = {
  property: Property;
};

export function PropertyExperienceSection({
  property,
}: PropertyExperienceSectionProps) {
  return (
    <>
      <section className="relative min-h-[92svh] overflow-hidden bg-void-950 text-ivory-050">
        <Image
          src={property.hero.src}
          alt={property.hero.alt}
          width={property.hero.width}
          height={property.hero.height}
          sizes={imageSizes.hero}
          priority
          className="absolute inset-0 h-full w-full object-cover opacity-[0.6]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-void-950/50 via-void-950/20 to-void-950" />
        <Container className="relative flex min-h-[92svh] items-end pb-16 pt-32">
          <div className="max-w-5xl">
            <Reveal>
              <Eyebrow>
                {property.market} / {property.status}
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <Heading as="h1" variant="display" className="mt-6">
                {property.title}
              </Heading>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-8 max-w-2xl text-fluid-lead leading-9 text-ivory-050/74">
                {property.summary}
              </p>
            </Reveal>
          </div>
        </Container>
      </section>
      <SectionShell tone="ivory">
        <Container>
          <div className="grid gap-10 border-b border-void-950/12 pb-14 sm:grid-cols-3">
            {property.metrics.map((metric) => (
              <Reveal key={metric.label}>
                <p className="text-xs uppercase tracking-[0.18em] text-bronze-500">
                  {metric.label}
                </p>
                <p className="mt-3 font-sans text-3xl font-medium text-void-950">
                  {metric.value}
                </p>
              </Reveal>
            ))}
          </div>
          <div className="mt-16 grid gap-16">
            {property.chapters.map((chapter, index) => (
              <Reveal key={chapter.label} delay={index * 0.08}>
                <article className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr]">
                  <Eyebrow className="text-bronze-500">{chapter.label}</Eyebrow>
                  <div>
                    <Heading className="text-void-950">{chapter.headline}</Heading>
                    <p className="mt-6 max-w-2xl text-fluid-lead leading-9 text-stone-700">
                      {chapter.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.16}>
            <Button href="/private-inquiry" className="mt-16">
              Request a private preview
            </Button>
          </Reveal>
        </Container>
      </SectionShell>
    </>
  );
}
