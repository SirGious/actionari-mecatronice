/* ══════════════════════════════════════════════════════════════
   ai-chat.js — Integrare Claude API (Anthropic)
══════════════════════════════════════════════════════════════ */

let apiKey  = '';
let chatHist = [];

/* ── CHEIE API ──────────────────────────────────────────────── */
function setKey(v) {
  apiKey = v.trim();
  const dot = document.getElementById('sdot');
  if (dot) dot.className = 'dot' + (apiKey.length > 20 ? ' ok' : '');
  const status = document.getElementById('ai-status');
  if (status) {
    status.textContent = apiKey.length > 20 ? 'Online' : 'Offline';
    status.className   = 'ai-status' + (apiKey.length > 20 ? ' online' : '');
  }
}

/* ── SYSTEM PROMPT ──────────────────────────────────────────── */
function getSysPrompt() {
  const kb = (typeof KB !== 'undefined') ? KB : '';
  return `Ești un profesor expert în Acționări Sisteme Mecatronice la nivel universitar.
Studentul vorbește PORTUGHEZĂ nativă dar studiază în ROMÂNĂ.
Răspunde ÎNTOTDEAUNA în AMBELE limbi:

🇵🇹 PORTUGUÊS (simplu, cu analogii din viața cotidiană)
🇷🇴 ROMÂNĂ (terminologie tehnică corectă pentru examen)

Materialul cursului:
${kb}

REGULI:
- Max 220 cuvinte per răspuns
- Structura: PT → RO
- Formula cu semnificația fiecărui simbol
- Analogii cotidiene concrete (mâncare, sport, mașini etc.)
- Avantaje/dezavantaje specifice`;
}

/* ── APEL API ───────────────────────────────────────────────── */
async function callAI(msg) {
  if (!apiKey) {
    addM('ai', '⚠️ Introdu cheia API Anthropic <strong>(sk-ant-...)</strong> în câmpul din dreapta sus.<br><br>Simulatoarele funcționează complet fără cheie API!');
    return;
  }

  const sbtn = document.getElementById('sbtn');
  if (sbtn) sbtn.disabled = true;

  const lid = addM('loading', '<div class="typing"><span></span><span></span><span></span></div>');
  chatHist.push({ role: 'user', content: msg });

  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-calls': 'true'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-5',
        max_tokens: 900,
        system: getSysPrompt(),
        messages: chatHist.slice(-8)
      })
    });

    const d   = await r.json();
    const txt = d.content?.[0]?.text || ('Eroare: ' + JSON.stringify(d.error));

    const loadEl = document.getElementById(lid);
    if (loadEl) loadEl.remove();

    chatHist.push({ role: 'assistant', content: txt });

    addM('ai', txt
      .replace(/\n/g, '<br>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/`([^`]+)`/g, '<code style="background:#ddeeff;padding:1px 4px;border-radius:3px">$1</code>')
    );
  } catch (e) {
    const loadEl = document.getElementById(lid);
    if (loadEl) loadEl.remove();
    addM('ai', '❌ Eroare conexiune: ' + e.message);
  }

  if (sbtn) sbtn.disabled = false;
}

/* ── ADAUGĂ MESAJ ───────────────────────────────────────────── */
function addM(type, html) {
  const id = 'm' + Date.now() + Math.random().toString(36).slice(2, 6);
  const d  = document.createElement('div');

  if (type === 'loading') {
    d.className = 'msg sys';
  } else if (type === 'user') {
    d.className = 'msg user';
  } else {
    d.className = 'msg ai';
  }

  d.id = id;

  if (type === 'ai') {
    d.innerHTML = '<div class="msg-lbl">Asistent AI ✦</div>' + html;
  } else if (type === 'loading') {
    d.innerHTML = html;
  } else {
    d.innerHTML = html;
  }

  const c = document.getElementById('cmsgs');
  if (c) {
    c.appendChild(d);
    c.scrollTop = 99999;
  }
  return id;
}

/* ── TRIMITE MESAJ ──────────────────────────────────────────── */
function sendChat() {
  const inp = document.getElementById('cin');
  if (!inp) return;
  const msg = inp.value.trim();
  if (!msg) return;
  addM('user', msg);
  inp.value = '';
  callAI(msg);
}

/* ── QUICK QUESTION ─────────────────────────────────────────── */
function askQuestion(q) {
  addM('user', q);
  callAI(q);
}

/* ── BUTON "EXPLICĂ CU AI" ──────────────────────────────────── */
function askAI(mod) {
  const Q = {
    flux:     'Explica-me o fluxo magnético Ψ=B·S·cos(θ), a lei de Gauss e a lei de Faraday. Usa analogias do dia-a-dia.',
    forte:    'Explica-me a força de Laplace F=i·L·B·sin(θ) e como gera torque num motor elétrico.',
    mcc:      'Explica-me o motor CC derivação: equações fundamentais, característica mecânica e reação do induzido.',
    transfer: 'Explica-me a função de transferência G(s) do MCC, os parâmetros ωₙ e ξ, e a estabilidade pelos polos.',
    async:    'Explica-me o motor assíncrono: escorregamento, fórmula de Kloss, zonas estável e instável.',
    mpp:      'Explica-me o motor de passo: ângulo θp, ressonância frez, aceleração em degraus e métodos de amortecimento.',
    srvm:       'Explica-me o BLDC/SRVM: vantagens sem escovas, comutação estática, sensores Hall e formas de onda.',
    legi:       'Explica-me as leis fundamentais do eletromagnetismo: fluxo elétrico, conservação da carga, lei de Gauss magnética, lei de Faraday e lei do circuito magnético.',
    camp:       'Explica-me o campo magnético: inducção B, intensidade H, permeabilidade μ, energia magnética e o teorema das forças generalizadas.',
    perie:      'Explica-me o sistema escova-colector do motor CC: lamelas, escovas, enrolamento em laço simples e vias paralelas a=2p.',
    procedee:   'Explica-me os 4 processos de obtenção de energia mecânica: eletromagnético, anisotropia, histerese e unipolar. Fórmulas e exemplos.',
    magneti:    'Explica-me os ímanes permanentes de ferrite vs AlNiCo: Hc, Br, montagem e reação do induzido.',
    'mcc-serie':'Explica-me o motor CC série: equações, característica hiperbólica, saturação do campo e perigo em vazio.',
    tranzitoriu:'Explica-me o regime transitório do motor CC: constantes τe e τm, arranque, travagem e o diagrama de blocos.',
    eq:       'Quais são as equações mais importantes para o exame de Acționări Mecatronice?',
    glosar:   'Quais são os 5 termos mais importantes em Acționări Mecatronice que devo conhecer para o exame?',
  };
  const question = Q[mod] || 'Explica-me este módulo em detalhe com fórmulas e analogias.';
  addM('user', question);
  callAI(question);
}

/* ── EVENTOS ────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const cin = document.getElementById('cin');
  if (cin) {
    cin.addEventListener('keydown', e => {
      if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); sendChat(); }
    });
  }

  const akey = document.getElementById('akey');
  if (akey) akey.addEventListener('input', e => setKey(e.target.value));

  const sbtn = document.getElementById('sbtn');
  if (sbtn) sbtn.addEventListener('click', sendChat);
});
