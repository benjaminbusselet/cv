// Pré-rendu de l'accueil : build SSR puis injection du HTML dans dist/index.html.
import { build } from "vite";
import { readFile, writeFile, rm } from "node:fs/promises";
import { pathToFileURL } from "node:url";
import path from "node:path";

const root = process.cwd();
const ssrDir = path.join(root, "dist-ssr");

await build({
  logLevel: "warn",
  build: { ssr: "src/entry-server.jsx", outDir: ssrDir, emptyOutDir: true },
});

const { render } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);
// StaticRouter produit des liens "/projets" ; le site vit sous /cv/ avec un HashRouter.
const html = render().replace(/href="\/(?!cv\/)([^"]*)"/g, 'href="/cv/#/$1"');

const indexPath = path.join(root, "dist", "index.html");
const page = await readFile(indexPath, "utf8");
if (!page.includes('<div id="root"></div>')) throw new Error("Racine #root introuvable dans dist/index.html");
await writeFile(indexPath, page.replace('<div id="root"></div>', `<div id="root">${html}</div>`));
await rm(ssrDir, { recursive: true, force: true });
console.log(`Pré-rendu injecté (${html.length} caractères)`);
