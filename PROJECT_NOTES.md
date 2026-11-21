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

### 3. Hopamine
- **Live URL:** https://hopamine.vercel.app/
- **Figma:** _not yet provided_
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
- **Open questions:** who it's for and why you built it; solo or team, your role (character art too?); tech stack; any users or testing.

### 4. Stride Strength
- **Live URL:** https://stride-strength-zeta.vercel.app/
- **Figma:** _not yet provided_
- **Status of review:** Not viewable on Nov 21, 2026. The URL redirects to a Vercel login page because Vercel Authentication (Deployment Protection) is on, so visitors and recruiters can't open it either.
- **Next step:** Gab to turn off Deployment Protection for production, or approve a temporary 23-hour share link through the Vercel connector.
- **Open questions:** what it is, who it's for, role, stack, outcome.

### 5. SALPAK
- **Live URL:** https://bai-and-sil.vercel.app/ (project slug "bai-and-sil"; product name SALPAK)
- **Figma:** _not yet provided_
- **Status of review:** Viewed and screenshotted on Nov 21, 2026 (home, categories, search, listing detail, safety, login, register, mobile). Loads publicly; selling, messages and profile need an account.
- **What it is (from the live site):** "SALPAK: Find stuff. Sell stuff. Repeat." / "Hanap, Benta, I-repeat!" A Filipino C2C marketplace for pre-loved items: free listing, zero commission, direct chat, meet-up in public places. Taglish copy; navy and gold brand; the site explains the name ("salpak" = the moment a deal lands) and the logo (arrow hitting a bar).
- **Features seen:** 12 categories; search with filters (category, ~50 PH cities, condition, price range), sort, save search, favorites; listing page with share, Message Seller, Make an Offer, Notify me, report flag, seller card and Trust Tips; Safety Tips page; register asks "I want to buy / I want to sell"; Google sign-in; mobile bottom nav (Home, Explore, Sell, Messages, Profile).
- **Issues found:**
  - Many listings show "No Image", and some Pexels photo links return 404. The listing page I opened shows a broken image with alt text.
  - Trust Tips bullets show garbled characters ("â€¢") instead of "•", an encoding bug.
  - Listings are demo/seed data (e.g. "Pia the Seller", 239 listings). Fine for a demo, but present it as sample data.
- **Open questions:** context (personal, school, client, DX Form PH?), team and your role, stack, why you built it, any users or testing.
