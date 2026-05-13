// ============================================================================
// configuracoes.js — MindFlow · Configurações
// ============================================================================

const CHAVE_CFG  = "mindflow_config";
const CHAVE_PAC  = "mindflow_pacientes";
const CHAVE_NOTAS= "mindflow_notas";

// ============================================================================
// STORAGE
// ============================================================================
function carregarConfig() {
    return JSON.parse(localStorage.getItem(CHAVE_CFG) || "{}");
}

function salvarConfig(obj) {
    localStorage.setItem(CHAVE_CFG, JSON.stringify(obj));
}

let cfg = carregarConfig();

// LIMPAR COR ANTIGA BUGADA
delete cfg.corDestaque;

salvarConfig(cfg);

// ============================================================================
// TOAST
// ============================================================================

function toast(msg, tipo = "ok") {
    const el = document.getElementById("cfgToast");
    if (!el) return;
    el.textContent = msg;
    el.className   = `cfg-toast visivel cfg-toast-${tipo}`;
    clearTimeout(el._t);
    el._t = setTimeout(() => el.classList.remove("visivel"), 3000);
}

// ============================================================================
// NAVEGAÇÃO DE SEÇÕES
// ============================================================================

function iniciarNav() {
    document.querySelectorAll(".cfg-nav-item").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".cfg-nav-item").forEach(b => b.classList.remove("active"));
            document.querySelectorAll(".cfg-section").forEach(s => s.classList.remove("active"));
            btn.classList.add("active");
            const sec = document.getElementById("sec-" + btn.dataset.section);
            if (sec) sec.classList.add("active");
        });
    });
}

// ============================================================================
// PERFIL
// ============================================================================

function carregarPerfil() {
    document.getElementById("cfgNome").value          = cfg.nome          || "";
    document.getElementById("cfgCrp").value           = cfg.crp           || "";
    document.getElementById("cfgAbordagem").value     = cfg.abordagem      || "";
    document.getElementById("cfgEspecialidade").value = cfg.especialidade  || "";
    document.getElementById("cfgInstituicao").value   = cfg.instituicao    || "";
    atualizarPreviewPerfil();
}

function atualizarPreviewPerfil() {
    const nome   = document.getElementById("cfgNome").value || "Psicólogo(a)";
    const crp    = document.getElementById("cfgCrp").value  || "—";
    const letra  = nome.charAt(0).toUpperCase();

    document.getElementById("cfgAvatarPreview").textContent    = letra;
    document.getElementById("cfgAvatarNomePreview").textContent = nome;
    document.getElementById("cfgAvatarCrpPreview").textContent  = crp !== "—" ? `CRP ${crp}` : "—";

    // Atualizar header
    const headerNome = document.getElementById("cfgHeaderNome");
    const headerLetra= document.getElementById("cfgAvatarLetra");
    if (headerNome) headerNome.textContent = nome;
    if (headerLetra) headerLetra.textContent = letra;
}

function salvarPerfil() {
    cfg.nome         = document.getElementById("cfgNome").value.trim();
    cfg.crp          = document.getElementById("cfgCrp").value.trim();
    cfg.abordagem    = document.getElementById("cfgAbordagem").value;
    cfg.especialidade= document.getElementById("cfgEspecialidade").value.trim();
    cfg.instituicao  = document.getElementById("cfgInstituicao").value.trim();
    salvarConfig(cfg);
    atualizarPreviewPerfil();
    toast("✓ Perfil salvo com sucesso.");
}

// ============================================================================
// APARÊNCIA
// ============================================================================
function carregarAparencia() {

    // Tema salvo
    const temaSalvo =
        cfg.tema ||
        localStorage.getItem("mindflow_tema") ||
        "dark";

    document.documentElement.setAttribute(
        "data-theme",
        temaSalvo
    );

    marcarTemaBotao(temaSalvo);

const corSalva = cfg.corDestaque || null;

if (corSalva) {
    document.documentElement.style.setProperty(
        "--cor-primaria",
        corSalva
    );

    document.documentElement.style.setProperty(
        "--cor-primaria-soft",
        corSalva + "18"
    );

    document.documentElement.style.setProperty(
        "--shadow-glow",
        `0 0 20px ${corSalva}30, 0 0 40px ${corSalva}18`
    );

    marcarCorAtiva(corSalva);
}

    // Toggles
    document.getElementById("cfgSidebarExpand").checked =
        cfg.sidebarExpand !== false;

    document.getElementById("cfgAnimacoes").checked =
        cfg.animacoes !== false;
}

function marcarTemaBotao(tema) {
    document.querySelectorAll(".cfg-tema-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.tema === tema);
    });
}

function marcarCorAtiva(cor) {
    document.querySelectorAll(".cfg-cor-item").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.cor === cor);
    });
}

