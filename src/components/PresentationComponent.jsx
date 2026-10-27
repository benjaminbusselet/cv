import React from "react";
import { Link } from "react-router-dom";
import { FiArrowDown, FiMapPin } from "react-icons/fi";
import Reveal from "./Reveal";
import photo from "../assets/profile.jpg";
import { profile, softSkills } from "../data/resumeData";
import { useLang } from "../i18n";

export default function Presentation() {
  const { t } = useLang();

  return (
    <section id="presentation" className="section hero">
      <div className="hero__text">
        <Reveal>
          <p className="eyebrow">{t(profile.hello)}</p>
          <h1 className="hero__title">{t(profile.title)}</h1>
          <p className="hero__punchline">{t(profile.punchline)}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="hero__tagline">{t(profile.tagline)}</p>
          <p className="hero__availability">{t(profile.availability)}</p>
          <p className="hero__location">
            <FiMapPin aria-hidden="true" /> {t(profile.location)}
          </p>
        </Reveal>
        <Reveal delay={0.2} className="hero__actions">
          <Link to="/projets" className="button button--primary">
            {t("heroCta")} <FiArrowDown aria-hidden="true" className="nudge" />
          </Link>
          <Link to="/cv" className="button">
            {t("heroCv")}
          </Link>
        </Reveal>
        <Reveal delay={0.3}>
          <ul className="chips" aria-label={t("softSkills")}>
            {softSkills.map((skill) => (
              <li key={skill.fr}>{t(skill)}</li>
            ))}
          </ul>
        </Reveal>
      </div>
      <Reveal delay={0.15} className="hero__photo">
        <img src={photo} alt={profile.name} />
      </Reveal>
    </section>
  );
}
