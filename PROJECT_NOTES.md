# Project Notes (collected before building the portfolio)

Running list of the projects, domains and Figma links Gab shares. The site is built only after Gab says "create the portfolio".

## Projects

### 1. PM Assistant App
- **Live URL:** https://pm-assistant-app-delta.vercel.app/
- **Figma:** _not yet provided_
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
- **Open questions:** Is this a personal project or for DX Form PH? Solo build or team? What tech stack? Why did you build it (the problem)? Any usage or results?
- **Still needed for the case study:** role, context and users, problem, key decisions, outcome, permission to show.

### 2. BotikaBantay
- **Live URL:** https://web-eight-xi-tc0dhj19wa.vercel.app/
- **Figma:** _not yet provided_
- **Status of review:** Viewed and screenshotted on Nov 21, 2026 (home, 7 inner pages, mobile home). Loads publicly.
- **What it is (from the live site):** "BotikaBantay: Presyo na Tama, Gamot na Tunay." A Filipino medicine price-comparison and catalog-check web app (Taglish copy). Compares prices across Mercury Drug, Watsons, Rose Pharmacy, Generika and South Star Drug, and checks barcodes / FDA registration numbers against its own catalog of FDA-registered products (the site states it is not a live FDA API).
- **Pages:** `/` landing (hero search, quick chips, stats, "Two problems, one solution", How it works, partner pharmacies, testimonials); `/medicines` Price Check; `/submit` Submit Price (3-step: medicine → branch → price); `/scanner` Verify (manual lookup, camera scan, bulk verify up to 20 codes, recent checks saved on device); `/nearby` Nearby pharmacies (needs location); `/report` Report a suspicious medicine; `/login`, `/register`.
- **Issue found:** Price Check is broken right now. `/api/medicines` returns HTTP 500, so `/medicines` shows "Failed to load medicines", and the home search leads to the same error.
- **Copy to check before featuring:** landing page shows testimonials (Maria S., Juan D., Lola Rosa), "Trusted by Filipino families", and "100% FDA Verified". Confirm whether these are real or placeholder; if placeholder, label or leave them out of the case study.
- **Open questions:** personal project, hackathon, school, or DX Form PH? Team or solo, and your role? Tech stack (looks like Next.js)? Why you built it? Any users or results?
