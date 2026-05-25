import type { MouseEventHandler, ReactNode } from "react";
import { TransitionLink } from "@/components/motion/TransitionLink";
import { cn } from "@/lib/utils/cn";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "secondary" | "quiet";
  type?: "button" | "submit";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "border border-bronze-300/55 bg-ivory-050/92 px-6 py-3 text-void-950 before:bg-void-950 hover:border-ivory-050 hover:text-ivory-050",
  secondary:
    "border border-ivory-050/22 bg-void-950/10 px-6 py-3 text-ivory-050 before:bg-ivory-050/10 hover:border-bronze-300/70 hover:text-bronze-300",
  quiet:
    "border-b border-current pb-1 text-current hover:text-bronze-300",
};

export function Button({
  children,
  href,
  className,
  variant = "primary",
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) {
  const classes = cn(
    "oryn-luxury-button relative isolate inline-flex min-h-11 items-center justify-center overflow-hidden text-sm font-medium transition-colors duration-500 before:absolute before:inset-0 before:-z-10 before:origin-left before:scale-x-0 before:transition-transform before:duration-500 before:ease-luxury hover:before:scale-x-100",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <TransitionLink className={classes} href={href}>
        <span className="relative z-10">{children}</span>
      </TransitionLink>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}
