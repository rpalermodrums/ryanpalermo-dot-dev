---
title: "The Happy Path Is a Lie"
subtitle: "Designing for 'almost done'"
date: 2024-12-15
excerpt: "Designing for 'almost done' — the messy middle where trust is won or lost."
featured: false
---

Most product work assumes a clean story.

User clicks a button. The system succeeds. The UI confirms. Everyone moves on.

It's a nice story. It is also not how software behaves in the real world.

Real UX lives between "not started" and "done," in the messy middle where the user is *almost* finished and the system is *almost* sure.

**"Almost done" is where trust is won or lost.**

## What "almost done" looks like

"Almost done" is not an edge case. It's the default state of modern software.

* The upload finished, but processing is still running
* The payment submitted, but the bank hasn't settled it
* The form saved, but the network dropped after the request left the device
* The invite sent, but delivery is slow or filtered
* The sync started, but half the data is stale
* The user clicked twice because the button looked idle
* The backend succeeded, but the UI never got the response

Users don't care which layer failed. They care about one question:

**Did my action count?**

## The worst UX is uncertainty with consequences

People can tolerate slowness. They can tolerate a clear failure.

What they can't tolerate is ambiguity when money, data, or time is involved.

* Did it charge me?
* Did it submit?
* Did I lose my changes?
* If I try again, will it duplicate?

When the UI can't answer those, people do the rational thing. They retry. They refresh. They back out. They click again. They open another tab.

Then your system turns a small glitch into a bigger incident.

If you want fewer duplicates, fewer chargebacks, and fewer tickets, the fix is not "better microcopy." The fix is designing the middle.

## If you don't design for retries, you ship duplicates

The fastest way to create a mess is to treat retries as user error.

If the outcome is unknown and the UI still allows repeat actions, users will repeat them. They should. That's not confusion. That's risk management.

So build around a simple truth:

**When the user is unsure, they will try again.**

That means a few things have to be real, not aspirational:

* Submits are idempotent
* Buttons don't fire twice
* Requests are safe to repeat
* The UI shows what it knows, even when it's incomplete

If you can't make the action safe to repeat, you need a stronger constraint than "please don't click again."

## "Done" is not a moment. It's a state machine.

Many products act like there are only two states: working and done.

In reality, "almost done" is a whole family of states. Each one needs its own UX.

A useful breakdown:

* **Accepted:** the system received the request
* **In progress:** work is happening
* **Needs input:** work is blocked on the user
* **Partial:** some parts succeeded, some didn't
* **Pending:** an external system needs time
* **Complete:** the outcome is final
* **Unknown:** the request may have succeeded, but the client can't confirm

Most teams handle the first and the last. Users live in the middle.

If the UI doesn't name these states, users will invent a story. They will usually invent the worst one.

## Replace "please wait" with proof

A spinner isn't proof. A progress bar isn't proof.

Proof is information that survives a refresh.

Receipts are proof:

* A confirmation screen with an identifier
* A timeline entry with a timestamp
* A status you can revisit later
* A record in a list that changes state over time

Receipts remove the urge to babysit the workflow. Users can leave, come back, and still know what happened.

If your success state disappears the moment the tab closes, it wasn't a success state. It was a vibe.

## Make resume the default

The happy path assumes the user stays put. Reality says they won't.

* They switch apps
* They lose connection
* Their phone locks
* Their browser kills the tab
* They get pulled into something else and forget

If your process breaks when the UI goes away, the process is fragile.

Design for resumability:

* Save progress automatically
* Allow restart without loss
* Show "last saved" and "last synced" honestly
* Keep a real place where in-progress work lives
* Make "continue where you left off" a first-class path

You don't need perfect offline-first to do this. You need a clear model for where work exists when the UI isn't present.

## Treat "unknown outcome" like a first-class failure mode

This is the hardest middle state:

The user clicked. The network dropped. You can't tell whether the server got it.

Most UIs respond with panic or fiction:

Something went wrong. Try again.

That's how you get duplicate charges and duplicate submissions.

A better approach is specific and operational:

* We couldn't confirm whether this went through.
* Here's what we're checking.
* It's safe to retry, or don't retry and we'll update automatically.
* If you see a charge, it will be labeled X.
* If you don't see it in Y minutes, contact support with this ID.

The goal isn't comfort. It's control.

## Don't fake progress

Fancy loading states can be worse than simple ones.

Skeletons are a good example. A skeleton implies the content is basically ready. If you can't guarantee stability, that's a promise you're going to break. Users start reading and aiming their cursor. Then the layout shifts. They click the wrong thing. They blame themselves, and then they blame you.

Be honest about what's happening:

* Waiting on the network is waiting
* Processing is processing
* Uncertainty is uncertainty
* If you can predict time, give a range
* If you can't, say what you do know

Confidence theater feels nice until it creates mistakes.

## The patterns that hold up

Resilient products keep rediscovering the same set of patterns:

**1) A durable receipt**
An ID, a timestamp, and a place to find the thing later.

**2) A visible queue**
In-progress items live somewhere real, not only in a modal.

**3) Safe retries**
Users can repeat actions without creating duplicates.

**4) A clear definition of done**
Pending versus final is explicit. "Success" is not shown early.

**5) Recovery without support**
Undo, cancel, retry, edit, resume. Easy to find. Easy to trust.

If you build these, the "happy path" stops being a fantasy. It becomes a subset of reality.

## A checklist for any multi-step flow

Before shipping a flow, ask:

* What happens if the user refreshes at every step?
* What happens if the request succeeds but the UI never hears back?
* What happens if they click twice?
* Can they leave and return without losing progress?
* Is there a receipt that survives the session?
* Are pending states labeled as pending, not as success?
* Can the user tell what to do next without reading a paragraph?

If you can't answer these, the flow isn't done.

It's just cosmetically complete.

## Closing

The happy path is what you present.

The middle is what users live in.

Design for "almost done" and you get a product that feels calm under pressure. Not because it's flashy, but because it's honest about state, safe under retries, and built to be resumed.

That's the difference between a flow that demos well and a flow that survives reality.
