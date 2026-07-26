## Fix — Component rebuild · 2022 slider

The two images used by this slider have different aspect ratios (`component-old.jpg` = 1920×1383, `component-new.jpg` = 1920×789), so `object-cover` crops one of them. To keep both fully visible and centered:

1. In `src/components/BeforeAfterSlider.tsx`, add an optional `fit?: "cover" | "contain"` prop (default `"cover"`). When `fit` is `"contain"`:
   - Use `object-contain object-center` on both images.
   - Use `w-full` on the clipped "before" image (drop the pixel-width hack) so it scales to the container.
2. In `src/pages/CaseStudyDesignSystem.tsx` at line 342, pass `fit="contain"` and set `aspectRatio={1920 / 1383}` on the Component rebuild slider so the taller image fits without cropping and the wider one is letterboxed and centered.

No change to the first (Cricinfo Figma Library) slider.
