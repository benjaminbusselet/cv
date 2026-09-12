import React from "react";
import SectionTitle from "./SectionTitle";
import { profile, softSkills } from "../data/resumeData";

export default function Presentation() {
  return (
    <section className="presentation">
      <SectionTitle heading={profile.title} className="title_item" />
      <article>
        <p>{profile.tagline}</p>
        <h3 className="subtitle">{profile.availability}</h3>
        <h3 className="subtitle">Contacts</h3>
        <div className="contacts">
          {profile.contacts.map((contact) => (
            <div className="row" key={contact.label}>
              <i className={contact.icon} aria-hidden="true"></i>
              {contact.href ? (
                <a
                  href={contact.href}
                  target={contact.external ? "_blank" : undefined}
                  rel={contact.external ? "noopener noreferrer" : undefined}
                >
                  {" "}
                  {contact.label}
                </a>
              ) : (
                <span> {contact.label}</span>
              )}
            </div>
          ))}
          {/* Lien PDF retiré temporairement : le cv.pdf existant est obsolète
              (anciennes dates, sans Lua/Corteza/Claude). À remettre une fois
              une version à jour disponible. */}
        </div>
        <h3 className="subtitle">Savoir-être</h3>
        <ul>
          {softSkills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </article>
    </section>
  );
}
