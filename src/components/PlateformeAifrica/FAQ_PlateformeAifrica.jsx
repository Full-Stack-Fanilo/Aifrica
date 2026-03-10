import React, { useState } from "react";
import { useLanguage } from "../../contexts/LanguageContext";

const FAQ_PlateformeAifrica = () => {
  const [activeItem, setActiveItem] = useState(null);
  const { t } = useLanguage();

  const faqs = t('plateformeAifrica.faq.items');

  const toggleFAQ = (index) => {
    setActiveItem(activeItem === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="container">
        <h2 className="section-title">{t('plateformeAifrica.faq.title')}</h2>
        <p className="section-subtitle">
          {t('plateformeAifrica.faq.subtitle')}
        </p>
        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${activeItem === index ? 'active' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="faq-icon">+</span>
              </button>
              <div className="faq-answer">
                <div className="faq-answer-content">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ_PlateformeAifrica;
