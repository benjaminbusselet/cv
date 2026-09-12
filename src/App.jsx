import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Presentation from "./components/PresentationComponent";
import Competences from "./components/CompetencesComponent";
import Experiences from "./components/ExperiencesComponent";
import Formations from "./components/FormationsComponent";
import Sidebar from "./components/Sidebar";
import Projets from "./components/ProjetsComponent";
import useIsMobile from "./hooks/useIsMobile";

export default function App() {
  const isMobile = useIsMobile();
  const location = useLocation();

  return (
    <>
      <Sidebar />

      <main className={isMobile ? "haut" : ""}>
        {/* key={pathname} force React à démonter/remonter la section à
            chaque changement de route, ce qui relance l'animation
            fade-in définie en CSS (.page-transition) plutôt que de
            basculer instantanément d'un contenu à l'autre. */}
        <div className="page-transition" key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Navigate to="/presentation" replace />} />
            <Route path="/presentation" element={<Presentation />} />
            <Route path="/competences" element={<Competences />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/formations" element={<Formations />} />
            <Route path="/projets" element={<Projets />} />
            {/* Anciennes routes conservées pour ne pas casser des liens
                externes déjà partagés (LinkedIn, favoris...). */}
            <Route path="/devweb" element={<Navigate to="/competences" replace />} />
            <Route path="/autres" element={<Navigate to="/competences" replace />} />
            <Route path="*" element={<Navigate to="/presentation" replace />} />
          </Routes>
        </div>
      </main>
    </>
  );
}
