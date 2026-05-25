"use client";

import { useEffect } from "react";
import { useMotionGate } from "@/components/motion/MotionProvider";
import { usePrefersReducedMotion } from "@/components/motion/usePrefersReducedMotion";

type UseClipRevealOptions = {
  delay?: number;
  duration?: number;
  threshold?: string;
};

export function useClipReveal(
  ref: React.RefObject<HTMLElement | null>,
  { delay = 0, duration = 1.2, threshold = "top bottom" }: UseClipRevealOptions = {}
) {
  const { loaderComplete } = useMotionGate();
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el || !loaderComplete || prefersReducedMotion) return;

    let ctx: gsap.Context | null = null;

    void (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // Initial state: wiped out from the bottom (invisible)
        // inset(top right bottom left) -> 100% top means bottom edge
        gsap.set(el, { 
          clipPath: "inset(100% 0% 0% 0%)",
          opacity: 0
        });

        // The Reveal Tween
        gsap.to(el, {
          clipPath: "inset(0% 0% 0% 0%)",
          opacity: 1,
          duration: duration,
          delay: delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: threshold,
            toggleActions: "play none none none",
            // We only play it once, but we can reset if needed. Usually luxury sites just play once.
          },
        });
      });
    })();

    return () => {
      if (ctx) ctx.revert();
    };
  }, [ref, loaderComplete, prefersReducedMotion, delay, duration, threshold]);
}
