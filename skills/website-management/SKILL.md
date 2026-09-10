---
name: website-management
description: Manages Pixelesq websites through the Pixelesq MCP server: pages and their sections, headers and footers, collections and entries, forms, assets, domains and revisions, with the safety rules every write follows. Use for any request to read, build, edit, reorganize, publish or delete website content on a Pixelesq project.
license: MIT
metadata:
  author: pixelesq
  version: "3.0"
---

# Pixelesq Website Management

Pixelesq is an AI-native website builder. A site is a **project**; a project has **pages** made of **sections**, shared **partials** (headers, footers), **collections** of structured **entries** (blog posts, team, products), **forms**, **assets** and a **theme**. Every tool below is one MCP tool on the Pixelesq server; the exact input schemas are in the tool definitions the client shows you. The full tool map is in the getting-started skill.

## Start every task the same way

1. `list_projects`, then ask which project when there is more than one. Every other call takes that `projectId`.
2. `get_project` for brand context: `setting.context.siteProfile` (industry, tagline), `audienceStrategy` (personas, goals), `contentGeneration` (tone, formality, reading level, forbidden words). Match it before writing a word of copy.
3. `search_content` when the user names a page or entry rather than giving an id. `list_pages` accepts a status filter and a name search.

## Safety rules that apply to every write

- **Drafts, then publish.** Saves change the draft. Only `publish_page`, `publish_partial` and `publish_entry` change the live site. Confirm before publishing, unpublishing or deleting.
- **Version tokens.** Every read returns a `lastVersion`. Every save requires it and refuses a stale one. On a refusal, read again and reapply; never retry blindly.
- **Publish what was reviewed.** Pass `expectedRevisionId` and `expectedHeadAnchor` from the read the user looked at. The server refuses if the draft changed since, which is the right outcome.
- **Merge, do not replace.** Saves follow JSON Merge Patch: fields you send change, fields you omit stay, `null` clears, and arrays (`items`, `ctas`, `media`, `icons`, `menu`, `social`, `legal`) are replaced whole, so send the full array when you touch one element.
- **Retry keys.** `insert_section`, `remove_section`, `reorder_sections`, `bind_section_to_collection` and `unbind_section_from_collection` accept an `idempotencyKey`. Reuse the same key when retrying a call whose answer was lost.
- **Only what was asked.** Change the fields the user named. Keep `cfg` (layout) untouched unless layout is the request.

## Pages

| Task | Tool |
|---|---|
| Find pages | `list_pages` (status, search, limit, offset), `search_content` |
| Read metadata, published pointer, latest draft | `get_page` |
| Read every section with content | `get_page_content` (large on big pages; prefer `get_section_content` for one section) |
| Create | `create_page` (name, slug with a leading slash, language) |
| Copy | `duplicate_page` |
| SEO fields | `update_page_meta` (title, description, image, index, `jsonLD` to replace or `jsonLDPatch` to merge) |
| Go live | `publish_page` (revisionId plus the two expectations) |
| Take offline | `unpublish_page` |
| Remove | `delete_page` (permanent, confirm first) |

**Revisions.** `get_page_revisions` lists a page's revisions. `revert_page_revision` makes a new draft from an older revision (the published one is untouched until you publish). `revert_page_revision_to_version` rolls a revision back to a numbered version and deletes the newer ones, which cannot be undone.

## Sections

Prefer the section tools; they touch one section and leave the rest of the page alone.

| Task | Tool |
|---|---|
| Read one section | `get_section_content` |
| Edit one section | `save_section_content` (merge, with `lastVersion`) |
| Add a section | `insert_section` (position zero-based, `-1` appends; fresh UUIDs) |
| Delete a section | `remove_section` (id or `logicalId`) |
| Rearrange | `reorder_sections` (full ordered list of ids) |
| Rebuild a page | `save_page_content` (replaces the section list; sections left out are removed; merges inside each kept section) |
| Catalog | `list_section_types` (filter by group), `get_section_defaults` (exact structure for one type) |