function salvarAparencia() {

    const tema =
        document.documentElement.getAttribute("data-theme");

    const corSelecionada =
        document.querySelector(".cfg-cor-item.active")?.dataset.cor;

    cfg.tema = tema;

    // SALVA somente se for diferente da padrão
    cfg.corDestaque = corSelecionada;

    cfg.sidebarExpand =
        document.getElementById("cfgSidebarExpand").checked;

    cfg.animacoes =
        document.getElementById("cfgAnimacoes").checked;

    salvarConfig(cfg);

    aplicarCor(corSelecionada);

    toast("✓ Aparência salva com sucesso.");
}

// ============================================================================
// SESSÃO
// ============================================================================

function carregarSessao() {
    const dur = cfg.duracaoSessao || 50;
    const alr = cfg.alertaMin     || 5;
    document.getElementById("cfgDuracaoSessao").value    = dur;
    document.getElementById("cfgDuracaoSessaoVal").textContent = `${dur} min`;
    document.getElementById("cfgAlertaMin").value        = alr;
    document.getElementById("cfgAlertaMinVal").textContent     = alr === 0 ? "Desativado" : `${alr} min antes`;
    document.getElementById("cfgSomFim").checked         = cfg.somFim        !== false;
    document.getElementById("cfgConfirmReset").checked   = cfg.confirmReset  !== false;
    document.getElementById("cfgMostrarChars").checked   = cfg.mostrarChars  !== false;
}

function salvarSessao() {
    cfg.duracaoSessao = parseInt(document.getElementById("cfgDuracaoSessao").value);
    cfg.alertaMin     = parseInt(document.getElementById("cfgAlertaMin").value);
    cfg.somFim        = document.getElementById("cfgSomFim").checked;
    cfg.confirmReset  = document.getElementById("cfgConfirmReset").checked;
    cfg.mostrarChars  = document.getElementById("cfgMostrarChars").checked;
    salvarConfig(cfg);
    toast("✓ Configurações de sessão salvas.");
}

// ============================================================================
// NOTIFICAÇÕES
// ============================================================================

function carregarNotificacoes() {
    document.getElementById("cfgInsightDia").checked    = cfg.insightDia    !== false;
    document.getElementById("cfgCitacao").checked       = cfg.citacao       !== false;
    document.getElementById("cfgClima").checked         = cfg.clima         !== false;
    document.getElementById("cfgLembreteMind").checked  = cfg.lembreteMind  === true;
}

function salvarNotificacoes() {
    cfg.insightDia   = document.getElementById("cfgInsightDia").checked;
    cfg.citacao      = document.getElementById("cfgCitacao").checked;
    cfg.clima        = document.getElementById("cfgClima").checked;
    cfg.lembreteMind = document.getElementById("cfgLembreteMind").checked;
    salvarConfig(cfg);
    toast("✓ Notificações salvas.");
}

// ============================================================================
// DADOS — ESTATÍSTICAS
// ============================================================================

function carregarStats() {
    const pacs  = JSON.parse(localStorage.getItem(CHAVE_PAC)   || "[]");
    const notas = JSON.parse(localStorage.getItem(CHAVE_NOTAS) || "{}");
    const totalNotas = Object.values(notas).reduce((s, v) => s + v.length, 0);
    const cfgSize = (localStorage.getItem(CHAVE_CFG) || "").length;
    const totalKB = Math.ceil(
        ((localStorage.getItem(CHAVE_PAC)   || "").length +
         (localStorage.getItem(CHAVE_NOTAS) || "").length +
         cfgSize) / 1024
    );

    document.getElementById("cfgStatsGrid").innerHTML = `
        <div class="cfg-stat-item">
            <i class="fa-solid fa-user"></i>
            <strong>${pacs.length}</strong>
            <span>Pacientes</span>
        </div>
        <div class="cfg-stat-item">
            <i class="fa-solid fa-file-lines"></i>
            <strong>${totalNotas}</strong>
            <span>Anotações</span>
        </div>
        <div class="cfg-stat-item">
            <i class="fa-solid fa-hard-drive"></i>
            <strong>${totalKB} KB</strong>
            <span>Armazenado</span>
        </div>
    `;
}

// ============================================================================
// DADOS — EXPORTAR
// ============================================================================

