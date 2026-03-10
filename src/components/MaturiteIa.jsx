import React from "react";
import "../css/MaturiteIa.css";
import maturiteImg from "../assets/images/diagnostic-preview.png";
import { useLanguage } from "../contexts/LanguageContext";

export default function MaturiteIa() {
  const { t } = useLanguage();
  return (
    <section className="maturite-wrapper">
      <div className="maturite-left">
        <h1 className="maturite-title"
          dangerouslySetInnerHTML={{ __html: t('maturiteIa.title') }}
        />

        <p className="maturite-subtitle"
          dangerouslySetInnerHTML={{ __html: t('maturiteIa.subtitle') }}
        />

        <p className="maturite-desc">
          {t('maturiteIa.description')}
        </p>

        <button className="maturite-btn">
          {t('maturiteIa.button')}
        </button>
      </div>

      <div className="maturite-right">
        <img src={maturiteImg} alt={t('maturiteIa.alt')} className="maturite-image" />
      </div>
    </section>
  );
}
