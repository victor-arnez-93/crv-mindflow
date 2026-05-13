// ============================================================================
// sessoes.js — MindFlow · Gestão de Sessões
// Dados salvos em localStorage — sem servidor, sem exposição de dados
// ============================================================================

const CHAVE_PAC  = "mindflow_pacientes";
const CHAVE_NOTAS= "mindflow_notas";

// ============================================================================
// STORAGE
// ============================================================================

function carregarPacientes()  { return JSON.parse(localStorage.getItem(CHAVE_PAC)  || "[]"); }
function salvarPacientes(arr) { localStorage.setItem(CHAVE_PAC, JSON.stringify(arr)); }
function carregarNotas()      { return JSON.parse(localStorage.getItem(CHAVE_NOTAS) || "{}"); }
function salvarNotas(obj)     { localStorage.setItem(CHAVE_NOTAS, JSON.stringify(obj)); }

function gerarId() { return "p_" + Date.now() + "_" + Math.random().toString(36).slice(2, 7); }

// ============================================================================
// ESTADO
// ============================================================================

let pacientes      = carregarPacientes();
let notas          = carregarNotas();
let pacienteSelecionado = null;
let filtroStatus   = "todos";
let termoBusca     = "";
let tagAtiva       = "Evolução";
let editandoId     = null;

// Timer
let timerInterval  = null;
let timerSegundos  = 0;
let timerRodando   = false;

// ============================================================================
// RENDERIZAR LISTA
// ============================================================================

function filtrarPacientes() {
    return pacientes.filter(p => {
        const matchStatus = filtroStatus === "todos" || p.status === filtroStatus;
        const matchBusca  = termoBusca === "" || p.nome.toLowerCase().includes(termoBusca);
        return matchStatus && matchBusca;
    });
}

function renderizarLista() {
    const lista  = document.getElementById("listaPacientes");
    const cont   = document.getElementById("contPacientes");
    const filtrados = filtrarPacientes();

    cont.textContent = `${filtrados.length} paciente${filtrados.length !== 1 ? "s" : ""}`;

    if (!filtrados.length) {
        lista.innerHTML = `
            <div class="sessoes-lista-vazio">
                <i class="fa-solid fa-user-slash"></i>
                <p>Nenhum paciente encontrado.</p>
            </div>`;
        return;
    }

    lista.innerHTML = filtrados.map(p => {
        const qtdNotas = (notas[p.id] || []).length;
        const ativa    = pacienteSelecionado?.id === p.id ? "ativo" : "";
        const inicial  = p.nome.charAt(0).toUpperCase();
        const statusLabel = { ativo: "Ativo", pausa: "Em Pausa", alta: "Alta" }[p.status] || "Ativo";
        const statusCls   = { ativo: "status-ativo", pausa: "status-pausa", alta: "status-alta" }[p.status] || "status-ativo";
        return `
            <div class="sessoes-pac-item ${ativa}" data-id="${p.id}">
                <div class="pac-item-avatar">${inicial}</div>
                <div class="pac-item-info">
                    <strong class="pac-item-nome">${p.nome}</strong>
                    <span class="pac-item-abordagem">${p.abordagem || "—"} · ${p.demanda || "—"}</span>
                </div>
                <div class="pac-item-right">
                    <span class="pac-status-badge ${statusCls}">${statusLabel}</span>
                    <span class="pac-item-notas">${qtdNotas} nota${qtdNotas !== 1 ? "s" : ""}</span>
                </div>
            </div>`;
    }).join("");

    lista.querySelectorAll(".sessoes-pac-item").forEach(el => {
        el.addEventListener("click", () => {
            const pac = pacientes.find(p => p.id === el.dataset.id);
            if (pac) selecionarPaciente(pac);
        });
    });
}

// ============================================================================
// SELECIONAR PACIENTE
// ============================================================================

function selecionarPaciente(pac) {
    pacienteSelecionado = pac;
    pararTimer();
    timerSegundos = 0;
    atualizarTimerDisplay();

    document.getElementById("sessaoVazio").style.display  = "none";
    document.getElementById("sessaoPainel").style.display = "flex";

    const inicial = pac.nome.charAt(0).toUpperCase();
    document.getElementById("sessaoPacAvatar").textContent = inicial;
    document.getElementById("sessaoPacNome").textContent   = pac.nome;

    const statusLabel = { ativo: "Ativo", pausa: "Em Pausa", alta: "Alta" }[pac.status] || "Ativo";
    const statusCls   = { ativo: "status-ativo", pausa: "status-pausa", alta: "status-alta" }[pac.status] || "status-ativo";
    document.getElementById("sessaoPacMeta").innerHTML = `
        ${pac.abordagem ? `<span>${pac.abordagem}</span>` : ""}
        ${pac.demanda   ? `<span>${pac.demanda}</span>`   : ""}
        <span class="pac-status-badge ${statusCls}">${statusLabel}</span>
    `;

    renderizarHistorico();
    renderizarLista();

    document.getElementById("notaTexto").value = "";
    document.getElementById("notaChars").textContent = "0 / 2000";
}

