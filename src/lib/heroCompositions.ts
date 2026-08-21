// ─────────────────────────────────────────────
// HERO COMPOSITIONS (curated, easy to edit)
// One hero composition + one photo composition are
// picked at random on every page load. Only landing
// offsets / rotations / left-center-right ordering
// change — the layout & assets stay identical.
// ─────────────────────────────────────────────

export type Offset = { x: number; y: number; rotate: number };

export type HeroComposition = {
  id: string;
  /** flex order of the 3 hero groups (photos, tag cluster 1, tag cluster 2) */
  order: { photos: number; clusterA: number; clusterB: number };
  /** landing offsets per element (px / deg) */
  photos: Offset;
  tag1: Offset;
  tag2: Offset;
  tag3: Offset;
  tag4: Offset;
  icon: Offset;
};

export const heroCompositions: HeroComposition[] = [
  {
    // A — photos right, tags mostly left, icon lower left
    id: "A",
    order: { photos: 3, clusterA: 1, clusterB: 2 },
    photos: { x: -70, y: 0, rotate: 0 },
    tag1: { x: -18, y: -8, rotate: -3 },
    tag2: { x: 14, y: 10, rotate: 2 },
    tag3: { x: -10, y: 4, rotate: 3 },
    tag4: { x: 22, y: 14, rotate: -2 },
    icon: { x: -14, y: 18, rotate: 6 },
  },
  {
    // B — photos left, tags split, icon lower right
    id: "B",
    order: { photos: 1, clusterA: 2, clusterB: 3 },
    photos: { x: -70, y: 0, rotate: 0 },
    tag1: { x: 20, y: -10, rotate: 2.5 },
    tag2: { x: -16, y: 12, rotate: -4 },
    tag3: { x: 24, y: 6, rotate: -2 },
    tag4: { x: -8, y: 18, rotate: 4 },
    icon: { x: 18, y: 20, rotate: -6 },
  },
  {
    // C — photos center, tags pushed to outer edges
    id: "C",
    order: { photos: 2, clusterA: 1, clusterB: 3 },
    photos: { x: 0, y: 6, rotate: 0 },
    tag1: { x: -28, y: 0, rotate: -5 },
    tag2: { x: -20, y: 16, rotate: 3 },
    tag3: { x: 28, y: -6, rotate: 4 },
    tag4: { x: 20, y: 12, rotate: -3 },
    icon: { x: 10, y: 22, rotate: 5 },
  },
  {
    // D — photos center, tags hugging them, icon low
    id: "D",
    order: { photos: 2, clusterA: 3, clusterB: 1 },
    photos: { x: 0, y: -4, rotate: 0 },
    tag1: { x: 12, y: 14, rotate: 4 },
    tag2: { x: -14, y: -6, rotate: -2 },
    tag3: { x: -22, y: 10, rotate: 2 },
    tag4: { x: 16, y: -8, rotate: -5 },
    icon: { x: -6, y: 24, rotate: 3 },
  },
  {
    // E — most tags left, photos right, icon centred low
    id: "E",
    order: { photos: 3, clusterA: 2, clusterB: 1 },
    photos: { x: -70, y: 4, rotate: 0 },
    tag1: { x: -24, y: 6, rotate: 3 },
    tag2: { x: -12, y: 20, rotate: -3 },
    tag3: { x: 8, y: -10, rotate: -4 },
    tag4: { x: 18, y: 8, rotate: 5 },
    icon: { x: 0, y: 26, rotate: -6 },
  },
  {
    // F — most tags right, photos left, icon lower
    id: "F",
    order: { photos: 1, clusterA: 3, clusterB: 2 },
    photos: { x: -70, y: -2, rotate: 0 },
    tag1: { x: 26, y: -4, rotate: -2 },
    tag2: { x: 14, y: 16, rotate: 4 },
    tag3: { x: 30, y: 8, rotate: 3 },
    tag4: { x: 10, y: 22, rotate: -4 },
    icon: { x: 22, y: 14, rotate: 6 },
  },
  {
    // G — photos right, tags grouped tightly left
    id: "G",
    order: { photos: 3, clusterA: 1, clusterB: 2 },
    photos: { x: 70, y: 8, rotate: 0 },
    tag1: { x: -8, y: -12, rotate: 5 },
    tag2: { x: -4, y: 8, rotate: -5 },
    tag3: { x: 12, y: 18, rotate: 2 },
    tag4: { x: -18, y: 24, rotate: -2 },
    icon: { x: 26, y: 6, rotate: 4 },
  },
  {
    // H — photos left, tags fanned across
    id: "H",
    order: { photos: 1, clusterA: 2, clusterB: 3 },
    photos: { x: 70, y: 2, rotate: 0 },
    tag1: { x: 16, y: 10, rotate: -6 },
    tag2: { x: 28, y: -6, rotate: 2 },
    tag3: { x: -10, y: 16, rotate: 5 },
    tag4: { x: 22, y: 20, rotate: -3 },
    icon: { x: -16, y: 10, rotate: -5 },
  },
];

// ── Photo collage ────────────────────────────
// Photos are stacked as a continuous vertical
// filmstrip: identical left/width, fixed rotation
// per photo (never changes). Only a single vertical
// "window offset" shifts per composition, so on each
// page load a different set of photos land fully in
// view while the ones at the top/bottom edges of the
// stack box are partially clipped by overflow-hidden.

export type PhotoPlacement = {
  /** which source photo (0,1,2) */
  photo: 0 | 1 | 2;
  top: string;
  left: string;
  width: string;
  rotate: number;
  z: number;
};

export type PhotoComposition = { id: string; items: PhotoPlacement[] };

// Fixed per-photo values — identical across every composition.
const PHOTO_H = 68; // each photo's height, as % of the stack box height
const PHOTO_ROTATE: Record<0 | 1 | 2, number> = { 0: -2, 1: 1.5, 2: -3 };
const PHOTO_Z: Record<0 | 1 | 2, number> = { 0: 1, 1: 2, 2: 3 };

// Only this value shifts between compositions — it moves the whole
// filmstrip up so different photos sit fully in view vs. clipped
// at the top/bottom edges of the overflow-hidden stack box.
const WINDOW_OFFSETS = [0, -34, -68, -102, -136];

const buildPhotoComposition = (id: string, windowOffset: number): PhotoComposition => ({
  id,
  items: ([0, 1, 2] as const).map((photo) => ({
    photo,
    top: `${photo * PHOTO_H + windowOffset}%`,
    left: "0%",
    width: "100%",
    rotate: PHOTO_ROTATE[photo],
    z: PHOTO_Z[photo],
  })),
});

export const photoCompositions: PhotoComposition[] = WINDOW_OFFSETS.map((offset, i) =>
  buildPhotoComposition(`p${i + 1}`, offset),
);

export const pickOne = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
