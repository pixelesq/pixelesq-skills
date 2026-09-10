# Section catalog

96 section types, generated on 2026-09-10 from the live `list_section_types` tool. Regenerate with `node scripts/generate-section-guide.mjs` after refreshing `section-catalog.json`. Call `get_section_defaults` with a type name to get its exact content and layout structure before inserting it.

The **type** is what goes on `uislices[0].type`. **Content fields** are the `ctx` keys the section renders; fields starting with `item` live inside each entry of `ctx.items`.

## Hero (page openers) (15)

| Type | What it is | Use it for | Content fields |
|---|---|---|---|
| `BlogHero` | Blog page hero with a featured image and a brief content introduction. | Don't use this anywhere else, it's a hero section for blog pages only; Featured article or blog home introduction | subtitle, title, desc, ctas, media, items, itemSubtitle, itemTitle, itemDesc, itemMedia |
| `HeroCard` | Hero section with an overlay card highlighting a key message or call-to-action. | Highlighting a primary call-to-action on the homepage; Featuring a special offer or announcement prominently | subtitle, title, desc, ctas, media |
| `HeroMediaBgCard` | Hero section with a single card featuring a media background, icon, and text content. | Highlighting a primary message with visual impact; Creating a focal hero section with media background | subtitle, title, desc, ctas, icons, media |
| `HeroRollingMedia` | Hero whose headline rolls through words while the image changes with each one. | Headlines that rotate through personas, each with its own visual; Product heroes that show a different screen per use case | subtitle, title, desc, ctas, items, itemTitle, itemMedia |
| `HeroRollingWords` | Hero whose headline keeps rolling through a set of words, beside one image. | One headline that speaks to several audiences or use cases; Landing pages that rotate through benefits, verticals or personas | subtitle, title, desc, ctas, media, items, itemTitle |
| `HeroSocialProof` | Hero with an overlapping avatar stack and a trust line as social proof under the message. | SaaS landing pages leading with user credibility; Product heroes backed by a happy-customer avatar wall | subtitle, title, desc, ctas, media, items, itemTitle, itemMedia |
| `HeroWithInputField` | Hero section with inline email/text input and CTA button for lead capture. | Newsletter signup with email prefill; Demo request lead capture | subtitle, title, desc, ctas, media, inlineField |
| `HeroWithMedia` | Hero section featuring a prominent image or video alongside the main headline. | Adding a striking image or video to a hero; Marketing landing pages that need visual impact | subtitle, title, desc, ctas, media |
| `HeroWithMediaBelow` | Hero section with an image or video positioned below the main headline. | Introducing a page with a headline followed by an image; Showcasing a hero message with supporting visual beneath | subtitle, title, desc, ctas, media |
| `HeroWithMediaBg` | Hero section with full-width media (image or video) as the background. | Creating immersive landing page headers; Showcasing cinematic video backgrounds | subtitle, title, desc, ctas, media |
| `HeroWithMediaInset` | Hero section with an inset image or video for a striking impression. | Making a strong first impression with integrated visuals; Combining text and imagery in a hero seamlessly | subtitle, title, desc, ctas, media |
| `HeroWithMediaItems` | Hero section featuring multiple images or videos in an interactive carousel. | Showcasing a product or service with multiple visuals; Engaging visitors with an image or video carousel | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemMedia |
| `HeroWithPrompt` | AI chat-style hero section with large textarea, animated placeholder suggestions, and submit action. | AI product landing pages with prompt-to-action flow; Chat-based application entry points | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, promptArea |
| `HeroWithStats` | Hero pairing a content block and stat row with a single image beside it. | Landing pages that lead with numbers as social proof; Product or service intros backed by key metrics | subtitle, title, desc, ctas, media, items, itemSubtitle, itemTitle, itemDesc |
| `SimpleHero` | Hero section introducing main content with a clear, focused message. | Landing page or homepage introduction; Focusing user attention on a primary message | subtitle, title, desc, ctas |

## Features (17)

