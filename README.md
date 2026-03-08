# Pixelesq Agent Skills

Manage your [Pixelesq](https://www.pixelesq.com) websites from any AI agent. Create pages, write content, optimize SEO, configure design, analyze traffic, and publish -- all through natural conversation.

## What's included

### 6 Skills

| Skill | Description |
|-------|-------------|
| **website-management** | Pages, sections, partials, forms, collections, domains, assets |
| **seo-optimization** | Google Search Console, meta optimization, JSON-LD, redirects, IndexNow |
| **content-creation** | Blog posts, landing pages, collection entries, copywriting frameworks |
| **design-theming** | Theme colors, typography, spacing, section selection, page composition |
| **analytics-growth** | Traffic analysis, form conversions, Web Vitals, AI referral tracking |
| **site-operations** | Site launch, domains, publishing, redirects, webhooks, integrations |

### 4 Agents

| Agent | Focus |
|-------|-------|
| **Site Manager** | General-purpose management with all 38 tools |
| **SEO Specialist** | Search audits, GSC analysis, meta optimization |
| **Content Strategist** | Brand-aligned writing with copywriting frameworks |
| **Design Consultant** | Theme configuration, section selection, visual composition |

### 38 MCP Tools

Projects, pages, collections, entries, sections, SEO, analytics, redirects, themes, assets, forms, partials, and domains.

## Compatibility

These skills follow the [Agent Skills](https://agentskills.io) open standard and work across:

- **Claude** (claude.ai, Claude Code, Claude API)
- **Cursor**
- **OpenAI Codex**
- **GitHub Copilot / VS Code**
- **Gemini CLI**
- **Goose, Roo Code, Amp, Junie**
- And 20+ other compatible platforms

## Setup

### Claude Code / Cursor

Install as a plugin:

```
/plugin install pixelesq-skills
```

Or add the MCP server manually in your project's `.mcp.json`:

```json
{
  "mcpServers": {
    "pixelesq": {
      "url": "https://pixelesq-mcp.pixelesq.workers.dev/mcp"
    }
  }
}
```

### Other platforms

1. Clone this repository
2. Point your agent's skills directory to the `skills/` folder
3. Configure the MCP server URL: `https://pixelesq-mcp.pixelesq.workers.dev/mcp`

## Authentication

The MCP server uses OAuth. When you first connect, you'll be prompted to sign in with your Pixelesq account (Google or email/OTP).

## Repository Structure

```
pixelesq-skills/
├── .claude-plugin/plugin.json
├── .cursor-plugin/plugin.json
├── .mcp.json
├── AGENTS.md
├── CLAUDE.md
├── LICENSE
├── README.md
├── agents/
│   ├── site-manager.md
│   ├── seo-specialist.md
│   ├── content-strategist.md
│   └── design-consultant.md
└── skills/
    ├── website-management/
    │   ├── SKILL.md
    │   └── references/
    │       ├── section-guide.md
    │       └── site-recipes.md
    ├── seo-optimization/
    │   ├── SKILL.md
    │   └── references/
    │       ├── json-ld-recipes.md
    │       └── social-meta-specs.md
    ├── content-creation/
    │   ├── SKILL.md
    │   └── references/
    │       └── quality-rubric.md
    ├── design-theming/
    │   ├── SKILL.md
    │   └── references/
    │       ├── font-pairings.md
    │       └── section-visual-guide.md
    ├── analytics-growth/
    │   └── SKILL.md
    └── site-operations/
        ├── SKILL.md
        └── references/
            ├── pre-launch-checklist.md
            └── webhook-patterns.md
```

## Links

- [Pixelesq](https://www.pixelesq.com) -- AI-native WebOps platform
- [Agent Skills Spec](https://agentskills.io) -- The open standard for agent capabilities
- [MCP](https://modelcontextprotocol.io) -- Model Context Protocol

## License

MIT
