---
title: "The Best Copy Is No Copy"
subtitle: "If the interface needs explanation, the interface doesn't work"
date: 2025-08-10
excerpt: "If the interface needs explanation, the interface doesn't work."
featured: false
---

Good copy matters.

Clear button labels reduce hesitation. Honest error messages prevent thrash. A single sentence can calm a user down at the exact moment a system feels shaky.

That said, I see most copy as unreliable, filmsy, and burdonsom.

Here's a heuristic I like to use: **If the interface needs explanation, the interface probably doesn't work.**

Copy can support a good interaction. It cannot replace one.

## What "no copy" means

This screed is not anti-words, but it is certainly anti-instructions.

If a screen needs paragraphs to teach people what to do, the design is asking users to study before they act. That is friction with nicer typography.

<div class="blog-grid-2col">
  <div class="blog-diagram-card">
    <div class="blog-diagram-label">❌ Instructions as crutch</div>
    <div class="blog-diagram-content">
      <div style="font-size: 13px; color: #a3a3a3; margin-bottom: 16px; padding: 12px; background: #1e293b; border-radius: 4px; border-left: 3px solid #3b82f6;">
        To create a new project, click the blue "New" button below. You'll be taken to a form where you can enter your project details. Required fields are marked with an asterisk. Once complete, click "Create" to save your project.
      </div>
      <button style="background: #3b82f6; color: white; border: none; padding: 10px 20px; border-radius: 6px; font-size: 14px;">New</button>
    </div>
    <div class="blog-diagram-caption">
      53 words to explain one button.
    </div>
  </div>
  <div class="blog-diagram-card">
    <div class="blog-diagram-label">✓ Structure as explanation</div>
    <div class="blog-diagram-content">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
        <span style="font-size: 16px; color: #e5e5e5;">Projects</span>
        <span style="font-size: 13px; color: #525252;">3 active</span>
      </div>
      <button style="background: #3b82f6; color: white; border: none; padding: 10px 20px; border-radius: 6px; font-size: 14px; display: flex; align-items: center; gap: 8px;">
        <span style="font-size: 16px;">+</span> New Project
      </button>
    </div>
    <div class="blog-diagram-caption">
      Zero words. Context + action.
    </div>
  </div>
</div>

Good interfaces make three things obvious:

* What state you are in
* What you can do next
* What will happen if you do it

Those basics show up in usability guidance because they keep being true. ([NN Group][1])

When the interface does that work, most instructional copy becomes redundant.

## Copy is debt

Every sentence is a promise that has to stay true.

<div style="margin: 32px 0; padding: 20px; background: #0d0d0d; border: 1px solid #262626; border-radius: 8px;">
  <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #888; margin-bottom: 16px;">Copy decay over time</div>
  <div style="display: flex; flex-direction: column; gap: 12px;">
    <div style="display: flex; align-items: center; gap: 16px;">
      <span style="font-size: 12px; color: #525252; min-width: 80px;">Day 1</span>
      <div style="flex: 1; padding: 12px 16px; background: #14291a; border: 1px solid #166534; border-radius: 6px;">
        <span style="color: #4ade80;">✓</span>
        <span style="color: #a3a3a3; margin-left: 8px;">"We'll email you a receipt"</span>
      </div>
    </div>
    <div style="display: flex; align-items: center; gap: 16px;">
      <span style="font-size: 12px; color: #525252; min-width: 80px;">Month 3</span>
      <div style="flex: 1; padding: 12px 16px; background: #1c1917; border: 1px solid #a16207; border-radius: 6px;">
        <span style="color: #fbbf24;">⚠</span>
        <span style="color: #a3a3a3; margin-left: 8px;">"We'll email you a receipt"</span>
        <span style="color: #525252; margin-left: 8px; font-size: 12px;">— receipts now delayed 24h</span>
      </div>
    </div>
    <div style="display: flex; align-items: center; gap: 16px;">
      <span style="font-size: 12px; color: #525252; min-width: 80px;">Month 8</span>
      <div style="flex: 1; padding: 12px 16px; background: #2a1717; border: 1px solid #991b1b; border-radius: 6px;">
        <span style="color: #ef4444;">✗</span>
        <span style="color: #a3a3a3; margin-left: 8px;">"We'll email you a receipt"</span>
        <span style="color: #525252; margin-left: 8px; font-size: 12px;">— receipts now optional, filtered by preference</span>
      </div>
    </div>
  </div>
</div>

