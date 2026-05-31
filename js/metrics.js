/* ══════════════════════════════════════════════════════════════
   metrics.js — Spaced Repetition (SM-2) + Progress Tracking
   Baseado em evidências científicas de aprendizagem
══════════════════════════════════════════════════════════════ */

const METRICS_KEY = 'actionari_metrics_v1';

function loadMetrics() {
  try { return JSON.parse(localStorage.getItem(METRICS_KEY)) || initMetricsData(); }
  catch { return initMetricsData(); }
}

function saveMetrics(data) {
  try { localStorage.setItem(METRICS_KEY, JSON.stringify(data)); } catch {}
}

function initMetricsData() {
  return {
    modules:       {},   // per module: { views, timeSpent, lastVisit }
    concepts:      {},   // per concept: { correct, wrong, streak, interval, nextReview }
    totalSessions: 0,
    currentStreak: 0,
    lastStudyDate: null,
    studyDates:    [],
    feynmanAttempts: 0,
    qaAttempts:    0,
    testsTaken:    0,
    chaptersRead:  {},
  };
}

/* ─── MODULE TRACKING ─────────────────────────────────────── */
function trackModuleView(moduleId) {
  const data = loadMetrics();
  if (!data.modules[moduleId]) data.modules[moduleId] = { views:0, timeSpent:0, lastVisit:null };
  data.modules[moduleId].views++;
  data.modules[moduleId].lastVisit = new Date().toISOString();
  data.chaptersRead[moduleId] = (data.chaptersRead[moduleId] || 0) + 1;
  updateStreak(data);
  saveMetrics(data);
  renderMetricsBadge(moduleId, data.modules[moduleId].views);
}

function startModuleTimer(moduleId) {
  window._moduleStart   = Date.now();
  window._currentModule = moduleId;
}

function stopModuleTimer() {
  if (!window._moduleStart || !window._currentModule) return;
  const elapsed = Math.round((Date.now() - window._moduleStart) / 1000);
  const data = loadMetrics();
  if (!data.modules[window._currentModule])
    data.modules[window._currentModule] = { views:0, timeSpent:0 };
  data.modules[window._currentModule].timeSpent =
    (data.modules[window._currentModule].timeSpent || 0) + elapsed;
  saveMetrics(data);
  window._moduleStart = null;
}

/* ─── SM-2 CONCEPT TRACKING ─────────────────────────────────── */
function trackConceptResult(conceptId, correct) {
  const data = loadMetrics();
  if (!data.concepts[conceptId])
    data.concepts[conceptId] = { correct:0, wrong:0, streak:0, interval:1, nextReview:null };
  const c = data.concepts[conceptId];
  if (correct) {
    c.correct++; c.streak++;
    if      (c.streak === 1) c.interval = 1;
    else if (c.streak === 2) c.interval = 3;
    else                     c.interval = Math.round(c.interval * 2.5);
    c.interval = Math.min(c.interval, 30);
  } else {
    c.wrong++; c.streak = 0; c.interval = 1;
  }
  const next = new Date();
  next.setDate(next.getDate() + c.interval);
  c.nextReview = next.toISOString().split('T')[0];
  if (correct) data.qaAttempts++;
  saveMetrics(data);
}

/* ─── STREAK ────────────────────────────────────────────────── */
function updateStreak(data) {
  const today = new Date().toISOString().split('T')[0];
  if (!data.lastStudyDate) {
    data.currentStreak = 1; data.lastStudyDate = today;
    data.studyDates.push(today); return;
  }
  const diffDays = Math.round((new Date(today) - new Date(data.lastStudyDate)) / 86400000);
  if (diffDays === 0) return;
  data.currentStreak = diffDays === 1 ? data.currentStreak + 1 : 1;
  data.lastStudyDate = today;
  if (!data.studyDates.includes(today)) data.studyDates.push(today);
  data.totalSessions++;
}

/* ─── NAV BADGE ─────────────────────────────────────────────── */
function renderMetricsBadge(moduleId, views) {
  const btn = document.querySelector(`[data-mod="${moduleId}"]`);
  if (!btn) return;
  let badge = btn.querySelector('.view-badge');
  if (!badge) { badge = document.createElement('span'); badge.className = 'view-badge'; btn.appendChild(badge); }
  badge.textContent = views;
  badge.title = `Vizualizat de ${views} ori`;
}

