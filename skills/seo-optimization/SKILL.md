---
name: seo-optimization
description: Audits and improves a Pixelesq site's search presence with Google Search Console data, page metadata, JSON-LD structured data, indexing checks and redirects. Use when the user asks about rankings, indexing, metadata, structured data, redirects, or how to get more search and AI traffic.
license: MIT
metadata:
  author: pixelesq
  version: "3.0"
---

# Pixelesq SEO Optimization

## Search Console first

`get_gsc_connection_status` returns `connected`, `siteUrl`, `verified`, `lastSynced` and `needsReconnect`. When it is not connected, the Search Console tools (`get_search_performance`, `get_page_index_status`, `get_all_page_statuses`, `inspect_url`) answer `null`: say so and point the user to the dashboard's integrations settings instead of reporting zeros. Search Console data trails Google by about three days.

## Search performance

`get_search_performance` with `period` `LAST_7_DAYS`, `LAST_28_DAYS` or `LAST_90_DAYS` gives clicks, impressions, click rate and average position. Speak in the user's terms: search clicks, search appearances, click rate, average ranking.

- Many appearances, low click rate: the title and description are not earning the click.
- Positions 5 to 20 with real impressions: striking distance, the highest-return work on any site.
- Top three positions: protect them; do not rewrite what works.
- Falling clicks over a quarter: refresh or expand the page.

**Striking distance workflow:** pull 28 days, keep queries between positions 5 and 20 sorted by impressions, then per page `get_page` for the current metadata, `get_page_content` to see whether the query's words appear, `update_page_meta` to align title and description, and a note to check again in a month.

## Indexing

`get_all_page_statuses` for the site, `get_page_index_status` for one page, `inspect_url` for the crawl, robots and canonical detail of a URL. Crawled but not indexed usually means thin or duplicate content; a blocked page usually means a robots or `index: false` setting; a 404 wants `create_redirect`.

## Metadata

`update_page_meta` sets `title`, `description`, `image` (the Open Graph image, 1200 by 630), `index` (false to keep a page out of search) and the structured data. Read `get_page` first so nothing good is overwritten.

Titles, 50 to 60 characters: home "[Brand]: [value proposition]"; product "[Product]: [benefit] | [Brand]"; post "[Topic]: [promise] | [Brand]"; local "[Service] in [City] | [Brand]"; category "[Category] | [Brand]". Descriptions, 150 to 160 characters, start with a verb, carry the keyword naturally, end with the reason to click.

Social previews reuse title, description and image through the Open Graph and Twitter tags. Per-platform overrides are a dashboard feature, not an MCP field; the specs per platform are in [references/social-meta-specs.md](references/social-meta-specs.md).

## Structured data

`update_page_meta` takes `jsonLD` to replace the whole document as a JSON string (pass `""` to clear) or `jsonLDPatch` to merge keys into the existing document; both are validated as a schema.org node, an array of nodes, or an object with `@context` and `@graph`. Prefer the patch for one-key edits so nothing else is dropped. Recipes for a dozen page types are in [references/json-ld-recipes.md](references/json-ld-recipes.md): `WebSite` and `Organization` on the home page, `Article` or `BlogPosting` on posts, `FAQPage` where a page has FAQs, `Product`, `LocalBusiness`, `HowTo`, `BreadcrumbList`.

## Redirects

`list_redirects` first, to avoid chains. `create_redirect` takes `source`, `destination`, `permanent` (true for 301, false for 302) and a `description` that says why. `update_redirect` changes any of those or `active`; `delete_redirect` removes one. Use permanent redirects for renamed and merged pages and migrations, temporary ones for campaigns and tests, and never chain one redirect into another.

## IndexNow and AI discovery

IndexNow notifies Bing, Yandex, Seznam, Yep and Naver on publish once enabled in the dashboard; Google relies on its own crawl and Search Console. For AI assistants, `get_ai_referral_analytics` shows what they already send; llms.txt and the sitemap in the project features, FAQ sections in clear question and answer form, and structured data all raise the chance of being cited.

## Site audit

1. `get_gsc_connection_status`.
2. `list_pages` and `get_page` per published page: missing or long titles and descriptions, missing Open Graph image, `index` set wrong, duplicate titles.
3. `get_all_page_statuses` for indexing and, where reported, Core Web Vitals.
4. `get_search_performance` for 28 days: striking distance and low click rate pages.
5. `list_redirects` for chains and stale rules.
6. Report by severity (critical, warning, suggestion), ordered by traffic impact, with the five quickest wins first.
