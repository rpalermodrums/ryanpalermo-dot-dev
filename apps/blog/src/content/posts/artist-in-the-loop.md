---
title: "Artist-in-the-loop"
subtitle: "AI for creative work should help you think, not think for you."
date: 2026-02-05
excerpt: "AI for creative work should help you think, not think for you."
draft: true
---

<details>
<summary>TL;DR</summary>

I'm building **CanonKeeper** (canon as in story canon, not artillery): a local companion app for manuscripts that keeps long projects legible. It watches a draft file (md/txt/docx), maintains a **book bible** and **scene index** grounded in direct quotes from the manuscript, and flags **continuity contradictions as questions** without generating prose.

**Hard rule:** *If it can't quote your manuscript, it doesn't get to assert the fact.*
</details>

## The Map Is Not the Territory

I have a weakness for tidy representations of messy things. Maps. Outlines. Checklists. "One doc to rule them all." Anything that turns a complicated reality into something I can glance at and feel like I understand.

The problem is the tidy version is generally a lie. Not a malicious one, just oversimplification. Useful precisely because it leaves stuff out.

That distinction, sometimes useful but always incomplete, is the lens through which I view the current wave of AI tooling for the arts.

The best AI tools I use as a software engineer feel like they understand the deal: the map is not the territory. Give me a thinner view of a problem so I can move forward, but don't pretend to understand the system better than I do.

## Leverage

LLMs have turned into a real daily advantage in my work building software. Not the sci-fi version. The real value shows when I'm stuck on a problem, about to waste hours digging through legacy code, and the LLM unblocks me. It summarizes what I'm looking at, sketches a first pass, generates boilerplate I'd rather not type, catches footguns I missed. It helps me stay in flow.

Not all programming is creative. A lot of it is chores. For chore work, I'm fine being a reviewer instead of an author. If the model writes a migration script or a test scaffold for me to sanity-check, great. Doesn't feel like it's stepping on anything sacred.

But the parts of software engineering that *are* creative (system design, product engineering, anything requiring a judgment call) don't benefit from tools aimed at replacing those functions. They benefit from leverage. Tools that keep you moving while you stay responsible for the work.

For serious long-form work, the bottleneck is rarely generating output. It's the overhead that shows up once a project gets big enough. A decision you made three weeks ago fades, and something you implement today quietly contradicts it. A piece stops fitting the larger puzzle and you can't remember why, or how this module ended up with fifty dependencies when it started as ten lines.

These are navigation problems, not creation problems.

## The Loop

The phrase I keep coming back to is **artist-in-the-loop**.

Artists want tools that assume they are staying in control. The tools we build should respect that assumption.

In software, we mostly build for ourselves this way already. We take it for granted. Compilers don't write your program. Linters don't ship features. Full-text search doesn't make decisions. Version control doesn't tell you what to build. They just give you a thin, legible view of a complicated thing so you can work without drowning.

A lot of creative AI tooling goes the other direction. It takes messy, personal, creative processes and flattens them into something simpler. Prompt goes in, output comes out. The popular tools nudge artists toward being curators of generated artifacts instead of authors of a process.

Curation might become a real skill. But it's not what most artists are trying to do when they sit down to make something they care about.

## Blame My Mother

I grew up watching my mother write novels. Not the romantic version. The version where you notice that long-form fiction includes a lot of unglamorous administration.

Names, ages, timelines, geography, relationships, rule systems, what happened in which scene, who knows what when. If you don't track it, you pay later. If you do track it, you still pay, just upfront.

I was on a long phone call with her recently while I was drafting a longer post about AI and the arts. The same theme kept surfacing: when does an artistic tool feel like it adds leverage, and when does it feel like it's trying to take your hands off the wheel?

She wasn't asking for a machine to write any part of her new book.

> "I'm doing a lot of work to maintain and recall what I've already written. Spending a ton of creative energy on bookkeeping and navigating those records. It's taxing on my creative energy and takes me out of the moment."

I recognized the shape of the problem immediately. It's the same pain in music composition and production as projects grow. Open an old session and suddenly you're doing archaeology. What changed between revisions? Where did the arrangement drift? Which patch chain was the sound you had in mind three weeks ago? Why does the sidechain compression no longer keep the bass punchy? You came back to *write*, and instead you're playing detective.

My first instinct was "version control problem." Which it kind of is, but also kind of isn't. Version control mostly answers *what* changed. It doesn't answer *how* a change impacted the rest of the project. What you need is something that flags which earlier decision you just contradicted, frames it, and helps you maintain continuity.

Version control, plus indexing, plus continuity management.

The human brain is not a database. We need systems for this, and the ones that exist today mostly want to generate prose for you instead.

## CanonKeeper

So I'm building her one.