| Type | What it is | Use it for | Content fields |
|---|---|---|---|
| `CardsWithIcons` | Grid of cards highlighting key values or benefits, each with an icon and description. | Communicating core values or benefits with icons; Summarizing services or features in card format | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemIcons |
| `FeaturesCarousel` | Interactive feature showcase with auto-rotating media display and clickable items. | Showcasing product features with interactive media; Demonstrating multiple capabilities with visual examples | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemIcons, itemMedia |
| `FeaturesInCard` | Feature grid inside one bordered container card, cells divided by hairlines, each with an icon, linked title, and description. | Feature overviews in a single divided container, Framer-style; Capability grids where each cell links to a detail page | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemIcons |
| `FeaturesInCardWithMedia` | One card holding a title block and icon rows beside a contained image or video that keeps its own radius. | Feature lists with an illustration on one framed card; Product capability blocks with a screenshot beside the points | subtitle, title, desc, ctas, media, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemIcons |
| `FeaturesInCardWithMediaInset` | One card holding a title block and icon rows beside an image or video that fills its side of the card edge to edge and full height. | Feature lists paired with one full-bleed photo on a single card; Product highlights that need a framed, self-contained block | subtitle, title, desc, ctas, media, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemIcons |
| `FeaturesInlineIcons` | Feature grid where each icon sits inline with its title on the same line. | Listing product features with compact inline icons; Summarizing capabilities in a scannable grid | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemIcons |
| `FeaturesOffset` | Feature section with an offset layout that alternates text and visuals. | Highlighting product features with alternating text and images; Making feature lists more engaging visually | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemIcons |
| `FeaturesWithImage` | Feature section combining a main image with icon-highlighted key points. | Introducing product features with a large image and icons; Combining an illustrative image with a feature list | subtitle, title, desc, ctas, media, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemIcons, itemMedia |
| `FeaturesWithMediaInset` | Split feature section where one image or video fills its side of the section edge to edge and full height while the title block and icon rows stay inside the container. | Pairing a list of benefits with one full-bleed photo; Problem and solution sections with an atmospheric image | subtitle, title, desc, ctas, media, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemIcons |
| `IconFeatures` | Feature section highlighting key points with representative icons for each item. | Listing product features with icons; Summarizing services using icon illustrations | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemIcons |
| `ItineraryCards` | Cards displaying flight itinerary information with pricing and route details. | Displaying flight booking options; Showing travel itinerary details | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemIcons |
| `MediaInCard` | Showcase grid inside one bordered container card: large media floating above a bottom-pinned title and description in each hairline-divided cell. | Illustration-led feature showcases in a single divided container; Product capability grids where each visual links to a detail page | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemMedia |
| `StickyFeatures` | Split layout with scrolling text and sticky cross-fading media for feature showcases. | Product feature walkthroughs with fixed media; Split-screen storytelling with cross-fading images | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemMedia |
| `StickyFeaturesCard` | Stacking card deck where each card sticks and gets covered by the next as you scroll. | Product feature showcases with stacking card animations; Scroll-driven feature reveals with card layering | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemMedia |
| `StickyFeaturesCardInset` | Stacking card deck with edge-to-edge inset media where each card sticks and gets covered by the next. | Product feature showcases with stacking inset-media cards; Scroll-driven feature reveals with edge-to-edge imagery | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemMedia |
| `TabbedFeaturePanel` | Chip tabs switching one feature panel: eyebrow and title top left, description anchored to the bottom, media beside them in a shared card. | Interactive product feature tabs with one large showcase panel; Use-case walkthroughs where each tab swaps title, copy, and media | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemMedia |
| `TabbedShowcase` | Tabbed feature showcase with animated media transitions and responsive tab bar. | Showcasing multiple product features with visual demos; Tabbed interface for capability walkthroughs | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemIcons, itemMedia |

## Content and media (26)

