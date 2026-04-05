const PptxGenJS = require("pptxgenjs");
const fs = require("fs");
const path = require("path");

const pptx = new PptxGenJS();
pptx.layout = "LAYOUT_16x9";
pptx.author = "Daniel Wright";
pptx.company = "NavAIgate";
pptx.title = "Claude Code + NotebookLM: Infinite Memory";

// Brand constants
const BG = "0F172A";
const CARD = "1E293B";
const ACCENT = "3B82F6";
const PURPLE = "8B5CF6";
const TEAL = "0EA5E9";
const TEXT_PRIMARY = "F8FAFC";
const TEXT_SECONDARY = "CBD5E1";
const TEXT_MUTED = "64748B";
const FONT = "Poppins";
const CODE_FONT = "Courier New";
const WARN_BG = "2D1F0E";
const WARN_BORDER = "FBB724";

const IMG_DIR = path.join(__dirname, "images");

function imgPath(name) {
    const p = path.join(IMG_DIR, name);
    return fs.existsSync(p) ? p : null;
}

function addAccentBar(slide, x, y, w) {
    slide.addShape(pptx.shapes.RECTANGLE, {
        x, y, w, h: 0.04,
        fill: { color: ACCENT }
    });
}

function addKicker(slide, text, x, y) {
    slide.addText(text, {
        x, y, w: 5, h: 0.3,
        fontSize: 10, fontFace: FONT, color: ACCENT,
        bold: true, letterSpacing: 3
    });
}

function addSlideNum(slide, num) {
    slide.addText(String(num), {
        x: 9.2, y: 5.1, w: 0.5, h: 0.3,
        fontSize: 10, fontFace: FONT, color: TEXT_MUTED, align: "right"
    });
}

// ============ SLIDE 1: Title ============
const s1 = pptx.addSlide();
s1.background = { fill: BG };
// Logo
const logoPath = "/Users/sky/Documents/GitHub/Navaigate/SVGS/NavAIgate.svg";
if (fs.existsSync(logoPath)) {
    s1.addImage({ path: logoPath, x: 0.5, y: 0.4, w: 0.6, h: 0.7 });
}
s1.addText([
    { text: "Claude Code + NotebookLM:\n", options: { fontSize: 36, color: TEXT_PRIMARY, bold: true, breakLine: true } },
    { text: "Infinite Memory", options: { fontSize: 36, color: ACCENT, bold: true } }
], { x: 0.5, y: 1.8, w: 6, h: 2, fontFace: FONT, lineSpacingMultiple: 1.15 });
addAccentBar(s1, 0.5, 3.9, 1.2);
s1.addText("Install, Configure & Master AI-Powered Long-Term Memory", {
    x: 0.5, y: 4.1, w: 7, h: 0.4,
    fontSize: 14, fontFace: FONT, color: TEXT_SECONDARY, fontWeight: 300
});
s1.addText("Daniel Wright  \u2022  NavAIgate  \u2022  dw@navaigate.dev  \u2022  navaigate.dev", {
    x: 0.5, y: 4.8, w: 7, h: 0.3,
    fontSize: 9, fontFace: FONT, color: TEXT_MUTED
});
const heroImg = imgPath("hero-01-brain.png");
if (heroImg) s1.addImage({ path: heroImg, x: 6.5, y: 0.5, w: 3.3, h: 4.8, rounding: true });

// ============ SLIDE 2: Agenda ============
const s2 = pptx.addSlide();
s2.background = { fill: BG };
addKicker(s2, "TODAY'S JOURNEY", 0.5, 0.4);
s2.addText("Agenda", { x: 0.5, y: 0.7, w: 5, h: 0.6, fontSize: 28, fontFace: FONT, color: TEXT_PRIMARY, bold: true });
addAccentBar(s2, 0.5, 1.35, 0.8);
const agendaLeft = [
    "The Problem: Claude's Amnesia",
    "The Solution: NotebookLM as Second Brain",
    "Live Install: NotebookLM Skill",
    "Authentication & Setup",
    "Key Commands & Quick Reference"
];
const agendaRight = [
    "Use Case: Enrichment \u2014 Deep Research",
    "Use Case: Content Multiplication",
    "Use Case: The AI Brain & WrapUp Skill",
    "Adding to Claude Co-work",
    "Q&A"
];
agendaLeft.forEach((item, i) => {
    s2.addShape(pptx.shapes.OVAL, { x: 0.5, y: 1.6 + i * 0.6, w: 0.3, h: 0.3, fill: { color: ACCENT } });
    s2.addText(String(i + 1), { x: 0.5, y: 1.6 + i * 0.6, w: 0.3, h: 0.3, fontSize: 9, fontFace: FONT, color: BG, bold: true, align: "center", valign: "middle", margin: 0 });
    s2.addText(item, { x: 0.95, y: 1.6 + i * 0.6, w: 4, h: 0.3, fontSize: 12, fontFace: FONT, color: TEXT_SECONDARY });
});
agendaRight.forEach((item, i) => {
    s2.addShape(pptx.shapes.OVAL, { x: 5.2, y: 1.6 + i * 0.6, w: 0.3, h: 0.3, fill: { color: ACCENT } });
    s2.addText(String(i + 6), { x: 5.2, y: 1.6 + i * 0.6, w: 0.3, h: 0.3, fontSize: 9, fontFace: FONT, color: BG, bold: true, align: "center", valign: "middle", margin: 0 });
    s2.addText(item, { x: 5.65, y: 1.6 + i * 0.6, w: 4, h: 0.3, fontSize: 12, fontFace: FONT, color: TEXT_SECONDARY });
});
addSlideNum(s2, 2);

