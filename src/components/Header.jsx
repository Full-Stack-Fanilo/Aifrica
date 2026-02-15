import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "../css/Header.css";
import headerImage from "../assets/images/NewAifrica.png";

function Header() {
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
              Concevez, contruisez et déployez l’
              <span className="text-accent">
                IA au sein de votre entreprise en Afrique
              </span>
            </h1>

            <p className="hero-lead">
              Construisez des applications intelligentes adaptées à vos besoins,
              et déployez-les en toute confiance avec l'accompagnement de
              Aifrica.
            </p>

            <div className="hero-metrics">
              <div className="metric">
                <h3>500+</h3>
                <p>Clients</p>
              </div>
              <div className="metric-divider"></div>
              <div className="metric">
                <h3>95%</h3>
                <p>Satisfaction</p>
              </div>
              <div className="metric-divider"></div>
              <div className="metric">
                <h3>50+</h3>
                <p>Solutions</p>
              </div>
            </div>

            <div className="hero-actions">
              <button
                className="btn-hero-primary"
                onClick={() => scrollToSection("contact")}
              >
                Démarrer un projet
                <FaArrowRight />
              </button>
              <button
                className="btn-hero-outline"
                onClick={() => scrollToSection("services")}
              >
                Explorer les solutions
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
