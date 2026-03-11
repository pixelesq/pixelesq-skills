---
name: content-creation
description: Creates and manages website content -- blog posts, landing pages, collection entries, and page sections with brand-aligned copywriting. Use when writing, creating, editing, or publishing content on a Pixelesq site.
license: MIT
metadata:
  author: pixelesq
  version: "2.0"
---

# Pixelesq Content Creation

## Brand Voice Extraction

Before creating any content, extract brand context from `get_project`:

### siteProfile
- `industry` -- determines vocabulary and jargon level
- `title`, `description`, `tagline` -- core messaging to echo in all content

### audienceStrategy
- `personas` -- who the content speaks to (role, pain points, goals)
- `primaryGoal` -- what the site aims to achieve (leads, sales, awareness)
- `userIntent` -- what visitors are looking for

### contentGeneration
- `tone` -- e.g., professional, casual, friendly, authoritative
- `formality` -- formal, semi-formal, casual
- `readingLevel` -- simple, moderate, advanced
- `brandPersonality` -- traits that define the brand voice

**How to apply:** Match tone and vocabulary to these settings. If `formality` is casual and `tone` is friendly, use contractions, second person, and conversational phrasing. If `formality` is formal and `tone` is authoritative, use precise language, avoid contractions, cite data.

## Content Type Decision Tree

- **One-off pages** (homepage, about, pricing, contact) -> create a **page** with sections
- **Repeatable structured content** (blog posts, case studies, team bios, products) -> create **collection entries**
- **Shared across pages** (header, footer, sidebar CTA) -> these are **partials** (managed in dashboard)

**When a collection has `hasPages: true`**, each entry gets its own page automatically via the collection's template. Blog posts are the most common example.

## Blog Post Workflow

### Step 1: Find the blog collection

```
list_collections(projectId)
```

Look for a collection with fields like `title`, `content`, `author`, `featured_image`. If `hasPages: true`, entries will auto-generate pages.

### Step 2: Understand the field schema

```
get_collection(projectId, collectionId)
```

Note each field's `name`, `type`, and `required` flag. Content must match exactly.

### Step 3: Create the entry

```
create_entry(projectId, collectionId, { name: "Post Title", slug: "post-title" })
```

### Step 4: Write content

Map content to the schema fields:

- **text** fields: plain string
- **html** fields: well-formatted HTML using `<p>`, `<h2>`, `<h3>`, `<strong>`, `<em>`, `<ul>`, `<ol>`, `<li>`, `<a href="">`, `<blockquote>`
- **image** fields: URL string (use `list_assets` to find existing project images)
- **date** fields: ISO date string (e.g., `2026-03-05`)
- **reference** fields: ID of another entry (e.g., author entry ID)
- **number** fields: numeric value
- **boolean** fields: true/false

### Step 5: Save and publish

```
save_entry_content(projectId, entryId, { content: {...}, lastVersion: N })
publish_entry(projectId, entryId, revisionId)
```

### Step 6: SEO

If the collection has pages, use `update_page_meta` on the entry's linked page to set title, description, and OG image.

### HTML content quality

- Start with a compelling opening paragraph
- Use `<h2>` for main sections, `<h3>` for subsections
- Keep paragraphs short (2-4 sentences)
- Use lists for scannable content
- Include internal links to other pages: `<a href="/page-slug">anchor text</a>`
- Bold key phrases with `<strong>` for scannability

## Landing Page Creation

### Copywriting frameworks mapped to sections

**AIDA (Attention -> Interest -> Desire -> Action):**
1. **Hero** section (Attention) -- bold headline addressing the core problem or aspiration
2. **Features** section (Interest) -- how the product/service works
3. **Testimonials** section (Desire) -- social proof showing real results
4. **CTA** section (Action) -- clear call to action with urgency

**PAS (Problem -> Agitate -> Solution):**
1. **Hero** (Problem) -- name the pain point directly
2. **Content** section (Agitate) -- deepen the problem with consequences
3. **Features** (Solution) -- present the solution with benefits
4. **CTA** -- remove friction with a clear next step

### Page creation flow

1. Clarify the page's single purpose (lead gen, product showcase, information)
2. Select a framework (AIDA for benefits-led, PAS for problem-led)
3. `list_section_types` filtered by relevant groups
4. `get_section_defaults` for each section
5. Write content following the framework and brand voice
6. `save_page_content` with all sections
7. `update_page_meta` with SEO-optimized title and description
8. Offer to `publish_page`

### Section content principles

**Headlines:**
- Be specific, not vague: "Reduce support tickets by 40%" beats "Improve customer support"
- Lead with the benefit, not the feature
- 6-12 words optimal

**Descriptions:**
- Expand on the headline with concrete details
- One idea per paragraph
- Use the brand's tone from contentGeneration

**CTAs:**
- Tell the user exactly what happens: "Start free trial" not "Submit"
- Use action verbs: Get, Start, Build, Discover, Join
- Pair with a supporting line reducing friction: "No credit card required"

**Items (features, FAQs, testimonials):**
- 3-6 items per section (cognitive sweet spot)
- Parallel structure across item titles
- Each item should stand alone while contributing to the section narrative

## Editing Existing Content

1. `get_page_content` or `get_entry` to read current content
2. Understand the specific change requested
3. Make targeted edits preserving structure and layout (`cfg` unchanged)
4. `save_page_content` or `save_entry_content` with `lastVersion`
5. Summarize changes and offer to publish

For bulk updates (e.g., updating CTAs across the site):
1. `list_pages` to get all pages
2. `get_page_content` for each page
3. Identify sections needing changes
4. Update systematically, tracking progress
5. Confirm all changes before publishing

## Cross-Linking Strategy

- Link blog posts to related service/product pages
- Link product pages to relevant case studies or testimonials
- Use descriptive anchor text (not "click here")
- Internal links help both SEO and user navigation
- When creating new content, check `list_pages` and `list_entries` for linking opportunities

## Content Quality

For a detailed 10-point quality rubric, see [references/quality-rubric.md](references/quality-rubric.md).

**Quick checklist before publishing:**
- [ ] Headlines are clear and specific
- [ ] Brand voice matches project context
- [ ] CTAs have action verbs and clear outcomes
- [ ] Images have alt text
- [ ] Internal links to related content
- [ ] Meta title and description set
