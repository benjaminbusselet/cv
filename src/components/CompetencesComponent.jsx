import React from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { skillGroups, otherSkills } from "../data/resumeData";
import { skillIcons } from "./skillIcons";
import { useLang } from "../i18n";

function SkillCard({ name }) {
  const meta = skillIcons[name];
  const Icon = meta?.icon;
  return (
    <div className="skill-card">
      {Icon && (
        <Icon className="skill-card__icon" style={{ "--brand": meta.color }} aria-hidden="true" />
      )}
      <span className="skill-card__name">{name}</span>
    </div>
  );
}

export default function Competences() {
  const { t } = useLang();

  return (
    <section id="competences" className="section">
      <SectionHeading index="01" title={t("nav.competences")} intro={t("skillsIntro")} />
      <div className="skills-panels">
        {skillGroups.map((group, i) => (
          <Reveal className="panel" key={group.title.fr} delay={i * 0.08}>
            <h3 className="panel__title">{t(group.title)}</h3>
            <div className="skills-panel__cards">
              {group.skills.map((skill) => (
                <SkillCard key={skill} name={skill} />
              ))}
            </div>
          </Reveal>
        ))}
      </div>
      <div className="skills-other">
        {otherSkills.map((group) => (
          <Reveal className="panel panel--accent" key={group.title.fr}>
            <h3 className="panel__title">{t(group.title)}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item.fr}>{t(item)}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