| Type | What it is | Use it for | Content fields |
|---|---|---|---|
| `ArticleWithSidebar` | Article layout with sticky sidebar containing TOC, share buttons, and configurable cards. | Blog articles with table of contents; Long-form content with sidebar CTAs | subtitle, title, desc, ctas, media, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemIcons, itemMedia |
| `ArticleWithToc` | Article display with automatic table of contents sidebar. | Documentation pages; Long-form articles | subtitle, title, desc, ctas |
| `BentoCards` | Structured grid of uniform cards for displaying feature highlights or product overviews. | Showing multiple features or products evenly; Overview of offerings with consistent cards | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas |
| `BentoGallery` | Media-first bento gallery with hover text overlays. | Photo gallery with hover captions; Portfolio showcase in bento layout | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemMedia |
| `CalendarView` | Dated items on a calendar that visitors browse by month, by week or as an agenda, with a detail dialog per item. | Events page bound to an events collection with a Register CTA per event; Class or workshop schedule browsed by week | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemMedia |
| `CardWithMedia` | Single content card combining an image or video with descriptive text. | Featuring a highlighted story or product in a card; Embedding a multimedia element (image/video) with text | subtitle, title, desc, ctas, media |
| `CardWithMediaInset` | Single card featuring an inset image or video for a compact, balanced layout. | Displaying an image within a text-heavy card; Compact content highlights with embedded media | subtitle, title, desc, ctas, media |
| `ChangelogShowcase` | Editorial changelog timeline with a sticky date rail, sticky release media, and collapsible release sections. | Product changelog bound to a releases collection; Release notes with per-release media and collapsible detail sections | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemMedia |
| `CompareTable` | Editorial comparison table with written-out cells: a criterion column plus two or three option columns, winner marks allowed on either side, stacked criterion cards on mobile. | Compare your product against a competitor in written cells.; Publish honest vs pages where the other side wins some rows. | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas |
| `DocWithSidebar` | Documentation page with a sidebar for navigation. | Documentation pages; Tutorial content with multiple sections | logo, menu, ctas, menuItems, subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemMedia |
| `GlossaryAlphaNav` | Alphabetical directory with sticky A-Z navigation, search filter, and grouped items. | Browsable glossary or terminology directory; Service or product catalog with alphabetical navigation | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemIcons, itemMedia |
| `HowItWorks` | Numbered steps with a connecting line for process or how-it-works sections. | Explaining a process or workflow; How-it-works or onboarding steps | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas |
| `HowItWorksMedia` | Numbered steps with connecting line and configurable media per step. | Process or how-it-works with visuals per step; Onboarding with media and text | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemMedia |
| `MediaBentoCards` | Asymmetric bento-style layout of media cards that becomes a carousel on mobile. | Feature highlights with varying visual weight; Product showcase with asymmetric bento layout | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemIcons, itemMedia |
| `MediaBgCards` | Grid of cards each with an image background and overlaid text content. | Highlighting multiple offerings with background images; Visual grid of content cards for a portfolio or services | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemMedia |
| `MediaBgIconCards` | Grid of cards with image backgrounds and icons for showcasing features or categories. | Displaying multiple features with pictures and icons; Category overview with visual icon cards | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemIcons, itemMedia |
| `MediaCards` | Grid of cards featuring images or videos each with a brief description. | Portfolio gallery with image cards and captions; Displaying product images with descriptions | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemMedia |
| `MediaCardsInset` | Grid of cards featuring images or videos each with a brief description, inset media. | Portfolio gallery with image cards and captions, inset media; Displaying product images with descriptions, inset media | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemMedia |
| `MediaCardSlider` | Carousel slider of media cards with images or videos and text captions. | Carousel of project images or product shots; Interactive gallery for multiple media items | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemMedia |
| `MediaGridAlt` | Image gallery grid with an alternative staggered layout for visual storytelling. | Creative gallery layouts beyond a standard grid; Storytelling with staggered images and text | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemMedia |
| `MediaGridIconCards` | Responsive card grid with image backgrounds and icons, alternating large and small cards. | Visually dynamic feature or portfolio sections; Highlighting multiple items with mixed-size cards | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemIcons, itemMedia |
| `MediaGridTrio` | Media section showcasing three images or videos side by side in a trio layout. | Comparing three features or options side by side; Showcasing a trio of related products or images | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemMedia |
| `MediaSliderExtended` | Media slider with full-bleed images spanning edge-to-edge for a dramatic effect. | Displaying a full-width image carousel; Immersive gallery with edge-to-edge slides | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemMedia |
| `SimpleMedia` | Section featuring a single prominent image or video with supporting text. | Showcasing one highlight image or video with text; Featuring a product shot or video with a caption | subtitle, title, desc, ctas, media |
| `SimpleMediaGrid` | Simple grid layout to display images or videos in an organized manner. | Photo gallery sections on a webpage; Simple video gallery without descriptions | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemMedia |
| `TextGrid` | Grid of text blocks for presenting information or content in a clear layout. | Listing multiple text items (features, FAQs) in columns; Displaying content like services without images | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas |

