"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Heading } from "@/components/ui/Heading";

type ErrorPageProps = {
  error: Error & { digest?: string };
  unstable_retry: () => void;
};

export default function ErrorPage({ error, unstable_retry }: ErrorPageProps) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-void-950 pt-32 text-ivory-050">
      <Container size="intimate">
        <Heading as="h1" variant="title">
          The experience paused unexpectedly.
        </Heading>
        <p className="mt-6 text-base leading-8 text-ivory-050/70">
          The page can be requested again without leaving this atelier visit.
        </p>
        <Button className="mt-8" type="button" onClick={unstable_retry}>
          Try again
        </Button>
      </Container>
    </main>
  );
}
