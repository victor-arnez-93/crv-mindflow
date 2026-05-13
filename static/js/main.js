// ============================================================
// MAIN.JS — MINDFLOW DASHBOARD
// Relógio · Tema · Clima · Sidebar · Busca · Menu Ativo
// ============================================================

// ─── RELÓGIO ────────────────────────────────────────────────
function iniciarRelogio() {
    const el = document.getElementById("relogio");
    if (!el) return;
    function tick() {
        const n = new Date();
        const h = String(n.getHours()).padStart(2, "0");
        const m = String(n.getMinutes()).padStart(2, "0");
        const s = String(n.getSeconds()).padStart(2, "0");
        el.textContent = `${h}:${m}:${s}`;
    }
    tick();
    setInterval(tick, 1000);
}
iniciarRelogio();

// ─── TEMA CLARO / ESCURO ─────────────────────────────────────
const btnTema = document.getElementById("btnTema");

function aplicarTema(tema) {
    document.documentElement.setAttribute("data-theme", tema);
    localStorage.setItem("temaMindFlow", tema);
    const ico = btnTema?.querySelector("i");
    if (ico) {
        ico.className = tema === "dark" ? "fas fa-sun" : "fas fa-moon";
    }
}

function alternarTema() {
    const atual = document.documentElement.getAttribute("data-theme") || "dark";
    aplicarTema(atual === "dark" ? "light" : "dark");
}

if (btnTema) btnTema.addEventListener("click", alternarTema);

// Aplica tema salvo ou escuro como padrão
aplicarTema(localStorage.getItem("temaMindFlow") || "dark");

// ─── SIDEBAR — DESKTOP (recolher/expandir) ──────────────────
const sidebar         = document.getElementById("sidebar");
const btnMenuDesktop  = document.getElementById("btnMenu");

if (btnMenuDesktop && sidebar) {
    btnMenuDesktop.addEventListener("click", () => {
        sidebar.classList.toggle("closed");
        localStorage.setItem("sidebarClosed", sidebar.classList.contains("closed"));
    });
}

// Restaura estado da sidebar no desktop
(function restaurarSidebar() {
    if (window.innerWidth > 768) {
        const fechada = localStorage.getItem("sidebarClosed") === "true";
        if (fechada && sidebar) sidebar.classList.add("closed");
    }
})();

// ─── SIDEBAR — MOBILE ────────────────────────────────────────
const btnMenuMobile = document.getElementById("btnMenuMobile");
const btnFechar     = document.querySelector(".sidebar-fechar");

// Cria overlay se não existir
let overlay = document.getElementById("sidebar-overlay");
if (!overlay) {
    overlay = document.createElement("div");
    overlay.id        = "sidebar-overlay";
    overlay.className = "sidebar-overlay";
    document.body.appendChild(overlay);
}

function abrirSidebar() {
    sidebar?.classList.add("aberta");
    overlay.classList.add("mostrar");
    document.body.classList.add("menu-aberto");
}

function fecharSidebar() {
    sidebar?.classList.remove("aberta");
    overlay.classList.remove("mostrar");
    document.body.classList.remove("menu-aberto");
}

if (btnMenuMobile) btnMenuMobile.addEventListener("click", e => { e.stopPropagation(); abrirSidebar(); });
if (btnFechar)     btnFechar.addEventListener("click",     e => { e.stopPropagation(); fecharSidebar(); });
if (overlay)       overlay.addEventListener("click",       () => fecharSidebar());

// Fecha ao clicar em item (mobile)
document.querySelectorAll(".sidebar .menu-item").forEach(item => {
    item.addEventListener("click", () => {
        if (window.innerWidth <= 768) fecharSidebar();
    });
});

// Ajusta no resize
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) fecharSidebar();
});

// ─── MENU ATIVO — MARCA AUTOMÁTICO ──────────────────────────
(function marcarMenuAtivo() {
    const pagina = window.location.pathname.split("/").pop().replace(".html", "") || "dashboard";
    document.querySelectorAll(".menu-item").forEach(item => {
        item.classList.remove("active");
        const dp = (item.dataset.page || "").toLowerCase().trim();
        if (dp && dp === pagina.toLowerCase().trim()) {
            item.classList.add("active");
        }
    });
})();

// ─── CLIMA — OPEN-METEO ──────────────────────────────────────
// Coordenadas: Tatuí/SP
const LAT = -23.35;
const LON = -47.85;

function isDia() {
    const h = new Date().getHours();
    return h >= 6 && h < 18;
}

function getIconeClima(code) {
    if (code >= 51) return "static/imagens/ico_chuva.png";
    if (!isDia())   return "static/imagens/ico_noite.png";
    if (code <= 1)  return "static/imagens/ico_dia.png";
    if (code <= 3)  return "static/imagens/ico_nublado.png";
    return "static/imagens/ico_dia.png";
}

function getEmojiClima(code) {
    if (code === 0)        return "☀️";
    if (code <= 2)         return "🌤️";
    if (code === 3)        return "☁️";
    if (code <= 49)        return "🌫️";
    if (code <= 67)        return "🌧️";
    if (code <= 82)        return "🌦️";
    return "⛈️";
}

