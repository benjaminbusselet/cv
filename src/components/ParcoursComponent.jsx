import React from "react";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { experiences, formations } from "../data/resumeData";
import { useLang } from "../i18n";

// Entrée : { period, heading, meta?, title?, items? } — commun aux
// expériences et aux formations.
function Timeline({ title, entries }) {
  const { t } = useLang();
  return (
    <div>
      <h3 className="subheading">{title}</h3>
      <ol className="timeline">
        {entries.map((entry, i) => (
          <Reveal as="li" key={`${t(entry.period)}-${i}`} delay={i * 0.05}>
            <small>{t(entry.period)}</small>
            <h4>{t(entry.heading)}</h4>
            {entry.meta && <p className="timeline__meta">{t(entry.meta)}</p>}
            {entry.title && <p className="timeline__title">{t(entry.title)}</p>}
            {entry.items?.length > 1 ? (
              <ul>
                {entry.items.map((item) => (
                  <li key={item.fr}>{t(item)}</li>
                ))}
              </ul>
            ) : (
              entry.items && <p>{t(entry.items[0])}</p>
            )}
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

export default function Parcours() {
  const { t } = useLang();

  return (
    <section id="parcours" className="section">
      <SectionHeading index="03" title={t("nav.parcours")} />
      <div className="parcours">
        <Timeline
          title={t("experiences")}
          entries={experiences.map((e) => ({ ...e, heading: e.company }))}
        />
        <Timeline
          title={t("formations")}
          entries={formations.map((f) => ({ period: f.period, heading: f.title, meta: f.detail }))}
        />
      </div>
    </section>
  );
}
