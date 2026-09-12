import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Presentation from "./components/PresentationComponent";
import DevWeb from "./components/DevWebComponent";
import Experiences from "./components/ExperiencesComponent";
import Formations from "./components/FormationsComponent";
import Autres from "./components/AutresComponent";
import Sidebar from "./components/Sidebar";
import Projets from "./components/ProjetsComponent";
import useIsMobile from "./hooks/useIsMobile";

export default function App() {
  const isMobile = useIsMobile();

  return (
    <>
      <Sidebar />

      <main className={isMobile ? "haut" : ""}>
        <Routes>
          <Route path="/" element={<Navigate to="/presentation" replace />} />
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/devweb" element={<DevWeb />} />
          <Route path="/autres" element={<Autres />} />
          <Route path="/experiences" element={<Experiences />} />
          <Route path="/formations" element={<Formations />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="*" element={<Navigate to="/presentation" replace />} />
        </Routes>
      </main>
    </>
  );
}
