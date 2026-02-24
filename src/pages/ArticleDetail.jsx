import React, { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";

// Imports des images pour Metier.jsx
import articleA from "../assets/images/ARTICLE A.webp";
import articleB from "../assets/images/ARTICLEB.jpg";
import articleC from "../assets/images/ARTICLEC.png";
import articleD from "../assets/images/ARTICLE D.avif";
import articleE from "../assets/images/ARTICLE E.webp";
import articleF from "../assets/images/ARTICLE F.webp";
import articleG from "../assets/images/ARTICLE G.jpg";
import articleH from "../assets/images/ARTICLE 8.jpg";

// Imports des images pour Entreprise.jsx
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

/* ─────────────────────────────────────────
   STYLES — Editorial Magazine / Light Theme
   Palette: Blanc ivoire + Vert forêt profond + Terre ocre
   Font: Fraunces (display) + Plus Jakarta Sans (body)
───────────────────────────────────────── */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,700;0,9..144,900;1,9..144,400;1,9..144,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

  :root {
    --ivory:    #f8f9fa;
    --paper:    #f0f4f8;
    --forest:   #1a3a52;
    --forest2:  #0f2537;
    --moss:     #2a5470;
    --sage:     #5a8fa8;
    --sage-lt:  #cde0ec;
    --ocre:     #d4a017;
    --ocre-lt:  #f4c430;
    --ink:      #1a1a1a;
    --ink-soft: #6b7280;
    --ink-dim:  #9ca3af;
    --border:   #e5e7eb;
    --white:    #ffffff;
    --font-d:   'Fraunces', Georgia, serif;
    --font-b:   'Plus Jakarta Sans', sans-serif;
    --ease:     cubic-bezier(0.16, 1, 0.3, 1);
    --ease-spr: cubic-bezier(0.34, 1.56, 0.64, 1);
    --shadow-sm: 0 2px 8px rgba(26, 58, 82, 0.08);
    --shadow-md: 0 4px 16px rgba(26, 58, 82, 0.12);
    --shadow-lg: 0 8px 32px rgba(26, 58, 82, 0.16);
    --gradient-accent: linear-gradient(135deg, #d4a017 0%, #f4c430 100%);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .mag-root {
    font-family: var(--font-b);
    background: var(--ivory);
    color: var(--ink);
    min-height: 100vh;
  }

  /* ── STICKY HEADER ── */
  .mag-header {
    position: sticky; top: 0; z-index: 99;
    background: var(--white);
    border-bottom: 2px solid var(--ink);
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    padding: 0 40px;
    height: 60px;
  }
  .mag-header-left {
    display: flex; align-items: center; gap: 20px;
  }
  .mag-back {
    display: inline-flex; align-items: center; gap: 7px;
    font-size: 0.65rem; font-weight: 700;
    letter-spacing: 0.18em; text-transform: uppercase;
    color: var(--ink-soft); text-decoration: none;
    padding: 6px 14px;
    border: 1.5px solid var(--border);
    border-radius: 4px;
    transition: all 0.2s var(--ease);
  }
  .mag-back:hover {
    background: var(--ink); color: var(--white);
    border-color: var(--ink);
  }
  .mag-header-brand {
    font-family: var(--font-d);
    font-size: 1.55rem; font-weight: 900;
    color: var(--ink); text-decoration: none;
    letter-spacing: -0.03em;
    font-style: italic;
  }
  .mag-header-brand span { color: var(--forest); }
  .mag-header-right {
    display: flex; align-items: center; justify-content: flex-end;
    gap: 6px;
  }
  .mag-issue-tag {
    font-size: 0.6rem; font-weight: 700;
    letter-spacing: 0.16em; text-transform: uppercase;
    color: var(--white);
    background: var(--forest);
    padding: 5px 12px; border-radius: 3px;
  }

  /* ── READING PROGRESS ── */
  .mag-progress-track {
    position: fixed; top: 60px; left: 0; right: 0;
    height: 4px; background: var(--sage-lt); z-index: 98;
  }
  .mag-progress-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--forest), var(--moss));
    transition: width 0.12s linear;
  }

  /* ── HERO SPLIT ── */
  .mag-hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    min-height: 88vh;
    border-bottom: 2px solid var(--ink);
  }

  /* Left: text panel */
  .mag-hero-text {
    padding: 72px 64px 64px 64px;
    background: var(--white);
    border-right: 2px solid var(--ink);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
  }
  /* Giant number watermark */
  .mag-hero-text::before {
    content: attr(data-num);
    position: absolute;
    bottom: -40px; right: -20px;
    font-family: var(--font-d);
    font-size: 22rem;
    font-weight: 900;
    color: rgba(26,58,42,0.04);
    line-height: 1;
    pointer-events: none;
    user-select: none;
  }

  .mag-hero-top {}
  .mag-kicker {
    display: flex; align-items: center; gap: 10px;
    margin-bottom: 32px;
    animation: slide-in 0.6s 0.1s var(--ease) both;
  }
  .mag-kicker-bar {
    width: 32px; height: 3px;
    background: var(--ocre); border-radius: 2px;
  }
  .mag-kicker-text {
    font-size: 0.62rem; font-weight: 700;
    letter-spacing: 0.22em; text-transform: uppercase;
    color: var(--ocre);
  }

  .mag-title {
    font-family: var(--font-d);
    font-size: clamp(2.2rem, 4vw, 3.6rem);
    font-weight: 900;
    line-height: 1.06;
    letter-spacing: -0.03em;
    color: var(--ink);
    margin-bottom: 36px;
    animation: slide-in 0.6s 0.2s var(--ease) both;
  }

  .mag-hero-meta {
    display: flex; flex-direction: column; gap: 10px;
    margin-bottom: 48px;
    padding: 24px;
    background: var(--ivory);
    border-left: 4px solid var(--forest);
    animation: slide-in 0.6s 0.3s var(--ease) both;
  }
  .mag-meta-row {
    display: flex; align-items: center; gap: 10px;
    font-size: 0.75rem; color: var(--ink-soft); font-weight: 500;
  }
  .mag-meta-icon { color: var(--forest); flex-shrink: 0; }
  .mag-meta-label {
    font-size: 0.58rem; font-weight: 700;
    letter-spacing: 0.14em; text-transform: uppercase;
    color: var(--ink-dim); margin-right: 4px;
  }

  .mag-hero-bottom {}
  .mag-excerpt {
    font-size: 1.05rem; line-height: 1.75;
    color: var(--ink-soft); font-weight: 300;
    border-top: 1px solid var(--border);
    padding-top: 28px;
    animation: slide-in 0.6s 0.4s var(--ease) both;
  }

  /* Right: image panel */
  .mag-hero-image-wrap {
    position: relative;
    overflow: hidden;
    background: var(--forest);
    animation: fade-in 0.8s 0.3s var(--ease) both;
  }
  .mag-hero-img {
    width: 100%; height: 100%;
    object-fit: cover;
    display: block;
    opacity: 0.88;
    transition: transform 10s ease, opacity 0.3s;
  }
  .mag-hero-image-wrap:hover .mag-hero-img {
    transform: scale(1.05);
    opacity: 0.95;
  }
  .mag-image-overlay {
    position: absolute; bottom: 0; left: 0; right: 0;
    padding: 40px 32px 32px;
    background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 100%);
  }
  .mag-image-overlay-cat {
    display: inline-block;
    background: var(--forest);
    color: var(--sage-lt);
    font-size: 0.58rem; font-weight: 700;
    letter-spacing: 0.2em; text-transform: uppercase;
    padding: 6px 14px; border-radius: 2px;
    margin-bottom: 12px;
  }
  .mag-image-overlay-num {
    font-family: var(--font-d);
    font-size: 3.5rem; font-weight: 900;
    color: rgba(255,255,255,0.15);
    line-height: 1;
  }

  /* ── BODY LAYOUT ── */
  .mag-body {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 64px 100px;
    display: grid;
    grid-template-columns: 72px 1fr 280px;
    gap: 0 0;
    position: relative;
  }

  /* Left rail — issue numbers */
  .mag-rail {
    border-right: 2px solid var(--border);
    padding: 64px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 48px;
  }
  .mag-rail-marker {
    writing-mode: vertical-rl;
    text-orientation: mixed;
    transform: rotate(180deg);
    font-size: 0.55rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: var(--ink-dim);
  }
  .mag-rail-dot {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: var(--sage);
    flex-shrink: 0;
  }
  .mag-rail-line {
    flex: 1; min-height: 40px;
    width: 1px; background: var(--border);
  }

  /* Center — article content */
  .mag-content {
    padding: 64px 64px 0 56px;
    border-right: 2px solid var(--border);
  }

  /* Drop cap */
  .mag-first-para {
    font-size: 1.15rem;
    line-height: 1.85;
    color: var(--ink);
    margin-bottom: 32px;
  }
  .mag-first-para::first-letter {
    font-family: var(--font-d);
    font-size: 5.5rem;
    font-weight: 900;
    line-height: 0.8;
    float: left;
    margin-right: 10px;
    margin-top: 8px;
    color: var(--forest);
  }

  .mag-para {
    font-size: 1.1rem;
    line-height: 1.85;
    color: #2c3a30;
    margin-bottom: 28px;
  }

  /* Section heading */
  .mag-sec-heading {
    position: relative;
    font-family: var(--font-d);
    font-size: 2rem;
    font-weight: 700;
    font-style: italic;
    color: var(--ink);
    letter-spacing: -0.02em;
    margin: 60px 0 24px;
    padding-left: 24px;
  }
  .mag-sec-heading::before {
    content: '';
    position: absolute;
    left: 0; top: 6px; bottom: 6px;
    width: 5px;
    background: linear-gradient(to bottom, var(--forest), var(--sage));
    border-radius: 3px;
  }

  /* Pull quote */
  .mag-pull-quote {
    margin: 48px -24px;
    padding: 36px 40px;
    background: var(--forest);
    border-radius: 4px;
    position: relative;
    overflow: hidden;
  }
  .mag-pull-quote::before {
    content: '"';
    position: absolute;
    top: -20px; left: 24px;
    font-family: var(--font-d);
    font-size: 10rem;
    font-weight: 900;
    color: rgba(255,255,255,0.08);
    line-height: 1;
    pointer-events: none;
  }
  .mag-pull-quote-text {
    font-family: var(--font-d);
    font-size: 1.45rem;
    font-style: italic;
    font-weight: 400;
    color: var(--white);
    line-height: 1.5;
    position: relative; z-index: 1;
  }

  /* Divider */
  .mag-divider {
    display: flex; align-items: center; gap: 16px;
    margin: 56px 0;
  }
  .mag-divider-line { flex: 1; height: 1px; background: var(--border); }
  .mag-divider-ornament {
    width: 8px; height: 8px;
    background: var(--ocre);
    transform: rotate(45deg);
    flex-shrink: 0;
  }

  /* Share bar */
  .mag-share {
    display: flex; align-items: center; gap: 16px;
    margin-top: 60px;
    padding: 28px 0;
    border-top: 2px solid var(--ink);
    border-bottom: 2px solid var(--ink);
  }
  .mag-share-label {
    font-size: 0.62rem; font-weight: 700;
    letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--ink-soft);
  }
  .mag-share-btns {
    display: flex; gap: 10px; margin-left: auto;
  }
  .mag-share-btn {
    width: 40px; height: 40px;
    background: transparent;
    border: 1.5px solid var(--border);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; color: var(--ink-soft);
    transition: all 0.22s var(--ease-spr);
  }
  .mag-share-btn:hover {
    background: var(--forest);
    border-color: var(--forest);
    color: var(--white);
    transform: scale(1.12) translateY(-2px);
  }

  /* ── SIDEBAR ── */
  .mag-sidebar {
    padding: 64px 0 0 40px;
    display: flex; flex-direction: column; gap: 32px;
  }

  .mag-sidebar-block {
    padding-bottom: 32px;
    border-bottom: 1px solid var(--border);
  }
  .mag-sidebar-block:last-child { border-bottom: none; }

  .mag-sidebar-title {
    font-size: 0.58rem; font-weight: 700;
    letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--forest);
    margin-bottom: 16px;
    display: flex; align-items: center; gap: 10px;
  }
  .mag-sidebar-title::after {
    content: ''; flex: 1; height: 1px;
    background: var(--sage-lt);
  }

  .mag-sidebar-stat {
    text-align: center;
    padding: 24px;
    background: var(--forest);
    border-radius: 4px;
    margin-bottom: 12px;
  }
  .mag-sidebar-stat-num {
    font-family: var(--font-d);
    font-size: 3rem; font-weight: 900;
    color: var(--white); line-height: 1;
    display: block;
  }
  .mag-sidebar-stat-label {
    font-size: 0.62rem; font-weight: 500;
    color: var(--sage);
    letter-spacing: 0.12em; text-transform: uppercase;
    margin-top: 6px; display: block;
  }

  .mag-progress-widget {
    display: flex; flex-direction: column; gap: 8px;
  }
  .mag-progress-row {
    display: flex; justify-content: space-between;
    align-items: center;
  }
  .mag-progress-pct-label {
    font-size: 0.62rem; color: var(--ink-dim); font-weight: 500;
    text-transform: uppercase; letter-spacing: 0.1em;
  }
  .mag-progress-pct-val {
    font-family: var(--font-d);
    font-size: 1.6rem; font-weight: 900; color: var(--forest);
    line-height: 1;
  }
  .mag-progress-bar {
    height: 8px; background: var(--sage-lt);
    border-radius: 8px; overflow: hidden;
  }
  .mag-progress-bar-inner {
    height: 100%;
    background: linear-gradient(90deg, var(--forest), var(--moss));
    border-radius: 8px;
    transition: width 0.15s linear;
  }

  .mag-tag-cloud {
    display: flex; flex-wrap: wrap; gap: 8px;
  }
  .mag-tag {
    font-size: 0.63rem; font-weight: 600;
    letter-spacing: 0.08em;
    color: var(--forest);
    background: var(--sage-lt);
    padding: 5px 12px;
    border-radius: 2px;
    transition: all 0.18s;
    cursor: default;
  }
  .mag-tag:hover {
    background: var(--forest); color: var(--white);
  }

  .mag-info-item {
    display: flex; gap: 12px;
    padding: 10px 0;
    border-bottom: 1px dashed var(--border);
    font-size: 0.8rem;
  }
  .mag-info-item:last-child { border-bottom: none; }
  .mag-info-ico { color: var(--forest); flex-shrink: 0; margin-top: 1px; }
  .mag-info-k {
    font-size: 0.57rem; font-weight: 700;
    letter-spacing: 0.14em; text-transform: uppercase;
    color: var(--ink-dim); display: block; margin-bottom: 2px;
  }
  .mag-info-v { color: var(--ink); font-weight: 500; }

  /* ── NAVIGATION FOOTER ── */
  .mag-nav-footer {
    border-top: 2px solid var(--ink);
    background: var(--white);
  }
  .mag-nav-inner {
    max-width: 1280px; margin: 0 auto;
    padding: 0 64px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  .mag-nav-item {
    display: flex; flex-direction: column;
    text-decoration: none; color: var(--ink);
    padding: 40px 32px;
    transition: background 0.2s;
    position: relative;
  }
  .mag-nav-item + .mag-nav-item { border-left: 1px solid var(--border); }
  .mag-nav-item:hover { background: var(--ivory); }
  .mag-nav-item:hover .mag-nav-arr { transform: translateX(5px); }

  .mag-nav-dir {
    font-size: 0.58rem; font-weight: 700;
    letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--ink-dim); margin-bottom: 10px;
    display: flex; align-items: center; gap: 8px;
  }
  .mag-nav-arr {
    transition: transform 0.2s var(--ease);
    color: var(--forest);
  }
  .mag-nav-thumb {
    width: 48px; height: 48px; border-radius: 4px;
    object-fit: cover;
    border: 2px solid var(--border);
    margin-bottom: 12px;
  }
  .mag-nav-ttl {
    font-family: var(--font-d);
    font-size: 1.05rem; font-weight: 700;
    line-height: 1.25; color: var(--ink);
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .mag-nav-center {
    display: flex; flex-direction: column;
    align-items: center; justify-content: center; gap: 12px;
    padding: 40px;
  }
  .mag-nav-grid-btn {
    width: 56px; height: 56px;
    background: var(--forest);
    border-radius: 4px;
    display: flex; align-items: center; justify-content: center;
    color: var(--white);
    transition: all 0.25s var(--ease-spr);
  }
  .mag-nav-center:hover .mag-nav-grid-btn {
    background: var(--moss);
    transform: scale(1.1);
  }
  .mag-nav-grid-label {
    font-size: 0.58rem; font-weight: 700;
    letter-spacing: 0.18em; text-transform: uppercase;
    color: var(--ink-dim);
  }

  /* ── LOADING ── */
  .mag-loading {
    min-height: 100vh;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center; gap: 24px;
  }
  .mag-loading-box {
    width: 60px; height: 60px;
    border: 3px solid var(--sage-lt);
    border-top: 3px solid var(--forest);
    border-radius: 50%;
    animation: spin 0.9s linear infinite;
  }
  .mag-loading-text {
    font-size: 0.7rem; font-weight: 700;
    letter-spacing: 0.2em; text-transform: uppercase;
    color: var(--ink-dim);
  }

  /* ── NOT FOUND ── */
  .mag-notfound {
    min-height: 80vh;
    display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    text-align: center; padding: 60px 40px;
  }
  .mag-notfound-big {
    font-family: var(--font-d);
    font-size: 10rem; font-weight: 900;
    color: var(--sage-lt); line-height: 1;
  }
  .mag-notfound h2 {
    font-family: var(--font-d);
    font-size: 2.5rem; font-weight: 700;
    color: var(--ink); margin: 8px 0 16px;
  }
  .mag-notfound p {
    color: var(--ink-soft); font-size: 1rem;
    line-height: 1.7; max-width: 400px; margin-bottom: 40px;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 1024px) {
    .mag-hero { grid-template-columns: 1fr; min-height: auto; }
    .mag-hero-image-wrap { height: 320px; border-right: none; }
    .mag-hero-text { border-right: none; border-bottom: 2px solid var(--ink); padding: 48px 32px; }
    .mag-body { grid-template-columns: 0 1fr; padding: 0 32px 80px; }
    .mag-rail { display: none; }
    .mag-content { padding: 48px 0 0 0; border-right: none; }
    .mag-sidebar { padding: 48px 0 0; }
    .mag-nav-inner { padding: 0 32px; }
  }
  @media (max-width: 768px) {
    .mag-header { padding: 0 20px; grid-template-columns: 1fr auto; }
    .mag-header-right { display: none; }
    .mag-hero-text { padding: 36px 24px; }
    .mag-body { padding: 0 24px 60px; grid-template-columns: 1fr; }
    .mag-sidebar { padding-left: 0; }
    .mag-nav-inner { padding: 0 24px; grid-template-columns: 1fr 1fr; }
    .mag-nav-center { display: none; }
    .mag-pull-quote { margin-left: 0; margin-right: 0; }
    .mag-share { flex-wrap: wrap; }
  }

  /* ── KEYFRAMES ── */
  @keyframes slide-in {
    from { opacity: 0; transform: translateX(-20px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes fade-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes spin { to { transform: rotate(360deg); } }
`;

/* ── Icons ── */
const ChevLeft = ({ s = 14 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6"/>
  </svg>
);
const ChevRight = ({ s = 14 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6"/>
  </svg>
);
const GridIco = ({ s = 20 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
    <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
  </svg>
);
const CalIco = ({ s = 14 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);
const PinIco = ({ s = 14 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);
const ClockIco = ({ s = 14 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);
const ShareIco = ({ s = 14 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
  </svg>
);
const BookIco = ({ s = 14 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>
  </svg>
);
const PrintIco = ({ s = 14 }) => (
  <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 6 2 18 2 18 9"/>
    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/>
    <rect x="6" y="14" width="12" height="8"/>
  </svg>
);

/* ── Data ── */
const articles = [
  {
    id: 1, date: "Février 2026", location: "New Delhi, Inde",
    category: "Sommet Mondial",
    tags: ["Intelligence Artificielle", "Diplomatie", "Afrique"],
    readTime: 4,
    title: "L'Afrique revendique sa place dans la course mondiale à l'IA",
    image: require("../assets/images/Aifrica1.jpeg"),
    text: `Longtemps cantonnée aux marges du débat mondial sur l'intelligence artificielle, l'Afrique affirme désormais sa volonté de peser dans la construction de ce nouvel ordre technologique.

Premier sommet mondial sur l'IA à se tenir dans un pays du Sud global, l'événement a rassemblé plus de 250 000 participants, parmi lesquels des chefs d'État, des PDG de grandes entreprises technologiques et des représentants de pays émergents.

Une prise de conscience collective
Les débats ont mis en lumière une prise de conscience collective : l'Afrique ne peut plus rester simple spectatrice de la révolution IA. Le continent représente non seulement un marché de 1,4 milliard d'habitants, mais aussi une source potentielle de données et de talents pour l'entraînement des modèles du futur.

Les initiatives concrètes se multiplient : création de fonds d'investissement dédiés, développement de centres de recherche, et mise en place de formations spécialisées. L'objectif est clair : faire de l'Afrique un acteur incontournable de l'écosystème mondial de l'IA.`
  },
  {
    id: 2, date: "Février 2026", location: "Lagos, Nigeria",
    category: "Formation & Talents",
    tags: ["Formation", "Jeunesse", "Startups"],
    readTime: 5,
    title: "DataLens Africa lance un réseau pour former les talents africains de l'IA",
    image: require("../assets/images/Aifrica2.webp"),
    text: `Face à la demande mondiale croissante de données de haute qualité pour entraîner les modèles d'intelligence artificielle, une initiative nigériane entend positionner la jeunesse africaine au cœur de cette chaîne de valeur.

DataLens Africa, filiale de CipherSense AI, a officiellement lancé son AI Talent Network lors d'une cérémonie à Lagos. Ce programme vise à former 50 000 jeunes Africains d'ici 2027 aux métiers de l'annotation de données, du machine learning et de l'éthique de l'IA.

Un modèle économique gagnant-gagnant
Le modèle économique est particulièrement ingénieux : les jeunes formés travaillent sur des projets internationaux tout en développant des compétences transférables au marché local. Les rémunérations, bien que modestes selon les standards occidentaux, représentent des salaires compétitifs dans leurs pays d'origine.

Le programme intègre également un volet entrepreneurship, permettant aux talents les plus prometteurs de lancer leurs propres startups IA. Plusieurs fonds d'investissement locaux se sont déjà engagés à soutenir ces initiatives.`
  },
  {
    id: 3, date: "20 Février 2026", location: "New Delhi, Inde",
    category: "Partenariat",
    tags: ["Coopération", "Souveraineté", "Technologie"],
    readTime: 5,
    title: "Inde, Italie, Kenya : un partenariat trilatéral pour une IA souveraine en Afrique",
    image: require("../assets/images/Aifrica3.webp"),
    text: `À l'occasion du Sommet India AI Impact 2026, trois pays aux profils complémentaires ont franchi un pas décisif. L'Inde, l'Italie et le Kenya ont signé un accord de partenariat stratégique trilatéral visant à co-concevoir et déployer des solutions d'intelligence artificielle souveraines à travers l'Afrique.

Des expertises complémentaires
L'Inde apporte son expertise en développement de modèles IA et sa main-d'œuvre qualifiée. L'Italie contribue avec son savoir-faire en matière de régulation et d'éthique. Le Kenya, quant à lui, sert de hub régional et de plateforme de test pour les solutions développées.

Le partenariat prévoit la création de trois centres d'excellence à Nairobi, Milan et Bangalore, ainsi qu'un fonds commun de 500 millions d'euros pour financer des projets IA répondant aux besoins spécifiques du continent africain : agriculture intelligente, santé mobile, éducation adaptative et services financiers inclusifs.`
  },
  {
    id: 4, date: "Janvier 2026", location: "Rabat / Casablanca",
    category: "Infrastructure",
    tags: ["Data Centers", "Énergie", "Hub"],
    readTime: 4,
    title: "Le Maroc ambitionne de devenir le hub africain de l'IA",
    image: require("../assets/images/Aifrica4.jpeg"),
    text: `Dans la course aux infrastructures numériques qui s'accélère sur le continent africain, le Maroc prend une longueur d'avance. Le royaume s'apprête à accueillir quatre centres de données dont la capacité électrique cumulée pourrait atteindre deux gigawatts, consolidant sa position de hub technologique régional.

Une vision stratégique
Cette ambition s'inscrit dans une vision plus large : faire du Maroc la porte d'entrée numérique de l'Afrique vers l'Europe et le Moyen-Orient. Les centres de données seront alimentés principalement par des énergies renouvelables, notamment solaire et éolienne, conformément aux engagements climatiques du royaume.

Le projet inclut également la création d'un parc technologique dédié à l'IA, attirant déjà des géants comme Google, Microsoft et des startups européennes spécialisées dans le machine learning. L'objectif est de créer un écosystème complet allant de la recherche fondamentale aux applications industrielles.`
  },
  {
    id: 5, date: "Décembre 2025", location: "Accra / Tokyo",
    category: "Éducation",
    tags: ["Formation", "Coopération", "Ghana"],
    readTime: 4,
    title: "Ghana-Japon : un programme pour former 30 000 professionnels africains en IA",
    image: require("../assets/images/Aifrica5.jpg"),
    text: `Le Ghana est en passe de devenir l'un des points d'ancrage d'une initiative japonaise d'envergure continentale. Le ministre ghanéen de la Communication a entamé des discussions avec une délégation de l'Université de Tokyo pour structurer ce vaste programme de formation.

Une coopération Sud-Sud-Nord
Ce programme unique en son genre combine l'expertise japonaise en robotique et IA avec les réalités africaines. Le Japon financera 70% du programme, le reste étant assuré par des fonds ghanéens et des partenaires privés.

Les formations se dérouleront dans plusieurs pays africains, avec le Ghana comme coordonnateur régional. Le curriculum a été co-développé pour répondre aux besoins spécifiques du continent : agriculture de précision, télémédecine, gestion intelligente des ressources en eau, et traitement des langues africaines.`
  },
  {
    id: 6, date: "Décembre 2025", location: "Malta / Afrique subsaharienne",
    category: "Formation",
    tags: ["OPIT", "Numérique", "Bourses"],
    readTime: 5,
    title: "OPIT élargit l'accès aux formations IA et Data en Afrique",
    image: require("../assets/images/Aifrica6.jpg"),
    text: `Face à l'accélération de la demande de compétences numériques sur le continent africain, l'Open Institute of Technology s'impose progressivement comme un partenaire de formation de référence, en ouvrant ses candidatures pour sa promotion de janvier 2026.

Un modèle éducatif innovant
OPIT propose un modèle hybride alliant cours en ligne, projets pratiques et mentorat personnalisé. L'institut a développé des partenariats avec des entreprises locales pour garantir l'employabilité de ses diplômés.

Pour l'Afrique, OPIT a adapté son offre en proposant des bourses d'études, des tarifs préférentiels et des contenus contextualisés. Plusieurs gouvernements africains ont déjà signé des accords pour financer la formation de milliers d'étudiants dans des domaines stratégiques comme l'analyse de données, le machine learning et l'IA éthique.`
  },
  // Articles de Metier.jsx
  {
    id: 'A201', date: "2026", location: "Monde",
    category: "Ressources Humaines",
    tags: ["RH", "IA", "Entreprise"],
    readTime: 5,
    title: "L'intelligence artificielle transforme en profondeur les processus des ressources humaines",
    image: articleA,
    text: `Recrutement, gestion des talents, formation, bien-être au travail : longtemps perçues comme des fonctions essentiellement humaines, les ressources humaines connaissent aujourd'hui une mutation accélérée sous l'effet de l'intelligence artificielle. De plus en plus d'entreprises intègrent ces technologies pour gagner en efficacité, objectivité et anticipation, tout en redéfinissant le rôle des professionnels RH.`
  },
  {
    id: 'B202', date: "2026", location: "Afrique",
    category: "Ressources Humaines",
    tags: ["RH", "IA", "Afrique"],
    readTime: 4,
    title: "En Afrique, l'IA s'impose progressivement dans les pratiques RH",
    image: articleB,
    text: `Longtemps considérée comme un sujet réservé aux économies occidentales, l'intelligence artificielle trouve aujourd'hui des applications concrètes dans les ressources humaines en Afrique. Face à une démographie dynamique, un marché de l'emploi fragmenté et une forte digitalisation mobile, plusieurs entreprises africaines utilisent déjà l'IA pour moderniser leurs pratiques RH.`
  },
  {
    id: 'C203', date: "2026", location: "Monde",
    category: "Finance",
    tags: ["Finance", "IA", "Entreprise"],
    readTime: 5,
    title: "L'intelligence artificielle révolutionne la fonction finance en entreprise",
    image: articleC,
    text: `Longtemps perçue comme une fonction rigide, centrée sur la conformité et le reporting, la finance d'entreprise connaît aujourd'hui une transformation profonde. Portée par l'essor de l'intelligence artificielle, elle devient plus rapide, prédictive et stratégique. De la comptabilité à la gestion des risques, l'IA redéfinit les contours du métier de la finance.`
  },
  {
    id: 'D204', date: "2026", location: "Afrique",
    category: "Finance",
    tags: ["Finance", "IA", "Afrique"],
    readTime: 4,
    title: "En Afrique, l'intelligence artificielle réinvente la finance d'entreprise",
    image: articleD,
    text: `Alors que l'Afrique reste en phase d'industrialisation numérique, plusieurs entreprises et institutions intègrent l'intelligence artificielle dans leurs opérations financières. De la détection de fraude à l'évaluation du risque de crédit, les technologies intelligentes transforment profondément le secteur financier.`
  },
  {
    id: 'E205', date: "2026", location: "Monde",
    category: "Marketing",
    tags: ["Marketing", "IA", "Entreprise"],
    readTime: 5,
    title: "L'intelligence artificielle redéfinit les stratégies marketing en entreprise",
    image: articleE,
    text: `Analyse des données, personnalisation des messages, automatisation des campagnes : l'intelligence artificielle s'impose aujourd'hui comme un outil central du marketing moderne. Dans un environnement marqué par la surabondance d'informations et des consommateurs de plus en plus exigeants, les entreprises misent sur l'IA pour mieux comprendre leurs clients.`
  },
  {
    id: 'F206', date: "2026", location: "Afrique",
    category: "Marketing",
    tags: ["Marketing", "IA", "Afrique"],
    readTime: 4,
    title: "Marketing et intelligence artificielle : comment les PME africaines passent à l'action",
    image: articleF,
    text: `Contrairement aux idées reçues, l'intelligence artificielle n'est plus un luxe réservé aux grandes entreprises. En Afrique, de nombreuses PME utilisent déjà des outils simples, souvent intégrés à des plateformes existantes, pour améliorer leur visibilité, attirer des clients et augmenter leurs ventes.`
  },
  {
    id: 'G207', date: "2026", location: "Monde",
    category: "Commercial & Ventes",
    tags: ["Ventes", "IA", "Entreprise"],
    readTime: 5,
    title: "L'intelligence artificielle transforme les pratiques commerciales en entreprise",
    image: articleG,
    text: `Prospection, relation client, prévision des ventes : la fonction commerciale connaît une mutation rapide sous l'effet de l'intelligence artificielle. Face à des clients mieux informés et à une concurrence accrue, les entreprises adoptent des outils intelligents pour vendre plus efficacement et optimiser la performance de leurs équipes.`
  },
  {
    id: 'H208', date: "2026", location: "Afrique",
    category: "Commercial & Ventes",
    tags: ["Ventes", "IA", "Afrique"],
    readTime: 4,
    title: "En Afrique, l'intelligence artificielle transforme les pratiques de vente des entreprises",
    image: articleH,
    text: `De la petite entreprise locale aux grandes plateformes panafricaines, l'intelligence artificielle s'impose progressivement comme un outil de soutien à la vente sur le continent. Dans un contexte marqué par la domination du mobile et la diversité des marchés, les entreprises adoptent des solutions efficaces pour mieux cibler et servir leurs clients.`
  },
  // Articles de Entreprise.jsx
  {
    id: 101, date: "2026", location: "Monde",
    category: "Commerce & Retail",
    tags: ["Commerce", "Retail", "IA"],
    readTime: 4,
    title: "L'IA dans le commerce de détail et la grande distribution",
    image: article1,
    text: "L'intelligence artificielle s'impose aujourd'hui comme un moteur majeur de transformation du commerce de détail. Face à l'évolution rapide des habitudes de consommation, à la montée du e-commerce et à une concurrence toujours plus intense, les acteurs du retail doivent innover pour rester performants."
  },
  {
    id: 102, date: "2026", location: "Afrique",
    category: "Commerce & Retail",
    tags: ["Commerce", "Retail", "Afrique"],
    readTime: 4,
    title: "En Afrique, l'intelligence artificielle commence à transformer le commerce de détail",
    image: article2,
    text: "Alors que l'Afrique est encore souvent perçue comme en retard dans la révolution digitale, le commerce de détail sur le continent montre des signes clairs de transformation grâce à l'adoption progressive de l'intelligence artificielle."
  },
  {
    id: 103, date: "2026", location: "Monde",
    category: "Transport & Logistique",
    tags: ["Transport", "Logistique", "IA"],
    readTime: 5,
    title: "L'intelligence artificielle transforme le transport et la logistique",
    image: article3,
    text: "L'intelligence artificielle transforme en profondeur les secteurs du transport et de la logistique, piliers essentiels de l'économie mondiale. Face à l'augmentation des flux de marchandises, à la pression sur les délais de livraison et aux exigences croissantes en matière de durabilité."
  },
  {
    id: 104, date: "2026", location: "Afrique",
    category: "Transport & Logistique",
    tags: ["Transport", "Logistique", "Afrique"],
    readTime: 4,
    title: "En Afrique, l'IA optimise le transport et la logistique : le cas de Kobo360",
    image: article4,
    text: "Longtemps freinés par des infrastructures inégales et une forte fragmentation du marché, les secteurs du transport et de la logistique en Afrique connaissent aujourd'hui une transformation progressive grâce à l'intelligence artificielle."
  },
  {
    id: 105, date: "2026", location: "Monde",
    category: "Santé",
    tags: ["Santé", "IA", "Digital"],
    readTime: 5,
    title: "L'intelligence artificielle révolutionne le secteur de la santé",
    image: article5,
    text: "L'intelligence artificielle révolutionne progressivement le secteur de la santé en apportant des solutions innovantes à des défis majeurs tels que l'accès aux soins, la précision des diagnostics et l'optimisation des ressources médicales."
  },
  {
    id: 106, date: "2026", location: "Afrique",
    category: "Santé",
    tags: ["Santé", "IA", "Afrique"],
    readTime: 4,
    title: "En Côte d'Ivoire, l'IA améliore l'accès aux soins visuels : l'exemple de Lapaire",
    image: article6,
    text: "Dans de nombreux pays d'Afrique de l'Ouest, l'accès aux soins spécialisés reste limité, en particulier dans le domaine de l'ophtalmologie. En Côte d'Ivoire, où les ophtalmologues sont peu nombreux et concentrés dans les grandes villes, Lapaire apporte une réponse innovante."
  },
  {
    id: 107, date: "2026", location: "Monde",
    category: "Banque & Assurance",
    tags: ["Banque", "Assurance", "IA"],
    readTime: 5,
    title: "L'intelligence artificielle transforme les banques et assurances",
    image: article7,
    text: "L'intelligence artificielle transforme en profondeur le secteur des banques et des assurances, confronté à des enjeux majeurs de sécurité, de rentabilité et de satisfaction client."
  },
  {
    id: 108, date: "2026", location: "Afrique",
    category: "Banque & Assurance",
    tags: ["Banque", "Assurance", "Afrique"],
    readTime: 4,
    title: "En Afrique, l'IA redéfinit les banques et assurances : mobile money et assurance digitale",
    image: article77,
    text: "Longtemps confronté à un faible taux de bancarisation et à des risques élevés de fraude, le secteur financier africain connaît aujourd'hui une mutation profonde grâce à l'intelligence artificielle."
  },
  {
    id: 109, date: "2026", location: "Monde",
    category: "Agriculture",
    tags: ["Agriculture", "IA", "Digital"],
    readTime: 4,
    title: "L'agriculture entre dans l'ère digitale portée par l'IA",
    image: article8,
    text: "L'agriculture fait face à des défis majeurs : croissance démographique, changement climatique, raréfaction des ressources naturelles et nécessité d'augmenter la productivité tout en préservant l'environnement."
  },
  {
    id: 110, date: "2026", location: "Afrique",
    category: "Agriculture",
    tags: ["Agriculture", "IA", "Afrique"],
    readTime: 4,
    title: "Au Maroc, l'IA révolutionne l'irrigation agricole : l'exemple de SOWIT",
    image: article10,
    text: "Dans un contexte marqué par le stress hydrique et le changement climatique, l'agriculture marocaine se tourne de plus en plus vers les technologies intelligentes pour préserver ses ressources et améliorer sa productivité."
  },
  {
    id: 111, date: "2026", location: "Monde",
    category: "Tourisme",
    tags: ["Tourisme", "IA", "Digital"],
    readTime: 5,
    title: "L'intelligence artificielle transforme le secteur du tourisme",
    image: article9,
    text: "Le secteur du tourisme connaît une transformation profonde sous l'effet du numérique, et l'intelligence artificielle y joue désormais un rôle central. Dans un contexte marqué par des voyageurs plus connectés, plus exigeants et en quête d'expériences personnalisées."
  },
  {
    id: 112, date: "2026", location: "Afrique",
    category: "Tourisme",
    tags: ["Tourisme", "IA", "Afrique"],
    readTime: 4,
    title: "À l'île Maurice, l'intelligence artificielle transforme l'expérience touristique",
    image: article11,
    text: "Destination phare de l'océan Indien, Île Maurice s'impose comme un modèle de tourisme haut de gamme et innovant. Aujourd'hui, le pays amorce une nouvelle étape dans la modernisation de son secteur touristique grâce à l'IA."
  },
  {
    id: 113, date: "2026", location: "Monde",
    category: "Éducation",
    tags: ["Éducation", "IA", "Digital"],
    readTime: 5,
    title: "L'intelligence artificielle transforme l'éducation et les méthodes d'apprentissage",
    image: article12,
    text: "Longtemps cantonnée aux laboratoires de recherche et aux secteurs industriels, l'intelligence artificielle s'impose désormais comme un acteur clé de la transformation du système éducatif mondial."
  },
  {
    id: 114, date: "2026", location: "Afrique",
    category: "Éducation",
    tags: ["Éducation", "IA", "Afrique"],
    readTime: 4,
    title: "En Côte d'Ivoire, l'IA soutient la réussite scolaire : l'exemple de Schoolap",
    image: article12,
    text: "En Afrique francophone, où les systèmes éducatifs doivent faire face à une forte croissance démographique et à un manque de ressources pédagogiques, l'intelligence artificielle commence à jouer un rôle déterminant."
  }
];

/* ── Parse ── */
function parseText(raw) {
  return raw.trim().split('\n\n').map((block, i) => {
    const t = block.trim();
    const isHeading = i > 0 && t.length < 80 && !t.endsWith('.');
    return { type: isHeading ? 'heading' : 'para', text: t };
  });
}

/* ── Reading progress ── */
function useProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const fn = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? Math.min(100, (window.scrollY / h) * 100) : 0);
    };
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return p;
}

