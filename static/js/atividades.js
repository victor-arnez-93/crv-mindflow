// ============================================================================
// atividades.js — MindFlow · Atividades Terapêuticas
// ============================================================================

const atividades = [
    {
        id: 1,
        nome:        "Termômetro Emocional",
        categoria:   "Emoções",
        duracaoMin:  10,
        duracaoTexto:"5–10 minutos",
        faixaEtaria: "Todas as idades",
        modalidade:  "Individual / Grupo",
        material:    "Folha A4, lápis de cor ou versão digital impressa.",
        objetivo:    "Identificar e nomear a intensidade das emoções vivenciadas através de representação visual.",
        embasamento: "A nomeação emocional (affect labeling) ativa o córtex pré-frontal e reduz a ativação da amígdala. Facilita a regulação emocional em crianças e adultos.",
        instrucoes: [
            "Apresente o desenho de um termômetro dividido em 5 níveis: 0 (calmo), 25, 50, 75 e 100 (em crise).",
            "Peça ao paciente que identifique em qual nível ele se encontra agora.",
            "Pergunte: 'Que emoção você está sentindo nesse nível?'",
            "Explore o que contribuiu para esse nível emocional.",
            "Discuta estratégias para mover o termômetro em direção ao nível desejado.",
            "Registre a emoção e o contexto para acompanhamento."
        ]
    },
    {
        id: 2,
        nome:        "Carta para si mesmo",
        categoria:   "Autoestima",
        duracaoMin:  20,
        duracaoTexto:"15–20 minutos",
        faixaEtaria: "Adolescentes e adultos",
        modalidade:  "Individual",
        material:    "Papel e caneta ou editor de texto.",
        objetivo:    "Desenvolver autocompaixão e promover diálogo interno mais gentil e acolhedor.",
        embasamento: "Exercício baseado no Mindful Self-Compassion (MSC) de Neff & Germer (2018). Ativa sistemas neurais de cuidado e reduz autocrítica crônica.",
        instrucoes: [
            "Peça ao paciente que pense em uma situação em que se critica muito.",
            "Oriente: 'Imagine que um amigo íntimo está passando pela mesma situação.'",
            "Pergunte: 'O que você diria a ele com cuidado e compreensão?'",
            "Agora, peça que escreva essa mesma carta para si mesmo.",
            "A carta deve reconhecer a dor, acolher sem julgamento e oferecer encorajamento.",
            "Leia a carta em voz alta e processe as emoções que emergem."
        ]
    },
    {
        id: 3,
        nome:        "Roda da Vida",
        categoria:   "Reflexão",
        duracaoMin:  15,
        duracaoTexto:"10–15 minutos",
        faixaEtaria: "Adultos",
        modalidade:  "Individual",
        material:    "Folha com círculo dividido em 8 áreas ou versão impressa.",
        objetivo:    "Avaliar visualmente o equilíbrio entre diferentes áreas da vida e identificar prioridades.",
        embasamento: "Ferramenta de coaching clínico adaptada para psicoterapia. Promove insight sobre desequilíbrios e facilita a definição de metas em abordagens humanistas e TCC.",
        instrucoes: [
            "Apresente o círculo dividido em 8 áreas: Saúde, Carreira, Finanças, Família, Amor, Amigos, Lazer e Desenvolvimento.",
            "Peça que o paciente atribua uma nota de 0 a 10 para cada área.",
            "O paciente preenche o círculo até o nível correspondente à nota.",
            "Observe visualmente as áreas mais preenchidas e as mais vazias.",
            "Pergunte: 'Qual área você mais gostaria de desenvolver agora?'",
            "Defina uma ação concreta para a área prioritária."
        ]
    },
    {
        id: 4,
        nome:        "Diário de Emoções",
        categoria:   "Emoções",
        duracaoMin:  10,
        duracaoTexto:"10 minutos/dia",
        faixaEtaria: "Adolescentes e adultos",
        modalidade:  "Tarefa entre sessões",
        material:    "Caderno ou aplicativo de notas.",
        objetivo:    "Aumentar a consciência emocional e identificar padrões de humor ao longo do tempo.",
        embasamento: "O monitoramento de emoções é componente central da TCC e da DBT. Aumenta a autoconsciência, reduz alexitimia e fornece dados clínicos valiosos para a sessão.",
        instrucoes: [
            "Oriente o paciente a reservar 10 minutos ao final do dia.",
            "Registre: data, situação relevante do dia, emoção principal (nome e intensidade 0–10).",
            "Anote o pensamento associado àquela emoção.",
            "Registre o comportamento resultante — o que fez com essa emoção.",
            "Ao final da semana, revise os registros em sessão.",
            "Identifique padrões: quais situações geram quais emoções?"
        ]
    },
    {
        id: 5,
        nome:        "Linha do Tempo de Vida",
        categoria:   "Reflexão",
        duracaoMin:  30,
        duracaoTexto:"20–30 minutos",
        faixaEtaria: "Adultos",
        modalidade:  "Individual",
        material:    "Papel A3 ou folha longa, caneta.",
        objetivo:    "Mapear eventos significativos da história pessoal para compreender padrões e narrativa de vida.",
        embasamento: "Técnica de construção narrativa usada em abordagens psicodinâmicas, Schema Therapy e terapias humanistas. Favorece integração autobiográfica e identificação de esquemas.",
        instrucoes: [
            "Trace uma linha horizontal representando a vida do paciente.",
            "Marque ao início o ano de nascimento e ao fim o ano atual.",
            "Peça que identifique os eventos mais marcantes — positivos e negativos.",
            "Posicione cada evento na linha com uma breve descrição.",
            "Observe os períodos de maior intensidade emocional.",
            "Explore padrões: 'O que esses eventos têm em comum?'",
            "Pergunte: 'Como esses eventos moldaram quem você é hoje?'"
        ]
    },
    {
        id: 6,
        nome:        "Mapa de Relacionamentos",
        categoria:   "Relacionamentos",
        duracaoMin:  20,
        duracaoTexto:"15–20 minutos",
        faixaEtaria: "Todas as idades",
        modalidade:  "Individual",
        material:    "Folha A4, lápis de cor.",
        objetivo:    "Visualizar a rede de vínculos afetivos e identificar qualidade, proximidade e reciprocidade nos relacionamentos.",
        embasamento: "Técnica baseada na teoria sistêmica e do apego. Permite mapear suporte social disponível e identificar padrões relacionais disfuncionais.",
        instrucoes: [
            "Desenhe um círculo no centro da folha representando o paciente.",
            "Em torno, desenhe círculos para as pessoas mais próximas — família, amigos, parceiro.",
            "A proximidade do círculo indica intimidade do vínculo.",
            "Use cores: verde para vínculos nutritivos, vermelho para conflituosos, amarelo para ambivalentes.",
            "Pergunte: 'Quem você chama quando está em sofrimento?'",
            "Explore: 'Que vínculos você gostaria de fortalecer ou transformar?'"
        ]
    },
    {
        id: 7,
        nome:        "Caixa de Ferramentas Emocionais",
        categoria:   "Ansiedade",
        duracaoMin:  15,
        duracaoTexto:"15 minutos",
        faixaEtaria: "Crianças e adolescentes",
        modalidade:  "Individual",
        material:    "Caixinha decorada, papéis coloridos, canetinhas.",
        objetivo:    "Criar recurso concreto com estratégias pessoais de regulação emocional para uso em momentos de crise.",
        embasamento: "Estratégia de externalização baseada em Narrative Therapy e DBT. Torna as habilidades de regulação tangíveis e acessíveis, especialmente para crianças.",
        instrucoes: [
            "Apresente uma caixinha decorada como 'caixa de ferramentas emocionais'.",
            "Explore com o paciente: 'O que ajuda quando você está muito agitado?'",
            "Escreva cada estratégia em um papel colorido separado.",
            "Inclua: respirações, músicas, fotos de pessoas queridas, afirmações.",
            "Decore a caixa com o paciente — o processo é terapêutico.",
            "Combine que, em momentos difíceis, o paciente abrirá a caixa antes de qualquer outra ação."
        ]
    },
    {
        id: 8,
        nome:        "Personagem Interno (Partes)",
        categoria:   "Emoções",
        duracaoMin:  25,
        duracaoTexto:"20–25 minutos",
        faixaEtaria: "Adultos",
        modalidade:  "Individual",
        material:    "Folha e caneta ou materiais de arte.",
        objetivo:    "Mapear partes ou aspectos internos conflitantes para promover integração e autocompreensão.",
        embasamento: "Baseado no modelo IFS (Internal Family Systems) de Richard Schwartz. Permite trabalhar conflitos internos sem patologizar — cada parte tem uma função protetora.",
        instrucoes: [
            "Peça ao paciente que identifique uma tensão interna recorrente.",
            "Explore: 'Parece que há uma parte que quer X e outra que quer Y?'",
            "Convide a dar nome ou forma a cada parte.",
            "Pergunte sobre cada parte: 'Qual é a intenção dela? O que ela teme?'",
            "Facilite um diálogo entre as partes — o que cada uma diria à outra?",
            "Explore como o Self pode mediar e integrar essas vozes internas."
        ]
    },
    {
        id: 9,
        nome:        "Colagem Terapêutica",
        categoria:   "Criatividade",
        duracaoMin:  30,
        duracaoTexto:"25–30 minutos",
        faixaEtaria: "Todas as idades",
        modalidade:  "Individual / Grupo",
        material:    "Revistas, tesoura, cola, cartolina.",
        objetivo:    "Acessar conteúdos emocionais através de linguagem não-verbal e expressão criativa.",
        embasamento: "A arteterapia facilita o acesso a conteúdos pré-verbais e inconscientes. A colagem reduz a resistência defensiva por não exigir habilidade técnica.",
        instrucoes: [
            "Ofereça revistas variadas, tesoura, cola e cartolina.",
            "Proponha um tema: 'Como você se sente agora' ou 'Como gostaria de se sentir'.",
            "Peça que escolha imagens, palavras e cores de forma intuitiva — sem pensar muito.",
            "Permita silêncio criativo durante 15–20 minutos.",
            "Ao finalizar, convide o paciente a apresentar a colagem.",
            "Explore: 'O que chama mais atenção? O que te surpreendeu ao escolher?'"
        ]
    },
    {
        id: 10,
        nome:        "Escudo de Identidade",
        categoria:   "Autoestima",
        duracaoMin:  20,
        duracaoTexto:"15–20 minutos",
        faixaEtaria: "Crianças e adolescentes",
        modalidade:  "Individual",
        material:    "Folha com desenho de escudo dividido em 4 quadrantes, lápis de cor.",
        objetivo:    "Fortalecer identidade positiva e autoconhecimento através de representação simbólica de si mesmo.",
        embasamento: "Técnica de construção de identidade baseada em Narrative Therapy. Contrapõe narrativas negativas dominantes com histórias alternativas de competência.",
        instrucoes: [
            "Apresente o escudo dividido em 4 quadrantes.",
            "Quadrante 1: 'Desenhe ou escreva algo em que você é bom.'",
            "Quadrante 2: 'Alguém que te admira e por quê.'",
            "Quadrante 3: 'Seu maior sonho ou desejo.'",
            "Quadrante 4: 'Uma palavra que representa quem você é.'",
            "Explore cada quadrante com curiosidade e validação.",
            "Afixe o escudo em lugar visível como lembrete de identidade positiva."
        ]
    },
    {
        id: 11,
        nome:        "Balão de Pensamentos",
        categoria:   "Infantil",
        duracaoMin:  10,
        duracaoTexto:"10 minutos",
        faixaEtaria: "Crianças (5–12 anos)",
        modalidade:  "Individual",
        material:    "Folha com personagem e balão de pensamento, lápis de cor.",
        objetivo:    "Ensinar crianças a identificar pensamentos automáticos e diferenciá-los de fatos.",
        embasamento: "Adaptação da TCC para crianças. A externalização do pensamento em formato de balão torna o conceito concreto e acessível para o desenvolvimento cognitivo infantil.",
        instrucoes: [
            "Mostre uma ilustração de um personagem em uma situação difícil.",
            "Aponte o balão de pensamento vazio: 'O que você acha que ele está pensando?'",
            "Preencha o balão com o pensamento identificado.",
            "Pergunte: 'Esse pensamento é verdade ou é só um pensamento?'",
            "Explore junto uma versão alternativa do pensamento.",
            "Desenhe um novo balão com o pensamento mais equilibrado."
        ]
    },
    {
        id: 12,
        nome:        "Árvore de Valores",
        categoria:   "Reflexão",
        duracaoMin:  20,
        duracaoTexto:"20 minutos",
        faixaEtaria: "Adultos",
        modalidade:  "Individual",
        material:    "Folha A4, caneta.",
        objetivo:    "Clarificar valores pessoais e sua relação com escolhas e comportamentos atuais.",
        embasamento: "Adaptação visual do trabalho de valores da ACT. Raízes representam valores, tronco representa ações alinhadas, galhos representam áreas de vida impactadas.",
        instrucoes: [
            "Desenhe uma árvore simples com raízes, tronco e galhos.",
            "Nas raízes: escreva 5 valores centrais (ex: liberdade, amor, honestidade).",
            "No tronco: escreva as ações do dia a dia que refletem esses valores.",
            "Nos galhos: escreva as áreas da vida impactadas por esses valores.",
            "Explore: 'Há galhos secos? Áreas em que seus valores não se expressam?'",
            "Defina uma ação para nutrir um galho negligenciado."
        ]
    },
    {
        id: 13,
        nome:        "Respiração com Movimento",
        categoria:   "Ansiedade",
        duracaoMin:  5,
        duracaoTexto:"5 minutos",
        faixaEtaria: "Todas as idades",
        modalidade:  "Individual / Grupo",
        material:    "Nenhum.",
        objetivo:    "Integrar respiração e movimento para ancorar no corpo e reduzir ansiedade de forma rápida.",
        embasamento: "A integração de movimento com respiração ativa a propriocepção e interrompe ciclos de hiperativação. Eficaz como intervenção rápida em sessão.",
        instrucoes: [
            "Peça que o paciente fique em pé ou sentado com espaço.",
            "Inspire levantando os braços lentamente acima da cabeça (4 segundos).",
            "No topo, segure a respiração por 2 segundos.",
            "Expire baixando os braços em arco até a lateral do corpo (6 segundos).",
            "Repita 5 vezes com olhos fechados.",
            "Ao finalizar, pergunte: 'O que percebe de diferente no seu corpo?'"
        ]
    },
    {
        id: 14,
        nome:        "Carta para o Problema",
        categoria:   "Reflexão",
        duracaoMin:  20,
        duracaoTexto:"15–20 minutos",
        faixaEtaria: "Adolescentes e adultos",
        modalidade:  "Individual",
        material:    "Papel e caneta.",
        objetivo:    "Externalizar o problema para criar distância psicológica e reduzir identificação com ele.",
        embasamento: "Técnica central da Narrative Therapy de Michael White. A externalização separa a pessoa do problema: 'o problema é o problema, não a pessoa é o problema'.",
        instrucoes: [
            "Identifique um problema que o paciente sente como parte de si (ex: 'ansiedade').",
            "Dê um nome ao problema — pode ser literal ou metafórico.",
            "Peça que escreva uma carta diretamente para esse problema.",
            "A carta pode expressar raiva, cansaço, curiosidade ou até gratidão.",
            "Explore: 'Quando o problema chegou? O que ele quer de você?'",
            "Pergunte: 'Se o problema não estivesse aqui, o que seria diferente?'"
        ]
    },
    {
        id: 15,
        nome:        "Inventário de Forças",
        categoria:   "Autoestima",
        duracaoMin:  15,
        duracaoTexto:"15 minutos",
        faixaEtaria: "Adolescentes e adultos",
        modalidade:  "Individual",
        material:    "Lista de forças de caráter (VIA) ou lista personalizada.",
        objetivo:    "Identificar e ampliar forças de caráter pessoais como base para resiliência e bem-estar.",
        embasamento: "Baseado na Psicologia Positiva de Seligman (2002). O foco nas forças — não apenas nos déficits — aumenta autoestima, engajamento e resiliência.",
        instrucoes: [
            "Apresente uma lista de forças de caráter (VIA: criatividade, coragem, bondade, etc.).",
            "Peça que o paciente identifique suas 5 forças mais presentes.",
            "Para cada força, peça um exemplo recente de uso.",
            "Explore: 'Como essa força já te ajudou em momentos difíceis?'",
            "Identifique uma força subutilizada que poderia ser desenvolvida.",
            "Defina como usar essa força intencionalmente esta semana."
        ]
    }
];

