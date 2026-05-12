// ===================================================================
// MAIN.JS — MINDFLOW PSICOLOGIA
// Tema • Relógio • Clima • Sidebar • Busca Global
// ===================================================================

window.MindFlow = {};

// ======================================================
// REFERÊNCIAS GLOBAIS
// ======================================================

const sidebar =
    document.getElementById("sidebar");

const btnMenuDesktop =
    document.getElementById("btnMenu");

const btnMenuMobile =
    document.getElementById("btnMenuMobile");

const botaoTema =
    document.getElementById("btnTema");

const weatherBox =
    document.getElementById("weatherBox");

const modalClima =
    document.getElementById("modalClima");

const closeModalClima =
    document.getElementById("closeModalClima");

// ======================================================
// INIT
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        iniciarRelogio();

        aplicarTema(
            localStorage.getItem("temaMindFlow")
            || "light"
        );

        carregarClima();

        iniciarTema();

        iniciarSidebarDesktop();

        iniciarSidebarMobile();

        iniciarModalClima();

        iniciarBuscaGlobal();

        carregarPerfil();

        ajustarMenuResponsivo();

        marcarMenuAtivo();

        console.log(
            "🧠 MindFlow iniciado."
        );
    }
);

// ======================================================
// RELÓGIO
// ======================================================

function iniciarRelogio(){

    const relogio =
        document.getElementById("relogio");

    if(!relogio) return;

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

        relogio.textContent =
            `${h}:${m}:${s}`;
    }

    atualizar();

    setInterval(atualizar,1000);
}

// ======================================================
// DIA / NOITE
// ======================================================

function isDia(){

    const hora =
        new Date().getHours();

    return hora >= 6 && hora < 18;
}

