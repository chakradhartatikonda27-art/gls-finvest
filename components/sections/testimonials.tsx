"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { testimonials } from "@/lib/data/content";

export function Testimonials() {
  return (
    <section className="py-24 bg-bg-dark">
      <Container wide>
        <SectionTitle
          eyebrow="Client Voices"
          title="Trusted by Homeowners & Founders Alike"
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-card p-8 flex flex-col"
            >
              <Quote size={28} className="text-gold/60" />
              <p className="mt-5 text-text-secondary leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-1">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} size={14} className="fill-gold text-gold" />
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-white/10">
                <div className="font-heading font-semibold text-text text-sm">{t.name}</div>
                <div className="text-xs text-text-muted mt-0.5">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
