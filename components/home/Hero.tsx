import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden bg-black">
        <Image
          src="/hero-img.png"
          alt="A beautifully finished modern Lagos interior"
          fill
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/70 to-black/20" />
        <div className="relative mx-auto w-full max-w-7xl px-6 py-32 md:px-8">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 text-[13px] font-medium text-white/90">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-amber" />
              Lagos-based · Since 2018
            </div>
            <h1
              className="text-[44px] leading-[1.02] text-white sm:text-[60px] md:text-[76px]"
              style={{ fontWeight: 900, letterSpacing: "-0.03em" }}
            >
              Lagos&apos;s trusted real estate finishing partner
            </h1>
            <p className="mt-6 max-w-xl text-[18px] leading-relaxed text-stone-300 md:text-[20px]">
              Painting, wall skimming, aluminium windows, plasterboard ceilings
              and premium paint sales, delivered with a finish developers trust.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-7 py-4 text-[16px] font-semibold text-brand-black transition-colors hover:bg-stone-200"
              >
                View our work
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-brand-amber px-7 py-4 text-[16px] font-semibold text-white transition-colors hover:bg-[#b45309]"
              >
                Get a quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
