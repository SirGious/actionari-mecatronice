/* ══════════════════════════════════════════════════════════════
   tooltips.js — Tooltips inline para termos técnicos
   Princípio: redução de carga cognitiva (Sweller, 1988)
══════════════════════════════════════════════════════════════ */

const TOOLTIP_TERMS = {
  'reluctanță': {
    pt:'Resistência magnética de um circuito — equivalente à resistência elétrica R = l/(μA). Quanto maior a reluctância, menor o fluxo para a mesma força magnetomotora.',
    ro:'Rezistența magnetică a unui circuit. ℛ = l/(μ·A) [A/Wb]. Analogie cu rezistența electrică R.',
    formula:'ℛ = l / (μ · A)  [A/Wb]'
  },
  'permeabilitate': {
    pt:'Facilidade com que um material se magnetiza. μ = μ₀·μᵣ. Para ferro: μᵣ ≈ 1000–10000. Para vácuo: μ₀ = 4π×10⁻⁷ H/m.',
    ro:'Ușurința cu care un material se magnetizează. μ = μ₀·μᵣ. Fier: μᵣ ≈ 1000–10000.',
    formula:'B = μ · H = μ₀ · μᵣ · H  [T]'
  },
  'flux înlănțuit': {
    pt:'Fluxo total que atravessa todas as N espiras de uma bobina. Λ = N·Ψ. É o que realmente gera a tensão induzida.',
    ro:'Fluxul total care traversează toate cele N spire ale unei bobine. Λ = N·Ψ [Wb-spire].',
    formula:'Λ = N · Ψ  [Wb-spire]  →  e = −dΛ/dt  [V]'
  },
  'tensiune electromotoare': {
    pt:'Tensão gerada pela variação do fluxo magnético num condutor em movimento. No motor CC: E = kₑ·n·Ψ.',
    ro:'Tensiunea generată de variația fluxului. La MCC: E = kₑ·n·Ψ. Limitează curentul și convertește energie.',
    formula:'E = kₑ · n · Ψ  [V]  (la MCC)'
  },
  'cuplu electromagnetic': {
    pt:'Força de rotação gerada pela interação entre o campo magnético e a corrente. M = kₘ·Iₐ·Ψ.',
    ro:'Forța de rotație generată de interacțiunea câmpului magnetic cu curentul. M = kₘ·Iₐ·Ψ [N·m].',
    formula:'M = kₘ · Iₐ · Ψ  [N·m]'
  },
  'factor de amortizare': {
    pt:'Parâmetro ξ que controla como o sistema oscila. ξ<1: oscila. ξ=1: crítico (mais rápido). ξ>1: lento.',
    ro:'Parametrul ξ care controlează oscilațiile sistemului. ξ<1: subamortizat. ξ=1: critic. ξ>1: supraamortizat.',
    formula:'ξ = (Rₐ/2) · √(Jₘ / k²·Lₐ)'
  },
  'pulsație nominală': {
    pt:'Frequência natural de oscilação ωₙ — determina a rapidez de resposta. Maior ωₙ = mais rápido.',
    ro:'Frecvența naturală de oscilație ωₙ — determină viteza de răspuns.',
    formula:'ωₙ = √(k² / Lₐ·Jₘ)  [rad/s]'
  },
  'alunecare': {
    pt:'Diferença relativa entre velocidade síncrona n₁ e velocidade do rotor n₂. Sempre positiva em regime motor. s=0 é impossível com carga.',
    ro:'Diferența relativă dintre viteza câmpului rotitor (n₁) și viteza rotorului (n₂). s=0 e imposibil cu sarcină.',
    formula:'s = (n₁ − n₂) / n₁ = f₂/f₁'
  },
  'reacția indusului': {
    pt:'Interferência do campo magnético criado pela corrente do rotor no campo do estator. Desloca o eixo neutro → causa faíscas.',
    ro:'Interferența câmpului magnetic creat de curentul rotoric cu câmpul statoric. Deplasează axa neutră → scântei.',
    formula:'Câmp rezultant = Câmp excitație ⊕ Câmp armătură'
  },
  'moment de inerție': {
    pt:'Resistência do rotor a mudanças de velocidade — equivalente à massa para movimentos lineares.',
    ro:'Rezistența rotorului la variații de viteză — echivalentul masei pentru mișcări liniare.',
    formula:'J = ∫ r² dm  [kg·m²]  →  M = J · dω/dt'
  },
  'pas unghiular': {
    pt:'Ângulo de rotação por impulso elétrico num motor de passo. Fixo e preciso.',
    ro:'Unghiul de rotație per impuls electric la motorul pas cu pas.',
    formula:'θₚ = 360° / (Nᵣ · m)  [°/pas]'
  },
  'comutație statică': {
    pt:'Comutação dos enrolamentos por transistores (MOSFET/IGBT) em vez de escovas mecânicas.',
    ro:'Comutarea înfășurărilor prin tranzistoare în loc de perii mecanice.',
    formula:'6 comutații per perioadă electrică  |  Comut./rot = 6·p'
  },
  'frecvență de rezonanță': {
    pt:'Frequência em que as oscilações próprias do motor de passo somam-se à comutação → torque colapsa.',
    ro:'Frecvența la care oscilațiile proprii se suprapun cu comutarea → cuplul scade brusc.',
    formula:'frez = (1/2π) · √(p · M / Jred)  [Hz]'
  },
  'histerezis': {
    pt:'Memória magnética de um material — o campo B forma um ciclo fechado com H. Área do laço = energia perdida por ciclo.',
    ro:'Memoria magnetică a unui material. Aria buclei B-H = energie pierdută per ciclu.',
    formula:'W_pierdut = ∮ H · dB  [J/m³/ciclu]'
  },
  'reluctanță variabilă': {
    pt:'Princípio em que o rotor gira para minimizar a reluctância magnética — o caminho de menor resistência para o fluxo.',
    ro:'Principiul prin care rotorul se rotește pentru a minimiza reluctanța magnetică a circuitului.',
    formula:'M = −(∂Wₘ/∂θ)|ψ=ct'
  },
  'inducție magnetică': {
    pt:'Campo magnético B [Tesla] — força exercida por unidade de comprimento de condutor por unidade de corrente.',
    ro:'Câmpul magnetic B [Tesla]. La un conductor rectiliniu: B = (μ·i)/(2π·r).',
    formula:'B = μ₀ · μᵣ · H  [T]  |  F = i·L·B·sin θ'
  },
  'înfășurare buclată': {
    pt:'Tipo de enrolamento do rotor do motor CC em que cada bobina liga lamelas adjacentes do colector.',
    ro:'Înfășurare în care fiecare bobină conectează lamele adiacente ale colectorului.',
    formula:'Nr. căi paralele a = 2p'
  },
  'caracteristică mecanică': {
    pt:'Curva da velocidade em função do torque ou corrente: n = f(M) ou n = f(Iₐ).',
    ro:'Dependența turației n față de momentul de sarcină M la tensiune de alimentare dată.',
    formula:'n = (U − Rₐ·Iₐ) / (kₑ·Ψ)  [rot/min]'
  },
};