// ============================================================================
// ESTADO
// ============================================================================

let filtroCategoria = "todos";
let filtroDuracao   = "todos";
let termoBusca      = "";

// ============================================================================
// FILTRAR E RENDERIZAR
// ============================================================================

function filtrarAtiv() {
    return atividades.filter(a => {
        const matchCat  = filtroCategoria === "todos" || a.categoria === filtroCategoria;
        const matchDur  = filtroDuracao === "todos"
            || (filtroDuracao === "curta" && a.duracaoMin <= 10)
            || (filtroDuracao === "media" && a.duracaoMin > 10 && a.duracaoMin <= 20)
            || (filtroDuracao === "longa" && a.duracaoMin > 20);
        const matchBusca = termoBusca === ""
            || a.nome.toLowerCase().includes(termoBusca)
            || a.objetivo.toLowerCase().includes(termoBusca)
            || a.categoria.toLowerCase().includes(termoBusca);
        return matchCat && matchDur && matchBusca;
    });
}

function renderizarAtiv() {
    const grid    = document.getElementById("atividadesGrid");
    const counter = document.getElementById("contadorAtiv");
    if (!grid) return;

    const lista = filtrarAtiv();
    counter.textContent = `${lista.length} atividade${lista.length !== 1 ? "s" : ""} encontrada${lista.length !== 1 ? "s" : ""}`;

    if (!lista.length) {
        grid.innerHTML = `
            <div class="ferramentas-vazio">
                <i class="fa-solid fa-magnifying-glass"></i>
                <p>Nenhuma atividade encontrada para os filtros selecionados.</p>
            </div>`;
        return;
    }

    grid.innerHTML = lista.map(a => `
        <article class="ativ-card" data-id="${a.id}">
            <div class="ferr-card-topo">
                <span class="ferr-tag">${a.categoria}</span>
                <span class="ferr-duracao"><i class="fa-regular fa-clock"></i> ${a.duracaoTexto}</span>
            </div>
            <h3 class="ferr-titulo">${a.nome}</h3>
            <p class="ferr-objetivo">${a.objetivo}</p>
            <div class="ativ-badges">
                <span class="ativ-badge-item"><i class="fa-solid fa-users"></i> ${a.modalidade}</span>
                <span class="ativ-badge-item"><i class="fa-solid fa-child"></i> ${a.faixaEtaria}</span>
            </div>
            <button class="btn-ferr-ver" data-id="${a.id}">
                Ver atividade <i class="fa-solid fa-arrow-right"></i>
            </button>
        </article>
    `).join("");

    grid.querySelectorAll(".btn-ferr-ver").forEach(btn => {
        btn.addEventListener("click", () => abrirModalAtiv(parseInt(btn.dataset.id)));
    });
}

