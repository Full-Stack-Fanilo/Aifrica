import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import {
  FaHandsHelping,
  FaBrain,
  FaChartLine,
  FaUsers,
  FaLightbulb,
  FaRocket,
  FaShieldAlt,
  FaCheckCircle,
  FaArrowRight,
  FaRobot,
  FaComments,
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

  .acc-page {
    font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
    color: var(--text-dark);
    background: var(--white);
  }

  /* ===== HERO SECTION ===== */
  .acc-hero {
    background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-navy) 60%, #1e4d6e 100%);
    color: var(--white);
    padding: 100px 24px 80px;
    position: relative;
    overflow: hidden;
  }

  .acc-hero::before {
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

  .acc-hero::after {
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

  .acc-hero-inner {
    max-width: 75%;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .acc-hero-badge {
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

  .acc-hero h1 {
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 800;
    line-height: 1.15;
    margin-bottom: 22px;
    letter-spacing: -0.02em;
  }

  .acc-hero h1 .gold {
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .acc-hero-quote {
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

  .acc-hero-desc {
    font-size: 1.05rem;
    color: rgba(255,255,255,0.75);
    max-width: 640px;
    line-height: 1.7;
    margin-bottom: 40px;
  }

  .acc-hero-cta {
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

  .acc-hero-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 28px rgba(212,160,23,0.45);
  }

  /* ===== WHY SECTION ===== */
  .acc-why {
    padding: 80px 24px;
    background: var(--light-bg);
  }

  .acc-section-inner {
    max-width: 1100px;
    margin: 0 auto;
  }

  .acc-section-label {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent-gold);
    margin-bottom: 12px;
  }

  .acc-section-title {
    font-size: clamp(1.6rem, 3.5vw, 2.4rem);
    font-weight: 800;
    color: var(--primary-dark);
    margin-bottom: 16px;
    letter-spacing: -0.02em;
  }

  .acc-section-sub {
    font-size: 1rem;
    color: var(--text-gray);
    max-width: 560px;
    line-height: 1.7;
    margin-bottom: 48px;
  }

  .acc-why-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: start;
  }

  @media (max-width: 768px) {
    .acc-why-grid { grid-template-columns: 1fr; }
  }

  .acc-why-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .acc-why-list li {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    background: var(--white);
    border: 1px solid var(--border-light);
    border-radius: 10px;
    padding: 16px 20px;
    box-shadow: var(--shadow-sm);
    transition: box-shadow 0.2s, transform 0.2s;
  }

  .acc-why-list li:hover {
    box-shadow: var(--shadow-md);
    transform: translateX(4px);
  }

  .acc-why-list .ic {
    color: var(--accent-gold);
    flex-shrink: 0;
    margin-top: 3px;
    font-size: 14px;
  }

  .acc-why-list span {
    font-size: 0.95rem;
    color: var(--text-dark);
    line-height: 1.5;
  }

  .acc-stat-block {
    background: linear-gradient(135deg, var(--primary-navy) 0%, var(--primary-dark) 100%);
    border-radius: 16px;
    padding: 48px 40px;
    color: var(--white);
    position: relative;
    overflow: hidden;
  }

  .acc-stat-block::before {
    content: '';
    position: absolute;
    top: -30px; right: -30px;
    width: 180px; height: 180px;
    background: radial-gradient(circle, rgba(212,160,23,0.2) 0%, transparent 70%);
    border-radius: 50%;
  }

  .acc-stat-block .big-num {
    font-size: 4rem;
    font-weight: 900;
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
    margin-bottom: 8px;
  }

  .acc-stat-block .big-label {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 12px;
    color: var(--white);
  }

  .acc-stat-block .big-desc {
    font-size: 0.9rem;
    color: rgba(255,255,255,0.65);
    line-height: 1.6;
    position: relative;
    z-index: 1;
  }

  /* ===== AXES CARDS ===== */
  .acc-axes {
    padding: 80px 24px;
    background: var(--white);
  }

  .acc-cards-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  @media (max-width: 900px) {
    .acc-cards-grid { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 600px) {
    .acc-cards-grid { grid-template-columns: 1fr; }
  }

  .acc-card {
    background: var(--white);
    border: 1px solid var(--border-light);
    border-radius: 14px;
    padding: 30px 26px;
    box-shadow: var(--shadow-sm);
    transition: box-shadow 0.25s, transform 0.25s;
    position: relative;
    overflow: hidden;
  }

  .acc-card::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 3px;
    background: var(--gradient-accent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  .acc-card:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-4px);
  }

  .acc-card:hover::after {
    transform: scaleX(1);
  }

  .acc-card-icon {
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

  .acc-card h4 {
    font-size: 1rem;
    font-weight: 700;
    color: var(--primary-dark);
    margin-bottom: 10px;
  }

  .acc-card p {
    font-size: 0.875rem;
    color: var(--text-gray);
    line-height: 1.65;
  }

  /* ===== STEPS SECTION ===== */
  .acc-steps {
    padding: 80px 24px;
    background: var(--light-bg);
  }

  .acc-steps-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0;
    position: relative;
    margin-top: 48px;
  }

  @media (max-width: 900px) {
    .acc-steps-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
  }

  @media (max-width: 560px) {
    .acc-steps-grid { grid-template-columns: 1fr; gap: 20px; }
  }

  .acc-step {
    background: var(--white);
    border: 1px solid var(--border-light);
    border-radius: 14px;
    padding: 30px 24px;
    margin: 0 10px;
    box-shadow: var(--shadow-sm);
    position: relative;
    transition: box-shadow 0.25s, transform 0.25s;
  }

  .acc-step:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-3px);
  }

  .acc-step-num {
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

  .acc-step h3 {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--primary-dark);
    margin-bottom: 8px;
  }

  .acc-step p {
    font-size: 0.85rem;
    color: var(--text-gray);
    line-height: 1.6;
  }

  .acc-step-connector {
    position: absolute;
    top: 38px;
    right: -22px;
    color: var(--accent-gold);
    font-size: 18px;
    z-index: 2;
  }

  /* ===== FAQ SECTION ===== */
  .acc-faq {
    padding: 80px 24px;
    background: var(--white);
  }

  .acc-faq-list {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .acc-faq-item {
    border: 1px solid var(--border-light);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    cursor: pointer;
    transition: box-shadow 0.2s;
    background: var(--white);
  }

  .acc-faq-item.open {
    box-shadow: var(--shadow-md);
    border-color: rgba(212,160,23,0.3);
  }

  .acc-faq-q {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px;
    gap: 16px;
  }

  .acc-faq-q h3 {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--primary-dark);
    line-height: 1.4;
  }

  .acc-faq-chevron {
    color: var(--accent-gold);
    flex-shrink: 0;
    font-size: 14px;
    transition: transform 0.3s ease;
  }

  .acc-faq-chevron.open {
    transform: rotate(180deg);
  }

  .acc-faq-a {
    padding: 0 24px 20px;
    font-size: 0.9rem;
    color: var(--text-gray);
    line-height: 1.7;
    border-top: 1px solid var(--border-light);
    padding-top: 16px;
  }

  /* ===== CTA BANNER ===== */
  .acc-cta {
    padding: 80px 24px;
    background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-navy) 100%);
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .acc-cta::before {
    content: '';
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(212,160,23,0.1) 0%, transparent 65%);
    border-radius: 50%;
    pointer-events: none;
  }

  .acc-cta-inner {
    max-width: 640px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .acc-cta h2 {
    font-size: clamp(1.7rem, 4vw, 2.5rem);
    font-weight: 800;
    color: var(--white);
    margin-bottom: 16px;
    letter-spacing: -0.02em;
  }

  .acc-cta h2 .gold {
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .acc-cta p {
    color: rgba(255,255,255,0.7);
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 36px;
  }

  .acc-cta-btn {
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

  .acc-cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 32px rgba(212,160,23,0.5);
  }
`;

const axes = [
  { icon: <FaBrain />, cls: "ic-blue",   titleKey: "accompagnementIA.axes.items.0.title", descKey: "accompagnementIA.axes.items.0.description" },
  { icon: <FaComments />, cls: "ic-gold", titleKey: "accompagnementIA.axes.items.1.title", descKey: "accompagnementIA.axes.items.1.description" },
  { icon: <FaShieldAlt />, cls: "ic-green", titleKey: "accompagnementIA.axes.items.2.title", descKey: "accompagnementIA.axes.items.2.description" },
  { icon: <FaRobot />, cls: "ic-indigo",  titleKey: "accompagnementIA.axes.items.3.title", descKey: "accompagnementIA.axes.items.3.description" },
  { icon: <FaChartLine />, cls: "ic-orange", titleKey: "accompagnementIA.axes.items.4.title", descKey: "accompagnementIA.axes.items.4.description" },
  { icon: <FaCheckCircle />, cls: "ic-red",  titleKey: "accompagnementIA.axes.items.5.title", descKey: "accompagnementIA.axes.items.5.description" },
];

const steps = [
  { n: "1", titleKey: "accompagnementIA.steps.items.0.title", descKey: "accompagnementIA.steps.items.0.description" },
  { n: "2", titleKey: "accompagnementIA.steps.items.1.title", descKey: "accompagnementIA.steps.items.1.description" },
  { n: "3", titleKey: "accompagnementIA.steps.items.2.title", descKey: "accompagnementIA.steps.items.2.description" },
  { n: "4", titleKey: "accompagnementIA.steps.items.3.title", descKey: "accompagnementIA.steps.items.3.description" },
];

const faqs = [
  { qKey: "accompagnementIA.faq.items.0.question", aKey: "accompagnementIA.faq.items.0.answer" },
  { qKey: "accompagnementIA.faq.items.1.question", aKey: "accompagnementIA.faq.items.1.answer" },
  { qKey: "accompagnementIA.faq.items.2.question", aKey: "accompagnementIA.faq.items.2.answer" },
  { qKey: "accompagnementIA.faq.items.3.question", aKey: "accompagnementIA.faq.items.3.answer" },
  { qKey: "accompagnementIA.faq.items.4.question", aKey: "accompagnementIA.faq.items.4.answer" },
];

export default function AccompagnementIA() {
  const [activeIndex, setActiveIndex] = useState(null);
  const { t } = useLanguage();
  const toggle = (i) => setActiveIndex(activeIndex === i ? null : i);

  return (
    <div className="acc-page">
      <style>{styles}</style>

      {/* HERO */}
      <section className="acc-hero" id="services">
        <div className="acc-hero-inner">
          <div className="acc-hero-badge">
            <FaRocket /> {t('accompagnementIA.hero.badge')}
          </div>
          <h1>
            {t('accompagnementIA.hero.title')} <span className="gold">{t('accompagnementIA.hero.title_highlight')}</span>
          </h1>
          <div className="acc-hero-quote">
            "{t('accompagnementIA.hero.quote')}"
          </div>
          <p className="acc-hero-desc">
            {t('accompagnementIA.hero.description')}
          </p>
          <a href="#contact" className="acc-hero-cta">
            {t('accompagnementIA.hero.cta')} <FaArrowRight />
          </a>
        </div>
      </section>

      {/* WHY */}
      <section className="acc-why">
        <div className="acc-section-inner">
          <p className="acc-section-label">{t('accompagnementIA.why.label')}</p>
          <h2 className="acc-section-title">{t('accompagnementIA.why.title')}</h2>
          <p className="acc-section-sub">
            {t('accompagnementIA.why.subtitle')}
          </p>
          <div className="acc-why-grid">
            <ul className="acc-why-list">
              {t('accompagnementIA.why.features').map((item, i) => (
                <li key={i}>
                  <FaCheckCircle className="ic" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="acc-stat-block">
              <div className="big-num">{t('accompagnementIA.why.stat.number')}</div>
              <div className="big-label">{t('accompagnementIA.why.stat.label')}</div>
              <p className="big-desc">
                {t('accompagnementIA.why.stat.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AXES */}
      <section className="acc-axes">
        <div className="acc-section-inner">
          <p className="acc-section-label">{t('accompagnementIA.axes.label')}</p>
          <h2 className="acc-section-title">{t('accompagnementIA.axes.title')}</h2>
          <p className="acc-section-sub">
            {t('accompagnementIA.axes.subtitle')}
          </p>
          <div className="acc-cards-grid">
            {axes.map((ax, i) => (
              <div className="acc-card" key={i}>
                <div className={`acc-card-icon ${ax.cls}`}>{ax.icon}</div>
                <h4>{t(ax.titleKey)}</h4>
                <p>{t(ax.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="acc-steps">
        <div className="acc-section-inner">
          <p className="acc-section-label">{t('accompagnementIA.steps.label')}</p>
          <h2 className="acc-section-title">{t('accompagnementIA.steps.title')}</h2>
          <p className="acc-section-sub">
            {t('accompagnementIA.steps.subtitle')}
          </p>
          <div className="acc-steps-grid">
            {steps.map((s, i) => (
              <div className="acc-step" key={i} style={{ position: "relative" }}>
                <div className="acc-step-num">{s.n}</div>
                <h3>{t(s.titleKey)}</h3>
                <p>{t(s.descKey)}</p>
                {i < steps.length - 1 && (
                  <span className="acc-step-connector"><FaArrowRight /></span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="acc-faq">
        <div className="acc-section-inner" style={{ textAlign: "center" }}>
          <p className="acc-section-label">{t('accompagnementIA.faq.label')}</p>
          <h2 className="acc-section-title">{t('accompagnementIA.faq.title')}</h2>
          <p className="acc-section-sub" style={{ margin: "0 auto 0" }}>
            {t('accompagnementIA.faq.subtitle')}
          </p>
        </div>
        <div className="acc-faq-list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`acc-faq-item ${activeIndex === i ? "open" : ""}`}
              onClick={() => toggle(i)}
            >
              <div className="acc-faq-q">
                <h3>{t(faq.qKey)}</h3>
                <FaChevronDown className={`acc-faq-chevron ${activeIndex === i ? "open" : ""}`} />
              </div>
              {activeIndex === i && (
                <div className="acc-faq-a">{t(faq.aKey)}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="acc-cta">
        <div className="acc-cta-inner">
          <h2>{t('accompagnementIA.cta.title')} <span className="gold">{t('accompagnementIA.cta.title_highlight')}</span>{t('accompagnementIA.cta.title_end')}</h2>
          <p>
            {t('accompagnementIA.cta.description')}
          </p>
          <a href="#contact" className="acc-cta-btn">
            {t('accompagnementIA.cta.button')} <FaArrowRight />
          </a>
        </div>
      </section>
    </div>
  );
}