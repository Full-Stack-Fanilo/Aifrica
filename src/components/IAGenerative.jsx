import React from "react";
import "../css/IAGenerative.css";
import iaImage from "../assets/images/Ia generative.png";
import { useNavigate } from "react-router-dom";

export default function IAGenerative() {
  const navigate = useNavigate();
  return (
    <section className="ia-gen-section1">
      <div className="ia-content">
        {/* IMAGE GAUCHE */}
        <div className="ia-left">
          <img src={iaImage} alt="IA Générative" className="ia-img" />
        </div>

        {/* TEXTE DROITE */}
        <div className="ia-right">
          <h1 className="ia-title">
            IA <span>Générative</span>
          </h1>
          <h2 className="ia-subtitle">
            <span className="ia-strong">L'IA générative</span> : une{" "}
            <span className="ia-strong">révolution</span> au cœur de
            l'intelligence artificielle
          </h2>

          <p className="ia-text">
            Voici un paragraphe court, clair et percutant pour une page
            d’accueil : L’IA générative transforme profondément la manière dont
            les entreprises créent, innovent et travaillent. Capable de produire
            du texte, du code, des images ou des supports marketing, elle ouvre
            la voie à une automatisation intelligente et à une créativité
            démultipliée. Quel que soit leur taille, les organisations peuvent
            accélérer leurs projets, optimiser leurs décisions et gagner en
            efficacité. Construite sur cette nouvelle génération d’IA, la
            plateforme Aifrica met cette puissance au service de votre
            entreprise.
          </p>
          <button
            className="ia-link"
            onClick={() => navigate("/IA-Générative")}
          >
            En savoir plus sur l'IA Générative
          </button>
        </div>
      </div>
    </section>
  );
}
