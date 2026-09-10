---
name: content-creation
description: Writes and manages Pixelesq website content in the project's brand voice: blog posts and collection entries, landing pages built from sections, copy edits, images, and internal linking. Use when the user wants content written, rewritten, expanded or published on a Pixelesq site.
license: MIT
metadata:
  author: pixelesq
  version: "3.0"
---

# Pixelesq Content Creation

## Brand voice first

Call `get_project` before writing anything and read `setting.context`:

- `siteProfile`: industry, title, description, tagline. Echo the positioning; use the industry's vocabulary at the reader's level.
- `audienceStrategy`: personas (role, goals, pain points), primary goal, user intent. Write to the persona, toward the goal.
- `contentGeneration`: tone, formality, reading level, brand personality, core keywords, CTA style, forbidden words, must-mention terms, default disclaimer. These are rules, not suggestions: a casual, friendly setting means contractions and second person; a formal, authoritative one means precise language and evidence.

When these fields are empty, ask two or three questions (who it is for, what they should do next, how the brand sounds) before drafting.

## What kind of content

- One-off pages (home, about, pricing, contact, landing pages): **pages** built from sections.
- Repeated, structured content (posts, case studies, team, products): **collection entries**. With `hasPages: true` each entry has its own page rendered by the collection's template.
- Shared blocks (header, footer, a CTA on every page): **partials**.

## Blog post or entry

1. `list_collections`, then `get_collection` for the exact field schema: `name`, `type`, `required`, and `list` (an array of values). Reference fields take entry ids.
2. Draft the piece: title, excerpt, structure, then the body as HTML (`<h2>`, `<h3>`, `<p>`, `<ul>`, `<ol>`, `<strong>`, `<em>`, `<a href="/slug">`, `<blockquote>`). Short paragraphs, headings that scan, internal links with descriptive anchors.
3. `create_entry` with name, slug and the content in one call (it validates against the schema and returns warnings), or `create_entry` then `save_entry_content` with the entry's `lastVersion` from `get_entry`.
4. Images: `list_assets` first; `search_stock_images` then `upload_asset` for a stock photo; `upload_image` for a file the user has. Field type `media` takes `{ src, alt }`; always write the alt.
5. If the collection has pages, `get_entry` returns the entry's page; set its SEO fields with `update_page_meta` (title 50 to 60 characters, description 150 to 160, image, `jsonLDPatch` for structured data).
6. Show the draft, then offer `publish_entry` with `expectedRevisionId` and `expectedHeadAnchor` from the last read.

`update_entry` renames an entry or changes its slug; `duplicate_entry` clones one as a starting point; `delete_entry` is permanent and needs confirmation.

## Landing page

1. Agree the page's single purpose and pick a frame: **AIDA** (hero for attention, features for interest, proof for desire, a banner or form for action) or **PAS** (hero names the problem, a content section deepens it, features present the solution, a form closes).
2. `create_page` with a descriptive name and a slug with a leading slash.
3. For each section: `get_section_defaults` for the type, write the `ctx` values, keep `cfg`, then `insert_section` with `position: -1` and fresh UUIDs. Section choices by intent are in the website-management catalog.
4. `update_page_meta` with the SEO title, description and image.
5. Offer `publish_page` with the two expectations.

## Editing copy on an existing page

1. `get_page_content` once to see the sections, or `get_section_content` for the section the user named.
2. Change only the named fields and `save_section_content` with the current `lastVersion`. Arrays (`items`, `ctas`, `media`) are replaced whole, so send the full array when changing one item.
3. Summarize what changed and offer to publish.

For bulk changes across pages: `list_pages`, then per page read, edit, save, keeping a running list; publish nothing until the user has reviewed the set.

## Writing rules

- **Headlines:** specific and benefit-led, six to twelve words, no vague promises.
- **Descriptions:** one idea per paragraph, concrete detail, the brand's tone.
- **Calls to action:** an action verb and a clear outcome ("Start the free trial", "Book a walkthrough"); a friction reducer beside it where true ("No card needed").
- **Items** (features, FAQs, testimonials): three to six per section, parallel structure, each self-contained.
- **Links:** descriptive anchor text; find targets with `search_content`, `list_pages` and `list_entries`; link new content from existing pages too.
- **Never invent facts** about the business: numbers, client names, awards and claims come from the user or the site.

## Before publishing

Run the ten-point rubric in [references/quality-rubric.md](references/quality-rubric.md). Minimum: clear headline, brand voice, strong CTA, alt text on images, internal links, metadata set.
