// ─────────────────────────────────────────────
// HERO COMPOSITIONS
// ─────────────────────────────────────────────
// One hero composition + one photo composition are
// picked at random on every page load.
//
// IMPORTANT:
// The large-scale layout position of photos / cluster A /
// cluster B is controlled by the main hero layout.
// These values are only used for subtle landing offsets
// and rotation.
//
// This prevents the random composition from moving entire
// groups across the page and accidentally causing overlaps.
//
// The actual animation / landing correction is handled by
// HeroDrop + useHeroLayoutGuard.
// ─────────────────────────────────────────────

export type Offset = {
  x: number;
  y: number;
  rotate: number;
};

export type HeroComposition = {
  id: string;

  photos: Offset;
  tag1: Offset;
  tag2: Offset;
  tag3: Offset;
  tag4: Offset;
  icon: Offset;
};

// ─────────────────────────────────────────────
// HERO COMPOSITIONS
// ─────────────────────────────────────────────
//
// Keep the variation relatively small.
//
// These values do NOT control the main left / center / right
// layout. The main hero layout handles that.
//
// They only provide subtle landing variation and rotation.
// ─────────────────────────────────────────────

export const heroCompositions: HeroComposition[] = [
  {
    id: "A",

    photos: {
      x: -12,
      y: 0,
      rotate: 0,
    },

    tag1: {
      x: -8,
      y: -8,
      rotate: -3,
    },

    tag2: {
      x: 8,
      y: 10,
      rotate: 2,
    },

    tag3: {
      x: -8,
      y: 4,
      rotate: 3,
    },

    tag4: {
      x: 10,
      y: 14,
      rotate: -2,
    },

    icon: {
      x: -8,
      y: 18,
      rotate: 6,
    },
  },

  {
    id: "B",

    photos: {
      x: -8,
      y: 0,
      rotate: 0,
    },

    tag1: {
      x: 10,
      y: -10,
      rotate: 2.5,
    },

    tag2: {
      x: -8,
      y: 12,
      rotate: -4,
    },

    tag3: {
      x: 10,
      y: 6,
      rotate: -2,
    },

    tag4: {
      x: -6,
      y: 18,
      rotate: 4,
    },

    icon: {
      x: 8,
      y: 20,
      rotate: -6,
    },
  },

  {
    id: "C",

    photos: {
      x: 0,
      y: 6,
      rotate: 0,
    },

    tag1: {
      x: -12,
      y: 0,
      rotate: -5,
    },

    tag2: {
      x: -8,
      y: 16,
      rotate: 3,
    },

    tag3: {
      x: 12,
      y: -6,
      rotate: 4,
    },

    tag4: {
      x: 10,
      y: 12,
      rotate: -3,
    },

    icon: {
      x: 6,
      y: 22,
      rotate: 5,
    },
  },

  {
    id: "D",

    photos: {
      x: 0,
      y: -4,
      rotate: 0,
    },

    tag1: {
      x: 8,
      y: 14,
      rotate: 4,
    },

    tag2: {
      x: -8,
      y: -6,
      rotate: -2,
    },

    tag3: {
      x: -10,
      y: 10,
      rotate: 2,
    },

    tag4: {
      x: 10,
      y: -8,
      rotate: -5,
    },

    icon: {
      x: -6,
      y: 24,
      rotate: 3,
    },
  },

  {
    id: "E",

    photos: {
      x: 10,
      y: 4,
      rotate: 0,
    },

    tag1: {
      x: -10,
      y: 6,
      rotate: 3,
    },

    tag2: {
      x: -6,
      y: 20,
      rotate: -3,
    },

    tag3: {
      x: 6,
      y: -10,
      rotate: -4,
    },

    tag4: {
      x: 10,
      y: 8,
      rotate: 5,
    },

    icon: {
      x: 0,
      y: 26,
      rotate: -6,
    },
  },

  {
    id: "F",

    photos: {
      x: 14,
      y: -2,
      rotate: 0,
    },

    tag1: {
      x: 12,
      y: -4,
      rotate: -2,
    },

    tag2: {
      x: 8,
      y: 16,
      rotate: 4,
    },

    tag3: {
      x: 14,
      y: 8,
      rotate: 3,
    },

    tag4: {
      x: 6,
      y: 22,
      rotate: -4,
    },

    icon: {
      x: 10,
      y: 14,
      rotate: 6,
    },
  },

  {
    id: "G",

    photos: {
      x: -12,
      y: 8,
      rotate: 0,
    },

    tag1: {
      x: -6,
      y: -12,
      rotate: 5,
    },

    tag2: {
      x: -4,
      y: 8,
      rotate: -5,
    },

    tag3: {
      x: 8,
      y: 18,
      rotate: 2,
    },

    tag4: {
      x: -10,
      y: 24,
      rotate: -2,
    },

    icon: {
      x: 12,
      y: 6,
      rotate: 4,
    },
  },

  {
    id: "H",

    photos: {
      x: 14,
      y: 2,
      rotate: 0,
    },

    tag1: {
      x: 8,
      y: 10,
      rotate: -6,
    },

    tag2: {
      x: 12,
      y: -6,
      rotate: 2,
    },

    tag3: {
      x: -8,
      y: 16,
      rotate: 5,
    },

    tag4: {
      x: 10,
      y: 20,
      rotate: -3,
    },

    icon: {
      x: -8,
      y: 10,
      rotate: -5,
    },
  },

  {
    id: "I",

    photos: {
      x: 10,
      y: 0,
      rotate: 0,
    },

    tag1: {
      x: -8,
      y: -6,
      rotate: -3,
    },

    tag2: {
      x: -12,
      y: 8,
      rotate: 2,
    },

    tag3: {
      x: -10,
      y: 20,
      rotate: -2,
    },

    tag4: {
      x: -6,
      y: -14,
      rotate: 4,
    },

    icon: {
      x: -10,
      y: 14,
      rotate: -5,
    },
  },

  {
    id: "J",

    photos: {
      x: -12,
      y: 4,
      rotate: 0,
    },

    tag1: {
      x: 8,
      y: -8,
      rotate: 4,
    },

    tag2: {
      x: 12,
      y: 10,
      rotate: -3,
    },

    tag3: {
      x: 10,
      y: -18,
      rotate: 2,
    },

    tag4: {
      x: 6,
      y: 16,
      rotate: -5,
    },

    icon: {
      x: 10,
      y: 18,
      rotate: 6,
    },
  },

  {
    id: "K",

    photos: {
      x: 0,
      y: -6,
      rotate: 0,
    },

    tag1: {
      x: -8,
      y: 10,
      rotate: -4,
    },

    tag2: {
      x: -12,
      y: -8,
      rotate: 3,
    },

    tag3: {
      x: -6,
      y: 18,
      rotate: -2,
    },

    tag4: {
      x: -10,
      y: -16,
      rotate: 5,
    },

    icon: {
      x: -6,
      y: 22,
      rotate: -4,
    },
  },

  {
    id: "L",

    photos: {
      x: 0,
      y: 6,
      rotate: 0,
    },

    tag1: {
      x: 10,
      y: -10,
      rotate: 5,
    },

    tag2: {
      x: 12,
      y: 6,
      rotate: -3,
    },

    tag3: {
      x: 8,
      y: -20,
      rotate: 2,
    },

    tag4: {
      x: 10,
      y: 14,
      rotate: -6,
    },

    icon: {
      x: 6,
      y: 20,
      rotate: 5,
    },
  },
];

