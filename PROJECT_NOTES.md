# Project Notes (collected before building the portfolio)

Running list of the projects, domains and Figma links Gab shares. The site is built only after Gab says "create the portfolio".

## Context from Gab (Nov 21, 2026)

- **Projects 1–6 are personal projects.** Gab built them as self-training in building with AI, starting from Gab's own ideas. There are no Figma designs for them. The reason behind each is what the app itself sets out to do: help and assist people using current tech.
- **Project 7 (DX Design System) is Gab's own initiative at DX Form PH.** As the company's first in-house UX/UI designer while also working as PM, Gab took the opportunity to give the company a design system.

## Rule: no client names (Gab, Nov 21, 2026)

- **No client names anywhere on the portfolio:** not in text, file names, alt text, image captions, URLs or screenshots.
- Known client names to remove: **Intellicare**, **Aventus** (logo, "Aventus Library", @aventus.ph emails). Treat any other client or brand name found later the same way.
- Describe clients generically, e.g. "a healthcare / HMO company in the Philippines".
- Rename projects generically, e.g. "Employee payment-request portal" and "Budget management system".
- Screenshots: blur or relabel client logos, brand names, people's names and emails before publishing. Employer name **DX Form PH** is fine to show.

## Goal and rebranding for DX Form PH work (Gab, Nov 21, 2026)

- **Goal of the DX Figma case studies:** show Gab's UX/UI design decisions and thinking, and highlight different design approaches that combine Gab's own thinking with AI-assisted design.
- **PayBridge is DX Form PH work.**
- **Rebranding is allowed** wherever privacy matters, on all DX projects: give the product a neutral name, swap or mask logos, and replace client, company, hospital and people names and IDs with fictional ones. The focus is the decisions (audit → findings → fewer steps, consolidation, coverage, systems), not the client.

## Goal for the DX Form Figma work (Gab, Nov 21, 2026)

- **Purpose:** show Gab's UX/UI design decisions and thinking, and highlight a *different design approach in each project*, all combining Gab's own design thinking with AI-assisted design.
- **PayBridge is a DX Form product,** not a client's.
- **Privacy rule for every DX project:** hide branding wherever privacy matters (client names and logos, real companies, hospitals, people, usernames, IDs). The decisions and thinking are the point; the brand is not.

## Projects

### 1. PM Assistant App
- **Live URL:** https://pm-assistant-app-delta.vercel.app/
- **Figma:** none (built directly with AI)
- **Status of review:** Viewed and screenshotted on Nov 21, 2026 (all 7 pages, desktop + mobile). Loads publicly, no login.
- **What it is (from the live site):** "PM Assistant: Research made clearer." A personal research workspace that walks a PM through Ask → Collect → Understand → Decide. Data is saved in the browser, with export/restore backup.
- **Pages:**
  - `/` Dashboard: "Make your next move clear." Next-move cards, progress stats, research progress, channel snapshot, validation checkpoints (interview coverage, pain + budget evidence, channel reply signal, pilot checkpoint).
  - `/research` Research & Validation: research brief, synthetic sample, import workspace, Persona Profile (seven-column buyer profile). Tagline: "A clear path from 'I think' to 'here is what we know.'"
  - `/tracker` Research Tracker: 26 starter questions across areas (Buyers, Pricing, Channels, Competitors, etc.), owner filters (PM / Designer / Dev), cards and table views.
  - `/outreach` Outreach: CSV import, message templates, pipeline from Identified to Proposal requested, follow-ups on days 4 / 9 / 16.
  - `/interviews` Interviews: 30-minute, six-stop interview guide (21 questions), interview log, CSV export.
  - `/findings` Findings: decision makers, reported budgets, channel performance, segment profiles, with sample-size caveats.
  - `/guide` How to use: visual onboarding guide and PM terms.
