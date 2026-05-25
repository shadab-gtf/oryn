"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, type MouseEvent, type ReactNode } from "react";
import { dispatchRouteExit } from "./PageTransition";

type TransitionLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  onNavigate?: () => void;
};

function shouldSkipTransition(event: MouseEvent<HTMLAnchorElement>, href: string) {
  return (
    event.defaultPrevented ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey ||
    event.button !== 0 ||
    href.startsWith("#") ||
    href.startsWith("mailto:") ||
    href.startsWith("tel:") ||
    /^https?:\/\//.test(href)
  );
}

export function TransitionLink({
  href,
  children,
  className,
  ariaLabel,
  onNavigate,
}: TransitionLinkProps) {
  const router = useRouter();
  const pathname = usePathname();
  const navigatingRef = useRef(false);

  useEffect(() => {
    navigatingRef.current = false;
  }, [pathname]);

  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (shouldSkipTransition(event, href) || href === pathname) {
      onNavigate?.();
      return;
    }

    if (navigatingRef.current) {
      event.preventDefault();
      return;
    }

    navigatingRef.current = true;
    event.preventDefault();
    onNavigate?.();
    void dispatchRouteExit().then(() => {
      router.push(href);
    });
  }

  return (
    <Link
      aria-label={ariaLabel}
      className={className}
      href={href}
      onClick={handleClick}
      prefetch={false}
    >
      {children}
    </Link>
  );
}
