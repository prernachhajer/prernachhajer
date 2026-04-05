

## Plan: Change Design System thumbnail to cross-platform style

**Goal**: Update the Design System case study card (02/04) to use the same cross-platform thumbnail layout as the Homepage card — a desktop mockup centered with a mobile mockup overlapping at the bottom-right corner.

**Changes in `src/pages/Index.tsx`**:

1. **Update the case study data** (lines 43-55): Change `thumbType` from `"desktop"` to `"cross-platform"`, add `thumbDesktop` and `thumbMobile` properties pointing to `cricinfoDesktop` and `cricinfoMobile` (same images used by the Homepage card).

2. **Remove unused `thumbImage`** from this entry since the cross-platform type uses `thumbDesktop` and `thumbMobile` instead.

**Updated data entry**:
```tsx
{
  num: "02 / 04",
  company: "ESPN Cricinfo",
  title: "Building the",
  titleEm: "Backbone",
  desc: "...",
  tags: ["Design System", "Systems Thinking", "Figma"],
  thumbType: "cross-platform" as const,
  thumbImage: thumbDesignSystem,
  thumbDesktop: cricinfoDesktop,
  thumbMobile: cricinfoMobile,
  statNum: "170+",
  statLabel: "files in system",
  link: "/case-study/design-system",
}
```

No rendering logic changes needed — the existing cross-platform rendering block (lines 337-372) handles the desktop + mobile layout already.

