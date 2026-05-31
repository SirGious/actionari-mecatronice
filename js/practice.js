/* ══════════════════════════════════════════════════════════════
   practice.js — Flashcards, Q&A, Teste Final
══════════════════════════════════════════════════════════════ */

// ═══════════════════════════════════════
// FLASHCARDS (20 cartões — todas as 19 capitole)
// ═══════════════════════════════════════
const FLASHCARDS = [
  { chapter:'legi', cat:'Cap. 1 — Legea Gauss',
    q_ro:'Ce exprimă legea fluxului magnetic (Gauss)?',
    q_pt:'O que diz a lei do fluxo magnético (Gauss)?',
    a_ro:'Fluxul magnetic total printr-o suprafață ÎNCHISĂ este ZERO: ∯B·dA = 0. Liniile câmpului magnetic sunt întotdeauna circuite închise — nu există monopoli magnetici.',
    a_pt:'O fluxo magnético total através de uma superfície FECHADA é ZERO: ∯B·dA = 0. As linhas de campo magnético são sempre circuitos fechados — não existem monopolos magnéticos.',
    formula:'Ψ = ∯ B⃗ · dA⃗ = 0  (suprafață închisă)' },
  { chapter:'legi', cat:'Cap. 1 — Legea Faraday',
    q_ro:'Care este legea inducției electromagnetice (Faraday)?',
    q_pt:'Qual é a lei da indução eletromagnética (Faraday)?',
    a_ro:'Tensiunea electromotoare indusă = MINUS viteza de variație a fluxului magnetic înlănțuit. Semnul "−" = legea lui Lenz (opoziția față de variație).',
    a_pt:'A tensão eletromotriz induzida = MENOS a velocidade de variação do fluxo magnético concatenado. O sinal "−" = lei de Lenz (oposição à variação).',
    formula:'eΓ = −dΨSΓ/dt = −dΛ/dt  [V]' },
  { chapter:'legi', cat:'Cap. 1 — Forța Laplace',
    q_ro:'Când este forța Laplace maximă și când este zero?',
    q_pt:'Quando é a força de Laplace máxima e quando é zero?',
    a_ro:'F = i·L·B·sin θ. Maximă la θ = 90° (conductor ⊥ câmp). Zero la θ = 0° sau 180° (conductor paralel cu câmpul). Direcția: regula burghiului drept.',
    a_pt:'F = i·L·B·sin θ. Máxima a θ = 90° (condutor ⊥ campo). Zero a θ = 0° ou 180° (condutor paralelo ao campo). Direção: regra da mão direita.',
    formula:'F = i · L · B · sin θ  [N]  →  max. la θ = 90°' },
  { chapter:'legi', cat:'Cap. 2 — Procedee',
    q_ro:'Care sunt cele 4 procedee de obținere a energiei mecanice?',
    q_pt:'Quais são os 4 processos de obtenção de energia mecânica?',
    a_ro:'1. Procedeul electromagnetic (bobine/magnet permanent). 2. Anizotropia de formă (reluctanță variabilă, max. la 45°). 3. Histerezisul (motoare asincrone). 4. Inducția unipolară (rotor tip pahar).',
    a_pt:'1. Processo eletromagnético (bobinas/íman permanente). 2. Anisotropia de forma (reluctância variável, max. a 45°). 3. Histerese (motores assíncronos). 4. Indução unipolar (rotor tipo copo).',
    formula:'M₁=−Ψ₀ₘ·i₁·sin θ  |  M₂=−(i²/2)·L₁₁ₘ·sin(2θₘ)  |  M₃=−∂Wₘ/∂θ' },
  { chapter:'legi', cat:'Cap. 2 — Anizotropie',
    q_ro:'La ce unghi este cuplul maxim în procedeul anizotropiei de formă și de ce?',
    q_pt:'A que ângulo é o torque máximo no processo de anisotropia de forma e porquê?',
    a_ro:'La θₘ = 45°. Cuplul M = −(i²/2)·L₁₁ₘ·sin(2θₘ). Derivata sin(2θ) este maximă la 2θ = 90°, adică θ = 45°.',
    a_pt:'A θₘ = 45°. O torque M = −(i²/2)·L₁₁ₘ·sin(2θₘ). A derivada de sin(2θ) é máxima quando 2θ = 90°, ou seja θ = 45°.',
    formula:'M = −(i²/2) · L₁₁ₘ · sin(2θₘ)  →  max. la θₘ = 45°' },
  { chapter:'mcc', cat:'Cap. 5 — Sistem Perie-Colector',
    q_ro:'Descrie sistemul perie-colector și rolul lui în MCC.',
    q_pt:'Descreve o sistema escova-colector e o seu papel no motor CC.',
    a_ro:'Lamelele de colector (24) sunt mobile. Periile (P1-P4) sunt fixe. Schimbă polaritatea curentului prin bobine → menține sensul cuplului. Înfășurarea buclată simplă: spirele sunt în serie între periile adiacente.',
    a_pt:'As lamelas do colector (24) são móveis. As escovas (P1-P4) são fixas. Mudam a polaridade da corrente nas bobinas → mantém o sentido do torque. Enrolamento em laço simples: espiras em série entre escovas adjacentes.',
    formula:'Spira 1: lamela 1 → pol N/S → latură rotor → lamela 2' },
  { chapter:'mcc', cat:'Cap. 6 — Reacția Indusului',
    q_ro:'Ce este reacția indusului și care sunt soluțiile pentru a o reduce?',
    q_pt:'O que é a reação do induzido e quais são as soluções para a reduzir?',
    a_ro:'Suprapunerea câmpului statoric cu câmpul creat de infasurarea rotorică. Efect: axa neutră se deplasează → scântei la colector. Soluții: poli de comutare cu tălpi polare SAU magneti permanenți.',
    a_pt:'Sobreposição do campo estático com o campo criado pelo enrolamento rotórico. Efeito: eixo neutro desloca-se → faíscas no colector. Soluções: polos de comutação SAU ímanes permanentes.',
    formula:'Câmp rezultant ≠ Câmp de excitație → ΔUₚ crescut → scântei' },
  { chapter:'mcc', cat:'Cap. 6 — Magneți Ferite vs AlNiCo',
    q_ro:'Care sunt diferențele principale între magneții ferite și AlNiCo?',
    q_pt:'Quais são as principais diferenças entre ímanes de ferrite e AlNiCo?',
    a_ro:'Ferite: Hc↑ (rezistă demagnetizare), Br↓ (turații mici), montare nemagnetizați. AlNiCo: Hc↓ (demagnetizare ușoară!), Br↑ (turații mari), montare magnetizați. Nu se deschide circuitul!',
    a_pt:'Ferrite: Hc↑ (resistem desmagnetização), Br↓ (baixas rotações), montar sem magnetizar. AlNiCo: Hc↓ (desmagnetizam fácil!), Br↑ (altas rotações), montar magnetizados. Nunca abrir o circuito!',
    formula:'Ferite: Hc ↑, Br ↓  |  AlNiCo: Hc ↓, Br ↑' },
  { chapter:'mcc', cat:'Cap. 7 — MCC Derivație',
    q_ro:'Scrie ecuațiile fundamentale ale MCC cu excitație în derivație.',
    q_pt:'Escreve as equações fundamentais do motor CC com excitação em derivação.',
    a_ro:'I = Iₐ + Iₑ. U = E + Rₐ·Iₐ + ΔUₚ. E = kₑ·n·Ψ. M = kₘ·Iₐ·Ψ. n = (U − Rₐ·Iₐ)/(kₑ·Ψ).',
    a_pt:'I = Iₐ + Iₑ. U = E + Rₐ·Iₐ + ΔUₚ. E = kₑ·n·Ψ. M = kₘ·Iₐ·Ψ. n = (U − Rₐ·Iₐ)/(kₑ·Ψ).',
    formula:'n = (U − Rₐ·Iₐ) / (kₑ·Ψ)  [rot/min]' },
  { chapter:'mcc', cat:'Cap. 8 — MCC Serie',
    q_ro:'De ce nu se poate conecta un motor serie în gol?',
    q_pt:'Porque não se pode ligar um motor série em vazio?',
    a_ro:'Fără sarcină → Iₐ ≈ 0 → Ψ ≈ 0 → n → ∞ (turație infinită → motor se distruge!). Caracteristică mecanică: hiperbolă. M depinde de I².',
    a_pt:'Sem carga → Iₐ ≈ 0 → Ψ ≈ 0 → n → ∞ (velocidade infinita → motor destrói-se!). Característica mecânica: hipérbole. M depende de I².',
    formula:'E = U_AB − (Rₐ+Rₑ)·I − ΔUₚ  →  NUNCA em vazio!' },
  { chapter:'mcc', cat:'Cap. 9-10 — Funcția de Transfer',
    q_ro:'Care este funcția de transfer a MCC și ce semnifică ωₙ și ξ?',
    q_pt:'Qual é a função de transferência do motor CC e o que significam ωₙ e ξ?',
    a_ro:'G(s) = k/(Lₐ·Jₘ·s² + Rₐ·Jₘ·s + k²). ωₙ = √(k²/Lₐ·Jₘ) — viteza răspunsului. ξ = (Rₐ/2)·√(Jₘ/k²Lₐ) — amortizare: <1 oscilații, =1 critic, >1 lent.',
    a_pt:'G(s) = k/(Lₐ·Jₘ·s² + Rₐ·Jₘ·s + k²). ωₙ = √(k²/Lₐ·Jₘ) — velocidade de resposta. ξ = (Rₐ/2)·√(Jₘ/k²Lₐ) — amortecimento: <1 oscilações, =1 crítico, >1 lento.',
    formula:'ωₙ = √(k²/Lₐ·Jₘ)  |  ξ = (Rₐ/2)·√(Jₘ/k²·Lₐ)  |  s₁,₂ = −ξωₙ ± ωₙ·√(ξ²−1)' },
  { chapter:'srvm', cat:'Cap. 12 — BLDC vs MCC Clasic',
    q_ro:'Care este diferența principală dintre MCC clasic și BLDC?',
    q_pt:'Qual é a diferença principal entre o motor CC clássico e o BLDC?',
    a_ro:'MCC: magneti pe stator, bobine pe rotor → perii necesare. BLDC: magneti permanenți pe rotor, bobine pe stator → comutație statică electronică. Avantaj BLDC: fără uzură, inerție scăzută, randament mai bun.',
    a_pt:'Motor CC: ímanes no estator, bobinas no rotor → escovas necessárias. BLDC: ímanes permanentes no rotor, bobinas no estator → comutação estática eletrónica. Vantagem: sem desgaste, inércia baixa, melhor rendimento.',
    formula:'u = Rₛ·i + Lₛ·(di/dt) + kₑ·Ψ·Ω  |  kₑ·Ψ·i = Mrez + J·(dΩ/dt)' },
  { chapter:'srvm', cat:'Cap. 13 — SRVM Reglare',
    q_ro:'Cum se reglează viteza la BLDC și care sunt zonele de funcționare?',
    q_pt:'Como se regula a velocidade no BLDC e quais são as zonas de funcionamento?',
    a_ro:'Cu semnal PWM (frecvența PWM = 10× frecvența motorului). Zona stabilă (turație mică, cuplu mare) și zona instabilă (tracțiune mare, cuplu mic). Pornire: impuls suplimentar SAU rotire mecanică.',
    a_pt:'Com sinal PWM (frequência PWM = 10× frequência do motor). Zona estável (rotação baixa, torque alto) e zona instável (tração alta, torque baixo). Arranque: impulso suplementar OU rotação mecânica.',
    formula:'f_PWM ≥ 10 × f_motor' },
  { chapter:'srvm', cat:'Cap. 14 — BLDC Avantaje',
    q_ro:'Enumeră 3 avantaje și 3 dezavantaje ale BLDC.',
    q_pt:'Enumera 3 vantagens e 3 desvantagens do BLDC.',
    a_ro:'Avantaje: (1) fără uzura periilor (2) randament și răspuns dinamic excelent (3) dimensiuni mici, viteză ridicată. Dezavantaje: (1) comutație electronică complexă (2) energie inductivă la schimbare sens (3) senzori Hall necesari.',
    a_pt:'Vantagens: (1) sem desgaste de escovas (2) rendimento e resposta dinâmica excelentes (3) dimensões pequenas, velocidade elevada. Desvantagens: (1) comutação eletrónica complexa (2) energia indutiva na mudança de sentido (3) sensores Hall.',
    formula:'Înfășurare trapezoidală: ΔM ≈ ±4%  |  Sinusoidală: ΔM ≈ 0%' },
  { chapter:'mpp', cat:'Cap. 15 — MPP Principiu',
    q_ro:'Ce este un motor pas cu pas și cum funcționează?',
    q_pt:'O que é um motor de passo e como funciona?',
    a_ro:'Convertor electromecanic: impulsurile de comandă → rotație discretă cu pași egali θₚ. Funcționare în buclă deschisă (fără encoder). Clasificare: solenoid, reluctanță variabilă, magnet permanent, hibrid.',
    a_pt:'Conversor eletromecânico: impulsos de comando → rotação discreta com passos iguais θₚ. Funcionamento em malha aberta (sem encoder). Classificação: solenoide, reluctância variável, íman permanente, híbrido.',
    formula:'θₚ = 360° / (Nᵣ · m)  [°/pas]' },
  { chapter:'mpp', cat:'Cap. 16 — Accelerare în Trepte',
    q_ro:'Ce este accelerarea în trepte și de ce este necesară?',
    q_pt:'O que é a aceleração em degraus e porque é necessária?',
    a_ro:'Metoda de pornire pentru a evita pierderea pașilor: tc ≥ tm asigură atingerea vitezei dorite. Pornire lentă → accelerare treptată → regim de mers. Alternativă: buclă închisă.',
    a_pt:'Método de arranque para evitar perda de passos: tc ≥ tm garante atingir a velocidade. Arranque lento → aceleração gradual → regime. Alternativa: malha fechada.',
    formula:'tc ≥ tm  →  rampa de pornire: f₁ → f₂ → ... → fregim' },
  { chapter:'mpp', cat:'Cap. 17 — MPP Avantaje',
    q_ro:'3 avantaje și 3 dezavantaje ale motorului pas cu pas.',
    q_pt:'3 vantagens e 3 desvantagens do motor de passo.',
    a_ro:'Avantaje: univocitate impuls-deplasare, gamă largă frecvențe, precizie ridicată. Dezavantaje: unghi pas fix, randament scăzut, rezonanță la viteze medii.',
    a_pt:'Vantagens: univocidade impulso-deslocamento, gama larga de frequências, precisão elevada. Desvantagens: passo angular fixo, rendimento baixo, ressonância a velocidades médias.',
    formula:'Avantaj: Δθ = const per impuls  |  Dezavantaj: frez = (1/2π)·√(p·M/Jred)' },
  { chapter:'mpp', cat:'Cap. 18 — MPP Rezonanță',
    q_ro:'Ce este frecvența de rezonanță la MPP și cum se evită efectele?',
    q_pt:'O que é a frequência de ressonância no motor de passo e como evitar?',
    a_ro:'frez = (1/2π)·√(p·M/Jred). La această frecvență: oscilațiile rotorului + comutarea → cuplul scade brusc, pași pierduți. Evitare: accelerare în trepte, amortizare electronică.',
    a_pt:'frez = (1/2π)·√(p·M/Jred). A esta frequência: oscilações do rotor + comutação → torque cai abruptamente, passos perdidos. Evitar: aceleração em degraus, amortecimento eletrónico.',
    formula:'frez = (1/2π)·√(p·M/Jred)  |  fstart = 1.25·frez' },
  { chapter:'mpp', cat:'Cap. 19 — Metode Amortizare',
    q_ro:'Descrie Metoda I și Metoda II de amortizare la MPP.',
    q_pt:'Descreve o Método I e o Método II de amortecimento no motor de passo.',
    a_ro:'Metoda I (faza precedentă): la ≥80% din θₚ → se alimentează faza anterioară → k scade la 0.7–0.8. Metoda II (întârzierea ultimului pas): la 80% (faza 3) → motor liber → la 10–20% → impuls decalat.',
    a_pt:'Método I (fase precedente): a ≥80% de θₚ → alimenta-se a fase anterior → k desce para 0.7–0.8. Método II (atraso do último passo): a 80% (fase 3) → motor livre → a 10–20% → impulso atrasado.',
    formula:'Metoda I: 80% θₚ → schimb faza (k=0.7-0.8)  |  Metoda II: 80% θₚ → motor liber' },
  { chapter:'legi', cat:'Cap. 11 — Regim Tranzitoriu',
    q_ro:'Care sunt constantele de timp ale MCC și ce influențează?',
    q_pt:'Quais são as constantes de tempo do motor CC e o que influenciam?',
    a_ro:'τₑ = Lₐ/Rₐ — constantă electrică (rapiditatea curentului). τₘ = Rₐ·Jₘ/k² — constantă mecanică (rapiditatea vitezei). Timp de stabilire ≈ 4τₘ. Dacă τₘ >> τₑ: sistemul e dominat de mecanică.',
    a_pt:'τₑ = Lₐ/Rₐ — constante elétrica (rapidez da corrente). τₘ = Rₐ·Jₘ/k² — constante mecânica (rapidez da velocidade). Tempo de estabilização ≈ 4τₘ. Se τₘ >> τₑ: sistema dominado pela mecânica.',
    formula:'τₑ = Lₐ/Rₐ  [s]  |  τₘ = Rₐ·Jₘ/k²  [s]' },
];

