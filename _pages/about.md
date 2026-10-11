---
layout: about
title: about
permalink: /
subtitle: AI/MS student at Texas A&M University · Computer vision & human-AI interaction

selected_papers: false # disabled here; rendered in the page body below to control the order
social: false # includes social icons at the bottom of the page

announcements:
  enabled: false # disabled here; rendered in the page body below # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false # disabled here; rendered in the page body below
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit: 3 # leave blank to include all the blog posts
---

<style>
  .rm-wrap { position: relative; overflow: hidden; display: grid; grid-template-columns: minmax(0, 1fr) 340px; gap: 1.25rem 1.5rem; align-items: start; margin: 0 0 1.5rem; }
  .rm-main { display: flex; flex-direction: column; gap: 1.25rem; min-width: 0; }
  .rm-intro { margin: 0; }
  .rm-venn { width: 100%; max-width: 400px; }
  .rm-photo { width: 250px; justify-self: end; }
  .rm-photo img { width: 100%; display: block; }
  .rm-links { display: flex; flex-direction: column; gap: 0.35rem; margin-top: 0.75rem; font-size: 0.9rem; }
  @media (max-width: 767px) {
    .rm-wrap { grid-template-columns: minmax(0, 1fr); overflow: visible; }
    .rm-photo { justify-self: start; }
  }
  .rm-venn svg { width: 100%; height: auto; display: block; }
  .rm-circle { fill-opacity: 0.22; stroke-width: 2; cursor: pointer; transition: fill-opacity 0.15s; }
  .rm-circle:hover, .rm-circle.active { fill-opacity: 0.4; }
  .rm-credit { font-size: 0.9rem; opacity: 0.8; }
  .rm-label { fill: var(--global-text-color); font-size: 15px; font-weight: 600; text-anchor: middle; pointer-events: none; }
  .rm-sub { fill: var(--global-text-color); font-size: 10.5px; text-anchor: middle; pointer-events: none; opacity: 0.8; }
  .rm-hit { fill: transparent; cursor: pointer; }
  .rm-hit:hover { fill: var(--global-theme-color); fill-opacity: 0.18; }
  .rm-hit.active { fill: var(--global-theme-color); fill-opacity: 0.3; }
  .rm-panel { position: absolute; top: 0; right: 0; bottom: 0; width: 340px; z-index: 2; overflow-y: auto; box-sizing: border-box; background: var(--global-bg-color); border: 1px solid var(--global-divider-color); border-radius: 8px; padding: 1rem 1.25rem; box-shadow: -6px 0 24px rgba(0, 0, 0, 0.25); transform: translateX(110%); visibility: hidden; transition: transform 0.3s ease, visibility 0s linear 0.3s; }
  .rm-panel.open { transform: translateX(0); visibility: visible; transition: transform 0.3s ease; }
  .rm-close { position: absolute; top: 0.4rem; right: 0.6rem; border: 0; background: transparent; color: var(--global-text-color); font-size: 1.5rem; line-height: 1; cursor: pointer; }
  @media (max-width: 767px) { .rm-panel { position: static; width: auto; transform: none; box-shadow: none; display: none; visibility: visible; } .rm-panel.open { display: block; } }
  .rm-panel h3 { margin-top: 0; }
  .rm-panel h4 { font-size: 0.95rem; margin: 1rem 0 0.25rem; text-transform: uppercase; letter-spacing: 0.04em; opacity: 0.75; }
  .rm-panel ul { margin-bottom: 0; padding-left: 1.2rem; }
  .rm-buttons { display: flex; flex-wrap: wrap; gap: 0.4rem; margin-bottom: 1rem; }
  .rm-buttons button { border: 1px solid var(--global-divider-color); background: transparent; color: var(--global-text-color); border-radius: 999px; padding: 0.15rem 0.7rem; font-size: 0.85rem; cursor: pointer; }
  .rm-buttons button.active { background: var(--global-theme-color); border-color: var(--global-theme-color); color: var(--global-bg-color); }
</style>

