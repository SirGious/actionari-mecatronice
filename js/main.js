/* ══════════════════════════════════════════════════════════════
   main.js — Logică globală, navigare, init
══════════════════════════════════════════════════════════════ */

let currentMod = 'flux';

/* ── NAVEGARE MODUL ─────────────────────────────────────────── */
function go(id, btn) {
  /* stop SRVM animation */
  if (window.srvmRAF) { cancelAnimationFrame(window.srvmRAF); window.srvmRAF = null; }

  /* stop timer for previous module */
  if (typeof stopModuleTimer === 'function') stopModuleTimer();

  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nb').forEach(b => b.classList.remove('active'));

  const panel = document.getElementById('mod-' + id);
  if (panel) panel.classList.add('active');
  if (btn)   btn.classList.add('active');

  currentMod = id;

  /* scroll active nav button into view on mobile */
  if (btn && window.innerWidth <= 768) {
    btn.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }

  /* track view + start timer */
  if (typeof trackModuleView  === 'function') trackModuleView(id);
  if (typeof startModuleTimer === 'function') startModuleTimer(id);

  setQuick();
  setTimeout(renderAll, 60);

  /* metrics dashboard */
  if (id === 'metrics' && typeof renderMetricsDashboard === 'function') {
    setTimeout(renderMetricsDashboard, 80);
  }

  /* re-run tooltips on newly visible content */
  if (typeof markTermsInContent === 'function') {
    setTimeout(markTermsInContent, 150);
  }
}

/* ── TABS EXPLICAȚIE ────────────────────────────────────────── */
function etab(btn, blockId) {
  const wrap = btn.closest('.sim-body');
  if (!wrap) return;
  wrap.querySelectorAll('.eblock').forEach(b => b.classList.remove('show'));
  wrap.querySelectorAll('.etab').forEach(b => b.classList.remove('active'));
  const block = document.getElementById(blockId);
  if (block) block.classList.add('show');
  btn.classList.add('active');
}

/* ── QUICK BUTTONS CHAT ─────────────────────────────────────── */
function setQuick() {
  const q    = (typeof QUICK_Q !== 'undefined' && QUICK_Q[currentMod]) ? QUICK_Q[currentMod] : [];
  const area = document.getElementById('qarea');
  if (!area) return;
  /* usa data-qi + event delegation — evita problemas com chars Unicode em onclick inline */
  area.innerHTML = '<span class="quick-label">Întrebări rapide:</span>' +
    q.map((t, i) => `<button class="qb" data-qi="${i}">${t}</button>`).join('');
  area._qlist = q;   /* guarda referência para o handler */
}

/* event delegation — registado uma vez, cobre todos os .qb gerados */
document.addEventListener('click', e => {
  const btn = e.target.closest('#qarea .qb[data-qi]');
  if (!btn) return;
  const area = document.getElementById('qarea');
  const q    = area?._qlist;
  const idx  = parseInt(btn.dataset.qi, 10);
  if (q && typeof q[idx] === 'string' && typeof askQuestion === 'function') {
    askQuestion(q[idx]);
  }
});

/* ── REDIMENSIONARE CANVAS ──────────────────────────────────── */
function sizeAll() {
  const isMobile = window.innerWidth <= 480;
  const isTablet = window.innerWidth <= 768;

  document.querySelectorAll('.cv-wrap canvas').forEach(cv => {
    const containerWidth = cv.parentElement.clientWidth || 700;
    cv.width = containerWidth;
    if (isMobile) {
      cv.height = 160; cv.style.maxHeight = '160px';
    } else if (isTablet) {
      cv.height = 200; cv.style.maxHeight = '200px';
    } else {
      cv.height = 230; cv.style.maxHeight = '230px';
    }
  });
}

/* ── RENDERIZAR TODOS ───────────────────────────────────────── */
function renderAll() {
  if (typeof rFlux     === 'function') rFlux();
  if (typeof rForte    === 'function') rForte();
  if (typeof rMCC      === 'function') rMCC();
  if (typeof rTransfer === 'function') rTransfer();
  if (typeof rAsync    === 'function') rAsync();
  if (typeof rMPP      === 'function') rMPP();
  if (typeof rMCCSerie === 'function') rMCCSerie();
  rTranzitoriu();
  const srvmEl = document.getElementById('mod-srvm');
  if (srvmEl && srvmEl.classList.contains('active') && typeof rSRVM === 'function') {
    rSRVM();
  }
}

