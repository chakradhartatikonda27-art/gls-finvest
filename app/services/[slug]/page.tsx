import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/lib/data/services";
import { ServiceHero } from "@/components/sections/service-hero";
import { ServiceFactsStrip } from "@/components/sections/service-facts-strip";
import { ServiceOverview } from "@/components/sections/service-overview";
import { WhyChooseService } from "@/components/sections/why-choose-service";
import { ProcessFlow } from "@/components/sections/process-flow";
import { FaqAccordion } from "@/components/sections/faq-accordion";
import { ServiceFinalCta } from "@/components/sections/service-final-cta";
import { ContactForm } from "@/components/sections/contact-form";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.cardDescription,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <ServiceHero title={service.title} tagline={service.heroTagline} />
      <ServiceFactsStrip slug={service.slug} />
      <ServiceOverview service={service} />
      <WhyChooseService />
      <ProcessFlow />
      <FaqAccordion faqs={service.faqs} />
      <section className="py-16 bg-bg-section">
        <Container wide className="max-w-2xl mx-auto">
          <SectionTitle eyebrow="Get in Touch" title="Talk to Us About This Service" />
          <div className="mt-10">
            <ContactForm />
          </div>
        </Container>
      </section>
      <ServiceFinalCta />
    </>
  );
}
