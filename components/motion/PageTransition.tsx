"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils/cn";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

const routeExitEvent = "oryn:route-exit";
const routeExitCompleteEvent = "oryn:route-exit-complete";

type RouteTransitionDetail = {
  id: string;
};

export function dispatchRouteExit(): Promise<void> {
  const id =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random()}`;

  return new Promise((resolve) => {
    const timeout = window.setTimeout(resolve, 1100);

    const onComplete = (event: Event) => {
      const detail = (event as CustomEvent<RouteTransitionDetail>).detail;

      if (detail.id !== id) {
        return;
      }

      window.clearTimeout(timeout);
      document.removeEventListener(routeExitCompleteEvent, onComplete);
      resolve();
    };

    document.addEventListener(routeExitCompleteEvent, onComplete);
    document.dispatchEvent(
      new CustomEvent<RouteTransitionDetail>(routeExitEvent, {
        detail: { id },
      }),
    );
  });
}

export function PageTransition() {
  const pathname = usePathname();
  const prefersReducedMotion = usePrefersReducedMotion();
  const [visible, setVisible] = useState(false);
  const activeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const complete = (id: string) => {
      document.dispatchEvent(
        new CustomEvent<RouteTransitionDetail>(routeExitCompleteEvent, {
          detail: { id },
        }),
      );
    };

    const onRouteExit = (event: Event) => {
      const detail = (event as CustomEvent<RouteTransitionDetail>).detail;

      if (prefersReducedMotion) {
        complete(detail.id);
        return;
      }

      if (activeTimeoutRef.current) {
        window.clearTimeout(activeTimeoutRef.current);
      }

      setVisible(true);
      activeTimeoutRef.current = window.setTimeout(() => complete(detail.id), 360);
    };

    document.addEventListener(routeExitEvent, onRouteExit);

    return () => {
      document.removeEventListener(routeExitEvent, onRouteExit);
      if (activeTimeoutRef.current) {
        window.clearTimeout(activeTimeoutRef.current);
      }
    };
  }, [prefersReducedMotion]);

  useEffect(() => {
    if (!visible) {
      return;
    }

    const timeout = window.setTimeout(() => setVisible(false), 120);

    return () => window.clearTimeout(timeout);
  }, [pathname, visible]);

  return (
    <div
      aria-hidden="true"
      className={cn(
        "oryn-page-transition fixed inset-0 z-[90] bg-void-950",
        visible && "oryn-page-transition-visible",
      )}
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(205,194,182,0.16),transparent_32%),linear-gradient(180deg,rgba(30,27,26,0.98),rgba(51,51,51,1))]"
      />
      <div
        className="absolute left-1/2 top-1/2 h-px w-28 -translate-x-1/2 bg-bronze-300/65 sm:w-40"
      />
    </div>
  );
}
