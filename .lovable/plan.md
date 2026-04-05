

## Plan: Place Match Page thumbnail directly on gradient

**Goal**: Remove the intermediate black background container and place the PNG image directly on the card's gradient background, so the image floats naturally on the gradient.

**Changes in `src/pages/Index.tsx`**:

1. **When `thumbContain` is true** (line 295-309): Remove the outer border/shadow container and the inner `bg-black` wrapper. Instead, render the image directly as an absolutely positioned element on the gradient card.

2. **Updated markup for `thumbContain` case**:
```tsx
// Replace the current container+wrapper+img with a single img
<img
  src={cs.thumbImage}
  alt={`${cs.company} preview`}
  className="absolute top-[60px] bottom-[40px] left-[60px] right-[60px] z-[2] object-contain thumb-kenburns"
/>
```

This removes the `rounded-[10px]` border container, the `boxShadow`, and the `bg-black` inner div — the PNG sits directly on the gradient with glow orbs visible behind/around it. The non-`thumbContain` thumbnails remain unchanged.

