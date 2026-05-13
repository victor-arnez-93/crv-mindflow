// ============================================================================
// ferramentas.js — MindFlow · Ferramentas Clínicas
// ============================================================================

import { abordagensDestaque } from "./banco_clinico.js";

// ============================================================================
// BANCO DE FERRAMENTAS — 24 técnicas com embasamento real
// ============================================================================

const ferramentas = [
    {
        id: 1,
        nome:        "Respiração 4-7-8",
        abordagem:   "Mindfulness",
        categoria:   "Ansiedade",
        duracaoMin:  3,
        duracaoTexto:"3 minutos",
        objetivo:    "Ativar o sistema nervoso parassimpático e reduzir fisiologicamente a ansiedade aguda.",
        embasamento: "A técnica de respiração controlada reduz a frequência cardíaca e a atividade do eixo HPA. Inspirar por 4s, segurar por 7s e expirar por 8s maximiza a variabilidade da frequência cardíaca.",
        passos: [
            "Sente-se confortavelmente com a coluna ereta.",
            "Expire completamente pela boca, esvaziando os pulmões.",
            "Feche a boca e inspire pelo nariz contando mentalmente até 4.",
            "Prenda a respiração contando até 7.",
            "Expire pela boca fazendo um som suave contando até 8.",
            "Repita o ciclo por 3 a 4 vezes."
        ],
        ref: "Weil, A. (2015). Spontaneous Happiness. Little, Brown and Company."
    },
    {
        id: 2,
        nome:        "Grounding 5-4-3-2-1",
        abordagem:   "Trauma",
        categoria:   "Regulação",
        duracaoMin:  5,
        duracaoTexto:"5 minutos",
        objetivo:    "Ancorar o paciente no momento presente durante estados dissociativos ou de hiperativação emocional.",
        embasamento: "A ancoragem sensorial ativa o córtex pré-frontal e inibe a resposta de luta-fuga da amígdala, promovendo retorno à janela de tolerância.",
        passos: [
            "Nomeie 5 coisas que você pode VER ao seu redor.",
            "Nomeie 4 coisas que você pode TOCAR — sinta a textura.",
            "Nomeie 3 coisas que você pode OUVIR neste momento.",
            "Nomeie 2 coisas que você pode CHEIRAR ou que aprecia cheirar.",
            "Nomeie 1 coisa que você pode SABOREAR ou que aprecia saborear.",
            "Respire fundo e observe como seu corpo se sente agora."
        ],
        ref: "Ogden, P. & Fisher, J. (2015). Sensorimotor Psychotherapy. W.W. Norton."
    },
    {
        id: 3,
        nome:        "Registro de Pensamentos (TCC)",
        abordagem:   "TCC",
        categoria:   "Cognição",
        duracaoMin:  10,
        duracaoTexto:"10–15 minutos",
        objetivo:    "Identificar e questionar pensamentos automáticos negativos usando o modelo ABC de Beck.",
        embasamento: "O Registro de Pensamentos é a técnica central da TCC. Identificar pensamentos automáticos e questioná-los com evidências ativa o córtex pré-frontal e promove reestruturação cognitiva.",
        passos: [
            "Identifique a situação que desencadeou o mal-estar (A — Antecedente).",
            "Descreva a emoção sentida e sua intensidade de 0 a 100%.",
            "Identifique o pensamento automático: 'O que passou pela sua cabeça?'",
            "Liste as evidências QUE APOIAM esse pensamento.",
            "Liste as evidências QUE CONTRADIZEM esse pensamento.",
            "Formule um pensamento alternativo mais equilibrado.",
            "Reavalie a intensidade emocional após a reestruturação."
        ],
        ref: "Beck, J.S. (2011). Cognitive Behavior Therapy: Basics and Beyond. Guilford Press."
    },
    {
        id: 4,
        nome:        "STOP (DBT)",
        abordagem:   "DBT",
        categoria:   "Impulsividade",
        duracaoMin:  3,
        duracaoTexto:"2–3 minutos",
        objetivo:    "Interromper reações impulsivas e restaurar o acesso ao córtex racional em momentos de crise emocional.",
        embasamento: "Técnica de tolerância ao distress da DBT de Marsha Linehan. Cria uma pausa deliberada que impede comportamentos impulsivos e permite retorno à mente sábia.",
        passos: [
            "S — STOP: Pare. Não reaja. Congele como uma estátua.",
            "T — Take a step back: Dê um passo para trás fisicamente ou mentalmente.",
            "O — Observe: Observe a situação, seus pensamentos e emoções sem julgamento.",
            "P — Proceed mindfully: Prossiga com consciência — pergunte 'o que é efetivo agora?'",
            "Decida a resposta mais alinhada com seus valores e objetivos."
        ],
        ref: "Linehan, M.M. (2015). DBT Skills Training Manual. Guilford Press."
    },
    {
        id: 5,
        nome:        "Desfusão Cognitiva (ACT)",
        abordagem:   "ACT",
        categoria:   "Cognição",
        duracaoMin:  5,
        duracaoTexto:"5 minutos",
        objetivo:    "Criar distância psicológica dos pensamentos, observando-os como eventos mentais passageiros.",
        embasamento: "A desfusão reduz a literalidade dos pensamentos — o paciente passa de 'eu sou um fracasso' para 'estou tendo o pensamento de que sou um fracasso', diminuindo o impacto emocional.",
        passos: [
            "Identifique um pensamento difícil ou recorrente.",
            "Diga: 'Estou tendo o pensamento de que...' em vez de afirmá-lo como verdade.",
            "Visualize o pensamento como uma nuvem passando pelo céu.",
            "Observe o pensamento sem tentar mudá-lo ou suprimi-lo.",
            "Pergunte: 'Este pensamento me ajuda a agir de acordo com meus valores?'",
            "Escolha conscientemente como responder — não o pensamento por você."
        ],
        ref: "Hayes, S.C., Strosahl, K.D. & Wilson, K.G. (1999). Acceptance and Commitment Therapy. Guilford Press."
    },
    {
        id: 6,
        nome:        "Escuta Empática Ativa",
        abordagem:   "Humanista",
        categoria:   "Vínculo",
        duracaoMin:  20,
        duracaoTexto:"Durante a sessão",
        objetivo:    "Criar condições facilitadoras de mudança através de presença genuína, empatia e consideração positiva incondicional.",
        embasamento: "Para Carl Rogers, as três condições necessárias e suficientes para mudança terapêutica são: congruência, empatia precisa e consideração positiva incondicional.",
        passos: [
            "Ofereça presença plena — afaste distrações internas e externas.",
            "Ouça sem formular respostas enquanto o paciente fala.",
            "Reflita o conteúdo emocional: 'Parece que você sente...'",
            "Valide a experiência sem minimizar ou racionalizar.",
            "Use perguntas abertas que expandem — não fecham — a narrativa.",
            "Nomeie o que percebe no não-dito, com cuidado e permissão."
        ],
        ref: "Rogers, C.R. (1961). On Becoming a Person. Houghton Mifflin."
    },
    {
        id: 7,
        nome:        "Scan Corporal (Body Scan)",
        abordagem:   "Mindfulness",
        categoria:   "Consciência Corporal",
        duracaoMin:  15,
        duracaoTexto:"15–20 minutos",
        objetivo:    "Desenvolver consciência interoceptiva e liberar tensão somática acumulada.",
        embasamento: "O body scan ativa a ínsula e promove integração córtico-límbica. É componente central do MBSR (Mindfulness-Based Stress Reduction) de Jon Kabat-Zinn.",
        passos: [
            "Deite-se ou sente-se em posição confortável.",
            "Feche os olhos e respire naturalmente por 1 minuto.",
            "Direcione a atenção para os pés — observe sensações sem julgamento.",
            "Suba lentamente: pernas, abdômen, peito, braços, pescoço, rosto.",
            "Em cada região, observe tensão, calor, formigamento ou ausência de sensação.",
            "Não tente mudar nada — apenas observe com curiosidade.",
            "Termine com 3 respirações profundas e abra os olhos devagar."
        ],
        ref: "Kabat-Zinn, J. (1990). Full Catastrophe Living. Delacorte Press."
    },
    {
        id: 8,
        nome:        "Cadeira Vazia (Gestalt)",
        abordagem:   "Humanista",
        categoria:   "Processos Emocionais",
        duracaoMin:  20,
        duracaoTexto:"20–30 minutos",
        objetivo:    "Facilitar o processamento de questões inacabadas com figuras significativas através do diálogo imaginativo.",
        embasamento: "Técnica central da Gestalt-terapia de Fritz Perls. Ativa o processamento emocional profundo e promove integração de aspectos cindidos da personalidade.",
        passos: [
            "Posicione duas cadeiras se olhando no consultório.",
            "Convide o paciente a imaginar a pessoa (ou parte de si) na cadeira vazia.",
            "Peça que o paciente fale diretamente para essa presença imaginada.",
            "Convide a trocar de cadeira e responder como essa figura responderia.",
            "Continue o diálogo com trocas até emergir algo novo.",
            "Ao final, pergunte: 'O que você percebeu nesse encontro?'"
        ],
        ref: "Perls, F., Hefferline, R. & Goodman, P. (1951). Gestalt Therapy. Julian Press."
    },
    {
        id: 9,
        nome:        "Ativação Comportamental (TCC)",
        abordagem:   "TCC",
        categoria:   "Depressão",
        duracaoMin:  15,
        duracaoTexto:"15 minutos",
        objetivo:    "Romper o ciclo de inatividade e humor negativo aumentando o engajamento em atividades com valor reforçador.",
        embasamento: "A ativação comportamental é tão eficaz quanto a TCC completa para depressão moderada. Baseia-se no modelo comportamental: comportamento influencia humor, não o inverso.",
        passos: [
            "Mapeie as atividades atuais do paciente em uma semana típica.",
            "Identifique quais atividades geram prazer, domínio ou conexão.",
            "Liste atividades que o paciente valorizava antes da depressão.",
            "Estabeleça metas comportamentais pequenas, específicas e alcançáveis.",
            "Registre humor antes e depois de cada atividade.",
            "Aumente gradualmente a frequência das atividades com impacto positivo."
        ],
        ref: "Martell, C.R., Dimidjian, S. & Herman-Dunn, R. (2010). Behavioral Activation for Depression. Guilford Press."
    },
    {
        id: 10,
        nome:        "TIPP (DBT)",
        abordagem:   "DBT",
        categoria:   "Regulação",
        duracaoMin:  5,
        duracaoTexto:"5–10 minutos",
        objetivo:    "Reduzir rapidamente a vulnerabilidade emocional extrema através de mudanças fisiológicas.",
        embasamento: "TIPP é habilidade de tolerância ao distress da DBT que altera a química corporal, reduzindo ativação emocional intensa de forma eficaz e rápida.",
        passos: [
            "T — Temperatura: Mergulhe o rosto em água fria por 30s ou segure gelo.",
            "I — Exercício Intenso: 20 polichinelos, corrida no lugar por 1 minuto.",
            "P — Respiração Pausada: Expire mais devagar que inspira (4-2-6).",
            "P — Relaxamento Muscular Progressivo: Contraia e solte grupos musculares.",
            "Escolha a técnica mais adequada ao momento e ambiente.",
            "Repita se necessário até sentir redução da intensidade emocional."
        ],
        ref: "Linehan, M.M. (2015). DBT Skills Training Manual. 2nd ed. Guilford Press."
    },
    {
        id: 11,
        nome:        "Reavaliação Cognitiva",
        abordagem:   "TCC",
        categoria:   "Cognição",
        duracaoMin:  10,
        duracaoTexto:"10 minutos",
        objetivo:    "Modificar o significado atribuído a uma situação para alterar sua resposta emocional.",
        embasamento: "A reavaliação cognitiva é a estratégia de regulação emocional mais estudada e eficaz. Ativa o córtex pré-frontal e reduz a atividade da amígdala de forma mensurável.",
        passos: [
            "Identifique a situação e a emoção resultante.",
            "Pergunte: 'Qual é a interpretação que estou fazendo desta situação?'",
            "Explore perspectivas alternativas: 'Como outra pessoa veria isso?'",
            "Questione: 'Qual é a evidência real? O que posso estar ignorando?'",
            "Construa uma interpretação mais equilibrada e realista.",
            "Avalie como a nova interpretação altera a resposta emocional."
        ],
        ref: "Gross, J.J. (2015). Emotion regulation: Current status and future prospects. Psychological Inquiry, 26(1)."
    },
    {
        id: 12,
        nome:        "Exposição Gradual (TCC)",
        abordagem:   "TCC",
        categoria:   "Ansiedade",
        duracaoMin:  30,
        duracaoTexto:"Sessões múltiplas",
        objetivo:    "Extinguir respostas de medo condicionadas através de exposição sistemática e gradual ao estímulo temido.",
        embasamento: "A exposição baseia-se na extinção do condicionamento clássico e na aprendizagem inibitória. É o tratamento de primeira linha para fobias, TEPT e TOC segundo diretrizes internacionais.",
        passos: [
            "Construa uma hierarquia de situações temidas (0 a 100 SUDS).",
            "Inicie pela situação de menor ansiedade na hierarquia.",
            "Exponha o paciente à situação sem comportamentos de segurança.",
            "Permaneça na situação até a ansiedade reduzir naturalmente.",
            "Registre SUDS antes, durante e após cada exposição.",
            "Avance para o próximo nível da hierarquia apenas após habituação.",
            "Processe cognitivamente e emocionalmente após cada exposição."
        ],
        ref: "Craske, M.G. (2014). Optimizing inhibitory learning during exposure therapy. Behaviour Research and Therapy."
    },
    {
        id: 13,
        nome:        "Valores — Bússola ACT",
        abordagem:   "ACT",
        categoria:   "Sentido",
        duracaoMin:  20,
        duracaoTexto:"20 minutos",
        objetivo:    "Clarificar valores pessoais como direcionadores de ação comprometida e fonte de sentido.",
        embasamento: "Na ACT, valores são direções escolhidas — não destinos. Clarificá-los aumenta a motivação para mudança e fornece contexto para aceitar desconforto.",
        passos: [
            "Apresente ao paciente as áreas de vida: família, trabalho, saúde, amizades, espiritualidade.",
            "Para cada área, pergunte: 'Como você quer SER nessa área?'",
            "Distinga valores (direções) de metas (destinos concretos).",
            "Identifique qual área está mais negligenciada no momento.",
            "Escolha uma ação comprometida pequena alinhada a esse valor.",
            "Estabeleça quando e como essa ação será realizada esta semana."
        ],
        ref: "Hayes, S.C. (2019). A Liberated Mind. Avery/Penguin Random House."
    },
    {
        id: 14,
        nome:        "Mindful Eating",
        abordagem:   "Mindfulness",
        categoria:   "Consciência Corporal",
        duracaoMin:  10,
        duracaoTexto:"10 minutos",
        objetivo:    "Desenvolver consciência plena durante a alimentação, quebrando padrões automáticos e compulsivos.",
        embasamento: "O comer consciente reduz compulsões alimentares em transtornos de binge eating e melhora a relação com o corpo. Eficaz como complemento terapêutico em transtornos alimentares.",
        passos: [
            "Escolha um alimento pequeno (ex: uma uva-passa ou pedaço de fruta).",
            "Observe visualmente: cor, forma, textura.",
            "Cheire o alimento — note as sensações e memórias evocadas.",
            "Coloque na boca sem mastigar — observe sabor e textura inicial.",
            "Mastigue lentamente contando as mastigações.",
            "Degluta com consciência e observe o rastro sensorial.",
            "Reflita: 'O que percebi que normalmente não percebo?'"
        ],
        ref: "Kabat-Zinn, J. & Kristeller, J.L. (1999). Mindfulness-based eating awareness training. Clinical Psychology."
    },
    {
        id: 15,
        nome:        "Relaxamento Muscular Progressivo",
        abordagem:   "TCC",
        categoria:   "Ansiedade",
        duracaoMin:  15,
        duracaoTexto:"15–20 minutos",
        objetivo:    "Reduzir tensão muscular crônica e ativar resposta de relaxamento como antídoto à ansiedade.",
        embasamento: "Desenvolvido por Edmund Jacobson (1938). A tensão-relaxamento sequencial de grupos musculares produz relaxamento profundo e reduz marcadores fisiológicos de estresse.",
        passos: [
            "Sente-se ou deite-se em posição confortável.",
            "Comece pelos pés: contraia os músculos por 5s, depois solte por 10s.",
            "Pernas: contraia panturrílhas e coxas, depois solte.",
            "Abdômen: inspire e contraia, depois expire e solte.",
            "Braços e mãos: feche os punhos, contraia, depois solte.",
            "Ombros: eleve em direção às orelhas, contraia, depois solte.",
            "Rosto: contraia toda a musculatura facial, depois solte completamente."
        ],
        ref: "Jacobson, E. (1938). Progressive Relaxation. University of Chicago Press."
    },
    {
        id: 16,
        nome:        "Técnica da Flecha Descendente",
        abordagem:   "TCC",
        categoria:   "Crenças Centrais",
        duracaoMin:  15,
        duracaoTexto:"15 minutos",
        objetivo:    "Identificar crenças centrais disfuncionais subjacentes a pensamentos automáticos superficiais.",
        embasamento: "A flecha descendente (downward arrow) de Burns aprofunda o questionamento cognitivo até chegar a crenças nucleares — o coração da manutenção dos transtornos.",
        passos: [
            "Identifique um pensamento automático negativo: ex. 'Errei no trabalho.'",
            "Pergunte: 'Se isso fosse verdade, o que significaria para você?'",
            "Anote a resposta e repita a pergunta para o novo pensamento.",
            "Continue o aprofundamento por 4 a 6 níveis.",
            "Identifique o tema central emergente: abandono, incompetência, desamor.",
            "Discuta a origem histórica dessa crença central.",
            "Inicie trabalho de reestruturação da crença nuclear identificada."
        ],
        ref: "Burns, D.D. (1980). Feeling Good: The New Mood Therapy. Morrow."
    },
    {
        id: 17,
        nome:        "Mindfulness da Respiração",
        abordagem:   "Mindfulness",
        categoria:   "Atenção Plena",
        duracaoMin:  8,
        duracaoTexto:"5–10 minutos",
        objetivo:    "Desenvolver atenção sustentada no momento presente usando a respiração como âncora.",
        embasamento: "A prática formal de mindfulness da respiração aumenta a espessura cortical no córtex pré-frontal e reduz a atividade da rede de modo padrão — base do MBSR e MBCT.",
        passos: [
            "Sente-se com a coluna ereta e os olhos fechados ou semi-abertos.",
            "Direcione a atenção para as sensações da respiração — narinas, peito ou abdômen.",
            "Apenas observe — não controle nem modifique a respiração.",
            "Quando a mente divagar (e irá), note sem julgamento e retorne.",
            "O ato de retornar é a prática — não a ausência de pensamentos.",
            "Ao finalizar, observe como seu estado mental mudou."
        ],
        ref: "Kabat-Zinn, J. (2003). Mindfulness-based interventions in context. Clinical Psychology: Science and Practice."
    },
    {
        id: 18,
        nome:        "Carta de Autocompaixão",
        abordagem:   "Humanista",
        categoria:   "Autoestima",
        duracaoMin:  20,
        duracaoTexto:"20 minutos",
        objetivo:    "Desenvolver autocompaixão e reduzir autocrítica crônica através de escrita terapêutica.",
        embasamento: "Exercício central do Mindful Self-Compassion (MSC) de Neff & Germer. A autocompaixão ativa sistemas de cuidado (ocitocina) e reduz ativação do sistema de ameaça.",
        passos: [
            "Identifique uma área da vida em que o paciente se julga muito duramente.",
            "Peça que imagine um amigo íntimo passando pela mesma situação.",
            "Pergunte: 'O que você diria a esse amigo com cuidado genuíno?'",
            "Peça que escreva uma carta para si mesmo com essa mesma voz compassiva.",
            "A carta deve reconhecer a dor, lembrar que sofrimento faz parte da vida e oferecer cuidado.",
            "Leia a carta em voz alta — observe as emoções que emergem.",
            "Discuta: 'Por que é mais fácil ser compassivo com outros?'"
        ],
        ref: "Neff, K. & Germer, C. (2018). The Mindful Self-Compassion Workbook. Guilford Press."
    },
    {
        id: 19,
        nome:        "Resolução de Problemas (TCC)",
        abordagem:   "TCC",
        categoria:   "Estratégias",
        duracaoMin:  20,
        duracaoTexto:"20 minutos",
        objetivo:    "Desenvolver habilidade sistemática de resolução de problemas para reduzir ruminação e aumentar senso de eficácia.",
        embasamento: "A terapia de resolução de problemas (Problem-Solving Therapy) é eficaz para depressão, estresse e ideação suicida. Combate a ruminação com ação orientada.",
        passos: [
            "Defina o problema de forma específica e objetiva.",
            "Faça um brainstorming de todas as possíveis soluções — sem avaliar ainda.",
            "Avalie cada solução: vantagens, desvantagens, viabilidade.",
            "Escolha a melhor solução com base na avaliação.",
            "Planeje a implementação: quem, quando, como.",
            "Execute o plano e observe os resultados.",
            "Avalie o resultado — se insatisfatório, retorne ao brainstorming."
        ],
        ref: "Nezu, A.M., Nezu, C.M. & D'Zurilla, T.J. (2013). Problem-Solving Therapy. Springer Publishing."
    },
    {
        id: 20,
        nome:        "Imaginação Guiada",
        abordagem:   "Humanista",
        categoria:   "Processos Emocionais",
        duracaoMin:  15,
        duracaoTexto:"15 minutos",
        objetivo:    "Acessar recursos internos e processar conteúdos emocionais através de visualização criativa.",
        embasamento: "A imaginação guiada ativa o mesmo substrato neural que experiências reais. Usada em EMDR, Schema Therapy e abordagens humanistas para reprocessamento emocional.",
        passos: [
            "Convide o paciente a fechar os olhos e respirar fundo 3 vezes.",
            "Guie uma visualização de um lugar seguro e tranquilo.",
            "Inclua detalhes sensoriais: o que vê, ouve, sente, cheira nesse lugar.",
            "Permita que o paciente explore esse espaço internamente.",
            "Introduza gradualmente o tema terapêutico a trabalhar.",
            "Ao finalizar, traga o paciente de volta devagar.",
            "Processe verbalmente o que emergiu na visualização."
        ],
        ref: "Hackmann, A., Bennett-Levy, J. & Holmes, E. (2011). Oxford Guide to Imagery in CBT. Oxford University Press."
    },
    {
        id: 21,
        nome:        "Diário de Gratidão",
        abordagem:   "Mindfulness",
        categoria:   "Bem-Estar",
        duracaoMin:  5,
        duracaoTexto:"5 minutos",
        objetivo:    "Treinar a atenção para experiências positivas, contrapondo o viés negativo padrão do cérebro.",
        embasamento: "Escrever 3 coisas pelas quais se é grato aumenta o bem-estar subjetivo, reduz sintomas depressivos e fortalece redes neurais associadas a emoções positivas.",
        passos: [
            "Reserve 5 minutos ao final do dia ou semana.",
            "Escreva 3 coisas específicas pelas quais você é grato.",
            "Para cada item, escreva POR QUE você é grato — não apenas o quê.",
            "Foque em pessoas, momentos e atos — não em posses.",
            "Inclua pelo menos 1 item simples ou cotidiano.",
            "Releia as entradas anteriores periodicamente."
        ],
        ref: "Emmons, R.A. & McCullough, M.E. (2003). Counting blessings versus burdens. Journal of Personality and Social Psychology, 84(2)."
    },
    {
        id: 22,
        nome:        "Habilidades DEAR MAN (DBT)",
        abordagem:   "DBT",
        categoria:   "Relacionamentos",
        duracaoMin:  15,
        duracaoTexto:"15 minutos",
        objetivo:    "Desenvolver efetividade interpessoal para comunicar necessidades e estabelecer limites de forma assertiva.",
        embasamento: "DEAR MAN é a habilidade central de efetividade interpessoal da DBT. Combina assertividade com mindfulness relacional para obter o que se precisa mantendo vínculos.",
        passos: [
            "D — Descreva: Descreva a situação objetivamente, sem julgamento.",
            "E — Expresse: Expresse seus sentimentos com 'Eu sinto...'",
            "A — Afirme: Afirme claramente o que você quer ou precisa.",
            "R — Reforce: Explique como atender seu pedido beneficia a outra pessoa.",
            "M — Mindful: Mantenha o foco no objetivo sem se deixar desviar.",
            "A — Aparência confiante: Postura, voz e contato visual firmes.",
            "N — Negocie: Esteja disposto a negociar quando necessário."
        ],
        ref: "Linehan, M.M. (2015). DBT Skills Training Manual. 2nd ed. Guilford Press."
    },
    {
        id: 23,
        nome:        "Técnica do Observador (ACT)",
        abordagem:   "ACT",
        categoria:   "Self",
        duracaoMin:  10,
        duracaoTexto:"10 minutos",
        objetivo:    "Fortalecer a perspectiva do self como contexto — o observador constante por trás de todos os pensamentos e emoções.",
        embasamento: "O self-como-contexto da ACT é o antídoto para fusão com o self-conceito. Promove flexibilidade psicológica e reduz o impacto de crenças rígidas sobre si mesmo.",
        passos: [
            "Convide o paciente a sentar confortavelmente e respirar.",
            "Diga: 'Observe que você está pensando — você não é o pensamento.'",
            "Guie: 'Observe que você sente emoções — você não é a emoção.'",
            "Pergunte: 'Quem é que observa todos esses pensamentos e emoções?'",
            "Explore a constância do observador ao longo da vida.",
            "Diga: 'Esse observador nunca mudou — é você, o contexto de tudo.'",
            "Processe: 'Como é saber que há uma parte sua que não pode ser ameaçada?'"
        ],
        ref: "Harris, R. (2009). ACT Made Simple. New Harbinger Publications."
    },
    {
        id: 24,
        nome:        "Escrita Expressiva de Pennebaker",
        abordagem:   "Humanista",
        categoria:   "Processamento Emocional",
        duracaoMin:  20,
        duracaoTexto:"20 minutos por 3 dias",
        objetivo:    "Processar experiências emocionalmente intensas através da escrita livre para promover saúde mental e física.",
        embasamento: "Pennebaker (1986) demonstrou que escrever sobre experiências traumáticas por 20min/3 dias reduz consultas médicas, melhora marcadores imunológicos e aumenta bem-estar subjetivo.",
        passos: [
            "Escolha um evento ou emoção intensa não processada.",
            "Reserve 20 minutos em um lugar privado e sem interrupções.",
            "Escreva livremente sobre os pensamentos e emoções mais profundos.",
            "Não se preocupe com gramática ou coerência — escreva sem censurar.",
            "Se as emoções forem muito intensas, foque em perspectiva e sentido.",
            "Repita por 3 dias consecutivos — cada vez pode ser o mesmo evento.",
            "Não é necessário reler — o valor está no processo de escrita."
        ],
        ref: "Pennebaker, J.W. & Beall, S.K. (1986). Confronting a traumatic event. Journal of Abnormal Psychology, 95(3)."
    }
];

