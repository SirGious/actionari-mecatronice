/* ══════════════════════════════════════════════════════════════
   renderers/flux.js — Flux Magnetic Φ = B · S · cos(θ)
══════════════════════════════════════════════════════════════ */

function drawGrid(ctx, W, H) {
  ctx.save();
  ctx.strokeStyle = 'rgba(208,220,234,0.7)';
  ctx.lineWidth = 0.5;
  for (let x = 0; x < W; x += 40) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
  }
  for (let y = 0; y < H; y += 40) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
  }
  ctx.restore();
}

function drawAxis(ctx, px, py, pw, ph, xLabel, yLabel) {
  ctx.save();
  ctx.strokeStyle = '#b8cce0';
  ctx.fillStyle = '#b8cce0';
  ctx.lineWidth = 1.2;
  ctx.font = '10px Poppins, sans-serif';

  ctx.beginPath();
  ctx.moveTo(px, py + ph);
  ctx.lineTo(px + pw, py + ph);
  ctx.stroke();

  ctx.beginPath();
  ctx.moveTo(px, py);
  ctx.lineTo(px, py + ph);
  ctx.stroke();

  if (xLabel) ctx.fillText(xLabel, px + pw - 14, py + ph - 4);
  if (yLabel) ctx.fillText(yLabel, px + 4, py + 10);

  ctx.restore();
}

function arrowHead(ctx, x, y, angle) {
  const size = 8;
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(-size, -size * 0.4);
  ctx.moveTo(0, 0);
  ctx.lineTo(-size,  size * 0.4);
  ctx.stroke();
  ctx.restore();
}

