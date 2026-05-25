import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { SectionShell } from "@/components/ui/SectionShell";
import { Skeleton } from "@/components/ui/Skeleton";
import type { Market } from "@/types/content";

type GlobalPresenceSectionProps = {
  marketsPromise: Promise<Market[]>;
};

export async function GlobalPresenceSection({
  marketsPromise,
}: GlobalPresenceSectionProps) {
  const markets = await marketsPromise;

  return (
    <SectionShell tone="ivory">
      <Container>
        <div data-speed="1.1" className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Reveal>
              <Eyebrow className="text-bronze-500">Global Presence</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <Heading className="mt-6 text-void-950">
                Different cities. One standard of restraint.
              </Heading>
            </Reveal>
          </div>
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {markets.map((market, index) => (
              <Reveal key={market.slug} delay={index * 0.04}>
                <article className="border-t border-void-950/12 pt-5">
                  <p className="text-xs uppercase text-bronze-500">
                    {market.region}
                  </p>
                  <h3 className="mt-3 font-heading text-3xl font-medium text-void-950">
                    {market.name}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-stone-700">
                    {market.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </SectionShell>
  );
}

export function GlobalPresenceSkeleton() {
  return (
    <SectionShell tone="ivory">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <Skeleton className="h-4 w-44 bg-void-950/10" />
            <Skeleton className="mt-6 h-28 w-full bg-void-950/10" />
          </div>
          <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
            {[0, 1, 2, 3].map((item) => (
              <Skeleton key={item} className="h-36 bg-void-950/10" />
            ))}
          </div>
        </div>
      </Container>
    </SectionShell>
  );
}
