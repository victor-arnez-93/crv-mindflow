// ============================================================================
// mindfulness.js — MindFlow · Mindfulness Clínico
// ============================================================================

// ============================================================================
// BANCO DE PRÁTICAS
// ============================================================================

const praticas = [
    {
        id: 1,
        nome:        "Varredura Corporal (Body Scan)",
        protocolo:   "MBSR",
        duracaoMin:  20,
        duracaoTexto:"20–45 minutos",
        objetivo:    "Desenvolver consciência interoceptiva e liberar tensão somática através de atenção sistemática ao corpo.",
        embasamento: "Componente central do MBSR de Kabat-Zinn. Ativa a ínsula e promove integração córtico-límbica. Meta-análises confirmam eficácia para dor crônica, ansiedade e depressão.",
        ref:         "Kabat-Zinn, J. (1990). Full Catastrophe Living. Delacorte Press.",
        passos: [
            "Deite-se em posição confortável — decúbito dorsal, braços ao longo do corpo.",
            "Feche os olhos e respire naturalmente por 2 minutos.",
            "Dirija a atenção para os dedos do pé esquerdo. Observe qualquer sensação sem julgamento.",
            "Suba lentamente: pé, tornozelo, panturrilha, joelho, coxa.",
            "Repita o percurso na perna direita.",
            "Continue: pelve, abdômen (observe o movimento respiratório), peito.",
            "Braços e mãos: dedos, palmas, pulsos, antebraços, cotovelos, braços.",
            "Pescoço, face e couro cabeludo.",
            "Ao final, respire profundamente e sinta o corpo como um todo.",
            "Abra os olhos suavemente e oriente o paciente antes de levantar."
        ]
    },
    {
        id: 2,
        nome:        "Meditação de Bondade Amorosa (Metta)",
        protocolo:   "MBSR",
        duracaoMin:  15,
        duracaoTexto:"15–20 minutos",
        objetivo:    "Cultivar compaixão por si mesmo e pelos outros para reduzir autocrítica e aumentar conexão social.",
        embasamento: "Metta bhavana é prática contemplativa budista adaptada pela psicologia ocidental. Estudos de Fredrickson et al. (2008) mostram aumento de emoções positivas e recursos pessoais após 7 semanas.",
        ref:         "Fredrickson, B.L. et al. (2008). Open hearts build lives. JPSP, 95(5), 1045–1062.",
        passos: [
            "Sente-se confortavelmente com a coluna ereta e os olhos fechados.",
            "Respire algumas vezes e deixe o corpo relaxar.",
            "Visualize a si mesmo com gentileza. Repita mentalmente: 'Que eu seja feliz. Que eu seja saudável. Que eu esteja em paz.'",
            "Sinta o calor dessas palavras — não como obrigação, mas como oferta genuína.",
            "Expanda para alguém que você ama facilmente. Repita os votos para essa pessoa.",
            "Expanda para uma pessoa neutra — alguém que você vê mas não conhece.",
            "Expanda para alguém com quem há dificuldade. Observe a resistência sem julgamento.",
            "Por fim, expanda para todos os seres: 'Que todos sejam felizes. Que todos estejam em paz.'",
            "Retorne ao seu próprio coração. Respire e abra os olhos."
        ]
    },
    {
        id: 3,
        nome:        "Espaço de Respiração de 3 Minutos",
        protocolo:   "MBCT",
        duracaoMin:  3,
        duracaoTexto:"3 minutos",
        objetivo:    "Criar uma pausa consciente para sair do piloto automático e retornar ao momento presente — âncora central do MBCT.",
        embasamento: "Técnica core do MBCT de Segal, Williams & Teasdale. Funciona como 'mini-meditação' de emergência que interrompe a ruminação e restaura perspectiva.",
        ref:         "Segal, Z.V., Williams, J.M.G. & Teasdale, J.D. (2013). Mindfulness-Based Cognitive Therapy for Depression. Guilford Press.",
        passos: [
            "MINUTO 1 — Consciência: 'O que está passando em mim agora?' Observe pensamentos, emoções e sensações corporais sem tentar mudar.",
            "Nomeie o que percebe: 'Estou notando preocupação... tensão nos ombros... pensamentos sobre o trabalho.'",
            "MINUTO 2 — Atenção: Redirecione toda a atenção para a respiração. Apenas a respiração.",
            "Observe cada inspiração e expiração como se fosse a primeira vez.",
            "MINUTO 3 — Expansão: Expanda a atenção do fôlego para o corpo inteiro.",
            "Sinta os pés no chão, o peso do corpo na cadeira.",
            "Pergunte: 'Como posso me cuidar nesse momento?'"
        ]
    },
    {
        id: 4,
        nome:        "Observação de Pensamentos — Nuvens",
        protocolo:   "ACT",
        duracaoMin:  8,
        duracaoTexto:"5–10 minutos",
        objetivo:    "Praticar desfusão cognitiva observando pensamentos como eventos mentais passageiros, sem se identificar com eles.",
        embasamento: "Exercício central de desfusão cognitiva da ACT de Hayes. Reduz a literalidade dos pensamentos e enfraquece sua influência sobre o comportamento.",
        ref:         "Harris, R. (2009). ACT Made Simple. New Harbinger Publications.",
        passos: [
            "Feche os olhos e imagine um céu azul amplo e tranquilo.",
            "Visualize nuvens passando lentamente pelo céu.",
            "Cada pensamento que surgir, coloque-o em uma nuvem.",
            "Observe a nuvem passando — sem tentar detê-la ou empurrá-la.",
            "Se você 'entrar' em um pensamento, note gentilmente e retorne ao observador.",
            "Lembre: você é o céu — espaçoso e constante. Os pensamentos são as nuvens — passageiros.",
            "Após o tempo, abra os olhos e pergunte: 'Quem estava observando as nuvens?'"
        ]
    },
    {
        id: 5,
        nome:        "STOP — Pausa Mindful",
        protocolo:   "DBT",
        duracaoMin:  2,
        duracaoTexto:"2–3 minutos",
        objetivo:    "Interromper reações automáticas e criar espaço de consciência plena antes de responder a situações difíceis.",
        embasamento: "Técnica de mindfulness da DBT de Linehan. Combina pausa deliberada com observação não-julgante — base para todas as decisões da mente sábia.",
        ref:         "Linehan, M.M. (2015). DBT Skills Training Manual. Guilford Press.",
        passos: [
            "S — STOP: Pare completamente o que está fazendo. Não reaja.",
            "T — Take a breath: Respire fundo. Uma inspiração longa e uma expiração longa.",
            "O — Observe: Observe o que está acontecendo dentro e fora de você — pensamentos, emoções, sensações, ambiente.",
            "P — Proceed mindfully: Prossiga com consciência. Pergunte: 'O que é efetivo agora?'"
        ]
    },
    {
        id: 6,
        nome:        "Meditação da Montanha",
        protocolo:   "MBSR",
        duracaoMin:  15,
        duracaoTexto:"10–20 minutos",
        objetivo:    "Desenvolver estabilidade, equanimidade e enraizamento diante das mudanças e dificuldades da vida.",
        embasamento: "Meditação de visualização criada por Jon Kabat-Zinn. Usa a metáfora da montanha para cultivar imperturbabilidade e presença estável.",
        ref:         "Kabat-Zinn, J. (1994). Wherever You Go, There You Are. Hyperion.",
        passos: [
            "Sente-se com a coluna ereta, sentindo o enraizamento da postura.",
            "Feche os olhos e visualize a montanha mais bela que você já viu ou imaginou.",
            "Observe sua base sólida, seu pico tocando o céu, sua imobilidade.",
            "Agora, traga a montanha para dentro de si — você é a montanha.",
            "Observe as estações passando: verão quente, inverno nevado, tempestades.",
            "A montanha permanece. Ela não reage às estações — apenas existe.",
            "Assim são as dificuldades da vida: passam como estações. Você permanece.",
            "Respire com a solidez da montanha e abra os olhos suavemente."
        ]
    },
    {
        id: 7,
        nome:        "Atenção Plena nas Atividades Cotidianas",
        protocolo:   "MBSR",
        duracaoMin:  10,
        duracaoTexto:"5–10 minutos",
        objetivo:    "Integrar mindfulness informal à rotina diária, transformando atividades automáticas em oportunidades de presença.",
        embasamento: "Práticas informais do MBSR. Pesquisas mostram que mindfulness informal pode ser tão eficaz quanto formal quando praticado consistentemente no cotidiano.",
        ref:         "Kabat-Zinn, J. (1990). Full Catastrophe Living. Delacorte Press.",
        passos: [
            "Escolha uma atividade rotineira: lavar louça, tomar banho, caminhar até o carro.",
            "Durante essa atividade, traga atenção plena a cada aspecto sensorial.",
            "Lavar louça: temperatura da água, textura das mãos, cheiro do sabão, som.",
            "Quando a mente divagar para o passado ou futuro, gentilmente retorne.",
            "Não avalie se está 'fazendo certo' — apenas retorne quando perceber a divagação.",
            "Ao final, pergunte: 'Como foi diferente fazer isso com atenção plena?'"
        ]
    },
    {
        id: 8,
        nome:        "Surf das Emoções (Urge Surfing)",
        protocolo:   "DBT",
        duracaoMin:  10,
        duracaoTexto:"5–10 minutos",
        objetivo:    "Observar impulsos e emoções intensas como ondas — sem agir impulsivamente, deixando-os atingir o pico e diminuir naturalmente.",
        embasamento: "Técnica adaptada por Marlatt para adições e pela DBT para regulação emocional. Baseada no fenômeno de que impulsos têm pico entre 20–30 minutos e diminuem sem ação.",
        ref:         "Marlatt, G.A. & Gordon, J.R. (1985). Relapse Prevention. Guilford Press.",
        passos: [
            "Quando um impulso intenso surgir, em vez de agir, pare e observe.",
            "Feche os olhos e localize a sensação no corpo — onde ela está? Qual sua forma?",
            "Imagine que você está em uma prancha de surf e o impulso é uma onda.",
            "Não lute contra a onda nem tente apressá-la. Apenas surf — equilíbrio.",
            "Observe a onda crescer, atingir o pico e começar a diminuir.",
            "Respire e mantenha presença durante todo o processo.",
            "Ao final, note: o impulso passou sem que você precisasse agir."
        ]
    },
    {
        id: 9,
        nome:        "Meditação da Consciência Aberta",
        protocolo:   "Avulso",
        duracaoMin:  12,
        duracaoTexto:"10–20 minutos",
        objetivo:    "Desenvolver consciência panorâmica — receber tudo que surge sem foco exclusivo, cultivando presença espaçosa.",
        embasamento: "Choiceless Awareness de Krishnamurti, adaptada por Kabat-Zinn. Difere da meditação focada — não há objeto fixo. Indicada para praticantes com alguma experiência.",
        ref:         "Kabat-Zinn, J. (2013). Full Catastrophe Living (Revised). Bantam Books.",
        passos: [
            "Sente-se confortavelmente. Respire naturalmente por 2 minutos como ancoragem.",
            "Solte qualquer objeto de atenção específico. Abra a consciência.",
            "Permita que sons, sensações, pensamentos e emoções entrem e saiam livremente.",
            "Não siga nenhum objeto — apenas seja o espaço que os contém.",
            "Se perceber que 'pegou' algo, solte gentilmente e retorne à abertura.",
            "Não há lugar certo para estar — apenas estar aqui, agora, aberto.",
            "Ao encerrar, respire fundo e note a qualidade do estado presente."
        ]
    },
    {
        id: 10,
        nome:        "Yoga Mindful — Movimentos Conscientes",
        protocolo:   "MBSR",
        duracaoMin:  30,
        duracaoTexto:"20–45 minutos",
        objetivo:    "Integrar movimento consciente ao corpo para desenvolver presença somática e reduzir tensão crônica.",
        embasamento: "Componente do MBSR de Kabat-Zinn. Hatha yoga suave com ênfase em atenção plena — não em perfeição postural. Indicado para dor crônica, estresse e trauma.",
        ref:         "Kabat-Zinn, J. (1990). Full Catastrophe Living. Delacorte Press.",
        passos: [
            "Comece deitado em decúbito dorsal. Respire e sinta o contato com o solo.",
            "Leve os joelhos ao peito suavemente — observe a sensação na lombar.",
            "Estique os braços para os lados e balance os joelhos para um lado, depois o outro.",
            "Em pé, explore flexão lateral do tronco — braço acima da cabeça.",
            "Postura da montanha: pés paralelos, peso distribuído, atenção em toda a superfície plantar.",
            "Em cada movimento: inspire ao expandir, expire ao recolher.",
            "Mova-se apenas dentro do seu alcance atual — sem forçar. A fronteira é informação.",
            "Ao final, deite em savasana por 5 minutos com atenção no corpo inteiro."
        ]
    },
    {
        id: 11,
        nome:        "Comer com Atenção Plena",
        protocolo:   "MBSR",
        duracaoMin:  10,
        duracaoTexto:"10–15 minutos",
        objetivo:    "Desenvolver consciência plena na alimentação, interrompendo padrões automáticos e compulsivos.",
        embasamento: "Mindful eating baseado no MBSR. Eficaz como complemento terapêutico em transtornos alimentares, compulsão e desregulação emocional relacionada à alimentação.",
        ref:         "Kristeller, J.L. & Hallett, C.B. (1999). An exploratory study of a meditation-based intervention for binge eating disorder. Journal of Health Psychology.",
        passos: [
            "Escolha um alimento pequeno — uma uva-passa, um pedaço de fruta.",
            "Observe visualmente: cor, forma, textura, assimetrias.",
            "Cheire o alimento. Note as memórias e sensações evocadas.",
            "Coloque na boca sem mastigar — observe sabor e textura inicial.",
            "Mastigue lentamente — conte 10 mastigações conscientes.",
            "Observe o impulso de engolir antes de estar pronto.",
            "Degluta com atenção. Observe o rastro sensorial que permanece.",
            "Reflita: 'O que percebi que normalmente ignoro?'"
        ]
    },
    {
        id: 12,
        nome:        "Desfusão: Folhas no Rio",
        protocolo:   "ACT",
        duracaoMin:  8,
        duracaoTexto:"5–10 minutos",
        objetivo:    "Praticar desfusão cognitiva observando pensamentos passarem sem se prender a eles — variação mais suave para pacientes resistentes.",
        embasamento: "Exercício de desfusão da ACT. Especialmente útil como introdução à desfusão para pacientes que têm dificuldade com a metáfora das nuvens ou que precisam de mais concretude.",
        ref:         "Hayes, S.C. (2019). A Liberated Mind. Avery/Penguin.",
        passos: [
            "Feche os olhos e imagine um rio tranquilo em uma floresta.",
            "Folhas caem das árvores e flutuam suavemente sobre a água.",
            "Cada pensamento que surgir, coloque-o em uma folha.",
            "Observe a folha partir e se afastar rio abaixo.",
            "Se um pensamento for agradável, observe a tentação de segurar a folha — e solte.",
            "Se for desagradável, observe a vontade de empurrar — e apenas deixe fluir.",
            "Você é o observador na margem — não o rio, não as folhas."
        ]
    }
];

