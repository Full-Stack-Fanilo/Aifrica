import React from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import "../css/Service.css";
import img1 from "../assets/images/services1.png";
import img2 from "../assets/images/services2.png";
import img3 from "../assets/images/services3.png";
import img4 from "../assets/images/services4.png";
import img5 from "../assets/images/services5.png";
import img6 from "../assets/images/service-preview.png";
import { useLanguage } from "../contexts/LanguageContext";

export default function Service() {
  const { t } = useLanguage();
  
  const services = [
    {
      icon: img1,
      title: t('services.page.items.diagnostic.title'),
      description: t('services.page.items.diagnostic.description'),
      link: "#diagnostic",
      color: "#1a3a52",
    },
    {
      icon: img3,
      title: t('services.page.items.consulting.title'),
      description: t('services.page.items.consulting.description'),
      link: "#consulting",
      color: "#d4a017",
    },
    {
      icon: img2,
      title: t('services.page.items.acculturation.title'),
      description: t('services.page.items.acculturation.description'),
      link: "#acculturation",
      color: "#1a3a52",
    },
    {
      icon: img5,
      title: t('services.page.items.solution.title'),
      description: t('services.page.items.solution.description'),
      link: "#solutions",
      color: "#f4c430",
      highlight: true,
    },
    {
      icon: img4,
      title: t('services.page.items.orchestration.title'),
      description: t('services.page.items.orchestration.description'),
      link: "#orchestration",
      color: "#1a3a52",
    },
  ];

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        {/* COLONNE GAUCHE */}
        <div className="services-left">
          <div className="services-header">
            <span className="services-badge">
              <FaCheckCircle className="badge-icon" />
              {t('services.page.badge')}
            </span>
            <h1 className="services-title">
              {t('services.page.title')}
              <span className="highlight-service">{t('services.page.title_highlight')}</span>
            </h1>
            <p className="services-text">
              {t('services.page.description')}
            </p>
          </div>
          <div className="illustration-wrapper">
            <img
              className="illustration-img"
              src={img6}
              alt={t('services.page.badge')}
            />
          </div>
        </div>

        {/* COLONNE DROITE */}
        <div className="services-right">
          <div className="services-grid">
            {services.map((service, index) => (
              <div
                className={`service-card ${
                  service.highlight ? "service-highlight" : ""
                }`}
                key={index}
                style={{ "--service-color": service.color }}
              >
                {/* PARTIE GAUCHE - ICÔNE */}
                <div className="service-card-left">
                  <div className="service-icon-wrapper">
                    <img
                      src={service.icon}
                      alt={service.title}
                      className="service-icon-img"
                    />
                  </div>
                </div>

                {/* PARTIE DROITE - CONTENU */}
                <div className="service-card-right">
                  <div className="service-card-header">
                    <h4 className="service-title">{service.title}</h4>
                    {service.highlight && (
                      <span className="popular-badge">{t('services.page.popular')}</span>
                    )}
                  </div>

                  <div className="service-content">
                    <p className="service-description">{service.description}</p>
                  </div>

                  <a href={service.link} className="service-link">
                    <span>{t('services.page.discover')}</span>
                    <FaArrowRight className="arrow-icon" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
