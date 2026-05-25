import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  size?: "luxury" | "editorial" | "intimate";
};

const sizes: Record<NonNullable<ContainerProps["size"]>, string> = {
  luxury: "mx-auto w-full max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-16",
  editorial: "mx-auto w-full max-w-[1120px] px-5 sm:px-8 lg:px-12",
  intimate: "mx-auto w-full max-w-[760px] px-5 sm:px-8",
};

export function Container({
  children,
  className,
  size = "luxury",
}: ContainerProps) {
  return <div className={cn(sizes[size], className)}>{children}</div>;
}
