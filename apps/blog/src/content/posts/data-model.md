---
title: "Don't Hide the Data Model"
subtitle: "Why backend shape is a UX choice"
date: 2025-11-20
excerpt: "Why backend shape is a UX choice. Hidden models leak as magic and confusion."
featured: false
---

I've seen a lot of software design that aims to "hide complexity."

Hiding *implementation* complexity is completely reasonable.

But hiding the **data model** is different. Obfuscating the inormation architecture leaks itself out as confusion, surprise, and brittle UI.

Users don't need to see your tables, but they do appreciate being shown an interface that's somewhat close to the truth.

## Every screen is a projection

Most screens in a complex sotware product answer the same questions:

* What exists?
* What state is the application in?
* What changed since last time?
* What can I do from here?
* What will happen if I do?

Those aren't "frontend" questions.

If a system cannot represent state and rules of engagement, the UI starts guessing, and the user follows. Guessing creates the worst UX: uncertainty with consequences.

## "Magical" UIs feel great until the first edge case

Auto-save that doesn't clearly save. Drafts that aren't really drafts. "Smart" defaults that silently change. Buttons that do different things based on state you can't see.

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin: 32px 0;">
  <div style="padding: 20px; border-radius: 8px; background: #1a1a1a; border: 1px solid #333;">
    <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #888; margin-bottom: 12px;">❌ Hidden model</div>
    <div style="background: #0d0d0d; border-radius: 6px; padding: 16px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span style="color: #e5e5e5;">Monthly Report.docx</span>
        <span style="color: #22c55e; font-size: 14px;">✓ Saved</span>
      </div>
      <div style="font-size: 13px; color: #666;">Last edited just now</div>
    </div>
    <div style="margin-top: 12px; font-size: 13px; color: #888; font-style: italic;">
      Saved where? Locally? To the server? As a draft? Published?
    </div>
  </div>
  <div style="padding: 20px; border-radius: 8px; background: #1a1a1a; border: 1px solid #333;">
    <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #888; margin-bottom: 12px;">✓ Exposed model</div>
    <div style="background: #0d0d0d; border-radius: 6px; padding: 16px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span style="color: #e5e5e5;">Monthly Report.docx</span>
        <span style="display: inline-flex; align-items: center; gap: 6px; background: #1e3a2f; color: #4ade80; padding: 4px 10px; border-radius: 4px; font-size: 13px;">
          <span style="width: 6px; height: 6px; background: #4ade80; border-radius: 50%;"></span>
          Draft saved
        </span>
      </div>
      <div style="font-size: 13px; color: #666;">Synced to cloud · Dec 12, 2:34 PM</div>
    </div>
    <div style="margin-top: 12px; font-size: 13px; color: #888; font-style: italic;">
      State, location, and timestamp. No guessing.
    </div>
  </div>
</div>

In the worst cases, we've built a system where users can't build a reliable mental model.

When people can't predict outcomes, they slow down, retry, duplicate, or quit. Often, they ask the only question that matters:

**Did my action actually go through?**

---

## Disclosing Current State

Most products collapse the world into three labels: loading, success, error.

Real systems have more states. Users already know this because they've used email, banking, and other complex software systems which involve waiting.

This is why we treat state as a first-class part of the interface:

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

<div style="display: flex; flex-wrap: wrap; gap: 10px; margin: 24px 0; padding: 20px; background: #0d0d0d; border-radius: 8px; border: 1px solid #262626;">
  <span style="display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 4px; font-size: 13px; background: #262626; color: #a3a3a3; border: 1px solid #404040;">
    <span style="width: 6px; height: 6px; background: #737373; border-radius: 50%;"></span>
    draft
  </span>
  <span style="display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 4px; font-size: 13px; background: #1e293b; color: #93c5fd; border: 1px solid #1e40af;">
    <span style="width: 6px; height: 6px; background: #60a5fa; border-radius: 50%;"></span>
    pending
  </span>
  <span style="display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 4px; font-size: 13px; background: #1a1a2e; color: #a78bfa; border: 1px solid #5b21b6;">
    <span style="width: 6px; height: 6px; background: #8b5cf6; border-radius: 50%; animation: pulse 1.5s infinite;"></span>
    processing
  </span>
  <span style="display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 4px; font-size: 13px; background: #1c1917; color: #fcd34d; border: 1px solid #a16207;">
    <span style="width: 6px; height: 6px; background: #fbbf24; border-radius: 50%;"></span>
    needs_input
  </span>
  <span style="display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 4px; font-size: 13px; background: #172a1f; color: #86efac; border: 1px solid #166534;">
    <span style="width: 8px; height: 8px; border-radius: 50%; border: 2px solid #22c55e; border-right-color: transparent;"></span>
    partial
  </span>
  <span style="display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 4px; font-size: 13px; background: #2a1f17; color: #fdba74; border: 1px solid #9a3412;">
    <span style="font-size: 10px;">⚠</span>
    conflict
  </span>
  <span style="display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 4px; font-size: 13px; background: #2a1717; color: #fca5a5; border: 1px solid #991b1b;">
    <span style="width: 6px; height: 6px; background: #ef4444; border-radius: 50%;"></span>
    failed
  </span>
  <span style="display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 4px; font-size: 13px; background: #14291a; color: #86efac; border: 1px solid #166534;">
    <span style="font-size: 10px;">✓</span>
    complete
  </span>
  <span style="display: inline-flex; align-items: center; gap: 6px; padding: 6px 12px; border-radius: 4px; font-size: 13px; background: #1a1a1a; color: #737373; border: 1px dashed #404040;">
    <span style="font-size: 10px;">?</span>
    unknown
  </span>
