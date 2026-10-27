import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiJquery,
  SiBootstrap,
  SiReact,
  SiNextdotjs,
  SiPhp,
  SiNodedotjs,
  SiExpress,
  SiMysql,
  SiMongodb,
  SiVite,
  SiNpm,
  SiGit,
  SiLua,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";

// Associe chaque techno affichée dans resumeData.js à son icône et à sa
// couleur de marque, utilisées par les cartes de CompetencesComponent.
export const skillIcons = {
  HTML5: { icon: SiHtml5, color: "#E34F26" },
  CSS: { icon: SiCss, color: "#663399" },
  Bootstrap: { icon: SiBootstrap, color: "#7952B3" },
  Javascript: { icon: SiJavascript, color: "#F7DF1E" },
  Jquery: { icon: SiJquery, color: "#0769AD" },
  React: { icon: SiReact, color: "#61DAFB" },
  NextJS: { icon: SiNextdotjs, color: "#000000" },
  PHP: { icon: SiPhp, color: "#777BB4" },
  NodeJS: { icon: SiNodedotjs, color: "#5FA04E" },
  ExpressJS: { icon: SiExpress, color: "#000000" },
  SQL: { icon: FaDatabase, color: "#c96f34" },
  MySQL: { icon: SiMysql, color: "#4479A1" },
  MsSQL: { icon: FaDatabase, color: "#CC2927" },
  MongoDB: { icon: SiMongodb, color: "#47A248" },
  Vite: { icon: SiVite, color: "#646CFF" },
  Npm: { icon: SiNpm, color: "#CB3837" },
  Git: { icon: SiGit, color: "#F05032" },
  Lua: { icon: SiLua, color: "#2C2D72" },
};
