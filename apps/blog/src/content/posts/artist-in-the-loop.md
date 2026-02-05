# AI Made Me Faster at Shipping Code. Why Can't We Build Artist-in-the-Loop Tools for the Arts?

February 5, 2026

I have a weakness for tidy representations of messy things.

Maps. Outlines. Checklists. "One doc to rule them all." Anything that turns a complicated reality into something I can glance at and feel like I understand.

The problem, obviously, is that the tidy version is always a lie. Not a malicious lie. Just a simplification. A sketch. Useful precisely because it leaves a bunch of stuff out.

That distinction (*useful, but incomplete*) has been rattling around in my head while I watch the current wave of AI tooling in the arts.

Because the best AI tools I use as a developer feel like they understand the deal: the map is not the territory. The tool can give me a thinner view of the problem so I can move, but it doesn't get to pretend it understands the whole system better than I do.

A lot of "AI for the arts" feels like the opposite. Like we looked at the map, forgot it was a map, and started building cities on it.

---

## Leverage vs replacement

AI has been a real daily advantage for me in software. Not the sci-fi version where I type *build the product* and go make coffee. More like: I'm stuck in a codebase, I'm about to waste an hour, and the tool helps me get traction again. Summarizing what I'm looking at. Sketching a first pass. Generating boilerplate I'd rather not type. Catching obvious footguns.

I'm not pretending all programming is "creative." A lot of it is chores. For the chore bucket, I'm fine being a reviewer instead of the author. If the model writes a migration script or a test scaffold and I sanity-check it, great. That doesn't feel like it's stepping on anything sacred. It feels like outsourcing the part of the job I never liked.

But the parts of software that *are* creative (architecture, product shape, taste, vibe-based judgment calls) don't benefit from replacement. They benefit from leverage. Tools that keep you moving while you stay responsible for the work.

That's the split I wish we talked about more in the arts.

Most consumer generative products in music, images, writing, video, they lean hard toward replacement as the default posture. Prompt in, artifact out. A vending machine with better marketing.

Sometimes that's fun. Sometimes it's impressive. Sometimes it's even useful. But that's not what most serious artists I know are asking for when they complain about their process.

The complaints aren't usually "I can't produce output."

The complaints are about the overhead that shows up once the project gets big:

* recall
* continuity
* structure
* drift across revisions
* keeping coherence as complexity grows

This is the stuff often that determines whether you actually get to any sort of finished state on a project.

---

## Artist-in-the-loop

The phrase I keep coming back to is:

**artist-in-the-loop tools.**

Tools that assume the artist is staying in the loop, and build around that assumption.

Not "let me do it for you." More like: "let me keep the project legible enough that you can keep making judgment calls without losing your mind."

In software, we take this posture for granted. Compilers don't write your program. Linters don't ship features. Search doesn't decide architecture. Version control doesn't tell you what your product should be. These tools create a thin, legible view of a complicated thing so you can work on it without drowning.

The trick is that good tools stay humble about what the thin view can't capture.

A lot of creative AI tooling feels... high-modernist in the worst sense. (Not because it's "modern," but because it's overly confident that a schematic view is enough.) It takes a messy, local, personal process and tries to flatten it into something centrally legible (prompt → output) and then treats that as the work.

That posture isn't neutral. It nudges artists toward being curators of generated artifacts instead of authors of a process. Which might be a valid activity! It just isn't the activity most artists are trying to do when they sit down to make something they actually care about.

---

## The conversation that made this click

I grew up watching my mother write novels. Not in a sentimental way. In the practical way where you notice that writing long-form fiction includes a lot of unglamorous administration.

Names, ages, timelines, geography, relationships, rule systems, what happened in which scene, who knows what when. If you don't track it, you pay later. If you *do* track it, you still pay, you just pay upfront in time and mental energy.

Recently I was on a long phone call with her while I was drafting a longer post about AI and the arts. We kept circling the same question: when does a tool feel like leverage, and when does it feel like it's trying to take your hands off the wheel?

She wasn't asking for a machine to write chapters. She was basically saying: *I'm doing too much memory work. I'm spending my best creative energy on recall and bookkeeping.*

And I recognized the shape of the problem immediately, because music has the same category of pain. Just different nouns.

