/* ══════════════════════════════════════════════════════════════
   knowledge.js — Baza de cunoștințe și date globale
══════════════════════════════════════════════════════════════ */

const KB = `
# ACȚIONĂRI MECATRONICE — Rezumat Complet de Curs

## CAP 1 — LEGI FUNDAMENTALE ALE ELECTROMAGNETISMULUI

### Fluxul Magnetic
Φ = ∫∫ B · dA
Fluxul magnetic Φ reprezintă numărul de linii de câmp magnetic care traversează o suprafață A.
Unitate: Weber [Wb]. Relație: B = μ₀·μᵣ·H (inducție magnetică = permeabilitate × intensitate câmp).

### Legea lui Gauss pentru câmpul magnetic
∮ B · dA = 0
Liniile de câmp magnetic sunt închise — nu există monopoli magnetici.

### Legea lui Faraday (inducție electromagnetică)
e = −N · dΦ/dt
Tensiunea electromotoare indusă e este proporțională cu viteza de variație a fluxului magnetic.
N = numărul de spire; semnul negativ (legea lui Lenz): curentul indus se opune cauzei care l-a produs.

### Forța Laplace (pe conductor)
F = I · L × B    ⟹    |F| = I · L · B · sin(α)
Forța exercitată asupra unui conductor de lungime L, parcurs de curentul I, aflat în câmpul B.
Cuplu electromagnetic: M = F · r = k · Φ · Iₐ

### Circuitul Magnetic (analogie cu circuitul electric)
F_m = N · I  [Ampere-spire] — forța magnetomotoare
R_m = l / (μ · A)           — reluctanța magnetică
Φ = F_m / R_m               — flux = fmm / reluctanță (analogie Ohm)

---

## CAP 2 — PROCEDEE DE PRODUCERE A FORȚELOR ELECTROMAGNETICE

### 1. Procedeul Electromagnetic (Forța Laplace)
Conductor parcurs de curent I în câmp magnetic B → forță F = I·L×B.
Baza funcționării motoarelor CC și a motoarelor de inducție.

### 2. Anizotropia de Formă (Reluctanță variabilă)
Forța tinde să minimizeze reluctanța magnetică — rotorul se aliniază cu axa de inductanță maximă.
Utilizat în: motoare de reluctanță variabilă, motoare pas cu pas cu reluctanță.
W_mag = Φ²·R_m/2 = L·I²/2 → F = dW/dx

### 3. Histerezisul Magnetic
Materialele feromagnetice au o curbă B-H cu histerezis (suprafața = energie disipată/ciclu).
Motoarele de histerezis: rotorul din material cu histerezis urmărește câmpul rotitor fără alunecare.
Energie pierdută/ciclu: W_h = ∮ H · dB · V

### 4. Inducția Unipolară (Homopolară)
Conductor se rotește în câmp uniform → tensiune EMF continuă fără comutator.
e = B · l · v = B · l · ω · r
Aplicat în generatoarele homopolare (discuri Faraday), densități mari de curent.

---

## CAP 5 — SISTEMUL PERIE-COLECTOR ȘI ÎNFĂȘURAREA BUCLATÃ SIMPLĂ

### Sistemul Perie-Colector
Asigură contactul electric glisant între circuitul staționar și rotorul în mișcare.
Probleme: uzură mecanică, scântei (arc electric), rezistență de contact Rp ≈ 0.02–0.1 Ω.
Limitare: viteza periferială max. ~30 m/s; curent max. ~10 A/cm².

### Înfășurarea Buclatã Simplă
Fiecare bobină conectează lamele colectorului adiacente.
Număr de căi paralele: a = 2p (p = perechi de poli).
FEM totală: E = (p·N·n·Φ)/(60·a) = ke · n · Φ
Curentul de armătură se distribuie egal pe cele 2p căi paralele.
Tensiunea la perii = suma tensiunilor bobinelor dintr-o cale.

---

## CAP 6 — REACȚIA INDUSULUI ȘI MAGNETI PERMANENȚI

### Reacția Indusului (Armature Reaction)
Câmpul magnetic produs de curentul de armătură Iₐ distorsionează câmpul principal Φ₀.
Efecte: slăbirea fluxului sub un pol → reducerea momentului; deplasarea axei neutre geometrice.
Compensare: înfășurare compensatoare în crestăturile polilor sau pol de comutație.
ΔΦ = -k_ar · Iₐ  (demagnetizare la sarcină)

### Magneți Permanenți — Ferite
Material: BaFe₁₂O₁₉ sau SrFe₁₂O₁₉
Proprietăți: Br ≈ 0.2–0.4 T, Hc ≈ 150–300 kA/m, densitate mică, rezistent la demagnetizare.
Avantaje: ieftin, ușor, bun pentru aplicații de putere medie-mică.

### Magneți Permanenți — AlNiCo
Compoziție: Al-Ni-Co-Fe
Proprietăți: Br ≈ 0.6–1.3 T (flux mare), Hc ≈ 50–130 kA/m (coercitivitate mică!).
Dezavantaje: se demagnetizează ușor la câmpuri exterioare, cost ridicat.
Utilizat la: instrumente de măsură, difuzoare, motoare mici de precizie.

---

## CAP 7 — MOTORUL CC ÎN DERIVAȚIE (ȘUNT)

### Ecuații fundamentale
Curent total: I = Iₐ + I_e    (I = curent rețea, Iₐ = armătură, I_e = excitație)
Tensiunea: U = E + Rₐ · Iₐ + ΔU_perii
FEM indusă: E = k_e · n · Ψ  (k_e = constanta mașinii, n = turație [rot/min], Ψ = flux total)
Moment: M = k_m · Iₐ · Ψ    (k_m = k_e / (2π/60))

### Caracteristica mecanică (derivație)
n = (U − Iₐ·Rₐ) / (k_e·Ψ)
La flux constant (excitație derivație): n scade liniar cu sarcina → caracteristică rigidă.
Reglaj turație: variind U (chopper) sau rezistența suplimentară Rₐ_sup sau fluxul Ψ.

### Stabilitate
Derivația: flux practic constant → caracteristică stabilă, utilizat la acționări cu sarcină variabilă.

---

## CAP 8 — MOTORUL CC ÎN SERIE

### Ecuații
I = Iₐ = I_e  (același curent prin excitație și armătură)
Ψ = k_s · I  (flux proporțional cu curentul → neliniaritate)
M = k_m · k_s · I²  (moment proporțional cu I²)
n = U / (k_e · k_s · I) − Rₐ / (k_e · k_s)  (hiperbolic)

### Caracteristici
- Moment de pornire MARE (M ∝ I²) → ideal pentru tracțiune (tramvai, metrou, locomotive).
- Turație la gol → ∞ (PERICOL: nu se pornește niciodată în gol!).
- Caracteristica mecanică moale (turație scade mult cu sarcina).
- Reglaj: rezistență serie, tensiune variabilă.

---

## CAP 9–10 — CIRCUIT ECHIVALENT DINAMIC ȘI FUNCȚIA DE TRANSFER

### Model dinamic (domeniu Laplace)
Ecuația electrică: U(s) = (Rₐ + s·Lₐ)·Iₐ(s) + E(s)
Ecuația mecanică: M(s) − M_r(s) = s·Jₘ·Ω(s)
FEM: E(s) = k·Ω(s)
Moment: M(s) = k·Iₐ(s)

### Funcția de transfer (viteză/tensiune, sarcină nulă)
G(s) = Ω(s)/U(s) = k / (s²·Lₐ·Jₘ + s·Rₐ·Jₘ + k²)

### Parametrii sistemului de ordinul 2
Pulsația naturală: ωₙ = √(k² / (Lₐ·Jₘ))
Factor de amortizare: ξ = (Rₐ/2) · √(Jₘ / (k²·Lₐ))
Polii sistemului: s₁,₂ = −ξ·ωₙ ± ωₙ·√(ξ²−1)

Regimuri:
- ξ > 1: supraamortizat (fără oscilații, răspuns lent)
- ξ = 1: amortizare critică (cel mai rapid fără oscilații)
- ξ < 1: subamortizat (oscilații amortizate, suprareglaj)
- ξ = 0: neamortizat (oscilații permanente)

---

## CAP 11 — REGIMUL TRANZITORIU AL MCC

### Pornire
Curentul la pornire (n=0): Ip = U/Rₐ → poate fi de 5–10× Iₙ.
Soluție: rezistențe de pornire în trepte (Rₐ+R₁+R₂+...) sau convertor electronic (chopper).

### Frânare
1. Frânare reostatică: deconectat de la rețea, funcționează ca generator pe rezistență.
2. Frânare prin inversarea tensiunii (contracurent): schimbare polaritate U → frânare rapidă.
3. Frânare recuperativă: redare energie la rețea (E > U).

### Constante de timp
Constantă electrică: τ_e = Lₐ/Rₐ
Constantă mecanică: τ_m = Rₐ·Jₘ/k² = Jₘ/(B_visc)
Timp de stabilire ≈ 4·τ_m (pentru ξ < 1: mai complex, depinde de ξ și ωₙ).

---

## CAP 12–14 — MOTOARE FĂRĂ PERII (BLDC / SRVM)

### Principiu BLDC (Brushless DC)
Înlocuiește sistemul perie-colector cu comutatație statică (tranzistoare MOSFET/IGBT).
Rotorul: magneți permanenți (SmCo sau NdFeB — Br > 1T, Hc > 800 kA/m).
Stator: înfășurare trifazată.
Detecție poziție rotor: senzori Hall (3 buc., la 120° electric).

### Comutație trapezoidală (BLDC clasic)
La fiecare 60° electric, se comută altă pereche de faze (6 pași/ciclu electric).
Formă de undă curent: trapezoidală (bloc de 120°).
Avantaj: simplitate control, cuplu specific mare.
Dezavantaj: riplu de cuplu ≈ 10–15%.

### Comutație sinusoidală (PMSM / SRVM)
Curenți sinusoidali în stator, câmp rotitor continuu → cuplu neted.
Control FOC (Field Oriented Control): separare control flux și cuplu.
Senzori: encoder incremental sau rezolver (precizie ≤ 1').

### Ecuații BLDC
E_faza = k_e · ω (FEM liniară cu viteza unghiulară)
M = k_m · I_faza · (nr. faze active)
P_mec = M · ω = E · I

---

## CAP 15–16 — MOTORUL PAS CU PAS (MPP) — PRINCIPIU

### Principiu de funcționare
Rotorul se deplasează cu un unghi discret (pas) la fiecare impuls de comandă.
Fără feedback de poziție (control în buclă deschisă).

### Unghiul unui pas
θ_p = 360° / (Nᵣ · m)
Nᵣ = numărul de dinți ai rotorului; m = numărul de faze.
Exemple: motor 4-faze, 50 dinți rotor → θ_p = 360/(50·4) = 1.8°/pas = 200 pași/rotație.

### Moduri de comandă
- Full-step (pas întreg): o fază activă la un moment dat → θ_p = nominal.
- Half-step (semi-pas): alternativ 1 și 2 faze active → θ_p/2 (400 pași/rot pentru 1.8° motor).
- Microstepping: curenți sinusoidali → rezoluție până la 1/256 pas.

### Accelerare în trepte (profilul de viteză)
Pornire directă la frecvență > fstart → pierdere de pași (rezistul de inerție > cuplu disponibil).
Accelerare gradată: rampă liniară sau S-curve.
Frecvența de start: fstart ≤ f_rez / 1.25 (din stabilitate dinamică).

---

## CAP 17–19 — MPP: AVANTAJE, DEZAVANTAJE, DINAMICĂ

### Avantaje MPP
- Control precis al poziției fără encoder (buclă deschisă).
- Cuplu de menținere ridicat în repaus (holding torque).
- Reproductibilitate excelentă a poziției.
- Interfață digitală simplă (STEP/DIR).
- Cost redus al sistemului de control.

### Dezavantaje MPP
- Pierdere de pași la suprasarcină sau accelerare incorectă.
- Randament mai mic față de servomotor (curent constant indiferent de sarcină).
- Zgomot și vibrații la frecvențe joase (rezonanță mecanică).
- Putere specifică mai mică față de motoarele AC.
- Frecvența maximă limitată (>1000 Hz cădere de cuplu).

### Frecvența de rezonanță
f_rez = (1/2π) · √(p · M_max / J_red)
p = nr. perechi de poli (pași electrici pe rotație / 2)
M_max = cuplu maxim static [N·m]
J_red = momentul de inerție redus la ax [kg·m²]

### Frecvența de start
fstart = 1.25 · f_rez  (valoare practică de siguranță)
Pornire directă la fstart sau mai mic → nicio pierdere de pași la sarcina nominală.

### Metoda I de amortizare (rezistență serie)
Adăugare rezistență R_s în serie cu fazele → crește amortizarea ξ.
Dezavantaj: disipare termică crescută, reducerea cuplului disponibil.

### Metoda II de amortizare (circuit RC paralel)
Condensator C în paralel cu faza + rezistență de amortizare R.
Absorbe energia oscilatorie; mai eficient decât Metoda I.

---

## MOTOR ASINCRON TRIFAZAT (referință)

### Parametrii de bază
Viteza sincronă: n₁ = 60·f₁/p [rot/min]  (f₁ = frecv. rețea, p = perechi poli)
Alunecarea: s = (n₁ − n₂)/n₁ = f₂/f₁
La mers în gol: s ≈ 0; la blocat: s = 1.

### Momentul electromagnetic (Kloss)
Momentul maxim (Kloss): Mₘ = 3·p·U₁² / (2·ω₁·X_s)
Alunecarea critică: sₘ = R₂/X_s
Formula Kloss (apropiată): M = 2·Mₘ / (s/sₘ + sₘ/s)

### Circuit echivalent (per fază)
Z_rotor_ref = R₂/s + jX₂  (rezistența rotorică raportată la stator)
Curentul de magnetizare: I₀ = U₁ / (jX_μ)
Curentul de stator: I₁ = I₀ + I₂'

### Bilanț energetic
P_electromagnetică = P_electrică − P_cupru_stator − P_fier
P_mecanică = P_em · (1 − s)
Randament: η = P_mec / P_absorbită
`;

