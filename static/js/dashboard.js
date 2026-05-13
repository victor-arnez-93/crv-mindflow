// ============================================================================
// dashboard.js — MindFlow Psicologia v2.1
// ============================================================================

import {
    frasesTerapeuticas,
    atividadesDestaque,
    imagensHero,
    perguntasReflexivas,
    fotoDoDia,
    tecnicasRapidas,
    conceitosDoDia,
    abordagensDestaque
} from "./banco_clinico.js";

// ============================================================================
// UTILITÁRIOS
// ============================================================================

function getPeriodoIndex() {
    const h = new Date().getHours();
    return (h >= 6 && h < 18) ? 0 : 1;
}

function animarTroca(el, cb) {
    if (!el) return;
    el.style.transition = "opacity 0.25s ease, transform 0.25s ease";
    el.style.opacity    = "0";
    el.style.transform  = "translateY(-8px)";
    setTimeout(() => {
        cb();
        el.style.opacity   = "1";
        el.style.transform = "translateY(0)";
    }, 250);
}

// ============================================================================
// 1) HERO DINÂMICA
// ============================================================================

let heroIndex = 0;

function atualizarHero() {
    const titulo    = document.getElementById("heroTitulo");
    const subtitulo = document.getElementById("heroSubtitulo");
    const legenda   = document.getElementById("heroLegenda");
    const imagem    = document.getElementById("heroImagem");
    if (!titulo || !imagem) return;

    const tema = document.documentElement.getAttribute("data-theme");
    const hero = imagensHero[heroIndex % imagensHero.length];

    [titulo, subtitulo, legenda, imagem].forEach(el => {
        if (el) { el.style.opacity = "0"; el.style.transition = "opacity 0.3s ease"; }
    });

    setTimeout(() => {
        titulo.textContent    = hero.titulo;
        subtitulo.textContent = hero.subtitulo;
        legenda.textContent   = hero.legenda;
        imagem.src = tema === "dark" ? hero.imagemDark : hero.imagemLight;
        [titulo, subtitulo, legenda, imagem].forEach(el => {
            if (el) el.style.opacity = "1";
        });
    }, 300);
}

function proximaHero() { heroIndex++; atualizarHero(); }

// ============================================================================
// 2) FRASE TERAPÊUTICA ROTATIVA
// ============================================================================

let fraseAtual = 0;

function carregarFraseDia() {
    const elFrase     = document.getElementById("fraseRotativa");
    const elAutor     = document.getElementById("fraseAutorDia");
    const elCategoria = document.getElementById("fraseCategoriaTag");
    if (!elFrase) return;

    const item = frasesTerapeuticas[fraseAtual % frasesTerapeuticas.length];

    animarTroca(elFrase, () => {
        elFrase.textContent = `"${item.frase}"`;
        if (elAutor)     elAutor.textContent     = `— ${item.autor}`;
        if (elCategoria) elCategoria.textContent = item.categoria;
    });

    fraseAtual++;
}

// ============================================================================
// 3) FOTO DO DIA
// ============================================================================

function carregarFotoDoDia() {
    const img    = document.getElementById("fotoDiaImg");
    const temaEl = document.getElementById("fotoDiaTema");
    const legEl  = document.getElementById("fotoDiaLegenda");
    if (!img) return;

    const base  = Math.floor(Date.now() / 86400000);
    const index = (base * 2 + getPeriodoIndex()) % fotoDoDia.length;
    const foto  = fotoDoDia[index];

    img.style.transition = "opacity 0.3s ease";
    img.style.opacity    = "0";
    setTimeout(() => {
        img.src = foto.imagem;
        img.alt = foto.tema;
        if (temaEl) temaEl.textContent = foto.tema;
        if (legEl)  legEl.textContent  = foto.legenda;
        img.style.opacity = "1";
    }, 300);
}

// ============================================================================
// 4) INSIGHTS GRID — 2 frases do banco, rotação a cada 20s
// ============================================================================

