"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

import { SmoothScroller } from "./SmoothScroller";

type MotionContextValue = {
  loaderComplete: boolean;
  setLoaderComplete: (value: boolean) => void;
};

const MotionContext = createContext<MotionContextValue | null>(null);

export function useMotionGate() {
  const context = useContext(MotionContext);
  if (!context) {
    throw new Error("useMotionGate must be used within a MotionProvider");
  }
  return context;
}

type MotionProviderProps = {
  children: ReactNode;
};

export function MotionProvider({ children }: MotionProviderProps) {
  const [loaderComplete, setLoaderComplete] = useState(false);

  useEffect(() => {
    // Force manual scroll restoration and scroll to top on hard refresh
    // This prevents the browser from restoring scroll position which breaks GSAP ScrollTrigger
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);

    // If we want to skip loader in dev for fast refresh, we could conditionally
    // set it, but for now we'll ensure it plays on every hard load.
    if (!loaderComplete) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      document.body.style.overflow = "";
    };
  }, [loaderComplete]);

  return (
    <MotionContext.Provider value={{ loaderComplete, setLoaderComplete }}>
      <SmoothScroller />
      {children}
    </MotionContext.Provider>
  );
}
