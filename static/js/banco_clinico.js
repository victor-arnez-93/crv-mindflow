// ===================================================================
// BANCO_CLINICO.JS — MINDFLOW
// Base interna científica e terapêutica — v2.1
// ===================================================================

/* =========================================================
   FRASES TERAPÊUTICAS
========================================================= */
export const frasesTerapeuticas = [
    { autor: "Carl Rogers",           frase: "O curioso paradoxo é que quando me aceito como sou, então posso mudar.",                                               categoria: "Humanista"            },
    { autor: "Viktor Frankl",         frase: "Quando não podemos mais mudar uma situação, somos desafiados a mudar a nós mesmos.",                                   categoria: "Logoterapia"          },
    { autor: "Donald Winnicott",      frase: "É no brincar, e talvez apenas no brincar, que a criança ou o adulto fruem sua liberdade de criação.",                  categoria: "Psicanálise"          },
    { autor: "Aaron Beck",            frase: "Os pensamentos influenciam diretamente emoções e comportamentos.",                                                      categoria: "TCC"                  },
    { autor: "Carl Jung",             frase: "Quem olha para fora sonha. Quem olha para dentro desperta.",                                                           categoria: "Psicologia Analítica" },
    { autor: "Irvin Yalom",           frase: "O relacionamento terapêutico é a terapia.",                                                                            categoria: "Existencial"          },
    { autor: "Marsha Linehan",        frase: "Aceitação e mudança são os dois pilares fundamentais do crescimento emocional.",                                       categoria: "DBT"                  },
    { autor: "Steven Hayes",          frase: "A dor faz parte da vida. O sofrimento é a luta contra essa dor.",                                                      categoria: "ACT"                  },
    { autor: "Sigmund Freud",         frase: "A voz da razão é suave, mas não descansa até que se faça ouvir.",                                                      categoria: "Psicanálise"          },
    { autor: "Melanie Klein",         frase: "O amor não está isento de ambivalência — entendê-la é amadurecer afetivamente.",                                       categoria: "Psicanálise"          },
    { autor: "Daniel Siegel",         frase: "O primeiro passo para mudar é ver com clareza o que existe.",                                                          categoria: "Neurociência"         },
    { autor: "Bessel van der Kolk",   frase: "O corpo guarda o registro — traumas não resolvidos vivem em nossas respostas físicas.",                                categoria: "Trauma"               },
    { autor: "Wilfred Bion",          frase: "A função do terapeuta é conter o que o paciente ainda não consegue suportar sozinho.",                                 categoria: "Psicanálise"          },
    { autor: "John Bowlby",           frase: "A segurança que a criança sente não vem da ausência de perigo, mas da presença de um adulto confiável.",               categoria: "Apego"                },
    { autor: "Martin Seligman",       frase: "Bem-estar não é a ausência de doença — é a presença de florescimento humano.",                                         categoria: "Psicologia Positiva"  },
    { autor: "Fritz Perls",           frase: "Contato é a vida — evitar o contato é evitar estar vivo.",                                                            categoria: "Gestalt"              },
    { autor: "Rollo May",             frase: "A ansiedade é o estado humano de enfrentar a própria liberdade.",                                                      categoria: "Existencial"          },
    { autor: "Alice Miller",          frase: "O que a criança não pôde viver emocionalmente volta como sintoma no adulto.",                                          categoria: "Desenvolvimento"      },
    { autor: "Gabor Maté",            frase: "A pergunta não é por que a dependência, mas por que a dor que a precede.",                                             categoria: "Trauma"               },
    { autor: "Tara Brach",            frase: "A aceitação radical não é resignação — é o ponto de partida para toda mudança real.",                                  categoria: "Mindfulness"          }
];

