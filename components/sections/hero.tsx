"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { SkylineIllustration } from "@/components/graphics/skyline-illustration";
import { Magnetic } from "@/components/ui/magnetic";
import { AnimatedBackground } from "@/components/graphics/animated-background";
import { site } from "@/lib/data/site";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const blobY1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const blobY2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const skylineY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const skylineOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[92vh] flex items-center overflow-hidden bg-brand-gradient">
      <div className="absolute inset-0 bg-hero-overlay" />
      <AnimatedBackground />
      <motion.div style={{ y: blobY1 }} className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gold/10 blur-[120px]" />
      <motion.div style={{ y: blobY2 }} className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary-light/20 blur-[120px]" />

      <motion.div
        style={{ y: skylineY, opacity: skylineOpacity }}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-[45%] max-w-[560px] pointer-events-none"
      >
        <SkylineIllustration className="w-full h-auto" />
      </motion.div>

      <Container wide className="relative z-10 pt-32 pb-20">
        <div className="lg:max-w-[58%]">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6 text-xs md:text-sm font-heading font-semibold uppercase tracking-[0.25em] text-gold"
          >
            {site.tagline} · Since {site.founded}
          </motion.span>

          <h1 className="max-w-2xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] text-text">
            {site.heroHeadline.split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40, rotateX: 40 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: "easeOut" }}
                style={{ display: "inline-block", transformPerspective: 600 }}
                className="mr-[0.28em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="mt-6 max-w-xl text-base md:text-lg text-text-secondary leading-relaxed"
          >
            {site.heroSubheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Magnetic>
              <Button href="/projects" size="lg">
                Explore Projects
              </Button>
            </Magnetic>
            <Magnetic strength={0.25}>
              <Button href="/contact" variant="outline" size="lg">
                Book Consultation
              </Button>
            </Magnetic>
            <Button
              href={`tel:${site.phone}`}
              variant="ghost"
              size="lg"
              className="border border-white/10"
            >
              <Phone size={18} /> Call Now
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl"
        >
          {[
            { label: "Years", value: "15+" },
            { label: "Projects", value: "40+" },
            { label: "Families", value: "2500+" },
            { label: "Sq.ft Developed", value: "3.2M+" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + i * 0.08 }}
              whileHover={{ y: -4, borderColor: "rgba(199,155,66,0.5)" }}
              className="glass rounded-card px-5 py-4"
            >
              <div className="text-2xl md:text-3xl font-heading font-bold text-gold">{s.value}</div>
              <div className="text-xs text-text-secondary mt-1">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted"
      >
        <ChevronDown size={26} />
      </motion.div>
    </section>
  );
}
