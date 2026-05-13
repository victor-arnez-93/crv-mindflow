var RSS_FEEDS = [
    { nome: "Veja",       rss: "https://api.rss2json.com/v1/api.json?rss_url=https://veja.abril.com.br/noticias-sobre/psicologia/feed/",        limite: 1, categoria: "veja"       },
    { nome: "Forbes",     rss: "https://api.rss2json.com/v1/api.json?rss_url=https://forbes.com.br/noticias-sobre/psicologia/feed/",             limite: 3, categoria: "forbes"     },
    { nome: "Metropoles", rss: "https://api.rss2json.com/v1/api.json?rss_url=https://www.metropoles.com/tag/psicologia/feed/",                   limite: 3, categoria: "metropoles" },
    { nome: "USP", rss: "https://api.rss2json.com/v1/api.json?rss_url=https://jornal.usp.br/tag/psicologia/feed/", limite: 5, categoria: "usp" },
    { nome: "CFP",        rss: "https://api.rss2json.com/v1/api.json?rss_url=https://site.cfp.org.br/feed/",                                    limite: 1, categoria: "cfp"        }
];

var PALAVRAS_BLOQUEADAS = [
    "misoginia", "misóginos", "misogin",
    "transgenero", "transgênero", "trans ", "transfobia",
    "lgbtq", "lgbtqi", "lgbt",
    "boicote", "boycott",
    "feminismo", "feminista",
    "racismo", "racista",
    "machismo", "machista",
    "identidade de genero", "identidade de gênero",
    "diversidade sexual", "orientacao sexual",
    "non-binary", "nao-binario", "não-binário"
];

function temasBloqueados(titulo) {
    var t = titulo.toLowerCase();
    for (var i = 0; i < PALAVRAS_BLOQUEADAS.length; i++) {
        if (t.indexOf(PALAVRAS_BLOQUEADAS[i]) !== -1) return true;
    }
    return false;
}

var _cfpIdx = 0;
var _forbesIdx = 0;

var FALLBACKS_CFP    = ["static/imagens/img6.png", "static/imagens/img7.png"];
var FALLBACKS_FORBES = ["static/imagens/img4.png", "static/imagens/img_2.png"];

function fallbackCFP()    { return FALLBACKS_CFP[_cfpIdx++    % FALLBACKS_CFP.length];    }
function fallbackForbes() { return FALLBACKS_FORBES[_forbesIdx++ % FALLBACKS_FORBES.length]; }

var noticias = [];

function toBRT(d) {
    var date = new Date(d);
    var utc  = date.getTime() + date.getTimezoneOffset() * 60000;
    return new Date(utc - 3 * 3600000);
}

function dataRelativa(data) {
    if (!data) return "";
    var agora  = toBRT(new Date());
    var pub    = toBRT(data);
    var ms     = agora - pub;
    var min    = Math.floor(ms / 60000);
    var hrs    = Math.floor(min / 60);
    var dias   = Math.floor(hrs / 24);
    if (min < 1)    return "Agora";
    if (min < 60)   return "Ha " + min + " min";
    if (hrs < 24)   return "Ha " + hrs + "h";
    if (dias === 1) return "Ontem";
    if (dias < 7)   return "Ha " + dias + " dias";
    return pub.toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
}

function obterImagem(item, feedCategoria) {
    if (item.thumbnail && item.thumbnail.length > 10) return item.thumbnail;
    if (item.enclosure && item.enclosure.link)        return item.enclosure.link;
    var html = item.description || item.content || "";
    var m    = html.match(/<img[^>]+src=["']([^"'>]+)["']/i);
    if (m && m[1]) return m[1];
    if (feedCategoria === "cfp")    return fallbackCFP();
    if (feedCategoria === "forbes") return fallbackForbes();
    return "static/imagens/img6.png";
}

