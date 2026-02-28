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

/* Approach panel */
.ai-approach-panel {
  position: sticky; top: 84px;
  background: var(--ink); border-radius: 24px; padding: 52px 44px;
  border: 1px solid rgba(212, 160, 23, 0.2);
  overflow: hidden;
}
.ai-approach-panel::before {
  content: '';
  position: absolute; width: 300px; height: 300px; border-radius: 50%;
  background: radial-gradient(circle, rgba(212,160,23,0.15) 0%, transparent 70%);
  top: -100px; right: -80px; pointer-events: none;
}
.ai-approach-panel h3 {
  font-family: 'Inter', sans-serif;
  font-size: 32px; color: var(--white); margin-bottom: 20px; line-height: 1.2;
  position: relative; z-index: 1;
}
.ai-approach-panel p { font-size: 15px; color: rgba(255,255,255,0.5); line-height: 1.8; margin-bottom: 36px; position: relative; z-index: 1; }
.ai-approach-panel p strong { color: var(--amber-glow); font-weight: 500; }
.ai-approach-checks { display: flex; flex-direction: column; gap: 12px; position: relative; z-index: 1; }
.ai-approach-check {
  display: flex; align-items: flex-start; gap: 12px;
  font-size: 14px; color: rgba(255,255,255,0.6); line-height: 1.5;
}
.ai-approach-check::before {
  content: '✔';
  color: var(--amber-glow);
  font-weight: 700;
  flex-shrink: 0;
}

/* ─── SOLUTIONS GRID ─── */
.ai-solutions-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; margin-top: 64px; }
.ai-solution-card {
  background: var(--white); border: 1px solid var(--border-ink);
  border-radius: 20px; padding: 40px 36px;
  transition: all 0.3s;
}
.ai-solution-card:hover { border-color: var(--amber); box-shadow: var(--shadow-warm); transform: translateY(-4px); }
.ai-solution-header {
  display: flex; align-items: center; gap: 16px;
  margin-bottom: 24px;
}
.ai-solution-ico {
  width: 56px; height: 56px; border-radius: 14px;
  background: linear-gradient(135deg, var(--ink), var(--ink-soft));
  display: flex; align-items: center; justify-content: center;
  font-size: 24px; color: var(--amber);
}
.ai-solution-title {
  font-family: 'Inter', sans-serif;
  font-size: 20px; font-weight: 700; color: var(--ink);
}
.ai-solution-list { list-style: none; display: flex; flex-direction: column; gap: 12px; }
.ai-solution-list li {
  font-size: 14px; color: var(--muted); line-height: 1.6;
  display: flex; align-items: flex-start; gap: 10px;
}
.ai-solution-list li::before {
  content: '•';
  color: var(--amber);
  font-weight: 700;
  flex-shrink: 0;
  margin-top: 2px;
}

/* ─── METHODOLOGY ─── */
.ai-method-grid {
  display: grid; grid-template-columns: repeat(6, 1fr);
  gap: 0; margin-top: 72px;
  border: 1px solid var(--border-ink); border-radius: 20px; overflow: hidden;
}
.ai-mstep {
  padding: 40px 24px; position: relative;
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
  font-size: 36px; line-height: 1; margin-bottom: 16px;
  color: rgba(26,58,82,0.12);
  transition: color 0.3s;
}
.ai-mstep:hover .ai-mstep-n, .ai-mstep.active .ai-mstep-n { color: var(--amber); }
.ai-mstep-title {
  font-family: 'Inter', sans-serif; font-size: 16px; font-weight: 700;
  color: var(--ink); margin-bottom: 8px; transition: color 0.3s;
}
.ai-mstep:hover .ai-mstep-title, .ai-mstep.active .ai-mstep-title { color: var(--white); }
.ai-mstep-desc { font-size: 12px; color: var(--muted); line-height: 1.6; transition: color 0.3s; }
.ai-mstep:hover .ai-mstep-desc, .ai-mstep.active .ai-mstep-desc { color: rgba(255,255,255,0.5); }

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