// ============================================================================
// ESTADO
// ============================================================================

let filtroProtocolo = "todos";
let filtroDuracao   = "todos";
let termoBusca      = "";

// ============================================================================
// FILTRAR E RENDERIZAR
// ============================================================================

function filtrar() {
    return praticas.filter(p => {
        const matchProt  = filtroProtocolo === "todos" || p.protocolo === filtroProtocolo;
        const matchDur   = filtroDuracao === "todos"
            || (filtroDuracao === "curta" && p.duracaoMin <= 5)
            || (filtroDuracao === "media" && p.duracaoMin > 5 && p.duracaoMin <= 15)
            || (filtroDuracao === "longa" && p.duracaoMin > 15);
        const matchBusca = termoBusca === ""
            || p.nome.toLowerCase().includes(termoBusca)
            || p.objetivo.toLowerCase().includes(termoBusca);
        return matchProt && matchDur && matchBusca;
    });
}

function renderizar() {
    const grid    = document.getElementById("mindGrid");
    const counter = document.getElementById("contadorMind");
    if (!grid) return;

    const lista = filtrar();
    counter.textContent = `${lista.length} prática${lista.length !== 1 ? "s" : ""} encontrada${lista.length !== 1 ? "s" : ""}`;

    if (!lista.length) {
        grid.innerHTML = `
            <div class="ferramentas-vazio">
                <i class="fa-solid fa-magnifying-glass"></i>
                <p>Nenhuma prática encontrada.</p>
            </div>`;
        return;
    }

    grid.innerHTML = lista.map(p => `
        <article class="mind-card">
            <div class="ferr-card-topo">
                <span class="ferr-tag">${p.protocolo}</span>
                <span class="ferr-duracao"><i class="fa-regular fa-clock"></i> ${p.duracaoTexto}</span>
            </div>
            <h3 class="ferr-titulo">${p.nome}</h3>
            <p class="ferr-objetivo">${p.objetivo}</p>
            <button class="btn-ferr-ver" data-id="${p.id}">
                Ver roteiro <i class="fa-solid fa-arrow-right"></i>
            </button>
        </article>
    `).join("");

    grid.querySelectorAll(".btn-ferr-ver").forEach(btn => {
        btn.addEventListener("click", () => abrirModal(parseInt(btn.dataset.id)));
    });
}

