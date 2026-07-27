import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { clsx } from "clsx";

export interface CTABannerProps {
  headline?: string;
  sub?: string;
  buttonLabel?: string;
  to?: string;
  href?: string;
  className?: string;
}

export type Props = CTABannerProps;

export function CTABanner({
  headline = "Ready to start your project?",
  sub = "Tell us about your development or renovation and we'll send a detailed quote within 48 hours.",
  buttonLabel = "Get a quote",
  to = "/contact",
  href,
  className,
}: CTABannerProps): React.JSX.Element {
  const targetHref = href || to || "/contact";

  return (
    <section className={clsx("bg-brand-black border-t border-stone-800", className)}>
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between md:px-8 md:py-20">
        <div className="max-w-2xl">
          <h2
            className="text-[30px] font-extrabold leading-[1.1] text-white md:text-[42px]"
            style={{ letterSpacing: "-0.02em" }}
          >
            {headline}
          </h2>
          <p className="mt-4 text-[17px] leading-relaxed text-stone-400">
            {sub}
          </p>
        </div>
        <Link
          href={targetHref}
          className="inline-flex shrink-0 items-center gap-2 rounded-md bg-brand-amber px-7 py-4 text-[16px] font-semibold text-white transition-colors hover:bg-amber-700"
        >
          {buttonLabel}
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}

export default CTABanner;