/* =========================================================
   INSIGHTS CLÍNICOS
========================================================= */
export const insightsClinicos = [
    {
        titulo:    "Nomeação emocional reduz ativação da amígdala",
        descricao: "Identificar e verbalizar emoções ativa o córtex pré-frontal ventrolateral, reduzindo a resposta da amígdala a estímulos negativos — efeito denominado 'affect labeling'.",
        categoria: "Neurociência",
        fonte:     "Lieberman et al. (2007) — Psychological Science",
        link:      "https://pubmed.ncbi.nlm.nih.gov/17666852/"
    },
    {
        titulo:    "Sono e saúde mental têm relação bidirecional",
        descricao: "Privação de sono aumenta sintomas ansiosos, depressivos e impulsividade emocional. Transtornos do humor perturbam o sono; o sono fragmentado amplifica o humor negativo.",
        categoria: "Saúde Mental",
        fonte:     "Harvey et al. (2011) — Annual Review of Clinical Psychology",
        link:      "https://pubmed.ncbi.nlm.nih.gov/21166540/"
    },
    {
        titulo:    "Grounding reduz hiperativação emocional",
        descricao: "Técnicas de ancoragem sensorial (5-4-3-2-1) ativam o sistema parassimpático, reduzindo dissociação e reações de luta ou fuga em quadros traumáticos e ansiosos.",
        categoria: "Ansiedade",
        fonte:     "Ogden & Fisher (2015) — Sensorimotor Psychotherapy",
        link:      "https://www.sensorimotorpsychotherapy.org"
    },
    {
        titulo:    "Autocompaixão reduz autocrítica crônica",
        descricao: "Práticas baseadas em autocompaixão estão associadas a menor vergonha tóxica, menos ruminação e melhor regulação emocional, com efeitos mensuráveis em 8 semanas.",
        categoria: "Autoestima",
        fonte:     "Neff & Germer (2013) — Journal of Clinical Psychology",
        link:      "https://pubmed.ncbi.nlm.nih.gov/23070875/"
    },
    {
        titulo:    "Apego seguro aumenta resiliência emocional",
        descricao: "Crianças com apego seguro demonstram maior capacidade de regulação emocional, tolerância à frustração e recuperação após adversidades ao longo do desenvolvimento.",
        categoria: "Relacionamentos",
        fonte:     "Bowlby, J. (1988) — A Secure Base. Basic Books",
        link:      "https://www.basicbooks.com"
    },
    {
        titulo:    "TCC é eficaz para transtornos de ansiedade",
        descricao: "Meta-análises confirmam que a Terapia Cognitivo-Comportamental reduz sintomas de ansiedade em 50–60% dos casos, com ganhos mantidos em seguimento de 12 meses.",
        categoria: "TCC",
        fonte:     "Hofmann et al. (2012) — Cognitive Behaviour Therapy",
        link:      "https://pubmed.ncbi.nlm.nih.gov/22315027/"
    },
    {
        titulo:    "Aliança terapêutica prediz resultado independente da abordagem",
        descricao: "A qualidade da relação terapêutica explica cerca de 30% da variância nos resultados, sendo o fator preditivo mais robusto identificado em psicoterapia.",
        categoria: "Processo Terapêutico",
        fonte:     "Norcross & Lambert (2018) — Psychotherapy",
        link:      "https://pubmed.ncbi.nlm.nih.gov/29265843/"
    },
    {
        titulo:    "Mindfulness reduz recaída depressiva em 50%",
        descricao: "O protocolo MBCT demonstra redução de recaída em pacientes com 3 ou mais episódios depressivos, comparável a antidepressivos de manutenção.",
        categoria: "Mindfulness",
        fonte:     "Teasdale et al. (2000) — JCCP",
        link:      "https://pubmed.ncbi.nlm.nih.gov/11068961/"
    },
    {
        titulo:    "Neuroplasticidade sustenta mudança terapêutica",
        descricao: "Intervenções psicológicas promovem alterações estruturais e funcionais mensuráveis no cérebro, como aumento de volume no hipocampo e mudanças na conectividade córtico-límbica.",
        categoria: "Neurociência",
        fonte:     "Siegle et al. (2006) — Archives of General Psychiatry",
        link:      "https://pubmed.ncbi.nlm.nih.gov/16520435/"
    },
    {
        titulo:    "Regulação emocional previne burnout clínico",
        descricao: "Psicólogos com estratégias ativas de regulação emocional apresentam menores índices de fadiga compassiva e exaustão profissional.",
        categoria: "Autocuidado",
        fonte:     "Turgoose & Maddox (2017) — Traumatology",
        link:      "https://psycnet.apa.org/record/2017-04929-001"
    },
    {
        titulo:    "Escrita expressiva melhora saúde mental e imunológica",
        descricao: "Escrever sobre experiências emocionais intensas por 20 minutos durante 3 dias consecutivos produz melhoras em saúde mental e resposta imunológica.",
        categoria: "Técnicas",
        fonte:     "Pennebaker & Beall (1986) — Journal of Abnormal Psychology",
        link:      "https://pubmed.ncbi.nlm.nih.gov/3745650/"
    },
    {
        titulo:    "Reparação de rupturas gera resultados superiores",
        descricao: "Rupturas na aliança terapêutica, quando reparadas de forma explícita e colaborativa, estão associadas a resultados superiores em comparação a processos sem ruptura.",
        categoria: "Processo Terapêutico",
        fonte:     "Safran et al. (2011) — Psychotherapy",
        link:      "https://pubmed.ncbi.nlm.nih.gov/21401270/"
    }
];

