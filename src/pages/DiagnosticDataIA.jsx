import React, { useEffect, useState, useRef } from "react";

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

:root {
  --ink: #0f2537;
  --ink-soft: #1a3a52;
  --sand: #f8f9fa;
  --sand-warm: #f0f4f7;
  --amber: #d4a017;
  --amber-bright: #e8b020;
  --amber-glow: #f4c430;
  --cream: #f8f9fa;
  --muted: #6b7280;
  --muted-light: #9ca3af;
  --border: rgba(212, 160, 23, 0.18);
  --border-ink: rgba(26, 58, 82, 0.1);
  --white: #ffffff;
  --shadow-warm: 0 4px 16px rgba(26, 58, 82, 0.12);
  --shadow-deep: 0 8px 32px rgba(26, 58, 82, 0.16);
  --shadow-card: 0 2px 8px rgba(26, 58, 82, 0.08);
  --gradient-accent: linear-gradient(135deg, #d4a017 0%, #f4c430 100%);
  --gradient-hero: linear-gradient(135deg, #1a3a52 0%, #0f2537 100%);
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; -webkit-font-smoothing: antialiased; }

/* ANIMATIONS */
@keyframes rise {
  from { opacity: 0; transform: translateY(32px); }
  to   { opacity: 1; transform: translateY(0); }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes glowPulse {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.08); }
}
@keyframes orbit {
  from { transform: rotate(0deg) translateX(90px) rotate(0deg); }
  to   { transform: rotate(360deg) translateX(90px) rotate(-360deg); }
}
@keyframes lineGrow {
  from { transform: scaleX(0); }
  to   { transform: scaleX(1); }
}
@keyframes countUp {
  from { opacity: 0; transform: translateY(12px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* BASE */
.ai { font-family: 'Inter', sans-serif; background: var(--cream); color: var(--ink); overflow-x: hidden; }
.ai h1, .ai h2, .ai h3, .ai h4 { font-family: 'Inter', sans-serif; }
.ai em, .ai .serif { font-family: 'Inter', sans-serif; font-style: normal; }

/* navbar removed */

/* ─── HERO ─── */
.ai-hero {
  min-height: 100vh;
  background: var(--ink);
  position: relative; overflow: hidden;
  display: flex; align-items: center;
  padding-top: 0;
}

/* Noise texture overlay */
.ai-hero::before {
  content: '';
  position: absolute; inset: 0; z-index: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
  background-size: 200px;
  opacity: 0.6;
  pointer-events: none;
}

.ai-hero-glow-1 {
  position: absolute; width: 640px; height: 640px; border-radius: 50%;
  background: radial-gradient(circle, rgba(212,160,23,0.22) 0%, transparent 65%);
  top: -180px; right: -100px; z-index: 1;
  animation: glowPulse 7s ease-in-out infinite;
}
.ai-hero-glow-2 {
  position: absolute; width: 480px; height: 480px; border-radius: 50%;
  background: radial-gradient(circle, rgba(212,160,23,0.1) 0%, transparent 65%);
  bottom: -120px; left: 80px; z-index: 1;
  animation: glowPulse 9s ease-in-out infinite 2s;
}

/* Grid lines in hero */
.ai-hero-grid {
  position: absolute; inset: 0; z-index: 1;
  background-image:
    linear-gradient(rgba(212,160,23,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(212,160,23,0.04) 1px, transparent 1px);
  background-size: 60px 60px;
}

.ai-hero-inner {
  position: relative; z-index: 2;
  max-width: 1280px; margin: 0 auto; padding: 100px 52px;
  display: grid; grid-template-columns: 1fr 480px; gap: 100px; align-items: center;
}

.ai-hero-tag {
  display: inline-flex; align-items: center; gap: 10px;
  font-family: 'Inter', sans-serif;
  font-size: 11px; font-weight: 600; letter-spacing: 2.5px; text-transform: uppercase;
  color: var(--amber-glow);
  margin-bottom: 36px;
  animation: fadeIn 0.8s ease both;
}
.ai-hero-tag-line { width: 32px; height: 1px; background: var(--amber); }

.ai-hero-h1 {
  font-size: clamp(42px, 5.5vw, 72px);
  font-weight: 800; letter-spacing: -2.5px;
  line-height: 0.95;
  color: var(--white);
  margin-bottom: 30px;
  animation: rise 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both;
}
.ai-hero-h1 .italic-gold {
  font-family: 'Inter', sans-serif;
  color: var(--amber-glow);
  letter-spacing: -1px;
}
.ai-hero-h1 .line-break { display: block; }

.ai-hero-desc {
  font-size: 17px; line-height: 1.85;
  color: rgba(255,255,255,0.55);
  font-weight: 300; max-width: 500px;
  margin-bottom: 52px;
  animation: rise 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both;
}

.ai-hero-actions {
  display: flex; align-items: center; gap: 20px; flex-wrap: wrap;
  animation: rise 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both;
}
.ai-btn-hero {
  font-family: 'Inter', sans-serif;
  font-size: 14px; font-weight: 700; letter-spacing: 0.3px;
  background: var(--amber); color: var(--ink);
  border: none; cursor: pointer;
  padding: 16px 36px; border-radius: 50px;
  display: flex; align-items: center; gap: 10px;
  transition: all 0.3s;
  box-shadow: 0 8px 32px rgba(212,160,23,0.4);
}
.ai-btn-hero:hover { background: var(--amber-glow); transform: translateY(-2px); box-shadow: 0 16px 48px rgba(212,160,23,0.5); }
.ai-btn-ghost {
  font-family: 'Inter', sans-serif;
  font-size: 14px; font-weight: 500;
  color: rgba(255,255,255,0.5);
  background: transparent; border: none; cursor: pointer;
  display: flex; align-items: center; gap: 8px;
  transition: color 0.2s;
}
.ai-btn-ghost:hover { color: var(--amber-glow); }

/* Hero right panel */
.ai-hero-panel {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(212, 160, 23, 0.2);
  border-radius: 24px;
  padding: 0;
  overflow: hidden;
  animation: rise 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.4s both;
  backdrop-filter: blur(12px);
}
.ai-hero-panel-head {
  padding: 28px 32px;
  border-bottom: 1px solid rgba(212, 160, 23, 0.12);
  font-family: 'Inter', sans-serif;
  font-size: 12px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase;
  color: var(--amber);
}
.ai-hero-steps { padding: 8px 0; }
.ai-hero-step {
  display: flex; align-items: center; gap: 20px;
  padding: 20px 32px;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  transition: background 0.2s;
}
.ai-hero-step:last-child { border-bottom: none; }
.ai-hero-step:hover { background: rgba(212, 160, 23, 0.06); }
.ai-step-num {
  width: 36px; height: 36px; border-radius: 50%; flex-shrink: 0;
  border: 1px solid rgba(212, 160, 23, 0.35);
  display: flex; align-items: center; justify-content: center;
  font-family: 'Inter', sans-serif;
  font-size: 18px; color: var(--amber);
}
.ai-step-info h5 { font-size: 14px; font-weight: 600; color: var(--white); margin-bottom: 2px; font-family: 'Inter', sans-serif; }
.ai-step-info p { font-size: 12px; color: rgba(255,255,255,0.4); font-weight: 300; }
.ai-hero-panel-foot {
  padding: 24px 32px;
  border-top: 1px solid rgba(212, 160, 23, 0.12);
  background: rgba(212, 160, 23, 0.06);
  display: flex; align-items: center; justify-content: space-between;
}
.ai-hero-panel-foot .label { font-size: 12px; color: rgba(255,255,255,0.4); }
.ai-hero-panel-foot .value {
  font-family: 'Inter', sans-serif;
  font-size: 22px; color: var(--amber-glow);
}

/* ─── STATS BAR ─── */
.ai-stats { background: var(--sand-warm); border-bottom: 1px solid var(--border-ink); }
.ai-stats-inner {
  max-width: 1280px; margin: 0 auto;
  display: grid; grid-template-columns: repeat(4, 1fr);
}
.ai-stat {
  padding: 48px 40px;
  border-right: 1px solid var(--border-ink);
  position: relative; overflow: hidden;
  transition: background 0.3s;
}
.ai-stat:last-child { border-right: none; }
.ai-stat:hover { background: rgba(212, 160, 23, 0.06); }
.ai-stat-num {
  font-family: 'Inter', sans-serif;
  font-size: 56px; line-height: 1;
  color: var(--ink);
  margin-bottom: 8px;
}
.ai-stat-num sub { font-family: 'Inter', sans-serif; font-size: 20px; font-style: normal; color: var(--amber); }
.ai-stat-label { font-size: 13px; color: var(--muted); font-weight: 400; }
.ai-stat-bar {
  position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, var(--amber), var(--amber-glow));
  transform: scaleX(0); transform-origin: left;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}
.ai-stat:hover .ai-stat-bar { transform: scaleX(1); }

/* ─── SECTIONS ─── */
.ai-section { padding: 120px 52px; }
.ai-section.cream { background: var(--cream); }
.ai-section.sand { background: var(--sand); }
.ai-section.sand-warm { background: var(--sand-warm); }
.ai-section.white { background: var(--white); }
.ai-section.ink { background: var(--ink); }
.ai-container { max-width: 1280px; margin: 0 auto; }

.ai-eyebrow {
  display: flex; align-items: center; gap: 14px;
  font-family: 'Inter', sans-serif;
  font-size: 11px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase;
  color: var(--amber); margin-bottom: 20px;
}
.ai-eyebrow-bar { width: 32px; height: 1px; background: var(--amber); flex-shrink: 0; }
.ai-eyebrow.dark { color: var(--amber-glow); }
.ai-eyebrow.dark .ai-eyebrow-bar { background: var(--amber-glow); }

.ai-h2 {
  font-size: clamp(38px, 4vw, 60px);
  font-weight: 800; letter-spacing: -2px; line-height: 1.0;
  color: var(--ink); margin-bottom: 20px;
}
.ai-h2.dark { color: var(--white); }
.ai-h2 em { font-family: 'Inter', sans-serif; font-weight: 400; letter-spacing: -1px; color: var(--amber); }
.ai-sub { font-size: 16px; color: var(--muted); line-height: 1.8; max-width: 520px; font-weight: 300; }
.ai-sub.dark { color: rgba(255,255,255,0.5); }

/* ─── CHALLENGES ─── */
.ai-chal-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 100px; align-items: start; }
.ai-chal-header { margin-bottom: 48px; }
.ai-chal-list { display: flex; flex-direction: column; gap: 10px; }
.ai-chal-item {
  display: flex; align-items: flex-start; gap: 20px;
  padding: 22px 28px; border-radius: 14px;
  background: var(--white); border: 1px solid var(--border-ink);
  transition: all 0.3s; cursor: default;
}
.ai-chal-item:hover { border-color: var(--amber); transform: translateX(6px); box-shadow: var(--shadow-card); }
.ai-chal-ico {
  width: 42px; height: 42px; border-radius: 10px; flex-shrink: 0;
  background: var(--sand-warm); display: flex; align-items: center; justify-content: center;
  font-size: 20px;
}
.ai-chal-text h5 { font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 700; color: var(--ink); margin-bottom: 4px; }
.ai-chal-text p { font-size: 13px; color: var(--muted); line-height: 1.55; }

/* Risk panel */
.ai-risk-panel {
  position: sticky; top: 84px;
  background: var(--ink); border-radius: 24px; padding: 52px 44px;
  border: 1px solid rgba(212, 160, 23, 0.2);
  overflow: hidden;
}
.ai-risk-panel::before {
  content: '';
  position: absolute; width: 300px; height: 300px; border-radius: 50%;
  background: radial-gradient(circle, rgba(212,160,23,0.15) 0%, transparent 70%);
  top: -100px; right: -80px; pointer-events: none;
}
.ai-risk-panel h3 {
  font-family: 'Inter', sans-serif;
  font-size: 32px; color: var(--white); margin-bottom: 20px; line-height: 1.2;
  position: relative; z-index: 1;
}
.ai-risk-panel p { font-size: 15px; color: rgba(255,255,255,0.5); line-height: 1.8; margin-bottom: 36px; position: relative; z-index: 1; }
.ai-risk-panel p strong { color: var(--amber-glow); font-weight: 500; }
.ai-risk-tags { display: flex; flex-wrap: wrap; gap: 8px; position: relative; z-index: 1; }
.ai-tag {
  font-family: 'Inter', sans-serif;
  font-size: 11px; font-weight: 600; letter-spacing: 0.5px;
  padding: 8px 18px; border-radius: 40px;
  border: 1px solid rgba(200, 135, 26, 0.3);
  color: var(--amber-glow);
  background: rgba(200, 135, 26, 0.08);
}

/* ─── ANALYSIS CARDS ─── */
.ai-analysis-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 64px; }
.ai-acard {
  background: rgba(255,255,255,0.04); border: 1px solid rgba(212,160,23,0.15);
  border-radius: 20px; padding: 40px 32px;
  position: relative; overflow: hidden; transition: all 0.35s;
}
.ai-acard:hover { background: rgba(212,160,23,0.07); transform: translateY(-8px); border-color: rgba(212,160,23,0.4); }
.ai-acard::before {
  content: attr(data-n);
  font-family: 'Inter', sans-serif;
  font-size: 80px; color: rgba(212,160,23,0.08);
  position: absolute; top: 0; right: 16px; line-height: 1.1;
  transition: color 0.3s;
}
.ai-acard:hover::before { color: rgba(212,160,23,0.15); }
.ai-acard-ico { font-size: 32px; margin-bottom: 22px; }
.ai-acard-title { font-family: 'Inter', sans-serif; font-size: 18px; font-weight: 700; color: var(--white); margin-bottom: 20px; }
.ai-acard-list { list-style: none; display: flex; flex-direction: column; gap: 11px; }
.ai-acard-list li {
  font-size: 13px; color: rgba(255,255,255,0.5); line-height: 1.5;
  display: flex; align-items: flex-start; gap: 10px;
}
.ai-acard-list li::before {
  content: ''; width: 4px; height: 4px; border-radius: 50%;
  background: var(--amber); flex-shrink: 0; margin-top: 7px;
}

/* ─── METHODOLOGY ─── */
.ai-method-grid {
  display: grid; grid-template-columns: repeat(4, 1fr);
  gap: 0; margin-top: 72px;
  border: 1px solid var(--border-ink); border-radius: 20px; overflow: hidden;
}
.ai-mstep {
  padding: 48px 36px; position: relative;
  border-right: 1px solid var(--border-ink);
  cursor: pointer; transition: all 0.3s; background: var(--white);
}
.ai-mstep:last-child { border-right: none; }
.ai-mstep:hover, .ai-mstep.active { background: var(--ink); }
.ai-mstep::after {
  content: ''; position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, var(--amber), var(--amber-glow));
  transform: scaleX(0); transform-origin: left; transition: transform 0.4s;
}
.ai-mstep:hover::after, .ai-mstep.active::after { transform: scaleX(1); }
.ai-mstep-n {
  font-family: 'Inter', sans-serif;
  font-size: 48px; line-height: 1; margin-bottom: 24px;
  color: rgba(26,58,82,0.12);
  transition: color 0.3s;
}
.ai-mstep:hover .ai-mstep-n, .ai-mstep.active .ai-mstep-n { color: var(--amber); }
.ai-mstep-title {
  font-family: 'Inter', sans-serif; font-size: 17px; font-weight: 700;
  color: var(--ink); margin-bottom: 12px; transition: color 0.3s;
}
.ai-mstep:hover .ai-mstep-title, .ai-mstep.active .ai-mstep-title { color: var(--white); }
.ai-mstep-desc { font-size: 13px; color: var(--muted); line-height: 1.7; margin-bottom: 20px; transition: color 0.3s; }
.ai-mstep:hover .ai-mstep-desc, .ai-mstep.active .ai-mstep-desc { color: rgba(255,255,255,0.5); }
.ai-mchips { display: flex; flex-wrap: wrap; gap: 6px; }
.ai-mchip {
  font-family: 'Inter', sans-serif; font-size: 10px; font-weight: 600; letter-spacing: 0.5px;
  padding: 4px 12px; border-radius: 20px;
  background: var(--sand); border: 1px solid var(--border-ink);
  color: var(--muted); transition: all 0.3s;
}
.ai-mstep:hover .ai-mchip, .ai-mstep.active .ai-mchip {
  background: rgba(212, 160, 23, 0.12); border-color: rgba(212,160,23,0.3); color: var(--amber-glow);
}

/* ─── DELIVERABLES ─── */
.ai-deliv-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; margin-top: 64px; }
.ai-deliv-list { display: flex; flex-direction: column; gap: 12px; }
.ai-deliv-item {
  display: grid; grid-template-columns: 56px 1fr; align-items: center; gap: 20px;
  padding: 22px 28px; border-radius: 14px;
  border: 1px solid var(--border-ink); background: var(--white);
  transition: all 0.3s;
}
.ai-deliv-item:hover { border-color: var(--amber); box-shadow: var(--shadow-warm); transform: translateX(8px); }
.ai-deliv-ico {
  width: 44px; height: 44px; border-radius: 12px; flex-shrink: 0;
  background: linear-gradient(135deg, var(--ink), var(--ink-soft));
  display: flex; align-items: center; justify-content: center; font-size: 20px;
}
.ai-deliv-text { font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 600; color: var(--ink); }

