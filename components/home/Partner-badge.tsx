import Link from "next/link";
import { ArrowRight, ShieldCheck, ShoppingBag } from "lucide-react";
import { clsx } from "clsx";

export interface PartnerBadgeProps {
  className?: string;
}

export function PartnerBadge({ className }: PartnerBadgeProps): React.JSX.Element {
  return (
    <div
      className={clsx(
        "relative overflow-hidden rounded-3xl bg-brand-black px-8 py-10 text-white shadow-2xl md:px-12 md:py-14",
        className
      )}
    >
      {/* Subtle background glow element */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-amber/15 blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-[13px] font-semibold text-amber-400">
            <ShieldCheck size={16} className="text-brand-amber" />
            <span>Strategic Partnership · Blendtech Limited</span>
          </div>

          <h3 className="mt-4 text-[28px] font-extrabold tracking-tight sm:text-[34px] md:text-[40px] leading-[1.1]">
            Direct Trade Supply & High-Performance Paint
          </h3>

          <p className="mt-3 text-[16px] leading-relaxed text-stone-300 md:text-[17px]">
            Through our official distribution partnership with Blendtech Limited, we supply premium-grade emulsion, textured, and industrial coatings directly to contractors and project sites across Lagos at wholesale trade rates.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-6 text-[14px] font-medium text-stone-300">
            <div className="flex items-center gap-2">
              <ShoppingBag size={16} className="text-brand-amber" />
              <span>Bulk & Trade Rates</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-amber" />
              <span>Custom Colour Matching</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-amber" />
              <span>Same-Day Lagos Delivery</span>
            </div>
          </div>
        </div>

        <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-amber px-7 py-4 text-[15px] font-semibold text-white transition-all hover:bg-amber-700 hover:shadow-lg hover:shadow-amber-900/30"
          >
            Request paint catalog & rates
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PartnerBadge;
