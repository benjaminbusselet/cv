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
            <img
              className="toggle-button"
              src={menuIcon}
              alt="Ouvrir le menu"
              onClick={() => setIsSidebarOpen((prev) => !prev)}
            />
          </div>
        )}
      </div>
      <div className={`sidebar-nav ${isSidebarOpen ? "active" : ""}`}>
        <NavLink to="/presentation" className={navLinkClass} onClick={closeSidebarOnMobile}>
          Présentation
        </NavLink>
        <div className="menu_competences">
          Compétences
          <div className="sub_menu">
            <NavLink to="/devweb" className={navLinkClass} onClick={closeSidebarOnMobile}>
              Développement Web
            </NavLink>
            <NavLink to="/autres" className={navLinkClass} onClick={closeSidebarOnMobile}>
              Autres
            </NavLink>
          </div>
        </div>
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