/* ── MCC SERIE renderer inline ───────────────────────────────── */
function rMCCSerie() {
  const U  = parseFloat(document.getElementById('msU')?.value  ?? 220);
  const I  = parseFloat(document.getElementById('msI')?.value  ?? 20);
  const Ra = parseFloat(document.getElementById('msRa')?.value ?? 0.5);
  const ke = parseFloat(document.getElementById('msKe')?.value ?? 1.2);

  const psi = 1 - Math.exp(-I / 20);         /* saturação magnética normalizada */
  const E   = Math.max(0, U - Ra * I - 0.5);
  const n   = psi > 0.01 ? Math.max(0, E / (ke * psi)) : 0;

  sv('msUv',  U + ' V');
  sv('msIv',  I + ' A');
  sv('msRav', Ra + ' Ω');
  sv('msKev', ke.toFixed(2));
  sv('msN',   n.toFixed(0) + ' rpm');
  sv('msE',   E.toFixed(1) + ' V');
  sv('msPsi', psi.toFixed(3));

  const canvas = document.getElementById('c-mcc-serie');
  if (!canvas) return;
  const wrap = canvas.parentElement;
  const W = wrap.clientWidth || 520, H = 230;
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#f7f9fc'; ctx.fillRect(0,0,W,H);
  if (typeof drawGrid === 'function') drawGrid(ctx, W, H);
  if (typeof drawAxis === 'function') drawAxis(ctx, 48, 14, W-68, H-52, 'M (N·m)', 'n (rpm)');

  const px=48,py=14,pw=W-68,ph=H-52;
  const nMax = (U / ke) * 1.4;
  const MMax = ke * 80 * 1.2;
  const toX = m => px + (Math.min(m,MMax)/MMax)*pw;
  const toY = nv=> py + ph - (Math.min(Math.max(nv,0),nMax)/nMax)*ph;

  /* MCC derivație (reta) */
  ctx.save(); ctx.strokeStyle='rgba(53,132,228,0.5)'; ctx.lineWidth=1.5; ctx.setLineDash([4,3]);
  ctx.beginPath();
  for (let ia=0;ia<=80;ia+=2) {
    const nv=(U-0.5*ia)/ke, mv=ke*ia;
    if(ia===0) ctx.moveTo(toX(mv),toY(nv)); else ctx.lineTo(toX(mv),toY(nv));
  }
  ctx.stroke(); ctx.setLineDash([]);
  ctx.font='9px Poppins,sans-serif'; ctx.fillStyle='rgba(53,132,228,0.7)'; ctx.fillText('Derivație',toX(ke*10)+4,toY((U-0.5*10)/ke)-4);
  ctx.restore();

  /* MCC serie (hiperbolă) */
  ctx.save(); ctx.strokeStyle='#c01c28'; ctx.lineWidth=2.2;
  ctx.beginPath(); let first=true;
  for (let ia=1;ia<=100;ia+=1) {
    const ps=1-Math.exp(-ia/20);
    const e=Math.max(0,U-Ra*ia-0.5);
    const nv=ps>0.01?Math.max(0,e/(ke*ps)):0;
    const mv=ke*ia*ps;
    const x=toX(mv),y=toY(nv);
    if(first){ctx.moveTo(x,y);first=false;} else ctx.lineTo(x,y);
  }
  ctx.stroke();
  ctx.font='bold 9px Poppins,sans-serif'; ctx.fillStyle='#c01c28'; ctx.fillText('Serie (hiperbolă)',px+4,py+14);
  ctx.restore();

  /* ponto de operação */
  const opM=ke*I*psi, opN=n;
  ctx.save();
  ctx.fillStyle='#f6d32d'; ctx.strokeStyle='#c48c00'; ctx.lineWidth=2;
  ctx.beginPath(); ctx.arc(toX(opM),toY(opN),6,0,Math.PI*2); ctx.fill(); ctx.stroke();
  ctx.font='bold 9px Poppins,sans-serif'; ctx.fillStyle='#c48c00';
  ctx.fillText(`n=${opN.toFixed(0)}rpm`,toX(opM)+8,toY(opN)-4);
  ctx.restore();
}

/* ── TRANZITORIU metrics (usa sliders do transfer) ─────────── */
function rTranzitoriu() {
  const Ra = parseFloat(document.getElementById('tRa')?.value ?? 2);
  const Lm = parseFloat(document.getElementById('tL')?.value  ?? 50) * 0.001;
  const J  = parseFloat(document.getElementById('tJ')?.value  ?? 200) * 1e-7;
  const k  = parseFloat(document.getElementById('tk')?.value  ?? 1.5);
  const te = (Lm / Ra) * 1000;
  const tm = (Ra * J / (k*k)) * 1000;
  sv('trTe', te.toFixed(1));
  sv('trTm', tm.toFixed(1));
  sv('trTs', (4*tm).toFixed(1));
}

/* ── HELPERS ────────────────────────────────────────────────── */
function gv(id) {
  const el = document.getElementById(id);
  return el ? parseFloat(el.value) : 0;
}
function sv(id, v) {
  const el = document.getElementById(id);
  if (el) el.textContent = v;
}

/* ── INIT ───────────────────────────────────────────────────── */
window.addEventListener('load', () => {
  sizeAll();
  setTimeout(() => {
    sizeAll();
    renderAll();
    if (typeof buildGloss       === 'function') buildGloss();
    if (typeof initMetrics      === 'function') initMetrics();
    if (typeof initTooltips     === 'function') initTooltips();
    if (typeof buildFigures     === 'function') buildFigures();
    if (typeof loadFlashcards   === 'function') loadFlashcards();
    if (typeof loadQA           === 'function') loadQA();
    setQuick();

    /* activate first nav button */
    const firstBtn = document.querySelector('.nb[data-mod="legi"]');
    if (firstBtn) firstBtn.classList.add('active');

    /* start timer for initial module */
    if (typeof startModuleTimer === 'function') startModuleTimer('legi');
    if (typeof trackModuleView  === 'function') trackModuleView('legi');
  }, 200);
});

/* debounced resize */
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => { sizeAll(); renderAll(); }, 150);
});

/* orientation change on mobile */
window.addEventListener('orientationchange', () => {
  setTimeout(() => { sizeAll(); renderAll(); }, 300);
});
