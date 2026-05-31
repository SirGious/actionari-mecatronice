/* ══════════════════════════════════════════════════════════════
   renderers/mcc.js — Caracteristica mecanică MCC n = f(Ia)
══════════════════════════════════════════════════════════════ */

function rMCC() {
  /* ── 1. LER SLIDERS ─────────────────────────────────────── */
  const U  = parseFloat(document.getElementById('mU')?.value  ?? 220);
  const Ia = parseFloat(document.getElementById('mIa')?.value ?? 20);
  const Ra = parseFloat(document.getElementById('mRa')?.value ?? 1.5);
  const ke = parseFloat(document.getElementById('mKe')?.value ?? 1.2);

  /* ── 2. CALCULAR ────────────────────────────────────────── */
  const E  = U - Ra * Ia;
  const n  = Math.max(0, E / ke);
  const Pm = Math.max(0, E * Ia);

  /* ── 3. ACTUALIZAR SPANS ────────────────────────────────── */
  const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
  set('mUv',  U   + ' V');
  set('mIav', Ia  + ' A');
  set('mRav', Ra  + ' Ω');
  set('mKev', ke  + ' V·s/rad');
  set('mN',   n.toFixed(1)   + ' rpm');
  set('mE',   E.toFixed(2)   + ' V');
  set('mPm',  Pm.toFixed(1)  + ' W');

  /* ── 4. CANVAS ──────────────────────────────────────────── */
  const canvas = document.getElementById('c-mcc');
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
  drawAxis(ctx, px, py, pw, ph, 'Ia (A)', 'n (rpm)');

  const n0     = U / ke;
  const nMax   = n0 * 1.15;
  const IaMax  = 150;

  const toX = (ia) => px + (ia  / IaMax) * pw;
  const toY = (nv) => py + ph - (nv / nMax) * ph;

  /* ── CURVA CARACTERISTICĂ ────────────────────────────────── */
  ctx.save();
  ctx.strokeStyle = '#1a5fb4';
  ctx.lineWidth   = 2;
  ctx.beginPath();
  let first = true;
  for (let ia = 0; ia <= IaMax; ia += 1) {
    const nv = Math.max(0, (U - Ra * ia) / ke);
    const x  = toX(ia);
    const y  = toY(nv);
    if (first) { ctx.moveTo(x, y); first = false; }
    else         ctx.lineTo(x, y);
  }
  ctx.stroke();
  ctx.restore();

  /* ── LINHA N0 (label eixo Y) ─────────────────────────────── */
  ctx.save();
  ctx.font      = '9px Poppins, sans-serif';
  ctx.fillStyle = '#4a5568';
  ctx.textAlign = 'right';
  ctx.fillText(`n₀=${n0.toFixed(0)}`, px - 2, toY(n0) + 3);

  /* tracinho n0 */
  ctx.strokeStyle = 'rgba(26,95,180,0.2)';
  ctx.lineWidth   = 1;
  ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.moveTo(px, toY(n0));
  ctx.lineTo(px + pw, toY(n0));
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.restore();

  /* ── PONTO DE OPERAÇÃO ───────────────────────────────────── */
  const opX = toX(Ia);
  const opY = toY(n);

  /* linhas tracejadas aos eixos */
  ctx.save();
  ctx.strokeStyle = 'rgba(196,140,0,0.55)';
  ctx.lineWidth   = 1;
  ctx.setLineDash([4, 3]);
  ctx.beginPath();
  ctx.moveTo(opX, opY); ctx.lineTo(opX, py + ph);  /* para eixo X */
  ctx.moveTo(opX, opY); ctx.lineTo(px,  opY);       /* para eixo Y */
  ctx.stroke();
  ctx.setLineDash([]);

  /* círculo amarelo */
  ctx.fillStyle   = '#f6d32d';
  ctx.strokeStyle = '#c48c00';
  ctx.lineWidth   = 2;
  ctx.beginPath();
  ctx.arc(opX, opY, 6, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  /* label do ponto */
  ctx.font      = 'bold 10px Poppins, sans-serif';
  ctx.fillStyle = '#c48c00';
  ctx.textAlign = 'left';
  const lbx = opX + 9;
  const lby = opY - 14;
  ctx.fillText(`n=${n.toFixed(0)} rpm`, lbx, lby);
  ctx.fillText(`E=${E.toFixed(1)} V`,  lbx, lby + 12);
  ctx.restore();

  /* ── LABELS EIXOS ────────────────────────────────────────── */
  ctx.save();
  ctx.font      = '9px Poppins, sans-serif';
  ctx.fillStyle = '#8a9ab0';
  ctx.textAlign = 'center';

  /* marcas X */
  [0, 50, 100, 150].forEach(v => {
    ctx.fillText(v, toX(v), py + ph + 12);
  });

  /* marcas Y */
  ctx.textAlign = 'right';
  [0, Math.round(nMax * 0.5), Math.round(nMax)].forEach(v => {
    ctx.fillText(v, px - 4, toY(v) + 3);
  });
  ctx.restore();
}