/* Visual orb */
.ai-deliv-vis {
  position: relative; display: flex; align-items: center; justify-content: center;
  height: 380px;
  background: var(--ink); border-radius: 28px; overflow: hidden;
  border: 1px solid rgba(212, 160, 23, 0.15);
}
.ai-deliv-vis::before {
  content: '';
  position: absolute; width: 320px; height: 320px; border-radius: 50%;
  background: radial-gradient(circle, rgba(212,160,23,0.18) 0%, transparent 70%);
  animation: glowPulse 4s ease-in-out infinite;
}
.ai-deliv-center { position: relative; z-index: 2; text-align: center; }
.ai-deliv-big {
  font-family: 'Inter', sans-serif;
  font-size: 112px; line-height: 1; color: var(--amber);
}
.ai-deliv-label { font-size: 13px; color: rgba(255,255,255,0.4); margin-top: 4px; letter-spacing: 1px; }
.ai-deliv-dots { position: absolute; inset: 0; }
.ai-deliv-dot-ring {
  position: absolute; border-radius: 50%; border: 1px dashed rgba(212,160,23,0.15);
  top: 50%; left: 50%; transform: translate(-50%, -50%);
}
.ai-orbit-dot {
  position: absolute; width: 8px; height: 8px; border-radius: 50%; background: var(--amber);
  top: 50%; left: 50%; margin: -4px;
  animation: orbit linear infinite;
  box-shadow: 0 0 12px rgba(212,160,23,0.6);
}

