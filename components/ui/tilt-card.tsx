"use client";

import { useRef, type ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mvX = useMotionValue(0);
  const mvY = useMotionValue(0);
  const spX = useSpring(mvX, { stiffness: 200, damping: 20 });
  const spY = useSpring(mvY, { stiffness: 200, damping: 20 });
  // Kept deliberately subtle (4deg max) — 2026 UX research flags heavy 3D tilt as a
  // "trendy but distracting" pattern; restraint is what separates polish from gimmick.
  const rotateX = useTransform(spY, [-0.5, 0.5], [4, -4]);
  const rotateY = useTransform(spX, [-0.5, 0.5], [-4, 4]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mvX.set((e.clientX - rect.left) / rect.width - 0.5);
    mvY.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mvX.set(0);
    mvY.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
