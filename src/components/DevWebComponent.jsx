import React from "react";
import SectionTitle from "./SectionTitle";
import { skillsFront, skillsBack, skillsDatabase } from "../data/resumeData";

const stars = (level) => "⭐️".repeat(level);

function SkillTable({ title, skills }) {
  return (
    <table>
      <tbody>
        <tr>
          <th colSpan="2">
            <h3 className="table_title">{title}</h3>
          </th>
        </tr>
        {skills.map((skill) => (
          <tr key={skill.name}>
            <td>{skill.name}</td>
            <td>{stars(skill.level)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function DevWeb() {
  return (
    <section className="devweb">
      <SectionTitle heading="Développeur Web" className="title_item" />
      <article>
        <div className="languages_grid">
          <SkillTable title="Langages Front-End" skills={skillsFront} />
          <SkillTable title="Langages Back-End" skills={skillsBack} />
          <SkillTable title="Bases de données" skills={skillsDatabase} />
        </div>
      </article>
    </section>
  );
}
