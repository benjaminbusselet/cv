// Données du CV, centralisées pour éviter la duplication dans les composants.

export const profile = {
  name: "Benjamin Busselet",
  title: "Développeur Web Front-End / Full-Stack",
  tagline:
    "Développeur web front-end / full-stack (React, Node.js, Next.js), reconverti après 10 ans en maintenance informatique. Actuellement Solution Expert chez Smart Global Governance, où je développe des scripts Lua et intègre la plateforme Corteza au quotidien — assisté par Claude pour accélérer la production.",
  availability:
    "Ouvert aux opportunités développeur front-end / full-stack en CDI, télétravail full ou hybride.",
  contacts: [
    { icon: "fas fa-phone-square-alt", label: "06 22 15 43 99" },
    {
      icon: "fas fa-envelope",
      label: "benjamin.busselet@icloud.com",
      href: "mailto:benjamin.busselet@icloud.com",
    },
    {
      icon: "fab fa-linkedin",
      label: "linkedin.com/in/benjaminbusselet",
      href: "http://linkedin.com/in/benjamin-busselet",
      external: true,
    },
    {
      icon: "fas fa-map-marker-alt",
      label: "Alpes-Maritimes (06) — Télétravail full/hybride — Permis B, véhicule",
    },
  ],
};

export const softSkills = ["Esprit d'équipe", "Organisé", "Ouvert d'esprit"];

// Groupées par nature réelle (langage / framework-librairie / outil /
// base de données) plutôt qu'en une seule liste plate — un langage et
// un outil de build ne sont pas des "compétences" comparables. Chaque
// groupe reste ordonné par pertinence marché actuelle.
export const skillGroups = [
  {
    title: "Langages",
    skills: [
      { name: "Javascript" },
      { name: "HTML5" },
      { name: "CSS" },
      { name: "PHP" },
      { name: "Lua" },
    ],
  },
  {
    title: "Frameworks & Librairies",
    skills: [
      { name: "React" },
      { name: "NextJS" },
      { name: "ExpressJS" },
      { name: "Bootstrap" },
      { name: "Jquery" },
    ],
  },
  {
    title: "Outils",
    skills: [
      { name: "NodeJS" },
      { name: "Vite" },
      { name: "Npm" },
      { name: "Git" },
    ],
  },
  {
    title: "Bases de données",
    skills: [
      { name: "MongoDB" },
      { name: "MySQL" },
      { name: "SQL" },
      { name: "MsSQL" },
    ],
  },
];

export const otherSkills = [
  {
    title: "Développement assisté par IA",
    items: ["Usage quotidien d'outils IA (Claude, Cowork, Claude Code) pour accompagner le développement"],
  },
  {
    title: "Compétences Secondaires",
    items: ["Intégration Corteza (low-code)"],
  },
];

export const experiences = [
  {
    period: "Janv. 2024 - présent",
    company: "Smart Global Governance",
    role: "Solution Expert & Customer Support Specialist — développement de scripts Lua pour l'automatisation d'outils internes, intégration et configuration de la plateforme low-code Corteza, support technique avancé.",
  },
  {
    period: "Juil. 2023 - févr. 2024",
    company: "Smart Global Governance",
    role: "Responsable pôle Delivery",
  },
  {
    period: "Févr. 2022 - juil. 2023",
    company: "Smart Global Governance",
    role: "Développeur d'intégration — développement produit en JavaScript",
  },
  {
    period: "2020 - févr. 2022",
    company: "PureSophro (Freelance)",
    role: "Développeur web — développement front et back du site PureSophro (React, Next.js, MongoDB), maintenance et optimisation",
  },
  {
    period: "2001-2020",
    company: "Technicien maintenance & helpdesk (Antibes / Suresnes)",
    role: "15 ans en gestion de parcs informatiques et support utilisateurs (100 à 300 postes), avant la reconversion vers le développement web",
  },
];

export const formations = [
  {
    period: "2017-2020",
    title: "Master 1 — Développeur d'application",
    detail: "OpenClassrooms, Paris",
  },
  {
    period: "2014",
    title: "BTS Services informatiques aux organisations",
    detail: "Lycée Pro Jacques Dolle, Antibes",
  },
  {
    period: "2002",
    title: "Bac — Technicien maintenance informatique",
    detail: "IPI Institut Poly Informatique, Paris",
  },
];

// Ordonné du plus important au moins important par rapport au reste
// du CV (stack React/Vite moderne, expérience pro récente) : tv_sports
// (stack la plus actuelle, CI/CD) et PureSophro (site client réel, lié
// à l'expérience pro) en premier, projets 2021 vanilla en dernier.
export const projects = [
  {
    image: "6.png",
    description: "Agrégateur perso de programmes TV sport (React 19, Vite 7, pipeline Node.js, CI/CD)",
    href: "https://benjaminbusselet.github.io/tv_sports/",
  },
  {
    image: "5.png",
    description: "Un site de prise de rendez-vous",
    href: "https://www.puresophro.com",
  },
  {
    image: "1.png",
    description: "Un site OnePage 100% responsive pour un festival",
    href: "https://github.com/benjaminbusselet/lesfilmsdepleinair_react",
  },
  {
    image: "3.png",
    description: "Un jeu de plateau tour par tour en JavaScript",
    href: "https://github.com/benjaminbusselet/laravsnathan",
  },
  {
    image: "4.png",
    description: "Un site d'avis de restaurants en JavaScript",
    href: "https://github.com/benjaminbusselet/kelresto",
  },
];
