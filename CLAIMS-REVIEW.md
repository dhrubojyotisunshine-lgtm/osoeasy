# MOOREZY — Claims Review Checklist

Everything below is content **I wrote or retained that I could not verify**. The correction
document (P1-17, P2-03, P2-05, P2-10) requires that only real, supported and approved claims
appear on the live site. Please confirm, edit or delete each item before launch.

Legend: **[CUT]** = I removed it already · **[VERIFY]** = live on the site, needs your sign-off

---

## 1. Trust metrics — resolved by removal (P0-01, P2-03)

| Claim | Where it was | Status |
|---|---|---|
| `53,150+` daily staff users | homepage counter strip | **[CUT]** |
| `3,050+` outlets worldwide | homepage counter strip | **[CUT]** |
| `20+` countries | homepage counter strip | **[CUT]** |
| `100M+` garments processed | homepage counter strip | **[CUT]** |
| "Trusted by 5,000+ laundry businesses" | homepage hero eyebrow | **[CUT]** |
| "Join thousands of growing laundry businesses" | homepage final CTA | **[CUT]** |
| "+28.4% monthly growth" | homepage floating card | **[CUT]** |
| "−94% garment loss" | homepage story card | **[CUT]** |
| "35% average revenue uplift" | Single Store hero | **[CUT]** |
| "30% potential revenue growth" | Multi Store hero | **[CUT]** |
| "18+ connected modules" | Features hero | **[CUT]** |
| "94% fewer garment losses", "8.2% lower operating cost" | testimonials page | **[CUT]** |
| "3×", "+40%", "+28%", "+18%", "+30%" per-feature stats | old features page | **[CUT]** (page replaced) |

The counter strip is gone entirely. **When you have audited numbers, give them to me and I will
reinstate the strip** — the layout slot is still there.

---

## 2. Customer evidence — needs real material (P2-01, P2-02)

**[VERIFY] — these are unverified and still live on `testimonials.html`:**

Six named testimonials with company, city and 5-star ratings: Deepak G. (Pearlwash, Hyderabad),
Anita Rao (Fresh Fold, Bengaluru), Rahul Mehta (Laundry Lab, Mumbai), Sara Khan (The Clean Co.,
Dubai), Michael Tan (WashWorks, Singapore), Priya S. (Care Laundry, Chennai).

I could not confirm any of these are real customers. **If they are not, they must be removed** —
invented testimonials are a legal and reputational risk, not just a doc-compliance issue.

I have already: removed the fabricated numeric result from each card, and removed the invented
partner-logo row ("PEARL WASH / LAUNDRY LAB / THE CLEAN CO. / FRESH FOLD / WASHWORKS") from the
homepage, replacing it with a capability strip that makes no claim about who uses the product.

**Still outstanding:** P2-01 case studies (Problem → Solution → Result) cannot be written without
real customers. This is the single biggest remaining content gap.

---

## 3. Feature capability claims — need product confirmation (P1-17, P2-10)

You asked me to propose content based on laundry-domain knowledge. I did, and I deliberately kept
it behaviour-level rather than promising specifics. Every capability list on these pages needs a
yes/no from someone who knows the shipped build:

`pos` · `pickup-delivery` · `printing-tags` · `customer-app` · `driver-app` · `factory-plant` ·
`online-payments` · `packages-plans` · `customer-management` · `notifications-marketing` ·
`reporting-analytics` · `expense-management` · `staff-management` · `attendance` ·
`store-management` · `multi-store-support` · `integrations-support`

Highest-risk items — these assert a capability exists:

- **Driver app** — sequenced stops, navigation handoff, doorstep payment collection.
- **Plant workflow** — lot tracking, scan-verified sorting, rework handling.
- **Garment tagging** — barcode/QR, heat-seal tag support, item-level scan history.
- **Attendance** — clock in/out, break tracking, overtime, leave records.
- **Expense approvals** — approval workflow and thresholds.
- **Recurring pickups**, **part payments**, **package expiry rules**, **report exports**.

Where I was unsure I wrote "where supported" or deferred to "our team will confirm" rather than
asserting. Those hedges are honest but weak marketing — replace them with specifics once confirmed.

---

## 4. Integrations — currently generic (P1-17)

`integrations-support.html` lists: payment gateway, SMS/email/messaging, accounting export, label
printers, barcode scanners, API/webhooks.

