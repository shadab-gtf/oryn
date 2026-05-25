import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
};

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <p
      className={cn(
        "text-[0.68rem] font-medium font-heading uppercase  text-bronze-300",
        className,
      )}
    >
      {children}
    </p>
  );
}