/* ─── CASE STUDY ─── */
.ai-case {
  border-radius: 28px; overflow: hidden;
  border: 1px solid var(--border-ink);
  box-shadow: var(--shadow-deep);
}
.ai-case-head {
  background: var(--ink); padding: 56px 60px;
  display: flex; align-items: flex-start; justify-content: space-between; gap: 32px;
  border-bottom: 1px solid rgba(212, 160, 23, 0.2);
}
.ai-case-head-left h2 {
  font-family: 'Inter', sans-serif;
  font-size: 42px; color: var(--white); margin-bottom: 8px;
}
.ai-case-head-left p { font-size: 15px; color: rgba(255,255,255,0.4); }
.ai-case-badge {
  font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 1px;
  background: rgba(212,160,23,0.15); color: var(--amber-glow);
  border: 1px solid rgba(212,160,23,0.3);
  padding: 10px 22px; border-radius: 40px; flex-shrink: 0;
}
.ai-case-cols { display: grid; grid-template-columns: repeat(4, 1fr); background: var(--white); }
.ai-case-col { padding: 40px 36px; border-right: 1px solid var(--border-ink); }
.ai-case-col:last-child { border-right: none; }
.ai-case-col-tag {
  font-family: 'Inter', sans-serif;
  font-size: 10px; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase;
  color: var(--amber); margin-bottom: 20px;
}
.ai-case-col p, .ai-case-col li { font-size: 14px; color: var(--muted); line-height: 1.75; }
.ai-case-col ul, .ai-case-col ol { padding-left: 16px; }
.ai-case-col li { margin-bottom: 6px; }
.ai-case-result { color: var(--ink) !important; font-weight: 500 !important; }

