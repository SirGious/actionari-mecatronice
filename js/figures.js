/* ══════════════════════════════════════════════════════════════
   figures.js — 30 figuri din materialul de examen
   SVG-uri schematice + concept + formulă + PT/RO
══════════════════════════════════════════════════════════════ */

const FIGURES = [

/* ─── CAP. 1-2: LEGI + CÂMP ────────────────────────────────── */
{
  id:'fig1', num:'FIGURA 1', chapters:['legi','camp'], module:'camp',
  title:'Linii de câmp magnetic — dipol și poli opuși',
  desc_pt:'Linhas de campo magnético num dipolo (esquerda) e entre dois polos opostos (direita). As linhas são sempre circuitos fechados — nunca começam nem terminam num ponto (lei de Gauss).',
  desc_ro:'Linii de câmp magnetic la un dipol (stânga) și între doi poli opuși (dreapta). Liniile sunt mereu închise — legea Gauss: ∬B·dA=0.',
  formula:'∯ B · dA = 0  (suprafață închisă — legea Gauss)',
  svg:`<svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(65,60)">
      <ellipse cx="0" cy="0" rx="52" ry="32" fill="none" stroke="#1a5fb4" stroke-width="1.4" opacity="0.85"/>
      <ellipse cx="0" cy="0" rx="36" ry="22" fill="none" stroke="#1a5fb4" stroke-width="1.1" opacity="0.7"/>
      <ellipse cx="0" cy="0" rx="20" ry="13" fill="none" stroke="#1a5fb4" stroke-width="0.9" opacity="0.55"/>
      <circle cx="0" cy="0" r="5" fill="#1a5fb4"/>
      <text x="0" y="48" text-anchor="middle" fill="#4a5568" font-size="9" font-family="Poppins,sans-serif">dipol</text>
      <polygon points="52,0 46,-3.5 46,3.5" fill="#1a5fb4" opacity="0.85"/>
      <polygon points="-52,0 -46,-3.5 -46,3.5" fill="#1a5fb4" opacity="0.85" transform="rotate(180,-52,0)"/>
    </g>
    <line x1="138" y1="8" x2="138" y2="112" stroke="#d0dcea" stroke-width="1" stroke-dasharray="4,3"/>
    <g transform="translate(210,60)">
      <circle cx="-40" cy="0" r="13" fill="#c01c28" opacity="0.85"/>
      <text x="-40" y="4" text-anchor="middle" fill="white" font-size="11" font-weight="bold" font-family="sans-serif">N</text>
      <circle cx="40" cy="0" r="13" fill="#1a5fb4" opacity="0.85"/>
      <text x="40" y="4" text-anchor="middle" fill="white" font-size="11" font-weight="bold" font-family="sans-serif">S</text>
      <path d="M-27,-22 Q0,-38 27,-22" fill="none" stroke="#1a5fb4" stroke-width="1.2"/>
      <path d="M-27,-10 Q0,-18 27,-10" fill="none" stroke="#1a5fb4" stroke-width="1.2"/>
      <path d="M-27,0 L27,0" fill="none" stroke="#1a5fb4" stroke-width="1.4"/>
      <path d="M-27,10 Q0,18 27,10" fill="none" stroke="#1a5fb4" stroke-width="1.2"/>
      <path d="M-27,22 Q0,38 27,22" fill="none" stroke="#1a5fb4" stroke-width="1.2"/>
      <polygon points="0,-38 -4,-32 4,-32" fill="#1a5fb4"/>
      <polygon points="0,-18 -4,-12 4,-12" fill="#1a5fb4"/>
      <polygon points="0,0 -4,6 4,6" fill="#1a5fb4"/>
    </g>
  </svg>`
},

{
  id:'fig2', num:'FIGURA 2', chapters:['legi'], module:'legi',
  title:'Suprafața S cu vector normal n̂ și câmp E',
  desc_pt:'Superfície S com vetor normal n. O fluxo elétrico/magnético é o produto do campo pela área projetada perpendicularmente. θ é o ângulo entre o campo e a normal.',
  desc_ro:'Suprafața S cu vectorul normal n. Fluxul = integral a câmpului pe suprafață. θ = unghiul dintre câmp și normală.',
  formula:'Φ = ∬ E · n dA = E · S · cos θ',
  svg:`<svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg">
    <defs><marker id="arr2" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><polygon points="0,0 6,3 0,6" fill="#1a5fb4"/></marker>
    <marker id="arr2g" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><polygon points="0,0 6,3 0,6" fill="#26a269"/></marker></defs>
    <g opacity="0.5">
      <line x1="20" y1="30" x2="80" y2="30" stroke="#1a5fb4" stroke-width="1.2" marker-end="url(#arr2)"/>
      <line x1="20" y1="60" x2="80" y2="60" stroke="#1a5fb4" stroke-width="1.2" marker-end="url(#arr2)"/>
      <line x1="20" y1="90" x2="80" y2="90" stroke="#1a5fb4" stroke-width="1.2" marker-end="url(#arr2)"/>
    </g>
    <text x="85" y="64" fill="#1a5fb4" font-size="11" font-weight="bold" font-family="sans-serif">E</text>
    <path d="M120,95 L160,25 L220,25 L180,95 Z" fill="rgba(26,95,180,0.12)" stroke="#1a5fb4" stroke-width="1.5"/>
    <text x="168" y="68" fill="#1a5fb4" font-size="10" font-family="Poppins,sans-serif">S</text>
    <line x1="170" y1="60" x2="170" y2="10" stroke="#26a269" stroke-width="2" marker-end="url(#arr2g)"/>
    <text x="175" y="12" fill="#26a269" font-size="11" font-weight="bold" font-family="sans-serif">n̂</text>
    <line x1="140" y1="60" x2="170" y2="60" stroke="#c48c00" stroke-width="1.2" stroke-dasharray="3,2"/>
    <path d="M155,60 A15,15 0 0,1 155,38" fill="none" stroke="#c48c00" stroke-width="1.2"/>
    <text x="155" y="50" fill="#c48c00" font-size="10" font-family="sans-serif">θ</text>
    <text x="110" y="112" fill="#4a5568" font-size="9" font-family="Poppins,sans-serif">Φ = E·S·cos θ máximo quando θ=0°</text>
  </svg>`
},

/* ─── CAP. 2-4: PROCEDEE ───────────────────────────────────── */
{
  id:'fig3', num:'FIGURA 3', chapters:['procedee'], module:'procedee',
  title:'Motor cu rotor cilindric + gráfico L₁₂(θ)',
  desc_pt:'Motor com rotor cilíndrico e bobina fixa. O gráfico mostra como a inductância mútua L₁₂ varia sinusoidalmente com o ângulo θ — base do processo de anisotropia de forma.',
  desc_ro:'Motor cu rotor cilindric și bobină fixă. Graficul arată variația inductanței mutuale L₁₂ cu unghiul θ — baza procedeului anizotropiei de formă.',
  formula:'L₁₂(θ) = L₁₂ₘ · cos θ → M = −(i²/2)·L₁₁ₘ·sin(2θₘ)  max. θ=45°',
  svg:`<svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(65,60)">
      <circle cx="0" cy="0" r="44" fill="none" stroke="#d0dcea" stroke-width="1.5"/>
      <ellipse cx="0" cy="0" rx="28" ry="20" fill="#ddeeff" stroke="#1a5fb4" stroke-width="1.5"/>
      <ellipse cx="0" cy="0" rx="14" ry="10" fill="#99c1f1" stroke="#1a5fb4" stroke-width="1"/>
      <text x="0" y="3" text-anchor="middle" fill="#1a5fb4" font-size="9" font-family="sans-serif">rotor</text>
      <rect x="-44" y="-8" width="10" height="16" rx="2" fill="#c48c00" opacity="0.8"/>
      <text x="-39" y="3" text-anchor="middle" fill="white" font-size="7" font-family="sans-serif">B</text>
      <line x1="-34" y1="0" x2="-28" y2="0" stroke="#c48c00" stroke-width="1.5" marker-end="url(#arr2)"/>
    </g>
    <g transform="translate(170,20)">
      <line x1="0" y1="80" x2="100" y2="80" stroke="#4a5568" stroke-width="1"/>
      <line x1="0" y1="10" x2="0" y2="80" stroke="#4a5568" stroke-width="1"/>
      <text x="50" y="95" text-anchor="middle" fill="#4a5568" font-size="9" font-family="sans-serif">θ</text>
      <text x="-8" y="45" fill="#4a5568" font-size="8" font-family="sans-serif">L₁₂</text>
      <path d="M0,45 Q25,10 50,45 Q75,80 100,45" fill="none" stroke="#1a5fb4" stroke-width="2"/>
      <line x1="50" y1="10" x2="50" y2="80" stroke="#c48c00" stroke-width="1" stroke-dasharray="3,2"/>
      <text x="45" y="8" fill="#c48c00" font-size="8" font-family="sans-serif">max</text>
    </g>
  </svg>`
},

{
  id:'fig4', num:'FIGURA 4', chapters:['procedee','mcc'], module:'procedee',
  title:'Motor CC cu magnet permanent — procedeul electromagnetic',
  desc_pt:'Motor CC com magnetos permanentes (N e S) no estator e bobinas no rotor. As escovas (perie-colector) fazem a comutação. Procedeul electromagnetic — o mais comum.',
  desc_ro:'Motor CC cu magneți permanenți pe stator și bobine pe rotor. Periile fac comutarea. Procedeul electromagnetic — cel mai folosit.',
  formula:'M = −Ψ₀ₘ · i₁ · sin θ  (max. la θ = π/2)',
  svg:`<svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="15" width="260" height="90" rx="8" fill="none" stroke="#d0dcea" stroke-width="1.5"/>
    <rect x="10" y="15" width="40" height="90" rx="4" fill="#c01c28" opacity="0.75"/>
    <text x="30" y="66" text-anchor="middle" fill="white" font-size="14" font-weight="bold" font-family="sans-serif">N</text>
    <rect x="230" y="15" width="40" height="90" rx="4" fill="#1a5fb4" opacity="0.75"/>
    <text x="250" y="66" text-anchor="middle" fill="white" font-size="14" font-weight="bold" font-family="sans-serif">S</text>
    <circle cx="140" cy="60" r="38" fill="#eef2f7" stroke="#1a5fb4" stroke-width="1.5"/>
    <circle cx="140" cy="60" r="22" fill="#ddeeff" stroke="#1a5fb4" stroke-width="1"/>
    <rect x="118" y="54" width="44" height="12" rx="2" fill="#99c1f1" stroke="#1a5fb4" stroke-width="0.8"/>
    <text x="140" y="63" text-anchor="middle" fill="#1a5fb4" font-size="8" font-family="sans-serif">bobine</text>
    <line x1="50" y1="60" x2="100" y2="60" stroke="#c48c00" stroke-width="1.5" stroke-dasharray="3,2"/>
    <line x1="180" y1="60" x2="230" y2="60" stroke="#c48c00" stroke-width="1.5" stroke-dasharray="3,2"/>
    <polygon points="95,55 102,60 95,65" fill="#c48c00"/>
    <text x="70" y="50" fill="#c48c00" font-size="8" font-family="sans-serif">Φ</text>
    <rect x="128" y="93" width="24" height="8" rx="2" fill="#26a269"/>
    <text x="140" y="100" text-anchor="middle" fill="white" font-size="7" font-family="sans-serif">perie</text>
  </svg>`
},

{
  id:'fig5', num:'FIGURA 5', chapters:['procedee','srvm'], module:'procedee',
  title:'Motor BLDC cu variação de inductanță L₁₁(θ)',
  desc_pt:'Motor com variação de inductância própria L₁₁ em função do ângulo. O gráfico mostra L₁₁(θ) com valor médio L₁₁₀ e amplitude L₁₁ₘ — base do torque de relutância.',
  desc_ro:'Motor cu variație de inductanță proprie L₁₁ în funcție de unghi. Graficul L₁₁(θ) cu valoarea medie L₁₁₀ și amplitudinea L₁₁ₘ.',
  formula:'L₁₁(θ) = L₁₁₀ + L₁₁ₘ · cos(2θₘ)',
  svg:`<svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(65,60)">
      <circle cx="0" cy="0" r="44" fill="#eef2f7" stroke="#d0dcea" stroke-width="1.5"/>
      <ellipse cx="0" cy="0" rx="20" ry="34" fill="#ddeeff" stroke="#1a5fb4" stroke-width="1.5"/>
      <circle cx="0" cy="0" r="12" fill="#99c1f1" stroke="#1a5fb4" stroke-width="1"/>
      <text x="0" y="3" text-anchor="middle" fill="#1a5fb4" font-size="8" font-family="sans-serif">rotor</text>
      <text x="0" y="52" text-anchor="middle" fill="#4a5568" font-size="9" font-family="sans-serif">BLDC</text>
    </g>
    <g transform="translate(155,18)">
      <line x1="0" y1="72" x2="110" y2="72" stroke="#4a5568" stroke-width="1"/>
      <line x1="0" y1="5" x2="0" y2="72" stroke="#4a5568" stroke-width="1"/>
      <text x="55" y="86" text-anchor="middle" fill="#4a5568" font-size="9" font-family="sans-serif">θ [rad]</text>
      <text x="-6" y="40" fill="#4a5568" font-size="8" font-family="sans-serif" text-anchor="end">L₁₁</text>
      <line x1="0" y1="40" x2="110" y2="40" stroke="#8a9ab0" stroke-width="1" stroke-dasharray="3,2"/>
      <text x="2" y="37" fill="#8a9ab0" font-size="7" font-family="sans-serif">L₁₁₀</text>
      <path d="M0,40 Q14,5 27,40 Q41,75 55,40 Q68,5 82,40 Q95,75 110,40" fill="none" stroke="#1a5fb4" stroke-width="2"/>
      <text x="95" y="12" fill="#1a5fb4" font-size="7" font-family="sans-serif">L₁₁ₘ</text>
      <line x1="96" y1="5" x2="96" y2="40" stroke="#1a5fb4" stroke-width="0.8" stroke-dasharray="2,2"/>
    </g>
  </svg>`
},

{
  id:'fig6', num:'FIGURA 6', chapters:['procedee','magneti'], module:'procedee',
  title:'Motor histerezis + curba B-H cu Br, Hc',
  desc_pt:'Motor de histerese (a) e curva B-H do material ferromagnético (b). Br = remanência, Hc = campo coercitivo. A área do laço = energia dissipada por ciclo = base do torque.',
  desc_ro:'Motor cu histerezis (a) și curba B-H (b). Br = remanența, Hc = câmpul coercitiv. Aria buclei = energie disipată per ciclu = baza cuplului.',
  formula:'M = −∂Wₘ/∂θ  (W_pierdut = ∮ H·dB per ciclu)',
  svg:`<svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(60,60)">
      <circle cx="0" cy="0" r="42" fill="#eef2f7" stroke="#d0dcea" stroke-width="1.5"/>
      <circle cx="0" cy="0" r="28" fill="#f0fff4" stroke="#26a269" stroke-width="1.5"/>
      <circle cx="0" cy="0" r="12" fill="#b8e8c8" stroke="#26a269" stroke-width="1"/>
      <text x="0" y="3" text-anchor="middle" fill="#26a269" font-size="7" font-family="sans-serif">histerezis</text>
      <text x="0" y="52" text-anchor="middle" fill="#4a5568" font-size="9" font-family="sans-serif">(a) motor</text>
    </g>
    <g transform="translate(165,60)">
      <line x1="-55" y1="0" x2="55" y2="0" stroke="#4a5568" stroke-width="1"/>
      <line x1="0" y1="-48" x2="0" y2="48" stroke="#4a5568" stroke-width="1"/>
      <text x="58" y="4" fill="#4a5568" font-size="9" font-family="sans-serif">H</text>
      <text x="4" y="-44" fill="#4a5568" font-size="9" font-family="sans-serif">B</text>
      <path d="M-45,-35 Q-20,-48 0,-40 Q30,-28 45,0 Q55,30 45,35 Q20,48 0,40 Q-30,28 -45,0 Q-55,-30 -45,-35 Z" fill="rgba(26,95,180,0.08)" stroke="#1a5fb4" stroke-width="1.5"/>
      <line x1="0" y1="-40" x2="0" y2="0" stroke="#c01c28" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="4" y="-36" fill="#c01c28" font-size="8" font-family="sans-serif">Br</text>
      <line x1="-45" y1="0" x2="0" y2="0" stroke="#26a269" stroke-width="1" stroke-dasharray="2,2"/>
      <text x="-44" y="-4" fill="#26a269" font-size="8" font-family="sans-serif">Hc</text>
      <text x="5" y="56" fill="#4a5568" font-size="8" font-family="sans-serif">(b) curba B-H</text>
    </g>
  </svg>`
},

{
  id:'fig7', num:'FIGURA 7', chapters:['procedee'], module:'procedee',
  title:'Rotor tip pahar — secțiune și dimensiuni',
  desc_pt:'Rotor tipo copo (pahar) — vazio por dentro para reduzir inércia. l = comprimento, D = diâmetro. O campo B é constante. A f.e.m. induzida é proporcional à velocidade.',
  desc_ro:'Rotor tip pahar — gol interior pentru masă redusă. l = lungimea, D = diametrul. Câmpul B constant. f.e.m. = −B·π·D·l·n.',
  formula:'e = −B · π · D · l · n  [V]',
  svg:`<svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(75,60)">
      <ellipse cx="0" cy="-5" rx="38" ry="12" fill="none" stroke="#1a5fb4" stroke-width="1.5"/>
      <ellipse cx="0" cy="42" rx="38" ry="12" fill="none" stroke="#1a5fb4" stroke-width="1.5"/>
      <line x1="-38" y1="-5" x2="-38" y2="42" stroke="#1a5fb4" stroke-width="1.5"/>
      <line x1="38" y1="-5" x2="38" y2="42" stroke="#1a5fb4" stroke-width="1.5"/>
      <ellipse cx="0" cy="-5" rx="24" ry="8" fill="#ddeeff" stroke="#1a5fb4" stroke-width="1" stroke-dasharray="3,2"/>
      <ellipse cx="0" cy="42" rx="24" ry="8" fill="#ddeeff" stroke="#1a5fb4" stroke-width="1" stroke-dasharray="3,2"/>
      <line x1="-24" y1="-5" x2="-24" y2="42" stroke="#1a5fb4" stroke-width="1" stroke-dasharray="3,2"/>
      <line x1="24" y1="-5" x2="24" y2="42" stroke="#1a5fb4" stroke-width="1" stroke-dasharray="3,2"/>
      <line x1="42" y1="-5" x2="58" y2="-5" stroke="#c48c00" stroke-width="1"/>
      <line x1="42" y1="42" x2="58" y2="42" stroke="#c48c00" stroke-width="1"/>
      <line x1="50" y1="-5" x2="50" y2="42" stroke="#c48c00" stroke-width="1"/>
      <polygon points="50,-5 47,0 53,0" fill="#c48c00"/>
      <polygon points="50,42 47,37 53,37" fill="#c48c00"/>
      <text x="55" y="22" fill="#c48c00" font-size="9" font-family="sans-serif">l</text>
      <line x1="-38" y1="-18" x2="38" y2="-18" stroke="#c48c00" stroke-width="1"/>
      <text x="0" y="-22" text-anchor="middle" fill="#c48c00" font-size="9" font-family="sans-serif">D</text>
      <text x="0" y="60" text-anchor="middle" fill="#4a5568" font-size="9" font-family="sans-serif">pahar (cup)</text>
    </g>
    <g transform="translate(185,30)">
      <text x="0" y="0" fill="#1a5fb4" font-size="9" font-family="Poppins,sans-serif">gol interior</text>
      <text x="0" y="15" fill="#4a5568" font-size="9" font-family="Poppins,sans-serif">↓ inerție mică</text>
      <text x="0" y="32" fill="#26a269" font-size="9" font-family="Poppins,sans-serif">B = constant</text>
      <text x="0" y="48" fill="#4a5568" font-size="8" font-family="Poppins,sans-serif">e ∝ n (viteză)</text>
    </g>
  </svg>`
},

/* ─── CAP. 5: PERIE-COLECTOR ──────────────────────────────── */
{
  id:'fig8', num:'FIGURA 8', chapters:['perie'], module:'perie',
  title:'Motor CC cu slip rings și perii (brush)',
  desc_pt:'Motor CC com escovas (brush) e anéis coletores (slip rings). As escovas são fixas, os anéis rodam com o rotor — permitem passar corrente para as bobinas em rotação.',
  desc_ro:'Motor CC cu perii (brush) și inele colectoare (slip rings). Periile sunt fixe, inelele se rotesc cu rotorul.',
  formula:'E = (p·N·n·Ψ) / (60·a) = kₑ·n·Ψ  [V]',
  svg:`<svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="20" width="240" height="80" rx="6" fill="#eef2f7" stroke="#d0dcea" stroke-width="1.5"/>
    <circle cx="140" cy="60" r="36" fill="#ddeeff" stroke="#1a5fb4" stroke-width="1.5"/>
    <circle cx="140" cy="60" r="20" fill="#99c1f1" stroke="#1a5fb4" stroke-width="1"/>
    <line x1="140" y1="24" x2="140" y2="96" stroke="#1a5fb4" stroke-width="1.5" stroke-dasharray="4,3"/>
    <rect x="188" y="50" width="16" height="20" rx="2" fill="#f6d32d" stroke="#c48c00" stroke-width="1.2"/>
    <text x="196" y="63" text-anchor="middle" fill="#c48c00" font-size="7" font-family="sans-serif">P1</text>
    <ellipse cx="196" cy="50" rx="8" ry="4" fill="#c48c00" opacity="0.6"/>
    <rect x="76" y="50" width="16" height="20" rx="2" fill="#f6d32d" stroke="#c48c00" stroke-width="1.2"/>
    <text x="84" y="63" text-anchor="middle" fill="#c48c00" font-size="7" font-family="sans-serif">P2</text>
    <ellipse cx="84" cy="50" rx="8" ry="4" fill="#c48c00" opacity="0.6"/>
    <text x="140" y="110" text-anchor="middle" fill="#4a5568" font-size="9" font-family="Poppins,sans-serif">slip rings + brush (perie)</text>
    <text x="200" y="38" fill="#1a5fb4" font-size="8" font-family="sans-serif">N</text>
    <text x="70" y="38" fill="#c01c28" font-size="8" font-family="sans-serif">S</text>
  </svg>`
},

/* ─── CAP. 1-2: FORȚA LAPLACE ─────────────────────────────── */
{
  id:'fig9', num:'FIGURA 9', chapters:['legi','forte'], module:'forte',
  title:'Forța Laplace — regula mâinii drepte',
  desc_pt:'Regra da mão direita para a força de Laplace. Dedos na direção da corrente (I), curvam para o campo (B), polegar indica a força (F). Máxima a α=90°.',
  desc_ro:'Regula mâinii drepte pentru forța Laplace. Degetele = curentul I, se curbează spre B, degetul mare = forța F. Maximă la α=90°.',
  formula:'F = i · L · B · sin α  [N]  →  max. la α = 90°',
  svg:`<svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg">
    <defs><marker id="a9b" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><polygon points="0,0 6,3 0,6" fill="#1a5fb4"/></marker>
    <marker id="a9r" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><polygon points="0,0 6,3 0,6" fill="#c01c28"/></marker>
    <marker id="a9g" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto"><polygon points="0,0 6,3 0,6" fill="#26a269"/></marker></defs>
    <circle cx="110" cy="65" r="42" fill="#fffdf0" stroke="#c48c00" stroke-width="1.5"/>
    <text x="110" y="68" text-anchor="middle" fill="#c48c00" font-size="26" font-family="sans-serif">✋</text>
    <line x1="160" y1="65" x2="220" y2="65" stroke="#1a5fb4" stroke-width="2.5" marker-end="url(#a9b)"/>
    <text x="228" y="69" fill="#1a5fb4" font-size="12" font-weight="bold" font-family="sans-serif">B</text>
    <line x1="110" y1="115" x2="110" y2="165" stroke="#c01c28" stroke-width="2.5" marker-end="url(#a9r)"/>
    <text x="118" y="135" fill="#c01c28" font-size="12" font-weight="bold" font-family="sans-serif">I</text>
    <line x1="60" y1="65" x2="10" y2="65" stroke="#26a269" stroke-width="2.5" marker-end="url(#a9g)"/>
    <text x="2" y="58" fill="#26a269" font-size="12" font-weight="bold" font-family="sans-serif">F</text>
    <text x="140" y="15" text-anchor="middle" fill="#4a5568" font-size="10" font-family="Poppins,sans-serif">F = i·L×B</text>
  </svg>`
},

/* ─── CAP. 5-7: MCC ─────────────────────────────────────────── */
{
  id:'fig10', num:'FIGURA 10', chapters:['mcc','perie'], module:'mcc',
  title:'Motor CC complet — flux magnetic N→S prin rotor',
  desc_pt:'Motor CC completo em perspetiva. O fluxo magnético (setas) vai de N para S através do rotor. As bobinas do rotor cortam este fluxo → f.e.m. induzida → torque.',
  desc_ro:'Motor CC complet în perspectivă. Fluxul magnetic (săgeți) de la N la S prin rotor. Bobinele rotorului taie fluxul → f.e.m. indusă → cuplu.',
  formula:'n = (U − Rₐ·Iₐ) / (kₑ·Ψ)  [rot/min]',
  svg:`<svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg">
    <rect x="15" y="15" width="250" height="90" rx="8" fill="none" stroke="#d0dcea" stroke-width="1.5"/>
    <rect x="15" y="15" width="50" height="90" rx="6" fill="#c01c28" opacity="0.8"/>
    <text x="40" y="65" text-anchor="middle" fill="white" font-size="16" font-weight="bold" font-family="sans-serif">N</text>
    <rect x="215" y="15" width="50" height="90" rx="6" fill="#1a5fb4" opacity="0.8"/>
    <text x="240" y="65" text-anchor="middle" fill="white" font-size="16" font-weight="bold" font-family="sans-serif">S</text>
    <circle cx="140" cy="60" r="40" fill="#f7f9fc" stroke="#1a5fb4" stroke-width="1.5"/>
    <circle cx="140" cy="60" r="24" fill="#ddeeff" stroke="#1a5fb4" stroke-width="1"/>
    <circle cx="140" cy="60" r="5" fill="#1a5fb4"/>
    <line x1="65" y1="60" x2="98" y2="60" stroke="#c48c00" stroke-width="2"/>
    <polygon points="96,55 103,60 96,65" fill="#c48c00"/>
    <line x1="182" y1="60" x2="215" y2="60" stroke="#c48c00" stroke-width="2"/>
    <polygon points="182,55 175,60 182,65" fill="#c48c00"/>
    <text x="72" y="50" fill="#c48c00" font-size="8" font-family="sans-serif">Φ →</text>
    <line x1="140" y1="20" x2="140" y2="36" stroke="#4a5568" stroke-width="1.5"/>
    <text x="148" y="32" fill="#4a5568" font-size="8" font-family="sans-serif">ax</text>
  </svg>`
},

{
  id:'fig11', num:'FIGURA 11', chapters:['perie'], module:'perie',
  title:'Înfășurare buclată simplă — diagrama desfășurată',
  desc_pt:'Enrolamento em laço simples desenrolado. (a) Espiras ligadas às lamelas com escovas A1/A2. (b) Caminhos da corrente. (c) Distribuição do campo B ao longo da periferia.',
  desc_ro:'Înfășurare buclată simplă desfășurată. (a) Spirele conectate la lamele cu periile A1/A2. (b) Traseele curentului. (c) Distribuția câmpului B la periferia rotorului.',
  formula:'a = 2p  (nr. căi paralele)  |  E = kₑ · n · Ψ',
  svg:`<svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="8" width="260" height="20" rx="3" fill="#ddeeff" stroke="#1a5fb4" stroke-width="1"/>
    <text x="15" y="21" fill="#1a5fb4" font-size="8" font-family="sans-serif">lamele colector: 1  2  3  4  5  6  7  8  9  10 ...</text>
    <g transform="translate(0,5)">
      <line x1="30" y1="28" x2="30" y2="58" stroke="#1a5fb4" stroke-width="1"/>
      <line x1="56" y1="28" x2="56" y2="58" stroke="#1a5fb4" stroke-width="1"/>
      <path d="M30,58 Q43,74 56,58" fill="none" stroke="#1a5fb4" stroke-width="1.2"/>
      <line x1="56" y1="28" x2="82" y2="28" stroke="#1a5fb4" stroke-width="1" opacity="0.5"/>
      <line x1="82" y1="28" x2="82" y2="58" stroke="#1a5fb4" stroke-width="1" opacity="0.7"/>
      <line x1="82" y1="28" x2="108" y2="28" stroke="#1a5fb4" stroke-width="1" opacity="0.5"/>
      <line x1="108" y1="28" x2="108" y2="58" stroke="#1a5fb4" stroke-width="1" opacity="0.5"/>
      <path d="M82,58 Q95,74 108,58" fill="none" stroke="#1a5fb4" stroke-width="1.2" opacity="0.7"/>
    </g>
    <rect x="24" y="28" width="12" height="10" rx="2" fill="#f6d32d" stroke="#c48c00" stroke-width="1.2"/>
    <text x="30" y="37" text-anchor="middle" fill="#c48c00" font-size="6" font-family="sans-serif">A1</text>
    <rect x="140" y="28" width="12" height="10" rx="2" fill="#f6d32d" stroke="#c48c00" stroke-width="1.2"/>
    <text x="146" y="37" text-anchor="middle" fill="#c48c00" font-size="6" font-family="sans-serif">A2</text>
    <line x1="10" y1="88" x2="270" y2="88" stroke="#4a5568" stroke-width="1"/>
    <path d="M10,88 Q50,68 90,88 Q130,108 170,88 Q210,68 250,88" fill="none" stroke="#26a269" stroke-width="1.5"/>
    <text x="140" y="115" text-anchor="middle" fill="#4a5568" font-size="8" font-family="sans-serif">(c) distribuția B pe periferie</text>
  </svg>`
},

/* ─── CAP. 12-14: SRVM BLDC ──────────────────────────────── */
{
  id:'fig12', num:'FIGURA 12', chapters:['srvm'], module:'srvm',
  title:'Variația B_E în rotorul BLDC — 4 momente de timp',
  desc_pt:'Distribuição do campo B_E nas posições do rotor BLDC em 4 instantes diferentes. A tensão e₀ resultante mostra a f.e.m. trapezoidal gerada pela comutação dos 6 sectores.',
  desc_ro:'Distribuția câmpului B_E la pozițiile rotorului BLDC în 4 momente diferite. Tensiunea e₀ arată f.e.m. trapezoidală generată de comutarea celor 6 sectoare.',
  formula:'N_com = 6p  (comutații/rot)  |  sector k = ⌊θ_el/(π/3)⌋ mod 6',
  svg:`<svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg">
    ${[0,1,2,3].map(i=>`
    <g transform="translate(${15+i*63},10)">
      <rect x="0" y="0" width="55" height="55" rx="3" fill="#f7f9fc" stroke="#d0dcea" stroke-width="1"/>
      <line x1="0" y1="28" x2="55" y2="28" stroke="#8a9ab0" stroke-width="0.8"/>
      <rect x="${5}" y="${i%2===0?8:18}" width="${46}" height="${10}" rx="1" fill="#1a5fb4" opacity="0.7"/>
      <rect x="${5}" y="${i%2===0?30:28}" width="${46}" height="${10}" rx="1" fill="#c01c28" opacity="0.5"/>
      <text x="28" y="50" text-anchor="middle" fill="#4a5568" font-size="7" font-family="sans-serif">t=${i}·Tk/3</text>
    </g>`).join('')}
    <g transform="translate(15,72)">
      <line x1="0" y1="20" x2="250" y2="20" stroke="#4a5568" stroke-width="1"/>
      <line x1="0" y1="5" x2="0" y2="40" stroke="#4a5568" stroke-width="1"/>
      <path d="M0,5 L40,5 L40,35 L80,35 L80,5 L120,5 L120,35 L160,35 L160,5 L200,5 L200,35 L240,35" fill="none" stroke="#c48c00" stroke-width="2"/>
      <text x="125" y="48" text-anchor="middle" fill="#4a5568" font-size="8" font-family="sans-serif">e₀ trapezoidal — t →</text>
    </g>
  </svg>`
},

{
  id:'fig13', num:'FIGURA 13', chapters:['srvm'], module:'srvm',
  title:'Circuit echivalent comutație BLDC cu diode supresoare',
  desc_pt:'Circuito equivalente durante a comutação do BLDC. A energia inductiva L·I² acumulada na bobina que "desliga" é dissipada pelas diodes supresoras (r₁, r₂). Sem diodes → pico de tensão → destruição dos transistores.',
  desc_ro:'Circuitul echivalent la comutarea BLDC. Energia inductivă L·I² acumulată în bobina care se "deconectează" este disipată de diodele supresoare. Fără diode → vârf de tensiune → distrugerea tranzistoarelor.',
  formula:'u = Rₛ·i + Lₛ·(di/dt) + kₑ·Ψ·Ω  [V]',
  svg:`<svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg">
    <line x1="30" y1="30" x2="30" y2="90" stroke="#1a5fb4" stroke-width="1.5"/>
    <line x1="250" y1="30" x2="250" y2="90" stroke="#1a5fb4" stroke-width="1.5"/>
    <line x1="30" y1="30" x2="80" y2="30" stroke="#1a5fb4" stroke-width="1.5"/>
    <line x1="170" y1="30" x2="250" y2="30" stroke="#1a5fb4" stroke-width="1.5"/>
    <line x1="30" y1="90" x2="80" y2="90" stroke="#1a5fb4" stroke-width="1.5"/>
    <line x1="170" y1="90" x2="250" y2="90" stroke="#1a5fb4" stroke-width="1.5"/>
    <rect x="80" y="20" width="30" height="20" rx="2" fill="#ddeeff" stroke="#1a5fb4" stroke-width="1.2"/>
    <text x="95" y="33" text-anchor="middle" fill="#1a5fb4" font-size="9" font-family="sans-serif">L₁</text>
    <rect x="80" y="80" width="30" height="20" rx="2" fill="#ddeeff" stroke="#1a5fb4" stroke-width="1.2"/>
    <text x="95" y="93" text-anchor="middle" fill="#1a5fb4" font-size="9" font-family="sans-serif">L₂</text>
    <rect x="140" y="20" width="30" height="20" rx="2" fill="#fffdf0" stroke="#c48c00" stroke-width="1.2"/>
    <text x="155" y="33" text-anchor="middle" fill="#c48c00" font-size="9" font-family="sans-serif">r₁</text>
    <rect x="140" y="80" width="30" height="20" rx="2" fill="#fffdf0" stroke="#c48c00" stroke-width="1.2"/>
    <text x="155" y="93" text-anchor="middle" fill="#c48c00" font-size="9" font-family="sans-serif">r₂</text>
    <line x1="110" y1="30" x2="140" y2="30" stroke="#1a5fb4" stroke-width="1.5"/>
    <line x1="110" y1="90" x2="140" y2="90" stroke="#1a5fb4" stroke-width="1.5"/>
    <line x1="140" y1="30" x2="140" y2="90" stroke="#c48c00" stroke-width="1.2" stroke-dasharray="3,2"/>
    <polygon points="140,55 136,45 144,45" fill="#c48c00" opacity="0.7"/>
    <text x="148" y="63" fill="#c48c00" font-size="8" font-family="sans-serif">D</text>
    <text x="140" y="112" text-anchor="middle" fill="#4a5568" font-size="8" font-family="Poppins,sans-serif">diodă supresoare — protejează tranzistoarele</text>
  </svg>`
},

/* ─── CAP. 6: REACȚIA INDUSULUI + MATERIALE ──────────────── */
{
  id:'fig14', num:'FIGURA 14', chapters:['magneti'], module:'magneti',
  title:'Reacția indusului — motor CC cu 4 poli',
  desc_pt:'Secção de motor CC com 4 polos. As linhas de campo mostram como o campo do estator se distorce pelo campo da corrente do rotor → o eixo neutro desloca-se → faíscas nas escovas.',
  desc_ro:'Secțiunea unui motor CC cu 4 poli. Liniile de câmp arată distorsionarea câmpului statoric de câmpul rotoric → axa neutră se deplasează → scântei la perii.',
  formula:'Câmp rezultant ≠ Câmp excitație  →  ΔUₚ ↑  →  scântei',
  svg:`<svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="140" cy="60" r="52" fill="#f7f9fc" stroke="#d0dcea" stroke-width="1.5"/>
    <circle cx="140" cy="60" r="30" fill="#eef2f7" stroke="#1a5fb4" stroke-width="1.5"/>
    <rect x="120" y="8" width="40" height="18" rx="3" fill="#c01c28" opacity="0.8"/>
    <text x="140" y="21" text-anchor="middle" fill="white" font-size="9" font-weight="bold" font-family="sans-serif">N</text>
    <rect x="120" y="94" width="40" height="18" rx="3" fill="#c01c28" opacity="0.8"/>
    <text x="140" y="107" text-anchor="middle" fill="white" font-size="9" font-weight="bold" font-family="sans-serif">S</text>
    <rect x="190" y="40" width="18" height="40" rx="3" fill="#1a5fb4" opacity="0.8"/>
    <text x="199" y="63" text-anchor="middle" fill="white" font-size="9" font-weight="bold" font-family="sans-serif">S</text>
    <rect x="72" y="40" width="18" height="40" rx="3" fill="#1a5fb4" opacity="0.8"/>
    <text x="81" y="63" text-anchor="middle" fill="white" font-size="9" font-weight="bold" font-family="sans-serif">N</text>
    <line x1="140" y1="26" x2="140" y2="90" stroke="#1a5fb4" stroke-width="1.2" stroke-dasharray="3,2" opacity="0.5"/>
    <line x1="100" y1="22" x2="170" y2="95" stroke="#c01c28" stroke-width="1.5" stroke-dasharray="3,2"/>
    <text x="172" y="95" fill="#c01c28" font-size="8" font-family="sans-serif">ax neutru</text>
    <text x="160" y="50" fill="#c48c00" font-size="8" font-family="sans-serif">distors.</text>
  </svg>`
},

{
  id:'fig15', num:'FIGURA 15', chapters:['mcc'], module:'mcc',
  title:'Flux principal vs flux de dispersie în motor CC',
  desc_pt:'Secção completa do motor mostrando as linhas de fluxo: fluxo principal (atravessa o entreferro e o rotor) e fluxo de dispersão (fecha-se pelo estator sem atravessar o rotor). Só o fluxo principal gera torque.',
  desc_ro:'Secțiunea completă a motorului cu linii de flux: fluxul principal (traversează întrefierul și rotorul) și fluxul de dispersie (se închide prin stator). Doar fluxul principal generează cuplu.',
  formula:'Ψ_total = Ψ_principal + Ψ_dispersie  (dispersia = pierdere)',
  svg:`<svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="140" cy="60" r="52" fill="#eef2f7" stroke="#d0dcea" stroke-width="1.5"/>
    <circle cx="140" cy="60" r="32" fill="#ddeeff" stroke="#1a5fb4" stroke-width="1.5"/>
    <path d="M140,8 Q200,8 208,60 Q200,112 140,112 Q80,112 72,60 Q80,8 140,8" fill="none" stroke="#1a5fb4" stroke-width="2"/>
    <path d="M140,26 Q175,26 180,60 Q175,94 140,94" fill="none" stroke="#1a5fb4" stroke-width="1.5" opacity="0.7"/>
    <path d="M130,5 Q100,-5 80,20" fill="none" stroke="#c48c00" stroke-width="1.5" stroke-dasharray="3,2"/>
    <path d="M150,5 Q180,-5 200,20" fill="none" stroke="#c48c00" stroke-width="1.5" stroke-dasharray="3,2"/>
    <text x="60" y="15" fill="#c48c00" font-size="8" font-family="sans-serif">dispersie</text>
    <text x="105" y="65" fill="#1a5fb4" font-size="8" font-family="sans-serif">principal</text>
    <text x="140" y="115" text-anchor="middle" fill="#4a5568" font-size="8" font-family="Poppins,sans-serif">entreferul — zona de transfer</text>
  </svg>`
},

{
  id:'fig16', num:'FIGURA 16', chapters:['perie','mcc'], module:'mcc',
  title:'Distribuția câmpului B la periferia rotorului',
  desc_pt:'Distribuição do campo magnético ao longo da periferia do rotor. O período τ corresponde a um passo polar. A distribuição trapezoidal/retangular do campo gera a f.e.m. do motor.',
  desc_ro:'Distribuția câmpului magnetic la periferia rotorului. Perioada τ corespunde unui pas polar. Distribuția trapezoidală generează f.e.m. motorului.',
  formula:'E = (p·N·n·Ψ) / (60·a)  →  Ψ = ∫ B·dx (aria sub curbă)',
  svg:`<svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg">
    <line x1="15" y1="60" x2="265" y2="60" stroke="#4a5568" stroke-width="1"/>
    <line x1="15" y1="20" x2="15" y2="100" stroke="#4a5568" stroke-width="1"/>
    <text x="268" y="64" fill="#4a5568" font-size="9" font-family="sans-serif">x</text>
    <text x="18" y="18" fill="#4a5568" font-size="9" font-family="sans-serif">B</text>
    <path d="M15,60 L30,60 L35,25 L80,25 L85,60 L120,60 L125,95 L170,95 L175,60 L215,60 L220,25 L260,25 L265,60" fill="rgba(26,95,180,0.12)" stroke="#1a5fb4" stroke-width="2"/>
    <line x1="15" y1="108" x2="85" y2="108" stroke="#c48c00" stroke-width="1"/>
    <line x1="85" y1="108" x2="175" y2="108" stroke="#c48c00" stroke-width="1"/>
    <line x1="15" y1="105" x2="15" y2="111" stroke="#c48c00" stroke-width="1"/>
    <line x1="85" y1="105" x2="85" y2="111" stroke="#c48c00" stroke-width="1"/>
    <line x1="175" y1="105" x2="175" y2="111" stroke="#c48c00" stroke-width="1"/>
    <text x="50" y="117" text-anchor="middle" fill="#c48c00" font-size="9" font-family="sans-serif">τ</text>
    <text x="130" y="117" text-anchor="middle" fill="#c48c00" font-size="9" font-family="sans-serif">2τ</text>
  </svg>`
},

{
  id:'fig17', num:'FIGURA 17', chapters:['magneti'], module:'magneti',
  title:'Curba B-H completă — material feromagnetic',
  desc_pt:'Curva B-H completa de um material ferromagnético. a=saturação, b=ponto de trabalho, c=origem. A inclinação é μ = B/H (permeabilidade). O laço de histerese = energia perdida por ciclo.',
  desc_ro:'Curba B-H completă a unui material feromagnetic. a=saturație, b=punct de lucru, c=origine. Panta = μ = B/H. Bucla de histerezis = energie pierdută per ciclu.',
  formula:'B = μ₀·μᵣ·H  (zona liniară)  |  μᵣ = f(H) neliniar la saturație',
  svg:`<svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg">
    <line x1="140" y1="10" x2="140" y2="110" stroke="#4a5568" stroke-width="1"/>
    <line x1="20" y1="60" x2="260" y2="60" stroke="#4a5568" stroke-width="1"/>
    <text x="262" y="64" fill="#4a5568" font-size="9" font-family="sans-serif">H</text>
    <text x="143" y="12" fill="#4a5568" font-size="9" font-family="sans-serif">B</text>
    <path d="M20,90 Q60,85 90,60 Q115,35 140,20 Q165,10 200,12 Q230,13 240,15" fill="none" stroke="#1a5fb4" stroke-width="1.8" opacity="0.6"/>
    <path d="M240,15 Q230,62 200,65 Q165,68 140,100 Q115,110 80,108 Q50,106 40,105" fill="none" stroke="#1a5fb4" stroke-width="1.8"/>
    <path d="M40,105 Q50,60 80,55 Q110,50 140,20" fill="none" stroke="#1a5fb4" stroke-width="1.8" opacity="0.6"/>
    <circle cx="200" cy="12" r="3" fill="#c01c28"/>
    <text x="204" y="10" fill="#c01c28" font-size="8" font-family="sans-serif">a (sat.)</text>
    <circle cx="140" cy="20" r="3" fill="#26a269"/>
    <text x="144" y="18" fill="#26a269" font-size="8" font-family="sans-serif">Bs</text>
    <circle cx="60" cy="60" r="3" fill="#c48c00"/>
    <text x="38" y="57" fill="#c48c00" font-size="8" font-family="sans-serif">-Hc</text>
    <circle cx="220" cy="60" r="3" fill="#c48c00"/>
    <text x="222" y="57" fill="#c48c00" font-size="8" font-family="sans-serif">Hc</text>
    <circle cx="140" cy="100" r="3" fill="#26a269"/>
    <text x="144" y="105" fill="#26a269" font-size="8" font-family="sans-serif">-Br</text>
    <circle cx="140" cy="20" r="3" fill="#26a269"/>
    <line x1="140" y1="20" x2="140" y2="60" stroke="#26a269" stroke-width="1" stroke-dasharray="2,2"/>
    <text x="144" y="42" fill="#26a269" font-size="8" font-family="sans-serif">Br</text>
  </svg>`
},

{
  id:'fig18', num:'FIGURA 18', chapters:['magneti'], module:'magneti',
  title:'Materiale "Soft" vs "Hard" — ferite vs AlNiCo',
  desc_pt:'"Soft" (esquerda): laço estreito, Hc pequeno — fácil de magnetizar e desmagnetizar (núcleos de transformadores). "Hard" (direita): laço largo, Hc grande — difícil de desmagnetizar (ímanes permanentes, ferite).',
  desc_ro:'"Soft": buclă îngustă, Hc mic (miezuri transformatoare). "Hard": buclă lată, Hc mare — rezistă demagnetizării (ferite, magneți permanenți).',
  formula:'Ferite: Hc ↑, Br ↓  |  AlNiCo: Hc ↓, Br ↑',
  svg:`<svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg">
    <line x1="70" y1="10" x2="70" y2="110" stroke="#4a5568" stroke-width="1"/>
    <line x1="10" y1="60" x2="130" y2="60" stroke="#4a5568" stroke-width="1"/>
    <path d="M50,25 Q65,15 70,20 Q75,25 80,60 Q85,95 90,100 Q95,105 70,100 Q45,95 60,60 Q65,25 50,25 Z" fill="rgba(38,162,105,0.15)" stroke="#26a269" stroke-width="1.8"/>
    <text x="70" y="115" text-anchor="middle" fill="#26a269" font-size="9" font-weight="bold" font-family="sans-serif">SOFT (Hc mic)</text>
    <line x1="210" y1="10" x2="210" y2="110" stroke="#4a5568" stroke-width="1"/>
    <line x1="150" y1="60" x2="270" y2="60" stroke="#4a5568" stroke-width="1"/>
    <path d="M165,25 Q185,15 210,18 Q235,20 245,60 Q235,100 210,102 Q185,105 175,60 Q165,15 165,25 Z" fill="rgba(26,95,180,0.15)" stroke="#1a5fb4" stroke-width="1.8"/>
    <text x="210" y="115" text-anchor="middle" fill="#1a5fb4" font-size="9" font-weight="bold" font-family="sans-serif">HARD (Hc mare)</text>
  </svg>`
},

/* ─── CAP. 12-14: SRVM circuite ─────────────────────────────── */
{
  id:'fig19', num:'FIGURA 19', chapters:['srvm'], module:'srvm',
  title:'Circuit de comandă BLDC — MCU + bridge 6 tranzistoare',
  desc_pt:'Circuito de controlo BLDC. O MCU lê os sensores Hall (A, B, C) e activa os transistores (Q0-Q5) em pares para fazer a comutação das 3 fases. PWM controla a velocidade.',
  desc_ro:'Circuitul de comandă BLDC. MCU citește senzorii Hall (A,B,C) și activează tranzistoarele (Q0-Q5) în perechi pentru comutarea celor 3 faze. PWM controlează viteza.',
  formula:'Sector k = ⌊θ_el/(π/3)⌋ mod 6  |  f_PWM ≥ 10 × f_motor',
  svg:`<svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="40" width="50" height="40" rx="4" fill="#ddeeff" stroke="#1a5fb4" stroke-width="1.5"/>
    <text x="35" y="63" text-anchor="middle" fill="#1a5fb4" font-size="9" font-weight="bold" font-family="sans-serif">MCU</text>
    <line x1="60" y1="60" x2="80" y2="60" stroke="#4a5568" stroke-width="1.5"/>
    <rect x="80" y="40" width="45" height="40" rx="4" fill="#fffdf0" stroke="#c48c00" stroke-width="1.5"/>
    <text x="102" y="58" text-anchor="middle" fill="#c48c00" font-size="8" font-family="sans-serif">Driver</text>
    <text x="102" y="70" text-anchor="middle" fill="#c48c00" font-size="8" font-family="sans-serif">PWM</text>
    <line x1="125" y1="60" x2="145" y2="60" stroke="#4a5568" stroke-width="1.5"/>
    <rect x="145" y="20" width="55" height="80" rx="4" fill="#f0fff4" stroke="#26a269" stroke-width="1.5"/>
    <text x="172" y="38" text-anchor="middle" fill="#26a269" font-size="7" font-family="sans-serif">Q0  Q1  Q2</text>
    <text x="172" y="52" text-anchor="middle" fill="#26a269" font-size="7" font-family="sans-serif">─────────</text>
    <text x="172" y="64" text-anchor="middle" fill="#26a269" font-size="7" font-family="sans-serif">Q3  Q4  Q5</text>
    <text x="172" y="90" text-anchor="middle" fill="#26a269" font-size="7" font-family="sans-serif">bridge</text>
    <line x1="200" y1="60" x2="220" y2="60" stroke="#4a5568" stroke-width="1.5"/>
    <circle cx="245" cy="60" r="22" fill="#eef2f7" stroke="#1a5fb4" stroke-width="1.5"/>
    <text x="245" y="57" text-anchor="middle" fill="#1a5fb4" font-size="7" font-family="sans-serif">BLDC</text>
    <text x="245" y="68" text-anchor="middle" fill="#1a5fb4" font-size="7" font-family="sans-serif">motor</text>
    <line x1="245" y1="82" x2="245" y2="100" stroke="#c01c28" stroke-width="1" stroke-dasharray="2,2"/>
    <text x="270" y="104" fill="#c01c28" font-size="7" font-family="sans-serif">Hall</text>
    <line x1="35" y1="40" x2="35" y2="20" stroke="#c01c28" stroke-width="1" stroke-dasharray="2,2"/>
    <text x="18" y="16" fill="#c01c28" font-size="7" font-family="sans-serif">Hall A,B,C</text>
  </svg>`
},

{
  id:'fig20', num:'FIGURA 20', chapters:['srvm'], module:'srvm',
  title:'Circuit de putere BLDC — tranzistoare Q1-Q3 și Q16-Q18',
  desc_pt:'Circuito de potência BLDC completo. Os transistores de cima (Q1-Q3) ligam as fases ao +V; os de baixo (Q16-Q18) ligam ao −V (GND). A comutação em pares determina qual fase conduz.',
  desc_ro:'Circuitul de putere BLDC complet. Tranzistoarele de sus (Q1-Q3) conectează fazele la +V; cele de jos (Q16-Q18) la −V. Comutarea în perechi determină ce faze conduc.',
  formula:'2 faze conduc simultan  |  1 fază liberă  |  u_faza = Rₛ·i + Lₛ·di/dt + ef',
  svg:`<svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg">
    <line x1="20" y1="15" x2="260" y2="15" stroke="#c01c28" stroke-width="2"/>
    <text x="8" y="19" fill="#c01c28" font-size="9" font-weight="bold" font-family="sans-serif">+V</text>
    <line x1="20" y1="105" x2="260" y2="105" stroke="#1a5fb4" stroke-width="2"/>
    <text x="8" y="109" fill="#1a5fb4" font-size="9" font-weight="bold" font-family="sans-serif">GND</text>
    ${[0,1,2].map(i=>{
      const x = 60 + i*70;
      return `<line x1="${x}" y1="15" x2="${x}" y2="105" stroke="#d0dcea" stroke-width="1"/>
      <rect x="${x-14}" y="25" width="28" height="18" rx="3" fill="#f0fff4" stroke="#26a269" stroke-width="1.2"/>
      <text x="${x}" y="37" text-anchor="middle" fill="#26a269" font-size="8" font-family="sans-serif">Q${i+1}</text>
      <rect x="${x-14}" y="77" width="28" height="18" rx="3" fill="#fff0f0" stroke="#c01c28" stroke-width="1.2"/>
      <text x="${x}" y="89" text-anchor="middle" fill="#c01c28" font-size="8" font-family="sans-serif">Q${i+16}</text>
      <text x="${x}" y="65" text-anchor="middle" fill="#1a5fb4" font-size="9" font-weight="bold" font-family="sans-serif">${['A','B','C'][i]}</text>`;
    }).join('')}
    <circle cx="230" cy="60" r="22" fill="#ddeeff" stroke="#1a5fb4" stroke-width="1.5"/>
    <text x="230" y="57" text-anchor="middle" fill="#1a5fb4" font-size="7" font-family="sans-serif">rotor</text>
    <text x="230" y="67" text-anchor="middle" fill="#1a5fb4" font-size="7" font-family="sans-serif">N/S</text>
  </svg>`
},

/* ─── CAP. 14: FORME DE UNDĂ ─────────────────────────────── */
{
  id:'fig23', num:'FIGURA 23', chapters:['srvm'], module:'srvm',
  title:'Tensiunile de fază A-B, B-C, C-A — formă trapezoidală',
  desc_pt:'Formas de onda trapezoidais das tensões de fase A-B, B-C, C-A no BLDC. Cada fase conduz durante 120° e está livre durante 60°. A forma trapezoidal é característica do BLDC com sensores Hall simples.',
  desc_ro:'Formele de undă trapezoidale ale tensiunilor de fază A-B, B-C, C-A la BLDC. Fiecare fază conduce 120° și este liberă 60°. Forma trapezoidală — caracteristică BLDC cu senzori Hall simpli.',
  formula:'ΔM/M ≈ ±4%  (trapez.)  vs  ≈ 0%  (sinusoidal)',
  svg:`<svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg">
    ${['A-B','B-C','C-A'].map((lbl,i)=>{
      const y = 18 + i*33;
      const off = i*22;
      return `<text x="5" y="${y+10}" fill="#4a5568" font-size="7" font-family="sans-serif">${lbl}</text>
      <line x1="30" y1="${y+10}" x2="270" y2="${y+10}" stroke="#8a9ab0" stroke-width="0.8"/>
      <path d="M${30+off},${y+10} L${42+off},${y+10} L${46+off},${y+1} L${90+off},${y+1} L${94+off},${y+10} L${130+off},${y+10} L${134+off},${y+19} L${178+off},${y+19} L${182+off},${y+10} L${220+off},${y+10}" fill="none" stroke="${['#1a5fb4','#26a269','#c01c28'][i]}" stroke-width="1.8"/>`;
    }).join('')}
    <line x1="30" y1="5" x2="30" y2="112" stroke="#d0dcea" stroke-width="0.8" stroke-dasharray="2,2"/>
    <text x="25" y="114" fill="#8a9ab0" font-size="7" font-family="sans-serif">0°</text>
    <line x1="70" y1="5" x2="70" y2="112" stroke="#d0dcea" stroke-width="0.8" stroke-dasharray="2,2"/>
    <text x="63" y="114" fill="#8a9ab0" font-size="7" font-family="sans-serif">60°</text>
    <line x1="110" y1="5" x2="110" y2="112" stroke="#d0dcea" stroke-width="0.8" stroke-dasharray="2,2"/>
    <text x="100" y="114" fill="#8a9ab0" font-size="7" font-family="sans-serif">120°</text>
    <line x1="190" y1="5" x2="190" y2="112" stroke="#d0dcea" stroke-width="0.8" stroke-dasharray="2,2"/>
    <text x="180" y="114" fill="#8a9ab0" font-size="7" font-family="sans-serif">240°</text>
  </svg>`
},

{
  id:'fig24', num:'FIGURA 24', chapters:['srvm'], module:'srvm',
  title:'Cuplu electromagnetic vs timp — ripple la 60°',
  desc_pt:'Variação do torque eletromagnético ao longo do tempo no BLDC. As ondulações (ripple) a cada 60° são inevitáveis na comutação trapezoidal. Com enrolamento sinusoidal o ripple é praticamente zero.',
  desc_ro:'Variația cuplului electromagnetic în timp la BLDC. Ondulațiile (ripple) la fiecare 60° sunt inevitabile la comutația trapezoidală. Cu înfășurare sinusoidală, ripple ≈ 0.',
  formula:'ΔM_em / M_em ≈ ±4%  (înfășurare trapezoidală)',
  svg:`<svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg">
    <line x1="25" y1="100" x2="265" y2="100" stroke="#4a5568" stroke-width="1"/>
    <line x1="25" y1="20" x2="25" y2="100" stroke="#4a5568" stroke-width="1"/>
    <text x="268" y="104" fill="#4a5568" font-size="9" font-family="sans-serif">t</text>
    <text x="28" y="18" fill="#4a5568" font-size="9" font-family="sans-serif">M_em</text>
    <line x1="25" y1="55" x2="265" y2="55" stroke="#8a9ab0" stroke-width="1" stroke-dasharray="3,2"/>
    <text x="240" y="52" fill="#8a9ab0" font-size="8" font-family="sans-serif">M_nom</text>
    <path d="M25,45 Q35,42 45,50 Q55,58 65,45 Q75,42 85,50 Q95,58 105,45 Q115,42 125,50 Q135,58 145,45 Q155,42 165,50 Q175,58 185,45 Q195,42 205,50 Q215,58 225,45 Q235,42 245,50 Q255,58 265,45" fill="rgba(26,95,180,0.15)" stroke="#1a5fb4" stroke-width="2"/>
    ${[65,105,145,185,225].map(x=>`<line x1="${x}" y1="20" x2="${x}" y2="100" stroke="#c48c00" stroke-width="0.8" stroke-dasharray="2,2"/>`).join('')}
    <text x="78" y="115" text-anchor="middle" fill="#c48c00" font-size="8" font-family="sans-serif">60° 60° 60°</text>
    <text x="140" y="92" text-anchor="middle" fill="#c01c28" font-size="8" font-family="sans-serif">ripple ±4%</text>
  </svg>`
},

/* ─── MOTOR ASINCRON ─────────────────────────────────────── */
{
  id:'fig25', num:'FIGURA 25', chapters:['async'], module:'async',
  title:'Caracteristica mecanică n = f(M) — motor asincron',
  desc_pt:'Característica mecânica do motor assíncrono: zona A (estável, s<sₘ) e zona B (instável, s>sₘ). M₀=torque em vazio, Mₙ=torque nominal, Mₘₐₓ=torque de Kloss. O motor só funciona de forma estável na zona A.',
  desc_ro:'Caracteristica mecanică a motorului asincron: zona A (stabilă, s<sₘ) și zona B (instabilă, s>sₘ). M₀=cuplu în gol, Mₙ=nominal, Mₘₐₓ=Kloss. Motorul funcționează stabil numai în zona A.',
  formula:'M = 2Mₘ / (s/sₘ + sₘ/s)  —  formula Kloss',
  svg:`<svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg">
    <line x1="30" y1="10" x2="30" y2="110" stroke="#4a5568" stroke-width="1"/>
    <line x1="30" y1="110" x2="260" y2="110" stroke="#4a5568" stroke-width="1"/>
    <text x="262" y="114" fill="#4a5568" font-size="9" font-family="sans-serif">M</text>
    <text x="33" y="12" fill="#4a5568" font-size="9" font-family="sans-serif">n</text>
    <text x="33" y="25" fill="#8a9ab0" font-size="8" font-family="sans-serif">n₁</text>
    <line x1="30" y1="22" x2="260" y2="22" stroke="#8a9ab0" stroke-width="0.8" stroke-dasharray="3,2"/>
    <path d="M30,22 Q50,24 70,32 Q90,42 120,55 Q140,62 160,50 Q190,30 220,24 Q240,22 260,22" fill="none" stroke="#1a5fb4" stroke-width="2.2"/>
    <rect x="30" y="22" width="80" height="88" fill="rgba(38,162,105,0.07)"/>
    <rect x="110" y="22" width="150" height="88" fill="rgba(192,28,40,0.05)"/>
    <text x="68" y="95" fill="#26a269" font-size="9" font-weight="bold" font-family="sans-serif">A stabil</text>
    <text x="165" y="95" fill="#c01c28" font-size="9" font-weight="bold" font-family="sans-serif">B instabil</text>
    <circle cx="120" cy="55" r="4" fill="#f6d32d" stroke="#c48c00" stroke-width="1.5"/>
    <text x="122" y="50" fill="#c48c00" font-size="8" font-family="sans-serif">Mₘₐₓ</text>
    <line x1="120" y1="55" x2="120" y2="110" stroke="#c48c00" stroke-width="0.8" stroke-dasharray="2,2"/>
    <text x="115" y="118" fill="#c48c00" font-size="8" font-family="sans-serif">sₘ</text>
  </svg>`
},

/* ─── CAP. 15-19: MOTOR PAS CU PAS ──────────────────────── */
{
  id:'mpp1', num:'Fig. MPP 1', chapters:['mpp'], module:'mpp',
  title:'Punct de echilibru stabil vs instabil — MPP',
  desc_pt:'Pontos de equilíbrio num motor de passo. Estável (esquerda): se perturbado, o torque restaura a posição. Instável (direita): qualquer perturbação leva à perda do passo.',
  desc_ro:'Puncte de echilibru la motorul pas cu pas. Stabil (stânga): dacă e perturbat, cuplul restabilește poziția. Instabil (dreapta): orice perturbare → pierdere de pași.',
  formula:'|M_em| > M_rez → pașul executat  |  M_em = f(θ) sinusoidal',
  svg:`<svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(70,60)">
      <line x1="-55" y1="0" x2="55" y2="0" stroke="#4a5568" stroke-width="1"/>
      <line x1="0" y1="-45" x2="0" y2="45" stroke="#4a5568" stroke-width="1"/>
      <path d="M-50,0 Q-25,-40 0,0 Q25,40 50,0" fill="none" stroke="#1a5fb4" stroke-width="2"/>
      <line x1="-50" y1="20" x2="50" y2="20" stroke="#c01c28" stroke-width="1.5" stroke-dasharray="3,2"/>
      <circle cx="0" cy="0" r="4" fill="#26a269"/>
      <text x="5" y="-5" fill="#26a269" font-size="8" font-family="sans-serif">stabil</text>
      <text x="-35" y="55" fill="#4a5568" font-size="8" font-family="sans-serif">M_rez</text>
    </g>
    <line x1="138" y1="8" x2="138" y2="112" stroke="#d0dcea" stroke-width="1" stroke-dasharray="4,3"/>
    <g transform="translate(210,60)">
      <line x1="-55" y1="0" x2="55" y2="0" stroke="#4a5568" stroke-width="1"/>
      <line x1="0" y1="-45" x2="0" y2="45" stroke="#4a5568" stroke-width="1"/>
      <path d="M-50,0 Q-25,-40 0,0 Q25,40 50,0" fill="none" stroke="#1a5fb4" stroke-width="2"/>
      <line x1="-50" y1="20" x2="50" y2="20" stroke="#c01c28" stroke-width="1.5" stroke-dasharray="3,2"/>
      <circle cx="25" cy="30" r="4" fill="#c01c28"/>
      <text x="30" y="28" fill="#c01c28" font-size="8" font-family="sans-serif">instabil</text>
    </g>
  </svg>`
},

{
  id:'mpp2', num:'Fig. MPP 2', chapters:['mpp'], module:'mpp',
  title:'MPP cu reluctanță variabilă — 3 poli stator, 8 dinți rotor',
  desc_pt:'MPP com reluctância variável: 3 polos estator (1 dente cada) e rotor com 8 dentes. Na Fase A, os dentes do rotor alinham com os polos A → posição de menor reluctância → equilíbrio estável.',
  desc_ro:'MPP cu reluctanță variabilă: 3 poli stator (1 dinte fiecare) și rotor cu 8 dinți. La Faza A, dinții rotorului se aliniază cu polii A → poziție de reluctanță minimă → echilibru stabil.',
  formula:'θₚ = 360° / (Nᵣ·m) = 360° / (8·3) = 15° / pas',
  svg:`<svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="60" r="50" fill="#f7f9fc" stroke="#d0dcea" stroke-width="1.5"/>
    <circle cx="100" cy="60" r="32" fill="#eef2f7" stroke="#1a5fb4" stroke-width="1.5"/>
    ${Array.from({length:8},(_,i)=>{
      const a = i*45*Math.PI/180;
      const x = 100+Math.cos(a)*32, y = 60+Math.sin(a)*32;
      return `<rect x="${x-4}" y="${y-4}" width="8" height="8" rx="1" fill="#4a5568" transform="rotate(${i*45},${x},${y})"/>`;
    }).join('')}
    ${[0,120,240].map((deg,i)=>{
      const a = deg*Math.PI/180-Math.PI/2;
      const x = 100+Math.cos(a)*46, y = 60+Math.sin(a)*46;
      const colors = ['#c01c28','#1a5fb4','#26a269'];
      const labels = ['A','B','C'];
      return `<rect x="${x-6}" y="${y-6}" width="12" height="12" rx="2" fill="${colors[i]}" opacity="0.85"/>
      <text x="${x}" y="${y+3}" text-anchor="middle" fill="white" font-size="8" font-weight="bold" font-family="sans-serif">${labels[i]}</text>`;
    }).join('')}
    <text x="100" y="63" text-anchor="middle" fill="#4a5568" font-size="7" font-family="sans-serif">Nr=8</text>
    <text x="100" y="115" text-anchor="middle" fill="#4a5568" font-size="9" font-family="Poppins,sans-serif">faza A activă</text>
    <g transform="translate(185,20)">
      <text x="0" y="0" fill="#1a5fb4" font-size="9" font-family="Poppins,sans-serif">m = 3 faze</text>
      <text x="0" y="16" fill="#4a5568" font-size="9" font-family="Poppins,sans-serif">Nᵣ = 8 dinți</text>
      <text x="0" y="32" fill="#c01c28" font-size="10" font-weight="bold" font-family="Poppins,sans-serif">θₚ = 15°</text>
    </g>
  </svg>`
},

{
  id:'mpp7', num:'Fig. MPP 7', chapters:['mpp'], module:'mpp',
  title:'Caracteristica cuplu-frecvență MPP — domenii de funcționare',
  desc_pt:'Característica torque-frequência do MPP. Zona de arranque (abaixo da curva de arranque), zona de aceleração (entre as duas curvas) e zona de marcha. Para velocidades acima de fstart é necessária aceleração em degraus.',
  desc_ro:'Caracteristica cuplu-frecvență a MPP. Domeniu pornire, domeniu accelerare și domeniu de mers. Pentru frecvențe > fstart este necesară accelerarea în trepte.',
  formula:'fstart ≤ 1.25 · frez  |  frez = (1/2π)·√(p·M/Jred)',
  svg:`<svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg">
    <line x1="30" y1="10" x2="30" y2="108" stroke="#4a5568" stroke-width="1"/>
    <line x1="30" y1="108" x2="260" y2="108" stroke="#4a5568" stroke-width="1"/>
    <text x="262" y="112" fill="#4a5568" font-size="9" font-family="sans-serif">f</text>
    <text x="33" y="12" fill="#4a5568" font-size="9" font-family="sans-serif">M</text>
    <path d="M30,20 L100,20 Q120,22 160,50 Q190,70 240,105" fill="rgba(26,95,180,0.08)" stroke="#1a5fb4" stroke-width="2"/>
    <path d="M30,20 L70,20 Q90,22 120,40 Q160,65 200,105" fill="none" stroke="#26a269" stroke-width="2" stroke-dasharray="5,3"/>
    <rect x="30" y="20" width="70" height="88" fill="rgba(38,162,105,0.06)"/>
    <rect x="100" y="20" width="60" height="88" fill="rgba(196,140,0,0.06)"/>
    <text x="60" y="70" text-anchor="middle" fill="#26a269" font-size="8" font-family="sans-serif">pornire</text>
    <text x="130" y="70" text-anchor="middle" fill="#c48c00" font-size="8" font-family="sans-serif">accel.</text>
    <text x="200" y="70" fill="#4a5568" font-size="8" font-family="sans-serif">mers</text>
    <line x1="100" y1="10" x2="100" y2="108" stroke="#c48c00" stroke-width="1" stroke-dasharray="2,2"/>
    <text x="90" y="117" fill="#c48c00" font-size="8" font-family="sans-serif">fstart</text>
    <line x1="80" y1="10" x2="80" y2="108" stroke="#c01c28" stroke-width="1" stroke-dasharray="2,2"/>
    <text x="65" y="117" fill="#c01c28" font-size="8" font-family="sans-serif">frez</text>
  </svg>`
},

{
  id:'mpp10', num:'Fig. MPP 10', chapters:['mpp'], module:'mpp',
  title:'Profil de viteză MPP — accelerare în trepte',
  desc_pt:'Perfil de velocidade com aceleração em degraus. O motor arranca a v₁ (abaixo de fstart), acelera em degraus (v₁→v₂→v₃) até à velocidade de regime V_regim. A desaceleração é simétrica.',
  desc_ro:'Profilul de viteză cu accelerare în trepte. Motorul pornește la v₁ (sub fstart), accelerează în trepte până la viteza de regim V_regim. Decelerarea este simetrică.',
  formula:'tc ≥ tm  →  rampa: f₁ → f₂ → ... → f_regim',
  svg:`<svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg">
    <line x1="25" y1="100" x2="255" y2="100" stroke="#4a5568" stroke-width="1"/>
    <line x1="25" y1="15" x2="25" y2="100" stroke="#4a5568" stroke-width="1"/>
    <text x="258" y="104" fill="#4a5568" font-size="9" font-family="sans-serif">t</text>
    <text x="28" y="14" fill="#4a5568" font-size="9" font-family="sans-serif">v</text>
    <line x1="25" y1="30" x2="255" y2="30" stroke="#8a9ab0" stroke-width="0.8" stroke-dasharray="3,2"/>
    <text x="230" y="28" fill="#8a9ab0" font-size="7" font-family="sans-serif">V_reg</text>
    <path d="M25,100 L45,100 L45,78 L65,78 L65,56 L85,56 L85,30 L165,30 L165,56 L185,56 L185,78 L205,78 L205,100 L255,100" fill="rgba(26,95,180,0.12)" stroke="#1a5fb4" stroke-width="2"/>
    <text x="35" y="115" fill="#1a5fb4" font-size="8" font-family="sans-serif">t_pornire</text>
    <text x="105" y="115" fill="#26a269" font-size="8" font-family="sans-serif">t_regim</text>
    <text x="185" y="115" fill="#1a5fb4" font-size="8" font-family="sans-serif">t_oprire</text>
    <text x="48" y="94" fill="#4a5568" font-size="7" font-family="sans-serif">v₁</text>
    <text x="48" y="72" fill="#4a5568" font-size="7" font-family="sans-serif">v₂</text>
    <text x="48" y="50" fill="#4a5568" font-size="7" font-family="sans-serif">v₃</text>
  </svg>`
},

{
  id:'mpp18', num:'Fig. MPP 18', chapters:['mpp'], module:'mpp',
  title:'Full-step vs Micro-stepping — unghi vs timp',
  desc_pt:'Comparação entre full-step (saltos abruptos com oscilações) e micro-stepping (movimento suave e preciso). O micro-stepping divide cada passo em N sub-passos, reduzindo vibrações e aumentando a resolução.',
  desc_ro:'Comparație full-step (salturi abrupte cu oscilații) și micro-stepping (mișcare lină, precisă). Micro-stepping împarte fiecare pas în N sub-pași, reducând vibrațiile și crescând rezoluția.',
  formula:'Half-step: θₚ/2  |  Micro-stepping: θₚ/N  (N până la 256)',
  svg:`<svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(15,5)">
      <text x="55" y="10" text-anchor="middle" fill="#c01c28" font-size="9" font-weight="bold" font-family="sans-serif">Full-step</text>
      <line x1="0" y1="90" x2="110" y2="90" stroke="#4a5568" stroke-width="1"/>
      <line x1="0" y1="20" x2="0" y2="90" stroke="#4a5568" stroke-width="1"/>
      <path d="M0,90 L20,90 L20,68 L20,68 Q22,50 24,48 Q26,62 28,68 L28,68 L48,68 L48,45 Q50,28 52,25 Q54,38 56,45 L56,45 L76,45 L76,22 Q78,12 80,10 Q82,22 84,22" fill="none" stroke="#c01c28" stroke-width="2"/>
      <text x="55" y="105" text-anchor="middle" fill="#4a5568" font-size="8" font-family="sans-serif">oscilații →</text>
    </g>
    <line x1="138" y1="5" x2="138" y2="115" stroke="#d0dcea" stroke-width="1" stroke-dasharray="3,2"/>
    <g transform="translate(148,5)">
      <text x="55" y="10" text-anchor="middle" fill="#26a269" font-size="9" font-weight="bold" font-family="sans-serif">Micro-stepping</text>
      <line x1="0" y1="90" x2="110" y2="90" stroke="#4a5568" stroke-width="1"/>
      <line x1="0" y1="20" x2="0" y2="90" stroke="#4a5568" stroke-width="1"/>
      <path d="M0,90 Q20,88 40,72 Q60,56 80,38 Q100,22 110,18" fill="none" stroke="#26a269" stroke-width="2.2"/>
      <text x="55" y="105" text-anchor="middle" fill="#4a5568" font-size="8" font-family="sans-serif">mișcare lină ✓</text>
    </g>
  </svg>`
},

/* ─── MOTOR ASINCRON (foto + caracteristică) ─────────────── */
{
  id:'async2', num:'Async — Caracteristică completă', chapters:['async'], module:'async',
  title:'Motor asincron — construcție + caracteristică M(s)',
  desc_pt:'Componentes do motor assíncrono: tolé (tole), rolamento (rulment), rotor em gaiola de esquilo (colivie), eixo (ax). Característica M(s) mostra as zonas de generator, motor e frânare.',
  desc_ro:'Componente motor asincron: tole, rulment, rotor tip colivie (squirrel cage), ax. Caracteristica M(s): generator | motor | frânare, cu Mₘₐₓ și zonele A și B.',
  formula:'s = (n₁−n₂)/n₁  |  M = 2Mₘ/(s/sₘ+sₘ/s)  —  formula Kloss',
  svg:`<svg viewBox="0 0 280 120" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(65,60)">
      <circle cx="0" cy="0" r="44" fill="#f7f9fc" stroke="#d0dcea" stroke-width="1.5"/>
      <circle cx="0" cy="0" r="30" fill="#eef2f7" stroke="#1a5fb4" stroke-width="1.5"/>
      ${Array.from({length:12},(_,i)=>{
        const a=i*30*Math.PI/180;
        const x1=Math.cos(a)*30, y1=Math.sin(a)*30;
        const x2=Math.cos(a)*44, y2=Math.sin(a)*44;
        return `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#1a5fb4" stroke-width="2"/>`;
      }).join('')}
      <circle cx="0" cy="0" r="8" fill="#4a5568"/>
      <circle cx="0" cy="0" r="3" fill="white"/>
      <text x="0" y="55" text-anchor="middle" fill="#4a5568" font-size="8" font-family="sans-serif">colivie (squirrel cage)</text>
    </g>
    <g transform="translate(165,15)">
      <line x1="0" y1="90" x2="100" y2="90" stroke="#4a5568" stroke-width="1"/>
      <line x1="50" y1="5" x2="50" y2="90" stroke="#4a5568" stroke-width="1"/>
      <text x="103" y="94" fill="#4a5568" font-size="8" font-family="sans-serif">M</text>
      <text x="53" y="8" fill="#4a5568" font-size="8" font-family="sans-serif">n₂</text>
      <text x="10" y="50" fill="#8a9ab0" font-size="7" font-family="sans-serif">gen.</text>
      <text x="60" y="50" fill="#1a5fb4" font-size="7" font-family="sans-serif">motor</text>
      <path d="M5,85 Q15,30 50,20 Q70,15 85,85" fill="none" stroke="#1a5fb4" stroke-width="2"/>
      <circle cx="25" cy="22" r="3" fill="#f6d32d" stroke="#c48c00" stroke-width="1.2"/>
      <text x="14" y="18" fill="#c48c00" font-size="7" font-family="sans-serif">Mₘₐₓ</text>
      <rect x="5" y="5" width="45" height="85" fill="rgba(38,162,105,0.05)"/>
      <rect x="50" y="5" width="50" height="85" fill="rgba(192,28,40,0.04)"/>
      <text x="27" y="95" text-anchor="middle" fill="#26a269" font-size="7" font-family="sans-serif">A</text>
      <text x="75" y="95" text-anchor="middle" fill="#c01c28" font-size="7" font-family="sans-serif">B</text>
    </g>
  </svg>`
},

];

/* ══════════════════════════════════════════════════════════════
   BUILD + FILTER
══════════════════════════════════════════════════════════════ */
function buildFigures() {
  const grid = document.getElementById('fig-grid');
  if (!grid) return;

  grid.innerHTML = FIGURES.map(f => `
    <div class="fig-card" data-chapters="${f.chapters.join(' ')}"
         onclick="askQuestion('Explica-me a figura ${f.num}: ${f.title}. O que mostra fisicamente e qual o conceito associado? Responde em PT e RO.')">
      <div class="fig-num">${f.num}</div>
      <div class="fig-svg-wrap">${f.svg}</div>
      <div class="fig-title">${f.title}</div>
      <div style="display:flex;align-items:center;gap:4px;padding:3px 12px 1px">
        <span style="font-size:10px;font-weight:700;color:#26a269">🇵🇹 PT</span>
      </div>
      <div class="fig-desc-pt">${f.desc_pt}</div>
      <div style="display:flex;align-items:center;gap:4px;padding:3px 12px 1px">
        <span style="font-size:10px;font-weight:700;color:#1a5fb4">🇷🇴 RO</span>
      </div>
      <div class="fig-desc-ro">${f.desc_ro}</div>
      ${f.formula ? `<div class="fig-formula">${f.formula}</div>` : ''}
      <div class="fig-link" onclick="event.stopPropagation();go('${f.module}',document.querySelector('[data-mod=${f.module}]'))">
        → Modulul: ${f.module.toUpperCase()}
      </div>
    </div>
  `).join('');
}

function filterFigures() {
  const chapter = document.getElementById('fig-chapter')?.value || 'all';
  document.querySelectorAll('.fig-card').forEach(card => {
    const chs = card.dataset.chapters || '';
    card.classList.toggle('hidden', chapter !== 'all' && !chs.includes(chapter));
  });
  // update count
  const visible = document.querySelectorAll('.fig-card:not(.hidden)').length;
  const sel = document.getElementById('fig-chapter');
  if (sel) {
    const opt = sel.options[sel.selectedIndex];
    if (opt && chapter !== 'all') {
      // show count in status
    }
  }
}
