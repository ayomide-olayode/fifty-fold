import Hero from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import WhoWeAre from "@/components/home/Who-we-are";
import WhatWeDo from "@/components/home/What-we-do";
import PortfolioPreview from "@/components/home/Portfolio-preview";
import PartnerBadge from "@/components/home/Partner-badge";
import { CTABanner } from "@/components/ui/cta-banner";

export default function Home(): React.JSX.Element {
  return (
    <>
      <Hero />
      <Stats />
      <WhoWeAre />
      <WhatWeDo />
      
      {/* Portfolio Preview */}
      <PortfolioPreview />

      {/* Partnership Callout */}
      <section className="mx-auto max-w-7xl px-6 pb-16 md:px-8 md:pb-24">
        <PartnerBadge />
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </>
  );
}
