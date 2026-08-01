"use client";

import { motion } from "framer-motion";
import { MapPin, Ruler } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { ImagePlaceholder } from "@/components/ui/image-placeholder";
import { TiltCard } from "@/components/ui/tilt-card";
import { projects } from "@/lib/data/projects";

export function FeaturedProjects() {
  return (
    <section className="py-24 bg-bg-section">
      <Container wide>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionTitle
            eyebrow="Featured Projects"
            title="Developments Built to Last"
            align="left"
            className="mx-0"
          />
          <Button href="/projects" variant="outline">
            View All Projects
          </Button>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <TiltCard key={p.slug} className="rounded-card">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group rounded-card overflow-hidden border border-border bg-bg-card hover:shadow-card transition-shadow duration-500"
            >
              <div className="overflow-hidden">
                <div className="transition-transform duration-700 group-hover:scale-105">
                  <ImagePlaceholder label={p.category} aspect="aspect-[16/10]" className="rounded-none" />
                </div>
              </div>
              <div className="p-7">
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">
                  {p.status}
                </span>
                <h3 className="mt-2 text-2xl font-heading font-semibold text-text">{p.name}</h3>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-text-secondary">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={15} className="text-gold" /> {p.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Ruler size={15} className="text-gold" /> {p.area}
                  </span>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.highlights.map((h) => (
                    <li key={h} className="text-xs px-3 py-1 rounded-full bg-primary/20 text-text-secondary">
                      {h}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                  <span className="font-heading font-semibold text-gold">{p.priceFrom}</span>
                  <Button href="/contact" size="sm" variant="ghost">
                    Enquire →
                  </Button>
                </div>
              </div>
            </motion.div>
            </TiltCard>
          ))}
        </div>
      </Container>
    </section>
  );
}
