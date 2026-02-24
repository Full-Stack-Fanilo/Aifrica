import React, { useState, useEffect } from "react";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;800&family=DM+Sans:wght@300;400;500;600;700&display=swap');

  :root {
    --ink:       #0f2537;
    --ink-mid:   #1a3a52;
    --ink-soft:  #6b7280;
    --cream:     #f8f9fa;
    --warm:      #eef2f7;
    --terra:     #1a3a52;
    --terra-lt:  #d4a017;
    --gold:      #f4c430;
    --sand:      #fde68a;
    --white:     #ffffff;
    --border:    #e5e7eb;

    --font-d:    'Playfair Display', Georgia, serif;
    --font-ui:   'DM Sans', system-ui, sans-serif;
    --ease:      cubic-bezier(0.16, 1, 0.3, 1);
  }

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  html { scroll-behavior: smooth; }

  .pl-root {
    font-family: var(--font-ui);
    background: var(--cream);
    color: var(--ink);
    overflow-x: hidden;
  }

  /* ─── NAVBAR ─── */
  .pl-nav {
    position: fixed;
    top: 0; left: 0; right: 0;
    z-index: 200;
    background: rgba(28, 25, 23, 0.96);
    backdrop-filter: blur(16px);
    border-bottom: 1px solid rgba(232, 213, 188, 0.1);
    padding: 0 52px;
  }
  .pl-nav-inner {
    max-width: 1320px;
    margin: 0 auto;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .pl-nav-logo {
    font-family: var(--font-d);
    font-size: 1.7rem;
    font-weight: 600;
    font-style: italic;
    color: var(--white);
    letter-spacing: 0.02em;
  }
  .pl-nav-logo span { color: var(--terra-lt); }
  .pl-nav-links {
    display: flex;
    align-items: center;
    gap: 36px;
    list-style: none;
  }
  .pl-nav-links a {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.5);
    text-decoration: none;
    transition: color 0.2s;
  }
  .pl-nav-links a:hover { color: var(--terra-lt); }
  .pl-nav-cta {
    background: var(--terra);
    color: #fff;
    border: none;
    font-family: var(--font-ui);
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    padding: 10px 22px;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s;
  }
  .pl-nav-cta:hover { background: var(--terra-lt); transform: translateY(-1px); }

  /* ─── HERO ─── */
  .pl-hero {
    min-height: 100vh;
    background: var(--ink);
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    overflow: hidden;
    padding: 120px 52px 80px;
  }

  /* Decorative grid */
  .pl-hero::before {
    content: '';
    position: absolute; inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
    background-size: 72px 72px;
    pointer-events: none;
  }
  /* Glow */
  .pl-hero::after {
    content: '';
    position: absolute;
    top: 30%; left: 55%;
    width: 600px; height: 600px;
    background: radial-gradient(circle, rgba(185,74,26,0.18) 0%, transparent 65%);
    border-radius: 50%;
    pointer-events: none;
  }

  .pl-hero-inner {
    max-width: 1320px;
    margin: 0 auto;
    width: 100%;
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: 80px;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  .pl-hero-tag {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-size: 0.6rem;
    font-weight: 400;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--terra-lt);
    margin-bottom: 28px;
    animation: fadeUp 0.7s var(--ease) both;
  }
  .pl-hero-tag::before {
    content: '';
    display: block;
    width: 24px; height: 2px;
    background: var(--terra-lt);
  }

  .pl-hero-h1 {
    font-family: var(--font-d);
    font-size: clamp(3.5rem, 6vw, 6.5rem);
    font-weight: 600;
    color: var(--white);
    line-height: 1.0;
    letter-spacing: -0.01em;
    margin-bottom: 28px;
    animation: fadeUp 0.7s 0.1s var(--ease) both;
  }
  .pl-hero-h1 em {
    font-style: italic;
    color: var(--terra-lt);
  }

  .pl-hero-desc {
    font-size: 0.95rem;
    line-height: 1.85;
    color: rgba(255,255,255,0.45);
    max-width: 440px;
    margin-bottom: 44px;
    animation: fadeUp 0.7s 0.18s var(--ease) both;
  }

  .pl-hero-actions {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
    animation: fadeUp 0.7s 0.26s var(--ease) both;
  }
  .pl-btn-primary {
    background: var(--terra);
    color: #fff;
    border: none;
    font-family: var(--font-ui);
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 15px 32px;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
    display: inline-flex;
    align-items: center;
    gap: 10px;
  }
  .pl-btn-primary:hover {
    background: var(--terra-lt);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(185,74,26,0.35);
  }
  .pl-btn-ghost {
    background: transparent;
    color: rgba(255,255,255,0.6);
    border: 1px solid rgba(255,255,255,0.18);
    font-family: var(--font-ui);
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 15px 32px;
    border-radius: 4px;
    cursor: pointer;
    transition: border-color 0.2s, color 0.2s;
  }
  .pl-btn-ghost:hover {
    border-color: var(--terra-lt);
    color: var(--terra-lt);
  }

  /* Stats column */
  .pl-hero-right {
    animation: fadeUp 0.7s 0.2s var(--ease) both;
  }
  .pl-stat-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2px;
    background: rgba(255,255,255,0.06);
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid rgba(255,255,255,0.08);
  }
  .pl-stat-cell {
    padding: 32px 28px;
    background: rgba(28,25,23,0.6);
    transition: background 0.2s;
  }
  .pl-stat-cell:hover { background: rgba(185,74,26,0.12); }
  .pl-stat-num {
    font-family: var(--font-d);
    font-size: 3rem;
    font-weight: 600;
    color: var(--terra-lt);
    line-height: 1;
    margin-bottom: 8px;
  }
  .pl-stat-label {
    font-size: 0.68rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.35);
    line-height: 1.4;
  }
  .pl-hero-scroll {
    margin-top: 56px;
    text-align: center;
  }
  .pl-scroll-label {
    font-size: 0.6rem;
    font-weight: 600;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.2);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
  .pl-scroll-line {
    width: 1px; height: 40px;
    background: linear-gradient(to bottom, rgba(185,74,26,0.6), transparent);
    animation: scrollPulse 1.8s ease-in-out infinite;
  }
  @keyframes scrollPulse {
    0%, 100% { opacity: 0.3; transform: scaleY(1); }
    50% { opacity: 1; transform: scaleY(1.2); }
  }

  /* ─── TICKER ─── */
  .pl-ticker {
    background: var(--terra);
    overflow: hidden;
    padding: 9px 0;
  }
  .pl-ticker-track {
    display: inline-flex;
    white-space: nowrap;
    animation: ticker 30s linear infinite;
  }
  .pl-ticker-item {
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
  .pl-ticker-sep {
    width: 4px; height: 4px;
    border-radius: 50%;
    background: rgba(255,255,255,0.35);
  }
  @keyframes ticker {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

  /* ─── SECTION COMMON ─── */
  .pl-section-tag {
    font-size: 0.6rem;
    font-weight: 400;
    letter-spacing: 0.26em;
    text-transform: uppercase;
    color: var(--terra);
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 14px;
  }
  .pl-section-tag::before {
    content: '';
    width: 20px; height: 2px;
    background: var(--terra);
    flex-shrink: 0;
  }
  .pl-section-h2 {
    font-family: var(--font-d);
    font-size: clamp(2rem, 3.5vw, 3.2rem);
    font-weight: 600;
    color: var(--ink);
    line-height: 1.1;
  }
  .pl-section-h2-white {
    font-family: var(--font-d);
    font-size: clamp(2rem, 3.5vw, 3.2rem);
    font-weight: 600;
    color: var(--white);
    line-height: 1.1;
  }

  /* ─── MISSION SECTION ─── */
  .pl-mission {
    padding: 96px 52px;
    background: var(--white);
    border-bottom: 1px solid var(--border);
  }
  .pl-mission-inner {
    max-width: 1320px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 96px;
    align-items: start;
  }
  .pl-mission-left {}
  .pl-mission-body {
    margin-top: 24px;
    font-size: 0.9rem;
    line-height: 1.9;
    color: var(--ink-soft);
  }
  .pl-mission-body p + p { margin-top: 16px; }
  .pl-mission-quote {
    margin-top: 32px;
    padding: 20px 24px;
    border-left: 3px solid var(--terra);
    background: var(--warm);
    border-radius: 0 6px 6px 0;
  }
  .pl-mission-quote p {
    font-family: var(--font-d);
    font-size: 1.15rem;
    font-style: italic;
    font-weight: 600;
    color: var(--ink);
    line-height: 1.5;
  }
  .pl-mission-right {
    background: var(--ink);
    border-radius: 10px;
    padding: 44px 40px;
    position: relative;
    overflow: hidden;
  }
  .pl-mission-right::before {
    content: '';
    position: absolute;
    top: -60px; right: -60px;
    width: 220px; height: 220px;
    background: radial-gradient(circle, rgba(185,74,26,0.2), transparent 70%);
    border-radius: 50%;
  }
  .pl-mission-right-title {
    font-family: var(--font-d);
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--white);
    margin-bottom: 32px;
    position: relative;
  }
  .pl-feat-list { list-style: none; display: flex; flex-direction: column; gap: 18px; position: relative; }
  .pl-feat-item {
    display: flex;
    gap: 14px;
    align-items: flex-start;
  }
  .pl-feat-icon {
    width: 28px; height: 28px;
    background: rgba(185,74,26,0.18);
    border: 1px solid rgba(185,74,26,0.35);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--terra-lt);
    font-size: 0.72rem;
    font-weight: 400;
    flex-shrink: 0;
    margin-top: 1px;
  }
  .pl-feat-title {
    font-size: 0.82rem;
    font-weight: 600;
    color: rgba(255,255,255,0.85);
    margin-bottom: 3px;
  }
  .pl-feat-sub {
    font-size: 0.72rem;
    color: rgba(255,255,255,0.38);
    line-height: 1.5;
  }

  /* ─── SOLUTIONS ─── */
  .pl-solutions {
    padding: 96px 52px;
    background: var(--cream);
    border-bottom: 1px solid var(--border);
  }
  .pl-solutions-inner { max-width: 1320px; margin: 0 auto; }
  .pl-solutions-hd {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    margin-bottom: 56px;
    gap: 32px;
    flex-wrap: wrap;
  }
  .pl-solutions-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
  .pl-sol-card {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 8px;
    padding: 32px 28px;
    position: relative;
    overflow: hidden;
    transition: transform 0.25s var(--ease), box-shadow 0.25s, border-color 0.25s;
  }
  .pl-sol-card::after {
    content: '';
    position: absolute;
    bottom: 0; left: 0; right: 0;
    height: 3px;
    background: var(--terra);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s var(--ease);
  }
  .pl-sol-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 32px rgba(28,25,23,0.1);
    border-color: var(--sand);
  }
  .pl-sol-card:hover::after { transform: scaleX(1); }
  .pl-sol-icon {
    width: 48px; height: 48px;
    background: var(--warm);
    border: 1px solid var(--border);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    color: var(--terra);
  }
  .pl-sol-title {
    font-family: var(--font-d);
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--ink);
    margin-bottom: 10px;
  }
  .pl-sol-desc {
    font-size: 0.82rem;
    line-height: 1.75;
    color: var(--ink-soft);
    margin-bottom: 20px;
  }
  .pl-sol-feats {
    list-style: none;
    border-top: 1px solid var(--border);
    padding-top: 16px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  .pl-sol-feats li {
    font-size: 0.75rem;
    color: var(--ink-soft);
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .pl-sol-feats li::before {
    content: '';
    width: 4px; height: 4px;
    background: var(--terra);
    border-radius: 50%;
    flex-shrink: 0;
  }

  /* ─── PROCESS (DARK) ─── */
  .pl-process {
    padding: 96px 52px;
    background: var(--ink);
    border-bottom: 1px solid rgba(255,255,255,0.06);
    position: relative;
    overflow: hidden;
  }
  .pl-process::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
    background-size: 72px 72px;
    pointer-events: none;
  }
  .pl-process-inner {
    max-width: 1320px;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
  .pl-process-hd {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: end;
    margin-bottom: 64px;
  }
  .pl-process-hd .pl-section-tag { color: var(--terra-lt); }
  .pl-process-hd .pl-section-tag::before { background: var(--terra-lt); }
  .pl-process-hd-right {
    font-size: 0.85rem;
    line-height: 1.8;
    color: rgba(255,255,255,0.38);
  }
  .pl-timeline {
    display: flex;
    flex-direction: column;
    gap: 0;
    position: relative;
  }
  .pl-timeline::before {
    content: '';
    position: absolute;
    left: 21px; top: 22px; bottom: 22px;
    width: 1px;
    background: linear-gradient(to bottom, var(--terra), rgba(185,74,26,0.05));
  }
  .pl-tl-item {
    display: flex;
    gap: 32px;
    padding-bottom: 32px;
    align-items: flex-start;
  }
  .pl-tl-item:last-child { padding-bottom: 0; }
  .pl-tl-dot {
    width: 42px; height: 42px;
    background: var(--ink);
    border: 2px solid var(--terra);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font-d);
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--terra-lt);
    flex-shrink: 0;
    position: relative;
    z-index: 1;
  }
  .pl-tl-body {
    flex: 1;
    background: rgba(255,255,255,0.04);
    border: 1px solid rgba(255,255,255,0.07);
    border-radius: 8px;
    padding: 22px 26px;
    transition: background 0.2s, border-color 0.2s;
  }
  .pl-tl-body:hover {
    background: rgba(185,74,26,0.08);
    border-color: rgba(185,74,26,0.2);
  }
  .pl-tl-title {
    font-family: var(--font-d);
    font-size: 1.15rem;
    font-weight: 600;
    color: var(--white);
    margin-bottom: 8px;
  }
  .pl-tl-desc {
    font-size: 0.8rem;
    line-height: 1.78;
    color: rgba(255,255,255,0.4);
  }

  /* ─── FAQ ─── */
  .pl-faq {
    padding: 96px 52px;
    background: var(--warm);
    border-bottom: 1px solid var(--border);
  }
  .pl-faq-inner {
    max-width: 1320px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 360px 1fr;
    gap: 80px;
    align-items: start;
  }
  .pl-faq-left {
    position: sticky;
    top: 90px;
  }
  .pl-faq-left-desc {
    margin-top: 20px;
    font-size: 0.85rem;
    line-height: 1.8;
    color: var(--ink-soft);
    margin-bottom: 28px;
  }
  .pl-faq-contact {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--terra);
    text-decoration: none;
    transition: gap 0.2s;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0;
  }
  .pl-faq-contact:hover { gap: 14px; }
  .pl-faq-list { display: flex; flex-direction: column; gap: 10px; }
  .pl-faq-item {
    background: var(--white);
    border: 1px solid var(--border);
    border-radius: 7px;
    overflow: hidden;
    transition: border-color 0.2s, box-shadow 0.2s;
  }
  .pl-faq-item.open {
    border-color: rgba(185,74,26,0.3);
    box-shadow: 0 4px 16px rgba(28,25,23,0.07);
  }
  .pl-faq-q {
    width: 100%;
    background: none;
    border: none;
    padding: 18px 22px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    cursor: pointer;
    font-family: var(--font-ui);
    font-size: 0.83rem;
    font-weight: 600;
    color: var(--ink);
    text-align: left;
    transition: color 0.2s;
  }
  .pl-faq-q:hover { color: var(--terra); }
  .pl-faq-chevron {
    width: 26px; height: 26px;
    background: var(--warm);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: var(--terra);
    flex-shrink: 0;
    transition: transform 0.3s var(--ease);
    font-weight: 400;
  }
  .pl-faq-item.open .pl-faq-chevron { transform: rotate(45deg); }
  .pl-faq-answer {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.4s var(--ease);
  }
  .pl-faq-item.open .pl-faq-answer { max-height: 300px; }
  .pl-faq-answer-inner {
    margin: 0 22px;
    padding: 16px 0 20px;
    border-top: 1px solid var(--border);
    font-size: 0.8rem;
    line-height: 1.85;
    color: var(--ink-soft);
  }

  /* ─── CTA SECTION ─── */
  .pl-cta {
    padding: 120px 52px;
    background: var(--ink);
    position: relative;
    overflow: hidden;
  }
  .pl-cta::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(ellipse 70% 80% at 50% 50%, rgba(185,74,26,0.12) 0%, transparent 65%);
  }
  .pl-cta::after {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(185,74,26,0.5), transparent);
  }
  .pl-cta-inner {
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    z-index: 1;
  }
  .pl-cta-tag {
    font-size: 0.6rem;
    font-weight: 400;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--terra-lt);
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 24px;
  }
  .pl-cta-tag::before, .pl-cta-tag::after {
    content: '';
    width: 20px; height: 1px;
    background: var(--terra-lt);
  }
  .pl-cta-h2 {
    font-family: var(--font-d);
    font-size: clamp(2.5rem, 5vw, 4.5rem);
    font-weight: 600;
    color: var(--white);
    line-height: 1.05;
    margin-bottom: 24px;
  }
  .pl-cta-h2 em {
    font-style: italic;
    color: var(--terra-lt);
  }
  .pl-cta-desc {
    font-size: 0.88rem;
    line-height: 1.85;
    color: rgba(255,255,255,0.4);
    margin-bottom: 48px;
  }
  .pl-cta-actions {
    display: flex;
    gap: 14px;
    justify-content: center;
    flex-wrap: wrap;
  }
  .pl-cta-btn-main {
    background: var(--terra);
    color: #fff;
    border: none;
    font-family: var(--font-ui);
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 16px 38px;
    border-radius: 4px;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s, box-shadow 0.2s;
  }
  .pl-cta-btn-main:hover {
    background: var(--terra-lt);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(185,74,26,0.4);
  }
  .pl-cta-btn-ghost {
    background: transparent;
    color: rgba(255,255,255,0.55);
    border: 1px solid rgba(255,255,255,0.15);
    font-family: var(--font-ui);
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 16px 38px;
    border-radius: 4px;
    cursor: pointer;
    transition: border-color 0.2s, color 0.2s;
  }
  .pl-cta-btn-ghost:hover {
    border-color: var(--terra-lt);
    color: var(--terra-lt);
  }

  /* ─── FOOTER ─── */
  .pl-footer {
    background: var(--ink);
    border-top: 1px solid rgba(255,255,255,0.06);
    padding: 28px 52px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
  }
  .pl-footer-brand {
    font-family: var(--font-d);
    font-size: 1.1rem;
    font-style: italic;
    color: rgba(255,255,255,0.3);
  }
  .pl-footer-brand span { color: var(--terra-lt); }
  .pl-footer-copy {
    font-size: 0.62rem;
    color: rgba(255,255,255,0.2);
    letter-spacing: 0.06em;
  }

  /* ─── ANIMATIONS ─── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ─── RESPONSIVE ─── */
  @media (max-width: 960px) {
    .pl-nav { padding: 0 24px; }
    .pl-hero { padding: 100px 24px 60px; }
    .pl-hero-inner { grid-template-columns: 1fr; gap: 48px; }
    .pl-stat-grid { grid-template-columns: 1fr 1fr; }
    .pl-mission { padding: 64px 24px; }
    .pl-mission-inner { grid-template-columns: 1fr; gap: 48px; }
    .pl-solutions { padding: 64px 24px; }
    .pl-solutions-grid { grid-template-columns: 1fr 1fr; }
    .pl-process { padding: 64px 24px; }
    .pl-process-hd { grid-template-columns: 1fr; gap: 24px; }
    .pl-faq { padding: 64px 24px; }
    .pl-faq-inner { grid-template-columns: 1fr; gap: 40px; }
    .pl-faq-left { position: static; }
    .pl-cta { padding: 80px 24px; }
    .pl-footer { padding: 24px; }
    .pl-nav-links { display: none; }
  }
  @media (max-width: 640px) {
    .pl-solutions-grid { grid-template-columns: 1fr; }
    .pl-stat-grid { grid-template-columns: 1fr 1fr; }
    .pl-solutions-hd { flex-direction: column; align-items: flex-start; }
  }
