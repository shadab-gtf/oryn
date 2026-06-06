"use client";

import { useEffect, useRef } from "react";
import { useMotionGate } from "./MotionProvider";

export function GodLevelLoader() {
  const { loaderComplete, setLoaderComplete } = useMotionGate();
  const completedRef = useRef(false);

  useEffect(() => {
    if (loaderComplete) return;

    const fallback = window.setTimeout(() => {
      if (!completedRef.current) {
        completedRef.current = true;
        setLoaderComplete(true);
      }
    }, 5200);

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
        className="h-full w-full object-cover"
        muted
        onEnded={completeLoader}
        onError={completeLoader}
        playsInline
        preload="auto"
        src="/videos/loader.mp4"
      />
    </div>
  );
}
