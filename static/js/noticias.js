// ============================================================================
// NOTICIAS.JS — MINDFLOW
// Feeds RSS aprovados — adapta ao #noticiasList existente no dashboard
// ============================================================================

const RSS_FEEDS = [
    // ── PRINCIPAIS ────────────────────────────────────────────────────────────
    {
        nome:      "CNN Brasil",
        rss:       "https://api.rss2json.com/v1/api.json?rss_url=https://www.cnnbrasil.com.br/tudo-sobre/psicologia/feed/",
        limite:    2,
        categoria: "Psicologia"
    },
    {
        nome:      "Veja",
        rss:       "https://api.rss2json.com/v1/api.json?rss_url=https://veja.abril.com.br/noticias-sobre/psicologia/feed/",
        limite:    2,
        categoria: "Psicologia"
    },
    {
        nome:      "BBC Brasil",
        rss:       "https://api.rss2json.com/v1/api.json?rss_url=https://feeds.bbci.co.uk/portuguese/rss.xml",
        limite:    2,
        categoria: "Saúde Mental"
    },
    // ── BACKUP ────────────────────────────────────────────────────────────────
    {
        nome:      "CFP",
        rss:       "https://api.rss2json.com/v1/api.json?rss_url=https://site.cfp.org.br/feed/",
        limite:    2,
        categoria: "Psicologia"
    },
    {
        nome:      "SBP",
        rss:       "https://api.rss2json.com/v1/api.json?rss_url=https://sbponline.org.br/feed/",
        limite:    2,
        categoria: "Pesquisa"
    },
    // ── CIENTÍFICO ────────────────────────────────────────────────────────────
    {
        nome:      "Neuroscience News",
        rss:       "https://api.rss2json.com/v1/api.json?rss_url=https://neurosciencenews.com/feed/",
        limite:    2,
        categoria: "Neurociência"
    }
];

// ============================================================================
// ESTADO
// ============================================================================

let todasNoticias    = [];
let noticiaAtual     = 0;
let rotacaoInterval  = null;

// ============================================================================
// UTILITÁRIOS
// ============================================================================

function formatarDataRelativa(data) {
    if (!data) return "";
    const agora  = new Date();
    const pub    = new Date(data);
    const diffMs = agora - pub;
    const min    = Math.floor(diffMs / 60000);
    const hrs    = Math.floor(min / 60);
    const dias   = Math.floor(hrs / 24);

    if (min  < 1)   return "Agora";
    if (min  < 60)  return `Há ${min} min`;
    if (hrs  < 24)  return `Há ${hrs}h`;
    if (dias === 1) return "Ontem";
    if (dias < 7)   return `Há ${dias} dias`;
    return pub.toLocaleDateString("pt-BR");
}

function sanitizar(html) {
    return (html || "")
        .replace(/<[^>]*>/g, "")
        .replace(/&amp;/g,  "&")
        .replace(/&nbsp;/g, " ")
        .replace(/&lt;/g,   "<")
        .replace(/&gt;/g,   ">")
        .replace(/&quot;/g, '"')
        .replace(/&#8217;/g,"'")
        .replace(/&#8220;/g,'"')
        .replace(/&#8221;/g,'"')
        .trim();
}

// ============================================================================
// BUSCA
// ============================================================================

async function buscarNoticias() {
    const lista = document.getElementById("noticiasList");
    if (!lista) return;

    // Loading state
    lista.innerHTML = `
        <li class="noticia-loading-item">
            <i class="fa-solid fa-circle-notch fa-spin"></i>
            <span>Carregando notícias...</span>
        </li>`;

    let todas = [];

    for (const feed of RSS_FEEDS) {
        try {
            const res  = await fetch(`${feed.rss}&count=10&_=${Date.now()}`, { cache: "no-store" });
            const data = await res.json();
            if (!data.items?.length) continue;

            const convertidas = data.items
                .slice(0, feed.limite)
                .map(item => ({
                    titulo:    sanitizar(item.title),
                    fonte:     feed.nome,
                    categoria: feed.categoria,
                    data:      item.pubDate || null,
                    link:      item.link    || "#"
                }))
                .filter(n => n.titulo && n.link !== "#");

            todas = todas.concat(convertidas);
        } catch (err) {
            console.warn(`[MindFlow Notícias] ${feed.nome} falhou:`, err.message);
        }
    }

    todasNoticias = todas;

    if (!todasNoticias.length) {
        renderizarFallback();
        return;
    }

    renderizarLista(todasNoticias.slice(0, 4));
    iniciarRotacao();
}

// ============================================================================
// RENDER — adapta ao <ul id="noticiasList"> já existente
// ============================================================================

function criarItemNoticia(noticia) {
    const li = document.createElement("li");
    li.className = "noticia-item";
    li.innerHTML = `
        <a href="${noticia.link}" target="_blank" rel="noopener noreferrer" class="noticia-item-link">
            <div class="noticia-item-badges">
                <span class="noticia-fonte-badge">${noticia.fonte}</span>
                <span class="noticia-cat-badge">${noticia.categoria}</span>
                ${noticia.data ? `<span class="noticia-tempo">${formatarDataRelativa(noticia.data)}</span>` : ""}
            </div>
            <p class="noticia-item-titulo">${noticia.titulo}</p>
            <span class="noticia-item-cta">
                Ler matéria <i class="fa-solid fa-arrow-up-right-from-square"></i>
            </span>
        </a>`;
    return li;
}

function renderizarLista(lista, fade = false) {
    const ul = document.getElementById("noticiasList");
    if (!ul) return;

    const executar = () => {
        ul.innerHTML = "";
        lista.slice(0, 4).forEach(n => ul.appendChild(criarItemNoticia(n)));
        if (fade) {
            requestAnimationFrame(() => {
                ul.style.transition = "opacity 0.4s ease, transform 0.4s ease";
                ul.style.opacity    = "1";
                ul.style.transform  = "translateY(0)";
            });
        }
    };

    if (fade) {
        ul.style.opacity   = "0";
        ul.style.transform = "translateY(6px)";
        setTimeout(executar, 320);
    } else {
        executar();
    }
}

function renderizarFallback() {
    const ul = document.getElementById("noticiasList");
    if (!ul) return;
    ul.innerHTML = `
        <li class="noticia-fallback-item">
            <i class="fa-solid fa-satellite-dish"></i>
            <span>Nenhuma notícia disponível. Verifique sua conexão.</span>
        </li>`;
}

// ============================================================================
// ROTAÇÃO — 12s, avança de 4 em 4
// ============================================================================

function iniciarRotacao() {
    if (rotacaoInterval) clearInterval(rotacaoInterval);
    rotacaoInterval = setInterval(() => {
        if (todasNoticias.length <= 4) return;
        noticiaAtual = (noticiaAtual + 4) % todasNoticias.length;
        const faixa  = [
            ...todasNoticias.slice(noticiaAtual),
            ...todasNoticias.slice(0, noticiaAtual)
        ].slice(0, 4);
        renderizarLista(faixa, true);
    }, 12000);
}

// ============================================================================
// INIT
// ============================================================================

document.addEventListener("DOMContentLoaded", buscarNoticias);