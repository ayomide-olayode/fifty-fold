import { clsx } from "clsx";

export interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  light = false,
  className,
}: SectionHeadingProps): React.JSX.Element {
  return (
    <div
      className={clsx(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <div
          className={clsx(
            "mb-3 flex items-center gap-3",
            align === "center" && "justify-center"
          )}
        >
          {align === "center" && (
            <span className="h-px w-8 bg-brand-amber" aria-hidden />
          )}
          <span className="text-[13px] font-semibold uppercase tracking-[0.2em] text-brand-amber">
            {eyebrow}
          </span>
          {align === "center" && (
            <span className="h-px w-8 bg-brand-amber" aria-hidden />
          )}
        </div>
      )}
      <h2
        className={clsx(
          "text-[32px] leading-[1.1] md:text-[44px]",
          light ? "text-white" : "text-brand-black"
        )}
        style={{ fontWeight: 800, letterSpacing: "-0.02em" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={clsx(
            "mt-4 text-[17px] leading-relaxed",
            light ? "text-stone-300" : "text-stone-600"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
