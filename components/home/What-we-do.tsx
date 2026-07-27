import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { SERVICES, type Service } from "@/data";

export { SERVICES, type Service };

export interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps): React.JSX.Element {
  const Icon = service.icon;

  return (
    <div className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-xl">
      <div>
        {/* Card Header Image Banner */}
        <div className="relative h-52 w-full overflow-hidden bg-stone-100">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
          
          {/* Badge Icon */}
          <div className="absolute top-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/90 shadow-md backdrop-blur-md transition-colors group-hover:bg-brand-amber group-hover:text-white">
            <Icon className="h-5 w-5 text-brand-black transition-colors group-hover:text-white" />
          </div>

          {/* Quick Tagline */}
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-[12px] font-medium tracking-wide text-amber-300 uppercase">
              Specialist Trade
            </p>
            <h3 className="text-[22px] font-bold text-white leading-tight">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          <p className="text-[15px] font-semibold text-brand-black">
            {service.short}
          </p>
          <p className="mt-2 text-[14px] leading-relaxed text-stone-600">
            {service.description}
          </p>

          {/* Feature Points */}
          <ul className="mt-5 space-y-2 border-t border-stone-100 pt-4">
            {service.points.map((point) => (
              <li
                key={point}
                className="flex items-center gap-2 text-[13px] font-medium text-stone-700"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-brand-amber" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Action Footer */}
      <div className="px-6 pb-6 pt-2">
        <Link
          href={`/services#${service.slug}`}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-stone-200 bg-stone-50 px-4 py-2.5 text-[14px] font-semibold text-brand-black transition-colors group-hover:border-brand-amber group-hover:bg-brand-amber group-hover:text-white"
        >
          Explore trade details
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

export default function Whatwedo(): React.JSX.Element {
  return (
    <section className="bg-stone-50/50 py-16 md:py-24 border-b border-stone-200">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="What We Do"
            title="Finishing services, done right"
            subtitle="Five specialist trades under one accountable partner — no juggling multiple subcontractors on site."
          />
          <Link
            href="/services"
            className="inline-flex shrink-0 items-center gap-2 text-[15px] font-bold text-brand-black transition-colors hover:text-brand-amber"
          >
            Explore all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

export { Whatwedo as WhatWeDo };
