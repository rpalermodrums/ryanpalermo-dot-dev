---
title: "Peak UX Doesn't Always Look Nice"
subtitle: "From the support inbox"
date: 2025-12-18
excerpt: "From the support inbox: what survives reality, what gets tickets."
featured: false
---

*A slightly neurotic essay from the "I read the angry tickets" side of the house*

I used to think I liked pretty interfaces.

Then I got a front-row seat to what "pretty" does under pressure.

Not in a design review. In the real world.

In the world where:

* someone's password manager autofills the wrong field
* the Wi-Fi is bad
* the user is on a cracked iPhone SE
* the CFO is trying to reimburse something five minutes before a flight
* the support team is triaging 60 tickets that all sound like, "it won't let me"

When a UI gets "too pretty," my brain starts asking a different question:

**What will this look like when it fails?**

Because it will fail. Not always. But eventually. And UX is what happens then.

---

## The UX you ship is the UX you support

Here's the thing the support inbox teaches you fast:

Users don't experience your product as "flows."

They experience it as:

* "I can't log in"
* "Where did my thing go"
* "It charged me twice"
* "It says success but I don't trust it"
* "I'm stuck"

The gap between "it's gorgeous" and "it's usable" shows up as **retries, confusion, and tickets**.

Pretty can be a gift. It can also be a liability.

It becomes a liability when it turns normal uncertainty into panic.

---

## "Ugly" often means "truthful"

When people say "ugly UI," they usually mean plain or dense.

From a support perspective, "ugly" is often something else:

**A UI that refuses to lie.**

It tells you what happened.
It tells you what to do next.
It tells you what it needs from you.

That tends to look like:

* labels
* explicit states
* text you can quote in a ticket
* layouts that do not move around
* boring buttons that always stay where you left them

This stuff is not glamorous.

It is also the difference between "I fixed it myself" and "I'm emailing your CEO."

---

## The "Norman Door" is also a "Support Door"

A door that needs a sign did not become usable.

It became debuggable.

Software does the same thing.

When the primary action requires:

* a tooltip
* a coachmark
* a celebratory animation that hides the button
* a "hint" that pops up after you already failed

Support learns the truth: the UI is not self-evident.

And the fix is rarely "more explanation."

The fix is usually: **make the interaction obvious, even if it looks less clean.**

A door should tell you how it opens.
A button should look like a button.
A destructive action should not be a subtle icon.

---

## Fancy loading states create a special kind of anger

Skeletons are the classic example.

Skeletons can be great. They can also be a trap.

A skeleton says, "your content is basically here."
A spinner says, "you are waiting."

If the system is fast and stable, skeletons feel modern.

If the system is slow, variable, or cache-dependent, skeletons feel like gaslighting.

Users start reading. They start aiming their cursor. They try to click.
Then the layout shifts. Or the numbers change. Or half the page repaints.

Now you get tickets like:

* "It keeps changing"
* "I clicked the wrong thing because it moved"
* "Is this broken or is it thinking"

Support does not care that the animation is tasteful.

Support cares that the UI matched the truth.

---

## "Minimal" can be a form of hiding

Minimal UIs often hide two things:

1. **Information users need to feel safe**
2. **Controls users need to recover**

This shows up everywhere.

A clean checkout page looks premium.
Then the user asks: Where is the return policy? Shipping date? Taxes? Seller? Warranty?

A clean banking app looks calm.
Then the user asks: Did it go through? Is it pending? When will it settle? What is the reference number?

A clean admin tool looks modern.
Then the operator asks: Where is the raw ID? The timestamps? The logs? The retry button?

Minimalism reduces visual noise.

It can also remove the very signals that reduce anxiety.

---

## Anxiety is a UX bug and information is the patch

**Fear**:

"I think I might have lost something."
"I think I might get charged again."
"I think I might have messed up."

Great UX reduces that fear.

Not with delight.

With receipts.

Receipts look like:

* clear confirmation states
* stable identifiers
* timestamps
* "what happens next" copy
* constraints shown upfront
* reversal paths that are easy to find

Amazon is dense for a reason. It is doing anxiety management at scale.

It is not "pretty."

It is calming.

---

## Error messages are part of your product's personality

The fastest way to tell whether a product respects its users is to look at its error states.

A good error message does three things:

1. Says what happened
2. Says why (if it's knowable)
3. Says what to do next

Support loves messages like:

* "Your session expired. Sign in again."
* "File too large. Max 25MB."
* "Payment declined. Try a different card or contact your bank."
* "We couldn't save because you're offline. We'll retry automatically."

Support hates:

* "Oops! Something went wrong."

Because "Oops" is not a diagnostic. It is a shrug.

And "cute" in a failure state reads like: "we do not take your problem seriously."

---

## Cars, cockpits, and the UX of not dying

This is the part where product people talk about knobs.

It's still true.

Touchscreens in cars look modern.
They also remove tactile feedback and increase glance time.

In high-stakes environments, the UI needs to be operable with:

* partial attention
* gloves
* stress
* shaky hands
* bad lighting

That tends to produce interfaces that look dense and old.

A cockpit is not minimalist because minimalism is not the goal.

**Operational reliability is the goal.**

Support is basically a cockpit engineer for your product.
They learn which controls need to be reachable when everything is on fire.

---

## Lists are not boring. They are merciful.

The support inbox will also teach you to respect the humble list.

Lists are:

* scannable
* stable
* easy to compare
* easy to search
* easy to screenshot
* easy to describe over the phone

A list lets a user say, "I see it."
A card grid often makes them say, "Wait, which one?"

When you turn everything into a card with generous spacing and floating shadows, you are making a bet.

You are betting that the user's main job is to admire.

Often the user's job is to decide.

Lists help them decide.

---

## A support-first checklist for "make it nicer"

When someone says "make it nicer," I translate it into a more useful question:

**What pain are we trying to remove?**

Then I run a quick mental checklist.

### 1) How bad is it if the user is wrong?

If mistakes are costly, choose clarity over cleverness.
Obvious labels beat minimalist icons.

### 2) How often will this fail in the wild?

If failure is non-trivial, invest in states.
Empty, loading, partial, offline, retry, expired, conflict.

Make them boring. Make them accurate.

### 3) Can a user explain what they see?

If they can't describe the screen, support can't help them.
If support can't help them, you will build a second product called "manual recovery."

### 4) Is the UI honest about time?

If it might take 2 seconds or 20 seconds, don't imply it is always 2.
A calm "still working" is better than a fake sense of progress.

### 5) Is the UI stable under interaction?

If the user can click while things are moving, they will.
If they click the wrong thing, they will blame themselves first.
Then they will blame you.

Don't make them feel stupid.

---

## The real compromise: beauty that holds up in court

You rarely need to choose between "beautiful" and "usable."

You often need to choose between:

* polish that improves comprehension
* polish that increases ambiguity

The best teams I've worked with do this:

* keep the interaction model simple and explicit
* make layouts stable
* make states legible
* write calm copy
* refine typography and hierarchy
* add delight outside the critical path

Beauty is great.

But in the support inbox, "beautiful" has a specific meaning:

**It survives contact with reality.**

---

## Closing thought

Users will forgive boring.

They will not forgive being misled.

They forgive a plain page that tells the truth and gets them unstuck.
They do not forgive a gorgeous interface that hides the button, shifts the layout, and makes them doubt themselves.

So yes, make it nice.

Just make sure "nice" includes:

* clarity
* stability
* recovery
* honesty

Sometimes that means the best UX looks like a list from 2007.

And honestly, that list might be the reason your support team gets to sleep.
