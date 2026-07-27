import { clsx } from "clsx";
import { STATS, type StatItem } from "@/data";

export interface AboutStatsProps {
  className?: string;
  stats?: StatItem[];
}

export function AboutStats({
  className,
  stats = STATS,
}: AboutStatsProps): React.JSX.Element {
  return (
    <section className={clsx("bg-brand-black border-y border-stone-800 py-14", className)}>
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 text-center md:grid-cols-4 md:px-8">
        {stats.map((s) => (
          <div key={s.label} className="flex flex-col items-center justify-center">
            <div className="text-[38px] font-extrabold tracking-tight text-brand-amber md:text-[48px]">
              {s.value}
            </div>
            <div className="mt-1.5 text-[14px] font-medium text-stone-400 md:text-[15px]">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutStats;
