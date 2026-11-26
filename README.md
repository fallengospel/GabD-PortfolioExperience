# Gabriel Dominic Amores · Portfolio

A static portfolio site: no build step, no framework. Open `index.html` in a browser, or serve the folder with any static host.

Planned address (GitHub Pages): https://fallengospel.github.io/GabD-PortfolioExperience/

## What's here

| Path | What it is |
|---|---|
| `index.html` | Home: hero, story (five chapters), work, résumé summary, contact |
| `work/dx-design-system.html` | Full case study: DX Design System |
| `resume.html` | Printable résumé |
| `assets/Gabriel-Dominic-Amores-Resume.pdf` | The same résumé as a PDF |
| `assets/js/projects.js` | **All project content.** Edit this file to add or update projects |
| `assets/js/site.js` | Renders the projects and highlights the current section in the top bar |
| `assets/css/site.css` | All styles |
| `assets/img/work/` | Screenshots (WebP). Client details are already masked |
| `PROJECT_NOTES.md` | Research notes on every project, privacy rules and decisions |

## Update a project

1. Open `assets/js/projects.js`.
2. Find the project in `dx` (DX Form work) or `personal` (after-hours builds) and change the text.
3. To add one, copy an existing entry, give it a new `id`, and fill in the fields.
4. Put screenshots in `assets/img/work/` with a descriptive file name, and write `alt` text that describes the screen.

**Privacy rule:** never put a client's name, logo, people, emails or IDs in text, file names, alt text or screenshots. Mask them before adding an image.

## Promote a card to a full case study

1. Copy `work/dx-design-system.html` to `work/<project-id>.html` and rewrite it: context, role, problem, decisions (with before/after), outcome.
2. Move the project from `dx` into `featured` in `projects.js`, and add `page: "work/<project-id>.html"` and `facts`.
3. Add the new page to `sitemap.xml`.

## Update the résumé

Edit `resume.html` and the short résumé list in `index.html`, then regenerate the PDF by opening `resume.html` in a browser and choosing **Print → Save as PDF** (A4). Save it over `assets/Gabriel-Dominic-Amores-Resume.pdf`.

## Publish with GitHub Pages

In the repository on GitHub: **Settings → Pages → Build and deployment → Deploy from a branch**, then pick the branch and `/ (root)`. The `.nojekyll` file is already in place.
