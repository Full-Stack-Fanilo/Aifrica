import React, { useState } from "react";
import { FaChevronDown, FaArrowRight, FaDatabase, FaCog, FaChartLine, FaEye } from "react-icons/fa";

const styles = `
  :root {
    --primary-navy: #1a3a52;
    --primary-dark: #0f2537;
    --accent-gold: #d4a017;
    --accent-yellow: #f4c430;
    --light-bg: #f8f9fa;
    --white: #ffffff;
    --text-dark: #1a1a1a;
    --text-gray: #6b7280;
    --border-light: #e5e7eb;
    --shadow-sm: 0 2px 8px rgba(26, 58, 82, 0.08);
    --shadow-md: 0 4px 16px rgba(26, 58, 82, 0.12);
    --shadow-lg: 0 8px 32px rgba(26, 58, 82, 0.16);
    --gradient-accent: linear-gradient(135deg, var(--accent-gold) 0%, var(--accent-yellow) 100%);
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .data-page {
    font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
    color: var(--text-dark);
    background: var(--white);
  }

  /* === SECTION 1 : INTRO === */
  .solution-ia {
    background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-navy) 60%, #1e4d6e 100%);
    color: var(--white);
    padding: 100px 24px 80px;
    position: relative;
    overflow: hidden;
  }

  .solution-ia::before {
    content: '';
    position: absolute;
    top: -60px;
    right: -80px;
    width: 420px;
    height: 420px;
    background: radial-gradient(circle, rgba(212,160,23,0.15) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }

  .solution-ia-container {
    max-width: 1100px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .solution-ia-header h2 {
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 800;
    line-height: 1.15;
    margin-bottom: 22px;
    letter-spacing: -0.02em;
  }

  .solution-ia-header h2 .highlight {
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .solution-ia-header p {
    font-size: 1.05rem;
    color: rgba(255,255,255,0.75);
    max-width: 640px;
    line-height: 1.7;
    margin-bottom: 40px;
  }

  .solution-ia-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
  }

  .solution-ia-left h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 20px;
    color: var(--white);
  }

  .solution-ia-left p {
    font-size: 1rem;
    color: rgba(255,255,255,0.75);
    line-height: 1.7;
    margin-bottom: 30px;
  }

  .ia-list {
    list-style: none;
    padding: 0;
  }

  .ia-list li {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 15px;
    color: rgba(255,255,255,0.85);
    font-size: 0.95rem;
  }

  .ia-icon {
    color: var(--accent-yellow);
    flex-shrink: 0;
  }

  /* === SECTION 2 : ARCHITECTURE DATA === */
  .ia-solutions-grid {
    padding: 80px 24px;
    background: var(--light-bg);
  }

  .ia-solutions-container {
    max-width: 1100px;
    margin: 0 auto;
    text-align: center;
  }

  .ia-solutions-container h2 {
    font-size: clamp(1.6rem, 3.5vw, 2.4rem);
    font-weight: 800;
    color: var(--primary-dark);
    margin-bottom: 16px;
    letter-spacing: -0.02em;
  }

  .subtitle {
    font-size: 1rem;
    color: var(--text-gray);
    max-width: 560px;
    line-height: 1.7;
    margin: 0 auto 48px;
  }

  .ia-solutions-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
  }

  .ia-solution-card {
    background: var(--white);
    border: 1px solid var(--border-light);
    border-radius: 14px;
    padding: 30px 26px;
    box-shadow: var(--shadow-sm);
    transition: box-shadow 0.25s, transform 0.25s;
    position: relative;
    overflow: hidden;
  }

  .ia-solution-card::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 3px;
    background: var(--gradient-accent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  .ia-solution-card:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-4px);
  }

  .ia-solution-card:hover::after {
    transform: scaleX(1);
  }

  .ia-icon-box {
    width: 52px;
    height: 52px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-bottom: 18px;
  }

  .blue1 { background: rgba(26,58,82,0.1); color: var(--primary-navy); }
  .purple1 { background: rgba(147,51,234,0.1); color: #9333ea; }
  .green { background: rgba(16,185,129,0.1); color: #059669; }
  .cyan { background: rgba(6,182,212,0.1); color: #0891b2; }

  .ia-solution-card h4 {
    font-size: 1rem;
    font-weight: 700;
    color: var(--primary-dark);
    margin-bottom: 10px;
  }

  .ia-solution-card p {
    font-size: 0.875rem;
    color: var(--text-gray);
    line-height: 1.65;
  }

  /* === SECTION 3 : PROMESSE AIFRICA === */
  .ia-developpement {
    padding: 80px 24px;
    background: var(--white);
  }

  .ia-developpement-container {
    max-width: 1100px;
    margin: 0 auto;
    text-align: center;
  }

  .ia-developpement-container h2 {
    font-size: clamp(1.6rem, 3.5vw, 2.4rem);
    font-weight: 800;
    color: var(--primary-dark);
    margin-bottom: 16px;
    letter-spacing: -0.02em;
  }

  .ia-developpement-container h2 .highlight {
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .ia-developpement-subtitle {
    font-size: 1rem;
    color: var(--text-gray);
    max-width: 560px;
    line-height: 1.7;
    margin: 0 auto 48px;
  }

  .ia-steps {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 800px;
    margin: 0 auto;
  }

  .ia-step {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    background: var(--white);
    border: 1px solid var(--border-light);
    border-radius: 14px;
    padding: 30px;
    box-shadow: var(--shadow-sm);
    transition: box-shadow 0.25s, transform 0.25s;
    width: 100%;
  }

  .ia-step:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
  }

  .ia-step-number {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: var(--gradient-accent);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.1rem;
    font-weight: 800;
    color: var(--primary-dark);
    flex-shrink: 0;
    box-shadow: 0 4px 14px rgba(212,160,23,0.3);
  }

  .ia-step-content h3 {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--primary-dark);
    margin-bottom: 8px;
  }

  .ia-step-content p {
    font-size: 0.9rem;
    color: var(--text-gray);
    line-height: 1.6;
  }

  .ia-arrow {
    font-size: 2rem;
    color: var(--accent-gold);
    margin: 10px 0;
  }

  /* === FAQ SECTION === */
  .faq-section {
    padding: 80px 24px;
    background: var(--light-bg);
  }

  .faq-section h2 {
    font-size: clamp(1.6rem, 3.5vw, 2.4rem);
    font-weight: 800;
    color: var(--primary-dark);
    margin-bottom: 16px;
    letter-spacing: -0.02em;
    text-align: center;
  }

  .faq-section h2 span {
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .faq-subtitle {
    font-size: 1rem;
    color: var(--text-gray);
    max-width: 560px;
    line-height: 1.7;
    margin: 0 auto 48px;
    text-align: center;
  }

  .faq-container {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .faq-item {
    background: var(--white);
    border: 1px solid var(--border-light);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    cursor: pointer;
    transition: box-shadow 0.2s;
  }

  .faq-item.active {
    box-shadow: var(--shadow-md);
    border-color: rgba(212,160,23,0.3);
  }

  .faq-question {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px;
    gap: 16px;
  }

  .faq-question h3 {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--primary-dark);
    line-height: 1.4;
  }

  .faq-icon {
    color: var(--accent-gold);
    flex-shrink: 0;
    font-size: 14px;
    transition: transform 0.3s ease;
  }

  .faq-icon.rotate {
    transform: rotate(180deg);
  }

  .faq-answer {
    padding: 0 24px 20px;
    font-size: 0.9rem;
    color: var(--text-gray);
    line-height: 1.7;
    border-top: 1px solid var(--border-light);
    padding-top: 16px;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .solution-ia-content {
      grid-template-columns: 1fr;
      gap: 40px;
    }
    
    .ia-solutions-cards {
      grid-template-columns: 1fr;
    }
    
    .ia-step {
      flex-direction: column;
      text-align: center;
    }
  }
`;

