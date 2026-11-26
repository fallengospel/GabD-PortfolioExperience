/* Renders the work section from projects.js and keeps the page tabs in sync. */
(function () {
  "use strict";

  var data = window.PORTFOLIO;

  function el(tag, attrs, children) {
    var node = document.createElement(tag);
    if (attrs) {
      Object.keys(attrs).forEach(function (key) {
        var value = attrs[key];
        if (value === null || value === undefined || value === false) return;
        if (key === "text") node.textContent = value;
        else if (key === "class") node.className = value;
        else node.setAttribute(key, value);
      });
    }
    (children || []).forEach(function (child) {
      if (child === null || child === undefined) return;
      node.appendChild(typeof child === "string" ? document.createTextNode(child) : child);
    });
    return node;
  }

  function img(image, extra) {
    if (!image) return null;
    return el("img", Object.assign({ src: image.src, alt: image.alt, loading: "lazy", decoding: "async" }, extra || {}));
  }

  /* An image that opens full size in a new tab, so details stay readable. */
  function zoomable(image) {
    if (!image) return null;
    return el("a", { href: image.src, target: "_blank", rel: "noopener", class: "zoom", "aria-label": "View full size: " + image.alt }, [img(image)]);
  }

  /* Featured case studies ------------------------------------------------- */
  function renderFeatured(root) {
    data.featured.forEach(function (p) {
      var facts = el("ul", { class: "feature__facts" }, p.facts.map(function (f) {
        return el("li", null, [el("b", { text: f.value }), f.label]);
      }));
      var item = el("article", { class: "work-item", id: "work-" + p.id }, [
        el("p", { class: "frame-name" }, [el("code", { text: p.code }), p.context]),
        el("div", { class: "feature" }, [
          el("div", { class: "feature__media" }, [img(p.image, { loading: "eager" })]),
          el("div", { class: "feature__body" }, [
            el("h4", { text: p.title }),
            el("p", { class: "frame__approach", text: p.approach }),
            el("p", { text: p.summary }),
            facts,
            el("div", { class: "hero__actions" }, [
              el("a", { class: "btn btn--primary", href: p.page, text: "Read the case study" }),
              p.live ? el("a", { class: "btn", href: p.live, target: "_blank", rel: "noopener", text: "Open the live site" }) : null
            ])
          ])
        ])
      ]);
      root.appendChild(item);
    });
  }

  /* DX desk frames -------------------------------------------------------- */
  function renderFrames(root) {
    data.dx.forEach(function (p) {
      var lead = p.images && p.images[0];
      var rest = (p.images || []).slice(1);
      var decisions = el("ol", { class: "decisions" }, p.decisions.map(function (d) {
        return el("li", null, [el("b", { text: d.t }), d.d]);
      }));
      var shots = rest.length
        ? el("div", { class: "more-shots" }, rest.map(function (s) {
            return el("figure", { style: "margin:0" }, [zoomable(s), el("figcaption", { text: s.caption })]);
          }))
        : null;

      var frame = el("article", { class: "frame", id: "work-" + p.id }, [
        el("p", { class: "frame-name" }, [el("code", { text: p.code }), p.kind + ", " + p.year]),
        el("div", { class: "frame__card" }, [
          lead ? el("figure", { class: "frame__media", style: "margin:0" }, [zoomable(lead)]) : null,
          el("div", { class: "frame__body" }, [
            el("h4", { text: p.title }),
            el("p", { class: "chapter__role", style: "margin:0 0 8px", text: p.context }),
            el("p", { class: "frame__approach", text: p.approach }),
            el("p", { class: "frame__summary", text: p.summary }),
            el("ul", { class: "tags", "aria-label": "Skills used" }, p.tags.map(function (t) { return el("li", { text: t }); })),
            el("details", null, [
              el("summary", { text: "What I decided" }),
              decisions,
              shots
            ])
          ])
        ])
      ]);
      root.appendChild(frame);
    });
  }

  /* After-hours builds ---------------------------------------------------- */
  var statusText = { live: "Live", login: "Sign-in required", private: "Private" };

  function renderBuilds(root) {
    data.personal.forEach(function (p) {
      var thumb = p.image
        ? el("div", { class: "build__thumb" }, [img(p.image)])
        : el("div", { class: "build__thumb build__thumb--empty", "aria-hidden": "true", text: "Preview soon" });
      var side = el("div", { class: "build__side" }, [
        el("span", { class: "status status--" + p.status, text: p.statusNote || statusText[p.status] }),
        p.url ? el("a", { class: "btn btn--small", href: p.url, target: "_blank", rel: "noopener", "aria-label": "Open " + p.title + " (opens in a new tab)", text: "Open " + p.title }) : null
      ]);
      root.appendChild(el("li", { class: "build", id: "build-" + p.id }, [
        thumb,
        el("div", null, [el("h4", { text: p.title }), el("p", { class: "build__why", text: p.what })]),
        side
      ]));
    });
  }

  if (data) {
    var featured = document.getElementById("featured-list");
    var frames = document.getElementById("dx-list");
    var builds = document.getElementById("builds-list");
    if (featured) renderFeatured(featured);
    if (frames) renderFrames(frames);
    if (builds) renderBuilds(builds);
  }

  /* Page tabs follow the reader ------------------------------------------- */
  var tabs = Array.prototype.slice.call(document.querySelectorAll(".filebar__tabs a[href^='#']"));
  if ("IntersectionObserver" in window && tabs.length) {
    var byId = {};
    tabs.forEach(function (a) { byId[a.getAttribute("href").slice(1)] = a; });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        tabs.forEach(function (a) { a.removeAttribute("aria-current"); });
        var tab = byId[entry.target.id];
        if (tab) tab.setAttribute("aria-current", "true");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(byId).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  }

  /* Current year ---------------------------------------------------------- */
  Array.prototype.forEach.call(document.querySelectorAll("[data-year]"), function (node) {
    node.textContent = String(new Date().getFullYear());
  });
})();
