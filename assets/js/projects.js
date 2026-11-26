/*
  Portfolio content: every project lives here.

  To add or update a project, edit the lists below. No build step is needed.
  - `featured`  : full case studies (each has its own page in /work/).
  - `dx`        : work at DX Form PH. Client names, people and data are hidden.
  - `personal`  : personal builds made with AI assistance.

  Images go in /assets/img/work/. Use descriptive file names and write `alt`
  text that describes the screen. Never put a client's name in text, file
  names, alt text or captions.

  To promote a card to a full case study: copy /work/dx-design-system.html,
  write the new page, then move the item into `featured` with a `page` link.
*/

window.PORTFOLIO = {
  featured: [
    {
      id: "dx-design-system",
      code: "CASE-01",
      title: "DX Design System",
      context: "My own initiative at DX Form PH",
      approach: "One design file, any brand, and only one Figma seat",
      summary:
        "When I came back to DX Form as its first in-house UX/UI designer, there was no shared design system for the products we build. I started one that any team can build from, in any client's brand, without needing a Figma seat.",
      facts: [
        { value: "63", label: "components, designed and coded" },
        { value: "567", label: "tokens behind every color and size" },
        { value: "12", label: "themes: 3 brands × 4 color modes" }
      ],
      page: "work/dx-design-system.html",
      live: "https://dx-design-system.vercel.app/",
      image: {
        src: "assets/img/work/dx-design-system-home.webp",
        alt: "DX Design System documentation home page: a headline reading 'Build DXFORM products in any brand', an install command, and sample stat cards."
      }
    }
  ],

  dx: [
    {
      id: "nvqs",
      code: "NVQS",
      title: "Non-voice queueing system",
      context: "Call-center tool for a healthcare company",
      year: "2026",
      kind: "Audit and redesign",
      approach: "Audit first, then measure the redesign in steps saved",
      summary:
        "Call-center agents approve healthcare requests that arrive by chat, email and portal instead of by phone. I reviewed all 22 screens against the brandbook and WCAG 2.2 AA and logged 52 findings before redrawing anything. The flow stayed the same. The number of steps did not.",
      decisions: [
        { t: "Start from the row.", d: "Opening a request took four steps: copy an ID, open a dialog, paste it, press start. Now every row in the queue has its own Start button." },
        { t: "Keep the request in view.", d: "Reference pop-ups covered the request agents were judging. They became a side panel with real tabs, and the member's benefit limit sits beside the total." },
        { t: "Pin the decision.", d: "Approve and Disapprove sat 1,150 px down the page. The bar is now pinned, and Approve shows a short summary first, so nobody confirms blind." },
        { t: "Make it readable.", d: "No text under 11 px and every text pair at 4.5:1 or better. The hold button alone went from 1.53:1 to 5.03:1." }
      ],
      tags: ["UX audit", "WCAG 2.2 AA", "Information architecture", "Developer handoff"],
      images: [
        { src: "assets/img/work/nvqs-after-approval.webp", alt: "Redesigned approval workspace: request details, a procedures table with a total checked against the member's limit, a reference panel on the right and a pinned decision bar.", caption: "After: everything an agent needs on one screen." },
        { src: "assets/img/work/nvqs-before-approval.webp", alt: "The original approval page: a long page with small text, where the decision buttons sit far below the fold.", caption: "Before: the decision was a long scroll away." },
        { src: "assets/img/work/nvqs-fewer-steps-table.webp", alt: "A table comparing old and new steps for each agent task, such as opening a request going from four steps to one.", caption: "What got shorter, task by task." }
      ]
    },
    {
      id: "construction-budget",
      code: "BMS",
      title: "Construction budget monitoring system",
      context: "Budget tool for construction teams",
      year: "2026",
      kind: "Audit and redesign",
      approach: "Make the numbers trustworthy before making them pretty",
      summary:
        "A tool that tracks project budgets from groundwork to turnover. In the old screens, a project could show 8.7% progress while most of its budget was already spent. I audited it, found 28 issues (3 of them critical), and resolved every one in the redesign.",
      decisions: [
        { t: "One formula everywhere.", d: "Spent ÷ budget on every bar, card and report, with totals that actually add up." },
        { t: "Make risky actions deliberate.", d: "A delete icon sat on every row, and a guest account had admin rights. Deleting now means typing the project name, and changing a role asks for a reason." },
        { t: "Break the long form into steps.", d: "A 1,600 px payment form became three steps that change with the payment method and show the budget impact before saving." },
        { t: "Connect the brand to the screens.", d: "The brandbook had no components behind it. Now there are more than 30, and the payments screen has been rebuilt from the DX Design System library." }
      ],
      tags: ["UX audit", "Data clarity", "Accessibility", "Design system"],
      images: [
        { src: "assets/img/work/construction-budget-after.webp", alt: "Redesigned dashboard with four stat cards, a labelled spending chart, a 'needs attention' list and a projects table sorted by budget used.", caption: "After: the dashboard leads with what needs attention." },
        { src: "assets/img/work/construction-budget-before.webp", alt: "Original dashboard with six equally weighted number tiles, a donut chart and a list of top projects.", caption: "Before: six tiles of equal weight, and numbers that disagreed." },
        { src: "assets/img/work/construction-budget-payment-steps.webp", alt: "A three-step add-payment flow: payment details, method and review, with the budget impact shown before saving.", caption: "The long payment form, now three steps." },
        { src: "assets/img/work/construction-budget-dx-system.webp", alt: "The payments list rebuilt using only DX Design System components.", caption: "The same screen, built from the DX Design System." }
      ]
    },
    {
      id: "agri-fintech",
      code: "DWR",
      title: "Farmer to financing",
      context: "Agri-fintech platform for smallholder farmers",
      year: "2026",
      kind: "Product design and demo",
      approach: "Tell the whole product as one person's story",
      summary:
        "Many rice farmers sell right after harvest, at the lowest price of the year, because they have no safe storage and no cash to wait. This platform lets them store grain at a partner warehouse, receive a digital receipt, and borrow against it. I designed the flows and a clickable demo that follows one farmer from sign-up to a loan in five days.",
      decisions: [
        { t: "Lead with a person, not a feature list.", d: "The demo has four chapters: onboard the farmer, set up the warehouse, issue the receipt, release the loan. Each shows who is acting and what they need at that moment." },
        { t: "Research before redrawing.", d: "For warehouse management I annotated the live screen, compared how other tools handle storage locations, then wrote down six decisions and six open questions before designing." },
        { t: "Agree the rules first.", d: "For field-staff attendance, the team agreed what to flag before anything was drawn: shifts over 8 hours, GPS worse than 100 m, and sync more than a day late." },
        { t: "Speak the farmer's language.", d: "The landing page went from 13 sections to 6, in plain Filipino instead of finance jargon, with a Cebuano switch." }
      ],
      tags: ["Service design", "Prototyping", "Research", "Mobile field app"],
      images: [
        { src: "assets/img/work/agri-fintech-journey.webp", alt: "Cover of the clickable demo showing a farmer persona and a four-step journey from onboarding to a released loan.", caption: "The demo follows one farmer through four chapters." },
        { src: "assets/img/work/agri-fintech-receipt.webp", alt: "An issued digital warehouse receipt showing the grain's value, a progress stepper, a QR code for verification and a log of endorsements.", caption: "The digital receipt the loan is based on." }
      ]
    },
    {
      id: "paybridge",
      code: "PB",
      title: "PayBridge",
      context: "Earned-wage-access product by DX Form",
      year: "2026",
      kind: "Product design across five surfaces",
      approach: "One product, four audiences, one plain promise",
      summary:
        "PayBridge lets employees get pay they have already earned before payday, for a flat fee and no interest. It has an admin console, an HR portal, an employee web app, a mobile app and a marketing site. I reorganized the design file around roles, audited the website and the employee app, and rewrote the promise in plain words.",
      decisions: [
        { t: "Say it the same way everywhere.", d: "It is a cash advance, never a loan, and the fee is always shown before anyone confirms." },
        { t: "Check every claim.", d: "The website audit found 48 issues. We removed a regulator badge we couldn't verify and replaced vague promises with the five checks that happen before every payout." },
        { t: "Give each audience its own door.", d: "The old site only spoke to HR. Employees now have their own path, and the page shows the real app instead of describing it." },
        { t: "Make the file easy to work in.", d: "13 pages became 9, 349 old frames moved to an archive, and one table shows every feature for every role, with an open-items list for the PM." }
      ],
      tags: ["Product design", "Content design", "Web and mobile", "Design ops"],
      images: [
        { src: "assets/img/work/paybridge-landing.webp", alt: "PayBridge landing page with the headline 'Your pay, on your schedule', a short explanation of the flat fee, and buttons for employers and employees.", caption: "The website, rewritten for two audiences." },
        { src: "assets/img/work/paybridge-request.webp", alt: "Employee web app: choosing a cash advance amount, with the fee and repayment shown before confirming.", caption: "The fee is shown before you confirm." },
        { src: "assets/img/work/paybridge-mobile-request.webp", alt: "Mobile app screen for a cash advance request, ready to submit.", caption: "The same request on mobile." }
      ]
    },
    {
      id: "employee-portal",
      code: "EMP",
      title: "Employee payment-request portal",
      context: "Internal tool for a healthcare company",
      year: "2026",
      kind: "Redesign and developer handoff",
      approach: "Map every role and every status before the screens",
      summary:
        "Employees request cash advances and reimbursements, four kinds of approvers move them along, and accounting pays them out. I turned an AI-assisted prototype and the old developer page into an 80-screen handoff file, organized by role and flow, with a note for developers under every screen.",
      decisions: [
        { t: "One list of statuses.", d: "The old system used three different lists (11, 10 and 7 statuses, one with a typo). Now there is one, with the database key, the label and who acts next." },
        { t: "Answer the employee's real question.", d: "Their old home page showed admin numbers. The new one answers 'where is my money?' in five plain steps." },
        { t: "Merge what was copied.", d: "Nine login screens became one that routes by role. Twenty-four confirmation screens became one dialog pattern." },
        { t: "Design the missing parts.", d: "Forgot password, locked account, invitation set-up, expired session and no access: none of them existed before." }
      ],
      tags: ["Flow mapping", "State design", "Developer handoff"],
      images: [
        { src: "assets/img/work/employee-portal-home.webp", alt: "Employee home page with a returned-request banner, two requests tracked in five steps, and an overdue liquidation reminder.", caption: "The employee home answers 'where is my money?'" },
        { src: "assets/img/work/employee-portal-status-flow.webp", alt: "Diagram of a payment request's statuses, from verification through approval and accounting to closed, with returned and cancelled paths.", caption: "Every status, and who moves it." }
      ]
    },
    {
      id: "healthcare-budget",
      code: "BUD",
      title: "Budget management system",
      context: "Internal tool for a healthcare company",
      year: "2026",
      kind: "Redesign and developer handoff",
      approach: "Use the AI prototype, but don't let it decide",
      summary:
        "A yearly budget cycle: open a fiscal year, allocate to departments, plan, approve, publish, then match purchases to budget lines. I compared the old design file with an AI-generated redesign, screen by screen, and recorded what happened to each one and why.",
      decisions: [
        { t: "Count the duplicates.", d: "About 190 old frames, 110 of them near-copies, became 115 unique screens: 60 from the redesign and 55 new ones that filled gaps." },
        { t: "Overrule the prototype when it's wrong.", d: "The AI redesign had dropped procurement monitoring and cost-versus-quantity tracking. Finance needed both, so they came back." },
        { t: "Look for the root cause.", d: "A failed delivery in the sample data traced back to missing department and cost-center set-up, so that screen was designed too." },
        { t: "Remove a step nobody needed.", d: "Approving a budget now makes it active. The separate Activate step is gone." }
      ],
      tags: ["AI-assisted design", "Redesign mapping", "Developer handoff"],
      images: [
        { src: "assets/img/work/healthcare-budget-old-to-new.webp", alt: "A table mapping every old screen to its new version, marked merged, rebuilt, redesigned, replaced, removed, new or kept, with a reason for each.", caption: "What happened to every old screen, and why." },
        { src: "assets/img/work/healthcare-budget-approvals.webp", alt: "Management's approval queue, sorted by days waiting, with overdue budgets flagged.", caption: "One approver, one clear queue." }
      ]
    }
  ],

  personal: [
    {
      id: "pm-assistant",
      title: "PM Assistant",
      what: "A research workspace for product managers: ask a question, collect evidence, look for patterns, then decide.",
      status: "live",
      url: "https://pm-assistant-app-delta.vercel.app/",
      image: { src: "assets/img/work/pm-assistant.webp", alt: "PM Assistant dashboard with a four-step research path and suggested next moves." }
    },
    {
      id: "lucid",
      title: "Lucid",
      what: "Runs structured UX/UI audits from screenshots, with every finding traced back to a standard such as Nielsen's heuristics or WCAG 2.2.",
      status: "login",
      statusNote: "Demo login on request",
      url: "https://lucid-kaiba-corp.vercel.app/",
      image: { src: "assets/img/work/lucid.webp", alt: "Lucid's criteria database listing Nielsen's ten heuristics with how each one can be checked." }
    },
    {
      id: "botikabantay",
      title: "BotikaBantay",
      what: "Compares medicine prices across pharmacies and checks codes against a catalog of FDA-registered products.",
      status: "live",
      url: "https://web-eight-xi-tc0dhj19wa.vercel.app/",
      image: { src: "assets/img/work/botikabantay.webp", alt: "BotikaBantay home page with a medicine search and quick picks such as Paracetamol and Biogesic." }
    },
    {
      id: "hopamine",
      title: "Hopamine",
      what: "A gentle walking app: real steps move a small companion along a storybook trail. No streaks and no pressure.",
      status: "live",
      url: "https://hopamine.vercel.app/",
      image: { src: "assets/img/work/hopamine.webp", alt: "Hopamine home screen with an illustrated companion on a moonlit trail and a daily step check-in." }
    },
    {
      id: "salpak",
      title: "SALPAK",
      what: "A marketplace for pre-loved items: free to list, no commission, and deals made in a public place.",
      status: "live",
      url: "https://bai-and-sil.vercel.app/",
      image: { src: "assets/img/work/salpak.webp", alt: "SALPAK home page in navy and gold with a search bar and sample listings." }
    },
    {
      id: "stride-strength",
      title: "Stride Strength",
      what: "Preview coming soon.",
      status: "private",
      statusNote: "Private for now",
      url: null,
      image: null
    }
  ]
};
