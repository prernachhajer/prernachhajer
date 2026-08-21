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
    photos: { x: 0, y: 0, rotate: -1 },
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
    photos: { x: 0, y: 0, rotate: 1.5 },
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
    photos: { x: 0, y: 6, rotate: -2 },
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
    photos: { x: 0, y: -4, rotate: 2 },
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
    photos: { x: 0, y: 4, rotate: -1.5 },
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
    photos: { x: 0, y: -2, rotate: 2.5 },
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
    photos: { x: 0, y: 8, rotate: -3 },
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
    photos: { x: 0, y: 2, rotate: -2.5 },
    tag1: { x: 16, y: 10, rotate: -6 },
    tag2: { x: 28, y: -6, rotate: 2 },
    tag3: { x: -10, y: 16, rotate: 5 },
    tag4: { x: 22, y: 20, rotate: -3 },
    icon: { x: -16, y: 10, rotate: -5 },
  },
];

// ── Photo collage ────────────────────────────
// Each photo is absolutely positioned inside an
// overflow-hidden stack, so some are partially
// clipped. Values are % of the stack box.

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

export const photoCompositions: PhotoComposition[] = [
  {
    id: "p1", // photo2 full, 1 & 3 partly clipped
    items: [
      { photo: 0, top: "-14%", left: "-8%", width: "78%", rotate: -4, z: 1 },
      { photo: 1, top: "22%", left: "6%", width: "94%", rotate: 2, z: 3 },
      { photo: 2, top: "72%", left: "24%", width: "82%", rotate: -2, z: 2 },
    ],
  },
  {
    id: "p2", // photo3 full
    items: [
      { photo: 2, top: "16%", left: "2%", width: "96%", rotate: -2, z: 3 },
      { photo: 1, top: "-10%", left: "22%", width: "76%", rotate: 4, z: 2 },
      { photo: 0, top: "70%", left: "-12%", width: "80%", rotate: -6, z: 1 },
    ],
  },
  {
    id: "p3", // photo1 full, centred
    items: [
      { photo: 0, top: "26%", left: "4%", width: "92%", rotate: 2, z: 3 },
      { photo: 2, top: "-8%", left: "-6%", width: "72%", rotate: -4, z: 2 },
      { photo: 1, top: "66%", left: "28%", width: "84%", rotate: 6, z: 1 },
    ],
  },
  {
    id: "p4", // tight overlap stack
    items: [
      { photo: 1, top: "8%", left: "0%", width: "88%", rotate: -3, z: 3 },
      { photo: 0, top: "40%", left: "18%", width: "86%", rotate: 4, z: 2 },
      { photo: 2, top: "68%", left: "-16%", width: "78%", rotate: -2, z: 1 },
    ],
  },
  {
    id: "p5", // thrown-on-a-table feel
    items: [
      { photo: 2, top: "30%", left: "8%", width: "90%", rotate: 5, z: 3 },
      { photo: 0, top: "4%", left: "16%", width: "74%", rotate: -5, z: 1 },
      { photo: 1, top: "72%", left: "-4%", width: "88%", rotate: 2, z: 2 },
    ],
  },
  {
    id: "p6",
    items: [
      { photo: 0, top: "18%", left: "10%", width: "88%", rotate: -2, z: 2 },
      { photo: 2, top: "56%", left: "-10%", width: "84%", rotate: 4, z: 3 },
      { photo: 1, top: "-12%", left: "-4%", width: "70%", rotate: 6, z: 1 },
    ],
  },
];

export const pickOne = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
