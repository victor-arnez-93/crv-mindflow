// ===================================================================
// MAIN.JS — MINDFLOW PSICOLOGIA
// Tema • Relógio • Clima • Sidebar • Busca Global
// ===================================================================

// ======================================================
// RELÓGIO DIGITAL
// ======================================================

function iniciarRelogio(){

    const relogio =
        document.getElementById("relogio");

    function atualizar(){

        const agora = new Date();

        const h = String(
            agora.getHours()
        ).padStart(2,"0");

        const m = String(
            agora.getMinutes()
        ).padStart(2,"0");

        const s = String(
            agora.getSeconds()
        ).padStart(2,"0");

        if(relogio){

            relogio.textContent =
                `${h}:${m}:${s}`;
        }
    }

    atualizar();

    setInterval(atualizar, 1000);
}

iniciarRelogio();

// ======================================================
// REFERÊNCIAS GLOBAIS
// ======================================================

const sidebar =
    document.getElementById("sidebar");

const btnMenuDesktop =
    document.getElementById("btnMenu");

const btnMenuMobile =
    document.getElementById("btnMenuMobile");

// ======================================================
// DETECÇÃO DIA / NOITE
// ======================================================

function isDia(){

    const hora = new Date().getHours();

    return hora >= 6 && hora < 18;
}

// ======================================================
// ÍCONE CLIMA
// ======================================================

function getIcone(code){

    if(code >= 51 && code <= 82){

        return "static/imagens/ico_chuva.png";
    }

    if(code > 82){

        return "static/imagens/ico_chuva.png";
    }

    if(!isDia()){

        return "static/imagens/ico_noite.png";
    }

    if(code <= 1){

        return "static/imagens/ico_dia.png";
    }

    if(code <= 3){

        return "static/imagens/ico_nublado.png";
    }

    return "static/imagens/ico_chuva.png";
}

function atualizarIconeClimaPorHora(){

    const icone =
        document.getElementById("iconeClimaImg");

    if(!icone) return;

    const src = icone.src || "";

    if(
        src.includes("ico_dia")
        ||
        src.includes("ico_noite")
    ){

        icone.src = isDia()
            ? "static/imagens/ico_dia.png"
            : "static/imagens/ico_noite.png";
    }

    if(
        src.includes("ico_nublado")
        &&
        !isDia()
    ){

        icone.src =
            "static/imagens/ico_noite.png";
    }
}

setInterval(
    atualizarIconeClimaPorHora,
    60000
);

// ======================================================
// TEMA CLARO / ESCURO
// ======================================================

const botaoTema =
    document.getElementById("btnTema");

function aplicarTema(tema){

    document.documentElement
        .setAttribute("data-theme", tema);

    localStorage.setItem(
        "temaMindFlow",
        tema
    );

    const iconeTema =
        botaoTema?.querySelector("i");

    if(iconeTema){

        iconeTema.className =
            tema === "dark"
            ? "fas fa-sun"
            : "fas fa-moon";
    }

    atualizarIconeClimaPorHora();
}

function alternarTema(){

    const temaAtual =
        document.documentElement
            .getAttribute("data-theme")
            || "light";

    aplicarTema(
        temaAtual === "light"
        ? "dark"
        : "light"
    );
}

if(botaoTema){

    botaoTema.addEventListener(
        "click",
        alternarTema
    );
}

aplicarTema(
    localStorage.getItem("temaMindFlow")
    || "light"
);

// ======================================================
// SIDEBAR DESKTOP
// ======================================================

if(btnMenuDesktop && sidebar){

    btnMenuDesktop.addEventListener(
        "click",
        () => {

            sidebar.classList.toggle("closed");
        }
    );
}

// ======================================================
// MODAL CLIMA
// ======================================================

const weatherBox =
    document.getElementById("weatherBox");

const modalClima =
    document.getElementById("modalClima");

const closeModalClima =
    document.getElementById("closeModalClima");

