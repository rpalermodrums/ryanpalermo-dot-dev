---
title: "Don't Hide the Data Model"
subtitle: "Why backend shape is a UX choice"
date: 2024-11-20
excerpt: "Why backend shape is a UX choice. Hidden models leak as magic and confusion."
featured: false
---

A lot of advice says "hide complexity."

Fine. Hide *implementation* complexity.

But hiding the **data model** is different. When the model is invisible, it doesn't disappear. It leaks out as confusion, surprise, and brittle UI.

Users don't need to see your tables. They do need to see what's real.

---

## Every screen is a projection

Most screens are answering the same questions:

* What exists?
* What state is it in?
* What changed?
* What can I do next?
* What happens if I do it?

Those aren't "frontend" questions. They're model questions.

If the system can't represent the real states and rules, the UI starts guessing. Guessing creates the worst UX: uncertainty with consequences.

---

## Hidden models create "magic," and magic fails badly

"Magical" UIs feel great until the first edge case.

Auto-save that doesn't clearly save. Drafts that aren't really drafts. "Smart" defaults that silently change. Buttons that do different things based on state you can't see.

The problem isn't sophistication. It's that users can't build a reliable mental model.

When people can't predict outcomes, they slow down. They retry. They duplicate. They ask the only question that matters:

**Did it actually go through?**

---

## Show state like you mean it

Most products collapse the world into three labels: loading, success, error.

Real systems have more states. Users already know this because they've used email, banking, and anything involving waiting.

Treat state as a first-class part of the interface:

```ts
export type Status =
  | "draft"
  | "pending"
  | "processing"
  | "needs_input"
  | "partial"
  | "conflict"
  | "failed"
  | "complete"
  | "unknown";
```

If your system has eventual consistency, show "pending."
If the work is queued, show "processing."
If you can't confirm the outcome, say "unknown."

Naming reality beats pretending.

---

## Receipts beat vibes

A spinner is not proof. A toast is not proof. An animation is not proof.

Proof is durable. It survives refresh:

```ts
export type Receipt = {
  id: string;                // stable identifier
  createdAt: string;         // ISO timestamp
  status: Status;            // honest, explicit state
  message?: string;          // short, specific, optional
};
```

A good "almost done" UX usually has a receipt shape somewhere, even if the UI is minimal.

Example response:

```ts
export type CreateThingResponse = {
  receipt: Receipt;
  thing?: { id: string };    // may exist immediately, may not
  next?: {
    pollAfterMs?: number;
    href?: string;           // where to check status later
  };
};
```

This lets the UI be calm because it has something real to hold on to.

---

## Don't compress meaningful distinctions

Hiding the model often shows up as collapsing real differences into one word:

* "Saved" (draft vs published)
* "Sent" (queued vs delivered)
* "Paid" (authorized vs settled)
* "Synced" (last synced vs currently syncing)

Those distinctions change what the user should do next. If you compress them, the UI gets simpler in the way a lie is simpler than the truth.

Make the distinctions explicit:

```ts
export type PaymentStatus =
  | "created"
  | "authorized"
  | "captured"
  | "settled"
  | "reversed"
  | "failed";
```

If you can't represent these states, the UI will invent them. It will invent them badly.

---

## Errors are part of the model, not an embarrassment

"Something went wrong" is not an error message. It's an absence of a model.

Typed, structured errors make recovery possible and keep the UI honest:

```ts
export type ApiError =
  | { type: "validation"; fieldErrors: Record<string, string> }
  | { type: "auth"; message: string }
  | { type: "conflict"; message: string; currentVersion: string }
  | { type: "rate_limit"; retryAfterMs: number }
  | { type: "dependency"; dependency: string; message: string }
  | { type: "unknown_outcome"; receiptId: string; message: string }
  | { type: "internal"; requestId: string };
```

Now the UI can say what happened *and* what to do next without guessing.

---

## Pagination is a UX decision

Pagination isn't a backend detail. It determines whether lists feel stable.

Offset pagination is simple until data changes under you. Items shift. Duplicates appear. People lose their place.

Cursor pagination is usually better when you treat it like a contract:

```ts
export type Page<T> = {
  items: T[];
  nextCursor?: string;     // undefined means "end"
  totalApprox?: number;    // optional, honest if it's approximate
};
```

If pagination is unstable, the UI will be unstable. Users will feel it as "the list is haunted."

---

## Drafts are a model decision

Drafts aren't a UI flourish. They're a state transition.

If users expect to start something and come back later, model it:

```ts
export type Document = {
  id: string;
  status: "draft" | "published";
  updatedAt: string;
};

export type PublishRequest = {
  id: string;
  expectedVersion: string; // enables conflict handling
};
```

Without a real draft concept, the UI fakes it with local state and hope. That's how you get "I thought it saved."

---

## This does not mean "show everything"

"Don't hide the model" doesn't mean dumping raw JSON into the UI.

It means making the important parts of reality legible:

* state
* identity
* timing
* ownership
* reversibility
* progress that survives refresh

Users don't want complexity. They want predictability. Predictability comes from a model they can understand.

---

## A quick checklist

Before shipping a workflow, ask:

* Can the UI always tell what exists right now?
* Can it name the current state without hand-waving?
* Is there a receipt that survives refresh?
* Are "pending" states labeled as pending?
* Are "done" states actually final?
* Can the user recover without guessing?

If the answer is no, the UI will pay the cost.

Users will pay it first.

---

## Closing

The data model is going to be felt either way.

You can surface it intentionally through clear states, receipts, and real distinctions. Or you can hide it and let it leak out as surprises, retries, and support tickets.

Don't hide the model. Make it legible.
