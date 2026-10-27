import React from "react";
import Reveal from "./Reveal";

// En-tête commun aux sections de l'accueil : numéro, titre, phrase d'intro.
export default function SectionHeading({ index, title, intro }) {
  return (
    <Reveal className="section-heading">
      <span className="section-heading__index">{index}</span>
      <h2>{title}</h2>
      {intro && <p>{intro}</p>}
    </Reveal>
  );
}
