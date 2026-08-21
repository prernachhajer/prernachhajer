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

// Note: order.photos is fixed at 2 for every composition below.
// Horizontal placement (left/center/right) is controlled ONLY by
// photos.x (translateX) — mixing it with flex `order` caused
// compositions to fight each other (a photo with order 1 sitting
// at the flex-left could never reach a true right position even
// with a positive x, since it started from the far left). Locking
// order removes that interaction so x alone decides the position.
export const heroCompositions: HeroComposition[] = [
  {
    // A — photos far left, tags split, icon lower left
    id: "A",
    order: { photos: 2, clusterA: 1, clusterB: 3 },
    photos: { x: -260, y: 0, rotate: 0 },
    tag1: { x: -18, y: -8, rotate: -3 },
    tag2: { x: 14, y: 10, rotate: 2 },
    tag3: { x: -10, y: 4, rotate: 3 },
    tag4: { x: 22, y: 14, rotate: -2 },
    icon: { x: -14, y: 18, rotate: 6 },
  },
  {
    // B — photos left-ish, tags split, icon lower right
    id: "B",
    order: { photos: 2, clusterA: 1, clusterB: 3 },
    photos: { x: -160, y: 0, rotate: 0 },
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
    // E — tags left, photos right, icon centred low
    id: "E",
    order: { photos: 2, clusterA: 3, clusterB: 1 },
    photos: { x: 160, y: 4, rotate: 0 },
    tag1: { x: -24, y: 6, rotate: 3 },
    tag2: { x: -12, y: 20, rotate: -3 },
    tag3: { x: 8, y: -10, rotate: -4 },
    tag4: { x: 18, y: 8, rotate: 5 },
    icon: { x: 0, y: 26, rotate: -6 },
  },
  {
    // F — tags right, photos far right, icon lower
    id: "F",
    order: { photos: 2, clusterA: 3, clusterB: 1 },
    photos: { x: 260, y: -2, rotate: 0 },
    tag1: { x: 26, y: -4, rotate: -2 },
    tag2: { x: 14, y: 16, rotate: 4 },
    tag3: { x: 30, y: 8, rotate: 3 },
    tag4: { x: 10, y: 22, rotate: -4 },
    icon: { x: 22, y: 14, rotate: 6 },
  },
  {
    // G — photos far left, tags split
    id: "G",
    order: { photos: 2, clusterA: 1, clusterB: 3 },
    photos: { x: -260, y: 8, rotate: 0 },
    tag1: { x: -8, y: -12, rotate: 5 },
    tag2: { x: -4, y: 8, rotate: -5 },
    tag3: { x: 12, y: 18, rotate: 2 },
    tag4: { x: -18, y: 24, rotate: -2 },
    icon: { x: 26, y: 6, rotate: 4 },
  },
  {
    // H — photos far right, tags split
    id: "H",
    order: { photos: 2, clusterA: 1, clusterB: 3 },
    photos: { x: 260, y: 2, rotate: 0 },
    tag1: { x: 16, y: 10, rotate: -6 },
    tag2: { x: 28, y: -6, rotate: 2 },
    tag3: { x: -10, y: 16, rotate: 5 },
    tag4: { x: 22, y: 20, rotate: -3 },
    icon: { x: -16, y: 10, rotate: -5 },
  },
  {
    // I — tags TRUE-grouped left (both order 1), photos far right
    id: "I",
    order: { photos: 2, clusterA: 1, clusterB: 1 },
    photos: { x: 220, y: 0, rotate: 0 },
    tag1: { x: -14, y: -6, rotate: -3 },
    tag2: { x: -22, y: 8, rotate: 2 },
    tag3: { x: -18, y: 20, rotate: -2 },
    tag4: { x: -10, y: -14, rotate: 4 },
    icon: { x: -20, y: 14, rotate: -5 },
  },
  {
    // J — tags TRUE-grouped right (both order 3), photos far left
    id: "J",
    order: { photos: 2, clusterA: 3, clusterB: 3 },
    photos: { x: -220, y: 4, rotate: 0 },
    tag1: { x: 16, y: -8, rotate: 4 },
    tag2: { x: 24, y: 10, rotate: -3 },
    tag3: { x: 20, y: -18, rotate: 2 },
    tag4: { x: 12, y: 16, rotate: -5 },
    icon: { x: 22, y: 18, rotate: 6 },
  },
  {
    // K — tags TRUE-grouped left, photos centered
    id: "K",
    order: { photos: 2, clusterA: 1, clusterB: 1 },
    photos: { x: 0, y: -6, rotate: 0 },
    tag1: { x: -16, y: 10, rotate: -4 },
    tag2: { x: -24, y: -8, rotate: 3 },
    tag3: { x: -12, y: 18, rotate: -2 },
    tag4: { x: -20, y: -16, rotate: 5 },
    icon: { x: -8, y: 22, rotate: -4 },
  },
  {
    // L — tags TRUE-grouped right, photos centered
    id: "L",
    order: { photos: 2, clusterA: 3, clusterB: 3 },
    photos: { x: 0, y: 6, rotate: 0 },
    tag1: { x: 18, y: -10, rotate: 5 },
    tag2: { x: 26, y: 6, rotate: -3 },
    tag3: { x: 14, y: -20, rotate: 2 },
    tag4: { x: 22, y: 14, rotate: -6 },
    icon: { x: 10, y: 20, rotate: 5 },
  },
];

// ── Photo collage ────────────────────────────
// Photos are stacked as a clean, perfectly aligned
// vertical filmstrip: identical left/width, ZERO
// rotation on every photo, with a fixed 4px gap
// between each. Only a single vertical "window
// offset" shifts per composition, so on each page
// load a different portion of the strip sits in
// view — all 3 photos are always at least partly
// visible, some fully, some clipped top/bottom by
// the overflow-hidden stack box.

export type PhotoPlacement = {
  /** which source photo (0,1,2) */
  photo: 0 | 1 | 2;
  top: string;
  left: string;
  width: string;
  height: string;
  rotate: number;
  z: number;
};

export type PhotoComposition = { id: string; items: PhotoPlacement[] };

// Fixed per-photo values — identical across every composition.
const PHOTO_H = 40; // each photo's height, as % of the stack box height
const GAP_PX = 4; // fixed vertical gap between photos
const PHOTO_ROTATE = 0; // no tilt — photos stay perfectly aligned
const PHOTO_Z: Record<0 | 1 | 2, number> = { 0: 1, 1: 2, 2: 3 };

// Total stack content height = 3 * PHOTO_H + 2 * GAP_PX ≈ 120% + 8px,
// against a 100%-tall box — so there's a small overflow range to
// slide within. Every offset here keeps all 3 photos at least
// partly visible; only how much of each is cropped changes.
const WINDOW_OFFSETS = [0, -6, -12, -18, -24];

const buildPhotoComposition = (id: string, windowOffset: number): PhotoComposition => ({
  id,
  items: ([0, 1, 2] as const).map((photo) => ({
    photo,
    top: `calc(${photo * PHOTO_H + windowOffset}% + ${photo * GAP_PX}px)`,
    left: "0%",
    width: "100%",
    height: `${PHOTO_H}%`,
    rotate: PHOTO_ROTATE,
    z: PHOTO_Z[photo],
  })),
});

export const photoCompositions: PhotoComposition[] = WINDOW_OFFSETS.map((offset, i) =>
  buildPhotoComposition(`p${i + 1}`, offset),
);

export const pickOne = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
