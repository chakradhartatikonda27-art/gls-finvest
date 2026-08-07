import type { Metadata } from "next";
import { notFound } from "next/navigation";
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
import { getServiceBySlug, getServiceSlugs } from "@/lib/supabase/queries";

export async function generateStaticParams() {
  return getServiceSlugs();
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.cardDescription,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  if (!service) notFound();

  return (
    <>
      <ServiceHero title={service.title} tagline={service.heroTagline} photo={service.photo} />
      <ServiceFactsStrip facts={service.facts} />
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
