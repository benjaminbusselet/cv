import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiDownload, FiExternalLink } from "react-icons/fi";
import cvPdf from "../assets/files/cv.pdf";
import { useLang } from "../i18n";

export default function CvPage() {
  const { t } = useLang();

  useEffect(() => window.scrollTo({ top: 0 }), []);

  return (
    <section className="section cv-page">
      <Link to="/" className="back-link">
        <FiArrowLeft aria-hidden="true" /> {t("nav.presentation")}
      </Link>
      <div className="cv-page__bar">
        <h1>{t("cvTitle")}</h1>
        <div className="hero__actions">
          <a href={cvPdf} download="CV_Benjamin_Busselet.pdf" className="button button--primary">
            <FiDownload aria-hidden="true" /> {t("download")}
          </a>
          <a href={cvPdf} target="_blank" rel="noopener noreferrer" className="button">
            <FiExternalLink aria-hidden="true" /> {t("openTab")}
          </a>
        </div>
      </div>
      <iframe className="cv-page__frame" src={cvPdf} title="CV Benjamin Busselet" />
    </section>
  );
}