let fraseInsightIdx = Math.floor(Math.random() * frasesTerapeuticas.length);

function carregarInsights() {
    const grid = document.getElementById("insightsGrid");
    if (!grid) return;

    const f1 = frasesTerapeuticas[fraseInsightIdx % frasesTerapeuticas.length];
    const f2 = frasesTerapeuticas[(fraseInsightIdx + 1) % frasesTerapeuticas.length];

    const montar = () => {
        grid.innerHTML = [f1, f2].map(f => `
            <div class="insight-home-card">
                <span class="insight-home-cat">${f.categoria}</span>
                <blockquote class="insight-home-frase">"${f.frase}"</blockquote>
                <span class="insight-home-autor-nome">— ${f.autor}</span>
            </div>`).join("");
        requestAnimationFrame(() => {
            grid.style.transition = "opacity 0.4s ease, transform 0.4s ease";
            grid.style.opacity    = "1";
            grid.style.transform  = "translateY(0)";
        });
    };

    grid.style.opacity   = "0";
    grid.style.transform = "translateY(6px)";
    setTimeout(montar, 300);
}

function iniciarRotacaoInsights() {
    setInterval(() => {
        fraseInsightIdx = (fraseInsightIdx + 2) % frasesTerapeuticas.length;
        carregarInsights();
    }, 20000);
}

// ============================================================================
// 5) NOTÍCIAS — FONTES APROVADAS (Veja, CNN Brasil, CFP, SBP)
// ============================================================================

async function carregarNoticias() {
    const ul = document.getElementById("noticiasList");
    if (!ul) return;

    ul.innerHTML = `<li class="noticia-loading"><i class="fa-solid fa-circle-notch fa-spin"></i> Carregando notícias...</li>`;

const feeds = [
    { nome: "Veja",       rss: "https://api.rss2json.com/v1/api.json?rss_url=https://veja.abril.com.br/noticias-sobre/psicologia/feed/",  url: "https://veja.abril.com.br/noticias-sobre/psicologia/" },
    { nome: "Forbes",     rss: "https://api.rss2json.com/v1/api.json?rss_url=https://forbes.com.br/noticias-sobre/psicologia/feed/",      url: "https://forbes.com.br/noticias-sobre/psicologia/" },
    { nome: "Metropoles", rss: "https://api.rss2json.com/v1/api.json?rss_url=https://www.metropoles.com/tag/psicologia/feed/",            url: "https://www.metropoles.com/tag/psicologia" }
];

    const noticias = [];

    for (const feed of feeds) {
        if (noticias.length >= 3) break;
        try {
            const resp = await fetch(feed.rss, { signal: AbortSignal.timeout(6000) });
            const data = await resp.json();
            if (!data.items?.length) throw new Error("sem itens");
            const item = data.items[0];
            noticias.push({
                titulo: item.title,
                link:   item.link,
                fonte:  feed.nome,
                home:   feed.url
            });
        } catch {
            console.warn(`[MindFlow] feed falhou: ${feed.nome}`);
        }
    }

    if (!noticias.length) {
        ul.innerHTML = `<li class="noticia-loading"><i class="fa-solid fa-satellite-dish"></i> Nenhuma notícia disponível no momento.</li>`;
        return;
    }

    ul.innerHTML = noticias.map(n => `
        <li class="noticia-item">
            <a class="noticia-titulo-link" href="${n.link}" target="_blank" rel="noopener noreferrer">
                ${n.titulo}
            </a>
            <a class="noticia-fonte-badge" href="${n.home}" target="_blank" rel="noopener noreferrer">
                <i class="fa-solid fa-link"></i> ${n.fonte}
            </a>
        </li>
    `).join("");
}

// ============================================================================
// 6) TÉCNICA DO DIA
// ============================================================================