// ═══════════════════════════════════════
// Q&A DATABASE
// ═══════════════════════════════════════
const QA_QUESTIONS = [
  { chapter:'legi',
    question:'Definește legea circuitului magnetic și scrie formula. Ce analogie există cu circuitul electric?',
    ref:'Legea circuitului magnetic: uₘΓ = ∮H·ds = Σiₖ. Tensiunea magnetomotoare de-a lungul unei curbe Γ = suma algebrică a curenților. Analogie cu Ohm: Φ = ℱ/ℛₘ, la fel ca I = U/R.',
    formula:'uₘΓ = ∮ H⃗ · ds⃗ = Σiₖ  [A]  |  Φ = NI/ℛₘ' },
  { chapter:'procedee',
    question:'Explică procedeul electromagnetic. Care este avantajul față de procedeul anizotropiei de formă?',
    ref:'Bazat pe cuplu între două bobine sau bobină + magnet. Xⱼ = (∂Wₘ/∂xⱼ)|ψ=ct. M = −Ψ₀ₘ·i₁·sin θ, maxim la θ=π/2. Avantaj față de anizotropie: material magnetic bun → inductie ~1 T (mult mai mare).',
    formula:'M = −Ψ₀ₘ · i₁ · sin θ  →  max. la θ = π/2' },
  { chapter:'mcc',
    question:'Descrie sistemul perie-colector al MCC. Care sunt dezavantajele principale?',
    ref:'Lamelele (24) în 2 jumătăți mobile. Periile (P1–P4) fixe. La trecerea bobinei prin dreptul periei, curentul se inversează → menține sensul cuplului. Dezavantaje: uzura periilor, căldură prin frecare, scântei la reacția indusului.' },
  { chapter:'mcc',
    question:'Ce este factorul de amortizare ξ și cum influențează răspunsul tranzitoriu al MCC?',
    ref:'ξ = (Rₐ/2)·√(Jₘ/k²·Lₐ). ξ<1 → subamortizat (oscilații); ξ=1 → critic (cel mai rapid fără oscilații); ξ>1 → supraamortizat (lent, monoton). Polii: s₁,₂ = −ξωₙ ± ωₙ·√(ξ²−1). Stabil ↔ Re(poli) < 0.',
    formula:'ξ = (Rₐ/2)·√(Jₘ/k²·Lₐ)  |  s₁,₂ = −ξωₙ ± jωₙ√(1−ξ²)  (ξ<1)' },
  { chapter:'async',
    question:'Explică de ce alunecarea nu poate fi zero la motorul asincron în funcționare normală.',
    ref:'Dacă s=0 → n₂=n₁ → câmpul rotitor nu mai induce tensiune în rotor → I₂=0 → M=0 → fără cuplu → motorul se decelerează → alunecarea crește din nou. Alunecarea nominală: 2–8%.',
    formula:'s=(n₁−n₂)/n₁  |  s=0 ⟹ M=0 ⟹ motor se decelerează' },
  { chapter:'srvm',
    question:'De ce se numește "comutație statică" la BLDC și cum funcționează senzorii Hall?',
    ref:'Statică = fără piese mobile. MOSFET/IGBT comutează curentul prin faze. 3 senzori Hall la 120° electric detectează câmpul magnetic al rotorului: HIGH când polul N trece, LOW când S. Combinația H1/H2/H3 → 6 sectoare.',
    formula:'6 sectoare = 6 comutații per perioadă electrică  |  Comut/rot = 6·p' },
  { chapter:'mpp',
    question:'Calculează pasul unghiular și viteza unui motor MPP cu 50 dinți rotor, 2 faze, la 500 Hz.',
    ref:'θₚ = 360°/(Nᵣ·m) = 360°/(50·2) = 3.6°/pas. Pași/rot = 360/3.6 = 100 pași/rot. Viteză: n = f·θₚ/6 = 500·3.6/6 = 300 rot/min.',
    formula:'θₚ = 360°/(50·2) = 3.6°  |  n = 500·3.6/6 = 300 rpm' },
];

