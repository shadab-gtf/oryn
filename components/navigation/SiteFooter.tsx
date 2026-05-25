"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { OrynLogo } from "@/components/brand/OrynLogo";
import { Reveal } from "@/components/motion/Reveal";
import { TransitionLink } from "@/components/motion/TransitionLink";
import { Container } from "@/components/ui/Container";

export function SiteFooter() {
  const footerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: footerRef,
    offset: ["start end", "end end"]
  });

  // Moves from -30% (shifted up) to 0% (normal position) as it scrolls into view,
  // creating a cinematic "revealed from underneath" parallax effect.
  const y = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

  return (
    <footer 
      ref={footerRef}
      className="bg-void-950 py-16 text-ivory-050 overflow-hidden relative" 
      data-oryn-footer
    >
      <motion.div style={{ y }} className="w-full h-full">
        <Container className="grid gap-10 border-t border-ivory-050/10 pt-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <TransitionLink
              href="/"
              className="inline-flex text-ivory-050 transition-colors duration-300 hover:text-bronze-300"
            >
              <OrynLogo className="w-36" />
            </TransitionLink>
            <p className="mt-6 max-w-xl text-sm leading-7 text-ivory-050/62">
              Cinematic digital experiences for luxury real estate, architecture,
              and private spatial brands. Discretion, atmosphere, and architectural
              clarity guide every project.
            </p>
          </div>
          <div className="grid gap-4 text-sm text-ivory-050/70 sm:grid-cols-2">
            <TransitionLink href="/showcase" className="hover:text-bronze-300">
              Showcase
            </TransitionLink>
            <TransitionLink href="/philosophy" className="hover:text-bronze-300">
              Philosophy
            </TransitionLink>
            <TransitionLink href="/journal" className="hover:text-bronze-300">
              Journal
            </TransitionLink>
            <TransitionLink href="/private-inquiry" className="hover:text-bronze-300">
              Private Inquiry
            </TransitionLink>
          </div>
        </Container>
      </motion.div>
    </footer>
  );
}
