import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import profile from "../assets/profile.jpg";
import menuIcon from "../assets/menu.png";
import useIsMobile from "../hooks/useIsMobile";

const navLinkClass = ({ isActive }) => `nav-link ${isActive ? "active" : ""}`;

export default function Sidebar() {
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebarOnMobile = () => {
    if (isMobile) setIsSidebarOpen(false);
  };

  return (
    <nav className={`sidebar ${isMobile ? "mobile" : ""}`}>
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