// ============================================================================
// HISTÓRICO
// ============================================================================

function renderizarHistorico() {
    const hist   = document.getElementById("sessaoHistorico");
    const count  = document.getElementById("sessaoHistCount");
    if (!pacienteSelecionado) return;

    const lista = (notas[pacienteSelecionado.id] || []).slice().reverse();
    count.textContent = `${lista.length} registro${lista.length !== 1 ? "s" : ""}`;

    if (!lista.length) {
        hist.innerHTML = `
            <div class="sessoes-lista-vazio">
                <i class="fa-regular fa-file-lines"></i>
                <p>Nenhuma anotação ainda.</p>
            </div>`;
        return;
    }

    hist.innerHTML = lista.map((n, idx) => `
        <div class="sessao-nota-item">
            <div class="nota-item-header">
                <span class="nota-item-tag nota-tag-${n.tag?.toLowerCase().replace(/ê/g,'e').replace(/ã/g,'a') || 'evolucao'}">${n.tag || "Evolução"}</span>
                <span class="nota-item-data">${n.data} · ${n.hora}</span>
                <button class="btn-icon-xs btn-danger-sm nota-del" data-idx="${lista.length - 1 - idx}" title="Excluir">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
            <p class="nota-item-texto">${n.texto.replace(/\n/g, "<br>")}</p>
        </div>
    `).join("");

    hist.querySelectorAll(".nota-del").forEach(btn => {
        btn.addEventListener("click", () => excluirNota(parseInt(btn.dataset.idx)));
    });
}

function excluirNota(idx) {
    if (!pacienteSelecionado) return;
    if (!confirm("Excluir esta anotação?")) return;
    const lista = notas[pacienteSelecionado.id] || [];
    lista.splice(idx, 1);
    notas[pacienteSelecionado.id] = lista;
    salvarNotas(notas);
    renderizarHistorico();
    renderizarLista();
}

// ============================================================================
// SALVAR NOTA
// ============================================================================

function salvarNota() {
    if (!pacienteSelecionado) return;
    const texto = document.getElementById("notaTexto").value.trim();
    if (!texto) return;

    const agora = new Date();
    const nota  = {
        tag:   tagAtiva,
        texto,
        data:  agora.toLocaleDateString("pt-BR"),
        hora:  agora.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" }),
        timer: timerSegundos > 0 ? formatarTimer(timerSegundos) : null
    };

    if (!notas[pacienteSelecionado.id]) notas[pacienteSelecionado.id] = [];
    notas[pacienteSelecionado.id].push(nota);
    salvarNotas(notas);

    document.getElementById("notaTexto").value = "";
    document.getElementById("notaChars").textContent = "0 / 2000";
    renderizarHistorico();
    renderizarLista();
}

// ============================================================================
// TIMER
// ============================================================================

function formatarTimer(s) {
    const m = Math.floor(s / 60).toString().padStart(2, "0");
    const seg = (s % 60).toString().padStart(2, "0");
    return `${m}:${seg}`;
}

function atualizarTimerDisplay() {
    document.getElementById("sessaoTimerDisplay").textContent = formatarTimer(timerSegundos);
}

function iniciarTimer() {
    if (timerRodando) return;
    timerRodando = true;
    document.getElementById("btnTimerIniciar").disabled = true;
    document.getElementById("btnTimerPausar").disabled  = false;
    document.getElementById("btnTimerReset").disabled   = false;
    timerInterval = setInterval(() => {
        timerSegundos++;
        atualizarTimerDisplay();
    }, 1000);
}

function pausarTimer() {
    timerRodando = false;
    clearInterval(timerInterval);
    document.getElementById("btnTimerIniciar").disabled = false;
    document.getElementById("btnTimerPausar").disabled  = true;
}

function pararTimer() {
    timerRodando = false;
    clearInterval(timerInterval);
    document.getElementById("btnTimerIniciar").disabled = false;
    document.getElementById("btnTimerPausar").disabled  = true;
    document.getElementById("btnTimerReset").disabled   = true;
}

function resetTimer() {
    pararTimer();
    timerSegundos = 0;
    atualizarTimerDisplay();
}

// ============================================================================
// MODAL PACIENTE
// ============================================================================

function abrirModalPaciente(pac = null) {
    editandoId = pac ? pac.id : null;
    document.getElementById("modalPacTag").textContent    = pac ? "Editar Paciente" : "Novo Paciente";
    document.getElementById("modalPacTitulo").textContent = pac ? "Editar Paciente" : "Cadastrar Paciente";
    document.getElementById("pacNome").value        = pac?.nome       || "";
    document.getElementById("pacAbordagem").value   = pac?.abordagem  || "";
    document.getElementById("pacDemanda").value     = pac?.demanda    || "";
    document.getElementById("pacStatus").value      = pac?.status     || "ativo";
    document.getElementById("pacObs").value         = pac?.obs        || "";

    document.getElementById("modalPaciente").classList.add("ativo");
    document.getElementById("modalPacOverlay").classList.add("ativo");
    document.body.style.overflow = "hidden";
    document.getElementById("pacNome").focus();
}