/* =========================================================
   PERGUNTAS REFLEXIVAS
========================================================= */
export const perguntasReflexivas = [
    "O que você sente que tem evitado emocionalmente?",
    "Quais necessidades emocionais suas estão negligenciadas atualmente?",
    "O que mais consome sua energia mental hoje?",
    "Qual emoção você costuma esconder das pessoas?",
    "O que seu corpo tenta comunicar ultimamente?",
    "O que você gostaria de conseguir expressar com mais liberdade?",
    "Quais padrões emocionais se repetem na sua vida?",
    "O que você sente falta em seus relacionamentos?",
    "Em quais momentos você sente maior autenticidade?",
    "O que você mais tenta controlar emocionalmente?",
    "Que emoção você considera difícil de nomear?",
    "O que mudou na sua relação consigo mesmo no último ano?"
];

/* =========================================================
   TÉCNICAS RÁPIDAS
========================================================= */
export const tecnicasRapidas = [
    { nome: "Respiração 4-6",          objetivo: "Redução fisiológica da ansiedade",   duracao: "2 minutos",  categoria: "Ansiedade" },
    { nome: "Grounding 5-4-3-2-1",     objetivo: "Reconexão com o presente",           duracao: "5 minutos",  categoria: "Regulação" },
    { nome: "STOP (DBT)",              objetivo: "Redução de impulsividade emocional", duracao: "3 minutos",  categoria: "DBT"       },
    { nome: "Registro de Pensamentos", objetivo: "Identificação cognitiva",            duracao: "10 minutos", categoria: "TCC"       },
    { nome: "Nomeação Emocional",      objetivo: "Consciência afetiva",                duracao: "5 minutos",  categoria: "Emoções"   }
];

/* =========================================================
   ATIVIDADES DESTAQUE
========================================================= */
export const atividadesDestaque = [
    { titulo: "Termômetro Emocional", descricao: "Ferramenta visual para identificação de intensidade emocional.", categoria: "Emoções",    duracao: "5 min"  },
    { titulo: "Carta para si mesmo",  descricao: "Exercício terapêutico focado em autocompaixão e acolhimento.",  categoria: "Autoestima", duracao: "15 min" },
    { titulo: "Roda da Vida",         descricao: "Avaliação visual de áreas importantes da vida.",                categoria: "Reflexão",   duracao: "10 min" },
    { titulo: "Perguntas Profundas",  descricao: "Reflexões terapêuticas para aprofundamento emocional.",         categoria: "Sessão",     duracao: "Livre"  }
];

