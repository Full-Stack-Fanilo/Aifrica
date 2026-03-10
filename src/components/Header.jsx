import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "../css/Header.css";
import headerImage from "../assets/images/NouvelleAifrica.png";
import { useLanguage } from "../contexts/LanguageContext";

function Header() {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <div className="home-v3-container">
      <section className="hero-v3">
        <div className="hero-backdrop">
          <div className="backdrop-grid"></div>
        </div>

        <div className="hero-wrapper-v3">
          <div className="hero-content-v3">
            <h1 className="hero-headline">
              {t('header.title')}
              <span className="text-accent">
                {t('header.title_highlight')}
              </span>
            </h1>

            <p className="hero-lead">
              {t('header.description')}
            </p>

            <div className="hero-actions">
              <button
                className="btn-hero-primary"
                onClick={() => scrollToSection("contact")}
              >
                {t('header.start_project')}
                <FaArrowRight />
              </button>
              <button
                className="btn-hero-outline"
                onClick={() => scrollToSection("services")}
              >
                {t('header.explore_solutions')}
              </button>
            </div>
          </div>

          <div className="hero-visual-v3">
            <div className="visual-container">
              <img src={headerImage} alt="Africa AI" className="globe-img-v3" />
              <div className="visual-ring ring-1"></div>
              <div className="visual-ring ring-2"></div>
              <div className="visual-ring ring-3"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Header;