// ============ SLIDE 3: The Problem ============
const s3 = pptx.addSlide();
s3.background = { fill: BG };
addKicker(s3, "01 // THE PROBLEM", 0.5, 0.4);
s3.addText([
    { text: "Claude Has ", options: { fontSize: 28, color: TEXT_PRIMARY, bold: true } },
    { text: "Amnesia", options: { fontSize: 28, color: ACCENT, bold: true } }
], { x: 0.5, y: 0.7, w: 5, h: 0.6, fontFace: FONT });
addAccentBar(s3, 0.5, 1.35, 0.6);
const problems = [
    "Every new session starts from zero",
    "Reading files to restore context burns tokens & money",
    "Memory is temporal \u2014 context fades as conversations grow",
    "No persistent recall across sessions"
];
problems.forEach((p, i) => {
    s3.addShape(pptx.shapes.OVAL, { x: 0.5, y: 1.6 + i * 0.65, w: 0.28, h: 0.28, fill: { color: "EF4444" } });
    s3.addText("!", { x: 0.5, y: 1.6 + i * 0.65, w: 0.28, h: 0.28, fontSize: 10, fontFace: FONT, color: "FFFFFF", bold: true, align: "center", valign: "middle", margin: 0 });
    s3.addText(p, { x: 0.95, y: 1.6 + i * 0.65, w: 4, h: 0.28, fontSize: 12, fontFace: FONT, color: TEXT_SECONDARY });
});
const amnesiaImg = imgPath("hero-02-amnesia.png");
if (amnesiaImg) s3.addImage({ path: amnesiaImg, x: 5.5, y: 0.8, w: 4, h: 4, rounding: true });
addSlideNum(s3, 3);

// ============ SLIDE 4: The Solution ============
const s4 = pptx.addSlide();
s4.background = { fill: BG };
addKicker(s4, "02 // THE SOLUTION", 0.5, 0.4);
s4.addText([
    { text: "NotebookLM as Your ", options: { fontSize: 26, color: TEXT_PRIMARY, bold: true } },
    { text: "Second Brain", options: { fontSize: 26, color: ACCENT, bold: true } }
], { x: 0.5, y: 0.7, w: 5, h: 0.6, fontFace: FONT });
addAccentBar(s4, 0.5, 1.35, 0.6);
const solutions = [
    { num: "1", title: "Persistent Memory", desc: "Decisions & context survive every session", col: ACCENT },
    { num: "2", title: "Cost Reduction", desc: "Offload research to NotebookLM (free tier)", col: PURPLE },
    { num: "3", title: "Content Multiplication", desc: "One source becomes podcast, video, infographic", col: TEAL }
];
solutions.forEach((s, i) => {
    const y = 1.55 + i * 1.05;
    s4.addShape(pptx.shapes.RECTANGLE, { x: 0.5, y, w: 4.5, h: 0.85, fill: { color: CARD }, line: { color: "334155", width: 1 } });
    s4.addText([
        { text: s.num + ". ", options: { fontSize: 14, color: s.col, bold: true } },
        { text: s.title, options: { fontSize: 14, color: TEXT_PRIMARY, bold: true } }
    ], { x: 0.7, y: y + 0.08, w: 4, h: 0.35, fontFace: FONT });
    s4.addText(s.desc, { x: 0.7, y: y + 0.42, w: 4, h: 0.3, fontSize: 10, fontFace: FONT, color: TEXT_MUTED });
});
const pillarsImg = imgPath("hero-03-pillars.png");
if (pillarsImg) s4.addImage({ path: pillarsImg, x: 5.5, y: 0.8, w: 4, h: 4, rounding: true });
addSlideNum(s4, 4);

// ============ SLIDE 5: Capabilities ============
const s5 = pptx.addSlide();
s5.background = { fill: BG };
addKicker(s5, "03 // CAPABILITIES", 0.5, 0.4);
s5.addText([
    { text: "What NotebookLM ", options: { fontSize: 26, color: TEXT_PRIMARY, bold: true } },
    { text: "Brings", options: { fontSize: 26, color: ACCENT, bold: true } },
    { text: " to Claude", options: { fontSize: 26, color: TEXT_PRIMARY, bold: true } }
], { x: 0.5, y: 0.7, w: 9, h: 0.5, fontFace: FONT });
addAccentBar(s5, 0.5, 1.25, 0.8);
const caps = [
    { title: "Persistent Memory", desc: "Decisions & rationale across sessions" },
    { title: "Personal CRM", desc: "Contacts, meetings, follow-ups" },
    { title: "Decision Journal", desc: "Record the \"why\" behind choices" },
    { title: "Content Multiplication", desc: "Podcast, video, infographic from one source" },
    { title: "Deep Research", desc: "40-70 sources synthesised into insights" },
    { title: "Meeting Intelligence", desc: "Store and query meeting transcripts" }
];
caps.forEach((c, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = 0.5 + col * 3.1;
    const y = 1.5 + row * 1.7;
    s5.addShape(pptx.shapes.RECTANGLE, { x, y, w: 2.9, h: 1.4, fill: { color: CARD }, line: { color: "334155", width: 1 } });
    s5.addText(c.title, { x: x + 0.2, y: y + 0.2, w: 2.5, h: 0.35, fontSize: 13, fontFace: FONT, color: TEXT_PRIMARY, bold: true });
    s5.addText(c.desc, { x: x + 0.2, y: y + 0.6, w: 2.5, h: 0.5, fontSize: 10, fontFace: FONT, color: TEXT_MUTED });
});
addSlideNum(s5, 5);

