---
title: "Artist-in-the-loop"
subtitle: "AI for creative work should help you think, not think for you."
date: 2026-02-05
excerpt: "AI for creative work should help you think, not think for you."
draft: true
---

I've been thinking about what it would look like to build AI tools for creative work that don't try to do the creative work for you. This post is about that idea, and about CanonKeeper, a tool I'm building for fiction writers that aims to get that balance right. It watches what you've written, keeps track of the details so you don't have to, and never generates a single word of prose.

<details style="cursor: pointer;">
<summary>TL;DR</summary>

I'm building **CanonKeeper** (canon as in story canon, not artillery): a local companion app for manuscripts that keeps long projects legible. It watches a draft file (md/txt/docx), maintains a **book bible** and **scene index** grounded in direct quotes from the manuscript, and flags **continuity contradictions as questions** without generating prose.

**Hard rule:** *If it can't quote your manuscript, it doesn't get to assert the fact.*
</details>

## The Map Is Not the Territory

I have a weakness for tidy representations of messy things. Maps. Outlines. Checklists. "One doc to rule them all." Anything that turns a complicated reality into something I can glance at and feel like I understand.

The problem is the tidy version is generally a lie. Not a malicious one, just oversimplification. Useful precisely because it leaves stuff out.

The best AI tools I use as a software engineer feel like they understand this deal. Give me a thinner view of a problem so I can move forward, but don't pretend to understand the system better than I do. LLMs help me stay in flow: summarizing what I'm looking at, sketching a first pass, generating boilerplate I'd rather not type, catching footguns I missed. For chore work, I'm fine being a reviewer instead of an author. If the model writes a migration script or a test scaffold for me to sanity-check, great. Doesn't feel like it's stepping on anything sacred.

But the parts of software engineering that *are* creative (system design, product engineering, anything requiring a judgment call) don't benefit from tools aimed at replacing those functions. They benefit from leverage. Tools that keep you moving while you, as the author of the software, remain responsible for the work.

And for serious long-form work, the realistic bottleneck is rarely generating the code itself. It's generally the overhead that shows up once a project gets large and complicated. A decision you made three weeks ago fades beneath a thread on slack, and something you implement today quietly contradicts it. A piece stops fitting the larger puzzle and you can't remember why, or how the module you're looking at ended up with fifty dependencies when it started as ten lines last week.

These are structure and navigation problems, not creation problems.

## The Loop

Dev AI tools (built by software people) largely keep you in control, while emerging artistic AI tools (also... built by software people) have mostly been transactional. I want the level of tooling we have on the software side of the wall to find its way into my DAW, my mom's Scrivener files, and my neighbor's Illustrator workflows.
The phrase I keep coming back to is **artist-in-the-loop**.

In software, we mostly build for ourselves this way already. We take it for granted. Compilers catch mistakes before they ship. Linters enforce consistency without asking. Advanced search tools make a massive codebase navigable. Version control tracks what changed and when. None of these tools try to do your job. Their job is to keep the project legible enough that you can build and stay in flow.

A lot of creative AI tooling goes the other direction. It takes messy, personal, creative processes and flattens them into something simpler. Prompt goes in, output comes out. The popular tools nudge artists toward being curators of generated artifacts instead of authors of a process.

Curation might become a real skill. But it's not what most artists are trying to do when they sit down to make something they care about.

## Blame My Mother

I grew up watching my mother write novels. Not the romantic version. The version where you notice that long-form fiction includes a lot of unglamorous administration.

Names, ages, timelines, geography, relationships, rule systems, what happened in which scene, who knows what when. If you don't track it, you pay later. If you do track it, you still pay, just upfront.

I was on a long phone call with her recently while I was drafting a longer post about AI and the arts. The same theme kept surfacing: when does an artistic tool feel like it adds leverage, and when does it feel like it's trying to take your hands off the wheel?

> "I'm spending a ton of creative energy just maintaining and recalling what I've already written. Bookkeeping. Navigating my own records. It takes me out of the moment."

I recognized the shape of this problem immediately. It's so similar to certain pains in music composition and production as projects grow in size and complexity. Open an old session and suddenly you're doing archaeology. What changed between revisions? Where did the arrangement drift? Which patch chain was the sound you had in mind three weeks ago? Why does the sidechain compression no longer keep the bass punchy? You came back to *write*, and instead you're playing detective.

My first instinct was "version control problem." Which it kind of is, but also kind of isn't. Version control mostly answers *what* changed. It doesn't answer *how* a change impacted the rest of the project. What you need is something that flags which earlier decision you just contradicted, frames it, and helps you maintain continuity.