## Stats and comparisons (5)

| Type | What it is | Use it for | Content fields |
|---|---|---|---|
| `CompareBars` | Numbered outcome rows on one card, each with stacked comparison bars such as today versus with you. | Today versus with-us outcome comparisons on product and solution pages; Before and after results in case studies | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas |
| `JustStats` | Section focusing on key statistics or metrics with prominent numeric displays. | Showcasing key stats at a glance (user count, sales, etc.); Quickly presenting metrics with big numbers | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas |
| `RollingStats` | Stats section where every digit rolls odometer-style to its value as it scrolls into view. | Key metrics that land with motion (users, revenue, uptime); Credibility numbers that draw the eye as visitors scroll | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas |
| `StatsOnCard` | Statistics section with each key metric displayed on its own card. | Emphasizing several metrics individually; Presenting stats in a card-based layout | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas |
| `TabbedBenchmark` | Tabbed horizontal bar chart for benchmark comparisons with animated progress bars. | Displaying benchmark comparisons across categories; Showcasing product performance metrics | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemIcons |

## Testimonials and social proof (7)

| Type | What it is | Use it for | Content fields |
|---|---|---|---|
| `MediaCarousel` | Draggable carousel of portrait media cards that auto-play videos on hover with mute/unmute controls. | Video testimonials from customers or team members; Portrait video stories or reels showcase | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemMedia |
| `Testimonial` | Section for a single customer testimonial or quote to build trust. | Highlighting a single customer review on a page; Adding a standalone testimonial for credibility | subtitle, title, desc, ctas, media |
| `TestimonialBrandTabs` | Single testimonial card with a brand logo tab strip to switch between customer quotes. | Rotating customer quotes behind recognizable brand logos; Social proof sections focused on one strong quote at a time | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemIcons, itemMedia |
| `TestimonialCardSlider` | Slider of testimonial cards cycling through customer quotes and reviews. | Showing many customer testimonials in a slider; Saving space by cycling through feedback | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemMedia |
| `TestimonialGrid` | Masonry grid layout of testimonial cards with responsive column configuration. | Showcasing multiple testimonials in masonry layout; Creating visually appealing testimonial sections | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemIcons, itemMedia |
| `TestimonialSlider` | Rotating carousel of multiple customer testimonials to showcase various feedback. | Featuring multiple testimonials in a rotating banner; Continuous loop of customer quotes and reviews | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemMedia |
| `TestimonialsWithLogos` | Testimonial section showcasing customer quotes alongside their company logos. | Highlighting client testimonials with brand logos; Showing customer feedback along with company branding | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemMedia |

## Logos and moving strips (4)

| Type | What it is | Use it for | Content fields |
|---|---|---|---|
| `LogoGrid` | Grid layout displaying multiple logos in an organized arrangement. | Displaying partner or client logos at a glance; Showing sponsor logos in a structured grid | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemMedia |
| `LogosInCard` | Logo or image grid inside one bordered container card, cells divided by hairlines, each optionally linking out. | Logo walls and social proof strips inside one bordered panel; Comparison or integration grids where each logo links to its page | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemMedia |
| `MovingLogos` | Animated logo showcase section with continuously moving or rotating logos. | Presenting a rotating display of partner logos; Showcasing client or sponsor logos dynamically | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemMedia |
| `MovingTexts` | Infinite text marquee: brand or team names scroll continuously with soft fades at the container edges. | Where-we-come-from strips of past employers or investors; Client or integration names without logo assets | subtitle, title, desc, ctas, items, itemTitle, itemCtas |

## FAQs (4)