function sanitizar(html) {
    return (html || "")
        .replace(/<[^>]*>/g, "")
        .replace(/&amp;/g,   "&")
        .replace(/&nbsp;/g,  " ")
        .replace(/&lt;/g,    "<")
        .replace(/&gt;/g,    ">")
        .replace(/&quot;/g,  '"')
        .replace(/&#8217;/g, "'")
        .replace(/&#8220;/g, '"')
        .replace(/&#8221;/g, '"')
        .trim();
}

function abrirModal(n) {
    var bg       = document.getElementById("modal-noticia-bg");
    var imgEl    = document.getElementById("modal-noticia-imagem");
    var tituloEl = document.getElementById("modal-noticia-titulo");
    var fonteEl  = document.getElementById("modal-noticia-fonte");
    var textoEl  = document.getElementById("modal-noticia-texto");
    var footerEl = document.getElementById("modal-noticia-footer");
    if (!bg) return;

    if (imgEl) imgEl.style.backgroundImage = "url('" + n.imagem + "')";
    if (tituloEl) tituloEl.innerHTML = n.titulo;
    if (fonteEl)  fonteEl.innerHTML  = n.fonte + " &bull; " + dataRelativa(n.data);

    if (textoEl) {
        var c = (n.conteudo || n.resumo || "")
            .replace(/<figure[^>]*>[\s\S]*?<\/figure>/gi, "")
            .replace(/<button[^>]*>[\s\S]*?<\/button>/gi, "")
            .replace(/Publicidade/gi, "")
            .replace(/Salvar conte[uú]do\s*\d*/gi, "");

        var html = "";
        if (c.indexOf("</p>") !== -1) {
            var partes = c.split(/<\/p>/i);
            for (var i = 0; i < partes.length; i++) {
                var txt = partes[i].replace(/<[^>]*>/g, "").trim();
                if (txt.length > 20) html += "<p>" + txt + "</p>";
            }
        }
        if (!html) {
            var cru = c.replace(/<[^>]*>/g, "").trim();
            html = "<p>" + n.resumo + "</p>";
            if (cru.length > 50) html += "<p>" + cru.substring(0, 800) + "</p>";
        }
        textoEl.innerHTML = html;
    }

    if (footerEl) {
        footerEl.innerHTML =
            '<a href="' + n.link + '" target="_blank" rel="noopener noreferrer" class="btn-ver-noticia">' +
            '<i class="fa-solid fa-arrow-right"></i> Ver materia completa</a>';
    }

    bg.style.display = "flex";
}

document.addEventListener("click", function(e) {
    if (e.target.id === "modal-noticia-bg") e.target.style.display = "none";
    if (e.target.id === "fechar-modal-noticia") {
        var bg = document.getElementById("modal-noticia-bg");
        if (bg) bg.style.display = "none";
    }
});

function criarCard(n, idx) {
    var article = document.createElement("article");
    article.className = "noticia-card";

    var imgStyle = n.imagem ? "background-image:url('" + n.imagem + "')" : "";

    article.innerHTML =
        '<div class="noticia-imagem" style="' + imgStyle + '">' +
            '<span class="noticia-categoria ' + n.categoria + '">' + n.fonte + '</span>' +
        '</div>' +
        '<div class="noticia-conteudo">' +
            '<h3>' + n.titulo + '</h3>' +
            '<p>'  + n.resumo + '</p>' +
            '<div class="noticia-meta">' +
                '<span class="noticia-fonte"><i class="fa-solid fa-newspaper"></i> ' + n.fonte + '</span>' +
                '<span class="noticia-separador">&bull;</span>' +
                '<span class="noticia-data"><i class="fa-regular fa-clock"></i> ' + dataRelativa(n.data) + '</span>' +
            '</div>' +
        '</div>' +
        '<button class="btn-ler-noticia" data-idx="' + idx + '">' +
            'Ler mais <i class="fa-solid fa-arrow-right"></i>' +
        '</button>';

    article.addEventListener("click", function(e) {
        if (e.target.closest && e.target.closest(".btn-ler-noticia")) {
            window.open(n.link, "_blank", "noopener,noreferrer");
            return;
        }
        abrirModal(n);
    });

    return article;
}

function renderizarNoticias(lista) {
    var container = document.getElementById("noticiasGrid");
    if (!container) return;
    container.innerHTML = "";

    if (!lista || !lista.length) {
        container.innerHTML =
            '<div class="noticias-loading">' +
            '<i class="fa-solid fa-satellite-dish"></i>' +
            '<span>Nenhuma noticia encontrada.</span></div>';
        return;
    }

    for (var i = 0; i < lista.length; i++) {
        container.appendChild(criarCard(lista[i], i));
    }

    var contador = document.getElementById("contadorNoticias");
    if (contador) contador.textContent = lista.length + " noticias encontradas";
}

async function buscarNoticias() {
    _cfpIdx = 0;
    _forbesIdx = 0;
    var container = document.getElementById("noticiasGrid");
    if (container) {
        container.innerHTML =
            '<div class="noticias-loading">' +
            '<i class="fa-solid fa-circle-notch fa-spin"></i>' +
            '<span>Buscando noticias de psicologia...</span></div>';
    }

    var btn = document.getElementById("btnRecarregar");
    if (btn) { btn.disabled = true; btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin"></i> Atualizando...'; }

    var todas = [];

    for (var f = 0; f < RSS_FEEDS.length; f++) {
        var feed = RSS_FEEDS[f];
        try {
            var resp = await fetch(feed.rss + "&_=" + Date.now());
            var data = await resp.json();
            console.log("[TESTE] " + feed.nome + " | status: " + data.status + " | items: " + (data.items ? data.items.length : 0));

            if (!data.items || !data.items.length) continue;

            var items = data.items.slice(0, feed.limite);
            for (var i = 0; i < items.length; i++) {
                var item = items[i];
                if (!item.title || !item.link) continue;
                var tituloLimpo = sanitizar(item.title);
if (temasBloqueados(tituloLimpo)) {
    console.log("[BLOQUEADO] " + tituloLimpo);
    continue;
}
                todas.push({
                    titulo:    sanitizar(item.title),
                    resumo:    sanitizar(item.description || item.content || "").substring(0, 200) + "...",
                    conteudo:  item.content || item.description || "",
                    categoria: feed.categoria,
                    fonte:     feed.nome,
                    data:      item.pubDate || "",
                    imagem:    obterImagem(item, feed.categoria),
                    link:      item.link
                });
            }
        } catch(e) {
            console.warn("[MindFlow] feed falhou: " + feed.nome);
        }
    }

    var limiteFinal = { "veja": 1, "forbes": 3, "metropoles": 3, "usp": 1, "cfp": 1 };
    var contagem = {};
    todas = todas.filter(function(n) {
        contagem[n.categoria] = (contagem[n.categoria] || 0) + 1;
        return contagem[n.categoria] <= (limiteFinal[n.categoria] || 99);
    });
    noticias = todas;
    renderizarNoticias(noticias);

    if (btn) { btn.disabled = false; btn.innerHTML = '<i class="fa-solid fa-rotate-right"></i> Atualizar'; }
}

function aplicarFiltros() {
    var pFonte = document.querySelector("#filtroFonte .pill.active");
    var pCat   = document.querySelector("#filtroCategoria .pill.active");
    var bEl    = document.getElementById("buscaInterna");

    var fonte = pFonte ? (pFonte.dataset.filtro || "todos") : "todos";
    var cat   = pCat   ? (pCat.dataset.filtro   || "todos") : "todos";
    var busca = bEl    ? bEl.value.toLowerCase().trim()      : "";

    var filtradas = noticias.filter(function(n) {
        var okFonte = fonte === "todos" || n.fonte === fonte;
        var okCat   = cat   === "todos" || n.categoria === cat;
        var okBusca = !busca ||
            n.titulo.toLowerCase().indexOf(busca) !== -1 ||
            n.fonte.toLowerCase().indexOf(busca) !== -1;
        return okFonte && okCat && okBusca;
    });

    renderizarNoticias(filtradas);
}

function iniciarFiltros() {
    var ff = document.getElementById("filtroFonte");
    if (ff) ff.addEventListener("click", function(e) {
        var p = e.target.closest(".pill");
        if (!p) return;
        ff.querySelectorAll(".pill").forEach(function(x) { x.classList.remove("active"); });
        p.classList.add("active");
        aplicarFiltros();
    });

    var fc = document.getElementById("filtroCategoria");
    if (fc) fc.addEventListener("click", function(e) {
        var p = e.target.closest(".pill");
        if (!p) return;
        fc.querySelectorAll(".pill").forEach(function(x) { x.classList.remove("active"); });
        p.classList.add("active");
        aplicarFiltros();
    });

    var bi = document.getElementById("buscaInterna");
    if (bi) bi.addEventListener("input", aplicarFiltros);

    var bh = document.getElementById("buscaNoticia");
    if (bh) bh.addEventListener("input", function(e) {
        if (bi) bi.value = e.target.value;
        aplicarFiltros();
    });

    var btn = document.getElementById("btnRecarregar");
    if (btn) btn.addEventListener("click", buscarNoticias);
}

document.addEventListener("DOMContentLoaded", function() {
    buscarNoticias();
    iniciarFiltros();
});