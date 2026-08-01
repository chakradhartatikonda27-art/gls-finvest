"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Linkedin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { team } from "@/lib/data/team";

export function TeamCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scroll(direction: "left" | "right") {
    const el = trackRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  }

  return (
    <section className="py-16 bg-bg-dark">
      <Container wide>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionTitle
            eyebrow="Our Team"
            title="The People Behind GLS"
            align="left"
            className="mx-0"
          />
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll("left")}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:border-gold hover:text-gold transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-secondary hover:border-gold hover:text-gold transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          className="mt-10 flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 -mx-1 px-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing"
        >
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="shrink-0 w-[240px] sm:w-[260px] snap-center rounded-card border border-border bg-bg-card overflow-hidden hover:border-gold/40 hover:shadow-card transition-all duration-300"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={`${member.photo}?w=600&q=80&auto=format&fit=crop`}
                  alt={member.name}
                  fill
                  sizes="260px"
                  className="object-cover"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/20 to-transparent" />
                <span className="absolute bottom-3 left-3 text-[10px] font-heading font-semibold uppercase tracking-widest text-gold px-2.5 py-1 rounded-full bg-bg-dark/70 backdrop-blur-sm">
                  {member.role}
                </span>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-heading font-semibold text-text">{member.name}</h4>
                  <span className="w-7 h-7 rounded-full border border-border flex items-center justify-center text-text-muted">
                    <Linkedin size={13} />
                  </span>
                </div>
                <p className="mt-1.5 text-xs text-text-secondary leading-relaxed">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-3 text-xs text-text-muted md:hidden">Swipe to see the full team →</p>
      </Container>
    </section>
  );
}
