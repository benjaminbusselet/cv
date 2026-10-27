// Génère src/assets/files/cv.pdf depuis src/data/resumeData.js (même
// source que le site), en imprimant une page HTML avec Chrome headless.
// Usage : npm run cv:pdf   (CHROME=/chemin/vers/chrome pour un autre binaire)
import { execFileSync } from "node:child_process";
import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import {
  profile,
  softSkills,
  skillGroups,
  otherSkills,
  experiences,
  formations,
  caseStudies,
  otherProjects,
} from "../src/data/resumeData.js";

const CHROME =
  process.env.CHROME ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const OUTPUT = resolve("src/assets/files/cv.pdf");
const SITE = "benjaminbusselet.github.io/cv";

const fr = (value) => (value && typeof value === "object" ? value.fr : value);
const esc = (text) =>
  String(text).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]);
const t = (value) => esc(fr(value));
const bare = (url) => url.replace(/^https?:\/\/(www\.)?/, "");

const experienceHtml = experiences
  .map(
    (e) => `
    <div class="entry">
      <div class="entry__head"><strong>${t(e.company)}</strong><span>${[e.meta, e.period].filter(Boolean).map(t).join(" · ")}</span></div>
      ${e.title ? `<div class="entry__title">${t(e.title)}</div>` : ""}
      ${
        e.items.length > 1
          ? `<ul>${e.items.map((i) => `<li>${t(i)}</li>`).join("")}</ul>`
          : `<p>${t(e.items[0])}</p>`
      }
    </div>`
  )
  .join("");

const formationHtml = formations
  .map(
    (f) => `
    <div class="entry">
      <div class="entry__head"><strong>${t(f.title)}</strong><span>${t(f.period)}</span></div>
      <p>${t(f.detail)}</p>
    </div>`
  )
  .join("");

const projectsHtml = [
  ...caseStudies.map((p) => ({
    name: p.title,
    url: p.href ?? p.repo,
    text: `${fr(p.kicker)} (${p.stack.join(", ")}).`,
  })),
  ...otherProjects.map((p) => ({ name: null, url: p.href, text: `${fr(p.description)}.` })),
]
  .map(
    (p) => `
    <div class="project">
      ${p.name ? `<strong>${esc(p.name)}</strong> ` : ""}<span>${esc(p.text)}</span>
      <a href="${esc(p.url)}">${esc(bare(p.url))}</a>
    </div>`
  )
  .join("");

const html = `<!doctype html>
<html lang="fr"><head><meta charset="utf-8">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet">
<style>
  @page { size: A4; margin: 0; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { width: 210mm; height: 297mm; display: grid; grid-template-columns: 68mm 1fr;
         font: 9.4pt/1.42 'IBM Plex Sans', sans-serif; color: #242220; background: #faf7f2; }
  h1, h2, h3, strong { font-family: 'Space Grotesk', sans-serif; }
  a { color: #a04f24; text-decoration: none; }
  aside { background: #1c1a17; color: #f3efe8; padding: 14mm 7mm; display: flex; flex-direction: column; gap: 6mm; }
  aside h1 { font-size: 21pt; line-height: 1.05; letter-spacing: .02em; }
  aside .role { margin-top: 2mm; color: #d6cfc4; }
  aside h3 { font-size: 7.6pt; letter-spacing: .14em; color: #c96f34; margin-bottom: 2mm; }
  aside a { color: #f3efe8; }
  aside p, aside li { font-size: 8.6pt; }
  aside ul { list-style: none; display: flex; flex-direction: column; gap: 1.2mm; }
  .tags { display: flex; flex-wrap: wrap; gap: 1.2mm; }
  .tags span { background: #2f2c28; padding: .4mm 2mm; border-radius: 1mm; font-size: 8pt; }
  main { padding: 12mm 10mm; display: flex; flex-direction: column; gap: 4.5mm; }
  main h2 { font-size: 10.5pt; letter-spacing: .1em; color: #a04f24; margin-bottom: 1.6mm; }
  .entry { margin-bottom: 2.4mm; }
  .entry__head { display: flex; justify-content: space-between; gap: 4mm; }
  .entry__head span { color: #6b645c; white-space: nowrap; font-size: 8.6pt; }
  .entry__title { font-weight: 600; }
  .entry p, .entry ul { color: #3d3934; }
  .entry ul { padding-left: 4mm; }
  .project { margin-bottom: 1.4mm; }
  .project a { display: block; font-size: 8.2pt; }
</style></head>
<body>
  <aside>
    <div><h1>BENJAMIN<br>BUSSELET</h1><p class="role">${t(profile.title)}</p></div>
    <section><h3>CONTACT</h3><ul>
      <li>${esc(profile.phone)}</li>
      <li><a href="mailto:${esc(profile.email)}">${esc(profile.email)}</a></li>
      <li><a href="${esc(profile.linkedin)}">${esc(bare(profile.linkedin))}</a></li>
      <li><a href="${esc(profile.github)}">${esc(bare(profile.github))}</a></li>
      <li><a href="https://${SITE}">${SITE}</a></li>
      <li>${t(profile.location)}</li>
    </ul></section>
    ${skillGroups
      .map((g) => `<section><h3>${t(g.title).toUpperCase()}</h3><div class="tags">${g.skills.map((s) => `<span>${esc(s)}</span>`).join("")}</div></section>`)
      .join("")}
    ${otherSkills
      .map((g) => `<section><h3>${t(g.title).toUpperCase()}</h3><ul>${g.items.map((i) => `<li>${t(i)}</li>`).join("")}</ul></section>`)
      .join("")}
    <section><h3>SAVOIR-ÊTRE</h3><ul>${softSkills.map((s) => `<li>${t(s)}</li>`).join("")}</ul></section>
  </aside>
  <main>
    <section><h2>PROFIL</h2><p>${t(profile.tagline)} ${t(profile.availability)}</p></section>
    <section><h2>EXPÉRIENCE PROFESSIONNELLE</h2>${experienceHtml}</section>
    <section><h2>FORMATION</h2>${formationHtml}</section>
    <section><h2>PROJETS</h2>${projectsHtml}</section>
  </main>
</body></html>`;

const dir = mkdtempSync(join(tmpdir(), "cv-pdf-"));
const htmlPath = join(dir, "cv.html");
writeFileSync(htmlPath, html);
execFileSync(CHROME, [
  "--headless=new",
  "--disable-gpu",
  "--no-pdf-header-footer",
  "--virtual-time-budget=5000",
  `--print-to-pdf=${OUTPUT}`,
  `file://${htmlPath}`,
], { stdio: "ignore" });
console.log(`CV généré : ${OUTPUT}`);