- **Design notes:** calm green palette, sidebar nav, numbered step flows, honest-evidence copy ("Evidence before certainty"), skip-to-content link, responsive mobile menu.
- **Context:** Personal AI-assisted build (see Context above). No Figma.
- **Still needed for the case study:** role, context and users, problem, key decisions, outcome, permission to show.

### 2. BotikaBantay
- **Live URL:** https://web-eight-xi-tc0dhj19wa.vercel.app/
- **Figma:** none (built directly with AI)
- **Status of review:** Viewed and screenshotted on Nov 21, 2026 (home, 7 inner pages, mobile home). Loads publicly.
- **What it is (from the live site):** "BotikaBantay: Presyo na Tama, Gamot na Tunay." A Filipino medicine price-comparison and catalog-check web app (Taglish copy). Compares prices across Mercury Drug, Watsons, Rose Pharmacy, Generika and South Star Drug, and checks barcodes / FDA registration numbers against its own catalog of FDA-registered products (the site states it is not a live FDA API).
- **Pages:** `/` landing (hero search, quick chips, stats, "Two problems, one solution", How it works, partner pharmacies, testimonials); `/medicines` Price Check; `/submit` Submit Price (3-step: medicine → branch → price); `/scanner` Verify (manual lookup, camera scan, bulk verify up to 20 codes, recent checks saved on device); `/nearby` Nearby pharmacies (needs location); `/report` Report a suspicious medicine; `/login`, `/register`.
- **Issue found:** Price Check is broken right now. `/api/medicines` returns HTTP 500, so `/medicines` shows "Failed to load medicines", and the home search leads to the same error.
- **Copy to check before featuring:** landing page shows testimonials (Maria S., Juan D., Lola Rosa), "Trusted by Filipino families", and "100% FDA Verified". Confirm whether these are real or placeholder; if placeholder, label or leave them out of the case study.
- **Context:** Personal AI-assisted build (see Context above). No Figma.

### 3. Hopamine
- **Live URL:** https://hopamine.vercel.app/
- **Figma:** none (built directly with AI)
- **Status of review:** Viewed and screenshotted on Nov 21, 2026 (welcome screen, 6 sections, mobile). Loads publicly; runs as a "Browser demo" saving only on the device. No errors found.
- **What it is (from the live site):** "Hopamine: Little Steps Club. Your steps. Your little world." A cozy, gentle walking app. Real-world steps move an illustrated companion (Hoppit "The Clover Explorer" or Luma "The Moonflower Wayfarer") along a storybook trail. Tone: "No streaks. No rush. Just you."
- **Sections:**
  - Welcome: choose a companion, which sets the companion and color theme.
  - Adventure: "A little walk. A little wonder." Today's steps vs. goal, last 7 days, daily check-in (self-reported steps + optional reflection), XP.
  - Walk: optional private GPS walk recording, with consent copy that explains the location-privacy risk and keeps routes in the browser only.
  - Journey: 4 chapters (Clover Grove, Misty River, Starlit Highlands, Moonflower Peaks), 16 discoveries unlocked by distance.
  - Rewards: "practice coins" (cosmetic only, no money) for wardrobe and scenery items.
  - Badges: keepsake badge book, "No races. No comparison."
  - Profile: companion, daily step goal (1,500–10,000), reminders.
- **Design notes:** original illustrated characters, serif + soft green palette, anti-pressure wellness design (no streaks, rest is welcome), clear privacy and data copy, responsive.
- **Context:** Personal AI-assisted build (see Context above). No Figma.

### 4. Stride Strength
- **Live URL:** https://stride-strength-zeta.vercel.app/
- **Figma:** none (built directly with AI)
- **Status of review:** Not viewable on Nov 21, 2026. The URL redirects to a Vercel login page because Vercel Authentication (Deployment Protection) is on, so visitors and recruiters can't open it either.
- **Next step:** Gab to turn off Deployment Protection for production, or approve a temporary 23-hour share link through the Vercel connector.
- **Context:** Personal AI-assisted build (see Context above). No Figma.

