"use client";

import { useRef, type ReactNode } from "react";
import { useClipReveal } from "@/hooks/useClipReveal";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "span";
  mask?: "vertical" | "horizontal" | "soft" | "panel" | "line"; // Kept for backwards compatibility, though unused by GSAP
};

export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useClipReveal(ref as React.RefObject<HTMLElement | null>, {
    delay,
    duration: 1.2,
    threshold: "top 90%",
  });

  const Component = as;

  return (
    <Component
      className={className}
      ref={ref as any}
      suppressHydrationWarning
    >
      {children}
    </Component>
  );
}
