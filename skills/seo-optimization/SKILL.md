---
name: SEO Optimization
description: Analyze and improve website SEO using Google Search Console data, meta optimization, URL redirects, and indexing status. Use when the user asks about search performance, rankings, indexing, or SEO improvements.
---

# Pixelesq SEO Optimization

Help users monitor, analyze, and improve their website's search engine optimization through Google Search Console data and Pixelesq's content tools.

## Workflow

### 1. Check GSC Connection

Always start by verifying Google Search Console is connected:
- Call `get_gsc_connection_status`
- If not connected, tell the user to set it up in Settings -> App Integrations in the Pixelesq dashboard
- Note the `siteUrl` and `lastSynced` to confirm data freshness

### 2. Analyze Search Performance

Use `get_search_performance` with the appropriate period (LAST_7_DAYS, LAST_28_DAYS, LAST_90_DAYS).

Present metrics in user-friendly language:
- "search clicks" not "clicks"
- "search appearances" not "impressions"
- "click rate" not "CTR"
- "average ranking" not "position"

Focus on:
- **Top queries** — What people search to find the site
- **Top pages** — Which pages get the most traffic
- **Trends** — Period-over-period changes in clicks, impressions, CTR, position
- **Opportunities** — High-impression/low-CTR queries that could rank better with better titles/descriptions

### 3. Check Indexing Health

Use `get_all_page_statuses` for a site-wide overview:
- Count pages by verdict (indexed, crawled but not indexed, errors)
- Identify pages with issues
- Use `inspect_url` for deep analysis of problem pages

Key fields: verdict, coverageState, indexingState, lastCrawlTime, cwvCategory

### 4. Take Action

Based on analysis, offer specific improvements:

**Meta optimization:**
- Call `update_page_meta` to improve titles and descriptions
- Title: 50-60 characters, include primary keyword
- Description: 150-160 characters, compelling with call to action
- Always check existing meta first with `get_page`

**Redirects:**
- Call `create_redirect` for moved/broken URLs
- Use 301 (permanent) for permanent moves
- Use 302 (temporary) for seasonal content
- Always include a description explaining the redirect

**Content updates:**
- Suggest content improvements based on query data
- If users search for topics not well covered, recommend new pages or sections

## Important Notes

- GSC data has a ~3 day delay from Google
- Position 1 is the best ranking, higher numbers are worse
- CTR varies by position: ~30% for position 1, ~15% for position 2, drops sharply after
- Focus improvements on pages ranking positions 5-20 (the "striking distance" pages)
- After making changes, suggest the user wait 1-2 weeks before re-checking
