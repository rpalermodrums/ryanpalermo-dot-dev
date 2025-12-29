---
title: "The Best Copy Is No Copy"
subtitle: "If the interface needs explanation, the interface doesn't work"
date: 2024-08-10
excerpt: "If the interface needs explanation, the interface doesn't work."
featured: false
---

Good copy matters.

Clear button labels reduce hesitation. Honest error messages prevent thrash. A single sentence can calm a user down at the exact moment a system feels shaky.

But here's the rule that keeps holding up:

**If the interface needs explanation, the interface doesn't work.**

Copy can support a good interaction. It cannot replace one.

## What "no copy" means

This is not anti-words. It is anti-instructions.

If a screen needs paragraphs to teach people what to do, the design is asking users to study before they act. That is friction with nicer typography.

Good interfaces make three things obvious:

* What state you are in
* What you can do next
* What will happen if you do it

Those basics show up in usability guidance because they keep being true. ([Nielsen Norman Group][1])

When the interface does that work, most instructional copy becomes redundant.

## Copy is debt

Every sentence is a promise that has to stay true.

Across edge cases. Across feature flags. Across configuration differences. Across policy changes that land months later.

Copy ages faster than code because it claims to describe reality in plain language. The second reality shifts, the UI starts lying.

"We'll email you a receipt" becomes false the moment receipts are delayed, optional, filtered, or routed differently. Users notice that mismatch fast.

Trust is expensive. Text that is "almost true" spends it.

## Instructional copy is a design smell

Long instructions usually point at missing structure. The same problems repeat:

* The primary action is not obvious
* The state is hidden
* The consequences are unclear
* The UI allows avoidable mistakes
* The flow fights the user's intent

So teams add text. Then tooltips to explain the text. Then onboarding to explain the tooltips.

The interface gets louder. The user still gets stuck.

If the copy is doing the navigation, the UI is failing.

## Replace instructions with structure

Forms are the easiest place to see this.

"Fields marked with an asterisk are required" is not guidance. It is a workaround for weak affordances.

A better form makes the rules visible:

* Required fields are unmistakable
* Errors show next to the field, not in a block at the top
* Validation happens at the right moment, not after a failed submit
* The user can explore without being punished

These patterns are not trends. They are established guidelines because they reduce error rates and speed completion. ([Nielsen Norman Group][2])

Instructional copy often disappears when the structure is honest.

## Replace warnings with guarantees

"Don't close this window while we process your upload."

This kind of sentence does not help the user. It asks the user to compensate for a system that cannot keep a promise.

If the work can continue safely, make it continue safely.

If it cannot, the UI should enforce that constraint and communicate progress clearly. A warning is the weakest possible contract. A guarantee is a real one.

This is part of "visibility of system status," and it is a core heuristic for a reason. Users should not have to guess. ([Nielsen Norman Group][1])

## Replace explanations with feedback

"Passwords must be at least 12 characters and include a number."

This is common because it is easy to write. It is also a tax on working memory. Users now have to hold rules in their head while typing, and working memory is limited. ([PubMed][3])

Better interfaces offload that bookkeeping:

* Show requirements as a checklist
* Update it live as the user types
* Accept paste and password managers
* Prefer long passphrases over fragile composition rules

This is not "delight." It is cognitive load reduction. The interface does the remembering so the user can focus on the goal. ([Wiley Online Library][4])

## Tooltips are a smell

Tooltips are often used to keep a screen looking clean.

They hide information behind a gesture that is inconsistent across devices. More importantly, they push users from recognition to recall, which slows people down and lowers confidence. ([Nielsen Norman Group][1])

If a tooltip explains a core concept, it is not optional help.

It is a label that belongs in the interface.

Tooltips work best when they add nuance. They fail when they carry meaning.

## A brutal test

Remove the instructional copy.

Does the screen still work?

If deleting a paragraph makes the primary action unclear, that paragraph was doing the job the UI should do.

The goal is not silence. The goal is that the interface holds up on its own.

## Where copy earns its keep

Some words are essential because they do real work:

* They are short
* They are specific
* They reflect the current state
* They help recovery

This is especially true in error states. Strong error messages are visible, precise, and focused on what the user can do next. ([Nielsen Norman Group][5])

It is also true for accessibility. Errors cannot be communicated only through styling or color. They must be identified in text. ([W3C][6])

Vague reassurance is the opposite of help.

"Oops. Something went wrong."

That line increases retries, support tickets, and abandonment. It trades clarity for tone and loses both.

## Loading copy is a promise

Even "Loading…" sets an expectation.

Spinners, progress bars, and skeleton screens communicate different things. They work in different contexts. They can backfire when they imply readiness that is not real. ([Nielsen Norman Group][7])

If you cannot make a reliable promise about timing or stability, do not fake confidence. Show what you know, and constrain what you cannot guarantee.

## A simple rule before adding text

Before adding a sentence, ask two questions:

1. **What failure does this prevent?**
   If it prevents none, it is decoration.

2. **What change would make this sentence unnecessary?**
   If the UI can carry the meaning, let it.

Sometimes copy stays. That is fine.

But it should be a seatbelt, not the frame.

## Closing

Good copy has a job. It should name the truth, reduce confusion, and help people recover when things go wrong.

But most copy people add is not doing that job. It is covering for missing structure.

So treat instructional text like a bug report. When you feel the urge to explain, stop and ask what the interface is failing to show.

Fix that first.

Then write the few words you cannot avoid.

[1]: https://www.nngroup.com/articles/ten-usability-heuristics/ "10 Usability Heuristics for User Interface Design"
[2]: https://www.nngroup.com/articles/errors-forms-design-guidelines/ "10 Design Guidelines for Reporting Errors in Forms"
[3]: https://pubmed.ncbi.nlm.nih.gov/11515286/ "The magical number 4 in short-term memory - PubMed - NIH"
[4]: https://onlinelibrary.wiley.com/doi/abs/10.1207/s15516709cog1202_4 "Cognitive Load During Problem Solving: Effects on Learning"
[5]: https://www.nngroup.com/articles/error-message-guidelines/ "Error-Message Guidelines"
[6]: https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html "Understanding Success Criterion 3.3.1: Error Identification"
[7]: https://www.nngroup.com/articles/skeleton-screens/ "Skeleton Screens 101"
