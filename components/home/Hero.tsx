import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero(): React.JSX.Element {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-brand-black">
      <Image
        src="/hero-img.png"
        alt="A beautifully finished modern Lagos interior"
        fill
        priority
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-linear-to-r from-black via-black/75 to-black/30" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-28 sm:px-6 sm:py-32 md:px-8">
        <div className="max-w-3xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-[12px] font-semibold text-white/90 backdrop-blur-xs sm:text-[13px]">
            <span className="h-2 w-2 rounded-full bg-brand-amber animate-pulse" />
            <span>Lagos-based · Since 2018</span>
          </div>

          <h1
            className="text-[34px] font-black leading-[1.05] tracking-tight text-white xs:text-[40px] sm:text-[56px] md:text-[72px]"
            style={{ letterSpacing: "-0.03em" }}
          >
            Lagos&apos;s trusted real estate finishing partner
          </h1>

          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-stone-300 sm:mt-6 sm:text-[18px] md:text-[20px]">
            Painting, wall skimming, aluminium windows, plasterboard ceilings
            and premium paint sales, delivered with a finish developers trust.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-7 py-4 text-[16px] font-semibold text-brand-black transition-colors hover:bg-stone-200"
            >
              View our work
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-amber px-7 py-4 text-[16px] font-semibold text-white transition-colors hover:bg-amber-700"
            >
              Get a quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