/* ─── DURATION ─── */
.ai-dur-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 28px; margin-top: 64px; }
.ai-dur-card {
  padding: 52px 48px; border-radius: 20px;
  border: 1px solid var(--border-ink);
  transition: all 0.3s;
}
.ai-dur-card.light { background: var(--white); }
.ai-dur-card.dark { background: var(--ink); border-color: rgba(212,160,23,0.15); }
.ai-dur-card:hover { box-shadow: var(--shadow-deep); }
.ai-dur-ico { font-size: 36px; margin-bottom: 24px; display: block; }
.ai-dur-card h3 {
  font-family: 'Inter', sans-serif; font-size: 22px; font-weight: 800;
  margin-bottom: 16px; letter-spacing: -0.5px;
}
.ai-dur-card.light h3 { color: var(--ink); }
.ai-dur-card.dark h3 { color: var(--white); }
.ai-dur-card p { font-size: 15px; line-height: 1.75; }
.ai-dur-card.light p { color: var(--muted); }
.ai-dur-card.dark p { color: rgba(255,255,255,0.45); }
.ai-dur-list { list-style: none; display: flex; flex-direction: column; gap: 16px; }
.ai-dur-list li { display: flex; align-items: flex-start; gap: 14px; font-size: 14px; color: rgba(255,255,255,0.5); line-height: 1.55; }
.ai-dur-check { font-size: 14px; color: var(--amber); flex-shrink: 0; font-weight: 700; }

/* ─── FOR WHO ─── */
.ai-target-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 14px; margin-top: 64px; }
.ai-target-card {
  padding: 40px 20px; border-radius: 20px; text-align: center;
  background: rgba(255,255,255,0.04); border: 1px solid rgba(212,160,23,0.12);
  cursor: default; transition: all 0.35s;
}
.ai-target-card:hover {
  background: rgba(212,160,23,0.1); border-color: rgba(212,160,23,0.4);
  transform: translateY(-10px); box-shadow: 0 20px 48px rgba(15,37,55,0.3);
}
.ai-tcard-ico { font-size: 40px; margin-bottom: 16px; display: block; }
.ai-tcard-label { font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600; color: rgba(255,255,255,0.6); line-height: 1.4; }
.ai-target-card:hover .ai-tcard-label { color: var(--amber-glow); }

