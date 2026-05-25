import { Container } from "@/components/ui/Container";
import { Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
  return (
    <main className="min-h-screen bg-void-950 pt-32 text-ivory-050">
      <Container>
        <Skeleton className="h-4 w-56" />
        <Skeleton className="mt-8 h-36 w-full max-w-4xl" />
        <Skeleton className="mt-10 aspect-[16/9] w-full" />
      </Container>
    </main>
  );
}
