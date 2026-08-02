import { Hero } from "@/components/sections/hero";
import { TrustMarquee } from "@/components/sections/trust-marquee";
import { CompanyTeamIntro } from "@/components/sections/company-team-intro";
import { StatsBand } from "@/components/sections/stats-band";
import { ServicesGrid } from "@/components/sections/services-grid";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { PropertySpotlight } from "@/components/sections/property-spotlight";
import { InvestmentTeaser } from "@/components/sections/investment-teaser";
import { TeamSpotlight } from "@/components/sections/team-spotlight";
import { Testimonials } from "@/components/sections/testimonials";
import { CtaBand } from "@/components/sections/cta-band";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustMarquee />
      <CompanyTeamIntro />
      <StatsBand />
      <ServicesGrid />
      <FeaturedProjects />
      <PropertySpotlight />
      <InvestmentTeaser />
      <TeamSpotlight />
      <Testimonials />
      <CtaBand />
    </>
  );
}
