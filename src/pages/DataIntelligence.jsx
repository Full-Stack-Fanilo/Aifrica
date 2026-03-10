import React, { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import { 
  FaChevronDown, 
  FaArrowRight, 
  FaDatabase, 
  FaCog, 
  FaChartLine, 
  FaEye,
  FaChartBar,
  FaSearch,
  FaShieldAlt,
  FaRocket,
  FaBrain,
  FaUsers
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

  .data-page {
    font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
    color: var(--text-dark);
    background: var(--white);
  }

  /* ===== HERO SECTION ===== */
  .data-hero {
    background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-navy) 60%, #1e4d6e 100%);
    color: var(--white);
    padding: 100px 24px 80px;
    position: relative;
    overflow: hidden;
  }

  .data-hero::before {
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

  .data-hero::after {
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

  .data-hero-inner {
    max-width: 75%;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .data-hero-badge {
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

  .data-hero h1 {
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 800;
    line-height: 1.15;
    margin-bottom: 22px;
    letter-spacing: -0.02em;
  }

  .data-hero h1 .gold {
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .data-hero-quote {
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

  .data-hero-desc {
    font-size: 1.05rem;
    color: rgba(255,255,255,0.75);
    max-width: 640px;
    line-height: 1.7;
    margin-bottom: 40px;
  }

  .data-hero-cta {
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

  .data-hero-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 28px rgba(212,160,23,0.45);
  }

  /* ===== SERVICES SECTION ===== */
  .data-services {
    padding: 80px 24px;
    background: var(--light-bg);
  }

  .data-section-inner {
    max-width: 1100px;
    margin: 0 auto;
  }

  .data-section-label {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent-gold);
    margin-bottom: 12px;
  }

  .data-section-title {
    font-size: clamp(1.6rem, 3.5vw, 2.4rem);
    font-weight: 800;
    color: var(--primary-dark);
    margin-bottom: 16px;
    letter-spacing: -0.02em;
  }

  .data-section-sub {
    font-size: 1rem;
    color: var(--text-gray);
    max-width: 560px;
    line-height: 1.7;
    margin-bottom: 48px;
  }

  .data-services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
  }

  .data-service-card {
    background: var(--white);
    border: 1px solid var(--border-light);
    border-radius: 14px;
    padding: 30px 26px;
    box-shadow: var(--shadow-sm);
    transition: box-shadow 0.25s, transform 0.25s;
    position: relative;
    overflow: hidden;
  }

  .data-service-card::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 3px;
    background: var(--gradient-accent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  .data-service-card:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-4px);
  }

  .data-service-card:hover::after {
    transform: scaleX(1);
  }

  .data-service-icon {
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

  .data-service-card h4 {
    font-size: 1rem;
    font-weight: 700;
    color: var(--primary-dark);
    margin-bottom: 10px;
  }

  .data-service-card p {
    font-size: 0.875rem;
    color: var(--text-gray);
    line-height: 1.65;
  }

  /* ===== BENEFITS SECTION ===== */
  .data-benefits {
    padding: 80px 24px;
    background: var(--white);
  }

  .data-benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
  }

  .data-benefit-card {
    background: linear-gradient(135deg, var(--primary-navy) 0%, var(--primary-dark) 100%);
    border-radius: 16px;
    padding: 40px 30px;
    color: var(--white);
    position: relative;
    overflow: hidden;
  }

  .data-benefit-card::before {
    content: '';
    position: absolute;
    top: -20px; right: -20px;
    width: 120px; height: 120px;
    background: radial-gradient(circle, rgba(212,160,23,0.2) 0%, transparent 70%);
    border-radius: 50%;
  }

  .data-benefit-icon {
    font-size: 2.5rem;
    color: var(--accent-yellow);
    margin-bottom: 20px;
  }

  .data-benefit-card h3 {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 12px;
    color: var(--white);
  }

  .data-benefit-card p {
    font-size: 0.95rem;
    color: rgba(255,255,255,0.8);
    line-height: 1.6;
  }

  /* ===== PROCESS SECTION ===== */
  .data-process {
    padding: 80px 24px;
    background: var(--light-bg);
  }

  .data-process-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-top: 48px;
  }

  .data-process-step {
    background: var(--white);
    border: 1px solid var(--border-light);
    border-radius: 14px;
    padding: 30px 24px;
    box-shadow: var(--shadow-sm);
    position: relative;
    transition: box-shadow 0.25s, transform 0.25s;
  }

  .data-process-step:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-3px);
  }

  .data-step-num {
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

  .data-process-step h3 {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--primary-dark);
    margin-bottom: 8px;
  }

  .data-process-step p {
    font-size: 0.85rem;
    color: var(--text-gray);
    line-height: 1.6;
  }

  /* ===== FAQ SECTION ===== */
  .data-faq {
    padding: 80px 24px;
    background: var(--white);
  }

  .data-faq-list {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .data-faq-item {
    border: 1px solid var(--border-light);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    cursor: pointer;
    transition: box-shadow 0.2s;
    background: var(--white);
  }

  .data-faq-item.open {
    box-shadow: var(--shadow-md);
    border-color: rgba(212,160,23,0.3);
  }

  .data-faq-q {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px;
    gap: 16px;
  }

  .data-faq-q h3 {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--primary-dark);
    line-height: 1.4;
  }

  .data-faq-chevron {
    color: var(--accent-gold);
    flex-shrink: 0;
    font-size: 14px;
    transition: transform 0.3s ease;
  }

  .data-faq-chevron.open {
    transform: rotate(180deg);
  }

  .data-faq-a {
    padding: 0 24px 20px;
    font-size: 0.9rem;
    color: var(--text-gray);
    line-height: 1.7;
    border-top: 1px solid var(--border-light);
    padding-top: 16px;
  }

  /* ===== CTA BANNER ===== */
  .data-cta {
    padding: 80px 24px;
    background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-navy) 100%);
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .data-cta::before {
    content: '';
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(212,160,23,0.1) 0%, transparent 65%);
    border-radius: 50%;
    pointer-events: none;
  }

  .data-cta-inner {
    max-width: 640px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .data-cta h2 {
    font-size: clamp(1.7rem, 4vw, 2.5rem);
    font-weight: 800;
    color: var(--white);
    margin-bottom: 16px;
    letter-spacing: -0.02em;
  }

  .data-cta h2 .gold {
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .data-cta p {
    color: rgba(255,255,255,0.7);
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 36px;
  }

  .data-cta-btn {
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

  .data-cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 32px rgba(212,160,23,0.5);
  }
`;

const services = [
  { icon: <FaDatabase />, cls: "ic-blue", titleKey: "dataIntelligence.services.items.0.title", descKey: "dataIntelligence.services.items.0.description" },
  { icon: <FaChartBar />, cls: "ic-gold", titleKey: "dataIntelligence.services.items.1.title", descKey: "dataIntelligence.services.items.1.description" },
  { icon: <FaSearch />, cls: "ic-green", titleKey: "dataIntelligence.services.items.2.title", descKey: "dataIntelligence.services.items.2.description" },
  { icon: <FaCog />, cls: "ic-indigo", titleKey: "dataIntelligence.services.items.3.title", descKey: "dataIntelligence.services.items.3.description" },
  { icon: <FaShieldAlt />, cls: "ic-orange", titleKey: "dataIntelligence.services.items.4.title", descKey: "dataIntelligence.services.items.4.description" },
  { icon: <FaRocket />, cls: "ic-red", titleKey: "dataIntelligence.services.items.5.title", descKey: "dataIntelligence.services.items.5.description" },
];

const benefits = [
  { icon: <FaChartLine />, titleKey: "dataIntelligence.benefits.items.0.title", descKey: "dataIntelligence.benefits.items.0.description" },
  { icon: <FaBrain />, titleKey: "dataIntelligence.benefits.items.1.title", descKey: "dataIntelligence.benefits.items.1.description" },
  { icon: <FaUsers />, titleKey: "dataIntelligence.benefits.items.2.title", descKey: "dataIntelligence.benefits.items.2.description" },
];

const process = [
  { n: "1", titleKey: "dataIntelligence.process.items.0.title", descKey: "dataIntelligence.process.items.0.description" },
  { n: "2", titleKey: "dataIntelligence.process.items.1.title", descKey: "dataIntelligence.process.items.1.description" },
  { n: "3", titleKey: "dataIntelligence.process.items.2.title", descKey: "dataIntelligence.process.items.2.description" },
  { n: "4", titleKey: "dataIntelligence.process.items.3.title", descKey: "dataIntelligence.process.items.3.description" },
];

const faqs = [
  { qKey: "dataIntelligence.faq.items.0.question", aKey: "dataIntelligence.faq.items.0.answer" },
  { qKey: "dataIntelligence.faq.items.1.question", aKey: "dataIntelligence.faq.items.1.answer" },
  { qKey: "dataIntelligence.faq.items.2.question", aKey: "dataIntelligence.faq.items.2.answer" },
  { qKey: "dataIntelligence.faq.items.3.question", aKey: "dataIntelligence.faq.items.3.answer" },
];

export default function DataIntelligence() {
  const [activeIndex, setActiveIndex] = useState(null);
  const { t } = useLanguage();
  const toggle = (i) => setActiveIndex(activeIndex === i ? null : i);

  return (
    <div className="data-page">
      <style>{styles}</style>

      {/* HERO */}
      <section className="data-hero" id="services">
        <div className="data-hero-inner">
          <div className="data-hero-badge">
            <FaDatabase /> {t('dataIntelligence.hero.badge')}
          </div>
          <h1>
            {t('dataIntelligence.hero.title')} <span className="gold">{t('dataIntelligence.hero.title_highlight')}</span>
          </h1>
          <div className="data-hero-quote">
            "{t('dataIntelligence.hero.quote')}"
          </div>
          <p className="data-hero-desc">
            {t('dataIntelligence.hero.description')}
          </p>
          <a href="#contact" className="data-hero-cta">
            {t('dataIntelligence.hero.cta')} <FaArrowRight />
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="data-services">
        <div className="data-section-inner">
          <p className="data-section-label">{t('dataIntelligence.services.label')}</p>
          <h2 className="data-section-title">{t('dataIntelligence.services.title')}</h2>
          <p className="data-section-sub">
            {t('dataIntelligence.services.subtitle')}
          </p>
          <div className="data-services-grid">
            {services.map((service, i) => (
              <div className="data-service-card" key={i}>
                <div className={`data-service-icon ${service.cls}`}>{service.icon}</div>
                <h4>{t(service.titleKey)}</h4>
                <p>{t(service.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="data-benefits">
        <div className="data-section-inner">
          <p className="data-section-label">{t('dataIntelligence.benefits.label')}</p>
          <h2 className="data-section-title">{t('dataIntelligence.benefits.title')}</h2>
          <p className="data-section-sub">
            {t('dataIntelligence.benefits.subtitle')}
          </p>
          <div className="data-benefits-grid">
            {benefits.map((benefit, i) => (
              <div className="data-benefit-card" key={i}>
                <div className="data-benefit-icon">{benefit.icon}</div>
                <h3>{t(benefit.titleKey)}</h3>
                <p>{t(benefit.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="data-process">
        <div className="data-section-inner">
          <p className="data-section-label">{t('dataIntelligence.process.label')}</p>
          <h2 className="data-section-title">{t('dataIntelligence.process.title')}</h2>
          <p className="data-section-sub">
            {t('dataIntelligence.process.subtitle')}
          </p>
          <div className="data-process-grid">
            {process.map((step, i) => (
              <div className="data-process-step" key={i}>
                <div className="data-step-num">{step.n}</div>
                <h3>{t(step.titleKey)}</h3>
                <p>{t(step.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="data-faq">
        <div className="data-section-inner" style={{ textAlign: "center" }}>
          <p className="data-section-label">{t('dataIntelligence.faq.label')}</p>
          <h2 className="data-section-title">{t('dataIntelligence.faq.title')}</h2>
          <p className="data-section-sub" style={{ margin: "0 auto 0" }}>
            {t('dataIntelligence.faq.subtitle')}
          </p>
        </div>
        <div className="data-faq-list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`data-faq-item ${activeIndex === i ? "open" : ""}`}
              onClick={() => toggle(i)}
            >
              <div className="data-faq-q">
                <h3>{t(faq.qKey)}</h3>
                <FaChevronDown className={`data-faq-chevron ${activeIndex === i ? "open" : ""}`} />
              </div>
              {activeIndex === i && (
                <div className="data-faq-a">{t(faq.aKey)}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="data-cta">
        <div className="data-cta-inner">
          <h2>{t('dataIntelligence.cta.title')} <span className="gold">{t('dataIntelligence.cta.title_highlight')}</span>{t('dataIntelligence.cta.title_end')}</h2>
          <p>
            {t('dataIntelligence.cta.description')}
          </p>
          <a href="#contact" className="data-cta-btn">
            {t('dataIntelligence.cta.button')} <FaArrowRight />
          </a>
        </div>
      </section>
    </div>
  );
}
