import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 768;

// Centralise la détection "mobile" par largeur d'écran, réutilisée par
// plusieurs composants (Sidebar, App, sections) pour éviter de dupliquer
// le listener resize dans chacun.
export default function useIsMobile(breakpoint = MOBILE_BREAKPOINT) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );

  useEffect(() => {
    const handleWindowResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleWindowResize);
    handleWindowResize();
    return () => window.removeEventListener("resize", handleWindowResize);
  }, [breakpoint]);

  return isMobile;
}
