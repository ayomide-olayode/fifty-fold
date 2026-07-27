import { Award, Handshake, ShieldCheck, Target, type LucideIcon } from "lucide-react";
import { clsx } from "clsx";
import { SectionHeading } from "@/components/ui/section-heading";

export interface ValueItem {
  icon: LucideIcon;
  title: string;
  body: string;
}

export const VALUES: ValueItem[] = [
  {
    icon: Award,
    title: "Craft first",
    body: "Every surface, seam and finish is treated as a portfolio piece. Quality is non-negotiable.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable delivery",
    body: "Clear timelines, disciplined site management and finishes that pass inspection the first time.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    body: "Our Blendtech partnership means better materials, better pricing and a single point of accountability.",
  },
  {
    icon: Target,
    title: "West-African vision",
    body: "We're building toward becoming the preferred real estate development outfit in West Africa.",
  },
];

export interface AboutValuesProps {
  className?: string;
  values?: ValueItem[];
}

export function AboutValues({
  className,
  values = VALUES,
}: AboutValuesProps): React.JSX.Element {
  return (
    <section className={clsx("mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24", className)}>
      <SectionHeading
        eyebrow="What drives us"
        title="The standards behind every project"
        align="center"
      />
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((v) => {
          const Icon = v.icon;
          return (
            <div
              key={v.title}
              className="group flex flex-col rounded-2xl border border-stone-200 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-lg"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-black text-brand-amber transition-colors group-hover:bg-brand-amber group-hover:text-white">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 text-[18px] font-bold text-brand-black">
                {v.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-stone-600">
                {v.body}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default AboutValues;
