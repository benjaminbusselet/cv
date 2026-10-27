import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { SECTIONS } from "../App";
import { LANGS, useLang } from "../i18n";

const THEME_KEY = "cv-theme";

// Thème : suit le système tant que l'utilisateur n'a rien choisi ;
// un clic fixe data-theme sur <html>, que main.css prend en priorité.
function useTheme() {
  const systemDark = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem(THEME_KEY);
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (!theme) return;
    document.documentElement.dataset.theme = theme;
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {
      // Préférence non mémorisée, sans conséquence.
    }
  }, [theme]);

  const isDark = theme ? theme === "dark" : systemDark();
  return [isDark, () => setTheme(isDark ? "light" : "dark")];
}

export default function Header() {
  const { lang, setLang, t } = useLang();
  const [isDark, toggleTheme] = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setIsOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      <Link to="/" className="header__brand">
        Benjamin<span>.</span>
      </Link>

      <nav id="main-nav" className={`header__nav ${isOpen ? "header__nav--open" : ""}`}>
        {SECTIONS.map((id) => (
          <NavLink key={id} to={`/${id}`} className="header__link">
            {t(`nav.${id}`)}
          </NavLink>
        ))}
      </nav>

      <div className="header__tools">
        <div className="lang-switch" role="group" aria-label="Langue / Language">
          {LANGS.map((code) => (
            <button
              key={code}
              type="button"
              className={code === lang ? "is-active" : ""}
              aria-pressed={code === lang}
              onClick={() => setLang(code)}
            >
              {code.toUpperCase()}
            </button>
          ))}
        </div>
        <button
          type="button"
          className="icon-button"
          onClick={toggleTheme}
          aria-label={t(isDark ? "themeLight" : "themeDark")}
        >
          {isDark ? <FiSun /> : <FiMoon />}
        </button>
        <button
          type="button"
          className="icon-button header__burger"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-controls="main-nav"
          aria-label={t("menu")}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </header>
  );
}
