"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 90 });
  const [display, setDisplay] = useState("0");
  const isDecimal = !Number.isInteger(value);

  useEffect(() => {
    if (inView) motionValue.set(value);
  }, [inView, value, motionValue]);

  useEffect(() => {
    const unsub = springValue.on("change", (v) => {
      setDisplay(isDecimal ? v.toFixed(1) : Math.round(v).toLocaleString("en-IN"));
    });
    return unsub;
  }, [springValue, isDecimal]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
