import { cn } from "@/lib/utils/cn";

type OrynLogoProps = {
  className?: string;
  title?: string;
  variant?: "full" | "mark" | "wordmark";
};

export function OrynLogo({
  className,
  title = "ORYN",
  variant = "full",
}: OrynLogoProps) {
  const viewBox =
    variant === "mark"
      ? "0 0 80 80"
      : variant === "wordmark"
        ? "80 0 190 80"
        : "0 0 270 80";

  const mark = (
    <g
      className="oryn-logo-mark"
      data-logo-part="mark"
    >
      <image
        className="oryn-logo-image"
        height="80"
        href="/ORYN-mark.webp"
        preserveAspectRatio="xMidYMid slice"
        width="80"
        x="0"
        y="0"
      />
    </g>
  );

  const wordmark = (
    <g
      className="oryn-logo-wordmark"
      data-logo-part="wordmark"
    >
      <text
        className="oryn-logo-wordmark-text"
        dominantBaseline="middle"
        fontSize="46"
        stroke="none"
        x="84"
        y="45"
      >
        ORYN
      </text>
    </g>
  );

  return (
    <svg
      aria-hidden={title ? undefined : true}
      className={cn("oryn-logo h-auto text-current", className)}
      fill="none"
      role={title ? "img" : undefined}
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="miter"
      strokeWidth="2"
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
    >
      {title ? <title>{title}</title> : null}
      {variant !== "wordmark" ? mark : null}
      {variant !== "mark" ? wordmark : null}
    </svg>
  );
}
