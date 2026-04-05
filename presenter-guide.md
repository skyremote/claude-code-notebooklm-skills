# Claude Code + NotebookLM Training — Presenter Guide
**NavAIgate | Daniel Wright | 6 April 2026**
**Duration: ~60 minutes**

---

## Pre-Session Checklist (5 mins before)

- [ ] Claude Code open in terminal (fresh session)
- [ ] NotebookLM skill file (`NotebookLMSkill.md`) ready on Desktop
- [ ] WrapUp skill file (`WrapUpSkill.md`) ready on Desktop
- [ ] Browser signed into Google (NotebookLM account)
- [ ] This guide open on second screen / printed
- [ ] Slide deck running on projector

---

## PART 1 — Introduction (5 mins)
**Slides 1–3**

### Talking Points
- Welcome & introduce yourself (NavAIgate, AI-native consultancy)
- "Today we're combining two powerful tools: Claude Code and Google NotebookLM"
- The problem: **Claude has amnesia** — every session starts from zero
- Reading files to restore context burns tokens and costs money
- The solution: NotebookLM acts as a **persistent second brain** with RAG-based retrieval

### Key Message
> "Instead of cramming hundreds of pages of context into Claude, we reach over and grab exactly what we need from NotebookLM — zero token cost on the retrieval side."

---

## PART 2 — What NotebookLM Brings to Claude (5 mins)
**Slides 4–5**

### Three Core Benefits
1. **Persistent Memory** — decisions, rationale, context survives across every session
2. **Cost Reduction** — offload heavy research/retrieval to NotebookLM (free tier)
3. **Content Multiplication** — generate podcasts, videos, infographics, quizzes, slide decks, all programmatically

### Capability Overview (reference these)
| Capability | What It Does |
|---|---|
| Persistent project memory | Decisions & context survive sessions |
| Personal CRM | Track contacts, meetings, follow-ups |
| Decision journal | Record why you chose X over Y |
| Content multiplication | One source becomes podcast, video, infographic, etc. |
| Deep research | 40-70 sources synthesised into insights |
| Meeting intelligence | Store and query meeting notes |

---

## PART 3 — Live Install: NotebookLM Skill (15 mins)
**Slides 6–8**

### Step 1: Show the Skill File
Open `NotebookLMSkill.md` and walk through the structure:
- **Point out:** the frontmatter (name, description, trigger phrases)
- **Point out:** Step 0 Setup section — Python version check, venv, pip install
- **Point out:** Authentication section — why `notebooklm login` won't work in Claude Code (no interactive input)
- **Point out:** Quick Reference table — this is the command cheat sheet

### Step 2: Drop the Skill into Claude Code
```
# In Claude Code, drag the file in or reference it:
"Execute this skill"
```

**What happens behind the scenes (narrate as it runs):**
1. Checks Python version (needs 3.10+)
2. Creates a virtual environment at `~/.notebooklm-venv`
3. Installs `notebooklm-py[browser]` and Playwright Chromium
4. Symlinks the CLI to `~/bin/notebooklm`

### Step 3: Authentication
Claude will say: *"I'm going to open a browser window — sign into your Google account and navigate to notebooklm.google.com."*

**Live demo steps:**
1. A Chromium window opens automatically
2. Sign into Google
3. Navigate to `notebooklm.google.com`
4. Tell Claude: "I'm signed in"
5. Claude captures the session cookies
6. Verify: `notebooklm auth check` and `notebooklm list`

**If auth fails:** Delete `~/.notebooklm/browser_profile` and retry

### Step 4: Verify It Works
```
"Tell me the title of my last three notebooks"
```
Show that Claude can now list, query, and interact with NotebookLM.

---

## PART 4 — Key Commands & Quick Reference (5 mins)
**Slide 9**

Walk through the most useful commands:

| Task | Command |
|---|---|
| List notebooks | `notebooklm list` |
| Create notebook | `notebooklm create "My Notebook"` |
| Set context | `notebooklm use <notebook_id>` |
| Add URL source | `notebooklm source add "https://..."` |
| Add file | `notebooklm source add ./file.pdf` |
| Add YouTube | `notebooklm source add "https://youtube.com/..."` |
| Chat with notebook | `notebooklm ask "question"` |
| Deep web research | `notebooklm source add-research "query" --mode deep` |
| Generate podcast | `notebooklm generate audio "instructions"` |
| Generate infographic | `notebooklm generate infographic` |
| Generate video | `notebooklm generate video "instructions"` |
| Download | `notebooklm download audio ./output.mp3` |

### Autonomy Rules (important to mention)
- **Auto-run (no confirmation):** list, status, auth check, create, ask, source add
- **Ask first:** delete, generate, download (destructive or long-running)

---

## PART 5 — Use Case 1: Enrichment (10 mins)
**Slides 10–11**

### Live Demo
1. Start a conversation in Claude Code about a topic (e.g., "best strategy for scaling a YouTube channel")
2. Then say:
   ```
   "Create a brand new notebook based on everything in this conversation.
   Add deep research on this topic. Once done, give me 10 distilled
   insights with 3 core actions."
   ```
