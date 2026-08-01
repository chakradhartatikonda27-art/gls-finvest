"use client";

import { motion } from "framer-motion";
import { Building, Briefcase, Home, LandPlot, LineChart, Handshake, ArrowUpRight, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { services } from "@/lib/data/services";

const iconMap: Record<string, LucideIcon> = {
  building: Building,
  briefcase: Briefcase,
  home: Home,
  landPlot: LandPlot,
  lineChart: LineChart,
  handshake: Handshake,
};

export function ServicesGrid() {
  return (
    <section className="py-24 bg-bg-dark">
      <Container wide>
        <SectionTitle
          eyebrow="What We Do"
          title="Full-Spectrum Real Estate & Investment Services"
          description="From plotted land to portfolio advisory — every service is built on the same transparent process."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6, scale: 1.02, transition: { duration: 0.25 } }}
                className="group relative rounded-card border border-border bg-bg-card p-8 hover:border-gold/40 transition-colors duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-bg-dark transition-colors duration-300">
                  <Icon size={26} />
                </div>
                <h3 className="mt-6 text-xl font-heading font-semibold text-text">{s.title}</h3>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed">{s.description}</p>
                <div className="mt-6 flex items-center gap-2 text-sm text-gold opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  Learn more <ArrowUpRight size={16} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
