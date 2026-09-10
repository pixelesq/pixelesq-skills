# Site architecture recipes

Section names below are live types from `section-guide.md`. Collection field types are the ones `update_collection_schema` accepts (`text`, `html`, `number`, `boolean`, `date`, `media`, `option`, `reference`).

## SaaS product site

**Pages:** Home (hero with product visual, logos, features, how it works, stats, testimonials, pricing preview, FAQ, banner), Features (`StickyFeatures` or `TabbedFeaturePanel`), Pricing (`PqPricing` or `PqPricingTable`, `CompareTable`, `Faqs`), Changelog (`ChangelogShowcase`), About, Contact (`SimpleForm` or `FormInCard`), Blog listing (`BlogHero` plus a collection-bound `MediaCards`).

**Collections:** Blog (`hasPages: true`): title (text), excerpt (html), cover_image (media), category (text), published_date (text or date), author (text), author_image (media), content (html). Changelog entries if release notes are frequent.

**Home order:** `HeroWithMedia` or `HeroSocialProof`, `MovingLogos`, `StickyFeatures`, `HowItWorks`, `StatsOnCard`, `TestimonialBrandTabs` or `TestimonialSlider`, `PqPricing`, `Faqs`, `Banner`.

## Portfolio or agency

**Pages:** Home, Work (`MediaBentoCards` or `BentoGallery`, bound to Case Studies), Services (`IconFeatures` or `FeaturesOffset`), About (team grid), Contact.

**Collections:** Case Studies (`hasPages: true`): title (text), client (text), content (html), hero_image (media), results (text), category (text), featured (boolean). Team (`hasPages: false`): name (text), role (text), bio (html), photo (media), linkedin (text).

**Home order:** `HeroWithMediaBg`, `MediaBentoCards`, `RollingStats`, `TestimonialsWithLogos`, `Banner`.

## Local business

**Pages:** Home, Services (one page each or a bound listing), About, Contact (`FormInCard` with address and hours).

**Collections:** Services (`hasPages: true`): name (text), description (html), image (media), price_range (text), duration (text). Testimonials (`hasPages: false`): name (text), content (text), rating (number), date (date).

**Home order:** `HeroWithMedia`, `IconFeatures`, `TestimonialGrid`, `JustStats`, `FaqsWithMedia`, `FormInCard`. SEO: `LocalBusiness` JSON-LD on the home page, titles of the form "[Service] in [City] | [Business]", Search Console connected.

## Blog or publication

**Pages:** Home (`BlogHero`, collection-bound `MediaCards`, `FormInCard` for the newsletter), category pages, About, Subscribe.

**Collections:** Articles (`hasPages: true`): title (text), content (html), excerpt (html), author (reference to Authors), featured_image (media), published_date (date), category (reference to Categories), tags (text, list), read_time (number). Authors (`hasPages: true`): name, bio (html), avatar (media), role. Categories (`hasPages: false`): name, description, slug.

**Article layout:** `BlogHero` then `ArticleWithToc` for long guides or `ArticleWithSidebar` when the sidebar should carry a CTA, then related `MediaCards`.

## Documentation and knowledge base

**Pages:** Docs home (`SimpleHero`, `IconFeatures` as topic tiles), one page per topic with `DocWithSidebar`, a glossary with `GlossaryAlphaNav`, release notes with `ChangelogShowcase`.

**Collections:** Guides (`hasPages: true`) with difficulty (option), audience (text), category (reference), body (html), FAQ (html) so each guide can carry an `FAQPage` document.

## Events and programs

`CalendarView` for schedules bound to an Events collection (date fields), `ItineraryCards` for multi-day agendas, `HeroWithStats` for attendance numbers, `FormInCard` for registration.

## E-commerce storefront (showcase)

Pixelesq renders catalog and content; checkout runs on the commerce platform. **Pages:** Home (`HeroWithMediaBg`, collection-bound `MediaCards`, `IconFeatures` for shipping and returns, `TestimonialSlider`, `Banner`), category pages, About, Support (`FormInCard` and `Faqs`).

**Collections:** Products (`hasPages: true`): name, description (html), price (number), image (media), category (text), in_stock (boolean), sku (text). Reviews (`hasPages: false`): customer, product (reference), rating (number), content (text), date (date).
