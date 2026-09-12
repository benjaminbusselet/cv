import { useState, useEffect } from "react";

// En dessous de ce seuil : sidebar en menu déroulant horizontal (mobile).
// Entre ce seuil et TABLET_BREAKPOINT (voir main.css) : sidebar verticale
// classique mais réduite (tablette). Doit rester synchronisé avec la
// media query `max-width` du CSS — celle-ci inclut la borne, donc le
// seuil JS utilise la même valeur avec un test strict "<" pour ne pas
// se chevaucher au pixel près.
const MOBILE_BREAKPOINT = 640;

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