CanonKeeper watches a draft file (md/txt/docx), keeps a local index of everything it finds, and updates as the draft changes. Intentionally boring, the way good tools are boring.

My mom keeps a book bible for every novel. Character details, locations, timeline, rules of the world. She maintains it by hand in a separate document while she writes. The problem is she's also, you know, writing a novel, so the bible starts drifting from the manuscript almost immediately. Two months in she'll check a detail, realize the bible says one thing and the draft says another, and now she doesn't trust either. She has to go find the actual passage and reread it to figure out which version is true.

CanonKeeper just builds the bible directly from the manuscript text. Every entry points back to a specific quote. If the draft changes, the bible updates. No separate doc to maintain. No drift.

It also keeps a scene index. I've watched my mom flip through her own manuscript for twenty minutes trying to find where a character first shows up. POV, setting, which characters appear in which scenes. It's a table of contents for a book that doesn't have one yet. Boring, useful, the kind of thing you'd never bother maintaining by hand because the effort isn't worth it until the one time you desperately need it.

And it tracks patterns in voice and style. If a character says "listen" as the first word of every third line of dialogue, it'll tell you. If you use the same unusual metaphor in chapter 2 and chapter 19, it'll show you both. No opinions on whether these are problems. Maybe they're problems. Maybe they're your style. That's your call, not the tool's.

That's the whole thing. No "chat with your novel." No prose generation. Nothing that edits your manuscript without asking. If that sounds like a weird list of things to clarify, look at what passes for "AI writing tools" right now and you'll see why I feel the need to say it.

## The Hard Rule

The problem with using LLMs near fiction is the same problem they have everywhere else: they hallucinate. But in most contexts you catch it quickly. In a novel, a hallucinated detail can sit unnoticed for chapters while you build on top of it.

I've seen this happen with code. The model confidently references a function that doesn't exist, you don't catch it because the name sounds right, and you build three more things on top of it before you realize the foundation is wrong. Now imagine that with a novel. The tool tells you a character's sister died in chapter 4. You half-remember that being true. You write two chapters that depend on it. Turns out the sister was injured, not killed, and now you have a continuity mess that's entirely the tool's fault.

So I built CanonKeeper around one rule: **if it can't quote the manuscript, it doesn't get to assert the fact.**

Every claim maps to a specific line of text. If the tool thinks Elena's eyes are hazel, I can see exactly where the draft says so. And when it inevitably finds a second passage that says her eyes are green, it doesn't quietly pick one. It just shows me both and asks.

Elena → eye_color = hazel
*"...Elena blinked, her hazel eyes catching the light..."* (Ch. 3, line 142)

but also:
*"...he recognized her immediately by those sharp green eyes."* (Ch. 9, line 87)

Those two can't both be right. CanonKeeper flags it, I decide which one is canon, and my answer sticks. If I say hazel, the tool can't overrule me later. If new text contradicts my call, that's a new question for me, not a silent fix.

None of this is flashy. It's the kind of thing you only appreciate when you're eighty pages deep and past-you left a mess that present-you has to clean up. Which, if you've ever worked on anything long enough, you know is basically always.

## Beyond Fiction

CanonKeeper is for my mom. But the reason I can't stop thinking about it is that I've been on the other side of the same problem in every medium I've worked in.

When I was still playing music full time, I'd open a session I hadn't touched in three weeks and spend the first hour just figuring out what state I'd left things in. Not writing. Not arranging. Just reading my own notes and trying to reconstruct decisions I'd already made. In software, I've watched a team ship a feature that directly contradicted a design decision from six weeks earlier. Nobody remembered making it. It wasn't in any doc. It was in someone's head, and then it wasn't.

The longer I work, the more I think the bottleneck in any serious creative project isn't talent or even time. It's that our tools let us create faster than we can keep track of what we've done.

## An Open Invitation

If you've made serious art, you probably have strong opinions about where the line is between "helpful" and "get the fuck out of my way." If you've built or used developer tooling, you know how quickly help turns into noise.

I don't have this figured out. I have a thesis and a tool and a lot of opinions, but I know I'm not seeing the whole picture. What eats your creative energy that shouldn't? Where have you seen a tool get the balance right? And if you build systems for a living, I'm genuinely curious: how would you design something that tracks authorial decisions through heavy revision without it all falling apart?

I'm building this for my mom because I've watched the process up close for years. And because I'm tired of "AI for creative work" meaning "AI that does the creative work."

The best tools I've ever used, in code or music or whatever, don't try to replace me. They just make it easier to do the thing I was already going to do.

That's the bar.

---

I'm building more tools along these lines. CanonKeeper is the first one I've felt like shipping publicly.

If any of this resonates, or if you think I'm wrong, I'd love to hear from you.

**TODO: Add contact page and link to it**