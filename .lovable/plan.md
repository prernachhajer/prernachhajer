## Fix

1. Replace `src/assets/ds-new.jpg` with the newly uploaded `Component-New1-3.jpg` (has the populated COMPONENTS - LIGHT/DARK column).
2. Update `src/components/BeforeAfterSlider.tsx`:
   - Remove the fixed `height: 733px` on the container.
   - Add an optional `aspectRatio` prop (default `1920 / 1372` to match the Cricinfo before/after assets) applied via inline `style={{ aspectRatio }}` so the box scales with width and always shows the full image.
   - Remove the JS `width: containerRef.current?.offsetWidth` hack on the before image — with a matching aspect ratio, plain `w-full h-full object-cover` on both images renders identically and the clip works cleanly.

No changes needed in `CaseStudyDesignSystem.tsx`; the slider is invoked the same way.
