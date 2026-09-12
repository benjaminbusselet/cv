import React from "react";
import SectionTitle from "./SectionTitle";
import { otherSkills } from "../data/resumeData";

export default function Autres() {
  return (
    <section className="autres">
      <SectionTitle heading="COMPÉTENCES - Autres" />
      <article>
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
