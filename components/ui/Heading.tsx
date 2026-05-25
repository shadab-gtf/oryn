import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type HeadingProps = {
  children: ReactNode;
  as?: ElementType;
  variant?: "display" | "title" | "section" | "subtle";
  className?: string;
};

const variants: Record<NonNullable<HeadingProps["variant"]>, string> = {
  display:
    "font-heading text-fluid-display font-light leading-[0.96] text-balance tracking-normal",
  title:
    "font-heading text-fluid-title font-light leading-[1.02] text-balance tracking-normal",
  section:
    "font-heading text-fluid-section font-light leading-[1.06] text-balance tracking-normal",
  subtle:
    "font-sans text-sm font-medium uppercase tracking-[0.18em] text-stone-300",
};

export function Heading({
  children,
  as: Component = "h2",
  variant = "section",
  className,
}: HeadingProps) {
  return <Component className={cn(variants[variant], className)}>{children}</Component>;
}
