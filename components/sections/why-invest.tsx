"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { ShieldCheck, TrendingUp, FileCheck, Handshake, Building2, Rocket } from "lucide-react";

const whyInvest = [
  { icon: ShieldCheck, title: "Legally Secured", description: "Every acquisition passes in-house title and RERA/DTCP verification before it reaches you." },
  { icon: TrendingUp, title: "Track Record", description: "15+ years and 40+ delivered projects — returns backed by execution, not projections." },
  { icon: FileCheck, title: "Full Documentation", description: "Registration, encumbrance, and approval paperwork handled transparently, end to end." },
  { icon: Handshake, title: "Aligned Incentives", description: "We co-invest in the ventures and developments we recommend — skin in the game, always." },
];

const opportunities = [
  { icon: Building2, title: "Real Estate Portfolios", description: "Residential, villa, commercial, and plotted-land positions structured for capital appreciation and rental yield." },
  { icon: Rocket, title: "Growth-Stage Ventures", description: "Direct investment into founder-led businesses with proven revenue, structured alongside our own capital." },
];

export function WhyInvest() {
  return (
    <section className="py-24 bg-bg-section">
      <Container wide>
        <SectionTitle eyebrow="Why Invest With GLS" title="Discipline Before Deployment" />
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyInvest.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-card bg-bg-card border border-border p-7"
            >
              <item.icon size={26} className="text-gold" />
              <h4 className="mt-4 font-heading font-semibold text-text">{item.title}</h4>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          {opportunities.map((o) => (
            <div key={o.title} className="rounded-xl2 bg-brand-gradient p-9">
              <o.icon size={30} className="text-gold" />
              <h3 className="mt-5 text-xl font-heading font-semibold text-white">{o.title}</h3>
              <p className="mt-3 text-white/75 leading-relaxed">{o.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
