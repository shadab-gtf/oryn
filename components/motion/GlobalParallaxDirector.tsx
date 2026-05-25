"use client";

import { useEffect } from "react";
import { useMotionGate } from "./MotionProvider";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export function GlobalParallaxDirector() {
  const { loaderComplete } = useMotionGate();
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    // Only run parallax once the loader has completely vanished to prevent scroll jump bugs
    // Also skip entirely if the user prefers reduced motion
    if (!loaderComplete || prefersReducedMotion) return;

    let ctx: gsap.Context | null = null;

    void (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        const elements = gsap.utils.toArray<HTMLElement>("[data-speed]");

        elements.forEach((el) => {
          const speedAttr = el.getAttribute("data-speed");
          if (!speedAttr) return;

          const speed = parseFloat(speedAttr);
          if (isNaN(speed) || speed === 1) return;

          // Pure CSS variables or inline styles could be mutated, so we use GSAP to handle it reliably.
          // By animating y, we shift the element out of its normal document flow.
          
          gsap.fromTo(
            el,
            {
              y: () => {
                const distance = window.innerHeight + el.offsetHeight;
                // If speed is < 1 (slower), starting y is negative (shifted up).
                return -(1 - speed) * (distance / 2);
              },
            },
            {
              y: () => {
                const distance = window.innerHeight + el.offsetHeight;
                // If speed is < 1 (slower), ending y is positive (shifted down).
                return (1 - speed) * (distance / 2);
              },
              ease: "none",
              scrollTrigger: {
                // We use the parent as the trigger if possible so the trigger bounds don't move with the element!
                trigger: el.parentElement || el,
                start: "top bottom",
                end: "bottom top",
                // OLD VALUE: scrub: true (instant track)
                // NEW VALUE: scrub: 1.2 (adds a 1.2 second buttery lag to the parallax catch-up)
                scrub: 1.2,
                invalidateOnRefresh: true,
              },
            }
          );
        });

        // Trigger a refresh after setup to ensure all layouts are calculated
        ScrollTrigger.refresh();
      });
    })();

    return () => {
      if (ctx) ctx.revert();
    };
  }, [loaderComplete, prefersReducedMotion]);

  return null;
}
