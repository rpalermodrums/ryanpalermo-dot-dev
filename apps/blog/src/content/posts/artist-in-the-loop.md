---
title: "Artist-in-the-loop"
subtitle: "LLMs made me faster at shipping code. I want something similar for the arts."
date: 2026-02-05
excerpt: "LLMs made me faster at shipping code. The arts deserve leverage tools that keep creators in the loop."
draft: true
---

<details>
<summary>TL;DR</summary>

I'm building **CanonKeeper** (canon as in story canon, not artillery): a local companion app for manuscripts that keeps long projects legible. It watches a draft file (md/txt/docx), maintains an evidence-backed **book bible** and **scene index**, and flags **continuity contradictions as questions** -- **without generating prose**.

**Hard rule:** *If it can't quote your manuscript, it doesn't get to assert the fact.*
</details>

I have a weakness for tidy representations of messy things. Maps. Outlines. Checklists. "One doc to rule them all." Anything that turns a complicated reality into something I can glance at and feel like I understand.

The problem is the tidy version is always a lie. Not a malicious one. Just a simplification. Useful precisely because it leaves stuff out. Which is fine, until it isn't.

That distinction -- useful, but incomplete -- is also the lens I keep applying to the current wave of AI tooling in the arts. The best AI tools I use as a developer feel like they understand the deal: the map is not the territory. Give me a thinner view of a problem so I can move forward, but don't pretend to understand the system better than I do. Help without feigning omniscience.

A lot of "AI for the arts" feels like the opposite.

---

## Leverage vs replacement

LLM advances have turned into real daily advantages for me in software engineering. Not the sci-fi memeified version where I open Claude Code, YOLO prompt it to *build a billion-dollar company, make no mistakes* `--dangerously-skip-permissions` and go make coffee. The real value shows itself when I'm stuck in a codebase, am about to waste hours digging through legacy code and documentation, and an LLM helps me stay in flow: summarizing what I'm looking at, sketching a first pass at a problem, generating boilerplate I'd rather not type myself, catching obvious footguns I missed, doing a preliminary code review.

I'm not pretending all programming is "creative." A lot of it is chores and rote work. For the chore bucket, I'm fine being a reviewer instead of the author. If the model writes a migration script or a test scaffold and I sanity-check it, great. That doesn't feel like it's stepping on anything sacred.

But the parts of software that **are** creative -- architecture design, product engineering, taste-based judgment calls -- don't benefit from a product aimed at replacement. They benefit from leverage. Tools that keep you moving while you stay responsible for the work.

And sure: prompt-in / artifact-out systems can be fun, and sometimes genuinely useful for ideation or play. But for serious long-form work, the bottleneck usually isn't "I can't generate output."

The bottleneck is the overhead that shows up once the project's surface expands:

* recall (wait, what did I decide about X again?)
* continuity (did I already say this somewhere?)
* structure (where does this fit?)
* drift across revisions (why does this feel different now?)
* keeping coherence as complexity grows (how did this get so complicated?)

This is often what determines whether you actually get to any finished state on a project.

---

## The Loop

The phrase I keep coming back to is **artist-in-the-loop**. Tools that assume the artist is staying in the loop and build around that assumption. Not "let me do it for you." More like: "let me keep the project legible and navigable enough that you can keep making judgment calls without losing your mind or breaking flow."

In software, we take this posture for granted. Compilers don't write your program, they just compile it. Linters don't ship features, they just check your code. Search doesn't decide architecture, it helps you find stuff. Version control doesn't tell you what your product should be, it tracks changes. These tools create a thin, legible view of a complicated thing so you can work on a project without drowning.

A lot of creative AI tooling takes a messy, local, personal process and flattens it into something centrally legible. Prompt goes in, output comes out. Treats that as the work.

It nudges artists toward being curators of generated artifacts instead of authors of a process. Curation might be valid, but it's not what most artists are trying to do when they sit down to create something they actually care about.

---

## The conversation that made this click

I grew up watching my mother write novels. Not in a sentimental way -- in the practical way where you notice that writing long-form fiction includes a lot of unglamorous administration.

Names, ages, timelines, geography, relationships, rule systems, what happened in which scene, who knows what when. If you don't track it, you pay later. If you do track it, you still pay, just upfront in time and mental energy.

I was on a long phone call with my mom recently while I was drafting a longer post about AI and the arts. The same theme kept coming up: "When does an artistic tool feel like it adds leverage, and when does it feel like it's trying to take your hands off the wheel?"

She wasn't asking for a machine to write any part of her new book:

> "I'm doing a lot of work to maintain and recall what I've already written. Spending a ton of creative energy on bookkeeping and navigating those books. It's a waste of creative energy and takes me out of flow."

I recognized the shape of the problem **immediately**. Music composition, arrangement, and production has that same type of pain as projects grow in complexity.

Open an old session in your creative tool of choice and suddenly you're doing archaeology:

* what changed between the last few revisions?
* where did arrangement drift?
* why does the chorus feel different now?
* why does the sidechain compression no longer keep the bass punchy?
* which patch chain variation was the sound I had in mind three weeks ago?

