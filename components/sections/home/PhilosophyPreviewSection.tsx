"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { SectionShell } from "@/components/ui/SectionShell";
import type { EditorialBlock } from "@/types/content";

type PhilosophyPreviewSectionProps = {
  content: EditorialBlock;
};

const Word = ({
  children,
  progress,
  range,
}: {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [12, 0]);
  const filter = useTransform(progress, range, ["blur(4px)", "blur(0px)"]);

  return (
    <motion.span
      style={{ opacity, y, filter }}
      className="inline-block will-change-[opacity,transform,filter]"
    >
      {children}
    </motion.span>
  );
};

const ScrollRevealText = ({
  text,
  progress,
  range,
}: {
  text: string;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  // Split by spaces but preserve them in the array
  const words = text.split(/(\s+)/);
  const actualWords = words.filter((w) => w.trim().length > 0);
  const step = (range[1] - range[0]) / (actualWords.length || 1);
  let wordIndex = 0;

  return (
    <span className="inline">
      {words.map((word, i) => {
        if (word.trim().length === 0) {
          return <span key={i}>{word}</span>;
        }
        const start = range[0] + step * wordIndex;
        const end = start + step;
        wordIndex++;
        return (
          <Word key={i} progress={progress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </span>
  );
};

export function PhilosophyPreviewSection({
  content,
}: PhilosophyPreviewSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "center 45%"],
  });

  // Eyebrow and Button specific scroll transforms
  const eyebrowY = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const eyebrowOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  
  const buttonOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
  const buttonY = useTransform(scrollYProgress, [0.8, 1], [20, 0]);

  return (
    <SectionShell tone="void">
      <Container size="editorial">
        <div ref={containerRef} data-speed="0.9" className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
          
          <motion.div 
            style={{ y: eyebrowY, opacity: eyebrowOpacity }} 
            className="h-fit lg:sticky lg:top-40 z-10"
          >
            <Eyebrow>{content.label}</Eyebrow>
            <motion.div 
               className="mt-6 w-12 h-[1px] bg-bronze-300/30"
               style={{ 
                 scaleX: useTransform(scrollYProgress, [0, 0.4], [0, 1]),
                 transformOrigin: "left"
               }}
            />
          </motion.div>

          <div>
            <Heading>
              <ScrollRevealText 
                text={content.headline} 
                progress={scrollYProgress} 
                range={[0.1, 0.45]} 
              />
            </Heading>
            
            <p className="mt-8 max-w-3xl text-fluid-lead leading-9 text-ivory-050/72">
               <ScrollRevealText 
                 text={content.body} 
                 progress={scrollYProgress} 
                 range={[0.3, 0.75]} 
               />
            </p>
            
            {content.support ? (
              <p className="mt-8 max-w-xl text-sm leading-7 text-stone-300">
                <ScrollRevealText 
                  text={content.support} 
                  progress={scrollYProgress} 
                  range={[0.65, 0.9]} 
                />
              </p>
            ) : null}
            
            <motion.div style={{ opacity: buttonOpacity, y: buttonY }}>
              <Button href="/philosophy" variant="quiet" className="mt-10">
                Read the philosophy
              </Button>
            </motion.div>
          </div>
          
        </div>
      </Container>
    </SectionShell>
  );
}