// ============ SLIDE 6: Skill File ============
const s6 = pptx.addSlide();
s6.background = { fill: BG };
addKicker(s6, "04 // THE SKILL FILE", 0.5, 0.4);
s6.addText([
    { text: "Inside ", options: { fontSize: 24, color: TEXT_PRIMARY, bold: true } },
    { text: "NotebookLMSkill.md", options: { fontSize: 24, color: ACCENT, bold: true } }
], { x: 0.5, y: 0.7, w: 5, h: 0.5, fontFace: FONT });
addAccentBar(s6, 0.5, 1.25, 0.6);
const skillParts = [
    { title: "Frontmatter", desc: "name, description, trigger phrases" },
    { title: "Step 0: Setup", desc: "Python check, venv creation, pip install" },
    { title: "Authentication", desc: "Custom Playwright script (built-in login can't work in Claude Code)" },
    { title: "Quick Reference", desc: "Full command table" },
    { title: "Autonomy Rules", desc: "What runs automatically vs. needs confirmation" },
    { title: "Error Handling", desc: "Common issues and fixes" }
];
skillParts.forEach((sp, i) => {
    const y = 1.45 + i * 0.58;
    s6.addText([
        { text: sp.title, options: { fontSize: 12, color: ACCENT, bold: true } },
        { text: " \u2014 " + sp.desc, options: { fontSize: 11, color: TEXT_SECONDARY } }
    ], { x: 0.9, y, w: 4.2, h: 0.4, fontFace: FONT });
});
const termImg = imgPath("hero-04-terminal.png");
if (termImg) s6.addImage({ path: termImg, x: 5.5, y: 0.8, w: 4, h: 4, rounding: true });
addSlideNum(s6, 6);

// ============ SLIDE 7: Live Install ============
const s7 = pptx.addSlide();
s7.background = { fill: BG };
addKicker(s7, "05 // LIVE INSTALL", 0.5, 0.4);
s7.addText([
    { text: "Step by ", options: { fontSize: 26, color: TEXT_PRIMARY, bold: true } },
    { text: "Step", options: { fontSize: 26, color: ACCENT, bold: true } }
], { x: 0.5, y: 0.7, w: 5, h: 0.5, fontFace: FONT });
addAccentBar(s7, 0.5, 1.25, 0.6);
const installSteps = [
    "Drop NotebookLMSkill.md into Claude Code",
    'Say: "Execute this skill"',
    "Claude checks Python version (needs 3.10+)",
    "Creates venv at ~/.notebooklm-venv",
    "Installs notebooklm-py[browser] via pip",
    "Runs playwright install chromium (browser for auth)",
    "Symlinks CLI to ~/bin/notebooklm",
    "Verify: notebooklm --help"
];
installSteps.forEach((step, i) => {
    s7.addShape(pptx.shapes.OVAL, { x: 0.5, y: 1.45 + i * 0.52, w: 0.26, h: 0.26, fill: { color: ACCENT } });
    s7.addText(String(i + 1), { x: 0.5, y: 1.45 + i * 0.52, w: 0.26, h: 0.26, fontSize: 9, fontFace: FONT, color: BG, bold: true, align: "center", valign: "middle", margin: 0 });
    s7.addText(step, { x: 0.9, y: 1.45 + i * 0.52, w: 4.2, h: 0.28, fontSize: 11, fontFace: FONT, color: TEXT_SECONDARY });
});
if (termImg) s7.addImage({ path: termImg, x: 5.5, y: 0.8, w: 4, h: 4, rounding: true });
addSlideNum(s7, 7);

// ============ SLIDE 8: Authentication ============
const s8 = pptx.addSlide();
s8.background = { fill: BG };
addKicker(s8, "06 // AUTHENTICATION", 0.5, 0.4);
s8.addText([
    { text: "Why a ", options: { fontSize: 24, color: TEXT_PRIMARY, bold: true } },
    { text: "Custom Login", options: { fontSize: 24, color: ACCENT, bold: true } },
    { text: " Script?", options: { fontSize: 24, color: TEXT_PRIMARY, bold: true } }
], { x: 0.5, y: 0.7, w: 5, h: 0.5, fontFace: FONT });
addAccentBar(s8, 0.5, 1.2, 0.6);
// Problem card
s8.addShape(pptx.shapes.RECTANGLE, { x: 0.5, y: 1.35, w: 4.5, h: 0.9, fill: { color: CARD }, line: { color: WARN_BORDER, width: 1 } });
s8.addText("The Problem", { x: 0.7, y: 1.4, w: 4, h: 0.25, fontSize: 11, fontFace: FONT, color: "FCD34D", bold: true });
s8.addText("Built-in notebooklm login needs interactive keyboard input. Claude Code can\u2019t do that \u2014 browser opens and closes instantly.", {
    x: 0.7, y: 1.65, w: 4, h: 0.5, fontSize: 9, fontFace: FONT, color: TEXT_MUTED
});
// Solution card
s8.addShape(pptx.shapes.RECTANGLE, { x: 0.5, y: 2.4, w: 4.5, h: 0.9, fill: { color: CARD }, line: { color: "334155", width: 1 } });
s8.addText("The Solution", { x: 0.7, y: 2.45, w: 4, h: 0.25, fontSize: 11, fontFace: FONT, color: ACCENT, bold: true });
s8.addText("Skill writes a custom Python script using Playwright (installed in step 6). Opens Chromium, waits for a file signal, captures cookies.", {
    x: 0.7, y: 2.7, w: 4, h: 0.5, fontSize: 9, fontFace: FONT, color: TEXT_MUTED
});
// Flow steps on the right
const authSteps = [
    "Claude runs custom script \u2014 Chromium opens",
    "You sign into Google in that browser",
    "Navigate to notebooklm.google.com",
    'Tell Claude: "I\'m signed in"',
    "Claude sends file signal \u2192 cookies captured",
    "Verify: notebooklm auth check"
];
s8.addText("THE FLOW", { x: 5.5, y: 0.8, w: 4, h: 0.25, fontSize: 9, fontFace: FONT, color: ACCENT, bold: true, letterSpacing: 2 });
authSteps.forEach((step, i) => {
    s8.addShape(pptx.shapes.OVAL, { x: 5.5, y: 1.15 + i * 0.52, w: 0.26, h: 0.26, fill: { color: ACCENT } });
    s8.addText(String(i + 1), { x: 5.5, y: 1.15 + i * 0.52, w: 0.26, h: 0.26, fontSize: 9, fontFace: FONT, color: BG, bold: true, align: "center", valign: "middle", margin: 0 });
    s8.addText(step, { x: 5.9, y: 1.15 + i * 0.52, w: 3.6, h: 0.28, fontSize: 10, fontFace: FONT, color: TEXT_SECONDARY });
});
// Warning box
s8.addShape(pptx.shapes.RECTANGLE, { x: 0.5, y: 4.6, w: 4.5, h: 0.5, fill: { color: WARN_BG }, line: { color: WARN_BORDER, width: 1 } });
s8.addText("If auth fails: delete ~/.notebooklm/browser_profile and retry", {
    x: 0.7, y: 4.65, w: 4.1, h: 0.4, fontSize: 9, fontFace: FONT, color: "FCD34D"
});
const authImg = imgPath("hero-08-auth.png");
if (authImg) s8.addImage({ path: authImg, x: 5.5, y: 0.8, w: 4, h: 4, rounding: true });
addSlideNum(s8, 8);

