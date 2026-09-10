---
name: analytics-growth
description: Reads and interprets a Pixelesq site's traffic, search performance, AI referrals, form submissions and page health to find growth opportunities and explain changes. Use when the user asks how the site is doing, where visitors come from, what to improve, or whether a change worked.
license: MIT
metadata:
  author: pixelesq
  version: "3.0"
---

# Pixelesq Analytics and Growth

## The tools and what they return

- `get_site_analytics` with `period` `LAST_7_DAYS`, `LAST_30_DAYS` or `LAST_90_DAYS`: `counts` for visits, pageviews, bounce rate and average duration, each with `current`, `previous`, `change` and `trend`, plus `topPages`, `topSources`, `topDevices`, `topLocations` and `topBrowsers` (null on a quiet site).
- `get_ai_referral_analytics` with `days`: `totalHits`, `totalVisits`, `sources` (ChatGPT, Claude, Perplexity, Gemini, Copilot and others), `pages` that received the traffic, and a `trend`.
- `get_search_performance` with `LAST_7_DAYS`, `LAST_28_DAYS` or `LAST_90_DAYS`: Search Console clicks, impressions, CTR and position. `get_all_page_statuses`, `get_page_index_status` and `inspect_url` cover indexing. These answer `null` when Search Console is not connected; check `get_gsc_connection_status` first and say plainly that it is not connected rather than reporting zero.
- `get_form_submissions` for a form from `list_forms`: submissions with their field values, which are visitor data.

Present numbers in the user's words: search clicks, search appearances, click rate, average ranking.

## Reading the traffic

1. **Volume and trend:** compare `current` and `previous`; 7 days shows a recent change, 30 the standard view, 90 the season.
2. **Sources:** organic search is SEO, direct is brand, referral is who links to you, social is campaigns, AI referral is the newest channel.
3. **Top pages:** the pages that earn traffic are the ones to protect; pages with none are new, unindexed or not worth their slot.
4. **Devices and places:** a mobile-heavy audience with a higher mobile bounce rate is a design problem, not a content one.
5. **Engagement:** bounce rate is normal at 65 to 80 percent on posts, should sit near 40 to 60 on landing pages and 30 to 50 on a home page; average duration under 30 seconds means the page did not match what the visitor came for.

## The funnel

Search appearances, then search clicks (`get_search_performance`), then visits and engagement (`get_site_analytics`), then submissions (`get_form_submissions`). Where the numbers drop tells you what to fix: few appearances means indexing or content gaps; low click rate means titles and descriptions; high bounce means the page and the query disagree; low submissions means form friction or placement.

## AI referrals

Read `get_ai_referral_analytics` for the last 30 and 90 days. To earn more: enable llms.txt and the sitemap in the project features, keep FAQ sections in a clear question and answer form, add schema.org structured data with `update_page_meta`, and write pages that state facts plainly with original data.

## Forms

Volume over time, which pages send the submissions, lead quality, and abandonment signals (a form page with visits and no submissions). Levers: fewer fields, placement after proof, a card form (`FormInCard`) for prominence, a CTA label that says what happens next.

## Web Vitals

Where Search Console reports them, page statuses carry a Core Web Vitals assessment. Good thresholds: LCP under 2.5 seconds, CLS under 0.1, INP under 200 milliseconds. Fixes on Pixelesq are usually image weight and sizes, which `upload_asset` optimizes, and section count above the fold.

## Answer with an action

Pair every observation with the next tool call: traffic down over 30 days, check `get_search_performance` and `get_all_page_statuses`; home page bounce high, review the hero copy against the queries that bring people; no AI referrals, enable llms.txt and add FAQs; submissions down, check the form page's traffic first.
