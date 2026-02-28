import React, { useState } from "react";
import { Link } from "react-router-dom";
import afriqueImage from "../assets/images/Aifrica1.jpeg";
import afriqueImage2 from "../assets/images/Aifrica2.webp";
import afriqueImage3 from "../assets/images/Aifrica3.webp";
import afriqueImage4 from "../assets/images/Aifrica4.jpeg";
import afriqueImage5 from "../assets/images/Aifrica5.jpg";
import afriqueImage6 from "../assets/images/Aifrica6.jpg";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600;700&display=swap');

  :root {
    --ink:        #0f2537;
    --ink-mid:    #1a3a52;
    --ink-soft:   #6b7280;
    --cream:      #f8f9fa;
    --warm:       #eef2f7;
    --terra:      #1a3a52;
    --terra-lt:   #d4a017;
    --sand:       #fde68a;
    --white:      #ffffff;
    --border:     #e5e7eb;
    --border-dk:  #d1d5db;
    --font-d:     'Playfair Display', Georgia, serif;
    --font-ui:    'DM Sans', system-ui, sans-serif;
    --ease:       cubic-bezier(0.16, 1, 0.3, 1);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .tech-root {
    font-family: var(--font-ui);
    background: var(--cream);
    color: var(--ink);
    min-height: 100vh;
  }

  /* ─── TOP BAND ─── */
  .tech-topband {
    background: var(--ink);
    padding: 11px 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .tech-topband-label {
    font-size: 0.62rem;
    font-weight: 400;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--terra-lt);
  }
  .tech-topband-right {
    display: flex;
    align-items: center;
    gap: 24px;
  }
  .tech-topband-date {
    font-size: 0.62rem;
    color: rgba(255,255,255,0.35);
    letter-spacing: 0.1em;
  }
  .tech-topband-back {
    font-size: 0.62rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.5);
    text-decoration: none;
    transition: color 0.2s;
  }
  .tech-topband-back:hover { color: var(--terra-lt); }

  /* ─── HERO SPLIT ─── */
  .tech-hero {
    display: grid;
    grid-template-columns: 1fr 1.15fr;
    min-height: 84vh;
    max-height: 920px;
  }

  .tech-hero-left {
    background: var(--ink);
    padding: 56px 52px 56px 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
  }
  .tech-hero-left::after {
    content: 'TECH';
    position: absolute;
    bottom: -50px; right: -30px;
    font-family: var(--font-d);
    font-size: 22rem;
    font-weight: 600;
    font-style: italic;
    color: rgba(255,255,255,0.022);
    line-height: 1;
    pointer-events: none;
    user-select: none;
  }

  .tech-hero-tag {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 0.62rem;
    font-weight: 400;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--terra-lt);
    animation: fadeUp 0.6s var(--ease) both;
  }
  .tech-hero-tag::before {
    content: '';
    display: block;
    width: 24px; height: 2px;
    background: var(--terra-lt);
  }

  .tech-hero-heading {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 36px 0 28px;
    animation: fadeUp 0.7s 0.1s var(--ease) both;
  }
  .tech-hero-h1 {
    font-family: var(--font-d);
    font-size: clamp(3.2rem, 5vw, 5.8rem);
    font-weight: 600;
    color: var(--white);
    line-height: 1.0;
  }
  .tech-hero-h1 em {
    font-style: italic;
    color: var(--terra-lt);
  }
  .tech-hero-sub {
    margin-top: 18px;
    font-size: 0.84rem;
    line-height: 1.85;
    color: rgba(255,255,255,0.42);
    max-width: 360px;
  }

  .tech-hero-stats {
    display: flex;
    gap: 0;
    border-top: 1px solid rgba(255,255,255,0.1);
    padding-top: 26px;
    animation: fadeUp 0.7s 0.22s var(--ease) both;
  }
  .tech-stat {
    flex: 1;
    padding-right: 22px;
  }
  .tech-stat + .tech-stat {
    border-left: 1px solid rgba(255,255,255,0.1);
    padding-left: 22px;
    padding-right: 0;
  }
  .tech-stat-num {
    font-family: var(--font-d);
    font-size: 2.1rem;
    font-weight: 600;
    color: var(--terra-lt);
    line-height: 1;
  }
  .tech-stat-label {
    font-size: 0.58rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.3);
    margin-top: 6px;
  }

  .tech-hero-right {
    position: relative;
    overflow: hidden;
  }
  .tech-hero-right img {
    width: 100%; height: 100%;
    object-fit: cover;
    display: block;
    animation: heroZoom 1.6s var(--ease) forwards;
    transform: scale(1.04);
  }
  @keyframes heroZoom { to { transform: scale(1); } }
  .tech-hero-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(28,25,23,0.88) 0%, rgba(28,25,23,0.1) 50%, transparent 100%);
  }
  .tech-hero-caption {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    padding: 48px 40px 36px;
  }
  .tech-caption-tag {
    display: inline-block;
    background: var(--terra);
    color: #fff;
    font-size: 0.58rem;
    font-weight: 400;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    padding: 5px 12px;
    border-radius: 3px;
    margin-bottom: 14px;
  }
  .tech-caption-title {
    font-family: var(--font-d);
    font-size: clamp(1.4rem, 2.5vw, 2rem);
    font-weight: 600;
    color: #fff;
    line-height: 1.2;
    margin-bottom: 16px;
    max-width: 480px;
  }
  .tech-caption-meta {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
  }
  .tech-caption-date {
    font-size: 0.68rem;
    font-weight: 600;
    color: var(--sand);
  }
  .tech-caption-dot {
    width: 3px; height: 3px;
    background: rgba(255,255,255,0.3);
    border-radius: 50%;
  }
  .tech-caption-loc {
    font-size: 0.68rem;
    color: rgba(255,255,255,0.45);
  }
  .tech-cta {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: var(--white);
    color: var(--ink);
    text-decoration: none;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 12px 22px;
    border-radius: 4px;
    transition: background 0.2s, color 0.2s, gap 0.2s;
  }
  .tech-cta:hover { background: var(--terra); color: #fff; gap: 16px; }

  /* ─── TICKER ─── */
  .tech-ticker-wrap {
    background: var(--terra);
    overflow: hidden;
    padding: 9px 0;
  }
  .tech-ticker-track {
    display: inline-flex;
    white-space: nowrap;
    animation: ticker 32s linear infinite;
  }
  .tech-ticker-item {
    display: inline-flex;
    align-items: center;
    gap: 26px;
    padding-right: 60px;
    font-size: 0.62rem;
    font-weight: 400;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.9);
  }
  .tech-ticker-sep {
    width: 4px; height: 4px;
    border-radius: 50%;
    background: rgba(255,255,255,0.35);
  }
  @keyframes ticker {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

  /* ─── BODY ─── */
  .tech-body {
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 48px 80px;
  }

  .tech-section-hd {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 48px 0 36px;
    border-bottom: 2px solid var(--ink);
    margin-bottom: 40px;
  }
  .tech-section-hd-label {
    font-size: 0.6rem;
    font-weight: 400;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: var(--ink-soft);
    white-space: nowrap;
  }
  .tech-section-hd-title {
    font-family: var(--font-d);
    font-size: clamp(1.6rem, 2.8vw, 2.3rem);
    font-weight: 600;
    color: var(--ink);
    white-space: nowrap;
  }
  .tech-section-hd-line { flex: 1; height: 1px; background: var(--border); }
  .tech-section-hd-count {
    font-size: 0.62rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: var(--ink-soft);
    border: 1px solid var(--border-dk);
    padding: 4px 14px;
    border-radius: 100px;
    white-space: nowrap;
  }

  /* ─── LAYOUT ─── */
  .tech-layout {
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 52px;
    align-items: start;
  }

  /* ─── ARTICLE ROWS ─── */
  .tech-article-list { display: flex; flex-direction: column; }

  .tech-article-row {
    display: grid;
    grid-template-columns: 230px 1fr;
    gap: 28px;
    padding: 30px 0;
    border-bottom: 1px solid var(--border);
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    position: relative;
    align-items: start;
  }
  .tech-article-row::before {
    content: '';
    position: absolute;
    left: -48px; top: 0; bottom: 0;
    width: 3px;
    background: var(--terra);
    opacity: 0;
    transition: opacity 0.2s;
  }
  .tech-article-row:hover::before { opacity: 1; }

  .tech-img-wrap {
    position: relative;
    overflow: hidden;
    border-radius: 5px;
    height: 155px;
  }
  .tech-img-wrap img {
    width: 100%; height: 100%;
    object-fit: cover;
    transition: transform 0.5s var(--ease);
  }
  .tech-article-row:hover .tech-img-wrap img { transform: scale(1.07); }
  .tech-img-num {
    position: absolute;
    top: 9px; left: 9px;
    background: var(--ink);
    color: var(--terra-lt);
    font-size: 0.56rem;
    font-weight: 400;
    letter-spacing: 0.1em;
    padding: 3px 8px;
    border-radius: 3px;
  }

  .tech-article-body { display: flex; flex-direction: column; gap: 9px; padding-top: 2px; }

  .tech-article-meta {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .tech-article-cat {
    font-size: 0.56rem;
    font-weight: 400;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--terra);
  }
  .tech-article-mdot {
    width: 3px; height: 3px;
    background: var(--border-dk);
    border-radius: 50%;
  }
  .tech-article-date {
    font-size: 0.6rem;
    color: var(--ink-soft);
  }

  .tech-article-title {
    font-family: var(--font-d);
    font-size: 1.32rem;
    font-weight: 600;
    color: var(--ink);
    line-height: 1.2;
    transition: color 0.2s;
  }
  .tech-article-row:hover .tech-article-title { color: var(--terra); }

  .tech-article-excerpt {
    font-size: 0.82rem;
    line-height: 1.8;
    color: var(--ink-soft);
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .tech-article-foot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 4px;
  }
  .tech-article-loc {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.63rem;
    color: var(--ink-soft);
  }
  .tech-article-link {
    font-size: 0.65rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--terra);
    text-decoration: none;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: gap 0.2s;
  }
  .tech-article-link:hover { gap: 10px; }

  /* ─── SIDEBAR ─── */
  .tech-sidebar {
    position: sticky;
    top: 24px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .tech-sb-block {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 7px;
    overflow: hidden;
  }
  .tech-sb-hd {
    padding: 15px 22px;
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .tech-sb-hd-title {
    font-size: 0.58rem;
    font-weight: 400;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--ink);
  }
  .tech-sb-hd-line {
    width: 18px; height: 2px;
    background: var(--terra);
  }

  .tech-hi-list { padding: 6px 0; }
  .tech-hi-item {
    display: flex;
    gap: 15px;
    padding: 13px 22px;
    border-bottom: 1px solid var(--border);
    text-decoration: none;
    color: inherit;
    transition: background 0.18s;
    cursor: pointer;
  }
  .tech-hi-item:last-child { border-bottom: none; }
  .tech-hi-item:hover { background: var(--warm); }
  .tech-hi-idx {
    font-family: var(--font-d);
    font-size: 1.45rem;
    font-weight: 600;
    color: var(--sand);
    line-height: 1;
    min-width: 26px;
    flex-shrink: 0;
  }
  .tech-hi-title {
    font-family: var(--font-d);
    font-size: 0.93rem;
    font-weight: 600;
    color: var(--ink);
    line-height: 1.25;
    margin-bottom: 5px;
  }
  .tech-hi-date {
    font-size: 0.58rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--terra);
  }

  /* About block */
  .tech-about {
    background: var(--ink);
    border-radius: 7px;
    padding: 26px 22px;
  }
  .tech-about-tag {
    font-size: 0.56rem;
    font-weight: 400;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--terra-lt);
    margin-bottom: 12px;
  }
  .tech-about-title {
    font-family: var(--font-d);
    font-size: 1.35rem;
    font-style: italic;
    font-weight: 600;
    color: #fff;
    line-height: 1.25;
    margin-bottom: 12px;
  }
  .tech-about-text {
    font-size: 0.76rem;
    line-height: 1.8;
    color: rgba(255,255,255,0.42);
    margin-bottom: 18px;
  }
  .tech-topics {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
  }
  .tech-topic {
    font-size: 0.58rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.5);
    border: 1px solid rgba(255,255,255,0.14);
    padding: 4px 10px;
    border-radius: 3px;
  }

  /* ─── FOOTER ─── */
  .tech-footer {
    background: var(--ink);
    padding: 30px 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;
  }
  .tech-footer-brand {
    font-family: var(--font-d);
    font-size: 1rem;
    font-style: italic;
    color: rgba(255,255,255,0.45);
  }
  .tech-footer-brand span { color: var(--terra-lt); }
  .tech-footer-back {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: rgba(255,255,255,0.07);
    border: 1px solid rgba(255,255,255,0.12);
    color: rgba(255,255,255,0.6);
    text-decoration: none;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 11px 20px;
    border-radius: 4px;
    transition: background 0.2s, color 0.2s;
  }
  .tech-footer-back:hover {
    background: var(--terra);
    border-color: var(--terra);
    color: #fff;
  }

  /* ─── ANIMATIONS ─── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ─── RESPONSIVE ─── */
  @media (max-width: 960px) {
    .tech-hero { grid-template-columns: 1fr; min-height: auto; }
    .tech-hero-left { padding: 44px 28px; }
    .tech-hero-right { height: 64vw; max-height: 500px; }
    .tech-body { padding: 0 24px 60px; }
    .tech-layout { grid-template-columns: 1fr; }
    .tech-sidebar { position: static; }
    .tech-topband { padding: 10px 24px; }
    .tech-footer { padding: 26px 24px; }
    .tech-article-row { grid-template-columns: 1fr; }
    .tech-img-wrap { height: 220px; }
    .tech-article-row::before { left: -24px; }
    .tech-section-hd { flex-wrap: wrap; }
  }
