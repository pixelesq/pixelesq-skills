---
name: design-theming
description: Configures a Pixelesq site's visual design through the theme (colors, typography, spacing, radius, appearance) and chooses sections by the look they produce. Use when the user wants to restyle a site, change fonts or colors, review visual composition, or pick sections for a particular visual effect.
license: MIT
metadata:
  author: pixelesq
  version: "3.0"
---

# Pixelesq Design and Theming

## The theme

Every project has an active theme. `get_theme` returns its `id`, `variables` (what the live site renders), `hasUnpublishedDraft`, and `draftVariables` when the theme editor holds staged changes. `update_theme` takes the `themeId`, a `variables` patch and `publish`.

The variables object, as the server returns it:

```
appearance: "light" | "dark"
radius: "none" | "small" | "medium" | "large" | "full"
scaling: "90%" | "95%" | "100%" | "105%" | "110%"
font: { defaultFontFamily, headingFontFamily }
color: { accent, background, gray, accentScale[], grayScale[], accentSurface, accentContrast }
spacing: [9 steps]          fontSize: [9 steps]        fontWeight: [4 steps]
lineHeight: [9 steps]       headingLineHeight: [9 steps]   letterSpacing: [9 steps]
container: [4 max widths]
```

Send only what changes: `{ color: { accent: "#0F766E" } }` leaves everything else alone. Arrays are replaced whole, so send all steps when you change one. `publish` defaults to true and restyles the live site at once; pass `publish: false` to stage a draft the user reviews in the theme editor. If a draft already exists, your change layers on it.

## Color

- **Accent** carries the brand: buttons, links, highlights. Take it from the logo or the brand guide, not from taste.
- **Gray** sets text, borders and quiet backgrounds: cool grays for tech, warm grays for lifestyle and food.
- **Background** is the canvas: white or near-white for content-heavy sites, dark for products and portfolios that want drama.
- `accentScale` and `grayScale` accept full twelve-step scales for brands that ship their own palette; otherwise leave them and let the accent generate the scale.

By industry, as a starting point: SaaS and tech, blue or violet on slate; creative, a bold orange, pink or cyan; finance and legal, navy or emerald; health, teal or green on warm gray; food and hospitality, amber or red on cream; commerce, the logo color on neutral gray.

**Appearance** changes the whole site and only switches with explicit approval.

## Typography

`font.defaultFontFamily` is the body font and `font.headingFontFamily` the optional heading override; when the override is empty, headings use the body font. Pair a display face with a readable body face and keep proportions close. Pairings by brand personality and the full font list are in [references/font-pairings.md](references/font-pairings.md). Use one family when the brand is minimal.

## Shape and rhythm

- **radius**: `none` for corporate, `small` for clean, `medium` for friendly, `large` or `full` for playful.
- **scaling** nudges every size together; use it before touching individual scales.
- **spacing** widens or tightens the rhythm site-wide; wider for editorial and luxury, tighter for dense product pages.
- **container** sets the four content widths from narrow reading columns to full layouts.

## Choosing sections by look

The catalog grouped by visual effect is in [references/section-visual-guide.md](references/section-visual-guide.md), generated from the live server. In short: full-bleed heroes and media grids for impact; cards and icon grids for structure; sticky and tabbed sections for momentum; rolling and moving sections for energy, one per screen; simple heroes, banners and single stats for focus.

## Composition

1. Open with a hero that sets the tone: full-bleed for drama, card for restraint, `HeroSocialProof` or `HeroWithStats` when proof is the message.
2. Alternate dense and quiet sections; a `SectionDivider` or a single `Testimonial` after a grid.
3. Build momentum toward the close and end on one clear call to action.
4. Check the phone layout for sliders and sticky sections before publishing.

Page-type recipes: landing (impact hero, logos, sticky features, stats, testimonials, FAQ, banner), content (simple hero, cards, text grid, media grid, CTA), portfolio (full-bleed hero, bento grid, stats, testimonial, CTA), blog listing (blog hero, media cards, newsletter form).

## Workflow and safety

1. `get_theme` and `get_project` first.
2. Propose the change with the rationale and the before and after values.
3. Apply with `update_theme`, staging with `publish: false` unless the user asked for it to go live now.
4. Theme changes touch every page. Confirm before publishing.
