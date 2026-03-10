import React from "react";
import "../css/IAGenerative.css";
import iaImage from "../assets/images/Ia generative.png";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

export default function IAGenerative() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  return (
    <section className="ia-gen-section1">
      <div className="ia-header-title">
        <h2 className="ia-main-title">{t('iaGenerativeComponent.main_title')}</h2>
      </div>
      <div className="ia-content">
        {/* IMAGE GAUCHE */}
        <div className="ia-left">
          <img src={iaImage} alt={t('iaGenerativeComponent.alt')} className="ia-img" />
        </div>

        {/* TEXTE DROITE */}
        <div className="ia-right">
          <h1 className="ia-title">
            {t('iaGenerativeComponent.title')} <span>{t('iaGenerativeComponent.title_highlight')}</span>
          </h1>
          <h2 className="ia-subtitle"
            dangerouslySetInnerHTML={{ __html: t('iaGenerativeComponent.subtitle') }}
          />

          <p className="ia-text">
            {t('iaGenerativeComponent.description')}
          </p>
          <button
            className="ia-link"
            onClick={() => navigate("/IA-Générative")}
          >
            {t('iaGenerativeComponent.button')}
          </button>
        </div>
      </div>
    </section>
  );
}