</div>

If your system has eventual consistency, show "pending."
If the work is queued, show "processing."
If you can't confirm the outcome, say "unknown."

The feedback shown to the user should be derived from reality.

---

## Receipts

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

<div style="max-width: 400px; margin: 24px 0; background: #0d0d0d; border: 1px solid #262626; border-radius: 8px; overflow: hidden;">
  <div style="padding: 16px 20px; border-bottom: 1px solid #262626; display: flex; justify-content: space-between; align-items: center;">
    <span style="font-size: 13px; color: #a3a3a3;">Receipt</span>
    <span style="display: inline-flex; align-items: center; gap: 6px; padding: 4px 10px; border-radius: 4px; font-size: 12px; background: #14291a; color: #86efac;">
      <span style="font-size: 10px;">✓</span>
      complete
    </span>
  </div>
  <div style="padding: 20px;">
    <div style="display: grid; grid-template-columns: auto 1fr; gap: 8px 16px; font-size: 14px;">
      <span style="color: #525252;">ID</span>
      <span style="color: #e5e5e5; font-family: monospace; font-size: 13px;">txn_1RBK2pLkdIwHu7ix</span>
      <span style="color: #525252;">Created</span>
      <span style="color: #e5e5e5;">Dec 12, 2024 · 2:34:12 PM</span>
      <span style="color: #525252;">Message</span>
      <span style="color: #e5e5e5;">Payment processed successfully</span>
    </div>
  </div>
  <div style="padding: 12px 20px; background: #0a0a0a; border-top: 1px solid #262626;">
    <span style="font-size: 12px; color: #525252; font-family: monospace;">Refreshed 2s ago</span>
  </div>
</div>

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

<div style="margin: 24px 0;">
  <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #888; margin-bottom: 12px;">Payment Status Progression</div>
  <div style="display: flex; align-items: center; gap: 4px; padding: 20px; background: #0d0d0d; border: 1px solid #262626; border-radius: 8px; overflow-x: auto;">
    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; min-width: 80px;">
      <div style="width: 32px; height: 32px; border-radius: 50%; background: #262626; display: flex; align-items: center; justify-content: center;">
        <span style="width: 8px; height: 8px; background: #737373; border-radius: 50%;"></span>
      </div>
      <span style="font-size: 11px; color: #737373;">created</span>
    </div>
    <div style="flex: 1; height: 2px; background: linear-gradient(90deg, #404040, #1e40af); min-width: 20px;"></div>
    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; min-width: 80px;">
      <div style="width: 32px; height: 32px; border-radius: 50%; background: #1e3a5f; display: flex; align-items: center; justify-content: center;">
        <span style="width: 8px; height: 8px; background: #60a5fa; border-radius: 50%;"></span>
      </div>
      <span style="font-size: 11px; color: #60a5fa;">authorized</span>
    </div>
    <div style="flex: 1; height: 2px; background: linear-gradient(90deg, #1e40af, #5b21b6); min-width: 20px;"></div>
    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; min-width: 80px;">
      <div style="width: 32px; height: 32px; border-radius: 50%; background: #2e1a47; display: flex; align-items: center; justify-content: center;">
        <span style="width: 8px; height: 8px; background: #a78bfa; border-radius: 50%;"></span>
      </div>
      <span style="font-size: 11px; color: #a78bfa;">captured</span>
    </div>
    <div style="flex: 1; height: 2px; background: linear-gradient(90deg, #5b21b6, #166534); min-width: 20px;"></div>
    <div style="display: flex; flex-direction: column; align-items: center; gap: 8px; min-width: 80px;">
      <div style="width: 32px; height: 32px; border-radius: 50%; background: #14291a; display: flex; align-items: center; justify-content: center;">
        <span style="font-size: 12px; color: #4ade80;">✓</span>
      </div>
      <span style="font-size: 11px; color: #4ade80;">settled</span>
    </div>
  </div>
  <div style="margin-top: 12px; padding: 12px 16px; background: #1a1a1a; border-radius: 6px; border-left: 3px solid #525252;">
    <span style="font-size: 13px; color: #a3a3a3;">Compressed as "Paid" — but <strong style="color: #fbbf24;">authorized</strong> means funds are held, <strong style="color: #4ade80;">settled</strong> means funds transferred. The user's next action depends on which.</span>
  </div>
