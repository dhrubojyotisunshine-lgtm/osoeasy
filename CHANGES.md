# MOOREZY — Change List (Priority 0 pass)

Every removal below is **commented out in place, not deleted**. Search the codebase for
`UNVERIFIED` to find all of them. Nothing is lost — each block can be restored by deleting
the comment markers and supplying a verified figure.

---

## A. Content commented out (kept in the file, not rendering)

| # | What | File | Marker | Why |
|---|---|---|---|---|
| A1 | Counter strip — `53,150+` staff, `3,050+` outlets, `20+` countries, `100M+` garments | [index.html](index.html) | `UNVERIFIED (P0-01/P2-03)` | P0-01. Hardcoded targets, not data; showed literal `0` until animation fired |
| A2 | Hero eyebrow "Trusted by 5,000+ laundry businesses" | [index.html](index.html) | `UNVERIFIED (P0-01/P2-10)` | Unverified customer count |
| A3 | Floating card "Monthly growth **+28.4%**" | [index.html](index.html) | `UNVERIFIED (P2-10)` | Invented metric |
| A4 | Partner row — PEARL WASH, LAUNDRY LAB, THE CLEAN CO., FRESH FOLD, WASHWORKS | [index.html](index.html) | `UNVERIFIED (P2-03/P2-10)` | Five brands not confirmed as customers |
| A5 | Homepage customer story — Deepak G. quote + "**−94%** garment loss" | [index.html](index.html) | `UNVERIFIED (P2-01/P2-02/P2-10)` | Unconfirmed person and metric |
| A6 | Final CTA "Join thousands of growing laundry businesses" | [index.html](index.html) | `UNVERIFIED (P2-10)` | Unverified volume claim |
| A7 | Single Store accent "**35%** average revenue uplift" | [pages.js](pages.js) | `UNVERIFIED (P2-10)` | Invented metric |
| A8 | Multi Store accent "**30%** potential revenue growth" | [pages.js](pages.js) | `UNVERIFIED (P2-10)` | Invented metric |
| A9 | Features accent "**18+** connected modules" | [pages.js](pages.js) | `UNVERIFIED (P2-10)` | Unverified count |
| A10 | Testimonial results "94% fewer garment losses", "8.2% lower operating cost" | [pages.js](pages.js) | `UNVERIFIED (P2-10)` | Invented metrics — replaced with non-numeric labels |
| A11 | 12 per-feature stat pairs (`3×`, `+40%`, `+28%`, `+18%`, `+30%`, `100%`…) | [work/archive/features-detail.js](work/archive/features-detail.js) | header comment | All unverified; file superseded (see C1) |

**[testimonials.html](testimonials.html) is now UNLINKED.** The page file is kept exactly as it
was (six named testimonials: Deepak G., Anita Rao, Rahul Mehta, Sara Khan, Michael Tan, Priya S.),
but both links to it — the "Customers" header nav item and the footer Company link — are commented
out in [components.js](components.js), so it is unreachable from the site. `scripts/linkcheck.js`
treats it as an intentional orphan rather than an error. Restore both links once the testimonials
are confirmed real and approved.

---

## B. Code removed (behaviour, not content)

| # | What | File | Why |
|---|---|---|---|
| B1 | Counter animation (`animateCounters`, `statsObserver`) | [app.js](app.js) | Nothing left to animate after A1. Restore with A1. |
| B2 | Rotating-quote script (`quotes[]`, `renderQuote`, prev/next handlers) | [app.js](app.js) | Nothing left to rotate after A5. Restore with A5. |
| B3 | Duplicated nav / dropdown / reveal handlers | [app.js](app.js), [pages.js](pages.js) | Triplicated across three files → now once in [components.js](components.js) |
| B4 | Client-side link rewrites for `app.fabklean.com`, `/privacy-policy`, `/terms-and-conditions` | [app.js](app.js), [pages.js](pages.js), [auth.js](auth.js) | The code rewrote links that the same codebase generated. Fixed at source instead. |
| B5 | Inline `<header>` + `<footer>` markup | [index.html](index.html) | Duplicate of [components.js](components.js) and already diverged. Homepage footer linked to on-page anchors (`#features`, `#resources`) that never reached the real pages. |

---

## C. Files

| # | File | Action |
|---|---|---|
| C1 | `features-detail.js` | **Moved** to [work/archive/](work/archive/) — superseded by [overview.js](overview.js) + [feature-page.js](feature-page.js). It was double-rendering: [features.html](features.html) loaded `pages.js` *and* `features-detail.js`, and the second overwrote the first. Not shipped (`work/` is excluded from the build). |
| C2 | `assets/image (4).png` | **Deleted** — byte-identical duplicate of `moorezy-logo-white.png` (verified by md5), referenced nowhere. 2.0 MB saved. |
| C3 | `assets/screens/*.png` | **Moved** to [work/screens-src/](work/screens-src/) — 7.2 MB of full-res sources. The shipped `.webp` versions (764 KB total) stay in `assets/screens/`. |