// ═══════════════════════════════════════
// TEST TOPICS
// ═══════════════════════════════════════
const TEST_TOPICS = [
  { id:'t1', title:'Legi Fundamentale + Procedee de Obținere a Energiei', points:3,
    question:'Prezentați cele 4 procedee de obținere a energiei mecanice. Pentru fiecare: principiu de funcționare, formula cuplului, avantaje și exemple de motoare.',
    keywords:['electromagnetic','anizotropie','histerezis','unipolar','Wm','cuplu','sin','45°'] },
  { id:'t2', title:'Motor CC — Studiu Static și Dinamic', points:3,
    question:'Descrieți motorul CC cu excitație în derivație: ecuații de funcționare, caracteristica mecanică, sistemul perie-colector și reacția indusului. Scrieți funcția de transfer și explicați ωₙ și ξ.',
    keywords:['U=E+RaIa','E=keΨn','M=kmΨIa','caracteristica','rigida','transfer','ωₙ','ξ','poli'] },
  { id:'t3', title:'Magneți Permanenți — Ferite și AlNiCo', points:2,
    question:'Comparați magneții din ferite cu magneții AlNiCo: proprietăți (Hc, Br), avantaje, dezavantaje, metode de montare și domenii de utilizare.',
    keywords:['Hc','Br','demagnetizare','montare','multipolar','pahar'] },
  { id:'t4', title:'SRVM CC Fără Perii (BLDC)', points:3,
    question:'Descrieți motorul BLDC: principiu (comparativ cu MCC clasic), comutația statică, rolul senzorilor Hall, ecuațiile de funcționare. Avantaje și dezavantaje față de MCC cu perii.',
    keywords:['inversat','stator','rotor','Hall','MOSFETs','comutatie','trapezoidala','sinusoidala'] },
  { id:'t5', title:'Motor Pas cu Pas — Principiu și Rezonanță', points:3,
    question:'Descrieți motorul pas cu pas: clasificare constructivă, calculul θₚ, fenomenul de rezonanță (cauze, efecte, soluții), metodele de amortizare I și II.',
    keywords:['θp','Ns','faze','frez','rezonanta','amortizare','Metoda I','Metoda II','accelerare'] },
  { id:'t6', title:'Motor Asincron — Alunecare și Cuplu Kloss', points:2,
    question:'Explicați motorul asincron trifazat: câmpul rotitor, alunecarea, formula Kloss pentru cuplu, zona stabilă vs instabilă a caracteristicii mecanice.',
    keywords:['alunecare','sincron','Kloss','Mm','sm','zona A','zona B'] },
];

