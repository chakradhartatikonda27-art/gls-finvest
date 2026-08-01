import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { InvestmentTeaser } from "@/components/sections/investment-teaser";
import { WhyInvestVizag } from "@/components/sections/why-invest-vizag";
import { PortfolioPerformance } from "@/components/sections/portfolio-performance";
import { WhyInvest } from "@/components/sections/why-invest";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Investment Opportunities",
  description:
    "Portfolio advisory spanning real estate acquisition and growth-stage venture investment, structured by GLS Finvest Pvt Ltd.",
};

export default function InvestmentPage() {
  return (
    <>
      <PageHero
        eyebrow="Investment Opportunities"
        title="Invest Today. Shape Tomorrow."
        description="Real estate and venture capital, structured under one disciplined advisory process — built for long-horizon growth, not short-term optics."
      />
      <InvestmentTeaser />
      <WhyInvestVizag />
      <PortfolioPerformance />
      <WhyInvest />
      <CtaBand />
    </>
  );
}
