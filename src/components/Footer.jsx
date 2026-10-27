import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data/resumeData";
import { useLang } from "../i18n";

export default function Footer() {
  const { t } = useLang();

  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} {profile.name}. {t("rights")}
      </p>
      <div className="footer__links">
        <a href={`mailto:${profile.email}`} aria-label="E-mail"><FiMail /></a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub /></a>
      </div>
    </footer>
  );
}
