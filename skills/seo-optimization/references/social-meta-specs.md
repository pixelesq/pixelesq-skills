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

## How Social Meta Maps in Pixelesq

The `socials` field on page meta contains platform-specific overrides. When set via the Pixelesq dashboard, each platform can have its own title, description, and image.

Via the MCP tools, `update_page_meta` sets the primary OG meta:
- `title` -> og:title, twitter:title (shared across platforms unless overridden)
- `description` -> og:description, twitter:description
- `image` -> og:image, twitter:image

For platform-specific overrides, users should use the Pixelesq dashboard's SEO & Social panel, which provides per-platform editing with live previews for Google, Twitter, Facebook, LinkedIn, and Instagram.

### Image sizing strategy

If only one image is used across all platforms:
- **1200x630px** works well for Twitter, Facebook, and LinkedIn
- Test cropping for Instagram (center-crop safe zone)
- Minimum recommended: 1200x630px, JPEG or PNG, under 5MB
- Include alt text for accessibility and SEO
