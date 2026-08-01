"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { newsItems } from "@/lib/data/news";

export function NewsSection() {
  return (
    <section className="py-24 bg-bg-section">
      <Container wide>
        <SectionTitle eyebrow="Updates" title="What's New" />
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {newsItems.map((item, i) => (
            <motion.article
              key={item.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group rounded-card overflow-hidden border border-border bg-bg-card hover:shadow-card transition-shadow duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={`${item.photo}?w=700&q=75&auto=format&fit=crop`}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs text-text-muted">
                  <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary font-medium">
                    {item.category}
                  </span>
                  <span>{item.date}</span>
                </div>
                <h3 className="mt-3 text-lg font-heading font-semibold text-text leading-snug">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed line-clamp-3">
                  {item.excerpt}
                </p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-heading font-medium text-gold"
                >
                  Read More
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
