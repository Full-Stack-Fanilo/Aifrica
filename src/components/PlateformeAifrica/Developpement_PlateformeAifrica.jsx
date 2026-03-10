import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

const Developpement_PlateformeAifrica = () => {
  const { t } = useLanguage();

  const timeline = t('plateformeAifrica.developpement.steps');

  return (
    <section className="development-section">
      <div className="container">
        <h2 className="section-title">{t('plateformeAifrica.developpement.title')}</h2>
        <p className="section-subtitle">
          {t('plateformeAifrica.developpement.subtitle')}
        </p>
        <div className="development-timeline">
          {timeline.map((item, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-number">{item.number}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <p className="timeline-description">{item.description}</p>
              </div>
              <div className="timeline-dot"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Developpement_PlateformeAifrica;