### 5. SALPAK
- **Live URL:** https://bai-and-sil.vercel.app/ (project slug "bai-and-sil"; product name SALPAK)
- **Figma:** none (built directly with AI)
- **Status of review:** Viewed and screenshotted on Nov 21, 2026 (home, categories, search, listing detail, safety, login, register, mobile). Loads publicly; selling, messages and profile need an account.
- **What it is (from the live site):** "SALPAK: Find stuff. Sell stuff. Repeat." / "Hanap, Benta, I-repeat!" A Filipino C2C marketplace for pre-loved items: free listing, zero commission, direct chat, meet-up in public places. Taglish copy; navy and gold brand; the site explains the name ("salpak" = the moment a deal lands) and the logo (arrow hitting a bar).
- **Features seen:** 12 categories; search with filters (category, ~50 PH cities, condition, price range), sort, save search, favorites; listing page with share, Message Seller, Make an Offer, Notify me, report flag, seller card and Trust Tips; Safety Tips page; register asks "I want to buy / I want to sell"; Google sign-in; mobile bottom nav (Home, Explore, Sell, Messages, Profile).
- **Issues found:**
  - Many listings show "No Image", and some Pexels photo links return 404. The listing page I opened shows a broken image with alt text.
  - Trust Tips bullets show garbled characters ("â€¢") instead of "•", an encoding bug.
  - Listings are demo/seed data (e.g. "Pia the Seller", 239 listings). Fine for a demo, but present it as sample data.
- **Context:** Personal AI-assisted build (see Context above). No Figma.

### 6. Lucid
- **Live URL:** https://lucid-omega-red.vercel.app/ (redirects to `/login?next=%2F`)
- **Figma:** none (built directly with AI)
- **Status of review:** Only the sign-in and sign-up pages are viewable (screenshotted Nov 21, 2026). Every other route redirects to login.
- **What it is (from the live site):** "Lucid: UX/UI Assessment." Sign-in copy: "Continue your UX/UI assessments." Sign-up: "Start structured UX/UI assessments in minutes." (name, email, password). Clean, minimal monochrome UI with a purple accent.
- **Next step:** Gab to share demo login details, or approve Claude creating a test account through sign-up.
- **Portfolio note:** recruiters will hit the login wall too. Consider a demo account, a "Try demo" button, or a public landing page.
- **Context:** Personal AI-assisted build (see Context above). No Figma.

### 7. DX Design System (DX Form PH work)
- **Live URL:** https://dx-design-system.vercel.app/
- **Figma:** linked from the site header ("DX Design System" Figma file). **GitHub:** linked from the site header (`DX-Gamores/dx-design-system`).
- **Status of review:** Viewed and screenshotted on Nov 21, 2026 (home, dark mode + Customize, components, Button, tokens, themes, foundations, icons, AI patterns, starter app, governance, mobile). Loads publicly; no errors found.
- **What it is (from the live site):** "Build DXFORM products in any brand." v3.2.0. Tokens, components and patterns from the DX Figma library as React code; install via the shadcn CLI, copy, or download. "No Figma seat needed."
- **Stats stated on the site:** 63 components (Figma ↔ code parity 63/63), 567 tokens in 9 collections and 4 tiers (Primitive 250, Brand 51, Semantic 122, Component 28), 3 brands (Default·Inter, Violet·Manrope, Amber·Poppins) × 4 color modes (light, dark, light-HC, dark-HC) × 2 densities, 69 DX icons on Lucide, React Native theme file, "Build with AI" (llms.txt, Markdown pages, rules), governance model with 3 ownership tiers and a 6-step request-to-release flow, 80/80 WCAG 2.2 checks and 324/324 contrast checks, "Synced from Figma Nov 12, 2026".
- **Sections:** Get started (Installation, React Native, Figma to code, Build with AI, Downloads, Changelog); Foundations (color/type/space, data viz, content guidelines, localization & RTL, icons); Token explorer; Components; Patterns (Form, AI); Product kit (templates, starter & empty states, examples, Next.js starter app); Themes; Contribute (governance, working with one seat, cleanup checklist).
- **Permission / privacy:** This is DX Form PH company work. Confirm employer permission before featuring it. The starter app shows sample people with @dxform.ph emails; confirm they are fictional before using screenshots.
- **Context:** Gab's own initiative as DX Form PH's first in-house UX/UI designer (while PM).
- **Still to confirm:** OK to feature publicly; solo or with help; which products/teams use it.

