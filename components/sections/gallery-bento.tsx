"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Lightbox } from "@/components/ui/lightbox";
import { TiltCard } from "@/components/ui/tilt-card";
import { cn } from "@/lib/utils";

const spanClasses: Record<string, string> = {
  large: "sm:col-span-2 sm:row-span-2",
  tall: "sm:row-span-2",
  wide: "sm:col-span-2",
  normal: "",
};

type GalleryItem = {
  label: string;
  category: string;
  photo: string;
  span: "large" | "tall" | "wide" | "normal";
};

export function GalleryBento({ items: galleryItems }: { items: GalleryItem[] }) {
  const [filter, setFilter] = useState("All");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const categories = useMemo(
    () => ["All", ...Array.from(new Set(galleryItems.map((g) => g.category)))],
    [galleryItems]
  );

  const filtered = filter === "All" ? galleryItems : galleryItems.filter((g) => g.category === filter);

  return (
    <section className="py-24 bg-bg-dark">
      <Container wide>
        <div className="flex flex-wrap gap-2.5 justify-center mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={cn(
                "px-4 py-2 rounded-full text-xs md:text-sm font-medium border transition-colors duration-300",
                filter === c
                  ? "bg-gold text-primary border-gold"
                  : "border-border text-text-secondary hover:border-gold/50 hover:text-gold"
              )}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:auto-rows-[180px]"
        >
          {filtered.map((item, i) => {
            const realIndex = galleryItems.indexOf(item);
            return (
              <motion.div
                layout
                key={item.label}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={spanClasses[item.span]}
              >
                <TiltCard className="h-full rounded-card">
                  <button
                    onClick={() => setActiveIndex(realIndex)}
                    className="group relative w-full h-full rounded-card overflow-hidden border border-border text-left cursor-zoom-in block"
                  >
                    <Image
                      src={`${item.photo}?w=900&q=78&auto=format&fit=crop`}
                      alt={item.label}
                      fill
                      sizes="(min-width: 640px) 25vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1220] via-[#0B1220]/10 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                    <div className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-gold to-gold-hover w-0 group-hover:w-full transition-all duration-500" />

                    <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5">
                      <span className="text-[10px] font-heading font-semibold uppercase tracking-widest text-gold opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                        {item.category}
                      </span>
                      <span className="mt-0.5 text-sm md:text-base font-heading font-semibold text-white">
                        {item.label}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-[#0B1220]/60 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                      <Expand size={14} />
                    </div>
                  </button>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>

      <Lightbox
        items={galleryItems}
        index={activeIndex}
        onClose={() => setActiveIndex(null)}
        onNavigate={setActiveIndex}
      />
    </section>
  );
}
