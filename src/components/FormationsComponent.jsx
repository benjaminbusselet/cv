import React from "react";
import SectionTitle from "./SectionTitle";
import { formations } from "../data/resumeData";

export default function Formations() {
  return (
    <section className="formations">
      <SectionTitle heading="FORMATIONS" />
      <article>
        {formations.map((formation) => (
          <div className="item" key={formation.title}>
            <small>{formation.period}</small>
            <h4 className="subtitle">{formation.title}</h4>
            <p>{formation.detail}</p>
          </div>
        ))}
      </article>
    </section>
  );
}
