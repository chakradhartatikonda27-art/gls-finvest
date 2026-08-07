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
import { getProjects, getServices, getTeamMembers, getTestimonials, getHeroImages } from "@/lib/supabase/queries";

export default async function HomePage() {
  const [heroPhotos, projects, services, team, testimonials] = await Promise.all([
    getHeroImages(),
    getProjects(),
    getServices(),
    getTeamMembers(),
    getTestimonials(),
  ]);

  return (
    <>
      <Hero photos={heroPhotos} />
      <TrustMarquee />
      <CompanyTeamIntro />
      <StatsBand />
      <ServicesGrid services={services} />
      <FeaturedProjects projects={projects} />
      <PropertySpotlight projects={projects} />
      <InvestmentTeaser />
      <TeamSpotlight team={team} />
      <Testimonials testimonials={testimonials} />
      <CtaBand />
    </>
  );
}
