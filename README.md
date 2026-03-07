# Pixelesq Skills

Agent Skills for managing [Pixelesq](https://www.pixelesq.com) websites. Create pages, edit content, monitor SEO, manage collections, and publish updates through any compatible AI agent.

## Installing

These skills work with any agent that supports the [Agent Skills](https://agentskills.io/) standard.

### Claude Code

```bash
claude plugin marketplace add pixelesq/pixelesq-skills
claude plugin install pixelesq@pixelesq-skills
```

### Cursor

Install from the Cursor Marketplace or add manually via **Settings > Rules > Add Rule > Remote Rule (Github)** with `pixelesq/pixelesq-skills`.

### npx skills

```bash
npx skills add https://github.com/pixelesq/pixelesq-skills
```

### Manual install

Clone this repo and copy the `skills/` folder into your agent's skills directory:

| Agent | Skills directory | Docs |
|-------|-----------------|------|
| Claude Code | `~/.claude/skills/` | [docs](https://code.claude.com/docs/en/skills) |
| Cursor | `~/.cursor/skills/` | [docs](https://cursor.com/docs/skills) |
| OpenAI Codex | `~/.codex/skills/` | [docs](https://developers.openai.com/codex/skills/) |
| OpenCode | `~/.config/opencode/skills/` | [docs](https://opencode.ai/docs/skills/) |

## Prerequisites

1. **Pixelesq account** -- Sign up at [app.pixelesq.ai](https://app.pixelesq.ai)
2. **MCP server configured** -- The `.mcp.json` in this repo points to the Pixelesq MCP server. Your agent needs MCP support enabled.
3. **Authentication** -- When first connecting, you'll authenticate via Google sign-in or email/OTP

## Skills

| Skill | Description |
|-------|-------------|
| Website Management | Create pages with 60+ section types, edit content, manage collections and entries, publish updates, handle project settings |
| SEO Optimization | Analyze Google Search Console data, optimize meta titles and descriptions, manage redirects, check indexing status |
| Content Creation | Write blog posts, build landing pages, create collection entries with brand voice matching and structured content |

## Agent

| Agent | Description |
|-------|-------------|
| Site Manager | Autonomous agent for multi-step website management -- builds complete pages, runs SEO audits, manages content in bulk |

## MCP Tools (40 total)

### Pages (9 tools)
`list_pages`, `get_page`, `get_page_content`, `create_page`, `update_page_meta`, `save_page_content`, `publish_page`, `unpublish_page`, `delete_page`

### Collections & Entries (9 tools)
`list_collections`, `get_collection`, `list_entries`, `get_entry`, `create_entry`, `update_entry`, `save_entry_content`, `publish_entry`, `delete_entry`

### Section Catalog (2 tools)
`list_section_types`, `get_section_defaults`

### SEO & Analytics (8 tools)
`get_search_performance`, `get_page_index_status`, `get_all_page_statuses`, `inspect_url`, `get_gsc_connection_status`, `get_site_analytics`, `list_redirects`, `create_redirect`

### Projects (3 tools)
`list_projects`, `get_project`, `list_domains`

### Forms (2 tools)
`list_forms`, `get_form_submissions`

### Assets & Themes (3 tools)
`list_assets`, `get_theme`, `update_theme`

### Partials (2 tools)
`list_partials`, `get_partial_content`

## Resources

- [Pixelesq](https://www.pixelesq.com) -- AI-native website builder
- [MCP Server Documentation](https://www.pixelesq.com/docs/integrations/claude) -- Setup, tools, and examples
- [Privacy Policy](https://www.pixelesq.com/legal/privacy-policy)
- [Support](mailto:hello@pixelesq.com)

## License

MIT
