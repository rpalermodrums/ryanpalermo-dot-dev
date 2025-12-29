---
title: "Stop Animating Everything"
subtitle: "Motion is a cognitive tax"
date: 2024-06-05
excerpt: "Motion is a cognitive tax. Most 'premium' animation is latency in disguise."
featured: false
---

Animation is easy to love in a demo. It makes change feel intentional. It smooths over rough edges. It can even make a product feel faster than it is.

Then it meets real usage.

Someone is scanning a list, bouncing between tabs, trying to finish a task on a warm laptop with a flaky connection. They are not here for choreography. They are here for control.

Motion isn't the problem. **Motion that costs time, attention, or predictability is.**

## Motion has a budget

Every animation spends three things:

* **Time** (the UI waits before it's usable again)
* **Attention** (the user has to track movement)
* **Trust** (the UI must behave predictably while it moves)

A single 200ms transition is fine. A product full of them becomes slow in a way users can feel, even if your backend is fast. People experience the total latency of the workflow, not the elegance of the easing curve.

If you want the UI to feel fast, remove time. Don't decorate it.

## Motion should explain state

Good motion answers questions users already have:

* Did my action work?
* What changed?
* Where did that thing go?
* What is connected to what?

Bad motion doesn't explain anything. It decorates.

A useful test: if you can't say what information the motion communicates, it probably communicates none.

## Most "premium" motion is latency in disguise

A lot of modern UI animation exists to make the interface feel premium. In practice it often inserts delay between intent and outcome. That delay compounds quickly:

Open the drawer. Switch the tab. Expand the panel. Close the modal. Confirm the action.

Each step is a small wait. Put them together and you've built a product that feels sticky.

People don't describe this as "the easing is too slow." They describe it as "it feels buggy." Because from their perspective, the UI stopped listening.

## Scroll hijacking is where products lose the plot

If there's one pattern that reliably makes a site feel broken, it's hijacking scroll.

Native scrolling is one of the most refined interactions on the web. It's tuned for wheels, trackpads, touch, and keyboards. It responds immediately. It stops when you stop. It plays nicely with accessibility and browser features people rely on without thinking.

Scroll hijacking opts out of all that.

It intercepts input and replaces a continuous surface with a scripted experience. It snaps you into sections you didn't choose. It keeps moving after you stop. It turns scanning into a guided tour.

That isn't smooth. It's loss of control.

And once you ship it, the blast radius is bigger than it looks:

* back/forward scroll restoration becomes unreliable
* keyboard scrolling feels inconsistent
* nested scroll containers become traps
* touch behavior gets weird on mobile
* reduced motion preferences are ignored or half-respected
* performance drops on devices you didn't test

If your product needs a custom scroll engine, you're building a browser feature. Most teams should not sign up for that.

## "Smooth" is not the same as "clear"

Teams often justify heavy motion as a way to make changes feel less jarring. The problem is that "less jarring" can also mean "harder to notice."

Sometimes you want a change to be jarring. It's a signal:

* saving finished
* state changed
* something is pending
* your action had consequences

A crisp state change with stable layout often beats a fade that looks nice but leaves the user unsure what just happened. Clarity is not always smooth. Clarity is obvious.

## Make motion interruptible

Here's a practical rule that catches a lot of bad UI animation:

**If the user can't interrupt it, it's suspect.**

People click quickly. They change their mind. They navigate fast. If the UI forces them to wait for a transition to finish before it accepts the next input, it's not "polished." It's obstructive.

Good motion behaves like feedback. It stays close to input. It doesn't take the wheel.

## Prefer stability over choreography

When the product needs to work under pressure, stability wins:

* predictable hit targets
* minimal reflow
* fast feedback
* state that survives refresh

Heavy animation tends to trade these away. It increases layout movement, exposes timing edge cases, and turns normal rerenders into something users have to visually track. It also creates a tax you pay later in debugging: flaky tests, race conditions, and performance weirdness that only appears outside your machine.

You can't animate your way out of instability.

## A test before you animate anything

Before shipping motion, answer these:

1. **What state does this clarify?**
   If you can't name it, cut it.

2. **Does it add time to common tasks?**
   If yes, the benefit needs to be real.

3. **Does anything move without user intent?**
   If yes, expect mistrust.

4. **Does it degrade cleanly?**
   Reduced motion, keyboard, high zoom, low-end devices.

5. **Does it leave scrolling alone?**
   If not, stop and reconsider.

## The bar should be higher

Motion ships easily because it looks like progress. It demos well. It makes the interface feel crafted.

The cost shows up in the unglamorous places: slower workflows, misclicks, "it feels broken" feedback, and a steady stream of edge cases caused by movement that didn't need to exist.

Use motion when it clarifies state and preserves control.

Cut it when it adds latency, hides truth, or hijacks scroll.

Let the browser do what it's good at. Let users do what they came to do.
