"use client";

import { cn } from "@/lib/utils/cn";

type AnimatedOrynLogoProps = {
  className?: string;
};

export function AnimatedOrynLogo({ className }: AnimatedOrynLogoProps) {
  return (
    <div className={cn("flex flex-col items-center justify-center text-center", className)}>
      {/* Luxury Animated Emblem Container */}
      <div className="w-48 h-60 sm:w-56 sm:h-70 relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 800 1000"
          className="w-full h-full"
          aria-label="Oryn Luxury Emblem"
          role="img"
          style={{ background: "transparent", overflow: "hidden", contain: "content" }}
        >
          <defs>
            <linearGradient id="orynMetalCore" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#84807a" />
              <stop offset="30%" stopColor="#e6e3de" />
              <stop offset="50%" stopColor="#aba69f" />
              <stop offset="70%" stopColor="#e6e3de" />
              <stop offset="100%" stopColor="#5e5b56" />
            </linearGradient>

            <linearGradient id="luxuryShimmer" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="35%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="50%" stopColor="#ffffff" stopOpacity="0.45" />
              <stop offset="65%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            <filter id="premiumAmbientShadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="25" stdDeviation="30" floodColor="#000000" floodOpacity="0.9" />
              <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#000000" floodOpacity="0.5" />
            </filter>

            <filter id="eliteBevel" x="-10%" y="-10%" width="120%" height="120%">
              <feGaussianBlur in="SourceAlpha" stdDeviation="4" result="blur" />
              <feOffset dx="3" dy="4" result="offset" />
              <feComposite operator="out" in="SourceGraphics" in2="offset" result="inverse" />
              <feFlood floodColor="#000000" floodOpacity="0.65" result="color" />
              <feComposite operator="in" in="color" in2="inverse" result="shadow" />
              <feComposite operator="over" in="shadow" in2="SourceGraphics" />
            </filter>
          </defs>

          <style>{`
            :root {
              --animation-timing: cubic-bezier(0.25, 1, 0.5, 1);
            }
            .emblem-core {
              transform-origin: 400px 500px;
              will-change: transform;
              animation: premiumPulse 7s cubic-bezier(0.25, 1, 0.5, 1) infinite alternate;
            }
            .shimmer-layer {
              mix-blend-mode: overlay;
              transform-origin: 400px 500px;
              will-change: transform;
              animation: luxuryGlint 5s linear infinite;
            }
            @keyframes premiumPulse {
              0% {
                transform: scale(0.98) translateZ(0);
                filter: drop-shadow(0 15px 20px rgba(0,0,0,0.85));
              }
              100% {
                transform: scale(1.01) translateZ(0);
                filter: drop-shadow(0 35px 40px rgba(0,0,0,0.95));
              }
            }
            @keyframes luxuryGlint {
              0% {
                transform: scale(1.5) rotate(-35deg) translateY(-400px) translateZ(0);
              }
              100% {
                transform: scale(1.5) rotate(-35deg) translateY(600px) translateZ(0);
              }
            }
            .emblem-wrapper:hover .emblem-core {
              animation-play-state: paused;
              transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
              transform: scale(1.03) rotate(0.5deg) translateZ(0);
            }
            @media (prefers-reduced-motion: reduce) {
              .emblem-core, .shimmer-layer {
                animation: none !important;
              }
            }
          `}</style>

          <g className="emblem-wrapper" filter="url(#premiumAmbientShadow)">
            <g className="emblem-core">
              <path
                className="metal-geometry"
                d="M 400 110 C 570 110, 700 285, 700 500 C 700 715, 570 890, 400 890 C 230 890, 100 715, 100 500 C 100 285, 230 110, 400 110 Z M 400 136 C 252 136, 132 299, 132 500 C 132 701, 252 864, 400 864 C 548 864, 668 701, 668 500 C 668 299, 548 136, 400 136 Z"
                fill="url(#orynMetalCore)"
                filter="url(#eliteBevel)"
              />
              <path
                className="metal-geometry"
                d="M 397.5 125 L 402.5 125 L 402.5 420 C 402.5 460, 425 492.5, 475 497.5 L 475 502.5 C 425 507.5, 402.5 540, 402.5 580 L 402.5 875 L 397.5 875 L 397.5 580 C 397.5 540, 375 507.5, 325 502.5 L 325 497.5 C 375 492.5, 397.5 460, 397.5 420 Z"
                fill="url(#orynMetalCore)"
                filter="url(#eliteBevel)"
              />
            </g>

            <mask id="emblemMask">
              <g fill="#ffffff">
                <path d="M 400 110 C 570 110, 700 285, 700 500 C 700 715, 570 890, 400 890 C 230 890, 100 715, 100 500 C 100 285, 230 110, 400 110 Z M 400 136 C 252 136, 132 299, 132 500 C 132 701, 252 864, 400 864 C 548 864, 668 701, 668 500 C 668 299, 548 136, 400 136 Z" />
                <path d="M 397.5 125 L 402.5 125 L 402.5 420 C 402.5 460, 425 492.5, 475 497.5 L 475 502.5 C 425 507.5, 402.5 540, 402.5 580 L 402.5 875 L 397.5 875 L 397.5 580 C 397.5 540, 375 507.5, 325 502.5 L 325 497.5 C 375 492.5, 397.5 460, 397.5 420 Z" />
              </g>
            </mask>

            <rect width="800" height="1000" fill="url(#luxuryShimmer)" mask="url(#emblemMask)" className="shimmer-layer" pointerEvents="none" />
          </g>
        </svg>
      </div>

      {/* Atmospheric Line Below Emblem */}
      <div className="oryn-logo-atmosphere mx-auto mt-4 mb-4 h-px w-40 bg-bronze-300/40" />

      {/* Elegant Serif Typographical Signature */}
      <div className="text-[11px] tracking-[0.35em] text-ivory-050/80 font-sans uppercase font-medium">
        Oryn Real Estate
      </div>
    </div>
  );
}
