// Regenerates the section catalog tables from references/section-catalog.json,
// which is the output of the MCP tool list_section_types. Refresh the JSON
// from a live call, then run: node scripts/generate-section-guide.mjs
import { readFileSync, writeFileSync } from "node:fs";

const catalog = JSON.parse(readFileSync("skills/website-management/references/section-catalog.json", "utf8"));
const groups = {};
for (const s of catalog.sections) (groups[s.group] ??= []).push(s);
const groupOrder = ["hero", "features", "content", "stats", "testimonials", "logos", "faqs", "form", "cta", "header", "footer"];
const groupTitles = {
	hero: "Hero (page openers)",
	features: "Features",
	content: "Content and media",
	stats: "Stats and comparisons",
	testimonials: "Testimonials and social proof",
	logos: "Logos and moving strips",
	faqs: "FAQs",
	form: "Forms and pricing",
	cta: "Calls to action",
	header: "Headers (usually partials)",
	footer: "Footers (usually partials)",
};
const cell = (t) => String(t ?? "").replace(/\|/g, "\\|").replace(/\s+/g, " ").trim();

let out = `# Section catalog

${catalog.count} section types, generated on ${catalog.generatedAt} from the live \`list_section_types\` tool. Regenerate with \`node scripts/generate-section-guide.mjs\` after refreshing \`section-catalog.json\`. Call \`get_section_defaults\` with a type name to get its exact content and layout structure before inserting it.

The **type** is what goes on \`uislices[0].type\`. **Content fields** are the \`ctx\` keys the section renders; fields starting with \`item\` live inside each entry of \`ctx.items\`.

`;
for (const g of groupOrder) {
	const list = (groups[g] ?? []).sort((a, b) => a.type.localeCompare(b.type));
	if (!list.length) continue;
	out += `## ${groupTitles[g] ?? g} (${list.length})\n\n| Type | What it is | Use it for | Content fields |\n|---|---|---|---|\n`;
	for (const s of list) {
		out += `| \`${s.type}\` | ${cell(s.summary)} | ${cell((s.uses ?? []).slice(0, 2).join("; "))} | ${cell((s.contentFields ?? []).join(", "))} |\n`;
	}
	out += "\n";
}
const known = new Set(Object.keys(groups));
for (const g of known) if (!groupOrder.includes(g)) throw new Error(`unlisted group ${g}`);

out += `## Choosing by page position

**Landing page (conversion):** a hero (\`HeroWithMedia\`, \`HeroWithMediaBg\`, \`HeroSocialProof\`, \`HeroWithStats\`), a logo strip (\`LogoGrid\`, \`MovingLogos\`, \`LogosInCard\`), features (\`StickyFeatures\`, \`IconFeatures\`, \`FeaturesInCard\`, \`TabbedFeaturePanel\`), how it works (\`HowItWorks\`, \`HowItWorksMedia\`), proof (\`TestimonialGrid\`, \`TestimonialBrandTabs\`, \`StatsOnCard\`, \`CompareBars\`), objections (\`Faqs\`, \`FaqsOnCard\`), then a close (\`Banner\`, \`SimpleForm\`, \`FormInCard\`).

**Pricing page:** \`SimpleHero\`, \`PqPricing\` or \`PqPricingTable\`, \`CompareTable\` for plan-by-plan detail, \`Faqs\`, \`TestimonialsWithLogos\`, \`Banner\`.

**About page:** \`SimpleHero\` or \`HeroWithMediaBg\`, alternating \`CardWithMedia\`, a team grid (\`MediaCards\`, \`MediaGridTrio\`), values (\`IconFeatures\`, \`TextGrid\`), \`Banner\`.

**Blog post or guide:** \`BlogHero\`, \`ArticleWithToc\` or \`ArticleWithSidebar\`, related items (\`MediaCards\`), \`FormInCard\` for a newsletter.

**Documentation:** \`DocWithSidebar\`, \`GlossaryAlphaNav\` for term lists, \`ChangelogShowcase\` for release notes.

**Portfolio or case study:** \`HeroWithMedia\`, \`MediaBentoCards\` or \`BentoGallery\`, \`StatsOnCard\` or \`RollingStats\`, \`TestimonialGrid\`, \`Banner\`.

**Events and schedules:** \`CalendarView\`, \`ItineraryCards\`.

## Combination patterns

- **Problem to solution:** hero states the problem, features present the solution, testimonials prove it, a banner closes.
- **Show, do not tell:** \`HeroWithMediaBg\`, \`MediaBentoCards\`, \`StatsOnCard\`, \`Banner\`.
- **Trust ladder:** hero, \`LogoGrid\`, features, testimonials, \`Faqs\`, \`Banner\`.
- **Storytelling:** \`HeroWithMedia\`, \`StickyFeatures\`, \`CardWithMedia\`, \`Testimonial\`, \`Banner\`.
- **Comparison:** \`SimpleHero\`, \`CompareTable\` or \`CompareBars\`, \`TabbedBenchmark\`, \`Faqs\`, \`Banner\`.

Use \`SectionDivider\` between dense sections for breathing room. Keep the header and footer as partials and embed them as \`Partial\` sections rather than copying them into every page.
`;
writeFileSync("skills/website-management/references/section-guide.md", out);
console.log(`section-guide.md regenerated: ${catalog.count} types`);