function fecharModalPaciente() {
    document.getElementById("modalPaciente").classList.remove("ativo");
    document.getElementById("modalPacOverlay").classList.remove("ativo");
    document.body.style.overflow = "";
    editandoId = null;
}

function salvarPaciente() {
    const nome = document.getElementById("pacNome").value.trim();
    if (!nome) {
        document.getElementById("pacNome").focus();
        return;
    }

    if (editandoId) {
        const idx = pacientes.findIndex(p => p.id === editandoId);
        if (idx > -1) {
            pacientes[idx] = {
                ...pacientes[idx],
                nome,
                abordagem: document.getElementById("pacAbordagem").value,
                demanda:   document.getElementById("pacDemanda").value.trim(),
                status:    document.getElementById("pacStatus").value,
                obs:       document.getElementById("pacObs").value.trim()
            };
            if (pacienteSelecionado?.id === editandoId) {
                pacienteSelecionado = pacientes[idx];
                selecionarPaciente(pacientes[idx]);
            }
        }
    } else {
        const novo = {
            id:        gerarId(),
            nome,
            abordagem: document.getElementById("pacAbordagem").value,
            demanda:   document.getElementById("pacDemanda").value.trim(),
            status:    document.getElementById("pacStatus").value,
            obs:       document.getElementById("pacObs").value.trim(),
            criado:    new Date().toLocaleDateString("pt-BR")
        };
        pacientes.unshift(novo);
    }

    salvarPacientes(pacientes);
    fecharModalPaciente();
    renderizarLista();
}

function removerPaciente() {
    if (!pacienteSelecionado) return;
    if (!confirm(`Remover "${pacienteSelecionado.nome}" e todas as suas anotações? Esta ação não pode ser desfeita.`)) return;

    delete notas[pacienteSelecionado.id];
    salvarNotas(notas);

    pacientes = pacientes.filter(p => p.id !== pacienteSelecionado.id);
    salvarPacientes(pacientes);

    pacienteSelecionado = null;
    pararTimer();
    timerSegundos = 0;

    document.getElementById("sessaoPainel").style.display = "none";
    document.getElementById("sessaoVazio").style.display  = "flex";

    renderizarLista();
}

// ============================================================================
// EVENTOS
// ============================================================================

function iniciarEventos() {
    // Novo paciente
    document.getElementById("btnNovoPaciente")?.addEventListener("click", () => abrirModalPaciente());
    document.getElementById("modalPacClose")?.addEventListener("click", fecharModalPaciente);
    document.getElementById("btnCancelarPaciente")?.addEventListener("click", fecharModalPaciente);
    document.getElementById("modalPacOverlay")?.addEventListener("click", fecharModalPaciente);
    document.getElementById("btnSalvarPaciente")?.addEventListener("click", salvarPaciente);

    // Editar / Remover
    document.getElementById("btnEditarPaciente")?.addEventListener("click", () => {
        if (pacienteSelecionado) abrirModalPaciente(pacienteSelecionado);
    });
    document.getElementById("btnRemoverPaciente")?.addEventListener("click", removerPaciente);

    // Filtros
    document.getElementById("filtroStatusPac")?.querySelectorAll(".pill").forEach(btn => {
        btn.addEventListener("click", () => {
            document.getElementById("filtroStatusPac").querySelectorAll(".pill")
                .forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            filtroStatus = btn.dataset.filtro;
            renderizarLista();
        });
    });

    document.getElementById("buscaPaciente")?.addEventListener("input", e => {
        termoBusca = e.target.value.toLowerCase().trim();
        renderizarLista();
    });

    // Tags de nota
    document.querySelectorAll(".sessao-nota-tags .pill").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".sessao-nota-tags .pill").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            tagAtiva = btn.dataset.tag;
        });
    });

    // Salvar nota
    document.getElementById("btnSalvarNota")?.addEventListener("click", salvarNota);

    // Contador de caracteres
    document.getElementById("notaTexto")?.addEventListener("input", e => {
        const len = e.target.value.length;
        document.getElementById("notaChars").textContent = `${len} / 2000`;
        if (len > 2000) e.target.value = e.target.value.slice(0, 2000);
    });

    // Timer
    document.getElementById("btnTimerIniciar")?.addEventListener("click", iniciarTimer);
    document.getElementById("btnTimerPausar")?.addEventListener("click", pausarTimer);
    document.getElementById("btnTimerReset")?.addEventListener("click", resetTimer);

    // Escape
    document.addEventListener("keydown", e => {
        if (e.key === "Escape") fecharModalPaciente();
    });
}

// ============================================================================
// INIT
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
    renderizarLista();
    iniciarEventos();
    console.log("💬 Sessões carregadas —", pacientes.length, "pacientes no localStorage.");
});