// ═══════════════════════════════════════
// FLASHCARD STATE & LOGIC
// ═══════════════════════════════════════
let fcCards = [...FLASHCARDS];
let fcIndex = 0, fcFlipped = false, fcCorrect = 0, fcWrong = 0;

function loadFlashcards() {
  const ch = document.getElementById('fc-chapter')?.value ?? 'all';
  fcCards = ch === 'all' ? [...FLASHCARDS] : FLASHCARDS.filter(c => c.chapter === ch);
  fcIndex = 0; fcCorrect = 0; fcWrong = 0; fcFlipped = false;
  showCard();
}

function showCard() {
  if (!fcCards.length) return;
  const c = fcCards[fcIndex];
  const setT = (id, v) => { const e = document.getElementById(id); if (e) e.innerHTML = v; };
  setT('fc-cat', c.cat); setT('fc-cat-back', c.cat);
  setT('fc-q',
    `<div style="margin-bottom:8px"><span style="font-size:10px;color:#26a269;font-weight:700">🇵🇹 PT</span><br>${c.q_pt}</div>
     <div><span style="font-size:10px;color:#1a5fb4;font-weight:700">🇷🇴 RO</span><br>${c.q_ro}</div>`);
  setT('fc-a',
    `<div style="margin-bottom:8px"><span style="font-size:10px;color:#26a269;font-weight:700">🇵🇹</span> ${c.a_pt}</div>
     <div><span style="font-size:10px;color:#1a5fb4;font-weight:700">🇷🇴</span> ${c.a_ro}</div>`);
  const ff = document.getElementById('fc-f');
  if (ff) { ff.textContent = c.formula || ''; ff.style.display = c.formula ? 'block' : 'none'; }
  const cnt = document.getElementById('fc-counter');
  if (cnt) cnt.textContent = `${fcIndex + 1} / ${fcCards.length}`;
  const front = document.getElementById('fc-front'), back = document.getElementById('fc-back');
  if (front) front.style.display = 'flex';
  if (back)  back.style.display  = 'none';
  fcFlipped = false;
  updateFCStats();
}

