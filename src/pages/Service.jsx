import React from "react";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import "../css/Service.css";
import img1 from "../assets/images/services1.png";
import img2 from "../assets/images/services2.png";
import img3 from "../assets/images/services3.png";
import img4 from "../assets/images/services4.png";
import img5 from "../assets/images/services5.png";
import img6 from "../assets/images/service-preview.png";

export default function Service() {
  const services = [
    {
      icon: img1,
      title: "Diagnostic",
      description: "Evaluation de la maturité Data & IA de votre entreprise",
      link: "#diagnostic",
      color: "#1a3a52",
    },
    {
      icon: img3,
      title: "Consulting",
      description:
        "Définition et accompagnement de vos besoins en data et intelligence artificielle",
      link: "#consulting",
      color: "#d4a017",
    },
    {
      icon: img2,
      title: "Acculturation",
      description:
        "Formation sur les enjeux de l'IA pour votre métier et votre secteur d'activité",
      link: "#acculturation",
      color: "#1a3a52",
    },
    {
      icon: img5,
      title: "Solution avancée",
      description:
        "Implémentation des solutions sur mesure pour des besoins spécifiques",
      link: "#solutions",
      color: "#f4c430",
      highlight: true,
    },
    {
      icon: img4,
      title: "Orchestration",
      description:
        "Gestion de bout en bout de projets et de risques sur volet transverse de la transformation Data & IA",
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
              Nos Services
            </span>
            <h1 className="services-title">
              Accompagnement complet pour votre transformation{" "}
              <span className="highlight-service">Data & IA</span>
            </h1>
            <p className="services-text">
              Nous accompagnons votre organisation dans l'adoption de l'IA :
              stratégie, consulting, formations et solutions IA avancées pour
              propulser votre entreprise vers l'excellence digitale.
            </p>
          </div>
          <div className="illustration-wrapper">
            <img
              className="illustration-img"
              src={img6}
              alt="Services Aifrica"
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
                      <span className="popular-badge">Populaire</span>
                    )}
                  </div>

                  <div className="service-content">
                    <p className="service-description">{service.description}</p>
                  </div>

                  <a href={service.link} className="service-link">
                    <span>Découvrir</span>
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
