// Builds dist/pixelesq-chatgpt-<version>.zip for "Upload plugin to make
// changes" on the OpenAI Plugins page: a root plugin.json in the Agent Plugins
// 1.0.0 schema, mcp.json, the skills and the assets. The listing, review and
// release fields, the server block and the images come from pixelesq-mcp: run
// npm run submission:chatgpt there first (PIXELESQ_MCP_DIR overrides
// ../pixelesq-mcp).
import { execFileSync } from "node:child_process";
import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const mcpDir = process.env.PIXELESQ_MCP_DIR || "../pixelesq-mcp";
const chatgpt = JSON.parse(readFileSync(join(mcpDir, "docs/chatgpt-plugin.json"), "utf8"));
const claude = JSON.parse(readFileSync(".claude-plugin/plugin.json", "utf8"));
const stage = "dist/pixelesq";
rmSync("dist", { recursive: true, force: true });
mkdirSync(stage, { recursive: true });
cpSync("skills", `${stage}/skills`, { recursive: true });
for (const [target, source] of Object.entries(chatgpt.files)) {
	mkdirSync(dirname(join(stage, target)), { recursive: true });
	cpSync(join(mcpDir, source), join(stage, target));
}
writeFileSync(`${stage}/mcp.json`, JSON.stringify(chatgpt.mcp, null, "\t") + "\n");
writeFileSync(`${stage}/plugin.json`, JSON.stringify({
	$schema: "https://agent-plugins.org/schemas/1.0.0/plugin.schema.json",
	name: chatgpt.name,
	version: chatgpt.version,
	description: "Build, edit and grow a Pixelesq website from a conversation: the Pixelesq MCP server and seven skills for pages and sections, content collections, forms, SEO and Search Console, analytics, redirects, images and the theme.",
	author: { ...claude.author, name: chatgpt.openai.interface.developerName },
	homepage: "https://www.pixelesq.com",
	repository: claude.repository,
	license: "MIT",
	keywords: claude.keywords,
	extensions: { "com.openai": chatgpt.openai },
}, null, "\t") + "\n");
const ui = chatgpt.openai.interface;
const missing = [ui.logo, ui.composerIcon, ...ui.screenshots].filter((path) => !existsSync(join(stage, path)));
if (missing.length) throw new Error(`plugin.json names files the package lacks: ${missing.join(", ")}`);
const zip = `pixelesq-chatgpt-${chatgpt.version}.zip`;
execFileSync("zip", ["-qrX", `../${zip}`, ".", "-x", "*.DS_Store"], { cwd: stage });
rmSync(stage, { recursive: true, force: true });
console.log(`dist/${zip}`);
