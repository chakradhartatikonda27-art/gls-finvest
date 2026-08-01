"use client";

import { useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryItem } from "@/lib/data/gallery";

export function Lightbox({
  items,
  index,
  onClose,
  onNavigate,
}: {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onNavigate: (i: number) => void;
}) {
  const isOpen = index !== null;

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen || index === null) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate((index + 1) % items.length);
      if (e.key === "ArrowLeft") onNavigate((index - 1 + items.length) % items.length);
    },
    [isOpen, index, items.length, onClose, onNavigate]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [handleKey, isOpen]);

  const item = index !== null ? items[index] : null;

  return (
    <AnimatePresence>
      {isOpen && item && index !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] bg-bg-dark/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10"
          onClick={onClose}
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-5 right-5 md:top-8 md:right-8 w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-text hover:border-gold hover:text-gold transition-colors z-10"
          >
            <X size={20} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index - 1 + items.length) % items.length);
            }}
            aria-label="Previous image"
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-text hover:border-gold hover:text-gold transition-colors z-10"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((index + 1) % items.length);
            }}
            aria-label="Next image"
            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-text hover:border-gold hover:text-gold transition-colors z-10"
          >
            <ChevronRight size={20} />
          </button>

          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl"
          >
            <div className="relative w-full aspect-[4/3] rounded-card overflow-hidden border border-border">
              <Image
                src={`${item.photo}?w=1600&q=85&auto=format&fit=crop`}
                alt={item.label}
                fill
                sizes="90vw"
                className="object-cover"
                priority
              />
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div>
                <span className="text-xs font-heading font-semibold uppercase tracking-widest text-gold">
                  {item.category}
                </span>
                <h3 className="mt-1 text-lg font-heading font-semibold text-text">{item.label}</h3>
              </div>
              <span className="text-sm text-text-muted">
                {index + 1} / {items.length}
              </span>
            </div>

            {/* Thumbnail strip for quick navigation */}
            <div className="mt-4 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {items.map((thumb, i) => (
                <button
                  key={thumb.label}
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigate(i);
                  }}
                  className={`relative shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-colors ${
                    i === index ? "border-gold" : "border-transparent opacity-50 hover:opacity-80"
                  }`}
                >
                  <Image
                    src={`${thumb.photo}?w=120&q=60&auto=format&fit=crop`}
                    alt=""
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
