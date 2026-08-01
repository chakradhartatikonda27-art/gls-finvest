"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { ProjectPhoto } from "@/components/graphics/project-photo";
import { projects } from "@/lib/data/projects";

// Original descriptive copy for each spotlighted project — not copied from
// any reference site. Swap with real project narratives when available.
const spotlightCopy: Record<string, string> = {
  "gls-horizon-heights":
    "Sea-facing towers designed for long-term residential value in one of Visakhapatnam's most established neighborhoods. Every unit ships with a clean, RERA-verified title and a documented handover timeline — no surprises at registration.",
  "gls-serene-meadows":
    "A gated villa community along the Bheemili coastal growth corridor, where land values have moved fastest over the past three years. Built for buyers who want space, privacy, and a title chain we've personally verified end to end.",
};

const spotlightSlugs = ["gls-horizon-heights", "gls-serene-meadows"];

export function PropertySpotlight() {
  const items = projects.filter((p) => spotlightSlugs.includes(p.slug));

  return (
    <section className="py-20 bg-bg-section">
      <Container wide>
        <SectionTitle
          eyebrow="A Closer Look"
          title="Two Developments Worth Your Time"
          align="left"
          className="mx-0"
        />
        <div className="mt-12 space-y-8">
          {items.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6 items-start pb-8 border-b border-border last:border-0"
            >
              <div className="relative w-full md:w-[180px] aspect-[4/3] rounded-card overflow-hidden">
                <ProjectPhoto category={p.category} className="w-full h-full" />
              </div>
              <div>
                <Link href="/projects" className="text-xl font-heading font-semibold text-text hover:text-gold transition-colors">
                  {p.name}
                </Link>
                <span className="mt-1.5 flex items-center gap-1.5 text-sm text-text-secondary">
                  <MapPin size={14} className="text-gold shrink-0" /> {p.location}
                </span>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed max-w-2xl">
                  {spotlightCopy[p.slug]}
                </p>
                <Link href="/projects" className="mt-3 inline-block text-sm font-heading font-medium text-gold">
                  Learn more →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
