import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App";
import { LangProvider } from "./i18n";

// Rendu statique de l'accueil, injecté dans dist/index.html par
// scripts/prerender.mjs. Le HashRouter n'a qu'une URL indexable.
export function render() {
  return renderToString(
    <LangProvider>
      <StaticRouter location="/">
        <App />
      </StaticRouter>
    </LangProvider>
  );
}
