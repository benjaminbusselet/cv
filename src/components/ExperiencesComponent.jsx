import React from "react";
import SectionTitle from "./SectionTitle";
import { experiences } from "../data/resumeData";

export default function Experiences() {
  return (
    <section className="experiences">
      <SectionTitle heading="EXPÉRIENCES PROFESSIONNELLES" />
      <article>
        {experiences.map((exp) => (
          <div className="item" key={`${exp.company}-${exp.period}`}>
            <small>{exp.period}</small>
            <h4 className="subtitle">{exp.company}</h4>
            <p>{exp.role}</p>
          </div>
        ))}
      </article>
    </section>
  );
}
