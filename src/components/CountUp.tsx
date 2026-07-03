"use client";

import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  const match = value.match(/^(\d+)(.*)$/);
  const isNum = match !== null;
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isNum || !inView) return;

    const reduce = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) {
      setDisplay(target);
      return;
    }

    const controls = animate(0, target, {
      duration: 1.4,
      ease: [0.22, 0.61, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
    // stable deps only — avoids restarting the animation on every re-render
  }, [inView, target, isNum]);

  if (!isNum) return <span ref={ref}>{value}</span>;
  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}
