# Artist-in-the-loop

  Updated: February 5, 2026

  I have a weakness for tidy representations of messy things. Maps. Outlines. Checklists. "One doc to rule them all." Anything that turns a complicated reality into something I can glance at and feel like I understand.

  The problem is the tidy version is always a lie. Not a malicious one. Just a simplification. Useful precisely because it leaves stuff out. Which is fine, until it isn't.

  That distinction (useful, but incomplete) has been rattling around in my head while I watch the current wave of AI tooling in the arts.

  Because the best AI tools I use as a developer feel like they understand the deal: the map is not the territory. Give me a thinner view of a problem so I can move forward, but don't pretend to understand the system better than I do. Help without feigning omniscience.

  A lot of "AI for the arts" feels like the opposite. Which is, you know, not great.

  ---

## Leverage vs replacement

  AI has been a real daily advantage for me in software. Not the sci-fi version where I open claude code, yolo *build the product, make no mistakes* with `--dangerously-skip-permissions` and go make coffee. More like: I'm stuck in a codebase, about to waste an hour digging through legacy code and docs, and the tool helps me get traction again. Summarizing what I'm looking at, sketching a first pass, generating boilerplate I'd rather not type myself, catching obvious footguns. That kind of thing.

  Further, I'm not pretending all programming is "creative." A lot of it is chores and rote work. For the chore bucket, I'm fine being a reviewer instead of the author. If the model writes a migration script or a test scaffold and I sanity-check it, great. That doesn't feel like it's stepping on anything sacred. Feels like delegating the part of the job I never liked.

  But the parts of software that **are** creative—architecture design, product engineering, taste-based judgment calls—those don't benefit from a product that is aimed towards replacement. They benefit from leverage. Tools that keep you moving while you stay responsible for the work. That's the difference.

  Most consumer generative products in music, visual art, writing, and videography lean hard toward replacement as the default. Prompt in, artifact out. A vending machine with better marketing. But it's not what I'm talking about here.

  Sometimes that's fun, even impressive. But most serious artists I know aren't asking for this when they complain about their process. They want something else entirely.

  The complaints are never "I can't produce output."

  The complaints are about the overhead that shows up once the project's surface expands:

* recall
* continuity
* structure
* drift across revisions
* keeping coherence as complexity grows

  This is often what determines whether you actually get to any finished state on a project. The boring stuff that nobody talks about.

  ---

