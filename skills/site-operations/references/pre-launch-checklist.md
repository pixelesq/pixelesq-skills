# Pre-Launch Checklist

Complete checklist to verify before launching a Pixelesq site. Use the listed tools to verify each item programmatically where possible.

## Content

- [ ] All planned pages exist (`list_pages`)
- [ ] Every page has real content, no placeholder text (`get_page_content` for each page)
- [ ] Headlines are clear and specific to each page's purpose
- [ ] CTAs have action verbs and clear destinations
- [ ] Blog/collection entries are populated and ready (`list_entries`)
- [ ] Contact/lead forms are set up (`list_forms`)
- [ ] Images are uploaded to project assets, not external placeholder URLs (`list_assets`)
- [ ] All images have alt text for accessibility

## SEO

- [ ] Every published page has a meta title (50-60 characters) (`get_page` to check)
- [ ] Every published page has a meta description (150-160 characters)
- [ ] Homepage has OG image set (1200x630px recommended)
- [ ] Key pages have JSON-LD structured data (homepage, about, contact, blog posts)
- [ ] Page slugs are URL-friendly (lowercase, hyphens, descriptive)
- [ ] No duplicate meta titles across pages
- [ ] Google Search Console connected (`get_gsc_connection_status`)
- [ ] Sitemap enabled (Settings > One-tap Features)
- [ ] robots.txt configured (Settings > One-tap Features)
- [ ] llms.txt enabled for AI discoverability (Settings > One-tap Features)
- [ ] IndexNow enabled for search engine notifications (Settings > Website > IndexNow)

## Design

- [ ] Theme is configured with brand colors, not defaults (`get_theme`)
- [ ] Fonts are set appropriately for brand personality
- [ ] Header partial exists with correct navigation links (`list_partials`)
- [ ] Footer partial exists with sitemap links, social, and legal
- [ ] Site looks correct on desktop, tablet, and mobile (check in dashboard preview)
- [ ] Favicon/site icon is set (Settings > Project)

## Technical

- [ ] Custom domain is set up and verified (`list_domains` -- `verified: true`)
- [ ] DNS records are configured correctly (CNAME, A, TXT)
- [ ] SSL certificate is active (automatic with Pixelesq domains)
- [ ] Redirects from old URLs are in place if migrating (`list_redirects`)
- [ ] Analytics tracking tags are installed (Settings > Website > Custom Tags)
- [ ] Forms have been test-submitted
- [ ] No broken internal links

## Integrations

- [ ] Google Analytics or other analytics platform connected (via custom tags)
- [ ] Google Search Console connected and verified
- [ ] Slack integration set up for notifications (if team is using Slack)
- [ ] Zoho CRM connected if forms feed into CRM
- [ ] Webhooks configured if external systems need notifications

## Legal

- [ ] Privacy policy page exists and is linked in the footer
- [ ] Terms of service page exists (if applicable)
- [ ] Cookie consent banner installed (if required for your audience's jurisdiction)
- [ ] Contact information is accessible

## Final verification

- [ ] Homepage loads correctly on the live domain
- [ ] Navigation links all work
- [ ] Forms submit successfully
- [ ] Mobile experience is acceptable
- [ ] Page load speed is reasonable (check Web Vitals via GSC after indexing)