3. Claude will:
   - Create a new notebook
   - Add conversation context as a source
   - Run `source add-research "topic" --mode deep`
   - Wait for research to complete
   - Query the notebook for distilled insights
4. **Show the notebook in browser** — point out the 40-70 sources it ingested

### Key Talking Point
> "NotebookLM did all the heavy lifting — deep research across dozens of sources — and Claude just made one API call to get the results. Zero extra token cost."

---

## PART 6 — Use Case 2: Content Multiplication (10 mins)
**Slides 12–13**

### Live Demo: Generate an Infographic
```
"Create an infographic in NotebookLM using premium colours and fonts,
based on our conversation. Download it for me."
```

### Generation Types to Mention
| Type | Command | Output |
|---|---|---|
| Podcast | `generate audio` | .mp3 (10-20 min generation) |
| Video | `generate video` | .mp4 (15-45 min generation) |
| Slide deck | `generate slide-deck` | .pdf / .pptx |
| Infographic | `generate infographic` | .png |
| Report | `generate report` | .md |
| Mind map | `generate mind-map` | .json |
| Quiz | `generate quiz` | .json/.md/.html |
| Flashcards | `generate flashcards` | .json/.md/.html |

### Key Talking Point
> "Everything NotebookLM generates is free. Podcasts, videos, infographics — you're not burning Claude tokens for any of it."

---

## PART 7 — Use Case 3: The AI Brain & WrapUp Skill (10 mins)
**Slides 14–16**

### Explain the Concept
- At the end of every session, the WrapUp skill:
  1. Reviews the entire conversation
  2. Saves key memories (decisions, learnings, preferences)
  3. Writes a session summary
  4. Pushes it to your **AI Brain notebook** in NotebookLM

### Show the WrapUp Skill File
Open `WrapUpSkill.md` and point out:
- **Step 0:** Auto-creates an "AI Brain" notebook if one doesn't exist
- **Step 1:** Reviews session for decisions, work, learnings, open threads
- **Step 2:** Saves memories locally (feedback, project, user, reference types)
- **Step 3:** Writes a markdown session summary
- **Step 4:** Pushes summary to NotebookLM as a source

### Live Demo
```
/wrapup
```
- Show it creating/finding the Brain notebook
- Show the session summary being generated
- Show the source appearing in NotebookLM

### The Power Move: Add to Project Instructions
In Claude Co-work project settings, add:
```
Whenever answering questions about strategy, always consult
the AI Brain notebook in NotebookLM first.
```
This means Claude will **automatically** do a semantic search of your entire history before answering — one API call, instant recall of everything.

### Key Talking Point
> "Your AI Brain grows with every session. It's a semantic search engine over your entire Claude history — and it costs nothing to query."

---

## PART 8 — Adding to Claude Co-work (5 mins)
**Slide 17**

### Steps (if showing Co-work)
1. In Claude Code, say: `"Add NotebookLM as a Co-work skill please"`
2. Claude generates `NotebookLMSkill-Cowork.md` on your Desktop
3. In Co-work: click **+** > **Skills** > **Manage Skills** > **Upload a Skill**
4. Upload the generated file
5. Verify: `"What was the last notebook I created?"`

### Why It's Different
- Co-work is sandboxed — can't read local files
- Claude Code bakes the auth cookies directly into the skill file
- Stripped to only essential cookies (~1,400 tokens vs ~3,100)

---

## PART 9 — Wrap-Up & Q&A (5 mins)
**Slides 18–19**

### Recap the Three Pillars
1. **Enrichment** — deeper research, better decisions, less token spend
2. **Content Multiplication** — free generation of podcasts, videos, infographics
3. **Persistent Memory** — AI Brain grows over time, semantic retrieval

### Resources to Share
- NotebookLM Skill file (provide link or share directly)
- WrapUp Skill file (provide link or share directly)
- Video reference: "Claude Code + NotebookLM = Infinite Memory" by Jack Roberts

### Q&A
Open the floor. Common questions:
- **"Is this official?"** — No, `notebooklm-py` is an unofficial API wrapper
- **"Will my cookies expire?"** — Yes, periodically. Just re-run `notebooklm login`
- **"Does it work with Claude Pro?"** — Works with Claude Code and Co-work
- **"Rate limits?"** — Google may throttle generation. Wait 5-10 mins and retry

---

## Quick Troubleshooting Reference

| Issue | Fix |
|---|---|
| Python too old | `brew install python@3.12` |
| Auth fails | Delete `~/.notebooklm/browser_profile` and retry |
| CLI not found | `export PATH="$HOME/bin:$PATH"` |
| Generation stuck | Check `notebooklm artifact list` for status |
| Rate limited | Wait 5-10 minutes, retry |
| Cookie expired | Re-run authentication steps |
| Co-work skill fails | Regenerate from Claude Code |
