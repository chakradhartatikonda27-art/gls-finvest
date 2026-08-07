"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Building2, Map, TrendingUp, Wallet, Handshake, Home, ArrowRight, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import type { ServiceIcon } from "@/lib/data/services";

const iconMap: Record<ServiceIcon, LucideIcon> = {
  building: Building2,
  map: Map,
  trendingUp: TrendingUp,
  wallet: Wallet,
  handshake: Handshake,
  home: Home,
};

type Service = {
  slug: string;
  title: string;
  cardDescription: string;
  icon: string;
  photo: string;
};

export function ServicesGrid({ services }: { services: Service[] }) {
  return (
    <section className="py-16 bg-bg-dark">
      <Container wide>
        <SectionTitle
          eyebrow="What We Do"
          title="Our Services"
          description="Six ways we help you buy, invest, and build wealth — each backed by the same legal and financial diligence."
        />

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon as ServiceIcon] ?? Building2;
            return (
              <motion.div
                key={s.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                whileHover={{ y: -6, scale: 1.03, transition: { duration: 0.2 } }}
                className="group relative rounded-lg p-[1.5px] bg-gradient-to-br from-primary/10 via-primary/5 to-transparent hover:from-gold/70 hover:via-gold/25 hover:to-transparent transition-all duration-300"
              >
                <Link
                  href={`/services/${s.slug}`}
                  className="relative flex flex-col h-full rounded-[calc(0.5rem-1.5px)] bg-bg-card overflow-hidden hover:shadow-card transition-shadow duration-300"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={`${s.photo}?w=500&q=72&auto=format&fit=crop`}
                      alt={s.title}
                      fill
                      sizes="(min-width: 1024px) 22vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/30 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-card via-bg-card/10 to-transparent" />
                    <div className="absolute bottom-2.5 left-2.5 w-9 h-9 rounded-lg bg-primary/90 backdrop-blur-sm border border-white/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-primary transition-colors duration-300">
                      <Icon size={16} />
                    </div>
                  </div>
                  <div className="flex flex-col flex-1 p-3">
                    <h3 className="text-xs md:text-sm leading-tight font-heading font-semibold text-text">{s.title}</h3>
                    <span className="mt-2 inline-flex items-center gap-1 text-[11px] font-heading font-medium text-gold">
                      Learn More
                      <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
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
