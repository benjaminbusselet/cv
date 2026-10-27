import React, { createContext, useContext, useEffect, useState } from "react";

export const LANGS = ["fr", "en"];
const STORAGE_KEY = "cv-lang";

// Textes de l'interface (le contenu du CV vit dans data/resumeData.js).
const ui = {
  nav: {
    presentation: { fr: "Présentation", en: "About" },
    competences: { fr: "Compétences", en: "Skills" },
    projets: { fr: "Projets", en: "Projects" },
    parcours: { fr: "Parcours", en: "Background" },
    contact: { fr: "Contact", en: "Contact" },
  },
  heroCta: { fr: "Voir mes projets", en: "See my projects" },
  heroCv: { fr: "Voir le CV", en: "View my CV" },
  softSkills: { fr: "Savoir-être", en: "Soft skills" },
  skillsIntro: {
    fr: "Ce que j'utilise au quotidien, et ce que j'apprends encore.",
    en: "What I use every day, and what I'm still learning.",
  },
  projectsIntro: {
    fr: "Chaque projet raconté du besoin au résultat.",
    en: "Each project told from need to outcome.",
  },
  otherProjects: { fr: "Projets de formation", en: "Training projects" },
  readCase: { fr: "Lire l'étude de cas", en: "Read the case study" },
  experiences: { fr: "Expériences", en: "Experience" },
  formations: { fr: "Formations", en: "Education" },
  contactIntro: {
    fr: "Un poste, une question ou un projet ? Écrivez-moi.",
    en: "A role, a question or a project? Drop me a line.",
  },
  form: {
    name: { fr: "Nom", en: "Name" },
    email: { fr: "E-mail", en: "Email" },
    message: { fr: "Message", en: "Message" },
    send: { fr: "Envoyer", en: "Send" },
    sending: { fr: "Envoi…", en: "Sending…" },
    sent: { fr: "Message envoyé, je vous réponds au plus vite.", en: "Message sent, I'll get back to you soon." },
    error: {
      fr: "L'envoi a échoué. Réessayez ou écrivez directement à",
      en: "Sending failed. Try again or email me directly at",
    },
  },
  caseSections: {
    context: { fr: "Contexte", en: "Context" },
    goal: { fr: "Objectif", en: "Goal" },
    actions: { fr: "Ce que j'ai fait", en: "What I did" },
    role: { fr: "Mon rôle", en: "My role" },
    result: { fr: "Résultat", en: "Outcome" },
  },
  visitSite: { fr: "Voir le site", en: "Visit the website" },
  viewCode: { fr: "Voir le code", en: "View the code" },
  back: { fr: "Retour aux projets", en: "Back to projects" },
  nextCase: { fr: "Projet suivant", en: "Next project" },
  cvTitle: { fr: "Mon CV", en: "My CV" },
  download: { fr: "Télécharger le PDF", en: "Download the PDF" },
  openTab: { fr: "Ouvrir dans un nouvel onglet", en: "Open in a new tab" },
  menu: { fr: "Menu", en: "Menu" },
  themeLight: { fr: "Passer en mode clair", en: "Switch to light mode" },
  themeDark: { fr: "Passer en mode sombre", en: "Switch to dark mode" },
  rights: { fr: "Tous droits réservés.", en: "All rights reserved." },
};

// Renvoie la traduction d'un texte { fr, en }, ou le texte tel quel
// s'il est identique dans toutes les langues.
export const tr = (value, lang) =>
  value && typeof value === "object" && !Array.isArray(value) ? value[lang] ?? value.fr : value;

const LangContext = createContext(null);

function initialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (LANGS.includes(saved)) return saved;
  } catch {
    // Stockage indisponible (navigation privée) : on retombe sur le navigateur.
  }
  return navigator.language?.startsWith("fr") ? "fr" : "en";
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initialLang);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // Préférence non mémorisée, sans conséquence.
    }
  }, [lang]);

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>;
}

// t("form.send") → texte de l'interface ; t(objet) → traduction d'une
// donnée ; une chaîne qui n'est pas une clé (nom propre, date) est
// renvoyée telle quelle.
export function useLang() {
  const { lang, setLang } = useContext(LangContext);
  const t = (keyOrValue) =>
    typeof keyOrValue === "string"
      ? tr(keyOrValue.split(".").reduce((node, key) => node?.[key], ui), lang) ?? keyOrValue
      : tr(keyOrValue, lang);
  return { lang, setLang, t };
}
