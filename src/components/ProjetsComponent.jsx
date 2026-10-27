import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { imageFor } from "./projectImage";
import { caseStudies, otherProjects } from "../data/resumeData";
import { useLang } from "../i18n";

// Visuel d'un projet ; sans capture d'écran, un monogramme en tient lieu.
export function ProjectVisual({ project }) {
  const src = imageFor(project.image);
  return src ? (
    <img src={src} alt={project.title} />
  ) : (
    <div className="monogram" aria-hidden="true">
      {project.title
        .split(" ")
        .map((word) => word[0])
        .join("")
        .slice(0, 3)}
    </div>
  );
}

export default function Projets() {
  const { t } = useLang();

  return (
    <section id="projets" className="section">
      <SectionHeading index="02" title={t("nav.projets")} intro={t("projectsIntro")} />

      <div className="cases">
        {caseStudies.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.08}>
            <Link to={`/projet/${project.slug}`} className="case-card">
              <div className="case-card__visual">
                <ProjectVisual project={project} />
              </div>
              <div className="case-card__body">
                <p className="eyebrow">{t(project.kicker)}</p>
                <h3>{project.title}</h3>
                <p>{t(project.punchline)}</p>
                <ul className="tags">
                  {project.stack.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <span className="case-card__more">
                  {t("readCase")} <FiArrowRight aria-hidden="true" className="nudge" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>

      <h3 className="subheading">{t("otherProjects")}</h3>
      <div className="mini-projects">
        {otherProjects.map((project, i) => (
          <Reveal key={project.image} delay={i * 0.06}>
            <a href={project.href} target="_blank" rel="noopener noreferrer" className="mini-card">
              <img src={imageFor(project.image)} alt="" />
              <span>
                {t(project.description)} <FiArrowUpRight aria-hidden="true" />
              </span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
