// Données du CV, centralisées pour éviter la duplication dans les composants.
// Un texte traduit s'écrit { fr, en } ; un texte identique dans les deux
// langues (nom propre, techno) reste une simple chaîne. Voir tr() dans i18n.jsx.

export const profile = {
  name: "Benjamin Busselet",
  title: {
    fr: "Développeur Web Front-End / Full-Stack",
    en: "Front-End / Full-Stack Web Developer",
  },
  hello: {
    fr: "Bonjour, moi c'est Benjamin.",
    en: "Hi, I'm Benjamin.",
  },
  punchline: {
    fr: "Du tournevis au clavier : je répare toujours des choses, simplement avec du code maintenant.",
    en: "From screwdriver to keyboard: I still fix things, only with code now.",
  },
  tagline: {
    fr: "Développeur web front-end / full-stack (React, Node.js, Next.js), reconverti après 10 ans en maintenance informatique. Aujourd'hui Développeur Intégrateur de solutions chez Smart Global Governance, je développe des scripts Lua et intègre la plateforme Corteza au quotidien, avec Claude pour accélérer la production.",
    en: "Front-end / full-stack web developer (React, Node.js, Next.js), retrained after 10 years in IT maintenance. Now a Solutions Integration Developer at Smart Global Governance, I write Lua scripts and integrate the Corteza platform every day, using Claude to speed up delivery.",
  },
  availability: {
    fr: "Ouvert aux opportunités développeur front-end / full-stack en CDI, télétravail full ou hybride.",
    en: "Open to permanent front-end / full-stack developer roles, fully remote or hybrid.",
  },
  location: {
    fr: "Alpes-Maritimes (06) · Télétravail full/hybride · Permis B, véhicule",
    en: "Alpes-Maritimes, France · Remote or hybrid · Driving licence, own car",
  },
  phone: "06 22 15 43 99",
  email: "benjamin.busselet@icloud.com",
  linkedin: "http://linkedin.com/in/benjamin-busselet",
  github: "https://github.com/benjaminbusselet",
  // Endpoint Formspree (https://formspree.io) : vide → le formulaire
  // ouvre le client mail avec le message pré-rempli.
  contactEndpoint: "",
};

export const softSkills = [
  { fr: "Esprit d'équipe", en: "Team player" },
  { fr: "Organisé", en: "Organised" },
  { fr: "Ouvert d'esprit", en: "Open-minded" },
];

// Groupées par nature réelle (langage / framework-librairie / outil /
// base de données) plutôt qu'en une seule liste plate — un langage et
// un outil de build ne sont pas des "compétences" comparables. Chaque
// groupe reste ordonné par pertinence marché actuelle.
export const skillGroups = [
  {
    title: { fr: "Langages", en: "Languages" },
    skills: ["Javascript", "HTML5", "CSS", "PHP", "Lua"],
  },
  {
    title: { fr: "Frameworks & Librairies", en: "Frameworks & Libraries" },
    skills: ["React", "NextJS", "ExpressJS", "Bootstrap", "Jquery"],
  },
  {
    title: { fr: "Outils", en: "Tools" },
    skills: ["NodeJS", "Vite", "Npm", "Git"],
  },
  {
    title: { fr: "Bases de données", en: "Databases" },
    skills: ["MongoDB", "MySQL", "SQL", "MsSQL"],
  },
];

export const otherSkills = [
  {
    title: { fr: "Développement assisté par IA", en: "AI-assisted development" },
    items: [
      {
        fr: "Usage quotidien d'outils IA (Claude, Cowork, Claude Code) pour accompagner le développement",
        en: "Daily use of AI tools (Claude, Cowork, Claude Code) to support development",
      },
    ],
  },
  {
    title: { fr: "Compétences secondaires", en: "Secondary skills" },
    items: [
      { fr: "Intégration Corteza (low-code), workflows N8N", en: "Corteza integration (low-code), N8N workflows" },
      { fr: "WordPress", en: "WordPress" },
    ],
  },
];