// ============================================================================
// MODAL
// ============================================================================

function abrirModal(id) {
    const p = praticas.find(x => x.id === id);
    if (!p) return;

    document.getElementById("modalMindTag").textContent     = p.protocolo;
    document.getElementById("modalMindDuracao").textContent = p.duracaoTexto;
    document.getElementById("modalMindTitulo").textContent  = p.nome;
    document.getElementById("modalMindObjetivo").textContent= p.objetivo;
    document.getElementById("modalMindEmb").textContent     = p.embasamento;
    document.getElementById("modalMindRef").textContent     = p.ref;
    document.getElementById("modalMindPassos").innerHTML    =
        p.passos.map(s => `<li>${s}</li>`).join("");

    document.getElementById("modalMind").classList.add("ativo");
    document.getElementById("modalMindOverlay").classList.add("ativo");
    document.body.style.overflow = "hidden";
}

function fecharModal() {
    document.getElementById("modalMind").classList.remove("ativo");
    document.getElementById("modalMindOverlay").classList.remove("ativo");
    document.body.style.overflow = "";
}

// ============================================================================
// TIMER DE RESPIRAÇÃO
// ============================================================================

let breathState    = null;   // null | 'running' | 'stopped'
let breathInterval = null;
let breathSegment  = 0;      // 0=inhale 1=hold 2=exhale
let breathSecLeft  = 0;
let breathCiclosDone = 0;
let breathTotalSec   = 0;
let breathTempoInt   = null;