`;

const articles = [
  {
    id: 1,
    date: "Février 2025",
    location: "Global",
    category: "Data Architecture",
    title: "Gouvernance data : pourquoi ça échoue (et comment vraiment réussir)",
    image: afriqueImage,
    text: "La gouvernance data est l'un des chantiers les plus ambitieux — et les plus mal exécutés — des organisations modernes. Voici un diagnostic lucide et des pistes actionnables pour y remédier. Selon une enquête PwC publiée en 2025, 91 % des CIO et responsables technologiques identifient la gouvernance data comme leur deuxième défi prioritaire."
  },
  {
    id: 2,
    date: "Février 2025",
    location: "Global",
    category: "LLMs en entreprise",
    title: "RAG, Fine-tuning, Agents : Comment choisir le bon pattern pour votre use case",
    image: afriqueImage2,
    text: "Les LLMs sont devenus accessibles. Le vrai défi n'est plus de choisir un modèle, mais de choisir la bonne architecture d'intégration. RAG, fine-tuning, agents : trois paradigmes distincts, trois logiques d'emploi, trois niveaux de complexité opérationnelle. Voici le guide technique et stratégique pour décideurs."
  },
  {
    id: 3,
    date: "Février 2025",
    location: "Global",
    category: "Data Science",
    title: "Data Science en 2026 : le métier a-t-il résisté à l'IA générative ?",
    image: afriqueImage3,
    text: "En deux ans, l'IA générative a automatiquement produit des analyses, rédigé du code Python et généré des visualisations. Alors, le Data Scientist est-il en voie de disparition ? La réponse est non — mais le métier s'est profondément transformé, et ceux qui n'ont pas compris ce basculement risquent d'être laissés pour compte."
  },
  {
    id: 4,
    date: "Février 2025",
    location: "Global",
    category: "Data Architecture & Cloud",
    title: "Snowflake vs BigQuery en 2026 : Le guide de choix pour décideurs techniques",
    image: afriqueImage4,
    text: "Architecture, modèles de pricing, écosystème, TCO, stratégie cloud : un comparatif sans concession des deux plateformes qui dominent le marché du cloud data warehouse en 2025. Pour un CDO, un Chief Architect ou un Head of Data qui doit trancher — ou justifier un choix devant sa direction."
  },
  {
    id: 5,
    date: "Février 2025",
    location: "Global",
    category: "LLMs en entreprise • Agents IA",
    title: "MCP en entreprise : Comment intégrer le Model Context Protocol dans votre stack data & IA",
    image: afriqueImage5,
    text: "Lancé par Anthropic en novembre 2024 et adopté en moins d'un an par OpenAI, Google, Microsoft et des milliers d'équipes en production, le MCP est en train de devenir le standard universel de l'intégration agentique. Ce qu'il est, pourquoi ça compte, et comment l'intégrer intelligemment."
  }
];

const tickerItems = [
  "Data Architecture", "LLMs", "Data Science", "Cloud Computing", 
  "Agents IA", "MCP", "Gouvernance Data", "Snowflake", "BigQuery", 
  "RAG", "Fine-tuning", "Intelligence Artificielle"
];

const ArrowRight = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);
const PinIcon = () => (
  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

export default function Technologie() {
  const [featured] = articles;

  return (
    <div className="tech-root">
      <style>{styles}</style>

      {/* TOP BAND */}
      <div className="tech-topband">
        <span className="tech-topband-label">Dossier Spécial · Technologie &amp; IA</span>
        <div className="tech-topband-right">
          <span className="tech-topband-date">Février 2025</span>
          <Link to="/" className="tech-topband-back">← Accueil</Link>
        </div>
      </div>

      {/* HERO */}
      <section className="tech-hero">
        <div className="tech-hero-left">
          <div className="tech-hero-tag">Dossier Spécial</div>
          <div className="tech-hero-heading">
            <h1 className="tech-hero-h1">
              <em>Technologie</em><br />
              &amp; Inno-va-tion<br />
              IA
            </h1>
            <p className="tech-hero-sub">
              Analyses, comparatifs et guides techniques sur les dernières
              avancées en intelligence artificielle, data architecture et cloud computing.
            </p>
          </div>
          <div className="tech-hero-stats">
            <div className="tech-stat">
              <div className="tech-stat-num">5</div>
              <div className="tech-stat-label">Articles</div>
            </div>
            <div className="tech-stat">
              <div className="tech-stat-num">12+</div>
              <div className="tech-stat-label">Sujets</div>
            </div>
            <div className="tech-stat">
              <div className="tech-stat-num">2025</div>
              <div className="tech-stat-label">Veille</div>
            </div>
          </div>
        </div>

        <div className="tech-hero-right">
          <img src={featured.image} alt={featured.title} />
          <div className="tech-hero-overlay" />
          <div className="tech-hero-caption">
            <span className="tech-caption-tag">⭐ À la une</span>
            <h2 className="tech-caption-title">{featured.title}</h2>
            <div className="tech-caption-meta">
              <span className="tech-caption-date">{featured.date}</span>
              <span className="tech-caption-dot" />
              <span className="tech-caption-loc">{featured.location}</span>
            </div>
            <Link to={`/article/${featured.id}`} className="tech-cta">Lire l'article <ArrowRight /></Link>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="tech-ticker-wrap">
        <div className="tech-ticker-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="tech-ticker-item">
              {item}<span className="tech-ticker-sep" />
            </span>
          ))}
        </div>
      </div>

      {/* BODY */}
      <div className="tech-body">
        <div className="tech-section-hd">
          <span className="tech-section-hd-label">Veille Technologique</span>
          <h2 className="tech-section-hd-title">Dernières analyses</h2>
          <div className="tech-section-hd-line" />
          <span className="tech-section-hd-count">{articles.length} articles</span>
        </div>

        <div className="tech-layout">
          {/* ARTICLE LIST */}
          <div className="tech-article-list">
            {articles.map((article, idx) => (
              <Link key={article.id} to={`/article/${article.id}`} className="tech-article-row">
                <div className="tech-img-wrap">
                  <img src={article.image} alt={article.title} />
                  <span className="tech-img-num">{String(idx + 1).padStart(2, '0')}</span>
                </div>
                <div className="tech-article-body">
                  <div className="tech-article-meta">
                    <span className="tech-article-cat">{article.category}</span>
                    <span className="tech-article-mdot" />
                    <span className="tech-article-date">{article.date}</span>
                  </div>
                  <h3 className="tech-article-title">{article.title}</h3>
                  <p className="tech-article-excerpt">{article.text}</p>
                  <div className="tech-article-foot">
                    <span className="tech-article-loc">
                      <PinIcon /> {article.location}
                    </span>
                    <span className="tech-article-link">
                      Lire l'article <ArrowRight />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* SIDEBAR */}
          <aside className="tech-sidebar">
            {/* Highlights */}
            <div className="tech-sb-block">
              <div className="tech-sb-hd">
                <span className="tech-sb-hd-title">À retenir</span>
                <div className="tech-sb-hd-line" />
              </div>
              <div className="tech-hi-list">
                {articles.slice(0, 4).map((article, idx) => (
                  <Link key={article.id} to={`/article/${article.id}`} className="tech-hi-item">
                    <span className="tech-hi-idx">{String(idx + 1).padStart(2, '0')}</span>
                    <div>
                      <div className="tech-hi-title">{article.title}</div>
                      <div className="tech-hi-date">{article.date}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* About */}
            <div className="tech-about">
              <div className="tech-about-tag">À propos du dossier</div>
              <div className="tech-about-title">Technologie & IA au cœur de l'innovation</div>
              <p className="tech-about-text">
                Ce dossier compile les analyses techniques, comparatifs et guides
                sur les dernières avancées en intelligence artificielle, data architecture 
                et cloud computing pour les décideurs technologiques.
              </p>
              <div className="tech-topics">
                {["Data Governance", "LLMs", "RAG", "Fine-tuning", "Agents", "Cloud", "MCP", "Data Science"].map(topic => (
                  <span key={topic} className="tech-topic">{topic}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="tech-footer">
        <div className="tech-footer-brand">
          Dossier <span>Technologie &amp; IA</span> — 2025
        </div>
        <Link to="/" className="tech-footer-back">← Retour à l'accueil</Link>
      </footer>
    </div>
  );
}
