import React from "react";
import useIsMobile from "../hooks/useIsMobile";

// Factorise l'en-tête répété en haut de chaque section : le nom n'est
// affiché qu'en desktop (la sidebar mobile l'affiche déjà elle-même).
export default function SectionTitle({ heading, className }) {
  const isMobile = useIsMobile();

  return (
    <div className="title">
      {!isMobile && <h2 className="title_item name">BENJAMIN BUSSELET</h2>}
      <h3 className={className}>{heading}</h3>
    </div>
  );
}