Copy ages faster than code. The moment reality shifts, the UI starts lying.

Trust is expensive. Text that is "almost true" spends it.

## Instructional copy is a design smell

Long instructions usually point at missing structure. The same problems repeat:

* The primary action is not obvious
* The state is hidden
* The consequences are unclear
* The UI allows avoidable mistakes
* The flow fights the user's intent

So teams add text. Then tooltips to explain the text. Then onboarding to explain the tooltips.

<div style="margin: 32px 0; padding: 20px; background: #0d0d0d; border: 1px solid #262626; border-radius: 8px;">
  <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #888; margin-bottom: 16px;">The explanation spiral</div>
  <div style="display: flex; align-items: stretch; gap: 8px;">
    <div style="flex: 1; padding: 16px; background: #1a1a1a; border-radius: 6px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
      <div style="font-size: 24px; margin-bottom: 8px;">🔘</div>
      <div style="font-size: 13px; color: #737373;">Unclear button</div>
    </div>
    <div style="display: flex; align-items: center; color: #404040;">→</div>
    <div style="flex: 1; padding: 16px; background: #1a1a1a; border-radius: 6px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
      <div style="font-size: 24px; margin-bottom: 8px;">📝</div>
      <div style="font-size: 13px; color: #737373;">Add helper text</div>
    </div>
    <div style="display: flex; align-items: center; color: #404040;">→</div>
    <div style="flex: 1; padding: 16px; background: #1a1a1a; border-radius: 6px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
      <div style="font-size: 24px; margin-bottom: 8px;">💬</div>
      <div style="font-size: 13px; color: #737373;">Add tooltip</div>
    </div>
    <div style="display: flex; align-items: center; color: #404040;">→</div>
    <div style="flex: 1; padding: 16px; background: #1a1a1a; border-radius: 6px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
      <div style="font-size: 24px; margin-bottom: 8px;">🎓</div>
      <div style="font-size: 13px; color: #737373;">Add onboarding</div>
    </div>
    <div style="display: flex; align-items: center; color: #404040;">→</div>
    <div style="flex: 1; padding: 16px; background: #2a1717; border-radius: 6px; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; border: 1px solid #7f1d1d;">
      <div style="font-size: 24px; margin-bottom: 8px;">🎫</div>
      <div style="font-size: 13px; color: #fca5a5;">Support ticket</div>
    </div>
  </div>
</div>

The interface gets louder. The user still gets stuck.

If the copy is doing the navigation, the UI is failing.

## Replace instructions with structure

Forms are the easiest place to see this.

"Fields marked with an asterisk are required" is not guidance. It is a workaround for weak affordances.

<div class="blog-grid-2col">
  <div class="blog-diagram-card">
    <div class="blog-diagram-label">❌ Instructions + asterisks</div>
    <div class="blog-diagram-content">
      <div style="font-size: 12px; color: #737373; margin-bottom: 16px;">Fields marked with * are required</div>
      <div style="margin-bottom: 12px;">
        <label style="font-size: 13px; color: #a3a3a3; display: block; margin-bottom: 4px;">Name *</label>
        <input type="text" style="width: 100%; padding: 8px 12px; background: #1a1a1a; border: 1px solid #333; border-radius: 4px; color: #e5e5e5; font-size: 14px; box-sizing: border-box;" />
      </div>
      <div style="margin-bottom: 12px;">
        <label style="font-size: 13px; color: #a3a3a3; display: block; margin-bottom: 4px;">Email *</label>
        <input type="text" style="width: 100%; padding: 8px 12px; background: #1a1a1a; border: 1px solid #333; border-radius: 4px; color: #e5e5e5; font-size: 14px; box-sizing: border-box;" />
      </div>
      <div>
        <label style="font-size: 13px; color: #a3a3a3; display: block; margin-bottom: 4px;">Phone</label>
        <input type="text" style="width: 100%; padding: 8px 12px; background: #1a1a1a; border: 1px solid #333; border-radius: 4px; color: #e5e5e5; font-size: 14px; box-sizing: border-box;" />
      </div>
    </div>
  </div>
  <div class="blog-diagram-card">
    <div class="blog-diagram-label">✓ Structure carries meaning</div>
    <div class="blog-diagram-content">
      <div style="margin-bottom: 12px;">
        <label style="font-size: 13px; color: #e5e5e5; display: block; margin-bottom: 4px;">Name</label>
        <input type="text" style="width: 100%; padding: 8px 12px; background: #1a1a1a; border: 2px solid #3b82f6; border-radius: 4px; color: #e5e5e5; font-size: 14px; box-sizing: border-box;" />
      </div>
      <div style="margin-bottom: 12px;">
        <label style="font-size: 13px; color: #e5e5e5; display: block; margin-bottom: 4px;">Email</label>
        <input type="text" style="width: 100%; padding: 8px 12px; background: #1a1a1a; border: 2px solid #3b82f6; border-radius: 4px; color: #e5e5e5; font-size: 14px; box-sizing: border-box;" />
      </div>
      <div>
        <label style="font-size: 13px; color: #737373; display: block; margin-bottom: 4px;">Phone <span style="font-size: 11px; color: #525252;">(optional)</span></label>
        <input type="text" style="width: 100%; padding: 8px 12px; background: #1a1a1a; border: 1px solid #333; border-radius: 4px; color: #e5e5e5; font-size: 14px; box-sizing: border-box;" />
      </div>
    </div>
  </div>