<div class="rm-wrap">
  <div class="rm-main">
    <p class="rm-intro">
      Machine learning systems rest on three pillars: <strong>data</strong>, <strong>machine</strong> (hardware), and <strong>algorithms</strong>. The interesting problems live
      where they overlap. Click a region to see what I care about there and which of my projects touch it.
    </p>
    <div class="rm-venn">
      <svg viewBox="0 0 400 380" role="img" aria-label="Venn diagram of data, machine, and algorithms">
      <circle class="rm-circle" data-r="data" cx="145" cy="140" r="105" fill="#e8a33d" stroke="#e8a33d" />
      <circle class="rm-circle" data-r="machine" cx="255" cy="140" r="105" fill="#4c8dd6" stroke="#4c8dd6" />
      <circle class="rm-circle" data-r="algo" cx="200" cy="235" r="105" fill="#5fb37c" stroke="#5fb37c" />

      <text class="rm-label" x="100" y="100">Data</text>
      <text class="rm-label" x="300" y="100">Machine</text>
      <text class="rm-label" x="200" y="318">Algorithms</text>

      <text class="rm-sub" x="200" y="100">data × machine</text>
      <text class="rm-sub" x="140" y="205">data ×</text>
      <text class="rm-sub" x="140" y="217">algorithms</text>
      <text class="rm-sub" x="260" y="205">machine ×</text>
      <text class="rm-sub" x="260" y="217">algorithms</text>
      <text class="rm-label" x="200" y="165">all three</text>
      <text class="rm-sub" x="200" y="180">robotics</text>

      <!-- clickable overlap regions drawn as small hit targets on top of the circles -->
      <ellipse class="rm-hit" data-r="data-machine" cx="200" cy="108" rx="34" ry="30" />
      <ellipse class="rm-hit" data-r="data-algo" cx="152" cy="207" rx="30" ry="26" />
      <ellipse class="rm-hit" data-r="machine-algo" cx="248" cy="207" rx="30" ry="26" />
      <ellipse class="rm-hit" data-r="all" cx="200" cy="170" rx="30" ry="24" />

    </svg>
    </div>

  </div>

  <div class="rm-photo">
      <img src="{{ '/assets/img/prof_pic.jpg' | relative_url }}" alt="Vasudev Agarwal" class="img-fluid z-depth-1 rounded" />
      <div class="rm-links">
        <a href="https://github.com/Vasudev08" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> GitHub</a>
        <a href="https://linkedin.com/in/agarwal-vasudev" target="_blank" rel="noopener"><i class="fa-brands fa-linkedin"></i> LinkedIn</a>
        <a href="https://scholar.google.com/citations?user=T_bTa7QAAAAJ&hl=en" target="_blank" rel="noopener"><i class="ai ai-google-scholar"></i> Google Scholar</a>
        <a href="mailto:vasu14devagarwal@gmail.com"><i class="fa-solid fa-envelope"></i> Email</a>
      </div>
    </div>

  <div class="rm-panel" id="rm-panel" aria-live="polite">
    <button type="button" class="rm-close" id="rm-close" aria-label="Close details">&times;</button>
    <div class="rm-buttons" id="rm-buttons"></div>
    <div id="rm-detail"></div>
  </div>
</div>

<script>
  (function () {
    var R = {
      data: { title: "Data", blurb: "", interests: [], projects: [], papers: [] },
      machine: { title: "Machine", blurb: "", interests: [], projects: [], papers: [] },
      algo: { title: "Algorithms", blurb: "", interests: [], projects: [], papers: [] },
      "data-machine": { title: "Data × Machine", blurb: "", interests: [], projects: [], papers: [] },
      "data-algo": { title: "Data × Algorithms", blurb: "", interests: [], projects: [], papers: [] },
      "machine-algo": { title: "Machine × Algorithms", blurb: "", interests: [], projects: [], papers: [] },
      all: { title: "All three: robotics", blurb: "", interests: [], projects: [], papers: [] },
    };

    var order = ["data", "machine", "algo", "data-machine", "data-algo", "machine-algo", "all"];
    var buttons = document.getElementById("rm-buttons");
    var detail = document.getElementById("rm-detail");
    var panel = document.getElementById("rm-panel");

    function list(items) {
      return "<ul>" + items.map(function (t) { var li = document.createElement("li"); li.textContent = t; return li.outerHTML; }).join("") + "</ul>";
    }

    function section(label, items) {
      return items.length ? "<h4>" + label + "</h4>" + list(items) : "";
    }

    function select(key) {
      var r = R[key];
      var h3 = document.createElement("h3");
      h3.textContent = r.title;
      var p = document.createElement("p");
      p.textContent = r.blurb;
      panel.classList.add("open");
      detail.innerHTML = h3.outerHTML + p.outerHTML + section("What I care about", r.interests) + section("My projects", r.projects) + section("From my reading list", r.papers);
      document.querySelectorAll("[data-r]").forEach(function (el) { el.classList.toggle("active", el.getAttribute("data-r") === key); });
      buttons.querySelectorAll("button").forEach(function (b) { b.classList.toggle("active", b.getAttribute("data-r") === key); });
    }

    order.forEach(function (key) {
      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("data-r", key);
      b.textContent = R[key].title.replace("All three: ", "");
      buttons.appendChild(b);
    });

    document.querySelectorAll("[data-r]").forEach(function (el) {
      el.addEventListener("click", function () {
        var key = el.getAttribute("data-r");
        if (panel.classList.contains("open") && el.classList.contains("active") && !buttons.contains(el)) closePanel();
        else select(key);
      });
    });

    function closePanel() {
      panel.classList.remove("open");
      document.querySelectorAll("[data-r]").forEach(function (el) { el.classList.remove("active"); });
    }
    document.getElementById("rm-close").addEventListener("click", closePanel);
    document.addEventListener("click", function (e) {
      if (panel.classList.contains("open") && !panel.contains(e.target) && !e.target.closest("[data-r]")) closePanel();
    });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") closePanel(); });
  })();
</script>

<p class="rm-credit">
  Inspiration: the idea of mapping research interests as overlapping areas comes from
  <a href="https://vijay.seas.harvard.edu/research" target="_blank" rel="noopener">Vijay Janapa Reddi's research page at Harvard</a>,
  and the data / machine / algorithms framing from his <em>Machine Learning Systems</em> textbook. The areas, projects, and notes here are my own.
</p>

## [selected publications]({{ '/publications/' | relative_url }})

{% include selected_papers.liquid %}

## [latest posts]({{ '/blog/' | relative_url }})

{% include latest_posts.liquid %}

## [news]({{ '/news/' | relative_url }})

{% include news.liquid limit=true %}
