---
name: Content Creation
description: Create and manage website content — blog posts, landing pages, collection entries, and page sections. Use when the user wants to write, create, or publish content on their Pixelesq site.
---

# Pixelesq Content Creation

Help users create high-quality website content including blog posts, landing pages, and collection entries. Always match the project's brand voice and content guidelines.

## Before Creating Content

1. Call `get_project` to read the project context:
   - **siteProfile**: industry, title, description, tagline
   - **contentGeneration**: tone, formality, reading level, brand personality
   - **audienceStrategy**: personas, primary goal, user intent
2. Use this context to match the brand voice in all generated content

## Blog Posts and Collection Entries

### Creating a blog post

1. Call `list_collections` to find the blog collection
2. Call `get_collection` to see the field schema (title, content, author, featured image, etc.)
3. Call `create_entry` with name and slug
4. Call `save_entry_content` with content matching the schema:
   - **text** fields: plain strings
   - **html** fields: `<p>`, `<strong>`, `<em>`, `<ul>`, `<ol>`, `<li>`, `<a href="">`
   - **image** fields: URL strings (use `list_assets` to find existing images)
5. Call `publish_entry` to make it live

### Writing guidelines

- Use the collection's field schema as the content structure
- HTML content should be well-formatted with proper paragraph breaks
- Include internal links to other pages where relevant
- Suggest a meta description after creating the entry
- For collections with `hasPages: true`, the entry automatically gets its own page

## Landing Pages

### Page creation flow

1. Understand the page's purpose (lead generation, product showcase, information, etc.)
2. Suggest an appropriate section structure based on the purpose:
   - **Product launch**: Hero -> Features -> How It Works -> Testimonials -> CTA
   - **Lead generation**: Hero -> Benefits -> Social Proof -> Form
   - **About page**: Hero -> Team/Story -> Values -> CTA
   - **Pricing**: Hero -> Pricing Table -> FAQ -> CTA
   - **Blog/resource hub**: Hero -> Featured Posts -> Categories -> Newsletter
3. Call `list_section_types` with group filters to find the best sections
4. Call `get_section_defaults` for each chosen section type
5. Generate content for each section and call `save_page_content`
6. Set SEO metadata with `update_page_meta`

### Content quality checklist

- Headlines should be clear, specific, and action-oriented
- Descriptions should expand on the headline with concrete value
- CTAs should tell the user exactly what happens when they click
- Use the project's brand voice consistently across all sections
- Include relevant keywords naturally (don't keyword-stuff)
- Every page should have a clear single purpose and call to action

## Editing Existing Content

1. Call `get_page_content` or `get_entry` to read current content
2. Understand what the user wants to change
3. Make targeted edits — preserve structure and layout unless asked to change
4. Always use `lastVersion` for conflict detection when saving
5. Confirm changes with the user before publishing

## Best Practices

- Draft first, publish second — save content and let the user review before publishing
- Check existing assets with `list_assets` before suggesting external image URLs
- For multi-page updates (like updating CTAs across the site), work through pages systematically
- After major content updates, suggest reviewing and updating SEO metadata
- When creating multiple related pieces of content, maintain consistent messaging and cross-link between them
