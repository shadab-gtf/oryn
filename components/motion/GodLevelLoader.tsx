"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useMotionGate } from "./MotionProvider";

export function GodLevelLoader() {
  const { loaderComplete, setLoaderComplete } = useMotionGate();

  const containerRef = useRef<HTMLDivElement>(null);
  const brandRef = useRef<HTMLDivElement>(null);
  const centerGroupRef = useRef<HTMLDivElement>(null);
  const planetRef = useRef<HTMLDivElement>(null);
  const orbitRingRef = useRef<SVGCircleElement>(null);
  const scanLinesRef = useRef<HTMLDivElement>(null);
  const timelessTextRef = useRef<HTMLDivElement>(null);
  const lightLeakRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loaderComplete) return;

    const ctx = gsap.context(() => {
      // Setup initial states
      gsap.set(containerRef.current, { autoAlpha: 1 });
      gsap.set(brandRef.current, { autoAlpha: 0, scale: 0.98, y: 5 });
      
      // Set the central group to be rotated backward so everything rotates together smoothly
      gsap.set(centerGroupRef.current, { rotation: -120 });
      gsap.set(planetRef.current, { autoAlpha: 0, scale: 0.9, filter: "brightness(0)" });
      gsap.set(orbitRingRef.current, { strokeDasharray: "1194", strokeDashoffset: "1194" });
      gsap.set(scanLinesRef.current, { autoAlpha: 0, scale: 0.9 });
      
      gsap.set(timelessTextRef.current, { autoAlpha: 0, filter: "blur(4px)" });
      gsap.set(lightLeakRef.current, { autoAlpha: 0, scale: 0.8 });

      const totalDuration = 3.0; // Finish within 3 seconds

      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            autoAlpha: 0,
            duration: 0.8,
            ease: "power2.inOut",
            onComplete: () => setLoaderComplete(true)
          });
        }
      });

      // Master timing spacer
      tl.to({}, { duration: totalDuration }, 0);

      // Black Canvas & Brand Init
      tl.to(lightLeakRef.current, { autoAlpha: 0.4, scale: 1, duration: 2, ease: "power2.inOut" }, 0)
        .to(brandRef.current, { autoAlpha: 1, scale: 1, y: 0, duration: 1.5, ease: "power3.out" }, 0);

      // Show circle and image together & rotate together smoothly
      tl.to(centerGroupRef.current, {
        rotation: 0,
        duration: 2.8,
        ease: "power3.inOut"
      }, 0);

      tl.to(orbitRingRef.current, { 
        strokeDashoffset: 0, 
        duration: 2.8, 
        ease: "power3.inOut" 
      }, 0);

      tl.to(planetRef.current, {
        autoAlpha: 1,
        scale: 1,
        filter: "brightness(1.2)",
        duration: 2.5,
        ease: "power2.out"
      }, 0.2); // slight delay so the ring starts drawing first

      tl.to(scanLinesRef.current, {
        autoAlpha: 0.2,
        scale: 1,
        duration: 2.5,
        ease: "power3.inOut"
      }, 0.2);

      // Typography locks in towards the end
      tl.to(timelessTextRef.current, {
        autoAlpha: 1,
        filter: "blur(0px)",
        duration: 1.0,
        ease: "power3.out"
      }, 1.8);

    }, containerRef);

    return () => ctx.revert();
  }, [loaderComplete, setLoaderComplete]);

  if (loaderComplete) return null;

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#050505] text-[#e6e3de] overflow-hidden"
    >
      {/* Cinematic Grain */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.04] mix-blend-overlay oryn-noise bg-repeat"></div>

      {/* Ambient Light Leak */}
      <div 
        ref={lightLeakRef}
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 60% 40%, rgba(205, 194, 182, 0.08) 0%, transparent 50%)"
        }}
      />

      <div className="relative z-10 w-full h-full flex items-center justify-center font-[family-name:var(--font-ramillas)]">
        {/* Brand */}
        <div ref={brandRef} className="absolute left-12 top-12 tracking-[0.2em] text-xs font-light text-white/50">
          ORYN
        </div>

        {/* Central Orchestration: Everything rotates together here */}
        <div ref={centerGroupRef} className="relative flex items-center justify-center w-[400px] h-[400px] will-change-transform">
          
          {/* Orbital Light Path */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <svg viewBox="0 0 400 400" className="w-full h-full" style={{ transform: "rotate(-90deg)" }}>
              <circle 
                ref={orbitRingRef}
                cx="200" cy="200" r="190" 
                fill="none" stroke="rgba(230,210,180,0.8)" strokeWidth="1.5" 
                className="drop-shadow-[0_0_8px_rgba(230,210,180,0.6)]"
              />
            </svg>
          </div>

          {/* Radial Scan Lines */}
          <div ref={scanLinesRef} className="absolute inset-0 rounded-full border border-white/10 border-dashed" />

          {/* Planetary Surface / Moon */}
          <div 
            ref={planetRef}
            className="absolute w-[360px] h-[360px] flex items-center justify-center rounded-full overflow-hidden mix-blend-lighten"
          >
            <img 
              src="/images/loader-moon.png" 
              alt="Moon" 
              className="w-full h-full object-cover"
            />
          </div>
          
        </div>

        {/* Typography System */}
        <div className="absolute inset-0 pointer-events-none font-[family-name:var(--font-sans)]">
          <div ref={timelessTextRef} className="absolute bottom-12 right-12">
            <p className="text-[9px] tracking-[0.2em] text-white/50">TIMELESS BY DESIGN</p>
          </div>
        </div>
      </div>
    </div>
  );
}
