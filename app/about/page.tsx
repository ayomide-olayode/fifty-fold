import { PageHero } from "@/components/ui/page-hero";
import { AboutStory } from "@/components/about/About-story";
import { AboutStats } from "@/components/about/About-stats";
import { AboutValues } from "@/components/about/About-values";
import { CTABanner } from "@/components/ui/cta-banner";
import { ABOUT_IMAGE } from "@/data";

export default function AboutPage(): React.JSX.Element {
  return (
    <>
      <PageHero
        eyebrow="About Fiftyfold"
        title="A finishing partner developers can build a reputation on"
        subtitle="Founded in 2018 and rooted in Lagos, we deliver specialist finishing work at the standard great real estate deserves."
        image={ABOUT_IMAGE}
      />
      <AboutStory />
      <AboutStats />
      <AboutValues />
      <CTABanner
        headline="Let's build something worth referring."
        buttonLabel="Start a conversation"
        to="/contact"
      />
    </>
  );
}