// ============================================================================
// MODAL
// ============================================================================

function abrirModalAtiv(id) {
    const a = atividades.find(x => x.id === id);
    if (!a) return;

    document.getElementById("modalAtivTag").textContent     = a.categoria;
    document.getElementById("modalAtivDuracao").textContent = a.duracaoTexto;
    document.getElementById("modalAtivTitulo").textContent  = a.nome;
    document.getElementById("modalAtivObjetivo").textContent= a.objetivo;
    document.getElementById("modalAtivEmb").textContent     = a.embasamento;
    document.getElementById("modalAtivMaterial").textContent= a.material;

    document.getElementById("modalAtivBadges").innerHTML = `
        <span class="ativ-badge-item"><i class="fa-solid fa-users"></i> ${a.modalidade}</span>
        <span class="ativ-badge-item"><i class="fa-solid fa-child"></i> ${a.faixaEtaria}</span>
    `;

    document.getElementById("modalAtivPassos").innerHTML =
        a.instrucoes.map(p => `<li>${p}</li>`).join("");

    document.getElementById("modalAtiv").classList.add("ativo");
    document.getElementById("modalAtivOverlay").classList.add("ativo");
    document.body.style.overflow = "hidden";
}

function fecharModalAtiv() {
    document.getElementById("modalAtiv").classList.remove("ativo");
    document.getElementById("modalAtivOverlay").classList.remove("ativo");
    document.body.style.overflow = "";
}