// ============ SLIDE 9: Quick Reference ============
const s9 = pptx.addSlide();
s9.background = { fill: BG };
addKicker(s9, "07 // COMMANDS", 0.5, 0.4);
s9.addText([
    { text: "Essential ", options: { fontSize: 26, color: TEXT_PRIMARY, bold: true } },
    { text: "Commands", options: { fontSize: 26, color: ACCENT, bold: true } }
], { x: 0.5, y: 0.7, w: 9, h: 0.5, fontFace: FONT });
addAccentBar(s9, 0.5, 1.25, 0.8);
const cmdRows = [
    [
        { text: "Task", options: { bold: true, color: ACCENT, fill: { color: CARD }, fontSize: 11, fontFace: FONT } },
        { text: "Command", options: { bold: true, color: ACCENT, fill: { color: CARD }, fontSize: 11, fontFace: FONT } }
    ],
    [{ text: "List notebooks", options: { color: TEXT_SECONDARY, fontSize: 10, fontFace: FONT } }, { text: "notebooklm list", options: { color: TEAL, fontSize: 10, fontFace: CODE_FONT } }],
    [{ text: "Create notebook", options: { color: TEXT_SECONDARY, fontSize: 10, fontFace: FONT } }, { text: 'notebooklm create "Title"', options: { color: TEAL, fontSize: 10, fontFace: CODE_FONT } }],
    [{ text: "Add URL source", options: { color: TEXT_SECONDARY, fontSize: 10, fontFace: FONT } }, { text: 'notebooklm source add "https://..."', options: { color: TEAL, fontSize: 10, fontFace: CODE_FONT } }],
    [{ text: "Add YouTube", options: { color: TEXT_SECONDARY, fontSize: 10, fontFace: FONT } }, { text: 'notebooklm source add "https://youtube.com/..."', options: { color: TEAL, fontSize: 10, fontFace: CODE_FONT } }],
    [{ text: "Chat with notebook", options: { color: TEXT_SECONDARY, fontSize: 10, fontFace: FONT } }, { text: 'notebooklm ask "question"', options: { color: TEAL, fontSize: 10, fontFace: CODE_FONT } }],
    [{ text: "Deep research", options: { color: TEXT_SECONDARY, fontSize: 10, fontFace: FONT } }, { text: 'notebooklm source add-research "query" --mode deep', options: { color: TEAL, fontSize: 9, fontFace: CODE_FONT } }],
    [{ text: "Generate podcast", options: { color: TEXT_SECONDARY, fontSize: 10, fontFace: FONT } }, { text: 'notebooklm generate audio "instructions"', options: { color: TEAL, fontSize: 10, fontFace: CODE_FONT } }],
    [{ text: "Generate infographic", options: { color: TEXT_SECONDARY, fontSize: 10, fontFace: FONT } }, { text: "notebooklm generate infographic", options: { color: TEAL, fontSize: 10, fontFace: CODE_FONT } }],
    [{ text: "Download", options: { color: TEXT_SECONDARY, fontSize: 10, fontFace: FONT } }, { text: "notebooklm download audio ./output.mp3", options: { color: TEAL, fontSize: 10, fontFace: CODE_FONT } }]
];
s9.addTable(cmdRows, {
    x: 0.5, y: 1.45, w: 9,
    border: { type: "solid", pt: 0.5, color: "334155" },
    colW: [3, 6],
    rowH: Array(10).fill(0.38)
});
addSlideNum(s9, 9);

// ============ SLIDE 10: Enrichment ============
const s10 = pptx.addSlide();
s10.background = { fill: BG };
addKicker(s10, "08 // USE CASE 1", 0.5, 0.4);
s10.addText([
    { text: "Enrichment", options: { fontSize: 26, color: ACCENT, bold: true } },
    { text: " \u2014 Deep Research", options: { fontSize: 26, color: TEXT_PRIMARY, bold: true } }
], { x: 0.5, y: 0.7, w: 5, h: 0.5, fontFace: FONT });
addAccentBar(s10, 0.5, 1.25, 0.6);
const enrichSteps = [
    "Have a conversation in Claude about any topic",
    '"Create a notebook from this conversation with deep research"',
    "NotebookLM ingests 40-70 sources automatically",
    "Ask for distilled insights and action items",
    "One API call \u2192 massive depth \u2192 zero extra token cost"
];
enrichSteps.forEach((step, i) => {
    s10.addShape(pptx.shapes.OVAL, { x: 0.5, y: 1.45 + i * 0.6, w: 0.26, h: 0.26, fill: { color: ACCENT } });
    s10.addText(String(i + 1), { x: 0.5, y: 1.45 + i * 0.6, w: 0.26, h: 0.26, fontSize: 9, fontFace: FONT, color: BG, bold: true, align: "center", valign: "middle", margin: 0 });
    s10.addText(step, { x: 0.9, y: 1.45 + i * 0.6, w: 4.2, h: 0.35, fontSize: 11, fontFace: FONT, color: TEXT_SECONDARY });
});
const enrichImg = imgPath("hero-05-enrichment.png");
if (enrichImg) s10.addImage({ path: enrichImg, x: 5.5, y: 0.8, w: 4, h: 4, rounding: true });
addSlideNum(s10, 10);

