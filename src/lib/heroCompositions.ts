// ─────────────────────────────────────────────
// HERO COMPOSITIONS
// ─────────────────────────────────────────────
// One hero composition + one photo composition are
// picked at random on every page load.
//
// IMPORTANT:
// The large-scale layout position of photos / cluster A /
// cluster B is now controlled by the main hero layout.
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

  /**
   * Small landing offsets per element.
   *
   * These are NOT responsible for deciding whether an
   * element belongs on the left / center / right.
   *
   * The main hero layout now controls that.
   *
   * x / y = subtle positional variation
   * rotate = playful final rotation
   */
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
// The previous values such as x: -220 / +260 were
// effectively moving entire groups across the page.
// That made collisions much more likely because the
// flex layout still reserved the original space.
//
// Now the main layout establishes:
//
//   cluster A → left
//   photos    → center
//   cluster B → right
//
// These values simply add personality to the landing.
//
// ─────────────────────────────────────────────

export const heroCompositions: HeroComposition[] = [
  {
    // A — subtle variation
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
    // B — subtle variation
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
    // C — slightly more centered
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
    // D — tags slightly closer to their landing zones
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
    // E — slightly more horizontal variation
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
    // F — stronger personality without moving groups
    // outside their assigned zones
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
    // G — left-biased subtle variation
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
    // H — right-biased subtle variation
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
    // I — grouped-left feeling
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
    // J — grouped-right feeling
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
    // K — grouped-left + centered photos
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
    // L — grouped-right + centered photos
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
// Photos remain a clean, aligned vertical filmstrip.
//
// Each photo:
// - has identical width
// - has identical height
// - has zero rotation
// - has a fixed 4px gap
//
// Only the vertical window position changes randomly.
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

const PHOTO_H = 40;

const GAP_PX = 4;

const PHOTO_ROTATE = 0;

const PHOTO_Z: Record<0 | 1 | 2, number> = {
  0: 1,
  1: 2,
  2: 3,
};

// ─────────────────────────────────────────────
// PHOTO WINDOW POSITIONS
// ─────────────────────────────────────────────
//
// The collage is slightly taller than its visible
// container, allowing us to move the filmstrip vertically
// while keeping all three photos at least partially visible.
//
// ─────────────────────────────────────────────

const WINDOW_OFFSETS = [0, -6, -12, -18, -24];

// ─────────────────────────────────────────────
// BUILD PHOTO COMPOSITION
// ─────────────────────────────────────────────

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

// ─────────────────────────────────────────────
// PHOTO COMPOSITIONS
// ─────────────────────────────────────────────

export const photoCompositions: PhotoComposition[] = WINDOW_OFFSETS.map((offset, i) =>
  buildPhotoComposition(`p${i + 1}`, offset),
);

// ─────────────────────────────────────────────
// RANDOM PICKER
// ─────────────────────────────────────────────

export const pickOne = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
