---
name: website-management
description: Manages Pixelesq websites -- creating and editing pages with sections, managing partials, forms, collections, domains, and assets. Use when working with Pixelesq site structure, pages, templates, or project configuration.
license: MIT
metadata:
  author: pixelesq
  version: "2.0"
---

# Pixelesq Website Management

## Getting Started

1. Call `list_projects` to see available projects
2. Call `get_project` with the project ID to load context:
   - `setting.context.siteProfile` -- brand identity, industry, tagline
   - `setting.context.audienceStrategy` -- personas, goals, user intent
   - `setting.context.contentGeneration` -- tone, formality, reading level
3. Use the project ID for all subsequent calls

## Page Lifecycle

### Create and populate

1. `create_page` with descriptive name and URL-friendly slug
2. `list_section_types` filtered by group to find sections (see [references/section-guide.md](references/section-guide.md) for selection by intent)
3. `get_section_defaults` for each chosen section type
4. Modify `ctx` fields (content) while preserving `cfg` (layout):
   - `ctx.title.value` -- heading text
   - `ctx.subtitle.value` -- secondary heading
   - `ctx.desc.value` -- body text
   - `ctx.ctas[].label` / `ctx.ctas[].url` -- buttons
   - `ctx.media[].src` / `ctx.media[].alt` -- images (check `list_assets` first)
   - `ctx.items[]` -- repeated items (features, FAQs, testimonials)
5. `save_page_content` with all sections and `lastVersion` from the page's latest revision
6. `update_page_meta` -- title (50-60 chars), description (150-160 chars), OG image
7. `publish_page` with the latest revision ID after user confirmation

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
      "ctx": { "title": {}, "desc": {}, "ctas": [], "media": [], "items": [] },
      "cfg": { "section": {}, "grid": {}, "textsBox": {}, "mediaBox": {} }
    }
  }]
}
```

Generate a fresh UUID for each section's `id` and matching `uislices[0].id`.

### Edit existing pages

1. `get_page_content` to read current sections with text content
2. Modify only relevant `ctx` fields -- keep `cfg` unchanged unless user requests layout changes
3. `save_page_content` with the complete sections array (including unchanged sections)
4. Always use the current `lastVersion` -- stale versions cause conflict errors

### Unpublish and delete

- `unpublish_page` takes a page offline but preserves it as a draft
- `delete_page` permanently removes the page -- always confirm with user first
- `delete_entry` permanently removes a collection entry -- always confirm first

## Partials

Partials are reusable sections shared across pages (headers, footers, navigation).

- `list_partials` to see all partials in a project
- `get_partial_content` to read a partial's sections

Partials cannot be created or edited via the MCP tools -- they're managed in the Pixelesq dashboard. Use them to understand the site's shared navigation and footer structure when planning new pages.

## Collections and Entries

Collections are structured content types (blog posts, team members, products, case studies).

### Workflow

1. `list_collections` to see content types and field schemas
2. `get_collection` to see exact field schema -- each field has `name`, `type`, `required`
3. Create or edit entries matching the schema:
   - **text**: plain string
   - **html**: `<p>`, `<strong>`, `<em>`, `<ul>`, `<ol>`, `<li>`, `<a href="">`
   - **number**: numeric value
   - **boolean**: true/false
   - **date**: ISO date string
   - **image**: URL string
   - **reference**: ID of another entry
4. `save_entry_content` with `lastVersion` from the entry's latest revision
5. `publish_entry` with the latest revision ID after confirmation

### Collections with pages

When `hasPages: true`, each entry automatically gets its own page rendered through the collection's template. Blog posts are the most common example.

### Updating entries

`update_entry` changes entry metadata (name, slug) without touching content. Use `save_entry_content` for content changes.

## Forms

- `list_forms` to see all forms in a project (contact forms, lead capture, etc.)
- `get_form_submissions` to read submissions for a specific form

Forms are configured in the Pixelesq dashboard. Use submission data to understand conversion patterns and report on lead generation.

## Assets

- `list_assets` with optional type filter (image, icon, svg) and search query
- Always check existing assets before suggesting external image URLs
- Use asset tags for discovery when searching for specific content

## Domains

- `list_domains` to see custom domains and their verification status
- Domain setup and DNS configuration happens in the Pixelesq dashboard under Settings > Domain

## Site Structure Planning

For common site architecture patterns, see [references/site-recipes.md](references/site-recipes.md).

**Decision tree: pages vs entries**

- One-off content (homepage, about, pricing, contact) -> **pages**
- Repeatable content with consistent structure (blog posts, team members, products) -> **collection entries**
- Shared elements across pages (header, footer) -> **partials**

## Section Selection

For a complete guide to 50+ section types organized by intent and page position, see [references/section-guide.md](references/section-guide.md).

**Quick reference by goal:**

- **Conversion**: Hero variants + Banner + SimpleForm/FormInCard
- **Social proof**: TestimonialGrid, TestimonialSlider, TestimonialsWithLogos, LogoGrid
- **Feature showcase**: StickyFeatures, IconFeatures, FeaturesCarousel, CardsWithIcons
- **Content depth**: CardWithMedia, BentoCards, MediaBentoCards, TextGrid
- **Data/metrics**: JustStats, StatsOnCard
- **FAQ**: Faqs, FaqsOnCard, FaqsInGrid, FaqsWithMedia

## Best Practices

- Always confirm before publishing or deleting
- Show a summary of planned changes before executing write operations
- Check project context before generating content to match brand voice
- Use `list_assets` to find existing images before suggesting external URLs
- Keep section order logical: hero -> value prop -> social proof -> content -> CTA
- For multi-page updates, work systematically and track progress
- After content changes, suggest updating SEO metadata