/* ─── TARGETS ─── */
.ai-targets-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 12px; margin-top: 64px; }
.ai-target-card {
  padding: 32px 16px; border-radius: 16px; text-align: center;
  background: rgba(255,255,255,0.04); border: 1px solid rgba(212,160,23,0.12);
  cursor: default; transition: all 0.35s;
}
.ai-target-card:hover {
  background: rgba(212,160,23,0.1); border-color: rgba(212,160,23,0.4);
  transform: translateY(-8px); box-shadow: 0 16px 40px rgba(15,37,55,0.3);
}
.ai-tcard-ico { font-size: 32px; margin-bottom: 12px; display: block; }
.ai-tcard-label { font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.6); line-height: 1.4; }
.ai-target-card:hover .ai-tcard-label { color: var(--amber-glow); }

/* ─── DIFFERENCE ─── */
.ai-diff-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; margin-top: 64px; }
.ai-diff-list { display: flex; flex-direction: column; gap: 12px; }
.ai-diff-item {
  display: flex; align-items: flex-start; gap: 20px;
  padding: 24px 28px; border-radius: 14px;
  border: 1px solid var(--border-ink); background: var(--white);
  transition: all 0.3s;
}
.ai-diff-item:hover { border-color: var(--amber); box-shadow: var(--shadow-warm); }
.ai-diff-check {
  width: 24px; height: 24px; border-radius: 50%; flex-shrink: 0; margin-top: 1px;
  background: var(--ink); color: var(--amber);
  display: flex; align-items: center; justify-content: center;
  font-size: 11px; font-weight: 900;
}
.ai-diff-text { font-size: 15px; color: var(--muted); line-height: 1.65; }
.ai-diff-text strong { color: var(--ink); font-weight: 700; }

/* Visual orb */
.ai-diff-vis {
  position: relative; display: flex; align-items: center; justify-content: center;
  height: 380px;
  background: var(--ink); border-radius: 28px; overflow: hidden;
  border: 1px solid rgba(212, 160, 23, 0.15);
}
.ai-diff-vis::before {
  content: '';
  position: absolute; width: 320px; height: 320px; border-radius: 50%;
  background: radial-gradient(circle, rgba(212,160,23,0.18) 0%, transparent 70%);
  animation: glowPulse 4s ease-in-out infinite;
}
.ai-diff-center { position: relative; z-index: 2; text-align: center; }
.ai-diff-big {
  font-family: 'Inter', sans-serif;
  font-size: 112px; line-height: 1; color: var(--amber);
}
.ai-diff-label { font-size: 13px; color: rgba(255,255,255,0.4); margin-top: 4px; letter-spacing: 1px; }
.ai-diff-dots { position: absolute; inset: 0; }
.ai-diff-dot-ring {
  position: absolute; border-radius: 50%; border: 1px dashed rgba(212,160,23,0.15);
  top: 50%; left: 50%; transform: translate(-50%, -50%);
}
.ai-orbit-dot {
  position: absolute; width: 8px; height: 8px; border-radius: 50%; background: var(--amber);
  top: 50%; left: 50%; margin: -4px;
  animation: orbit linear infinite;
  box-shadow: 0 0 12px rgba(212,160,23,0.6);
}

