# Plan: Move eyebrow labels to bottom of cards

## Scope
Update the `src/pages/CaseStudyMatchPage.tsx` case study page only.

## Changes
1. **Groupings rationale grid** (4 cards, currently around line 323–369)
   - Move the `label` eyebrow text from the top of each card to the bottom.
   - Keep the title (`h4`) and description (`p`) at the top of the card.
   - Adjust margin/spacing so the label reads as a footer-style tag without changing the design system styling.

2. **Outcome grid** under Cross-tab content snacking (4 cards, currently around line 687–729)
   - Apply the same reorder: move the `label` eyebrow text from the top of each card to the bottom.
   - Keep the title and description above the label.

## Verification
- Build the project and confirm no TypeScript errors.
- Preview the Match Page case study to ensure the eyebrow labels appear at the bottom of all 8 cards and the visual hierarchy remains intact.