/* ═══════════════════════════════════════════════════════════════
   ÎNTREBĂRI RAPIDE per modul
═══════════════════════════════════════════════════════════════ */
const QUICK_Q = {
  flux: [
    'Ce este fluxul magnetic și cum se calculează?',
    'Explică legea lui Faraday cu un exemplu practic.',
    'De ce miezul de fier crește fluxul magnetic?',
    'Care este diferența dintre B și H în câmpul magnetic?'
  ],
  forte: [
    'Explică forța Laplace pe un conductor parcurs de curent.',
    'Cum se calculează cuplul electromagnetic al unui motor?',
    'De ce forța este maximă când conductorul e perpendicular pe câmp?',
    'Ce este legea lui Lenz și cum se manifestă?'
  ],
  mcc: [
    'De ce la pornire curentul unui MCC este very mare?',
    'Explică diferența dintre MCC în derivație și MCC în serie.',
    'Cum se reglează turația unui motor CC?',
    'Ce este reacția indusului și cum afectează funcționarea?'
  ],
  transfer: [
    'Ce reprezintă polii unei funcții de transfer?',
    'Cum influențează factorul de amortizare răspunsul tranzitoriu?',
    'Explică diferența dintre sistem de ordinul 1 și ordinul 2.',
    'Ce înseamnă că un sistem este stabil în sens BIBO?'
  ],
  async: [
    'Ce este alunecarea unui motor asincron și ce valori tipice are?',
    'De ce motorul asincron nu poate funcționa la viteza sincronă?',
    'Cum se calculează viteza sincronă în funcție de frecvență și poli?',
    'Explică formula Kloss pentru momentul electromagnetic.'
  ],
  mpp: [
    'Ce înseamnă pierdere de pași și cum se evită?',
    'Explică diferența dintre full-step, half-step și microstepping.',
    'De ce MPP are rezonanță mecanică și cum se amortizează?',
    'Cum se calculează frecvența de start a unui motor pas cu pas?'
  ],
  srvm: [
    'Ce avantaje are servomotorul față de MPP în aplicații de precizie?',
    'Explică rolul fiecărui termen PID în controlul unui servomotor.',
    'Ce este suprareglajul și cum îl reducem ajustând Kd?',
    'Cum funcționează senzorul Hall în detecția poziției rotorului BLDC?'
  ],
  eq: [
    'Care sunt ecuațiile de bază ale unui motor CC?',
    'Explică analogia dintre circuitul electric și cel magnetic.',
    'Ce parametri definesc comportamentul dinamic al unui MCC?',
    'Cum se leagă funcția de transfer de polii sistemului?'
  ],
  glosar: [
    'Explică termenul "reluctanță magnetică" și analogia cu rezistența.',
    'Ce este histerezisul magnetic și de ce contează la proiectare?',
    'Explică diferența dintre BLDC și PMSM.',
    'Ce este reacția indusului și cum se compensează?'
  ]
};

