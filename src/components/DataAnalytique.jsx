import React from "react";
import "../css/DataAnalytique.css";
import dataImg from "../assets/images/analytique.jpg";
import { useNavigate } from "react-router-dom";

export default function DataAnalytique() {
  const navigate = useNavigate();
  return (
    <section className="data-section">
      {/* TITRE PRINCIPAL */}
      <h1 className="data-title">
        Data <span>Analytique</span> et <span>l’intelligence</span> des{" "}
        <span>données</span>
      </h1>
      {/* IMAGE */}
      <img src={dataImg} alt="Serveurs" className="data-img" />
      {/* SOUS-TITRE */}
      <p className="data-subtitle">
        <span>La donnée :</span> le <span>carburant</span> essentiel de
        l'intelligence artificielle
      </p>

      {/* TEXTE */}
      <div className="data-content">
        <p>
          La Data Analytique permet à votre entreprise de transformer ses
          données en décisions éclairées, en anticipant les tendances, les
          risques et les opportunités. Dans l’univers de l’IA, la qualité des
          données est essentielle : elles constituent le socle sur lequel
          s’entraînent les modèles pour détecter des patterns, établir des
          corrélations et générer des prédictions fiables. Des données riches et
          bien structurées garantissent des performances optimales pour toutes
          vos initiatives d’intelligence artificielle.
        </p>
      </div>

      {/* LIEN */}
      <button
        className="data-link"
        onClick={() => navigate("/dataIntelligence")}
      >
        En savoir plus sur la Data Analytics
      </button>
    </section>
  );
}