/* ─── DELIVERABLES ─── */
.ai-deliv-layout { display: grid; grid-template-columns: 1fr; gap: 28px; margin-top: 64px; }
.ai-deliv-card {
  padding: 40px 48px; border-radius: 20px;
  border: 1px solid var(--border-ink);
  background: var(--white);
  transition: all 0.3s;
}
.ai-deliv-card:hover { box-shadow: var(--shadow-deep); border-color: var(--amber); }
.ai-deliv-header {
  display: flex; align-items: center; gap: 20px;
  margin-bottom: 24px;
}
.ai-deliv-ico {
  width: 48px; height: 48px; border-radius: 12px; flex-shrink: 0;
  background: linear-gradient(135deg, var(--ink), var(--ink-soft));
  display: flex; align-items: center; justify-content: center; font-size: 20px;
  color: var(--amber);
}
.ai-deliv-title {
  font-family: 'Inter', sans-serif; font-size: 20px; font-weight: 800;
  color: var(--ink);
}
.ai-deliv-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
.ai-deliv-item {
  display: flex; align-items: flex-start; gap: 12px;
  padding: 16px 20px; border-radius: 12px;
  background: var(--sand-warm);
}
.ai-deliv-item-ico {
  width: 24px; height: 24px; border-radius: 6px; flex-shrink: 0;
  background: var(--amber); display: flex; align-items: center; justify-content: center;
  font-size: 12px; color: var(--ink); font-weight: 700;
}
.ai-deliv-item-text { font-size: 13px; color: var(--ink); line-height: 1.5; }

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
  .ai-solutions-grid { grid-template-columns: 1fr; }
  .ai-method-grid { grid-template-columns: repeat(3, 1fr); }
  .ai-case-cols { grid-template-columns: 1fr 1fr; }
  .ai-targets-grid { grid-template-columns: repeat(4, 1fr); }
  .ai-diff-layout { grid-template-columns: 1fr; }
  .ai-deliv-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 640px) {
  .ai-section { padding: 80px 24px; }
  .ai-hero-inner { padding: 80px 24px; }

  .ai-solutions-grid { grid-template-columns: 1fr; }
  .ai-method-grid { grid-template-columns: repeat(2, 1fr); border-radius: 20px; }
  .ai-mstep { border-right: none; border-bottom: 1px solid var(--border-ink); }
  .ai-case-cols { grid-template-columns: 1fr; }
  .ai-case-head { padding: 36px 28px; flex-direction: column; }
  .ai-targets-grid { grid-template-columns: repeat(2, 1fr); }
  .ai-deliv-grid { grid-template-columns: 1fr; }
  .ai-footer { flex-direction: column; gap: 10px; text-align: center; }
}
`;

export default function SolutionIAAvancee() {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = CSS;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const problems = [
    { ico: "🔄", t: "Processus manuels répétitifs", sub: "Tâches chronophages qui ralentissent les équipes et créent des erreurs." },
    { ico: "📞", t: "Service client saturé", sub: "Équipes débordées, temps de réponse longs, qualité inégale." },
    { ico: "🎲", t: "Décisions à l'intuition", sub: "Absence de données objectives pour piloter l'entreprise." },
    { ico: "📊", t: "Manque de prévision", sub: "Difficulté à anticiper ventes, stocks, churn et risques." },
    { ico: "🌍", t: "Outils génériques inadaptés", sub: "Solutions conçues pour d'autres contextes, inefficaces localement." },
  ];

  const solutions = [
    {
      ico: "🤖",
      title: "Agents IA personnalisés",
      items: [
        "Chatbots internes (support RH, procédures, FAQ)",
        "Assistants clients 24/7",
        "Agents RAG connectés à vos documents"
      ]
    },
    {
      ico: "⚡",
      title: "Automatisation intelligente",
      items: [
        "Automatisation du support client",
        "Workflow automatisé (emails, CRM, relances)",
        "Classification automatique de documents"
      ]
    },
    {
      ico: "📈",
      title: "Modèles prédictifs",
      items: [
        "Prévision des ventes",
        "Détection de fraude",
        "Scoring crédit",
        "Prédiction churn"
      ]
    },
    {
      ico: "📊",
      title: "Dashboards décisionnels avancés",
      items: [
        "KPI en temps réel",
        "Indicateurs financiers",
        "Performance commerciale",
        "Optimisation logistique"
      ]
    }
  ];

  const methodology = [
    { n: "1", title: "Cadrage stratégique", desc: "Besoin métier, contraintes, objectifs" },
    { n: "2", title: "Conception & Architecture", desc: "Structure data, tech, sécurité" },
    { n: "3", title: "Développement & Intégration", desc: "Construction et connexion systèmes" },
    { n: "4", title: "Tests & Validation", desc: "Robustesse, performance, cas limites" },
    { n: "5", title: "Formation & Adoption", desc: "Compétences et documentation" },
    { n: "6", title: "Suivi & Optimisation", desc: "KPIs et amélioration continue" },
  ];

  const targets = [
    { ico: "🚀", label: "PME en croissance" },
    { ico: "🏢", label: "Grandes entreprises" },
    { ico: "📡", label: "Acteurs télécom" },
    { ico: "🛒", label: "Distribution & retail" },
    { ico: "💰", label: "Finance & microfinance" },
    { ico: "🛍️", label: "E-commerce" },
    { ico: "🚚", label: "Logistique" },
  ];

  const difference = [
    { bold: "Solutions adaptées aux infrastructures locales", rest: " — conçues pour les réalités techniques africaines." },
    { bold: "Approche progressive et réaliste", rest: " — sans révolution brutale, avec montée en puissance maîtrisée." },
    { bold: "Focus ROI mesurable", rest: " — chaque solution évaluée sur sa valeur business concrète." },
    { bold: "Expertise Data & IA combinée", rest: " — double compétence rare et précieuse." },
    { bold: "Accompagnement stratégique + opérationnel", rest: " — du conseil à la mise en production." },
  ];

  const deliverables = [
    "Une solution IA fonctionnelle et documentée",
    "Une architecture claire et maintenable",
    "Un plan d'évolution sur 12-24 mois",
    "Des indicateurs de performance mesurables",
    "Une équipe formée et autonome"
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
              Développement sur mesure – Agents IA – Automatisation
            </div>
            <h1 className="ai-hero-h1">
              Développez des solutions IA <span className="italic-gold">adaptées à votre réalité africaine</span>
            </h1>
            <p className="ai-hero-desc">
              Nous concevons et déployons des solutions intelligentes sur mesure — agents IA, automatisations, modèles prédictifs et dashboards avancés — alignées sur vos objectifs métiers et vos contraintes opérationnelles.
            </p>
            <div className="ai-hero-actions">
              <button className="ai-btn-hero">
                Demander une étude de faisabilité <span>→</span>
              </button>
              <button className="ai-btn-ghost">
                <span>▶</span> Voir nos réalisations
              </button>
            </div>
          </div>

          <div className="ai-hero-panel">
            <div className="ai-hero-panel-head">NOTRE APPROCHE</div>
            <div className="ai-hero-steps">
              {[
                { n: "1", t: "Architecture réaliste", d: "Adaptée à vos contraintes" },
                { n: "2", t: "Intégration existante", d: "Avec vos outils actuels" },
                { n: "3", t: "Adoption mesurable", d: "Formation et accompagnement" },
                { n: "4", t: "Montée en puissance", d: "Progressive et sécurisée" },
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
              <span className="label">Développement</span>
              <span className="value">Sur mesure</span>
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
                  De nombreuses organisations africaines <em>font face à</em>
                </h2>
                <p className="ai-sub">
                  L'IA peut transformer ces défis en avantage compétitif — à condition d'être bien conçue et adaptée au terrain.
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

            <div className="ai-approach-panel">
              <h3>NOTRE APPROCHE</h3>
              <p>
                Chez Aifrica, nous développons des solutions IA <strong>progressives, robustes</strong> et <strong>adaptées aux réalités africaines</strong>.
              </p>
              <div className="ai-approach-checks">
                <div className="ai-approach-check">Une architecture réaliste</div>
                <div className="ai-approach-check">Une intégration avec vos outils existants</div>
                <div className="ai-approach-check">Une adoption mesurable par vos équipes</div>
                <div className="ai-approach-check">Une montée en puissance progressive</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS ── */}
      <section className="ai-section sand-warm">
        <div className="ai-container">
          <div className="text-center">
            <div className="ai-eyebrow">
              <span className="ai-eyebrow-bar" />
              CE QUE NOUS DÉVELOPPONS
            </div>
            <h2 className="ai-h2">
              Des solutions <em>intelligentes</em> pour chaque besoin
            </h2>
            <p className="ai-sub" style={{ margin: '0 auto' }}>
              De l'agent conversationnel au dashboard prédictif, nous couvrons tout le spectre de l'IA appliquée.
            </p>
          </div>

          <div className="ai-solutions-grid">
            {solutions.map((solution, i) => (
              <div key={i} className="ai-solution-card">
                <div className="ai-solution-header">
                  <div className="ai-solution-ico">{solution.ico}</div>
                  <h3 className="ai-solution-title">{solution.title}</h3>
                </div>
                <ul className="ai-solution-list">
                  {solution.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── METHODOLOGY ── */}
      <section className="ai-section ink">
        <div className="ai-container">
          <div className="text-center">
            <div className="ai-eyebrow dark">
              <span className="ai-eyebrow-bar" />
              NOTRE MÉTHODOLOGIE
            </div>
            <h2 className="ai-h2 dark">
              Un développement <em>structuré</em> en 6 étapes
            </h2>
            <p className="ai-sub dark" style={{ margin: '0 auto' }}>
              De l'idée à la production, nous vous accompagnons à chaque phase du projet.
            </p>
          </div>

          <div className="ai-method-grid">
            {methodology.map((step, i) => (
              <div key={i} className="ai-mstep">
                <div className="ai-mstep-n">{step.n}</div>
                <h3 className="ai-mstep-title">{step.title}</h3>
                <p className="ai-mstep-desc">{step.desc}</p>
              </div>
            ))}
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
              Des applications <em>concrètes</em> qui transforment le business
            </h2>
            <p className="ai-sub" style={{ margin: '0 auto' }}>
              Découvrez comment l'IA résout des problèmes réels dans différents secteurs africains.
            </p>
          </div>

          <div className="ai-case" style={{ marginTop: '64px' }}>
            <div className="ai-case-head">
              <div className="ai-case-head-left">
                <h2>E-commerce</h2>
                <p>Chatbot 24/7 pour répondre aux questions fréquentes et suivre les commandes.</p>
              </div>
              <div className="ai-case-badge">Service client</div>
            </div>
            <div className="ai-case-cols">
              <div className="ai-case-col">
                <div className="ai-case-col-tag">Problème</div>
                <p>
                  Équipe support surchargée, temps de réponse supérieur à 24h, perte de clients sur questions simples.
                </p>
              </div>
              <div className="ai-case-col">
                <div className="ai-case-col-tag">Solution</div>
                <p>
                  Chatbot intelligent connecté au catalogue et système de commandes, avec handover vers humain.
                </p>
              </div>
              <div className="ai-case-col">
                <div className="ai-case-col-tag">Technologies</div>
                <p>
                  RAG sur documentation produit, intégration API e-commerce, interface WhatsApp/Web.
                </p>
              </div>
              <div className="ai-case-col">
                <div className="ai-case-col-tag">Résultats</div>
                <ul>
                  <li className="ai-case-result">−70% tickets support simples</li>
                  <li className="ai-case-result">+40% satisfaction client</li>
                  <li className="ai-case-result">24/7 disponibilité</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="ai-case" style={{ marginTop: '40px' }}>
            <div className="ai-case-head">
              <div className="ai-case-head-left">
                <h2>Logistique</h2>
                <p>Optimisation des itinéraires pour réduire coûts carburant et délais.</p>
              </div>
              <div className="ai-case-badge">Optimisation</div>
            </div>
            <div className="ai-case-cols">
              <div className="ai-case-col">
                <div className="ai-case-col-tag">Problème</div>
                <p>
                  Itinéraires non optimisés, coûts carburant élevés, retards fréquents, faible utilisation flotte.
                </p>
              </div>
              <div className="ai-case-col">
                <div className="ai-case-col-tag">Solution</div>
                <p>
                  Algorithme d'optimisation multi-critères avec contraintes locales (routes, trafic, zones).
                </p>
              </div>
              <div className="ai-case-col">
                <div className="ai-case-col-tag">Technologies</div>
                <p>
                  GPS tracking, algorithmes optimisation, dashboard temps réel, application mobile chauffeurs.
                </p>
              </div>
              <div className="ai-case-col">
                <div className="ai-case-col-tag">Résultats</div>
                <ul>
                  <li className="ai-case-result">−25% coûts carburant</li>
                  <li className="ai-case-result">−30% temps de livraison</li>
                  <li className="ai-case-result">+50% utilisation véhicules</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="ai-case" style={{ marginTop: '40px' }}>
            <div className="ai-case-head">
              <div className="ai-case-head-left">
                <h2>Microfinance</h2>
                <p>Automatisation d'un scoring simple avec garde-fous humains.</p>
              </div>
              <div className="ai-case-badge">Scoring</div>
            </div>
            <div className="ai-case-cols">
              <div className="ai-case-col">
                <div className="ai-case-col-tag">Problème</div>
                <p>
                  Évaluation manuelle des risques, temps de traitement 2-3 jours, critères incohérents.
                </p>
              </div>
              <div className="ai-case-col">
                <div className="ai-case-col-tag">Solution</div>
                <p>
                  Modèle scoring ML avec variables locales, interface validation humaine, apprentissage continu.
                </p>
              </div>
              <div className="ai-case-col">
                <div className="ai-case-col-tag">Technologies</div>
                <p>
                  Machine learning, intégration données clients, dashboard validation, API banque partenaires.
                </p>
              </div>
              <div className="ai-case-col">
                <div className="ai-case-col-tag">Résultats</div>
                <ul>
                  <li className="ai-case-result">−80% temps de traitement</li>
                  <li className="ai-case-result">+15% précision scoring</li>
                  <li className="ai-case-result">Réduction risque 20%</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="ai-case" style={{ marginTop: '40px' }}>
            <div className="ai-case-head">
              <div className="ai-case-head-left">
                <h2>Distribution</h2>
                <p>Prévision des ventes pour réduire les ruptures en saison forte.</p>
              </div>
              <div className="ai-case-badge">Prévision</div>
            </div>
            <div className="ai-case-cols">
              <div className="ai-case-col">
                <div className="ai-case-col-tag">Problème</div>
                <p>
                  Ruptures fréquentes en haute saison, surstocks autres périodes, pertes opportunités.
                </p>
              </div>
              <div className="ai-case-col">
                <div className="ai-case-col-tag">Solution</div>
                <p>
                  Modèle prédictif ventes par point de vente, alertes réapprovisionnement, recommendations stocks.
                </p>
              </div>
              <div className="ai-case-col">
                <div className="ai-case-col-tag">Technologies</div>
                <p>
                  Time series forecasting, données ventes historiques, variables saisonnières, dashboard stocks.
                </p>
              </div>
              <div className="ai-case-col">
                <div className="ai-case-col-tag">Résultats</div>
                <ul>
                  <li className="ai-case-result">−60% ruptures stock</li>
                  <li className="ai-case-result">−25% surstocks</li>
                  <li className="ai-case-result">+35% ventes saison</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TARGETS ── */}
      <section className="ai-section ink">
        <div className="ai-container">
          <div className="text-center">
            <div className="ai-eyebrow dark">
              <span className="ai-eyebrow-bar" />
              POUR QUI ?
            </div>
            <h2 className="ai-h2 dark">
              Nous servons <em>divers secteurs</em> de l'économie africaine
            </h2>
            <p className="ai-sub dark" style={{ margin: '0 auto' }}>
              Notre expertise couvre les besoins spécifiques de chaque industrie.
            </p>
          </div>

          <div className="ai-targets-grid">
            {targets.map((target, i) => (
              <div key={i} className="ai-target-card">
                <div className="ai-tcard-ico">{target.ico}</div>
                <div className="ai-tcard-label">{target.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFFERENCE ── */}
      <section className="ai-section white">
        <div className="ai-container">
          <div className="ai-diff-layout">
            <div>
              <div className="ai-eyebrow">
                <span className="ai-eyebrow-bar" />
                NOTRE DIFFÉRENCE
              </div>
              <h2 className="ai-h2">
                L'expertise <em>africaine</em> qui fait la différence
              </h2>
              <p className="ai-sub">
                Nous combinons excellence technique et compréhension des réalités locales pour garantir votre succès.
              </p>
              <div className="ai-diff-list">
                {difference.map((item, i) => (
                  <div key={i} className="ai-diff-item">
                    <div className="ai-diff-check">✓</div>
                    <div className="ai-diff-text">
                      <strong>{item.bold}</strong>{item.rest}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="ai-diff-vis">
              <div className="ai-diff-dots">
                <div className="ai-diff-dot-ring" style={{ width: '120px', height: '120px' }} />
                <div className="ai-diff-dot-ring" style={{ width: '200px', height: '200px' }} />
                <div className="ai-diff-dot-ring" style={{ width: '280px', height: '280px' }} />
                <div className="ai-orbit-dot" style={{ animationDuration: '8s' }} />
                <div className="ai-orbit-dot" style={{ animationDuration: '12s', animationDelay: '-4s' }} />
                <div className="ai-orbit-dot" style={{ animationDuration: '16s', animationDelay: '-8s' }} />
              </div>
              <div className="ai-diff-center">
                <div className="ai-diff-big">5+</div>
                <div className="ai-diff-label">Avantages concurrentiels</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DELIVERABLES ── */}
      <section className="ai-section sand-warm">
        <div className="ai-container">
          <div className="text-center">
            <div className="ai-eyebrow">
              <span className="ai-eyebrow-bar" />
              CE QUE VOUS OBTENEZ
            </div>
            <h2 className="ai-h2">
              Des livrables <em>complets</em> pour pérenniser votre succès
            </h2>
            <p className="ai-sub" style={{ margin: '0 auto' }}>
              Notre intervention vous laisse avec une solution autonome et évolutionnaire.
            </p>
          </div>

          <div className="ai-deliv-layout">
            <div className="ai-deliv-card">
              <div className="ai-deliv-header">
                <div className="ai-deliv-ico">📦</div>
                <h3 className="ai-deliv-title">Package complet de livraison</h3>
              </div>
              <div className="ai-deliv-grid">
                {deliverables.map((item, i) => (
                  <div key={i} className="ai-deliv-item">
                    <div className="ai-deliv-item-ico">{i + 1}</div>
                    <div className="ai-deliv-item-text">{item}</div>
                  </div>
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
          <div className="ai-cta-eyebrow">PRÊT À TRANSFORMER ?</div>
          <h2 className="ai-cta-title">
            Transformez vos <span className="gold">opérations</span> grâce à <span className="italic">l'IA</span>
          </h2>
          <p className="ai-cta-sub">
            Développez votre solution IA sur mesure avec notre expertise technique et notre compréhension des réalités africaines.
          </p>
          <button className="ai-cta-btn">
            Planifier un échange stratégique <span>→</span>
          </button>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="ai-footer">
        <div className="ai-footer-logo">
          AIF<span>RICA</span>
        </div>
        <div className="ai-footer-text">
          © 2024 Aifrica - Solutions IA avancées pour l'Afrique
        </div>
      </footer>
    </div>
  );
}
