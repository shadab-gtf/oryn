import { Reveal } from "@/components/motion/Reveal";
import { TransitionLink } from "@/components/motion/TransitionLink";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { SectionShell } from "@/components/ui/SectionShell";
import type { Property } from "@/types/property";

type ShowcaseIndexSectionProps = {
  properties: Property[];
};

export function ShowcaseIndexSection({ properties }: ShowcaseIndexSectionProps) {
  return (
    <SectionShell tone="void" className="pt-32 sm:pt-40">
      <Container>
        <div className="max-w-4xl">
          <Reveal>
            <Eyebrow>Exclusive Collection</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <Heading as="h1" variant="title" className="mt-6">
              Residences presented as spatial narratives, not inventory.
            </Heading>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-2xl text-fluid-lead leading-9 text-ivory-050/70">
              A selective showcase of private residences, penthouses, and
              architectural property experiences shaped through cinematic
              pacing and editorial restraint.
            </p>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-12">
          {properties.map((property, index) => (
            <Reveal key={property.slug} delay={index * 0.06}>
              <TransitionLink
                href={`/showcase/${property.slug}`}
                className="group grid gap-8 border-t border-ivory-050/12 pt-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end"
              >
                <MediaFrame
                  media={property.hero}
                  className="aspect-[16/10]"
                  sizes="half"
                  imageClassName="transition-transform duration-700 ease-luxury group-hover:scale-[1.025]"
                />
                <div className="max-w-2xl lg:pb-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-bronze-300">
                    {property.market} / {property.typology}
                  </p>
                  <h2 className="mt-4 font-sans text-[clamp(2rem,2.6vw,2.5rem)] font-medium leading-tight text-ivory-050">
                    {property.title}
                  </h2>
                  <p className="mt-5 text-base leading-8 text-ivory-050/66">
                    {property.summary}
                  </p>
                  <span className="mt-8 inline-block border-b border-bronze-300 pb-1 text-sm text-ivory-050">
                    View the residence
                  </span>
                </div>
              </TransitionLink>
            </Reveal>
          ))}
        </div>
      </Container>
    </SectionShell>
  );
}
