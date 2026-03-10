import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import article1 from "../assets/images/article1.jpg";
import article2 from "../assets/images/article2.webp";
import article3 from "../assets/images/article3.avif";
import article4 from "../assets/images/Article4.jpeg";
import article5 from "../assets/images/Article 5.jpg";
import article6 from "../assets/images/ARTICLE 6.webp";
import article7 from "../assets/images/Article 7.jpg";
import article77 from "../assets/images/Article 77.webp";
import article8 from "../assets/images/article 88.jpg";
import article9 from "../assets/images/Article9.png";
import article10 from "../assets/images/article 10.jpg";
import article11 from "../assets/images/article 11.jpg";
import article12 from "../assets/images/article 12.avif";

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

  .en-root {
    font-family: var(--font-ui);
    background: var(--cream);
    color: var(--ink);
    min-height: 100vh;
  }

  /* ─── TOP BAND ─── */
  .en-topband {
    background: var(--ink);
    padding: 11px 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .en-topband-label {
    font-size: 0.62rem;
    font-weight: 400;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--terra-lt);
  }
  .en-topband-right {
    display: flex;
    align-items: center;
    gap: 24px;
  }
  .en-topband-date {
    font-size: 0.62rem;
    color: rgba(255,255,255,0.35);
    letter-spacing: 0.1em;
  }
  .en-topband-back {
    font-size: 0.62rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.5);
    text-decoration: none;
    transition: color 0.2s;
  }
  .en-topband-back:hover { color: var(--terra-lt); }

  /* ─── HERO SPLIT ─── */
  .en-hero {
    display: grid;
    grid-template-columns: 1fr 1.15fr;
    min-height: 84vh;
    max-height: 920px;
  }

  .en-hero-left {
    background: var(--ink);
    padding: 56px 52px 56px 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
  }
  .en-hero-left::after {
    content: 'ECO';
    position: absolute;
    bottom: -50px; right: -30px;
    font-family: var(--font-d);
    font-size: 18rem;
    font-weight: 600;
    font-style: italic;
    color: rgba(255,255,255,0.022);
    line-height: 1;
    pointer-events: none;
    user-select: none;
  }

  .en-hero-tag {
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
  .en-hero-tag::before {
    content: '';
    display: block;
    width: 24px; height: 2px;
    background: var(--terra-lt);
  }

  .en-hero-heading {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 36px 0 28px;
    animation: fadeUp 0.7s 0.1s var(--ease) both;
  }
  .en-hero-h1 {
    font-family: var(--font-d);
    font-size: clamp(3rem, 5vw, 5.5rem);
    font-weight: 600;
    color: var(--white);
    line-height: 1.0;
  }
  .en-hero-h1 em {
    font-style: italic;
    color: var(--terra-lt);
  }
  .en-hero-sub {
    margin-top: 18px;
    font-size: 0.84rem;
    line-height: 1.85;
    color: rgba(255,255,255,0.42);
    max-width: 360px;
  }

  .en-hero-stats {
    display: flex;
    gap: 0;
    border-top: 1px solid rgba(255,255,255,0.1);
    padding-top: 26px;
    animation: fadeUp 0.7s 0.22s var(--ease) both;
  }
  .en-stat {
    flex: 1;
    padding-right: 22px;
  }
  .en-stat + .en-stat {
    border-left: 1px solid rgba(255,255,255,0.1);
    padding-left: 22px;
    padding-right: 0;
  }
  .en-stat-num {
    font-family: var(--font-d);
    font-size: 2.1rem;
    font-weight: 600;
    color: var(--terra-lt);
    line-height: 1;
  }
  .en-stat-label {
    font-size: 0.58rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.3);
    margin-top: 6px;
  }

  .en-hero-right {
    position: relative;
    overflow: hidden;
  }
  .en-hero-right img {
    width: 100%; height: 100%;
    object-fit: cover;
    display: block;
    animation: heroZoom 1.6s var(--ease) forwards;
    transform: scale(1.04);
  }
  @keyframes heroZoom { to { transform: scale(1); } }

  .en-hero-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(28,25,23,0.88) 0%, rgba(28,25,23,0.1) 50%, transparent 100%);
  }
  .en-hero-caption {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    padding: 48px 40px 36px;
  }
  .en-caption-tag {
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
  .en-caption-title {
    font-family: var(--font-d);
    font-size: clamp(1.4rem, 2.5vw, 2rem);
    font-weight: 600;
    color: #fff;
    line-height: 1.2;
    margin-bottom: 16px;
    max-width: 480px;
  }
  .en-caption-meta {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
  }
  .en-caption-cat {
    font-size: 0.68rem;
    font-weight: 600;
    color: var(--sand);
  }
  .en-caption-dot {
    width: 3px; height: 3px;
    background: rgba(255,255,255,0.3);
    border-radius: 50%;
  }
  .en-caption-sub {
    font-size: 0.68rem;
    color: rgba(255,255,255,0.45);
  }
  .en-cta {
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
  .en-cta:hover { background: var(--terra); color: #fff; gap: 16px; }

  /* ─── TICKER ─── */
  .en-ticker-wrap {
    background: var(--terra);
    overflow: hidden;
    padding: 9px 0;
  }
  .en-ticker-track {
    display: inline-flex;
    white-space: nowrap;
    animation: ticker 36s linear infinite;
  }
  .en-ticker-item {
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
  .en-ticker-sep {
    width: 4px; height: 4px;
    border-radius: 50%;
    background: rgba(255,255,255,0.35);
  }
  @keyframes ticker {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

  /* ─── BODY ─── */
  .en-body {
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 48px 80px;
  }

  .en-section-hd {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 48px 0 36px;
    border-bottom: 2px solid var(--ink);
    margin-bottom: 40px;
  }
  .en-section-hd-label {
    font-size: 0.6rem;
    font-weight: 400;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: var(--ink-soft);
    white-space: nowrap;
  }
  .en-section-hd-title {
    font-family: var(--font-d);
    font-size: clamp(1.6rem, 2.8vw, 2.3rem);
    font-weight: 600;
    color: var(--ink);
    white-space: nowrap;
  }
  .en-section-hd-line { flex: 1; height: 1px; background: var(--border); }
  .en-section-hd-count {
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
  .en-layout {
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 52px;
    align-items: start;
  }

  /* ─── ARTICLE ROWS ─── */
  .en-article-list { display: flex; flex-direction: column; }

  .en-article-row {
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
  .en-article-row::before {
    content: '';
    position: absolute;
    left: -48px; top: 0; bottom: 0;
    width: 3px;
    background: var(--terra);
    opacity: 0;
    transition: opacity 0.2s;
  }
  .en-article-row:hover::before { opacity: 1; }

  .en-img-wrap {
    position: relative;
    overflow: hidden;
    border-radius: 5px;
    height: 155px;
  }
  .en-img-wrap img {
    width: 100%; height: 100%;
    object-fit: cover;
    transition: transform 0.5s var(--ease);
  }
  .en-article-row:hover .en-img-wrap img { transform: scale(1.07); }
  .en-img-badge {
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
  .en-img-africa {
    position: absolute;
    top: 9px; right: 9px;
    background: var(--terra);
    color: #fff;
    font-size: 0.52rem;
    font-weight: 400;
    letter-spacing: 0.1em;
    padding: 3px 7px;
    border-radius: 3px;
  }

  .en-article-body { display: flex; flex-direction: column; gap: 9px; padding-top: 2px; }

  .en-article-meta {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .en-article-cat {
    font-size: 0.56rem;
    font-weight: 400;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--terra);
  }
  .en-article-mdot {
    width: 3px; height: 3px;
    background: var(--border-dk);
    border-radius: 50%;
  }
  .en-article-scope {
    font-size: 0.6rem;
    color: var(--ink-soft);
  }

  .en-article-title {
    font-family: var(--font-d);
    font-size: 1.32rem;
    font-weight: 600;
    color: var(--ink);
    line-height: 1.2;
    transition: color 0.2s;
  }
  .en-article-row:hover .en-article-title { color: var(--terra); }

  .en-article-excerpt {
    font-size: 0.82rem;
    line-height: 1.8;
    color: var(--ink-soft);
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .en-article-foot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 4px;
  }
  .en-article-num-label {
    font-size: 0.6rem;
    font-weight: 600;
    color: var(--ink-soft);
    letter-spacing: 0.08em;
  }
  .en-article-link {
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
  .en-article-link:hover { gap: 10px; }

  /* ─── SIDEBAR ─── */
  .en-sidebar {
    position: sticky;
    top: 24px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .en-sb-block {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 7px;
    overflow: hidden;
  }
  .en-sb-hd {
    padding: 15px 22px;
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .en-sb-hd-title {
    font-size: 0.58rem;
    font-weight: 400;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--ink);
  }
  .en-sb-hd-line {
    width: 18px; height: 2px;
    background: var(--terra);
  }

  /* Highlights */
  .en-hi-list { padding: 6px 0; }
  .en-hi-item {
    display: flex;
    gap: 15px;
    padding: 13px 22px;
    border-bottom: 1px solid var(--border);
    text-decoration: none;
    color: inherit;
    transition: background 0.18s;
    cursor: pointer;
  }
  .en-hi-item:last-child { border-bottom: none; }
  .en-hi-item:hover { background: var(--warm); }
  .en-hi-idx {
    font-family: var(--font-d);
    font-size: 1.45rem;
    font-weight: 600;
    color: var(--sand);
    line-height: 1;
    min-width: 26px;
    flex-shrink: 0;
  }
  .en-hi-title {
    font-family: var(--font-d);
    font-size: 0.93rem;
    font-weight: 600;
    color: var(--ink);
    line-height: 1.25;
    margin-bottom: 5px;
  }
  .en-hi-cat {
    font-size: 0.58rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--terra);
  }

  /* Sectors block */
  .en-sectors-block {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 7px;
    overflow: hidden;
  }
  .en-sector-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 13px 22px;
    border-bottom: 1px solid var(--border);
    text-decoration: none;
    color: inherit;
    transition: background 0.18s;
    cursor: pointer;
  }
  .en-sector-item:last-child { border-bottom: none; }
  .en-sector-item:hover { background: var(--warm); }
  .en-sector-name {
    font-size: 0.76rem;
    font-weight: 600;
    color: var(--ink);
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .en-sector-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--terra);
    flex-shrink: 0;
  }
  .en-sector-count {
    font-size: 0.58rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: var(--ink-soft);
    background: var(--warm);
    border: 1px solid var(--border);
    padding: 2px 9px;
    border-radius: 100px;
  }

  /* About block */
  .en-about-block {
    background: var(--ink);
    border-radius: 7px;
    padding: 26px 22px;
  }
  .en-about-tag {
    font-size: 0.56rem;
    font-weight: 400;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--terra-lt);
    margin-bottom: 12px;
  }
  .en-about-title {
    font-family: var(--font-d);
    font-size: 1.35rem;
    font-style: italic;
    font-weight: 600;
    color: #fff;
    line-height: 1.25;
    margin-bottom: 12px;
  }
  .en-about-text {
    font-size: 0.76rem;
    line-height: 1.8;
    color: rgba(255,255,255,0.42);
    margin-bottom: 18px;
  }
  .en-about-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
  }
  .en-about-pill {
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
  .en-footer {
    background: var(--ink);
    padding: 30px 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;
  }
  .en-footer-brand {
    font-family: var(--font-d);
    font-size: 1rem;
    font-style: italic;
    color: rgba(255,255,255,0.45);
  }
  .en-footer-brand span { color: var(--terra-lt); }
  .en-footer-back {
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
  .en-footer-back:hover {
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
    .en-hero { grid-template-columns: 1fr; min-height: auto; }
    .en-hero-left { padding: 44px 28px; }
    .en-hero-right { height: 64vw; max-height: 500px; }
    .en-body { padding: 0 24px 60px; }
    .en-layout { grid-template-columns: 1fr; }
    .en-sidebar { position: static; }
    .en-topband { padding: 10px 24px; }
    .en-footer { padding: 26px 24px; }
    .en-article-row { grid-template-columns: 1fr; }
    .en-img-wrap { height: 220px; }
    .en-article-row::before { left: -24px; }
    .en-section-hd { flex-wrap: wrap; }
  }
`;

const articles = [
  {
    id: 1,
    number: "Article 1",
    category: "Commerce & Retail",
    scope: "Monde",
    africa: false,
    title: "L'IA dans le commerce de détail et la grande distribution",
    image: article1,
    text: "L'intelligence artificielle s'impose aujourd'hui comme un moteur majeur de transformation du commerce de détail. Face à l'évolution rapide des habitudes de consommation, à la montée du e-commerce et à une concurrence toujours plus intense, les acteurs du retail doivent innover pour rester performants."
  },
  {
    id: 2,
    number: "Article 2",
    category: "Commerce & Retail",
    scope: "Afrique",
    africa: true,
    title: "En Afrique, l'intelligence artificielle commence à transformer le commerce de détail",
    image: article2,
    text: "Alors que l'Afrique est encore souvent perçue comme en retard dans la révolution digitale, le commerce de détail sur le continent montre des signes clairs de transformation grâce à l'adoption progressive de l'intelligence artificielle."
  },
  {
    id: 3,
    number: "Article 3",
    category: "Transport & Logistique",
    scope: "Monde",
    africa: false,
    title: "L'intelligence artificielle transforme le transport et la logistique",
    image: article3,
    text: "L'intelligence artificielle transforme en profondeur les secteurs du transport et de la logistique, piliers essentiels de l'économie mondiale. Face à l'augmentation des flux de marchandises, à la pression sur les délais de livraison et aux exigences croissantes en matière de durabilité."
  },
  {
    id: 4,
    number: "Article 4",
    category: "Transport & Logistique",
    scope: "Afrique · Kobo360",
    africa: true,
    title: "En Afrique, l'IA optimise le transport et la logistique : le cas de Kobo360",
    image: article4,
    text: "Longtemps freinés par des infrastructures inégales et une forte fragmentation du marché, les secteurs du transport et de la logistique en Afrique connaissent aujourd'hui une transformation progressive grâce à l'intelligence artificielle."
  },
  {
    id: 5,
    number: "Article 5",
    category: "Santé",
    scope: "Monde",
    africa: false,
    title: "L'intelligence artificielle révolutionne le secteur de la santé",
    image: article5,
    text: "L'intelligence artificielle révolutionne progressivement le secteur de la santé en apportant des solutions innovantes à des défis majeurs tels que l'accès aux soins, la précision des diagnostics et l'optimisation des ressources médicales."
  },
  {
    id: 6,
    number: "Article 6",
    category: "Santé",
    scope: "Afrique · Lapaire",
    africa: true,
    title: "En Côte d'Ivoire, l'IA améliore l'accès aux soins visuels : l'exemple de Lapaire",
    image: article6,
    text: "Dans de nombreux pays d'Afrique de l'Ouest, l'accès aux soins spécialisés reste limité, en particulier dans le domaine de l'ophtalmologie. En Côte d'Ivoire, où les ophtalmologues sont peu nombreux et concentrés dans les grandes villes, Lapaire apporte une réponse innovante."
  },
  {
    id: 7,
    number: "Article 7",
    category: "Banque & Assurance",
    scope: "Monde",
    africa: false,
    title: "L'intelligence artificielle transforme les banques et assurances",
    image: article7,
    text: "L'intelligence artificielle transforme en profondeur le secteur des banques et des assurances, confronté à des enjeux majeurs de sécurité, de rentabilité et de satisfaction client."
  },
  {
    id: 8,
    number: "Article 77",
    category: "Banque & Assurance",
    scope: "Afrique · Mobile Money",
    africa: true,
    title: "En Afrique, l'IA redéfinit les banques et assurances : mobile money et assurance digitale",
    image: article77,
    text: "Longtemps confronté à un faible taux de bancarisation et à des risques élevés de fraude, le secteur financier africain connaît aujourd'hui une mutation profonde grâce à l'intelligence artificielle."
  },
  {
    id: 9,
    number: "Article 8",
    category: "Agriculture",
    scope: "Monde",
    africa: false,
    title: "L'agriculture entre dans l'ère digitale portée par l'IA",
    image: article8,
    text: "L'agriculture fait face à des défis majeurs : croissance démographique, changement climatique, raréfaction des ressources naturelles et nécessité d'augmenter la productivité tout en préservant l'environnement."
  },
  {
    id: 10,
    number: "Article 88",
    category: "Agriculture",
    scope: "Afrique · SOWIT",
    africa: true,
    title: "Au Maroc, l'IA révolutionne l'irrigation agricole : l'exemple de SOWIT",
    image: article10,
    text: "Dans un contexte marqué par le stress hydrique et le changement climatique, l'agriculture marocaine se tourne de plus en plus vers les technologies intelligentes pour préserver ses ressources et améliorer sa productivité."
  },
  {
    id: 11,
    number: "Article 9",
    category: "Tourisme",
    scope: "Monde",
    africa: false,
    title: "L'intelligence artificielle transforme le secteur du tourisme",
    image: article9,
    text: "Le secteur du tourisme connaît une transformation profonde sous l'effet du numérique, et l'intelligence artificielle y joue désormais un rôle central. Dans un contexte marqué par des voyageurs plus connectés, plus exigeants et en quête d'expériences personnalisées."
  },
  {
    id: 12,
    number: "Article 10",
    category: "Tourisme",
    scope: "Afrique · Île Maurice",
    africa: true,
    title: "À l'île Maurice, l'intelligence artificielle transforme l'expérience touristique",
    image: article11,
    text: "Destination phare de l'océan Indien, Île Maurice s'impose comme un modèle de tourisme haut de gamme et innovant. Aujourd'hui, le pays amorce une nouvelle étape dans la modernisation de son secteur touristique grâce à l'IA."
  },
  {
    id: 13,
    number: "Article 11",
    category: "Éducation",
    scope: "Monde",
    africa: false,
    title: "L'intelligence artificielle transforme l'éducation et les méthodes d'apprentissage",
    image: article12,
    text: "Longtemps cantonnée aux laboratoires de recherche et aux secteurs industriels, l'intelligence artificielle s'impose désormais comme un acteur clé de la transformation du système éducatif mondial."
  },
  {
    id: 14,
    number: "Article 12",
    category: "Éducation",
    scope: "Afrique · Schoolap",
    africa: true,
    title: "En Côte d'Ivoire, l'IA soutient la réussite scolaire : l'exemple de Schoolap",
    image: article12,
    text: "En Afrique francophone, où les systèmes éducatifs doivent faire face à une forte croissance démographique et à un manque de ressources pédagogiques, l'intelligence artificielle commence à jouer un rôle déterminant."
  }
];

const ArrowRight = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

export default function Entreprise() {
  const { t } = useLanguage();
  const [featured] = articles;

  const tickerItems = Array.isArray(t("entreprise.ticker.items")) ? t("entreprise.ticker.items") : [];
  const sectors = [
    { name: "Commerce & Retail", count: 2 },
    { name: "Transport & Logistique", count: 2 },
    { name: "Santé", count: 2 },
    { name: "Banque & Assurance", count: 2 },
    { name: "Agriculture", count: 2 },
    { name: "Tourisme", count: 2 },
    { name: "Éducation", count: 2 },
  ];

  return (
    <div className="en-root">
      <style>{styles}</style>

      {/* TOP BAND */}
      <div className="en-topband">
        <span className="en-topband-label">{t("entreprise.topband.label")}</span>
        <div className="en-topband-right">
          <span className="en-topband-date">{t("entreprise.topband.date")}</span>
          <Link to="/" className="en-topband-back">{t("entreprise.topband.back")}</Link>
        </div>
      </div>

      {/* HERO */}
      <section className="en-hero">
        <div className="en-hero-left">
          <div className="en-hero-tag">{t("entreprise.hero.tag")}</div>
          <div className="en-hero-heading">
            <h1 className="en-hero-h1">
              {t("entreprise.hero.title")}<br />
              <em>{t("entreprise.hero.title_highlight")}</em><br />
              {t("entreprise.hero.title_end")}
            </h1>
            <p className="en-hero-sub">
              {t("entreprise.hero.subtitle")}
            </p>
          </div>
          <div className="en-hero-stats">
            <div className="en-stat">
              <div className="en-stat-num">14</div>
              <div className="en-stat-label">{t("entreprise.hero.stats.articles")}</div>
            </div>
            <div className="en-stat">
              <div className="en-stat-num">7</div>
              <div className="en-stat-label">{t("entreprise.hero.stats.sectors")}</div>
            </div>
            <div className="en-stat">
              <div className="en-stat-num">2</div>
              <div className="en-stat-label">{t("entreprise.hero.stats.perspectives")}</div>
            </div>
          </div>
        </div>

        <div className="en-hero-right">
          <img src={featured.image} alt={featured.title} />
          <div className="en-hero-overlay" />
          <div className="en-hero-caption">
            <span className="en-caption-tag">{t("entreprise.hero.featured.tag")}</span>
            <h2 className="en-caption-title">{featured.title}</h2>
            <div className="en-caption-meta">
              <span className="en-caption-cat">{featured.category}</span>
              <span className="en-caption-dot" />
              <span className="en-caption-sub">{featured.scope}</span>
            </div>
            <Link to={`/article/${featured.id + 100}`} className="en-cta">{t("entreprise.hero.featured.read_article")} <ArrowRight /></Link>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="en-ticker-wrap">
        <div className="en-ticker-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="en-ticker-item">
              {item}<span className="en-ticker-sep" />
            </span>
          ))}
        </div>
      </div>

      {/* BODY */}
      <div className="en-body">
        <div className="en-section-hd">
          <span className="en-section-hd-label">{t("entreprise.body.section.label")}</span>
          <h2 className="en-section-hd-title">{t("entreprise.body.section.title")}</h2>
          <div className="en-section-hd-line" />
          <span className="en-section-hd-count">{articles.length} {t("entreprise.body.section.count")}</span>
        </div>

        <div className="en-layout">
          {/* ARTICLE LIST */}
          <div className="en-article-list">
            {articles.map((article) => (
              <Link key={article.id + 100} to={`/article/${article.id + 100}`} className="en-article-row">
                <div className="en-img-wrap">
                  <img src={article.image} alt={article.title} />
                  <span className="en-img-badge">{article.number}</span>
                  {article.africa && <span className="en-img-africa">{t("entreprise.body.article.africa")}</span>}
                </div>
                <div className="en-article-body">
                  <div className="en-article-meta">
                    <span className="en-article-cat">{article.category}</span>
                    <span className="en-article-mdot" />
                    <span className="en-article-scope">{article.scope}</span>
                  </div>
                  <h3 className="en-article-title">{article.title}</h3>
                  <p className="en-article-excerpt">{article.text}</p>
                  <div className="en-article-foot">
                    <span className="en-article-num-label">{article.number}</span>
                    <span className="en-article-link">
                      {t("entreprise.body.article.read_article")} <ArrowRight />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* SIDEBAR */}
          <aside className="en-sidebar">
            {/* Highlights */}
            <div className="en-sb-block">
              <div className="en-sb-hd">
                <span className="en-sb-hd-title">{t("entreprise.body.sidebar.highlights.title")}</span>
                <div className="en-sb-hd-line" />
              </div>
              <div className="en-hi-list">
                {articles.slice(0, 5).map((article, idx) => (
                  <Link key={article.id + 100} to={`/article/${article.id + 100}`} className="en-hi-item">
                    <span className="en-hi-idx">{String(idx + 1).padStart(2, '0')}</span>
                    <div>
                      <div className="en-hi-title">{article.title}</div>
                      <div className="en-hi-cat">{article.category}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Sectors */}
            <div className="en-sectors-block">
              <div className="en-sb-hd">
                <span className="en-sb-hd-title">{t("entreprise.body.sidebar.sectors.title")}</span>
                <div className="en-sb-hd-line" />
              </div>
              {sectors.map(s => (
                <a key={s.name} href="#" className="en-sector-item">
                  <span className="en-sector-name">
                    <span className="en-sector-dot" />
                    {s.name}
                  </span>
                  <span className="en-sector-count">{s.count} {t("entreprise.body.sidebar.sectors.articles")}</span>
                </a>
              ))}
            </div>

            {/* About */}
            <div className="en-about-block">
              <div className="en-about-tag">{t("entreprise.body.sidebar.about.tag")}</div>
              <div className="en-about-title">{t("entreprise.body.sidebar.about.title")}</div>
              <p className="en-about-text">
                {t("entreprise.body.sidebar.about.text")}
              </p>
              <div className="en-about-pills">
                {Array.isArray(t("entreprise.body.sidebar.about.tags")) 
                  ? t("entreprise.body.sidebar.about.tags").map(tag => (
                      <span key={tag} className="en-about-pill">{tag}</span>
                    ))
                  : null
                }
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="en-footer">
        <div className="en-footer-brand">
          {t("entreprise.footer.brand")}
        </div>
        <Link to="/" className="en-footer-back">{t("entreprise.footer.back")}</Link>
      </footer>
    </div>
  );
}