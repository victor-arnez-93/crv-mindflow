/* =========================================================
   ATIVIDADES.JS — ATIVIDADES TERAPÊUTICAS
========================================================= */

/* =========================================================
   ELEMENTOS
========================================================= */

const modal =
    document.getElementById('modalAtividade');

const modalBody =
    document.getElementById('modalBody');

const fecharModal =
    document.getElementById('fecharModal');

const botoesAtividade =
    document.querySelectorAll('.btn-atividade');

const filtros =
    document.querySelectorAll('.filtro-btn');

const cards =
    document.querySelectorAll('.atividade-card');

const busca =
    document.getElementById('buscarAtividades');

const heroBg =
    document.getElementById('atividadesHeroBg');

const btnModoSessao =
    document.getElementById('btnModoSessao');

const btnAtividadeAleatoria =
    document.getElementById('btnAtividadeAleatoria');

/* =========================================================
   IMAGEM HERO DINÂMICA
========================================================= */

function atualizarImagemTema(){

    const tema =
        document.documentElement
            .getAttribute('data-theme');

    if(!heroBg) return;

    heroBg.src =
        tema === 'dark'
        ? 'static/imagens/imgfundo2.png'
        : 'static/imagens/imgfundo1.png';
}

atualizarImagemTema();

new MutationObserver(
    atualizarImagemTema
).observe(

    document.documentElement,

    {
        attributes:true,
        attributeFilter:['data-theme']
    }
);

/* =========================================================
   FILTROS
========================================================= */

filtros.forEach(btn => {

    btn.addEventListener('click', () => {

        filtros.forEach(b =>
            b.classList.remove('active')
        );

        btn.classList.add('active');

        const filtro =
            btn.innerText
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g,'');

        cards.forEach(card => {

            const categoria =
                card.dataset.categoria
                    .toLowerCase()
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g,'');

            if(
                filtro === 'todas'
                ||
                categoria.includes(filtro)
            ){

                card.style.display = 'flex';

                setTimeout(() => {

                    card.style.opacity = '1';

                    card.style.transform =
                        'translateY(0px)';

                }, 40);

            }else{

                card.style.opacity = '0';

                card.style.transform =
                    'translateY(14px)';

                setTimeout(() => {

                    card.style.display = 'none';

                }, 180);

            }

        });

    });

});

/* =========================================================
   BUSCA
========================================================= */

if(busca){

    busca.addEventListener('input', () => {

        const termo =
            busca.value.toLowerCase();

        cards.forEach(card => {

            const texto =
                card.innerText.toLowerCase();

            if(texto.includes(termo)){

                card.style.display = 'flex';

            }else{

                card.style.display = 'none';
            }

        });

    });

}

/* =========================================================
   ANIMAÇÃO DE ENTRADA
========================================================= */

const observer =
    new IntersectionObserver((entries) => {

    entries.forEach((entry, index) => {

        if(entry.isIntersecting){

            entry.target.style.opacity = '1';

            entry.target.style.transform =
                'translateY(0px)';

            entry.target.style.transition =
                `all .55s ease ${index * 0.04}s`;
        }

    });

},{
    threshold:0.12
});

cards.forEach(card => {

    card.style.opacity = '0';

    card.style.transform =
        'translateY(18px)';

    observer.observe(card);

});

/* =========================================================
   PERGUNTAS REFLEXIVAS
========================================================= */

const perguntasReflexivas = [

    "O que você sente que está evitando enfrentar atualmente?",

    "Qual emoção você mais tenta esconder das pessoas?",

    "O que mais pesa emocionalmente na sua rotina hoje?",

    "O que você gostaria que alguém compreendesse sobre você?",

    "Quais necessidades emocionais suas estão negligenciadas?",

    "O que você costuma reprimir emocionalmente?",

    "O que mais te afasta de si mesmo atualmente?",

    "Quando você se sente verdadeiramente acolhido?"
];

/* =========================================================
   CONTEÚDOS DOS MODAIS
========================================================= */

