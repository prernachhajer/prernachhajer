

# Resume Page — `/resume`

## What We're Building
A dedicated `/resume` route with a clean, ATS-friendly, single-page resume layout that can be printed/saved as PDF via browser print. Linked from the portfolio nav.

## Page Structure

**Header**: Name, title, email, LinkedIn — single line, no frills.

**Summary** (3 lines): Quantified, strategic, no fluff. E.g.:
> Lead Product Designer with 12 years of experience scaling consumer platforms serving millions of daily users. Built and led ESPN Cricinfo's design system (200+ files, 40 components, 100+ variants) while driving 40% engagement lift through data-informed UX. Deep systems thinker who partners with engineering to ship fast and iterate through experimentation.

**Experience** section with quantified bullets:
- **ESPN Cricinfo** — Lead Product Designer (2021–Present)
  - Led homepage transformation → 40% engagement increase, 25% bounce rate reduction
  - Built design system from scratch — 40 core components, 100+ variants
  - Improved quality benchmarks by 30% through mentorship and process
  - Designed engagement features (polls, ratings, compare) driving 3x content discovery
  - Partnered with engineering on commentary, auction data, and fantasy stats experiences

- **Previous roles** — placeholder entries for earlier experience

**Tools & Methods**: Figma, Design Systems, A/B Testing, Analytics Collaboration, Systems Thinking, Prototyping, User Research

**Education**: Placeholder

## Technical Approach
- New file: `src/pages/Resume.tsx`
- Add route `/resume` in `App.tsx`
- Add "Resume" link in portfolio nav
- Print-optimized CSS: `@media print` styles hiding nav/footer, clean black-on-white
- A "Download PDF" button that triggers `window.print()`
- Clean typography, no animations — pure content hierarchy