`;

/* ─── ICONS ─── */
const Icon = ({ d }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
);

/* ─── DATA ─── */
const solutions = [
  {
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
    title: "IA Générative",
    desc: "Créez du contenu unique et personnalisé avec des modèles d'IA générative adaptés au contexte africain.",
    feats: ["Génération de texte multilingue", "Création d'images et designs", "Traduction automatique avancée", "Synthèse vocale naturelle"],
  },
  {
    icon: "M3 3v18h18M18 17V9M13 17V5M8 17v-3",
    title: "Analyse de Données",
    desc: "Transformez vos données brutes en insights pertinents pour prendre des décisions éclairées.",
    feats: ["Analyse prédictive", "Visualisation interactive", "Reporting automatisé", "Détection d'anomalies"],
  },
  {
    icon: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    title: "IA Agentique",
    desc: "Déployez des agents intelligents autonomes pour automatiser vos processus métier critiques.",
    feats: ["Agents conversationnels", "Automatisation intelligente", "Apprentissage continu", "Intégration multi-plateforme"],
  },
  {
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
    title: "Sécurité IA",
    desc: "Protégez vos systèmes et vos données avec nos solutions de sécurité basées sur l'IA.",
    feats: ["Détection de menaces", "Analyse comportementale", "Sécurité prédictive", "Réponse automatique"],
  },
  {
    icon: "M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M9 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
    title: "Personnalisation",
    desc: "Offrez des expériences uniques à chaque utilisateur avec l'IA adaptative en temps réel.",
    feats: ["Recommandations personnalisées", "Segmentation dynamique", "Optimisation temps réel", "Profils intelligents"],
  },
  {
    icon: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
    title: "Optimisation",
    desc: "Maximisez l'efficacité de vos opérations et réduisez les coûts avec l'IA d'optimisation.",
    feats: ["Optimisation des ressources", "Planification intelligente", "Réduction des coûts", "Amélioration continue"],
  },
];

const timeline = [
  { n: "01", title: "Analyse & Conseil", desc: "Nous étudions vos besoins et élaborons une stratégie IA sur mesure. Notre équipe analyse vos processus actuels et identifie les opportunités d'optimisation les plus impactantes." },
  { n: "02", title: "Développement", desc: "Nos ingénieurs développent des solutions IA personnalisées en utilisant les technologies les plus adaptées à votre contexte, avec une méthodologie agile garantissant des livraisons rapides." },
  { n: "03", title: "Intégration", desc: "Nous intégrons nos solutions dans votre écosystème technologique existant de façon transparente, sans perturber vos opérations en cours." },
  { n: "04", title: "Formation des équipes", desc: "Nous formons vos collaborateurs à l'utilisation des nouvelles solutions pour maximiser l'adoption et l'efficacité. Des sessions personnalisées sont organisées selon vos besoins." },
  { n: "05", title: "Support Continu", desc: "Notre équipe reste disponible pour la maintenance, les mises à jour et l'amélioration continue. Un support réactif est disponible pour tous nos clients." },
];

const faqs = [
  { q: "Qu'est-ce que la plateforme AIFRICA ?", a: "AIFRICA est une plateforme d'intelligence artificielle complète conçue spécifiquement pour le marché africain. Elle offre des solutions IA personnalisées pour automatiser les processus, analyser les données et prendre des décisions plus intelligentes." },
  { q: "Quels types d'entreprises peuvent utiliser AIFRICA ?", a: "Notre plateforme s'adapte à tous les secteurs : finance, santé, éducation, agriculture, commerce, logistique et bien d'autres. Que vous soyez une startup, une PME ou une grande entreprise, nous avons des solutions adaptées à vos besoins." },
  { q: "Comment commencer avec AIFRICA ?", a: "Le processus est simple : contactez-nous pour une consultation gratuite, notre équipe analyse vos besoins, nous vous proposons une solution personnalisée, et après validation, nous procédons à l'implémentation." },
  { q: "Mes données sont-elles sécurisées ?", a: "Absolument. La sécurité est notre priorité. Vos données sont chiffrées de bout en bout, stockées dans des centres de données sécurisés, et nous respectons toutes les réglementations de protection des données, y compris le RGPD." },
  { q: "Quel est le coût des solutions AIFRICA ?", a: "Nos tarifs sont flexibles et adaptés à votre budget. Nous proposons différents modèles : abonnement mensuel, paiement à l'utilisation, ou projets sur mesure. Contactez-nous pour un devis personnalisé." },
  { q: "Quel est le délai de mise en place ?", a: "Le délai varie selon la complexité du projet. Pour les solutions standards, la mise en place prend de 2 à 4 semaines. Pour les projets personnalisés, le délai moyen est de 2 à 3 mois." },
  { q: "Offrez-vous une formation aux équipes ?", a: "Oui, nous proposons des programmes de formation complets pour vos équipes. De la sensibilisation à l'IA jusqu'à l'expertise technique, nos formateurs assurent que votre personnel maîtrise parfaitement nos solutions." },
  { q: "Dans quels pays intervenez-vous ?", a: "Nous intervenons dans plus de 15 pays africains : Côte d'Ivoire, Sénégal, Cameroun, Maroc, Kenya, Nigeria, Ghana, Madagascar et bien d'autres. Nous disposons d'experts locaux dans chaque région." },
];

const tickerItems = ["IA Générative", "Analyse de Données", "IA Agentique", "Sécurité IA", "Personnalisation", "Optimisation", "Afrique & Innovation", "Transformation Digitale"];

export default function PlateformeAifrica() {
  const [faqOpen, setFaqOpen] = useState(null);

  return (
    <>
      <style>{styles}</style>
      <div className="pl-root">

        {/* ── NAVBAR ── */}
        <nav className="pl-nav">
          <div className="pl-nav-inner">
            <div className="pl-nav-logo">AI<span>FRICA</span></div>
            <ul className="pl-nav-links">
              {["Solutions", "Processus", "FAQ", "Contact"].map(l => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
            <button className="pl-nav-cta">Démo Gratuite</button>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section className="pl-hero">
          <div className="pl-hero-inner">
            <div>
              <div className="pl-hero-tag">Plateforme IA · Afrique</div>
              <h1 className="pl-hero-h1">
                L'Intelligence<br />
                Artificielle au<br />
                Service de <em>l'Afrique</em>
              </h1>
              <p className="pl-hero-desc">
                Transformez vos opérations, accélérez votre croissance et prenez
                des décisions éclairées grâce à nos solutions IA conçues pour
                le marché africain.
              </p>
              <div className="pl-hero-actions">
                <button className="pl-btn-primary">
                  Commencer Gratuitement
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
                <button className="pl-btn-ghost">Voir la Démo</button>
              </div>
            </div>

            <div className="pl-hero-right">
              <div className="pl-stat-grid">
                {[
                  { num: "500+", label: "Entreprises accompagnées" },
                  { num: "15+", label: "Pays africains couverts" },
                  { num: "98%", label: "Satisfaction client" },
                  { num: "3×", label: "ROI moyen constaté" },
                ].map((s, i) => (
                  <div key={i} className="pl-stat-cell">
                    <div className="pl-stat-num">{s.num}</div>
                    <div className="pl-stat-label">{s.label}</div>
                  </div>
                ))}
              </div>
              <div className="pl-hero-scroll">
                <div className="pl-scroll-label">
                  <div className="pl-scroll-line" />
                  Découvrir
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TICKER ── */}
        <div className="pl-ticker">
          <div className="pl-ticker-track">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="pl-ticker-item">
                {item}<span className="pl-ticker-sep" />
              </span>
            ))}
          </div>
        </div>

        {/* ── MISSION ── */}
        <section className="pl-mission">
          <div className="pl-mission-inner">
            <div className="pl-mission-left">
              <div className="pl-section-tag">Notre Mission</div>
              <h2 className="pl-section-h2">La Data et l'IA au service des entreprises africaines</h2>
              <div className="pl-mission-body">
                <p>L'Afrique entre dans une nouvelle ère économique. Portées par une jeunesse dynamique, une urbanisation accélérée et une connectivité en pleine expansion, les entreprises du continent font face à des opportunités immenses — mais aussi à des défis de taille.</p>
                <p>AIFRICA est spécialisée dans l'accompagnement des organisations africaines vers la transformation numérique par la Data et l'Intelligence Artificielle. Notre mission est de mettre ces technologies au service de la réalité des entreprises africaines, pour des résultats concrets, mesurables et durables.</p>
                <p>Nous croyons que la Data et l'IA ne sont pas réservées aux grandes entreprises mondiales. Elles sont accessibles, adaptables, et peuvent devenir un levier de croissance puissant pour toute organisation — quelle que soit sa taille ou son secteur d'activité.</p>
              </div>
              <div className="pl-mission-quote">
                <p>AIFRICA, c'est l'intelligence de demain, au service de l'Afrique d'aujourd'hui.</p>
              </div>
            </div>

            <div className="pl-mission-right">
              <div className="pl-mission-right-title">Pourquoi AIFRICA ?</div>
              <ul className="pl-feat-list">
                {[
                  ["✓", "Solutions adaptées aux réalités africaines", "Contexte local, infrastructure disponible, langues parlées"],
                  ["✓", "Équipe d'experts certifiés en IA & Data", "Senior data scientists et ingénieurs ML expérimentés"],
                  ["✓", "Accompagnement de bout en bout", "Du conseil à la mise en production, nous sommes là"],
                  ["✓", "ROI mesurable et garanti", "Résultats chiffrés dès les 90 premiers jours"],
                  ["✓", "Sécurité et conformité", "Données hébergées localement, conformité RGPD garantie"],
                ].map(([icon, title, sub], i) => (
                  <li key={i} className="pl-feat-item">
                    <div className="pl-feat-icon">{icon}</div>
                    <div>
                      <div className="pl-feat-title">{title}</div>
                      <div className="pl-feat-sub">{sub}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── SOLUTIONS ── */}
        <section className="pl-solutions">
          <div className="pl-solutions-inner">
            <div className="pl-solutions-hd">
              <div>
                <div className="pl-section-tag">Nos Solutions</div>
                <h2 className="pl-section-h2">Une suite complète de solutions IA</h2>
              </div>
              <p style={{ maxWidth: 380, fontSize: "0.85rem", lineHeight: 1.8, color: "var(--ink-soft)" }}>
                Des technologies de pointe adaptées aux défis spécifiques du marché africain, déployées avec expertise.
              </p>
            </div>
            <div className="pl-solutions-grid">
              {solutions.map((s, i) => (
                <div key={i} className="pl-sol-card">
                  <div className="pl-sol-icon">
                    <Icon d={s.icon} />
                  </div>
                  <h3 className="pl-sol-title">{s.title}</h3>
                  <p className="pl-sol-desc">{s.desc}</p>
                  <ul className="pl-sol-feats">
                    {s.feats.map((f, j) => <li key={j}>{f}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── PROCESS (DARK) ── */}
        <section className="pl-process">
          <div className="pl-process-inner">
            <div className="pl-process-hd">
              <div>
                <div className="pl-section-tag" style={{ color: "var(--terra-lt)" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                    <span style={{ width: 20, height: 2, background: "var(--terra-lt)", display: "inline-block" }} />
                    Notre Processus
                  </span>
                </div>
                <h2 className="pl-section-h2-white">Comment nous travaillons ensemble</h2>
              </div>
              <p className="pl-process-hd-right">
                Une méthodologie éprouvée, pensée pour minimiser les risques et maximiser la valeur à chaque étape de votre transformation IA. Résultats garantis dès les 90 premiers jours.
              </p>
            </div>
            <div className="pl-timeline">
              {timeline.map((item, i) => (
                <div key={i} className="pl-tl-item">
                  <div className="pl-tl-dot">{item.n}</div>
                  <div className="pl-tl-body">
                    <h3 className="pl-tl-title">{item.title}</h3>
                    <p className="pl-tl-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="pl-faq">
          <div className="pl-faq-inner">
            <div className="pl-faq-left">
              <div className="pl-section-tag">FAQ</div>
              <h2 className="pl-section-h2">Questions fréquentes</h2>
              <p className="pl-faq-left-desc">
                Vous ne trouvez pas la réponse à votre question ? Notre équipe est disponible du lundi au vendredi pour vous accompagner.
              </p>
              <button className="pl-faq-contact">
                Contacter un expert
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
            </div>
            <div className="pl-faq-list">
              {faqs.map((faq, i) => (
                <div key={i} className={`pl-faq-item ${faqOpen === i ? "open" : ""}`}>
                  <button className="pl-faq-q" onClick={() => setFaqOpen(faqOpen === i ? null : i)}>
                    {faq.q}
                    <span className="pl-faq-chevron">+</span>
                  </button>
                  <div className="pl-faq-answer">
                    <div className="pl-faq-answer-inner">{faq.a}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="pl-cta">
          <div className="pl-cta-inner">
            <div className="pl-cta-tag">Passez à l'action</div>
            <h2 className="pl-cta-h2">
              Prêt à transformer votre entreprise<br />
              avec <em>l'Intelligence Artificielle</em> ?
            </h2>
            <p className="pl-cta-desc">
              Rejoignez des centaines d'entreprises africaines qui utilisent déjà AIFRICA pour accélérer leur croissance, optimiser leurs opérations et innover dans leur secteur.
            </p>
            <div className="pl-cta-actions">
              <button className="pl-cta-btn-main">Demander une Démo Gratuite</button>
              <button className="pl-cta-btn-ghost">Parler à un Expert</button>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="pl-footer">
          <div className="pl-footer-brand">AI<span>FRICA</span></div>
          <p className="pl-footer-copy">© 2026 AIFRICA · L'intelligence de demain au service de l'Afrique d'aujourd'hui</p>
        </footer>

      </div>
    </>
  );
}