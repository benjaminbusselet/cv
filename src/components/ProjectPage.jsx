import React, { useEffect } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { FiArrowLeft, FiArrowRight, FiArrowUpRight, FiGithub } from "react-icons/fi";
import Reveal from "./Reveal";
import { ProjectVisual } from "./ProjetsComponent";
import { caseStudies } from "../data/resumeData";
import { useLang } from "../i18n";

const SECTION_ORDER = ["context", "goal", "actions", "role", "result"];

export default function ProjectPage() {
  const { slug } = useParams();
  const { t } = useLang();
  const index = caseStudies.findIndex((p) => p.slug === slug);

  useEffect(() => window.scrollTo({ top: 0 }), [slug]);

  if (index === -1) return <Navigate to="/projets" replace />;
  const project = caseStudies[index];
  const next = caseStudies[(index + 1) % caseStudies.length];

  return (
    <article className="section case">
      <Link to="/projets" className="back-link">
        <FiArrowLeft aria-hidden="true" /> {t("back")}
      </Link>

      <Reveal className="case__header">
        <p className="eyebrow">{t(project.kicker)}</p>
        <h1>{project.title}</h1>
        <p className="case__punchline">{t(project.punchline)}</p>
        <ul className="tags">
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <div className="hero__actions">
          {project.href && (
            <a href={project.href} target="_blank" rel="noopener noreferrer" className="button button--primary">
              {t("visitSite")} <FiArrowUpRight aria-hidden="true" />
            </a>
          )}
          {project.repo && (
            <a href={project.repo} target="_blank" rel="noopener noreferrer" className="button">
              <FiGithub aria-hidden="true" /> {t("viewCode")}
            </a>
          )}
        </div>
      </Reveal>

      <Reveal className="case__visual" delay={0.1}>
        <ProjectVisual project={project} />
      </Reveal>

      <div className="case__sections">
        {SECTION_ORDER.map((key, i) => (
          <Reveal key={key} className="case__step" delay={i * 0.05}>
            <span className="section-heading__index">{String(i + 1).padStart(2, "0")}</span>
            <h2>{t(`caseSections.${key}`)}</h2>
            <p>{t(project.sections[key])}</p>
          </Reveal>
        ))}
      </div>

      {next.slug !== project.slug && (
        <Link to={`/projet/${next.slug}`} className="next-case">
          <span className="eyebrow">{t("nextCase")}</span>
          <span className="next-case__title">
            {next.title} <FiArrowRight aria-hidden="true" className="nudge" />
          </span>
        </Link>
      )}
    </article>
  );
}
