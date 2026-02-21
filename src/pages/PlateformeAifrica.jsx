import React, { useState } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=Inter:wght@300;400;500;600&display=swap');

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
    --font-display: 'Playfair Display', serif;
    --font-body: 'Inter', sans-serif;
    --radius: 12px;
    --transition: 0.3s ease;
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    background: var(--white);
    color: var(--text-dark);
    font-family: var(--font-body);
    line-height: 1.7;
    font-size: 16px;
  }

  .aifrica-page { overflow-x: hidden; }

  .container {
    max-width: 1160px;
    margin: 0 auto;
    padding: 0 32px;
  }

  /* ---- NAVBAR ---- */
  .navbar {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 100;
    background: rgba(15, 37, 55, 0.97);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(212, 160, 23, 0.2);
    padding: 0 32px;
  }

  .navbar-inner {
    max-width: 1160px;
    margin: 0 auto;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .navbar-logo {
    font-family: var(--font-display);
    font-size: 26px;
    font-weight: 700;
    color: var(--white);
    letter-spacing: 1px;
  }

  .navbar-logo span {
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .navbar-links {
    display: flex;
    gap: 36px;
    list-style: none;
  }

  .navbar-links a {
    color: rgba(255,255,255,0.75);
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.3px;
    transition: var(--transition);
  }

  .navbar-links a:hover { color: var(--accent-yellow); }

  .navbar-cta {
    background: var(--gradient-accent);
    color: var(--primary-dark);
    border: none;
    padding: 10px 24px;
    border-radius: 6px;
    font-family: var(--font-body);
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    letter-spacing: 0.3px;
  }

  .navbar-cta:hover {
    box-shadow: 0 4px 16px rgba(212, 160, 23, 0.4);
    transform: translateY(-1px);
  }

  /* ---- HEADER ---- */
  .header-section {
    min-height: 100vh;
    background: var(--primary-dark);
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    padding-top: 72px;
  }

  .header-section::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 70% 60% at 70% 50%, rgba(212,160,23,0.08) 0%, transparent 65%),
      radial-gradient(ellipse 50% 40% at 10% 80%, rgba(26,58,82,0.6) 0%, transparent 60%);
    pointer-events: none;
  }

  .header-grid-pattern {
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
    background-size: 80px 80px;
    pointer-events: none;
  }

  .header-content {
    position: relative;
    z-index: 1;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
    padding: 80px 0;
  }

  .header-left { animation: fadeUp 0.8s ease both; }

  .header-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(212,160,23,0.12);
    border: 1px solid rgba(212,160,23,0.3);
    color: var(--accent-yellow);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 8px 18px;
    border-radius: 100px;
    margin-bottom: 32px;
  }

  .header-badge::before {
    content: '';
    width: 6px;
    height: 6px;
    background: var(--accent-gold);
    border-radius: 50%;
  }

  .header-title {
    font-family: var(--font-display);
    font-size: clamp(42px, 5.5vw, 72px);
    font-weight: 800;
    line-height: 1.08;
    letter-spacing: -1px;
    color: var(--white);
    margin-bottom: 24px;
  }

  .header-title .highlight {
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .header-subtitle {
    font-size: 17px;
    color: rgba(255,255,255,0.6);
    line-height: 1.8;
    font-weight: 300;
    margin-bottom: 44px;
    max-width: 480px;
  }

  .header-buttons {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
  }

  .btn-primary {
    background: var(--gradient-accent);
    color: var(--primary-dark);
    border: none;
    padding: 16px 36px;
    border-radius: 8px;
    font-family: var(--font-body);
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    letter-spacing: 0.3px;
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(212,160,23,0.4);
  }

  .btn-outline {
    background: transparent;
    color: var(--white);
    border: 1px solid rgba(255,255,255,0.25);
    padding: 16px 36px;
    border-radius: 8px;
    font-family: var(--font-body);
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);
  }

  .btn-outline:hover {
    border-color: var(--accent-gold);
    color: var(--accent-yellow);
  }

  .header-right {
    animation: fadeUp 0.8s 0.2s ease both;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .stat-card {
    background: rgba(255,255,255,0.05);
    border: 1px solid rgba(255,255,255,0.08);
    border-radius: var(--radius);
    padding: 28px 24px;
    transition: var(--transition);
  }

  .stat-card:hover {
    background: rgba(212,160,23,0.08);
    border-color: rgba(212,160,23,0.25);
    transform: translateY(-3px);
  }

  .stat-number {
    font-family: var(--font-display);
    font-size: 38px;
    font-weight: 700;
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
    margin-bottom: 8px;
  }

  .stat-label {
    font-size: 13px;
    color: rgba(255,255,255,0.5);
    font-weight: 400;
    line-height: 1.4;
  }

  /* ---- INTRO ---- */
  .intro-section {
    padding: 120px 0;
    background: var(--white);
  }

  .section-tag {
    display: inline-block;
    color: var(--accent-gold);
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 16px;
    position: relative;
    padding-left: 24px;
  }

  .section-tag::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 14px;
    height: 2px;
    background: var(--accent-gold);
  }

  .section-title {
    font-family: var(--font-display);
    font-size: clamp(28px, 3.5vw, 44px);
    font-weight: 700;
    color: var(--primary-dark);
    line-height: 1.15;
    letter-spacing: -0.5px;
    margin-bottom: 20px;
  }

  .intro-inner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 96px;
    align-items: center;
  }

  .intro-body {
    color: var(--text-gray);
    font-size: 15.5px;
    line-height: 1.85;
    font-weight: 400;
  }

  .intro-body p + p { margin-top: 18px; }

  .intro-tagline {
    margin-top: 36px;
    padding: 20px 24px;
    background: linear-gradient(135deg, rgba(26,58,82,0.04), rgba(212,160,23,0.06));
    border-left: 3px solid var(--accent-gold);
    border-radius: 0 8px 8px 0;
    font-style: italic;
    color: var(--primary-navy);
    font-size: 16px;
    font-weight: 500;
    line-height: 1.6;
  }

  .intro-visual {
    background: var(--primary-dark);
    border-radius: 16px;
    padding: 48px 40px;
    position: relative;
    overflow: hidden;
  }

  .intro-visual::before {
    content: '';
    position: absolute;
    top: -40px; right: -40px;
    width: 200px; height: 200px;
    background: radial-gradient(circle, rgba(212,160,23,0.15), transparent 70%);
    border-radius: 50%;
  }

  .intro-visual-title {
    font-family: var(--font-display);
    font-size: 22px;
    font-weight: 700;
    color: var(--white);
    margin-bottom: 32px;
    position: relative;
  }

  .intro-feature-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 16px;
    position: relative;
  }

  .intro-feature-list li {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    color: rgba(255,255,255,0.75);
    font-size: 14.5px;
    line-height: 1.6;
  }

  .feat-icon {
    width: 28px;
    height: 28px;
    background: rgba(212,160,23,0.15);
    border: 1px solid rgba(212,160,23,0.3);
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: var(--accent-yellow);
    font-size: 13px;
    font-weight: 700;
    margin-top: 1px;
  }

  /* ---- SOLUTIONS ---- */
  .solutions-section {
    padding: 120px 0;
    background: var(--light-bg);
    position: relative;
  }

  .solutions-section::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: var(--border-light);
  }

  .section-header {
    text-align: center;
    margin-bottom: 64px;
  }

  .section-subtitle {
    color: var(--text-gray);
    font-size: 16px;
    max-width: 560px;
    margin: 0 auto;
    font-weight: 400;
    line-height: 1.75;
  }

  .solutions-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .solution-card {
    background: var(--white);
    border: 1px solid var(--border-light);
    border-radius: var(--radius);
    padding: 36px 28px;
    transition: var(--transition);
    position: relative;
    overflow: hidden;
  }

  .solution-card::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 3px;
    background: var(--gradient-accent);
    transform: scaleX(0);
    transition: transform var(--transition);
    transform-origin: left;
  }

  .solution-card:hover {
    box-shadow: var(--shadow-lg);
    transform: translateY(-4px);
    border-color: rgba(212,160,23,0.2);
  }

  .solution-card:hover::after { transform: scaleX(1); }

  .solution-icon-wrap {
    width: 52px;
    height: 52px;
    background: linear-gradient(135deg, rgba(26,58,82,0.06), rgba(212,160,23,0.08));
    border: 1px solid rgba(26,58,82,0.1);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-navy);
    margin-bottom: 22px;
  }

  .solution-title {
    font-family: var(--font-display);
    font-size: 19px;
    font-weight: 700;
    color: var(--primary-dark);
    margin-bottom: 12px;
  }

  .solution-description {
    color: var(--text-gray);
    font-size: 14px;
    margin-bottom: 20px;
    line-height: 1.7;
  }

  .solution-features {
    list-style: none;
    border-top: 1px solid var(--border-light);
    padding-top: 16px;
  }

  .solution-features li {
    font-size: 13px;
    color: var(--text-gray);
    padding: 5px 0;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .solution-features li::before {
    content: '';
    width: 4px;
    height: 4px;
    background: var(--accent-gold);
    border-radius: 50%;
    flex-shrink: 0;
  }

  /* ---- TIMELINE ---- */
  .development-section {
    padding: 120px 0;
    background: var(--white);
  }

  .development-inner {
    display: grid;
    grid-template-columns: 380px 1fr;
    gap: 96px;
    align-items: start;
  }

  .development-left {
    position: sticky;
    top: 100px;
  }

  .development-desc {
    color: var(--text-gray);
    font-size: 15.5px;
    line-height: 1.8;
    margin-top: 20px;
    margin-bottom: 36px;
  }

  .dev-cta {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    color: var(--accent-gold);
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
    transition: var(--transition);
  }

  .dev-cta:hover { gap: 14px; }

  .dev-cta::after {
    content: '→';
    font-size: 16px;
  }

  .timeline {
    display: flex;
    flex-direction: column;
    gap: 0;
    position: relative;
  }

  .timeline::before {
    content: '';
    position: absolute;
    left: 22px;
    top: 24px;
    bottom: 24px;
    width: 1px;
    background: linear-gradient(to bottom, var(--accent-gold), rgba(212,160,23,0.1));
  }

  .timeline-item {
    display: flex;
    gap: 32px;
    padding-bottom: 40px;
    align-items: flex-start;
  }

  .timeline-item:last-child { padding-bottom: 0; }

  .timeline-dot {
    width: 44px;
    height: 44px;
    background: var(--white);
    border: 2px solid var(--accent-gold);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-display);
    font-size: 16px;
    font-weight: 700;
    color: var(--primary-navy);
    flex-shrink: 0;
    position: relative;
    z-index: 1;
    box-shadow: var(--shadow-sm);
  }

  .timeline-body {
    border: 1px solid var(--border-light);
    border-radius: var(--radius);
    padding: 24px 28px;
    flex: 1;
    background: var(--white);
    transition: var(--transition);
    box-shadow: var(--shadow-sm);
  }

  .timeline-body:hover {
    border-color: rgba(212,160,23,0.3);
    box-shadow: var(--shadow-md);
  }

  .timeline-title {
    font-family: var(--font-display);
    font-size: 18px;
    font-weight: 700;
    color: var(--primary-dark);
    margin-bottom: 8px;
  }

  .timeline-desc {
    color: var(--text-gray);
    font-size: 14.5px;
    line-height: 1.75;
    font-weight: 400;
  }

  /* ---- FAQ ---- */
  .faq-section {
    padding: 120px 0;
    background: var(--light-bg);
  }

  .faq-inner {
    display: grid;
    grid-template-columns: 340px 1fr;
    gap: 96px;
    align-items: start;
  }

  .faq-left {
    position: sticky;
    top: 100px;
  }

  .faq-left-desc {
    color: var(--text-gray);
    font-size: 15px;
    line-height: 1.8;
    margin-top: 20px;
  }

  .faq-list { display: flex; flex-direction: column; gap: 10px; }

  .faq-item {
    background: var(--white);
    border: 1px solid var(--border-light);
    border-radius: 10px;
    overflow: hidden;
    transition: var(--transition);
    box-shadow: var(--shadow-sm);
  }

  .faq-item.active {
    border-color: rgba(212,160,23,0.35);
    box-shadow: var(--shadow-md);
  }

  .faq-question {
    width: 100%;
    background: none;
    border: none;
    padding: 20px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    cursor: pointer;
    font-family: var(--font-body);
    font-size: 15px;
    font-weight: 600;
    color: var(--primary-dark);
    text-align: left;
    transition: var(--transition);
  }

  .faq-question:hover { color: var(--primary-navy); }

  .faq-chevron {
    width: 28px;
    height: 28px;
    background: var(--light-bg);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: 16px;
    color: var(--accent-gold);
    transition: transform var(--transition);
    font-weight: 400;
  }

  .faq-item.active .faq-chevron { transform: rotate(45deg); }

  .faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s ease;
  }

  .faq-item.active .faq-answer { max-height: 300px; }

  .faq-answer-inner {
    padding: 0 24px 20px;
    color: var(--text-gray);
    font-size: 14.5px;
    line-height: 1.8;
    border-top: 1px solid var(--border-light);
    padding-top: 16px;
    margin: 0 24px;
  }

  /* ---- CTA ---- */
  .cta-section {
    padding: 140px 0;
    background: var(--primary-dark);
    position: relative;
    overflow: hidden;
  }

  .cta-section::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 60% 70% at 50% 50%, rgba(212,160,23,0.1) 0%, transparent 65%);
  }

  .cta-section::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(212,160,23,0.5), transparent);
  }

  .cta-content {
    text-align: center;
    position: relative;
    z-index: 1;
    max-width: 680px;
    margin: 0 auto;
  }

  .cta-title {
    font-family: var(--font-display);
    font-size: clamp(30px, 4vw, 50px);
    font-weight: 800;
    color: var(--white);
    line-height: 1.15;
    letter-spacing: -0.5px;
    margin-bottom: 22px;
  }

  .cta-title span {
    background: var(--gradient-accent);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .cta-desc {
    color: rgba(255,255,255,0.6);
    font-size: 17px;
    line-height: 1.75;
    font-weight: 300;
    margin-bottom: 48px;
  }

  .cta-actions {
    display: flex;
    gap: 16px;
    justify-content: center;
    flex-wrap: wrap;
  }

  .cta-btn-main {
    background: var(--gradient-accent);
    color: var(--primary-dark);
    border: none;
    padding: 18px 44px;
    border-radius: 8px;
    font-family: var(--font-body);
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: var(--transition);
    letter-spacing: 0.3px;
  }

  .cta-btn-main:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 32px rgba(212,160,23,0.4);
  }

  .cta-btn-sub {
    background: transparent;
    color: rgba(255,255,255,0.8);
    border: 1px solid rgba(255,255,255,0.2);
    padding: 18px 44px;
    border-radius: 8px;
    font-family: var(--font-body);
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);
  }

  .cta-btn-sub:hover {
    border-color: var(--accent-gold);
    color: var(--accent-yellow);
  }

  /* ---- FOOTER LINE ---- */
  .footer-strip {
    background: var(--primary-dark);
    border-top: 1px solid rgba(255,255,255,0.06);
    padding: 28px 32px;
    text-align: center;
  }

  .footer-strip p {
    color: rgba(255,255,255,0.35);
    font-size: 13px;
    font-weight: 400;
  }

  .footer-strip span {
    color: var(--accent-gold);
  }

  /* ---- ANIMATIONS ---- */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ---- RESPONSIVE ---- */
  @media (max-width: 1024px) {
    .header-content { grid-template-columns: 1fr; gap: 56px; }
    .intro-inner { grid-template-columns: 1fr; gap: 56px; }
    .development-inner { grid-template-columns: 1fr; gap: 48px; }
    .faq-inner { grid-template-columns: 1fr; gap: 48px; }
    .development-left, .faq-left { position: static; }
    .solutions-grid { grid-template-columns: repeat(2, 1fr); }
    .navbar-links { display: none; }
  }

  @media (max-width: 640px) {
    .solutions-grid { grid-template-columns: 1fr; }
    .header-right { grid-template-columns: 1fr 1fr; }
  }
