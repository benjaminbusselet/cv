import React, { useEffect } from "react";
import Presentation from "./PresentationComponent";
import Competences from "./CompetencesComponent";
import Projets from "./ProjetsComponent";
import Parcours from "./ParcoursComponent";
import Contact from "./ContactComponent";

// Page d'accueil longue ; `section` (fourni par la route /competences,
// /projets...) indique la section à faire défiler jusqu'en haut.
export default function Home({ section }) {
  useEffect(() => {
    if (!section) {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  }, [section]);

  return (
    <>
      <Presentation />
      <Competences />
      <Projets />
      <Parcours />
      <Contact />
    </>
  );
}