Version control, plus indexing, plus continuity management.

The human brain is not a database. We need systems for this, and the ones that exist today mostly want to generate prose for you instead.

## CanonKeeper

I couldn't find a tool that did this, so I'm building one.

CanonKeeper watches a draft file over time, maintains a private local index, and updates itself in the background as the draft changes. Intentionally boring, the way good tools are boring.

My mom keeps a book bible for every novel. Character details, locations, timeline, rules of the world. She maintains it by hand in a separate document while she writes. The problem is she's also, you know, writing a novel, so the bible could start drifting from the manuscript unless she's perfectly dilligent. Two months in she could a detail, realize the bible says one thing and the draft says another, and now she doesn't trust either. She has to go find the actual passage and reread it to figure out which version is true.

CanonKeeper builds the "book bible" directly from the manuscript text as it evolves. Every entry points back to a specific quote. If the draft changes, the bible updates. No separate doc to maintain. No drift.

It also keeps a scene index. I imagine my mother flipping through her own manuscript for twenty minutes trying to find where a character first shows up. POV, setting, which characters appear in which scenes. CanonKeeper introduces a sort of table of contents for a book that doesn't have one yet. Boring, useful, the kind of thing you'd never bother maintaining by hand because the effort isn't worth it until the one time you *desperately* need it.

And it tracks patterns in voice and style. If a character says "listen" as the first word of every third line of dialogue, it'll tell you. If you use the same unusual metaphor in chapter 2 and chapter 19, it'll show you both. No opinions on whether these are problems. Maybe they're problems. Maybe they're your style. That's your call, not the tool's.

That's the whole thing. No "chat with your novel." No prose generation. Nothing that edits your manuscript. If that sounds like a weird list of things to clarify, look at what passes for "AI writing tools" right now and you'll see why I feel the need to say it.

## The Hard Rule

The problem with using LLMs near fiction is the same problem they have everywhere else: they hallucinate. In most contexts you catch it quickly. In a novel, a hallucinated detail can sit unnoticed for chapters while you build on top of it. The nature of fiction writing presents challenges to LLM context that don't exist in more fact-checkable domains.

So CanonKeeper has one rule: **if it can't quote the manuscript, it doesn't get to assert the fact.**

Imagine I'm an author. Say the tool thinks my main character Elena's eyes are hazel. Now a second passage says her eyes are green. I want the tool to show me both and let me sort out what's canonical.

Elena → eye_color = hazel
*"...Elena blinked, her hazel eyes catching the light..."* (Ch. 3, line 142)

but also:
*"...he recognized her immediately by those sharp green eyes."* (Ch. 9, line 87)

I decide which is canon. My call sticks. New contradictions become new questions instead of silent fixes or continuity errors.

You don't notice how much this matters until the project is large enough that you can't hold it all in your head anymore. By then it's too late to start being organized. Ask anyone who's ever tried to retrofit a changelog onto a codebase with two years of undocumented decisions.

## Beyond Fiction

CanonKeeper is for my mom.

When I was playing music full time I'd come back to a sibelius chart after three weeks and blow an hour reading my own notes, trying to figure out why I'd made a specific arrangement choice that I hadn't documented at all. Not playing or making progress. Not writing. Just **archaeology**. I've observed and experienced the same pattern in software. A team I was on shipped a feature that directly contradicted a design decision from six weeks earlier. Nobody remembered making it. It wasn't in any doc. It was in someone's head, and then it wasn't.

Tools let us create faster than we can keep track of what we've done. That gap is a problem.

If you've made serious art, you probably have strong opinions about where the line is between "helpful" and "get the fuck out of my way" when it comes to tools in this domain. And if you've built or used a lot of dev tooling, you know how quickly "help" turns into noise.

I want to get this right, and I know I'm missing things. What eats your creative energy that shouldn't? Where have you seen a tool actually get this balance right? If you build systems for a living, how would you design something that tracks authorial decisions through heavy revision without it all falling apart?

I'm building this for my mom because I've had a front-row seat to this specific problem for years. And because I'm tired of "AI for creative work" meaning "AI that does the creative work."

The best tools I've ever used don't try to replace my role in the process. They give me leverage and keep me the loop.

---

I'm building more tools with this "artist-in-the-loop" paradigm as the theme. CanonKeeper is just the first one I've felt compelled to ship publicly.

If any of this resonates, or if you think I'm wrong about something, I'd love to hear from you.

**TODO: Add contact page and link to it**