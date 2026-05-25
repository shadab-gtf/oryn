"use client";

import { useRef } from "react";
import Image from "next/image";
import type { MediaAsset } from "@/types/content";
import { imageSizes } from "@/lib/media/images";
import { cn } from "@/lib/utils/cn";
import { useClipReveal } from "@/hooks/useClipReveal";

type MediaFrameProps = {
  media: MediaAsset;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: keyof typeof imageSizes;
  delay?: number;
};

export function MediaFrame({
  media,
  className,
  imageClassName,
  priority = false,
  sizes = "half",
  delay = 0,
}: MediaFrameProps) {
  const ref = useRef<HTMLElement>(null);

  // Apply the global GSAP bottom-to-top clip-path reveal
  useClipReveal(ref as React.RefObject<HTMLElement | null>, { delay });

  return (
    <figure
      ref={ref}
      className={cn("oryn-media-frame relative overflow-hidden bg-charcoal-900", className)}
    >
      <Image
        src={media.src}
        alt={media.alt}
        width={media.width}
        height={media.height}
        sizes={imageSizes[sizes]}
        priority={priority}
        className={cn("h-full w-full object-cover", imageClassName)}
        data-oryn-media-image
      />
    </figure>
  );
}
