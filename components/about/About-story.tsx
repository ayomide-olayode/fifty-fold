import Image from "next/image";
import { clsx } from "clsx";
import { SectionHeading } from "@/components/ui/section-heading";
import { ABOUT_IMAGE } from "@/data";

export interface AboutStoryProps {
  className?: string;
  image?: string;
}

export function AboutStory({
  className,
  image = ABOUT_IMAGE,
}: AboutStoryProps): React.JSX.Element {
  return (
    <section className={clsx("mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24", className)}>
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Our story"
            title="From a single crew to a full finishing outfit"
          />
          <div className="mt-6 space-y-4 text-[17px] leading-relaxed text-stone-600">
            <p>
              Fiftyfold began in 2018 with a simple conviction: Lagos&apos;s fast
              growing real estate market deserved finishing work that matched
              the ambition of its buildings. What started as a painting crew
              has grown into a specialist subcontracting firm trusted by
              developers, homeowners and project managers alike.
            </p>
            <p>
              Today we deliver painting, wall skimming, aluminium window
              fabrication and installation, plasterboard ceilings and paint
              sales — the last powered by our strategic partnership with
              Blendtech Limited. One accountable partner, five specialist
              trades.
            </p>
            <p>
              Our growth has been driven almost entirely by referral, which
              tells us the most important thing: clients come back, and they
              send their friends.
            </p>
          </div>
        </div>

        <div className="relative aspect-4/5 w-full overflow-hidden rounded-2xl bg-stone-200 shadow-xl">
          <Image
            src={image}
            alt="Fiftyfold craftsmen finishing a wall"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutStory;