// ============ SLIDE 11: Enrichment Demo ============
const s11 = pptx.addSlide();
s11.background = { fill: BG };
addKicker(s11, "08 // LIVE DEMO", 0.5, 0.4);
s11.addText([
    { text: "Enrichment in ", options: { fontSize: 26, color: TEXT_PRIMARY, bold: true } },
    { text: "Action", options: { fontSize: 26, color: ACCENT, bold: true } }
], { x: 0.5, y: 0.7, w: 9, h: 0.5, fontFace: FONT });
addAccentBar(s11, 0.5, 1.25, 0.8);
// Code block
s11.addShape(pptx.shapes.RECTANGLE, { x: 0.5, y: 1.5, w: 9, h: 1.6, fill: { color: CARD }, line: { color: "334155", width: 1 } });
s11.addText('"Create a brand new notebook based on everything\nin this conversation. Add deep research on this topic.\nOnce done, give me 10 distilled insights with\n3 core actions I need to do immediately."', {
    x: 0.7, y: 1.6, w: 8.6, h: 1.4, fontSize: 11, fontFace: CODE_FONT, color: TEAL
});
// Quote
s11.addShape(pptx.shapes.RECTANGLE, { x: 0.5, y: 3.4, w: 0.06, h: 1, fill: { color: ACCENT } });
s11.addText('"NotebookLM did all the heavy lifting \u2014 deep research across dozens of sources \u2014 and Claude just made one API call to get the results. Zero extra token cost."', {
    x: 0.8, y: 3.4, w: 8.5, h: 1, fontSize: 12, fontFace: FONT, color: TEXT_PRIMARY, italic: true
});
// Warn
s11.addShape(pptx.shapes.RECTANGLE, { x: 0.5, y: 4.7, w: 9, h: 0.45, fill: { color: WARN_BG }, line: { color: WARN_BORDER, width: 1 } });
s11.addText('Pro tip: If research times out, follow up with: "Make sure you imported the deep research results"', {
    x: 0.7, y: 4.75, w: 8.6, h: 0.35, fontSize: 9, fontFace: FONT, color: "FCD34D"
});
addSlideNum(s11, 11);

// ============ SLIDE 12: Content Multiplication ============
const s12 = pptx.addSlide();
s12.background = { fill: BG };
addKicker(s12, "09 // USE CASE 2", 0.5, 0.4);
s12.addText([
    { text: "Content ", options: { fontSize: 26, color: TEXT_PRIMARY, bold: true } },
    { text: "Multiplication", options: { fontSize: 26, color: ACCENT, bold: true } }
], { x: 0.5, y: 0.7, w: 5, h: 0.5, fontFace: FONT });
s12.addText("One source \u2192 unlimited outputs, all free", {
    x: 0.5, y: 1.15, w: 5, h: 0.3, fontSize: 13, fontFace: FONT, color: TEXT_SECONDARY
});
addAccentBar(s12, 0.5, 1.5, 0.6);
const contentRows = [
    [
        { text: "Type", options: { bold: true, color: ACCENT, fill: { color: CARD }, fontSize: 10, fontFace: FONT } },
        { text: "Output", options: { bold: true, color: ACCENT, fill: { color: CARD }, fontSize: 10, fontFace: FONT } },
        { text: "Time", options: { bold: true, color: ACCENT, fill: { color: CARD }, fontSize: 10, fontFace: FONT } }
    ],
    [{ text: "Podcast", options: { color: TEXT_SECONDARY, fontSize: 10, fontFace: FONT } }, { text: ".mp3", options: { color: TEAL, fontSize: 10, fontFace: CODE_FONT } }, { text: "10-20 min", options: { color: TEXT_MUTED, fontSize: 10, fontFace: FONT } }],
    [{ text: "Video", options: { color: TEXT_SECONDARY, fontSize: 10, fontFace: FONT } }, { text: ".mp4", options: { color: TEAL, fontSize: 10, fontFace: CODE_FONT } }, { text: "15-45 min", options: { color: TEXT_MUTED, fontSize: 10, fontFace: FONT } }],
    [{ text: "Slide deck", options: { color: TEXT_SECONDARY, fontSize: 10, fontFace: FONT } }, { text: ".pptx", options: { color: TEAL, fontSize: 10, fontFace: CODE_FONT } }, { text: "5-10 min", options: { color: TEXT_MUTED, fontSize: 10, fontFace: FONT } }],
    [{ text: "Infographic", options: { color: TEXT_SECONDARY, fontSize: 10, fontFace: FONT } }, { text: ".png", options: { color: TEAL, fontSize: 10, fontFace: CODE_FONT } }, { text: "2-5 min", options: { color: TEXT_MUTED, fontSize: 10, fontFace: FONT } }],
    [{ text: "Report", options: { color: TEXT_SECONDARY, fontSize: 10, fontFace: FONT } }, { text: ".md", options: { color: TEAL, fontSize: 10, fontFace: CODE_FONT } }, { text: "2-5 min", options: { color: TEXT_MUTED, fontSize: 10, fontFace: FONT } }],
    [{ text: "Quiz", options: { color: TEXT_SECONDARY, fontSize: 10, fontFace: FONT } }, { text: ".html", options: { color: TEAL, fontSize: 10, fontFace: CODE_FONT } }, { text: "5-15 min", options: { color: TEXT_MUTED, fontSize: 10, fontFace: FONT } }],
    [{ text: "Mind map", options: { color: TEXT_SECONDARY, fontSize: 10, fontFace: FONT } }, { text: ".json", options: { color: TEAL, fontSize: 10, fontFace: CODE_FONT } }, { text: "Instant", options: { color: TEXT_MUTED, fontSize: 10, fontFace: FONT } }]
];
s12.addTable(contentRows, {
    x: 0.5, y: 1.65, w: 4.5,
    border: { type: "solid", pt: 0.5, color: "334155" },
    rowH: Array(8).fill(0.38)
});
const multiImg = imgPath("hero-06-multiply.png");
if (multiImg) s12.addImage({ path: multiImg, x: 5.5, y: 0.8, w: 4, h: 4, rounding: true });
addSlideNum(s12, 12);