function flipCard() {
  fcFlipped = !fcFlipped;
  const front = document.getElementById('fc-front'), back = document.getElementById('fc-back');
  if (front) front.style.display = fcFlipped ? 'none' : 'flex';
  if (back)  back.style.display  = fcFlipped ? 'flex' : 'none';
}

function nextCard() { fcIndex = (fcIndex + 1) % fcCards.length; showCard(); }
function prevCard() { fcIndex = (fcIndex - 1 + fcCards.length) % fcCards.length; showCard(); }
function markCard(correct) {
  if (correct) fcCorrect++; else fcWrong++;
  /* SM-2 integration */
  const conceptId = fcCards[fcIndex]?.id || ('fc_' + fcIndex);
  if (typeof trackConceptResult === 'function') trackConceptResult(conceptId, correct);
  updateFCStats(); nextCard();
}
function updateFCStats() {
  const total = fcCorrect + fcWrong;
  const pct   = total > 0 ? Math.round(fcCorrect / total * 100) : 0;
  const bar   = document.getElementById('fc-progress');
  const stats = document.getElementById('fc-stats');
  if (bar)   bar.style.width = pct + '%';
  if (stats) stats.textContent = total > 0
    ? `✓ ${fcCorrect} sabia  ✗ ${fcWrong} nu știa  (${pct}% corect)`
    : 'Marca cartela după ce verifici răspunsul';
}