/* =========================================================
   HERO IMAGENS
========================================================= */
export const imagensHero = [
    { imagemLight: "static/imagens/imgfundo1.png", imagemDark: "static/imagens/imgfundo2.png", titulo: "Acolher também é uma forma de cuidado.",          subtitulo: "Ferramentas inteligentes para apoiar sessões terapêuticas com profundidade, leveza e embasamento.", legenda: "MindFlow • Psicologia baseada em ciência e experiência clínica.", categoria: "Acolhimento" },
    { imagemLight: "static/imagens/imgfundo1.png", imagemDark: "static/imagens/imgfundo2.png", titulo: "A saúde emocional começa pela escuta.",            subtitulo: "Atividades terapêuticas, insights científicos e apoio clínico em um único ambiente.",                 legenda: "MindFlow • Ferramentas para prática clínica contemporânea.",       categoria: "Escuta"      },
    { imagemLight: "static/imagens/imgfundo1.png", imagemDark: "static/imagens/imgfundo2.png", titulo: "Pequenas reflexões geram grandes mudanças.",       subtitulo: "Conteúdo terapêutico pensado para sessões presenciais e online.",                                      legenda: "MindFlow • Psicologia dinâmica e inteligente.",                    categoria: "Reflexão"    }
];

/* =========================================================
   FOTO DO DIA
========================================================= */
export const fotoDoDia = [
    { imagem: "static/imagens/img_1.png", tema: "Ambiente Terapêutico e Bem-Estar",               legenda: "Espaços acolhedores favorecem escuta e equilíbrio."         },
    { imagem: "static/imagens/img_2.png", tema: "Neuroplasticidade e Processos Mentais",          legenda: "A mente pode se reconstruir todos os dias."                 },
    { imagem: "static/imagens/img3.png",  tema: "Psicologia Infantil e Desenvolvimento Emocional",legenda: "Crescer com acolhimento transforma emoções em confiança."   },
    { imagem: "static/imagens/img4.png",  tema: "Consciência, Autoconhecimento e Neurociência",   legenda: "Entender a mente é o primeiro passo para evoluir."          },
    { imagem: "static/imagens/img5.png",  tema: "Reflexão, Inteligência Emocional e Cognição",    legenda: "Pensamentos moldam escolhas e novos caminhos."              },
    { imagem: "static/imagens/img6.png",  tema: "Saúde Mental e Reconexão Interna",               legenda: "Cuidar da mente é reorganizar o que sentimos."              },
    { imagem: "static/imagens/img7.png",  tema: "Neurociência e Conectividade Cerebral",          legenda: "O cérebro humano é uma rede viva de experiências."          }
];

