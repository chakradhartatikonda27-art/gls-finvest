"use client";

import { motion } from "framer-motion";

export function GrowthArrowIllustration({ className }: { className?: string }) {
  const pathD = "M10 150 L70 120 L120 135 L180 80 L240 100 L300 40";
  const points = [
    { cx: 10, cy: 150 },
    { cx: 120, cy: 135 },
    { cx: 180, cy: 80 },
    { cx: 300, cy: 40 },
  ];

  return (
    <svg viewBox="0 0 320 170" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="arrowGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#244D9A" />
          <stop offset="100%" stopColor="#C79B42" />
        </linearGradient>
      </defs>
      <motion.path
        d={pathD}
        stroke="url(#arrowGrad)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      />
      <path d="M270 40 L300 40 L300 70" stroke="#C79B42" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      {points.map((p, i) => (
        <motion.circle
          key={i}
          cx={p.cx}
          cy={p.cy}
          r="5"
          fill="#D9AE52"
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 + i * 0.25 }}
        />
      ))}
    </svg>
  );
}