function carregarTecnicaDia() {
    const elNome      = document.getElementById("tecnicaNome");
    const elObjetivo  = document.getElementById("tecnicaObjetivo");
    const elDuracao   = document.getElementById("tecnicaDuracao");
    const elCategoria = document.getElementById("tecnicaCategoria");
    if (!elNome) return;

    const base  = Math.floor(Date.now() / 86400000);
    const index = (base * 2 + getPeriodoIndex()) % tecnicasRapidas.length;
    const t     = tecnicasRapidas[index];

    const card = document.getElementById("tecnicaDiaCard");
    if (card) animarTroca(card, () => {
        elNome.textContent      = t.nome;
        elObjetivo.textContent  = t.objetivo;
        elDuracao.textContent   = t.duracao;
        elCategoria.textContent = t.categoria;
    });
}

// ============================================================================
// 6b) CONCEITO DO DIA
// ============================================================================

function carregarConceitoDia() {
    const en  = document.getElementById("conceitoNome");
    const ed  = document.getElementById("conceitoDef");
    const er  = document.getElementById("conceitoRef");
    const box = document.getElementById("conceitoBox");
    if (!en) return;

    const base  = Math.floor(Date.now() / 86400000);
    const index = (base * 2 + getPeriodoIndex()) % conceitosDoDia.length;
    const c     = conceitosDoDia[index];

    animarTroca(box, () => {
        en.textContent = c.nome;
        ed.textContent = c.def;
        if (er) er.innerHTML = `<strong>Referência:</strong> ${c.ref}`;
    });
}

// ============================================================================
// 6c) PERGUNTA REFLEXIVA
// ============================================================================

function carregarPerguntaReflexiva() {
    const el = document.getElementById("perguntaReflexiva");
    if (!el) return;

    const base  = Math.floor(Date.now() / 86400000);
    const index = (base * 2 + getPeriodoIndex()) % perguntasReflexivas.length;

    animarTroca(el, () => {
        el.innerHTML = `
            <div class="pergunta-card">
                <div class="pergunta-icon"><i class="fa-solid fa-comments"></i></div>
                <div class="pergunta-conteudo">
                    <span class="pergunta-label">Reflexão terapêutica</span>
                    <h3 class="pergunta-texto">${perguntasReflexivas[index]}</h3>
                </div>
            </div>`;
    });
}

// ============================================================================
// 6d) ABORDAGEM EM DESTAQUE
// ============================================================================

function carregarAbordagemDestaque() {
    const elSigla    = document.getElementById("abordagemSigla");
    const elNome     = document.getElementById("abordagemNome");
    const elPremissa = document.getElementById("abordagemPremissa");
    const elTecnica  = document.getElementById("abordagemTecnicaNome");
    const elDesc     = document.getElementById("abordagemDescricao");
    const card       = document.getElementById("abordagemCard");
    if (!elNome) return;

    const base  = Math.floor(Date.now() / 86400000);
    const index = (base * 2 + getPeriodoIndex()) % abordagensDestaque.length;
    const a     = abordagensDestaque[index];

    animarTroca(card, () => {
        elSigla.textContent    = a.sigla;
        elNome.textContent     = a.nome;
        elPremissa.textContent = a.premissa;
        elTecnica.textContent  = a.tecnica;
        elDesc.textContent     = a.descricao;
        card.style.setProperty("--cor-primaria", a.cor);
    });
}

// ============================================================================
// 7) ATIVIDADE DESTAQUE
// ============================================================================

let atividadeAtual = 0;

function carregarAtividadeDestaque() {
    const container = document.getElementById("atividadeDestaque");
    if (!container) return;

    const atividade = atividadesDestaque[atividadeAtual % atividadesDestaque.length];

    animarTroca(container, () => {
        container.innerHTML = `
            <div class="atividade-destaque-card">
                <div class="atividade-destaque-topo">
                    <span class="atividade-badge">${atividade.categoria}</span>
                    <span class="atividade-tempo"><i class="fa-regular fa-clock"></i> ${atividade.duracao}</span>
                </div>
                <h3 class="atividade-titulo">${atividade.titulo}</h3>
                <p class="atividade-desc">${atividade.descricao}</p>
                <div class="atividade-actions">
                    <button class="btn-gradient" id="btnAbrirAtividade">
                        <i class="fa-solid fa-play"></i> Abrir atividade
                    </button>
                    <button class="btn-primary" id="btnCompartilharAtividade">
                        <i class="fa-solid fa-share-nodes"></i> Compartilhar
                    </button>
                </div>
            </div>`;
    });

    atividadeAtual++;
}

