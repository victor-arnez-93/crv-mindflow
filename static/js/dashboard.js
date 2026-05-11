// ============================================================================
// dashboard.js — MindFlow Psicologia
// Psicologia • Psicoterapia • Neurociência
// ============================================================================

import {
    insightsClinicos,
    dadosCientificos,
    neuroInsights,
    frasesReflexivas
} from "./banco_interno.js";

// ============================================================================
// 1) FRASE PRINCIPAL ROTATIVA
// ============================================================================

const frasesPrincipais = [

    "O autoconhecimento não elimina a dor, mas transforma a forma como lidamos com ela.",

    "A escuta terapêutica vai além das palavras — ela observa emoções, silêncios e padrões.",

    "Neurociência e psicologia caminham juntas na compreensão do comportamento humano.",

    "Nem toda ansiedade é inimiga; às vezes ela é um sinal de que algo precisa de atenção.",

    "A mudança emocional começa quando o paciente se sente verdadeiramente compreendido."
];

let fraseIndex = 0;

function atualizarFrasePrincipal(){

    const el = document.getElementById("fraseRotativa");

    if(!el) return;

    el.style.opacity = 0;
    el.style.transform = "translateY(-10px)";

    setTimeout(() => {

        el.textContent = frasesPrincipais[fraseIndex];

        el.style.transition =
            "opacity .3s ease, transform .3s ease";

        el.style.opacity = 1;
        el.style.transform = "translateY(0)";

    }, 180);
}

function criarSetasFrase(){

    const container =
        document.getElementById("wrapperSetasFrase");

    if(!container) return;

    const wrapper = document.createElement("div");
    wrapper.className = "setas-frase-wrapper";

    const btnEsq = document.createElement("button");

    btnEsq.className = "seta-frase";
    btnEsq.innerHTML =
        `<i class="fas fa-chevron-left"></i>`;

    btnEsq.onclick = () => {

        fraseIndex =
            (fraseIndex - 1 + frasesPrincipais.length)
            % frasesPrincipais.length;

        atualizarFrasePrincipal();
    };

    const btnDir = document.createElement("button");

    btnDir.className = "seta-frase";

    btnDir.innerHTML =
        `<i class="fas fa-chevron-right"></i>`;

    btnDir.onclick = () => {

        fraseIndex =
            (fraseIndex + 1)
            % frasesPrincipais.length;

        atualizarFrasePrincipal();
    };

    wrapper.append(btnEsq, btnDir);

    container.appendChild(wrapper);
}

// ============================================================================
// 2) CARDS ROTATIVOS
// ============================================================================

let rotacaoIndex = 0;

function animarTroca(el){

    if(!el) return;

    el.style.transition =
        "opacity .25s ease, transform .25s ease";

    el.style.opacity = 0;
    el.style.transform = "translateY(-8px)";

    setTimeout(() => {

        el.style.opacity = 1;
        el.style.transform = "translateY(0)";

    }, 180);
}

function atualizarCardsRotativos(){

    const ids = [
        "textoDica",
        "textoEst1",
        "textoEst2",
        "textoHero"
    ];

    const bancos = [
        insightsClinicos,
        dadosCientificos,
        neuroInsights,
        frasesReflexivas
    ];

    ids.forEach((id, i) => {

        const el = document.getElementById(id);

        if(!el) return;

        animarTroca(el);

        setTimeout(() => {

            el.textContent =
                bancos[i][rotacaoIndex % bancos[i].length];

        }, 180);

    });

    rotacaoIndex++;
}

// ============================================================================
// 3) INSIGHTS PSICOLÓGICOS
// ============================================================================

function carregarInsights(){

    const ul = document.getElementById("insightsList");

    if(!ul) return;

    const selecionados = [...insightsClinicos]
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);

    ul.innerHTML = selecionados.map(txt => `
        <li>
            <span class="insight-texto">${txt}</span>
        </li>
    `).join("");
}

// ============================================================================
// 4) ARTIGOS / NOTÍCIAS
// ============================================================================

async function carregarNoticias(){

    const ul =
        document.getElementById("noticiasList");

    if(!ul) return;

    const feeds = [

        {
            nome: "APA",
            rss:
            "https://api.rss2json.com/v1/api.json?rss_url=https://www.apa.org/feeds/news.xml"
        },

        {
            nome: "Psychology Today",
            rss:
            "https://api.rss2json.com/v1/api.json?rss_url=https://www.psychologytoday.com/us/front/feed"
        },

        {
            nome: "Neuroscience News",
            rss:
            "https://api.rss2json.com/v1/api.json?rss_url=https://neurosciencenews.com/feed/"
        }
    ];

    const noticias = [];

    for(const feed of feeds){

        if(noticias.length >= 3) break;

        try{

            const resp = await fetch(feed.rss);
            const data = await resp.json();

            if(!data.items?.length) continue;

            const item = data.items[0];

            noticias.push({

                titulo: item.title,
                link: item.link,
                fonte: feed.nome
            });

        }catch{
            continue;
        }
    }

    if(!noticias.length){

        ul.innerHTML = `
            <li>
                <span class="insight-texto">
                    Não foi possível carregar notícias científicas.
                </span>
            </li>
        `;

        return;
    }

    ul.innerHTML = noticias.map(n => `

        <li>

            <div class="noticia-texto">
                ${n.titulo}
            </div>

            <div class="noticia-fonte">

                <a href="${n.link}"
                   target="_blank"
                   rel="noopener noreferrer">

                    ${n.fonte}

                </a>

            </div>

        </li>

    `).join("");
}