/* =========================================================
   CONCEITOS DO DIA
========================================================= */
export const conceitosDoDia = [
    { nome: "Regulação Emocional",    def: "Conjunto de processos pelos quais os indivíduos influenciam quais emoções têm, quando as têm e como as vivenciam e expressam, incluindo estratégias cognitivas, comportamentais e atencionais.",                                         ref: "Gross, J.J. (2015). Emotion regulation: Current status and future prospects. Psychological Inquiry, 26(1), 1–26."                                 },
    { nome: "Reestruturação Cognitiva",def: "Técnica central da TCC que auxilia o paciente a identificar, questionar e modificar pensamentos automáticos disfuncionais, substituindo-os por interpretações mais adaptativas e equilibradas.",                                       ref: "Beck, A.T. (1979). Cognitive Therapy of Depression. New York: Guilford Press."                                                                    },
    { nome: "Aliança Terapêutica",    def: "Qualidade e força da relação colaborativa entre terapeuta e paciente, composta por vínculo afetivo, acordo sobre objetivos e acordo sobre tarefas terapêuticas.",                                                                       ref: "Bordin, E.S. (1979). The generalizability of the psychoanalytic concept of the working alliance. Psychotherapy, 16(3), 252–260."                  },
    { nome: "Neuroplasticidade",      def: "Capacidade do sistema nervoso de se reorganizar estrutural e funcionalmente ao longo da vida em resposta a experiências, aprendizados e intervenções terapêuticas.",                                                                    ref: "Doidge, N. (2007). The Brain That Changes Itself. New York: Viking Press."                                                                        },
    { nome: "Contratransferência",    def: "Reações emocionais e afetivas do terapeuta em relação ao paciente, influenciadas por sua própria história. Quando reconhecida, torna-se valiosa fonte de informação clínica.",                                                          ref: "Heimann, P. (1950). On counter-transference. International Journal of Psychoanalysis, 31, 81–84."                                                 },
    { nome: "Mentalização",           def: "Capacidade de compreender o próprio comportamento e o dos outros em termos de estados mentais — pensamentos, sentimentos, desejos e intenções. Base do apego seguro e da regulação emocional.",                                         ref: "Bateman, A. & Fonagy, P. (2004). Psychotherapy for Borderline Personality Disorder. Oxford University Press."                                    },
    { nome: "Dissociação",            def: "Ruptura na integração normal da consciência, memória, identidade ou percepção. Mecanismo de defesa primário em quadros traumáticos, presente em graus variados de intensidade.",                                                        ref: "Van der Hart, O., Nijenhuis, E.R.S. & Steele, K. (2006). The Haunted Self. W.W. Norton & Company."                                               },
    { nome: "Esquemas Cognitivos",    def: "Estruturas cognitivas profundas formadas na infância que organizam a percepção de si, dos outros e do mundo. Quando disfuncionais, perpetuam padrões emocionais e relacionais problemáticos.",                                           ref: "Young, J.E., Klosko, J.S. & Weishaar, M.E. (2003). Schema Therapy: A Practitioner's Guide. Guilford Press."                                      },
    { nome: "Ruminação",              def: "Padrão de pensamento repetitivo e passivo focado em sintomas de angústia. Fator transdiagnóstico associado à manutenção de depressão e ansiedade.",                                                                                     ref: "Nolen-Hoeksema, S. (1991). Responses to depression and their effects on the duration of depressive episodes. JAP, 100(4), 569–582."               },
    { nome: "Desfusão Cognitiva",     def: "Processo da ACT que consiste em criar distância psicológica dos pensamentos, observando-os como eventos mentais passageiros em vez de verdades absolutas ou ameaças a serem controladas.",                                              ref: "Hayes, S.C., Strosahl, K.D. & Wilson, K.G. (1999). Acceptance and Commitment Therapy. New York: Guilford Press."                                 },
    { nome: "Tolerância ao Distress", def: "Habilidade da DBT que envolve suportar situações emocionalmente dolorosas sem agravá-las com comportamentos impulsivos. Complementa as habilidades de regulação emocional.",                                                           ref: "Linehan, M.M. (1993). Skills Training Manual for Treating Borderline Personality Disorder. Guilford Press."                                       },
    { nome: "Transferência",          def: "Deslocamento de sentimentos, expectativas e padrões relacionais vividos com figuras significativas do passado para a relação com o terapeuta no presente.",                                                                              ref: "Freud, S. (1912). The Dynamics of Transference. Standard Edition, 12, 97–108. London: Hogarth Press."                                            }
];

