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
    <section className="py-24 bg-bg-dark">
      <Container wide>
        <SectionTitle
          eyebrow="What We Do"
          title="Our Services"
          description="Six ways we help you buy, invest, and build wealth — each backed by the same legal and financial diligence."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group relative rounded-card p-[1.5px] bg-gradient-to-br from-white/10 via-white/5 to-transparent hover:from-gold/60 hover:via-gold/20 hover:to-transparent transition-all duration-300"
              >
                <Link
                  href={`/services/${s.slug}`}
                  className="relative flex flex-col h-full rounded-[calc(theme(borderRadius.card)-1.5px)] bg-bg-card overflow-hidden hover:shadow-card transition-shadow duration-300"
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={`${s.photo}?w=800&q=75&auto=format&fit=crop`}
                      alt={s.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/30 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 w-14 h-14 rounded-2xl bg-primary/90 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-bg-dark transition-colors duration-300">
                      <Icon size={26} />
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-7">
                    <h3 className="text-xl font-heading font-semibold text-text">{s.title}</h3>
                    <p className="mt-3 text-sm text-text-secondary leading-relaxed flex-1">{s.cardDescription}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-heading font-medium text-gold">
                      Learn More
                      <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
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
