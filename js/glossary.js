/* ══════════════════════════════════════════════════════════════
   glossary.js — Construire glosar din constanta GLOSS
══════════════════════════════════════════════════════════════ */

function buildGloss() {
  const g = document.getElementById('ggrid');
  if (!g) return;
  if (typeof GLOSS === 'undefined' || !GLOSS.length) {
    g.innerHTML = '<p style="color:var(--text3);font-size:12px">Glosarul nu este disponibil.</p>';
    return;
  }

  const search = (document.getElementById('glosar-search')?.value || '').toLowerCase();
  const list   = search
    ? GLOSS.filter(t => t.ro.toLowerCase().includes(search) || t.pt.toLowerCase().includes(search) || t.def.toLowerCase().includes(search))
    : GLOSS;

  g.innerHTML = list.map(t => `
    <div class="gc" onclick="askQuestion('Explica detaliat: ${t.pt.replace(/'/g, "\\'")} (RO: ${t.ro.replace(/'/g, "\\'")}). Definitie, formula dacă există, context motor electric, exemplu practic.')">
      <div class="gc-ro">${t.ro}</div>
      <div class="gc-pt">${t.pt}</div>
      <div class="gc-def">${t.def}</div>
    </div>
  `).join('');
}

/* filtru live */
document.addEventListener('DOMContentLoaded', () => {
  const inp = document.getElementById('glosar-search');
  if (inp) inp.addEventListener('input', buildGloss);
});
