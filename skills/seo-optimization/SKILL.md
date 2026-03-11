---
name: seo-optimization
description: Audits and improves website SEO using Google Search Console data, meta optimization, JSON-LD structured data, URL redirects, IndexNow, and AI citation tracking. Use when analyzing search performance, rankings, indexing status, or making SEO improvements.
license: MIT
metadata:
  author: pixelesq
  version: "2.0"
---

# Pixelesq SEO Optimization

## GSC Connection Check

Always start by verifying Google Search Console status:

1. `get_gsc_connection_status` -- check `connected`, `siteUrl`, `lastSynced`
2. If not connected, direct user to Settings > App Integrations in the Pixelesq dashboard
3. GSC data has a ~3 day delay from Google -- check `lastSynced` for freshness

## Search Performance Analysis

Use `get_search_performance` with period: `LAST_7_DAYS`, `LAST_28_DAYS`, or `LAST_90_DAYS`.

### How to interpret

- **Clicks** -- actual visits from search results
- **Impressions** -- how often pages appeared in search (visibility)
- **CTR** -- clicks / impressions. Benchmark by position:
  - Position 1: ~27-30% CTR
  - Position 2: ~15%
  - Position 3: ~10%
  - Positions 4-10: 2-7%
  - If CTR is below these for a given position, the title/description needs improvement
- **Position** -- average ranking (1 = best). Higher numbers = worse ranking

### Opportunity identification

- **High impressions, low CTR** -- pages appearing in search but not getting clicked. Improve title and meta description.
- **Positions 5-20 with decent impressions** -- "striking distance" keywords close to page 1. Priority targets for optimization.
- **High clicks, high position** (already top 3) -- protect these. Don't change what's working.
- **Declining clicks over time** -- content may be going stale. Refresh or expand.

## Striking Distance Workflow

The highest-ROI SEO activity. Pages ranking positions 5-20 need small improvements to reach page 1.

1. `get_search_performance` with `LAST_28_DAYS`
2. Filter queries with position between 5 and 20
3. Sort by impressions (highest first) -- these have the most traffic potential
4. For top opportunities:
   a. `get_page` to read current meta title and description
   b. `get_page_content` to check if the keyword appears in content
   c. `update_page_meta` to optimize title and description around the target query
5. Track: revisit in 2-4 weeks with `get_search_performance` to measure improvement

## Indexing Health

### Site-wide check

`get_all_page_statuses` returns indexing status for every page:
- **Verdict**: `PASS` (indexed), `NEUTRAL`, `FAIL` (not indexed)
- **coverageState**: why a page is or isn't indexed
- **indexingState**: `INDEXING_ALLOWED` or blocked
- **lastCrawlTime**: when Google last visited
- **cwvCategory**: Core Web Vitals assessment

### Page-level deep dive

`inspect_url` for detailed analysis of a specific URL:
- Crawl status and any errors
- robots.txt blocking
- Canonical URL
- Mobile usability

### Common issues and fixes

- **Crawled but not indexed**: content may be thin or duplicate. Expand content, add unique value.
- **Blocked by robots.txt**: check project settings for robots configuration.
- **Not found (404)**: create a redirect with `create_redirect`.
- **Redirect error**: check redirect chains with `list_redirects`.

## Meta Optimization

### Title formulas (50-60 characters)

- **Homepage**: `[Brand] - [Primary Value Proposition]`
- **Product/Feature**: `[Product] - [Key Benefit] | [Brand]`
- **Blog post**: `[Topic]: [Specific Promise] | [Brand]`
- **Local business**: `[Service] in [City] - [Brand Name]`
- **Category/Collection**: `[Category] — Browse [Count]+ [Items] | [Brand]`
- **About**: `About [Brand] - [Differentiator]`
- **Contact**: `Contact [Brand] - [Response Promise]`

### Description templates (150-160 characters)

- Start with a verb (Discover, Learn, Get, Build, Find)
- Include the primary keyword naturally
- End with a value proposition or call to action
- Example: `Discover how [Brand] helps [audience] [achieve outcome]. [Unique value]. Get started free.`

### Using update_page_meta

```
update_page_meta(projectId, pageId, {
  title: "...",
  description: "...",
  image: "og-image-url",    // 1200x630px recommended
  index: true               // false to noindex
})
```

Always check existing meta with `get_page` first to avoid overwriting good content.

## JSON-LD Structured Data

Set JSON-LD via `update_page_meta` in the `jsonLd` field. For complete recipes for 10+ page types, see [references/json-ld-recipes.md](references/json-ld-recipes.md).

**Quick reference -- which schema for which page:**

- Homepage -> WebSite + Organization
- Blog post -> Article or BlogPosting
- FAQ page -> FAQPage
- Product page -> Product
- Local business -> LocalBusiness
- About page -> AboutPage + Organization
- Contact page -> ContactPage
- How-to guide -> HowTo
- Breadcrumbs -> BreadcrumbList (add to any page)

## Redirects

### When to use

- `create_redirect` with `statusCode: 301` for permanent moves (slug changes, restructuring)
- `create_redirect` with `statusCode: 302` for temporary moves (seasonal content, A/B tests)
- Always include a description explaining why the redirect exists

### Common patterns

- **Slug change**: old slug -> new slug (301)
- **Page consolidation**: merged pages -> surviving page (301)
- **Domain migration**: old paths -> new paths (301, bulk)
- **Trailing slash normalization**: `/page/` -> `/page` or vice versa (301)
- **Vanity URLs**: `/go/demo` -> full destination URL (302)

### Best practices

- Check `list_redirects` before creating to avoid chains (A -> B -> C)
- Redirect chains slow down crawling and dilute link equity
- After creating redirects, verify with `inspect_url`

## IndexNow

IndexNow instantly notifies search engines when content changes. Supported engines: Bing, Yandex, Seznam, Yep, Naver.

Enable in project Settings > Website > IndexNow. Once enabled, publishing a page automatically sends notifications.

Google does NOT support IndexNow -- it relies on its own crawling and GSC.

## AI Citation Tracking

### What it is

AI platforms (ChatGPT, Claude, Perplexity, Gemini, Copilot) increasingly reference and link to websites. This traffic appears in analytics.

### How to track

`get_site_analytics` shows traffic sources including AI referrals. Look for:
- `chatgpt.com` / `chat.openai.com`
- `claude.ai`
- `perplexity.ai`
- `gemini.google.com`
- `copilot.microsoft.com`

### How to grow AI citations

- Enable **llms.txt** in project features (Settings > One-tap Features) -- this creates a machine-readable summary of site content that AI crawlers use
- Write clear, factual, well-structured content
- Use proper schema.org JSON-LD
- Maintain a comprehensive sitemap

## Social Meta

For per-platform specifications (Twitter, Facebook, LinkedIn, Instagram), see [references/social-meta-specs.md](references/social-meta-specs.md).

Social meta is set via the `socials` field on page meta. Each platform has different title, description, and image dimension requirements.

## SEO Audit Workflow

Complete site-wide audit checklist:

1. `get_gsc_connection_status` -- verify GSC is connected
2. `list_pages` -- get all pages
3. For each published page:
   - `get_page` -- check meta title, description, OG image, index status
   - Flag: missing title, title too short/long, missing description, no OG image
4. `get_all_page_statuses` -- check indexing health
   - Flag: pages not indexed, crawl errors, poor Web Vitals
5. `get_search_performance` with `LAST_28_DAYS` -- identify striking distance opportunities
6. `list_redirects` -- check for redirect chains or orphaned redirects
7. Present findings with severity (critical / warning / suggestion) and prioritize by traffic impact
