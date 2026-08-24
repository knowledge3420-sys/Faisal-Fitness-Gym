"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

type Dot = {
  id: number;
  x: number;
  y: number;
  size: number;
  delay: number;
  duration: number;
  drift: number;
  opacity: number;
};

type ParticlesProps = {
  count?: number;
  className?: string;
};

/** Subtle floating light particles for hero backgrounds. */
export function Particles({ count = 18, className = "" }: ParticlesProps) {
  const [dots, setDots] = useState<Dot[]>([]);
  const reduce = useReducedMotion();

  useEffect(() => {
    setDots(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 1,
        delay: Math.random() * 5,
        duration: 9 + Math.random() * 9,
        drift: 40 + Math.random() * 60,
        opacity: 0.25 + Math.random() * 0.45,
      }))
    );
  }, [count]);

  if (reduce) return null;

  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {dots.map((d) => (
        <motion.span
          key={d.id}
          className="absolute rounded-full bg-volt-300"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: d.size,
            height: d.size,
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: [0, d.opacity, 0], y: [0, -d.drift] }}
          transition={{
            duration: d.duration,
            delay: d.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
