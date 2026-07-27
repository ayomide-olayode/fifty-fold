"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";
import { clsx } from "clsx";
import { PROJECTS, type Project } from "@/data";

export interface PortfolioGridProps {
  className?: string;
  projects?: Project[];
  showFilter?: boolean;
}

export function PortfolioGrid({
  className,
  projects = PROJECTS,
  showFilter = true,
}: PortfolioGridProps): React.JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Extract unique categories for filter tabs
  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (e.key === "Escape") {
        setActiveProject(null);
      }
    };
    if (activeProject) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [activeProject]);

  return (
    <div className={clsx("w-full", className)}>
      {/* Category Filter Tabs */}
      {showFilter && (
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2 md:mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={clsx(
                  "rounded-full px-5 py-2 text-[14px] font-semibold transition-all duration-200 cursor-pointer",
                  isActive
                    ? "bg-brand-amber text-white shadow-md"
                    : "bg-stone-100 text-stone-700 hover:bg-stone-200"
                )}
              >
                {cat}
              </button>
            );
          })}
        </div>
      )}

      {/* Projects Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((p) => (
          <div
            key={p.id}
            onClick={() => setActiveProject(p)}
            className="group relative aspect-4/3 w-full cursor-pointer overflow-hidden rounded-2xl bg-stone-100 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <Image
              src={p.image}
              alt={`${p.title}, ${p.location}`}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Category Tag */}
            <div className="absolute top-4 left-4 z-10">
              <span className="rounded-full bg-black/60 px-3 py-1 text-[12px] font-semibold text-white backdrop-blur-md">
                {p.category}
              </span>
            </div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/90" />

            {/* Bottom Content */}
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white">
              <div>
                <h3 className="text-[18px] font-bold leading-snug text-white transition-colors group-hover:text-amber-300">
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
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeProject.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl bg-brand-black text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              aria-label="Close modal"
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-md transition-colors hover:bg-brand-amber cursor-pointer"
            >
              <X size={20} />
            </button>

            {/* Modal Image */}
            <div className="relative h-[60vh] w-full bg-black">
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                fill
                sizes="100vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Modal Footer */}
            <div className="flex flex-col justify-between gap-4 bg-stone-900 px-6 py-5 sm:flex-row sm:items-center">
              <div>
                <span className="text-[12px] font-semibold uppercase tracking-wider text-brand-amber">
                  {activeProject.category}
                </span>
                <h2 className="text-[22px] font-bold text-white">
                  {activeProject.title}
                </h2>
                <p className="text-[14px] text-stone-400">
                  {activeProject.location}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="rounded-lg bg-stone-800 px-5 py-2.5 text-[14px] font-semibold text-white transition-colors hover:bg-stone-700 cursor-pointer"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PortfolioGrid;
