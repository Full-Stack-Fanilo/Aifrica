import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

const Header_PlateformeAifrica = () => {
  const { t } = useLanguage();

  return (
    <section className="header-section">
      <div className="container">
        <div className="header-content">
          <h1 className="header-title">
            {t('plateformeAifrica.header.title')}
          </h1>
          <p className="header-subtitle">
            {t('plateformeAifrica.header.subtitle')}
          </p>
          <div className="header-buttons">
            <button className="btn btn-primary">
              {t('plateformeAifrica.header.start_free')}
            </button>
            <button className="btn btn-secondary">
              {t('plateformeAifrica.header.see_demo')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header_PlateformeAifrica;