/* ─── WHY ─── */
.ai-why-layout { display: grid; grid-template-columns: 1fr 440px; gap: 100px; align-items: center; }
.ai-why-list { display: flex; flex-direction: column; gap: 12px; margin-top: 44px; }
.ai-why-row {
  display: flex; align-items: flex-start; gap: 20px;
  padding: 24px 28px; border-radius: 14px;
  border: 1px solid var(--border-ink); background: var(--white);
  transition: all 0.3s;
}
.ai-why-row:hover { border-color: var(--amber); box-shadow: var(--shadow-warm); }
.ai-why-check {
  width: 24px; height: 24px; border-radius: 50%; flex-shrink: 0; margin-top: 1px;
  background: var(--ink); color: var(--amber);
  display: flex; align-items: center; justify-content: center;
  font-size: 11px; font-weight: 900;
}
.ai-why-text { font-size: 15px; color: var(--muted); line-height: 1.65; }
.ai-why-text strong { color: var(--ink); font-weight: 700; }

/* Brand visual */
.ai-brand {
  background: var(--ink); border-radius: 28px; padding: 60px 48px; text-align: center;
  border: 1px solid rgba(212,160,23,0.15); position: relative; overflow: hidden;
}
.ai-brand::before {
  content: '';
  position: absolute; width: 280px; height: 280px; border-radius: 50%;
  background: radial-gradient(circle, rgba(212,160,23,0.12) 0%, transparent 70%);
  bottom: -80px; right: -60px; pointer-events: none;
}
.ai-brand-wordmark {
  font-family: 'Inter', sans-serif; font-size: 64px; font-weight: 800;
  letter-spacing: -2px; color: var(--white); line-height: 1;
  margin-bottom: 4px; position: relative; z-index: 1;
}
.ai-brand-wordmark span { color: var(--amber); }
.ai-brand-sub {
  font-size: 12px; color: rgba(255,255,255,0.3); letter-spacing: 3px; text-transform: uppercase;
  margin-bottom: 44px; position: relative; z-index: 1;
}
.ai-brand-divider { width: 40px; height: 1px; background: var(--amber); margin: 20px auto 40px; }
.ai-brand-vals { display: flex; flex-direction: column; gap: 12px; position: relative; z-index: 1; }
.ai-brand-val {
  font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 600;
  color: rgba(255,255,255,0.55);
  display: flex; align-items: center; justify-content: center; gap: 10px;
}
.ai-brand-val::before { content: '◆'; color: var(--amber); font-size: 7px; }

/* ─── FINAL CTA ─── */
.ai-cta {
  background: var(--ink); padding: 160px 52px; text-align: center;
  position: relative; overflow: hidden;
}
.ai-cta-glow {
  position: absolute; width: 800px; height: 800px; border-radius: 50%;
  background: radial-gradient(circle, rgba(212,160,23,0.14) 0%, transparent 65%);
  top: 50%; left: 50%; transform: translate(-50%, -50%);
  animation: glowPulse 6s ease-in-out infinite;
}
.ai-cta-inner { position: relative; z-index: 1; max-width: 640px; margin: 0 auto; }
.ai-cta-eyebrow {
  font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 3px;
  text-transform: uppercase; color: var(--amber); margin-bottom: 24px;
}
.ai-cta-title {
  font-size: clamp(48px, 7vw, 80px); font-weight: 800; letter-spacing: -2.5px;
  color: var(--white); margin-bottom: 20px; line-height: 0.95;
}
.ai-cta-title .gold { color: var(--amber-glow); }
.ai-cta-title .italic {
  font-family: 'Inter', sans-serif; font-weight: 400;
  letter-spacing: -1px;
}
.ai-cta-sub { font-size: 18px; color: rgba(255,255,255,0.4); margin-bottom: 56px; font-weight: 300; }
.ai-cta-btn {
  font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 800; letter-spacing: 0.3px;
  display: inline-flex; align-items: center; gap: 14px;
  background: var(--amber); color: var(--ink);
  border: none; cursor: pointer;
  padding: 22px 56px; border-radius: 50px;
  transition: all 0.3s;
  box-shadow: 0 16px 48px rgba(212,160,23,0.45);
}
.ai-cta-btn:hover { background: var(--amber-glow); transform: translateY(-4px); box-shadow: 0 28px 72px rgba(212,160,23,0.55); }

/* ─── FOOTER ─── */
.ai-footer {
  background: #0a1e2e; padding: 40px 52px;
  display: flex; align-items: center; justify-content: space-between;
  border-top: 1px solid rgba(212,160,23,0.08);
}
.ai-footer-logo {
  font-family: 'Inter', sans-serif; font-size: 20px; font-weight: 800; letter-spacing: -0.5px;
  color: rgba(255,255,255,0.5);
}
.ai-footer-logo span { color: var(--amber); }
.ai-footer-text { font-size: 13px; color: rgba(255,255,255,0.2); }

