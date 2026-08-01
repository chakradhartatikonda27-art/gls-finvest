"use client";

import { useRef, useState, type ReactNode } from "react";
import { motion } from "framer-motion";

/**
 * Wraps any element with a magnetic hover effect — the element nudges toward
 * the cursor within its bounds, then springs back. Desktop-only feel by
 * design; on touch devices onMouseMove simply never fires, so it degrades
 * to a normal static element with zero extra cost.
 */
export function Magnetic({ children, strength = 0.35 }: { children: ReactNode; strength?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setPos({ x, y });
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.3 }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