</div>

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

<div class="blog-grid-2col">
  <div>
    <div class="blog-diagram-label">❌ Unmodeled error</div>
    <div style="padding: 16px; background: #2a1717; border: 1px solid #7f1d1d; border-radius: 8px;">
      <div style="display: flex; align-items: center; gap: 10px; color: #fca5a5;">
        <span style="font-size: 18px;">⚠</span>
        <span style="font-size: 14px;">Something went wrong. Please try again.</span>
      </div>
    </div>
  </div>
  <div>
    <div class="blog-diagram-label">✓ Modeled error</div>
    <div style="padding: 16px; background: #2a1717; border: 1px solid #7f1d1d; border-radius: 8px;">
      <div style="display: flex; align-items: start; gap: 10px; color: #fca5a5;">
        <span style="font-size: 18px; margin-top: 2px;">⚠</span>
        <div>
          <div style="font-size: 14px; margin-bottom: 6px;">Rate limit exceeded</div>
          <div style="font-size: 13px; color: #a3a3a3;">Retry available in 45 seconds</div>
        </div>
      </div>
    </div>
  </div>
</div>

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

<div style="margin: 24px 0; display: flex; flex-direction: column; gap: 12px;">
  <div style="padding: 14px 16px; background: #0d0d0d; border: 1px solid #262626; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
    <div style="display: flex; align-items: center; gap: 12px;">
      <code style="font-size: 12px; padding: 4px 8px; background: #1e293b; color: #93c5fd; border-radius: 4px;">validation</code>
      <span style="font-size: 14px; color: #a3a3a3;">Email format is invalid</span>
    </div>
    <span style="font-size: 13px; color: #525252;">→ highlight field</span>
  </div>
  <div style="padding: 14px 16px; background: #0d0d0d; border: 1px solid #262626; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
    <div style="display: flex; align-items: center; gap: 12px;">
      <code style="font-size: 12px; padding: 4px 8px; background: #2a1f17; color: #fdba74; border-radius: 4px;">conflict</code>
      <span style="font-size: 14px; color: #a3a3a3;">Document was edited by another user</span>
    </div>
    <span style="font-size: 13px; color: #525252;">→ offer merge</span>
  </div>
  <div style="padding: 14px 16px; background: #0d0d0d; border: 1px solid #262626; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
    <div style="display: flex; align-items: center; gap: 12px;">
      <code style="font-size: 12px; padding: 4px 8px; background: #1a1a2e; color: #a78bfa; border-radius: 4px;">rate_limit</code>
      <span style="font-size: 14px; color: #a3a3a3;">Too many requests</span>
    </div>
    <span style="font-size: 13px; color: #525252;">→ auto-retry countdown</span>
  </div>
  <div style="padding: 14px 16px; background: #0d0d0d; border: 1px solid #262626; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
    <div style="display: flex; align-items: center; gap: 12px;">
      <code style="font-size: 12px; padding: 4px 8px; background: #262626; color: #737373; border-radius: 4px;">unknown_outcome</code>
      <span style="font-size: 14px; color: #a3a3a3;">Request sent but outcome unconfirmed</span>
    </div>
    <span style="font-size: 13px; color: #525252;">→ show receipt, offer refresh</span>
  </div>
</div>

Now the UI can say what happened *and* what to do next without guessing.

---

## Pagination is a UX decision

Pagination isn't a backend detail. It determines whether lists feel stable.

Offset pagination is simple until data changes under you. Items shift. Duplicates appear. People lose their place.