// ======================================================
// ÍCONES CLIMA
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

    const src =
        icone.src || "";

    if(
        src.includes("ico_dia")
        ||
        src.includes("ico_noite")
    ){

        icone.src =
            isDia()
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
// TEMA
// ======================================================

function aplicarTema(tema){

    document.documentElement
        .setAttribute(
            "data-theme",
            tema
        );

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

function iniciarTema(){

    if(!botaoTema) return;

    botaoTema.addEventListener(
        "click",
        alternarTema
    );
}

// ======================================================
// SIDEBAR DESKTOP
// ======================================================

function iniciarSidebarDesktop(){

    if(!btnMenuDesktop || !sidebar)
        return;

    btnMenuDesktop.addEventListener(
        "click",
        () => {

            sidebar.classList.toggle(
                "closed"
            );
        }
    );
}

// ======================================================
// MODAL CLIMA
// ======================================================

function iniciarModalClima(){

    if(!weatherBox || !modalClima)
        return;

    weatherBox.addEventListener(
        "click",
        (e) => {

            e.stopPropagation();

            modalClima.classList.toggle(
                "ativo"
            );
        }
    );

    if(closeModalClima){

        closeModalClima.addEventListener(
            "click",
            (e) => {

                e.stopPropagation();

                modalClima.classList.remove(
                    "ativo"
                );
            }
        );
    }

    document.addEventListener(
        "click",
        (e) => {

            if(
                !weatherBox.contains(e.target)
            ){

                modalClima.classList.remove(
                    "ativo"
                );
            }
        }
    );
}

// ======================================================
// CLIMA REAL
// ======================================================

async function carregarClima(){

    const temperatura =
        document.getElementById(
            "temperatura"
        );

    const modalBody =
        document.getElementById(
            "modalClimaBody"
        );

    const icone =
        document.getElementById(
            "iconeClimaImg"
        );

    if(
        !temperatura
        ||
        !modalBody
    ) return;

    try{

        const url =
            "https://api.open-meteo.com/v1/forecast?latitude=-23.35&longitude=-47.85&daily=weathercode,temperature_2m_max,temperature_2m_min&current_weather=true&timezone=America/Sao_Paulo&forecast_days=3";

        const resp =
            await fetch(url);

        const data =
            await resp.json();

        temperatura.textContent =
            Math.round(
                data.current_weather.temperature
            ) + "°C";

        if(icone){

            icone.src =
                getIcone(
                    data.current_weather.weathercode
                );
        }

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

        const previsoes =
            data.daily.time.map(
                (d,i) => {

                const dt =
                    new Date(
                        d + "T12:00:00"
                    );

                return {

                    dia:
                        i === 0
                        ? "Hoje"
                        : diasSemana[
                            dt.getDay()
                        ],

                    max:
                        Math.round(
                            data.daily
                            .temperature_2m_max[i]
                        ),

                    min:
                        Math.round(
                            data.daily
                            .temperature_2m_min[i]
                        ),

                    emoji:
                        getEmoji(
                            data.daily
                            .weathercode[i]
                        )
                };
            });

        atualizarModalClima(
            previsoes
        );

    }catch(e){

        console.error(
            "Erro clima:",
            e
        );

        temperatura.textContent =
            "--°";

        modalBody.innerHTML =
            `
                <p style="opacity:.6">
                    Clima indisponível
                </p>
            `;
    }
}

setInterval(
    carregarClima,
    600000
);

function atualizarModalClima(
    previsoes
){

    const modal =
        document.getElementById(
            "modalClimaBody"
        );

    if(!modal) return;

    modal.innerHTML =
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
// PERFIL
// ======================================================

function carregarPerfil(){

    const nome =
        localStorage.getItem(
            "config_nome"
        );

    const email =
        localStorage.getItem(
            "config_email"
        );

    const avatarURL =
        localStorage.getItem(
            "config_avatar"
        );

    if(nome){

        document
            .querySelectorAll(
                ".user-name"
            )
            .forEach(el => {

                el.textContent = nome;
            });
    }

    if(email){

        document
            .querySelectorAll(
                ".user-role"
            )
            .forEach(el => {

                el.textContent = email;
            });
    }

    if(avatarURL){

        document
            .querySelectorAll(
                ".user-avatar-img"
            )
            .forEach(img => {

                img.src = avatarURL;
            });
    }
}

// ======================================================
// BUSCA GLOBAL
// ======================================================

function iniciarBuscaGlobal(){

    const campo =
        document.getElementById(
            "searchInput"
        );

    if(!campo) return;

    let timeoutBusca;

    campo.addEventListener(
        "input",
        () => {

            clearTimeout(timeoutBusca);

            timeoutBusca =
                setTimeout(() => {

                executarBusca(
                    campo.value.trim()
                );

            },250);
        }
    );
}

function executarBusca(texto){

    limparResultadosBusca();

    if(texto.length < 2)
        return;

    const elementos =
        document.querySelectorAll(
            `
            h1,h2,h3,h4,
            p,
            span,
            .card-title,
            .section-title
            `
        );

    elementos.forEach(el => {

        if(
            el.closest(".sidebar")
            ||
            el.closest(".header")
            ||
            el.closest(".modal")
        ) return;

        const conteudo =
            el.textContent
                .toLowerCase();

        if(
            conteudo.includes(
                texto.toLowerCase()
            )
        ){

            el.classList.add(
                "highlight-busca"
            );
        }
    });

    const primeiro =
        document.querySelector(
            ".highlight-busca"
        );

    if(primeiro){

        primeiro.scrollIntoView({

            behavior:"smooth",
            block:"center"
        });
    }
}

function limparResultadosBusca(){

    document
        .querySelectorAll(
            ".highlight-busca"
        )
        .forEach(el => {

            el.classList.remove(
                "highlight-busca"
            );
        });
}

// ======================================================
// SIDEBAR MOBILE
// ======================================================

let overlay =
    document.getElementById(
        "sidebar-overlay"
    );

if(!overlay){

    overlay =
        document.createElement("div");

    overlay.id =
        "sidebar-overlay";

    overlay.className =
        "sidebar-overlay";

    document.body.appendChild(
        overlay
    );
}

function iniciarSidebarMobile(){

    const btnFechar =
        document.querySelector(
            ".sidebar-fechar"
        );

    if(btnMenuMobile && sidebar){

        btnMenuMobile.addEventListener(
            "click",
            (e) => {

                e.stopPropagation();

                sidebar.classList.add(
                    "aberta"
                );

                overlay.classList.add(
                    "mostrar"
                );

                document.body.classList.add(
                    "menu-aberto"
                );
            }
        );
    }

    if(btnFechar && sidebar){

        btnFechar.addEventListener(
            "click",
            (e) => {

                e.stopPropagation();

                fecharSidebarMobile();
            }
        );
    }

    overlay.addEventListener(
        "click",
        fecharSidebarMobile
    );

    document
        .querySelectorAll(
            ".sidebar .menu-item"
        )
        .forEach(item => {

            item.addEventListener(
                "click",
                () => {

                    if(
                        window.innerWidth <= 768
                    ){

                        fecharSidebarMobile();
                    }
                }
            );
        });
}

function fecharSidebarMobile(){

    sidebar.classList.remove(
        "aberta"
    );

    overlay.classList.remove(
        "mostrar"
    );

    document.body.classList.remove(
        "menu-aberto"
    );
}

// ======================================================
// RESPONSIVIDADE
// ======================================================

function ajustarMenuResponsivo(){

    if(window.innerWidth <= 768){

        fecharSidebarMobile();

    }else{

        sidebar?.classList.remove(
            "aberta"
        );

        document.body.classList.remove(
            "menu-aberto"
        );
    }
}

window.addEventListener(
    "resize",
    ajustarMenuResponsivo
);

// ======================================================
// MENU ATIVO
// ======================================================

function marcarMenuAtivo(){

    const pagina =
        window.location.pathname
            .split("/")
            .pop()
            .replace(".html","")
            || "dashboard";

    document
        .querySelectorAll(
            ".menu-item"
        )
        .forEach(btn => {

            btn.classList.remove(
                "active"
            );

            const dp =
                (
                    btn.dataset.page
                    || ""
                )
                .toLowerCase()
                .trim();

            if(
                dp
                &&
                dp === pagina
            ){

                btn.classList.add(
                    "active"
                );
            }
        });
}

// ======================================================
// TOAST GLOBAL
// ======================================================

MindFlow.toast =
    function(
        mensagem,
        tipo = "success"
    ){

    const toast =
        document.createElement("div");

    toast.className =
        `mindflow-toast ${tipo}`;

    toast.innerHTML = `
        <span>${mensagem}</span>
    `;

    document.body.appendChild(
        toast
    );

    setTimeout(() => {

        toast.classList.add(
            "mostrar"
        );

    },50);

    setTimeout(() => {

        toast.classList.remove(
            "mostrar"
        );

        setTimeout(() => {

            toast.remove();

        },300);

    },3000);
};

// ======================================================
// MODAL GLOBAL
// ======================================================

MindFlow.abrirModal =
    function(id){

    const modal =
        document.getElementById(id);

    if(!modal) return;

    modal.classList.add("ativo");

    document.body.style.overflow =
        "hidden";
};

MindFlow.fecharModal =
    function(id){

    const modal =
        document.getElementById(id);

    if(!modal) return;

    modal.classList.remove("ativo");

    document.body.style.overflow =
        "auto";
};

// ======================================================
// LOG
// ======================================================

console.log(
    "🧠 MAIN.JS consolidado."
);