let breathIn   = 4;
let breathHold = 0;
let breathOut  = 6;
let breathCiclosTotal = 3;

const circleEl      = () => document.getElementById("breathCircle");
const instrEl       = () => document.getElementById("breathInstruction");
const countEl       = () => document.getElementById("breathCount");
const ringEl        = () => document.getElementById("breathRingFill");
const ciclosDoneEl  = () => document.getElementById("breathCiclosFeitos");
const tempoEl       = () => document.getElementById("breathTempo");

const CIRCUNF = 326.7;

const FASES = [
    { label: "Inspire",   cor: "var(--cor-primaria)",    escala: "scale(1.18)" },
    { label: "Segure",    cor: "var(--cor-secundaria)",  escala: "scale(1.18)" },
    { label: "Expire",    cor: "#5A8CD2",                escala: "scale(1.0)"  }
];

function ticarBreath() {
    const duracoes = [breathIn, breathHold, breathOut].filter((v, i) => i !== 1 || breathHold > 0);
    const faseMap  = breathHold > 0 ? [0, 1, 2] : [0, 2];

    const faseIdx  = faseMap[breathSegment % faseMap.length];
    const duracao  = [breathIn, breathHold, breathOut][faseIdx];
    const fase     = FASES[faseIdx];

    instrEl().textContent = fase.label;
    countEl().textContent = breathSecLeft;

    const progresso = 1 - (breathSecLeft - 1) / duracao;
    const offset    = CIRCUNF - progresso * CIRCUNF;
    const ring      = ringEl();
    ring.style.strokeDashoffset = offset;
    ring.style.stroke = fase.cor;

    const circle = circleEl();
    circle.style.transform = fase.escala;
    circle.style.borderColor = fase.cor;
    circle.style.boxShadow = `0 0 30px ${fase.cor}55`;

    breathSecLeft--;

    if (breathSecLeft < 0) {
        breathSegment++;
        const totalFases = breathHold > 0 ? 3 : 2;
        if (breathSegment >= totalFases) {
            breathSegment = 0;
            breathCiclosDone++;
            ciclosDoneEl().textContent = breathCiclosDone;
            if (breathCiclosDone >= breathCiclosTotal) {
                pararBreath(true);
                return;
            }
        }
        const nextFaseIdx = faseMap[breathSegment % faseMap.length];
        breathSecLeft = [breathIn, breathHold, breathOut][nextFaseIdx];
    }
}

