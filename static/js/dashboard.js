// ============================================================================
// dashboard.js — MindFlow Psicologia
// Dashboard Inteligente • Psicologia • Neurociência
// ============================================================================

import {

    frasesTerapeuticas,
    insightsClinicos,
    atividadesDestaque,
    imagensHero,
    perguntasReflexivas,
    fotoDoDia

} from "./banco_clinico.js";

// ============================================================================
// HERO DINÂMICA
// ============================================================================

let heroIndex = 0;

function atualizarHero(){

    const titulo =
        document.getElementById(
            "heroTitulo"
        );

    const subtitulo =
        document.getElementById(
            "heroSubtitulo"
        );

    const legenda =
        document.getElementById(
            "heroLegenda"
        );

    const imagem =
        document.getElementById(
            "heroImagem"
        );

    if(
        !titulo ||
        !subtitulo ||
        !legenda ||
        !imagem
    ) return;

    const tema =
        document.documentElement
            .getAttribute("data-theme");

    const hero =
        imagensHero[
            heroIndex %
            imagensHero.length
        ];

    titulo.style.opacity = 0;
    subtitulo.style.opacity = 0;
    legenda.style.opacity = 0;
    imagem.style.opacity = 0;

    setTimeout(() => {

        titulo.textContent =
            hero.titulo;

        subtitulo.textContent =
            hero.subtitulo;

        legenda.textContent =
            hero.legenda;

        imagem.src =
            tema === "dark"
            ? hero.imagemDark
            : hero.imagemLight;

        titulo.style.opacity = 1;
        subtitulo.style.opacity = 1;
        legenda.style.opacity = 1;
        imagem.style.opacity = 1;

    },250);
}

function proximaHero(){

    heroIndex++;

    atualizarHero();
}

// ============================================================================
// FRASE TERAPÊUTICA
// ============================================================================

let fraseAtual = 0;

function carregarFraseDia(){

    const frase =
        document.getElementById(
            "fraseDia"
        );

    const autor =
        document.getElementById(
            "fraseAutor"
        );

    const categoria =
        document.getElementById(
            "fraseCategoria"
        );

    if(
        !frase ||
        !autor ||
        !categoria
    ) return;

    const item =
        frasesTerapeuticas[
            fraseAtual %
            frasesTerapeuticas.length
        ];

    frase.style.opacity = 0;

    setTimeout(() => {

        frase.textContent =
            `"${item.frase}"`;

        autor.textContent =
            item.autor;

        categoria.textContent =
            item.categoria;

        frase.style.opacity = 1;

    },250);

    fraseAtual++;
}

// ============================================================================
// FOTO DO DIA
// ============================================================================

let fotoAtual = 0;

function carregarFotoDoDia(){

    const img =
        document.getElementById(
            "fotoDiaImg"
        );

    const tema =
        document.getElementById(
            "fotoDiaTema"
        );

    const legenda =
        document.getElementById(
            "fotoDiaLegenda"
        );

    if(
        !img ||
        !tema ||
        !legenda
    ) return;

    const foto =
        fotoDoDia[
            fotoAtual %
            fotoDoDia.length
        ];

    img.style.opacity = 0;

    setTimeout(() => {

        img.src =
            foto.imagem;

        tema.textContent =
            foto.tema;

        legenda.textContent =
            foto.legenda;

        img.style.opacity = 1;

    },250);

    fotoAtual++;
}

// ============================================================================
// INSIGHTS CIENTÍFICOS
// ============================================================================

function carregarInsights(){

    const grid =
        document.getElementById(
            "insightsGrid"
        );

    if(!grid) return;

    const selecionados =
        [...insightsClinicos]
        .sort(() => Math.random() - 0.5)
        .slice(0,4);

    grid.innerHTML =
        selecionados.map(item => `

            <article class="insight-card">

                <div class="insight-topo">

                    <span class="insight-tag">

                        ${item.categoria}

                    </span>

                </div>

                <h3 class="insight-titulo">

                    ${item.titulo}

                </h3>

                <p class="insight-descricao">

                    ${item.descricao}

                </p>

                <div class="insight-footer">

                    <span>

                        ${item.fonte}

                    </span>

                    <button
                        class="btn-insight"
                        onclick="window.open('${item.link}','_blank')"
                    >

                        Ver mais

                    </button>

                </div>

            </article>

        `).join("");
}

