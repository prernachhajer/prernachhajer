Update the Homepage case study's 2021 desktop image with the uploaded asset at full quality.

What will change
1. Replace the current local binary `src/assets/cricinfo-desk-2021.jpg` with a CDN-backed asset pointer created from the uploaded `2021-home-desktop-2.jpg`. The Lovable Assets CLI preserves the original file bytes, so no compression is applied.
2. Update the image import in `src/components/HomepageEvolutionCarousel.tsx` and `src/pages/CaseStudyHomepage.tsx` to use the new asset pointer URL.
3. Remove the old `src/assets/cricinfo-desk-2021.jpg` file from the repository.
4. Run the build to confirm the image swap compiles and renders correctly.

Technical details
- The new image will be uploaded via `lovable-assets create --file /mnt/user-uploads/2021-home-desktop-2.jpg` and the resulting JSON pointer will be saved to `src/assets/cricinfo-desk-2021.jpg.asset.json`.
- Both existing imports are currently aliased as `desk2021`; they will be repointed to import the `.asset.json` and read its `.url` property.
- No other timeline years, file names, or case study text will be changed.