async function carregarClima() {
    const elTemp  = document.getElementById("temperatura");
    const elIco   = document.getElementById("iconeClimaImg");
    const elBody  = document.getElementById("modalClimaBody");

    if (!elTemp) return;

    try {
        const url = `https://api.open-meteo.com/v1/forecast`
            + `?latitude=${LAT}&longitude=${LON}`
            + `&daily=weathercode,temperature_2m_max,temperature_2m_min`
            + `&current_weather=true`
            + `&timezone=America%2FSao_Paulo`
            + `&forecast_days=4`;

        const res  = await fetch(url);
        const data = await res.json();
        const cw   = data.current_weather;

        // Temperatura e ícone atuais
        elTemp.textContent = Math.round(cw.temperature) + "°C";
        if (elIco) elIco.src = getIconeClima(cw.weathercode);

        // Modal — previsão 4 dias
        if (elBody) {
            const nomes = ["dom.", "seg.", "ter.", "qua.", "qui.", "sex.", "sáb."];
            const linhas = data.daily.time.map((t, i) => {
                const dt  = new Date(t + "T12:00:00");
                const dia = i === 0 ? "Hoje" : nomes[dt.getDay()];
                return `
                <div class="previsao-dia">
                    <p class="dia-nome">${dia}</p>
                    <p class="temperaturas">
                        ${Math.round(data.daily.temperature_2m_max[i])}° /
                        ${Math.round(data.daily.temperature_2m_min[i])}°
                    </p>
                    <p class="emoji-clima">${getEmojiClima(data.daily.weathercode[i])}</p>
                </div>`;
            });
            elBody.innerHTML = linhas.join("");
        }

    } catch (err) {
        console.warn("[MindFlow] Clima indisponível:", err);
        if (elTemp) elTemp.textContent = "--°C";
        if (elBody) elBody.innerHTML = `<div class="previsao-loading">Clima indisponível.</div>`;
    }
}

carregarClima();
setInterval(carregarClima, 10 * 60 * 1000); // atualiza a cada 10 min

// ─── MODAL CLIMA — ABRIR/FECHAR ──────────────────────────────
const weatherBox      = document.getElementById("weatherBox");
const modalClima      = document.getElementById("modalClima");
const closeModalClima = document.getElementById("closeModalClima");

if (weatherBox && modalClima) {
    weatherBox.addEventListener("click", e => {
        e.stopPropagation();
        modalClima.classList.toggle("ativo");
    });

    if (closeModalClima) {
        closeModalClima.addEventListener("click", e => {
            e.stopPropagation();
            modalClima.classList.remove("ativo");
        });
    }

    document.addEventListener("click", e => {
        if (!weatherBox.contains(e.target)) {
            modalClima.classList.remove("ativo");
        }
    });
}

// ─── BUSCA GLOBAL ────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
    const campo = document.getElementById("searchInput");
    if (!campo) return;

    function limparDestaques() {
        document.querySelectorAll(".highlight-busca").forEach(el => {
            el.replaceWith(document.createTextNode(el.textContent));
        });
        // Normaliza text nodes adjacentes
        document.body.normalize();
    }

    function destacarTexto(termo) {
        limparDestaques();
        if (termo.length < 2) return;

        const walker = document.createTreeWalker(
            document.querySelector(".main-content") || document.body,
            NodeFilter.SHOW_TEXT
        );

        const encontrados = [];
        while (walker.nextNode()) {
            const node = walker.currentNode;
            if (!node.nodeValue.trim()) continue;
            if (node.parentElement?.closest("script, style, .highlight-busca")) continue;
            const lower = node.nodeValue.toLowerCase();
            if (lower.includes(termo.toLowerCase())) {
                encontrados.push(node);
            }
        }

        encontrados.forEach(node => {
            const idx    = node.nodeValue.toLowerCase().indexOf(termo.toLowerCase());
            const antes  = node.nodeValue.slice(0, idx);
            const match  = node.nodeValue.slice(idx, idx + termo.length);
            const depois = node.nodeValue.slice(idx + termo.length);

            const span = document.createElement("span");
            span.className   = "highlight-busca";
            span.textContent = match;

            const frag = document.createDocumentFragment();
            if (antes)  frag.appendChild(document.createTextNode(antes));
            frag.appendChild(span);
            if (depois) frag.appendChild(document.createTextNode(depois));
            node.parentNode.replaceChild(frag, node);
        });

        // Scroll até primeiro resultado
        const primeiro = document.querySelector(".highlight-busca");
        if (primeiro) primeiro.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    campo.addEventListener("input", () => destacarTexto(campo.value.trim()));

    campo.addEventListener("keydown", e => {
        if (e.key === "Escape") {
            campo.value = "";
            limparDestaques();
        }
    });
});

// ─── PERFIL DO USUÁRIO (localStorage) ───────────────────────
window.addEventListener("DOMContentLoaded", () => {
    const nome   = localStorage.getItem("mindflow_nome");
    const cargo  = localStorage.getItem("mindflow_cargo");
    const letra  = localStorage.getItem("mindflow_letra");

    if (nome) {
        document.querySelectorAll(".user-name").forEach(el => el.textContent = nome);
    }
    if (cargo) {
        document.querySelectorAll(".user-role").forEach(el => el.textContent = cargo);
    }
    if (letra) {
        document.querySelectorAll(".user-avatar-letter").forEach(el => el.textContent = letra);
    }
});