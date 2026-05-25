"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { OrynLogo } from "@/components/brand/OrynLogo";
import { TransitionLink } from "@/components/motion/TransitionLink";
import { Container } from "@/components/ui/Container";
import { NavigationOverlay } from "./NavigationOverlay";
import { cn } from "@/lib/utils/cn";

const navItems = [
  { href: "/showcase", label: "Showcase" },
  { href: "/philosophy", label: "Philosophy" },
  { href: "/journal", label: "Journal" },
  { href: "/global-presence", label: "Global Presence" },
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  
  // If we are not on home, default to the "solid" content state. 
  // GSAP will override this on the home page.
  const isHome = pathname === "/";

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 text-ivory-050 will-change-transform",
          !isHome && "bg-void-950/85 border-b border-ivory-050/10 backdrop-blur-[14px]"
        )}
        data-site-header
      >
        {/* Dynamic Background Layer (Manipulated by GSAP on home) */}
        {isHome && (
          <div 
            className="absolute inset-0 bg-void-950/0 backdrop-blur-none pointer-events-none" 
            data-header-bg
          />
        )}

        <Container 
          className={cn(
            "relative flex items-center justify-between transition-all duration-300",
            isHome ? "h-[88px]" : "h-[64px]"
          )}
          data-header-container
        >
          {/* Left: Brand Anchor */}
          <div className="flex items-center relative z-10 w-1/4">
            <TransitionLink
              href="/"
              className="text-ivory-050 transition-colors duration-300 hover:text-bronze-300"
              ariaLabel="ORYN home"
            >
              <OrynLogo className="w-24 sm:w-28" />
            </TransitionLink>
          </div>

          {/* Center: Desktop Nav & Ambient Orbital Element */}
          <div className="hidden md:flex flex-1 items-center justify-center relative z-10">
            <nav className="flex items-center gap-10">
              {navItems.slice(0, 2).map((item) => (
                <TransitionLink
                  key={item.href}
                  href={item.href}
                  className="group relative px-2 py-1 text-[10px] tracking-[0.2em] font-sans font-light uppercase text-ivory-050/80 transition-colors duration-500 hover:text-ivory-050"
                >
                  <span className="relative inline-block transition-transform duration-500 group-hover:tracking-[0.3em]">
                    {item.label}
                  </span>
                  <span className="absolute bottom-0 left-1/2 w-0 h-px bg-bronze-300/40 -translate-x-1/2 transition-all duration-500 ease-out group-hover:w-full" />
                </TransitionLink>
              ))}

              {/* Ambient Orbital Element */}
              <div 
                className="mx-4 flex items-center justify-center w-8 h-8 opacity-60 pointer-events-none"
                data-header-orbit
              >
                <svg viewBox="0 0 40 40" className="w-full h-full drop-shadow-[0_0_4px_rgba(205,194,182,0.3)]">
                  <circle cx="20" cy="20" r="18" fill="none" stroke="#cdc2b6" strokeWidth="0.5" className="opacity-40" />
                  <circle cx="20" cy="20" r="14" fill="none" stroke="#cdc2b6" strokeWidth="1" strokeDasharray="2 6" className="opacity-60" />
                  <circle cx="20" cy="2" r="1.5" fill="#e6e3de" />
                </svg>
              </div>

              {navItems.slice(2, 4).map((item) => (
                <TransitionLink
                  key={item.href}
                  href={item.href}
                  className="group relative px-2 py-1 text-[10px] tracking-[0.2em] font-sans font-light uppercase text-ivory-050/80 transition-colors duration-500 hover:text-ivory-050"
                >
                  <span className="relative inline-block transition-transform duration-500 group-hover:tracking-[0.3em]">
                    {item.label}
                  </span>
                  <span className="absolute bottom-0 left-1/2 w-0 h-px bg-bronze-300/40 -translate-x-1/2 transition-all duration-500 ease-out group-hover:w-full" />
                </TransitionLink>
              ))}
            </nav>
          </div>

          {/* Right: Adaptive CTA & Menu Toggle */}
          <div className="flex items-center justify-end gap-6 relative z-10 w-1/4">
            <div className="hidden lg:block">
              <TransitionLink
                href="/private-inquiry"
                className="group flex items-center gap-2 text-[10px] tracking-[0.2em] font-sans font-medium uppercase text-bronze-300 transition-colors hover:text-ivory-050"
                ariaLabel="Private inquiry"
              >
                <span className="relative overflow-hidden flex items-center h-4">
                  <span className="block transition-transform duration-500 group-hover:-translate-y-full">Inquiry</span>
                  <span className="block absolute inset-0 translate-y-full transition-transform duration-500 group-hover:translate-y-0">Inquiry</span>
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-bronze-300/60 group-hover:bg-ivory-050/80 transition-colors duration-500 shadow-[0_0_8px_rgba(205,194,182,0.4)]" />
              </TransitionLink>
            </div>

            <button
              onClick={() => setMenuOpen(true)}
              className="group flex items-center gap-3 text-[10px] tracking-[0.2em] font-sans font-medium uppercase transition-colors duration-500 hover:text-bronze-300 focus:outline-none cursor-pointer"
              aria-label="Open menu"
              type="button"
            >
              <span className="hidden sm:inline transition-transform duration-500 group-hover:tracking-[0.3em]">Menu</span>
              <div className="flex flex-col gap-[3px] w-4 justify-center items-end">
                <span className="h-[1px] w-full bg-current transition-all duration-300" />
                <span className="h-[1px] w-3/4 bg-current transition-all duration-300 group-hover:w-full" />
              </div>
            </button>
          </div>
        </Container>

        {/* Invisible Scroll Progress Line */}
        <div className="absolute bottom-0 left-0 h-px bg-gradient-to-r from-bronze-300/60 to-transparent w-0 origin-left" data-header-progress />
      </header>

      {/* Fullscreen Cinematic Overlay */}
      <NavigationOverlay
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        items={navItems}
      />
    </>
  );
}
