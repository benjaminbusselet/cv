import React from "react";
import SectionTitle from "./SectionTitle";
import { projects } from "../data/resumeData";

// Charge les images de la galerie par leur nom de fichier, référencé
// depuis resumeData.js, plutôt que d'importer chaque image une à une.
const projectImages = import.meta.glob("../assets/*.png", {
  eager: true,
  import: "default",
});
const imageFor = (filename) => projectImages[`../assets/${filename}`];

export default function Projets() {
  return (
    <section className="projets">
      <SectionTitle heading="PROJETS" className="mb2" />
      <article>
        {projects.map((project, index) => (
          <div className={`card flip-card${index + 1}`} key={project.image}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={imageFor(project.image)} alt={project.description} />
              </div>
              <div className="flip-card-back">
                <div className="flip-card-text">
                  <small>{project.description}</small>
                  <a href={project.href} target="_blank" rel="noreferrer">
                    Voir le site
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
}
