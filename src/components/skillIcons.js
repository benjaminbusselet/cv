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
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa6";

// Associe chaque techno affichée dans resumeData.js à son icône et à sa
// couleur de marque (utilisées par la variante "cartes" de DevWebComponent).
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
};