---

## D. Sections replaced (old removed, new added in the same slot)

| Old | New |
|---|---|
| Partner logo row (A4) | Capability strip — POS, Pickup & Delivery, Garment Tagging, Plant, Payments, Reporting. Makes no claim about who uses the product. |
| Counter strip (A1) | *Nothing* — the slot sits empty until you have audited numbers. |
| Homepage customer story (A5) | *Nothing* — needs a real approved story (P2-01). |
| Feature cards linking to `#anchors` | Feature cards linking to their own full pages |
| Generic chart repeated on all 12 features | A distinct interface mockup per feature ([ui-mockups.js](ui-mockups.js)) — P3-02 |

---

## E. New pages (20)

**Feature pages (17)** — each with problem → solution → workflow → screenshots → capabilities →
role views → outcomes → FAQ → related → CTA:

[pos](pos.html) · [pickup-delivery](pickup-delivery.html) · [printing-tags](printing-tags.html) ·
[customer-app](customer-app.html) · [driver-app](driver-app.html) · [factory-plant](factory-plant.html) ·
[staff-management](staff-management.html) · [attendance](attendance.html) ·
[expense-management](expense-management.html) · [store-management](store-management.html) ·
[multi-store-support](multi-store-support.html) · [customer-management](customer-management.html) ·
[reporting-analytics](reporting-analytics.html) · [online-payments](online-payments.html) ·
[packages-plans](packages-plans.html) · [notifications-marketing](notifications-marketing.html) ·
[integrations-support](integrations-support.html)

**Hub pages (2)** — [features.html](features.html) rebuilt as a grouped overview,
[how-it-works.html](how-it-works.html) new (P0-04 full workflow).

**Docs (2)** — this file and [CLAIMS-REVIEW.md](CLAIMS-REVIEW.md).

---

## F. New source files

| File | Purpose |
|---|---|
| [product.css](product.css) | Workflow diagrams, screenshot frames, feature-page sections, mockup styling, responsive rules for 1920/1440/1366/tablet/430/390/375 |
| [ui-mockups.js](ui-mockups.js) | 18 distinct interface recreations incl. the POS counter and driver app you asked for |
| [feature-data.js](feature-data.js) | Content for all 18 product pages |
| [feature-page.js](feature-page.js) | Renders a feature page from that data |
| [overview.js](overview.js) | Features hub + how-it-works, and the canonical workflow definition |
| [scripts/linkcheck.js](scripts/linkcheck.js) | Link / anchor / asset / orphan / blank-page QA |
| [assets/screens/](assets/screens/) | 30 real app screens as WebP (23 KB average) |

---

## G. Assets flagged but deliberately NOT changed

`moorezy-logo.png` (1.86 MB) and `moorezy-logo-white.png` (2.00 MB) are 1536×1024 and render at
max 160×112 CSS px — roughly 100× oversized, loading on every page. `laundry-platform-hero.png`
(1.63 MB) and `feature-card-atlas.png` (1.56 MB) are similar.

