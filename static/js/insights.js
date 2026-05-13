// ============================================================================
// insights.js — MindFlow · Insights & IA
// ============================================================================

const insights = [
    {
        id: 1,
        titulo:    "Affect Labeling reduz ativação da amígdala",
        categoria: "Neurociência",
        descricao: "Nomear emoções em voz alta ou por escrito reduz significativamente a atividade da amígdala, ativando o córtex pré-frontal ventrolateral — mecanismo neural da regulação emocional.",
        detalhe:   "Lieberman et al. (2007) demonstraram em fMRI que o simples ato de nomear uma emoção negativa reduz a resposta da amígdala de forma comparável à reavaliação cognitiva. Implica diretamente em técnicas como o diário emocional e o reflective listening.",
        fonte:     "Lieberman et al. (2007). Putting Feelings into Words. Psychological Science, 18(5), 421–428.",
        link:      "https://pubmed.ncbi.nlm.nih.gov/17576282/",
        destaque:  true
    },
    {
        id: 2,
        titulo:    "Aliança terapêutica prediz resultados melhor que a técnica",
        categoria: "TCC",
        descricao: "Meta-análises consistentes mostram que a qualidade da aliança terapêutica responde por 7–15% da variância nos resultados — mais do que qualquer técnica específica.",
        detalhe:   "Wampold & Imel (2015) revisaram 150+ estudos e concluíram que os fatores comuns (aliança, empatia, expectativa) superam os efeitos específicos das técnicas. A implicação clínica é que o vínculo deve ser cultivado ativamente em todas as abordagens.",
        fonte:     "Wampold, B.E. & Imel, Z.E. (2015). The Great Psychotherapy Debate. Routledge.",
        link:      "https://www.routledge.com/The-Great-Psychotherapy-Debate/Wampold-Imel/p/book/9780805857085",
        destaque:  false
    },
    {
        id: 3,
        titulo:    "Mindfulness aumenta espessura do córtex pré-frontal",
        categoria: "Mindfulness",
        descricao: "Praticantes regulares de mindfulness apresentam maior espessura cortical em regiões associadas à atenção, introspecção e regulação emocional em comparação a não-praticantes.",
        detalhe:   "Lazar et al. (2005) encontraram diferenças estruturais no córtex insular, sensoriomotor e pré-frontal de meditadores experientes. As mudanças eram proporcionais aos anos de prática — evidência de neuroplasticidade induzida por meditação.",
        fonte:     "Lazar et al. (2005). Meditation experience is associated with increased cortical thickness. NeuroReport, 16(17).",
        link:      "https://pubmed.ncbi.nlm.nih.gov/16272874/",
        destaque:  false
    },
    {
        id: 4,
        titulo:    "Trauma altera o eixo HPA e a regulação do cortisol",
        categoria: "Trauma",
        descricao: "Exposição a traumas graves — especialmente na infância — produz alterações duradouras no eixo hipotálamo-hipófise-adrenal, resultando em resposta de estresse cronicamente desregulada.",
        detalhe:   "Van der Kolk (2014) e colaboradores documentaram que o TEPT não é apenas um transtorno psicológico, mas um estado de alteração fisiológica: o corpo literalmente 'guarda o placar'. Implica na necessidade de abordagens corporais (somatic, EMDR) além das verbais.",
        fonte:     "Van der Kolk, B. (2014). The Body Keeps the Score. Viking Press.",
        link:      "https://www.besselvanderkolk.com/resources/the-body-keeps-the-score",
        destaque:  false
    },
    {
        id: 5,
        titulo:    "Sono REM consolida memória emocional e processa medo",
        categoria: "Sono",
        descricao: "O sono REM desempenha papel central no processamento emocional: ativa a amígdala e o córtex pré-frontal para reprocessar memórias com carga afetiva e reduzir seu impacto.",
        detalhe:   "Walker (2017) demonstrou que privação de sono REM aumenta reatividade emocional em 60% e compromete a extinção do medo condicionado. Implicação clínica direta: qualidade do sono deve ser avaliada em todos os casos de ansiedade e trauma.",
        fonte:     "Walker, M. (2017). Why We Sleep. Scribner.",
        link:      "https://www.sleepdiplomat.com/",
        destaque:  false
    },
    {
        id: 6,
        titulo:    "Reavaliação cognitiva é mais eficaz que supressão",
        categoria: "Emoções",
        descricao: "Reinterpretar o significado de uma situação (reavaliação) reduz emoções negativas com menor custo cognitivo e fisiológico do que suprimir a expressão emocional.",
        detalhe:   "Gross & John (2003) compararam os dois estilos de regulação em estudo longitudinal: reavaliadores relataram mais emoções positivas, maior bem-estar e relacionamentos mais satisfatórios. Supressores apresentaram maior ativação cardiovascular e menor memória do evento.",
        fonte:     "Gross, J.J. & John, O.P. (2003). Individual differences in emotion regulation. JPSP, 85(2), 348–362.",
        link:      "https://pubmed.ncbi.nlm.nih.gov/12916575/",
        destaque:  false
    },
    {
        id: 7,
        titulo:    "Apego seguro na infância prediz regulação emocional adulta",
        categoria: "Relacionamentos",
        descricao: "Crianças com apego seguro desenvolvem capacidade superior de regulação emocional, tolerância ao estresse e competência interpessoal na vida adulta.",
        detalhe:   "Bowlby e Ainsworth estabeleceram as bases; estudos longitudinais de Sroufe et al. (2005) acompanharam 180 indivíduos por 30 anos e confirmaram que o estilo de apego infantil prediz saúde mental, qualidade de vínculos e funcionamento social adulto.",
        fonte:     "Sroufe, L.A. et al. (2005). The Development of the Person. Guilford Press.",
        link:      "https://www.guilford.com/books/The-Development-of-the-Person/Sroufe-Egeland-Carlson-Collins/9781593854560",
        destaque:  false
    },
    {
        id: 8,
        titulo:    "Exercício aeróbico tem eficácia equivalente ao antidepressivo",
        categoria: "Neurociência",
        descricao: "30 minutos de exercício aeróbico 3×/semana demonstrou eficácia equivalente à sertralina para depressão moderada, com menor taxa de recaída a longo prazo.",
        detalhe:   "Blumenthal et al. (1999, 2007) conduziram ensaios randomizados controlados e encontraram que exercício produzia remissão comparável ao antidepressivo. Após 10 meses, o grupo exercício apresentou metade das recaídas do grupo medicação. Mecanismo: BDNF, serotonina e neuroplasticidade hipocampal.",
        fonte:     "Blumenthal et al. (2007). Exercise and pharmacotherapy in the treatment of major depressive disorder. Psychosomatic Medicine, 69(7).",
        link:      "https://pubmed.ncbi.nlm.nih.gov/17846259/",
        destaque:  false
    },
    {
        id: 9,
        titulo:    "Desfusão cognitiva (ACT) reduz credibilidade dos pensamentos",
        categoria: "TCC",
        descricao: "Técnicas de desfusão da ACT reduzem a credibilidade e o desconforto associado a pensamentos negativos mais efetivamente do que reestruturação cognitiva em contextos de fusão intensa.",
        detalhe:   "Masuda et al. (2009) compararam desfusão vs. reestruturação cognitiva: a desfusão reduziu a credibilidade dos pensamentos autonegativos em 50% após uma única sessão. Especialmente útil em pacientes com alta ruminação e fusão cognitiva.",
        fonte:     "Masuda et al. (2009). Cognitive defusion versus thought distraction. Behaviour Research and Therapy, 47(10).",
        link:      "https://pubmed.ncbi.nlm.nih.gov/19643382/",
        destaque:  false
    },
    {
        id: 10,
        titulo:    "Trauma complexo afeta desenvolvimento do córtex pré-frontal",
        categoria: "Trauma",
        descricao: "Exposição a trauma crônico na infância reduz o volume do córtex pré-frontal, hipocampo e corpo caloso — estruturas centrais para regulação emocional e integração de memórias.",
        detalhe:   "De Bellis et al. (2002) documentaram que crianças com TEPT por abuso apresentavam menor volume total cerebral, com impacto maior nas regiões pré-frontais. Implicação: tratamentos precisam incluir regulação somática e janela de tolerância antes de processamento de memória.",
        fonte:     "De Bellis, M.D. et al. (2002). Brain structures in pediatric PTSD. Biological Psychiatry, 52(10).",
        link:      "https://pubmed.ncbi.nlm.nih.gov/12437944/",
        destaque:  false
    },
    {
        id: 11,
        titulo:    "Compaixão ativa sistema de cuidado (ocitocina)",
        categoria: "Emoções",
        descricao: "Práticas de autocompaixão e compaixão pelo outro ativam o sistema de cuidado baseado em ocitocina — distinto do sistema de ameaça ativado pela autocrítica.",
        detalhe:   "Gilbert (2010) propôs o modelo dos três sistemas de regulação emocional (ameaça, incentivo e calmante). Exercícios de compaixão ativam o sistema calmante, reduzindo cortisol e aumentando ocitocina — base do Compassion Focused Therapy (CFT).",
        fonte:     "Gilbert, P. (2010). The Compassionate Mind. Constable & Robinson.",
        link:      "https://www.paulgilbert.co.uk/",
        destaque:  false
    },
    {
        id: 12,
        titulo:    "MBSR reduz biomarcadores inflamatórios",
        categoria: "Mindfulness",
        descricao: "Participantes do programa MBSR de 8 semanas apresentaram redução significativa em IL-6, PCR e outros marcadores inflamatórios associados a estresse crônico.",
        detalhe:   "Rosenkranz et al. (2013) compararam MBSR com um programa de saúde ativa e encontraram que apenas o grupo mindfulness apresentou redução em marcadores inflamatórios cutâneos após estresse experimental. Mecanismo mediado por redução da reatividade da amígdala.",
        fonte:     "Rosenkranz et al. (2013). A comparison of mindfulness-based stress reduction and active control. Brain, Behavior, and Immunity.",
        link:      "https://pubmed.ncbi.nlm.nih.gov/23092711/",
        destaque:  false
    },
    {
        id: 13,
        titulo:    "Conexão social é o preditor mais robusto de longevidade",
        categoria: "Relacionamentos",
        descricao: "O Estudo de Harvard sobre Desenvolvimento Adulto, com 85 anos de dados, identificou qualidade dos relacionamentos — não dinheiro, fama ou genética — como o maior preditor de saúde e longevidade.",
        detalhe:   "Waldinger & Schulz (2023) publicaram resultados do maior estudo longitudinal sobre felicidade humana: vínculos calorosos protegem o cérebro da deterioração, mantêm a memória mais aguçada e predizem satisfação de vida mais do que qualquer outro fator avaliado.",
        fonte:     "Waldinger, R. & Schulz, M. (2023). The Good Life. Simon & Schuster.",
        link:      "https://www.goodlifeproject.com/",
        destaque:  false
    },
    {
        id: 14,
        titulo:    "Privação de sono amplifica reatividade emocional em 60%",
        categoria: "Sono",
        descricao: "Uma única noite de privação de sono aumenta em até 60% a reatividade da amígdala a estímulos negativos, desconectando-a do controle pré-frontal.",
        detalhe:   "Yoo et al. (2007) demonstraram em fMRI que privação de sono rompe a conectividade funcional entre amígdala e córtex pré-frontal medial — o mesmo padrão observado em transtornos de ansiedade. Implicação direta: sono deve ser tratado como intervenção terapêutica, não apenas como higiene.",
        fonte:     "Yoo et al. (2007). The human emotional brain without sleep. Current Biology, 17(20).",
        link:      "https://pubmed.ncbi.nlm.nih.gov/17956744/",
        destaque:  false
    },
    {
        id: 15,
        titulo:    "Exposição prolongada é o tratamento padrão ouro para TEPT",
        categoria: "Trauma",
        descricao: "A Terapia de Exposição Prolongada (PE) de Edna Foa apresenta as maiores taxas de remissão para TEPT entre todas as abordagens testadas em ensaios randomizados controlados.",
        detalhe:   "APA, WHO e NICE recomendam PE como tratamento de primeira linha para TEPT. Meta-análise de Watts et al. (2013) de 112 estudos encontrou tamanho de efeito de 1.57 para PE — superior a EMDR (1.43), CPT (1.50) e farmacoterapia (0.89).",
        fonte:     "Watts et al. (2013). Meta-analysis of the efficacy of treatments for PTSD. Journal of Clinical Psychiatry, 74(6).",
        link:      "https://pubmed.ncbi.nlm.nih.gov/23842024/",
        destaque:  false
    },
    {
        id: 16,
        titulo:    "Neurônios-espelho sustentam empatia e aprendizado observacional",
        categoria: "Neurociência",
        descricao: "O sistema de neurônios-espelho ativa as mesmas regiões cerebrais ao executar uma ação ou ao observar outro executá-la — base neural da empatia e do contágio emocional.",
        detalhe:   "Rizzolatti & Craighero (2004) descreveram o sistema de neurônios-espelho no córtex pré-motor e parietal inferior. Para a clínica, o sistema explica o contágio emocional terapeuta-paciente, a importância da expressão facial do clínico e a base da empatia encarnada.",
        fonte:     "Rizzolatti, G. & Craighero, L. (2004). The mirror-neuron system. Annual Review of Neuroscience, 27.",
        link:      "https://pubmed.ncbi.nlm.nih.gov/15217330/",
        destaque:  false
    },
    {
        id: 17,
        titulo:    "Gratidão fortalece redes neurais de emoções positivas",
        categoria: "Emoções",
        descricao: "Prática regular de gratidão aumenta atividade no córtex pré-frontal medial e no estriado ventral — regiões associadas a recompensa, conexão social e bem-estar.",
        detalhe:   "Fox et al. (2015) demonstraram em fMRI que pessoas com disposição para gratidão apresentavam maior ativação nessas regiões ao receber presentes. Emmons & McCullough (2003) mostraram que escrever sobre gratidão 1×/semana aumentou bem-estar subjetivo em 25% em 10 semanas.",
        fonte:     "Emmons, R.A. & McCullough, M.E. (2003). Counting blessings versus burdens. JPSP, 84(2), 377–389.",
        link:      "https://pubmed.ncbi.nlm.nih.gov/12585811/",
        destaque:  false
    },
    {
        id: 18,
        titulo:    "TCC baseada em mindfulness previne recaída depressiva",
        categoria: "Mindfulness",
        descricao: "MBCT (Mindfulness-Based Cognitive Therapy) reduz em 43% o risco de recaída em pacientes com 3 ou mais episódios depressivos — eficácia equivalente à manutenção com antidepressivos.",
        detalhe:   "Kuyken et al. (2016) conduziram ensaio clínico randomizado com 424 participantes comparando MBCT com antidepressivos. Resultados equivalentes para recaída, com vantagem para MBCT em bem-estar residual. NICE recomenda MBCT como primeira linha para prevenção de recaída.",
        fonte:     "Kuyken et al. (2016). Effectiveness of mindfulness-based cognitive therapy. The Lancet, 386(9988).",
        link:      "https://pubmed.ncbi.nlm.nih.gov/26360422/",
        destaque:  false
    }
];