export const experiences = [
  // Un seul intitulé pour tout le poste chez SGG (contrat du 03/03/2022 :
  // « Intégrateur Low code ») ; l'encadrement de 2023 figure en mission.
  {
    period: { fr: "Mars 2022 - aujourd'hui", en: "Mar. 2022 - present" },
    company: "Smart Global Governance",
    meta: { fr: "Valbonne · CDI", en: "Valbonne, France · Permanent" },
    title: { fr: "Développeur Intégrateur de solutions", en: "Solutions Integration Developer" },
    items: [
      {
        fr: "Développement de scripts Lua pour automatiser et personnaliser les outils internes",
        en: "Lua scripts automating and customising internal tools",
      },
      {
        fr: "Intégration et configuration de la plateforme low-code Corteza ; workflows N8N",
        en: "Integration and configuration of the Corteza low-code platform; N8N workflows",
      },
      {
        fr: "Encadrement de l'équipe Professional Services (2023) : pilotage, KPI, suivi des partenaires",
        en: "Led the Professional Services team (2023): management, KPIs, partner follow-up",
      },
      {
        fr: "Support technique avancé ; développement assisté par IA (Claude, Claude Code)",
        en: "Advanced technical support; AI-assisted development (Claude, Claude Code)",
      },
    ],
  },
  {
    period: { fr: "2020 - févr. 2022", en: "2020 - Feb. 2022" },
    company: "PureSophro",
    meta: { fr: "Antibes · Freelance", en: "Antibes, France · Freelance" },
    title: { fr: "Développeur web", en: "Web developer" },
    items: [
      {
        fr: "Développement front et back du site (React, Next.js, MongoDB), maintenance et optimisation",
        en: "Front and back end development of the website (React, Next.js, MongoDB), maintenance and optimisation",
      },
    ],
  },
  // Carrière d'avant la reconversion résumée en une ligne, sans dates
  // détaillées : ~10 ans cumulés (certificats de travail 2001-2017).
  {
    period: { fr: "Avant la reconversion", en: "Before retraining" },
    company: { fr: "Maintenance informatique & helpdesk", en: "IT maintenance & helpdesk" },
    items: [
      {
        fr: "10 ans en maintenance informatique et support utilisateurs (parcs de 100 à 300 postes)",
        en: "10 years in IT maintenance and user support (fleets of 100 to 300 workstations)",
      },
    ],
  },
];

export const formations = [
  {
    period: "2017 - 2020",
    title: { fr: "Master 1 : Développeur d'application", en: "Master's level (1st year): Application developer" },
    detail: "OpenClassrooms, Paris",
  },
  {
    period: "2014",
    title: { fr: "BTS Services informatiques aux organisations", en: "BTS (2-year degree) in IT services for organisations" },
    detail: "Lycée Pro Jacques Dolle, Antibes",
  },
  {
    period: "2002",
    title: { fr: "Bac : Technicien maintenance informatique", en: "Baccalauréat: IT maintenance technician" },
    detail: "IPI Institut Poly Informatique, Paris",
  },
];

