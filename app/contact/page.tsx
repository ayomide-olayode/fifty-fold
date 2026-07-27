import { PageHero } from "@/components/ui/page-hero";
import { ContactInfo } from "@/components/contact/Contact-info";
import { ContactForm } from "@/components/contact/Contact-form";
import { PROJECTS } from "@/data";

export default function ContactPage(): React.JSX.Element {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get a quote or ask a question"
        subtitle="Tell us about your project and we'll respond within 48 hours with next steps and a detailed quote."
        image={PROJECTS[3]?.image}
      />

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-8 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </>
  );
}
