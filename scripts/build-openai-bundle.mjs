// Builds dist/pixelesq-openai-plugin.zip for the Skills tab of the OpenAI
// plugin portal: a root plugin.json in the Agent Plugins 1.0.0 schema plus the
// skills folder. No MCP config and no screenshots in the bundle; the portal
// takes those from the MCP scan and the listing form.
import { execFileSync } from "node:child_process";
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";

const claude = JSON.parse(readFileSync(".claude-plugin/plugin.json", "utf8"));
const stage = "dist/pixelesq";
rmSync("dist", { recursive: true, force: true });
mkdirSync(stage, { recursive: true });
cpSync("skills", `${stage}/skills`, { recursive: true });
cpSync("assets", `${stage}/assets`, { recursive: true });
writeFileSync(`${stage}/plugin.json`, JSON.stringify({
	$schema: "https://agent-plugins.org/schemas/1.0.0/plugin.schema.json",
	name: "pixelesq",
	version: claude.version,
	description: claude.description,
	author: claude.author,
	homepage: "https://www.pixelesq.com",
	license: "MIT",
	keywords: claude.keywords,
	extensions: {
		"com.openai": {
			interface: {
				displayName: "Pixelesq",
				shortDescription: "Build and manage your website",
				longDescription: "Create pages, edit sections, write content into collections, tune SEO and structured data, read Search Console and site analytics, manage redirects and images, and restyle the theme of your Pixelesq site. Every edit is a draft until you publish.",
				developerName: "Pixelesq",
				category: "Productivity",
				websiteURL: "https://www.pixelesq.com",
				privacyPolicyURL: "https://www.pixelesq.com/legal/privacy-policy",
				termsOfServiceURL: "https://www.pixelesq.com/legal/terms-of-use",
				logo: "./assets/logo.svg",
				composerIcon: "./assets/logo.svg",
			},
		},
	},
}, null, "\t") + "\n");
execFileSync("zip", ["-qr", "../pixelesq-openai-plugin.zip", "."], { cwd: stage });
rmSync(stage, { recursive: true, force: true });
console.log("dist/pixelesq-openai-plugin.zip");
