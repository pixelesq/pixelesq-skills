---
name: site-operations
description: Runs the operational side of a Pixelesq site: pre-launch checks, publishing order, domains, redirects, recovery from a bad change, and the monitoring routine after launch. Use when the user is launching, migrating, publishing a batch of changes, connecting a domain, or asking what to check regularly.
license: MIT
metadata:
  author: pixelesq
  version: "3.0"
---

# Pixelesq Site Operations

## Pre-launch check with tools

1. `list_pages`: every planned page exists; note which are still drafts.
2. `get_page_content` per page: real copy, no placeholder text, images with alt text.
3. `get_page` per page: title, description, Open Graph image, `index` true where it should be.
4. `list_partials`: a header and a footer exist, with their published revisions.
5. `get_theme`: brand colors and fonts, not defaults.
6. `list_forms`: the contact or lead form exists; `get_form_submissions` confirms a test submission arrived.
7. `list_domains`: the custom domain is present and verified.
8. `list_redirects`: old URLs redirect if this is a migration.
9. `get_gsc_connection_status`: Search Console connected.

The full checklist with the dashboard-only items (sitemap, robots, llms.txt, IndexNow, custom tags, favicon, legal pages) is in [references/pre-launch-checklist.md](references/pre-launch-checklist.md).

## Publishing

- `publish_page`, `publish_partial` and `publish_entry` change the live site. Each takes the revision id plus `expectedRevisionId` and `expectedHeadAnchor` from the read the user reviewed, and refuses if the draft moved since.
- `unpublish_page` and `unpublish_partial` take content offline and keep the draft. An unpublished partial disappears from every page that embeds it.
- Scheduled publishing is set in the dashboard, not through these tools.

**Launch order:** partials first (`publish_partial` for header and footer), then the home page, then the pages linked from the navigation, then the rest, then collection entries. Open each live URL after publishing.

## Recovery

- A bad edit on a page: `get_page_revisions`, then `revert_page_revision` to the last good revision, review, publish.
- Unwanted saves on the current draft: `revert_page_revision_to_version` to an earlier numbered version; the newer versions are deleted, so confirm first.
- A wrong publish: publish the previous revision again, or `unpublish_page` while it is fixed.

## Domains

`list_domains` shows `hostname`, `verified` and `misconfigured`. Setup is in the dashboard: add the domain, create the records at the registrar (CNAME for www, A record or ALIAS for the root, TXT for verification), wait for propagation, verify. Common blockers: a proxying DNS provider in front of the records, a wrong record type, propagation not finished.

## Redirects

`list_redirects` before creating anything. `create_redirect` with `source`, `destination`, `permanent` (true for 301, false for 302) and a `description`; `update_redirect` to change or deactivate; `delete_redirect` to remove. Migrations: one rule per old path, straight to the final destination, no chains. Renames: a permanent redirect from the old slug. Campaign links: a temporary redirect to the real page.

## Dashboard-only operations

Custom tags in the head or body (analytics, pixels, chat widgets, consent banners), webhooks on page and entry events (patterns in [references/webhook-patterns.md](references/webhook-patterns.md)), and integrations (Slack, Linear, Zoho CRM, Google Search Console) are configured in the dashboard. Say so when the user asks for them and point to the setting.

## After launch

- First week, daily: `get_site_analytics` for the first traffic, `get_form_submissions` for the first leads, live URLs for anything missing.
- Weekly: `get_search_performance`, `get_all_page_statuses` for indexing progress, `list_redirects` for new needs.
- Monthly: the 30-day comparison, content freshness, metadata review.
- Quarterly: the full audit in the seo-optimization skill, AI referral growth with `get_ai_referral_analytics`, a design review with `get_theme`.
