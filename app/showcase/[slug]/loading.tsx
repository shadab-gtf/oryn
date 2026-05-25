import { Container } from "@/components/ui/Container";
import { Skeleton } from "@/components/ui/Skeleton";

export default function ProjectLoading() {
  return (
    <main className="min-h-screen bg-void-950 pt-32 text-ivory-050">
      <Container>
        <Skeleton className="h-4 w-56" />
        <Skeleton className="mt-8 h-32 max-w-5xl" />
        <Skeleton className="mt-10 aspect-[16/9]" />
      </Container>
    </main>
  );
}
