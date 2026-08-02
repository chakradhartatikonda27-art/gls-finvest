"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, Map, TrendingUp, Wallet, Handshake, Home, ArrowRight, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { services, type ServiceIcon } from "@/lib/data/services";

const iconMap: Record<ServiceIcon, LucideIcon> = {
  building: Building2,
  map: Map,
  trendingUp: TrendingUp,
  wallet: Wallet,
  handshake: Handshake,
  home: Home,
};

export function ServicesGrid() {
  return (
    <section className="py-20 bg-bg-dark">
      <Container wide>
        <SectionTitle
          eyebrow="What We Do"
          title="Our Services"
          description="Six ways we help you buy, invest, and build wealth — each backed by the same legal and financial diligence."
        />

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.25 } }}
                className="group relative rounded-xl p-[1.5px] bg-gradient-to-br from-primary/10 via-primary/5 to-transparent hover:from-gold/70 hover:via-gold/25 hover:to-transparent transition-all duration-300"
              >
                <Link
                  href={`/services/${s.slug}`}
                  className="relative flex flex-col h-full rounded-[calc(0.75rem-1.5px)] bg-bg-card overflow-hidden hover:shadow-card transition-shadow duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={`${s.photo}?w=600&q=75&auto=format&fit=crop`}
                      alt={s.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/30 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/10 to-transparent" />
                    <div className="absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-primary/90 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-primary transition-colors duration-300">
                      <Icon size={18} />
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-4">
                    <h3 className="text-sm md:text-base font-heading font-semibold text-text leading-snug">{s.title}</h3>
                    <p className="mt-1.5 text-xs text-text-secondary leading-relaxed flex-1 hidden sm:block">{s.cardDescription}</p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-heading font-medium text-gold">
                      Learn More
                      <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
