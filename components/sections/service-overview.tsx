"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import type { Service } from "@/lib/data/services";

export function ServiceOverview({ service }: { service: Service }) {
  return (
    <>
      <section className="py-24 bg-bg-dark">
        <Container wide className="max-w-3xl mx-auto">
          <SectionTitle eyebrow="About This Service" title="Overview" align="left" className="mx-0" />
          <div className="mt-6 space-y-5">
            {service.overview.map((para, i) => (
              <p key={i} className="text-text-secondary leading-relaxed text-base md:text-lg">
                {para}
              </p>
            ))}
          </div>
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-sm text-text-secondary">
                <CheckCircle2 size={18} className="text-gold shrink-0 mt-0.5" />
                {b}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-24 bg-bg-section">
        <Container wide>
          <SectionTitle eyebrow="Key Services" title="What's Included" />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {service.features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -4, borderColor: "rgba(199,155,66,0.4)" }}
                className="rounded-card border border-border bg-bg-card p-7"
              >
                <h4 className="font-heading font-semibold text-lg text-text">{f.title}</h4>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