// ============================================================================
// 5) FOTO / AMBIENTE TERAPÊUTICO
// ============================================================================

function carregarFoto(){

    const imagens = [

        {
            url:"/static/imagens/psi1.jpg",
            titulo:"Escuta Terapêutica",
            legenda:
            "A qualidade da escuta influencia diretamente o vínculo terapêutico."
        },

        {
            url:"/static/imagens/psi2.jpg",
            titulo:"Neurociência Cognitiva",
            legenda:
            "O cérebro possui capacidade contínua de reorganização neural."
        },

        {
            url:"/static/imagens/psi3.jpg",
            titulo:"Saúde Emocional",
            legenda:
            "Regulação emocional está associada à consciência emocional."
        },

        {
            url:"/static/imagens/psi4.jpg",
            titulo:"Mindfulness",
            legenda:
            "Práticas de atenção plena auxiliam na redução de ansiedade."
        },

        {
            url:"/static/imagens/psi5.jpg",
            titulo:"Ambiente Clínico",
            legenda:
            "Ambientes acolhedores favorecem sensação de segurança emocional."
        }
    ];

    const index =
        Math.floor(Date.now() / 86400000)
        % imagens.length;

    const foto = imagens[index];

    const img =
        document.getElementById("fotoDia");

    const autor =
        document.getElementById("fotoAutor");

    const fonte =
        document.getElementById("fotoFonte");

    if(img){

        img.src = foto.url;
        img.alt = foto.titulo;
    }

    if(autor){

        autor.innerHTML =
            `Tema: <strong>${foto.titulo}</strong>`;
    }

    if(fonte){

        fonte.textContent = foto.legenda;
    }
}

// ============================================================================
// 6) TEMA CLÍNICO DO DIA
// ============================================================================

const temasClinicos = [

    {
        titulo:"Terapia Cognitivo-Comportamental",
        texto:
        "Identificação de pensamentos automáticos e distorções cognitivas."
    },

    {
        titulo:"Psicanálise",
        texto:
        "Exploração de conteúdos inconscientes e padrões emocionais."
    },

    {
        titulo:"Psicologia Humanista",
        texto:
        "Foco na autenticidade, empatia e potencial humano."
    },

    {
        titulo:"Neuropsicologia",
        texto:
        "Relação entre funcionamento cerebral e comportamento."
    },

    {
        titulo:"Mindfulness Clínico",
        texto:
        "Estratégias de atenção plena para manejo emocional."
    }
];

function carregarTemaClinico(){

    const container =
        document.getElementById("discDia");

    if(!container) return;

    const index =
        Math.floor(Date.now() / 86400000)
        % temasClinicos.length;

    const tema = temasClinicos[index];

    container.innerHTML = `

        <li>

            <span class="insight-texto">
                <strong>${tema.titulo}</strong>
            </span>

            <span class="insight-texto">
                ${tema.texto}
            </span>

        </li>
    `;
}

// ============================================================================
// 7) PERGUNTA REFLEXIVA
// ============================================================================

const perguntasReflexivas = [

    {
        pergunta:
        "O que você percebe que costuma evitar sentir?",

        insight:
        "Muitas emoções reprimidas aparecem em comportamentos indiretos."
    },

    {
        pergunta:
        "Você consegue identificar o que desencadeia sua ansiedade?",

        insight:
        "Reconhecer gatilhos emocionais aumenta consciência psicológica."
    },

    {
        pergunta:
        "Quais pensamentos mais influenciam seu comportamento diário?",

        insight:
        "Pensamentos automáticos afetam emoções e decisões."
    },

    {
        pergunta:
        "Como você reage quando perde o controle de uma situação?",

        insight:
        "A forma como lidamos com imprevisibilidade revela padrões emocionais."
    },

    {
        pergunta:
        "Você costuma acolher ou julgar suas emoções?",

        insight:
        "Autocompaixão favorece saúde mental e regulação emocional."
    }
];

function carregarPerguntaDia(){

    const container =
        document.getElementById("perguntaDia");

    if(!container) return;

    const index =
        Math.floor(Date.now() / 86400000)
        % perguntasReflexivas.length;

    const item =
        perguntasReflexivas[index];

    container.innerHTML = `

        <li>

            <span class="insight-texto">
                <strong>${item.pergunta}</strong>
            </span>

            <span class="insight-texto"
                  style="opacity:.8">

                ${item.insight}

            </span>

        </li>
    `;
}