function exportarDados() {
    const dados = {
        exportado:  new Date().toISOString(),
        versao:     "1.0.0",
        config:     JSON.parse(localStorage.getItem(CHAVE_CFG)   || "{}"),
        pacientes:  JSON.parse(localStorage.getItem(CHAVE_PAC)   || "[]"),
        notas:      JSON.parse(localStorage.getItem(CHAVE_NOTAS) || "{}")
    };

    const blob = new Blob([JSON.stringify(dados, null, 2)], { type: "application/json" });
    const url  = URL.createObjectURL(blob);
    const a    = document.createElement("a");
    const data = new Date().toLocaleDateString("pt-BR").replace(/\//g, "-");
    a.href     = url;
    a.download = `mindflow_backup_${data}.json`;
    a.click();
    URL.revokeObjectURL(url);
    toast("✓ Backup exportado com sucesso.");
}

// ============================================================================
// DADOS — IMPORTAR
// ============================================================================

function importarDados(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
        try {
            const dados = JSON.parse(e.target.result);
            if (!dados.versao) throw new Error("Arquivo inválido.");
            if (!confirm("Importar este backup? Os dados atuais serão substituídos.")) return;

            if (dados.config)    localStorage.setItem(CHAVE_CFG,   JSON.stringify(dados.config));
            if (dados.pacientes) localStorage.setItem(CHAVE_PAC,   JSON.stringify(dados.pacientes));
            if (dados.notas)     localStorage.setItem(CHAVE_NOTAS, JSON.stringify(dados.notas));

            toast("✓ Backup importado. Recarregando...", "ok");
            setTimeout(() => location.reload(), 1500);
        } catch {
            toast("✗ Arquivo inválido ou corrompido.", "erro");
        }
    };
    reader.readAsText(file);
}

// ============================================================================
// DADOS — LIMPAR
// ============================================================================

function limparSessoes() {
    if (!confirm("Remover todos os pacientes e anotações? Esta ação não pode ser desfeita.")) return;
    localStorage.removeItem(CHAVE_PAC);
    localStorage.removeItem(CHAVE_NOTAS);
    carregarStats();
    toast("✓ Pacientes e anotações removidos.", "ok");
}

function restaurarPadrao() {
    if (!confirm("Restaurar todos os padrões de fábrica? Todos os dados serão apagados.")) return;
    localStorage.clear();
    toast("✓ Padrões restaurados. Recarregando...", "ok");
    setTimeout(() => location.reload(), 1500);
}

// ============================================================================
// EVENTOS
// ============================================================================

function iniciarEventos() {

    // Perfil
    document.getElementById("btnSalvarPerfil")?.addEventListener("click", salvarPerfil);
    ["cfgNome","cfgCrp"].forEach(id => {
        document.getElementById(id)?.addEventListener("input", atualizarPreviewPerfil);
    });

    // Aparência — tema
    document.querySelectorAll(".cfg-tema-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const tema = btn.dataset.tema;
cfg.tema = tema;

document.documentElement.setAttribute(
    "data-theme",
    tema
);

marcarTemaBotao(tema);

// RESETAR COR PADRÃO DO TEMA
resetarCorPadraoTema(tema);
            // Sincronizar imagens
            document.querySelectorAll(".card-principal-img").forEach(img => {
                img.src = tema === "dark" ? "static/imagens/imgfundo2.png" : "static/imagens/imgfundo1.png";
            });
            document.querySelectorAll(".logo-crv").forEach(logo => {
                logo.src = tema === "dark" ? "static/imagens/logoclaro.png" : "static/imagens/logoescuro.png";
            });
            localStorage.setItem("mindflow_tema", tema);
        });
    });

    // Aparência — cores
    document.querySelectorAll(".cfg-cor-item").forEach(btn => {
        btn.addEventListener("click", () => {
            marcarCorAtiva(btn.dataset.cor);
            const cor = btn.dataset.cor;

document.documentElement.style.setProperty(
    "--cor-primaria",
    cor
);

document.documentElement.style.setProperty(
    "--cor-primaria-soft",
    cor + "18"
);

document.documentElement.style.setProperty(
    "--shadow-glow",
    `0 0 20px ${cor}30, 0 0 40px ${cor}18`
);
        });
    });

    document.getElementById("btnSalvarAparencia")?.addEventListener("click", salvarAparencia);

    // Ranges
    document.getElementById("cfgDuracaoSessao")?.addEventListener("input", e => {
        document.getElementById("cfgDuracaoSessaoVal").textContent = `${e.target.value} min`;
    });
    document.getElementById("cfgAlertaMin")?.addEventListener("input", e => {
        const v = parseInt(e.target.value);
        document.getElementById("cfgAlertaMinVal").textContent = v === 0 ? "Desativado" : `${v} min antes`;
    });

    document.getElementById("btnSalvarSessao")?.addEventListener("click", salvarSessao);
    document.getElementById("btnSalvarNotif")?.addEventListener("click", salvarNotificacoes);

    // Dados
    document.getElementById("btnExportar")?.addEventListener("click", exportarDados);
    document.getElementById("cfgImportFile")?.addEventListener("change", e => {
        importarDados(e.target.files[0]);
    });
    document.getElementById("btnLimparSessoes")?.addEventListener("click", limparSessoes);
    document.getElementById("btnLimparTudo")?.addEventListener("click", restaurarPadrao);
}

// ============================================================================
// INIT
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
    iniciarNav();
    carregarPerfil();
    carregarAparencia();
    carregarSessao();
    carregarNotificacoes();
    carregarStats();
    iniciarEventos();
    console.log("⚙️ Configurações carregadas.");
});