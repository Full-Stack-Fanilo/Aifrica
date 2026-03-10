import React from "react";
import "../css/IAAgentique.css";
import iaImage from "../assets/images/ia agentique.png";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

const IAAgentique = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  return (
    <section className="ia-gen-section">
      <div className="ia-content">
        {/* TEXTE DROITE */}
        <div className="ia-right">
          <h1 className="ia-title">
            {t('iaAgentiqueComponent.title')} <span>{t('iaAgentiqueComponent.title_highlight')}</span>
          </h1>
          <h2 className="ia-subtitle"
            dangerouslySetInnerHTML={{ __html: t('iaAgentiqueComponent.subtitle') }}
          />

          <p className="ia-text">
            {t('iaAgentiqueComponent.description')}
          </p>

          <button className="ia-link" onClick={() => navigate("/IA-Agentique")}>
            {t('iaAgentiqueComponent.button')}
          </button>
        </div>

        {/* IMAGE GAUCHE */}
        <div className="ia-left">
          <img src={iaImage} alt={t('iaAgentiqueComponent.alt')} className="ia-img" />
        </div>
      </div>
    </section>
  );
};

export default IAAgentique;
