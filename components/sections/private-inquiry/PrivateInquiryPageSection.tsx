import { InquiryForm } from "@/components/inquiry/InquiryForm";
import { Reveal } from "@/components/motion/Reveal";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { SectionShell } from "@/components/ui/SectionShell";

export function PrivateInquiryPageSection() {
  return (
    <SectionShell tone="void" className="pt-32 sm:pt-40">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <Reveal>
              <Eyebrow>Restoration Consultation</Eyebrow>
            </Reveal>
            <Reveal delay={0.08}>
              <Heading as="h1" variant="title" className="mt-6">
                Begin with the furniture, its story, and the room it belongs to.
              </Heading>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-8 max-w-xl text-fluid-lead leading-9 text-ivory-050/72">
                Share the piece, material, location, and desired transformation.
                A considered atelier response will follow.
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <InquiryForm />
          </Reveal>
        </div>
      </Container>
    </SectionShell>
  );
}
