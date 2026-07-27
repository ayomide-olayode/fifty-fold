import { PageHero } from "@/components/ui/page-hero";
import { ServicesList } from "@/components/services/Services-list";
import { PartnerBadge } from "@/components/home/Partner-badge";
import { CTABanner } from "@/components/ui/cta-banner";
import { SERVICES } from "@/data";

export default function ServicesPage(): React.JSX.Element {
  return (
    <>
      <PageHero
        eyebrow="Our services"
        title="Five specialist trades, one accountable partner"
        subtitle="From bare blockwork to a flawless handover — Fiftyfold covers the finishing scope so you don't have to coordinate a dozen subcontractors."
        image={SERVICES[0]?.image}
      />

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <ServicesList />

        <div className="mt-20">
          <PartnerBadge />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
