"use client";

import { useEffect } from "react";
import { usePrefersReducedMotion } from "@/components/motion/usePrefersReducedMotion";

function toArray<T extends HTMLElement | SVGElement>(
  root: HTMLElement | Document,
  selector: string,
) {
  return Array.from(root.querySelectorAll<T>(selector));
}

export function PhilosophyScrollDirector() {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-philosophy-root]");
    const pinContainer = document.querySelector<HTMLElement>("[data-philosophy-pin-container]");
    const header = document.querySelector<HTMLElement>("[data-site-header]");
    
    let context: { revert: () => void } | null = null;
    let disposed = false;

    if (!root || !pinContainer) {
      return;
    }

    void (async () => {
      const [{ default: gsap }, { ScrollTrigger }] = await Promise.all([
        import("gsap"),
        import("gsap/ScrollTrigger"),
      ]);

      if (disposed) return;
      gsap.registerPlugin(ScrollTrigger);

      context = gsap.context(() => {
        if (prefersReducedMotion) return;

        const bgImages = toArray<HTMLElement>(pinContainer, "[data-bg-image]");
        const circleImages = toArray<HTMLElement>(pinContainer, "[data-circle-image]");
        const trackerItems = toArray<HTMLElement>(pinContainer, "[data-chapter-item]");
        const trackerDots = toArray<HTMLElement>(pinContainer, "[data-chapter-dot]");
        
        // --- 1. INITIAL SETUP ---
        // Chapter 1 visible initially
        gsap.set(bgImages[0], { opacity: 0.3, scale: 1 });
        gsap.set(circleImages[0], { opacity: 1, scale: 1 });
        gsap.set(trackerItems[0], { opacity: 1 });
        gsap.set(trackerDots[0], { borderColor: "rgba(205, 194, 182, 0.6)", color: "#cdc2b6" });

        // --- 2. NAVBAR DISAPPEAR LOGIC ---
        // As requested: Navbar should NOT exist inside this section.
        if (header) {
          ScrollTrigger.create({
            trigger: root,
            start: "top top",
            end: "bottom top",
            onEnter: () => gsap.to(header, { autoAlpha: 0, duration: 0.6, ease: "power2.out" }),
            onLeaveBack: () => gsap.to(header, { autoAlpha: 1, duration: 0.6, ease: "power2.out" }),
            onLeave: () => gsap.to(header, { autoAlpha: 1, duration: 0.6, ease: "power2.out" }),
            onEnterBack: () => gsap.to(header, { autoAlpha: 0, duration: 0.6, ease: "power2.out" })
          });
        }

        // --- 3. ENTRANCE ANIMATION ---
        const titleLines = toArray<HTMLElement>(root, "[data-phil-title]");
        const desc = root.querySelector("[data-phil-desc]");
        const eyebrow = root.querySelector("[data-phil-eyebrow]");
        const circle = root.querySelector("[data-phil-circle]");
        const tracker = root.querySelector("[data-phil-tracker]");

        // Initial soft reveal of the static elements when the section scrolls into view
        const entranceTl = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top 60%", // start revealing when section is 60% down the viewport
            end: "top top",
            scrub: 1.5
          }
        });

        entranceTl.fromTo([eyebrow, ...titleLines, desc], 
          { yPercent: 40, opacity: 0 },
          { yPercent: 0, opacity: 1, stagger: 0.05, ease: "power2.out" },
          0
        )
        .fromTo(circle, 
          { scale: 0.95, opacity: 0 },
          { scale: 1, opacity: 1, ease: "power2.out" },
          0
        )
        .fromTo(tracker,
          { x: 20, opacity: 0 },
          { x: 0, opacity: 1, ease: "power2.out" },
          0
        );


        // --- 4. MASTER PINNED SCROLL SEQUENCE ---
        const totalChapters = 5;

        const masterTl = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: `+=${totalChapters * 120}%`, // Gives plenty of scroll space for 5 chapters
            pin: true,
            scrub: 1.5, // 1.5 scrub gives it that "magnetic, cinematic" feel
            invalidateOnRefresh: true,
          }
        });

        // Loop through each chapter transition
        for (let i = 0; i < totalChapters; i++) {
          const isLast = i === totalChapters - 1;
          
          if (i > 0) {
            // WIPE OUT previous chapter
            masterTl.to(bgImages[i - 1], { opacity: 0, scale: 1.02, duration: 1, ease: "power1.inOut" }, `chapter-${i}`)
                    .to(circleImages[i - 1], { opacity: 0, scale: 1.05, duration: 1, ease: "power1.inOut" }, `chapter-${i}`)
                    .to(trackerItems[i - 1], { opacity: 0.2, duration: 0.6, ease: "power2.inOut" }, `chapter-${i}`)
                    .to(trackerDots[i - 1], { borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.5)", duration: 0.6 }, `chapter-${i}`);
                    
            // WIPE IN current chapter
            masterTl.fromTo(bgImages[i], 
                      { opacity: 0, scale: 1.05 }, 
                      { opacity: 0.3, scale: 1, duration: 1.2, ease: "power2.out" }, 
                      `chapter-${i}+=0.2`)
                    .fromTo(circleImages[i], 
                      { opacity: 0, scale: 1.1 }, 
                      { opacity: 1, scale: 1, duration: 1.2, ease: "power2.out" }, 
                      `chapter-${i}+=0.2`)
                    .to(trackerItems[i], { opacity: 1, duration: 0.6, ease: "power2.out" }, `chapter-${i}+=0.4`)
                    .to(trackerDots[i], { borderColor: "rgba(205, 194, 182, 0.6)", color: "#cdc2b6", duration: 0.6 }, `chapter-${i}+=0.4`);
          }
          
          // Hold the current chapter so the user can read it
          if (!isLast) {
            masterTl.to({}, { duration: 0.8 }); // The "stillness" and "restraint" hold
          }
        }

        // --- 5. CLEAN EXIT TRANSITION ---
        // As user exits, typography and circle fade out smoothly
        masterTl.to([eyebrow, ...titleLines, desc, circle, tracker], {
          yPercent: -10,
          opacity: 0,
          duration: 1,
          ease: "power2.inOut"
        });

      }, root);
    })();

    return () => {
      disposed = true;
      context?.revert();
    };
  }, [prefersReducedMotion]);

  return null;
}
