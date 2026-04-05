# NavAIgate Claude Code Skills

Open-source Claude Code skills by [NavAIgate](https://navaigate.dev) that connect Claude to Google NotebookLM for persistent AI memory, free content generation, and deep research.

## Skills

### NavAIgate NotebookLM Integration

**File:** [`skills/notebooklm-skill.md`](skills/notebooklm-skill.md)

Full programmatic access to Google NotebookLM from within Claude Code. Drop this skill file into Claude Code and say "Execute this skill" to get started.

**What it does:**
- Creates and manages NotebookLM notebooks
- Adds sources from URLs, YouTube videos, PDFs, and local files
- Runs deep web research (40-70 sources synthesised automatically)
- Generates content: podcasts, videos, infographics, quizzes, flashcards, slide decks, reports
- Downloads all generated assets locally
- Chats with your knowledge base using semantic retrieval

**Requirements:** Python 3.10+, Claude Code

### NavAIgate Session Brain

**File:** [`skills/session-brain-skill.md`](skills/session-brain-skill.md)

End-of-session wrap-up skill that captures your decisions, learnings, and context, then pushes a structured summary to your AI Brain notebook in NotebookLM.

**What it does:**
- Reviews the entire conversation for key decisions and learnings
- Saves memories locally using Claude Code's memory system
- Writes a structured markdown session summary
- Pushes the summary to your AI Brain notebook in NotebookLM
- Over time, builds a semantic search engine over your entire Claude history

**Trigger:** `/navaigate-session-brain`, "wrap up", "save this session", "end of session"

**Requires:** NavAIgate NotebookLM Integration skill (above) installed and authenticated

## Quick Start

1. Download a skill `.md` file from the [`skills/`](skills/) directory
2. Drop it into Claude Code
3. Say **"Execute this skill"**
4. Follow the authentication steps (sign into Google when prompted)
5. Start using NotebookLM commands from within Claude

## Training & Resources

We deliver a 1-hour hands-on workshop covering these skills and three practical use cases. Visit [navaigate.dev/resources](https://navaigate.dev/resources) for the full training materials, interactive presentation, and video walkthrough.

## About NavAIgate

[NavAIgate](https://navaigate.dev) is an AI-native consultancy helping businesses implement practical AI solutions — training, advisory, and custom development.

---

*Built with Claude Code by NavAIgate*
