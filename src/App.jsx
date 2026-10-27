import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import ProjectPage from "./components/ProjectPage";
import CvPage from "./components/CvPage";

// Chaque section de l'accueil garde sa propre route : la navigation
// fonctionne avec le HashRouter (pas d'ancre #id possible) et les
// liens déjà partagés (/presentation, /projets...) restent valides.
export const SECTIONS = ["presentation", "competences", "projets", "parcours", "contact"];

export default function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <main>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          {SECTIONS.map((id) => (
            <Route key={id} path={`/${id}`} element={<Home section={id} />} />
          ))}
          <Route path="/projet/:slug" element={<ProjectPage />} />
          <Route path="/cv" element={<CvPage />} />
          {/* Anciennes routes conservées pour ne pas casser des liens
              externes déjà partagés (LinkedIn, favoris...). */}
          <Route path="/experiences" element={<Navigate to="/parcours" replace />} />
          <Route path="/formations" element={<Navigate to="/parcours" replace />} />
          <Route path="/devweb" element={<Navigate to="/competences" replace />} />
          <Route path="/autres" element={<Navigate to="/competences" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