function rFlux() {
  /* ── 1. LER SLIDERS ─────────────────────────────────────── */
  const B  = parseFloat(document.getElementById('fB')?.value  ?? 50);
  const S  = parseFloat(document.getElementById('fS')?.value  ?? 20);
  const T  = parseFloat(document.getElementById('fT')?.value  ?? 0);
  const N  = parseFloat(document.getElementById('fN')?.value  ?? 100);

  /* ── 2. CALCULAR ────────────────────────────────────────── */
  const cosT   = Math.cos(T * Math.PI / 180);
  const psi    = B * 0.001 * S * 0.0001 * cosT * 1e6;   // μWb
  const lambda = psi * N;

  /* ── 3. ACTUALIZAR SPANS ────────────────────────────────── */
  const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
  set('fBv',  B   + ' mT');
  set('fSv',  S   + ' cm²');
  set('fTv',  T   + '°');
  set('fNv',  N   + ' esp.');
  set('fPsi', psi.toFixed(2)    + ' μWb');
  set('fLam', lambda.toFixed(1) + ' μWb');
  set('fCos', cosT.toFixed(4));

  /* ── 4. CANVAS ──────────────────────────────────────────── */
  const canvas = document.getElementById('c-flux');
  if (!canvas) return;

  const wrap = canvas.parentElement;
  const W = wrap.clientWidth || 520;
  const H = 220;
  canvas.width  = W;
  canvas.height = H;

  const ctx = canvas.getContext('2d');

  /* fundo */
  ctx.fillStyle = '#f7f9fc';
  ctx.fillRect(0, 0, W, H);

  drawGrid(ctx, W, H);

  /* ── 5a. LINHAS DE CAMPO B ──────────────────────────────── */
  const fieldX0 = 10;
  const fieldX1 = W * 0.62;
  const nLines  = 9;

  ctx.save();
  ctx.lineWidth = 1.6;

  for (let i = 0; i < nLines; i++) {
    const t     = i / (nLines - 1);
    const y     = H * 0.1 + t * H * 0.8;
    const dist  = Math.abs(y - H / 2) / (H / 2);
    const alpha = 0.25 + 0.75 * (1 - dist * 0.6);

    ctx.strokeStyle = `rgba(196,140,0,${alpha.toFixed(2)})`;
    ctx.beginPath();
    ctx.moveTo(fieldX0, y);
    ctx.lineTo(fieldX1, y);
    ctx.stroke();

    arrowHead(ctx, fieldX1, y, 0);
  }
  ctx.restore();

  /* label B */
  ctx.save();
  ctx.font = 'bold 11px Poppins, sans-serif';
  ctx.fillStyle = 'rgba(196,140,0,0.9)';
  ctx.fillText(`B = ${B} mT`, W * 0.62 - 58, 14);
  ctx.restore();

  /* ── 5b. SUPERFÍCIE S ───────────────────────────────────── */
  const cx = W * 0.22;
  const cy = H / 2;
  const rw = 45;   // metade largura  (total 90px)
  const rh = 32.5; // metade altura   (total 65px)

  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(T * Math.PI / 180);

  /* preenchimento */
  ctx.fillStyle   = 'rgba(26,95,180,0.12)';
  ctx.strokeStyle = '#1a5fb4';
  ctx.lineWidth   = 2;
  ctx.beginPath();
  ctx.rect(-rw, -rh, rw * 2, rh * 2);
  ctx.fill();
  ctx.stroke();

  /* vetor normal n̂ — sempre horizontal no referencial da superfície (T=0 → aponta para direita) */
  const nLen = 38;
  ctx.strokeStyle = '#1a5fb4';
  ctx.lineWidth   = 2;
  ctx.setLineDash([]);
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(nLen, 0);
  ctx.stroke();
  arrowHead(ctx, nLen, 0, 0);

  /* label n̂ */
  ctx.fillStyle = '#1a5fb4';
  ctx.font      = 'bold 11px Poppins, sans-serif';
  ctx.fillText('n̂', nLen + 4, -4);

  ctx.restore();

  /* label S */
  ctx.save();
  ctx.font      = '10px Poppins, sans-serif';
  ctx.fillStyle = '#1a5fb4';
  ctx.fillText(`S = ${S} cm²`, cx - 20, cy + rh + 22);
  ctx.restore();

  /* ── 5c. ARCO DO ÂNGULO θ ───────────────────────────────── */
  if (T > 2) {
    const arcR = 28;

    ctx.save();
    ctx.translate(cx, cy);

    /* arco de 0 (direção B) até T graus */
    ctx.strokeStyle = 'rgba(38,162,105,0.85)';
    ctx.lineWidth   = 1.5;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.arc(0, 0, arcR, 0, T * Math.PI / 180);
    ctx.stroke();
    ctx.setLineDash([]);

    /* label θ */
    const midAngle = (T / 2) * Math.PI / 180;
    const lx = (arcR + 8) * Math.cos(midAngle);
    const ly = (arcR + 8) * Math.sin(midAngle);
    ctx.font      = 'bold 11px Poppins, sans-serif';
    ctx.fillStyle = '#26a269';
    ctx.fillText(`θ=${T}°`, lx - 6, ly + 4);

    ctx.restore();
  }

  /* ── 5d. BARRA DE FLUXO ─────────────────────────────────── */
  const barX  = W - 68;
  const barY  = H * 0.12;
  const barW  = 22;
  const barH  = H * 0.76;
  const fill  = Math.abs(cosT);

  /* borda externa */
  ctx.save();
  ctx.strokeStyle = '#d0dcea';
  ctx.lineWidth   = 1.5;
  ctx.fillStyle   = '#ffffff';
  ctx.beginPath();
  ctx.roundRect(barX, barY, barW, barH, 4);
  ctx.fill();
  ctx.stroke();

  /* preenchimento proporcional (de baixo para cima) */
  const fillH = barH * fill;
  ctx.fillStyle = `rgba(26,95,180,${0.18 + fill * 0.55})`;
  ctx.beginPath();
  ctx.roundRect(barX, barY + barH - fillH, barW, fillH, [0, 0, 4, 4]);
  ctx.fill();

  /* labels */
  ctx.font      = 'bold 11px Poppins, sans-serif';
  ctx.fillStyle = '#1a5fb4';
  ctx.textAlign = 'center';
  ctx.fillText('Ψ', barX + barW / 2, barY - 6);

  ctx.font      = '9px Poppins, sans-serif';
  ctx.fillStyle = '#4a5568';
  ctx.fillText(`${psi.toFixed(1)}`, barX + barW / 2, barY + barH + 14);
  ctx.fillText('μWb', barX + barW / 2, barY + barH + 24);

  ctx.restore();

  /* ── LEGENDA cos θ ──────────────────────────────────────── */
  ctx.save();
  ctx.font      = '10px Poppins, sans-serif';
  ctx.fillStyle = '#8a9ab0';
  ctx.textAlign = 'left';
  ctx.fillText(`cos(θ) = ${cosT.toFixed(3)}`, W * 0.66, H - 10);
  ctx.restore();
}
