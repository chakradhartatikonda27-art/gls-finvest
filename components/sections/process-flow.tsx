"use client";

import { motion } from "framer-motion";
import { MessageCircle, ClipboardList, Search, FileText, Stamp, HeartHandshake } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";

const steps = [
  { icon: MessageCircle, title: "Consultation", description: "We understand your budget, goals, and timeline." },
  { icon: ClipboardList, title: "Requirement Analysis", description: "We define exactly what fits your needs." },
  { icon: Search, title: "Property Selection", description: "Shortlisted options matched to your criteria." },
  { icon: FileText, title: "Documentation", description: "Every document reviewed and prepared." },
  { icon: Stamp, title: "Registration", description: "Coordinated support through registration." },
  { icon: HeartHandshake, title: "After-Sales Support", description: "We stay involved after handover." },
] as const;

export function ProcessFlow() {
  return (
    <section className="py-16 bg-bg-dark">
      <Container wide>
        <SectionTitle eyebrow="Our Process" title="How It Works, Step by Step" />
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="relative rounded-card border border-border bg-bg-card p-5 text-center"
            >
              <span className="absolute top-3 right-3 text-xs font-heading font-bold text-gold/40">
                {String(i + 1).padStart(2, "0")}
              </span>
              <step.icon size={24} className="mx-auto text-gold" />
              <h4 className="mt-3 text-sm font-heading font-semibold text-text">{step.title}</h4>
              <p className="mt-1.5 text-xs text-text-secondary leading-relaxed hidden sm:block">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
