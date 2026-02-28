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

/* ─── PROBLEM ─── */
.ai-problem-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 100px; align-items: start; }
.ai-problem-header { margin-bottom: 48px; }
.ai-problem-list { display: flex; flex-direction: column; gap: 10px; }
.ai-problem-item {
  display: flex; align-items: flex-start; gap: 20px;
  padding: 22px 28px; border-radius: 14px;
  background: var(--white); border: 1px solid var(--border-ink);
  transition: all 0.3s; cursor: default;
}
.ai-problem-item:hover { border-color: var(--amber); transform: translateX(6px); box-shadow: var(--shadow-card); }
.ai-problem-ico {
  width: 42px; height: 42px; border-radius: 10px; flex-shrink: 0;
  background: var(--sand-warm); display: flex; align-items: center; justify-content: center;
  font-size: 20px;
}
.ai-problem-text h5 { font-family: 'Inter', sans-serif; font-size: 14px; font-weight: 700; color: var(--ink); margin-bottom: 4px; }
.ai-problem-text p { font-size: 13px; color: var(--muted); line-height: 1.55; }

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

/* ─── APPROACH CARDS ─── */
.ai-approach-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 64px; }
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
  .ai-problem-layout { grid-template-columns: 1fr; gap: 48px; }
  .ai-approach-grid { grid-template-columns: 1fr 1fr; }
  .ai-deliv-layout { grid-template-columns: 1fr; }
  .ai-case-cols { grid-template-columns: 1fr 1fr; }
  .ai-target-grid { grid-template-columns: repeat(3, 1fr); }
  .ai-why-layout { grid-template-columns: 1fr; gap: 48px; }
}
@media (max-width: 640px) {
  .ai-section { padding: 80px 24px; }
  .ai-hero-inner { padding: 80px 24px; }

  .ai-approach-grid { grid-template-columns: 1fr; }
  .ai-case-cols { grid-template-columns: 1fr; }
  .ai-case-head { padding: 36px 28px; flex-direction: column; }
  .ai-target-grid { grid-template-columns: 1fr 1fr; }
  .ai-dur-layout { grid-template-columns: 1fr; }
  .ai-footer { flex-direction: column; gap: 10px; text-align: center; }
}
`;

export default function ConsultingIAData() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = CSS;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const approachCards = [
    { ico: "🎯", n: "01", title: "Analyse des objectifs métiers", items: ["Priorités stratégiques", "Irritants opérationnels", "Enjeux financiers", "Contraintes réglementaires"] },
    { ico: "🔍", n: "02", title: "Sélection des cas d'usage", items: ["Impact business potentiel", "Faisabilité technique", "Disponibilité des données", "Niveau de maturité"] },
    { ico: "🗺️", n: "03", title: "Construction de la roadmap", items: ["Quick wins identifiés", "Projets structurants", "Jalons clairs", "Budget estimatif"] },
    { ico: "🏗️", n: "04", title: "Gouvernance & organisation", items: ["Rôles & responsabilités", "Gouvernance data", "Processus décisionnels", "Gestion du changement"] },
  ];

  const deliverables = [
    { ico: "🗺️", txt: "Roadmap IA priorisée (3–12 mois)" },
    { ico: "📋", txt: "Document stratégique complet" },
    { ico: "📝", txt: "Backlog détaillé des cas d'usage" },
    { ico: "🏛️", txt: "Modèle de gouvernance" },
    { ico: "📊", txt: "Indicateurs de succès mesurables" },
    { ico: "⚡", txt: "Plan d'exécution réaliste" },
  ];

  const problems = [
    { ico: "🚀", t: "Projets IA sans vision globale", sub: "Initiatives isolées sans cohérence stratégique." },
    { ico: "📈", t: "Multiplication sans ROI mesurable", sub: "Investissements non suivis d'indicateurs de performance." },
    { ico: "🎯", t: "Mauvaise priorisation", sub: "Cas d'usage choisis sans analyse d'impact business." },
    { ico: "💡", t: "Confusion innovation/valeur", sub: "Technologie adoptée pour elle-même, pas pour le résultat." },
    { ico: "🏗️", t: "Gouvernance sous-estimée", sub: "Organisation et changement de culture négligés." },
  ];

  const targets = [
    { ico: "🏢", label: "Grandes entreprises africaines" },
    { ico: "🚀", label: "PME en croissance" },
    { ico: "🏛️", label: "Administrations" },
    { ico: "🔗", label: "Organisations multi-équipes" },
    { ico: "🌍", label: "Écosystèmes innovants" },
  ];

  const whyItems = [
    { bold: "Expertise Data & IA", rest: " — double compétence technique et business." },
    { bold: "Compréhension des réalités africaines", rest: " — adapté aux contextes locaux." },
    { bold: "Vision stratégique + exécution opérationnelle", rest: " — du conseil à l'implémentation." },
    { bold: "Approche progressive et pragmatique", rest: " — sans révolution brutale." },
    { bold: "Focus ROI mesurable", rest: " — chaque initiative évaluée sur sa valeur business." },
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
              Expertise stratégique – Roadmap – Gouvernance
            </div>
            <h1 className="ai-hero-h1">
              Construisez une stratégie IA <span className="italic-gold">alignée sur vos objectifs business</span>
            </h1>
            <p className="ai-hero-desc">
              L'intelligence artificielle n'est pas un projet technologique. C'est une transformation stratégique.
              Aifrica vous accompagne dans la définition d'une feuille de route Data & IA réaliste, priorisée et adaptée à votre contexte africain.
            </p>
            <div className="ai-hero-actions">
              <button className="ai-btn-hero">
                Planifier un échange stratégique <span>→</span>
              </button>
              <button className="ai-btn-ghost">
                <span>▶</span> Découvrir l'approche
              </button>
            </div>
          </div>

          <div className="ai-hero-panel">
            <div className="ai-hero-panel-head">Notre mission</div>
            <div className="ai-hero-steps">
              {[
                { n: "1", t: "Analyse métier", d: "Comprendre vos priorités stratégiques" },
                { n: "2", t: "Cas d'usage", d: "Identifier les opportunités à fort impact" },
                { n: "3", t: "Roadmap IA", d: "Feuille de route progressive et réaliste" },
                { n: "4", t: "Gouvernance", d: "Structurer pour durer" },
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
              <span className="value">2 – 6 semaines</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ── */}
      <section className="ai-section cream">
        <div className="ai-container">
          <div className="ai-problem-layout">
            <div>
              <div className="ai-problem-header">
                <div className="ai-eyebrow">
                  <span className="ai-eyebrow-bar" />
                  LE PROBLÈME
                </div>
                <h2 className="ai-h2">
                  Beaucoup d'organisations <em>multiplient les erreurs</em>
                </h2>
                <p className="ai-sub">
                  Résultat : projets coûteux, faible adoption, impact limité.
                </p>
              </div>
              <div className="ai-problem-list">
                {problems.map((item, i) => (
                  <div key={i} className="ai-problem-item">
                    <div className="ai-problem-ico">{item.ico}</div>
                    <div className="ai-problem-text">
                      <h5>{item.t}</h5>
                      <p>{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="ai-risk-panel">
              <h3>NOTRE MISSION</h3>
              <p>
                Transformer votre <strong>ambition IA</strong> en stratégie <strong>claire, structurée et exécutable</strong>.
                Nous traduisons vos objectifs métiers en initiatives Data & IA concrètes, hiérarchisées et mesurables.
              </p>
              <div className="ai-risk-tags">
                <span className="ai-tag">Stratégie</span>
                <span className="ai-tag">Exécution</span>
                <span className="ai-tag">Mesure</span>
                <span className="ai-tag">Durabilité</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── APPROACH ── */}
      <section className="ai-section ink">
        <div className="ai-container">
          <div className="text-center">
            <div className="ai-eyebrow dark">
              <span className="ai-eyebrow-bar" />
              NOTRE APPROCHE STRATÉGIQUE
            </div>
            <h2 className="ai-h2 dark">
              Une méthode <em>éprouvée</em> en 4 étapes
            </h2>
            <p className="ai-sub dark" style={{ margin: '0 auto' }}>
              De l'analyse métier à la gouvernance, nous construisons votre stratégie IA étape par étape.
            </p>
          </div>
          
          <div className="ai-approach-grid">
            {approachCards.map((card, i) => (
              <div key={i} className="ai-acard" data-n={card.n}>
                <div className="ai-acard-ico">{card.ico}</div>
                <h3 className="ai-acard-title">{card.title}</h3>
                <ul className="ai-acard-list">
                  {card.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DELIVERABLES ── */}
      <section className="ai-section sand-warm">
        <div className="ai-container">
          <div className="ai-deliv-layout">
            <div>
              <div className="ai-eyebrow">
                <span className="ai-eyebrow-bar" />
                CE QUE VOUS OBTENEZ
              </div>
              <h2 className="ai-h2">
                Des livrables <em>concrets</em> et actionnables
              </h2>
              <p className="ai-sub">
                Notre intervention se traduit par des documents et outils que vous pouvez utiliser immédiatement.
              </p>
              <div className="ai-deliv-list" style={{ marginTop: '44px' }}>
                {deliverables.map((item, i) => (
                  <div key={i} className="ai-deliv-item">
                    <div className="ai-deliv-ico">{item.ico}</div>
                    <div className="ai-deliv-text">{item.txt}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="ai-deliv-vis">
              <div className="ai-deliv-dots">
                <div className="ai-deliv-dot-ring" style={{ width: '120px', height: '120px' }} />
                <div className="ai-deliv-dot-ring" style={{ width: '200px', height: '200px' }} />
                <div className="ai-deliv-dot-ring" style={{ width: '280px', height: '280px' }} />
                <div className="ai-orbit-dot" style={{ animationDuration: '8s' }} />
                <div className="ai-orbit-dot" style={{ animationDuration: '12s', animationDelay: '-4s' }} />
                <div className="ai-orbit-dot" style={{ animationDuration: '16s', animationDelay: '-8s' }} />
              </div>
              <div className="ai-deliv-center">
                <div className="ai-deliv-big">6+</div>
                <div className="ai-deliv-label">Livrables stratégiques</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CASE STUDY ── */}
      <section className="ai-section white">
        <div className="ai-container">
          <div className="text-center">
            <div className="ai-eyebrow">
              <span className="ai-eyebrow-bar" />
              CAS D'USAGE AFRIQUE
            </div>
            <h2 className="ai-h2">
              Des exemples <em>concrets</em> de notre approche
            </h2>
            <p className="ai-sub" style={{ margin: '0 auto' }}>
              Découvrez comment nous appliquons notre méthodologie à des contextes africains réels.
            </p>
          </div>

          <div className="ai-case" style={{ marginTop: '64px' }}>
            <div className="ai-case-head">
              <div className="ai-case-head-left">
                <h2>Télécom – Réduction du churn</h2>
                <p>Problème : Taux de résiliation élevé, service client saturé.</p>
              </div>
              <div className="ai-case-badge">9 mois</div>
            </div>
            <div className="ai-case-cols">
              <div className="ai-case-col">
                <div className="ai-case-col-tag">Approche stratégique</div>
                <ul>
                  <li>Priorisation d'un modèle de prédiction churn</li>
                  <li>Automatisation partielle du support</li>
                  <li>Mise en place d'un reporting décisionnel</li>
                </ul>
              </div>
              <div className="ai-case-col">
                <div className="ai-case-col-tag">Roadmap progressive</div>
                <ul>
                  <li>Phase 1: Data quality & baseline</li>
                  <li>Phase 2: Modèle prédictif simple</li>
                  <li>Phase 3: Industrialisation & scaling</li>
                </ul>
              </div>
              <div className="ai-case-col">
                <div className="ai-case-col-tag">Organisation</div>
                <ul>
                  <li>Équipe data dédiée</li>
                  <li>Gouvernance des algorithmes</li>
                  <li>Formation des équipes métiers</li>
                </ul>
              </div>
              <div className="ai-case-col">
                <div className="ai-case-col-tag">Résultats attendus</div>
                <ul>
                  <li className="ai-case-result">−30% taux de churn</li>
                  <li className="ai-case-result">−40% coûts support</li>
                  <li className="ai-case-result">+25% satisfaction client</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="ai-case" style={{ marginTop: '40px' }}>
            <div className="ai-case-head">
              <div className="ai-case-head-left">
                <h2>Administration publique</h2>
                <p>Problème : Difficulté à analyser les demandes citoyennes.</p>
              </div>
              <div className="ai-case-badge">6 mois</div>
            </div>
            <div className="ai-case-cols">
              <div className="ai-case-col">
                <div className="ai-case-col-tag">Approche</div>
                <ul>
                  <li>Structuration des données</li>
                  <li>Mise en place d'indicateurs</li>
                  <li>Déploiement progressif d'automatisations</li>
                </ul>
              </div>
              <div className="ai-case-col">
                <div className="ai-case-col-tag">Priorisation</div>
                <ul>
                  <li>Demandes les plus fréquentes</li>
                  <li>Goulot d'étranglement identifié</li>
                  <li>Quick wins sur processus simples</li>
                </ul>
              </div>
              <div className="ai-case-col">
                <div className="ai-case-col-tag">Gouvernance</div>
                <ul>
                  <li>Comité de pilotage inter-services</li>
                  <li>Référentiel de données unique</li>
                  <li>Formation continue des agents</li>
                </ul>
              </div>
              <div className="ai-case-col">
                <div className="ai-case-col-tag">Impact</div>
                <ul>
                  <li className="ai-case-result">−50% délais de traitement</li>
                  <li className="ai-case-result">+60% visibilité performance</li>
                  <li className="ai-case-result">Meilleure satisfaction usagers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DURATION ── */}
      <section className="ai-section sand">
        <div className="ai-container">
          <div className="text-center">
            <div className="ai-eyebrow">
              <span className="ai-eyebrow-bar" />
              DURÉE INDICATIVE
            </div>
            <h2 className="ai-h2">
              2 à 6 semaines selon <em>périmètre</em> et disponibilité
            </h2>
            <p className="ai-sub" style={{ margin: '0 auto' }}>
              Une intervention modulaire qui s'adapte à votre contexte et vos contraintes.
            </p>
          </div>

          <div className="ai-dur-layout">
            <div className="ai-dur-card light">
              <div className="ai-dur-ico">⚡</div>
              <h3>Version Express</h3>
              <p>
                Pour les organisations qui ont déjà une maturité Data & IA et besoin d'un regard externe pour valider leur stratégie.
              </p>
              <ul className="ai-dur-list">
                <li><span className="ai-dur-check">✓</span> 2 semaines de travail intensif</li>
                <li><span className="ai-dur-check">✓</span> Focus sur les quick wins prioritaires</li>
                <li><span className="ai-dur-check">✓</span> Livrable: roadmap condensée</li>
              </ul>
            </div>
            <div className="ai-dur-card dark">
              <div className="ai-dur-ico">🏗️</div>
              <h3>Version Complète</h3>
              <p>
                Pour les organisations qui partent de zéro ou veulent une transformation en profondeur avec accompagnement long terme.
              </p>
              <ul className="ai-dur-list">
                <li><span className="ai-dur-check">✓</span> 4-6 semaines avec ateliers co-construits</li>
                <li><span className="ai-dur-check">✓</span> Analyse approfondie et gouvernance</li>
                <li><span className="ai-dur-check">✓</span> Livrables complets + suivi 3 mois</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOR WHO ── */}
      <section className="ai-section ink">
        <div className="ai-container">
          <div className="text-center">
            <div className="ai-eyebrow dark">
              <span className="ai-eyebrow-bar" />
              POUR QUI ?
            </div>
            <h2 className="ai-h2 dark">
              Nous accompagnons <em>tous les types</em> d'organisations
            </h2>
            <p className="ai-sub dark" style={{ margin: '0 auto' }}>
              Notre approche s'adapte à votre taille, votre secteur et votre maturité Data & IA.
            </p>
          </div>

          <div className="ai-target-grid">
            {targets.map((target, i) => (
              <div key={i} className="ai-target-card">
                <div className="ai-tcard-ico">{target.ico}</div>
                <div className="ai-tcard-label">{target.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY AFRICA ── */}
      <section className="ai-section white">
        <div className="ai-container">
          <div className="ai-why-layout">
            <div>
              <div className="ai-eyebrow">
                <span className="ai-eyebrow-bar" />
                POURQUOI AIFRICA ?
              </div>
              <h2 className="ai-h2">
                L'expertise <em>africaine</em> au service de votre stratégie
              </h2>
              <p className="ai-sub">
                Nous combinons expertise technique et compréhension des réalités locales pour vous garantir le succès.
              </p>
              <div className="ai-why-list">
                {whyItems.map((item, i) => (
                  <div key={i} className="ai-why-row">
                    <div className="ai-why-check">✓</div>
                    <div className="ai-why-text">
                      <strong>{item.bold}</strong>{item.rest}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="ai-brand">
              <div className="ai-brand-wordmark">
                AIF<span>RICA</span>
              </div>
              <div className="ai-brand-sub">EXPERTISE DATA & IA</div>
              <div className="ai-brand-divider" />
              <div className="ai-brand-vals">
                <div className="ai-brand-val">Expertise technique</div>
                <div className="ai-brand-val">Vision business</div>
                <div className="ai-brand-val">Contexte africain</div>
                <div className="ai-brand-val">Résultats mesurables</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="ai-cta">
        <div className="ai-cta-glow" />
        <div className="ai-cta-inner">
          <div className="ai-cta-eyebrow">PRÊT À AGIR ?</div>
          <h2 className="ai-cta-title">
            Donnez une direction <span className="gold">claire</span> à votre <span className="italic">transformation IA</span>
          </h2>
          <p className="ai-cta-sub">
            Transformez votre ambition en stratégie concrète avec notre expertise Data & IA adaptée au contexte africain.
          </p>
          <button className="ai-cta-btn">
            Discuter de votre stratégie Data & IA <span>→</span>
          </button>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="ai-footer">
        <div className="ai-footer-logo">
          AIF<span>RICA</span>
        </div>
        <div className="ai-footer-text">
          © 2024 Aifrica - Expertise Data & IA pour l'Afrique
        </div>
      </footer>
    </div>
  );
}
