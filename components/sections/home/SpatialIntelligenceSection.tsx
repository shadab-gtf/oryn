"use client";

import { useRef, ReactNode } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { MediaFrame } from "@/components/ui/MediaFrame";
import { SectionShell } from "@/components/ui/SectionShell";
import type { EditorialBlock } from "@/types/content";

const intelligenceMedia = {
  src: "/media/spatial-intelligence.jpg",
  alt: "A quiet architectural interior with stone, glass, and controlled natural light",
  width: 1800,
  height: 1200,
};

type SpatialIntelligenceSectionProps = {
  content: EditorialBlock;
};

const TextReveal = ({
  text,
  isInView,
  delay = 0,
}: {
  text: string;
  isInView: boolean;
  delay?: number;
}) => {
  const words = text.split(/(\s+)/);
  
  return (
    <span className="inline">
      {words.map((word, i) => {
        if (word.trim().length === 0) return <span key={i}>{word}</span>;
        return (
          <motion.span
            key={i}
            initial={false}
            animate={
              isInView 
                ? { opacity: 1, y: 0, filter: "blur(0px)" } 
                : { opacity: 0, y: 15, filter: "blur(6px)" }
            }
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + i * 0.025,
            }}
            className="inline-block will-change-[opacity,transform,filter]"
          >
            {word}
          </motion.span>
        );
      })}
    </span>
  );
};

export function SpatialIntelligenceSection({
  content,
}: SpatialIntelligenceSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-15%" });

  return (
    <SectionShell tone="ivory" className="relative overflow-hidden h-[100svh] min-h-[600px] flex items-center">
      {/* 2050 Technical Background Grid */}
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)] z-0" />

      {/* SVG Clip Path Definitions for relative percentage bounds */}
      <svg width="0" height="0" className="absolute w-0 h-0" style={{ position: 'absolute', width: 0, height: 0 }}>
        <defs>
          <clipPath id="lux-clip-spatial" clipPathUnits="objectBoundingBox">
            <motion.path 
              initial={false}
              animate={{ d: isInView ? "M 0,1 L 0,0 Q 0.5,0 1,0 L 1,1 Z" : "M 0,1 L 0,0.98 Q 0.5,0.9 1,0.98 L 1,1 Z" }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            />
          </clipPath>
          <clipPath id="lux-clip-text" clipPathUnits="objectBoundingBox">
            <motion.path 
              initial={false}
              animate={{ d: isInView ? "M 0,1 L 0,0 Q 0.5,0 1,0 L 1,1 Z" : "M 0,1 L 0,0.98 Q 0.5,0.9 1,0.98 L 1,1 Z" }}
              transition={{ duration: 1.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            />
          </clipPath>
        </defs>
      </svg>

      <Container className="relative z-10 w-full">
        <div ref={containerRef} data-speed="1.05" className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-24 w-full">
          
          <div className="order-2 lg:order-1 w-full relative group">
            {/* 2050 Technical Accents */}
            <div className="absolute -left-8 top-1/2 -translate-y-1/2 text-[9px] tracking-[0.3em] text-stone-400 rotate-180 origin-center font-mono opacity-50" style={{ writingMode: 'vertical-rl' }}>
              SPATIAL_INT // 002.4
            </div>
            
            <motion.div 
               initial={false}
               animate={{ opacity: isInView ? 1 : 0 }}
               transition={{ duration: 2, delay: 0.5 }}
            >
              <div className="absolute -right-6 -bottom-6 w-32 h-32 border-b border-r border-bronze-500/20 z-0" />
              <div className="absolute -left-6 -top-6 w-16 h-16 border-t border-l border-bronze-500/20 z-0" />
            </motion.div>

            <motion.div 
              className="w-full h-[55vh] lg:h-[70vh] overflow-hidden will-change-transform relative z-10 shadow-2xl shadow-void-950/5" 
              style={{ 
                clipPath: "url(#lux-clip-spatial)",
                WebkitClipPath: "url(#lux-clip-spatial)"
              }}
            >
              <motion.div 
                initial={false}
                animate={{ 
                  scale: isInView ? 1 : 1.15, 
                  filter: isInView ? "contrast(1)" : "contrast(1.1) brightness(0.8)"
                }}
                transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }} 
                className="w-full h-full origin-bottom"
              >
                <MediaFrame
                  media={intelligenceMedia}
                  sizes="half"
                  className="w-full h-full"
                  imageClassName="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </div>

          <div 
            className="order-1 max-w-2xl lg:order-2 flex flex-col justify-center relative p-8 lg:p-12 -m-8 lg:-m-12"
            style={{ 
              clipPath: "url(#lux-clip-text)",
              WebkitClipPath: "url(#lux-clip-text)"
            }}
          >
            <div className="flex items-center gap-5">
              <motion.div 
                 initial={false}
                 animate={{ scaleX: isInView ? 1 : 0 }}
                 transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                 className="w-16 h-[1px] bg-bronze-500/40 origin-left"
              />
              <motion.div
                 initial={false}
                 animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -10 }}
                 transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              >
                <Eyebrow className="text-bronze-500">{content.label}</Eyebrow>
              </motion.div>
            </div>

            <Heading className="mt-8 text-void-950">
              <TextReveal text={content.headline} isInView={isInView} delay={0.2} />
            </Heading>
            
            <p className="mt-8 text-fluid-lead leading-9 text-stone-700">
               <TextReveal text={content.body} isInView={isInView} delay={0.4} />
            </p>
            
            {content.support ? (
              <div className="mt-10 relative pl-6">
                <motion.div
                  initial={false}
                  animate={{ scaleY: isInView ? 1 : 0 }}
                  transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 top-0 bottom-0 w-[1px] bg-bronze-500/35 origin-top"
                />
                <p className="text-sm leading-7 text-stone-700">
                  <TextReveal text={content.support} isInView={isInView} delay={0.9} />
                </p>
              </div>
            ) : null}
          </div>

        </div>
      </Container>
    </SectionShell>
  );
}