// ═══════════════════════════════════════
// Q&A STATE & LOGIC
// ═══════════════════════════════════════
let qaIndex = 0, qaQuestions = [...QA_QUESTIONS];

function loadQA() {
  const ch = document.getElementById('qa-chapter')?.value ?? 'all';
  qaQuestions = ch === 'all' ? [...QA_QUESTIONS] : QA_QUESTIONS.filter(q => q.chapter === ch);
  qaIndex = 0; showQA();
}

function nextQA() {
  if (!qaQuestions.length) return;
  qaIndex = Math.floor(Math.random() * qaQuestions.length);
  showQA();
}

function showQA() {
  if (!qaQuestions.length) return;
  const q = qaQuestions[qaIndex];
  const set = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };
  set('qa-cat', q.chapter.toUpperCase());
  set('qa-q', q.question);
  const ans = document.getElementById('qa-answer'); if (ans) ans.value = '';
  const fb  = document.getElementById('qa-feedback'); if (fb) fb.style.display = 'none';
  const ref = document.getElementById('qa-reference'); if (ref) ref.style.display = 'none';
}

async function checkQA() {
  const ansEl = document.getElementById('qa-answer');
  const answer = ansEl?.value.trim();
  if (!answer) { alert('Scrie mai întâi răspunsul tău!'); return; }
  const q = qaQuestions[qaIndex];
  const feedback = document.getElementById('qa-feedback');
  if (!feedback) return;
  feedback.style.display = 'block';
  feedback.innerHTML = '<div class="typing"><span></span><span></span><span></span></div>';

  /* track Q&A attempt */
  if (typeof loadMetrics === 'function') {
    const mdata = loadMetrics(); mdata.qaAttempts = (mdata.qaAttempts||0)+1; saveMetrics(mdata);
  }

  if (typeof apiKey === 'undefined' || !apiKey) {
    feedback.innerHTML = '⚠️ Fără cheie API — arăt răspunsul de referință:';
    const ref = document.getElementById('qa-reference');
    if (ref) { ref.style.display = 'block';
      const rt = document.getElementById('qa-ref-text'); if (rt) rt.textContent = q.ref || '';
      const rf = document.getElementById('qa-ref-formula');
      if (rf) { rf.textContent = q.formula || ''; rf.style.display = q.formula ? 'block' : 'none'; } }
    return;
  }

  const prompt = `Ești un profesor de Acționări Sisteme Mecatronice.
Întrebare: "${q.question}"
Răspuns referință: "${q.ref}"
Răspuns student: "${answer}"

Evaluează în 3-4 fraze: 🟢 Ce a răspuns corect | 🔴 Ce lipsește | 💡 O completare importantă
Răspunde SCURT în PORTUGHEZĂ și ROMÂNĂ (max 150 cuvinte total). Nu da nota numerică.`;

  try {
    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method:'POST',
      headers:{'Content-Type':'application/json','x-api-key':apiKey,'anthropic-version':'2023-06-01','anthropic-dangerous-direct-browser-calls':'true'},
      body:JSON.stringify({model:'claude-sonnet-4-5',max_tokens:400,messages:[{role:'user',content:prompt}]})
    });
    const d = await r.json();
    feedback.innerHTML = (d.content?.[0]?.text || 'Eroare').replace(/\n/g,'<br>');
    const ref = document.getElementById('qa-reference');
    if (ref) { ref.style.display='block';
      const rt=document.getElementById('qa-ref-text'); if(rt) rt.textContent=q.ref||'';
      const rf=document.getElementById('qa-ref-formula');
      if(rf){rf.textContent=q.formula||'';rf.style.display=q.formula?'block':'none';} }
  } catch(e) { feedback.innerHTML = 'Eroare: ' + e.message; }
}

