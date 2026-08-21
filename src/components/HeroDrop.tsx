// ─────────────────────────────────────────────
// HERO DROP ANIMATION (isolated — safe to tweak)
// Floating hero elements fall from above, wobble
// slightly, and settle with a small spring bounce.
// Landing offsets come from a small set of
// predefined safe variations picked at random on
// each page load (transform-only, layout intact).
// ─────────────────────────────────────────────

import React, { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

export type DropVariation = { x: number; y: number; rotate: number };

// Predefined, subtle landing variations per element key.
export const DROP_VARIATIONS: Record<string, DropVariation[]> = {
  photos: [
    { x: 0, y: 0, rotate: 0 },
    { x: 6, y: 0, rotate: -1 },
    { x: -6, y: 0, rotate: 1 },
  ],
  pillA: [
    { x: 0, y: 0, rotate: -2 },
    { x: 14, y: 6, rotate: 3 },
    { x: -12, y: 4, rotate: -5 },
    { x: 20, y: -4, rotate: 1.5 },
  ],
  pillB: [
    { x: 0, y: 0, rotate: 2.5 },
    { x: -16, y: 8, rotate: -3 },
    { x: 18, y: 4, rotate: 5 },
    { x: -8, y: -6, rotate: -1.5 },
  ],
  pillC: [
    { x: 0, y: 0, rotate: 3 },
    { x: 12, y: -8, rotate: -4 },
    { x: -18, y: 6, rotate: 2 },
    { x: 8, y: 10, rotate: 6 },
  ],
  pillD: [
    { x: 0, y: 0, rotate: -3 },
    { x: -14, y: -6, rotate: 4 },
    { x: 16, y: 8, rotate: -6 },
    { x: 6, y: 4, rotate: 1 },
  ],
  arrow: [
    { x: 0, y: 0, rotate: 0 },
    { x: 6, y: -4, rotate: 8 },
    { x: -6, y: 4, rotate: -8 },
  ],
};

const pick = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];

type Props = {
  /** key into DROP_VARIATIONS */
  variant: keyof typeof DROP_VARIATIONS | string;
  /** explicit landing offset — overrides the random variation (from heroCompositions) */
  target?: DropVariation;
  /** heavier objects (photos) land with a slower, denser spring */
  heavy?: boolean;
  /** stagger delay in seconds (keep total sequence <= ~2s) */
  delay?: number;
  /** how far above the final position it starts (px) */
  from?: number;
  className?: string;
  children: React.ReactNode;
};

export const HeroDrop = ({ variant, target: targetProp, heavy, delay = 0, from = 320, className, children }: Props) => {
  const reduce = useReducedMotion();
  const fallback = useMemo<DropVariation>(
    () => pick(DROP_VARIATIONS[variant] ?? [{ x: 0, y: 0, rotate: 0 }]),
    [variant],
  );
  const target = targetProp ?? fallback;
  const drift = useMemo(() => (Math.random() > 0.5 ? 1 : -1) * (10 + Math.random() * 20), []);

  if (reduce)
    return (
      <div
        className={className}
        style={{ transform: `translate(${target.x}px, ${target.y}px) rotate(${target.rotate}deg)` }}
      >
        {children}
      </div>
    );


  return (
    <motion.div
      className={className}
      style={{ willChange: "transform" }}
      initial={{ y: -from, x: target.x + drift, rotate: target.rotate - drift * 0.4, opacity: 0 }}
      animate={{ y: target.y, x: target.x, rotate: target.rotate, opacity: 1 }}
      transition={{
        opacity: { duration: 0.12, delay },
        default: {
          type: "spring",
          stiffness: 320,
          damping: 16,
          mass: 0.9,
          restDelta: 0.2,
          delay,
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export default HeroDrop;