function iniciarBreath() {
    if (breathState === "running") return;
    breathState      = "running";
    breathSegment    = 0;
    breathSecLeft    = breathIn;
    breathCiclosDone = 0;
    breathTotalSec   = 0;

    ciclosDoneEl().textContent = "0";
    tempoEl().textContent      = "0:00";

    document.getElementById("btnBreathStart").disabled = true;
    document.getElementById("btnBreathStop").disabled  = false;

    instrEl().textContent = "Inspire";
    countEl().textContent = breathIn;

    breathInterval = setInterval(ticarBreath, 1000);
    breathTempoInt = setInterval(() => {
        breathTotalSec++;
        const m = Math.floor(breathTotalSec / 60);
        const s = String(breathTotalSec % 60).padStart(2, "0");
        tempoEl().textContent = `${m}:${s}`;
    }, 1000);
}

function pararBreath(concluido = false) {
    clearInterval(breathInterval);
    clearInterval(breathTempoInt);
    breathState = "stopped";

    document.getElementById("btnBreathStart").disabled = false;
    document.getElementById("btnBreathStop").disabled  = true;

    instrEl().textContent = concluido ? "✓ Concluído" : "Pausado";
    countEl().textContent = "";

    const ring = ringEl();
    ring.style.strokeDashoffset = CIRCUNF;

    const circle = circleEl();
    circle.style.transform  = "scale(1)";
    circle.style.borderColor = "var(--cor-primaria)";
    circle.style.boxShadow  = "";
}

