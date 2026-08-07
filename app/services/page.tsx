import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ServicesGrid } from "@/components/sections/services-grid";
import { CtaBand } from "@/components/sections/cta-band";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { getServices } from "@/lib/supabase/queries";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Real estate, land and villa investment, financial consulting, and property advisory — the full GLS Finvest service range, each with a dedicated page.",
};

const process = [
  { step: "01", title: "Consultation", description: "We understand your budget, timeline, and goals before recommending anything." },
  { step: "02", title: "Legal & Title Review", description: "Every property or venture is cleared through in-house legal diligence first." },
  { step: "03", title: "Structuring", description: "We structure the acquisition, investment, or development plan around your constraints." },
  { step: "04", title: "Execution", description: "Construction, documentation, or capital deployment proceeds against agreed milestones." },
  { step: "05", title: "Handover & Support", description: "Registration, possession, or portfolio reporting — with ongoing support after close." },
];

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="One Team, Every Stage of Your Investment"
        description="From plotted land to venture capital — every service runs through the same disciplined, transparent process."
      />
      <ServicesGrid services={services} />
      <section className="py-24 bg-bg-section">
        <Container wide>
          <SectionTitle eyebrow="How We Work" title="A Process Built for Predictability" />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-5 gap-6">
            {process.map((p) => (
              <div key={p.step} className="relative">
                <span className="text-4xl font-heading font-bold text-gold/30">{p.step}</span>
                <h4 className="mt-3 font-heading font-semibold text-text">{p.title}</h4>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
