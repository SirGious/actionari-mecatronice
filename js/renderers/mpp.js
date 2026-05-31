/* ══════════════════════════════════════════════════════════════
   renderers/mpp.js — Motor Pas cu Pas
   θp = 360 / (Nr · m)
══════════════════════════════════════════════════════════════ */

function rMPP() {
  /* ── 1. LER SLIDERS ─────────────────────────────────────── */
  const Ns = parseFloat(document.getElementById('pNs')?.value ?? 50);
  const m  = parseFloat(document.getElementById('pm')?.value  ?? 4);
  const f  = parseFloat(document.getElementById('pf')?.value  ?? 200);
  const J  = parseFloat(document.getElementById('pJ')?.value  ?? 80);

  /* ── 2. CALCULAR ────────────────────────────────────────── */
  const theta  = 360 / (Ns * m);
  const ppr    = Math.round(360 / theta);
  const rpm    = f * theta / 6;
  const Mhold  = 0.2;
  const frez   = (1 / (2 * Math.PI)) * Math.sqrt((Ns / 2) * Mhold / (J * 1e-7));

  /* ── 3. ACTUALIZAR SPANS ────────────────────────────────── */
  const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
  set('pNsv',  Ns   + ' dinți');
  set('pmv',   m    + ' faze');
  set('pfv',   f    + ' Hz');
  set('pJv',   J    + ' g·cm²');
  set('pTh',   theta.toFixed(2)  + '°');
  set('pRpm',  rpm.toFixed(1)    + ' rpm');
  set('pFrez', frez.toFixed(1)   + ' Hz');

  /* ── 4. CANVAS ──────────────────────────────────────────── */
  const canvas = document.getElementById('c-mpp');
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

  /* ── AVISO DE REZONANȚĂ ─────────────────────────────────── */
  const nearRes = Math.abs(f - frez) / Math.max(frez, 1) < 0.3;
  if (nearRes) {
    ctx.save();
    ctx.fillStyle   = 'rgba(192,28,40,0.08)';
    ctx.strokeStyle = 'rgba(192,28,40,0.6)';
    ctx.lineWidth   = 1.5;
    ctx.setLineDash([5, 4]);
    ctx.beginPath();
    ctx.rect(1, 1, W - 2, H - 2);
    ctx.fill();
    ctx.stroke();
    ctx.setLineDash([]);

    ctx.font      = 'bold 11px Poppins, sans-serif';
    ctx.fillStyle = '#c01c28';
    ctx.textAlign = 'center';
    ctx.fillText(`⚠  f ≈ frez = ${frez.toFixed(0)} Hz — REZONANȚĂ!`, W / 2, 18);
    ctx.restore();
  }

  /* ── 5a. SECȚIUNE TRANSVERSALĂ ───────────────────────────── */
  const cx = 100;
  const cy = H / 2;
  const Ro = 68;
  const Ri = 30;

  /* stator (cerc exterior) */
  ctx.save();
  ctx.fillStyle   = '#ddeeff';
  ctx.strokeStyle = '#1a5fb4';
  ctx.lineWidth   = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, Ro, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  /* dentes stator */
  const nStatorTeeth = Math.min(12, m * 3);
  const phaseColors  = ['#1a5fb4', '#3584e4', '#62a0ea', '#99c1f1'];
  ctx.save();
  for (let ti = 0; ti < nStatorTeeth; ti++) {
    const angle     = (ti / nStatorTeeth) * Math.PI * 2 - Math.PI / 2;
    const phaseIdx  = ti % phaseColors.length;
    const tx        = cx + Math.cos(angle) * (Ro - 12);
    const ty        = cy + Math.sin(angle) * (Ro - 12);

    ctx.fillStyle   = phaseColors[phaseIdx];
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth   = 1;

    ctx.save();
    ctx.translate(tx, ty);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.moveTo(-5, -8);
    ctx.lineTo( 5, -8);
    ctx.lineTo( 7,  8);
    ctx.lineTo(-7,  8);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }
  ctx.restore();

  /* fundal interior (să acopere cercul stator) */
  ctx.save();
  ctx.fillStyle = '#eef2f7';
  ctx.beginPath();
  ctx.arc(cx, cy, Ro - 22, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  /* rotor (cerc interior) */
  ctx.save();
  ctx.fillStyle   = '#e8e8e8';
  ctx.strokeStyle = '#4a5568';
  ctx.lineWidth   = 1.5;
  ctx.beginPath();
  ctx.arc(cx, cy, Ri, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  /* dentes rotor */
  const nRotorTeeth = Math.min(20, Ns);
  ctx.save();
  for (let ti = 0; ti < nRotorTeeth; ti++) {
    const angle = (ti / nRotorTeeth) * Math.PI * 2;
    const tx    = cx + Math.cos(angle) * (Ri - 2);
    const ty    = cy + Math.sin(angle) * (Ri - 2);

    ctx.fillStyle   = '#4a5568';
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth   = 0.8;

    ctx.save();
    ctx.translate(tx, ty);
    ctx.rotate(angle);
    ctx.beginPath();
    ctx.rect(-2, -6, 4, 6);
    ctx.fill();
    ctx.stroke();
    ctx.restore();
  }
  ctx.restore();

  /* label centru */
  ctx.save();
  ctx.font      = 'bold 9px Poppins, sans-serif';
  ctx.fillStyle = '#1c1c1e';
  ctx.textAlign = 'center';
  ctx.fillText('ROTOR', cx, cy - 4);
  ctx.fillText(`Nr=${Ns}`, cx, cy + 9);
  ctx.restore();

  /* ── 5b. CURBA CUPLU vs UNGHI ────────────────────────────── */
  const gx = cx + Ro + 14;
  const gw = W - gx - 14;
  const gy = H * 0.12;
  const gh = H * 0.70;

  /* fundo área */
  ctx.save();
  ctx.fillStyle   = 'rgba(255,255,255,0.5)';
  ctx.strokeStyle = '#d0dcea';
  ctx.lineWidth   = 1;
  ctx.beginPath();
  ctx.rect(gx, gy, gw, gh);
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  /* linha zero */
  ctx.save();
  ctx.strokeStyle = 'rgba(139,154,176,0.5)';
  ctx.lineWidth   = 1;
  ctx.setLineDash([3, 3]);
  ctx.beginPath();
  ctx.moveTo(gx, gy + gh / 2);
  ctx.lineTo(gx + gw, gy + gh / 2);
  ctx.stroke();
  ctx.setLineDash([]);
  ctx.restore();

  /* 3 períodos do sinal sinusoidal de cuplu */
  const periods   = 3;
  const thetaRad  = theta * Math.PI / 180;
  const totalAng  = thetaRad * periods;
  const pts       = 280;

  ctx.save();
  ctx.strokeStyle = '#1a5fb4';
  ctx.lineWidth   = 2;
  ctx.beginPath();
  for (let si = 0; si <= pts; si++) {
    const ang = (si / pts) * totalAng;
    const Mc  = Math.sin((2 * Math.PI * ang) / thetaRad) * 0.8;
    const x   = gx + (si / pts) * gw;
    const y   = gy + gh / 2 - Mc * gh * 0.42;
    if (si === 0) ctx.moveTo(x, y);
    else           ctx.lineTo(x, y);
  }
  ctx.stroke();
  ctx.restore();

  /* marcadores verticais a cada passo θp */
  ctx.save();
  ctx.strokeStyle = 'rgba(196,140,0,0.55)';
  ctx.lineWidth   = 1;
  ctx.setLineDash([3, 3]);
  for (let pi = 1; pi < periods; pi++) {
    const mx = gx + (pi / periods) * gw;
    ctx.beginPath();
    ctx.moveTo(mx, gy);
    ctx.lineTo(mx, gy + gh);
    ctx.stroke();
  }
  ctx.setLineDash([]);
  ctx.restore();

  /* label eixo cuplu */
  ctx.save();
  ctx.font      = '9px Poppins, sans-serif';
  ctx.fillStyle = '#8a9ab0';
  ctx.textAlign = 'left';
  ctx.fillText('M (N·m)', gx + 2, gy - 4);
  ctx.restore();

  /* ── LABEL DE FUNDO ──────────────────────────────────────── */
  ctx.save();
  ctx.font      = 'bold 10px Poppins, sans-serif';
  ctx.fillStyle = '#4a5568';
  ctx.textAlign = 'center';
  ctx.fillText(
    `θp=${theta.toFixed(2)}°/pas  |  ${ppr} pași/rot  |  ${rpm.toFixed(1)} rpm`,
    W / 2, H - 6
  );
  ctx.restore();
}
