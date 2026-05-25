import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { SectionShell } from "@/components/ui/SectionShell";
import type { EditorialBlock } from "@/types/content";

const materialMedia = {
  src: "/media/home-detail.jpg",
  alt: "A refined interior detail showing warm stone, timber, and soft architectural shadow",
  width: 1200,
  height: 1800,
};

type MaterialLanguageSectionProps = {
  content: EditorialBlock;
};

export function MaterialLanguageSection({
  content,
}: MaterialLanguageSectionProps) {
  return (
    <SectionShell tone="stone">
      <Container>
        <div data-speed="0.95" className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
          <div>
            <Reveal>
              <Eyebrow className="text-bronze-500">{content.label}</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <Heading className="mt-6 text-void-950">{content.headline}</Heading>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-8 max-w-xl text-fluid-lead leading-9 text-stone-700">
                {content.body}
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.08}>
            <MediaFrame media={materialMedia} className="aspect-[5/4]" />
          </Reveal>
        </div>
      </Container>
    </SectionShell>
  );
}
