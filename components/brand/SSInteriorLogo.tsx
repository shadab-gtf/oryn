import Image from "next/image";
import { cn } from "@/lib/utils/cn";

type SSInteriorLogoProps = {
  className?: string;
  title?: string;
  variant?: "full" | "mark" | "wordmark";
};

export function SSInteriorLogo({
  className,
  title = "SS Interior",
  variant: _variant,
}: SSInteriorLogoProps) {
  void _variant;

  return (
    <Image
      alt={title}
      aria-hidden={title ? undefined : true}
      className={cn("ss-interior-logo h-14 w-auto object-contain", className)}
      height={726}
      priority
      src="/new-logo.png"
      width={511}
    />
  );
}
