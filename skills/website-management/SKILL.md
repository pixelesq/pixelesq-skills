---
name: Website Management
description: Expert guidance for managing Pixelesq websites — creating pages with sections, managing content collections, monitoring SEO, and maintaining site structure through natural conversation. Use when working with Pixelesq projects, pages, sections, or site settings.
---

# Pixelesq Website Management

You are connected to a Pixelesq website management server. Use this knowledge to help users create, edit, and manage their websites effectively.

## Getting Started

Always begin by identifying the user's project:
1. Call `list_projects` to see all available projects
2. Ask the user which project they want to work with if they have multiple
3. Use the project ID for all subsequent tool calls

## Creating Pages

When a user wants a new page:

1. Call `create_page` with a descriptive name and URL-friendly slug
2. Browse section types with `list_section_types` — filter by group to find the right fit:
   - **hero** — Landing page headers with headlines, CTAs, and media (HeroWithMedia, HeroWithMediaBg, HeroCard, SimpleHero)
   - **features** — Product/service showcases with cards, icons, or sticky scroll (StickyFeatures, CardsWithIcons, IconFeatures, FeaturesCarousel)
   - **content** — Informational sections like how-it-works, media grids, bento cards (HowItWorks, MediaBentoCards, CardWithMedia, TextGrid)
   - **faqs** — Question and answer sections (Faqs, FaqsOnCard, FaqsInGrid, FaqsWithMedia)
   - **testimonials** — Social proof sections (TestimonialGrid, TestimonialSlider, TestimonialsWithLogos)
   - **pricing** — Pricing tables and cards (PqPricing, PqPricingTable)
   - **form** — Contact forms and lead capture (SimpleForm, FormInCard)
   - **stats** — Metrics and numbers (JustStats, StatsOnCard)
   - **logos** — Client or partner logos (LogoGrid, MovingLogos)
   - **cta** — Call-to-action banners (Banner, SimpleCard)
3. For each section, call `get_section_defaults` to get the exact data structure
4. Modify the defaults — replace placeholder text in `ctx` fields while keeping the `cfg` layout intact:
   - `ctx.title.value` — Main heading text
   - `ctx.subtitle.value` — Secondary heading
   - `ctx.desc.value` — Body/description text
   - `ctx.ctas[].label` and `ctx.ctas[].url` — Button text and links
   - `ctx.media[].src` and `ctx.media[].alt` — Image URLs and alt text
   - `ctx.items[]` — Repeated items (features, FAQs, testimonials) with their own title, desc, media, icons
5. Call `save_page_content` with all sections. Always include the `lastVersion` from the page's latest revision.
6. Call `update_page_meta` to set the SEO title, description, and Open Graph image
7. Offer to publish with `publish_page` — requires the latest revision ID

### Section structure

Every section follows this pattern:
```json
{
  "id": "uuid",
  "name": "SectionTypeName",
  "type": "uislice",
  "uislices": [{
    "id": "same-uuid",
    "type": "SectionTypeName",
    "props": {
      "ctx": { /* content: title, desc, ctas, media, items */ },
      "cfg": { /* layout: section, grid, textsBox, mediaBox */ }
    }
  }]
}
```

Generate a new UUID for each section's `id` and matching `uislices[0].id`.

## Editing Pages

When a user wants to modify an existing page:

1. Call `get_page_content` to read the current sections with all text content
2. Identify which sections need changes
3. Modify only the relevant content fields — keep `cfg` layout settings unchanged unless the user specifically asks for layout changes
4. Call `save_page_content` with the complete sections array (including unchanged sections)
5. Always use the current `lastVersion` for conflict detection

## Managing Collections and Entries

Collections are structured content types (blog posts, team members, products, case studies).

1. Call `list_collections` to see what content types exist and their field schemas
2. Before creating or editing entries, call `get_collection` to see the exact field schema — each field has a `name`, `type`, and `required` flag
3. Match content to the schema when calling `create_entry` or `save_entry_content`:
   - **text** fields: plain string
   - **html** fields: use `<p>`, `<strong>`, `<em>`, `<ul>`, `<ol>`, `<li>`, `<a href="">` tags
   - **number** fields: numeric values
   - **boolean** fields: true/false
   - **date** fields: ISO date strings
   - **image** fields: URL strings
   - **reference** fields: ID of another entry
4. Always use `lastVersion` from the entry's latest revision when saving content
5. After saving, offer to publish with `publish_entry` using the latest revision ID

### Collections with pages

Some collections have `hasPages: true` — each entry automatically gets its own page rendered through the collection's template. Blog posts are a common example. For these, the entry content populates the page automatically.

## Project Context

The project's context (available via `get_project`) contains brand information:
- **siteProfile**: industry, title, description, tagline — use this to match the brand voice when generating content
- **audienceStrategy**: personas, goals, user intent — use this to tailor content to the target audience
- **contentGeneration**: tone, formality, reading level, brand personality — follow these when writing copy

Always check the project context before generating content to ensure it matches the brand.

## Best Practices

- Always confirm with the user before publishing or deleting content
- Show a summary of what you're about to create before calling write tools
- When creating pages, suggest an appropriate page structure based on the page's purpose
- After creating content, always suggest setting meta descriptions for SEO
- Use `list_assets` to find existing images before suggesting new media URLs
- Keep section ordering logical: header -> hero -> content sections -> CTA -> footer
