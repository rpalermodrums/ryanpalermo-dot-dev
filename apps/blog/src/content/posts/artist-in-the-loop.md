---
title: "Artist-in-the-loop"
subtitle: "LLMs made me faster at shipping code. I want something similar for the arts."
date: 2026-02-05
excerpt: "LLMs made me faster at shipping code. The arts deserve leverage tools that keep creators in the loop."
draft: true
---

**TL;DR:** I'm building **CanonKeeper** (canon as in story canon, not artillery): a local companion app for manuscripts that keeps long projects legible. It watches a draft file (md/txt/docx), maintains an evidence-backed **book bible** and **scene index**, and flags **continuity contradictions as questions** -- **without generating prose**. That last part is important.

**Hard rule:** *If it can't quote your manuscript, it doesn't get to assert the fact.* No exceptions.

---

I have a weakness for tidy representations of messy things. Maps. Outlines. Checklists. "One doc to rule them all." Anything that turns a complicated reality into something I can glance at and feel like I understand.

The problem is the tidy version is always a lie. Not a malicious one. Just a simplification. Useful precisely because it leaves stuff out. Which is fine, until it isn't. And then it's really not fine.

That distinction -- useful, but incomplete -- is also the lens I keep applying to the current wave of AI tooling in the arts. The best AI tools I use as a developer feel like they understand the deal: the map is not the territory. Give me a thinner view of a problem so I can move forward, but don't pretend to understand the system better than I do. Help without feigning omniscience.

A lot of "AI for the arts" feels like the opposite. Worth examining, I think. Or maybe I'm just being grumpy about it. Hard to tell sometimes.

---

## Leverage vs replacement

AI has been a real daily advantage for me in software. Not the sci-fi version where I open Claude Code, yolo *build the product, make no mistakes* with `--dangerously-skip-permissions` and go make coffee. More like: I'm stuck in a codebase, about to waste an hour digging through legacy code and docs, and the tool helps me get traction again. Summarizing what I'm looking at, sketching a first pass, generating boilerplate I'd rather not type myself, catching obvious footguns. That kind of thing.

I'm not pretending all programming is "creative," by the way. A lot of it is chores and rote work. For the chore bucket, I'm fine being a reviewer instead of the author. If the model writes a migration script or a test scaffold and I sanity-check it, great. That doesn't feel like it's stepping on anything sacred. Feels like delegating the part of the job I never liked. You know, the boring parts.

But the parts of software that **are** creative -- architecture design, product engineering, taste-based judgment calls -- don't benefit from a product aimed at replacement. They benefit from leverage. Tools that keep you moving while you stay responsible for the work. That's the difference, and it's a big one. Huge, actually.

And sure: prompt-in / artifact-out systems can be fun, and sometimes genuinely useful for ideation or play. I get it. But for serious long-form work, the bottleneck usually isn't "I can't generate output." That's not the problem.

The bottleneck is the overhead that shows up once the project's surface expands:

* recall (wait, what did I decide about X again?)
* continuity (did I already say this somewhere?)
* structure (where does this fit?)
* drift across revisions (why does this feel different now?)
* keeping coherence as complexity grows (how did this get so complicated?)

