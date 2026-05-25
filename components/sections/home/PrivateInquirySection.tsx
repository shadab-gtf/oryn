import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { SectionShell } from "@/components/ui/SectionShell";
import type { EditorialBlock } from "@/types/content";

type PrivateInquirySectionProps = {
  content: EditorialBlock;
};

export function PrivateInquirySection({ content }: PrivateInquirySectionProps) {
  return (
    <SectionShell tone="void" className="py-24 sm:py-32 lg:py-48">
      <Container size="intimate" className="text-center">
        <div data-speed="1.02">
          <Reveal>
            <Eyebrow>{content.label}</Eyebrow>
          </Reveal>
          <Reveal delay={0.08}>
            <Heading className="mt-6">{content.headline}</Heading>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-8 max-w-2xl text-fluid-lead leading-9 text-ivory-050/72">
              {content.body}
            </p>
          </Reveal>
          {content.support ? (
            <Reveal delay={0.22}>
              <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-stone-300">
                {content.support}
              </p>
            </Reveal>
          ) : null}
          <Reveal className="mt-10">
            <Button href="/private-inquiry">
              Begin a private conversation
            </Button>
          </Reveal>
        </div>
      </Container>
    </SectionShell>
  );
}
