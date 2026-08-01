"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import type { Service } from "@/lib/data/services";

export function ServiceOverview({ service }: { service: Service }) {
  return (
    <>
      <section className="py-16 bg-bg-dark">
        <Container wide className="max-w-3xl mx-auto text-center">
          <p className="text-text-secondary leading-relaxed text-base md:text-lg">{service.overview}</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {service.benefits.map((b) => (
              <span
                key={b}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-bg-card px-4 py-2 text-xs md:text-sm text-text-secondary"
              >
                <CheckCircle2 size={14} className="text-gold shrink-0" />
                {b}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bg-section">
        <Container wide>
          <SectionTitle eyebrow="Key Services" title="What's Included" />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {service.features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                whileHover={{ y: -3, borderColor: "rgba(199,155,66,0.4)" }}
                className="rounded-card border border-border bg-bg-card p-5"
              >
                <h4 className="font-heading font-semibold text-base text-text">{f.title}</h4>
                <p className="mt-1.5 text-sm text-text-secondary leading-relaxed">{f.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