// ============================================================================
// FILTROS
// ============================================================================

function iniciarFiltros() {
    document.getElementById("filtroProtocolo")?.querySelectorAll(".pill").forEach(btn => {
        btn.addEventListener("click", () => {
            document.getElementById("filtroProtocolo").querySelectorAll(".pill")
                .forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            filtroProtocolo = btn.dataset.filtro;
            renderizar();
        });
    });

    document.getElementById("filtroDurMind")?.querySelectorAll(".pill").forEach(btn => {
        btn.addEventListener("click", () => {
            document.getElementById("filtroDurMind").querySelectorAll(".pill")
                .forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            filtroDuracao = btn.dataset.filtro;
            renderizar();
        });
    });

    document.getElementById("buscaMind")?.addEventListener("input", e => {
        termoBusca = e.target.value.toLowerCase().trim();
        renderizar();
    });

    // Padrões de respiração
    document.getElementById("breathPatterns")?.querySelectorAll(".pill").forEach(btn => {
        btn.addEventListener("click", () => {
            document.getElementById("breathPatterns").querySelectorAll(".pill")
                .forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            breathIn   = parseInt(btn.dataset.in);
            breathHold = parseInt(btn.dataset.hold);
            breathOut  = parseInt(btn.dataset.out);
            if (breathState === "running") pararBreath();
        });
    });

    // Ciclos
    document.querySelectorAll("[data-ciclos]").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll("[data-ciclos]").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            breathCiclosTotal = parseInt(btn.dataset.ciclos);
            if (breathState === "running") pararBreath();
        });
    });

    document.getElementById("btnBreathStart")?.addEventListener("click", iniciarBreath);
    document.getElementById("btnBreathStop")?.addEventListener("click", () => pararBreath());

    // Modal
    document.getElementById("modalMindClose")?.addEventListener("click", fecharModal);
    document.getElementById("modalMindFechar")?.addEventListener("click", fecharModal);
    document.getElementById("modalMindOverlay")?.addEventListener("click", fecharModal);
    document.getElementById("modalMindTimer")?.addEventListener("click", () => {
        fecharModal();
        document.querySelector(".mind-timer-card")
            ?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
    document.addEventListener("keydown", e => { if (e.key === "Escape") fecharModal(); });
}

// ============================================================================
// INIT
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
    renderizar();
    iniciarFiltros();
    console.log("🧘 Mindfulness carregado —", praticas.length, "práticas.");
});