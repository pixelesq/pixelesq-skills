# Site Architecture Recipes

## Contents

- SaaS product site
- Portfolio / agency site
- Local business site
- Blog / publication site
- E-commerce storefront

## SaaS Product Site

### Pages
- **Homepage** -- hero with product demo, features, social proof, pricing preview, CTA
- **Features** -- detailed feature breakdown with StickyFeatures or FeaturesWithImage
- **Pricing** -- PqPricing or PqPricingTable with FAQ
- **About** -- team, mission, story
- **Contact** -- SimpleForm or FormInCard
- **Blog** (listing page) -- BlogHero with collection entries

### Collections
- **Blog** (`hasPages: true`) -- fields: title (text), content (html), excerpt (text), author (text), featured_image (image), published_date (date), category (text)

### Partials
- Header with logo, nav links (Features, Pricing, Blog), and CTA button
- Footer with sitemap links, social icons, legal links

### Key sections
Homepage: HeroWithMedia -> MovingLogos -> StickyFeatures -> StatsOnCard -> TestimonialSlider -> PqPricing -> Faqs -> Banner

---

## Portfolio / Agency Site

### Pages
- **Homepage** -- hero with headline, work showcase grid, client logos, CTA
- **Work/Portfolio** (listing) -- MediaBentoCards or MediaGridAlt
- **Services** -- IconFeatures or FeaturesOffset with detailed descriptions
- **About** -- team bios, values, story
- **Contact** -- SimpleForm

### Collections
- **Case Studies** (`hasPages: true`) -- fields: title (text), client (text), content (html), hero_image (image), results (text), category (text), featured (boolean)
- **Team Members** (`hasPages: false`) -- fields: name (text), role (text), bio (html), photo (image), linkedin (text)

### Partials
- Minimal header with wordmark and nav
- Footer with contact info, social links

### Key sections
Homepage: HeroWithMediaBg -> MediaBentoCards -> StatsOnCard -> TestimonialsWithLogos -> Banner

---

## Local Business Site

### Pages
- **Homepage** -- hero with location/service focus, services overview, testimonials, contact form, map
- **Services** (one page per service, or a single listing) -- FeaturesWithImage
- **About** -- story, team, values
- **Contact** -- FormInCard with location details

### Collections
- **Services** (`hasPages: true`) -- fields: name (text), description (html), image (image), price_range (text), duration (text)
- **Testimonials** (`hasPages: false`) -- fields: name (text), content (text), rating (number), date (date)

### Partials
- Header with business name, phone number, CTA button
- Footer with address, hours, phone, Google Maps link

### Key sections
Homepage: HeroWithMedia -> IconFeatures (services) -> TestimonialGrid -> JustStats (years, clients, projects) -> FaqsWithMedia -> FormInCard

### SEO priority
- JSON-LD: LocalBusiness schema
- Meta titles: `[Service] in [City] - [Business Name]`
- Google Search Console integration essential

---

## Blog / Publication Site

### Pages
- **Homepage** -- featured article hero, recent posts grid, category navigation
- **Category pages** -- filtered blog listings
- **About** -- editorial team, mission
- **Contact** or **Subscribe** -- newsletter form

### Collections
- **Articles** (`hasPages: true`) -- fields: title (text), content (html), excerpt (text), author (reference -> Team), featured_image (image), published_date (date), category (text), tags (text), read_time (number)
- **Authors/Team** (`hasPages: true`) -- fields: name (text), bio (html), avatar (image), role (text), social (text)
- **Categories** (`hasPages: false`) -- fields: name (text), description (text), slug (text)

### Partials
- Header with logo, category nav, search
- Footer with newsletter signup, category links, social

### Key sections
Homepage: BlogHero -> MediaCards (recent) -> CardWithMedia (featured) -> FormInCard (newsletter)

---

## E-commerce Storefront

### Pages
- **Homepage** -- hero with featured products, categories, bestsellers, testimonials
- **Category pages** -- product grids
- **About** -- brand story
- **Contact/Support** -- FormInCard with FAQ

### Collections
- **Products** (`hasPages: true`) -- fields: name (text), description (html), price (number), image (image), category (text), in_stock (boolean), sku (text)
- **Categories** (`hasPages: false`) -- fields: name (text), description (text), image (image)
- **Reviews** (`hasPages: false`) -- fields: customer (text), product (reference -> Products), rating (number), content (text), date (date)

### Partials
- Header with logo, category nav, cart icon
- Footer with shipping info, return policy, support links

### Key sections
Homepage: HeroWithMediaBg -> MediaCards (featured products) -> IconFeatures (value props: free shipping, returns, support) -> TestimonialSlider -> Banner