// ═══════════════════════════════════════
// TEST STATE & LOGIC
// ═══════════════════════════════════════
let testTimer = null, testTimeLeft = 0, testTopics = [];

function startTest() {
  const n       = parseInt(document.getElementById('test-n')?.value ?? 3);
  const minutes = parseInt(document.getElementById('test-time')?.value ?? 60);
  testTopics    = [...TEST_TOPICS].sort(() => Math.random() - 0.5).slice(0, n);

  const setup  = document.getElementById('test-setup');
  const active = document.getElementById('test-active');
  const results= document.getElementById('test-results');
  if (setup)   setup.style.display  = 'none';
  if (active)  active.style.display = 'block';
  if (results) results.style.display= 'none';

  const qs = document.getElementById('test-questions');
  if (qs) qs.innerHTML = testTopics.map((t, i) => `
    <div class="test-question">
      <div class="tq-header">
        <span class="tq-num">Subiectul ${i+1}</span>
        <span class="tq-title">${t.title}</span>
        <span class="tq-points">${t.points} puncte</span>
      </div>
      <div class="tq-text">${t.question}</div>
      <textarea id="tq-ans-${t.id}" class="tq-answer" placeholder="Răspunsul tău..." rows="6"></textarea>
    </div>`).join('');

  const prog = document.getElementById('test-progress-text');
  if (prog) prog.textContent = `${n} subiecte · ${testTopics.reduce((s,t)=>s+t.points,0)} puncte posibile`;

  if (minutes > 0) {
    testTimeLeft = minutes * 60; updateTimer();
    testTimer = setInterval(() => { testTimeLeft--; updateTimer();
      if (testTimeLeft <= 0) { clearInterval(testTimer); submitTest(); } }, 1000);
  }
}

