---
name: site-operations
description: Manages website launch, domains, publishing workflows, redirects, webhooks, and integrations for operational infrastructure. Use when launching a site, setting up domains, configuring redirects, managing webhooks, or handling post-launch maintenance.
license: MIT
metadata:
  author: pixelesq
  version: "1.0"
---

# Pixelesq Site Operations

## Pre-Launch Workflow

Before launching a site, run through the complete checklist. For the detailed 20+ item checklist, see [references/pre-launch-checklist.md](references/pre-launch-checklist.md).

### Quick validation using tools

1. `list_pages` -- verify all planned pages exist and are in draft
2. `get_page_content` for each page -- confirm real content (no placeholder text)
3. `get_page` for each page -- check meta title, description, and OG image are set
4. `list_partials` -- verify header and footer exist
5. `get_theme` -- confirm theme is configured (colors, fonts, not defaults)
6. `list_forms` -- verify forms exist for lead capture / contact
7. `list_domains` -- check custom domain is set up and verified
8. `list_redirects` -- confirm redirects from old site are in place (if migrating)
9. `get_gsc_connection_status` -- verify Google Search Console is connected

### Launch order

1. **Partials first** -- header and footer must be published before pages look complete
2. **Core pages** -- homepage, about, contact, pricing (the pages linked from navigation)
3. **Secondary pages** -- feature pages, service pages, landing pages
4. **Blog entries** -- publish collection entries last
5. **Verify live** -- check the published site URL to confirm everything renders correctly

## Domain Management

### Checking domain status

`list_domains` returns all custom domains with:
- `hostname` -- the domain name
- `verified` -- whether DNS is verified
- `active` -- whether the domain is active

### Domain setup flow

Domain setup happens in the Pixelesq dashboard (Settings > Domain):

1. Add the custom domain
2. Configure DNS records at the domain registrar:
   - **CNAME**: point `www` to Pixelesq's target
   - **A record**: point root domain to Pixelesq's IP
   - **TXT record**: for domain verification
3. Wait for DNS propagation (can take up to 48 hours, usually faster)
4. Verify in Pixelesq dashboard
5. Confirm with `list_domains` that `verified: true`

### Common issues

- DNS not propagated yet -- advise waiting and rechecking
- Wrong record type -- CNAME vs A record confusion
- Proxy enabled (Cloudflare orange cloud) -- may need to pause proxy for verification

## Publishing Strategy

### Draft -> Publish workflow

All content starts as a draft. Publishing makes it live immediately.

- `publish_page` -- requires the latest revision ID. Get it from `get_page`.
- `publish_entry` -- same pattern for collection entries.
- `unpublish_page` -- takes content offline while preserving the draft.

### Scheduled publishing

Pixelesq supports scheduled publishing through the dashboard. Pages can be set to auto-publish at a specific date/time. This is managed in the dashboard, not via MCP tools.

### Staged rollout for new sites

When launching a full new site:

1. Publish partials (header/footer) -- they're invisible until pages are published
2. Publish the homepage first -- it's the entry point
3. Publish pages linked from the homepage navigation
4. Publish remaining pages
5. Publish blog entries
6. Verify each page after publishing

## Redirect Management

### Common redirect scenarios

**Site migration (old domain -> new domain):**
```
create_redirect for each old URL path:
  source: "/old-path"
  destination: "/new-path"
  statusCode: 301
  description: "Migration from old site"
```

**Slug change:**
When renaming a page URL, create a redirect from the old slug:
```
source: "/old-slug"
destination: "/new-slug"
statusCode: 301
description: "Page renamed"
```

**Page consolidation:**
When merging multiple pages into one:
```
source: "/page-a"  ->  destination: "/combined-page"  (301)
source: "/page-b"  ->  destination: "/combined-page"  (301)
```

**Vanity URLs:**
Short memorable URLs for campaigns:
```
source: "/go/demo"
destination: "/product/request-demo"
statusCode: 302
description: "Demo campaign URL"
```

### Redirect best practices

- Always use `list_redirects` first to check for existing redirects
- Avoid redirect chains (A -> B -> C). Each redirect should point directly to the final destination.
- Use 301 for permanent changes, 302 for temporary
- Include a description for every redirect explaining the reason
- After migration, test key URLs to confirm redirects work

## Custom Tags

Custom tags are managed in the Pixelesq dashboard (Settings > Website > Custom Tags). They inject code into the `<head>` or `<body>` of every page.

### Common uses

- **Google Analytics**: GA4 tracking script in `<head>`
- **Facebook Pixel**: Meta tracking pixel in `<head>`
- **Hotjar**: Session recording in `<head>`
- **Custom CSS**: Site-wide style overrides in `<head>`
- **Chat widgets**: Third-party chat scripts in `<body>`
- **Cookie consent**: Cookie banner scripts in `<body>`

This is configured in the dashboard, not via MCP tools. Mention it when users ask about analytics tracking or third-party integrations.

## Webhooks

For webhook subscription events and automation patterns, see [references/webhook-patterns.md](references/webhook-patterns.md).

Webhooks notify external services when events happen in Pixelesq. They're configured in the dashboard under Settings > Webhooks.

## Integrations

Pixelesq integrates with external services (configured in Settings > App Integrations):

- **Slack** -- receive notifications when pages are published, use @pixel for AI assistance in Slack
- **Linear** -- sync tasks and issues, use @pixel for AI assistance in Linear
- **Zoho CRM** -- sync form submissions to Zoho contacts
- **Google Search Console** -- search performance data and indexing status

These are set up in the dashboard. When users mention wanting notifications or CRM sync, point them to the appropriate integration.

## Post-Launch Monitoring

### Daily (first week)
- Check `get_site_analytics` for traffic patterns
- Monitor for any 404 errors or missing pages
- Verify forms are receiving submissions with `get_form_submissions`

### Weekly
- `get_search_performance` to track search visibility
- `get_all_page_statuses` to monitor indexing progress
- Review form submissions for quality
- Check `list_redirects` for any new redirect needs

### Monthly
- Full analytics review (28d period comparison)
- Content freshness check -- are published pages still current?
- SEO audit -- meta titles, descriptions, indexing health
- Theme review -- does the design still serve the brand?

### Quarterly
- Comprehensive SEO audit with striking distance analysis
- Content gap analysis -- what topics should be added?
- Performance review -- Web Vitals trends
- AI citation tracking -- growth in AI referral traffic
