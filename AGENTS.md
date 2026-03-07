# Pixelesq

This repository contains Agent Skills for managing Pixelesq websites. It connects to the Pixelesq MCP server for all site operations.

## MCP Server

The Pixelesq MCP server is configured in `.mcp.json`. It provides 40 tools for managing websites, pages, content, SEO, analytics, forms, themes, and redirects. Authentication is via Google sign-in or email/OTP.

## Skills

- **Website Management** (`skills/website-management/`) — Page creation with 60+ section types, editing, publishing, collections, entries, and project settings
- **SEO Optimization** (`skills/seo-optimization/`) — Google Search Console analysis, meta optimization, redirects, indexing status
- **Content Creation** (`skills/content-creation/`) — Blog posts, landing pages, collection entries with brand voice matching

## Agent

- **Site Manager** (`agents/site-manager.md`) — Autonomous agent for multi-step website management tasks
