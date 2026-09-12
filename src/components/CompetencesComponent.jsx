import React, { useState } from "react";
import SectionTitle from "./SectionTitle";
import { skillGroups, otherSkills } from "../data/resumeData";
import { skillIcons } from "./skillIcons";

function SkillCard({ name, categoryClass }) {
  const meta = skillIcons[name];
  const Icon = meta?.icon;
  return (
    <div className={`skill-card ${categoryClass || ""}`}>
      {Icon && <Icon className="skill-card__icon" style={{ color: meta.color }} />}
      <span className="skill-card__name">{name}</span>
    </div>
  );
}

// --- Layout B : catégories en panneaux (style dashboard) -------------
function PanelsLayout() {
  return (
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
  );
}

// --- Layout C : grille unique, accent couleur par catégorie -----------
const categoryClasses = {
  "Langages": "skill-card--lang",
  "Frameworks & Librairies": "skill-card--framework",
  "Outils": "skill-card--tool",
  "Bases de données": "skill-card--db",
};

function ColorCodedLayout() {
  return (
    <div className="skills-coded">
      <div className="skills-coded__legend">
        {skillGroups.map((group) => (
          <span className={`legend-dot ${categoryClasses[group.title]}`} key={group.title}>
            {group.title}
          </span>
        ))}
      </div>
      <div className="skills-cards">
        {skillGroups.flatMap((group) =>
          group.skills.map((skill) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              categoryClass={categoryClasses[group.title]}
            />
          ))
        )}
      </div>
    </div>
  );
}

const layouts = {
  panels: { label: "Panneaux", Component: PanelsLayout },
  coded: { label: "Couleur par catégorie", Component: ColorCodedLayout },
};

export default function Competences() {
  const [layout, setLayout] = useState("panels");
  const { Component } = layouts[layout];

  return (
    <section className="devweb devweb--compact">
      <SectionTitle heading="Compétences" className="title_item" />
      <article>
        {/* Sélecteur temporaire pour comparer les 2 layouts retenus.
            À retirer une fois le choix final validé. */}
        <div className="variant-switch">
          {Object.entries(layouts).map(([key, { label }]) => (
            <button
              key={key}
              type="button"
              className={key === layout ? "active" : ""}
              onClick={() => setLayout(key)}
            >
              {label}
            </button>
          ))}
        </div>

        <Component />

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