// ============ SLIDE 13: Content Demo ============
const s13 = pptx.addSlide();
s13.background = { fill: BG };
addKicker(s13, "09 // LIVE DEMO", 0.5, 0.4);
s13.addText([
    { text: "Generate an ", options: { fontSize: 26, color: TEXT_PRIMARY, bold: true } },
    { text: "Infographic", options: { fontSize: 26, color: ACCENT, bold: true } }
], { x: 0.5, y: 0.7, w: 9, h: 0.5, fontFace: FONT });
addAccentBar(s13, 0.5, 1.25, 0.8);
s13.addShape(pptx.shapes.RECTANGLE, { x: 0.5, y: 1.5, w: 9, h: 1.1, fill: { color: CARD }, line: { color: "334155", width: 1 } });
s13.addText('"Create an infographic in NotebookLM using\npremium colours and fonts, based on our conversation.\nDownload it for me."', {
    x: 0.7, y: 1.6, w: 8.6, h: 0.9, fontSize: 12, fontFace: CODE_FONT, color: TEAL
});
// Quote
s13.addShape(pptx.shapes.RECTANGLE, { x: 0.5, y: 2.9, w: 0.06, h: 0.7, fill: { color: ACCENT } });
s13.addText('"Everything NotebookLM generates is free. Podcasts, videos, infographics \u2014 you\'re not burning Claude tokens for any of it."', {
    x: 0.8, y: 2.9, w: 8.5, h: 0.7, fontSize: 12, fontFace: FONT, color: TEXT_PRIMARY, italic: true
});
// Metrics
const metrics = [
    { val: "$0", label: "Generation Cost" },
    { val: "8+", label: "Output Types" },
    { val: "1", label: "API Call Needed" }
];
metrics.forEach((m, i) => {
    const x = 0.5 + i * 3.2;
    s13.addText(m.val, { x, y: 4.0, w: 2.8, h: 0.7, fontSize: 32, fontFace: FONT, color: ACCENT, bold: true, align: "center" });
    s13.addText(m.label, { x, y: 4.65, w: 2.8, h: 0.3, fontSize: 10, fontFace: FONT, color: TEXT_MUTED, align: "center" });
});
addSlideNum(s13, 13);

// ============ SLIDE 14: AI Brain ============
const s14 = pptx.addSlide();
s14.background = { fill: BG };
addKicker(s14, "10 // USE CASE 3", 0.5, 0.4);
s14.addText([
    { text: "The ", options: { fontSize: 26, color: TEXT_PRIMARY, bold: true } },
    { text: "AI Brain", options: { fontSize: 26, color: ACCENT, bold: true } }
], { x: 0.5, y: 0.7, w: 5, h: 0.5, fontFace: FONT });
s14.addText("Persistent memory that grows with every session", {
    x: 0.5, y: 1.15, w: 5, h: 0.3, fontSize: 12, fontFace: FONT, color: TEXT_SECONDARY
});
addAccentBar(s14, 0.5, 1.5, 0.6);
const brainSteps = [
    "Reviews the entire conversation",
    "Saves key memories (decisions, learnings, preferences)",
    "Writes a structured session summary",
    "Pushes it to your AI Brain notebook in NotebookLM"
];
brainSteps.forEach((step, i) => {
    s14.addShape(pptx.shapes.OVAL, { x: 0.5, y: 1.7 + i * 0.65, w: 0.26, h: 0.26, fill: { color: ACCENT } });
    s14.addText(String(i + 1), { x: 0.5, y: 1.7 + i * 0.65, w: 0.26, h: 0.26, fontSize: 9, fontFace: FONT, color: BG, bold: true, align: "center", valign: "middle", margin: 0 });
    s14.addText(step, { x: 0.9, y: 1.7 + i * 0.65, w: 4.2, h: 0.3, fontSize: 12, fontFace: FONT, color: TEXT_SECONDARY });
});
const brainImg = imgPath("hero-07-aibrain.png");
if (brainImg) s14.addImage({ path: brainImg, x: 5.5, y: 0.8, w: 4, h: 4, rounding: true });
addSlideNum(s14, 14);

