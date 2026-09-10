# Social Meta Specifications by Platform

## Contents

- Twitter / X
- Facebook / Open Graph
- LinkedIn
- Instagram
- How social meta maps in Pixelesq

## Twitter / X

### Specs
- **Title**: max 70 characters (truncated after)
- **Description**: max 200 characters
- **Image**: 1200x628px (2:1 ratio), max 5MB, JPG/PNG/GIF/WEBP
- **Card type**: `summary_large_image` (recommended) or `summary`

### Best practices
- Front-load the value proposition in the title
- Description should create urgency or curiosity
- Image should be visually distinct at small sizes (avoid tiny text)
- Include a clear subject in the image, not just a logo

---

## Facebook / Open Graph

### Specs
- **og:title**: max 60 characters (recommended), truncated at 88
- **og:description**: max 155 characters (recommended), truncated at 300
- **og:image**: 1200x630px (1.91:1 ratio), min 200x200px, max 8MB
- **og:type**: `website` (default), `article` (for blog posts)

### Best practices
- Title and description should differ from the page's SEO meta -- optimize for social sharing, not search
- Use custom images per page, not the same site-wide OG image
- For articles, include `article:published_time` and `article:author`
- Test with Facebook Sharing Debugger after updating

---

## LinkedIn

### Specs
- **Title**: max 120 characters (recommended 70 for best display)
- **Description**: max 150 characters for link previews
- **Image**: 1200x627px (1.91:1 ratio), min 200x200px
- **Uses Open Graph tags** (og:title, og:description, og:image)

### Best practices
- Professional tone -- LinkedIn audience expects business value
- Include data points or specific outcomes in descriptions
- Avoid clickbait -- it reduces engagement on LinkedIn
- Company page shares get more reach with compelling images

---

## Instagram

### Specs
- Instagram doesn't render link previews in posts
- Link previews appear in **Stories** (via link sticker) and **DMs**
- **Image**: 1080x1080px (1:1) or 1200x630px (1.91:1) for link previews
- **Uses Open Graph tags** for DM/Story link previews

### Best practices
- OG image should work at both 1:1 and 1.91:1 crops
- Keep critical content centered (cropping varies)
- Bold, simple visuals work best at mobile sizes

---

## How social meta maps in Pixelesq

Through the MCP tools, `update_page_meta` sets one title, one description and one image per page; the site renders them as the Open Graph and Twitter tags every platform reads:

- `title` to og:title and twitter:title
- `description` to og:description and twitter:description
- `image` to og:image and twitter:image (1200 by 630 works everywhere)

Per-platform overrides are edited in the dashboard's SEO and social panel, which previews Google, Twitter, Facebook, LinkedIn and Instagram; there is no per-platform field on the MCP. If only one image is used, keep the subject centered so square and wide crops both work, and always set alt text on the image asset.
