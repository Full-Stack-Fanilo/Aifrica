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

  .af-root {
    font-family: var(--font-ui);
    background: var(--cream);
    color: var(--ink);
    min-height: 100vh;
  }

  /* ─── TOP BAND ─── */
  .af-topband {
    background: var(--ink);
    padding: 11px 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .af-topband-label {
    font-size: 0.62rem;
    font-weight: 400;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--terra-lt);
  }
  .af-topband-right {
    display: flex;
    align-items: center;
    gap: 24px;
  }
  .af-topband-date {
    font-size: 0.62rem;
    color: rgba(255,255,255,0.35);
    letter-spacing: 0.1em;
  }
  .af-topband-back {
    font-size: 0.62rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.5);
    text-decoration: none;
    transition: color 0.2s;
  }
  .af-topband-back:hover { color: var(--terra-lt); }

  /* ─── HERO SPLIT ─── */
  .af-hero {
    display: grid;
    grid-template-columns: 1fr 1.15fr;
    min-height: 84vh;
    max-height: 920px;
  }

  .af-hero-left {
    background: var(--ink);
    padding: 56px 52px 56px 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
  }
  .af-hero-left::after {
    content: 'IA';
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

  .af-hero-tag {
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
  .af-hero-tag::before {
    content: '';
    display: block;
    width: 24px; height: 2px;
    background: var(--terra-lt);
  }

  .af-hero-heading {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 36px 0 28px;
    animation: fadeUp 0.7s 0.1s var(--ease) both;
  }
  .af-hero-h1 {
    font-family: var(--font-d);
    font-size: clamp(3.2rem, 5vw, 5.8rem);
    font-weight: 600;
    color: var(--white);
    line-height: 1.0;
  }
  .af-hero-h1 em {
    font-style: italic;
    color: var(--terra-lt);
  }
  .af-hero-sub {
    margin-top: 18px;
    font-size: 0.84rem;
    line-height: 1.85;
    color: rgba(255,255,255,0.42);
    max-width: 360px;
  }

  .af-hero-stats {
    display: flex;
    gap: 0;
    border-top: 1px solid rgba(255,255,255,0.1);
    padding-top: 26px;
    animation: fadeUp 0.7s 0.22s var(--ease) both;
  }
  .af-stat {
    flex: 1;
    padding-right: 22px;
  }
  .af-stat + .af-stat {
    border-left: 1px solid rgba(255,255,255,0.1);
    padding-left: 22px;
    padding-right: 0;
  }
  .af-stat-num {
    font-family: var(--font-d);
    font-size: 2.1rem;
    font-weight: 600;
    color: var(--terra-lt);
    line-height: 1;
  }
  .af-stat-label {
    font-size: 0.58rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.3);
    margin-top: 6px;
  }

  .af-hero-right {
    position: relative;
    overflow: hidden;
  }
  .af-hero-right img {
    width: 100%; height: 100%;
    object-fit: cover;
    display: block;
    animation: heroZoom 1.6s var(--ease) forwards;
    transform: scale(1.04);
  }
  @keyframes heroZoom { to { transform: scale(1); } }
  .af-hero-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(28,25,23,0.88) 0%, rgba(28,25,23,0.1) 50%, transparent 100%);
  }
  .af-hero-caption {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    padding: 48px 40px 36px;
  }
  .af-caption-tag {
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
  .af-caption-title {
    font-family: var(--font-d);
    font-size: clamp(1.4rem, 2.5vw, 2rem);
    font-weight: 600;
    color: #fff;
    line-height: 1.2;
    margin-bottom: 16px;
    max-width: 480px;
  }
  .af-caption-meta {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
  }
  .af-caption-date {
    font-size: 0.68rem;
    font-weight: 600;
    color: var(--sand);
  }
  .af-caption-dot {
    width: 3px; height: 3px;
    background: rgba(255,255,255,0.3);
    border-radius: 50%;
  }
  .af-caption-loc {
    font-size: 0.68rem;
    color: rgba(255,255,255,0.45);
  }
  .af-cta {
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
  .af-cta:hover { background: var(--terra); color: #fff; gap: 16px; }

  /* ─── TICKER ─── */
  .af-ticker-wrap {
    background: var(--terra);
    overflow: hidden;
    padding: 9px 0;
  }
  .af-ticker-track {
    display: inline-flex;
    white-space: nowrap;
    animation: ticker 32s linear infinite;
  }
  .af-ticker-item {
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
  .af-ticker-sep {
    width: 4px; height: 4px;
    border-radius: 50%;
    background: rgba(255,255,255,0.35);
  }
  @keyframes ticker {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

  /* ─── BODY ─── */
  .af-body {
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 48px 80px;
  }

  .af-section-hd {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 48px 0 36px;
    border-bottom: 2px solid var(--ink);
    margin-bottom: 40px;
  }
  .af-section-hd-label {
    font-size: 0.6rem;
    font-weight: 400;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: var(--ink-soft);
    white-space: nowrap;
  }
  .af-section-hd-title {
    font-family: var(--font-d);
    font-size: clamp(1.6rem, 2.8vw, 2.3rem);
    font-weight: 600;
    color: var(--ink);
    white-space: nowrap;
  }
  .af-section-hd-line { flex: 1; height: 1px; background: var(--border); }
  .af-section-hd-count {
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
  .af-layout {
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 52px;
    align-items: start;
  }

  /* ─── ARTICLE ROWS ─── */
  .af-article-list { display: flex; flex-direction: column; }

  .af-article-row {
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
  .af-article-row::before {
    content: '';
    position: absolute;
    left: -48px; top: 0; bottom: 0;
    width: 3px;
    background: var(--terra);
    opacity: 0;
    transition: opacity 0.2s;
  }
  .af-article-row:hover::before { opacity: 1; }

  .af-img-wrap {
    position: relative;
    overflow: hidden;
    border-radius: 5px;
    height: 155px;
  }
  .af-img-wrap img {
    width: 100%; height: 100%;
    object-fit: cover;
    transition: transform 0.5s var(--ease);
  }
  .af-article-row:hover .af-img-wrap img { transform: scale(1.07); }
  .af-img-num {
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

  .af-article-body { display: flex; flex-direction: column; gap: 9px; padding-top: 2px; }

  .af-article-meta {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .af-article-cat {
    font-size: 0.56rem;
    font-weight: 400;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--terra);
  }
  .af-article-mdot {
    width: 3px; height: 3px;
    background: var(--border-dk);
    border-radius: 50%;
  }
  .af-article-date {
    font-size: 0.6rem;
    color: var(--ink-soft);
  }

  .af-article-title {
    font-family: var(--font-d);
    font-size: 1.32rem;
    font-weight: 600;
    color: var(--ink);
    line-height: 1.2;
    transition: color 0.2s;
  }
  .af-article-row:hover .af-article-title { color: var(--terra); }

  .af-article-excerpt {
    font-size: 0.82rem;
    line-height: 1.8;
    color: var(--ink-soft);
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .af-article-foot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 4px;
  }
  .af-article-loc {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.63rem;
    color: var(--ink-soft);
  }
  .af-article-link {
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
  .af-article-link:hover { gap: 10px; }

  /* ─── SIDEBAR ─── */
  .af-sidebar {
    position: sticky;
    top: 24px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .af-sb-block {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 7px;
    overflow: hidden;
  }
  .af-sb-hd {
    padding: 15px 22px;
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .af-sb-hd-title {
    font-size: 0.58rem;
    font-weight: 400;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--ink);
  }
  .af-sb-hd-line {
    width: 18px; height: 2px;
    background: var(--terra);
  }

  .af-hi-list { padding: 6px 0; }
  .af-hi-item {
    display: flex;
    gap: 15px;
    padding: 13px 22px;
    border-bottom: 1px solid var(--border);
    text-decoration: none;
    color: inherit;
    transition: background 0.18s;
    cursor: pointer;
  }
  .af-hi-item:last-child { border-bottom: none; }
  .af-hi-item:hover { background: var(--warm); }
  .af-hi-idx {
    font-family: var(--font-d);
    font-size: 1.45rem;
    font-weight: 600;
    color: var(--sand);
    line-height: 1;
    min-width: 26px;
    flex-shrink: 0;
  }
  .af-hi-title {
    font-family: var(--font-d);
    font-size: 0.93rem;
    font-weight: 600;
    color: var(--ink);
    line-height: 1.25;
    margin-bottom: 5px;
  }
  .af-hi-date {
    font-size: 0.58rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--terra);
  }

  /* About block */
  .af-about {
    background: var(--ink);
    border-radius: 7px;
    padding: 26px 22px;
  }
  .af-about-tag {
    font-size: 0.56rem;
    font-weight: 400;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--terra-lt);
    margin-bottom: 12px;
  }
  .af-about-title {
    font-family: var(--font-d);
    font-size: 1.35rem;
    font-style: italic;
    font-weight: 600;
    color: #fff;
    line-height: 1.25;
    margin-bottom: 12px;
  }
  .af-about-text {
    font-size: 0.76rem;
    line-height: 1.8;
    color: rgba(255,255,255,0.42);
    margin-bottom: 18px;
  }
  .af-countries {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
  }
  .af-country {
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
  .af-footer {
    background: var(--ink);
    padding: 30px 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;
  }
  .af-footer-brand {
    font-family: var(--font-d);
    font-size: 1rem;
    font-style: italic;
    color: rgba(255,255,255,0.45);
  }
  .af-footer-brand span { color: var(--terra-lt); }
  .af-footer-back {
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
  .af-footer-back:hover {
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
    .af-hero { grid-template-columns: 1fr; min-height: auto; }
    .af-hero-left { padding: 44px 28px; }
    .af-hero-right { height: 64vw; max-height: 500px; }
    .af-body { padding: 0 24px 60px; }
    .af-layout { grid-template-columns: 1fr; }
    .af-sidebar { position: static; }
    .af-topband { padding: 10px 24px; }
    .af-footer { padding: 26px 24px; }
    .af-article-row { grid-template-columns: 1fr; }
    .af-img-wrap { height: 220px; }
    .af-article-row::before { left: -24px; }
    .af-section-hd { flex-wrap: wrap; }
  }
`;

const articles = [
  {
    id: 1,
    date: "Février 2026",
    location: "New Delhi, Inde",
    category: "Sommet Mondial",
    title: "L'Afrique revendique sa place dans la course mondiale à l'IA",
    image: afriqueImage,
    text: "Longtemps cantonnée aux marges du débat mondial sur l'intelligence artificielle, l'Afrique affirme désormais sa volonté de peser dans la construction de ce nouvel ordre technologique. Premier sommet mondial sur l'IA à se tenir dans un pays du Sud global, l'événement a rassemblé plus de 250 000 participants, parmi lesquels des chefs d'État, des PDG de grandes entreprises technologiques et des représentants de pays émergents."
  },
  {
    id: 2,
    date: "Février 2026",
    location: "Lagos, Nigeria",
    category: "Formation & Talents",
    title: "DataLens Africa lance un réseau pour former les talents africains de l'IA",
    image: afriqueImage2,
    text: "Face à la demande mondiale croissante de données de haute qualité pour entraîner les modèles d'intelligence artificielle, une initiative nigériane entend positionner la jeunesse africaine au cœur de cette chaîne de valeur. DataLens Africa, filiale de CipherSense AI, a officiellement lancé son AI Talent Network."
  },
  {
    id: 3,
    date: "20 Février 2026",
    location: "New Delhi, Inde",
    category: "Partenariat",
    title: "Inde, Italie, Kenya : un partenariat trilatéral pour une IA souveraine en Afrique",
    image: afriqueImage3,
    text: "À l'occasion du Sommet India AI Impact 2026, trois pays aux profils complémentaires ont franchi un pas décisif. L'Inde, l'Italie et le Kenya ont signé un accord de partenariat stratégique trilatéral visant à co-concevoir et déployer des solutions d'intelligence artificielle souveraines à travers l'Afrique."
  },
  {
    id: 4,
    date: "Janvier 2026",
    location: "Rabat / Casablanca",
    category: "Infrastructure",
    title: "Le Maroc ambitionne de devenir le hub africain de l'IA",
    image: afriqueImage4,
    text: "Dans la course aux infrastructures numériques qui s'accélère sur le continent africain, le Maroc prend une longueur d'avance. Le royaume s'apprête à accueillir quatre centres de données dont la capacité électrique cumulée pourrait atteindre deux gigawatts, consolidant sa position de hub technologique régional."
  },
  {
    id: 5,
    date: "Décembre 2025",
    location: "Accra / Tokyo",
    category: "Éducation",
    title: "Ghana-Japon : un programme pour former 30 000 professionnels africains en IA",
    image: afriqueImage5,
    text: "Le Ghana est en passe de devenir l'un des points d'ancrage d'une initiative japonaise d'envergure continentale. Le ministre ghanéen de la Communication a entamé des discussions avec une délégation de l'Université de Tokyo pour structurer ce vaste programme de formation."
  },
  {
    id: 6,
    date: "Décembre 2025",
    location: "Malta / Afrique subsaharienne",
    category: "Formation",
    title: "OPIT élargit l'accès aux formations IA et Data en Afrique",
    image: afriqueImage6,
    text: "Face à l'accélération de la demande de compétences numériques sur le continent africain, l'Open Institute of Technology s'impose progressivement comme un partenaire de formation de référence, en ouvrant ses candidatures pour sa promotion de janvier 2026."
  }
];

const tickerItems = [
  "Intelligence Artificielle", "Innovation Africaine", "Souveraineté Numérique",
  "Talents & Formation", "Infrastructures IA", "Partenariats Stratégiques", "Transformation Digitale"
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

export default function Afrique() {
  const [featured] = articles;

  return (
    <div className="af-root">
      <style>{styles}</style>

      {/* TOP BAND */}
      <div className="af-topband">
        <span className="af-topband-label">Dossier Spécial · Afrique &amp; IA</span>
        <div className="af-topband-right">
          <span className="af-topband-date">Février 2026</span>
          <Link to="/" className="af-topband-back">← Accueil</Link>
        </div>
      </div>

      {/* HERO */}
      <section className="af-hero">
        <div className="af-hero-left">
          <div className="af-hero-tag">Dossier Spécial</div>
          <div className="af-hero-heading">
            <h1 className="af-hero-h1">
              L'<em>Afrique</em><br />
              &amp; l'Intel&shy;ligence<br />
              Artificielle
            </h1>
            <p className="af-hero-sub">
              Analyses, initiatives et décryptages sur la transformation
              numérique du continent africain — au cœur de l'actualité mondiale.
            </p>
          </div>
          <div className="af-hero-stats">
            <div className="af-stat">
              <div className="af-stat-num">6</div>
              <div className="af-stat-label">Articles</div>
            </div>
            <div className="af-stat">
              <div className="af-stat-num">5+</div>
              <div className="af-stat-label">Pays</div>
            </div>
            <div className="af-stat">
              <div className="af-stat-num">2026</div>
              <div className="af-stat-label">Actualité</div>
            </div>
          </div>
        </div>

        <div className="af-hero-right">
          <img src={featured.image} alt={featured.title} />
          <div className="af-hero-overlay" />
          <div className="af-hero-caption">
            <span className="af-caption-tag">⭐ À la une</span>
            <h2 className="af-caption-title">{featured.title}</h2>
            <div className="af-caption-meta">
              <span className="af-caption-date">{featured.date}</span>
              <span className="af-caption-dot" />
              <span className="af-caption-loc">{featured.location}</span>
            </div>
            <Link to={`/article/${featured.id}`} className="af-cta">Lire l'article <ArrowRight /></Link>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="af-ticker-wrap">
        <div className="af-ticker-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="af-ticker-item">
              {item}<span className="af-ticker-sep" />
            </span>
          ))}
        </div>
      </div>

      {/* BODY */}
      <div className="af-body">
        <div className="af-section-hd">
          <span className="af-section-hd-label">Actualités</span>
          <h2 className="af-section-hd-title">Dernières analyses</h2>
          <div className="af-section-hd-line" />
          <span className="af-section-hd-count">{articles.length} articles</span>
        </div>

        <div className="af-layout">
          {/* ARTICLE LIST */}
          <div className="af-article-list">
            {articles.map((article, idx) => (
              <Link key={article.id} to={`/article/${article.id}`} className="af-article-row">
                <div className="af-img-wrap">
                  <img src={article.image} alt={article.title} />
                  <span className="af-img-num">{String(idx + 1).padStart(2, '0')}</span>
                </div>
                <div className="af-article-body">
                  <div className="af-article-meta">
                    <span className="af-article-cat">{article.category}</span>
                    <span className="af-article-mdot" />
                    <span className="af-article-date">{article.date}</span>
                  </div>
                  <h3 className="af-article-title">{article.title}</h3>
                  <p className="af-article-excerpt">{article.text}</p>
                  <div className="af-article-foot">
                    <span className="af-article-loc">
                      <PinIcon /> {article.location}
                    </span>
                    <span className="af-article-link">
                      Lire l'article <ArrowRight />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* SIDEBAR */}
          <aside className="af-sidebar">
            {/* Highlights */}
            <div className="af-sb-block">
              <div className="af-sb-hd">
                <span className="af-sb-hd-title">À retenir</span>
                <div className="af-sb-hd-line" />
              </div>
              <div className="af-hi-list">
                {articles.slice(0, 4).map((article, idx) => (
                  <Link key={article.id} to={`/article/${article.id}`} className="af-hi-item">
                    <span className="af-hi-idx">{String(idx + 1).padStart(2, '0')}</span>
                    <div>
                      <div className="af-hi-title">{article.title}</div>
                      <div className="af-hi-date">{article.date}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* About */}
            <div className="af-about">
              <div className="af-about-tag">À propos du dossier</div>
              <div className="af-about-title">L'Afrique au cœur de la révolution IA</div>
              <p className="af-about-text">
                Ce dossier compile les initiatives, partenariats et analyses
                qui positionnent le continent africain comme acteur incontournable
                de l'intelligence artificielle mondiale en 2026.
              </p>
              <div className="af-countries">
                {["Nigeria", "Maroc", "Kenya", "Ghana", "Afrique du Sud", "Sénégal"].map(c => (
                  <span key={c} className="af-country">{c}</span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="af-footer">
        <div className="af-footer-brand">
          Dossier <span>Afrique &amp; IA</span> — 2026
        </div>
        <Link to="/" className="af-footer-back">← Retour à l'accueil</Link>
      </footer>
    </div>
  );
}