import { PageHero } from "@/components/ui/page-hero";
import { PortfolioGrid } from "@/components/portfolio/Portfolio-grid";
import { CTABanner } from "@/components/ui/cta-banner";
import { PROJECTS } from "@/data";

export default function PortfolioPage(): React.JSX.Element {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Completed projects across Lagos"
        subtitle="A selection of finished work — click any project to view it full-screen. Filter by the service you're interested in."
        image={PROJECTS[1]?.image}
      />

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <PortfolioGrid projects={PROJECTS} showFilter />
      </section>

      <CTABanner
        headline="Want your project on this page?"
        buttonLabel="Get a quote"
        to="/contact"
      />
    </>
  );
}
