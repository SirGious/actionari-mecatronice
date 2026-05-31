/* ══════════════════════════════════════════════════════════════
   renderers/srvm.js — BLDC / SRVM animat cu requestAnimationFrame
══════════════════════════════════════════════════════════════ */

window.srvmRAF = null;

function rSRVM() {
  /* ── 1. LER SLIDERS ─────────────────────────────────────── */
  const U  = parseFloat(document.getElementById('sU')?.value  ?? 48);
  const p  = parseFloat(document.getElementById('sp')?.value  ?? 3);
  const ke = parseFloat(document.getElementById('ske')?.value ?? 20);
  const tl = parseFloat(document.getElementById('stl')?.value ?? 30);

  /* ── 2. CALCULAR ────────────────────────────────────────── */
  const n     = Math.max(0, (U / (ke * 0.001)) * (60 / (2 * Math.PI)) * (1 - tl / 180));
  const comut = p * 6;
  const mode  = tl < 25 ? 'UȘOARĂ' : tl > 75 ? 'LIMITĂ' : 'NOMINALĂ';

  /* ── 3. ACTUALIZAR SPANS ────────────────────────────────── */
  const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
  set('sUv',   U   + ' V');
  set('spv',   p   + ' perechi');
  set('skev',  ke  + ' mV·s/rad');
  set('stlv',  tl  + ' %');
  set('sN',    n.toFixed(0)  + ' rpm');
  set('sC',    comut);
  set('sMode', mode);

  /* ── 4. CANVAS ──────────────────────────────────────────── */
  const canvas = document.getElementById('c-srvm');
  if (!canvas) return;

  const wrap = canvas.parentElement;
  const W = wrap.clientWidth || 520;
  const H = 230;
  if (canvas.width !== W)  canvas.width  = W;
  if (canvas.height !== H) canvas.height = H;

  const ctx = canvas.getContext('2d');

  /* ângulo de rotação baseado no tempo */
  const rotAngle = performance.now() * (n * (2 * Math.PI / 60)) / 1000;

  ctx.fillStyle = '#f7f9fc';
  ctx.fillRect(0, 0, W, H);
  drawGrid(ctx, W, H);

  /* sector Hall atual (0-5) */
  const norm        = ((rotAngle % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);
  const hallSector  = Math.floor(norm / (Math.PI / 3)) % 6;

  /* ── 5a. ESTATOR ─────────────────────────────────────────── */
  const cx = 100, cy = H / 2;
  const Ro = 70,  Ri = 24;

  /* anel estator */
  ctx.save();
  ctx.fillStyle   = '#e8f0fb';
  ctx.strokeStyle = '#1a5fb4';
  ctx.lineWidth   = 2;
  ctx.beginPath();
  ctx.arc(cx, cy, Ro, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.restore();

  /* 6 bobinas / slots (2 por fase A, B, C) */
  const phaseColors = ['#1a5fb4', '#26a269', '#c01c28'];   /* A=azul, B=verde, C=roșu */
  const phaseNames  = ['A', 'B', 'C'];

  /* mapeamento sector → fase ativă (comutatie trapezoidala simplificata) */
  const activeMap = [
    [0, 1],  /* sector 0: A+ B− */
    [0, 2],  /* sector 1: A+ C− */
    [1, 2],  /* sector 2: B+ C− */
    [1, 0],  /* sector 3: B+ A− */
    [2, 0],  /* sector 4: C+ A− */
    [2, 1],  /* sector 5: C+ B− */
  ];
  const [posPhase, negPhase] = activeMap[hallSector];

  for (let si = 0; si < 6; si++) {
    const ang       = (si / 6) * Math.PI * 2 - Math.PI / 2;
    const phaseIdx  = si % 3;
    const isActive  = phaseIdx === posPhase || phaseIdx === negPhase;
    const alpha     = isActive ? 0.9 : 0.22;
    const bx        = cx + Math.cos(ang) * (Ro - 14);
    const by        = cy + Math.sin(ang) * (Ro - 14);

    ctx.save();
    ctx.translate(bx, by);
    ctx.rotate(ang);
    ctx.fillStyle   = phaseColors[phaseIdx].replace(')', `,${alpha})`).replace('#', 'rgba(').replace('rgba(#', 'rgba(');

    /* converter hex → rgba manualmente */
    const hexMap = { '#1a5fb4': `rgba(26,95,180,${alpha})`, '#26a269': `rgba(38,162,105,${alpha})`, '#c01c28': `rgba(192,28,40,${alpha})` };
    ctx.fillStyle   = hexMap[phaseColors[phaseIdx]] || phaseColors[phaseIdx];
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth   = 1;
    ctx.beginPath();
    ctx.roundRect(-6, -10, 12, 20, 2);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#ffffff';
    ctx.font      = 'bold 8px Poppins, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(phaseNames[phaseIdx], 0, 3);
    ctx.restore();
  }

  /* fundo interior (limpar área do rotor) */
  ctx.save();
  ctx.fillStyle = '#f0f4f9';
  ctx.beginPath();
  ctx.arc(cx, cy, Ro - 26, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  /* ── 5b. ROTOR (girando) ─────────────────────────────────── */
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(rotAngle);

  const nSeg     = p * 2;
  const segAngle = (Math.PI * 2) / nSeg;

  for (let si = 0; si < nSeg; si++) {
    const isN    = si % 2 === 0;
    const aStart = si * segAngle - Math.PI / 2;
    const aEnd   = aStart + segAngle;
    const rInner = Ri - 4;
    const rOuter = Ri + 6;

    ctx.beginPath();
    ctx.arc(0, 0, rOuter, aStart, aEnd);
    ctx.arc(0, 0, rInner, aEnd, aStart, true);
    ctx.closePath();
    ctx.fillStyle   = isN ? 'rgba(192,28,40,0.85)' : 'rgba(53,132,228,0.85)';
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth   = 1;
    ctx.fill();
    ctx.stroke();

    /* letra N / S */
    const midA = aStart + segAngle / 2;
    const lx   = Math.cos(midA) * (rInner + rOuter) / 2;
    const ly   = Math.sin(midA) * (rInner + rOuter) / 2;
    ctx.fillStyle = '#ffffff';
    ctx.font      = `bold ${Math.max(6, Math.floor(12 / Math.sqrt(nSeg)))}px Poppins, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(isN ? 'N' : 'S', lx, ly);
  }
  ctx.textBaseline = 'alphabetic';

  /* eixo central */
  ctx.fillStyle   = '#4a5568';
  ctx.strokeStyle = '#ffffff';
  ctx.lineWidth   = 1.5;
  ctx.beginPath();
  ctx.arc(0, 0, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();

  ctx.restore();

  /* ── 5c. SENSORES HALL (estáticos a 0°, 120°, 240°) ─────── */
  const hallAngles = [0, (2 * Math.PI) / 3, (4 * Math.PI) / 3];
  const hallNames  = ['H1', 'H2', 'H3'];
  const hallR      = Ro + 10;

  hallAngles.forEach((ha, hi) => {
    const rel    = ((rotAngle - ha) % (2 * Math.PI) + 2 * Math.PI) % (2 * Math.PI);
    const isHigh = rel < Math.PI;

    const hx = cx + Math.cos(ha) * hallR;
    const hy = cy + Math.sin(ha) * hallR;

    ctx.save();
    ctx.fillStyle   = isHigh ? '#f6d32d' : '#8a9ab0';
    ctx.strokeStyle = isHigh ? '#c48c00' : '#d0dcea';
    ctx.lineWidth   = 1.5;
    ctx.beginPath();
    ctx.arc(hx, hy, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.font      = 'bold 7px Poppins, sans-serif';
    ctx.fillStyle = '#1c1c1e';
    ctx.textAlign = 'center';
    ctx.fillText(hallNames[hi], hx, hy - 10);
    ctx.fillText(isHigh ? '1' : '0', hx, hy + 3);
    ctx.restore();
  });

  /* ── 5d. SINAIS PWM (lado direito) ──────────────────────── */
  const wx = cx + Ro + 22;
  const ww = W - wx - 12;
  const rowH = (H - 20) / 3;

  const pwmColors = [
    { color: '#1a5fb4', label: 'A' },
    { color: '#26a269', label: 'B' },
    { color: '#c01c28', label: 'C' },
  ];
  const periods = 3 * p;

  pwmColors.forEach(({ color, label }, ri) => {
    const ry = 10 + ri * rowH;
    const mh = rowH * 0.55;
    const by = ry + rowH * 0.72;

    /* fundo row */
    ctx.save();
    ctx.fillStyle = 'rgba(255,255,255,0.5)';
    ctx.beginPath();
    ctx.rect(wx, ry, ww, rowH - 4);
    ctx.fill();
    ctx.restore();

    /* label */
    ctx.save();
    ctx.font      = 'bold 9px Poppins, sans-serif';
    ctx.fillStyle = color;
    ctx.textAlign = 'left';
    ctx.fillText(label, wx + 3, ry + 11);
    ctx.restore();

    /* sinal quadrado */
    ctx.save();
    ctx.strokeStyle = color;
    ctx.lineWidth   = 1.8;
    ctx.beginPath();

    const offset = ri * (periods / 3);

    for (let xi = 0; xi <= ww; xi++) {
      const phase = ((xi / ww * periods + offset) % periods + periods) % periods;
      const on    = phase < periods / 2;
      const yy    = on ? ry + 8 : by;
      if (xi === 0) ctx.moveTo(wx + xi, yy);
      else {
        /* detetar transição */
        const prevPhase = (((xi - 1) / ww * periods + offset) % periods + periods) % periods;
        const prevOn    = prevPhase < periods / 2;
        if (on !== prevOn) {
          ctx.lineTo(wx + xi, prevOn ? ry + 8 : by);
          ctx.lineTo(wx + xi, yy);
        } else {
          ctx.lineTo(wx + xi, yy);
        }
      }
    }
    ctx.stroke();
    ctx.restore();
  });

  /* label PWM */
  ctx.save();
  ctx.font      = '8px Poppins, sans-serif';
  ctx.fillStyle = '#8a9ab0';
  ctx.textAlign = 'center';
  ctx.fillText('Semnale PWM faze', wx + ww / 2, H - 4);
  ctx.restore();

  /* ── 6. LOOP ANIMAȚIE ────────────────────────────────────── */
  const modEl = document.getElementById('mod-srvm');
  if (modEl && modEl.classList.contains('active')) {
    window.srvmRAF = requestAnimationFrame(rSRVM);
  }
}
