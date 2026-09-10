---
name: getting-started
description: How to connect an AI client to the Pixelesq MCP server, what the connector can do, the complete tool map, and the rules that keep edits safe. Use first whenever Pixelesq comes up and the connection or the available tools are unclear.
license: MIT
metadata:
  author: pixelesq
  version: "1.0"
---

# Getting started with Pixelesq

Pixelesq is an AI-native website builder. The Pixelesq MCP server lets an assistant read and change a Pixelesq site from a conversation: pages and sections, headers and footers, collections and entries, SEO and Search Console data, analytics, redirects, images and the theme. Edits land in drafts; nothing goes live until a publish tool runs.

## Connect

Server URL: `https://mcp.pixelesq.app/mcp` (streamable HTTP, OAuth 2.1 with PKCE). Sign in with Google or with a Pixelesq email and the code it sends. A Pixelesq account with at least one project is required; sign up at https://app.pixelesq.ai.

- **Claude.ai and Claude Desktop:** Settings, Connectors, Add custom connector, paste the URL.
- **Claude Code:** `claude mcp add --transport http pixelesq https://mcp.pixelesq.app/mcp`, then `/mcp` to sign in. This plugin's `.mcp.json` does the same when the plugin is installed.
- **ChatGPT:** Settings, Apps & Connectors, developer mode under Advanced, Create, paste the URL.
- **Cursor:** `{ "mcpServers": { "pixelesq": { "url": "https://mcp.pixelesq.app/mcp" } } }` in `mcp.json`, or install this plugin.
- **VS Code:** `{ "servers": { "pixelesq": { "type": "http", "url": "https://mcp.pixelesq.app/mcp" } } }` in `.vscode/mcp.json`.
- **Any other MCP client:** the URL above; clients register dynamically or present a client ID metadata document.

## Scopes

Access is granted at sign-in and stamped into the token: `projects:read`, `content:read`, `content:write`, `publish`, `analytics:read`. A tool outside the grant answers with a refusal that asks the client to reconnect; do not retry it, tell the user.

## The tool map (65 tools)

| Area | Tools |
|---|---|
| Projects | `list_projects`, `get_project`, `list_domains`, `search_content` |
| Pages | `list_pages`, `get_page`, `get_page_content`, `get_page_revisions`, `create_page`, `duplicate_page`, `update_page_meta`, `save_page_content`, `publish_page`, `unpublish_page`, `delete_page`, `revert_page_revision`, `revert_page_revision_to_version` |
| Sections | `list_section_types`, `get_section_defaults`, `get_section_content`, `save_section_content`, `insert_section`, `remove_section`, `reorder_sections`, `bind_section_to_collection`, `unbind_section_from_collection` |
| Collections and entries | `list_collections`, `get_collection`, `create_collection`, `update_collection_schema`, `list_entries`, `get_entry`, `create_entry`, `save_entry_content`, `update_entry`, `duplicate_entry`, `publish_entry`, `delete_entry` |
| Partials | `list_partials`, `get_partial_content`, `save_partial_content`, `publish_partial`, `unpublish_partial` |
| SEO and analytics | `get_gsc_connection_status`, `get_search_performance`, `get_page_index_status`, `get_all_page_statuses`, `inspect_url`, `get_site_analytics`, `get_ai_referral_analytics` |
| Redirects | `list_redirects`, `create_redirect`, `update_redirect`, `delete_redirect` |
| Forms | `list_forms`, `get_form_submissions` |
| Assets and images | `list_assets`, `upload_asset`, `upload_image`, `search_stock_images`, `generate_image`, `get_image_job`, `get_imagegen_quota` |
| Theme | `get_theme`, `update_theme` |

Claude clients are offered 62 of these: the three AI image generation tools are withheld there and available in other clients.

## Rules that keep edits safe

1. Saves change drafts; `publish_*` tools change the live site. Confirm before publishing, unpublishing or deleting.
2. Every save needs the `lastVersion` from the read before it. A stale version is refused: read again, reapply.
3. Publishes carry `expectedRevisionId` and `expectedHeadAnchor` from the read the user reviewed.
4. Saves merge; arrays replace whole; `null` clears.
5. Structural section edits take an `idempotencyKey` for safe retries.
6. Read brand context from `get_project` before writing copy.

## Which skill next

- Build or edit pages, sections, collections, partials, images: **website-management**.
- Write copy, blog posts, landing pages: **content-creation**.
- Colors, fonts, spacing, section choice by look: **design-theming**.
- Search Console, metadata, structured data, redirects: **seo-optimization**.
- Traffic, forms, AI referrals, Web Vitals: **analytics-growth**.
- Launch, domains, publishing order, maintenance: **site-operations**.