// ─────────────────────────────────────────────
// PHOTO COLLAGE
// ─────────────────────────────────────────────
//
// Three photos.
//
// IMPORTANT:
// - Each photo is exactly 1:1.
// - Each photo is exactly 160px × 160px.
// - Photos never overlap.
// - Photos are vertically stacked.
// - There is a fixed 10px gap.
// - The complete photo stack is exactly 500px tall.
//
// Layout:
//
//   ┌───────────────┐
//   │    PHOTO 1    │ 160px
//   └───────────────┘
//         10px
//   ┌───────────────┐
//   │    PHOTO 2    │ 160px
//   └───────────────┘
//         10px
//   ┌───────────────┐
//   │    PHOTO 3    │ 160px
//   └───────────────┘
//
// Total: 160 + 10 + 160 + 10 + 160 = 500px
//
// The main HeroDrop container is responsible for
// providing the 500px × 160px space.
//
// ─────────────────────────────────────────────

export type PhotoPlacement = {
  /** Which source photo (0, 1, 2) */
  photo: 0 | 1 | 2;

  top: string;
  left: string;
  width: string;
  height: string;

  rotate: number;
  z: number;
};

export type PhotoComposition = {
  id: string;
  items: PhotoPlacement[];
};

// ─────────────────────────────────────────────
// PHOTO SETTINGS
// ─────────────────────────────────────────────

const PHOTO_SIZE = 140;

const GAP_PX = 8;

const PHOTO_ROTATE = 0;

const PHOTO_Z: Record<0 | 1 | 2, number> = {
  0: 1,
  1: 2,
  2: 3,
};

// ─────────────────────────────────────────────
// PHOTO COMPOSITION BUILDER
// ─────────────────────────────────────────────
//
// No percentage positioning here.
//
// Each image gets an explicit pixel position:
//
// Photo 1 → 0px
// Photo 2 → 170px
// Photo 3 → 340px
//
// This guarantees that the images cannot overlap.
//
// ─────────────────────────────────────────────

const buildPhotoComposition = (id: string): PhotoComposition => ({
  id,

  items: ([0, 1, 2] as const).map((photo) => ({
    photo,

    top: `${photo * (PHOTO_SIZE + GAP_PX)}px`,

    left: "0px",

    width: `${PHOTO_SIZE}px`,

    height: `${PHOTO_SIZE}px`,

    rotate: PHOTO_ROTATE,

    z: PHOTO_Z[photo],
  })),
});

// ─────────────────────────────────────────────
// PHOTO COMPOSITIONS
// ─────────────────────────────────────────────
//
// We are intentionally NOT changing the vertical
// position randomly anymore.
//
// The three photos must always remain:
//
// 1 → 2 → 3
//
// vertically aligned and non-overlapping.
//
// We still keep multiple composition IDs so the
// existing random-picking architecture continues
// to work without changing the rest of the app.
//
// ─────────────────────────────────────────────

export const photoCompositions: PhotoComposition[] = [
  buildPhotoComposition("p1"),
  buildPhotoComposition("p2"),
  buildPhotoComposition("p3"),
  buildPhotoComposition("p4"),
  buildPhotoComposition("p5"),
];

// ─────────────────────────────────────────────
// RANDOM PICKER
// ─────────────────────────────────────────────

export const pickOne = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
