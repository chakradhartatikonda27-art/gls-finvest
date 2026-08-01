"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck, Scale, ShieldCheck, Users2, LineChart, HeartHandshake } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { whyGls } from "@/lib/data/content";
import { cn } from "@/lib/utils";

const icons = [Award, BadgeCheck, Scale, ShieldCheck, Users2, LineChart, HeartHandshake];

// Bento layout: one featured 2x2 tile, one wide 2x1 tile, rest standard —
// asymmetric sizing is the 2026 pattern that replaced uniform grids.
const spans = [
  "sm:col-span-2 sm:row-span-2",
  "",
  "",
  "",
  "sm:col-span-2",
  "",
  "",
];

export function WhyGls() {
  return (
    <section className="py-24 bg-bg-section">
      <Container wide>
        <SectionTitle eyebrow="Why GLS" title="A Standard We Hold Ourselves To" />
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-5 sm:auto-rows-[160px]">
          {whyGls.map((item, i) => {
            const Icon = icons[i % icons.length];
            const featured = i === 0;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ y: -4 }}
                className={cn(
                  "relative rounded-card border border-border p-6 flex flex-col justify-center overflow-hidden transition-colors duration-300",
                  featured
                    ? "bg-brand-gradient border-gold/30 items-start text-left"
                    : "bg-bg-card text-center items-center hover:border-gold/40",
                  spans[i]
                )}
              >
                {featured && (
                  <div className="absolute -right-6 -bottom-6 w-28 h-28 rounded-full bg-gold/10 blur-2xl" />
                )}
                <Icon size={featured ? 34 : 26} className="text-gold shrink-0" />
                <h4 className={cn("font-heading font-semibold text-text", featured ? "mt-5 text-xl" : "mt-4 text-sm md:text-base")}>
                  {item.title}
                </h4>
                <p className={cn("text-text-secondary leading-relaxed", featured ? "mt-3 text-sm max-w-[85%]" : "mt-2 text-xs hidden md:block")}>
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