const conteudos = {

    termometro:`

        <h2>
            Termômetro Emocional
        </h2>

        <p>
            Ferramenta utilizada para auxiliar
            o paciente na identificação e
            intensidade emocional.
        </p>

        <div class="atividade-box">

            <strong>
                Escala Emocional
            </strong>

            <ul>

                <li>
                    0-2 → leve
                </li>

                <li>
                    3-5 → moderado
                </li>

                <li>
                    6-8 → intenso
                </li>

                <li>
                    9-10 → muito intenso
                </li>

            </ul>

        </div>

        <h3>
            Aplicação Clínica
        </h3>

        <p>
            Utilizado em TCC, ACT e DBT
            para desenvolvimento de
            consciência emocional.
        </p>
    `,

    respiracao:`

        <h2>
            Respiração Guiada
        </h2>

        <p>
            Exercício baseado em regulação
            fisiológica e ativação do sistema
            parassimpático.
        </p>

        <div class="atividade-box">

            <strong>
                Exercício
            </strong>

            <ul>

                <li>
                    Inspirar por 4 segundos
                </li>

                <li>
                    Segurar por 2 segundos
                </li>

                <li>
                    Expirar lentamente por 6 segundos
                </li>

                <li>
                    Repetir por 2 minutos
                </li>

            </ul>

        </div>

        <h3>
            Evidência Científica
        </h3>

        <p>
            Estudos demonstram redução
            de frequência cardíaca,
            tensão muscular e cortisol.
        </p>
    `,

    perguntas:`

        <h2>
            Perguntas Reflexivas
        </h2>

        <p>
            Perguntas utilizadas para aprofundamento
            emocional e reflexão terapêutica.
        </p>

        <div class="atividade-box">

            <strong>
                Pergunta Atual
            </strong>

            <div
                class="pergunta-randomica"
                id="perguntaRandomica"
            >

                O que você sente que evita enfrentar atualmente?

            </div>

            <button
                class="btn-interacao"
                id="novaPergunta"
            >

                Nova Pergunta

            </button>

        </div>

        <h3>
            Aplicação Clínica
        </h3>

        <p>
            Muito utilizada em abordagens
            humanistas, existenciais
            e psicodinâmicas.
        </p>
    `,

    qualidades:`

        <h2>
            Inventário de Qualidades
        </h2>

        <p>
            Exercício terapêutico focado
            em fortalecimento emocional,
            autoestima e identidade.
        </p>

        <div class="atividade-box">

            <strong>
                Reflexão Terapêutica
            </strong>

            <ul>

                <li>
                    Quais qualidades você reconhece em si?
                </li>

                <li>
                    O que pessoas próximas admiram em você?
                </li>

                <li>
                    Quais desafios você já superou?
                </li>

            </ul>

        </div>

        <h3>
            Objetivo Clínico
        </h3>

        <p>
            Redução da autocrítica
            e fortalecimento da autoimagem.
        </p>
    `,

    comunicacao:`

        <h2>
            Comunicação Assertiva
        </h2>

        <p>
            Dinâmica voltada para
            expressão emocional saudável
            e desenvolvimento de limites.
        </p>

        <div class="atividade-box">

            <strong>
                Estrutura Recomendada
            </strong>

            <ul>

                <li>
                    O que aconteceu?
                </li>

                <li>
                    Como você se sentiu?
                </li>

                <li>
                    O que você gostaria de comunicar?
                </li>

                <li>
                    Qual limite precisa ser estabelecido?
                </li>

            </ul>

        </div>

        <h3>
            Aplicações
        </h3>

        <p>
            Relacionamentos,
            conflitos interpessoais
            e habilidades sociais.
        </p>
    `,

    nomeacao:`

        <h2>
            Nomeação Emocional
        </h2>

        <p>
            Exercício utilizado para ampliar
            consciência emocional e vocabulário afetivo.
        </p>

        <div class="atividade-box">

            <strong>
                Perguntas
            </strong>

            <ul>

                <li>
                    O que você está sentindo agora?
                </li>

                <li>
                    Onde sente isso no corpo?
                </li>

                <li>
                    O que desencadeou essa emoção?
                </li>

                <li>
                    O que essa emoção tenta comunicar?
                </li>

            </ul>

        </div>

        <h3>
            Benefícios
        </h3>

        <p>
            Melhora da autorregulação emocional
            e consciência afetiva.
        </p>
    `
};

/* =========================================================
   ABRIR MODAL
========================================================= */

botoesAtividade.forEach(botao => {

    botao.addEventListener('click', () => {

        const id =
            botao.dataset.modal;

        modal.classList.add('ativo');

        document.body.style.overflow =
            'hidden';

        modalBody.innerHTML =
            conteudos[id] ||
            `
                <h2>
                    Atividade em desenvolvimento
                </h2>

                <p>
                    Novas experiências terapêuticas
                    serão adicionadas em breve.
                </p>
            `;

        iniciarEventosDinamicos();
    });

});

/* =========================================================
   EVENTOS DINÂMICOS
========================================================= */

function iniciarEventosDinamicos(){

    const btnNovaPergunta =
        document.getElementById('novaPergunta');

    const perguntaElemento =
        document.getElementById('perguntaRandomica');

    if(
        btnNovaPergunta &&
        perguntaElemento
    ){

        btnNovaPergunta.addEventListener('click', () => {

            const pergunta =
                perguntasReflexivas[
                    Math.floor(
                        Math.random() *
                        perguntasReflexivas.length
                    )
                ];

            perguntaElemento.innerText =
                pergunta;
        });

    }

}

/* =========================================================
   FECHAR MODAL
========================================================= */

function fechar(){

    modal.classList.remove('ativo');

    document.body.style.overflow =
        'auto';
}

fecharModal.addEventListener(
    'click',
    fechar
);

modal.addEventListener('click', (e) => {

    if(e.target === modal){

        fechar();
    }
});

/* =========================================================
   ATIVIDADE ALEATÓRIA
========================================================= */

if(btnAtividadeAleatoria){

    btnAtividadeAleatoria.addEventListener('click', () => {

        const cardsVisiveis =
            [...cards].filter(card =>
                card.style.display !== 'none'
            );

        const randomCard =
            cardsVisiveis[
                Math.floor(
                    Math.random() *
                    cardsVisiveis.length
                )
            ];

        randomCard.scrollIntoView({

            behavior:'smooth',
            block:'center'
        });

        randomCard.style.transform =
            'scale(1.02)';

        setTimeout(() => {

            randomCard.style.transform = '';

        }, 700);

    });

}

/* =========================================================
   MODO SESSÃO
========================================================= */

if(btnModoSessao){

    btnModoSessao.addEventListener('click', () => {

        document.body.classList.toggle(
            'modo-sessao'
        );

    });

}

/* =========================================================
   LOG
========================================================= */

console.log(
    '🧠 MindFlow — Atividades Terapêuticas carregado.'
);