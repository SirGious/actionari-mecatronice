/* ══════════════════════════════════════════════════════════════
   renderers/forte.js — Forța Laplace F = I·L·B·sin(θ)
══════════════════════════════════════════════════════════════ */

function rForte() {
  /* ── 1. LER SLIDERS ─────────────────────────────────────── */
  const i = parseFloat(document.getElementById('Foi')?.value  ?? 10);
  const L = parseFloat(document.getElementById('FoL')?.value  ?? 20);
  const B = parseFloat(document.getElementById('FoB')?.value  ?? 200);
  const T = parseFloat(document.getElementById('FoT')?.value  ?? 90);

  /* ── 2. CALCULAR ────────────────────────────────────────── */
  const sinT = Math.sin(T * Math.PI / 180);
  const F    = i * (L / 100) * (B / 1000) * sinT;

  /* ── 3. ACTUALIZAR SPANS ────────────────────────────────── */
  const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
  set('Foiv',  i   + ' A');
  set('FoLv',  L   + ' cm');
  set('FoBv',  B   + ' mT');
  set('FoTv',  T   + '°');
  set('FoF',   F.toFixed(4)   + ' N');
  set('FoSin', sinT.toFixed(4));
  set('FoP',   (F * i).toFixed(3) + ' W');

  /* ── 4. CANVAS ──────────────────────────────────────────── */
  const canvas = document.getElementById('c-forte');
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

  /* ── 5a. CAMPO B (CRUZES ⊗ — campo a entrar na página) ──── */
  const gridStep = 44;
  const crossR   = 7;
  ctx.save();
  ctx.lineWidth = 1.4;

  for (let gx = gridStep; gx < W * 0.72; gx += gridStep) {
    for (let gy = gridStep * 0.6; gy < H - gridStep * 0.4; gy += gridStep) {
      const alpha = 0.18 + (B / 1000) * 0.6;
      ctx.strokeStyle = `rgba(53,132,228,${Math.min(alpha, 0.85).toFixed(2)})`;

      /* círculo */
      ctx.beginPath();
      ctx.arc(gx, gy, crossR, 0, Math.PI * 2);
      ctx.stroke();

      /* × dentro do círculo */
      const d = crossR * 0.6;
      ctx.beginPath();
      ctx.moveTo(gx - d, gy - d); ctx.lineTo(gx + d, gy + d);
      ctx.moveTo(gx + d, gy - d); ctx.lineTo(gx - d, gy + d);
      ctx.stroke();
    }
  }

  /* label ⊗ */
  ctx.font      = 'bold 10px Poppins, sans-serif';
  ctx.fillStyle = 'rgba(53,132,228,0.85)';
  ctx.textAlign = 'left';
  ctx.fillText(`⊗  B = ${B} mT (intrând)`, 8, 14);
  ctx.restore();

  /* ── 5b. CONDUTOR (barra amarela rotacionada) ───────────── */
  const cx = W * 0.38;
  const cy = H / 2;

  /* condAngle: θ=90 → horizontal; θ=0 → vertical */
  const condAngle = (T - 90) * Math.PI / 180;
  const condLen   = 28 + (L / 100) * 55;   // escala visual

  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(condAngle);

  /* barra */
  ctx.strokeStyle = '#f6d32d';
  ctx.lineWidth   = 10;
  ctx.lineCap     = 'round';
  ctx.beginPath();
  ctx.moveTo(-condLen / 2, 0);
  ctx.lineTo( condLen / 2, 0);
  ctx.stroke();

  /* seta vermelha de corrente (interior) */
  ctx.strokeStyle = '#c01c28';
  ctx.lineWidth   = 2;
  ctx.beginPath();
  ctx.moveTo(-condLen * 0.35, 0);
  ctx.lineTo( condLen * 0.35, 0);
  ctx.stroke();
  arrowHead(ctx, condLen * 0.35, 0, 0);

  /* label i acima do condutor */
  ctx.fillStyle = '#c01c28';
  ctx.font      = 'bold 10px Poppins, sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText(`i = ${i} A`, 0, -14);

  ctx.restore();

  /* ── 5c. VETOR FORÇA F (perpendicular ao condutor, 90° CCW) */
  const fAngle  = condAngle - Math.PI / 2;
  const Fscale  = Math.min(105, Math.abs(F) * 700 + 4);
  const fx      = cx + Math.cos(fAngle) * Fscale;
  const fy      = cy + Math.sin(fAngle) * Fscale;

  ctx.save();
  ctx.strokeStyle = '#26a269';
  ctx.lineWidth   = 2.5;
  ctx.beginPath();
  ctx.moveTo(cx, cy);
  ctx.lineTo(fx, fy);
  ctx.stroke();
  arrowHead(ctx, fx, fy, fAngle);

  /* label F */
  ctx.fillStyle = '#26a269';
  ctx.font      = 'bold 11px Poppins, sans-serif';
  ctx.textAlign = 'center';
  const lx = cx + Math.cos(fAngle) * (Fscale + 18);
  const ly = cy + Math.sin(fAngle) * (Fscale + 18);
  ctx.fillText(`F = ${F.toFixed(3)} N`, lx, ly);
  ctx.restore();

  /* ── 5d. LABEL DO ÂNGULO ─────────────────────────────────── */
  ctx.save();
  ctx.font      = '10px Poppins, sans-serif';
  ctx.fillStyle = '#8a9ab0';
  ctx.textAlign = 'center';
  ctx.fillText(`θ = ${T}°  (entre i și B)   sin(θ) = ${sinT.toFixed(3)}`, W / 2, H - 8);
  ctx.restore();
}
