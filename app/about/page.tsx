import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { MissionVision } from "@/components/sections/mission-vision";
import { Timeline } from "@/components/sections/timeline";
import { TeamSpotlight } from "@/components/sections/team-spotlight";
import { WhyGls } from "@/components/sections/why-gls";
import { StatsBand } from "@/components/sections/stats-band";
import { CtaBand } from "@/components/sections/cta-band";
import { getTeamMembers } from "@/lib/supabase/queries";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "GLS Finvest Pvt Ltd — 15+ years building transparent real estate and investment solutions in Visakhapatnam, Andhra Pradesh, since 2009.",
};

export default async function AboutPage() {
  const team = await getTeamMembers();

  return (
    <>
      <PageHero
        eyebrow="About GLS Finvest"
        title="Building Wealth, Deliberately, Since 2009"
        description="We started as a real estate firm with one rule: never sell what we wouldn't buy ourselves. Fifteen years later, that rule still shapes every project and every investment we make."
      />
      <StatsBand />
      <MissionVision />
      <Timeline />
      <TeamSpotlight team={team} />
      <WhyGls />
      <CtaBand />
    </>
  );
}