| Type | What it is | Use it for | Content fields |
|---|---|---|---|
| `Faqs` | Standard FAQ section presenting common questions and answers in a list format. | Customer support or FAQ page content; Answering common user queries | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas |
| `FaqsInGrid` | FAQ section arranged in a grid layout for listing questions and answers. | FAQ pages with multiple questions side by side; Addressing common queries in a two-column layout | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas |
| `FaqsOnCard` | FAQ section where each question and answer is presented on an individual card. | FAQ sections requiring emphasis on each Q&A; Separating each question and answer into cards | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas |
| `FaqsWithMedia` | FAQ section that pairs each question and answer with an image or video for context. | Answering questions with diagrams or screenshots; FAQs where visuals aid understanding | subtitle, title, desc, ctas, media, items, itemSubtitle, itemTitle, itemDesc, itemCtas |

## Forms and pricing (6)

| Type | What it is | Use it for | Content fields |
|---|---|---|---|
| `FormCardWithIcons` | Form inside a distinct card, with icon-led supporting points beside it. | Contact or demo forms with icon-led selling points beside them; Emphasizing form inputs with a card layout | subtitle, title, desc, ctas, form, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemIcons, form |
| `FormInCard` | Form section with input fields placed inside a distinct card alongside supporting text. | Embedding a sign-up or contact form within a content section; Emphasizing form inputs with a card layout | subtitle, title, desc, ctas, form, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemMedia, form |
| `FormWithIcons` | Plain form with the section heading on top and icon-led points beside the fields, no card. | Lightweight contact or signup forms without card chrome; Icon bullets reassuring visitors right beside the fields | subtitle, title, desc, ctas, form, items, itemSubtitle, itemTitle, itemDesc, itemCtas, itemIcons, form |
| `PqPricing` | Pricing cards with monthly/annual toggle, animated price transitions, and configurable tiers. | Display pricing tiers with animated billing toggle.; Highlight a recommended tier with solid CTA variant. | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas |
| `PqPricingTable` | Feature comparison table with a sticky tier header, featured-column band, and quiet check/cross marks; collapses to a plan switcher on mobile. | Compare features across pricing tiers in a structured table.; Highlight a popular tier column using CTA variant. | subtitle, title, desc, ctas, items, itemSubtitle, itemTitle, itemDesc, itemCtas |
| `SimpleForm` | Basic form section for capturing user input with minimal distractions. | Contact us forms on a page; Newsletter signup or simple input forms | subtitle, title, desc, ctas, form |

## Calls to action (2)

| Type | What it is | Use it for | Content fields |
|---|---|---|---|
| `Banner` | Banner section highlighting a call-to-action message with bold text and button. | Prominent call-to-action section on a page; Sign-up or promotional banner | subtitle, title, desc, ctas |
| `SimpleCard` | Minimal call-to-action card with a short message and a prominent button. | Promoting a single offer or action on a page; Simple sign-up or conversion prompts | subtitle, title, desc, ctas |

## Headers (usually partials) (6)

| Type | What it is | Use it for | Content fields |
|---|---|---|---|
| `HeaderMaxMenu` | Global header with a full-width mega menu: grouped link columns, featured media cards and panel CTAs. | Full-width mega menu with grouped navigation columns; Featured media or article cards inside the menu | logo, menu, ctas, menuItems, menuGroups, menuCtas, itemTitle, itemSubtitle, itemDesc, itemIcons, itemMedia, itemCtas, itemUrl |
| `HeaderOnCard` | Floating card header: the nav sits in a rounded card over the hero and the card itself morphs open to hold the mega menu. | Floating card nav over gradient or media heroes; Morphing mega menu inside one continuous card | logo, menu, ctas, menuItems, menuGroups, menuCtas, itemTitle, itemSubtitle, itemDesc, itemIcons, itemMedia, itemCtas, itemUrl |
| `HeaderSplitMenu` | Global header with a split mega menu: a left rail of sections that swaps a rich detail pane, OpenText style. | Drill-down mega menu for deep product catalogs; Sectioned navigation with rich detail panes per section | logo, menu, ctas, menuItems, menuGroups, menuCtas, itemTitle, itemSubtitle, itemDesc, itemIcons, itemMedia, itemCtas, itemUrl |
| `HeaderWithMenu` | Website header with logo and an expanded navigation menu for easy site browsing. | Top navigation bar with multiple menu links; Header for sites with many sections | logo, menu, ctas, menuItems |
| `SectionDivider` | A horizontal separator line between sections, with optional title text placed on the line. | Separating content sections visually; Adding a labeled divider between form steps | subtitle, title, desc, ctas |
| `SimpleHeader` | Minimalistic site header featuring only the essential logo and navigation links. | Basic website header with logo and nav; Clean top navigation for minimal design | logo, menu, ctas |