My first instinct was "this is a version control problem." Which it kind of is, but also kind of isn't.

Version control helps. It mostly answers what changed, not what that change *did* to the project. What's needed is a tool that flags which earlier decision you just contradicted.

Probably oversimplifying, but right now I'm thinking:

**version control + indexing + continuity management.**

Projects grow and become complicated to manage, and a human brain is not a database.

---

## What I'm building for my mom: `CanonKeeper`

CanonKeeper is a background companion app for manuscripts. It watches a draft file (md/txt/docx), keeps derived metadata **locally**, and updates as the draft changes.

Intentionally boring in the way good tools are boring. No "chat with your novel." No flashy UI.

**Think: git + search + linting -- but for story continuity.**

### Three Living Views

1. **A book bible (structured, evidence-backed).**
Characters, locations, organizations, artifacts, terms, rules, timeline events -- stored as structured canon instead of a doc that goes stale the second you keep writing.

2. **A scene index (navigation, not analysis).**
Scene boundaries, POV per scene, setting per scene, where entities appear. Goal isn't "interpretation." Goal is navigation.

3. **A style/voice report (diagnostic only).**
Repeated phrases, tone outliers, dialogue tics per character. No "here's a better sentence." Just shows patterns: "this pattern is showing up a lot; here are examples." Writer decides whether that's a problem or a signature.

### Two practical features that save time

* **Continuity contradictions flagged as questions** not fixes or applied changes
* **"What did I name that thing?"** answered with citations to the text

### What it's *not*

* Not a co-author
* Not a prose generator
* Not an auto-rewriter
* Not a tool that silently edits your manuscript

---

## The rule that keeps it from attempting to co-author

LLMs have a personality trait that makes them dangerous in creative work: they'll sound right while being wrong. You might not realize they're wrong until later. By then it might be too late -- you've already built on top of the wrong thing.

If a tool starts confidently inventing facts about your story world, it doesn't "help." It adds chaos, and it does it with authority.

CanonKeeper has a hard boundary:

**If it can't quote the manuscript, it doesn't get to assert the fact.**

A bible entry is stored as a **claim with evidence**. If it thinks "Elena's eyes are hazel," it has to point to the exact line that says so. If the draft later says "green," it doesn't "fix" anything -- it flags a contradiction and shows both quotes. Writer decides what's canon.

Once the writer confirms canon, that becomes the locked truth. The tool can disagree later -- and it might -- but it can't overwrite the author. Disagreements become issues, never silent edits.

**Author owns canon. Tool owns indexing.**

### A concrete example

**Claim:** Elena -> eye_color = hazel
**Evidence:** "...Elena blinked, her hazel eyes catching the light..." (quote + location in draft)

**Conflicting evidence:** "...he recognized her immediately by those sharp green eyes." (quote + location)

**Continuity question:** *Elena's eye color appears as hazel in one place and green in another. Which is canon?*

The tool doesn't pick. You do.

---

## A quick "day in the life"

This is the workflow I'm aiming for:

* You keep writing wherever you already write
* CanonKeeper updates in the background as the draft changes
* You reopen the project after a week and ask: "What did I name the river town?" It returns the exact quote(s) and where they appear
* You start revising chapter 12 and pull up the scene index. You see POV/setting at a glance, and where key entities enter or exit the story
* You change a backstory detail. It flags contradictions as questions with citations so you can resolve them deliberately, instead of discovering them 80 pages later

The goal is simple: **less mental bookkeeping, more time spent on taste**

---

## Why this matters beyond fiction

CanonKeeper is a writing tool because that's what my mother needs. The idea isn't specific to writing, though.

Most serious creative pursuits hit the same wall: the project gets big, the number of decisions compounds, and overhead starts eating the part of your brain you actually want to spend on taste.

That's the direction I'm betting on:

Tools that assume the artist is staying in the loop, and build around that assumption.

---

## An open invitation

I don't want to over-claim what any of this means. I'm building it because the problem feels real, and because I'm not satisfied with "press button, receive artifact" being the default definition of AI in the arts.

If you've made serious art, you probably have strong opinions about where the line is between "helpful" and "get the fuck out of my way."

If you've built or used developer tooling, you know how quickly "help" turns into noise if it isn't grounded and constrained.

So I'm collecting practical answers:

* In your medium, what's the bookkeeping that steals the most energy?
* What should an artist-in-the-loop assistant do automatically, and what should be strictly on-demand?
* What "mechanical help" feels genuinely fine (grammar, obvious clashes, basic consistency checks), and what starts stepping on authorship?
* If you build systems: what's the simplest evidence model that survives heavy revision without becoming brittle?

I'm building this for my mom because I've watched the manual process up close for years, and because I'm tired of creative AI being framed like the goal is to avoid making anything.

The best tools I've ever used -- in code or music or whatever -- don't try to replace me as the decision maker. They just make it easier for me to do my work.

That's the bar.

---

### PS

I'm building more tools with this "artist-in-the-loop" paradigm as the theme. CanonKeeper is just the first one I've felt compelled to ship publicly.

If you want to collaborate, contribute, argue, or just send me examples of tools you think already get this right, I'd love to chat.
