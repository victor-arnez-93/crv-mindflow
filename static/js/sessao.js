/* =========================================================
   SESSAO.JS — FERRAMENTAS CLÍNICAS
========================================================= */

/* =========================================================
   ELEMENTOS
========================================================= */

const modal =
    document.getElementById('modalFerramenta');

const modalBody =
    document.getElementById('modalBody');

const fecharModal =
    document.getElementById('fecharModal');

const botoesFerramenta =
    document.querySelectorAll('.btn-ferramenta');

const filtros =
    document.querySelectorAll('.filtro-btn');

const cards =
    document.querySelectorAll('.ferramenta-card');

const busca =
    document.getElementById('buscarFerramentas');

const heroImg =
    document.getElementById('sessaoHeroImg');

const btnModoSessao =
    document.getElementById('btnModoSessao');

const btnFerramentaAleatoria =
    document.getElementById('btnFerramentaAleatoria');

/* =========================================================
   IMAGEM DINÂMICA HERO
========================================================= */

function atualizarImagemTema(){

    const tema =
        document.documentElement
            .getAttribute('data-theme');

    if(!heroImg) return;

    heroImg.src =
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
   ANIMAÇÃO ENTRADA
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
   CONTEÚDOS DOS MODAIS
========================================================= */

const conteudos = {

    respiracao:`

        <h2>
            Respiração Diafragmática
        </h2>

        <p>
            Técnica baseada em ativação do sistema
            parassimpático e redução da hiperatividade
            fisiológica associada à ansiedade.
        </p>

        <h3>
            Aplicação em Sessão
        </h3>

        <ul>

            <li>
                Inspirar lentamente por 4 segundos
            </li>

            <li>
                Segurar por 2 segundos
            </li>

            <li>
                Expirar lentamente por 6 segundos
            </li>

            <li>
                Repetir entre 2 e 5 minutos
            </li>

        </ul>

        <h3>
            Benefícios Observados
        </h3>

        <ul>

            <li>
                Redução da frequência cardíaca
            </li>

            <li>
                Diminuição da tensão muscular
            </li>

            <li>
                Redução de cortisol
            </li>

            <li>
                Sensação de estabilidade emocional
            </li>

        </ul>

        <h3>
            Referências Científicas
        </h3>

        <p>
            Brown & Gerbarg (2005),
            Frontiers in Psychology,
            APA Anxiety Guidelines.
        </p>
    `,

    tcc:`

        <h2>
            Reestruturação Cognitiva
        </h2>

        <p>
            Técnica central da Terapia Cognitivo-Comportamental
            utilizada para identificação e modificação
            de pensamentos automáticos negativos.
        </p>

        <h3>
            Objetivos Clínicos
        </h3>

        <ul>

            <li>
                Identificar distorções cognitivas
            </li>

            <li>
                Reduzir pensamentos catastróficos
            </li>

            <li>
                Melhorar percepção emocional
            </li>

            <li>
                Desenvolver interpretações funcionais
            </li>

        </ul>

        <h3>
            Aplicações
        </h3>

        <ul>

            <li>
                Ansiedade
            </li>

            <li>
                Depressão
            </li>

            <li>
                Autoestima
            </li>

            <li>
                Fobia Social
            </li>

        </ul>

        <h3>
            Referência Científica
        </h3>

        <p>
            Aaron Beck — Cognitive Therapy and Emotional Disorders.
        </p>
    `,

    emocoes:`

        <h2>
            Roda das Emoções
        </h2>

        <p>
            Ferramenta utilizada para ampliação
            do repertório emocional e melhora
            da consciência afetiva.
        </p>

        <h3>
            Objetivos
        </h3>

        <ul>

            <li>
                Nomeação emocional
            </li>

            <li>
                Reconhecimento afetivo
            </li>

            <li>
                Ampliação emocional
            </li>

            <li>
                Expressão emocional
            </li>

        </ul>

        <h3>
            Aplicações Terapêuticas
        </h3>

        <ul>

            <li>
                TCC
            </li>

            <li>
                ACT
            </li>

            <li>
                Terapia Humanista
            </li>

            <li>
                DBT
            </li>

        </ul>
    `,

    grounding:`

        <h2>
            Grounding 5-4-3-2-1
        </h2>

        <p>
            Técnica de ancoragem sensorial
            muito utilizada em ansiedade,
            dissociação e crises emocionais.
        </p>

        <h3>
            Exercício Guiado
        </h3>

        <ul>

            <li>
                5 coisas que você vê
            </li>

            <li>
                4 coisas que você sente
            </li>

            <li>
                3 coisas que você ouve
            </li>

            <li>
                2 coisas que você cheira
            </li>

            <li>
                1 coisa que você saboreia
            </li>

        </ul>

        <h3>
            Benefícios
        </h3>

        <ul>

            <li>
                Redução da hiperativação emocional
            </li>

            <li>
                Retorno ao momento presente
            </li>

            <li>
                Estabilização emocional
            </li>

        </ul>
    `,

    autoestima:`

        <h2>
            Construção de Autoestima
        </h2>

        <p>
            Exercícios terapêuticos voltados
            para fortalecimento emocional,
            identidade e autocompaixão.
        </p>

        <h3>
            Objetivos
        </h3>

        <ul>

            <li>
                Redução da autocrítica
            </li>

            <li>
                Desenvolvimento de autocompaixão
            </li>

            <li>
                Fortalecimento identitário
            </li>

            <li>
                Validação emocional
            </li>

        </ul>

        <h3>
            Abordagens Relacionadas
        </h3>

        <ul>

            <li>
                ACT
            </li>

            <li>
                Humanista
            </li>

            <li>
                Terapia Cognitiva
            </li>

        </ul>
    `,

    escala:`

        <h2>
            Escala de Ansiedade
        </h2>

        <p>
            Ferramenta subjetiva utilizada
            para monitoramento clínico
            da intensidade da ansiedade.
        </p>

        <h3>
            Escala Recomendada
        </h3>

        <ul>

            <li>
                0-2 → leve
            </li>

            <li>
                3-5 → moderada
            </li>

            <li>
                6-8 → elevada
            </li>

            <li>
                9-10 → intensa
            </li>

        </ul>

        <h3>
            Utilização Clínica
        </h3>

        <p>
            Auxilia no acompanhamento terapêutico,
            percepção de evolução emocional
            e monitoramento de sintomas.
        </p>
    `
};

/* =========================================================
   ABRIR MODAL
========================================================= */

botoesFerramenta.forEach(botao => {

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
                    Conteúdo em desenvolvimento
                </h2>

                <p>
                    Esta ferramenta receberá
                    novos exercícios clínicos,
                    aplicações práticas e
                    referências científicas.
                </p>
            `;
    });

});

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
   FERRAMENTA ALEATÓRIA
========================================================= */

if(btnFerramentaAleatoria){

    btnFerramentaAleatoria.addEventListener('click', () => {

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
    '🧠 MindFlow — Ferramentas Clínicas carregado.'
);