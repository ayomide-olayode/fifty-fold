import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { clsx } from "clsx";
import { SERVICES, type Service } from "@/data";

export interface ServicesListProps {
  className?: string;
  services?: Service[];
}

export function ServicesList({
  className,
  services = SERVICES,
}: ServicesListProps): React.JSX.Element {
  return (
    <div className={clsx("space-y-16 md:space-y-24", className)}>
      {services.map((s, i) => {
        const Icon = s.icon;
        const reversed = i % 2 === 1;

        return (
          <div
            key={s.slug}
            id={s.slug}
            className="grid items-center gap-10 md:grid-cols-2 md:gap-16 scroll-mt-24"
          >
            {/* Image Box */}
            <div
              className={clsx(
                "relative aspect-4/3 w-full overflow-hidden rounded-2xl bg-stone-200 shadow-lg",
                reversed ? "md:order-2" : "md:order-1"
              )}
            >
              <Image
                src={s.image}
                alt={s.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Content Box */}
            <div className={reversed ? "md:order-1" : "md:order-2"}>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-black text-brand-amber">
                <Icon size={22} />
              </div>

              <h2
                className="mt-5 text-[28px] font-extrabold leading-tight text-brand-black md:text-[34px]"
                style={{ letterSpacing: "-0.02em" }}
              >
                {s.title}
              </h2>

              <p className="mt-4 text-[17px] leading-relaxed text-stone-600">
                {s.description}
              </p>

              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2.5 text-[15px] font-medium text-stone-700"
                  >
                    <Check size={16} className="shrink-0 text-brand-amber" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="mt-7 inline-flex items-center gap-2 text-[15px] font-bold text-brand-black transition-colors hover:text-brand-amber"
              >
                Enquire about {s.title.toLowerCase()}
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ServicesList;