// ============================================================================
// ATIVIDADE DESTAQUE
// ============================================================================

let atividadeAtual = 0;

function carregarAtividadeDestaque(){

    const container =
        document.getElementById(
            "atividadeDestaque"
        );

    if(!container) return;

    const atividade =
        atividadesDestaque[
            atividadeAtual %
            atividadesDestaque.length
        ];

    container.innerHTML = `

        <div class="atividade-destaque-card">

            <div class="atividade-destaque-topo">

                <span class="atividade-badge">

                    ${atividade.categoria}

                </span>

                <span class="atividade-tempo">

                    ${atividade.duracao}

                </span>

            </div>

            <h3>

                ${atividade.titulo}

            </h3>

            <p>

                ${atividade.descricao}

            </p>

            <div class="atividade-actions">

                <button
                    class="btn-primary"
                    id="btnAbrirAtividade"
                >

                    Abrir atividade

                </button>

                <button
                    class="btn-outline"
                    id="btnCompartilharAtividade"
                >

                    Compartilhar

                </button>

            </div>

        </div>

    `;

    atividadeAtual++;
}

// ============================================================================
// PERGUNTA REFLEXIVA
// ============================================================================

let perguntaAtual = 0;

function carregarPerguntaReflexiva(){

    const el =
        document.getElementById(
            "perguntaReflexiva"
        );

    if(!el) return;

    const pergunta =
        perguntasReflexivas[
            perguntaAtual %
            perguntasReflexivas.length
        ];

    el.innerHTML = `

        <div class="pergunta-card">

            <div class="pergunta-icon">

                <i class="fa-solid fa-comments"></i>

            </div>

            <div class="pergunta-conteudo">

                <span class="pergunta-label">

                    Reflexão terapêutica

                </span>

                <h3>

                    ${pergunta}

                </h3>

            </div>

        </div>

    `;

    perguntaAtual++;
}

// ============================================================================
// ANIMAÇÕES
// ============================================================================

function iniciarAnimacoes(){

    const elementos =
        document.querySelectorAll(
            `
            .insight-card,
            .noticia-card,
            .atividade-destaque-card,
            .foto-dia-card,
            .frase-card
            `
        );

    elementos.forEach((el,index) => {

        el.style.opacity = 0;
        el.style.transform =
            "translateY(18px)";

        setTimeout(() => {

            el.style.transition =
                "all .5s ease";

            el.style.opacity = 1;

            el.style.transform =
                "translateY(0)";

        },100 * index);

    });
}

// ============================================================================
// OBSERVADOR TEMA
// ============================================================================

function iniciarObserverTema(){

    const observer =
        new MutationObserver(
            atualizarHero
        );

    observer.observe(

        document.documentElement,

        {
            attributes:true,
            attributeFilter:["data-theme"]
        }
    );
}

// ============================================================================
// EVENTOS
// ============================================================================

function iniciarEventos(){

    document.addEventListener(
        "click",
        (e) => {

            // ABRIR ATIVIDADE

            if(
                e.target.id
                ===
                "btnAbrirAtividade"
            ){

                window.location.href =
                    "atividades.html";
            }

            // COMPARTILHAR

            if(
                e.target.id
                ===
                "btnCompartilharAtividade"
            ){

                if(navigator.share){

                    navigator.share({

                        title:
                            "MindFlow Psicologia",

                        text:
                            "Confira esta atividade terapêutica do MindFlow.",

                        url:
                            window.location.href

                    });

                }
            }
        }
    );
}

// ============================================================================
// INIT
// ============================================================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        atualizarHero();

        carregarFraseDia();

        carregarFotoDoDia();

        carregarInsights();

        carregarAtividadeDestaque();

        carregarPerguntaReflexiva();

        iniciarAnimacoes();

        iniciarObserverTema();

        iniciarEventos();

        // HERO

        setInterval(
            proximaHero,
            15000
        );

        // FRASES

        setInterval(
            carregarFraseDia,
            12000
        );

        // FOTO

        setInterval(
            carregarFotoDoDia,
            18000
        );

        // ATIVIDADE

        setInterval(
            carregarAtividadeDestaque,
            20000
        );

        // PERGUNTA

        setInterval(
            carregarPerguntaReflexiva,
            16000
        );

        console.log(
            "🧠 Dashboard MindFlow carregado."
        );
    }
);