/* ─── RESPONSIVE ─── */
@media (max-width: 1100px) {
  .ai-hero-inner { grid-template-columns: 1fr; gap: 60px; }
  .ai-chal-layout { grid-template-columns: 1fr; gap: 48px; }
  .ai-analysis-grid { grid-template-columns: 1fr 1fr; }
  .ai-method-grid { grid-template-columns: 1fr 1fr; }
  .ai-deliv-layout { grid-template-columns: 1fr; }
  .ai-case-cols { grid-template-columns: 1fr 1fr; }
  .ai-target-grid { grid-template-columns: repeat(3, 1fr); }
  .ai-why-layout { grid-template-columns: 1fr; gap: 48px; }
  .ai-stats-inner { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 640px) {
  .ai-section { padding: 80px 24px; }
  .ai-hero-inner { padding: 80px 24px; }

  .ai-analysis-grid { grid-template-columns: 1fr; }
  .ai-method-grid { grid-template-columns: 1fr; border-radius: 20px; }
  .ai-mstep { border-right: none; border-bottom: 1px solid var(--border-ink); }
  .ai-case-cols { grid-template-columns: 1fr; }
  .ai-case-head { padding: 36px 28px; flex-direction: column; }
  .ai-target-grid { grid-template-columns: 1fr 1fr; }
  .ai-dur-layout { grid-template-columns: 1fr; }
  .ai-stats-inner { grid-template-columns: 1fr; }
  .ai-footer { flex-direction: column; gap: 10px; text-align: center; }
}
`;

function useCounter(target, duration = 1400) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 4);
        setVal(Math.floor(ease * target));
        if (progress < 1) requestAnimationFrame(tick);
        else setVal(target);
      };
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target, duration]);
  return [val, ref];
}

function AnimCounter({ target, suffix = "" }) {
  const [val, ref] = useCounter(target);
  return <span ref={ref}>{val}{suffix}</span>;
}

export default function DiagnosticDataIA() {
  const [activeStep, setActiveStep] = useState(null);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = CSS;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const steps = [
    { n: "1", title: "Audit", desc: "Analyse complète de vos flux de données, systèmes et processus opérationnels.", chips: ["Flux data", "Systèmes"] },
    { n: "2", title: "Évaluation", desc: "Diagnostic approfondi de maturité technique et organisationnelle.", chips: ["Technique", "Organisation"] },
    { n: "3", title: "Opportunités", desc: "Qualification des cas d'usage IA par impact, faisabilité et ROI estimé.", chips: ["Impact", "ROI", "Coût"] },
    { n: "4", title: "Roadmap", desc: "Feuille de route stratégique priorisée sur 3, 6 et 12 mois.", chips: ["0–3m", "3–6m", "6–12m"] },
  ];

  const analysisCards = [
    { ico: "🗃️", n: "01", title: "Vos données", items: ["Sources existantes", "Formats & structures", "Qualité & cohérence", "Accessibilité"] },
    { ico: "⚙️", n: "02", title: "Vos outils", items: ["ERP & CRM", "Logiciels métiers", "Tableurs & fichiers", "Infrastructure IT"] },
    { ico: "🛡️", n: "03", title: "Maturité Data & IA", items: ["Gouvernance", "Sécurité des données", "Compétences internes", "Processus décisionnels"] },
    { ico: "💡", n: "04", title: "Opportunités IA", items: ["Cas d'usage clés", "Quick wins identifiés", "ROI potentiel chiffré", "Risques & contraintes"] },
  ];

  const deliverables = [
    { ico: "📋", txt: "Rapport de diagnostic détaillé" },
    { ico: "🗺️", txt: "Cartographie complète de vos données" },
    { ico: "📌", txt: "Plan d'action priorisé" },
    { ico: "⚡", txt: "Identification des quick wins" },
    { ico: "🔧", txt: "Recommandations technologiques réalistes" },
    { ico: "🎯", txt: "Vision stratégique alignée business" },
  ];

  const challenges = [
    { ico: "📊", t: "Données dispersées", sub: "Entre Excel, ERP, CRM et papier, sans synchronisation." },
    { ico: "📋", t: "Reporting inexistant", sub: "Absence de tableaux de bord et d'indicateurs fiables." },
    { ico: "🎯", t: "Décisions sans données", sub: "Pilotage à vue, sans KPIs de performance clairs." },
    { ico: "🤖", t: "IA : par où commencer ?", sub: "Ambition d'IA sans feuille de route ni méthode." },
    { ico: "💸", t: "Investissements mal ciblés", sub: "Outils achetés sans stratégie ni mesure de retour." },
  ];

  const targets = [
    { ico: "🏢", label: "PME en croissance" },
    { ico: "🚀", label: "Startups ambitieuses" },
    { ico: "🏛️", label: "Grandes entreprises" },
    { ico: "🏗️", label: "Administrations publiques" },
    { ico: "🔗", label: "Organisations data-first" },
  ];

  const whyItems = [
    { bold: "Approche africaine", rest: " — adaptée aux réalités locales et aux contextes spécifiques du continent." },
    { bold: "Stratégie + opérationnel", rest: " — vision long terme combinée à un pragmatisme terrain immédiat." },
    { bold: "Impact mesurable", rest: " — chaque recommandation est orientée vers un résultat concret et quantifié." },
    { bold: "Honnêteté radicale", rest: " — aucune promesse irréaliste, aucun effet de mode technologique." },
    { bold: "Trajectoire maîtrisée", rest: " — progression progressive et sécurisée, sans rupture brutale." },
  ];

  return (
    <div className="ai">
      {/* ── HERO ── */}
      <section className="ai-hero">
        <div className="ai-hero-grid" />
        <div className="ai-hero-glow-1" />
        <div className="ai-hero-glow-2" />
        <div className="ai-hero-inner">
          <div>
            <div className="ai-hero-tag">
              <span className="ai-hero-tag-line" />
              Porte d'entrée stratégique d'Aifrica
            </div>
            <h1 className="ai-hero-h1">
              Clarifiez votre potentiel <span className="italic-gold">Data & IA</span> avant d'investir.
            </h1>
            <p className="ai-hero-desc">
              Le Diagnostic Aifrica identifie vos opportunités concrètes, vos risques réels et votre trajectoire réaliste de transformation — en 2 à 4 semaines, sans jargon.
            </p>
            <div className="ai-hero-actions">
              <button className="ai-btn-hero">
                Demander mon diagnostic <span>→</span>
              </button>
              <button className="ai-btn-ghost">
                <span>▶</span> Découvrir la méthode
              </button>
            </div>
          </div>

          <div className="ai-hero-panel">
            <div className="ai-hero-panel-head">Notre approche en 4 étapes</div>
            <div className="ai-hero-steps">
              {[
                { n: "1", t: "Audit complet", d: "Données, outils et processus" },
                { n: "2", t: "Évaluation de maturité", d: "Technique & organisationnelle" },
                { n: "3", t: "Cas d'usage IA", d: "Priorisés par impact et ROI" },
                { n: "4", t: "Roadmap stratégique", d: "0 à 12 mois, actionnable" },
              ].map((s, i) => (
                <div key={i} className="ai-hero-step">
                  <div className="ai-step-num">{s.n}</div>
                  <div className="ai-step-info">
                    <h5>{s.t}</h5>
                    <p>{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="ai-hero-panel-foot">
              <span className="label">Durée indicative</span>
              <span className="value">2 – 4 semaines</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="ai-stats">
        <div className="ai-stats-inner">
          {[
            { num: 4, suf: "", label: "axes d'analyse couverts" },
            { num: 6, suf: "", label: "livrables stratégiques inclus" },
            { num: 12, suf: " mois", label: "de roadmap opérationnelle" },
            { num: 100, suf: "%", label: "orienté impact mesurable" },
          ].map((s, i) => (
            <div key={i} className="ai-stat">
              <div className="ai-stat-num">
                <AnimCounter target={s.num} /><sub>{s.suf}</sub>
              </div>
              <div className="ai-stat-label">{s.label}</div>
              <div className="ai-stat-bar" />
            </div>
          ))}
        </div>
      </div>

      {/* ── CHALLENGES ── */}
      <section className="ai-section sand">
        <div className="ai-container">
          <div className="ai-chal-layout">
            <div>
              <div className="ai-chal-header">
                <div className="ai-eyebrow">
                  <span className="ai-eyebrow-bar" />
                  Pourquoi un diagnostic d'abord
                </div>
                <h2 className="ai-h2">Les défis courants<br />des organisations<br /><em>en Afrique</em></h2>
                <p className="ai-sub">La majorité des entreprises africaines partagent ces obstacles avant de lancer un projet IA ou data.</p>
              </div>
              <div className="ai-chal-list">
                {challenges.map((c, i) => (
                  <div key={i} className="ai-chal-item">
                    <div className="ai-chal-ico">{c.ico}</div>
                    <div className="ai-chal-text">
                      <h5>{c.t}</h5>
                      <p>{c.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="ai-risk-panel">
                <h3>Sans diagnostic,<br />quel est le vrai risque ?</h3>
                <p>
                  Budgets gaspillés sur des outils inadaptés. Projets IA sans suite. Équipes démotivées face à des promesses non tenues. Le diagnostic vous donne une vision claire <strong>avant</strong> d'investir quoi que ce soit.
                </p>
                <div className="ai-risk-tags">
                  {["Temps économisé", "Budget optimisé", "Risques maîtrisés", "Décisions éclairées"].map(t => (
                    <span key={t} className="ai-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ANALYSIS ── */}
      <section className="ai-section ink">
        <div className="ai-container">
          <div className="ai-eyebrow dark">
            <span className="ai-eyebrow-bar" />
            Notre périmètre d'analyse
          </div>
          <h2 className="ai-h2 dark">Ce que nous <em>analysons</em></h2>
          <p className="ai-sub dark">Quatre dimensions clés pour une vision complète et honnête de votre potentiel data et IA.</p>
          <div className="ai-analysis-grid">
            {analysisCards.map((c, i) => (
              <div key={i} className="ai-acard" data-n={c.n}>
                <div className="ai-acard-ico">{c.ico}</div>
                <div className="ai-acard-title">{c.title}</div>
                <ul className="ai-acard-list">
                  {c.items.map((item, j) => <li key={j}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY ── */}
      <section className="ai-section white">
        <div className="ai-container">
          <div className="ai-eyebrow">
            <span className="ai-eyebrow-bar" />
            Notre approche
          </div>
          <h2 className="ai-h2">Une méthodologie <em>éprouvée</em></h2>
          <p className="ai-sub">Structurée, rigoureuse et profondément adaptée aux réalités africaines. Cliquez sur chaque étape.</p>
          <div className="ai-method-grid">
            {steps.map((s, i) => (
              <div
                key={i}
                className={`ai-mstep${activeStep === i ? " active" : ""}`}
                onClick={() => setActiveStep(activeStep === i ? null : i)}
              >
                <div className="ai-mstep-n">{s.n}</div>
                <div className="ai-mstep-title">{s.title}</div>
                <div className="ai-mstep-desc">{s.desc}</div>
                <div className="ai-mchips">
                  {s.chips.map((c, j) => <span key={j} className="ai-mchip">{c}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DELIVERABLES ── */}
      <section className="ai-section sand-warm">
        <div className="ai-container">
          <div className="ai-eyebrow">
            <span className="ai-eyebrow-bar" />
            Vos livrables
          </div>
          <h2 className="ai-h2">Ce que vous <em>obtenez</em></h2>
          <div className="ai-deliv-layout">
            <div className="ai-deliv-list">
              {deliverables.map((d, i) => (
                <div key={i} className="ai-deliv-item">
                  <div className="ai-deliv-ico">{d.ico}</div>
                  <span className="ai-deliv-text">{d.txt}</span>
                </div>
              ))}
            </div>
            <div className="ai-deliv-vis">
              <div className="ai-deliv-dots">
                {[260, 200, 140].map((s, i) => (
                  <div key={s} className="ai-deliv-dot-ring" style={{ width: s, height: s }} />
                ))}
                <div className="ai-orbit-dot" style={{ animationDuration: "8s", marginLeft: "-4px" }} />
                <div className="ai-orbit-dot" style={{ animationDuration: "13s", animationDelay: "-4s", marginLeft: "-4px", opacity: 0.5 }} />
              </div>
              <div className="ai-deliv-center">
                <div className="ai-deliv-big">6</div>
                <div className="ai-deliv-label">livrables inclus</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CASE STUDY ── */}
      <section className="ai-section white">
        <div className="ai-container">
          <div className="ai-eyebrow">
            <span className="ai-eyebrow-bar" />
            Terrain africain
          </div>
          <h2 className="ai-h2" style={{ marginBottom: 48 }}>Un cas <em>concret</em></h2>
          <div className="ai-case">
            <div className="ai-case-head">
              <div className="ai-case-head-left">
                <h2>PME de distribution</h2>
                <p>Commerce de gros · Afrique de l'Ouest</p>
              </div>
              <span className="ai-case-badge">Cas réel</span>
            </div>
            <div className="ai-case-cols">
              <div className="ai-case-col">
                <div className="ai-case-col-tag">Problème</div>
                <p>Données de ventes et stocks dispersées entre Excel et logiciel de caisse, sans synchronisation ni visibilité en temps réel.</p>
              </div>
              <div className="ai-case-col">
                <div className="ai-case-col-tag">Diagnostic</div>
                <ul>
                  <li>Absence d'indicateurs fiables</li>
                  <li>Ruptures de stock fréquentes</li>
                  <li>Surstocks en basse saison</li>
                </ul>
              </div>
              <div className="ai-case-col">
                <div className="ai-case-col-tag">Recommandation</div>
                <ol>
                  <li>Structuration des données historiques</li>
                  <li>Création de KPIs simples et actionnables</li>
                  <li>Modèle de prévision progressif</li>
                </ol>
              </div>
              <div className="ai-case-col">
                <div className="ai-case-col-tag">Résultat attendu</div>
                <p className="ai-case-result">Réduction des ruptures, meilleure gestion de trésorerie, ROI mesurable dès 3 mois d'implémentation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DURATION ── */}
      <section className="ai-section sand">
        <div className="ai-container">
          <div className="ai-eyebrow">
            <span className="ai-eyebrow-bar" />
            Format & durée
          </div>
          <h2 className="ai-h2">Comment <em>ça se passe</em></h2>
          <div className="ai-dur-layout">
            <div className="ai-dur-card light">
              <span className="ai-dur-ico">⏱️</span>
              <h3>Durée indicative</h3>
              <p>2 à 4 semaines selon la taille de votre organisation et la disponibilité des données. Nous nous adaptons entièrement à votre rythme opérationnel.</p>
            </div>
            <div className="ai-dur-card dark">
              <span className="ai-dur-ico">📌</span>
              <h3>Format du diagnostic</h3>
              <ul className="ai-dur-list">
                {[
                  "Entretiens stratégiques avec vos décideurs clés",
                  "Analyse documentaire et revue des systèmes en place",
                  "Synthèse exécutive et rapport de maturité complet",
                  "Restitution claire et actionnée aux équipes dirigeantes",
                ].map((item, i) => (
                  <li key={i}><span className="ai-dur-check">✓</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOR WHO ── */}
      <section className="ai-section ink">
        <div className="ai-container">
          <div className="ai-eyebrow dark">
            <span className="ai-eyebrow-bar" />
            Pour qui
          </div>
          <h2 className="ai-h2 dark">Ce diagnostic est fait <em>pour vous</em></h2>
          <div className="ai-target-grid">
            {targets.map((t, i) => (
              <div key={i} className="ai-target-card">
                <span className="ai-tcard-ico">{t.ico}</span>
                <span className="ai-tcard-label">{t.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY AIFRICA ── */}
      <section className="ai-section white">
        <div className="ai-container">
          <div className="ai-why-layout">
            <div>
              <div className="ai-eyebrow">
                <span className="ai-eyebrow-bar" />
                Notre différence
              </div>
              <h2 className="ai-h2">Pourquoi <em>Aifrica</em> ?</h2>
              <div className="ai-why-list">
                {whyItems.map((w, i) => (
                  <div key={i} className="ai-why-row">
                    <div className="ai-why-check">✓</div>
                    <span className="ai-why-text"><strong>{w.bold}</strong>{w.rest}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="ai-brand">
              <div className="ai-brand-wordmark">Ai<span>rica</span></div>
              <div className="ai-brand-sub">Data & IA pour l'Afrique</div>
              <div className="ai-brand-divider" />
              <div className="ai-brand-vals">
                {["Expertise locale", "Vision stratégique", "Pragmatisme opérationnel", "Impact mesurable"].map((v, i) => (
                  <div key={i} className="ai-brand-val">{v}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="ai-cta">
        <div className="ai-cta-glow" />
        <div className="ai-cta-inner">
          <div className="ai-cta-eyebrow">Passez à l'action</div>
          <h2 className="ai-cta-title">
            Évitez les<br />
            <span className="gold italic">erreurs coûteuses.</span>
          </h2>
          <p className="ai-cta-sub">Démarrez votre transformation data sur des bases solides, réalistes et adaptées à votre contexte.</p>
          <button className="ai-cta-btn">
            Planifier mon diagnostic <span>→</span>
          </button>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="ai-footer">
        <div className="ai-footer-logo">Ai<span>·</span>frica</div>
        <div className="ai-footer-text">© 2025 Aifrica · Data & IA pour l'Afrique</div>
      </footer>
    </div>
  );
}