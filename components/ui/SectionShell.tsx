import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type SectionShellProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: ElementType;
  tone?: "void" | "ivory" | "stone";
};

const tones: Record<NonNullable<SectionShellProps["tone"]>, string> = {
  void: "bg-void-950 text-ivory-050",
  ivory: "bg-ivory-050 text-void-950",
  stone: "bg-mist-100 text-void-950",
};

export function SectionShell({
  children,
  className,
  id,
  as: Component = "section",
  tone = "void",
}: SectionShellProps) {
  return (
    <Component
      id={id}
      className={cn(
        "oryn-section-shell relative overflow-visible py-20 sm:py-28 lg:py-40",
        tones[tone],
        className,
      )}
    >
      {children}
    </Component>
  );
}