/* ── INIT TOOLTIPS ──────────────────────────────────────────── */
function initTooltips() {
  /* Create tooltip bubble */
  let tip = document.getElementById('tooltip-bubble');
  if (!tip) {
    tip = document.createElement('div');
    tip.id = 'tooltip-bubble';
    tip.style.cssText =
      'display:none;position:fixed;z-index:9999;background:white;' +
      'border:2px solid #1a5fb4;border-radius:12px;padding:14px 16px;' +
      'box-shadow:0 8px 32px rgba(26,95,180,0.18);max-width:340px;' +
      'font-family:Poppins,sans-serif;pointer-events:auto;';
    document.body.appendChild(tip);
  }

  markTermsInContent();

  document.addEventListener('click', e => {
    if (!e.target.closest('.tooltip-term') && !e.target.closest('#tooltip-bubble')) {
      tip.style.display = 'none';
    }
  });
}

/* ── MARK TERMS ─────────────────────────────────────────────── */
function markTermsInContent() {
  const containers = document.querySelectorAll(
    '.eblock, .eq-desc, .eq-symbols, .adv-i, .lang-sec, .theory-text'
  );
  containers.forEach(el => {
    /* skip if already processed */
    if (el.dataset.tooltipDone) return;
    el.dataset.tooltipDone = '1';

    let html = el.innerHTML;
    Object.keys(TOOLTIP_TERMS).forEach(term => {
      const regex = new RegExp(`(?<![\\w\\-])(${escapeRegex(term)})(?![\\w\\-])`, 'i');
      if (regex.test(html)) {
        html = html.replace(regex,
          `<span class="tooltip-term" data-term="${term}" onclick="showTooltip(this,event)">$1</span>`);
      }
    });
    el.innerHTML = html;
  });
}

function escapeRegex(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/* ── SHOW TOOLTIP ───────────────────────────────────────────── */
function showTooltip(el, event) {
  event.stopPropagation();
  const term = el.dataset.term;
  const data = TOOLTIP_TERMS[term];
  if (!data) return;

  const tip = document.getElementById('tooltip-bubble');
  tip.innerHTML = `
    <div style="font-size:11px;font-weight:700;color:#8a9ab0;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px">📖 ${term}</div>
    <div style="margin-bottom:8px">
      <span style="font-size:10px;font-weight:700;color:#26a269;display:block;margin-bottom:3px">🇵🇹 Português</span>
      <span style="font-size:12px;color:#1c1c1e;line-height:1.6">${data.pt}</span>
    </div>
    <div style="margin-bottom:${data.formula?'8px':'0'}">
      <span style="font-size:10px;font-weight:700;color:#1a5fb4;display:block;margin-bottom:3px">🇷🇴 Română</span>
      <span style="font-size:12px;color:#4a5568;line-height:1.6">${data.ro}</span>
    </div>
    ${data.formula ? `<div style="background:#ddeeff;border-radius:6px;padding:7px 10px;font-size:12px;font-weight:600;color:#1a5fb4;margin-bottom:4px">${data.formula}</div>` : ''}
    <div style="font-size:10px;color:#8a9ab0;text-align:right">clica fora para fechar</div>`;

  const rect = el.getBoundingClientRect();
  const tipW = 340;
  let left = rect.left;
  let top  = rect.bottom + 8 + window.scrollY;
  if (left + tipW > window.innerWidth - 16) left = window.innerWidth - tipW - 16;
  if (rect.bottom + 220 > window.innerHeight) top = rect.top - 220 + window.scrollY;
  tip.style.left    = Math.max(8, left) + 'px';
  tip.style.top     = top + 'px';
  tip.style.display = 'block';
}
