import React from "react";
import "../css/DataAnalytique.css";
import dataImg from "../assets/images/analytique.jpg";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

export default function DataAnalytique() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  return (
    <section className="data-section">
      {/* TITRE PRINCIPAL */}
      <h1 className="data-title"
        dangerouslySetInnerHTML={{ __html: t('dataAnalytique.title') }}
      />
      {/* IMAGE */}
      <img src={dataImg} alt={t('dataAnalytique.alt')} className="data-img" />
      {/* SOUS-TITRE */}
      <p className="data-subtitle"
        dangerouslySetInnerHTML={{ __html: t('dataAnalytique.subtitle') }}
      />

      {/* TEXTE */}
      <div className="data-content">
        <p>
          {t('dataAnalytique.description')}
        </p>
      </div>

      {/* LIEN */}
      <button
        className="data-link"
        onClick={() => navigate("/dataIntelligence")}
      >
        {t('dataAnalytique.button')}
      </button>
    </section>
  );
}
