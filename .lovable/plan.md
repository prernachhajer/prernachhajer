## Problem

In the "This is what we inherited" section of the Cricinfo case study, the mobile phone mockup uses a fixed container height (540px matching desktop) and a width of 150–170px. This produces an aspect ratio of roughly 1 : 3.1, which is far taller and narrower than a real phone (iPhone 15 Pro is ~1 : 2.16).

## Fix

Edit `src/pages/CaseStudyCricinfo.tsx` (lines ~94–105) so the mobile stencil uses a realistic phone aspect ratio instead of stretching to the parent's height:

- Widen the phone frame slightly and drive its height from `aspect-[9/19.5]` (iPhone-accurate) instead of `h-full`.
- Keep the outer flex container as-is (desktop still fills 540px); anchor the phone with `self-end` so it sits flush at the bottom edge like today.
- Preserve notch, home indicator, padding, shadow, scroll behavior, and the scrollable screenshot inside.
- No changes to the desktop browser mock, the 2021 caption, or any other section.

## Technical details

```text
Before: w-[150px] md:w-[170px] h-full  → ~1 : 3.1
After:  w-[190px] md:w-[210px] aspect-[9/19.5] self-end  → ~1 : 2.17
```

The inner screen keeps `flex-1 min-h-0 overflow-y-auto` so the long 2021 mobile screenshot still scrolls inside the frame.

## Out of scope

- Desktop browser mockup dimensions
- Section padding, background, or copy
- Any other page or component
