"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionGate } from "./MotionProvider";

export function GodLevelLoader() {
  const { loaderComplete, setLoaderComplete } = useMotionGate();
  const completedRef = useRef(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    if (loaderComplete) return;

    const fallback = window.setTimeout(() => {
      if (!completedRef.current) {
        completedRef.current = true;
        setLoaderComplete(true);
      }
    }, 10000);

    return () => window.clearTimeout(fallback);
  }, [loaderComplete, setLoaderComplete]);

  if (loaderComplete) return null;

  function completeLoader() {
    if (completedRef.current) return;

    completedRef.current = true;
    setLoaderComplete(true);
  }

  return (
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-[#0B0B0B]">
      <video
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={completeLoader}
        onError={completeLoader}
        className="absolute inset-0 h-full w-full object-cover"
        src={
          isMobile
            ? "/videos/mobile.mp4"
            : "/videos/loader-desktop.mp4"
        }
      />
    </div>
  );
}