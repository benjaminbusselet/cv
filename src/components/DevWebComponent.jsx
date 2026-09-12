import React from "react";
import SectionTitle from "./SectionTitle";
import { skills } from "../data/resumeData";
import { skillIcons } from "./skillIcons";

export default function DevWeb() {
  return (
    <section className="devweb">
      <SectionTitle heading="Développeur Web" className="title_item" />
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
      </article>
    </section>
  );
}