Open an old session and suddenly you're doing archaeology:

* which version is the "real" one
* what changed between revisions
* where the arrangement drifted
* why the chorus feels different now
* which patch chain was *the* sound

My first instinct was: "this is a version control problem."

And it is, partly. Version control helps. But version control mostly answers **what changed**, not **what that change did to the project**. What's needed to solve this problem is a tool that flags which earlier decision you just contradicted.

So the real problem is broader. Still likely oversimplifying, but I'm currently thinking of it as:

**version control + indexing + continuity.**

Or more bluntly: the project got big and complicated to manage, and a human brain is not a database.

---

## What I'm building for my mom: CanonKeeper

It's a background companion app for manuscript. Watches a draft file (md/txt/docx), keeps derived metadata locally, and updates as the draft changes. Intentionally boring in the way good tools are boring.

CanonKeeper maintains three living views of the draft:

**A book bible**
Characters, locations, organizations, artifacts, terms, rules, timeline events. Stored as structured canon instead of a doc that goes stale the second you keep writing.

**A scene index**
Scene boundaries, POV per scene, setting per scene, and where entities appear. The goal isn't "analysis." The goal is navigation. Revision stops feeling like spelunking when you have a map.

**A style/voice report (diagnostic only)**
Repeated phrases, tone outliers, dialogue tics per character. No "here's a better sentence." Just "this pattern is showing up a lot; here are examples." The writer decides whether that's a problem or a signature.

And then two practical features that matter way more than they sound like they should:

* continuity contradictions flagged as questions
* "what did I name that thing?" answered with citations back into the draft

None of this writes the book. That's the point. This is the tool posture I wish more creative AI products had.

---

## The rule that keeps it from becoming a creepy co-author

LLMs have a personality trait that makes them dangerous in creative work: they'll sound right while being wrong.

If a tool starts confidently inventing facts about your story world, it doesn't "help." It adds chaos, and it does it with authority. Terrible combo.

So CanonKeeper has a hard rule:

**If it can't quote the manuscript, it doesn't get to assert the fact.**

A bible entry is stored as a claim with evidence. If it thinks "Elena's eyes are hazel," it has to point to the exact line that says so. If the draft later says "green," it doesn't "fix" anything. It flags a contradiction and shows both quotes. The writer decides what's canon.

Once the writer confirms canon, that becomes the locked truth. The tool can disagree later, but it can't overwrite the author. Disagreements become issues, not silent edits.

That boundary is the whole game. Author owns canon. Tool owns indexing.

---

## Why this matters beyond novels

CanonKeeper is a writing tool because that's what my mother needs. But the idea is not specific to writing.

Most serious creative pursuits hit the same wall: the project gets big, the number of decisions compounds, and the overhead starts eating the part of your brain you actually want to spend on taste.

That's the direction I'm betting on. Tools that assume the artist is staying in the loop, and build around that assumption.

---

## What I'm trying to learn

I don't want to over-claim what any of this means. I'm building it because the problem feels real, and because I'm not satisfied with "press button, receive artifact" being the default definition of AI in the arts.

If you've made serious art, you probably have strong opinions about where the line is between "helpful" and "get the fuck out of my way."

If you've built developer tooling, you know how quickly "help" turns into noise if it isn't grounded and constrained.

So I'm collecting practical answers:

* In your medium, what's the bookkeeping that steals the most energy?
* What should an artist-in-the-loop assistant do automatically, and what should be strictly on-demand?
* What "mechanical help" feels genuinely fine (grammar, obvious clashes, basic consistency checks), and what starts stepping on authorship?
* If you build systems: what's the simplest evidence model that survives heavy revision without becoming brittle?

I'm building this for my mother because I've watched the manual process up close for years, and because I'm tired of creative AI being framed like the goal is to avoid making anything.

The best tools I've ever used, in code or music or whatever, don't try to replace me, and instead make it easier for me to do my work. That's the bar.

-----------

I'm building more tools with this "artist-in-the-loop paradigm" as the a theme. CanonKeeper is just the first one I've felt compelled to make real.

If you want to collaborate, contribute, argue, or just send me examples of tools you think already get this right (or completely disagree with me), I'd genuinely like to talk. I'm especially interested in dissenting views that center on real creative practice and its intersection with AI.