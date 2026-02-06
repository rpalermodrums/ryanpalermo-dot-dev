---
title: "Artist-in-the-loop"
subtitle: "AI for creative work should help you think, not think for you."
date: 2026-02-05
excerpt: "AI for creative work should help you think, not think for you."
draft: true
---

I've been thinking about what it would look like to build AI tools for creative work that don't try to do the creative work for you. This post is about that idea, and about **CanonKeeper**, a tool I'm building for fiction writers that aims to get that balance right. It watches what you've written, keeps track of the details so you don't have to, and never generates a single word of prose by design.

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

I was raised by an author who wrote corporate PR releases by day and moonlighted as a novelist. I never noticed as a kid, but it turns out that long-form fiction includes a lot of unglamorous administration. Keeping track of names, ages, timelines, geography, relationships, rule systems, what happened in which scene, who knows what when...

I was on a long phone call with her recently while I was thinking through an upcoming post about AI and the arts. The same theme kept surfacing in my mind as we spoke: when does an artistic AI tool enhance the artist, and when does it cross over the invisible line where it feels like it's trying to take your hands off the wheel?

Somewhere in the midst of this conversation, mom said something like:

> "I spend a lot of creative energy maintaining and recalling what I've already written. Bookkeeping. Every author maintains their own manually updated system."

I recognized the shape of this problem immediately. It's so similar to certain pains in music composition and production as projects grow in size and complexity. Open a months-old session in your DAW and suddenly you're doing archaeology. What changed between revisions? Where did the arrangement drift? Did I mean to mute the percussion for the first 8 measures, or did I mute it to mix the rest of the tracks without the perc in my headphones? Which patch chain created the sound I had in mind three weeks ago? Why does kick's sidechain compression no longer keep the bass punchy? You came back to *create* and wind up playing detective to a self-made, boring mystery.

Thinking about how I might approach the problem on the writing front, my first instinct was "ah! it's a version control problem." Which it kind of is, but also kind of isn't. Version control answers *what* changed. It doesn't answer *how* a change impacted the rest of the project and cascade of small but meaningful dependencies within a story. Whats actually needed is something that flags earlier decisions that were contradicted, makes it easy for the author to resolve conflicts, and helps them maintain continuity.

A system is needed to manage this complexity. The human brain is not a database.

## CanonKeeper

I couldn't find a tool that solved this problem for my mom, so I'm building one.

CanonKeeper watches a draft over time, maintains a local index, and updates itself in the background as the draft evolves. Intentionally boring, the way good tools are boring.

My mom keeps a "book bible" for every novel she has in progress. Character details, locations, timeline, rules of the world. She maintains it in a separate document while she writes. The problem is she's also, you know, writing a novel, so that bible could start drifting from the manuscript unless she's perfectly diligent. Two months in she could forget a detail, realize the bible says one thing and the draft says another, and now she doesn't trust either. Which version is true?

CanonKeeper builds the "book bible" directly from the manuscript text as it evolves, and it tracks revision history with context. Each bible entry points back to specific lines in the manuscript. If the draft changes, the bible updates itself. No separate doc to maintain, which means no drift.

It also keeps a scene index. I like to imagine my mother scrolling through her draft for twenty minutes trying to remember whether it was just foggy or lightly drizzling when a minor character first appeared 8 chapters ago. CanonKeeper introduces a sort of table of contents for a book that doesn't have one yet. Boring, useful, the kind of thing you'd never bother maintaining by hand because the effort isn't worth it until the one time you *desperately* need it.

And it tracks patterns in voice and style. If a character says "listen" as the first word of every third line of dialogue, it'll tell you. If you use the same unusual metaphor in chapter 2 and chapter 19, it'll show you both. No opinions on whether these are problems. Maybe they're problems. Maybe they're your style. That's your call, not the tool's.

That's the whole thing. No "chat with your novel." No prose generation. Nothing that edits your manuscript. If that sounds like a weird list of things to clarify, look at what passes for an "AI writing tool" right now and you'll immediately understand why I feel the need to say it.

## Boundaries

The problem with using LLMs anywhere near fiction is the same problem they have everywhere else: they hallucinate. In most contexts you catch it quickly. But in a novel, a hallucinated detail can sit unnoticed for chapters while you build on top of it. The nature of fiction writing presents challenges to LLM context that don't exist in more fact-checkable, deterministic domains.

So CanonKeeper has one rule: **if it can't quote the manuscript, it doesn't get to assert the fact.**

Imagine I'm an author. Say the tool thinks my main character Elena's eyes are hazel. Now a second passage says her eyes are green. I want the tool to show me both and let me sort out what's canonical.

Elena → eye_color = hazel
*"...Elena blinked, her hazel eyes catching the light..."* (Ch. 3, line 142)

but also:
*"...he recognized her immediately by those sharp green eyes."* (Ch. 9, line 87)

I decide which is canon. My call sticks. New contradictions become new questions instead of silent fixes or continuity errors.

You don't notice how much this matters until the project is large enough that you can't hold it all in your head anymore. By then it's too late to start being organized. Ask anyone who's ever tried to retrofit a changelog onto a codebase with two years of undocumented decisions.

## Beyond Fiction

CanonKeeper is for my mom, but I've had a front-row seat to this specific problem for years. And because I'm tired of "AI for creative work" meaning "AI that does the creative work."

If you've made real art in some capacity, you probably have strong opinions about where the line is between "helpful" and "get the fuck out of my way" when it comes to tools in this domain. And if you've built or used a lot of dev tooling, you know how quickly "help" turns into noise.

I want to get this right, and I know I'm missing things. What eats your creative energy that shouldn't? Where have you seen a tool actually get this balance right? If you build systems for a living, how would you design something that tracks authorial decisions through heavy revision without it all falling apart?

The best tools I've ever used don't try to replace my role in the process. They give me leverage and keep me in the loop.

---

I'm building more tools with this "artist-in-the-loop" paradigm as the theme. CanonKeeper is just the first one I've felt compelled to ship publicly.

If any of this resonates, or if you think I'm wrong about something, I'd love to hear from you.

**TODO: Add contact page and link to it**