This is often what determines whether you actually get to any finished state on a project. The boring stuff that nobody talks about. (Seriously, why does nobody talk about this? It's like the elephant in the room.)

---

## The Loop

The phrase I keep coming back to is **artist-in-the-loop**. Tools that assume the artist is staying in the loop and build around that assumption. Not "let me do it for you." More like: "let me keep the project legible and navigable enough that you can keep making judgment calls without losing your mind or breaking flow."

In software, we take this posture for granted. Compilers don't write your program -- they just compile it. Linters don't ship features -- they just check your code. Search doesn't decide architecture -- it helps you find stuff. Version control doesn't tell you what your product should be -- it tracks changes. These tools create a thin, legible view of a complicated thing so you can work on it without drowning. They just... help. Without taking over. It's beautiful, really. Like, actually beautiful. I don't think we appreciate this enough.

A lot of creative AI tooling takes a messy, local, personal process and flattens it into something centrally legible. Prompt goes in, output comes out. Treats that as the work. But is it? Really?

It nudges artists toward being curators of generated artifacts instead of authors of a process. Curation might be valid, but it's not what most artists are trying to do when they sit down to make something they actually care about. At least, not the ones I know. Maybe I'm wrong. But I don't think so. I've asked around.

---

## The conversation that made this click

I grew up watching my mother write novels. Not in a sentimental way -- I love her, but that's not what I'm talking about. In the practical way where you notice that writing long-form fiction includes a lot of unglamorous administration. Way more than you'd think. Like, way more.

Names, ages, timelines, geography, relationships, rule systems, what happened in which scene, who knows what when. The list goes on. And on. If you don't track it, you pay later. If you do track it, you still pay, just upfront in time and mental energy. Exhausting either way. There's no winning, really.

I was on a long phone call with my mom recently while I was drafting a longer post about AI and the arts. The same question kept coming up:

When does an artistic tool feel like it adds leverage, and when does it feel like it's trying to take your hands off the wheel?

She wasn't asking for a machine to write chapters or even phrases in her book. She was saying:

> "I'm doing a lot of work to maintain and recall what I've already written. Spending a ton of creative energy on bookkeeping and navigating those books. It's a waste of creative energy and takes me out of flow state."

I recognized the shape of the problem **immediately**. Music composition, arrangement, and production has that same category of pain as a project grows significantly complex. (I've been there. It sucks. Like, really sucks.)

You know that feeling when you open a project file and you're like "what the hell was I thinking here?" That's the feeling.

Open an old session and suddenly you're doing archaeology:

* what changed between the last few revisions? (seriously, what?)
* where did arrangement drift? (it definitely drifted)
* why does the chorus feel different now? (it used to hit harder)
* why does the sidechain compression no longer keep the bass punchy? (this one kills me)
* which patch chain variation was the sound I had in mind three weeks ago? (I have no idea)

My first instinct was "this is a version control problem." Which it kind of is, but also kind of isn't. You know?

Version control helps. It mostly answers what changed, not what that change *did* to the project. What's needed is a tool that flags which earlier decision you just contradicted. That's the real issue. The thing that actually matters.

Probably oversimplifying, but right now I'm thinking:

**version control + indexing + continuity.**

Project got big and complicated to manage, and a human brain is not a database. Need better tools for this stuff. Like, we really need them.

That's what I'm trying to build. (We'll see how it goes. Could be a disaster. Could be great. Who knows.)

---

## What I'm building for my mom: `CanonKeeper`

CanonKeeper is a background companion app for manuscripts. It watches a draft file (md/txt/docx), keeps derived metadata **locally**, and updates as the draft changes. That's basically it. Simple concept, complicated execution. Story of my life.

Intentionally boring in the way good tools are boring. No "chat with your novel." No flashy UI. Just works. (Or at least, that's the goal. We'll see if I can pull it off. I'm trying.)

A useful shorthand is:

**Think: git + search + linting -- but for story continuity.**
Not a ghostwriter. A navigation layer. That's all.

### What it does (three living views)

1. **A book bible (structured, evidence-backed).**
Characters, locations, organizations, artifacts, terms, rules, timeline events -- stored as structured canon instead of a doc that goes stale the second you keep writing. No more hunting through old drafts to remember if the character's name was spelled with an "e" or an "a." Been there. Done that. Never again.

2. **A scene index (navigation, not analysis).**
Scene boundaries, POV per scene, setting per scene, where entities appear. Goal isn't "interpretation." Goal is navigation. Revision stops feeling like spelunking when you have a map. You can actually find things. Revolutionary concept, I know.

3. **A style/voice report (diagnostic only).**
Repeated phrases, tone outliers, dialogue tics per character. No "here's a better sentence." Just shows patterns: "this pattern is showing up a lot; here are examples." Writer decides whether that's a problem or a signature. (Sometimes repetition is intentional, you know? Like, that's a thing.)

### Two practical features that save time

* **Continuity contradictions flagged as questions** (not fixes - never fixes)
* **"What did I name that thing?"** answered with citations back into the draft (this one alone would save hours)

None of this writes the book. That's the point. That's always the point.

### What it's *not*

* Not a co-author (never)
* Not a prose generator (nope)
* Not an auto-rewriter (absolutely not)
* Not a tool that silently edits your manuscript "for your own good" (seriously, fuck that. I mean it.)

---

## The rule that keeps it from becoming a creepy co-author

LLMs have a personality trait that makes them dangerous in creative work: they'll sound right while being wrong. You might not realize they're wrong until later. By then it might be too late -- you've already built on top of the wrong thing. And then you're fucked.

If a tool starts confidently inventing facts about your story world, it doesn't "help." It adds chaos, and it does it with authority. Bad combo. Like, really bad.

CanonKeeper has a hard rule:

**If it can't quote the manuscript, it doesn't get to assert the fact. Period.**

A bible entry is stored as a **claim with evidence**. If it thinks "Elena's eyes are hazel," it has to point to the exact line that says so. If the draft later says "green," it doesn't "fix" anything -- it can't, even if it wants to. It flags a contradiction and shows both quotes. Writer decides what's canon. Tool doesn't get a vote. End of story.

Once the writer confirms canon, that becomes the locked truth. The tool can disagree later -- and it might -- but it can't overwrite the author. No override button. Disagreements become issues, not silent edits. No silent edits. Ever.

**Author owns canon. Tool owns indexing. That's it.** 

(This boundary is non-negotiable. I'm serious about this. Like, really serious. Don't test me on this.)

### A concrete example (the kind of output I mean)

**Claim:** Elena -> eye_color = hazel
**Evidence:** "...Elena blinked, her hazel eyes catching the light..." (quote + location in draft)

**Conflicting evidence:** "...he recognized her immediately by those sharp green eyes." (quote + location)

**Continuity question:** *Elena's eye color appears as hazel in one place and green in another. Which is canon?*

The tool doesn't pick. You do. That's the whole point. 

Always you. Never the tool. Never.

---

## A quick "day in the life"

This is the workflow I'm aiming for:

* You keep writing wherever you already write. (No disruption to your process.)
* CanonKeeper updates in the background as the draft changes. (Just... works. Hopefully.)
* You reopen the project after a week and ask: "What did I name the river town?" It returns the exact quote(s) and where they appear. (Magic. Or at least, that's the plan.)
* You start revising chapter 12 and pull up the scene index. You see POV/setting at a glance, and where key entities enter or exit the story. (Finally, some clarity.)
* You change a backstory detail. It flags contradictions as questions with citations so you can resolve them deliberately, instead of discovering them 80 pages later. (Been there, done that, don't want to do it again. Never again.)

The goal is simple: **less mental bookkeeping, more time spent on taste.** 

That's it. That's the whole thing. Simple, right? 

(It's not simple. But it should be. That's the whole point.)

---

## Why this matters beyond novels

CanonKeeper is a writing tool because that's what my mother needs. The idea isn't specific to writing, though. Not really.

Most serious creative pursuits hit the same wall: the project gets big, the number of decisions compounds, and overhead starts eating the part of your brain you actually want to spend on taste. 

It's exhausting. And it shouldn't be. That's the problem I'm trying to solve.

That's the direction I'm betting on:

Tools that assume the artist is staying in the loop, and build around that assumption. (It's a bet, but I think it's a good one. Time will tell, I guess. We'll see.)

---

## An open invitation

I don't want to over-claim what any of this means. I'm building it because the problem feels real, and because I'm not satisfied with "press button, receive artifact" being the default definition of AI in the arts. There's got to be more to it than that. Right? Like, there has to be.

If you've made serious art, you probably have strong opinions about where the line is between "helpful" and "get the fuck out of my way." I know I do. Very strong opinions, actually.

If you've built developer tooling, you know how quickly "help" turns into noise if it isn't grounded and constrained. (God, I've seen this happen so many times. It's infuriating.)

So I'm collecting practical answers. Here's what I want to hear from you:

* In your medium, what's the bookkeeping that steals the most energy? (Seriously, what is it?)
* What should an artist-in-the-loop assistant do automatically, and what should be strictly on-demand? (Where's the line?)
* What "mechanical help" feels genuinely fine (grammar, obvious clashes, basic consistency checks), and what starts stepping on authorship? (This one's tricky.)
* If you build systems: what's the simplest evidence model that survives heavy revision without becoming brittle? (I'm genuinely curious about this one.)

I'm building this for my mom because I've watched the manual process up close for years, and because I'm tired of creative AI being framed like the goal is to avoid making anything. That framing is... wrong. Or at least, incomplete. Very incomplete.

The best tools I've ever used -- in code or music or whatever -- don't try to replace me as the decision maker. They just make it easier for me to do my work. That's it. That's all I want. That's all anyone should want, really.

That's the bar. That's what I'm aiming for here. 

(We'll see if I hit it. Fingers crossed. Toes too, probably. Everything crossed.)

---

I'm building more tools with this "artist-in-the-loop" paradigm as the theme. CanonKeeper is just the first one I've felt compelled to make real. There will probably be more. (Assuming this one doesn't completely fail, anyway. Fingers crossed again.)

If you want to collaborate, contribute, argue, or just send me examples of tools you think already get this right, I'd like to talk. I'm especially interested in dissenting views that center on the intersection of real creative practice and emerging tech. 

Seriously, hit me up. I'm listening. Let's figure this out together.