// Visual guide: the same catalog bucketed by the effect a section produces
const buckets = [
	["Immersive and full-bleed", /^(HeroWithMediaBg|HeroMediaBgCard|HeroWithMediaInset|MediaBgCards|MediaBgIconCards|HeroRollingMedia|BentoGallery)$/],
	["Motion and rotation", /(Rolling|Moving|Carousel|Slider)/],
	["Scroll-driven and tabbed", /(Sticky|Tabbed)/],
	["Cards", /(Card|InCard)/],
	["Grids and galleries", /(Grid|Bento|Gallery|Trio)/],
	["Comparison and numbers", /(Compare|Stats|Benchmark)/],
	["Reading layouts", /(Article|Doc|Glossary|Changelog|Calendar|Itinerary|HowItWorks|TextGrid|SimpleMedia)/],
	["Minimal and single-message", /^(SimpleHero|HeroWithMedia|HeroWithMediaBelow|HeroWithMediaItems|HeroWithInputField|HeroWithPrompt|HeroWithStats|HeroSocialProof|BlogHero|Banner|SimpleCard|Testimonial|SimpleForm|FormWithIcons|SectionDivider)$/],
	["Navigation (partials)", /(Header|Footer)/],
];
const placed = new Set();
let visual = `# Section visual guide

The ${catalog.count} section types grouped by the visual effect they produce, generated on ${catalog.generatedAt} from the same catalog as \`section-guide.md\`. Use it to pick a section for the experience you want; use the catalog for what each one contains.

`;
for (const [title, re] of buckets) {
	const list = catalog.sections.filter((s) => !placed.has(s.type) && re.test(s.type)).sort((a, b) => a.type.localeCompare(b.type));
	if (!list.length) continue;
	for (const s of list) placed.add(s.type);
	visual += `## ${title} (${list.length})\n\n| Type | Effect |\n|---|---|\n`;
	for (const s of list) visual += `| \`${s.type}\` | ${cell(s.summary)} |\n`;
	visual += "\n";
}
const rest = catalog.sections.filter((s) => !placed.has(s.type)).sort((a, b) => a.type.localeCompare(b.type));
if (rest.length) {
	visual += `## Everything else (${rest.length})\n\n| Type | Effect |\n|---|---|\n`;
	for (const s of rest) visual += `| \`${s.type}\` | ${cell(s.summary)} |\n`;
	visual += "\n";
}
visual += `## Composition rules

1. Open strong: a full-bleed or media hero for drama, a card hero for restraint, \`HeroSocialProof\` or \`HeroWithStats\` when proof is the message.
2. Alternate density: follow a dense grid with a single statement (\`Banner\`, \`Testimonial\`, \`JustStats\`) or a \`SectionDivider\`.
3. Build toward the close: scroll-driven and tabbed sections carry momentum mid-page; keep the last section before the footer a single clear call to action.
4. One motion effect per screen: rolling words, moving logos and sliders compete when stacked.
5. Mobile first for sliders and sticky sections: check the preview at phone width before publishing.
`;
writeFileSync("skills/design-theming/references/section-visual-guide.md", visual);
console.log(`section-visual-guide.md regenerated: ${placed.size + rest.length} types`);
