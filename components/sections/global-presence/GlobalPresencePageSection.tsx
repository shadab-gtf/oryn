import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { SectionShell } from "@/components/ui/SectionShell";
import type { Market } from "@/types/content";

type GlobalPresencePageSectionProps = {
  markets: Market[];
};

export function GlobalPresencePageSection({
  markets,
}: GlobalPresencePageSectionProps) {
  return (
    <SectionShell tone="ivory" className="pt-32 sm:pt-40">
      <Container>
        <div className="max-w-4xl">
          <Reveal>
            <Eyebrow className="text-bronze-500">Trusted Partnerships</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <Heading as="h1" variant="title" className="mt-6 text-void-950">
              Restorations shaped for homes, hotels, workspaces, and designers.
            </Heading>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-2xl text-fluid-lead leading-9 text-stone-700">
              SS Interior brings the same material discipline to a private sofa,
              a hotel lounge, a restaurant banquette, or an executive reception
              suite.
            </p>
          </Reveal>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {markets.map((market, index) => (
            <Reveal key={market.slug} delay={index * 0.04}>
              <article className="min-h-64 border-t border-void-950/12 pt-5">
                <p className="text-xs uppercase tracking-[0.18em] text-bronze-500">
                  {market.region}
                </p>
                <h2 className="mt-4 font-sans text-[clamp(1.9rem,2.4vw,2.5rem)] font-medium text-void-950">
                  {market.name}
                </h2>
                <p className="mt-5 text-sm leading-7 text-stone-700">
                  {market.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </SectionShell>
  );
}