**[VERIFY]** No vendor names or logos are shown anywhere, deliberately — the doc says not to display
unsupported logos. Once you tell me which providers are genuinely integrated, I can name them.
Until then this page is honest but vague.

---

## 5. Pricing — structure unchanged, limits unverified (P2-05)

`pricing.html` still shows the pre-existing five tiers (Free $0 / Standard $49 / Pro $99 /
Growth $199 / Enterprise) with user counts, store counts and feature lists.

**[VERIFY]** I did not touch these numbers because I have no source of truth for real plan limits,
and inventing them would be worse than leaving them. P2-05 asks for a proper comparison across
users, stores, POS, pickup/delivery, CRM, inventory, reports, apps, support and integrations —
**send me the real plan matrix and I will rebuild this page properly.**

Note: the page already states billing is not connected ("secure subscription billing will be
connected with the backend"), which is accurate.

---

## 6. Screenshots — real, but from the app design (P0-03)

The 30 screens in `assets/screens/` were extracted from the **O So Easy Renseri** app design you
supplied, and are used across the site as MOOREZY product screens.

**[VERIFY]** Two things to confirm:
1. You are happy for these designs to be presented as MOOREZY (you said the branding difference is
   not an issue — flagging once more because the in-app logo is visible on `splash`, `login-*`,
   `register`, `otp-verification`, `forgot-password` and `new-password`. **I deliberately did not
   use any of those six on the site**, so no competing logo appears anywhere.)
2. The screens show Indian Rupee pricing and Indian addresses (Indore, Madhya Pradesh). Fine for an
   India-facing site; tell me if you need a different market shown.

**Screens I have NOT used** (available if you want them): splash, onboarding, login-email,
login-password, forgot-password, otp-verification, new-password, register, logout-confirm,
payment-failed, edit-product-color, saved-address, contact-us, subscription, active-order,
delivery-schedule, all-services, cart, edit-product-damage, profile, edit-profile.

**Still mockups, not real captures** (no design existed for these): POS counter, driver app,
plant board, reporting dashboard, staff/attendance/expense/inventory/multi-store screens. They are
built as CSS recreations in `ui-mockups.js` and are labelled as interface illustrations, not
photographs. Swap in real captures when available — each is a single function to replace.

---

## 7. Subscription tiers in the app design — possible error

The app's Subscription screen shows **Platinum ₹1,000 (20 bookings, 10 days)**, **Silver ₹2,000
(40 bookings, 20 days)**, **Gold ₹3,000 (60 bookings, 30 days)**.

Platinum being the cheapest tier inverts the usual Silver → Gold → Platinum hierarchy. Worth
checking with whoever owns the app design — it reads as a naming mistake. I have not surfaced these
tier names on the website.

---

## 8. Social links — placeholders (P3-07)

Footer social icons currently point at `linkedin.com`, `facebook.com`, `instagram.com` homepages,
not MOOREZY profiles. **[VERIFY]** Send me the real profile URLs, or I will remove the icons.

---

## 9. Other notes

- **Contact form** posts via `mailto:` — it will open the user's mail client, not submit to a server.
  Fine as a preview; needs a real endpoint before launch.
- **Newsletter form** shows a confirmation message but sends nothing. Same caveat.
- **Login / signup** show "design preview" messages, which is accurate and honest.
- **`hello@moorezy.com`** appears as the contact address — confirm it is monitored.

---

## 10. Image weight — flagged, not changed (P3-09)

Deleted: `assets/image (4).png` — a byte-identical, unreferenced duplicate of
`moorezy-logo-white.png` (2.0 MB saved).

**Not changed, needs your call.** These are all 1536×1024 source images:

| Asset | Size | Rendered at |
|---|---|---|
| `moorezy-logo.png` | 1.86 MB | max 160×112 CSS px |
| `moorezy-logo-white.png` | 2.00 MB | max 160×112 CSS px |
| `laundry-platform-hero.png` | 1.63 MB | ~720 px wide |
| `feature-card-atlas.png` | 1.56 MB | CSS background |

The logos are roughly 100× larger than they need to be and load on **every page**. Downscaling
them to ~640 px wide would cut about 3.5 MB with no visible change at any breakpoint.

I did not touch them because your recent commits ("logo & responsiveness modifications",
"Restore original logo on white background", "Bust cached logo asset") show you have been tuning
these by hand, and `styles.css` carries ~15 `.brand-logo` overrides across breakpoints. Say the
word and I will downscale them and bump the `?v=` cache-buster.