/* ─── DASHBOARD ─────────────────────────────────────────────── */
function renderMetricsDashboard() {
  const data = loadMetrics();
  const container = document.getElementById('metrics-dashboard');
  if (!container) return;

  const totalViews   = Object.values(data.modules).reduce((s,m) => s+(m.views||0), 0);
  const totalTime    = Object.values(data.modules).reduce((s,m) => s+(m.timeSpent||0), 0);
  const totalCorrect = Object.values(data.concepts).reduce((s,c) => s+(c.correct||0), 0);
  const totalWrong   = Object.values(data.concepts).reduce((s,c) => s+(c.wrong||0), 0);
  const accuracy     = totalCorrect+totalWrong > 0 ? Math.round(totalCorrect/(totalCorrect+totalWrong)*100) : 0;

  const today = new Date().toISOString().split('T')[0];
  const dueConcepts = Object.values(data.concepts).filter(c => c.nextReview && c.nextReview <= today).length;

  container.innerHTML = `
    <div class="metrics-kpis">
      <div class="kpi"><div class="kpi-icon">🔥</div><div class="kpi-val">${data.currentStreak}</div><div class="kpi-lbl">Zile consecutiv</div></div>
      <div class="kpi"><div class="kpi-icon">📖</div><div class="kpi-val">${totalViews}</div><div class="kpi-lbl">Vizualizări</div></div>
      <div class="kpi"><div class="kpi-icon">⏱</div><div class="kpi-val">${Math.round(totalTime/60)}</div><div class="kpi-lbl">Min. studiu</div></div>
      <div class="kpi"><div class="kpi-icon">🎯</div><div class="kpi-val">${accuracy}%</div><div class="kpi-lbl">Acuratețe Q&A</div></div>
      <div class="kpi ${dueConcepts>0?'kpi-alert':''}"><div class="kpi-icon">⚡</div><div class="kpi-val">${dueConcepts}</div><div class="kpi-lbl">De revăzut azi</div></div>
      <div class="kpi"><div class="kpi-icon">🧠</div><div class="kpi-val">${data.feynmanAttempts||0}</div><div class="kpi-lbl">Feynman</div></div>
    </div>

    <div class="metrics-section">
      <div class="metrics-sec-title">📚 Progres pe capitole</div>
      <div class="chapter-bars">${generateChapterBars(data)}</div>
    </div>

    <div class="metrics-section">
      <div class="metrics-sec-title">📅 Calendar de studiu (30 zile)</div>
      <div class="streak-calendar">${generateStreakCalendar(data.studyDates)}</div>
    </div>

    ${dueConcepts > 0 ? `
    <div class="metrics-section metrics-alert">
      <div class="metrics-sec-title">⚡ Concepte de revăzut azi (Spaced Repetition)</div>
      <p style="font-size:12px;color:#c48c00;margin-bottom:10px">
        Ai <strong>${dueConcepts}</strong> concepte de revăzut conform planului SM-2.
      </p>
      <button class="explain-btn" style="width:auto;padding:8px 20px"
        onclick="go('pratica',document.querySelector('[data-mod=pratica]'))">
        ⚡ Revizuiește acum
      </button>
    </div>` : ''}

    <div class="metrics-section">
      <div class="metrics-sec-title">🧠 Tehnica Feynman</div>
      <p style="font-size:12px;color:#4a5568">
        Ai folosit tehnica Feynman de <strong>${data.feynmanAttempts||0}</strong> ori.
        ${(data.feynmanAttempts||0) < 5 ? 'Încearcă să explici cel puțin un concept pe zi cu propriile cuvinte!' : 'Excelent — continuă să exersezi!'}
      </p>
    </div>

    <div style="font-size:10px;color:#8a9ab0;text-align:right;margin-top:8px">
      Datele sunt salvate local în browser · Ultima sesiune: ${data.lastStudyDate || 'niciodată'}
    </div>`;
}

function generateChapterBars(data) {
  const chapters = [
    {id:'legi',label:'01 · Legi Electrice'}, {id:'camp',label:'02 · Câmp Magnetic'},
    {id:'procedee',label:'03 · Procedee'}, {id:'perie',label:'05 · Perie-Colector'},
    {id:'magneti',label:'06 · Magneți'}, {id:'mcc',label:'07 · MCC Derivație'},
    {id:'mcc-serie',label:'08 · MCC Serie'}, {id:'transfer',label:'09-10 · Transfer'},
    {id:'tranzitoriu',label:'11 · Tranzitoriu'}, {id:'srvm',label:'12-14 · SRVM'},
    {id:'mpp',label:'15-19 · MPP'}, {id:'async',label:'Asincron'},
  ];
  const maxV = Math.max(1, ...chapters.map(c => data.chaptersRead[c.id]||0));
  return chapters.map(c => {
    const v = data.chaptersRead[c.id]||0;
    const pct = Math.round((v/maxV)*100);
    const col = v===0?'#eef2f7':v<3?'#99c1f1':v<7?'#3584e4':'#1a5fb4';
    return `<div class="ch-bar-row">
      <div class="ch-bar-label">${c.label}</div>
      <div class="ch-bar-track"><div class="ch-bar-fill" style="width:${pct}%;background:${col}"></div></div>
      <div class="ch-bar-count">${v}×</div>
    </div>`;
  }).join('');
}

function generateStreakCalendar(studyDates) {
  const today = new Date();
  return '<div class="cal-grid">' + Array.from({length:30},(_,i) => {
    const d = new Date(today); d.setDate(d.getDate()-(29-i));
    const iso = d.toISOString().split('T')[0];
    return `<div class="cal-day ${studyDates.includes(iso)?'cal-studied':''}" title="${iso}">${d.getDate()}</div>`;
  }).join('') + '</div>';
}

/* ─── INIT ──────────────────────────────────────────────────── */
function initMetrics() {
  const data = loadMetrics();
  Object.entries(data.modules).forEach(([id,m]) => { if (m.views>0) renderMetricsBadge(id, m.views); });
}