// ============================================================================
// ESTADO
// ============================================================================

let filtroAtivo = "todos";
let termoBusca  = "";

// ============================================================================
// DESTAQUE DO DIA
// ============================================================================

function carregarDestaque() {
    const base  = Math.floor(Date.now() / 86400000);
    const index = base % insights.length;
    const item  = insights[index];

    document.getElementById("insightDestaqueTag").textContent    = item.categoria;
    document.getElementById("insightDestaqueTitulo").textContent = item.titulo;
    document.getElementById("insightDestaqueDesc").textContent   = item.descricao;
    document.getElementById("insightDestaqueFonte").innerHTML    =
        `<strong>Fonte:</strong> ${item.fonte}`;
    const link = document.getElementById("insightDestaqueLink");
    if (link) link.href = item.link;
}

// ============================================================================
// FILTRAR E RENDERIZAR
// ============================================================================

function filtrar() {
    return insights.filter(i => {
        const matchCat   = filtroAtivo === "todos" || i.categoria === filtroAtivo;
        const matchBusca = termoBusca === ""
            || i.titulo.toLowerCase().includes(termoBusca)
            || i.descricao.toLowerCase().includes(termoBusca);
        return matchCat && matchBusca;
    });
}

function renderizar() {
    const grid    = document.getElementById("insightsGridFull");
    const counter = document.getElementById("contadorInsights");
    if (!grid) return;

    const lista = filtrar();
    counter.textContent = `${lista.length} insight${lista.length !== 1 ? "s" : ""} encontrado${lista.length !== 1 ? "s" : ""}`;

    if (!lista.length) {
        grid.innerHTML = `
            <div class="ferramentas-vazio">
                <i class="fa-solid fa-magnifying-glass"></i>
                <p>Nenhum insight encontrado para os filtros selecionados.</p>
            </div>`;
        return;
    }

    grid.innerHTML = lista.map(item => `
        <article class="insight-card-full">
            <div class="insight-topo">
                <span class="insight-tag">${item.categoria}</span>
            </div>
            <h3 class="insight-titulo">${item.titulo}</h3>
            <p class="insight-descricao-full">${item.descricao}</p>
            <p class="insight-detalhe">${item.detalhe}</p>
            <div class="insight-rodape">
                <span class="insight-fonte-texto">
                    <i class="fa-solid fa-graduation-cap"></i> ${item.fonte}
                </span>
                <a class="btn-insight" href="${item.link}" target="_blank" rel="noopener noreferrer">
                    Ver estudo <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            </div>
        </article>
    `).join("");
}

// ============================================================================
// FILTROS
// ============================================================================

function iniciarFiltros() {
    document.getElementById("filtroInsight")?.querySelectorAll(".pill").forEach(btn => {
        btn.addEventListener("click", () => {
            document.getElementById("filtroInsight").querySelectorAll(".pill")
                .forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            filtroAtivo = btn.dataset.filtro;
            renderizar();
        });
    });

    document.getElementById("buscaInsight")?.addEventListener("input", e => {
        termoBusca = e.target.value.toLowerCase().trim();
        renderizar();
    });
}

// ============================================================================
// INIT
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
    carregarDestaque();
    renderizar();
    iniciarFiltros();
    console.log("💡 Insights carregados —", insights.length, "estudos.");
});