## DX Form PH: Figma designs and redesigns

Gab's note: most screens come from Gab's own design thinking, with AI helping to produce them faster.

### 8. Intellicare Employee Center: v2 redesign (dev handoff)
- **Figma:** https://www.figma.com/design/eLJw7KVvwf0ZkIyUeGy9k8/ (reviewed read-only on Nov 21, 2026). Cover reads "Prepared by Gab D · DXFORM", updated Oct 21, 2026. Source: the v1 "For Dev" page plus a v2 prototype made with Claude Design.
- **What it is:** An internal payment-request system for employees: cash advances, reimbursements, general requests and cash-advance liquidation, moving through a multi-stage approval chain to Accounting & Treasury.
- **File structure (80 screens):** Read Me; 01 Foundations (IBM Plex Sans, green #179A48, semantic color variables, 4px grid, radius, elevation); 02 Components (icons, buttons, 7-tone status tags, form fields × 4 states, sidebar in 4 role versions, top bar, toast, status tracker, tables); 03 Flow Map; 10 Auth (4 flows); 20 Employee (6 flows); 30 Approvers (4 flows); 40 Accounting & Treasury (2 flows); 50 Admin (5 flows); 90 Gap Report v1→v2. Each screen has a yellow dev-note card (purpose, entry point, actions → result, status change, validation, API, what changed from v1).
- **Roles:** Employee (requester); stage roles (Verifier, Confirmer, Noter, Approver); Accounting & Treasury; Main Admin Approver.
- **Flow map:**
  - Role → screens map.
  - Payment request lifecycle: For Verification → For Confirmation (optional) → For Noting → For Approval (skipped by auto-approval) → At Accounting → Processing → Closed, or For Liquidation for cash advances. Returned and Cancelled can be reached from any active stage.
  - Liquidation lifecycle.
  - One canonical status list with DB keys.
- **Gap Report (before → after):** 13 items covered by v2, 6 partial and completed here, 7 missing and designed here.
  - 9 role login frames → 1 sign-in that redirects by role.
  - 20+ admin dashboard copies → Overview + stage-based queue.
  - 18 Validate page copies → 1 detail layout whose main button is the current stage's action.
  - 24 confirm-screen frames → 1 dialog pattern.
  - 16 multi-approval frames → checkbox bulk select.
  - 9 edit variants → 1 edit-and-resubmit screen.
  - 3 inconsistent status legends (11/10/7 statuses, including the "Retured" typo) → 1 canonical list.
  - Added: forgot password, lockout, invite setup, session expired, 403; employee home with a plain-language 5-step tracker ("where is my money?"); scoped queues per stage role; accounting queue; tax/withholding editing; full liquidation form; requester cancel.
  - 8 open questions listed for stakeholders (e.g. cancel rules, 2% withholding default, 15-day liquidation rule, mobile scope).
- **Privacy, must fix before publishing:**
  - Client brands are real: Intellicare and Aventus (logo, "Aventus Library", @aventus.ph emails). Get permission to name the client, or relabel and blur.
  - Sample people look fictional (e.g. Marcus Thorne, Alex Santos, Maria Cruz) but use @aventus.ph emails. Replace them with clearly fictional names and emails, or blur.
  - Amounts and references (PR-26-01xx) are made up.
- **Screenshots saved:** read me, flow maps, sign-in, EMP-01/03/11, APR-02/04, stage dialogs, bulk action, ACC-01/03, ADM-01/40/50, foundations, components, gap report.

### 9. Budget management system ("BMS Insight") redesign (dev handoff)
- **Figma:** https://www.figma.com/design/u9mw3pmgaK0t14pjk5qKmL/ (reviewed read-only on Nov 21, 2026). Built from a Claude Design prototype ("BMS Insight Redesign v2") and compared screen by screen with the old "For Dev" Figma page. No author name or date in the file.
- **Portfolio name:** "Budget management system" for a healthcare company. **Do not use the client name.**
- **What it is:** An internal budget management system. Yearly cycle: open a fiscal year → allocate budget to departments → departments plan budgets with line items → Management approves → publish to the employee portal and ERP (NetSuite) → sync purchase requests and purchase orders and match them to budget lines → reports.
- **Roles:** Administrator, Finance Admin, Management (single approver), Dept Head (budget owner).
- **File:** 18 pages, about 115 screens. Read me, Flow map, Old → New mapping, Foundations (IBM Plex Sans/Mono, color primitives + semantic tokens, 46 text styles, spacing/radius/elevation), Components (sidebar ×8, button, badge, input, tab, alert, KPI card), then module pages Auth, Overview, Fiscal year, Budgets (25 screens), Approvals, Publications, Procurement (new), Reports (9 reports), Notifications, Users & roles, System states (toasts, 403/404/500, offline, session expired, skeleton, no results), Responsive (tablet 1024 + mobile 390), Icons (116 Lucide).
- **Old → New (before/after):**
  - ~190 old frames, about 110 of them near-duplicates → 115 unique screens (60 from the redesign + 55 new ones that close gaps).
  - 27 mapping rows: 4 merged, 1 rebuilt, 12 redesigned, 3 replaced, 1 removed, 2 new, 3 kept and restyled, 1 open question.
  - Examples:
    - 12 login copies → 1 SSO-first sign-in with locked and no-access states.
    - 14 Submit/Pending copies → a confirmation step plus an In-review detail with a stepper and activity log.
    - ~25 copies of the sync wizard → a 3-step sync with a failure state.
    - The separate "Activate" step was removed: approval now makes a budget Active.
    - Floating filter panels → inline filters.
    - Save As Draft → autosave.
    - Custom roles → 4 fixed roles with a permission matrix and audit log.
    - Reports organized by the question they answer (8 report bodies newly designed).
  - Decisions: kept procurement monitoring and Cost vs Quantity tracking that the AI redesign had dropped; added department and cost-center setup (the root cause of a failed delivery in the sample data).
  - 6 open questions for stakeholders.
- **Flow map:** swimlanes per role plus external systems, 8 stages (Access → Fiscal year → Allocate → Plan → Review → Publish → Track spending → Report); state machines for budget, publication, PR/PO line and fiscal year.
- **Privacy, must fix before publishing:** client logo and name on many screens ("…SSO", "Use your … work account"); @[client domain] emails; placeholder names (e.g. Rafael Ong, Maria Santos, Carlo Mendoza, Dr. Jose Reyes, Paolo Garcia, Grace Uy). Amounts are mock data. NetSuite is a third-party product name (OK to mention generically as "ERP").
- **Screenshots saved:** readme, flow map, old→new mapping, foundations, semantic colors, sidebar component, sign-in, overview, fiscal year, budget list, budget detail, approvals queue, approve dialog, publications, procurement overview, sync review, Budget vs Actual, roles & permissions, 500 page, mobile budget detail.

### 10. NVQS: non-voice call-center queue, UX audit + redesign + brand identity
- **Figma:** https://www.figma.com/design/5GHlTcybKUDsT9wci6CrCN/ (reviewed read-only on Nov 21, 2026). Pages: Brandbook – Non-Voice, Version 1 Screen (22 old screens), Version 2 · Redesign.
- **Portfolio name:** "Non-voice queueing system" for a healthcare company's call center. **Do not use the client name.**
- **What it is:** An internal web app. Call-center agents approve healthcare requests that arrive by chat, email or portal instead of by phone. Flow: log in → dashboard (live queue + agent status) → start approval → review member, procedures, documents and references → place on hold / disapprove / approve.
- **Audit:** "Same flow, fewer steps." **52 findings across 22 screens**: 12 high, 27 medium, 13 low; 28 UX, 11 UI, 13 accessibility (checked against the brandbook and WCAG 2.2 AA). Each card has an ID, severity, description and the fix that resolves it.
  - Examples:
    - Opening a request took 4 steps (copy ID → dialog → paste → start), and clicking a row did nothing.
    - "Tabs" that each opened a blocking modal.
    - Procedures hidden behind a toggle.
    - The decision bar 1,150–1,480px down the page.
    - No comparison of the total against the member's limit.
    - A shouting empty state ("NO SPIELS FOUND! … !!!").
    - Text at 9.5–11px; labels at 3.47:1 contrast; a hold button at 1.53:1.
    - Five spellings of one identifier.
- **What gets shorter (V1 → V2):**
  - Open a request: 4 steps → 1.
  - See procedures: 2 → 0.
  - Check benefit limit: 4 → 0 (pinned).
  - Reach the decision: a full-page scroll → 0 (pinned bar).
  - Look up utilization/contract: 3 → 1 (side panel, request stays visible).
  - Check spiels: 3 → 0.
  - Approve: a blind confirm → a summary dialog (member, procedures, total, limit check).
  - Hold/disapprove: a dropdown covering the field → a checklist plus verb buttons.
- **Redesigned screens:** R2.1 dashboard queue, R2.2 start dialog, R3.1 approval workspace, R3.2 document preview, R4 reference panel (Member / Utilization / Contract / Spiels), R5 decision dialogs. Developer notes cover what's kept, new patterns, rules (sentence case, nothing under 11px, every text pair ≥ 4.5:1, data model unchanged) and what's deferred.
- **Brand Identity 2.0 (NVQS logo):** a Q drawn as an open SLA ring with three typing dots (chat, email, portal); a forward tail sends the next request on. N·V = typing dots, Q = ring/SLA clock, S = forward tail. Construction grid, colour versions, app icon/favicons, motion (the mark doubles as a loader), wordmark, misuse rules. Plus color, type, spacing, icon and component boards.
- **Privacy, must fix before publishing:**
  - The client logo is in every screen header.
  - The brand rationale mentions the client's ▶ (describe it as "the client's play glyph").
  - Real corporate account names (e.g. a global consulting firm and a logistics company) appear in queue tabs and member fields.
  - Real hospitals with addresses.
  - Placeholder patient, member and doctor names.
  - An agent username and staff-like initials.
  - Synthetic IDs and account numbers.
  - Mask the logo and swap these texts.
  - Ask Gab whether the NVQS brand identity can be shown (it is built around the client's brand).
- **Screenshots saved:** V2 summary, what-gets-shorter table, findings (Start & Approval), developer notes, R2.1, R2.2, R3.1, R3.2, R4 panel states, R5 dialogs, V1 dashboard, V1 long approval page, V1 member pop-up, brand identity hero, primary lockup, name-to-mark, semantic colors, buttons, queue panel.

### 11. PayBridge: earned-wage-access product (DX Form PH product)
- **Figma:** https://www.figma.com/design/cjwc6Hc458I8cbcXZEVZLw/ (reviewed read-only on Nov 21, 2026). DX Form's own product, not a client's.
- **What it is:** A Philippine earned-wage-access ("cash advance") product. Employees get pay they've already earned before payday, for one flat 5% fee and no interest, repaid by one payroll deduction. Employers pay no platform fee, and take-home pay never drops below the regional minimum wage.
  - Landing H1: "Your pay, on your schedule."
  - Tagline: "Mabilis. Ligtas. Maaasahan."
  - For: employers/HR at eligible companies (3+ years operating, bank payroll, 50+ regular employees) and their employees.
- **Surfaces:**
  - Admin back office: about 44 frames (dashboard, companies, company detail, reports, accounting top-ups, notifications, sign-in).
  - Owner/HR portal: about 55 (dashboard, employees, cash advances (19), billing & payroll calendar, emails, re-access, company settings incl. auto-approval and cooling period).
  - Employee web: about 55 (audit, redesign v2 E1–E33, sign-in, onboarding).
  - Employee mobile: 50+ (request, re-access, history & spending notes, notifications, profile, sign-in, onboarding with salary-deduction authorization, My payroll).
  - Website & marketing: overview, audit, landing flow, desktop and mobile landing, blog and article, before→after, contact, 3 download-page versions, a 60-second marketing video in 9 scenes, AI-generated photography.
  - Design System: App UI kit v2 + brand foundations.
- **PM / design-ops layer (Cover & Index):** reorganized Nov 4, 2026 from 13 pages to 9, 349 old frames archived, 62 new screens closing gaps. Includes a naming convention, a Dev Mode status workflow, a feature × role coverage table, and an "Open items for PM" checklist.
- **Audits and before/after:**
  - Marketing site audit: 48 findings (15 high, 24 medium, 9 low).
    - Two competing heroes → one.
    - No employee path → "I'm an employee".
    - Product never shown → real app screens.
    - Vague pricing → ₱0 employer fee, fee shown before confirming.
    - "How it works" for HR only → split employee/employer.
    - Investor-speak blog ("blockchain-powered lending") → money tips for workers.
  - Compliance accuracy pass against an EWA parameters draft:
    - Removed an unverified "SEC-regulated lender" badge.
    - Installments → a single payroll deduction.
    - Fee stated plainly.
    - New "Five checks before every payout" section.
    - Employer eligibility stated.
  - Hero v2 "Salary advance your team can count on." → v3 "Your pay, on your schedule."
  - Employee web audit: 72 findings (23 high, 33 medium, 16 low).
  - v2 rules:
    - "Cash advance", never "loan".
    - One primary action per view.
    - Amounts in a mono font.
    - Status always has a text label, not colour alone.
    - Spending plans are private from employers.
- **Known inconsistency to mention or avoid:** the app screens still show 1–3 payday installments, while the v3 marketing site says one deduction (flagged in the file as "App screens: replace installment plans").
- **Privacy:**
  - Use only the v2 redesign pages and website screens. Sample companies, people and amounts there look fictional.
  - Avoid Dev Handoff v1, the M6 exploration, the "00 · Reference current screens" sections, v1-look frames and the Brand foundations text. These contain a former product name, the studio's own name and emails, and real-looking personal Gmail addresses and phone numbers.
  - Testimonial is a placeholder pending consent.
  - Real banks/e-wallets (BDO, GCash) appear only as payout methods.
- **Screenshots saved:**
  - Website: landing hero v3, before/after hero & blog, full landing page (overview only).
  - Admin: A1 dashboard, A3 company overview.
  - HR: O2 dashboard, O3 employees, O4 approve dialog.
  - Employee web: E1 home, E2 request amount, E5 spending plan.
  - Mobile: home, request, My payroll, onboarding authorization.
  - Design system: UI kit data display, brand colors, logo page (its subtitle mentions an old name; crop before use).

### 12. Budget Monitoring System (construction): UX audit + redesign
- **Figma:** https://www.figma.com/design/ZRFWhd8CghYjBZ0Xlu9qxv/ (reviewed read-only on Nov 21, 2026). The "Editing Screens" page is empty. Pages: Version 1, For Dev, Brandbook, UX Audit, Redesign Design System, 01 Sign In to 08 Account Profile.
- **Portfolio name:** "Budget monitoring system for construction teams". Not the same product as #9 (the healthcare budget management system).
- **What it is:** A web admin app tracking construction project budgets in ₱.
  - Flow: sign in → dashboard → projects → project detail → contractor & contract → add payment / record receipt → reports.
  - Roles: Admin, Engineer, Viewer, with permission codes.
  - Covers renovation and fit-out projects, labour and supply contractors, contracts, budget adjustments, POs and supply receipts, payments (check/cash, VAT), reports.
- **Audit (Nov 5, 2026):** 28 findings, all resolved in the redesign (28/28). 3 critical, 13 major, 12 minor; 11 UX, 8 UI, 9 accessibility; benchmarked against the brandbook and WCAG 2.2 AA.
  - Critical findings:
    - Numbers contradicted each other (8.7% progress while ₱777k of ₱1M was spent; ₱13.8M in reports on a ₱1M project). → One formula (spent ÷ budget) everywhere, and totals that reconcile.
    - A guest account had Admin, and roles could be changed inline without confirmation. → Change role via a confirm-with-reason dialog; external users default to Viewer.
    - White on green badges at about 2.3:1 contrast. → Semantic tokens that pass AA.
  - Other findings:
    - Broken wayfinding (top bar always said "Dashboard").
    - A Delete icon on every row → View + overflow menu, delete by typing the project name.
    - A ~1,600px payment modal with Save at the top → a 3-step flow with a sticky footer, method-aware fields and a review step showing budget impact.
    - Variance done by typing a minus sign → an Adjust budget dialog with Increase/Decrease, reason and preview.
    - The brandbook wasn't connected to the screens (0 components, 0 variables) → 30+ components.
    - Mono, right-aligned amounts.
    - Icon-only buttons, colour-only meaning, text under 14px, 16px targets, no focus states.
    - Typos ("Avalable", "Over Budet", "Contrator").
- **Before → after:**
  - Dashboard: 6 flat KPIs + donut → 4 stat cards, labelled bars, "Needs attention" + recent payments, table sorted by % used.
  - Projects: icon soup → View + overflow menu, status tabs with counts.
  - Payments: 1 long form → a 3-step flow + details drawer.
  - Heavy blue hero → calm header with tabs.
  - User management: inline role dropdown → change-role modal; roles and permissions merged.
  - Profile: two-step verification and active sessions added.
  - Scale: 12 screens + ~44 fragments → ~20 screens + ~30 modals, all built from components.
  - Every redesign page has "What changed" and "Accessibility" note cards.
- **Design system:**
  - Brandbook: bar-chart mark; personality "Trustworthy not cold, Confident not arrogant, Calm not boring, Empowering not paternalistic"; primary #2563EB; Inter for UI and JetBrains Mono for amounts; 4px grid.
  - Redesign system: 46 Lucide icons, core + pattern components (Stat Card, Table cells incl. Amount, Pagination, Step, Choice Card…) + additions (Spinner, Checkbox, Textarea, Toast, Tooltip, Menu, Empty State).
- **Link to DX Design System (#7):** the Payments page also has a "DX ·" version rebuilt only from DX Design System library components and tokens. This is evidence the design system is used in real product work.
- **Privacy, must fix before publishing:**
  - Real-looking project and client names on almost every screen ("Golden Phoenix…", "Consulate … – NRA", "Area 51").
  - Contractor names.
  - The signed-in admin name and other names.
  - A personal Gmail address in the old screens, also quoted inside audit finding UX-10 (visible in the audit screenshots).
  - Product placeholder domain @bms.com is fine.
  - Leftover personal-finance template copy in the brandbook; keep it out.
- **Screenshots saved:** audit overview, findings (all, UX, UI, a11y), design system core + patterns, brandbook brand + color, sign-in, dashboard, projects, project detail, contractor payments, payments list, add-payment flow, roles & permissions, account profile, V1 dashboard, V1 projects, For Dev long payment form, For Dev contractor, DX-system payments variant.
