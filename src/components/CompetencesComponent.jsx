import React from "react";
import SectionTitle from "./SectionTitle";
import { skillGroups, otherSkills } from "../data/resumeData";
import { skillIcons } from "./skillIcons";

function SkillCard({ name }) {
  const meta = skillIcons[name];
  const Icon = meta?.icon;
  return (
    <div className="skill-card">
      {Icon && (
        <Icon className="skill-card__icon" style={{ color: meta.color }} aria-hidden="true" />
      )}
      <span className="skill-card__name">{name}</span>
    </div>
  );
}

export default function Competences() {
  return (
    <section className="devweb devweb--compact">
      <SectionTitle heading="Compétences" className="title_item" />
      <article>
        <div className="skills-panels">
          {skillGroups.map((group) => (
            <div className="skills-panel" key={group.title}>
              <h4 className="skills-panel__title">{group.title}</h4>
              <div className="skills-panel__cards">
                {group.skills.map((skill) => (
                  <SkillCard key={skill.name} name={skill.name} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-other">
          {otherSkills.map((group) => (
            <div className="skills-other__group" key={group.title}>
              <h4 className="skills-other__title">{group.title}</h4>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}
