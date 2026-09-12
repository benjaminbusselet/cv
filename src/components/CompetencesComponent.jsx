import React from "react";
import SectionTitle from "./SectionTitle";
import { skills, otherSkills } from "../data/resumeData";
import { skillIcons } from "./skillIcons";

export default function Competences() {
  return (
    <section className="devweb">
      <SectionTitle heading="Compétences" className="title_item" />
      <article>
        <div className="skills-cards">
          {skills.map((skill) => {
            const meta = skillIcons[skill.name];
            const Icon = meta?.icon;
            return (
              <div className="skill-card" key={skill.name}>
                {Icon && (
                  <Icon className="skill-card__icon" style={{ color: meta.color }} />
                )}
                <span className="skill-card__name">{skill.name}</span>
              </div>
            );
          })}
        </div>

        {otherSkills.map((group) => (
          <div className="item" key={group.title}>
            <h3 className="subtitle">{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </article>
    </section>
  );
}
