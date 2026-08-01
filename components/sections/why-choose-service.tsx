"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Eye, Users2, CalendarClock, Smile, Scale } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";

const items = [
  { icon: ShieldCheck, title: "Trust", description: "Built on 15+ years of delivered projects, not projections." },
  { icon: Eye, title: "Transparency", description: "Every title, cost, and timeline disclosed upfront." },
  { icon: Users2, title: "Expert Team", description: "Dedicated specialists across legal, financial, and property advisory." },
  { icon: CalendarClock, title: "Since 2009", description: "Continuous operation through multiple market cycles." },
  { icon: Smile, title: "Customer Satisfaction", description: "2,500+ families and counting, most through referral." },
  { icon: Scale, title: "Legal Assistance", description: "In-house legal review on every transaction, standard." },
] as const;

export function WhyChooseService() {
  return (
    <section className="py-24 bg-bg-section">
      <Container wide>
        <SectionTitle eyebrow="Why Choose This Service" title="What You're Actually Getting" />
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-card border border-border bg-bg-card p-7"
            >
              <item.icon size={26} className="text-gold" />
              <h4 className="mt-4 font-heading font-semibold text-text">{item.title}</h4>
              <p className="mt-2 text-sm text-text-secondary leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
