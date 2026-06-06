"use client";

import { useEffect, useState } from "react";
import { TransitionLink } from "@/components/motion/TransitionLink";

type NavItem = {
  href: string;
  label: string;
};

type MobileNavigationProps = {
  items: readonly NavItem[];
};

export function MobileNavigation({ items }: MobileNavigationProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        aria-controls="mobile-navigation"
        aria-expanded={open}
        aria-label={open ? "Close navigation" : "Open navigation"}
        className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 border border-ivory-050/14 text-ivory-050"
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        <span
          className={`h-px w-5 bg-current transition-transform duration-300 ${
            open ? "translate-y-[3px] rotate-45" : ""
          }`}
        />
        <span
          className={`h-px w-5 bg-current transition-opacity duration-300 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`h-px w-5 bg-current transition-transform duration-300 ${
            open ? "-translate-y-[3px] -rotate-45" : ""
          }`}
        />
      </button>
      <div
        className={`fixed inset-x-0 top-20 z-40 border-b border-ivory-050/10 bg-void-950/96 px-5 py-8 backdrop-blur-xl transition-[opacity,transform,visibility] duration-300 ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-3 opacity-0"
        }`}
        id="mobile-navigation"
      >
        <nav aria-label="Mobile navigation" className="flex flex-col gap-6">
          {items.map((item) => (
            <TransitionLink
              key={item.href}
              className="border-b border-ivory-050/10 pb-5 text-lg text-ivory-050"
              href={item.href}
              onNavigate={() => setOpen(false)}
            >
              {item.label}
            </TransitionLink>
          ))}
          <TransitionLink
            className="mt-2 inline-flex min-h-11 items-center justify-center border border-bronze-300/50 px-5 text-sm text-ivory-050"
            href="/private-inquiry"
            onNavigate={() => setOpen(false)}
          >
            Restoration Consultation
          </TransitionLink>
        </nav>
      </div>
    </div>
  );
}
