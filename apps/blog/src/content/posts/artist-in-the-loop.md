---
title: "AI Made Me Faster at Shipping Code"
subtitle: "Why Can't We Build Artist-in-the-Loop Tools for the Arts?"
date: 2026-02-05
excerpt: "AI made me faster at shipping code. The arts deserve leverage tools that keep creators in the loop."
draft: true
---

I’m a musician who became a developer. The order matters. It permanently changed what I’m willing to believe when someone says a tool will “unlock creativity.”

In software, AI has been a real daily advantage for me. Not the sci‑fi version where I type *build the product* and go make coffee. More like: I’m stuck in a codebase, I don’t want to lose the thread, and the tool helps me get unstuck faster—summarizing what I’m looking at, sketching a first pass, pointing out obvious footguns, generating boilerplate I’d rather not type.

Some of that is genuinely “creative work” (architecture, product decisions, taste). Some of it is just chores. And for the chore bucket, I’m totally fine being the reviewer instead of the author. If the model writes a migration script or a test scaffold and I sanity-check it, great. That’s leverage. No identity crisis required.

Then I look at what’s being sold as “AI for the arts,” and the vibe is different.

The center of gravity in consumer generative products—music, images, writing, video—is still mostly: type a prompt, receive an artifact. A vending machine with better marketing.

Sometimes that’s fun. Sometimes it’s even useful. But it’s not the kind of help most serious artists I know are actually asking for.

---

## Leverage vs replacement (the whole argument, basically)

Here’s the framing I keep coming back to:

* **Leverage**: tools that make the work easier without competing for authorship.
* **Replacement**: tools that treat the creative act as the thing to bypass.

Replacement tools optimize for output. Leverage tools optimize for *process*.

The weird part is that we already know how to build leverage tools. We did it for software. We just… haven’t applied the same mentality to creative work yet, at least not at scale.

And yes, I know: “software isn’t art.” Whatever. A lot of software work is absolutely not art. It’s rote, it’s mechanical, it’s the kind of thing you’d happily outsource to a shell script if you could.

But when software *is* creative—when you’re shaping a product, making calls that are mostly taste, choosing tradeoffs you can’t fully justify in a Notion doc—replacement feels gross there too. You still want the tool, you just want it in a different posture: assistive, not presumptive.

That’s the distinction I’m trying to bring over to the arts.

Because in personal creative work, the “taste part” is not a small slice of the job. It’s the job.

---

## Artist‑in‑the‑loop

The phrase I keep using for the posture I want is:

**artist‑in‑the‑loop tools.**

Tools that assume the artist is staying in the loop, and build around that assumption.

Not “let me do it for you.” More like: “let me carry the annoying constraints, keep your project coherent, and make it easier to navigate what you already made.”

In software terms, that’s compilers, linters, type systems, search, incremental builds, version control. Not because those tools are sexy, but because they make a big project survivable.

In the arts, we weirdly skipped straight to “generate the artifact” and called it a day.

---

## The conversation that made this click

I grew up watching my mother write novels. Not in a Hallmark way. In the real way where you see that the work includes a lot of unglamorous overhead.

Long-form fiction has a continuity problem that gets worse the more ambitious you are: names, ages, timelines, geography, relationships, rule systems, what happened in which scene, who knows what when. If you don’t track it, you pay later.

Recently I was on a long phone call with her while I was drafting a longer post about AI and the arts. We kept circling the same question: when does a tool feel like leverage, and when does it feel like it’s trying to take your hands off the wheel?

She wasn’t asking for a machine to write chapters. She was basically saying: *I’m doing too much memory work. I’m wasting my best creative energy on recall and bookkeeping.*

And I recognized the shape of the problem immediately, because music has the same category of pain—just with different nouns.

Open an old session and suddenly you’re doing archaeology:

* which version is the “real” one
* what changed between revisions
* where the arrangement drifted
* why the chorus feels different now
* which patch chain was *the* sound

My first instinct was: “this is a version control problem.” And it is, partly. But version control only tells you **what changed**, not **what it means**. It doesn’t give you a map of the project. It doesn’t tell you which decisions are now inconsistent, or where a motif disappeared, or which detail you contradicted three chapters later.

