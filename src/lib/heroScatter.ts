// ─────────────────────────────────────────────
// HERO SCATTER
// ─────────────────────────────────────────────
// Runs once per page load.
//
// - Photo stack randomly lands LEFT | CENTER | RIGHT.
// - Each pill / icon independently rolls LEFT or RIGHT.
//   No pairing — 4/0, 3/1, 2/2, 1/3, 0/4 are all valid.
// - The photo stack always wins: any element rolled onto
//   the side the stack occupies is rerouted to the other side
//   (the stack's padded exclusion box).
// - Elements on a side are laid out in separate vertical rows,
//   so the final resting layout has zero overlap.
// ─────────────────────────────────────────────

export type StackSide = "left" | "center" | "right";
export type Side = "left" | "right";

export type FloatKey = "pillA" | "pillB" | "pillC" | "pillD" | "arrow";

export type FloatPlacement = {
  key: FloatKey;
  side: Side;
  /** vertical row within its side column (0 = top) */
  row: number;
  /** horizontal nudge inside the column, px */
  nudge: number;
  /** landing rotation, deg */
  rotate: number;
  /** cascade delay, seconds */
  delay: number;
};

export type HeroScatter = {
  stackSide: StackSide;
  stackDelay: number;
  floats: FloatPlacement[];
};

const FLOAT_KEYS: FloatKey[] = ["pillA", "pillB", "pillC", "pillD", "arrow"];

const rand = (min: number, max: number) => min + Math.random() * (max - min);
const coin = () => (Math.random() < 0.5 ? "left" : "right") as Side;

export const buildHeroScatter = (): HeroScatter => {
  const stackSide: StackSide = (["left", "center", "right"] as const)[Math.floor(Math.random() * 3)];

  // Independent side rolls, then reroute anything colliding with the stack box.
  const rolled = FLOAT_KEYS.map((key) => {
    let side = coin();
    if (stackSide !== "center" && side === stackSide) {
      side = stackSide === "left" ? "right" : "left";
    }
    return { key, side };
  });

  // Cascade order is randomized so the drop reads differently every load.
  const order = [...FLOAT_KEYS].sort(() => Math.random() - 0.5);

  const rowCounter: Record<Side, number> = { left: 0, right: 0 };

  const floats: FloatPlacement[] = rolled.map(({ key, side }) => ({
    key,
    side,
    row: rowCounter[side]++,
    nudge: Math.round(rand(0, key === "arrow" ? 40 : 96)),
    rotate: Number(rand(-5, 5).toFixed(2)),
    // 80–150ms cascade, stack falls first
    delay: 0.15 + order.indexOf(key) * rand(0.08, 0.15),
  }));

  return { stackSide, stackDelay: 0, floats };
};