if(weatherBox && modalClima){

    weatherBox.addEventListener(
        "click",
        (e) => {

            e.stopPropagation();

            modalClima.classList.toggle("ativo");
        }
    );

    if(closeModalClima){

        closeModalClima.addEventListener(
            "click",
            (e) => {

                e.stopPropagation();

                modalClima.classList.remove("ativo");
            }
        );
    }

    document.addEventListener(
        "click",
        (e) => {

            if(
                !weatherBox.contains(e.target)
            ){

                modalClima.classList.remove("ativo");
            }
        }
    );
}

// ======================================================
// CLIMA REAL — OPEN METEO
// ======================================================

async function carregarClima(){

    const temperatura =
        document.getElementById("temperatura");

    const modalBody =
        document.getElementById("modalClimaBody");

    const icone =
        document.getElementById("iconeClimaImg");

    if(!temperatura || !modalBody) return;

    try{

        const url =
            "https://api.open-meteo.com/v1/forecast?latitude=-23.35&longitude=-47.85&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=America/Sao_Paulo&forecast_days=3";

        const resp =
            await fetch(url);

        const data =
            await resp.json();

        const diasSemana = [
            "dom.",
            "seg.",
            "ter.",
            "qua.",
            "qui.",
            "sex.",
            "sáb."
        ];

        const getEmoji = (code) => {

            if(code === 0) return "☀️";
            if(code <= 2) return "🌤️";
            if(code === 3) return "☁️";
            if(code <= 49) return "🌫️";
            if(code <= 67) return "🌧️";
            if(code <= 82) return "🌦️";

            return "⛈️";
        };

        temperatura.textContent =
            Math.round(
                data.current_weather.temperature
            ) + "°C";

        if(icone){

            icone.src = getIcone(
                data.current_weather.weathercode
            );
        }

        const previsoes =
            data.daily.time.map((d, i) => {

                const dt =
                    new Date(d + "T12:00:00");

                return {

                    dia:
                        i === 0
                        ? "Hoje"
                        : diasSemana[dt.getDay()],

                    max:
                        Math.round(
                            data.daily.temperature_2m_max[i]
                        ),

                    min:
                        Math.round(
                            data.daily.temperature_2m_min[i]
                        ),

                    emoji:
                        getEmoji(
                            data.daily.weathercode[i]
                        )
                };
            });

        atualizarModalClima(previsoes);

    }catch(e){

        console.error(
            "Erro clima:",
            e
        );

        temperatura.textContent = "--°";

        if(modalBody){

            modalBody.innerHTML =
                "<p style='opacity:.6'>Clima indisponível</p>";
        }
    }
}

carregarClima();

setInterval(
    carregarClima,
    600000
);

function atualizarModalClima(previsoes){

    const modalClima =
        document.getElementById("modalClimaBody");

    if(!modalClima) return;

    modalClima.innerHTML =
        previsoes.map(p => `

            <div class="previsao-dia">

                <p class="dia-nome">
                    ${p.dia}
                </p>

                <p class="temperaturas">
                    ${p.max}° / ${p.min}°
                </p>

                <p class="emoji-clima">
                    ${p.emoji}
                </p>

            </div>

        `).join("");
}

// ======================================================
// PERFIL / CONFIGURAÇÕES
// ======================================================

window.addEventListener(
    "DOMContentLoaded",
    () => {

        const nome =
            localStorage.getItem("config_nome");

        const email =
            localStorage.getItem("config_email");

        const avatarURL =
            localStorage.getItem("config_avatar");

        if(nome){

            document
                .querySelectorAll(".user-name")
                .forEach(e => {

                    e.textContent = nome;
                });
        }

        if(email){

            document
                .querySelectorAll(".user-role")
                .forEach(e => {

                    e.textContent = email;
                });
        }

        if(avatarURL){

            document
                .querySelectorAll(
                    ".user-box img, .logo-header"
                )
                .forEach(im => {

                    im.src = avatarURL;
                });
        }
    }
);

