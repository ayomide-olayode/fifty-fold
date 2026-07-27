import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { clsx } from "clsx";
import { SectionHeading } from "@/components/ui/section-heading";
import { ABOUT_IMAGE } from "@/data";

export interface WhoWeAreProps {
  className?: string;
}

export default function WhoWeAre({
  className,
}: WhoWeAreProps): React.JSX.Element {
  return (
    <section className={clsx("bg-stone-100/70 py-16 md:py-24 border-b border-stone-200", className)}>
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2 md:px-8">
        {/* Image Column */}
        <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl bg-stone-200 shadow-lg">
          <Image
            src={ABOUT_IMAGE}
            alt="The Fiftyfold team at work on a finishing project"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
          
          {/* Badge Overlay */}
          <div className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/20 bg-black/60 p-4 backdrop-blur-md text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-amber text-white">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <p className="text-[14px] font-bold text-white">Guaranteed Quality Standards</p>
                <p className="text-[12px] text-stone-300">Precision application on every project</p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Column */}
        <div className="flex flex-col items-start">
          <SectionHeading
            eyebrow="Who We Are"
            title="Built on craft, referral and trust"
          />
          <p className="mt-5 text-[17px] leading-relaxed text-stone-600">
            Founded in 2018, Fiftyfold is a Lagos-based real estate
            subcontracting firm delivering finishing work that developers and
            homeowners return to. We combine skilled craftsmanship with reliable
            project management. Every job is a portfolio piece — and most of our
            new work comes by referral.
          </p>

          <div className="mt-8 flex items-center gap-6 border-t border-stone-200 pt-6">
            <div>
              <p className="text-[28px] font-extrabold text-brand-black">2018</p>
              <p className="text-[13px] font-medium text-stone-500">Established in Lagos</p>
            </div>
            <div className="h-10 w-px bg-stone-300" aria-hidden />
            <div>
              <p className="text-[28px] font-extrabold text-brand-black">100%</p>
              <p className="text-[13px] font-medium text-stone-500">Quality Assured</p>
            </div>
          </div>

          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-brand-black px-6 py-3 text-[15px] font-semibold text-white transition-colors hover:bg-stone-800"
          >
            Learn more about us
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export { WhoWeAre as WhoWeAreSection };
