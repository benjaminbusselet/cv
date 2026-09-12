// Données du CV, centralisées pour éviter la duplication dans les composants.

export const profile = {
  name: "Benjamin Busselet",
  title: "Développeur Web Front-End / Full-Stack",
  tagline:
    "Développeur web front-end / full-stack (React, Node.js, Next.js), reconverti après 10 ans en maintenance informatique. Actuellement Solution Expert chez Smart Global Governance, où je développe des scripts Lua et intègre la plateforme Corteza au quotidien — assisté par Claude pour accélérer la production.",
  availability:
    "Ouvert aux opportunités développeur front-end / full-stack en CDI, Alpes-Maritimes.",
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
      icon: "fas fa-globe",
      label: "benjaminbusselet.github.io/cv",
      href: "https://benjaminbusselet.github.io/cv",
      external: true,
    },
    { icon: "fas fa-map-marker-alt", label: "Alpes-Maritimes (06) — Permis B, véhicule" },
  ],
};

export const softSkills = ["Esprit d'équipe", "Organisé", "Ouvert d'esprit"];

// Ordonné par pertinence sur le marché du travail actuel (stack JS
// moderne en tête, technologies legacy/niche en fin de liste), plutôt
// que par catégorie technique.
export const skills = [
  { name: "React", level: 4 },
  { name: "Javascript", level: 5 },
  { name: "NodeJS", level: 4 },
  { name: "NextJS", level: 4 },
  { name: "HTML5", level: 5 },
  { name: "CSS", level: 5 },
  { name: "PHP", level: 4 },
  { name: "MongoDB", level: 4 },
  { name: "MySQL", level: 4 },
  { name: "Jquery", level: 5 },
  { name: "Bootstrap", level: 5 },
  { name: "ExpressJS", level: 4 },
  { name: "SQL", level: 4 },
  { name: "MsSQL", level: 4 },
];

export const otherSkills = [
  {
    title: "Dev Assisté par IA",
    items: ["Claude (Cowork, Claude Code) — usage quotidien"],
  },
  {
    title: "Compétences Secondaires",
    items: ["Scripting Lua", "Intégration Corteza (low-code)"],
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

export const projects = [
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
  {
    image: "5.png",
    description: "Un site de prise de rendez-vous",
    href: "https://www.puresophro.com",
  },
];