// ============================================================================
// ESTADO
// ============================================================================

let filtroAbordagem = "todos";
let filtroDuracao   = "todos";
let termoBusca      = "";

// ============================================================================
// FILTRAR E RENDERIZAR
// ============================================================================

function filtrarFerr() {
    return ferramentas.filter(f => {
        const matchAbord = filtroAbordagem === "todos" || f.abordagem === filtroAbordagem;
        const matchDur   = filtroDuracao === "todos"
            || (filtroDuracao === "curta" && f.duracaoMin <= 5)
            || (filtroDuracao === "media" && f.duracaoMin > 5 && f.duracaoMin <= 15)
            || (filtroDuracao === "longa" && f.duracaoMin > 15);
        const matchBusca = termoBusca === ""
            || f.nome.toLowerCase().includes(termoBusca)
            || f.objetivo.toLowerCase().includes(termoBusca)
            || f.categoria.toLowerCase().includes(termoBusca);
        return matchAbord && matchDur && matchBusca;
    });
}

function renderizarFerr() {
    const grid    = document.getElementById("ferramentasGrid");
    const counter = document.getElementById("contadorFerr");
    if (!grid) return;

    const lista = filtrarFerr();
    counter.textContent = `${lista.length} ferramenta${lista.length !== 1 ? "s" : ""} encontrada${lista.length !== 1 ? "s" : ""}`;

    if (!lista.length) {
        grid.innerHTML = `
            <div class="ferramentas-vazio">
                <i class="fa-solid fa-magnifying-glass"></i>
                <p>Nenhuma ferramenta encontrada para os filtros selecionados.</p>
            </div>`;
        return;
    }

    grid.innerHTML = lista.map(f => `
        <article class="ferr-card" data-id="${f.id}">
            <div class="ferr-card-topo">
                <span class="ferr-tag">${f.abordagem}</span>
                <span class="ferr-duracao"><i class="fa-regular fa-clock"></i> ${f.duracaoTexto}</span>
            </div>
            <h3 class="ferr-titulo">${f.nome}</h3>
            <p class="ferr-objetivo">${f.objetivo}</p>
            <div class="ferr-categoria">
                <i class="fa-solid fa-tag"></i> ${f.categoria}
            </div>
            <button class="btn-ferr-ver" data-id="${f.id}">
                Ver técnica <i class="fa-solid fa-arrow-right"></i>
            </button>
        </article>
    `).join("");

    // eventos dos cards
    grid.querySelectorAll(".btn-ferr-ver").forEach(btn => {
        btn.addEventListener("click", () => abrirModal(parseInt(btn.dataset.id)));
    });
}

