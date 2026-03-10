import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";
import articleA from "../assets/images/ARTICLE A.webp";
import articleB from "../assets/images/ARTICLEB.jpg";
import articleC from "../assets/images/ARTICLEC.png";
import articleD from "../assets/images/ARTICLE D.avif";
import articleE from "../assets/images/ARTICLE E.webp";
import articleF from "../assets/images/ARTICLE F.webp";
import articleG from "../assets/images/ARTICLE G.jpg";
import articleH from "../assets/images/ARTICLE 8.jpg";

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

  .mt-root {
    font-family: var(--font-ui);
    background: var(--cream);
    color: var(--ink);
    min-height: 100vh;
  }

  /* ─── TOP BAND ─── */
  .mt-topband {
    background: var(--ink);
    padding: 11px 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .mt-topband-label {
    font-size: 0.62rem;
    font-weight: 400;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--terra-lt);
  }
  .mt-topband-right {
    display: flex;
    align-items: center;
    gap: 24px;
  }
  .mt-topband-date {
    font-size: 0.62rem;
    color: rgba(255,255,255,0.35);
    letter-spacing: 0.1em;
  }
  .mt-topband-back {
    font-size: 0.62rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.5);
    text-decoration: none;
    transition: color 0.2s;
  }
  .mt-topband-back:hover { color: var(--terra-lt); }

  /* ─── HERO SPLIT ─── */
  .mt-hero {
    display: grid;
    grid-template-columns: 1fr 1.15fr;
    min-height: 84vh;
    max-height: 920px;
  }

  .mt-hero-left {
    background: var(--ink);
    padding: 56px 52px 56px 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
  }
  .mt-hero-left::after {
    content: 'RH';
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

  .mt-hero-tag {
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
  .mt-hero-tag::before {
    content: '';
    display: block;
    width: 24px; height: 2px;
    background: var(--terra-lt);
  }

  .mt-hero-heading {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 36px 0 28px;
    animation: fadeUp 0.7s 0.1s var(--ease) both;
  }
  .mt-hero-h1 {
    font-family: var(--font-d);
    font-size: clamp(3.2rem, 5vw, 5.8rem);
    font-weight: 600;
    color: var(--white);
    line-height: 1.0;
  }
  .mt-hero-h1 em {
    font-style: italic;
    color: var(--terra-lt);
  }
  .mt-hero-sub {
    margin-top: 18px;
    font-size: 0.84rem;
    line-height: 1.85;
    color: rgba(255,255,255,0.42);
    max-width: 360px;
  }

  .mt-hero-stats {
    display: flex;
    gap: 0;
    border-top: 1px solid rgba(255,255,255,0.1);
    padding-top: 26px;
    animation: fadeUp 0.7s 0.22s var(--ease) both;
  }
  .mt-stat {
    flex: 1;
    padding-right: 22px;
  }
  .mt-stat + .mt-stat {
    border-left: 1px solid rgba(255,255,255,0.1);
    padding-left: 22px;
    padding-right: 0;
  }
  .mt-stat-num {
    font-family: var(--font-d);
    font-size: 2.1rem;
    font-weight: 600;
    color: var(--terra-lt);
    line-height: 1;
  }
  .mt-stat-label {
    font-size: 0.58rem;
    font-weight: 600;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.3);
    margin-top: 6px;
  }

  .mt-hero-right {
    position: relative;
    overflow: hidden;
  }
  .mt-hero-right img {
    width: 100%; height: 100%;
    object-fit: cover;
    display: block;
    animation: heroZoom 1.6s var(--ease) forwards;
    transform: scale(1.04);
  }
  @keyframes heroZoom { to { transform: scale(1); } }

  .mt-hero-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(28,25,23,0.88) 0%, rgba(28,25,23,0.1) 50%, transparent 100%);
  }
  .mt-hero-caption {
    position: absolute;
    bottom: 0; left: 0; right: 0;
    padding: 48px 40px 36px;
  }
  .mt-caption-tag {
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
  .mt-caption-title {
    font-family: var(--font-d);
    font-size: clamp(1.4rem, 2.5vw, 2rem);
    font-weight: 600;
    color: #fff;
    line-height: 1.2;
    margin-bottom: 16px;
    max-width: 480px;
  }
  .mt-caption-meta {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
  }
  .mt-caption-cat {
    font-size: 0.68rem;
    font-weight: 600;
    color: var(--sand);
  }
  .mt-caption-dot {
    width: 3px; height: 3px;
    background: rgba(255,255,255,0.3);
    border-radius: 50%;
  }
  .mt-caption-sub {
    font-size: 0.68rem;
    color: rgba(255,255,255,0.45);
  }
  .mt-cta {
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
  .mt-cta:hover { background: var(--terra); color: #fff; gap: 16px; }

  /* ─── TICKER ─── */
  .mt-ticker-wrap {
    background: var(--terra);
    overflow: hidden;
    padding: 9px 0;
  }
  .mt-ticker-track {
    display: inline-flex;
    white-space: nowrap;
    animation: ticker 32s linear infinite;
  }
  .mt-ticker-item {
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
  .mt-ticker-sep {
    width: 4px; height: 4px;
    border-radius: 50%;
    background: rgba(255,255,255,0.35);
  }
  @keyframes ticker {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

  /* ─── BODY ─── */
  .mt-body {
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 48px 80px;
  }

  .mt-section-hd {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 48px 0 36px;
    border-bottom: 2px solid var(--ink);
    margin-bottom: 40px;
  }
  .mt-section-hd-label {
    font-size: 0.6rem;
    font-weight: 400;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: var(--ink-soft);
    white-space: nowrap;
  }
  .mt-section-hd-title {
    font-family: var(--font-d);
    font-size: clamp(1.6rem, 2.8vw, 2.3rem);
    font-weight: 600;
    color: var(--ink);
    white-space: nowrap;
  }
  .mt-section-hd-line { flex: 1; height: 1px; background: var(--border); }
  .mt-section-hd-count {
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
  .mt-layout {
    display: grid;
    grid-template-columns: 1fr 340px;
    gap: 52px;
    align-items: start;
  }

  /* ─── ARTICLE ROWS ─── */
  .mt-article-list { display: flex; flex-direction: column; }

  .mt-article-row {
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
  .mt-article-row::before {
    content: '';
    position: absolute;
    left: -48px; top: 0; bottom: 0;
    width: 3px;
    background: var(--terra);
    opacity: 0;
    transition: opacity 0.2s;
  }
  .mt-article-row:hover::before { opacity: 1; }

  .mt-img-wrap {
    position: relative;
    overflow: hidden;
    border-radius: 5px;
    height: 155px;
  }
  .mt-img-wrap img {
    width: 100%; height: 100%;
    object-fit: cover;
    transition: transform 0.5s var(--ease);
  }
  .mt-article-row:hover .mt-img-wrap img { transform: scale(1.07); }
  .mt-img-badge {
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

  .mt-article-body { display: flex; flex-direction: column; gap: 9px; padding-top: 2px; }

  .mt-article-meta {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .mt-article-cat {
    font-size: 0.56rem;
    font-weight: 400;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    color: var(--terra);
  }
  .mt-article-mdot {
    width: 3px; height: 3px;
    background: var(--border-dk);
    border-radius: 50%;
  }
  .mt-article-theme {
    font-size: 0.6rem;
    color: var(--ink-soft);
  }

  .mt-article-title {
    font-family: var(--font-d);
    font-size: 1.32rem;
    font-weight: 600;
    color: var(--ink);
    line-height: 1.2;
    transition: color 0.2s;
  }
  .mt-article-row:hover .mt-article-title { color: var(--terra); }

  .mt-article-excerpt {
    font-size: 0.82rem;
    line-height: 1.8;
    color: var(--ink-soft);
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .mt-article-foot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 4px;
  }
  .mt-article-domain {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.63rem;
    color: var(--ink-soft);
  }
  .mt-article-link {
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
  .mt-article-link:hover { gap: 10px; }

  /* ─── SIDEBAR ─── */
  .mt-sidebar {
    position: sticky;
    top: 24px;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  .mt-sb-block {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 7px;
    overflow: hidden;
  }
  .mt-sb-hd {
    padding: 15px 22px;
    border-bottom: 1px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .mt-sb-hd-title {
    font-size: 0.58rem;
    font-weight: 400;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--ink);
  }
  .mt-sb-hd-line {
    width: 18px; height: 2px;
    background: var(--terra);
  }

  .mt-hi-list { padding: 6px 0; }
  .mt-hi-item {
    display: flex;
    gap: 15px;
    padding: 13px 22px;
    border-bottom: 1px solid var(--border);
    text-decoration: none;
    color: inherit;
    transition: background 0.18s;
    cursor: pointer;
  }
  .mt-hi-item:last-child { border-bottom: none; }
  .mt-hi-item:hover { background: var(--warm); }
  .mt-hi-idx {
    font-family: var(--font-d);
    font-size: 1.45rem;
    font-weight: 600;
    color: var(--sand);
    line-height: 1;
    min-width: 26px;
    flex-shrink: 0;
  }
  .mt-hi-title {
    font-family: var(--font-d);
    font-size: 0.93rem;
    font-weight: 600;
    color: var(--ink);
    line-height: 1.25;
    margin-bottom: 5px;
  }
  .mt-hi-cat {
    font-size: 0.58rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--terra);
  }

  /* Themes block */
  .mt-themes-block {
    background: var(--ink);
    border-radius: 7px;
    padding: 26px 22px;
  }
  .mt-themes-tag {
    font-size: 0.56rem;
    font-weight: 400;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: var(--terra-lt);
    margin-bottom: 12px;
  }
  .mt-themes-title {
    font-family: var(--font-d);
    font-size: 1.35rem;
    font-style: italic;
    font-weight: 600;
    color: #fff;
    line-height: 1.25;
    margin-bottom: 12px;
  }
  .mt-themes-text {
    font-size: 0.76rem;
    line-height: 1.8;
    color: rgba(255,255,255,0.42);
    margin-bottom: 18px;
  }
  .mt-theme-pills {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
  }
  .mt-theme-pill {
    font-size: 0.58rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.5);
    border: 1px solid rgba(255,255,255,0.14);
    padding: 4px 10px;
    border-radius: 3px;
  }

  /* Domains block */
  .mt-domains-block {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 7px;
    overflow: hidden;
  }
  .mt-domain-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 22px;
    border-bottom: 1px solid var(--border);
    cursor: pointer;
    transition: background 0.18s;
    text-decoration: none;
    color: inherit;
  }
  .mt-domain-item:last-child { border-bottom: none; }
  .mt-domain-item:hover { background: var(--warm); }
  .mt-domain-name {
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--ink);
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .mt-domain-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--terra);
    flex-shrink: 0;
  }
  .mt-domain-count {
    font-size: 0.6rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: var(--ink-soft);
    background: var(--warm);
    border: 1px solid var(--border);
    padding: 2px 9px;
    border-radius: 100px;
  }

  /* ─── FOOTER ─── */
  .mt-footer {
    background: var(--ink);
    padding: 30px 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 16px;
  }
  .mt-footer-brand {
    font-family: var(--font-d);
    font-size: 1rem;
    font-style: italic;
    color: rgba(255,255,255,0.45);
  }
  .mt-footer-brand span { color: var(--terra-lt); }
  .mt-footer-back {
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
  .mt-footer-back:hover {
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
    .mt-hero { grid-template-columns: 1fr; min-height: auto; }
    .mt-hero-left { padding: 44px 28px; }
    .mt-hero-right { height: 64vw; max-height: 500px; }
    .mt-body { padding: 0 24px 60px; }
    .mt-layout { grid-template-columns: 1fr; }
    .mt-sidebar { position: static; }
    .mt-topband { padding: 10px 24px; }
    .mt-footer { padding: 26px 24px; }
    .mt-article-row { grid-template-columns: 1fr; }
    .mt-img-wrap { height: 220px; }
    .mt-article-row::before { left: -24px; }
    .mt-section-hd { flex-wrap: wrap; }
  }
`;

const articles = [
  {
    id: 'A',
    label: "Article A",
    category: "Ressources Humaines",
    theme: "Monde",
    title: "L'intelligence artificielle transforme en profondeur les processus des ressources humaines",
    image: articleA,
    text: "Recrutement, gestion des talents, formation, bien-être au travail : longtemps perçues comme des fonctions essentiellement humaines, les ressources humaines connaissent aujourd'hui une mutation accélérée sous l'effet de l'intelligence artificielle. De plus en plus d'entreprises intègrent ces technologies pour gagner en efficacité, objectivité et anticipation, tout en redéfinissant le rôle des professionnels RH."
  },
  {
    id: 'B',
    label: "Article B",
    category: "Ressources Humaines",
    theme: "Afrique",
    title: "En Afrique, l'IA s'impose progressivement dans les pratiques RH",
    image: articleB,
    text: "Longtemps considérée comme un sujet réservé aux économies occidentales, l'intelligence artificielle trouve aujourd'hui des applications concrètes dans les ressources humaines en Afrique. Face à une démographie dynamique, un marché de l'emploi fragmenté et une forte digitalisation mobile, plusieurs entreprises africaines utilisent déjà l'IA pour moderniser leurs pratiques RH."
  },
  {
    id: 'C',
    label: "Article C",
    category: "Finance",
    theme: "Monde",
    title: "L'intelligence artificielle révolutionne la fonction finance en entreprise",
    image: articleC,
    text: "Longtemps perçue comme une fonction rigide, centrée sur la conformité et le reporting, la finance d'entreprise connaît aujourd'hui une transformation profonde. Portée par l'essor de l'intelligence artificielle, elle devient plus rapide, prédictive et stratégique. De la comptabilité à la gestion des risques, l'IA redéfinit les contours du métier de la finance."
  },
  {
    id: 'D',
    label: "Article D",
    category: "Finance",
    theme: "Afrique",
    title: "En Afrique, l'intelligence artificielle réinvente la finance d'entreprise",
    image: articleD,
    text: "Alors que l'Afrique reste en phase d'industrialisation numérique, plusieurs entreprises et institutions intègrent l'intelligence artificielle dans leurs opérations financières. De la détection de fraude à l'évaluation du risque de crédit, les technologies intelligentes transforment profondément le secteur financier."
  },
  {
    id: 'E',
    label: "Article E",
    category: "Marketing",
    theme: "Monde",
    title: "L'intelligence artificielle redéfinit les stratégies marketing en entreprise",
    image: articleE,
    text: "Analyse des données, personnalisation des messages, automatisation des campagnes : l'intelligence artificielle s'impose aujourd'hui comme un outil central du marketing moderne. Dans un environnement marqué par la surabondance d'informations et des consommateurs de plus en plus exigeants, les entreprises misent sur l'IA pour mieux comprendre leurs clients."
  },
  {
    id: 'F',
    label: "Article F",
    category: "Marketing",
    theme: "Afrique",
    title: "Marketing et intelligence artificielle : comment les PME africaines passent à l'action",
    image: articleF,
    text: "Contrairement aux idées reçues, l'intelligence artificielle n'est plus un luxe réservé aux grandes entreprises. En Afrique, de nombreuses PME utilisent déjà des outils simples, souvent intégrés à des plateformes existantes, pour améliorer leur visibilité, attirer des clients et augmenter leurs ventes."
  },
  {
    id: 'G',
    label: "Article G",
    category: "Commercial & Ventes",
    theme: "Monde",
    title: "L'intelligence artificielle transforme les pratiques commerciales en entreprise",
    image: articleG,
    text: "Prospection, relation client, prévision des ventes : la fonction commerciale connaît une mutation rapide sous l'effet de l'intelligence artificielle. Face à des clients mieux informés et à une concurrence accrue, les entreprises adoptent des outils intelligents pour vendre plus efficacement et optimiser la performance de leurs équipes."
  },
  {
    id: 'H',
    label: "Article H",
    category: "Commercial & Ventes",
    theme: "Afrique",
    title: "En Afrique, l'intelligence artificielle transforme les pratiques de vente des entreprises",
    image: articleH,
    text: "De la petite entreprise locale aux grandes plateformes panafricaines, l'intelligence artificielle s'impose progressivement comme un outil de soutien à la vente sur le continent. Dans un contexte marqué par la domination du mobile et la diversité des marchés, les entreprises adoptent des solutions efficaces pour mieux cibler et servir leurs clients."
  }
];

const ArrowRight = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7"/>
  </svg>
);

export default function Metier() {
  const { t } = useLanguage();
  const [featured] = articles;

  const tickerItems = Array.isArray(t("metier.ticker.items")) ? t("metier.ticker.items") : [];
  const domains = [
    { name: "Ressources Humaines", count: 2 },
    { name: "Finance", count: 2 },
    { name: "Marketing", count: 2 },
    { name: "Commercial & Ventes", count: 2 },
  ];

  return (
    <div className="mt-root">
      <style>{styles}</style>

      {/* TOP BAND */}
      <div className="mt-topband">
        <span className="mt-topband-label">{t("metier.topband.label")}</span>
        <div className="mt-topband-right">
          <span className="mt-topband-date">{t("metier.topband.date")}</span>
          <Link to="/" className="mt-topband-back">{t("metier.topband.back")}</Link>
        </div>
      </div>

      {/* HERO */}
      <section className="mt-hero">
        <div className="mt-hero-left">
          <div className="mt-hero-tag">{t("metier.hero.tag")}</div>
          <div className="mt-hero-heading">
            <h1 className="mt-hero-h1">
              {t("metier.hero.title")}<br />
              <em>{t("metier.hero.title_highlight")}</em> de<br />
              {t("metier.hero.title_end")}
            </h1>
            <p className="mt-hero-sub">
              {t("metier.hero.subtitle")}
            </p>
          </div>
          <div className="mt-hero-stats">
            <div className="mt-stat">
              <div className="mt-stat-num">8</div>
              <div className="mt-stat-label">{t("metier.hero.stats.articles")}</div>
            </div>
            <div className="mt-stat">
              <div className="mt-stat-num">4</div>
              <div className="mt-stat-label">{t("metier.hero.stats.domains")}</div>
            </div>
            <div className="mt-stat">
              <div className="mt-stat-num">2</div>
              <div className="mt-stat-label">{t("metier.hero.stats.perspectives")}</div>
            </div>
          </div>
        </div>

        <div className="mt-hero-right">
          <img src={featured.image} alt={featured.title} />
          <div className="mt-hero-overlay" />
          <div className="mt-hero-caption">
            <span className="mt-caption-tag">{t("metier.hero.featured.tag")}</span>
            <h2 className="mt-caption-title">{featured.title}</h2>
            <div className="mt-caption-meta">
              <span className="mt-caption-cat">{featured.category}</span>
              <span className="mt-caption-dot" />
              <span className="mt-caption-sub">{featured.theme}</span>
            </div>
            <Link to={`/article/${featured.id.replace('A', 'A201').replace('B', 'B202').replace('C', 'C203').replace('D', 'D204').replace('E', 'E205').replace('F', 'F206').replace('G', 'G207').replace('H', 'H208')}`} className="mt-cta">{t("metier.hero.featured.read_article")} <ArrowRight /></Link>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="mt-ticker-wrap">
        <div className="mt-ticker-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <span key={i} className="mt-ticker-item">
              {item}<span className="mt-ticker-sep" />
            </span>
          ))}
        </div>
      </div>

      {/* BODY */}
      <div className="mt-body">
        <div className="mt-section-hd">
          <span className="mt-section-hd-label">{t("metier.body.section.label")}</span>
          <h2 className="mt-section-hd-title">{t("metier.body.section.title")}</h2>
          <div className="mt-section-hd-line" />
          <span className="mt-section-hd-count">{articles.length} {t("metier.body.section.count")}</span>
        </div>

        <div className="mt-layout">
          {/* ARTICLE LIST */}
          <div className="mt-article-list">
            {articles.map((article, idx) => (
              <Link key={article.id} to={`/article/${article.id.replace('A', 'A201').replace('B', 'B202').replace('C', 'C203').replace('D', 'D204').replace('E', 'E205').replace('F', 'F206').replace('G', 'G207').replace('H', 'H208')}`} className="mt-article-row">
                <div className="mt-img-wrap">
                  <img src={article.image} alt={article.title} />
                  <span className="mt-img-badge">{article.label}</span>
                </div>
                <div className="mt-article-body">
                  <div className="mt-article-meta">
                    <span className="mt-article-cat">{article.category}</span>
                    <span className="mt-article-mdot" />
                    <span className="mt-article-theme">{article.theme}</span>
                  </div>
                  <h3 className="mt-article-title">{article.title}</h3>
                  <p className="mt-article-excerpt">{article.text}</p>
                  <div className="mt-article-foot">
                    <span className="mt-article-domain">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/>
                      </svg>
                      {article.theme}
                    </span>
                    <span className="mt-article-link">
                      {t("metier.body.article.read_article")} <ArrowRight />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* SIDEBAR */}
          <aside className="mt-sidebar">
            {/* Highlights */}
            <div className="mt-sb-block">
              <div className="mt-sb-hd">
                <span className="mt-sb-hd-title">{t("metier.body.sidebar.highlights.title")}</span>
                <div className="mt-sb-hd-line" />
              </div>
              <div className="mt-hi-list">
                {articles.slice(0, 4).map((article, idx) => (
                  <Link key={article.id} to={`/article/${article.id.replace('A', 'A201').replace('B', 'B202').replace('C', 'C203').replace('D', 'D204').replace('E', 'E205').replace('F', 'F206').replace('G', 'G207').replace('H', 'H208')}`} className="mt-hi-item">
                    <span className="mt-hi-idx">{String(idx + 1).padStart(2, '0')}</span>
                    <div>
                      <div className="mt-hi-title">{article.title}</div>
                      <div className="mt-hi-cat">{article.category}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Domains */}
            <div className="mt-domains-block">
              <div className="mt-sb-hd">
                <span className="mt-sb-hd-title">{t("metier.body.sidebar.domains.title")}</span>
                <div className="mt-sb-hd-line" />
              </div>
              {domains.map(d => (
                <a key={d.name} href="#" className="mt-domain-item">
                  <span className="mt-domain-name">
                    <span className="mt-domain-dot" />
                    {d.name}
                  </span>
                  <span className="mt-domain-count">{d.count} {t("metier.body.sidebar.domains.articles")}</span>
                </a>
              ))}
            </div>

            {/* About */}
            <div className="mt-themes-block">
              <div className="mt-themes-tag">{t("metier.body.sidebar.about.tag")}</div>
              <div className="mt-themes-title">{t("metier.body.sidebar.about.title")}</div>
              <p className="mt-themes-text">
                {t("metier.body.sidebar.about.text")}
              </p>
              <div className="mt-theme-pills">
                {Array.isArray(t("metier.body.sidebar.about.tags")) 
                  ? t("metier.body.sidebar.about.tags").map(tag => (
                      <span key={tag} className="mt-theme-pill">{tag}</span>
                    ))
                  : null
                }
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="mt-footer">
        <div className="mt-footer-brand">
          {t("metier.footer.brand")}
        </div>
        <Link to="/" className="mt-footer-back">{t("metier.footer.back")}</Link>
      </footer>
    </div>
  );
}