<div class="blog-grid-2col">
  <div>
    <div class="blog-diagram-label">Offset pagination problem</div>
    <div style="padding: 16px; background: #0d0d0d; border: 1px solid #262626; border-radius: 8px; font-size: 13px;">
      <div style="color: #525252; margin-bottom: 8px;">Page 1: items 1-10</div>
      <div style="color: #fbbf24; margin-bottom: 8px; padding: 8px; background: #1c1917; border-radius: 4px;">↑ New item inserted at position 3</div>
      <div style="color: #ef4444;">Page 2: item 10 appears again</div>
    </div>
  </div>
  <div>
    <div class="blog-diagram-label">Cursor pagination</div>
    <div style="padding: 16px; background: #0d0d0d; border: 1px solid #262626; border-radius: 8px; font-size: 13px;">
      <div style="color: #525252; margin-bottom: 8px;">Page 1: items before cursor_abc</div>
      <div style="color: #4ade80; margin-bottom: 8px; padding: 8px; background: #14291a; border-radius: 4px;">↑ New item inserted (doesn't affect cursor)</div>
      <div style="color: #4ade80;">Page 2: items after cursor_abc ✓</div>
    </div>
  </div>
</div>

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

## Drafts

Drafts aren't a UI flourish. They're a state transition.

<div style="margin: 24px 0;">
  <div style="display: flex; gap: 16px; padding: 20px; background: #0d0d0d; border: 1px solid #262626; border-radius: 8px;">
    <div style="flex: 1; padding: 16px; background: #1a1a1a; border-radius: 6px; border: 2px solid #404040;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span style="color: #e5e5e5; font-size: 14px;">Q4 Report</span>
        <span style="display: inline-flex; align-items: center; gap: 6px; padding: 4px 10px; border-radius: 4px; font-size: 12px; background: #262626; color: #a3a3a3;">
          draft
        </span>
      </div>
      <div style="font-size: 12px; color: #525252;">Updated Dec 12 · Only you</div>
    </div>
    <div style="display: flex; align-items: center; color: #525252;">→</div>
    <div style="flex: 1; padding: 16px; background: #14291a; border-radius: 6px; border: 2px solid #166534;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <span style="color: #e5e5e5; font-size: 14px;">Q4 Report</span>
        <span style="display: inline-flex; align-items: center; gap: 6px; padding: 4px 10px; border-radius: 4px; font-size: 12px; background: #14291a; color: #4ade80; border: 1px solid #166534;">
          <span style="font-size: 10px;">✓</span>
          published
        </span>
      </div>
      <div style="font-size: 12px; color: #525252;">Published Dec 14 · Visible to team</div>
    </div>
  </div>
</div>

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

<div class="blog-grid-3col">
  <div class="blog-diagram-card" style="text-align: center;">
    <div style="font-size: 24px; margin-bottom: 8px;">◉</div>
    <div style="font-size: 14px; color: #e5e5e5; margin-bottom: 4px;">State</div>
    <div style="font-size: 12px; color: #525252;">What phase is this in?</div>
  </div>
  <div class="blog-diagram-card" style="text-align: center;">
    <div style="font-size: 24px; margin-bottom: 8px;">⌘</div>
    <div style="font-size: 14px; color: #e5e5e5; margin-bottom: 4px;">Identity</div>
    <div style="font-size: 12px; color: #525252;">What is this thing?</div>
  </div>
  <div class="blog-diagram-card" style="text-align: center;">
    <div style="font-size: 24px; margin-bottom: 8px;">◷</div>
    <div style="font-size: 14px; color: #e5e5e5; margin-bottom: 4px;">Timing</div>
    <div style="font-size: 12px; color: #525252;">When did this happen?</div>
  </div>
  <div class="blog-diagram-card" style="text-align: center;">
    <div style="font-size: 24px; margin-bottom: 8px;">◈</div>
    <div style="font-size: 14px; color: #e5e5e5; margin-bottom: 4px;">Ownership</div>
    <div style="font-size: 12px; color: #525252;">Who controls this?</div>
  </div>
  <div class="blog-diagram-card" style="text-align: center;">
    <div style="font-size: 24px; margin-bottom: 8px;">↺</div>
    <div style="font-size: 14px; color: #e5e5e5; margin-bottom: 4px;">Reversibility</div>
    <div style="font-size: 12px; color: #525252;">Can I undo this?</div>
  </div>
  <div class="blog-diagram-card" style="text-align: center;">
    <div style="font-size: 24px; margin-bottom: 8px;">↻</div>
    <div style="font-size: 14px; color: #e5e5e5; margin-bottom: 4px;">Durability</div>
    <div style="font-size: 12px; color: #525252;">Survives refresh?</div>
  </div>
</div>

Users don't want complexity. They want predictability. Predictability comes from a model they can understand.

## Intentionality

The data model is going to be felt either way.

You can surface it intentionally through clear states, receipts, and real distinctions. Or you can hide it and let it leak out as surprises, retries, and support tickets.

<div style="font-size: 18px; color: #e5e5e5; margin-bottom: 8px;">Don't hide the data model.</div>