// ============================================================================
// 8) IMAGEM CARD PRINCIPAL — sincroniza com tema
// ============================================================================

function atualizarImagemTema() {
    const img = document.getElementById("imgCardPrincipal");
    if (!img) return;
    const tema = document.documentElement.getAttribute("data-theme");
    img.src = tema === "dark"
        ? "static/imagens/imgfundo2.png"
        : "static/imagens/imgfundo1.png";
}

// ============================================================================
// 9) ANIMAÇÕES DE ENTRADA
// ============================================================================

function iniciarAnimacoes() {
    const seletores = [
        ".insight-home-card", ".noticia-item", ".atividade-destaque-card",
        ".kpi-item", ".alerta-item", ".conceito-box", ".pergunta-card"
    ];
    document.querySelectorAll(seletores.join(",")).forEach((el, i) => {
        el.style.opacity   = "0";
        el.style.transform = "translateY(16px)";
        setTimeout(() => {
            el.style.transition = "opacity 0.45s ease, transform 0.45s ease";
            el.style.opacity    = "1";
            el.style.transform  = "translateY(0)";
        }, 80 * i);
    });
}

// ============================================================================
// 10) OBSERVER DE TEMA
// ============================================================================

function iniciarObserverTema() {
    const observer = new MutationObserver(() => {
        atualizarHero();
        atualizarImagemTema();
    });
    observer.observe(document.documentElement, {
        attributes: true, attributeFilter: ["data-theme"]
    });
}

// ============================================================================
// 11) AGENDAMENTO 06h / 18h
// ============================================================================

function agendarAtualizacaoPeriodo() {
    const agora   = new Date();
    const proximo = new Date();
    const h       = agora.getHours();

    if      (h < 6)  proximo.setHours(6,  0, 0, 0);
    else if (h < 18) proximo.setHours(18, 0, 0, 0);
    else { proximo.setDate(proximo.getDate() + 1); proximo.setHours(6, 0, 0, 0); }

    const ms = proximo.getTime() - agora.getTime();
    console.log(`⏱ MindFlow: próxima atualização em ${Math.round(ms / 1000)}s`);

    setTimeout(() => {
        carregarFotoDoDia();
        carregarPerguntaReflexiva();
        carregarTecnicaDia();
        carregarConceitoDia();
        carregarAbordagemDestaque();
        agendarAtualizacaoPeriodo();
    }, ms);
}

// ============================================================================
// 12) EVENTOS
// ============================================================================

function iniciarEventos() {
    document.addEventListener("click", e => {
        if (e.target.closest("#btnAbrirAtividade"))
            window.location.href = "atividades.html";

        if (e.target.closest("#btnCompartilharAtividade") && navigator.share)
            navigator.share({
                title: "MindFlow Psicologia",
                text:  "Confira esta atividade terapêutica do MindFlow.",
                url:   window.location.href
            });
    });
}

// ============================================================================
// INIT
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
    atualizarHero();
    atualizarImagemTema();
    carregarFraseDia();
    carregarFotoDoDia();
    carregarInsights();
    carregarNoticias();
    carregarTecnicaDia();
    carregarConceitoDia();
    carregarPerguntaReflexiva();
    carregarAbordagemDestaque();
    carregarAtividadeDestaque();
    iniciarRotacaoInsights();
    iniciarObserverTema();
    iniciarEventos();
    agendarAtualizacaoPeriodo();

    setTimeout(iniciarAnimacoes, 300);

    setInterval(proximaHero,      15000); // hero a cada 15s
    setInterval(carregarFraseDia, 12000); // frase a cada 12s

    console.log("🧠 MindFlow Dashboard carregado — v2.1");
});