import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { coreValues } from "@/lib/data/content";
import { Target, Eye } from "lucide-react";
import { GrowthArrowIllustration } from "@/components/graphics/growth-arrow-illustration";

export function MissionVision() {
  return (
    <section className="py-24 bg-bg-dark">
      <Container wide>
        <div className="rounded-xl2 bg-brand-gradient p-8 md:p-10 mb-10 flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <span className="text-xs font-heading font-semibold uppercase tracking-[0.2em] text-gold">15 Years, One Trajectory</span>
            <p className="mt-3 text-text-secondary max-w-md">
              From a single residential project in 2009 to a diversified real estate and venture
              portfolio — every milestone built on the last.
            </p>
          </div>
          <GrowthArrowIllustration className="w-full max-w-xs md:w-64 h-auto shrink-0" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="rounded-card border border-border bg-bg-card p-9">
            <Target size={28} className="text-gold" />
            <h3 className="mt-5 text-2xl font-heading font-semibold text-text">Our Mission</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              To make real estate and investment transparent — where every title is clean, every
              timeline is honored, and every client understands exactly what they own.
            </p>
          </div>
          <div className="rounded-card border border-border bg-bg-card p-9">
            <Eye size={28} className="text-gold" />
            <h3 className="mt-5 text-2xl font-heading font-semibold text-text">Our Vision</h3>
            <p className="mt-3 text-text-secondary leading-relaxed">
              To be Andhra Pradesh&apos;s most trusted name in real estate and growth investment —
              known as much for restraint as for returns.
            </p>
          </div>
        </div>

        <SectionTitle eyebrow="Core Values" title="What Guides Every Decision" />
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((v) => (
            <div key={v.title} className="rounded-card border border-border p-6 hover:border-gold/40 transition-colors">
              <h4 className="font-heading font-semibold text-text">{v.title}</h4>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
