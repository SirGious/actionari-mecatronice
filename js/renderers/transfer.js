/* ══════════════════════════════════════════════════════════════
   renderers/transfer.js — Funcție de transfer G(s), răspuns treaptă
══════════════════════════════════════════════════════════════ */

function stepResp(wn, xi, t) {
  if (xi < 0.9999) {
    const wd = wn * Math.sqrt(1 - xi * xi);
    return 1 - Math.exp(-xi * wn * t) * (
      Math.cos(wd * t) + (xi / Math.sqrt(1 - xi * xi)) * Math.sin(wd * t)
    );
  }
  if (xi > 1.0001) {
    const r1 = -wn * (xi - Math.sqrt(xi * xi - 1));
    const r2 = -wn * (xi + Math.sqrt(xi * xi - 1));
    return 1 + (r2 * Math.exp(r1 * t) - r1 * Math.exp(r2 * t)) / (r1 - r2);
  }
  /* critic */
  return 1 - Math.exp(-wn * t) * (1 + wn * t);
}

function rTransfer() {
  /* ── 1. LER SLIDERS ─────────────────────────────────────── */
  const Ra = parseFloat(document.getElementById('tRa')?.value ?? 1.5);
  const Lm = parseFloat(document.getElementById('tL')?.value  ?? 10)  * 0.001;    /* mH → H  */
  const J  = parseFloat(document.getElementById('tJ')?.value  ?? 500) * 1e-7;     /* g·cm² → kg·m² */
  const k  = parseFloat(document.getElementById('tk')?.value  ?? 0.8);

  /* ── 2. CALCULAR ────────────────────────────────────────── */
  const k2 = k * k;
  const wn = Math.sqrt(k2 / (Lm * J));
  const xi = (Ra / 2) * Math.sqrt(J / (k2 * Lm));
  const reg = xi < 0.95 ? 'subamort.' : xi > 1.05 ? 'supramort.' : 'critic';

  /* ── 3. ACTUALIZAR SPANS ────────────────────────────────── */
  const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
  set('tRav', Ra + ' Ω');
  set('tLv',  (Lm * 1000).toFixed(1) + ' mH');
  set('tJv',  (J  / 1e-7).toFixed(0) + ' g·cm²');
  set('tkv',  k  + ' V·s/rad');
  set('tWn',  wn.toFixed(2) + ' rad/s');
  set('tXi',  xi.toFixed(3));
  set('tReg', reg);

  /* ── 4. CANVAS ──────────────────────────────────────────── */
  const canvas = document.getElementById('c-transfer');
  if (!canvas) return;

  const wrap = canvas.parentElement;
  const W = wrap.clientWidth || 520;
  const H = 220;
  canvas.width  = W;
  canvas.height = H;

  const ctx = canvas.getContext('2d');

  ctx.fillStyle = '#f7f9fc';
  ctx.fillRect(0, 0, W, H);
  drawGrid(ctx, W, H);

  /* ── ÁREA DO GRÁFICO ────────────────────────────────────── */
  const px = 48, py = 14, pw = W - px - 16, ph = H - py - 38;
  drawAxis(ctx, px, py, pw, ph, 't (s)', 'Ω/Ω_ref');

  const tEnd = Math.max(12 / wn, 0.08);
  const pts  = 350;

  const toX = (t) => px + (t / tEnd) * pw;
  const toY = (y) => py + ph - Math.min(Math.max(y, -0.2), 1.9) * ph * 0.9;

  /* linha de referência Ω=1 */
  ctx.save();
  ctx.strokeStyle = 'rgba(38,162,105,0.65)';
  ctx.lineWidth   = 1.2;
  ctx.setLineDash([5, 4]);
  ctx.beginPath();
  ctx.moveTo(px, toY(1));
  ctx.lineTo(px + pw, toY(1));
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.restore();

  /* ── 3 CURVAS ────────────────────────────────────────────── */
  const curves = [
    { xiVal: xi,       color: '#1a5fb4', lw: 2.5, alpha: 1.0,  label: `ξ=${xi.toFixed(2)} (actual)` },
    { xiVal: xi * 0.3, color: '#c01c28', lw: 1.5, alpha: 0.55, label: `ξ=${(xi*0.3).toFixed(2)} (−)` },
    { xiVal: xi * 4,   color: '#26a269', lw: 1.5, alpha: 0.55, label: `ξ=${(xi*4).toFixed(2)} (+)` }
  ];

  curves.forEach(({ xiVal, color, lw, alpha, label }, ci) => {
    const xiSafe = Math.max(0.01, xiVal);
    ctx.save();
    ctx.globalAlpha  = alpha;
    ctx.strokeStyle  = color;
    ctx.lineWidth    = lw;
    ctx.beginPath();
    let first = true;
    for (let si = 0; si <= pts; si++) {
      const t = (si / pts) * tEnd;
      const y = stepResp(wn, xiSafe, t);
      const x = toX(t);
      const yp = toY(y);
      if (first) { ctx.moveTo(x, yp); first = false; }
      else         ctx.lineTo(x, yp);
    }
    ctx.stroke();
    ctx.restore();

    /* label da curva */
    ctx.save();
    ctx.globalAlpha = alpha;
    ctx.font        = '9px Poppins, sans-serif';
    ctx.fillStyle   = color;
    ctx.textAlign   = 'right';
    ctx.fillText(label, px + pw - 2, py + 12 + ci * 13);
    ctx.restore();
  });

  /* ── LABELS EIXO X ───────────────────────────────────────── */
  ctx.save();
  ctx.font      = '9px Poppins, sans-serif';
  ctx.fillStyle = '#8a9ab0';
  ctx.textAlign = 'center';
  const ticks = 5;
  for (let ti = 0; ti <= ticks; ti++) {
    const tv = (ti / ticks) * tEnd;
    ctx.fillText(tv.toFixed(3), toX(tv), py + ph + 12);
  }
  /* marcas Y */
  ctx.textAlign = 'right';
  [0, 0.5, 1.0, 1.5].forEach(v => {
    ctx.fillText(v.toFixed(1), px - 4, toY(v) + 3);
  });
  ctx.restore();
}
