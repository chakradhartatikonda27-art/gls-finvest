"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { GrowthAreaChart } from "@/components/charts/growth-area-chart";
import { ShieldCheck, TrendingUp, Users } from "lucide-react";

const points = [
  { icon: TrendingUp, title: "Consistent Growth", description: "Real estate and venture positions structured for long-horizon appreciation." },
  { icon: ShieldCheck, title: "Legally Vetted", description: "Every investment cleared through in-house legal and title review before offer." },
  { icon: Users, title: "Founder-Aligned", description: "Venture capital deployed alongside, not above, the teams we back." },
];

export function InvestmentTeaser() {
  return (
    <section className="py-24 bg-bg-dark overflow-hidden">
      <Container wide className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <SectionTitle
            eyebrow="Investment Opportunities"
            title="Invest Today. Shape Tomorrow."
            align="left"
            className="mx-0"
            description="A disciplined process spanning property acquisition, legal clearance, and portfolio-level advisory — for both real estate and growth-stage ventures."
          />
          <div className="mt-8 space-y-6">
            {points.map((pt, i) => (
              <motion.div
                key={pt.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-11 h-11 shrink-0 rounded-xl bg-primary/30 text-gold flex items-center justify-center">
                  <pt.icon size={20} />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-text">{pt.title}</h4>
                  <p className="text-sm text-text-secondary mt-1">{pt.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <Button href="/investment" className="mt-9">
            Explore Investment Opportunities
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-bg-card border border-border rounded-xl2 p-8 md:p-10 shadow-card"
        >
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm text-text-secondary">Portfolio Growth Index</span>
            <span className="text-xs px-3 py-1 rounded-full bg-success/15 text-success font-medium">
              +18.4% avg. annual
            </span>
          </div>
          <GrowthAreaChart />
        </motion.div>
      </Container>
    </section>
  );
}
