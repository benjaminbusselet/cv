import React, { useState } from "react";
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiFileText } from "react-icons/fi";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/resumeData";
import { useLang } from "../i18n";

// Sans endpoint configuré (site statique GitHub Pages), le formulaire
// ouvre le client mail avec le message pré-rempli.
async function sendMessage({ name, email, message }) {
  if (!profile.contactEndpoint) {
    const subject = encodeURIComponent(`Contact CV : ${name}`);
    const body = encodeURIComponent(`${message}\n\n${name} <${email}>`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    return;
  }
  const response = await fetch(profile.contactEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({ name, email, message }),
  });
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
}

export default function Contact() {
  const { t } = useLang();
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      await sendMessage(Object.fromEntries(new FormData(form)));
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  const links = [
    { icon: FiMail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: FiPhone, label: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { icon: FiLinkedin, label: "linkedin.com/in/benjamin-busselet", href: profile.linkedin, external: true },
    { icon: FiGithub, label: "github.com/benjaminbusselet", href: profile.github, external: true },
  ];

  return (
    <section id="contact" className="section">
      <SectionHeading index="04" title={t("nav.contact")} intro={t("contactIntro")} />
      <div className="contact">
        <Reveal as="form" className="panel contact__form" onSubmit={handleSubmit}>
          <label>
            {t("form.name")}
            <input name="name" required autoComplete="name" />
          </label>
          <label>
            {t("form.email")}
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label>
            {t("form.message")}
            <textarea name="message" rows="5" required />
          </label>
          <button type="submit" className="button button--primary" disabled={status === "sending"}>
            {t(status === "sending" ? "form.sending" : "form.send")}
          </button>
          <p className="contact__status" role="status">
            {status === "sent" && t("form.sent")}
            {status === "error" && `${t("form.error")} ${profile.email}.`}
          </p>
        </Reveal>
        <Reveal className="contact__links" delay={0.1}>
          {links.map(({ icon: Icon, label, href, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
            >
              <Icon aria-hidden="true" /> {label}
            </a>
          ))}
          <Link to="/cv">
            <FiFileText aria-hidden="true" /> {t("heroCv")}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
