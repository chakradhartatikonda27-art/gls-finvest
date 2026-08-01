"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, BadgeCheck, Scale, ShieldCheck, Users2, LineChart, HeartHandshake } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionTitle } from "@/components/ui/section-title";
import { Counter } from "@/components/ui/counter";
import { TiltCard } from "@/components/ui/tilt-card";
import { whyGls } from "@/lib/data/content";
import { cn } from "@/lib/utils";

const icons = [Award, BadgeCheck, Scale, ShieldCheck, Users2, LineChart, HeartHandshake];

// Verified "Free to use under the Unsplash License" photos — commercial use,
// no attribution required. Background imagery for the two featured bento tiles.
const handshakePhoto = "https://images.unsplash.com/photo-1521791136064-7986c2920216";
const teamPhoto = "https://images.unsplash.com/photo-1758873269276-9518d0cb4a0b";

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
    <section className="py-16 bg-bg-section">
      <Container wide>
        <SectionTitle eyebrow="Why GLS" title="A Standard We Hold Ourselves To" />
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-5 sm:auto-rows-[160px]">
          {whyGls.map((item, i) => {
            const Icon = icons[i % icons.length];
            const featured = i === 0;
            const withPhoto = i === 0 || i === 4;

            return (
              <TiltCard key={item.title} className={cn("rounded-card", spans[i])}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className={cn(
                    "relative h-full rounded-card border overflow-hidden flex flex-col justify-center p-6 transition-colors duration-300",
                    featured
                      ? "border-gold/30 items-start text-left"
                      : "border-border items-center text-center hover:border-gold/40",
                    !withPhoto && "bg-bg-card"
                  )}
                >
                  {withPhoto && (
                    <>
                      <Image
                        src={`${i === 0 ? handshakePhoto : teamPhoto}?w=1000&q=75&auto=format&fit=crop`}
                        alt={i === 0 ? "Business handshake" : "Team collaborating in office"}
                        fill
                        sizes="(min-width: 640px) 50vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/70 to-bg-dark/20" />
                    </>
                  )}

                  <div className="relative z-10 flex flex-col h-full justify-center">
                    <motion.div
                      initial={{ scale: 0.6, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.06 + 0.1, type: "spring" }}
                      className={cn(
                        "rounded-full bg-gold/15 flex items-center justify-center",
                        featured ? "w-14 h-14" : "w-11 h-11 mx-auto"
                      )}
                    >
                      <Icon size={featured ? 26 : 20} className="text-gold shrink-0" />
                    </motion.div>

                    {featured ? (
                      <div className="mt-5 text-3xl font-heading font-bold text-gold">
                        <Counter value={15} suffix="+" /> <span className="text-xl text-text">Years</span>
                      </div>
                    ) : null}

                    <h4 className={cn("font-heading font-semibold text-text", featured ? "mt-2 text-xl" : "mt-3 text-sm md:text-base")}>
                      {featured ? "Experience" : item.title}
                    </h4>
                    <p className={cn("text-text-secondary leading-relaxed", featured ? "mt-3 text-sm max-w-[85%]" : "mt-1.5 text-xs hidden md:block")}>
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </TiltCard>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
