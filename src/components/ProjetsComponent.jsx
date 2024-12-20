import React, { useState, useEffect } from "react";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";

export default function Projets() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMaintenanceMode, setIsMaintenanceMode] = useState(true);

  useEffect(() => {
    const handleWindowResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleWindowResize);

    // Appeler handleWindowResize une fois au chargement du composant
    handleWindowResize();

    // Nettoyer l'écouteur d'événement lors de la suppression du composant
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <section className="projets">
      <div className="title">
        {!isMobile && <h2 className="title_item name">BENJAMIN BUSSELET</h2>}
        <h3 className="mb2">PROJETS</h3>
      </div>
      <article>
        {isMaintenanceMode ? (
          <div className="maintenance-message">
            <p>
              Cette partie du site est actuellement en maintenance. Merci de
              revenir plus tard.
            </p>
          </div>
        ) : (
          <>
            <div className="card flip-card1">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={img1} alt="img1" title="img1" />
                </div>
                <div className="flip-card-back">
                  <div className="flip-card-text">
                    <small>
                      Un site OnePage 100% responsive pour un festival
                    </small>
                    <a
                      href="https://benjaminbusselet.github.io/lesfilmsdepleinair_react/#"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Voir le site
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card flip-card2">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={img2} alt="img2" title="img2" />
                </div>
                <div className="flip-card-back">
                  <div className="flip-card-text">
                    <small>Un générateur de score de football</small>
                    <a
                      href="../projects/lepredicator/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Voir le site
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card flip-card3">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={img3} alt="img3" title="img3" />
                </div>
                <div className="flip-card-back">
                  <div className="flip-card-text">
                    <small>Un jeu de plateau tour par tour en JavaScript</small>
                    <a
                      href="../projects/laravsnathan/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Voir le site
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card flip-card4">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={img4} alt="img4" title="img4" />
                </div>
                <div className="flip-card-back">
                  <div className="flip-card-text">
                    <small>Un site d'avis de restaurants en JavaScript</small>
                    <a
                      href="../projects/kelresto/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Voir le site
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card flip-card5">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src={img5} alt="img5" title="img5" />
                </div>
                <div className="flip-card-back">
                  <div className="flip-card-text">
                    <small>Un site de prise de rendez-vous</small>
                    <a
                      href="https://www.puresophro.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Voir le site
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </article>
    </section>
  );
}
