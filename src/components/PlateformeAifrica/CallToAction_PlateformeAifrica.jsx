import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

const CallToAction_PlateformeAifrica = () => {
  const { t } = useLanguage();

  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">
            {t('plateformeAifrica.cta.title')}
          </h2>
          <p className="cta-description">
            {t('plateformeAifrica.cta.description')}
          </p>
          <button className="cta-button">
            {t('plateformeAifrica.cta.button')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction_PlateformeAifrica;