`;

/* ---- NAV ---- */
const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-inner">
      <div className="navbar-logo">
        AI<span>FRICA</span>
      </div>
      <ul className="navbar-links">
        {["Solutions", "Processus", "FAQ", "Contact"].map((l) => (
          <li key={l}>
            <a href="#">{l}</a>
          </li>
        ))}
      </ul>
      <button className="navbar-cta">Démo Gratuite</button>
    </div>
  </nav>
);

/* ---- HEADER ---- */
const HeaderSection = () => (
  <section className="header-section">
    <div className="header-grid-pattern" />
    <div className="container">
      <div className="header-content">
        <div className="header-left">
          <div className="header-badge">Plateforme IA · Afrique</div>
          <h1 className="header-title">
            L'Intelligence Artificielle au{" "}
            <span className="highlight">Service de l'Afrique</span>
          </h1>
          <p className="header-subtitle">
            Transformez vos opérations, accélérez votre croissance et prenez des
            décisions éclairées grâce à nos solutions IA conçues pour le marché
            africain.
          </p>
          <div className="header-buttons">
            <button className="btn-primary">Commencer Gratuitement</button>
            <button className="btn-outline">Voir la Démo</button>
          </div>
        </div>
        <div className="header-right">
          {[
            { number: "500+", label: "Entreprises accompagnées" },
            { number: "15+", label: "Pays africains couverts" },
            { number: "98%", label: "Satisfaction client" },
            { number: "3×", label: "ROI moyen constaté" },
          ].map((s, i) => (
            <div key={i} className="stat-card">
              <div className="stat-number">{s.number}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

/* ---- INTRO ---- */
const IntroSection = () => (
  <section className="intro-section">
    <div className="container">
      <div className="intro-inner">
        <div>
          <span className="section-tag">Notre Mission</span>
          <h2 className="section-title">
            La Data et l'IA au service des entreprises africaines
          </h2>
          <div className="intro-body">
            <p>
              L'Afrique entre dans une nouvelle ère économique. Portées par une
              jeunesse dynamique, une urbanisation accélérée et une connectivité
              en pleine expansion, les entreprises du continent font face à des
              opportunités immenses — mais aussi à des défis de taille.
            </p>
            <p>
              AIFRICA est spécialisée dans l'accompagnement des organisations
              africaines vers la transformation numérique par la Data et
              l'Intelligence Artificielle. Notre mission est de mettre ces
              technologies au service de la réalité des entreprises africaines,
              pour des résultats concrets, mesurables et durables.
            </p>
            <p>
              Nous croyons que la Data et l'IA ne sont pas réservées aux grandes
              entreprises mondiales. Elles sont accessibles, adaptables, et
              peuvent devenir un levier de croissance puissant pour toute
              organisation — quelle que soit sa taille ou son secteur
              d'activité.
            </p>
          </div>
          <div className="intro-tagline">
            AIFRICA, c'est l'intelligence de demain, au service de l'Afrique
            d'aujourd'hui.
          </div>
        </div>
        <div className="intro-visual">
          <div className="intro-visual-title">Pourquoi AIFRICA ?</div>
          <ul className="intro-feature-list">
            {[
              [
                "✓",
                "Solutions adaptées aux réalités africaines",
                "Contexte local, infrastructure disponible, langues parlées",
              ],
              [
                "✓",
                "Équipe d'experts certifiés en IA & Data",
                "Senior data scientists et ingénieurs ML expérimentés",
              ],
              [
                "✓",
                "Accompagnement de bout en bout",
                "Du conseil à la mise en production, nous sommes là",
              ],
              [
                "✓",
                "ROI mesurable et garanti",
                "Résultats chiffrés dès les 90 premiers jours",
              ],
              [
                "✓",
                "Sécurité et conformité",
                "Données hébergées localement, conformité RGPD garantie",
              ],
            ].map(([icon, title, sub], i) => (
              <li key={i}>
                <div className="feat-icon">{icon}</div>
                <div>
                  <div
                    style={{
                      color: "#fff",
                      fontWeight: 500,
                      fontSize: "14px",
                      marginBottom: "2px",
                    }}
                  >
                    {title}
                  </div>
                  <div style={{ fontSize: "13px", opacity: 0.5 }}>{sub}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

/* ---- SOLUTIONS ---- */
const SolutionsSection = () => {
  const solutions = [
    {
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "IA Générative",
      description:
        "Créez du contenu unique et personnalisé avec nos modèles d'IA générative adaptés au contexte africain.",
      features: [
        "Génération de texte multilingue",
        "Création d'images et designs",
        "Traduction automatique avancée",
        "Synthèse vocale naturelle",
      ],
    },
    {
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 3v18h18" />
          <path d="M18 17V9" />
          <path d="M13 17V5" />
          <path d="M8 17v-3" />
        </svg>
      ),
      title: "Analyse de Données",
      description:
        "Transformez vos données brutes en insights pertinents pour prendre des décisions éclairées.",
      features: [
        "Analyse prédictive",
        "Visualisation interactive",
        "Reporting automatisé",
        "Détection d'anomalies",
      ],
    },
    {
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v6m0 6v6m4.22-13.22l4.24 4.24M1.54 1.54l4.24 4.24M20.46 20.46l-4.24-4.24M1.54 20.46l4.24-4.24" />
        </svg>
      ),
      title: "IA Agentique",
      description:
        "Déployez des agents intelligents autonomes pour automatiser vos processus métier critiques.",
      features: [
        "Agents conversationnels",
        "Automatisation intelligente",
        "Apprentissage continu",
        "Intégration multi-plateforme",
      ],
    },
    {
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      title: "Personnalisation",
      description:
        "Offrez des expériences uniques à chaque utilisateur avec l'IA adaptative en temps réel.",
      features: [
        "Recommandations personnalisées",
        "Segmentation dynamique",
        "Optimisation temps réel",
        "Profils intelligents",
      ],
    },
    {
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      title: "Sécurité IA",
      description:
        "Protégez vos systèmes et vos données avec nos solutions de sécurité basées sur l'IA.",
      features: [
        "Détection de menaces",
        "Analyse comportementale",
        "Sécurité prédictive",
        "Réponse automatique",
      ],
    },
    {
      icon: (
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      ),
      title: "Optimisation",
      description:
        "Maximisez l'efficacité de vos opérations et réduisez les coûts avec l'IA d'optimisation.",
      features: [
        "Optimisation des ressources",
        "Planification intelligente",
        "Réduction des coûts",
        "Amélioration continue",
      ],
    },
  ];

  return (
    <section className="solutions-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Nos Solutions</span>
          <h2 className="section-title">Une suite complète de solutions IA</h2>
          <p className="section-subtitle">
            Des technologies de pointe adaptées aux défis spécifiques du marché
            africain, déployées avec expertise et accompagnées dans la durée.
          </p>
        </div>
        <div className="solutions-grid">
          {solutions.map((s, i) => (
            <div key={i} className="solution-card">
              <div className="solution-icon-wrap">{s.icon}</div>
              <h3 className="solution-title">{s.title}</h3>
              <p className="solution-description">{s.description}</p>
              <ul className="solution-features">
                {s.features.map((f, j) => (
                  <li key={j}>{f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---- TIMELINE ---- */
const DeveloppementSection = () => {
  const timeline = [
    {
      number: "01",
      title: "Analyse & Conseil",
      description:
        "Nous étudions vos besoins et élaborons une stratégie IA sur mesure. Notre équipe analyse vos processus actuels et identifie les opportunités d'optimisation les plus impactantes.",
    },
    {
      number: "02",
      title: "Développement",
      description:
        "Nos ingénieurs développent des solutions IA personnalisées en utilisant les technologies les plus adaptées à votre contexte, avec une méthodologie agile garantissant des livraisons rapides.",
    },
    {
      number: "03",
      title: "Intégration",
      description:
        "Nous intégrons nos solutions dans votre écosystème technologique existant de façon transparente, sans perturber vos opérations en cours.",
    },
    {
      number: "04",
      title: "Formation des équipes",
      description:
        "Nous formons vos collaborateurs à l'utilisation des nouvelles solutions pour maximiser l'adoption et l'efficacité. Des sessions personnalisées sont organisées selon vos besoins.",
    },
    {
      number: "05",
      title: "Support Continu",
      description:
        "Notre équipe reste disponible pour la maintenance, les mises à jour et l'amélioration continue. Un support réactif est disponible pour tous nos clients.",
    },
  ];

  return (
    <section className="development-section">
      <div className="container">
        <div className="development-inner">
          <div className="development-left">
            <span className="section-tag">Notre Processus</span>
            <h2 className="section-title">Comment nous travaillons ensemble</h2>
            <p className="development-desc">
              Une méthodologie éprouvée, pensée pour minimiser les risques et
              maximiser la valeur à chaque étape de votre transformation IA.
            </p>
            <button className="dev-cta">Démarrer un projet</button>
          </div>
          <div className="timeline">
            {timeline.map((item, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot">{item.number}</div>
                <div className="timeline-body">
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-desc">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---- FAQ ---- */
const FAQSection = () => {
  const [active, setActive] = useState(null);

  const faqs = [
    {
      question: "Qu'est-ce que la plateforme AIFRICA ?",
      answer:
        "AIFRICA est une plateforme d'intelligence artificielle complète conçue spécifiquement pour le marché africain. Elle offre des solutions IA personnalisées pour automatiser les processus, analyser les données et prendre des décisions plus intelligentes.",
    },
    {
      question: "Quels types d'entreprises peuvent utiliser AIFRICA ?",
      answer:
        "Notre plateforme s'adapte à tous les secteurs d'activité : finance, santé, éducation, agriculture, commerce, logistique et bien d'autres. Que vous soyez une startup, une PME ou une grande entreprise, nous avons des solutions adaptées à vos besoins.",
    },
    {
      question: "Comment commencer avec AIFRICA ?",
      answer:
        "Le processus est simple : contactez-nous pour une consultation gratuite, notre équipe analyse vos besoins, nous vous proposons une solution personnalisée, et après validation, nous procédons à l'implémentation.",
    },
    {
      question: "Quelles technologies utilisez-vous ?",
      answer:
        "Nous utilisons les technologies IA les plus avancées : machine learning, deep learning, NLP, computer vision, et IA générative. Notre plateforme est basée sur des architectures cloud modernes et sécurisées.",
    },
    {
      question: "Mes données sont-elles sécurisées ?",
      answer:
        "Absolument. La sécurité est notre priorité. Vos données sont chiffrées de bout en bout, stockées dans des centres de données sécurisés, et nous respectons toutes les réglementations de protection des données, y compris le RGPD.",
    },
    {
      question: "Quel est le coût des solutions AIFRICA ?",
      answer:
        "Nos tarifs sont flexibles et adaptés à votre budget. Nous proposons différents modèles : abonnement mensuel, paiement à l'utilisation, ou projets sur mesure. Contactez-nous pour un devis personnalisé.",
    },
    {
      question: "Offrez-vous une formation aux équipes ?",
      answer:
        "Oui, nous proposons des programmes de formation complets pour vos équipes. De la sensibilisation à l'IA jusqu'à l'expertise technique, nos formateurs assurent que votre personnel maîtrise parfaitement nos solutions.",
    },
    {
      question: "Quel est le délai de mise en place ?",
      answer:
        "Le délai varie selon la complexité du projet. Pour les solutions standards, la mise en place prend de 2 à 4 semaines. Pour les projets personnalisés, le délai moyen est de 2 à 3 mois.",
    },
  ];

  return (
    <section className="faq-section">
      <div className="container">
        <div className="faq-inner">
          <div className="faq-left">
            <span className="section-tag">FAQ</span>
            <h2 className="section-title">Questions fréquentes</h2>
            <p className="faq-left-desc">
              Vous ne trouvez pas la réponse ? Notre équipe est disponible du
              lundi au vendredi pour répondre à toutes vos questions.
            </p>
          </div>
          <div className="faq-list">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`faq-item ${active === i ? "active" : ""}`}
              >
                <button
                  className="faq-question"
                  onClick={() => setActive(active === i ? null : i)}
                >
                  {faq.question}
                  <span className="faq-chevron">+</span>
                </button>
                <div className="faq-answer">
                  <div className="faq-answer-inner">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---- CTA ---- */
const CTASection = () => (
  <section className="cta-section">
    <div className="container">
      <div className="cta-content">
        <h2 className="cta-title">
          Prêt à transformer votre entreprise
          <br />
          avec <span>l'Intelligence Artificielle</span> ?
        </h2>
        <p className="cta-desc">
          Rejoignez des centaines d'entreprises africaines qui utilisent déjà
          AIFRICA pour accélérer leur croissance, optimiser leurs opérations et
          innover dans leur secteur.
        </p>
        <div className="cta-actions">
          <button className="cta-btn-main">Demander une Démo Gratuite</button>
          <button className="cta-btn-sub">Parler à un Expert</button>
        </div>
      </div>
    </div>
  </section>
);

/* ---- PAGE ---- */
export default function PlateformeAifrica() {
  return (
    <>
      <style>{styles}</style>
      <div className="aifrica-page">
        <Navbar />
        <HeaderSection />
        <IntroSection />
        <SolutionsSection />
        <DeveloppementSection />
        <FAQSection />
        <CTASection />
        <div className="footer-strip">
          <p>
            © 2025 <span>AIFRICA</span> · Tous droits réservés · L'intelligence
            de demain au service de l'Afrique d'aujourd'hui
          </p>
        </div>
      </div>
    </>
  );
}
