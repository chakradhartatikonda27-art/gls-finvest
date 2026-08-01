"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Eye, Users2, CalendarClock, Smile, Scale } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";

const items = [
  { icon: ShieldCheck, title: "Trust", description: "15+ years of delivered projects." },
  { icon: Eye, title: "Transparency", description: "Every cost disclosed upfront." },
  { icon: Users2, title: "Expert Team", description: "Legal, financial, property advisory." },
  { icon: CalendarClock, title: "Since 2009", description: "Through multiple market cycles." },
  { icon: Smile, title: "Customer Satisfaction", description: "2,500+ families served." },
  { icon: Scale, title: "Legal Assistance", description: "In-house review, every time." },
] as const;

export function WhyChooseService() {
  return (
    <section className="py-16 bg-bg-section">
      <Container wide>
        <SectionTitle eyebrow="Why Choose This Service" title="What You're Actually Getting" />
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-card border border-border bg-bg-card p-5"
            >
              <item.icon size={22} className="text-gold" />
              <h4 className="mt-3 font-heading font-semibold text-sm text-text">{item.title}</h4>
              <p className="mt-1.5 text-xs text-text-secondary leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
