# Portfolio Build Handoff: Gabriel Dominic Amores (GabD)

> **For the next Claude session:** Read this whole file before doing anything else. It carries the context from a previous session. Follow the "Instructions for the next session" section first.

---

## 1. Instructions for the next session

1. **Target repository (push here):**
   - GitHub: `https://github.com/fallengospel/GabD-PortfolioExperience`
   - Owner account: `fallengospel`. Repo is currently **empty** (no commits, no branches).
   - Default branch to create: `main`.
2. **Check access before building.** Clone the repo and run a dry-run push of an empty test commit (`git push --dry-run origin main`), then delete the test commit. In the previous session, read access worked but push was refused with *"not in this session's authorized repository set."* If that happens again, tell the user right away. Do not keep retrying. Offer to deliver the site as a zip instead.
3. **Do not confuse it with GitLab.** The user's old code profile is `https://gitlab.com/GabD`. It is **not** the push target. It is only referenced on the old site.
4. **Wait for the user's project list.** The user will send their active and current projects. Do not invent projects, clients, metrics, or results. Ask about anything missing that a case study needs (role, problem, outcome, permission to show).
5. **Build the new portfolio site** in the repo, applying every fix in Section 5. Commit with clear messages. Push only after access is confirmed.
6. Suggested hosting: GitHub Pages or Vercel (static site). Confirm with the user before enabling any deployment.

---

## 2. Who the user is

- **Name:** Gabriel Dominic Amores (goes by "Gab", handle "GabD")
- **Location:** Cebu, Central Visayas, Philippines
- **Current role:** Project / Product Manager (Mid Level) at DX Form PH
- **Background:** Computer Science, front-end development → project management → UX/UI design → product/project management
- **Goal of the portfolio:** Show potential employers a clear, credible story as a **Product/Project Manager with a UX/UI and front-end background**, backed by real case studies.

### Public contact (already on old site)

- Email: amores_dominic@yahoo.com
- LinkedIn: https://www.linkedin.com/in/gabriel-a-543373145/
- Phone is shown on the old site. **Ask the user** whether to keep it on the new one.
- Pinterest is linked on the old site. Ask whether it still belongs.

---

## 3. Verified experience timeline (source: user's LinkedIn screenshots)

| Dates | Role | Company | Type / Location | Summary |
|---|---|---|---|---|
| May 2026 – Present | Project / Product Manager (Mid Level) | DX Form PH | Full-time, on-site, Cebu | Leads cross-functional teams; defines features from user needs and business requirements; primary client contact; design leadership for UI/UX across the product portfolio. Skills: Software Project Management, Product Management. |
| Apr 2025 – Apr 2026 | UX/UI Designer | Talleco | Full-time, remote | Full design process from research and wireframes to high-fidelity UI and developer handoff; design systems; user research and usability evaluations; presents design decisions to stakeholders. Skills: UX Research, Communication. |
| Jan 2021 – Dec 2021 | Graphic Designer | Fiverr | Freelance, remote | Album covers across music genres using Canva and GIMP. Skill: Logo Design. |
| Apr 2018 – Jun 2018 | GIS Mapper (Intern) | See conflict note below | On-site, Calbayog, Eastern Visayas | Manifold GIS; barangay maps; labeled establishments and commercial areas; delineated land and water territories. |

### Roles on the old site résumé page but NOT on LinkedIn

| Dates | Role | Company | Summary |
|---|---|---|---|
| 2021 – 2023 | Front-End Developer | Not named | Web and mobile apps in an agile environment. |
| 2023 – 2024 | Project Manager | Not named | Weekly standups, oversaw web and mobile projects, task coordination, testing, device inventory, OJT program support, bootcamps for external developers. |

**Projects named on the old site (2023 period):** smart parking mobile app, gas hauling web app, beauty and aesthetic web app.

**Ask the user:** company names for the 2021–2024 roles, and whether they were at DX Form PH or elsewhere.

### Skills listed on old site

- Front-end: JavaScript, HTML, CSS, React, React Native, Vue
- Data/API: MongoDB, Hasura GraphQL
- Tools: VS Code, GitHub, GitLab, Canva, GIMP, Manifold GIS
- Design: wireframing, prototyping, user research, usability testing, design systems