Untouched because your recent commits ("logo & responsiveness modifications", "Restore original
logo on white background", "Bust cached logo asset") and ~15 `.brand-logo` breakpoint overrides in
`styles.css` show active hand-tuning. Downscaling to ~640 px would save ~3.5 MB with no visible
change. Say the word.

---

## H. Verification at time of writing

```
scripts/linkcheck.js   0 broken links, 0 dead anchors, 0 orphan pages, 0 unrendered routes
jsdom render pass      30/33 pages clean — no runtime errors, 28 nav links,
                       alt text on every image, exactly one <h1> per page
                       (3 flagged = login/signup, intentionally footer-less; contact fixed)
build                  dist 7.98 MB, all required files present
```

---
---

# Priority 1 pass

## I. New pages (7)

| Page | Item | Notes |
|---|---|---|
| [franchise.html](franchise.html) | P1-04 | Standardisation, permission boundaries between head office and franchisee, comparable reporting |
| [aggregator.html](aggregator.html) | P1-05 | Central order capture, partner routing, commission tracking. **Hedged** — depends on your commercial model |
| [loyalty-referrals.html](loyalty-referrals.html) | P1-08 | Points, redemption, referral attribution, win-back |
| [inventory.html](inventory.html) | P1-09 | Chemicals, consumables, stock in/out, low-stock alerts, store-wise stock, transfers |
| [ecommerce.html](ecommerce.html) | P1-18 | Service listing, booking, slots, online payment, login, order history |
| [setup-migration.html](setup-migration.html) | P1-19 | Imports, configuration, verification, role-based training, supported go-live |
| [why-moorezy.html](why-moorezy.html) | — | Rebuilt from the thin template to the full structure |

## J. Pages rebuilt from the thin template (P1-01/02/03)

[single-store.html](single-store.html), [multi-store.html](multi-store.html),
[new-business.html](new-business.html), [b2b.html](b2b.html) and
[why-moorezy.html](why-moorezy.html) previously rendered a hero plus six generic benefit cards
(~950 characters of content). They now use the full
**Problem → Solution → Workflow → Screenshots → Features → Roles → Result → FAQ → CTA** structure
P1-01 asks for — roughly 3,200 characters each.

## K. Superseded, kept in place

`pages.js` records `why`, `single`, `multi`, `startup`, `b2b` and `features` are **no longer
rendered** but are **not deleted** — marked with a `SUPERSEDED` comment at the top of the file.
`pages.js` still renders pricing, testimonials, contact and blogs.

## L. New mockups (P3-02)

`loyalty` (points balance, tier progress, referral code) and `b2bInvoice` (consolidated account
invoice with contract discount and challan count) added to [ui-mockups.js](ui-mockups.js) so the
new pages do not reuse an existing visual. 20 distinct mockups total.

## M. Navigation

- **Solutions** now: Why MOOREZY, Single Store, Multi Store, New Business, Factory / Plant,
  Franchise, Aggregator, B2B & Corporate.
- **Features** gains: Inventory (Operations), Loyalty & Referrals and Online Store
  (Customers & growth), Setup & Migration (Insight & platform).
- Footer Solutions column gains Franchise and Aggregator.
- Nav is now 33 links; all wired into the Features hub as well.

## N. P1 items already delivered in the P0 pass

P1-06 Driver App · P1-07 CRM & Campaigns · P1-10 Expense · P1-11 Staff · P1-12 Attendance ·
P1-13 Reporting · P1-14 Online Payments · P1-15 Packages & Plans · P1-16 Notifications ·
P1-17 Integrations (needs your real provider list) · P1-20 Support (contact page section)

## O. Verification after P1

```
scripts/linkcheck.js   0 broken links, 0 dead anchors, 0 orphans, 0 unrendered routes
jsdom render pass      37/39 pages clean (login/signup are intentionally footer-less)
build                  dist 8.02 MB, 39 pages
```

## P. Still open

- **P2-01 case studies** and **P2-02 testimonials** — blocked on real, approved customers.
- **P2-05 pricing matrix** — blocked on real plan limits.
- **P1-17 integration names** — blocked on your confirmed provider list.
- **P3** — image weight (section G), plus a full responsive/accessibility sweep.
- All new P1 capability claims are subject to the same verification as
  [CLAIMS-REVIEW.md](CLAIMS-REVIEW.md) section 3.

---
---

# Priority 2 pass (unblocked items)

## Q. P2-09 — business ecosystem diagram

New `ecosystem()` in [overview.js](overview.js), shown on [how-it-works.html](how-it-works.html).
A hub-and-spoke SVG placing **one shared record** (customer · order · item) at the centre with
nine connected areas: Point of Sale, Customer App, Driver App, Garment Tags, Plant, Inventory,
Payments, CRM, Analytics. Each links to its own page.

Accessibility and mobile handling: the SVG is `aria-hidden` (decorative); a parallel `<ul>`
carries the same relationships for screen readers and **becomes the visible layout below 720px**,
where radial diagram text is unreadable on a phone.

## R. P2-04 — dedicated FAQ page

New [faq.html](faq.html) + [faq.js](faq.js): **30 questions in 8 groups**, covering exactly the
objections the correction document names — setup, migration, printers, mobile/POS, multi-store,
driver app, online booking, payments, training, support and trial. Jump-links at the top, accordion
answers, cross-linked from the pricing FAQ and the footer.

Where the honest answer depends on plan, region or configuration, the answer says so rather than
implying a capability. That is deliberate: an FAQ that over-promises creates the support problem it
was meant to prevent.

## S. P2-05 — plan comparison table

[pricing.html](pricing.html) gains a **34-row comparison across all five plans**, grouped into
Limits / At the counter / Delivery & apps / Customers & growth / Operations / Money & insight /
Platform & service — the dimensions P2-05 asks for.

**Every cell is derived from the plan descriptions already on the page.** No new limits were
invented. Cells that the existing copy genuinely does not specify are marked **"Ask us"** in amber
rather than guessed — currently *Customer app & online booking* and *Integrations*. Horizontally
scrollable with a sticky header row on narrow screens.

This still needs your real plan matrix (CLAIMS-REVIEW.md section 5) to become fully accurate.

## T. P2-06 — CTA consistency

New audit (`cta-test.js`) checking every page for a working, correctly-styled primary CTA.

Found and fixed: **[blogs.html](blogs.html) had no call to action at all** — it now ends with the
standard CTA block. Login, signup and contact are treated as conversion *destinations* (their
action is the form submit); privacy and terms are exempt by design.

Result: **all 40 pages** have a working primary action.

## U. P2 items still blocked

- **P2-01 case studies** — needs real customers with approved, measurable outcomes.
- **P2-02 testimonials** — page remains unlinked pending confirmation.
- **P2-03 / P2-07 / P2-08 / P2-10** — completed in the P0/P1 passes.

## V. Verification after P2

```
scripts/linkcheck.js   0 broken links, 0 dead anchors, 0 orphans, 0 unrendered routes
jsdom render pass      38/40 pages clean (login/signup intentionally footer-less)
a11y pass              0 issues across 40 pages
cta pass               40/40 pages have a working primary CTA
build                  dist rebuilt, 40 pages
```

---
---

# Visual bugfix pass (reported from the live site)

## W. Invisible step numbers

**Symptom:** the workflow steps showed solid green circles with no number inside.

**Cause:** a CSS specificity clobber in [product.css](product.css). `.flow-step span`
(specificity 0,1,1) outranked `.flow-num` (0,1,0). The badge is a `<span>` inside `.flow-step`,
so it inherited `display:block` (destroying the grid centring) and `color:var(--muted)` — grey
text on a green circle, effectively invisible.

**Fix:** `.flow-step .flow-num` (0,2,0) now wins, and the descriptive-text rule was narrowed to
`.flow-step>span:not(.flow-num)` so it can never claim the badge again.

## X. Distorted "wide looking" artwork

**Symptom:** illustrations stretched horizontally — most obviously the delivery van.

**Cause:** `feature-card-atlas.png` is a 4×3 sprite drawn with `background-size:400% 300%`.
Percentage background sizing scales each axis **independently**, so a 1.13:1 illustration was
squeezed into whatever box it sat in. The homepage banner is roughly 2.07:1, so every image was
stretched about 80% wider than it should be.

This affected **three live components**, not just the one reported:

| Component | Box ratio | Distortion |
|---|---|---|
| `.feature-grid .feature-card:before` | ~2.07:1 | severe (reported) |
| `.mini-solutions article:before` | ~2.96:1 | worst |
| `.stage-visual` (solution tabs) | ~1.41:1 | mild |

(`.visual-content` in pages.css uses the same sprite but is dead CSS — that page was replaced.)

**Fix:** each needed cell is now its own correctly-proportioned file in
[assets/cards/](assets/cards/) (10 files, 142 KB total), sized with `contain` (short banners) or
`cover` (the taller tab visual) so aspect ratio is always preserved.

## Y. Wrong artwork on four homepage cards

The sprite offsets are keyed to `:nth-child`, but the homepage cards were reordered during the P0
rewrite. Four cards were showing another feature's illustration:

| Card | Was showing | Now shows |
|---|---|---|
| CRM & Campaigns | megaphone | customer card + heart |
| Packages & Plans | customer card | gift box + folded laundry |
| Factory & Plant | gift box | connected buildings |
| Staff & Attendance | analytics panel | the team |

## Z. Oversized single screenshots

**Symptom:** on [printing-tags.html](printing-tags.html) one phone screenshot filled the whole
container — enormous and unreadable.

**Cause:** `.shot-row` used `repeat(auto-fit,minmax(180px,1fr))`. With a single item, `1fr`
stretched a 560px-wide phone capture to the full 1180px container.

**Fix:** the track is capped at `minmax(150px,210px)` with `justify-content:center`, so screenshots
stay phone-sized and the group centres however many there are. This also affected
[reporting-analytics.html](reporting-analytics.html), [integrations-support.html](integrations-support.html)
and [b2b.html](b2b.html) (1 shot each), plus the 2-shot pages.

## AA. QA gaps closed

- **`scripts/linkcheck.js` now validates `url()` assets in CSS.** It previously scanned only HTML
  and JS, so a mistyped `background-image` path would have shipped silently — exactly the risk
  introduced by the ten new card images.
- **Real browser QA added** (Playwright + Chromium, in the scratchpad so the project stays
  dependency-free): horizontal-overflow checks across 40 pages × 7 widths
  (1920/1440/1366/768/430/390/375), plus explicit assertions that the step numbers are white and
  grid-centred and that no card artwork uses non-uniform scaling.

  This closes the gap flagged earlier: jsdom has no layout engine, which is precisely why these
  three bugs reached you rather than being caught here.
