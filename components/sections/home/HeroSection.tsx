import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Heading } from "@/components/ui/Heading";
import { HeroScrollDirector } from "./HeroScrollDirector";
import type { HeroContent } from "@/types/content";

type HeroSectionProps = {
  content: HeroContent;
};

// Mock data for the 4 slides
const SLIDES = [
  {
    id: 1,
    label: "Cinematic Real Estate",
    headline: ["Architecture", "Composed for", "Stillness"],
    media: "/videos/hero.mp4", // Will use video
    cta: "Explore our showcase",
  },
  {
    id: 2,
    label: "Urban Sanctuaries",
    headline: ["Metropolitan", "Vertical", "Refuges"],
    media: "/images/slider6.png",
    cta: "View penthouses",
  },
  {
    id: 3,
    label: "Desert Oasis",
    headline: ["Brutalist", "Harmony with", "Nature"],
    media: "/images/slider5.png",
    cta: "Discover estates",
  },
  {
    id: 4,
    label: "Private Estates",
    headline: ["Secluded", "Atmospheric", "Domains"],
    media: "/images/slider4.png",
    cta: "Begin inquiry",
  },
];

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <section
      className="relative min-h-[100svh] bg-void-950 text-ivory-050"
      data-hero-root
      id="oryn-cinematic-hero"
    >
      <HeroScrollDirector />

      <div className="relative h-[100svh] w-full overflow-hidden" data-hero-pin-container>

        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className="absolute inset-0 w-full h-full will-change-transform"
            data-hero-slide={index + 1}
            style={{ zIndex: index + 1 }}
          >
            {/* Media Layer */}
            <div className="absolute inset-0 w-full h-full" data-slide-media>
              {index === 0 ? (
                <video
                  src={content.media.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                />
              ) : (
                <img
                  src={slide.media}
                  alt={slide.label}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              )}
              {/* Vignette Overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(30,27,26,0.3),rgba(10,10,10,0.9))]" />
            </div>

            {/* Content Layer */}
            <Container className="relative z-10 flex flex-col items-center justify-center py-32 text-center h-full w-full">
              <div className="max-w-5xl flex flex-col items-center w-full" data-slide-content>

                <div className="mb-8 overflow-hidden">
                  <div data-slide-label className="will-change-transform">
                    <Eyebrow>{slide.label}</Eyebrow>
                  </div>
                </div>

                <Heading
                  as="h1"
                  className="text-ivory-050 uppercase text-center font-heading tracking-tight leading-[0.85] max-w-4xl text-[clamp(2.5rem,7vw,5.5rem)]"
                >
                  {slide.headline.map((line, i) => (
                    <span className="block overflow-hidden pb-3" key={line}>
                      <span
                        className="block will-change-transform"
                        data-slide-title-line
                      >
                        {line}
                      </span>
                    </span>
                  ))}
                </Heading>

                <div className="mt-12 overflow-hidden">
                  <div
                    className="flex justify-center items-center will-change-transform"
                    data-slide-actions
                  >
                    <Button
                      href={index === 3 ? content.secondaryCta.href : content.primaryCta.href}
                      className="min-w-[180px] bg-transparent border-ivory-050/30 text-white hover:bg-ivory-050 hover:text-white transition-all duration-500"
                    >
                      {slide.cta}
                    </Button>
                  </div>
                </div>
              </div>
            </Container>
          </div>
        ))}

        {/* Global Micro Details */}
        <div className="absolute inset-0 pointer-events-none z-50">
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
          <div className="absolute top-1/2 -translate-y-1/2 left-8 md:left-12 flex flex-col items-center gap-6">
            <span className="text-[9px] font-sans text-ivory-050/60" data-hero-counter>01</span>
            <div className="w-px h-16 bg-ivory-050/20">
              <div className="w-px h-1/4 bg-ivory-050/80 transition-all duration-300" data-hero-progress-bar />
            </div>
            <span className="text-[9px] font-sans text-ivory-050/30">04</span>
          </div>
        </div>

      </div>
    </section>
  );
}
