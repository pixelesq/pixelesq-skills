# Changelog

## 1.2.0 (2026-10-22)

- 70 tools documented (was 65): `get_form`, `create_form` and `update_form_schema` build and edit forms, including quiz scoring, the email gate and calculator results (an amount headline, live figures and a per-visitor breakdown); `get_profile` reads the signed-in account; `update_asset` changes an asset's description and tags.
- The safety rules name every tool that changes the live site without a publish step: `update_page_meta` on a published page, the redirect tools, `update_collection_schema`, `update_entry`, `delete_page`, `delete_entry`, `update_theme` unless `publish: false`, and `update_form_schema`, because a form has no draft.
- Stock photos are placed with their Unsplash address and a photographer credit, and `upload_asset` reports the use to Unsplash instead of copying the photo.
- `upload_image` in clients without views (Claude Code) returns a one-time upload command for a local file.
- Binding a section to a collection sets the field mapping, and a binding that cannot be mapped is reported.
- The count of tools offered in claude.ai, Claude Desktop and Cowork is 67 (the three AI image generation tools are withheld there).
- ChatGPT steps follow the current Developer mode and Plugins flow, and the ChatGPT listing's address is named.
- Cursor: the README leads with `mcp.json`, and the plugin homepage points at the Cursor install steps.
- Frontmatter descriptions with a colon are quoted, so every skill and agent parses as strict YAML.
- A root `plugin.json` for agent plugin directories, and `scripts/build-openai-bundle.mjs` builds the ChatGPT plugin ZIP for the OpenAI Plugins page.

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
