import { PhilosophyScrollDirector } from "@/components/sections/philosophy/PhilosophyScrollDirector";

const CHAPTERS = [
  {
    id: "01",
    label: "ESSENCE",
    title: "Stripping away the unnecessary to reveal what truly matters.",
    media: "/images/phil_essence.png"
  },
  {
    id: "02",
    label: "BELIEF",
    title: "Spaces have the power to shape the way we live.",
    media: "/images/phil_belief.png"
  },
  {
    id: "03",
    label: "APPROACH",
    title: "Collaborative, curious, and crafted with precision.",
    media: "/images/phil_approach.png"
  },
  {
    id: "04",
    label: "HARMONY",
    title: "Balancing function with beauty, people with place.",
    media: "/images/phil_harmony.png"
  },
  {
    id: "05",
    label: "LEGACY",
    title: "Creating timeless impact that lives on.",
    media: "/images/phil_legacy.png"
  }
] as const;

export function PhilosophyPageSection() {
  return (
    <section 
      data-philosophy-root 
      className="relative bg-[#050505] text-[#e6e3de] w-full"
    >
      <PhilosophyScrollDirector />

      <div data-philosophy-pin-container className="relative h-[100svh] w-full overflow-hidden">
        
        {/* Global Background Atmosphere */}
        <div className="absolute inset-0 z-0">
          {/* Base darkening layer */}
          <div className="absolute inset-0 bg-[#050505] z-10 opacity-70" /> 
          
          {CHAPTERS.map((chapter, i) => (
             <img 
               key={`bg-${i}`} 
               data-bg-image 
               src={chapter.media} 
               className="absolute inset-0 w-full h-full object-cover opacity-0 scale-105 will-change-transform" 
               alt=""
             />
          ))}
          {/* Ambient overlays */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(5,5,5,0.8)_100%)] z-10 pointer-events-none" />
          <div className="absolute inset-0 oryn-noise opacity-[0.04] mix-blend-overlay pointer-events-none z-20" />
        </div>

        {/* Content Grid */}
        <div className="relative z-20 w-full h-full max-w-[1800px] mx-auto px-6 md:px-16 grid grid-cols-12 gap-4 md:gap-8 items-center">
          
          {/* Left Column: Fixed Typography */}
          <div className="col-span-10 md:col-span-5 flex flex-col justify-center h-full pt-20 md:pt-20">
            <div className="tracking-[0.2em] text-[10px] text-bronze-300 uppercase mb-4 md:mb-8" data-phil-eyebrow>
              Our Philosophy
            </div>
            <h2 className="text-[clamp(2rem,6vw,5rem)] leading-[1.1] md:leading-[0.9] font-heading uppercase tracking-tight mb-8 md:mb-12">
              <span className="block overflow-hidden pb-1 md:pb-2"><span className="block" data-phil-title>We Design</span></span>
              <span className="block overflow-hidden pb-1 md:pb-2"><span className="block text-white/40" data-phil-title>For Human</span></span>
              <span className="block overflow-hidden pb-1 md:pb-2"><span className="block" data-phil-title>Experience.</span></span>
            </h2>
            <p className="max-w-sm text-xs md:text-sm leading-relaxed text-white/50 pr-4 md:pr-0" data-phil-desc>
              At ORYN, we believe architecture is not the creation of form, but the creation of feeling. Every project begins with a deep understanding of human emotion, purpose, and the context of place.
            </p>
          </div>

          {/* Middle: Massive Circular Mask Image */}
          <div className="col-span-12 md:col-span-4 absolute md:relative inset-0 md:inset-auto h-full md:h-[80vh] flex items-center justify-center pointer-events-none z-0 md:z-20 opacity-20 md:opacity-100">
            <div className="w-[150vw] md:w-[45vw] aspect-square rounded-full overflow-hidden relative shadow-[0_0_80px_rgba(0,0,0,0.9)] -translate-x-[25%] md:translate-x-0" data-phil-circle>
               {CHAPTERS.map((chapter, i) => (
                 <img 
                   key={`circle-${i}`} 
                   data-circle-image 
                   src={chapter.media} 
                   className="absolute inset-0 w-full h-full object-cover opacity-0 scale-110 will-change-transform" 
                   alt=""
                 />
               ))}
               <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.9)] z-10 rounded-full" />
            </div>
          </div>

          {/* Right Column: Progress Tracker */}
          <div className="col-span-2 md:col-span-3 absolute md:relative right-6 top-1/2 -translate-y-1/2 md:translate-y-0 md:top-auto md:right-auto flex flex-col justify-center h-full pl-0 md:pl-16 border-l-0 md:border-l border-white/5" data-phil-tracker>
            <div className="hidden md:block tracking-[0.2em] text-[9px] text-white/40 uppercase mb-16">
              The Journey
              <br/><br/>
              <span className="normal-case tracking-normal text-white/30 leading-relaxed block max-w-[200px]">
                This section is a story told through movement. As you scroll, each principle emerges with purpose.
              </span>
            </div>
            
            <div className="relative flex flex-col gap-6 md:gap-10 items-end md:items-start">
              {CHAPTERS.map((chapter, i) => (
                <div key={`tracker-${i}`} data-chapter-item className="relative flex items-start gap-4 md:gap-6 opacity-20 transition-all duration-700 ease-out will-change-transform">
                  <div className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full border border-white/10 text-[8px] md:text-[9px] shrink-0 font-sans tracking-widest text-white/50 transition-colors" data-chapter-dot>
                    {chapter.id}
                  </div>
                  <div className="hidden md:flex flex-col gap-2 pt-1.5">
                    <div className="text-[10px] tracking-[0.2em] uppercase font-medium text-white/80">{chapter.label}</div>
                    <div className="text-xs text-white/40 leading-relaxed max-w-[220px]" data-chapter-desc>
                      {chapter.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
