import Image from "next/image";
import { clsx } from "clsx";

export interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  image?: string;
  className?: string;
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image,
  className,
}: PageHeroProps): React.JSX.Element {
  return (
    <section
      className={clsx(
        "relative flex min-h-[50vh] items-center overflow-hidden bg-brand-black text-white pt-24 pb-16 md:pt-32 md:pb-24",
        className
      )}
    >
      {/* Optional Background Image */}
      {image && (
        <>
          <Image
            src={image}
            alt={title}
            fill
            priority
            sizes="100vw"
            className="absolute inset-0 h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-black/40" />
        </>
      )}

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-8">
        <div className="max-w-3xl">
          {eyebrow && (
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-4 py-1.5 text-[13px] font-semibold text-amber-400">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-amber animate-pulse" />
              {eyebrow}
            </div>
          )}
          <h1
            className="text-[40px] font-black leading-[1.05] tracking-tight text-white sm:text-[54px] md:text-[64px]"
            style={{ letterSpacing: "-0.03em" }}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="mt-6 text-[18px] leading-relaxed text-stone-300 md:text-[21px]">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default PageHero;
