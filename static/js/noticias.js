// ============================================================================
// MINDFLOW — NOTÍCIAS CIENTÍFICAS
// ============================================================================

const RSS_FEEDS = [

    {
        nome:"Psicologia Viva",
        rss:"https://api.rss2json.com/v1/api.json?rss_url=https://blog.psicologiaviva.com.br/feed/",
        limite:3,
        categoria:"Psicologia"
    },

    {
        nome:"Vittude",
        rss:"https://api.rss2json.com/v1/api.json?rss_url=https://www.vittude.com/blog/feed/",
        limite:2,
        categoria:"Saúde Mental"
    },

    {
        nome:"Neuroscience News",
        rss:"https://api.rss2json.com/v1/api.json?rss_url=https://neurosciencenews.com/feed/",
        limite:2,
        categoria:"Neurociência"
    }

];

// ============================================================================
// ESTADO
// ============================================================================

let noticiasMindFlow = [];
let noticiaAtual = 0;

// ============================================================================
// DATA RELATIVA
// ============================================================================

function formatarDataRelativa(data){

    const agora = new Date();
    const pub = new Date(data);

    const diffMs = agora - pub;

    const min = Math.floor(diffMs / 60000);
    const hrs = Math.floor(min / 60);
    const dias = Math.floor(hrs / 24);

    if(min < 60){
        return `Há ${min} min`;
    }

    if(hrs < 24){
        return `Há ${hrs}h`;
    }

    if(dias === 1){
        return "Ontem";
    }

    if(dias < 7){
        return `Há ${dias} dias`;
    }

    return pub.toLocaleDateString("pt-BR");
}

// ============================================================================
// IMAGEM FALLBACK
// ============================================================================

function obterImagem(item){

    if(item.thumbnail && item.thumbnail.length > 10){
        return item.thumbnail;
    }

    if(item.enclosure?.link){
        return item.enclosure.link;
    }

    return "static/imagens/imgfundo2.png";
}

// ============================================================================
// BUSCA RSS
// ============================================================================

async function buscarNoticias(){

    let todasNoticias = [];

    for(const feed of RSS_FEEDS){

        try{

            const resposta = await fetch(
                feed.rss + "&cache=" + Date.now()
            );

            const data = await resposta.json();

            if(!data.items) continue;

            const noticiasConvertidas = data.items
                .slice(0, feed.limite)
                .map(item => ({

                    titulo:item.title,

                    resumo:(item.description || "")
                        .replace(/<[^>]*>/g,"")
                        .substring(0,160) + "...",

                    categoria:feed.categoria,

                    fonte:feed.nome,

                    data:item.pubDate,

                    imagem:obterImagem(item),

                    link:item.link

                }));

            todasNoticias =
                todasNoticias.concat(noticiasConvertidas);

        }catch(erro){

            console.warn(
                "[MindFlow] erro feed:",
                feed.nome,
                erro
            );
        }
    }

    noticiasMindFlow = todasNoticias;

    renderizarNoticias();
}

// ============================================================================
// RENDER
// ============================================================================

function renderizarNoticias(){

    const container =
        document.getElementById("noticiasGrid");

    if(!container) return;

    container.innerHTML = "";

    noticiasMindFlow
        .slice(0,2)
        .forEach(noticia => {

            const card =
                document.createElement("article");

            card.className = "noticia-card";

            card.innerHTML = `

                <span class="noticia-fonte">
                    ${noticia.fonte}
                </span>

                <h3>
                    ${noticia.titulo}
                </h3>

                <a
                    href="${noticia.link}"
                    target="_blank"
                    class="noticia-link"
                >
                    Ler artigo
                </a>

            `;

            container.appendChild(card);

        });
}

// ============================================================================
// ROTAÇÃO
// ============================================================================

function iniciarRotacaoNoticias(){

    setInterval(() => {

        if(noticiasMindFlow.length <= 2) return;

        noticiaAtual++;

        if(noticiaAtual >= noticiasMindFlow.length){
            noticiaAtual = 0;
        }

        const reorganizadas = [

            ...noticiasMindFlow.slice(noticiaAtual),
            ...noticiasMindFlow.slice(0, noticiaAtual)

        ];

        const container =
            document.getElementById("noticiasGrid");

        if(container){

            container.style.opacity = 0;

            setTimeout(() => {

                container.innerHTML = "";

                reorganizadas
                    .slice(0,2)
                    .forEach(noticia => {

                        const card =
                            document.createElement("article");

                        card.className = "noticia-card";

                        card.innerHTML = `

                            <span class="noticia-fonte">
                                ${noticia.fonte}
                            </span>

                            <h3>
                                ${noticia.titulo}
                            </h3>

                            <a
                                href="${noticia.link}"
                                target="_blank"
                                class="noticia-link"
                            >
                                Ler artigo
                            </a>

                        `;

                        container.appendChild(card);

                    });

                container.style.opacity = 1;

            },300);
        }

    },12000);
}

// ============================================================================
// INIT
// ============================================================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        buscarNoticias();

        iniciarRotacaoNoticias();

    }
);