/* ═══════════════════════════════════════════════════════════════
   GLOSAR — 40 termeni tehnici RO/PT cu definiții
═══════════════════════════════════════════════════════════════ */
const GLOSS = [
  {
    ro: 'Înfășurare',
    pt: 'Enrolamento',
    def: 'Ansamblu de bobine din conductor electric dispuse pe stator sau rotor, care produc sau sunt traversate de câmp magnetic.'
  },
  {
    ro: 'Reacția indusului',
    pt: 'Reação de armadura',
    def: 'Distorsionarea câmpului magnetic principal de către câmpul produs de curentul de armătură, cu efecte de demagnetizare parțială.'
  },
  {
    ro: 'Alunecare',
    pt: 'Escorregamento',
    def: 'Diferența relativă dintre viteza câmpului rotitor sincron (n₁) și viteza rotorului (n₂): s = (n₁−n₂)/n₁.'
  },
  {
    ro: 'Cuplu electromagnetic',
    pt: 'Conjugado eletromagnético',
    def: 'Momentul forțelor electromagnetice care acționează asupra rotorului: M = k·Φ·Iₐ [N·m].'
  },
  {
    ro: 'Inducție magnetică',
    pt: 'Indução magnética',
    def: 'Câmpul magnetic B [Tesla] — densitatea de flux magnetic, definit prin forța exercitată pe un conductor: F = I·L×B.'
  },
  {
    ro: 'Flux magnetic',
    pt: 'Fluxo magnético',
    def: 'Φ = ∫B·dA [Weber] — mărimea ce exprimă totalul liniilor de câmp magnetic care traversează o suprafață.'
  },
  {
    ro: 'Permeabilitate',
    pt: 'Permeabilidade',
    def: 'μ = μ₀·μᵣ [H/m] — proprietatea materialului de a permite trecerea câmpului magnetic; μ₀ = 4π×10⁻⁷ H/m.'
  },
  {
    ro: 'Perie-colector',
    pt: 'Escova-coletor',
    def: 'Sistem de contact electric glisant care permite transferul curentului între circuitul fix și rotorul în rotație al unui motor CC.'
  },
  {
    ro: 'Fără perii (BLDC)',
    pt: 'Sem escovas',
    def: 'Motor în care sistemul perie-colector este înlocuit cu comutatație electronică statică prin tranzistoare de putere și senzori Hall.'
  },
  {
    ro: 'Tensiune electromotoare (TEM)',
    pt: 'Força eletromotriz (FEM)',
    def: 'E = k_e·n·Φ [V] — tensiunea generată de rotorul în mișcare; se opune tensiunii de alimentare în funcționarea ca motor.'
  },
  {
    ro: 'Excitație derivație (șunt)',
    pt: 'Excitação derivação',
    def: 'Configurație MCC în care înfășurarea de excitație este conectată în paralel cu armătura; flux practic constant la variații de sarcină.'
  },
  {
    ro: 'Excitație serie',
    pt: 'Excitação série',
    def: 'Configurație MCC în care înfășurarea de excitație este în serie cu armătura; flux și moment proporționale cu I² → caracteristică moale.'
  },
  {
    ro: 'Funcție de transfer',
    pt: 'Função de transferência',
    def: 'G(s) = Y(s)/U(s) — raportul transformatei Laplace a ieșirii față de intrare, în condiții inițiale nule; descrie complet sistemul liniar.'
  },
  {
    ro: 'Factor de amortizare',
    pt: 'Fator de amortecimento',
    def: 'ξ (zeta) — parametru adimensional care descrie comportamentul tranzitoriu: ξ<1 subamortizat, ξ=1 critic, ξ>1 supraamortizat.'
  },
  {
    ro: 'Pulsație naturală',
    pt: 'Frequência natural',
    def: 'ωₙ [rad/s] — frecvența de oscilație a sistemului fără amortizare; determină rapiditatea răspunsului: ωₙ = √(k²/LₐJₘ).'
  },
  {
    ro: 'Moment de inerție',
    pt: 'Momento de inércia',
    def: 'Jₘ [kg·m²] — rezistența la modificarea stării de rotație; analog cu masa în mișcarea liniară: M_net = Jₘ·dω/dt.'
  },
  {
    ro: 'Pas unghiular',
    pt: 'Passo angular',
    def: 'θ_p = 360°/(Nᵣ·m) — unghiul de rotație al unui motor pas cu pas la un impuls de comandă; tipic 1.8° sau 0.9°.'
  },
  {
    ro: 'Senzor Hall',
    pt: 'Sensor Hall',
    def: 'Senzor magnetic bazat pe efectul Hall; detectează poziția polilor rotorului în motoarele BLDC la 60° sau 120° electric.'
  },
  {
    ro: 'Comutație statică',
    pt: 'Comutação estática',
    def: 'Înlocuirea periilor și colectorului cu tranzistoare de putere (MOSFET/IGBT) comandate electronic în motoarele BLDC.'
  },
  {
    ro: 'Rezonanță',
    pt: 'Ressonância',
    def: 'Fenomen la motorul pas cu pas când frecvența de comandă coincide cu frecvența proprie mecanică; produce vibrații și pierdere de pași.'
  },
  {
    ro: 'Reluctanță',
    pt: 'Relutância',
    def: 'R_m = l/(μ·A) [A/Wb] — rezistența la trecerea fluxului magnetic; analog cu rezistența electrică: Φ = NI/R_m.'
  },
  {
    ro: 'Stator',
    pt: 'Estátor',
    def: 'Partea fixă a motorului electric; conține înfășurările de excitație (la MCC) sau înfășurările trifazate (la motoare AC).'
  },
  {
    ro: 'Rotor',
    pt: 'Rotor',
    def: 'Partea rotativă a motorului electric; convertește forțele electromagnetice în mișcare mecanică la ax.'
  },
  {
    ro: 'Pol magnetic',
    pt: 'Polo magnético',
    def: 'Zona de concentrare a câmpului magnetic în mașina electrică; mașinile au 2p poli (p = perechi de poli).'
  },
  {
    ro: 'Histerezis magnetic',
    pt: 'Histerese magnética',
    def: 'Dependența lui B de istoricul magnetizării materialului; aria buclei B-H reprezintă energia disipată per ciclu de magnetizare.'
  },
  {
    ro: 'Câmp magnetic H',
    pt: 'Campo magnético H',
    def: 'H = B/(μ₀·μᵣ) = NI/l [A/m] — intensitatea câmpului magnetic, independentă de material; legat de curentul sursei.'
  },
  {
    ro: 'Forța Laplace',
    pt: 'Força de Laplace',
    def: 'F = I·L×B — forța exercitată pe un conductor parcurs de curent I, de lungime L, plasat în câmpul magnetic B.'
  },
  {
    ro: 'Energie magnetică',
    pt: 'Energia magnética',
    def: 'W_m = L·I²/2 = Φ²/(2L) [J] — energia stocată în câmpul magnetic al unei bobine cu inductanță L parcursă de curentul I.'
  },
  {
    ro: 'Regim tranzitoriu',
    pt: 'Regime transitório',
    def: 'Intervalul de timp în care variabilele sistemului evoluează de la o stare la alta, înainte de atingerea regimului staționar.'
  },
  {
    ro: 'Caracteristică mecanică',
    pt: 'Característica mecânica',
    def: 'Dependența turației n față de momentul de sarcină M la o tensiune de alimentare dată: n = f(M). Rigidă (derivație) sau moale (serie).'
  },
  {
    ro: 'Randament',
    pt: 'Rendimento',
    def: 'η = P_mecanică / P_electrică_absorbită — raportul energiei utile față de energia consumată; tipic 70–95% la motoare electrice.'
  },
  {
    ro: 'Frecvență de rezonanță (MPP)',
    pt: 'Frequência de ressonância',
    def: 'f_rez = (1/2π)·√(p·M_max/J_red) — frecvența proprie a sistemului MPP-sarcină; trebuie evitată în funcționare.'
  },
  {
    ro: 'Magnet permanent',
    pt: 'Ímã permanente',
    def: 'Material feromagnetic dur (AlNiCo, ferită, SmCo, NdFeB) care păstrează magnetizarea fără curent de excitație.'
  },
  {
    ro: 'Bobină de excitație',
    pt: 'Bobina de excitação',
    def: 'Înfășurare parcursă de curentul de excitație I_e care produce câmpul magnetic principal Φ în mașinile CC cu excitație externă.'
  },
  {
    ro: 'Sarcină (moment rezistent)',
    pt: 'Carga (conjugado resistente)',
    def: 'M_r [N·m] — momentul opus la ax de sarcina mecanică (ventilator, pompă, mașină-unealtă); echilibrează momentul motor în regim staționar.'
  },
  {
    ro: 'Înfășurare trapezoidală',
    pt: 'Enrolamento trapezoidal',
    def: 'Distribuție de conductori care produce o FEM cu formă trapezoidală; utilizată în motoarele BLDC pentru comutație simplificată.'
  },
  {
    ro: 'Înfășurare sinusoidală',
    pt: 'Enrolamento sinusoidal',
    def: 'Distribuție sinusoidală a conductorilor care produce FEM sinusoidală; utilizată în PMSM pentru cuplu neted și control FOC.'
  },
  {
    ro: 'Diodă supresoare',
    pt: 'Diodo supressor',
    def: 'Diodă de protecție (flyback/freewheeling) conectată antiparalel pe înfășurare; elimină tensiunile de vârf la comutație (L·dI/dt).'
  },
  {
    ro: 'Alunecare critică',
    pt: 'Escorregamento crítico',
    def: 'sₘ = R₂/X_s — alunecarea la care motorul asincron produce momentul maxim (Mₘ); punct de instabilitate pe caracteristica mecanică.'
  },
  {
    ro: 'Procedeul electromagnetic',
    pt: 'Procedimento eletromagnético',
    def: 'Metoda de producere a forțelor bazată pe interacțiunea dintre curentul de armătură și câmpul magnetic de excitație: F = I·L×B.'
  }
];
