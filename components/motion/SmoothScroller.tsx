"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useMotionGate } from "./MotionProvider";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

export function SmoothScroller() {
  const { loaderComplete } = useMotionGate();
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    // Disable smooth scrolling if the user prefers reduced motion
    if (prefersReducedMotion) return;

    // Initialize Lenis with cinematic settings
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // 1. Sync Lenis scroll with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // 2. Add Lenis to GSAP's ticker (ensures perfect synchronization frame-by-frame)
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // 3. Disable GSAP's lag smoothing to prevent stuttering conflicts with Lenis
    gsap.ticker.lagSmoothing(0);

    // 4. Handle loader lifecycle: disable scrolling while loader is active
    if (!loaderComplete) {
      lenis.stop();
    } else {
      lenis.start();
    }

    return () => {
      // Cleanup on unmount
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, [loaderComplete, prefersReducedMotion]);

  return null;
}
