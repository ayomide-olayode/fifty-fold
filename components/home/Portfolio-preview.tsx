import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { clsx } from "clsx";
import { SectionHeading } from "@/components/ui/section-heading";
import { PROJECTS, type Project } from "@/data";

export interface PortfolioPreviewProps {
  className?: string;
  projects?: Project[];
}

export default function PortfolioPreview({
  className,
  projects = PROJECTS,
}: PortfolioPreviewProps): React.JSX.Element {
  const displayProjects = projects.slice(0, 6);

  return (
    <section className={clsx("mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24", className)}>
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="Selected work"
          title="Finishes that speak for themselves"
          subtitle="Explore some of our recent finishing contracting projects across Lagos."
        />
        <Link
          href="/portfolio"
          className="inline-flex shrink-0 items-center gap-2 text-[15px] font-bold text-brand-black transition-colors hover:text-brand-amber"
        >
          See all projects
          <ArrowRight size={16} />
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayProjects.map((p) => (
          <Link
            key={p.id}
            href={`/portfolio#${p.id}`}
            className="group relative aspect-4/3 overflow-hidden rounded-2xl bg-stone-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <Image
              src={p.image}
              alt={`${p.title}, ${p.location}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Category tag */}
            <div className="absolute top-4 left-4 z-10">
              <span className="rounded-full bg-black/60 px-3 py-1 text-[12px] font-semibold text-white backdrop-blur-md">
                {p.category}
              </span>
            </div>

            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/90" />

            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white">
              <div>
                <h3 className="text-[18px] font-bold leading-snug text-white group-hover:text-amber-300 transition-colors">
                  {p.title}
                </h3>
                <p className="mt-1 text-[13px] font-medium text-stone-300">
                  {p.location}
                </p>
              </div>
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-brand-amber group-hover:scale-110">
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export { PortfolioPreview };
