import React from "react";
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiFileText } from "react-icons/fi";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { profile } from "../data/resumeData";
import { useLang } from "../i18n";

export default function Contact() {
  const { t } = useLang();

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
        {links.map(({ icon: Icon, label, href, external }, i) => (
          <Reveal key={label} delay={i * 0.05}>
            <a
              className="contact__card"
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
            >
              <Icon aria-hidden="true" /> {label}
            </a>
          </Reveal>
        ))}
        <Reveal delay={links.length * 0.05}>
          <Link className="contact__card" to="/cv">
            <FiFileText aria-hidden="true" /> {t("heroCv")}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
