import React, { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import profile from "../assets/profile.jpg";
import menuIcon from "../assets/menu.png";
import useIsMobile from "../hooks/useIsMobile";

const navLinkClass = ({ isActive }) => `nav-link ${isActive ? "active" : ""}`;

export default function Sidebar() {
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const closeSidebarOnMobile = () => {
    if (isMobile) setIsSidebarOpen(false);
  };

  // En mobile, .sidebar est en position: fixed avec une hauteur qui
  // dépend à la fois du contenu (photo, nom) et de vw (largeur
  // d'écran) — impossible à deviner en dur en CSS avec un vh fixe.
  // On mesure sa vraie hauteur et on l'expose en variable CSS pour
  // que main.haut puisse s'y aligner exactement, sans jamais chevaucher
  // ni laisser un vide sous le header.
  useEffect(() => {
    const el = sidebarRef.current;
    if (!el) return;
    const updateHeight = () => {
      document.documentElement.style.setProperty(
        "--sidebar-mobile-height",
        `${el.getBoundingClientRect().height}px`
      );
    };
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(el);
    return () => observer.disconnect();
  }, [isMobile]);

  return (
    <nav ref={sidebarRef} className={`sidebar ${isMobile ? "mobile" : ""}`}>
      <div className="sidebar-header">
        <div className="photo">
          <img src={profile} alt="Benjamin Busselet" title="photo" />
        </div>
        {isMobile && (
          <div className="prenomnom">
            <h3 className="title_item name">BENJAMIN BUSSELET</h3>
          </div>
        )}
        {isMobile && (
          <div className="button">
            <button
              type="button"
              className="toggle-button"
              onClick={() => setIsSidebarOpen((prev) => !prev)}
              aria-expanded={isSidebarOpen}
              aria-controls="sidebar-nav"
              aria-label={isSidebarOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              <img src={menuIcon} alt="" aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
      <div id="sidebar-nav" className={`sidebar-nav ${isSidebarOpen ? "active" : ""}`}>
        <NavLink to="/presentation" className={navLinkClass} onClick={closeSidebarOnMobile}>
          Présentation
        </NavLink>
        <NavLink to="/competences" className={navLinkClass} onClick={closeSidebarOnMobile}>
          Compétences
        </NavLink>
        <NavLink to="/experiences" className={navLinkClass} onClick={closeSidebarOnMobile}>
          Expériences
        </NavLink>
        <NavLink to="/formations" className={navLinkClass} onClick={closeSidebarOnMobile}>
          Formations
        </NavLink>
        <NavLink to="/projets" className={navLinkClass} onClick={closeSidebarOnMobile}>
          Projets
        </NavLink>
      </div>
    </nav>
  );
}
