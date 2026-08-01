"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { timeline } from "@/lib/data/content";

export function Timeline() {
  return (
    <section className="py-24 bg-bg-section">
      <Container wide>
        <SectionTitle eyebrow="Our Journey" title="15+ Years of Building, Deliberately" />
        <div className="mt-16 relative max-w-3xl mx-auto">
          <div className="absolute left-[7px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />
          <div className="space-y-10">
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pl-8 md:pl-16"
              >
                <span className="absolute left-0 md:left-[3px] top-1 w-4 h-4 rounded-full bg-gold border-4 border-bg-section" />
                <span className="text-gold font-heading font-bold text-lg">{item.year}</span>
                <h4 className="mt-1 font-heading font-semibold text-text">{item.title}</h4>
                <p className="mt-1 text-sm text-text-secondary leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
