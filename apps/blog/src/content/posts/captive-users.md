---
title: "Internal Users Can't Leave"
subtitle: "The cruelest interfaces are those with captive audiences"
date: 2025-12-29
excerpt: "The cruelest interfaces are those with captive audiences. Internal tools deserve real UX."
featured: true
---

There's a special category of software that never gets a redesign, never gets user research, never gets prioritized in planning. It's the admin panel. The ops dashboard. The internal tool.

The logic is always the same: they're internal users. They'll figure it out. They can't churn. We'll fix it later.

This is, simply put, abuse justified by captivity.

## The internal/external distinction is dumb most of the time

We act like there are two kinds of users: customers (who matter) and employees (who cope). But this framing is wrong on every axis.

<div class="blog-grid-2col" style="gap: 16px; row-gap: 24px;">
  <div class="blog-diagram-card" style="background: linear-gradient(135deg, #14291a 0%, #0f1f14 100%); border: 1px solid #166534; border-radius: 8px; padding: 20px; margin-bottom: 8px;">
    <div class="blog-diagram-label" style="color: #4ade80; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
      <span style="display: inline-block; width: 8px; height: 8px; background: #4ade80; border-radius: 50%;"></span>
      External users
    </div>
    <div style="font-size: 14px; color: #d1d5db; line-height: 1.8;">
      <div style="margin-bottom: 10px; display: flex; align-items: center; gap: 10px;"><span style="color: #4ade80;">✓</span> Usability testing</div>
      <div style="margin-bottom: 10px; display: flex; align-items: center; gap: 10px;"><span style="color: #4ade80;">✓</span> Design reviews</div>
      <div style="margin-bottom: 10px; display: flex; align-items: center; gap: 10px;"><span style="color: #4ade80;">✓</span> A/B experiments</div>
      <div style="margin-bottom: 10px; display: flex; align-items: center; gap: 10px;"><span style="color: #4ade80;">✓</span> Support escalation paths</div>
      <div style="display: flex; align-items: center; gap: 10px;"><span style="color: #4ade80;">✓</span> Quarterly roadmap items</div>
    </div>
  </div>
  <div class="blog-diagram-card" style="background: linear-gradient(135deg, #2a1717 0%, #1f1010 100%); border: 1px solid #7f1d1d; border-radius: 8px; padding: 20px; margin-bottom: 8px;">
    <div class="blog-diagram-label" style="color: #fca5a5; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 16px; display: flex; align-items: center; gap: 8px;">
      <span style="display: inline-block; width: 8px; height: 8px; background: #ef4444; border-radius: 50%;"></span>
      Internal users
    </div>
    <div style="font-size: 14px; color: #d1d5db; line-height: 1.8;">
      <div style="margin-bottom: 10px; display: flex; align-items: center; gap: 10px;"><span style="color: #ef4444;">✗</span> "They'll figure it out"</div>
      <div style="margin-bottom: 10px; display: flex; align-items: center; gap: 10px;"><span style="color: #ef4444;">✗</span> "It's just for ops"</div>
      <div style="margin-bottom: 10px; display: flex; align-items: center; gap: 10px;"><span style="color: #ef4444;">✗</span> "We'll fix it later"</div>
      <div style="margin-bottom: 10px; display: flex; align-items: center; gap: 10px;"><span style="color: #ef4444;">✗</span> "File a ticket"</div>
      <div style="display: flex; align-items: center; gap: 10px;"><span style="color: #ef4444;">✗</span> "They can't churn"</div>
    </div>
  </div>
</div>

Internal users are *higher* leverage:

* They use your systems eight hours a day, not eight minutes
* Their efficiency directly impacts your burn rate
* Their workarounds become institutionalized process
* Their frustrations become your culture smells

An external user who has a bad experience might churn. An internal user who has a bad experience stays, builds resentment, and creates shadow systems you don't control.

The distinction isn't internal vs external, rather *users who can leave* vs *users who can't.* And we consistently treat the captive ones worse.

## "Power Users"

When challenged on this, teams usually retreat to a familiar defense: "These aren't normal users. They're experts. They can handle complexity."

This is backwards.

Power users don't need complexity. They need speed and reliability. The tool should get out of their way so they can do their actual job.

