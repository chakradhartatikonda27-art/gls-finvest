"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { ProjectPhoto } from "@/components/graphics/project-photo";

type SpotlightProject = {
  slug: string;
  name: string;
  category: string;
  location: string;
  area: string;
  priceFrom: string;
  status: string;
  photo?: string | null;
  highlights: string[];
};

export function PropertySpotlight({ projects }: { projects: SpotlightProject[] }) {
  const items = projects.slice(0, 2);

  if (items.length === 0) return null;

  return (
    <section className="py-20 bg-bg-section">
      <Container wide>
        <SectionTitle
          eyebrow="A Closer Look"
          title="Developments Worth Your Time"
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
                <ProjectPhoto category={p.category as "Residential" | "Villas" | "Commercial" | "Open Plots"} photo={p.photo} className="w-full h-full" />
              </div>
              <div>
                <Link href="/projects" className="text-xl font-heading font-semibold text-text hover:text-gold transition-colors">
                  {p.name}
                </Link>
                <span className="mt-1.5 flex items-center gap-1.5 text-sm text-text-secondary">
                  <MapPin size={14} className="text-gold shrink-0" /> {p.location}
                </span>
                <p className="mt-3 text-sm text-text-secondary leading-relaxed max-w-2xl">
                  {p.status} · {p.area} · Starting {p.priceFrom}
                  {p.highlights.length > 0 && <> — {p.highlights.join(", ")}.</>}
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