## The Loop

  The phrase I keep coming back to is artist-in-the-loop. Tools that assume the artist is staying in the loop and build around that assumption. Not "let me do it for you." More like: "let me keep the project legible and navigable enough that you can keep making judgment calls without losing your mind or breaking flow."

  In software, we take this posture for granted (there are a lot of reasons for this that we're not gonna get into here). Compilers don't write your program - they just compile it. Linters don't ship features, they just check your code. Search doesn't decide architecture, it just helps you find stuff. Version control doesn't tell you what your product should be, it just tracks changes. These tools create a thin, legible view of a complicated thing so you can work on it without drowning. They just... help. Without taking over.

  A lot of creative AI tooling feels modernist in the worst sense. Not because it's "modern" - that's not the problem. The problem is it's overly confident that a schematic view is enough. Takes a messy, local, personal process and flattens it into something centrally legible. Prompt goes in, output comes out. Treats that as the work. Misses the point entirely.

  Nudges artists toward being curators of generated artifacts instead of authors of a process. Curation might be valid, but it's not what most artists are trying to do when they sit down to make something they actually care about.

  ---

## The conversation that made this click

  I grew up watching my mother write novels. Not in a sentimental way - I love her, but that's not what I'm talking about. In the practical way where you notice that writing long-form fiction includes a lot of unglamorous administration. Way more than you'd think.

  Names, ages, timelines, geography, relationships, rule systems, what happened in which scene, who knows what when. The list goes on. If you don't track it, you pay later. If you do track it, you still pay, just upfront in time and mental energy. Exhausting either way.

  I was on a long phone call with my mom recently while I was drafting a longer post about AI and the arts. The same question kept coming up: when does an artistic tool feel like it adds artistic leverage, and when does it feel like its trying to take your hands off the wheel? That distinction matters more than I realized at first.

  She wasn't asking for a machine to write chapters. She was saying: I'm doing too much memory work. Spending my best creative energy on recall and bookkeeping. Waste of creative energy.

  I recognized the shape of the problem immediately. Music has the same category of pain. Just different nouns.

  Open an old session and suddenly you're doing archaeology:

* which version is the "real" one
* what changed between revisions
* where the arrangement drifted
* why the chorus feels different now
* which patch chain was the sound

  My first instinct: "this is a version control problem." Which it kind of is, but also kind of isn't.

  Version control helps. Mostly answers what changed, not what that change did to the project. What's needed is a tool that flags which earlier decision you just contradicted. That's the real issue.

  Problem is broader. Probably oversimplifying, but right now I'm thinking:

  version control + indexing + continuity.

  Project got big and complicated to manage, and a human brain is not a database. Need better tools for this stuff. That's what I'm trying to build. We'll see how it goes.

  ---

## What I'm building for my mom: CanonKeeper

  Background companion app for manuscript. Watches a draft file (md/txt/docx), keeps derived metadata locally, updates as the draft changes. Intentionally boring in the way good tools are boring. No flashy UI, just works.

  CanonKeeper maintains three living views of the draft:

  A book bible
  Characters, locations, organizations, artifacts, terms, rules, timeline events. Stored as structured canon instead of a doc that goes stale the second you keep writing.

  A scene index
  Scene boundaries, POV per scene, setting per scene, where entities appear. Goal isnt "analysis" - it could be, but thats not the point. Goal is navigation. Revision stops feeling like spelunking when you have a map.

  A style/voice report (diagnostic only)
  Repeated phrases, tone outliers, dialogue tics per character. No "heres a better sentence" - the tool doesn't get to say that. Just shows you patterns. "This pattern is showing up a lot; here are examples." Writer decides whether that's a problem or a signature. Tool doesn't get to decide anything. Just shows you what's there.

  Two practical features: continuity contradictions flagged as questions, and answering "what did I name that thing?" with citations back into the draft. Both save significant time.

  None of this writes the book. That's the point. Tool posture I wish more creative AI products had. Most of them don't. Frustrating. Makes me want to build more tools.

  ---

## The rule that keeps it from becoming a creepy co-author

  LLMs have a personality trait that makes them dangerous in creative work: they'll sound right while being wrong. Might not realize they're wrong until later. By then it might be too late - you've already built on top of the wrong thing.

  If a tool starts confidently inventing facts about your story world, it doesn't "help." Adds chaos, and it does it with authority. Bad combo.

  CanonKeeper has a hard rule:

  If it can't quote the manuscript, it doesn't get to assert the fact. Period.

  Bible entry is stored as a claim with evidence. If it thinks "Elena's eyes are hazel," it has to point to the exact line that says so. If the draft later says "green," it doesn't "fix" anything - it can't, even if it wants to. Flags a contradiction and shows both quotes. Writer decides what's canon. Tool doesn't get a vote. Tools don't get opinions.

  Once the writer confirms canon, that becomes the locked truth. Tool can disagree later - and it might, because tools are weird sometimes - but it can't overwrite the author. No override button. Disagreements become issues, not silent edits. They'll ask "but what if the tool is right?" - that's not the point.

  That boundary is the whole game. Author owns canon. Tool owns indexing. Thats it.

  ---

## Why this matters beyond novels

  CanonKeeper is a writing tool because that's what my mother needs. Idea is not specific to writing. Applies everywhere.

  Most serious creative pursuits hit the same wall: the project gets big, the number of decisions compounds, and the overhead starts eating the part of your brain you actually want to spend on taste. Exhausting.

  That's the direction I'm betting on. Tools that assume the artist is staying in the loop, and build around that assumption. We'll see if I'm right.

  ---

## What I'm trying to learn

  Dont want to over-claim what any of this means. Building it because the problem feels real, and because I'm not satisfied with "press button, receive artifact" being the default definition of AI in the arts. Theres got to be more to it than that.

  If you've made serious art, you probably have strong opinions about where the line is between "helpful" and "get the fuck out of my way". I know I do.

  If you've built developer tooling, you know how quickly "help" turns into noise if it isn't grounded and constrained.

  So I'm collecting practical answers. Here's what I'm wondering:

* In your medium, what's the bookkeeping that steals the most energy?
* What should an artist-in-the-loop assistant do automatically, and what should be strictly on-demand?
* What "mechanical help" feels genuinely fine (grammar, obvious clashes, basic consistency checks), and what starts stepping on authorship?
* If you build systems: what's the simplest evidence model that survives heavy revision without becoming brittle?

  I'm building this for my mom because I've watched the manual process up close for years, and because I'm tired of creative AI being framed like the goal is to avoid making anything. That's not the point, at least not for me. I've thought about this a lot, and I keep coming back to the same conclusion.

  The best tools I've ever used, in code or music or whatever, don't try to replace me as the decision maker. They just make it easier for me to do my work. That's the bar. That's what I'm aiming for here.

  ---

  I'm building more tools with this "artist-in-the-loop paradigm" as the theme. CanonKeeper is just the first one I've felt compelled to make real. There will probably be more.

  If you want to collaborate, contribute, argue, or just send me examples of tools you think already get this right, I'd genuinely like to talk. I'm especially interested in dissenting views that center on the intersection of real creative practice and emerging tech.