// ============================================================================
// IMPRIMIR
// ============================================================================

document.addEventListener("click", e => {
    if (e.target.closest("#modalAtivImprimir")) window.print();
});

// ============================================================================
// FILTROS
// ============================================================================

function iniciarFiltros() {
    document.getElementById("filtroCategoria")?.querySelectorAll(".pill").forEach(btn => {
        btn.addEventListener("click", () => {
            document.getElementById("filtroCategoria").querySelectorAll(".pill").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            filtroCategoria = btn.dataset.filtro;
            renderizarAtiv();
        });
    });

    document.getElementById("filtroDuracao")?.querySelectorAll(".pill").forEach(btn => {
        btn.addEventListener("click", () => {
            document.getElementById("filtroDuracao").querySelectorAll(".pill").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            filtroDuracao = btn.dataset.filtro;
            renderizarAtiv();
        });
    });

    document.getElementById("buscaAtividade")?.addEventListener("input", e => {
        termoBusca = e.target.value.toLowerCase().trim();
        renderizarAtiv();
    });

    document.getElementById("modalAtivClose")?.addEventListener("click", fecharModalAtiv);
    document.getElementById("modalAtivFechar")?.addEventListener("click", fecharModalAtiv);
    document.getElementById("modalAtivOverlay")?.addEventListener("click", fecharModalAtiv);
    document.addEventListener("keydown", e => { if (e.key === "Escape") fecharModalAtiv(); });
}

// ============================================================================
// INIT
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
    renderizarAtiv();
    iniciarFiltros();
    console.log("🧩 Atividades Terapêuticas carregadas —", atividades.length, "atividades.");
});