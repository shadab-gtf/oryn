import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-void-950 pt-32 text-ivory-050">
      <Container size="intimate">
        <p className="text-xs uppercase tracking-[0.2em] text-bronze-300">
          Not Found
        </p>
        <Heading as="h1" variant="title" className="mt-6">
          This atelier page is not part of the current collection.
        </Heading>
        <p className="mt-6 text-base leading-8 text-ivory-050/70">
          Return to the transformation gallery or request a restoration consultation.
        </p>
        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <Button href="/showcase">View transformations</Button>
          <Button href="/private-inquiry" variant="secondary">
            Restoration consultation
          </Button>
        </div>
      </Container>
    </main>
  );
}
