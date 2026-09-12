import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { skillsFront, skillsBack, skillsDatabase } from "../data/resumeData";
import { skillIcons } from "./skillIcons";

const groups = [
  { title: "Front-End", skills: skillsFront },
  { title: "Back-End", skills: skillsBack },
  { title: "Bases de données", skills: skillsDatabase },
];

// --- Variante A : tags/badges groupés ---------------------------------
function TagsVariant() {
  return (
    <div className="skills-tags">
      {groups.map((group) => (
        <div className="skills-tags__group" key={group.title}>
          <h4 className="skills-tags__title">{group.title}</h4>
          <div className="skills-tags__list">
            {group.skills.map((skill) => (
              <span className="skill-tag" key={skill.name}>
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// --- Variante B : barres de progression ----------------------------------
function BarsVariant() {
  return (
    <div className="skills-bars">
      {groups.map((group) => (
        <div className="skills-bars__group" key={group.title}>
          <h4 className="skills-bars__title">{group.title}</h4>
          {group.skills.map((skill) => (
            <div className="skill-bar" key={skill.name}>
              <div className="skill-bar__label">
                <span>{skill.name}</span>
              </div>
              <div className="skill-bar__track">
                <div
                  className="skill-bar__fill"
                  style={{ width: `${skill.level * 20}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// --- Variante C : cartes avec icônes ------------------------------------
function CardsVariant() {
  const allSkills = groups.flatMap((group) => group.skills);
  return (
    <div className="skills-cards">
      {allSkills.map((skill) => {
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
  );
}

const variants = {
  tags: { label: "Tags", Component: TagsVariant },
  bars: { label: "Barres", Component: BarsVariant },
  cards: { label: "Cartes", Component: CardsVariant },
};

export default function DevWeb() {
  const [variant, setVariant] = useState("tags");
  const { Component } = variants[variant];

  return (
    <section className="devweb">
      <SectionTitle heading="Développeur Web" className="title_item" />
      <article>
        {/* Sélecteur temporaire pour comparer les variantes de design.
            À retirer une fois le choix final validé. */}
        <div className="variant-switch">
          {Object.entries(variants).map(([key, { label }]) => (
            <button
              key={key}
              type="button"
              className={key === variant ? "active" : ""}
              onClick={() => setVariant(key)}
            >
              {label}
            </button>
          ))}
        </div>
        <Component />
      </article>
    </section>
  );
}
