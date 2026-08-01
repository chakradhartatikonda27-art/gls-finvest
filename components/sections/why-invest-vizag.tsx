"use client";

import { motion } from "framer-motion";
import { Plane, Server, TrainFront, Landmark, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { marketStats, infrastructureDrivers, growthLocalities } from "@/lib/data/market";

const icons = [Plane, Server, TrainFront, Landmark];

export function WhyInvestVizag() {
  return (
    <section className="py-16 bg-bg-section">
      <Container wide>
        <SectionTitle
          eyebrow="Market Snapshot"
          title="Why Vizag, Why Now"
          description="Visakhapatnam's real estate market, backed by current infrastructure investment — not sales copy."
        />

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {marketStats.map((s) => (
            <div key={s.label} className="rounded-card border border-border bg-bg-card p-5 text-center">
              <div className="text-xl md:text-2xl font-heading font-bold text-gold">{s.value}</div>
              <div className="mt-1 text-xs text-text-secondary leading-snug">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {infrastructureDrivers.map((d, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="rounded-card border border-border bg-bg-card p-6"
              >
                <Icon size={22} className="text-gold" />
                <h4 className="mt-3 font-heading font-semibold text-text">{d.title}</h4>
                <p className="mt-1.5 text-sm text-text-secondary leading-relaxed">{d.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10">
          <h4 className="text-sm font-heading font-semibold uppercase tracking-widest text-gold mb-4">
            Growth Localities
          </h4>
          <div className="flex flex-wrap gap-2.5">
            {growthLocalities.map((l) => (
              <span
                key={l.name}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-card px-4 py-2 text-xs md:text-sm text-text-secondary"
              >
                <MapPin size={13} className="text-gold shrink-0" />
                <span className="font-medium text-text">{l.name}</span> — {l.note}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