/* =========================================================
   ABORDAGENS EM DESTAQUE
========================================================= */
export const abordagensDestaque = [
    { sigla: "TCC", nome: "Terapia Cognitivo-Comportamental",  premissa: "Pensamentos, emoções e comportamentos estão interconectados. Modificar padrões cognitivos disfuncionais transforma respostas emocionais e comportamentais.",                    tecnica: "Registro de Pensamentos Automáticos",                   descricao: "Estruturada, focada em problemas presentes, com evidências robustas para ansiedade, depressão, TOC e fobias.",           ref: "Beck, A.T. (1979). Cognitive Therapy of Depression. Guilford Press.",                                               link: "ferramentas.html", cor: "#404E7C" },
    { sigla: "DBT", nome: "Terapia Comportamental Dialética",  premissa: "Aceitação radical e mudança comportamental não são opostos — são os dois pilares que sustentam a transformação emocional duradoura.",                                           tecnica: "TIPP — Temperatura, Exercício Intenso, Respiração",     descricao: "Desenvolvida por Marsha Linehan. Eficaz em desregulação emocional severa, autolesão e comportamento suicida.",           ref: "Linehan, M.M. (1993). Cognitive-Behavioral Treatment of BPD. Guilford Press.",                                     link: "ferramentas.html", cor: "#713E5A" },
    { sigla: "ACT", nome: "Terapia de Aceitação e Compromisso",premissa: "O sofrimento psicológico não precisa ser eliminado — precisa ser acolhido enquanto o paciente age em direção ao que valoriza.",                                                tecnica: "Desfusão Cognitiva",                                    descricao: "Parte da terceira onda da TCC. Foca em flexibilidade psicológica, valores pessoais e ação comprometida.",                ref: "Hayes, S.C., Strosahl, K.D. & Wilson, K.G. (1999). ACT. Guilford Press.",                                          link: "ferramentas.html", cor: "#71B48D" },
    { sigla: "AP",  nome: "Psicologia Analítica",              premissa: "A psique busca individuação — um processo de integração dos opostos internos rumo ao Self, o centro regulador da personalidade total.",                                         tecnica: "Análise de sonhos e imaginação ativa",                  descricao: "Fundada por Carl Jung. Trabalha com inconsciente coletivo, arquétipos, sombra e anima/animus.",                         ref: "Jung, C.G. (1968). The Archetypes and the Collective Unconscious. Princeton UP.",                                  link: "ferramentas.html", cor: "#D5B942" },
    { sigla: "PSI", nome: "Psicanálise",                       premissa: "O inconsciente determina grande parte do comportamento humano. Tornar consciente o que é inconsciente é o caminho para a liberdade psíquica.",                                  tecnica: "Associação livre e análise da transferência",           descricao: "Fundada por Freud, desenvolvida por Klein, Winnicott, Lacan e outros. Foca em conflitos inconscientes e defesas.",       ref: "Freud, S. (1900). The Interpretation of Dreams. SE, 4–5. Hogarth Press.",                                         link: "ferramentas.html", cor: "#9c5580" },
    { sigla: "ACP", nome: "Abordagem Centrada na Pessoa",      premissa: "Todo ser humano possui tendência atualizante — capacidade inata de crescimento quando oferecidas condições facilitadoras de empatia, congruência e consideração positiva.",     tecnica: "Escuta empática e reflexo de sentimentos",             descricao: "Desenvolvida por Carl Rogers. A relação terapêutica genuína é o principal agente de mudança.",                          ref: "Rogers, C.R. (1961). On Becoming a Person. Boston: Houghton Mifflin.",                                             link: "ferramentas.html", cor: "#5b8fa8" }
];

/* =========================================================
   CATEGORIAS CLÍNICAS
========================================================= */
export const categoriasClinicas = [
    "Ansiedade","Depressão","Autoestima","Relacionamentos","Trauma",
    "Mindfulness","Neurociência","TCC","DBT","ACT","Psicanálise",
    "Humanista","Infantil","Adolescência","Emoções","Regulação Emocional"
];

/* =========================================================
   DASHBOARD RESUMO
========================================================= */
export const dashboardResumo = {
    atividades: 42,
    insights:   128,
    tecnicas:   24,
    artigos:    310,
    categorias: categoriasClinicas.length
};

console.log("🧠 Banco clínico MindFlow carregado — v2.1");