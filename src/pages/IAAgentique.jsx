import React from "react";
import "../css/IAAgentique.css";
import {
  FaArrowRight,
  FaCogs,
  FaRobot,
  FaBrain,
  FaChartLine,
  FaLock,
  FaHandshake,
  FaShieldAlt,
  FaRocket,
  FaClock,
  FaTrophy,
  FaUsersCog,
  FaChevronDown,
} from "react-icons/fa";
import FAQ_IAAgentique from "../components/IAAgentique/FAQ_IAAgentique";
import CallToAction_IAAgentique from "../components/IAAgentique/CallToAction_IAAgentique";
import { useLanguage } from "../contexts/LanguageContext";

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

  .ia-agent-page {
    font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
    color: var(--text-dark);
    background: var(--white);
  }

  /* ===== HERO SECTION ===== */
  .ia-agent-hero {
    background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-navy) 60%, #1e4d6e 100%);
    color: var(--white);
    padding: 100px 24px 80px;
    position: relative;
    overflow: hidden;
  }

  .ia-agent-hero::before {
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

  .ia-agent-hero::after {
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

  .ia-agent-hero-inner {
    max-width: 75%;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .ia-agent-hero-badge {
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

  .ia-agent-hero h1 {
    font-size: clamp(2rem, 5vw, 3.2rem);
    font-weight: 800;
    line-height: 1.15;
    margin-bottom: 22px;
    letter-spacing: -0.02em;
  }

  .ia-agent-hero h1 .gold {
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .ia-agent-hero-quote {
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

  .ia-agent-hero-desc {
    font-size: 1.05rem;
    color: rgba(255,255,255,0.75);
    max-width: 640px;
    line-height: 1.7;
    margin-bottom: 40px;
  }

  .ia-agent-hero-cta {
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

  .ia-agent-hero-cta:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 28px rgba(212,160,23,0.45);
  }

  /* ===== AGENTS SECTION ===== */
  .ia-agent-agents {
    padding: 80px 24px;
    background: var(--light-bg);
  }

  .ia-agent-section-inner {
    max-width: 1100px;
    margin: 0 auto;
  }

  .ia-agent-section-label {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--accent-gold);
    margin-bottom: 12px;
  }

  .ia-agent-section-title {
    font-size: clamp(1.6rem, 3.5vw, 2.4rem);
    font-weight: 800;
    color: var(--primary-dark);
    margin-bottom: 16px;
    letter-spacing: -0.02em;
  }

  .ia-agent-section-sub {
    font-size: 1rem;
    color: var(--text-gray);
    max-width: 560px;
    line-height: 1.7;
    margin-bottom: 48px;
  }

  .ia-agent-agents-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
  }

  .ia-agent-card {
    background: var(--white);
    border: 1px solid var(--border-light);
    border-radius: 14px;
    padding: 30px 26px;
    box-shadow: var(--shadow-sm);
    transition: box-shadow 0.25s, transform 0.25s;
    position: relative;
    overflow: hidden;
  }

  .ia-agent-card::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 3px;
    background: var(--gradient-accent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  .ia-agent-card:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-4px);
  }

  .ia-agent-card:hover::after {
    transform: scaleX(1);
  }

  .ia-agent-icon {
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

  .ia-agent-card h4 {
    font-size: 1rem;
    font-weight: 700;
    color: var(--primary-dark);
    margin-bottom: 10px;
  }

  .ia-agent-card p {
    font-size: 0.875rem;
    color: var(--text-gray);
    line-height: 1.65;
  }

  /* ===== CAPABILITIES SECTION ===== */
  .ia-agent-capabilities {
    padding: 80px 24px;
    background: var(--white);
  }

  .ia-agent-capabilities-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
  }

  .ia-agent-capability-card {
    background: linear-gradient(135deg, var(--primary-navy) 0%, var(--primary-dark) 100%);
    border-radius: 16px;
    padding: 40px 30px;
    color: var(--white);
    position: relative;
    overflow: hidden;
  }

  .ia-agent-capability-card::before {
    content: '';
    position: absolute;
    top: -20px; right: -20px;
    width: 120px; height: 120px;
    background: radial-gradient(circle, rgba(212,160,23,0.2) 0%, transparent 70%);
    border-radius: 50%;
  }

  .ia-agent-capability-icon {
    font-size: 2.5rem;
    color: var(--accent-yellow);
    margin-bottom: 20px;
  }

  .ia-agent-capability-card h3 {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 12px;
    color: var(--white);
  }

  .ia-agent-capability-card p {
    font-size: 0.95rem;
    color: rgba(255,255,255,0.8);
    line-height: 1.6;
  }

  /* ===== BENEFITS SECTION ===== */
  .ia-agent-benefits {
    padding: 80px 24px;
    background: var(--light-bg);
  }

  .ia-agent-benefits-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
  }

  .ia-agent-benefit-card {
    background: var(--white);
    border: 1px solid var(--border-light);
    border-radius: 14px;
    padding: 30px 26px;
    box-shadow: var(--shadow-sm);
    transition: box-shadow 0.25s, transform 0.25s;
  }

  .ia-agent-benefit-card:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-3px);
  }

  .ia-agent-benefit-icon {
    width: 52px;
    height: 52px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin-bottom: 18px;
  }

  .ia-agent-benefit-card h3 {
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--primary-dark);
    margin-bottom: 10px;
  }

  .ia-agent-benefit-card p {
    font-size: 0.9rem;
    color: var(--text-gray);
    line-height: 1.6;
  }

  /* ===== PROCESS SECTION ===== */
  .ia-agent-process {
    padding: 80px 24px;
    background: var(--white);
  }

  .ia-agent-process-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-top: 48px;
  }

  .ia-agent-process-step {
    background: var(--white);
    border: 1px solid var(--border-light);
    border-radius: 14px;
    padding: 30px 24px;
    box-shadow: var(--shadow-sm);
    position: relative;
    transition: box-shadow 0.25s, transform 0.25s;
  }

  .ia-agent-process-step:hover {
    box-shadow: var(--shadow-md);
    transform: translateY(-3px);
  }

  .ia-agent-step-num {
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

  .ia-agent-process-step h3 {
    font-size: 0.95rem;
    font-weight: 700;
    color: var(--primary-dark);
    margin-bottom: 8px;
  }

  .ia-agent-process-step p {
    font-size: 0.85rem;
    color: var(--text-gray);
    line-height: 1.6;
  }

  /* ===== FAQ SECTION ===== */
  .ia-agent-faq {
    padding: 80px 24px;
    background: var(--light-bg);
  }

  .ia-agent-faq-list {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
  }

  .ia-agent-faq-item {
    border: 1px solid var(--border-light);
    border-radius: 12px;
    overflow: hidden;
    box-shadow: var(--shadow-sm);
    cursor: pointer;
    transition: box-shadow 0.2s;
    background: var(--white);
  }

  .ia-agent-faq-item.open {
    box-shadow: var(--shadow-md);
    border-color: rgba(212,160,23,0.3);
  }

  .ia-agent-faq-q {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px;
    gap: 16px;
  }

  .ia-agent-faq-q h3 {
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--primary-dark);
    line-height: 1.4;
  }

  .ia-agent-faq-chevron {
    color: var(--accent-gold);
    flex-shrink: 0;
    font-size: 14px;
    transition: transform 0.3s ease;
  }

  .ia-agent-faq-chevron.open {
    transform: rotate(180deg);
  }

  .ia-agent-faq-a {
    padding: 0 24px 20px;
    font-size: 0.9rem;
    color: var(--text-gray);
    line-height: 1.7;
    border-top: 1px solid var(--border-light);
    padding-top: 16px;
  }

  /* ===== CTA BANNER ===== */
  .ia-agent-cta {
    padding: 80px 24px;
    background: linear-gradient(135deg, var(--primary-dark) 0%, var(--primary-navy) 100%);
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .ia-agent-cta::before {
    content: '';
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(212,160,23,0.1) 0%, transparent 65%);
    border-radius: 50%;
    pointer-events: none;
  }

  .ia-agent-cta-inner {
    max-width: 640px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }

  .ia-agent-cta h2 {
    font-size: clamp(1.7rem, 4vw, 2.5rem);
    font-weight: 800;
    color: var(--white);
    margin-bottom: 16px;
    letter-spacing: -0.02em;
  }

  .ia-agent-cta h2 .gold {
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .ia-agent-cta p {
    color: rgba(255,255,255,0.7);
    font-size: 1rem;
    line-height: 1.7;
    margin-bottom: 36px;
  }

  .ia-agent-cta-btn {
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

  .ia-agent-cta-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 32px rgba(212,160,23,0.5);
  }
`;

export default function IAAgentique() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = React.useState(null);
  const toggle = (i) => setActiveIndex(activeIndex === i ? null : i);

  const agents = [
    { icon: <FaRobot />, cls: "ic-blue", title: t('iaAgentique.sections.agents.items.conversational.title'), desc: t('iaAgentique.sections.agents.items.conversational.description') },
    { icon: <FaCogs />, cls: "ic-gold", title: t('iaAgentique.sections.agents.items.process.title'), desc: t('iaAgentique.sections.agents.items.process.description') },
    { icon: <FaBrain />, cls: "ic-green", title: t('iaAgentique.sections.agents.items.analysis.title'), desc: t('iaAgentique.sections.agents.items.analysis.description') },
    { icon: <FaHandshake />, cls: "ic-indigo", title: t('iaAgentique.sections.agents.items.sales.title'), desc: t('iaAgentique.sections.agents.items.sales.description') },
    { icon: <FaShieldAlt />, cls: "ic-orange", title: t('iaAgentique.sections.agents.items.security.title'), desc: t('iaAgentique.sections.agents.items.security.description') },
    { icon: <FaChartLine />, cls: "ic-red", title: t('iaAgentique.sections.agents.items.monitoring.title'), desc: t('iaAgentique.sections.agents.items.monitoring.description') },
  ];

  const capabilities = [
    { icon: <FaRocket />, title: t('iaAgentique.sections.capabilities.items.autonomy.title'), desc: t('iaAgentique.sections.capabilities.items.autonomy.description') },
    { icon: <FaBrain />, title: t('iaAgentique.sections.capabilities.items.learning.title'), desc: t('iaAgentique.sections.capabilities.items.learning.description') },
    { icon: <FaCogs />, title: t('iaAgentique.sections.capabilities.items.integration.title'), desc: t('iaAgentique.sections.capabilities.items.integration.description') },
  ];

  const benefits = [
    { icon: <FaClock />, cls: "ic-blue", title: t('iaAgentique.sections.benefits.items.availability.title'), desc: t('iaAgentique.sections.benefits.items.availability.description') },
    { icon: <FaChartLine />, cls: "ic-gold", title: t('iaAgentique.sections.benefits.items.efficiency.title'), desc: t('iaAgentique.sections.benefits.items.efficiency.description') },
    { icon: <FaTrophy />, cls: "ic-green", title: t('iaAgentique.sections.benefits.items.quality.title'), desc: t('iaAgentique.sections.benefits.items.quality.description') },
  ];

  const process = [
    { n: "1", title: t('iaAgentique.sections.process.items.analysis.title'), desc: t('iaAgentique.sections.process.items.analysis.description') },
    { n: "2", title: t('iaAgentique.sections.process.items.design.title'), desc: t('iaAgentique.sections.process.items.design.description') },
    { n: "3", title: t('iaAgentique.sections.process.items.development.title'), desc: t('iaAgentique.sections.process.items.development.description') },
    { n: "4", title: t('iaAgentique.sections.process.items.deployment.title'), desc: t('iaAgentique.sections.process.items.deployment.description') },
  ];

  const faqs = t('iaAgentique.sections.faq.items');

  return (
    <div className="ia-agent-page">
      <style>{styles}</style>

      {/* HERO */}
      <section className="ia-agent-hero" id="services">
        <div className="ia-agent-hero-inner">
          <div className="ia-agent-hero-badge">
            <FaUsersCog /> {t('iaAgentique.badge')}
          </div>
          <h1>
            {t('iaAgentique.title')}<span className="gold">{t('iaAgentique.title_highlight')}</span>
          </h1>
          <div className="ia-agent-hero-quote">
            "{t('iaAgentique.quote')}"
          </div>
          <p className="ia-agent-hero-desc">
            {t('iaAgentique.description')}
          </p>
          <a href="#contact" className="ia-agent-hero-cta">
            {t('iaAgentique.start_automation')} <FaArrowRight />
          </a>
        </div>
      </section>

      {/* AGENTS */}
      <section className="ia-agent-agents">
        <div className="ia-agent-section-inner">
          <p className="ia-agent-section-label">{t('iaAgentique.sections.agents.label')}</p>
          <h2 className="ia-agent-section-title">{t('iaAgentique.sections.agents.title')}</h2>
          <p className="ia-agent-section-sub">
            {t('iaAgentique.sections.agents.subtitle')}
          </p>
          <div className="ia-agent-agents-grid">
            {agents.map((agent, i) => (
              <div className="ia-agent-card" key={i}>
                <div className={`ia-agent-icon ${agent.cls}`}>{agent.icon}</div>
                <h4>{agent.title}</h4>
                <p>{agent.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="ia-agent-capabilities">
        <div className="ia-agent-section-inner">
          <p className="ia-agent-section-label">{t('iaAgentique.sections.capabilities.label')}</p>
          <h2 className="ia-agent-section-title">{t('iaAgentique.sections.capabilities.title')}</h2>
          <p className="ia-agent-section-sub">
            {t('iaAgentique.sections.capabilities.subtitle')}
          </p>
          <div className="ia-agent-capabilities-grid">
            {capabilities.map((capability, i) => (
              <div className="ia-agent-capability-card" key={i}>
                <div className="ia-agent-capability-icon">{capability.icon}</div>
                <h3>{capability.title}</h3>
                <p>{capability.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="ia-agent-benefits">
        <div className="ia-agent-section-inner">
          <p className="ia-agent-section-label">{t('iaAgentique.sections.benefits.label')}</p>
          <h2 className="ia-agent-section-title">{t('iaAgentique.sections.benefits.title')}</h2>
          <p className="ia-agent-section-sub">
            {t('iaAgentique.sections.benefits.subtitle')}
          </p>
          <div className="ia-agent-benefits-grid">
            {benefits.map((benefit, i) => (
              <div className="ia-agent-benefit-card" key={i}>
                <div className={`ia-agent-benefit-icon ${benefit.cls}`}>{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="ia-agent-process">
        <div className="ia-agent-section-inner">
          <p className="ia-agent-section-label">{t('iaAgentique.sections.process.label')}</p>
          <h2 className="ia-agent-section-title">{t('iaAgentique.sections.process.title')}</h2>
          <p className="ia-agent-section-sub">
            {t('iaAgentique.sections.process.subtitle')}
          </p>
          <div className="ia-agent-process-grid">
            {process.map((step, i) => (
              <div className="ia-agent-process-step" key={i}>
                <div className="ia-agent-step-num">{step.n}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="ia-agent-faq">
        <div className="ia-agent-section-inner" style={{ textAlign: "center" }}>
          <p className="ia-agent-section-label">{t('iaAgentique.sections.faq.label')}</p>
          <h2 className="ia-agent-section-title">{t('iaAgentique.sections.faq.title')}</h2>
          <p className="ia-agent-section-sub" style={{ margin: "0 auto 0" }}>
            {t('iaAgentique.sections.faq.subtitle')}
          </p>
        </div>
        <div className="ia-agent-faq-list">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`ia-agent-faq-item ${activeIndex === i ? "open" : ""}`}
              onClick={() => toggle(i)}
            >
              <div className="ia-agent-faq-q">
                <h3>{faq.q}</h3>
                <FaChevronDown className={`ia-agent-faq-chevron ${activeIndex === i ? "open" : ""}`} />
              </div>
              {activeIndex === i && (
                <div className="ia-agent-faq-a">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="ia-agent-cta">
        <div className="ia-agent-cta-inner">
          <h2>{t('iaAgentique.sections.cta.title')}<span className="gold">{t('iaAgentique.sections.cta.title_highlight')}</span>{t('iaAgentique.sections.cta.title_end')}</h2>
          <p>
            {t('iaAgentique.sections.cta.description')}
          </p>
          <a href="#contact" className="ia-agent-cta-btn">
            {t('iaAgentique.sections.cta.button')} <FaArrowRight />
          </a>
        </div>
      </section>
    </div>
  );
}
