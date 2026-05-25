"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { OrynLogo } from "@/components/brand/OrynLogo";
import { TransitionLink } from "@/components/motion/TransitionLink";
import { cn } from "@/lib/utils/cn";

type NavigationOverlayProps = {
  isOpen: boolean;
  onClose: () => void;
  items: readonly { href: string; label: string }[];
};

export function NavigationOverlay({ isOpen, onClose, items }: NavigationOverlayProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  // Handle ESC key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      const links = el.querySelectorAll(".menu-link");
      const subLinks = el.querySelectorAll(".sub-link");
      const leftContent = el.querySelectorAll(".left-content");
      const centerImage = el.querySelector(".center-image-wrapper");
      const closeBtn = el.querySelector(".close-btn");

      if (prefersReduced) {
        // Instant states for reduced motion
        const tl = gsap.timeline({ paused: true });
        tl.set(el, { opacity: 1, visibility: "visible" })
          .set([links, subLinks, leftContent, centerImage, closeBtn], {
            opacity: 1,
            y: 0,
            x: 0,
            scale: 1,
            rotate: 0,
          });
        timelineRef.current = tl;
        return;
      }

      // Initial GSAP hidden state
      gsap.set(el, { opacity: 0, visibility: "hidden" });
      gsap.set(links, { opacity: 0, y: 40 });
      gsap.set(subLinks, { opacity: 0, y: 15 });
      gsap.set(leftContent, { opacity: 0, x: -40 });
      gsap.set(centerImage, { opacity: 0, scale: 0.94, y: 30 });
      gsap.set(closeBtn, { opacity: 0, rotate: -90 });

      // Build cinematic timeline
      const tl = gsap.timeline({
        paused: true,
        defaults: { ease: "power4.out", duration: 0.95 },
      });

      tl.to(el, { opacity: 1, visibility: "visible", duration: 0.5 })
        .to(leftContent, { opacity: 1, x: 0, stagger: 0.08, duration: 0.8 }, "-=0.25")
        .to(centerImage, { opacity: 1, scale: 1, y: 0, duration: 1.3, ease: "power3.out" }, "-=0.7")
        .to(links, { opacity: 1, y: 0, stagger: 0.06, duration: 0.9, ease: "power3.out" }, "-=0.95")
        .to(subLinks, { opacity: 1, y: 0, stagger: 0.04, duration: 0.7 }, "-=0.65")
        .to(closeBtn, { opacity: 1, rotate: 0, duration: 0.7 }, "-=0.85");

      timelineRef.current = tl;
    }, el);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!timelineRef.current) return;
    if (isOpen) {
      timelineRef.current.play();
    } else {
      timelineRef.current.reverse();
    }
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "fixed inset-0 z-[100] h-screen w-screen overflow-y-auto bg-void-950 text-ivory-050 backdrop-blur-md"
      )}
      id="luxury-navigation-overlay"
      style={{ visibility: "hidden" }}
    >
      {/* Luxury Background Wave/Fluid Effect */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_25%,rgba(88,79,66,0.18),transparent_50%),radial-gradient(circle_at_85%_75%,rgba(205,194,182,0.06),transparent_50%)]" />
      
      <div className="mx-auto flex min-h-screen w-full max-w-[1920px] flex-col justify-between px-6 py-8 md:px-12 md:py-12">
        {/* Top Header Row inside Menu */}
        <div className="flex items-center justify-between">
          <div className="left-content opacity-0">
            <span className="text-[10px] tracking-[0.2em] text-ivory-050/40 uppercase">
              Oryn Identity System
            </span>
          </div>
          
          {/* Centered close button at top-right */}
          <button
            onClick={onClose}
            className="close-btn ml-auto flex items-center justify-center p-2 text-ivory-050/62 transition-colors duration-300 hover:text-bronze-300 focus:outline-none"
            aria-label="Close menu"
            type="button"
          >
            <span className="mr-3 text-[10px] tracking-[0.25em] uppercase font-sans font-medium hidden sm:inline">
              Close
            </span>
            <svg
              className="h-6 w-6 stroke-current"
              viewBox="0 0 24 24"
              fill="none"
              strokeWidth="1.5"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Content Grid */}
        <div className="grid flex-1 items-center gap-12 py-10 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1.6fr] md:gap-8 lg:gap-16">
          
          {/* Left Column: Logo & Inquiries */}
          <div className="flex flex-col justify-between h-full py-4 border-b border-ivory-050/10 md:border-b-0 md:border-r md:border-ivory-050/10 pr-6 lg:pr-12">
            <div className="left-content opacity-0 mb-8 md:mb-12">
              <TransitionLink href="/" onNavigate={onClose}>
                <OrynLogo className="w-36 text-bronze-300" variant="full" />
              </TransitionLink>
            </div>
            
            <div className="space-y-8 mt-auto">
              <div className="left-content opacity-0">
                <h3 className="text-[10px] tracking-[0.25em] text-bronze-300 uppercase font-sans font-medium mb-3">
                  Residential Acquisitions
                </h3>
                <p className="font-heading text-lg font-light text-ivory-050">
                  Marcus Vance
                </p>
                <p className="text-sm text-ivory-050/50 mt-1 hover:text-bronze-300 transition-colors duration-200">
                  <a href="tel:+97143982200">+971 4 398 2200</a>
                </p>
                <p className="text-sm text-ivory-050/50 hover:text-bronze-300 transition-colors duration-200">
                  <a href="mailto:vance@oryn.com">vance@oryn.com</a>
                </p>
              </div>

              <div className="left-content opacity-0">
                <h3 className="text-[10px] tracking-[0.25em] text-bronze-300 uppercase font-sans font-medium mb-3">
                  Commercial & Developments
                </h3>
                <p className="font-heading text-lg font-light text-ivory-050">
                  Elena Rostova
                </p>
                <p className="text-sm text-ivory-050/50 mt-1 hover:text-bronze-300 transition-colors duration-200">
                  <a href="tel:+37251913222">+372 5191 3222</a>
                </p>
                <p className="text-sm text-ivory-050/50 hover:text-bronze-300 transition-colors duration-200">
                  <a href="mailto:rostova@oryn.com">rostova@oryn.com</a>
                </p>
              </div>
            </div>
          </div>

          {/* Middle Column: Architectural Image (Hidden on mobile) */}
          <div className="hidden md:flex justify-center items-center h-full">
            <div className="center-image-wrapper w-full aspect-[3/4] max-w-[280px] lg:max-w-[320px] overflow-hidden rounded-[24px] border border-ivory-050/10 bg-charcoal-900/40 relative">
              <Image
                src="/media/home-detail.jpg"
                alt="Architectural material language"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover opacity-90 transition-transform duration-[2s] hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column: Menu Items */}
          <div className="flex flex-col justify-between h-full pl-0 lg:pl-12">
            <nav className="flex flex-col space-y-4 md:space-y-6">
              {items.map((item) => (
                <div key={item.href} className="menu-link overflow-hidden opacity-0">
                  <TransitionLink
                    href={item.href}
                    className="group inline-flex items-center text-3xl sm:text-4xl md:text-5xl font-heading font-light tracking-wide text-ivory-050/80 transition-colors duration-300 hover:text-bronze-300"
                    onNavigate={onClose}
                  >
                    <span className="font-mono text-xs text-bronze-300/40 mr-4 transition-colors duration-300 group-hover:text-bronze-300">
                      //
                    </span>
                    {item.label}
                  </TransitionLink>
                </div>
              ))}
            </nav>

            {/* Bottom Secondary Links */}
            <div className="mt-12 md:mt-16 grid grid-cols-2 gap-4 border-t border-ivory-050/10 pt-8">
              <div className="space-y-3">
                <div className="sub-link opacity-0">
                  <TransitionLink
                    href="/philosophy"
                    onNavigate={onClose}
                    className="text-[10px] tracking-[0.2em] uppercase font-sans font-medium text-ivory-050/40 hover:text-bronze-300 transition-colors duration-200"
                  >
                    For Investors
                  </TransitionLink>
                </div>
                <div className="sub-link opacity-0">
                  <TransitionLink
                    href="/philosophy"
                    onNavigate={onClose}
                    className="text-[10px] tracking-[0.2em] uppercase font-sans font-medium text-ivory-050/40 hover:text-bronze-300 transition-colors duration-200"
                  >
                    Our Team
                  </TransitionLink>
                </div>
                <div className="sub-link opacity-0">
                  <TransitionLink
                    href="/philosophy"
                    onNavigate={onClose}
                    className="text-[10px] tracking-[0.2em] uppercase font-sans font-medium text-ivory-050/40 hover:text-bronze-300 transition-colors duration-200"
                  >
                    Oryn Studio
                  </TransitionLink>
                </div>
              </div>
              <div className="space-y-3">
                <div className="sub-link opacity-0">
                  <TransitionLink
                    href="/showcase"
                    onNavigate={onClose}
                    className="text-[10px] tracking-[0.2em] uppercase font-sans font-medium text-ivory-050/40 hover:text-bronze-300 transition-colors duration-200"
                  >
                    Construction Updates
                  </TransitionLink>
                </div>
                <div className="sub-link opacity-0">
                  <TransitionLink
                    href="/private-inquiry"
                    onNavigate={onClose}
                    className="text-[10px] tracking-[0.2em] uppercase font-sans font-medium text-ivory-050/40 hover:text-bronze-300 transition-colors duration-200"
                  >
                    Acquisition Process
                  </TransitionLink>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright/legal row */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-ivory-050/10 pt-6 text-[10px] tracking-[0.15em] text-ivory-050/30 uppercase mt-4">
          <p>© 2026 ORYN. All rights reserved.</p>
          <div className="flex space-x-6 mt-2 sm:mt-0">
            <a href="#" className="hover:text-bronze-300 transition-colors duration-200">Privacy</a>
            <a href="#" className="hover:text-bronze-300 transition-colors duration-200">Terms</a>
          </div>
        </div>
      </div>
    </div>
  );
}
