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
