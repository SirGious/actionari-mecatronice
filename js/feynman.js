/* ══════════════════════════════════════════════════════════════
   feynman.js — Técnica de Feynman com análise AI
   Evidência: Dunlosky (2013) — explicar com palavras próprias
   identifica lacunas reais no conhecimento
══════════════════════════════════════════════════════════════ */

const FEYNMAN_CONCEPTS = {
  'legi':       'Legile fundamentale ale electromagnetismului: fluxul magnetic, legea Faraday, legea circuitului magnetic',
  'camp':       'Câmpul magnetic: inducția B, intensitatea H, permeabilitatea μ, forța Laplace, energia magnetică',
  'procedee':   'Cele 4 procedee de obținere a energiei mecanice din energie electrică',
  'perie':      'Sistemul perie-colector al MCC și înfășurarea buclată simplă',
  'magneti':    'Magneți ferite vs AlNiCo: proprietăți, avantaje, dezavantaje și reacția indusului',
  'mcc':        'Motorul CC cu excitație în derivație: ecuații, caracteristica mecanică, sistemul perie-colector',
  'mcc-serie':  'Motorul CC cu excitație în serie: ecuații, caracteristica hiperbolică, NICIODATĂ în gol',
  'transfer':   'Funcția de transfer a MCC: ce este ωₙ, ce este ξ, cum determini stabilitatea sistemului',
  'tranzitoriu':'Regimul tranzitoriu al MCC: pornire, oprire, constantele τₑ și τₘ',
  'srvm':       'Motorul BLDC fără perii: diferența față de MCC clasic, comutație statică, senzori Hall',
  'mpp':        'Motorul pas cu pas: principiu, pas unghiular, rezonanță, metode de amortizare I și II',
  'async':      'Motorul asincron trifazat: alunecarea, cuplul Kloss, zona stabilă vs instabilă',
  'flux':       'Fluxul magnetic Ψ = B·S·cos θ și legea inducției electromagnetice',
  'forte':      'Forța Laplace F = i·L·B·sin θ și regula mâinii drepte',
};

const FEYNMAN_CHECKLISTS = {
  mcc:       ['Campo magnético fixo (excitação derivação)','F.e.m. E = kₑ·n·Ψ','Característica mecânica rígida','Sistema perie-colector'],
  'mcc-serie':['Excitação série: I = Iₐ = Iₑ','Ψ ∝ I (saturação)','M ∝ I²','NUNCA em vazio → n→∞'],
  mpp:       ['Passo fixo por impulso','Sem encoder (malha aberta)','Frequência de ressonância','Aceleração em degraus'],
  srvm:      ['Ímanes no rotor (não estator)','Comutação eletrónica MOSFET','3 sensores Hall a 120°','Sem desgaste de escovas'],
  transfer:  ['Sistema 2ª ordem','ωₙ = rapidez','ξ<1 oscila, ξ=1 crítico, ξ>1 lento','Polos determinam estabilidade'],
  async:     ['Campo rotativo estator','Alunecamento s = (n₁-n₂)/n₁','Kloss: M = 2Mm/(s/sm + sm/s)','Zona A estável, Zona B instável'],
  legi:      ['Lei de Gauss: ∮B·dA = 0','Faraday: e = −dΨ/dt','Lei circuito magnético: ∮H·ds = ΣIₖ','Força Laplace: F = i·L×B'],
  procedee:  ['Eletromagnético: M = −Ψ₀ₘ·i₁·sin θ','Anisotropia: max a θ=45°','Histerese: motores assíncronos','Unipolar: rotor copo'],
};

/* ── WORD COUNTER ────────────────────────────────────────────── */
document.addEventListener('input', e => {
  const ta = e.target;
  if (!ta.classList.contains('feynman-textarea')) return;
  const modId   = ta.id.replace('feynman-input-', '');
  const words   = ta.value.trim().split(/\s+/).filter(w => w.length > 0).length;
  const counter = document.getElementById('feynman-counter-' + modId);
  if (counter) {
    counter.textContent = `${words} cuvinte`;
    counter.style.color = words >= 30 ? '#26a269' : '#c48c00';
  }
});

/* ── SUBMIT FEYNMAN ─────────────────────────────────────────── */
async function submitFeynman(moduleId) {
  const input    = document.getElementById('feynman-input-' + moduleId);
  const feedback = document.getElementById('feynman-feedback-' + moduleId);
  if (!input || !feedback) return;

  const text  = input.value.trim();
  const words = text.split(/\s+/).filter(w => w.length > 0).length;

  if (words < 30) {
    feedback.style.display = 'block';
    feedback.innerHTML = `<span style="color:#c48c00">⚠️ Scrie cel puțin 30 de cuvinte pentru o analiză utilă. Ai ${words} acum.</span>`;
    return;
  }

  /* Track Feynman attempt */
  if (typeof loadMetrics === 'function') {
    const mdata = loadMetrics();
    mdata.feynmanAttempts = (mdata.feynmanAttempts || 0) + 1;
    saveMetrics(mdata);
  }

  feedback.style.display = 'block';
  feedback.innerHTML = '<div class="typing"><span></span><span></span><span></span></div> A analisar...';

  const concept = FEYNMAN_CONCEPTS[moduleId] || moduleId;

  /* Without API key — show checklist */
  if (typeof apiKey === 'undefined' || !apiKey) {
    const cl = FEYNMAN_CHECKLISTS[moduleId] || [];
    feedback.innerHTML = `
      <div style="color:#c48c00;font-size:12px;margin-bottom:8px">⚠️ Sem API key — checklist manual:</div>
      ${cl.map(item => `<div style="font-size:12px;margin:4px 0">☐ ${item}</div>`).join('')}
      ${!cl.length ? '<div style="font-size:12px;color:#4a5568">Verifica: princípio, fórmula principal, avantaje, dezavantaje.</div>' : ''}`;
    return;
  }

  const prompt = `Ești un profesor de Acționări Sisteme Mecatronice care avaliaz técnica de Feynman.

Conceito avaliado: "${concept}"
Explicação do estudante: "${text}"

Avalia em 4 partes CURTAS (total max 180 palavras, PORTUGUÊS primeiro depois ROMENO):

🇵🇹 **PT:**
✅ O que explicou bem (1-2 pontos)
🔴 O que falta ou está impreciso (1-2 pontos)
💡 A lacuna mais importante a preencher (1 frase)

🇷🇴 **RO:**
✅ Ce a explicat bine
🔴 Ce lipsește
💡 Lacuna principală

NÃO dês nota numérica. Sê direto e construtivo.`;

  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method:'POST',
      headers:{'Content-Type':'application/json','x-api-key':apiKey,
        'anthropic-version':'2023-06-01','anthropic-dangerous-direct-browser-calls':'true'},
      body: JSON.stringify({model:'claude-sonnet-4-5', max_tokens:500,
        messages:[{role:'user', content:prompt}]})
    });
    const d = await r.json();
    const txt = d.content?.[0]?.text || 'Eroare';
    feedback.innerHTML = txt.replace(/\n/g,'<br>').replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>');
  } catch(e) {
    feedback.innerHTML = 'Eroare: ' + e.message;
  }
}