export default function DataIntelligence() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Qu'est-ce que la Data Intelligence selon Aifrica ?",
      answer: "C'est la capacité à transformer vos données brutes en décisions stratégiques à forte valeur ajoutée pour votre entreprise.",
    },
    {
      question: "Pourquoi structurer ses données est essentiel ?",
      answer: "Sans structure, les données restent inutilisables. La Data Intelligence repose sur une architecture moderne permettant d'exploiter pleinement vos informations.",
    },
    {
      question: "Quels types d'analyses propose Aifrica ?",
      answer: "Des analyses descriptive, diagnostique, prédictive et prescriptive pour comprendre, expliquer, anticiper et recommander.",
    },
    {
      question: "Quels outils utilisez-vous ?",
      answer: "Snowflake, Databricks, Power BI, Python, TensorFlow et l'ensemble du stack data moderne.",
    },
    {
      question: "Aifrica propose-t-elle une approche sur mesure ?",
      answer: "Oui, chaque solution est personnalisée à votre contexte, vos données et vos objectifs business.",
    },
  ];

  return (
    <div className="data-page">
      <style>{styles}</style>

      {/* === SECTION 1 : INTRO === */}
      <section className="solution-ia" id="services">
        <div className="solution-ia-container">
          <div className="solution-ia-header">
            <h2>
              Data <span className="highlight">Intelligence</span>
            </h2>
            <p>
              Transformez vos données en avantage concurrentiel. Chez Aifrica,
              nous faisons de votre chaos informationnel une clarté stratégique,
              afin de vous donner la capacité d'anticiper, d'optimiser et de
              prendre des décisions éclairées.
            </p>
          </div>

          <div className="solution-ia-content">
            {/* TEXTE */}
            <div className="solution-ia-left">
              <h3>De la donnée brute à la décision stratégique</h3>
              <p>
                Chaque jour, votre entreprise génère des millions de données. La
                Data Intelligence n'est pas une question d'outils, mais une
                question de vision. Nous vous aidons à bâtir une culture
                data-driven robuste pour transformer vos données en actions
                concrètes et en décisions à fort impact.
              </p>

              <ul className="ia-list">
                <li>
                  <FaArrowRight className="ia-icon" /> Valorisation de vos
                  données
                </li>
                <li>
                  <FaArrowRight className="ia-icon" /> Insights en temps réel
                </li>
                <li>
                  <FaArrowRight className="ia-icon" /> Culture data-driven
                </li>
                <li>
                  <FaArrowRight className="ia-icon" /> Décisions stratégiques
                  assistées par IA
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* === SECTION 2 : ARCHITECTURE DATA === */}
      <section className="ia-solutions-grid">
        <div className="ia-solutions-container">
          <h2>Une architecture moderne en 4 couches</h2>
          <p className="subtitle">
            Un socle structuré pour transformer vos données en insights
            actionnables.
          </p>

          <div className="ia-solutions-cards">
            {/* 1 - Collecte */}
            <div className="ia-solution-card">
              <div className="ia-icon-box blue1">
                <FaDatabase />
              </div>
              <h4>1. Collecte & Unification</h4>
              <p>
                Connexion à toutes vos sources de données, pipelines robustes et
                unification dans un environnement cohérent.
              </p>
            </div>

            {/* 2 - Stockage */}
            <div className="ia-solution-card">
              <div className="ia-icon-box purple1">
                <FaCog />
              </div>
              <h4>2. Donnée de qualité</h4>
              <p>
                Data Warehouses, Data Lakes, conformité, sécurité multicouche et
                contrôle qualité automatisé.
              </p>
            </div>

            {/* 3 - Analyse */}
            <div className="ia-solution-card">
              <div className="ia-icon-box green">
                <FaChartLine />
              </div>
              <h4>3. Analyse & IA</h4>
              <p>
                Descriptive, diagnostique, prédictive et prescriptive pour
                comprendre, expliquer et anticiper.
              </p>
            </div>

            {/* 4 - Action */}
            <div className="ia-solution-card">
              <div className="ia-icon-box cyan">
                <FaEye />
              </div>
              <h4>4. Visualisation & Action</h4>
              <p>
                Dashboards temps réel, alertes automatiques, intégration dans
                vos processus métiers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* === SECTION 3 : PROMESSE AIFRICA === */}
      <section className="ia-developpement">
        <div className="ia-developpement-container">
          <h2>
            La <span className="highlight">promesse</span> Aifrica
          </h2>
          <p className="ia-developpement-subtitle">
            Votre avantage concurrentiel se construit sur la maîtrise de vos
            données.
          </p>

          <div className="ia-steps">
            <div className="ia-step">
              <div className="ia-step-number">1</div>
              <div className="ia-step-content">
                <h3>Solutions sur mesure</h3>
                <p>
                  Chaque solution est conçue selon votre contexte, vos données
                  et vos objectifs : rien n'est standardisé.
                </p>
              </div>
            </div>

            <div className="ia-arrow">↓</div>

            <div className="ia-step">
              <div className="ia-step-number">2</div>
              <div className="ia-step-content">
                <h3>Expertise technique complète</h3>
                <p>
                  Snowflake, Databricks, Power BI, Python, TensorFlow : nous
                  maîtrisons le stack data moderne.
                </p>
              </div>
            </div>

            <div className="ia-arrow">↓</div>

            <div className="ia-step">
              <div className="ia-step-number">3</div>
              <div className="ia-step-content">
                <h3>Focus sur le marché africain</h3>
                <p>
                  Une compréhension profonde des réalités opérationnelles et
                  stratégiques des entreprises africaines.
                </p>
              </div>
            </div>

            <div className="ia-arrow">↓</div>

            <div className="ia-step">
              <div className="ia-step-number">4</div>
              <div className="ia-step-content">
                <h3>Partenariat durable</h3>
                <p>
                  Un accompagnement de bout en bout pour garantir une adoption
                  durable et un ROI mesurable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <h2>
          Questions <span>fréquentes</span>
        </h2>
        <p className="faq-subtitle">
          Tout ce que vous devez savoir sur notre approche Data Intelligence
        </p>

        <div className="faq-container">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? "active" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <FaChevronDown
                  className={`faq-icon ${activeIndex === index ? "rotate" : ""}`}
                />
              </div>

              {activeIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
