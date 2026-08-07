"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { ProjectPhoto } from "@/components/graphics/project-photo";
import { TiltCard } from "@/components/ui/tilt-card";

export function FeaturedProjects({ projects }: { projects: { slug: string; name: string; category: string; location: string; area: string; priceFrom: string; status: string; highlights: string[]; photo?: string | null }[] }) {
  return (
    <section className="py-16 bg-bg-section">
      <Container wide>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionTitle
            eyebrow="Featured Projects"
            title="Developments Built to Last"
            align="left"
            className="mx-0"
          />
          <Button href="/projects" variant="outline" size="sm" className="border-primary/30 text-text hover:border-gold hover:text-gold">
            View All Projects
          </Button>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {projects.map((p, i) => (
            <TiltCard key={p.slug} className="rounded-card">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -5, transition: { duration: 0.25 } }}
                className="group rounded-card overflow-hidden border border-border bg-bg-card hover:shadow-card transition-shadow duration-500"
              >
                <div className="overflow-hidden">
                  <div className="transition-transform duration-700 group-hover:scale-105">
                    <ProjectPhoto category={p.category as "Residential" | "Villas" | "Commercial" | "Open Plots"} photo={p.photo} className="aspect-[4/3]" />
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-gold">
                    {p.status} · {p.category}
                  </span>
                  <h3 className="mt-1 text-base font-heading font-semibold text-text leading-snug">{p.name}</h3>
                  <span className="mt-1.5 flex items-center gap-1 text-xs text-text-secondary">
                    <MapPin size={12} className="text-gold shrink-0" /> {p.location}
                  </span>
                  <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
                    <span className="text-xs font-heading font-semibold text-gold">{p.priceFrom}</span>
                    <Button href="/contact" size="sm" variant="ghost" className="px-3 py-1.5 text-xs">
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
