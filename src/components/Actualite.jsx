import React, { useState, useEffect } from "react";
import "../css/Actualite.css";
import data from "../assets/images/data2.png";
import iaafrique from "../assets/images/pourquoi.jpg";
import data2 from "../assets/images/innovation.jpg";
import iaafrique2 from "../assets/images/jeune.jpg";
import { useNavigate } from "react-router-dom";

export default function Actualite() {
  const navigate = useNavigate();

  const slides = [
    {
      img: data,
      title: "Aifrica",
      quote:
        "La plateforme IA évolutive et innovante, démocratise l’intelligence artificielle au service des entreprises en Afrique.",
    },
    {
      img: iaafrique,
      title: "Pourquoi L’Afrique",
      quote:
        "L’Afrique représente un potentiel unique pour l’innovation, grâce à sa jeunesse, son dynamisme.",
    },
    {
      img: data2,
      title: "Innovation Tech",
      quote:
        "L’innovation technologique transforme les entreprises africaines en leur offrant de nouveaux leviers de performance, d’automatisation.",
    },
    {
      img: iaafrique2,
      title: "Jeunesse Africaine",
      quote:
        "La jeunesse africaine, créative et ambitieuse, façonne chaque jour l’avenir du continent en adoptant rapidement les outils numériques.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 2) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // pour gérer cas où slice dépasse la longueur, on calcule proprement :
  const getCurrentSlides = () => {
    const s = [];
    s.push(slides[currentIndex]);
    const nextIndex = (currentIndex + 1) % slides.length;
    s.push(slides[nextIndex]);
    return s;
  };

  const currentSlides = getCurrentSlides();

  return (
    <section className="actu-section">
      <h2 className="actu-title">
        LES <span>ACTUALITÉS</span> DE LA <span>DATA</span> et <br />{" "}
        <span>L'IA</span> EN <span>AFRIQUE</span>
      </h2>

      <div className="actu-cards-wrapper">
        <div className="actu-cards">
          {currentSlides.map((slide, index) => (
            <div key={index} className="actu-card big-card">
              <div className="left-img">
                <img src={slide.img} alt={slide.title} />
                <span className="img-title">{slide.title}</span>
              </div>

              <div className="right-text">
                <span className="quote-icon">”</span>
                <p className="quote">{slide.quote}</p>
                <button
                  className="link-service"
                  onClick={() => navigate("/pateforme-aifrica")}
                >
                  Découvrez nos services →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* flèches centrées */}
        <div className="arrows">
          <button
            className="arrow-btn"
            aria-label="Précédent"
            onClick={() =>
              setCurrentIndex((prev) =>
                prev === 0 ? slides.length - 2 : prev - 2,
              )
            }
          >
            {/* SVG chevron gauche */}
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="#0a1f68"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </button>

          <button
            className="arrow-btn"
            aria-label="Suivant"
            onClick={() =>
              setCurrentIndex((prev) => (prev + 2) % slides.length)
            }
          >
            {/* SVG chevron droite */}
            <svg
              viewBox="0 0 24 24"
              width="20"
              height="20"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M9 6L15 12L9 18"
                stroke="#0a1f68"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