So the real problem is broader:

**It’s version control plus indexing plus continuity.**

Or more bluntly: the project got big, and your brain is not a database.

That’s not a lack of creativity. It’s a lack of infrastructure.

---

## What I’m building for her

So I started building a tool for my mother. Working name: **CanonKeeper**.

It’s a background companion app for a manuscript. It watches a draft file (md/txt/docx), keeps derived metadata locally, and updates as the draft changes. It’s intentionally boring in the way good tools are boring.

CanonKeeper maintains three living views of the draft:

**A book bible**
Characters, locations, organizations, artifacts, terms, rules, timeline events—stored as structured canon instead of a doc that goes stale the second you keep writing.

**A scene index**
Scene boundaries, POV per scene, setting per scene, and where entities appear. The goal isn’t “analysis.” The goal is navigation. Revision stops feeling like spelunking when you have a map.

**A style/voice report (diagnostic only)**
Repeated phrases, tone outliers, dialogue tics per character. No “here’s a better sentence.” Just “this pattern is showing up a lot; here are examples.” The writer decides whether that’s a problem or a signature.

And then two practical features that matter way more than they sound like they should:

* continuity contradictions flagged as questions
* “what did I name that thing?” answered with citations back into the draft

None of this writes the book. That’s the point. This is the tool posture I wish more creative AI products had.

---

## The rule that keeps it from becoming a creepy co‑author

LLMs have a personality trait that makes them dangerous in creative work: they’ll sound right while being wrong.

If a tool starts confidently inventing facts about your story world, it doesn’t “help.” It adds chaos, and it does it with authority. That’s a terrible combo.

So CanonKeeper has a hard rule:

**If it can’t quote the manuscript, it doesn’t get to assert the fact.**

A bible entry is stored as a claim with evidence. If it thinks “Elena’s eyes are hazel,” it has to point to the exact line that says so. If later the draft says “green,” it doesn’t “fix” anything. It flags a contradiction and shows both quotes. The writer decides what’s canon.

Once the writer confirms canon, that becomes the locked truth. The tool can disagree later, but it can’t overwrite the author. Disagreements become issues, not silent edits.

That boundary is the whole game: author owns canon; tool owns indexing.

---

## Why this matters beyond novels

CanonKeeper is a writing tool because that’s what my mother needs. But the idea is not specific to writing.

Most serious creative pursuits hit the same wall: the project gets big, the number of decisions compounds, and the overhead starts eating the part of your brain you actually want to spend on taste.

That’s the direction I’m betting on: tools that assume the artist is staying in the loop, and build around that assumption.

---

## What I’m trying to learn

I don’t want to over-claim what any of this means. I’m building it because the problem feels real, and because I’m not satisfied with “press button, receive artifact” being the default definition of AI in the arts.

If you’ve made serious art, you probably have strong opinions about where the line is between “helpful” and “get the fuck out of my way.”

If you’ve built developer tooling, you know how quickly “help” turns into noise if it isn’t grounded and constrained.

So I’m collecting practical answers:

* In your medium, what’s the bookkeeping that steals the most energy?
* What should an artist‑in‑the‑loop assistant do automatically, and what should be strictly on-demand?
* What “mechanical help” feels genuinely fine (grammar, obvious clashes, basic consistency checks), and what starts stepping on authorship?
* If you build systems: what’s the simplest evidence model that survives heavy revision without becoming brittle?

I’m building this for my mother because I’ve watched the manual process up close for years, and because I’m tired of creative AI being framed like the goal is to avoid making anything.

The best tools I’ve ever used—code, music, whatever—don’t try to be me. They make it easier for me to do the work I’m already trying to do.

That’s the bar.

---

### P.S.

I’m building more tools with this artist‑in‑the‑loop paradigm as the center of gravity. CanonKeeper is just the first one I’ve felt compelled to share.

If you want to collaborate, contribute, argue, or just send me examples of tools that you think already get this right (or completely disagree with me), I’d genuinely like to talk. I’m especially interested in dissenting views that are grounded in real creative practice.