// ============================================================================
// MODAL
// ============================================================================

function abrirModal(id) {
    const f = ferramentas.find(x => x.id === id);
    if (!f) return;

    document.getElementById("modalTag").textContent         = f.abordagem;
    document.getElementById("modalDuracaoTexto").textContent = f.duracaoTexto;
    document.getElementById("modalTitulo").textContent      = f.nome;
    document.getElementById("modalObjetivo").textContent    = f.objetivo;
    document.getElementById("modalEmbasamento").textContent = f.embasamento;
    document.getElementById("modalRef").textContent         = f.ref;

    const passosList = document.getElementById("modalPassos");
    passosList.innerHTML = f.passos.map(p => `<li>${p}</li>`).join("");

    document.getElementById("modalFerr").classList.add("ativo");
    document.getElementById("modalOverlay").classList.add("ativo");
    document.body.style.overflow = "hidden";
}

function fecharModal() {
    document.getElementById("modalFerr").classList.remove("ativo");
    document.getElementById("modalOverlay").classList.remove("ativo");
    document.body.style.overflow = "";
}

// ============================================================================
// FILTROS — EVENTOS
// ============================================================================

function iniciarFiltros() {
    document.getElementById("filtroAbordagem")?.querySelectorAll(".pill").forEach(btn => {
        btn.addEventListener("click", () => {
            document.getElementById("filtroAbordagem").querySelectorAll(".pill").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            filtroAbordagem = btn.dataset.filtro;
            renderizarFerr();
        });
    });

    document.getElementById("filtroDuracao")?.querySelectorAll(".pill").forEach(btn => {
        btn.addEventListener("click", () => {
            document.getElementById("filtroDuracao").querySelectorAll(".pill").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            filtroDuracao = btn.dataset.filtro;
            renderizarFerr();
        });
    });

    document.getElementById("buscaFerramenta")?.addEventListener("input", e => {
        termoBusca = e.target.value.toLowerCase().trim();
        renderizarFerr();
    });

    document.getElementById("modalClose")?.addEventListener("click", fecharModal);
    document.getElementById("modalBtnFechar")?.addEventListener("click", fecharModal);
    document.getElementById("modalOverlay")?.addEventListener("click", fecharModal);

    document.addEventListener("keydown", e => {
        if (e.key === "Escape") fecharModal();
    });
}

// ============================================================================
// INIT
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
    renderizarFerr();
    iniciarFiltros();
    console.log("🧠 Ferramentas Clínicas carregadas —", ferramentas.length, "técnicas.");
});