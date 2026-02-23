import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaRobot,
  FaLightbulb,
  FaBrain,
  FaRocket,
  FaCheckCircle,
  FaArrowRight,
  FaPen,
  FaImage,
  FaCode,
  FaComments,
  FaChartLine,
  FaShieldAlt,
  FaUsers,
  FaChevronDown,
} from "react-icons/fa";

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

  .ia-gen-page {
    font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
    color: var(--text-dark);
    background: var(--white);
  }

  /* ===== HERO SECTION ===== */
  .ia-gen-hero {
    background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-navy) 60%, #1e4d6e 100%);
    color: var(--white);
    padding: 100px 24px 80px;
    position: relative;
    overflow: hidden;
  }

  .ia-gen-hero::before {
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

  .ia-gen-hero::after {
    content: '';
    position: absolute;
    bottom: -40px;
    left: -40px;
    width: 260px;
    height: 260px;
    background: radial-gradient(circle, rgba(244,196,48,0.08) 0%, transparent 70%);
    border-radius: 50%;
    pointer-events: none;
  }

  .ia-gen-hero-inner {
    max-width: 75%;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .ia-gen-hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(212,160,23,0.15);
    border: 1px solid rgba(212,160,23,0.35);
    color: var(--accent-yellow);
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    margin-bottom: 28px;
  }

  .ia-gen-hero h1 {
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 800;
    line-height: 1.15;
    margin-bottom: 22px;
    letter-spacing: -0.02em;
  }

  .ia-gen-hero h1 .gold {
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .ia-gen-hero-quote {
    border-left: 3px solid var(--accent-gold);
    padding: 12px 20px;
    background: rgba(212,160,23,0.08);
    border-radius: 0 8px 8px 0;
    font-style: italic;
    font-size: 1rem;
    color: rgba(255,255,255,0.85);
    margin-bottom: 32px;
    max-width: 680px;
  }

  .ia-gen-hero-desc {
    font-size: 1.05rem;
    color: rgba(255,255,255,0.75);
    max-width: 640px;
    line-height: 1.7;
    margin-bottom: 40px;
  }

  .ia-gen-hero-cta {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: var(--gradient-accent);
    color: var(--primary-dark);
    padding: 14px 30px;
    border-radius: 8px;
    font-weight: 700;
    font-size: 0.95rem;
    text-decoration: none;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 20px rgba(212,160,23,0.35);
  }

  .ia-gen-hero-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 28px rgba(212,160,23,0.45);
  }

  /* ===== APPLICATIONS SECTION ===== */
  .ia-gen-applications {
    padding: 80px 24px;
    background: var(--light-bg);
  }

  .ia-gen-section-inner {
    max-width: 1100px;
    margin: 0 auto;
  }

  .ia-gen-section-label {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent-gold);
    margin-bottom: 12px;
  }

  .ia-gen-section-title {
    font-size: clamp(1.6rem, 3.5vw, 2.4rem);
    font-weight: 800;
    color: var(--primary-dark);
    margin-bottom: 16px;
    letter-spacing: -0.02em;
  }

  .ia-gen-section-sub {
    font-size: 1rem;
    color: var(--text-gray);
    max-width: 560px;
    line-height: 1.7;
    margin-bottom: 48px;
  }

  .ia-gen-applications-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
  }

  .ia-gen-app-card {
    background: var(--white);
    border: 1px solid var(--border-light);
    border-radius: 14px;
    padding: 30px 26px;
    box-shadow: var(--shadow-sm);
    transition: box-shadow 0.25s, transform 0.25s;
    position: relative;
    overflow: hidden;
  }

  .ia-gen-app-card::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 3px;
    background: var(--gradient-accent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  .ia-gen-app-card:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-4px);
  }

  .ia-gen-app-card:hover::after {
    transform: scaleX(1);
  }

  .ia-gen-app-icon {
    width: 52px;
    height: 52px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-bottom: 18px;
  }

  .ic-blue   { background: rgba(26,58,82,0.1);   color: var(--primary-navy); }
  .ic-gold   { background: rgba(212,160,23,0.12); color: var(--accent-gold); }
  .ic-green  { background: rgba(16,185,129,0.1);  color: #059669; }
  .ic-indigo { background: rgba(99,102,241,0.1);  color: #4f46e5; }
  .ic-orange { background: rgba(249,115,22,0.1);  color: #ea580c; }
  .ic-red    { background: rgba(239,68,68,0.1);   color: #dc2626; }

  .ia-gen-app-card h4 {
    font-size: 1rem;
    font-weight: 700;
    color: var(--primary-dark);
    margin-bottom: 10px;
  }

  .ia-gen-app-card p {
    font-size: 0.875rem;
    color: var(--text-gray);
    line-height: 1.65;
  }

  /* ===== SOLUTIONS SECTION ===== */
  .ia-gen-solutions {
    padding: 80px 24px;
    background: var(--white);
  }

  .ia-gen-solutions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
  }

  .ia-gen-solution-card {
    background: linear-gradient(135deg, var(--primary-navy) 0%, var(--primary-dark) 100%);
    border-radius: 16px;
    padding: 40px 30px;
    color: var(--white);
    position: relative;
    overflow: hidden;
  }

  .ia-gen-solution-card::before {
    content: '';
    position: absolute;
    top: -20px; right: -20px;
    width: 120px; height: 120px;
    background: radial-gradient(circle, rgba(212,160,23,0.2) 0%, transparent 70%);
    border-radius: 50%;
  }

  .ia-gen-solution-icon {
    font-size: 2.5rem;
    color: var(--accent-yellow);
    margin-bottom: 20px;
  }

  .ia-gen-solution-card h3 {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 12px;
    color: var(--white);
  }

  .ia-gen-solution-card p {
    font-size: 0.95rem;
    color: rgba(255,255,255,0.8);
    line-height: 1.6;
  }

  /* ===== BENEFITS SECTION ===== */
  .ia-gen-benefits {
    padding: 80px 24px;
    background: var(--light-bg);
  }

  .ia-gen-benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
  }

  .ia-gen-benefit-card {
    background: var(--white);
    border: 1px solid var(--border-light);
    border-radius: 14px;
    padding: 30px 26px;
    box-shadow: var(--shadow-sm);
    transition: box-shadow 0.25s, transform 0.25s;
  }

  .ia-gen-benefit-card:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-3px);
  }

  .ia-gen-benefit-icon {
    width: 52px;
    height: 52px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-bottom: 18px;
  }

  .ia-gen-benefit-card h3 {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--primary-dark);
    margin-bottom: 10px;
  }

  .ia-gen-benefit-card p {
    font-size: 0.9rem;
    color: var(--text-gray);
    line-height: 1.6;
  }

  /* ===== PROCESS SECTION ===== */
  .ia-gen-process {
    padding: 80px 24px;
    background: var(--white);
  }

  .ia-gen-process-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-top: 48px;
  }

  .ia-gen-process-step {
    background: var(--white);
    border: 1px solid var(--border-light);
    border-radius: 14px;
    padding: 30px 24px;
    box-shadow: var(--shadow-sm);
    position: relative;
    transition: box-shadow 0.25s, transform 0.25s;
  }

  .ia-gen-process-step:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-3px);
  }

  .ia-gen-step-num {
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
    margin-bottom: 16px;
    box-shadow: 0 4px 14px rgba(212,160,23,0.3);
  }

  .ia-gen-process-step h3 {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--primary-dark);
    margin-bottom: 8px;
  }

  .ia-gen-process-step p {
    font-size: 0.85rem;
    color: var(--text-gray);
    line-height: 1.6;
  }

  /* ===== FAQ SECTION ===== */
  .ia-gen-faq {
    padding: 80px 24px;
    background: var(--light-bg);
  }

  .ia-gen-faq-list {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .ia-gen-faq-item {
    border: 1px solid var(--border-light);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    cursor: pointer;
    transition: box-shadow 0.2s;
    background: var(--white);
  }

  .ia-gen-faq-item.open {
    box-shadow: var(--shadow-md);
    border-color: rgba(212,160,23,0.3);
  }

  .ia-gen-faq-q {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px;
    gap: 16px;
  }

  .ia-gen-faq-q h3 {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--primary-dark);
    line-height: 1.4;
  }

  .ia-gen-faq-chevron {
    color: var(--accent-gold);
    flex-shrink: 0;
    font-size: 14px;
    transition: transform 0.3s ease;
  }

  .ia-gen-faq-chevron.open {
    transform: rotate(180deg);
  }

  .ia-gen-faq-a {
    padding: 0 24px 20px;
    font-size: 0.9rem;
    color: var(--text-gray);
    line-height: 1.7;
    border-top: 1px solid var(--border-light);
    padding-top: 16px;
  }

  /* ===== CTA BANNER ===== */
  .ia-gen-cta {
    padding: 80px 24px;
    background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-navy) 100%);
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .ia-gen-cta::before {
    content: '';
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(212,160,23,0.1) 0%, transparent 65%);
    border-radius: 50%;
    pointer-events: none;
  }

  .ia-gen-cta-inner {
    max-width: 640px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .ia-gen-cta h2 {
    font-size: clamp(1.7rem, 4vw, 2.5rem);
    font-weight: 800;
    color: var(--white);
    margin-bottom: 16px;
    letter-spacing: -0.02em;
  }

  .ia-gen-cta h2 .gold {
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .ia-gen-cta p {
    color: rgba(255,255,255,0.7);
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 36px;
  }

  .ia-gen-cta-btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: var(--gradient-accent);
    color: var(--primary-dark);
    padding: 15px 34px;
    border-radius: 8px;
    font-weight: 700;
    font-size: 0.95rem;
    text-decoration: none;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 4px 24px rgba(212,160,23,0.4);
  }

  .ia-gen-cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 32px rgba(212,160,23,0.5);
  }
