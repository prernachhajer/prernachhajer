

## Plan: Center Match Page thumbnail and unify border radius

**What changed**: The Match Page thumbnail (which uses `thumbContain: true`) currently has `left-[40px] right-[40px]` positioning and mixed border radii (`rounded-b-none`). We need to center it horizontally and apply uniform border radius on all corners.

**Changes in `src/pages/Index.tsx`**:

1. **Center the thumbnail container** (line 295): Replace `left-[40px] right-[40px]` with centered positioning using `left-1/2 -translate-x-1/2` and a fixed width, or use equal insets with `mx-auto`. Keep `top-[60px]` and remove `bottom-0` so it doesn't stretch to the bottom edge.

2. **Uniform border radius**: Remove `rounded-b-none` from both the outer container (line 295) and inner div (line 301), keeping `rounded-[10px]` and `rounded-[8px]` respectively on all corners.

3. **Scope changes to `thumbContain` only**: Use the existing `cs.thumbContain` conditional to apply these styles only to the Match Page card, leaving other desktop thumbnails unchanged.

**Resulting markup** (for the `thumbContain` case):
```tsx
// Outer container: centered, uniform radius
className="absolute top-[60px] bottom-[40px] left-[60px] right-[60px] rounded-[10px] p-[2px] z-[2] py-0 px-0"

// Inner div: uniform radius
className="w-full h-full rounded-[8px] overflow-hidden bg-black"

// Image: object-contain centered
className="w-full h-full object-contain block thumb-kenburns"
```