function updateTimer() {
  const m = Math.floor(testTimeLeft/60).toString().padStart(2,'0');
  const s = (testTimeLeft%60).toString().padStart(2,'0');
  const el = document.getElementById('test-timer');
  if (el) { el.textContent=`⏱ ${m}:${s}`; el.style.color=testTimeLeft<300?'#c01c28':'#1a5fb4'; }
}

async function submitTest() {
  if (testTimer) { clearInterval(testTimer); testTimer=null; }
  const active  = document.getElementById('test-active');
  const results = document.getElementById('test-results');
  if (active)  active.style.display  = 'none';
  if (results) { results.style.display='block';
    results.innerHTML='<p style="color:#8a9ab0">⏳ Corectare în curs...</p>'; }

  if (typeof apiKey==='undefined' || !apiKey) {
    if (results) results.innerHTML = testTopics.map((t,i) => {
      const ans = document.getElementById(`tq-ans-${t.id}`)?.value || '(fără răspuns)';
      return `<div class="test-result-card">
        <div class="tr-header">Subiectul ${i+1}: ${t.title}</div>
        <div class="tr-your"><strong>Răspunsul tău:</strong><br>${ans}</div>
        <div class="tr-ref"><strong>📖 Cuvinte cheie:</strong><br>${t.keywords.join(' · ')}</div>
        <div class="tr-note">⚠️ Fără cheie API — autoevaluare manuală</div>
      </div>`;
    }).join('') + `<button class="explain-btn" onclick="resetTest()" style="margin-top:16px">🔄 Test nou</button>`;
    return;
  }

  const answers = testTopics.map(t => ({
    topic:t.title, question:t.question,
    answer:document.getElementById(`tq-ans-${t.id}`)?.value || '',
    keywords:t.keywords, points:t.points,
  }));

  const prompt = `Ești profesor de Acționări Sisteme Mecatronice — corectezi un test de examen.
${answers.map((a,i)=>`SUBIECTUL ${i+1} (${a.points} puncte): ${a.topic}\nÎntrebare: ${a.question}\nRăspuns student: ${a.answer}\nCuvinte cheie: ${a.keywords.join(', ')}`).join('\n\n')}

Pentru FIECARE subiect: Punctaj estimat X/${answers.map(a=>a.points)} | ✅ Corect | ❌ Lipsește | 💡 Completare
Răspunde SCURT, în PORTUGHEZĂ și ROMÂNĂ. Total max 300 cuvinte.`;

  try {
    const r = await fetch('https://api.anthropic.com/v1/messages',{
      method:'POST',headers:{'Content-Type':'application/json','x-api-key':apiKey,'anthropic-version':'2023-06-01','anthropic-dangerous-direct-browser-calls':'true'},
      body:JSON.stringify({model:'claude-sonnet-4-5',max_tokens:900,messages:[{role:'user',content:prompt}]})
    });
    const d = await r.json();
    if (results) results.innerHTML=`<div class="test-feedback">${(d.content?.[0]?.text||'Eroare').replace(/\n/g,'<br>')}</div>
      <button class="explain-btn" onclick="resetTest()" style="margin-top:16px">🔄 Test nou</button>`;
  } catch(e) {
    if (results) results.innerHTML=`<p>Eroare: ${e.message}</p>`;
  }
}

function resetTest() {
  const s=document.getElementById('test-setup'),a=document.getElementById('test-active'),r=document.getElementById('test-results');
  if(s) s.style.display='block'; if(a) a.style.display='none'; if(r) r.style.display='none';
}

function showPTab(id, btn) {
  document.querySelectorAll('.ptab-content').forEach(p => p.style.display='none');
  document.querySelectorAll('.ptab').forEach(b => b.classList.remove('active'));
  const el = document.getElementById('ptab-'+id);
  if (el) el.style.display='block';
  if (btn) btn.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => { loadFlashcards(); loadQA(); });
