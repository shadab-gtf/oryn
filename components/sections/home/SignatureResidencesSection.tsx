import { TransitionLink } from "@/components/motion/TransitionLink";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { SectionShell } from "@/components/ui/SectionShell";
import { Skeleton } from "@/components/ui/Skeleton";
import type { Property } from "@/types/property";

type SignatureResidencesSectionProps = {
  propertiesPromise: Promise<Property[]>;
};

export async function SignatureResidencesSection({
  propertiesPromise,
}: SignatureResidencesSectionProps) {
  const properties = await propertiesPromise;

  return (
    <SectionShell id="signature-residences" tone="void">
      <Container>
        <div data-speed="0.98">
          <div className="mb-20 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <Eyebrow>Signature Residences</Eyebrow>
            </div>
            <div>
              <Heading>
                A curated view into places made for lasting attention.
              </Heading>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-3 lg:gap-16 items-start">
            {properties.map((property, index) => {
              // Create an editorial rhythm instead of a flat grid
              const marginTop = index === 0 ? "mt-0" : index === 1 ? "lg:mt-32 mt-10" : "lg:mt-16 mt-10";
              const aspect = index === 1 ? "aspect-[3/4]" : "aspect-[4/5]";

              return (
                <div key={property.slug} className={`group block ${marginTop}`}>
                  <TransitionLink
                    href={`/showcase/${property.slug}`}
                    className="block"
                  >
                    <MediaFrame
                      media={property.hero}
                      sizes="third"
                      className={`${aspect} overflow-hidden`}
                      imageClassName="transition-transform duration-1000 ease-luxury group-hover:scale-[1.035]"
                    />
                    <div className="mt-6 border-t border-ivory-050/12 pt-5">
                      <p className="text-xs uppercase tracking-[0.18em] text-bronze-300">
                        {property.market}
                      </p>
                      <h3 className="mt-3 font-heading text-3xl font-medium leading-tight text-ivory-050 transition-colors duration-500 group-hover:text-ivory-100">
                        {property.title}
                      </h3>
                      <p className="mt-5 text-sm leading-7 text-ivory-050/62">
                        {property.summary}
                      </p>
                    </div>
                  </TransitionLink>
                </div>
              );
            })}
          </div>

          <div className="mt-20">
            <Button href="/showcase" variant="secondary">
              Explore the collection
            </Button>
          </div>
        </div>
      </Container>
    </SectionShell>
  );
}

export function SignatureResidencesSkeleton() {
  return (
    <SectionShell id="signature-residences" tone="void">
      <Container>
        <div className="mb-20 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Skeleton className="h-4 w-48" />
          <Skeleton className="h-24 w-full max-w-3xl" />
        </div>
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-16 items-start">
          {[0, 1, 2].map((item, index) => {
            const marginTop = index === 0 ? "mt-0" : index === 1 ? "lg:mt-32 mt-10" : "lg:mt-16 mt-10";
            const aspect = index === 1 ? "aspect-[3/4]" : "aspect-[4/5]";
            return (
              <div key={item} className={`${marginTop}`}>
                <Skeleton className={aspect} />
                <div className="mt-6 border-t border-ivory-050/12 pt-5">
                  <Skeleton className="h-4 w-1/3" />
                  <Skeleton className="mt-3 h-8 w-3/4" />
                  <Skeleton className="mt-5 h-20 w-full" />
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </SectionShell>
  );
}
