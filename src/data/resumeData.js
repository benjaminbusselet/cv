// Données du CV, centralisées pour éviter la duplication dans les composants.

export const profile = {
  name: "Benjamin Busselet",
  title: "Développeur Web",
  tagline:
    "Après 10 ans dans la maintenance informatique, je me suis reconverti dans le développement web afin de mettre en pratique ma créativité.",
  availability:
    "Ouvert aux opportunités Développeur Front-End / Full-Stack en CDI, Alpes-Maritimes.",
  contacts: [
    { icon: "fas fa-phone-square-alt", label: "06 22 15 43 99" },
    {
      icon: "fas fa-envelope",
      label: "benjamin.busselet@icloud.com",
      href: "mailto:benjamin.busselet@icloud.com",
    },
    {
      icon: "fab fa-linkedin",
      label: "Profil Linkedin",
      href: "http://linkedin.com/in/benjamin-busselet",
      external: true,
    },
    { icon: "fas fa-map-marker-alt", label: "Alpes-Maritimes (06)" },
  ],
};

export const skillsFront = [
  { name: "HTML5", level: 5 },
  { name: "CSS", level: 5 },
  { name: "Bootstrap", level: 5 },
  { name: "Javascript", level: 5 },
  { name: "Jquery", level: 5 },
  { name: "React", level: 4 },
  { name: "NextJS", level: 4 },
];

export const skillsBack = [
  { name: "PHP", level: 4 },
  { name: "NodeJS", level: 4 },
  { name: "ExpressJS", level: 4 },
];

export const skillsDatabase = [
  { name: "SQL", level: 4 },
  { name: "MySQL", level: 4 },
  { name: "MsSQL", level: 4 },
  { name: "MongoDB", level: 4 },
];

export const otherSkills = [
  {
    title: "Gestion De Parc Informatique",
    items: [
      "diagnostiquer une panne",
      "remplacer un matériel défectueux",
      "tester les équipements",
      "effectuer l'entretien des matériels",
      "conseiller la clientèle",
    ],
  },
  {
    title: "Cours et Support Informatique",
    items: [
      "Animation de cours",
      "Aide à l'utilisation des équipements informatiques",
      "Soutien dans la pratique des systèmes et logiciels",
    ],
  },
  {
    title: "Dev Assisté par IA & Compétences Secondaires",
    items: [
      "Claude (Cowork, Claude Code) — usage quotidien en développement",
      "Scripting Lua",
      "Intégration plateforme low-code Corteza",
    ],
  },
];

export const experiences = [
  {
    period: "Janv. 2024 - présent",
    company: "Smart Global Governance",
    role: "Solution Expert & Customer Support Specialist — développement de scripts Lua, intégration Corteza, support technique avancé. Dev assisté par IA (Claude, Cowork).",
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
    period: "2020-2022",
    company: "PureSophro (Freelance)",
    role: "Développeur Web — front et back (React, Next.js, MongoDB)",
  },
  {
    period: "2015-2017",
    company: "Teledom Sécurité",
    role: "Technicien Support Informatique",
  },
  {
    period: "2007-2013",
    company: "Education Nationale (Collèges)",
    role: "Gestion Du Parc Informatique",
  },
  {
    period: "2004-2007",
    company: "Auto-Entrepreneur",
    role: "Formation et Maintenance",
  },
  {
    period: "2001-2003",
    company: "Extreme Agency",
    role: "Gestion Du Parc Informatique",
  },
];

export const formations = [
  {
    period: "2017-2020",
    title: "OpenClassrooms - Bac+3",
    detail: "Développeur d'Application - Frontend",
  },
  {
    period: "2014",
    title: "Validation Des Acquis - Bac+2",
    detail: "Services Informatique Aux Organisations",
  },
  {
    period: "2002",
    title: "CFA en Alternance - Bac",
    detail: "Technicien de Maintenance Informatique",
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