// Études de cas : une page chacune (/projet/:slug), dans l'ordre
// d'importance. Uniquement des faits vérifiables (README des dépôts,
// expérience pro) ; pas de chiffre de résultat inventé.
export const caseStudies = [
  {
    slug: "tv-sports",
    image: "6.png",
    title: "TV Sports",
    kicker: { fr: "Agrégateur de programmes TV sport", en: "Sports TV listings aggregator" },
    punchline: {
      fr: "Savoir en un coup d'œil quel match passe, quand et sur quelle chaîne.",
      en: "See at a glance which match is on, when and on which channel.",
    },
    stack: ["React 19", "Vite 7", "Tailwind CSS", "Node.js", "GitHub Actions"],
    href: "https://benjaminbusselet.github.io/tv_sports/",
    repo: "https://github.com/benjaminbusselet/tv_sports",
    sections: {
      context: {
        fr: "Les calendriers des compétitions (football, rugby, F1) et les grilles TV sont publiés séparément : pour savoir qui diffuse un match, il faut croiser plusieurs sources à la main.",
        en: "Competition calendars (football, rugby, F1) and TV schedules are published separately: finding out who broadcasts a match means cross-checking several sources by hand.",
      },
      goal: {
        fr: "Réunir sur une seule page les matchs des 7 prochains jours avec leurs diffuseurs, sans intervention manuelle.",
        en: "Gather the next 7 days of matches and their broadcasters on a single page, with no manual work.",
      },
      actions: {
        fr: "Pipeline Node.js qui lit les calendriers ICS et les grilles EPG puis les fusionne en fichiers JSON ; interface React 19 + Vite 7 + Tailwind ; workflow GitHub Actions qui reconstruit et déploie le site chaque nuit.",
        en: "Node.js pipeline that reads ICS calendars and EPG schedules and merges them into JSON files; React 19 + Vite 7 + Tailwind front end; GitHub Actions workflow that rebuilds and deploys the site every night.",
      },
      role: {
        fr: "Projet personnel mené seul : conception, pipeline de données, interface et CI/CD.",
        en: "Solo personal project: design, data pipeline, front end and CI/CD.",
      },
      result: {
        fr: "Site en ligne sur GitHub Pages, mis à jour automatiquement chaque jour à 1h UTC sur une fenêtre glissante de 7 jours.",
        en: "Live on GitHub Pages, updated automatically every day at 1am UTC over a rolling 7-day window.",
      },
    },
  },
  {
    slug: "llm-arena",
    image: null,
    title: "LLM Board Game Arena",
    kicker: { fr: "Des LLM s'affrontent sur un jeu de plateau", en: "LLMs battle on a board game" },
    punchline: {
      fr: "Mesurer des modèles d'IA sur autre chose que des benchmarks : une vraie partie.",
      en: "Measuring AI models on something other than benchmarks: an actual game.",
    },
    stack: ["JavaScript (ES modules)", "Vite", "Vitest", "Node.js", "OpenAI-compatible APIs"],
    href: null,
    repo: "https://github.com/benjaminbusselet/llm-board-game-arena",
    sections: {
      context: {
        fr: "Point de départ : un jeu de plateau tour par tour réalisé en 2020 pour OpenClassrooms (jQuery, Bootstrap), joué à deux sur le même écran.",
        en: "Starting point: a turn-based board game built in 2020 for OpenClassrooms (jQuery, Bootstrap), played by two people on one screen.",
      },
      goal: {
        fr: "Faire jouer des LLM de toutes origines (américains, chinois, européens, ouverts ou fermés) les uns contre les autres et comparer leurs résultats.",
        en: "Have LLMs from everywhere (US, Chinese, European, open or closed) play against each other and compare the results.",
      },
      actions: {
        fr: "Moteur de jeu séparé de l'affichage et testé avec Vitest ; arène Node.js qui interroge les API compatibles OpenAI (Groq, OpenRouter, Mistral…) ; chaque coup est validé par le moteur ; journal JSONL par partie.",
        en: "Game engine split from the UI and tested with Vitest; Node.js arena calling OpenAI-compatible APIs (Groq, OpenRouter, Mistral…); every move is validated by the engine; one JSONL log per game.",
      },
      role: {
        fr: "Projet personnel mené seul : refonte du moteur, conception de l'arène et des mesures.",
        en: "Solo personal project: engine rewrite, arena and metrics design.",
      },
      result: {
        fr: "Chaque partie mesure la victoire, le coût en tokens et le temps de réponse de chaque modèle.",
        en: "Each game measures the win, token cost and response time of each model.",
      },
    },
  },
  {
    slug: "puresophro",
    image: "5.png",
    title: "PureSophro",
    kicker: { fr: "Site de prise de rendez-vous", en: "Appointment booking website" },
    punchline: {
      fr: "Un site client complet, du front à la base de données.",
      en: "A complete client website, from front end to database.",
    },
    stack: ["React", "Next.js", "MongoDB"],
    href: "https://www.puresophro.com",
    repo: null,
    sections: {
      context: {
        fr: "Mission freelance (2020 - 2022) pour un cabinet de sophrologie qui avait besoin d'un site avec prise de rendez-vous.",
        en: "Freelance assignment (2020 - 2022) for a sophrology practice that needed a website with appointment booking.",
      },
      goal: {
        fr: "Livrer un site fiable que le client peut utiliser au quotidien.",
        en: "Deliver a reliable website the client can use every day.",
      },
      actions: {
        fr: "Développement front et back avec React, Next.js et MongoDB, puis maintenance et optimisation.",
        en: "Front and back end development with React, Next.js and MongoDB, followed by maintenance and optimisation.",
      },
      role: {
        fr: "Développeur unique sur le projet.",
        en: "Sole developer on the project.",
      },
      result: {
        fr: "Site en production : puresophro.com.",
        en: "Website in production: puresophro.com.",
      },
    },
  },
];

// Projets de formation, affichés en cartes simples sous les études de cas.
export const otherProjects = [
  {
    image: "1.png",
    description: { fr: "Site OnePage 100% responsive pour un festival", en: "Fully responsive one-page website for a festival" },
    href: "https://github.com/benjaminbusselet/lesfilmsdepleinair_react",
  },
  {
    image: "3.png",
    description: { fr: "Jeu de plateau tour par tour en JavaScript", en: "Turn-based board game in JavaScript" },
    href: "https://github.com/benjaminbusselet/laravsnathan",
  },
  {
    image: "4.png",
    description: { fr: "Site d'avis de restaurants en JavaScript", en: "Restaurant review website in JavaScript" },
    href: "https://github.com/benjaminbusselet/kelresto",
  },
];
