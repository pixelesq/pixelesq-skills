# Pixelesq agent skills

Skills, agents and the MCP connector for managing websites built on [Pixelesq](https://www.pixelesq.com). Read `skills/getting-started/SKILL.md` first: it has the connection steps, the full tool map and the rules that keep edits safe.

## Connector

- Server: `https://mcp.pixelesq.app/mcp` (streamable HTTP, OAuth 2.1 with PKCE, 68 tools).
- Sign-in: Google, or a Pixelesq email and the code it sends.
- Scopes granted at sign-in: `projects:read`, `content:read`, `content:write`, `publish`, `analytics:read`.
- Edits land in drafts. The live site changes only through `publish_page`, `publish_partial`, `publish_entry`, `update_theme` with `publish: true` and `update_form_schema` (a form has no draft).

## Skills

| Skill | Use it for |
|---|---|
| `getting-started` | Connecting a client, the tool map, scopes, the safety rules |
| `website-management` | Pages, sections, partials, collections, entries, images, forms, domains |
| `content-creation` | Blog posts, landing pages, entries, section copy in the brand voice |
| `design-theming` | Theme colors, fonts, spacing, radius, appearance, section choice by look |
| `seo-optimization` | Search Console, metadata, structured data, indexing, redirects |
| `analytics-growth` | Traffic, search performance, forms, AI referrals, Web Vitals |
| `site-operations` | Launch checks, publishing order, domains, recovery, monitoring |

## Agents

| Agent | Focus |
|---|---|
| `site-manager` | Any site task end to end, delegating to the specialists |
| `seo-specialist` | Audits, Search Console, metadata, structured data, redirects |
| `content-strategist` | Brand-aligned writing and entry creation |
| `design-consultant` | Theme, typography, composition, section swaps |

## Rules for every agent

1. Confirm the project with `list_projects` when the user has more than one.
2. Read before writing; every save carries the `lastVersion` from that read.
3. Saves merge field by field; arrays replace whole; `null` clears a field.
4. Publish, unpublish, delete and edit forms only after the user says yes, with `expectedRevisionId` and `expectedHeadAnchor` (for a form, `expectedUpdatedAt`) from the read they reviewed.
5. Never invent business facts, numbers, names or quotes.
