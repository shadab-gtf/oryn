"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SSInteriorLogo } from "@/components/brand/SSInteriorLogo";
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
              <SSInteriorLogo className="h-24" />
            </TransitionLink>
            <p className="mt-6 max-w-xl text-sm leading-7 text-ivory-050/62">
              A luxury furniture restoration and bespoke upholstery atelier
              preserving exceptional sofas, seating, materials, and the stories
              held within them.
            </p>
            <div className="mt-6 grid gap-2 text-sm text-ivory-050/70">
              <a href="tel:+919205374846" className="hover:text-bronze-300">
                +91 92053 74846
              </a>
              <a href="https://wa.me/919205374846" className="hover:text-bronze-300">
                WhatsApp +91 92053 74846
              </a>
              <a href="mailto:saifboby128@gmail.com" className="hover:text-bronze-300">
                saifboby128@gmail.com
              </a>
            </div>
          </div>
          <div className="grid gap-4 text-sm text-ivory-050/70 sm:grid-cols-2">
            <TransitionLink href="/showcase" className="hover:text-bronze-300">
              Transformation Gallery
            </TransitionLink>
            <TransitionLink href="/services/sofa-restoration" className="hover:text-bronze-300">
              Sofa Restoration
            </TransitionLink>
            <TransitionLink href="/material-collection" className="hover:text-bronze-300">
              Material Collection
            </TransitionLink>
            <TransitionLink href="/restoration-process" className="hover:text-bronze-300">
              Restoration Process
            </TransitionLink>
            <TransitionLink href="/our-craft" className="hover:text-bronze-300">
              Our Craft
            </TransitionLink>
            <TransitionLink href="/journal" className="hover:text-bronze-300">
              Journal
            </TransitionLink>
            <TransitionLink href="/private-inquiry" className="hover:text-bronze-300">
              Restoration Consultation
            </TransitionLink>
          </div>
        </Container>
      </motion.div>
    </footer>
  );
}
