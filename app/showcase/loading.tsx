import { Container } from "@/components/ui/Container";
import { Skeleton } from "@/components/ui/Skeleton";

export default function ShowcaseLoading() {
  return (
    <main className="min-h-screen bg-void-950 pt-32 text-ivory-050">
      <Container>
        <Skeleton className="h-4 w-48" />
        <Skeleton className="mt-8 h-28 max-w-4xl" />
        <div className="mt-16 grid gap-12">
          {[0, 1, 2].map((item) => (
            <Skeleton key={item} className="aspect-[16/8]" />
          ))}
        </div>
      </Container>
    </main>
  );
}
