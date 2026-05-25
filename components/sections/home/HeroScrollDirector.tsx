"use client";

import { useEffect, useRef } from "react";
import { useMotionGate } from "@/components/motion/MotionProvider";
import { usePrefersReducedMotion } from "@/components/motion/usePrefersReducedMotion";

function toArray<T extends HTMLElement | SVGElement>(
  root: HTMLElement | Document,
  selector: string,
) {
  return Array.from(root.querySelectorAll<T>(selector));
}

export function HeroScrollDirector() {
  const { loaderComplete } = useMotionGate();
  const prefersReducedMotion = usePrefersReducedMotion();

  const introTlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const root = document.querySelector<HTMLElement>("[data-hero-root]");
    const pinContainer = document.querySelector<HTMLElement>("[data-hero-pin-container]");
    const header = document.querySelector<HTMLElement>("[data-site-header]");
    const counter = document.querySelector<HTMLElement>("[data-hero-counter]");
    const progressBar = document.querySelector<HTMLElement>("[data-hero-progress-bar]");

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

      if (disposed) {
        return;
      }

      gsap.registerPlugin(ScrollTrigger);

      context = gsap.context(() => {
        const slides = toArray<HTMLElement>(pinContainer, "[data-hero-slide]");

        if (prefersReducedMotion) {
          gsap.set(slides, { clearProps: "all", opacity: 1, clipPath: "none", zIndex: (i) => i });
          return;
        }

        // --- INITIAL LOAD SEQUENCE (SLIDE 1) ---
        const firstSlide = slides[0];
        const firstMedia = firstSlide.querySelector("[data-slide-media]");
        const firstLabel = firstSlide.querySelector("[data-slide-label]");
        const firstTitleLines = toArray<HTMLElement>(firstSlide, "[data-slide-title-line]");
        const firstActions = firstSlide.querySelector("[data-slide-actions]");

        // Set initial states for slide 1 text immediately so it's hidden behind the loader
        gsap.set(firstMedia, { scale: 1.05, opacity: 0 });
        gsap.set([firstLabel, ...firstTitleLines, firstActions], { yPercent: 120, opacity: 0 });

        // Hide header immediately so it doesn't show behind the dissolving loader
        if (header) {
          gsap.set(header, { yPercent: -100, opacity: 0 });
        }

        // Set initial states for slides 2, 3, 4 (Masked out from bottom)
        slides.forEach((slide, i) => {
          if (i === 0) return;
          gsap.set(slide, { clipPath: "inset(100% 0% 0% 0%)" });

          const label = slide.querySelector("[data-slide-label]");
          const titleLines = toArray<HTMLElement>(slide, "[data-slide-title-line]");
          const actions = slide.querySelector("[data-slide-actions]");

          gsap.set([label, ...titleLines, actions], { yPercent: 120, opacity: 0 });
        });

        // Intro Animation - create paused
        const introTl = gsap.timeline({
          defaults: { ease: "power3.out" },
          paused: true
        });

        let heroStart = 0;
        if (header) {
          introTl.to(header, { yPercent: 0, opacity: 1, duration: 1.2, ease: "power3.out" }, 0);
          heroStart = 0.6; // Start hero animations slightly after header starts dropping in
        }

        introTl.to(firstMedia, { opacity: 1, scale: 1, duration: 2.5, ease: "power2.out" }, heroStart)
          .to(firstLabel, { yPercent: 0, opacity: 1, duration: 1.2 }, heroStart + 0.5)
          .to(firstTitleLines, { yPercent: 0, opacity: 1, duration: 1.4, stagger: 0.15, ease: "power4.out" }, heroStart + 0.6)
          .to(firstActions, { yPercent: 0, opacity: 1, duration: 1.2 }, heroStart + 1.2);

        introTlRef.current = introTl;

        // If the loader is already complete (e.g. navigating back from another page),
        // the async GSAP setup finishes AFTER the synchronous useEffect watcher fired.
        // Therefore, we must play it immediately here.
        if (loaderComplete) {
          introTl.play();
        }

        // --- PINNED SCROLL SEQUENCE ---
        const totalSlides = slides.length;

        const masterTl = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: `+=${totalSlides * 100}%`,
            pin: true,
            scrub: 1.5,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              // Update counter based on progress
              const currentIndex = Math.min(Math.floor(self.progress * totalSlides) + 1, totalSlides);
              if (counter) counter.innerText = `0${currentIndex}`;
              if (progressBar) gsap.set(progressBar, { height: `${(currentIndex / totalSlides) * 100}%` });
            }
          }
        });

        // Create wipe animations for each subsequent slide
        slides.forEach((slide, i) => {
          if (i === 0) return; // Slide 1 is already there

          const prevSlide = slides[i - 1];
          const media = slide.querySelector("[data-slide-media]");

          const label = slide.querySelector("[data-slide-label]");
          const titleLines = toArray<HTMLElement>(slide, "[data-slide-title-line]");
          const actions = slide.querySelector("[data-slide-actions]");

          const prevLabel = prevSlide.querySelector("[data-slide-label]");
          const prevTitleLines = toArray<HTMLElement>(prevSlide, "[data-slide-title-line]");
          const prevActions = prevSlide.querySelector("[data-slide-actions]");

          // Each slide wipe takes a segment of the timeline
          masterTl.add(`slide-${i}`)
            // 1. Fade out previous text
            .to([prevLabel, ...prevTitleLines, prevActions], {
              yPercent: -100,
              opacity: 0,
              stagger: 0.05,
              duration: 0.4
            }, `slide-${i}`)
            // 2. Wipe up the new slide (SVG mask effect via clip-path)
            .to(slide, {
              clipPath: "inset(0% 0% 0% 0%)",
              ease: "none",
              duration: 1
            }, `slide-${i}`)
            // 3. Subtle scale parallax on the incoming image
            .fromTo(media,
              { scale: 1.1, yPercent: 10 },
              { scale: 1, yPercent: 0, ease: "none", duration: 1 },
              `slide-${i}`
            )
            // 4. Reveal new text
            .to([label, ...titleLines, actions], {
              yPercent: 0,
              opacity: 1,
              stagger: 0.1,
              duration: 0.6,
              ease: "power2.out"
            }, `slide-${i}+=0.5`);
        });

        // Navbar integration
        if (header) {
          const headerBg = header.querySelector<HTMLElement>("[data-header-bg]");
          if (headerBg) {
            gsap.to(headerBg, {
              backgroundColor: "rgba(10,10,10,0.85)",
              backdropFilter: "blur(14px)",
              scrollTrigger: {
                trigger: root,
                start: "top top",
                end: "+=100",
                scrub: true
              }
            });
          }

          const orbitSvg = header.querySelector<HTMLElement>("[data-header-orbit] svg");
          if (orbitSvg) {
            gsap.to(orbitSvg, {
              rotation: 360,
              ease: "none",
              scrollTrigger: {
                trigger: root,
                start: "top top",
                end: `+=${totalSlides * 100}%`,
                scrub: 1.5
              }
            });
          }
        }

        const refreshTimeout = window.setTimeout(() => {
          ScrollTrigger.refresh();
        }, 120);

        return () => {
          window.clearTimeout(refreshTimeout);
        };
      }, root);
    })();

    return () => {
      disposed = true;
      context?.revert();
    };
  }, [prefersReducedMotion]); // Removed loaderComplete from dependencies

  // Watch for loader complete and play the intro timeline
  useEffect(() => {
    if (loaderComplete && introTlRef.current) {
      introTlRef.current.play();
    }
  }, [loaderComplete]);

  return null;
}