// ======================================================
// BUSCA GLOBAL
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const campo =
            document.getElementById("searchInput");

        if(!campo) return;

        let resultados = [];
        let indiceAtual = -1;

        function limparDestaques(){

            document
                .querySelectorAll(".highlight-busca")
                .forEach(el => {

                    el.outerHTML =
                        el.innerText;
                });
        }

        function destacar(texto){

            limparDestaques();

            if(texto.length < 2) return;

            resultados = [];
            indiceAtual = -1;

            const walk =
                document.createTreeWalker(
                    document.body,
                    NodeFilter.SHOW_TEXT
                );

            while(walk.nextNode()){

                const node =
                    walk.currentNode;

                const valor =
                    node.nodeValue.toLowerCase();

                if(
                    valor.includes(
                        texto.toLowerCase()
                    )
                ){

                    const span =
                        document.createElement("span");

                    span.className =
                        "highlight-busca";

                    const idx =
                        valor.indexOf(
                            texto.toLowerCase()
                        );

                    const antes =
                        node.nodeValue.slice(0, idx);

                    const match =
                        node.nodeValue.slice(
                            idx,
                            idx + texto.length
                        );

                    const depois =
                        node.nodeValue.slice(
                            idx + texto.length
                        );

                    span.textContent = match;

                    const parent =
                        node.parentNode;

                    parent.insertBefore(
                        document.createTextNode(antes),
                        node
                    );

                    parent.insertBefore(
                        span,
                        node
                    );

                    parent.insertBefore(
                        document.createTextNode(depois),
                        node
                    );

                    parent.removeChild(node);

                    resultados.push(span);
                }
            }

            if(resultados.length > 0){

                indiceAtual = 0;

                resultados[indiceAtual]
                    .scrollIntoView({

                        behavior:"smooth",
                        block:"center"
                    });
            }
        }

        campo.addEventListener(
            "input",
            () => destacar(
                campo.value.trim()
            )
        );
    }
);

// ======================================================
// MENU MOBILE
// ======================================================

let overlay =
    document.getElementById("sidebar-overlay");

if(!overlay){

    overlay =
        document.createElement("div");

    overlay.id =
        "sidebar-overlay";

    overlay.className =
        "sidebar-overlay";

    document.body.appendChild(overlay);
}

const btnFechar =
    document.querySelector(".sidebar-fechar");

if(btnMenuMobile && sidebar){

    btnMenuMobile.addEventListener(
        "click",
        (e) => {

            e.stopPropagation();

            sidebar.classList.add("aberta");

            overlay.classList.add("mostrar");

            document.body.classList.add("menu-aberto");
        }
    );
}

if(btnFechar && sidebar){

    btnFechar.addEventListener(
        "click",
        (e) => {

            e.stopPropagation();

            sidebar.classList.remove("aberta");

            overlay.classList.remove("mostrar");

            document.body.classList.remove("menu-aberto");
        }
    );
}

if(overlay && sidebar){

    overlay.addEventListener(
        "click",
        () => {

            sidebar.classList.remove("aberta");

            overlay.classList.remove("mostrar");

            document.body.classList.remove("menu-aberto");
        }
    );
}

document
    .querySelectorAll(".sidebar .menu-item")
    .forEach(item => {

        item.addEventListener(
            "click",
            () => {

                if(window.innerWidth <= 768){

                    sidebar.classList.remove("aberta");

                    overlay.classList.remove("mostrar");

                    document.body.classList.remove("menu-aberto");
                }
            }
        );
    });

// ======================================================
// RESPONSIVIDADE
// ======================================================

function ajustarMenuResponsivo(){

    if(window.innerWidth <= 768){

        sidebar.classList.remove("aberta");

        overlay.classList.remove("mostrar");

        document.body.classList.remove("menu-aberto");

    }else{

        sidebar.classList.remove("aberta");

        document.body.classList.remove("menu-aberto");
    }
}

window.addEventListener(
    "resize",
    ajustarMenuResponsivo
);

window.addEventListener(
    "DOMContentLoaded",
    ajustarMenuResponsivo
);

// ======================================================
// MENU ATIVO
// ======================================================

(function marcarMenuAtivo(){

    const pagina =
        window.location.pathname
            .split("/")
            .pop()
            .replace(".html","")
            || "dashboard";

    document
        .querySelectorAll(".menu-item")
        .forEach(btn => {

            btn.classList.remove("active");

            const dp =
                (btn.dataset.page || "")
                .toLowerCase()
                .trim();

            if(
                dp
                &&
                dp === pagina.toLowerCase().trim()
            ){

                btn.classList.add("active");
            }
        });
})();