`;

const applications = [
  { icon: <FaPen />, cls: "ic-blue", title: "Génération de Texte", desc: "Création de contenu, rédaction, traduction et optimisation de textes avec IA générative." },
  { icon: <FaImage />, cls: "ic-gold", title: "Création d'Images", desc: "Génération d'images, illustrations et visuels personnalisés avec l'IA." },
  { icon: <FaCode />, cls: "ic-green", title: "Génération de Code", desc: "Assistance au développement, génération de code et optimisation algorithmique." },
  { icon: <FaComments />, cls: "ic-indigo", title: "Chatbots & Conversation", desc: "Agents conversationnels intelligents pour le service client et l'engagement." },
  { icon: <FaBrain />, cls: "ic-orange", title: "Créativité & Design", desc: "Soutien à la création artistique, design thinking et brainstorming IA." },
  { icon: <FaChartLine />, cls: "ic-red", title: "Analyse Prédictive", desc: "Prédictions et analyses basées sur des modèles génératifs avancés." },
];

const solutions = [
  { icon: <FaRocket />, title: "Déploiement Rapide", desc: "Mise en production rapide de solutions IA génératives adaptées à vos besoins." },
  { icon: <FaShieldAlt />, title: "Sécurité & Conformité", desc: "Déploiement sécurisé respectant les normes RGPD et l'éthique de l'IA." },
  { icon: <FaUsers />, title: "Formation & Accompagnement", desc: "Montée en compétences de vos équipes pour maîtriser l'IA générative." },
];

const benefits = [
  { icon: <FaChartLine />, cls: "ic-blue", title: "Productivité x3", desc: "Augmentation significative de la productivité grâce à l'automatisation des tâches créatives." },
  { icon: <FaLightbulb />, cls: "ic-gold", title: "Innovation Continue", desc: "Accélération de l'innovation et génération d'idées nouvelles constamment." },
  { icon: <FaUsers />, cls: "ic-green", title: "Avantage Concurrentiel", desc: "Différenciation sur le marché grâce à des contenus et services uniques." },
];

const process = [
  { n: "1", title: "Audit & Use Cases", desc: "Identification des cas d'usage pertinents pour l'IA générative dans votre entreprise." },
  { n: "2", title: "PoC & Validation", desc: "Développement de preuves de concept pour valider la pertinence des solutions." },
  { n: "3", title: "Industrialisation", desc: "Déploiement à l'échelle des solutions validées avec monitoring continu." },
  { n: "4", title: "Optimisation", desc: "Amélioration continue des modèles et des processus pour maximiser la valeur." },
];

const faqs = [
  { q: "Qu'est-ce que l'IA générative ?", a: "L'IA générative est une technologie capable de créer du contenu original (texte, images, code, etc.) à partir de modèles entraînés sur de vastes données." },
  { q: "L'IA générative est-elle sûre pour mon entreprise ?", a: "Oui, nous mettons en place des garde-fous, des filtres de sécurité et assurons la conformité avec les régulations en vigueur." },
  { q: "Quel ROI attendre de l'IA générative ?", a: "Nos clients observent en moyenne une réduction de 60% du temps de création et une augmentation de 40% de la qualité des contenus produits." },
  { q: "Faut-il des compétences techniques en interne ?", a: "Nous fournissons des solutions clé en main et formons vos équipes. Des compétences de base sont suffisantes pour démarrer." },
];

export default function IAGenerative() {
  const [activeIndex, setActiveIndex] = useState(null);
  const toggle = (i) => setActiveIndex(activeIndex === i ? null : i);

  return (
    <div className="ia-gen-page">
      <style>{styles}</style>

      {/* HERO */}
      <section className="ia-gen-hero" id="services">
        <div className="ia-gen-hero-inner">
          <div className="ia-gen-hero-badge">
            <FaRobot /> IA Générative
          </div>
          <h1>
            Libérez la créativité avec <span className="gold">l'IA générative</span>
          </h1>
          <div className="ia-gen-hero-quote">
            "La créativité est l'intelligence qui s'amuse."
          </div>
          <p className="ia-gen-hero-desc">
            Transformez votre manière de créer, innover et communiquer. Aifrica vous accompagne dans l'adoption de l'IA générative pour révolutionner vos processus créatifs et opérationnels.
          </p>
          <a href="#contact" className="ia-gen-hero-cta">
            Explorer les possibilités <FaArrowRight />
          </a>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section className="ia-gen-applications">
        <div className="ia-gen-section-inner">
          <p className="ia-gen-section-label">Applications</p>
          <h2 className="ia-gen-section-title">Cas d'usage variés</h2>
          <p className="ia-gen-section-sub">
            Découvrez comment l'IA générative peut transformer vos activités.
          </p>
          <div className="ia-gen-applications-grid">
            {applications.map((app, i) => (
              <div className="ia-gen-app-card" key={i}>
                <div className={`ia-gen-app-icon ${app.cls}`}>{app.icon}</div>
                <h4>{app.title}</h4>
                <p>{app.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="ia-gen-solutions">
        <div className="ia-gen-section-inner">
          <p className="ia-gen-section-label">Nos solutions</p>
          <h2 className="ia-gen-section-title">Déploiement complet</h2>
          <p className="ia-gen-section-sub">
            De la stratégie à l'industrialisation, nous vous accompagnons à chaque étape.
          </p>
          <div className="ia-gen-solutions-grid">
            {solutions.map((solution, i) => (
              <div className="ia-gen-solution-card" key={i}>
                <div className="ia-gen-solution-icon">{solution.icon}</div>
                <h3>{solution.title}</h3>
                <p>{solution.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="ia-gen-benefits">
        <div className="ia-gen-section-inner">
          <p className="ia-gen-section-label">Bénéfices</p>
          <h2 className="ia-gen-section-title">Pourquoi l'IA générative ?</h2>
          <p className="ia-gen-section-sub">
            Les avantages concrets pour votre entreprise africaine.
          </p>
          <div className="ia-gen-benefits-grid">
            {benefits.map((benefit, i) => (
              <div className="ia-gen-benefit-card" key={i}>
                <div className={`ia-gen-benefit-icon ${benefit.cls}`}>{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="ia-gen-process">
        <div className="ia-gen-section-inner">
          <p className="ia-gen-section-label">Processus</p>
          <h2 className="ia-gen-section-title">Notre approche</h2>
          <p className="ia-gen-section-sub">
            Une méthodologie éprouvée pour garantir le succès de vos projets IA générative.
          </p>
          <div className="ia-gen-process-grid">
            {process.map((step, i) => (
              <div className="ia-gen-process-step" key={i}>
                <div className="ia-gen-step-num">{step.n}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ia-gen-faq">
        <div className="ia-gen-section-inner" style={{ textAlign: "center" }}>
          <p className="ia-gen-section-label">FAQ</p>
          <h2 className="ia-gen-section-title">Questions fréquentes</h2>
          <p className="ia-gen-section-sub" style={{ margin: "0 auto 0" }}>
            Tout ce que vous devez savoir sur l'IA générative
          </p>
        </div>
        <div className="ia-gen-faq-list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`ia-gen-faq-item ${activeIndex === i ? "open" : ""}`}
              onClick={() => toggle(i)}
            >
              <div className="ia-gen-faq-q">
                <h3>{faq.q}</h3>
                <FaChevronDown className={`ia-gen-faq-chevron ${activeIndex === i ? "open" : ""}`} />
              </div>
              {activeIndex === i && (
                <div className="ia-gen-faq-a">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="ia-gen-cta">
        <div className="ia-gen-cta-inner">
          <h2>Prêt à <span className="gold">révolutionner</span> votre créativité ?</h2>
          <p>
            Rejoignez les entreprises africaines qui transforment leur innovation avec l'IA générative.
          </p>
          <a href="#contact" className="ia-gen-cta-btn">
            Démarrer maintenant <FaArrowRight />
          </a>
        </div>
      </section>
    </div>
  );
}
