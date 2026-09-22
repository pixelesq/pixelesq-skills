# Changelog

## Unreleased

- 68 tools documented (was 65): `get_form`, `create_form` and `update_form_schema` build and edit forms, including quiz scoring and the email gate.
- The safety rules name the tools that change the live site without a publish step: `update_theme` unless `publish: false`, and `update_form_schema`, because a form has no draft.

## 1.1.0 (2026-09-10)

- Canonical server URL `https://mcp.pixelesq.app/mcp` everywhere (the workers.dev URL still works for existing connections).
- 65 tools documented (was 48): sections, revisions, collection bindings, partials, redirects, stock and AI images, theme.
- New `getting-started` skill: connection steps per client, scopes, the complete tool map, the safety rules.
- Every skill rewritten against the live tool contracts: `lastVersion` on saves, merge semantics, publish preconditions, `idempotencyKey` on structural edits, `jsonLD` and `jsonLDPatch` on `update_page_meta`, the real theme variable shape.
- Section guides regenerated from the live catalog of 96 section types (`references/section-catalog.json`, `scripts/generate-section-guide.mjs`); two nonexistent types removed.
- Agents rewritten with valid frontmatter and the tool inheritance the plugin system expects.
- `scripts/build-openai-bundle.mjs` builds the skills ZIP the OpenAI plugin portal takes.
- `.claude-plugin/marketplace.json` added so the repository installs as a marketplace; `.mcp.json` declares the HTTP transport for Claude Code and `mcp.json` carries the same server for Cursor.

## 1.0.0 (2026-06)

- Six skills, four agents, Claude Code and Cursor plugin manifests.
