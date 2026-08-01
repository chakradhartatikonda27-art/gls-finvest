"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Ruler } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ProjectPhoto } from "@/components/graphics/project-photo";
import { projects } from "@/lib/data/projects";
import { cn } from "@/lib/utils";

const categories = ["All", "Residential", "Villas", "Commercial", "Open Plots"] as const;

export function ProjectsGrid() {
  const [filter, setFilter] = useState<(typeof categories)[number]>("All");
  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="py-24 bg-bg-dark">
      <Container wide>
        <div className="flex flex-wrap gap-3 justify-center mb-14">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-medium border transition-colors duration-300",
                filter === c
                  ? "bg-gold text-primary border-gold"
                  : "border-border text-text-secondary hover:border-gold/50 hover:text-gold"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="rounded-card overflow-hidden border border-border bg-bg-card hover:shadow-card transition-shadow duration-500"
            >
              <ProjectPhoto category={p.category} className="aspect-[16/10]" sizes="(min-width: 768px) 50vw, 100vw" />
              <div className="p-7">
                <span className="text-xs font-semibold uppercase tracking-widest text-gold">{p.status}</span>
                <h3 className="mt-2 text-2xl font-heading font-semibold text-text">{p.name}</h3>
                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-text-secondary">
                  <span className="flex items-center gap-1.5"><MapPin size={15} className="text-gold" /> {p.location}</span>
                  <span className="flex items-center gap-1.5"><Ruler size={15} className="text-gold" /> {p.area}</span>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.highlights.map((h) => (
                    <li key={h} className="text-xs px-3 py-1 rounded-full bg-primary/20 text-text-secondary">{h}</li>
                  ))}
                </ul>
                <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                  <span className="font-heading font-semibold text-gold">{p.priceFrom}</span>
                  <Button href="/contact" size="sm" variant="ghost">Enquire →</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
