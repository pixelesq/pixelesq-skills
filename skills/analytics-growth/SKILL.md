---
name: analytics-growth
description: Analyzes website traffic, search performance, form conversions, Web Vitals, and AI referral data to identify growth opportunities. Use when reviewing analytics, checking traffic, analyzing conversions, or monitoring site health.
license: MIT
metadata:
  author: pixelesq
  version: "1.0"
---

# Pixelesq Analytics & Growth

## Traffic Analysis Framework

Use `get_site_analytics` with period (`LAST_7_DAYS`, `LAST_28_DAYS`, `LAST_90_DAYS`) to pull traffic data.

### 5-step analysis

**1. Volume trends**
- Compare pageviews and unique visitors across periods
- 7d for recent changes, 28d for trends, 90d for patterns
- Growing visitors with stable pageviews = new audience. Growing pageviews with stable visitors = increased engagement.

**2. Source breakdown**
- **Organic search** -- visitors from Google, Bing, etc. Driven by SEO.
- **Direct** -- typed URL or bookmarks. Indicates brand awareness.
- **Referral** -- links from other sites. Check which sites are sending traffic.
- **Social** -- from social media platforms.
- **AI referral** -- from ChatGPT, Claude, Perplexity, Gemini, Copilot. See AI Referral Intelligence below.

**3. Top pages**
- Which pages get the most traffic? These are your money pages -- protect and optimize them.
- Which pages get zero traffic? Either they're new, not indexed, or not valuable.
- Look for unexpected top pages -- they reveal what your audience actually wants.

**4. Device and geography**
- Desktop vs mobile vs tablet split informs design priorities
- Top countries/cities reveal your actual market (may differ from intended)
- High mobile traffic + poor mobile experience = optimization opportunity

**5. Engagement quality**
- **Bounce rate** -- percentage who leave after one page. Benchmarks:
  - Blog posts: 65-80% (normal, people read and leave)
  - Landing pages: 40-60% (should engage further)
  - Homepage: 30-50% (should navigate deeper)
  - If significantly above these, the page isn't meeting visitor expectations.
- **Avg session duration** -- how long visitors stay. Under 30s suggests content mismatch. Over 2 minutes is strong engagement.

## Funnel Mapping

Map the full journey from discovery to conversion using different tools:

```
GSC impressions     How often you appear in search
      |
GSC clicks          How often searchers click through
      |
Site visits         Actual page loads (get_site_analytics)
      |
Engagement          Bounce rate, time on site
      |
Conversion          Form submissions (get_form_submissions)
```

### Where to investigate drops

- **Low impressions** -- content isn't ranking. Check indexing with `get_all_page_statuses`. Create more content targeting relevant queries.
- **Low CTR (impressions -> clicks)** -- titles and descriptions aren't compelling. Optimize meta with `update_page_meta`. Check striking distance keywords.
- **Low engagement (high bounce)** -- content doesn't match search intent. Review page content vs. the queries driving traffic.
- **Low conversion (engagement -> submissions)** -- forms have friction. Review form placement, CTA clarity, form field count.

## Form Submission Analysis

Use `get_form_submissions` to review submissions for specific forms.

### What to look for

- **Volume over time** -- are submissions growing, stable, or declining?
- **Source pages** -- which pages drive the most form submissions?
- **Submission quality** -- are the leads relevant? Check fields like company, role, message.
- **Abandonment signals** -- if a form has lots of page views but few submissions, it may have too many fields or unclear CTAs.

### Optimization levers

- Reduce form fields to essentials (name, email, message is often enough)
- Place forms above the fold or immediately after social proof
- Use FormInCard for visual prominence or SimpleForm for clean integration
- Add a compelling CTA label ("Get your free consultation" vs "Submit")

## AI Referral Intelligence

AI platforms increasingly cite and link to websites. This traffic is growing rapidly and appears in `get_site_analytics` source data.

### Tracked AI sources

- `chatgpt.com` / `chat.openai.com` (ChatGPT)
- `claude.ai` (Claude)
- `perplexity.ai` (Perplexity)
- `gemini.google.com` (Gemini)
- `copilot.microsoft.com` (Copilot)

### How to grow AI citations

1. **Enable llms.txt** -- in project Settings > One-tap Features. Creates a machine-readable content summary that AI crawlers use.
2. **Write clear, factual content** -- AI models prefer definitive, well-structured answers.
3. **Use schema.org JSON-LD** -- structured data helps AI models understand content.
4. **Maintain a sitemap** -- enable in project features for discoverability.
5. **Answer specific questions** -- FAQ sections with clear Q&A format are frequently cited.
6. **Be the authoritative source** -- original data, unique insights, and expert analysis get cited more.

## Web Vitals

Available via `get_all_page_statuses` in the `cwvCategory` field, plus individual metrics per page.

### The three Core Web Vitals

**LCP (Largest Contentful Paint)** -- loading performance
- Good: < 2.5 seconds
- Needs improvement: 2.5-4.0 seconds
- Poor: > 4.0 seconds
- Fix: optimize images, reduce server response time, minimize render-blocking resources

**CLS (Cumulative Layout Shift)** -- visual stability
- Good: < 0.1
- Needs improvement: 0.1-0.25
- Poor: > 0.25
- Fix: set image dimensions, avoid inserting content above existing content, use font-display: swap

**INP (Interaction to Next Paint)** -- interactivity
- Good: < 200ms
- Needs improvement: 200-500ms
- Poor: > 500ms
- Fix: optimize JavaScript, reduce main thread work, break up long tasks

### Impact on SEO

Google uses Core Web Vitals as a ranking factor. Pages with "Good" CWV have an advantage over competitors with poor scores. Check `get_all_page_statuses` to identify pages needing attention.

## Period Comparison Strategy

- **7 days** -- shows recent changes. Good for verifying if recent edits had an impact. Noisy for small sites.
- **28 days** -- the standard analysis period. Smooths out daily fluctuations. Best for trend identification.
- **90 days** -- reveals seasonal patterns and long-term trajectory. Compare 90d to understand if growth is sustained or one-off.

**Comparison workflow:**
1. Pull 28d data as the primary view
2. Pull 90d data to see if current trends are new or continuing
3. Pull 7d data only to check recent specific changes

## Actionable Response Patterns

When analyzing analytics, always pair observations with recommendations:

- "Traffic is down 15% over 28 days" -> check if specific pages lost rankings (`get_search_performance`), check for indexing issues (`get_all_page_statuses`)
- "Bounce rate is 85% on the homepage" -> review hero messaging, check if the page matches what searchers expect
- "No AI referral traffic" -> enable llms.txt, add FAQ sections, improve structured data
- "Form submissions dropped" -> check if form page traffic dropped, review form for new friction
- "Mobile traffic is 70% but bounce rate is higher on mobile" -> flag potential mobile experience issues