**Section shape.** `section.type` is `"Uislice"` for content sections and `"Partial"` for an embedded header or footer. The component name (`HeroWithMedia`, `Faqs`) goes on `uislices[0].type`, never on the section. Generate a new UUID for `section.id` and use the same value for `uislices[0].id`. Content lives in `props.ctx` (`title.value`, `subtitle.value`, `desc.value`, `ctas[]`, `media[]`, `items[]`), layout in `props.cfg`. To embed a partial, use the partial's id as `section.id` with `props: { "ctx": {}, "cfg": {} }`.

**Changing a section's component type** is not a save: `remove_section`, then `insert_section` with the new type from `get_section_defaults`.

**Sections driven by a collection.** `bind_section_to_collection` makes a list-style section render entries from a collection; `unbind_section_from_collection` disconnects it. Content and layout stay as they are. A `BASE_VERSION_MISMATCH` answer means the section changed underneath you: read the page again and retry.

Choosing a section: [references/section-guide.md](references/section-guide.md) is the complete catalog generated from the live server. Site structures: [references/site-recipes.md](references/site-recipes.md).

## Partials (headers, footers, shared blocks)

`list_partials`, `get_partial_content`, `save_partial_content` (same section shape and merge rules as pages, with the partial's `lastVersion`), `publish_partial` (with the two expectations) and `unpublish_partial`. A published partial change shows on every page that embeds it, so confirm before publishing. New partials are created in the dashboard; embedding an existing one on a page is `insert_section` with a `Partial` section.

## Collections and entries

| Task | Tool |
|---|---|
| Find collections and their schemas | `list_collections`, `get_collection` |
| Create a collection | `create_collection` (name, slug, `hasPages`) then `update_collection_schema` |
| Change fields | `update_collection_schema` (the full ordered field list replaces the old one) |
| Entries | `list_entries`, `get_entry`, `create_entry`, `save_entry_content`, `update_entry` (name or slug), `duplicate_entry`, `publish_entry`, `delete_entry` |

Field types: `text`, `html`, `number`, `boolean`, `date` (ISO string), `image` or `media` (`{ src, alt }` or a URL), `option` (choices in `options`), `reference` (an entry id, or an array of ids when `list` is true). `create_entry` and `save_entry_content` validate against the schema and return warnings for missing required fields, wrong types and unknown fields. With `hasPages: true` every entry has its own page; `get_entry` returns that page so you can set its SEO fields with `update_page_meta`.

## Forms

`list_forms` shows each form's schema; `get_form_submissions` returns submissions, which contain visitor data, so quote them only when asked. Forms are built in the dashboard; a section's `form.formId` references one.

## Assets and images

- `list_assets` (search, tags, type) before proposing any new image.
- `upload_asset` imports from a public URL or base64 bytes, optimizes to webp and returns the stored url for `media.src`. There is no replace-in-place: upload a new file and repoint.
- `upload_image` opens an upload box in the chat for an image the user has locally; the asset url comes back when they drop it.
- `search_stock_images` returns Unsplash candidates; import the chosen one with `upload_asset`.
- `generate_image`, `get_imagegen_quota` and `get_image_job` create images with AI where the project has it enabled. They are not offered to Claude clients; when they are absent, use stock or uploaded images.

## Domains, redirects, theme, SEO, analytics

`list_domains` reports custom domains and verification; setup happens in the dashboard. Redirects, Search Console and analytics are in the seo-optimization and analytics-growth skills; the theme is in design-theming.

## Working patterns

- **New page:** `create_page`, then `get_section_defaults` per section, `insert_section` each in order (or one `save_page_content`), `update_page_meta`, offer `publish_page`.
- **Edit copy:** `get_section_content`, change the named fields, `save_section_content`.
- **Restructure:** `reorder_sections` and `remove_section`; never rebuild with `save_page_content` for a one-section change.
- **Bulk update:** `list_pages`, then per page read, change, save; report progress and totals; publish only after the user reviews.
- **Undo:** `get_page_revisions`, then `revert_page_revision` to the last good revision.
