import { Hero } from "@/components/sections/hero";
import { TrustMarquee } from "@/components/sections/trust-marquee";
import { StatsBand } from "@/components/sections/stats-band";
import { WhyInvestVizag } from "@/components/sections/why-invest-vizag";
import { ServicesGrid } from "@/components/sections/services-grid";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { InvestmentTeaser } from "@/components/sections/investment-teaser";
import { WhyGls } from "@/components/sections/why-gls";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaBand } from "@/components/sections/cta-band";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <StatsBand />
      <WhyInvestVizag />
      <ServicesGrid />
      <FeaturedProjects />
      <InvestmentTeaser />
      <WhyGls />
      <Testimonials />
      <CtaBand />
    </>
  );
}
