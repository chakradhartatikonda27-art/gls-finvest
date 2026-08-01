"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { AllocationDonutChart } from "@/components/charts/allocation-donut-chart";
import { YoyReturnsBarChart } from "@/components/charts/yoy-returns-bar-chart";

export function PortfolioPerformance() {
  return (
    <section className="py-24 bg-bg-dark">
      <Container wide>
        <SectionTitle eyebrow="Portfolio Performance" title="The Numbers Behind the Portfolio" />
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="rounded-xl2 border border-border bg-bg-card p-8"
          >
            <h3 className="font-heading font-semibold text-text mb-1">Portfolio Allocation</h3>
            <p className="text-sm text-text-secondary mb-6">Capital deployed across verticals, current fiscal year.</p>
            <AllocationDonutChart />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-xl2 border border-border bg-bg-card p-8"
          >
            <h3 className="font-heading font-semibold text-text mb-1">Year-over-Year Returns</h3>
            <p className="text-sm text-text-secondary mb-6">Real estate vs. venture capital, annualized.</p>
            <YoyReturnsBarChart />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