<div class="blog-grid-2col">
  <div class="blog-diagram-card">
    <div class="blog-diagram-label">❌ "Flexible" internal tool</div>
    <div class="blog-diagram-content" style="font-size: 13px;">
      <div style="color: #a3a3a3; margin-bottom: 8px;">1. Open admin panel</div>
      <div style="color: #a3a3a3; margin-bottom: 8px;">2. Search by customer ID (email doesn't work)</div>
      <div style="color: #a3a3a3; margin-bottom: 8px;">3. Click "Advanced" → "Billing" → "History"</div>
      <div style="color: #a3a3a3; margin-bottom: 8px;">4. Find the charge (no filtering)</div>
      <div style="color: #a3a3a3; margin-bottom: 8px;">5. Click "Actions" → "Refund" → confirm → confirm again</div>
      <div style="color: #ef4444; margin-top: 12px; padding-top: 12px; border-top: 1px solid #333;">
        ⏱ 2 minutes per ticket × 60 tickets/day = 2 hours lost
      </div>
    </div>
  </div>
  <div class="blog-diagram-card">
    <div class="blog-diagram-label">✓ Tool that respects time</div>
    <div class="blog-diagram-content" style="font-size: 13px;">
      <div style="color: #a3a3a3; margin-bottom: 8px;">1. ⌘K → type email or name</div>
      <div style="color: #a3a3a3; margin-bottom: 8px;">2. See account state, recent charges inline</div>
      <div style="color: #a3a3a3; margin-bottom: 8px;">3. Click "Refund" → done</div>
      <div style="color: #4ade80; margin-top: 12px; padding-top: 12px; border-top: 1px solid #333;">
        ⏱ 20 seconds per ticket × 60 tickets/day = 20 minutes
      </div>
    </div>
  </div>
</div>

The CS rep resolving a billing issue doesn't want to "handle complexity." They want to find the account, see the state, take an action, and move on. Every extra click is delay for a customer who's already frustrated.

Power users are the *most* sensitive to friction because they encounter it most often. They're the ones who notice the 200ms delay, the unnecessary confirmation modal, the three clicks that should be one.

"They're power users" is not a reasonable excuse to cut corners. Spending the time and effort building delightul experiences for internal users pays dividends down the line.

## Internal tools become external tools

Here's a pattern that repeats time and time again:

1. You build an internal tool for ops
2. Customers start asking for self-serve access to the same data
3. You expose the internal tool through a portal
4. Now your admin panel—with all its jank—is customer-facing

Or:

1. You build an internal API for your dashboard
2. Partners want integrations
3. You document the internal API and call it "public"
4. Now your internal data model is your public contract

The internal/external boundary is permeable. What's internal today is external tomorrow. The shortcuts you took because "it's just for us" become the constraints you can't change later on.

Assuming internal means "doesn't matter" is assuming the tool will never escape. **It will escape**.

## Ops workarounds become permanent architecture

When an internal tool is bad, people don't file tickets and wait. They build workarounds. And workarounds become architecture and culture.

<div style="margin: 32px 0; display: flex; flex-direction: column; gap: 12px;">
  <div style="padding: 16px 20px; background: #0d0d0d; border: 1px solid #262626; border-radius: 8px; display: flex; align-items: center; gap: 16px;">
    <span style="font-size: 24px;">📊</span>
    <div>
      <div style="color: #e5e5e5; font-size: 14px;">The spreadsheet that tracks what the dashboard can't show</div>
      <div style="color: #525252; font-size: 12px; margin-top: 2px;">Owner: Sarah (left 6 months ago)</div>
    </div>
  </div>
  <div style="padding: 16px 20px; background: #0d0d0d; border: 1px solid #262626; border-radius: 8px; display: flex; align-items: center; gap: 16px;">
    <span style="font-size: 24px;">💬</span>
    <div>
      <div style="color: #e5e5e5; font-size: 14px;">The Slack channel where people paste IDs because search doesn't work</div>
      <div style="color: #525252; font-size: 12px; margin-top: 2px;">#ops-id-lookup · 847 members · 12k messages</div>
    </div>
  </div>
  <div style="padding: 16px 20px; background: #0d0d0d; border: 1px solid #262626; border-radius: 8px; display: flex; align-items: center; gap: 16px;">
    <span style="font-size: 24px;">🧩</span>
    <div>
      <div style="color: #e5e5e5; font-size: 14px;">The Chrome extension someone wrote to auto-fill the forms</div>
      <div style="color: #525252; font-size: 12px; margin-top: 2px;">Last updated: 2 years ago · "Works on my machine"</div>
    </div>
  </div>
  <div style="padding: 16px 20px; background: #0d0d0d; border: 1px solid #262626; border-radius: 8px; display: flex; align-items: center; gap: 16px;">
    <span style="font-size: 24px;">⏰</span>
    <div>
      <div style="color: #e5e5e5; font-size: 14px;">The cron job that syncs the thing the UI can't sync</div>
      <div style="color: #525252; font-size: 12px; margin-top: 2px;">Running on: Marcus's laptop (he's on vacation)</div>
    </div>
  </div>
  <div style="padding: 16px 20px; background: #0d0d0d; border: 1px solid #262626; border-radius: 8px; display: flex; align-items: center; gap: 16px;">
    <span style="font-size: 24px;">🧠</span>
    <div>
      <div style="color: #e5e5e5; font-size: 14px;">The tribal knowledge about which buttons to click in which order</div>
      <div style="color: #525252; font-size: 12px; margin-top: 2px;">Documentation: "Ask Jamie"</div>
    </div>
  </div>
</div>

These workarounds are invisible to eng because they don't live in the codebase or docs. They exist in people's heads and in tools you don't control, passed along unsystematically most of the time.

These workarounds work until someone leaves without passing their system along, then a spreadsheet that was used to track something critical breaks as a result, and suddenly nobody knows how to do the thing that used to be "easy."

Bad internal tooling creates <strong>shadow infrastructure</strong> that is unversioned, undocumented, and one departure away from collapse.

## Invest in your team

We underinvest on internal tooling because internal users can't leave. They're captive. But we lose a ton of signal and add a ton of noise when we treat this software as categorically different from what we build for our "real" end-users.

Because our team knows the product well enough, they'll cope with second-class software.

But coping in this sense is expensive. It's expensive in hours, in errors, in workarounds, in culture, and in the slow bleed of your best people who get tired of fighting software that nobody will fix.

The internal/external distinction is a lie we tell ourselves to justify neglect.

Every user deserves an interface that respects their time.