// ============ SLIDE 15: WrapUp Skill ============
const s15 = pptx.addSlide();
s15.background = { fill: BG };
addKicker(s15, "10 // WRAPUP SKILL", 0.5, 0.4);
s15.addText([
    { text: "Inside ", options: { fontSize: 24, color: TEXT_PRIMARY, bold: true } },
    { text: "WrapUpSkill.md", options: { fontSize: 24, color: ACCENT, bold: true } }
], { x: 0.5, y: 0.7, w: 5, h: 0.5, fontFace: FONT });
addAccentBar(s15, 0.5, 1.25, 0.6);
const wrapParts = [
    { step: "Step 0:", desc: 'Auto-creates "AI Brain" notebook if none exists', col: ACCENT },
    { step: "Step 1:", desc: "Reviews session \u2014 decisions, work, learnings", col: PURPLE },
    { step: "Step 2:", desc: "Saves memories locally (feedback, project, user)", col: TEAL },
    { step: "Step 3:", desc: "Writes markdown session summary", col: ACCENT },
    { step: "Step 4:", desc: "Pushes summary to NotebookLM as a source", col: PURPLE }
];
wrapParts.forEach((wp, i) => {
    const y = 1.45 + i * 0.6;
    s15.addText([
        { text: wp.step + " ", options: { fontSize: 12, color: wp.col, bold: true } },
        { text: wp.desc, options: { fontSize: 11, color: TEXT_SECONDARY } }
    ], { x: 0.9, y, w: 4.2, h: 0.4, fontFace: FONT });
});
// Trigger card
s15.addShape(pptx.shapes.RECTANGLE, { x: 5.5, y: 1.5, w: 4, h: 1.2, fill: { color: CARD }, line: { color: "334155", width: 1 } });
s15.addText("Trigger Words", { x: 5.7, y: 1.6, w: 3.6, h: 0.3, fontSize: 12, fontFace: FONT, color: ACCENT, bold: true });
s15.addText('/wrapup  \u2022  "wrap up"  \u2022  "save this session"  \u2022  "end of session"', {
    x: 5.7, y: 1.95, w: 3.6, h: 0.5, fontSize: 9, fontFace: FONT, color: TEXT_MUTED
});
// Code block
s15.addShape(pptx.shapes.RECTANGLE, { x: 5.5, y: 3.0, w: 4, h: 0.6, fill: { color: CARD }, line: { color: "334155", width: 1 } });
s15.addText("/wrapup", { x: 5.7, y: 3.1, w: 3.6, h: 0.4, fontSize: 14, fontFace: CODE_FONT, color: TEAL });
addSlideNum(s15, 15);

// ============ SLIDE 16: Power Move ============
const s16 = pptx.addSlide();
s16.background = { fill: BG };
addKicker(s16, "11 // POWER MOVE", 0.5, 0.4);
s16.addText([
    { text: "Auto-Consult Your ", options: { fontSize: 26, color: TEXT_PRIMARY, bold: true } },
    { text: "AI Brain", options: { fontSize: 26, color: ACCENT, bold: true } }
], { x: 0.5, y: 0.7, w: 9, h: 0.5, fontFace: FONT });
addAccentBar(s16, 0.5, 1.25, 0.8);
s16.addText("Add this to your Claude project instructions:", {
    x: 0.5, y: 1.45, w: 9, h: 0.3, fontSize: 13, fontFace: FONT, color: TEXT_SECONDARY
});
s16.addShape(pptx.shapes.RECTANGLE, { x: 0.5, y: 1.9, w: 9, h: 1.1, fill: { color: CARD }, line: { color: "334155", width: 1 } });
s16.addText('"Whenever answering questions about strategy,\nalways consult the AI Brain notebook\nin NotebookLM first."', {
    x: 0.7, y: 2.0, w: 8.6, h: 0.9, fontSize: 12, fontFace: CODE_FONT, color: TEAL
});
// Two cards
const powerCards = [
    { title: "One API Call", desc: "Instant semantic search of your entire history" },
    { title: "Growing Brain", desc: "Every session adds more context \u2014 zero token cost to query" }
];
powerCards.forEach((pc, i) => {
    const x = 0.5 + i * 4.7;
    s16.addShape(pptx.shapes.RECTANGLE, { x, y: 3.4, w: 4.3, h: 1.2, fill: { color: CARD }, line: { color: "334155", width: 1 } });
    s16.addText(pc.title, { x: x + 0.2, y: 3.5, w: 3.9, h: 0.35, fontSize: 14, fontFace: FONT, color: TEXT_PRIMARY, bold: true });
    s16.addText(pc.desc, { x: x + 0.2, y: 3.9, w: 3.9, h: 0.5, fontSize: 10, fontFace: FONT, color: TEXT_MUTED });
});
addSlideNum(s16, 16);

// ============ SLIDE 17: Co-work ============
const s17 = pptx.addSlide();
s17.background = { fill: BG };
addKicker(s17, "12 // CO-WORK", 0.5, 0.4);
s17.addText([
    { text: "Adding to ", options: { fontSize: 26, color: TEXT_PRIMARY, bold: true } },
    { text: "Claude Co-work", options: { fontSize: 26, color: ACCENT, bold: true } }
], { x: 0.5, y: 0.7, w: 9, h: 0.5, fontFace: FONT });
addAccentBar(s17, 0.5, 1.25, 0.8);
const coworkSteps = [
    'In Claude Code: "Add NotebookLM as a Co-work skill please"',
    "Claude generates NotebookLMSkill-Cowork.md",
    "In Co-work: + \u2192 Skills \u2192 Manage Skills \u2192 Upload",
    "Upload the generated file",
    'Verify: "What was the last notebook I created?"'
];
coworkSteps.forEach((step, i) => {
    s17.addShape(pptx.shapes.OVAL, { x: 0.5, y: 1.5 + i * 0.55, w: 0.26, h: 0.26, fill: { color: ACCENT } });
    s17.addText(String(i + 1), { x: 0.5, y: 1.5 + i * 0.55, w: 0.26, h: 0.26, fontSize: 9, fontFace: FONT, color: BG, bold: true, align: "center", valign: "middle", margin: 0 });
    s17.addText(step, { x: 0.9, y: 1.5 + i * 0.55, w: 4.2, h: 0.3, fontSize: 11, fontFace: FONT, color: TEXT_SECONDARY });
});
// Warning card
s17.addShape(pptx.shapes.RECTANGLE, { x: 5.5, y: 1.5, w: 4, h: 2.5, fill: { color: CARD }, line: { color: WARN_BORDER, width: 1 } });
s17.addText("Why Different?", { x: 5.7, y: 1.65, w: 3.6, h: 0.35, fontSize: 13, fontFace: FONT, color: "FCD34D", bold: true });
s17.addText("Co-work is sandboxed \u2014 can't read local files. Claude Code bakes auth cookies directly into the skill file.\n\nStripped to only essential cookies: ~1,400 tokens (vs ~3,100).", {
    x: 5.7, y: 2.1, w: 3.6, h: 1.6, fontSize: 10, fontFace: FONT, color: TEXT_MUTED
});
addSlideNum(s17, 17);

