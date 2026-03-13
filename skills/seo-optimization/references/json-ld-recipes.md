# JSON-LD Recipes by Page Type

## Contents

- WebSite + Organization (homepage)
- Article / BlogPosting
- FAQPage
- Product
- LocalBusiness
- AboutPage
- ContactPage
- HowTo
- BreadcrumbList
- Service
- Event

Set JSON-LD via `update_page_meta` in the `jsonLd` field as a string.

---

## WebSite + Organization (homepage)

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "name": "[Site Name]",
      "url": "https://[domain]",
      "description": "[Site description]",
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://[domain]/search?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Organization",
      "name": "[Company Name]",
      "url": "https://[domain]",
      "logo": "https://[domain]/logo.png",
      "sameAs": [
        "https://twitter.com/[handle]",
        "https://linkedin.com/company/[slug]",
        "https://github.com/[org]"
      ]
    }
  ]
}
```

---

## Article / BlogPosting

Use `Article` for general articles, `BlogPosting` for blog posts.

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "[Article Title - max 110 chars]",
  "description": "[Article excerpt]",
  "image": "[Featured image URL]",
  "author": {
    "@type": "Person",
    "name": "[Author Name]"
  },
  "publisher": {
    "@type": "Organization",
    "name": "[Site Name]",
    "logo": {
      "@type": "ImageObject",
      "url": "https://[domain]/logo.png"
    }
  },
  "datePublished": "[ISO date]",
  "dateModified": "[ISO date]",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://[domain]/blog/[slug]"
  }
}
```

**Mapping from Pixelesq data:**
- `headline` <- entry title or page meta title
- `description` <- entry excerpt or page meta description
- `image` <- entry featured_image or page meta image
- `datePublished` <- entry published_date
- `author.name` <- entry author field

---

## FAQPage

Use when a page contains a FAQ section. Google can display these as rich results.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "[Question text]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Answer text]"
      }
    }
  ]
}
```

**Mapping:** Extract questions and answers from FAQ section items (`ctx.items[].title.value` and `ctx.items[].desc.value`).

---

## Product

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "[Product Name]",
  "description": "[Product description]",
  "image": "[Product image URL]",
  "brand": {
    "@type": "Brand",
    "name": "[Brand Name]"
  },
  "offers": {
    "@type": "Offer",
    "price": "[Price]",
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock",
    "url": "https://[domain]/products/[slug]"
  }
}
```

---

## LocalBusiness

Critical for local SEO. Include as much detail as possible.

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "[Business Name]",
  "description": "[Business description]",
  "image": "[Business photo URL]",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Street]",
    "addressLocality": "[City]",
    "addressRegion": "[State]",
    "postalCode": "[ZIP]",
    "addressCountry": "[Country code]"
  },
  "telephone": "[Phone]",
  "url": "https://[domain]",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "17:00"
    }
  ],
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "[lat]",
    "longitude": "[lng]"
  },
  "priceRange": "$$"
}
```

---

## AboutPage

```json
{
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About [Company]",
  "description": "[About description]",
  "mainEntity": {
    "@type": "Organization",
    "name": "[Company Name]",
    "foundingDate": "[Year]",
    "founder": {
      "@type": "Person",
      "name": "[Founder Name]"
    },
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "[Count]"
    }
  }
}
```

---

## ContactPage

```json
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact [Company]",
  "description": "[Contact page description]",
  "mainEntity": {
    "@type": "Organization",
    "name": "[Company Name]",
    "email": "[email]",
    "telephone": "[phone]",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "email": "[support email]",
      "availableLanguage": "English"
    }
  }
}
```

---

## HowTo

Use for tutorial/guide pages. Google can show step-by-step rich results.

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "[How to title]",
  "description": "[Brief description]",
  "totalTime": "PT[X]M",
  "step": [
    {
      "@type": "HowToStep",
      "name": "[Step title]",
      "text": "[Step description]",
      "image": "[Step image URL]"
    }
  ]
}
```

---

## BreadcrumbList

Add to any page to help Google understand site hierarchy. Can be combined with other schemas using `@graph`.

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://[domain]"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "[Parent Page]",
      "item": "https://[domain]/[parent-slug]"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "[Current Page]"
    }
  ]
}
```

---

## Service

For service-based businesses.

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "[Service Name]",
  "description": "[Service description]",
  "provider": {
    "@type": "Organization",
    "name": "[Company Name]"
  },
  "serviceType": "[Category]",
  "areaServed": {
    "@type": "Place",
    "name": "[City or Region]"
  },
  "offers": {
    "@type": "Offer",
    "price": "[Starting price]",
    "priceCurrency": "USD"
  }
}
```

---

## Event

```json
{
  "@context": "https://schema.org",
  "@type": "Event",
  "name": "[Event Name]",
  "description": "[Event description]",
  "startDate": "[ISO datetime]",
  "endDate": "[ISO datetime]",
  "location": {
    "@type": "Place",
    "name": "[Venue]",
    "address": "[Address]"
  },
  "organizer": {
    "@type": "Organization",
    "name": "[Organizer]"
  },
  "offers": {
    "@type": "Offer",
    "price": "[Price]",
    "priceCurrency": "USD",
    "url": "[Ticket URL]",
    "availability": "https://schema.org/InStock"
  }
}
```