/* ── Component ── */
export default function ArticleDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [prev, setPrev]       = useState(null);
  const [next, setNext]       = useState(null);
  const progress              = useProgress();

  useEffect(() => {
    setLoading(true);
    window.scrollTo(0, 0);
    // Gérer les IDs numériques et textuels
    const searchId = isNaN(id) ? id : parseInt(id);
    const found = articles.find(a => a.id === searchId);
    const idx   = articles.findIndex(a => a.id === searchId);
    setTimeout(() => {
      setArticle(found || null);
      setPrev(idx > 0 ? articles[idx - 1] : null);
      setNext(idx < articles.length - 1 ? articles[idx + 1] : null);
      setLoading(false);
    }, 300);
  }, [id]);

  /* Loading */
  if (loading) return (
    <div className="mag-root">
      <style>{styles}</style>
      <div className="mag-loading">
        <div className="mag-loading-box" />
        <span className="mag-loading-text">Chargement…</span>
      </div>
    </div>
  );

  /* Not found */
  if (!article) return (
    <div className="mag-root">
      <style>{styles}</style>
      <div className="mag-notfound">
        <div className="mag-notfound-big">404</div>
        <h2>Introuvable</h2>
        <p>Cet article n'existe pas ou a été supprimé.</p>
        <Link to="/afrique" className="mag-back">
          <ChevLeft s={12} /> Retour
        </Link>
      </div>
    </div>
  );

  const sections = parseText(article.text);
  const today    = new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });

  /* Pick a pull-quote (2nd body paragraph) */
  const pullQuote = sections.filter(s => s.type === 'para')[1]?.text.slice(0, 140) + '…';

  return (
    <div className="mag-root">
      <style>{styles}</style>

      {/* ── TOP PROGRESS TRACK ── */}
      <div className="mag-progress-track">
        <div className="mag-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      {/* ── HEADER ── */}
      <header className="mag-header">
        <div className="mag-header-left">
          <Link to="/afrique" className="mag-back">
            <ChevLeft s={11} /> Articles
          </Link>
        </div>
        <Link to="/" className="mag-header-brand">
          Ai<span>frica</span>
        </Link>
        <div className="mag-header-right">
          <span className="mag-issue-tag">{article.category}</span>
        </div>
      </header>

      {/* ── HERO SPLIT ── */}
      <section className="mag-hero">
        {/* Left text panel */}
        <div
          className="mag-hero-text"
          data-num={String(article.id).padStart(2, '0')}
        >
          <div className="mag-hero-top">
            {/* Kicker */}
            <div className="mag-kicker">
              <div className="mag-kicker-bar" />
              <span className="mag-kicker-text">{article.category}</span>
            </div>

            {/* Title */}
            <h1 className="mag-title">{article.title}</h1>

            {/* Meta block */}
            <div className="mag-hero-meta">
              <div className="mag-meta-row">
                <span className="mag-meta-icon"><CalIco /></span>
                <span className="mag-meta-label">Date</span>
                <span>{article.date}</span>
              </div>
              <div className="mag-meta-row">
                <span className="mag-meta-icon"><PinIco /></span>
                <span className="mag-meta-label">Lieu</span>
                <span>{article.location}</span>
              </div>
              <div className="mag-meta-row">
                <span className="mag-meta-icon"><ClockIco /></span>
                <span className="mag-meta-label">Lecture</span>
                <span>{article.readTime} min</span>
              </div>
            </div>
          </div>

          {/* Excerpt */}
          <div className="mag-hero-bottom">
            <p className="mag-excerpt">
              {sections.find(s => s.type === 'para')?.text.slice(0, 200)}…
            </p>
          </div>
        </div>

        {/* Right image panel */}
        <div className="mag-hero-image-wrap">
          <img src={article.image} alt={article.title} className="mag-hero-img" />
          <div className="mag-image-overlay">
            <div className="mag-image-overlay-cat">{article.category}</div>
            <div className="mag-image-overlay-num">
              {String(article.id).padStart(2, '0')}
            </div>
          </div>
        </div>
      </section>

      {/* ── BODY ── */}
      <div className="mag-body">
        {/* Left decorative rail */}
        <div className="mag-rail">
          <span className="mag-rail-marker">Aifrica · {article.date}</span>
          <div className="mag-rail-dot" />
          <div className="mag-rail-line" />
          <div className="mag-rail-dot" />
        </div>

        {/* Article text */}
        <main className="mag-content">
          {sections.map((s, i) => {
            if (s.type === 'heading') return (
              <h2 key={i} className="mag-sec-heading">{s.text}</h2>
            );
            /* First paragraph gets drop cap */
            if (i === 0) return (
              <p key={i} className="mag-first-para">{s.text}</p>
            );
            /* Insert pull quote after 2nd para */
            if (i === 2) return (
              <React.Fragment key={i}>
                <p className="mag-para">{s.text}</p>
                <blockquote className="mag-pull-quote">
                  <p className="mag-pull-quote-text">{pullQuote}</p>
                </blockquote>
              </React.Fragment>
            );
            return <p key={i} className="mag-para">{s.text}</p>;
          })}

          {/* Divider */}
          <div className="mag-divider">
            <div className="mag-divider-line" />
            <div className="mag-divider-ornament" />
            <div className="mag-divider-line" />
          </div>

          {/* Share */}
          <div className="mag-share">
            <span className="mag-share-label">Partager cet article</span>
            <div className="mag-share-btns">
              <button className="mag-share-btn" aria-label="Partager"><ShareIco /></button>
              <button className="mag-share-btn" aria-label="Sauvegarder"><BookIco /></button>
              <button className="mag-share-btn" aria-label="Imprimer"><PrintIco /></button>
            </div>
          </div>
        </main>

        {/* Sidebar */}
        <aside className="mag-sidebar">
          {/* Stat highlight */}
          <div className="mag-sidebar-block">
            <div className="mag-sidebar-title">À la une</div>
            <div className="mag-sidebar-stat">
              <span className="mag-sidebar-stat-num">{article.readTime}</span>
              <span className="mag-sidebar-stat-label">Minutes de lecture</span>
            </div>
          </div>

          {/* Info */}
          <div className="mag-sidebar-block">
            <div className="mag-sidebar-title">Détails</div>
            <div className="mag-info-item">
              <span className="mag-info-ico"><CalIco s={15} /></span>
              <div>
                <span className="mag-info-k">Publié le</span>
                <span className="mag-info-v">{article.date}</span>
              </div>
            </div>
            <div className="mag-info-item">
              <span className="mag-info-ico"><PinIco s={15} /></span>
              <div>
                <span className="mag-info-k">Localisation</span>
                <span className="mag-info-v">{article.location}</span>
              </div>
            </div>
            <div className="mag-info-item">
              <span className="mag-info-ico"><ClockIco s={15} /></span>
              <div>
                <span className="mag-info-k">Durée</span>
                <span className="mag-info-v">{article.readTime} minutes</span>
              </div>
            </div>
          </div>

          {/* Tags */}
          {article.tags && (
            <div className="mag-sidebar-block">
              <div className="mag-sidebar-title">Thèmes</div>
              <div className="mag-tag-cloud">
                {article.tags.map((t, i) => (
                  <span key={i} className="mag-tag">{t}</span>
                ))}
              </div>
            </div>
          )}

          {/* Reading progress */}
          <div className="mag-sidebar-block">
            <div className="mag-sidebar-title">Progression</div>
            <div className="mag-progress-widget">
              <div className="mag-progress-row">
                <span className="mag-progress-pct-label">Lu</span>
                <span className="mag-progress-pct-val">{Math.round(progress)}%</span>
              </div>
              <div className="mag-progress-bar">
                <div
                  className="mag-progress-bar-inner"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* ── NAVIGATION FOOTER ── */}
      <nav className="mag-nav-footer" aria-label="Navigation articles">
        <div className="mag-nav-inner">
          {prev ? (
            <Link to={`/article/${prev.id}`} className="mag-nav-item">
              <div className="mag-nav-dir">
                <span className="mag-nav-arr"><ChevLeft /></span> Précédent
              </div>
              <img src={prev.image} alt="" className="mag-nav-thumb" />
              <span className="mag-nav-ttl">{prev.title}</span>
            </Link>
          ) : <div />}

          <Link to="/afrique" className="mag-nav-item mag-nav-center">
            <div className="mag-nav-grid-btn"><GridIco /></div>
            <span className="mag-nav-grid-label">Tous les articles</span>
          </Link>

          {next ? (
            <Link to={`/article/${next.id}`} className="mag-nav-item" style={{ textAlign: 'right' }}>
              <div className="mag-nav-dir" style={{ justifyContent: 'flex-end' }}>
                Suivant <span className="mag-nav-arr"><ChevRight /></span>
              </div>
              <img src={next.image} alt="" className="mag-nav-thumb" style={{ marginLeft: 'auto' }} />
              <span className="mag-nav-ttl">{next.title}</span>
            </Link>
          ) : <div />}
        </div>
      </nav>
    </div>
  );
}