// ============ SLIDE 18: Recap ============
const s18 = pptx.addSlide();
s18.background = { fill: BG };
s18.addText("RECAP", { x: 0.5, y: 0.5, w: 9, h: 0.3, fontSize: 10, fontFace: FONT, color: ACCENT, bold: true, letterSpacing: 3, align: "center" });
s18.addText([
    { text: "Three ", options: { fontSize: 28, color: TEXT_PRIMARY, bold: true } },
    { text: "Pillars", options: { fontSize: 28, color: ACCENT, bold: true } }
], { x: 0.5, y: 0.8, w: 9, h: 0.6, fontFace: FONT, align: "center" });
addAccentBar(s18, 4.1, 1.45, 1.8);
const recapCards = [
    { title: "Enrichment", desc: "Deeper research, better decisions, less token spend", col: ACCENT },
    { title: "Content Multiplication", desc: "Free generation of podcasts, videos, infographics", col: PURPLE },
    { title: "Persistent Memory", desc: "AI Brain grows over time, semantic retrieval", col: TEAL }
];
recapCards.forEach((rc, i) => {
    const x = 0.5 + i * 3.2;
    s18.addShape(pptx.shapes.RECTANGLE, { x, y: 1.8, w: 2.9, h: 2, fill: { color: CARD }, line: { color: rc.col, width: 1 } });
    s18.addText(rc.title, { x: x + 0.2, y: 2.1, w: 2.5, h: 0.4, fontSize: 14, fontFace: FONT, color: TEXT_PRIMARY, bold: true, align: "center" });
    s18.addText(rc.desc, { x: x + 0.2, y: 2.6, w: 2.5, h: 0.8, fontSize: 10, fontFace: FONT, color: TEXT_MUTED, align: "center" });
});
// Quote
s18.addShape(pptx.shapes.RECTANGLE, { x: 0.5, y: 4.2, w: 0.06, h: 0.7, fill: { color: ACCENT } });
s18.addText('"Your NotebookLM Brain is a semantic search engine over your entire Claude history \u2014 and it costs nothing to query."', {
    x: 0.8, y: 4.2, w: 8.5, h: 0.7, fontSize: 12, fontFace: FONT, color: TEXT_PRIMARY, italic: true
});
addSlideNum(s18, 18);

// ============ SLIDE 19: Thank You ============
const s19 = pptx.addSlide();
s19.background = { fill: BG };
if (fs.existsSync(logoPath)) {
    s19.addImage({ path: logoPath, x: 4.2, y: 0.6, w: 1.2, h: 1.4 });
}
s19.addText([
    { text: "Thank You & ", options: { fontSize: 28, color: TEXT_PRIMARY, bold: true } },
    { text: "Q&A", options: { fontSize: 28, color: ACCENT, bold: true } }
], { x: 0.5, y: 2.2, w: 9, h: 0.6, fontFace: FONT, align: "center" });
addAccentBar(s19, 4.1, 2.85, 1.8);
// Contact info
const contacts = [
    { label: "PRESENTER", value: "Daniel Wright" },
    { label: "EMAIL", value: "dw@navaigate.dev" },
    { label: "WEBSITE", value: "navaigate.dev" }
];
contacts.forEach((c, i) => {
    const x = 1 + i * 3;
    s19.addText(c.label, { x, y: 3.2, w: 2.5, h: 0.25, fontSize: 8, fontFace: FONT, color: TEXT_MUTED, align: "center", letterSpacing: 2 });
    s19.addText(c.value, { x, y: 3.5, w: 2.5, h: 0.3, fontSize: 13, fontFace: FONT, color: TEXT_PRIMARY, align: "center" });
});
// Resources card
s19.addShape(pptx.shapes.RECTANGLE, { x: 2, y: 4.1, w: 6, h: 1.1, fill: { color: CARD }, line: { color: "334155", width: 1 } });
s19.addText("Resources", { x: 2.2, y: 4.2, w: 5.6, h: 0.3, fontSize: 12, fontFace: FONT, color: ACCENT, bold: true });
s19.addText([
    { text: "NotebookLM Skill file  \u2022  WrapUp Skill file  \u2022  Presenter guide", options: { fontSize: 9, color: TEXT_MUTED, breakLine: true } },
    { text: 'Video: "Claude Code + NotebookLM = Infinite Memory" \u2014 Jack Roberts', options: { fontSize: 9, color: TEXT_MUTED } }
], { x: 2.2, y: 4.5, w: 5.6, h: 0.55, fontFace: FONT, paraSpaceAfter: 4 });
addSlideNum(s19, 19);

// Save
const outPath = path.join(__dirname, "presentation.pptx");
pptx.writeFile({ fileName: outPath }).then(() => {
    console.log("PPTX saved to:", outPath);
}).catch(err => {
    console.error("Error:", err);
});