// ============================================================================
// 8) SIMULADOR TERAPÊUTICO
// ============================================================================

window.analisarCompatibilidade = function(){

    const estado =
        document.getElementById("perfil1").value;

    const tecnica =
        document.getElementById("perfil2").value;

    const resultado =
        document.getElementById("resultadoCompatibilidade");

    if(!resultado) return;

    const respostas = {

        "Ansiedade|Respiração Diafragmática":{

            titulo:"Boa combinação terapêutica",

            descricao:
            "A respiração diafragmática auxilia no controle fisiológico da ansiedade.",

            dicas:[
                "Utilizar respiração lenta por 5 minutos",
                "Associar com consciência corporal",
                "Aplicar em momentos de pico emocional"
            ]
        },

        "Ansiedade|Mindfulness":{

            titulo:"Alta eficácia emocional",

            descricao:
            "Mindfulness reduz ruminação mental e aumenta presença consciente.",

            dicas:[
                "Foco na respiração",
                "Observar pensamentos sem julgamento",
                "Treinar constância diária"
            ]
        },

        "Estresse|Mindfulness":{

            titulo:"Regulação emocional positiva",

            descricao:
            "Atenção plena reduz hiperatividade cognitiva associada ao estresse.",

            dicas:[
                "Criar pausas conscientes",
                "Treinar percepção corporal",
                "Evitar multitarefa excessiva"
            ]
        },

        "Tristeza|Psicoeducação":{

            titulo:"Intervenção acolhedora",

            descricao:
            "Psicoeducação auxilia o paciente a compreender emoções e sintomas.",

            dicas:[
                "Validar emoções",
                "Evitar autocrítica excessiva",
                "Explicar funcionamento emocional"
            ]
        }
    };

    const chave = `${estado}|${tecnica}`;

    const dados = respostas[chave] || {

        titulo:"Estratégia complementar",

        descricao:
        "A combinação escolhida pode auxiliar dependendo do contexto clínico.",

        dicas:[
            "Adaptar à necessidade do paciente",
            "Avaliar intensidade emocional",
            "Associar técnicas quando necessário"
        ]
    };

    resultado.innerHTML = `

        <div style="display:flex; gap:12px; align-items:center; margin-bottom:14px;">

            <div style="
                width:60px;
                height:60px;
                border-radius:50%;
                background:linear-gradient(135deg,#7c5cff,#3ec7b7);
                display:flex;
                align-items:center;
                justify-content:center;
                color:#fff;
                font-size:22px;
                font-weight:700;
            ">
                <i class="fas fa-brain"></i>
            </div>

            <div>
                <h3 style="margin:0;">
                    ${dados.titulo}
                </h3>

                <p style="margin:4px 0 0;">
                    ${dados.descricao}
                </p>
            </div>

        </div>

        <h4 style="
            margin-bottom:10px;
            color:var(--mind-primaria);
        ">
            Estratégias sugeridas:
        </h4>

        <ul style="
            padding-left:18px;
            line-height:1.7;
        ">
            ${dados.dicas.map(d =>
                `<li>${d}</li>`
            ).join("")}
        </ul>
    `;

    resultado.classList.add("show");
};

// ============================================================================
// 9) REDIRECIONAMENTOS
// ============================================================================

window.irParaSistema = function(tipo){

    const urls = {

        ferramentas:
            "ferramentas.html",

        atividades:
            "atividades.html"
    };

    const url = urls[tipo];

    if(!url) return;

    window.location.href = url;
};

// ============================================================================
// 10) IMAGEM POR TEMA
// ============================================================================

function atualizarImagemTema(){

    const img =
        document.getElementById("imgCardPrincipal");

    if(!img) return;

    const tema =
        document.documentElement
            .getAttribute("data-theme");

    img.src = tema === "dark"
        ? "static/imagens/hero_psicologia_dark.jpg"
        : "static/imagens/hero_psicologia_light.jpg";
}

// ============================================================================
// INICIALIZAR
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {

    atualizarFrasePrincipal();

    criarSetasFrase();

    atualizarCardsRotativos();

    carregarInsights();

    carregarNoticias();

    carregarFoto();

    carregarTemaClinico();

    carregarPerguntaDia();

    atualizarImagemTema();

    document
        .getElementById("btnSessao")
        ?.addEventListener("click", () =>
            irParaSistema("ferramentas")
        );

    document
        .getElementById("btnAtividades")
        ?.addEventListener("click", () =>
            irParaSistema("atividades")
        );

    const observer =
        new MutationObserver(atualizarImagemTema);

    observer.observe(

        document.documentElement,

        {
            attributes:true,
            attributeFilter:["data-theme"]
        }
    );

    setInterval(
        atualizarCardsRotativos,
        20000
    );
});