---

## 4. Current state of the old portfolio (reviewed Nov 21, 2026)

- Old site: https://amoresdominic.wixsite.com/website (Wix, not updated)
  - About Me: bio says "UX/UI Designer"; timeline entries labeled 2026, 2023, 2021.
  - UI Project page (`/about-5`): nine screenshots across three projects, no case-study text.
    - **Equip Link:** admin login, sidebar, admin inventory page (employee details, device table).
    - **Intern Attendance:** admin login, add-intern form, intern list page.
    - **Fleet Management:** admin login, sidebar, add-driver form.
  - Resume page: "Junior UX/UI Designer (2025 – Present)", no companies named, no education listed. Has a PDF résumé link.
  - Contact page.
- GitLab `GabD`: no bio; project list could not be loaded or verified.
- No GitHub profile was found under the user's name before this repo.

---

## 5. Gaps and lapses to fix in the new portfolio

These come from the previous session's review. Apply all of them.

1. **One consistent headline.** The old site says UX/UI Designer. LinkedIn says Project/Product Manager. Use one positioning everywhere, for example: *"Product & Project Manager with a UX/UI and front-end background."* Confirm the wording with the user.
2. **Name the companies.** DX Form PH and Talleco are missing from the old site. Add them with correct dates.
3. **Fix the timeline conflicts:**
   - Show the 2021–2023 Front-End Developer and 2023–2024 Project Manager roles (get company names).
   - Mark Fiverr (2021) as part-time freelance so it doesn't look like a conflict with the front-end role.
   - **GIS internship conflict:** LinkedIn title says "City Planning Development Office" but its description says "Bureau of Internal Revenue (BIR)". The old site says BIR. Ask the user which is correct and use one.
   - Do not label the current role "Junior". Talleco ended Apr 2026.
4. **Replace screenshots with case studies.** Each featured project should have:
   1. Context and users
   2. Gab's specific role
   3. Problem or constraint
   4. Two or three key decisions, with before/after where possible
   5. Outcome (label estimates as estimates; no invented metrics)
   - Lead with a recent DX Form PH or Talleco project.
5. **Permission and privacy.** Equip Link, Intern Attendance, and Fleet Management look like internal company tools. Confirm permission before showing them. Remove client names, real employee/driver/intern data, and internal system details. Use fictional data where needed.
6. **Code profile link.** The old site's "GitHub" icon actually links to GitLab. On the new site, label links accurately. Link GitHub only if it has something to show. Recommend the user rename `fallengospel` or make sure the profile shows their real name.
7. **Site hygiene:** current copyright year, no dead menu items, clean URLs (no `about-5`), meaningful image file names and alt text, page must be indexable by search engines (old site appeared to be noindex).
8. **Add education** if the user provides it (Computer Science).
9. **Album cover work** is referenced on LinkedIn without a link. Ask whether to include a small gallery or leave it out.

### Worth adding (only with user's go-ahead)

- A sanitized case study from DX Form PH or Talleco (needs employer permission).
- A small public React demo repo rebuilding one UI screen with fictional data, linked from its case study.
- A generic PM artifact (sample roadmap, feature brief, or retro template) with no client details.

---

## 6. Suggested site structure

- **Home / Hero:** name, headline, one-line value statement, CTA to case studies and résumé.
- **Case Studies:** 2–4 detailed projects (from the user's upcoming list).
- **Experience:** the corrected timeline from Section 3.
- **Skills & Tools:** grouped (Product/PM, UX/UI, Front-end, Other).
- **About:** short story of the CS → front-end → PM → UX → product path.
- **Résumé:** downloadable PDF (updated to match the site).
- **Contact:** email, LinkedIn, accurate code-profile link.

Keep it static, fast, responsive, accessible (alt text, contrast, keyboard navigation), and easy for the user to edit later.

---

## 7. Open questions to ask the user

1. Exact headline wording?
2. Company names for 2021–2023 and 2023–2024 roles?
3. GIS internship: City Planning Development Office or BIR?
4. Education details?
5. Which projects to feature, and is there permission to show each?
6. Keep phone number and Pinterest on the new site?
7. Include the album cover gallery?
8. Hosting preference (GitHub Pages, Vercel, other) and a custom domain?
