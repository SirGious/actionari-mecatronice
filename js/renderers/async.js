/* ══════════════════════════════════════════════════════════════
   renderers/async.js — Caracteristica mecanică motor asincron
   Formula Kloss: M = 2·Mm / (s/sm + sm/s)
══════════════════════════════════════════════════════════════ */

function rAsync() {
  /* ── 1. LER SLIDERS ─────────────────────────────────────── */
  const U  = parseFloat(document.getElementById('asU')?.value  ?? 220);
  const f  = parseFloat(document.getElementById('asF')?.value  ?? 50);
  const R2 = parseFloat(document.getElementById('asR2')?.value ?? 0.5);
  const Xs = parseFloat(document.getElementById('asXs')?.value ?? 2.0);

  /* ── 2. CALCULAR (p = 2 perechi de poli) ────────────────── */
  const p  = 2;
  const w1 = 2 * Math.PI * f;
  const n1 = (60 * f) / p;
  const Mm = (3 * p * U * U) / (2 * w1 * Xs);
  const sm = R2 / Xs;

  /* ── 3. ACTUALIZAR SPANS ────────────────────────────────── */
  const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
  set('asUv',  U   + ' V');
  set('asFv',  f   + ' Hz');
  set('asR2v', R2  + ' Ω');
  set('asXsv', Xs  + ' Ω');
  set('asN1',  n1.toFixed(0) + ' rpm');
  set('asMm',  Mm.toFixed(2) + ' N·m');
  set('asSm',  sm.toFixed(4));

  /* ── 4. CANVAS ──────────────────────────────────────────── */
  const canvas = document.getElementById('c-async');
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
  const px = 52, py = 14, pw = W - px - 20, ph = H - py - 38;
  drawAxis(ctx, px, py, pw, ph, 'n₂ (rpm)', 'M (N·m)');

  const Mscale = Mm * 1.45;
  const toX    = (nv) => px + (nv / n1) * pw;
  const toY    = (mv) => py + ph - Math.min(Math.max(mv, 0), Mscale * 1.1) / Mscale * ph;

  /* ── ZONAS ESTABIL / INSTABIL ────────────────────────────── */
  const smX = px + ((n1 * (1 - sm)) / n1) * pw;

  /* Zona A — estabilă (verde) */
  ctx.save();
  ctx.fillStyle = 'rgba(38,162,105,0.06)';
  ctx.fillRect(smX, py, px + pw - smX, ph);

  /* Zona B — instabilă (roșu) */
  ctx.fillStyle = 'rgba(192,28,40,0.05)';
  ctx.fillRect(px, py, smX - px, ph);
  ctx.restore();

  /* labels zone */
  ctx.save();
  ctx.font      = 'bold 9px Poppins, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillStyle = 'rgba(38,162,105,0.7)';
  ctx.fillText('A stabil', (smX + px + pw) / 2, py + 12);
  ctx.fillStyle = 'rgba(192,28,40,0.7)';
  ctx.fillText('B instabil', (px + smX) / 2, py + 12);
  ctx.restore();

  /* ── LINIE TRACEJATĂ LA n1 ───────────────────────────────── */
  ctx.save();
  ctx.strokeStyle = 'rgba(26,95,180,0.35)';
  ctx.lineWidth   = 1.2;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.moveTo(px + pw, py);
  ctx.lineTo(px + pw, py + ph);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.restore();

  /* label n1 */
  ctx.save();
  ctx.font      = '9px Poppins, sans-serif';
  ctx.fillStyle = '#4a5568';
  ctx.textAlign = 'center';
  ctx.fillText(`n₁=${n1}`, px + pw, py + ph + 12);
  ctx.restore();

  /* ── CURVA KLOSS ─────────────────────────────────────────── */
  ctx.save();
  ctx.strokeStyle = '#1a5fb4';
  ctx.lineWidth   = 2.2;
  ctx.beginPath();
  let first = true;
  for (let si = 0.003; si <= 1.0; si += 0.004) {
    const nv  = n1 * (1 - si);
    const Mk  = (2 * Mm) / (si / sm + sm / si);
    const MkC = Math.min(Math.max(Mk, 0), Mscale * 1.1);
    const x   = toX(nv);
    const y   = toY(MkC);
    if (first) { ctx.moveTo(x, y); first = false; }
    else         ctx.lineTo(x, y);
  }
  ctx.stroke();
  ctx.restore();

  /* ── PONTO Mm ────────────────────────────────────────────── */
  const mmNv = n1 * (1 - sm);
  ctx.save();
  ctx.fillStyle   = '#f6d32d';
  ctx.strokeStyle = '#c48c00';
  ctx.lineWidth   = 2;
  ctx.beginPath();
  ctx.arc(toX(mmNv), toY(Mm), 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.font      = 'bold 9px Poppins, sans-serif';
  ctx.fillStyle = '#c48c00';
  ctx.textAlign = 'left';
  ctx.fillText(`Mₘ=${Mm.toFixed(2)} N·m`, toX(mmNv) + 9, toY(Mm) - 4);
  ctx.restore();

  /* ── LABELS EIXOS ────────────────────────────────────────── */
  ctx.save();
  ctx.font      = '9px Poppins, sans-serif';
  ctx.fillStyle = '#8a9ab0';
  ctx.textAlign = 'center';
  [0, Math.round(n1 * 0.25), Math.round(n1 * 0.5), Math.round(n1 * 0.75)].forEach(v => {
    ctx.fillText(v, toX(v), py + ph + 12);
  });
  ctx.textAlign = 'right';
  [0, Math.round(Mscale * 0.5), Math.round(Mscale)].forEach(v => {
    ctx.fillText(v, px - 4, toY(v) + 3);
  });
  ctx.restore();
}
