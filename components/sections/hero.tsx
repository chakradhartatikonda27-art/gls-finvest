"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { AnimatedBackground } from "@/components/graphics/animated-background";
import { site } from "@/lib/data/site";

// Verified "Free to use under the Unsplash License" photos — commercial use
// permitted, no attribution required. Rotating hero background, mixing real
// estate and financial/investment imagery.
const heroPhotos = [
  { url: "https://images.unsplash.com/photo-1771450092348-5f33e2cc2963", alt: "City skyline at dusk" },
  { url: "https://images.unsplash.com/photo-1534951009808-766178b47a4f", alt: "Stacked gold coins symbolizing financial growth" },
  { url: "https://images.unsplash.com/photo-1416331108676-a22ccb276e35", alt: "Villa surrounded by trees" },
  { url: "https://images.unsplash.com/photo-1743178207584-4a0c1109975e", alt: "Modern glass office building" },
  { url: "https://images.unsplash.com/photo-1768638687896-35bde623d532", alt: "Modern residential apartment building" },
];

export function Hero() {
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
  }, []);

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
            className="absolute inset-0 scale-110"
          >
            <Image
              src={`${heroPhotos[photoIndex].url}?w=2000&q=80&auto=format&fit=crop`}
              alt={heroPhotos[photoIndex].alt}
              fill
              priority={photoIndex === 0}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/85 to-bg-dark/35" />
      <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/10 to-transparent" />
      <AnimatedBackground />
      <motion.div style={{ y: blobY1 }} className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gold/10 blur-[120px]" />
      <motion.div style={{ y: blobY2 }} className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-primary-light/20 blur-[120px]" />

      {/* Rotation indicator dots */}
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
