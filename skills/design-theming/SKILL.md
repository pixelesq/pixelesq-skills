---
name: design-theming
description: Configures website visual design -- theme colors, typography, spacing, and section selection for cohesive brand presentation. Use when editing themes, choosing fonts, adjusting colors, or planning page visual composition.
license: MIT
metadata:
  author: pixelesq
  version: "1.0"
---

# Pixelesq Design & Theming

## Theme System Overview

Every Pixelesq project has a theme controlling the visual foundation. Use `get_theme` to read current values and `update_theme` to modify them.

### Theme variables

```
variables: {
  appearance: "light" | "dark",
  color: {
    accent: string,       // Primary brand color (CTAs, highlights, links)
    gray: string,         // Text, borders, subtle backgrounds
    background: string    // Page background
  },
  font: {
    defaultFontFamily: string,   // Body text font
    headingFontFamily: string    // Heading font (optional override)
  },
  fontSize: { scale: string },   // Type scale ratio
  fontWeight: { ... },           // Weight mappings
  radius: string,                // Border radius (none, small, medium, large, full)
  scaling: string,               // Global size multiplier
  spacing: string,               // Padding/margin base
  container: string              // Max content width
}
```

## Color Strategy

### The three color roles

- **Accent** -- the primary brand color. Applied to buttons, links, highlights, active states. This is the color users associate with the brand. Pick based on brand identity, not personal preference.
- **Gray** -- text color, borders, dividers, secondary elements. Determines readability and visual hierarchy. Neutral tones (slate, gray, zinc) work for most sites. Warmer tones (stone, sand) for lifestyle brands.
- **Background** -- page canvas color. White/light for clean modern feel. Dark for tech/creative. Subtle tints for warmth.

### Color selection by industry

- **SaaS / Tech**: Blue or violet accent, slate gray, white background
- **Creative / Design**: Bold accent (orange, pink, cyan), neutral gray, white or dark bg
- **Finance / Legal**: Navy or emerald accent, cool gray, white background
- **Health / Wellness**: Teal or green accent, warm gray, white or light background
- **Food / Hospitality**: Warm accent (amber, orange, red), warm gray, cream background
- **E-commerce**: Accent matching brand logo, neutral gray, white background

### Light vs Dark appearance

- **Light**: Better for content-heavy sites, blogs, professional services. Higher readability for long text. Use when the audience expects a traditional web experience.
- **Dark**: Suits tech products, creative portfolios, entertainment. Reduces eye strain in low-light. Use when the brand has a modern/edgy identity.

## Typography

### Font pairing principles

- Pair a **display/heading** font with a **body** font
- Contrast is key: pair serif headings with sans-serif body, or a bold geometric sans with a clean readable sans
- Both fonts should share similar proportions (x-height, letter spacing)
- Avoid pairing two fonts that are too similar -- they'll look like a mistake

### Quick pairing recommendations

**Modern & Clean:** `Montserrat` (headings) + `Inter` (body)
**Elegant & Refined:** `Playfair Display` (headings) + `Lora` (body)
**Bold & Contemporary:** `Space Grotesk` (headings) + `DM Sans` (body)
**Friendly & Approachable:** `Nunito` (headings) + `Open Sans` (body)
**Professional & Trustworthy:** `Merriweather` (headings) + `Source Sans Pro` (body)

For the complete font catalog (40+ fonts) with pairings by brand personality, see [references/font-pairings.md](references/font-pairings.md).

### Typography settings

- `defaultFontFamily` -- the body text font, used everywhere unless overridden
- `headingFontFamily` -- optional heading override. If empty, headings use the body font.
- `fontSize.scale` -- controls the ratio between heading sizes. Larger scale = more dramatic hierarchy.
- Set both fonts when the design calls for contrast. Use a single font when the brand is minimal/uniform.

## Section Selection by Visual Intent

Choose sections not just by content type, but by the visual effect you want:

### High visual impact
StickyFeatures, HeroWithMediaBg, MediaBentoCards, HeroWithMediaInset -- immersive, scrollytelling, full-bleed

### Clean and structured
IconFeatures, SimpleHero, CardWithMedia, TextGrid -- organized, professional, easy to scan

### Dynamic and engaging
FeaturesCarousel, TestimonialSlider, MediaCardSlider, MovingLogos -- motion, interaction, energy

### Dense information
PqPricingTable, FaqsInGrid, MediaGridAlt, BentoCards -- lots of content in compact space

### Minimal and focused
SimpleHero, Banner, JustStats, SimpleMedia -- single message, maximum whitespace

For the complete visual guide with all 50+ sections, see [references/section-visual-guide.md](references/section-visual-guide.md).

## Page Composition

### Visual flow principles

1. **Start strong** -- the hero sets the visual tone. Full-bleed heroes (HeroWithMediaBg) create drama. Contained heroes (HeroCard) create sophistication.
2. **Alternate density** -- follow content-heavy sections with visual breathing room. After a feature grid, place a single testimonial or stat.
3. **Build momentum** -- increase engagement intensity toward the CTA. StickyFeatures or carousels create scroll momentum.
4. **End with clarity** -- the final section before the footer should have a clear CTA with minimal distraction.

### Composition by page type

**Landing page (conversion):**
High-impact hero -> logo strip -> sticky features -> stats -> testimonials -> FAQ -> CTA banner
Visual character: dramatic opening, building trust, removing objections, clear exit action.

**Content page (information):**
Simple hero -> card sections -> text grid -> media grid -> CTA
Visual character: clean, readable, structured, professional.

**Portfolio page (showcase):**
Full-bleed hero -> bento grid -> case study cards -> stats -> testimonial -> CTA
Visual character: visual-first, dramatic, proof-driven.

**Blog listing:**
Blog hero -> media cards (grid) -> newsletter CTA
Visual character: clean, scannable, content-forward.

## Applying Theme Changes

### Workflow

1. `get_theme` to read current variables
2. `get_project` to understand brand context
3. Propose changes with rationale (e.g., "Changing accent from blue to teal to better match your wellness brand")
4. `update_theme` with the modified variables object
5. Changes apply globally -- all pages using this theme update immediately

### What to change and when

- **Accent color**: when the current color doesn't match brand identity or has poor contrast
- **Fonts**: when readability is poor or the typography doesn't match brand personality
- **Radius**: `none` for corporate, `small` for clean, `medium` for friendly, `large/full` for playful
- **Appearance**: switch only with user confirmation -- it affects the entire site
- **Spacing**: affects whitespace globally. Increase for luxury/editorial feel, decrease for dense/data-heavy sites.

### Safety

Theme changes are global and immediate. Always:
- Show the user what will change before executing
- Explain the visual impact
- Confirm before applying
