# Pixelesq Agent Skills

[![smithery badge](https://smithery.ai/badge/pixelesq/pixelesq)](https://smithery.ai/servers/pixelesq/pixelesq)

Manage websites built on [Pixelesq](https://www.pixelesq.com) from any AI agent. Build and edit pages section by section, write content into collections, tune SEO and structured data, read Search Console and site analytics, manage redirects and images, restyle the theme, and publish when the user says so.

This repository is three things at once:

- **Seven skills** in the [Agent Skills](https://agentskills.io) format, loaded by Claude Code, Cursor, Codex, Copilot, Gemini CLI, Goose and other compatible agents.
- **Four specialist agents** for Claude Code (and any platform that reads `agents/*.md`).
- **The Pixelesq MCP connector**, declared in `.mcp.json`: `https://mcp.pixelesq.app/mcp`, 70 tools, OAuth sign-in with your Pixelesq account.

## Install

### Claude Code (plugin)

```
/plugin marketplace add pixelesq/pixelesq-skills
/plugin install pixelesq@pixelesq
```

Then run `/mcp` and sign in to Pixelesq. The skills load on demand, the agents are available as `@pixelesq:site-manager`, `@pixelesq:seo-specialist`, `@pixelesq:content-strategist` and `@pixelesq:design-consultant`, and the connector is registered from `.mcp.json`.

### Claude Code (connector only)

```
claude mcp add --transport http pixelesq https://mcp.pixelesq.app/mcp
```

### Claude.ai and Claude Desktop

Settings, Connectors, Add custom connector, paste `https://mcp.pixelesq.app/mcp`, sign in.

### ChatGPT

Open Pixelesq in the ChatGPT plugin directory and connect; that listing uses `https://pixelesq-mcp.pixelesq.workers.dev/mcp`, the same server on its older address. To add the server by hand: Settings, turn on Developer mode (under Apps or Security and login), then Plugins, +, Add custom MCP server, paste `https://mcp.pixelesq.app/mcp`, set authentication to OAuth and install it. A connection made on one address does not carry over to the other.

### Cursor

Add the server to `mcp.json`:

```json
{ "mcpServers": { "pixelesq": { "url": "https://mcp.pixelesq.app/mcp" } } }
```

### VS Code

```json
{ "servers": { "pixelesq": { "type": "http", "url": "https://mcp.pixelesq.app/mcp" } } }
```

### Other platforms

Clone the repository, point the agent's skills directory at `skills/`, and configure the MCP server URL `https://mcp.pixelesq.app/mcp`. Clients register dynamically or present a client ID metadata document; both are accepted.

## Sign-in and scopes

The connector uses OAuth 2.1 with PKCE. Sign in with Google or with a Pixelesq email and the code it sends. A Pixelesq account with at least one project is required; sign up at https://app.pixelesq.ai.

Scopes are granted at sign-in and stamped into the token: `projects:read`, `content:read`, `content:write`, `publish`, `analytics:read`. A tool outside the grant answers with a refusal that asks the client to reconnect.

## How edits stay safe

- Saves to pages, sections, headers, footers and entries change a draft, and `publish_page`, `publish_partial` and `publish_entry` make it live. A few writes change the live site right away: `update_page_meta` on a published page, the redirect tools, `update_collection_schema`, `update_entry` (a new name shows in listings), `delete_page`, `delete_entry`, `update_theme` (unless `publish: false`) and `update_form_schema` (a form has no draft). The skills tell the agent to confirm before any of these.
- Every save carries the `lastVersion` from the read before it; a stale version is refused instead of overwriting someone else's work.
- A publish carries `expectedRevisionId` and `expectedHeadAnchor` from the read the user reviewed, and refuses if the draft moved.
- Saves merge field by field, arrays replace whole, `null` clears a field. The agent only touches what the user asked for.
- Structural section edits (insert, remove, reorder, bind) take an `idempotencyKey` so a lost answer can be retried safely.

## Skills

| Skill | Use it for | References |
|---|---|---|
| [getting-started](skills/getting-started/SKILL.md) | Connecting a client, the complete tool map, scopes, the safety rules | |
| [website-management](skills/website-management/SKILL.md) | Pages, sections, partials, collections, entries, images, forms, domains | section guide (96 section types), site recipes, section catalog JSON |
| [content-creation](skills/content-creation/SKILL.md) | Blog posts, landing pages, entries and section copy in the brand voice | quality rubric |
| [design-theming](skills/design-theming/SKILL.md) | Theme colors, fonts, spacing, radius, appearance, section choice by look | font pairings, section visual guide |
| [seo-optimization](skills/seo-optimization/SKILL.md) | Search Console, metadata, structured data, indexing, redirects | JSON-LD recipes, social meta specs |
| [analytics-growth](skills/analytics-growth/SKILL.md) | Traffic, search performance, forms, AI referrals, Web Vitals | |
| [site-operations](skills/site-operations/SKILL.md) | Launch checks, publishing order, domains, recovery, monitoring | pre-launch checklist, webhook patterns |

## Agents

| Agent | Focus |
|---|---|
| [site-manager](agents/site-manager.md) | Any site task end to end, delegating deep work to the specialists |
| [seo-specialist](agents/seo-specialist.md) | Audits, Search Console, metadata, structured data, redirects |
| [content-strategist](agents/content-strategist.md) | Brand-aligned writing and entry creation |
| [design-consultant](agents/design-consultant.md) | Theme, typography, composition, section swaps |

## The 70 tools

| Area | Tools |
|---|---|
| Projects | `list_projects`, `get_project`, `get_profile`, `list_domains`, `search_content` |
| Pages | `list_pages`, `get_page`, `get_page_content`, `get_page_revisions`, `create_page`, `duplicate_page`, `update_page_meta`, `save_page_content`, `publish_page`, `unpublish_page`, `delete_page`, `revert_page_revision`, `revert_page_revision_to_version` |
| Sections | `list_section_types`, `get_section_defaults`, `get_section_content`, `save_section_content`, `insert_section`, `remove_section`, `reorder_sections`, `bind_section_to_collection`, `unbind_section_from_collection` |
| Collections and entries | `list_collections`, `get_collection`, `create_collection`, `update_collection_schema`, `list_entries`, `get_entry`, `create_entry`, `save_entry_content`, `update_entry`, `duplicate_entry`, `publish_entry`, `delete_entry` |
| Partials | `list_partials`, `get_partial_content`, `save_partial_content`, `publish_partial`, `unpublish_partial` |
| SEO and analytics | `get_gsc_connection_status`, `get_search_performance`, `get_page_index_status`, `get_all_page_statuses`, `inspect_url`, `get_site_analytics`, `get_ai_referral_analytics` |
| Redirects | `list_redirects`, `create_redirect`, `update_redirect`, `delete_redirect` |
| Forms | `list_forms`, `get_form`, `create_form`, `update_form_schema`, `get_form_submissions` |
| Assets and images | `list_assets`, `update_asset`, `upload_asset`, `upload_image`, `search_stock_images`, `generate_image`, `get_image_job`, `get_imagegen_quota` |
| Theme | `get_theme`, `update_theme` |

Claude.ai, Claude Desktop and Cowork are offered 67 of these: the three AI image generation tools are withheld there, and in Claude Code unless its connection was registered dynamically. Other clients can get all 70. Read tools change nothing; write tools carry the hints that let clients ask before running them.

## Repository layout

```
pixelesq-skills/
├── .claude-plugin/
│   ├── plugin.json            Claude Code plugin manifest
│   └── marketplace.json       lets the repo install as a marketplace
├── .cursor-plugin/plugin.json Cursor plugin manifest
├── .mcp.json                  the connector for Claude Code (http transport)
├── mcp.json                   the same connector in Cursor's format
├── AGENTS.md                  context for agents that read AGENTS.md
├── CHANGELOG.md
├── agents/                    four specialist agents
├── assets/logo.svg
├── scripts/generate-section-guide.mjs
└── skills/
    ├── getting-started/
    ├── website-management/    references: section-catalog.json, section-guide.md, site-recipes.md
    ├── content-creation/      references: quality-rubric.md
    ├── design-theming/        references: font-pairings.md, section-visual-guide.md
    ├── seo-optimization/      references: json-ld-recipes.md, social-meta-specs.md
    ├── analytics-growth/
    └── site-operations/       references: pre-launch-checklist.md, webhook-patterns.md
```

## Keeping it current

- The section guides are generated. Refresh `skills/website-management/references/section-catalog.json` from the connector's `list_section_types` (all groups, full detail), then run `node scripts/generate-section-guide.mjs`.
- The tool map mirrors the connector's README, which is generated from the tool registry.
- Validate before publishing: `claude plugin validate .`
- The ChatGPT plugin is updated with a ZIP on the OpenAI Plugins page (Upload plugin to make changes): run `npm run submission:chatgpt` in pixelesq-mcp, then `node scripts/build-openai-bundle.mjs` here writes `dist/pixelesq-chatgpt-<version>.zip` (the plugin manifest, `mcp.json`, the skills, the icon and the listing screenshots).

## Links

- [Pixelesq](https://www.pixelesq.com)
- [Connector documentation](https://www.pixelesq.com/docs/integrations/claude)
- [Agent Skills](https://agentskills.io)
- [Model Context Protocol](https://modelcontextprotocol.io)
- [Privacy policy](https://www.pixelesq.com/legal/privacy-policy) and [terms](https://www.pixelesq.com/legal/terms-of-use)
- Support: [hello@pixelesq.com](mailto:hello@pixelesq.com) · [Help center](https://www.pixelesq.com/help)

## License

MIT
