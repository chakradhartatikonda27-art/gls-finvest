"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { AnimatedBackground } from "@/components/graphics/animated-background";
import { site } from "@/lib/data/site";

const fallbackHeroPhotos = [
  { url: "/hero/hero-5.png", alt: "GLS Finvest" },
  { url: "/hero/hero-1.jpg", alt: "GLS Finvest" },
  { url: "/hero/hero-2.jpg", alt: "GLS Finvest" },
  { url: "/hero/hero-6.jpg", alt: "GLS Finvest" },
  { url: "/hero/hero-7.jpg", alt: "GLS Finvest" },
  { url: "/hero/hero-8.jpg", alt: "GLS Finvest" },
  { url: "/hero/hero-9.jpg", alt: "GLS Finvest" },
];

export function Hero({ photos }: { photos?: { url: string; alt: string }[] }) {
  const heroPhotos = photos && photos.length > 0 ? photos : fallbackHeroPhotos;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const [photoIndex, setPhotoIndex] = useState(0);

  const blobY1 = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const blobY2 = useTransform(scrollYProgress, [0, 1], [0, -80]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPhotoIndex((i) => (i + 1) % heroPhotos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroPhotos.length]);

  return (
    <section ref={ref} className="relative min-h-[92vh] flex items-center overflow-hidden bg-brand-gradient">
      <div className="absolute inset-0">
        <AnimatePresence>
          <motion.div
            key={photoIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroPhotos[photoIndex].url}
              alt={heroPhotos[photoIndex].alt}
              fill
              priority={photoIndex === 0}
              sizes="100vw"
              quality={85}
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220]/75 via-[#0B1220]/25 to-transparent" />
      <AnimatedBackground />
      <motion.div style={{ y: blobY1 }} className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gold/10 blur-[120px]" />
      <motion.div style={{ y: blobY2 }} className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary-light/20 blur-[120px]" />

      <div className="absolute bottom-24 right-6 md:right-10 z-20 flex gap-2">
        {heroPhotos.map((_, i) => (
          <button
            key={i}
            onClick={() => setPhotoIndex(i)}
            aria-label={`Show background image ${i + 1}`}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === photoIndex ? "w-6 bg-gold" : "w-1.5 bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

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

          <h1 className="max-w-2xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-[1.1] text-white">
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
            className="mt-6 max-w-xl text-base md:text-lg text-white/80 leading-relaxed"
          >
            {site.heroSubheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <Magnetic>
              <Button href="/projects" size="lg">
                Explore Projects
              </Button>
            </Magnetic>
            <Link
              href={`tel:${site.phone}`}
              className="inline-flex items-center gap-2 text-sm font-heading font-medium text-white/85 hover:text-gold transition-colors"
            >
              <Phone size={16} /> Or call {site.phoneDisplay}
            </Link>
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
              <div className="text-xs text-white/70 mt-1">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60"
      >
        <ChevronDown size={26} />
      </motion.div>
    </section>
  );
}
