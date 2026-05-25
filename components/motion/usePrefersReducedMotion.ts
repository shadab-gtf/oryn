"use client";

import { useSyncExternalStore } from "react";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const query = window.matchMedia(reducedMotionQuery);

  query.addEventListener("change", callback);

  return () => query.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(reducedMotionQuery).matches;
}

export function usePrefersReducedMotion() {
  return useSyncExternalStore(subscribe, getSnapshot, () => false);
}