## Footers (usually partials) (4)

| Type | What it is | Use it for | Content fields |
|---|---|---|---|
| `FooterMasonryMenu` | Large footer with link groups flowing through masonry columns, logo on the left and social plus legal on the bottom bar. | Link-heavy footers with many uneven menu groups; Product sites pairing it with a mega menu header | logo, menu, social, legal, menuItems |
| `FooterOnCard` | Footer on a rounded card: masonry link groups, logo and bottom bar all sit on one floating surface. | Floating card footers over page or gradient backgrounds; Link-heavy footers with many uneven menu groups | logo, menu, social, legal, menuItems |
| `FooterWithMenu` | Footer section with multi-column menus and extended site information for navigation. | Websites with many pages needing footer navigation; Multi-column footer menus for large sites | logo, menu, social, legal, menuItems |
| `SimpleFooter` | Minimalist website footer with basic links, social icons, and copyright info. | Basic website footer with minimal content; Displaying essential info at the bottom of pages | logo, menu, social, legal |

## Choosing by page position

**Landing page (conversion):** a hero (`HeroWithMedia`, `HeroWithMediaBg`, `HeroSocialProof`, `HeroWithStats`), a logo strip (`LogoGrid`, `MovingLogos`, `LogosInCard`), features (`StickyFeatures`, `IconFeatures`, `FeaturesInCard`, `TabbedFeaturePanel`), how it works (`HowItWorks`, `HowItWorksMedia`), proof (`TestimonialGrid`, `TestimonialBrandTabs`, `StatsOnCard`, `CompareBars`), objections (`Faqs`, `FaqsOnCard`), then a close (`Banner`, `SimpleForm`, `FormInCard`).

**Pricing page:** `SimpleHero`, `PqPricing` or `PqPricingTable`, `CompareTable` for plan-by-plan detail, `Faqs`, `TestimonialsWithLogos`, `Banner`.

**About page:** `SimpleHero` or `HeroWithMediaBg`, alternating `CardWithMedia`, a team grid (`MediaCards`, `MediaGridTrio`), values (`IconFeatures`, `TextGrid`), `Banner`.

**Blog post or guide:** `BlogHero`, `ArticleWithToc` or `ArticleWithSidebar`, related items (`MediaCards`), `FormInCard` for a newsletter.

**Documentation:** `DocWithSidebar`, `GlossaryAlphaNav` for term lists, `ChangelogShowcase` for release notes.

**Portfolio or case study:** `HeroWithMedia`, `MediaBentoCards` or `BentoGallery`, `StatsOnCard` or `RollingStats`, `TestimonialGrid`, `Banner`.

**Events and schedules:** `CalendarView`, `ItineraryCards`.

## Combination patterns

- **Problem to solution:** hero states the problem, features present the solution, testimonials prove it, a banner closes.
- **Show, do not tell:** `HeroWithMediaBg`, `MediaBentoCards`, `StatsOnCard`, `Banner`.
- **Trust ladder:** hero, `LogoGrid`, features, testimonials, `Faqs`, `Banner`.
- **Storytelling:** `HeroWithMedia`, `StickyFeatures`, `CardWithMedia`, `Testimonial`, `Banner`.
- **Comparison:** `SimpleHero`, `CompareTable` or `CompareBars`, `TabbedBenchmark`, `Faqs`, `Banner`.

Use `SectionDivider` between dense sections for breathing room. Keep the header and footer as partials and embed them as `Partial` sections rather than copying them into every page.