</div>

A better form makes the rules visible:

* Required fields are unmistakable
* Errors show next to the field, not in a block at the top
* Validation happens at the right moment, not after a failed submit
* The user can explore without being punished

These patterns are established guidelines because they reduce error rates and speed completion. ([NN Group][2])

Instructional copy often disappears when the structure is honest.

## Replace warnings with guarantees

"Don't close this window while we process your upload."

This kind of sentence does not help the user. It asks the user to compensate for a system that cannot keep a promise.

<div class="blog-grid-2col">
  <div class="blog-diagram-card">
    <div class="blog-diagram-label">❌ Warning (user's problem)</div>
    <div class="blog-diagram-content">
      <div style="margin-bottom: 16px; padding: 12px; background: #1c1917; border: 1px solid #a16207; border-radius: 6px;">
        <div style="display: flex; align-items: center; gap: 8px; color: #fbbf24; font-size: 13px;">
          <span>⚠</span>
          <span>Don't close this window while we process your upload.</span>
        </div>
      </div>
      <div style="display: flex; align-items: center; gap: 12px;">
        <div style="width: 24px; height: 24px; border: 2px solid #525252; border-top-color: transparent; border-radius: 50%; animation: spin 1s linear infinite;"></div>
        <span style="color: #a3a3a3; font-size: 14px;">Uploading...</span>
      </div>
    </div>
    <div class="blog-diagram-caption">
      Hope the user reads and obeys.
    </div>
  </div>
  <div class="blog-diagram-card">
    <div class="blog-diagram-label">✓ Guarantee (system's promise)</div>
    <div class="blog-diagram-content">
      <div style="margin-bottom: 16px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <span style="color: #e5e5e5; font-size: 14px;">report-q4.pdf</span>
          <span style="color: #4ade80; font-size: 13px;">68%</span>
        </div>
        <div style="height: 4px; background: #262626; border-radius: 2px; overflow: hidden;">
          <div style="width: 68%; height: 100%; background: #4ade80; border-radius: 2px;"></div>
        </div>
      </div>
      <div style="font-size: 12px; color: #525252;">
        ↻ Resumes automatically if interrupted
      </div>
    </div>
    <div class="blog-diagram-caption">
      System handles the constraint.
    </div>
  </div>
</div>

If the work can continue safely, make it continue safely.

If it cannot, the UI should enforce that constraint and communicate progress clearly. A warning is the weakest possible contract. A guarantee is a real one.

This is part of "visibility of system status," and it is a core heuristic for a reason. Users should not have to guess. ([NN Group][1])

## Replace explanations with feedback

"Passwords must be at least 12 characters and include a number."

This is common because it is easy to write. It is also a tax on working memory. Users now have to hold rules in their head while typing, and working memory is limited. ([PubMed][3])

<div class="blog-grid-2col">
  <div class="blog-diagram-card">
    <div class="blog-diagram-label">❌ Rules to memorize</div>
    <div class="blog-diagram-content">
      <label style="font-size: 13px; color: #a3a3a3; display: block; margin-bottom: 4px;">Password</label>
      <input type="password" value="mypass" style="width: 100%; padding: 8px 12px; background: #1a1a1a; border: 1px solid #333; border-radius: 4px; color: #e5e5e5; font-size: 14px; margin-bottom: 12px; box-sizing: border-box;" />
      <div style="font-size: 12px; color: #737373; line-height: 1.5;">
        Password must be at least 12 characters, contain one uppercase letter, one lowercase letter, one number, and one special character (!@#$%^&*).
      </div>
    </div>
    <div class="blog-diagram-caption">
      User must remember 5 rules while typing.
    </div>
  </div>
  <div class="blog-diagram-card">
    <div class="blog-diagram-label">✓ Live feedback</div>
    <div class="blog-diagram-content">
      <label style="font-size: 13px; color: #a3a3a3; display: block; margin-bottom: 4px;">Password</label>
      <input type="password" value="MySecure1!" style="width: 100%; padding: 8px 12px; background: #1a1a1a; border: 1px solid #333; border-radius: 4px; color: #e5e5e5; font-size: 14px; margin-bottom: 12px; box-sizing: border-box;" />
      <div style="display: flex; flex-direction: column; gap: 6px; font-size: 12px;">
        <div style="display: flex; align-items: center; gap: 8px; color: #737373;">
          <span style="color: #ef4444;">○</span> 12+ characters <span style="color: #525252;">(10/12)</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px; color: #4ade80;">
          <span>●</span> Uppercase letter
        </div>
        <div style="display: flex; align-items: center; gap: 8px; color: #4ade80;">
          <span>●</span> Number
        </div>
        <div style="display: flex; align-items: center; gap: 8px; color: #4ade80;">
          <span>●</span> Special character
        </div>
      </div>
    </div>
    <div class="blog-diagram-caption">
      Interface does the bookkeeping.
    </div>
  </div>
</div>

Better interfaces offload that bookkeeping:

* Show requirements as a checklist
* Update it live as the user types
* Accept paste and password managers
* Prefer long passphrases over fragile composition rules

This is not "delight." It is cognitive load reduction. The interface does the remembering so the user can focus on the goal. ([Wiley][4])

## Tooltips are a smell

Tooltips are often used to keep a screen looking clean.

They hide information behind a gesture that is inconsistent across devices. More importantly, they push users from recognition to recall, which slows people down and lowers confidence. ([NN Group][1])

<div class="blog-grid-2col">
  <div class="blog-diagram-card">
    <div class="blog-diagram-label">❌ Meaning hidden in tooltip</div>
    <div class="blog-diagram-content">
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 16px;">
        <span style="color: #e5e5e5; font-size: 14px;">Visibility</span>
        <span style="position: relative;">
          <span style="display: inline-flex; align-items: center; justify-content: center; width: 16px; height: 16px; border-radius: 50%; background: #333; color: #888; font-size: 11px; cursor: help;">?</span>
          <span style="position: absolute; bottom: calc(100% + 8px); left: 50%; transform: translateX(-50%); background: #262626; color: #e5e5e5; padding: 8px 12px; border-radius: 4px; font-size: 12px; white-space: nowrap; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">Controls who can see this item</span>
        </span>
      </div>
      <select style="width: 100%; padding: 8px 12px; background: #1a1a1a; border: 1px solid #333; border-radius: 4px; color: #e5e5e5; font-size: 14px;">
        <option>Private</option>
        <option>Team</option>
        <option>Public</option>
      </select>
    </div>
    <div class="blog-diagram-caption">
      Core concept requires hover to understand.
    </div>
  </div>
  <div class="blog-diagram-card">
    <div class="blog-diagram-label">✓ Meaning inline</div>
    <div class="blog-diagram-content">
      <label style="font-size: 13px; color: #e5e5e5; display: block; margin-bottom: 4px;">Who can see this?</label>
      <select style="width: 100%; padding: 8px 12px; background: #1a1a1a; border: 1px solid #333; border-radius: 4px; color: #e5e5e5; font-size: 14px; margin-bottom: 8px;">
        <option>Only me</option>
        <option>My team (12 people)</option>
        <option>Anyone with the link</option>
      </select>
      <div style="font-size: 12px; color: #525252;">Currently visible to: only you</div>
    </div>
    <div class="blog-diagram-caption">
      Label, options, and state all visible.
    </div>
  </div>
</div>

If a tooltip explains a core concept, it is not optional help.

It is a label that belongs in the interface.

Tooltips work best when they add nuance. They fail when they carry meaning.

## A brutal test

Remove the instructional copy.

Does the screen still work?

<div class="blog-diagram-container blog-grid-2col-auto">
  <div style="padding: 16px; background: #1a1a1a; border-radius: 6px;">
    <div style="font-size: 13px; color: #a3a3a3; margin-bottom: 12px; padding: 10px; background: #1e293b; border-radius: 4px; text-decoration: line-through; opacity: 0.5;">
      Click "Export" to download your data as a CSV file. The export may take a few minutes for large datasets.
    </div>
    <div style="display: flex; gap: 8px;">
      <button style="background: #262626; color: #a3a3a3; border: none; padding: 8px 16px; border-radius: 4px; font-size: 13px;">Cancel</button>
      <button style="background: #3b82f6; color: white; border: none; padding: 8px 16px; border-radius: 4px; font-size: 13px;">Export</button>
    </div>
  </div>
  <div style="color: #525252; font-size: 24px;">→</div>
  <div style="padding: 16px; background: #1a1a1a; border-radius: 6px;">
    <div style="font-size: 13px; color: #888; margin-bottom: 8px;">Export 2,847 rows</div>
    <div style="display: flex; gap: 8px;">
      <button style="background: #262626; color: #a3a3a3; border: none; padding: 8px 16px; border-radius: 4px; font-size: 13px;">Cancel</button>
      <button style="background: #3b82f6; color: white; border: none; padding: 8px 16px; border-radius: 4px; font-size: 13px; display: flex; align-items: center; gap: 6px;">
        <span>↓</span> Export CSV
      </button>
    </div>
  </div>
</div>

If deleting a paragraph makes the primary action unclear, that paragraph was doing the job the UI should do.

The goal is not silence. The goal is that the interface holds up on its own.

## Where copy earns its keep

Some words are essential because they do real work:

* They are short
* They are specific
* They reflect the current state
* They help recovery

<div class="blog-grid-2col">
  <div class="blog-diagram-card">
    <div class="blog-diagram-label">❌ Vague reassurance</div>
    <div class="blog-diagram-content" style="background: #2a1717; border-color: #7f1d1d;">
      <div style="display: flex; align-items: center; gap: 10px;">
        <span style="font-size: 20px;">😅</span>
        <div>
          <div style="color: #fca5a5; font-size: 14px; margin-bottom: 4px;">Oops! Something went wrong.</div>
          <div style="color: #a3a3a3; font-size: 13px;">Please try again later.</div>
        </div>
      </div>
    </div>
    <div class="blog-diagram-caption">
      What failed? Try what again? When is later?
    </div>
  </div>
  <div class="blog-diagram-card">
    <div class="blog-diagram-label">✓ Actionable error</div>
    <div class="blog-diagram-content" style="background: #2a1717; border-color: #7f1d1d;">
      <div style="display: flex; align-items: start; gap: 10px;">
        <span style="color: #ef4444; font-size: 16px; margin-top: 2px;">✗</span>
        <div>
          <div style="color: #fca5a5; font-size: 14px; margin-bottom: 4px;">Payment declined</div>
          <div style="color: #a3a3a3; font-size: 13px; margin-bottom: 12px;">Card ending 4242 was declined by your bank.</div>
          <button style="background: transparent; color: #93c5fd; border: 1px solid #3b82f6; padding: 6px 12px; border-radius: 4px; font-size: 12px;">Try different card</button>
        </div>
      </div>
    </div>
    <div class="blog-diagram-caption">
      What failed, why, and what to do next.
    </div>
  </div>
</div>

This is especially true in error states. Strong error messages are visible, precise, and focused on what the user can do next. ([NN Group][5])

It is also true for accessibility. Errors cannot be communicated only through styling or color. They must be identified in text. ([W3C][6])

Vague reassurance is the opposite of help.

"Oops. Something went wrong."

That line increases retries, support tickets, and abandonment. It trades clarity for tone and loses both.

## Loading copy is a promise

Even "Loading…" sets an expectation.

<div style="display: flex; gap: 16px; margin: 32px 0; padding: 20px; background: #0d0d0d; border: 1px solid #262626; border-radius: 8px; overflow-x: auto;">
  <div style="flex: 1; min-width: 140px; padding: 16px; background: #1a1a1a; border-radius: 6px; text-align: center;">
    <div style="width: 24px; height: 24px; margin: 0 auto 12px; border: 2px solid #525252; border-top-color: #e5e5e5; border-radius: 50%; animation: spin 1s linear infinite;"></div>
    <div style="font-size: 12px; color: #737373; margin-bottom: 4px;">Spinner</div>
    <div style="font-size: 11px; color: #525252;">"Something is happening"</div>
  </div>
  <div style="flex: 1; min-width: 140px; padding: 16px; background: #1a1a1a; border-radius: 6px; text-align: center;">
    <div style="width: 80%; height: 4px; margin: 10px auto 12px; background: #262626; border-radius: 2px; overflow: hidden;">
      <div style="width: 45%; height: 100%; background: #3b82f6; border-radius: 2px;"></div>
    </div>
    <div style="font-size: 12px; color: #737373; margin-bottom: 4px;">Progress bar</div>
    <div style="font-size: 11px; color: #525252;">"This much is done"</div>
  </div>
  <div style="flex: 1; min-width: 140px; padding: 16px; background: #1a1a1a; border-radius: 6px; text-align: center;">
    <div style="margin-bottom: 12px;">
      <div style="height: 12px; width: 60%; background: #262626; border-radius: 2px; margin-bottom: 6px;"></div>
      <div style="height: 8px; width: 80%; background: #262626; border-radius: 2px;"></div>
    </div>
    <div style="font-size: 12px; color: #737373; margin-bottom: 4px;">Skeleton</div>
    <div style="font-size: 11px; color: #525252;">"Content shaped like this"</div>
  </div>
  <div style="flex: 1; min-width: 140px; padding: 16px; background: #1a1a1a; border-radius: 6px; text-align: center;">
    <div style="font-size: 14px; color: #525252; margin-bottom: 12px; font-family: monospace;">3 of 12</div>
    <div style="font-size: 12px; color: #737373; margin-bottom: 4px;">Counter</div>
    <div style="font-size: 11px; color: #525252;">"Exactly this many remain"</div>
  </div>
</div>

Spinners, progress bars, and skeleton screens communicate different things. They work in different contexts. They can backfire when they imply readiness that is not real. ([NN Group][7])

If you cannot make a reliable promise about timing or stability, do not fake confidence. Show what you know, and constrain what you cannot guarantee.

## A simple rule before adding text

Before adding a sentence, ask two questions:

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 32px 0;">
  <div style="padding: 20px; background: #0d0d0d; border: 1px solid #262626; border-radius: 8px;">
    <div style="font-size: 48px; color: #333; font-weight: bold; margin-bottom: 12px;">1</div>
    <div style="font-size: 15px; color: #e5e5e5; margin-bottom: 8px;">What failure does this prevent?</div>
    <div style="font-size: 13px; color: #525252;">If it prevents none, it is decoration.</div>
  </div>
  <div style="padding: 20px; background: #0d0d0d; border: 1px solid #262626; border-radius: 8px;">
    <div style="font-size: 48px; color: #333; font-weight: bold; margin-bottom: 12px;">2</div>
    <div style="font-size: 15px; color: #e5e5e5; margin-bottom: 8px;">What change would make this unnecessary?</div>
    <div style="font-size: 13px; color: #525252;">If the UI can carry the meaning, let it.</div>
  </div>
</div>

Sometimes copy stays. That is fine.

But it should be a seatbelt, not the frame.

## Closing

Good copy has a job. It should name the truth, reduce confusion, and help people recover when things go wrong.

But most copy people add is not doing that job. It is covering for missing structure.

Treat instructional text like a bug report. When you feel the urge to explain, stop and ask what the interface is failing to show.

Fix that first.

Then write the few words you cannot avoid.

<div style="margin: 32px 0; padding: 24px; background: linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 100%); border: 1px solid #262626; border-radius: 8px; text-align: center;">
  <div style="font-size: 14px; color: #525252; margin-bottom: 8px;">The best copy is</div>
  <div style="font-size: 20px; color: #e5e5e5;">the copy you don't need to write.</div>
</div>

[1]: https://www.nngroup.com/articles/ten-usability-heuristics/ "10 Usability Heuristics for User Interface Design"
[2]: https://www.nngroup.com/articles/errors-forms-design-guidelines/ "10 Design Guidelines for Reporting Errors in Forms"
[3]: https://pubmed.ncbi.nlm.nih.gov/11515286/ "The magical number 4 in short-term memory - PubMed - NIH"
[4]: https://onlinelibrary.wiley.com/doi/abs/10.1207/s15516709cog1202_4 "Cognitive Load During Problem Solving: Effects on Learning"
[5]: https://www.nngroup.com/articles/error-message-guidelines/ "Error-Message Guidelines"
[6]: https://www.w3.org/WAI/WCAG21/Understanding/error-identification.html "Understanding Success Criterion 3.3.1: Error Identification"
[7]: https://www.nngroup.com/articles/skeleton-screens/ "Skeleton Screens 101"