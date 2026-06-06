"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";

type ShowcaseErrorProps = {
  error: Error & { digest?: string };
  unstable_retry: () => void;
};

export default function ShowcaseError({
  error,
  unstable_retry,
}: ShowcaseErrorProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-void-950 pt-32 text-ivory-050">
      <Container size="intimate">
        <Heading as="h1" variant="title">
          The transformation gallery could not be prepared.
        </Heading>
        <Button className="mt-8" type="button" onClick={unstable_retry}>
          Request again
        </Button>
      </Container>
    </main>
  );
}
