// ============================================================================
// neurociencia.js — MindFlow · Neurociência Clínica
// ============================================================================

const banco = {

    estruturas: [
        {
            id: "e1",
            nome:     "Amígdala",
            sistema:  "Sistema Límbico",
            desc:     "Estrutura em forma de amêndoa localizada no lobo temporal medial. Central para detecção de ameaças, processamento do medo e memória emocional.",
            anatomia: "Par de núcleos localizados no polo do lobo temporal, anterior ao hipocampo. Composta por núcleos basolateral, central e medial, cada um com funções distintas.",
            clinica:  "Hiperativação da amígdala é o marcador neurobiológico central de TEPT, fobias e ansiedade generalizada. Técnicas de exposição, mindfulness e reavaliação cognitiva reduzem sua reatividade. O terapeuta deve trabalhar dentro da janela de tolerância para evitar retraumatização.",
            ref:      "LeDoux, J.E. (2015). Anxious: Using the Brain to Understand and Treat Fear and Anxiety. Viking Press."
        },
        {
            id: "e2",
            nome:     "Hipocampo",
            sistema:  "Sistema Límbico",
            desc:     "Essencial para formação de memórias declarativas, contextualização do medo e navegação espacial. Altamente sensível ao estresse crônico.",
            anatomia: "Estrutura curvilínea no lobo temporal medial, parte da formação hipocampal. Rico em receptores de glicocorticoides — tornando-o vulnerável ao cortisol elevado.",
            clinica:  "Estresse crônico e trauma reduzem o volume hipocampal (até 8% em TEPT). Isso compromete a contextualização das memórias traumáticas — explicando flashbacks e generalização do medo. Exercício aeróbico e sono REM promovem neurogênese hipocampal.",
            ref:      "McEwen, B.S. (2007). Physiology and neurobiology of stress and adaptation. Physiological Reviews, 87(3)."
        },
        {
            id: "e3",
            nome:     "Córtex Pré-Frontal",
            sistema:  "Córtex Cerebral",
            desc:     "Centro executivo do cérebro. Responsável por planejamento, tomada de decisão, controle inibitório e regulação top-down das emoções.",
            anatomia: "Região anterior do lobo frontal, incluindo CPF dorsolateral (cognição), ventromedial (emoção e decisão) e orbitofrontal (recompensa e inibição).",
            clinica:  "O CPF é o 'freio' da amígdala. Em ansiedade, depressão e TEPT, sua atividade está reduzida. TCC, mindfulness e psicoterapia em geral fortalecem a regulação pré-frontal. A pergunta socrática ativa especificamente o CPF dorsolateral.",
            ref:      "Ochsner, K.N. & Gross, J.J. (2005). The cognitive control of emotion. Trends in Cognitive Sciences, 9(5)."
        },
        {
            id: "e4",
            nome:     "Ínsula",
            sistema:  "Córtex Cerebral",
            desc:     "Hub da consciência corporal e interoceptiva. Integra sinais viscerais ao processamento emocional — base neural do 'sentir no corpo'.",
            anatomia: "Córtex localizado profundamente na fissura lateral (Sylviana), coberto pelos lóbulos frontal, parietal e temporal. Divide-se em ínsula anterior (emocional) e posterior (sensorial).",
            clinica:  "Alexitimia (dificuldade de identificar emoções) está associada à hipoatividade insular. Técnicas de body scan, mindfulness somático e consciência corporal ativam a ínsula e melhoram a interoceptividade — fundamental em trauma complexo.",
            ref:      "Craig, A.D. (2009). How do you feel — now? The anterior insula and human awareness. Nature Reviews Neuroscience, 10."
        },
        {
            id: "e5",
            nome:     "Córtex Cingulado Anterior",
            sistema:  "Córtex Cerebral",
            desc:     "Interface entre cognição e emoção. Monitora conflitos, detecta erros, processa dor social e regula atenção emocional.",
            anatomia: "Estrutura em forma de cinto no aspecto medial do lobo frontal, circundando o corpo caloso. Divisão dorsal (cognitiva) e rostral/ventral (emocional/afetiva).",
            clinica:  "Hiperatividade do CCA está associada a ruminação, TOC e depressão. O CCA dorsal é ativado por conflito cognitivo — base neural para o processo de questionamento em TCC. Mindfulness reduz sua reatividade ao erro.",
            ref:      "Bush, G., Luu, P. & Posner, M.I. (2000). Cognitive and emotional influences in anterior cingulate cortex. Trends in Cognitive Sciences, 4(6)."
        },
        {
            id: "e6",
            nome:     "Cerebelo",
            sistema:  "Tronco Encefálico",
            desc:     "Além do controle motor, o cerebelo participa de funções cognitivas e emocionais, incluindo regulação do timing, previsão e processamento da linguagem.",
            anatomia: "Localizado na fossa posterior do crânio, abaixo do córtex occipital. Contém mais neurônios que o restante do cérebro combinado.",
            clinica:  "Pesquisas recentes indicam papel do cerebelo na regulação emocional e no autismo. A disfunção cerebelar afeta a capacidade de prever consequências sociais — relevante em psicoterapia de habilidades sociais.",
            ref:      "Stoodley, C.J. & Schmahmann, J.D. (2010). Evidence for topographic organization in the cerebellum. NeuroImage, 52(4)."
        },
        {
            id: "e7",
            nome:     "Núcleo Accumbens",
            sistema:  "Sistema de Recompensa",
            desc:     "Centro do circuito de recompensa e motivação. Processa prazer, antecipação de recompensa e está no coração da neurobiologia das adições.",
            anatomia: "Localizado no estriado ventral, na junção dos lobos frontal e temporal. Rico em receptores dopaminérgicos D1 e D2.",
            clinica:  "Em depressão, a hipoatividade do núcleo accumbens explica a anedonia. Ativação comportamental (TCC) e exercício físico aumentam sua responsividade dopaminérgica. Central para compreender compulsões, adições e comportamentos de busca de recompensa.",
            ref:      "Nestler, E.J. & Carlezon, W.A. (2006). The mesolimbic dopamine reward circuit in depression. Biological Psychiatry, 59(12)."
        },
        {
            id: "e8",
            nome:     "Hipotálamo",
            sistema:  "Sistema Neuroendócrino",
            desc:     "Regulador mestre do sistema neuroendócrino. Controla o eixo HPA, temperatura corporal, sono, fome e resposta ao estresse.",
            anatomia: "Estrutura diencefálica abaixo do tálamo, acima do tronco encefálico. Contém múltiplos núcleos com funções homeostáticas distintas.",
            clinica:  "O hipotálamo inicia a cascata cortisol via eixo HPA em resposta ao estresse. Trauma crônico desregula esse eixo — produzindo hiper ou hiporreatividade ao estresse. Fundamental para compreender a biologia do burnout, TEPT e depressão.",
            ref:      "Ulrich-Lai, Y.M. & Herman, J.P. (2009). Neural regulation of endocrine and autonomic stress responses. Nature Reviews Neuroscience, 10."
        }
    ],

    sistemas: [
        {
            id: "s1",
            nome:     "Sistema Límbico",
            sistema:  "Sistema Neural",
            desc:     "Conjunto de estruturas subcorticais responsável pelo processamento emocional, memória autobiográfica e motivação. Integra experiências sensoriais com resposta emocional.",
            anatomia: "Inclui amígdala, hipocampo, giro do cíngulo, hipotálamo e tálamo. Altamente interconectado com o córtex pré-frontal via circuitos de regulação bidirecional.",
            clinica:  "A maioria dos transtornos mentais envolve disfunção límbica. A psicoterapia eficaz modifica os circuitos límbicos — especialmente a conectividade amígdala-CPF. Intervenções verbais e corporais têm vias de acesso distintas ao sistema límbico.",
            ref:      "Panksepp, J. (1998). Affective Neuroscience: The Foundations of Human and Animal Emotions. Oxford University Press."
        },
        {
            id: "s2",
            nome:     "Eixo HPA",
            sistema:  "Sistema Neuroendócrino",
            desc:     "Hipotálamo–Hipófise–Adrenal: eixo neuroendócrino central da resposta ao estresse. Regula a liberação de cortisol em resposta a ameaças percebidas.",
            anatomia: "O hipotálamo libera CRH → hipófise libera ACTH → adrenal libera cortisol. Feedback negativo via receptores hipocampais e pré-frontais encerra a resposta.",
            clinica:  "Trauma e estresse crônico desregulam o eixo HPA — produzindo hipercortisolemia (burnout, depressão) ou hipocortisolemia (TEPT). Avaliar sintomas físicos associados ao eixo HPA é parte da avaliação clínica integrativa.",
            ref:      "McEwen, B.S. (2008). Central effects of stress hormones in health and disease. European Journal of Pharmacology, 583(2-3)."
        },
        {
            id: "s3",
            nome:     "Sistema Nervoso Autônomo",
            sistema:  "Sistema Neural",
            desc:     "Regula funções involuntárias do organismo. Divisão simpática (luta-fuga) e parassimpática (repouso-digestão) atuam em oposição dinâmica para manter homeostase.",
            anatomia: "SNS: origina-se na medula espinal torácica e lombar. SNP: nervo vago (X par craniano) como principal via. A teoria polivagal de Porges acrescenta o nervo vago ventral como regulador social.",
            clinica:  "A janela de tolerância clínica é definida pelos limites do SNA. Hiperativação simpática = ansiedade/pânico. Hipoativação parassimpática = dissociação/congelamento. Técnicas de regulação vagal (respiração, canto, contato visual) são intervenções diretas no SNA.",
            ref:      "Porges, S.W. (2011). The Polyvagal Theory. W.W. Norton & Company."
        },
        {
            id: "s4",
            nome:     "Rede de Modo Padrão (DMN)",
            sistema:  "Rede Neural",
            desc:     "Rede ativa durante repouso, devaneio, pensamento autorreferencial e projeção futura. Associada à ruminação quando hiperativa.",
            anatomia: "Inclui CPF medial, córtex cingulado posterior, precúneo e lobo temporal inferior. Desativa durante tarefas focadas externamente.",
            clinica:  "Hiperatividade da DMN é o correlato neural da ruminação, depressão e ansiedade antecipatória. Mindfulness reduz sua atividade em repouso — mecanismo pelo qual interrompe ruminação. Prática contemplativa muda a relação do paciente com seus pensamentos espontâneos.",
            ref:      "Buckner, R.L., Andrews-Hanna, J.R. & Schacter, D.L. (2008). The brain's default network. Annals of the New York Academy of Sciences."
        },
        {
            id: "s5",
            nome:     "Sistema de Neurônios-Espelho",
            sistema:  "Sistema Neural",
            desc:     "Neurônios que disparam tanto ao executar uma ação quanto ao observá-la em outro. Base neural da empatia, imitação e ressonância emocional.",
            anatomia: "Localizados principalmente no córtex pré-motor (F5) e parietal inferior (PF/PFG). Em humanos, incluem também regiões da ínsula e CCA.",
            clinica:  "O contágio emocional entre terapeuta e paciente é mediado pelo sistema espelho. A expressão facial congruente do terapeuta, o timing relacional e a ressonância somática são fenômenos de espelhamento. Empatia é, em parte, uma função neurobiológica treinável.",
            ref:      "Rizzolatti, G. & Sinigaglia, C. (2008). Mirrors in the Brain. Oxford University Press."
        },
        {
            id: "s6",
            nome:     "Circuito de Recompensa Mesolímbico",
            sistema:  "Sistema de Recompensa",
            desc:     "Via dopaminérgica da área tegmental ventral ao núcleo accumbens. Processa motivação, antecipação de recompensa e aprendizado por reforço.",
            anatomia: "Área Tegmental Ventral (ATV) → Núcleo Accumbens (via mesolímbica) e CPF (via mesocortical). Dopamina sinaliza discrepância entre recompensa esperada e obtida.",
            clinica:  "Anedonia (depressão) = hipoatividade dopaminérgica mesolímbica. Adição = supersensibilização do circuito com redução de recompensas naturais. Ativação comportamental aumenta a sensibilidade do circuito. Fundamental para motivação terapêutica e metas.",
            ref:      "Schultz, W. (2015). Neuronal reward and decision signals. Physiological Reviews, 95(3)."
        }
    ],

    neurotransmissores: [
        {
            id: "n1",
            nome:     "Serotonina",
            sistema:  "Neurotransmissor",
            desc:     "Modulador do humor, sono, apetite e comportamento social. Produzida principalmente nos núcleos da rafe e no trato gastrointestinal (90%).",
            anatomia: "Neurônios serotoninérgicos nos núcleos da rafe (tronco encefálico) projetam para todo o encéfalo. Receptores 5-HT1A a 5-HT7 com funções distintas.",
            clinica:  "Hipofunção serotoninérgica está associada a depressão, ansiedade, TOC e impulsividade. ISRSs aumentam disponibilidade sináptica. Exercício, luz solar e triptofano aumentam síntese endógena — fundamentos de intervenções de estilo de vida.",
            ref:      "Cowen, P.J. & Browning, M. (2015). What has serotonin to do with depression? World Psychiatry, 14(2)."
        },
        {
            id: "n2",
            nome:     "Dopamina",
            sistema:  "Neurotransmissor",
            desc:     "Neuromodulador da motivação, recompensa, movimento e salience. Sinaliza discrepância entre recompensa esperada e obtida — base do aprendizado por reforço.",
            anatomia: "Quatro vias principais: mesolímbica (recompensa), mesocortical (cognição), nigrostriatal (movimento) e tuberoinfundibular (hormônios).",
            clinica:  "Déficit dopaminérgico mesolímbico = anedonia e avolição (depressão). Excesso = psicose (hipótese dopaminérgica da esquizofrenia). A terapia de ativação comportamental aumenta o tônus dopaminérgico — por isso funciona antes mesmo de mudança cognitiva.",
            ref:      "Wise, R.A. (2004). Dopamine, learning and motivation. Nature Reviews Neuroscience, 5(6)."
        },
        {
            id: "n3",
            nome:     "GABA",
            sistema:  "Neurotransmissor",
            desc:     "Principal neurotransmissor inibitório do SNC. Reduz excitabilidade neural e tem efeito ansiolítico, relaxante muscular e anticonvulsivante.",
            anatomia: "Presente em 30–40% de todas as sinapses cerebrais. Receptores GABA-A (ionotrópicos, rápidos) e GABA-B (metabotrópicos, lentos).",
            clinica:  "Déficit GABAérgico está associado a ansiedade, insônia e convulsões. Benzodiazepínicos potencializam GABA-A. Técnicas de relaxamento muscular progressivo e respiração diafragmática aumentam o tônus GABAérgico endógeno.",
            ref:      "Möhler, H. (2012). The GABA system in anxiety and depression. Pharmacology Biochemistry and Behavior, 100(4)."
        },
        {
            id: "n4",
            nome:     "Noradrenalina",
            sistema:  "Neurotransmissor",
            desc:     "Mediador da resposta de luta-fuga, alerta, atenção e consolidação de memórias emocionais intensas. Liberada em estresse agudo.",
            anatomia: "Produzida no locus coeruleus (tronco encefálico). Projeta amplamente para córtex, cerebelo, medula espinal e sistema límbico.",
            clinica:  "Hiperfunção noradrenérgica em TEPT e pânico explica hipervigilância, insônia e consolidação de memórias traumáticas. Prazosina (bloqueador α1) reduz pesadelos de TEPT. A respiração lenta ativa o nervo vago e reduz o disparo do locus coeruleus.",
            ref:      "Southwick, S.M. et al. (1999). Role of norepinephrine in the pathophysiology and treatment of PTSD. Biological Psychiatry, 46(9)."
        },
        {
            id: "n5",
            nome:     "Glutamato",
            sistema:  "Neurotransmissor",
            desc:     "Principal neurotransmissor excitatório do SNC. Essencial para plasticidade sináptica, aprendizado e memória via receptores NMDA.",
            anatomia: "Presente em 80%+ das sinapses excitatórias. Receptores NMDA, AMPA e mGluR com papéis distintos em LTP (potenciação de longo prazo).",
            clinica:  "Excesso de glutamato causa excitotoxicidade (AVC, TBI). Ketamina (antagonista NMDA) produz efeito antidepressivo rápido — revelando papel do glutamato na depressão resistente. A extinção do medo depende de LTP glutamatérgico no CPF.",
            ref:      "Sanacora, G., Treccani, G. & Popoli, M. (2012). Towards a glutamate hypothesis of depression. Neuropharmacology, 62(1)."
        },
        {
            id: "n6",
            nome:     "Ocitocina",
            sistema:  "Neuropeptídeo",
            desc:     "Hormônio do vínculo social. Facilita confiança, apego, comportamento materno e reduz resposta ao estresse em contexto de segurança social.",
            anatomia: "Produzida no hipotálamo (núcleos paraventricular e supraóptico). Liberada pela hipófise posterior na corrente sanguínea e diretamente no cérebro.",
            clinica:  "A aliança terapêutica aumenta ocitocina — explicando parcialmente seu efeito regulador. Trauma de apego reduz sensibilidade oxi-tocinérgica. Intervenções de compaixão e Compassion Focused Therapy ativam o sistema de cuidado mediado por ocitocina.",
            ref:      "Carter, C.S. (2014). Oxytocin pathways and the evolution of human behavior. Annual Review of Psychology, 65."
        }
    ],

    processos: [
        {
            id: "p1",
            nome:     "Neuroplasticidade",
            sistema:  "Processo Neural",
            desc:     "Capacidade do sistema nervoso de se reorganizar estrutural e funcionalmente em resposta a experiências, aprendizado e intervenções terapêuticas.",
            anatomia: "Ocorre em múltiplos níveis: sináptico (LTP/LTD), dendrítico (arborização), axonal (mielinização) e celular (neurogênese hipocampal em adultos).",
            clinica:  "A psicoterapia é, fundamentalmente, uma intervenção neuroplástica. Mudanças em padrões de pensamento e comportamento criam novos circuitos neurais. Exercício, sono e novidade cognitiva são os três maiores promotores de neuroplasticidade clínica.",
            ref:      "Doidge, N. (2007). The Brain That Changes Itself. Viking Press."
        },
        {
            id: "p2",
            nome:     "Consolidação de Memória",
            sistema:  "Processo Cognitivo",
            desc:     "Processo pelo qual memórias instáveis tornam-se estáveis. Ocorre em duas etapas: consolidação sináptica (horas) e consolidação sistêmica (meses a anos).",
            anatomia: "Hipocampo: armazena inicialmente e orquestra replay durante sono. CPF: armazenamento a longo prazo. Amígdala: modula consolidação de memórias com carga emocional.",
            clinica:  "Memórias traumáticas são consolidadas com excesso de noradrenalina — tornando-as vívidas e intrusivas. Reconsolidação (reativação + janela plástica) é o mecanismo do EMDR e exposição narrativa. Sono é a principal janela de consolidação.",
            ref:      "McGaugh, J.L. (2000). Memory — a century of consolidation. Science, 287(5451)."
        },
        {
            id: "p3",
            nome:     "Regulação Emocional",
            sistema:  "Processo Afetivo",
            desc:     "Conjunto de processos pelos quais indivíduos influenciam quais emoções têm, quando as têm e como as vivenciam e expressam.",
            anatomia: "Circuito CPF-amígdala como eixo central. CPF ventromedial para regulação implícita (automática). CPF dorsolateral para regulação explícita (estratégica, consciente).",
            clinica:  "Gross (1998) distingue estratégias antecedentes (reavaliação, seleção situacional) de estratégias de resposta (supressão). Terapia fortalece o repertório regulatório, deslocando de estratégias maladaptativas para adaptativas com menor custo fisiológico.",
            ref:      "Gross, J.J. (1998). The emerging field of emotion regulation. Review of General Psychology, 2(3)."
        },
        {
            id: "p4",
            nome:     "Resposta de Luta-Fuga-Congelamento",
            sistema:  "Processo Adaptativo",
            desc:     "Resposta evolutiva de sobrevivência orquestrada pelo sistema simpático. Prepara o organismo para enfrentar, fugir ou imobilizar diante de ameaça percebida.",
            anatomia: "Amígdala detecta ameaça → hipotálamo ativa SNA simpático → adrenal libera adrenalina e cortisol → corpo mobiliza energia. Congelamento: via vagal dorsal (Porges).",
            clinica:  "Em trauma, essa resposta é ativada por estímulos neutros associados ao trauma (gatilhos). Grounding, respiração e presença somática interrompem o ciclo de ativação. Compreender isso psicoeducativamente reduz vergonha e aumenta autoeficácia do paciente.",
            ref:      "Porges, S.W. (2011). The Polyvagal Theory: Neurophysiological Foundations of Emotions. W.W. Norton."
        },
        {
            id: "p5",
            nome:     "Extinção do Medo",
            sistema:  "Processo de Aprendizagem",
            desc:     "Processo de inibição da resposta condicionada de medo através de exposição repetida ao estímulo temido sem a consequência aversiva. Base dos tratamentos por exposição.",
            anatomia: "CPF ventromedial inibe a amígdala via interneurônios inibitórios. Hipocampo provê contexto para extinção. A extinção não apaga o medo — cria nova memória inibidora.",
            clinica:  "A recaída pós-exposição ocorre quando o contexto muda (renovação) ou com o tempo (espontâneo). Estratégias de generalização da extinção — variação de contexto, múltiplos estímulos — são essenciais para consolidar ganhos terapêuticos.",
            ref:      "Craske, M.G. et al. (2014). Maximizing exposure therapy: An inhibitory learning approach. Behaviour Research and Therapy, 58."
        },
        {
            id: "p6",
            nome:     "Janela de Tolerância",
            sistema:  "Processo Regulatório",
            desc:     "Zona ótima de ativação do SNA dentro da qual o indivíduo consegue processar informações, regular emoções e integrar experiências.",
            anatomia: "Definida pela co-regulação entre SNS e SNP. Acima da janela: hiperativação (ansiedade, pânico). Abaixo: hipoativação (dissociação, torpor, congelamento).",
            clinica:  "Siegel (1999) popularizou o conceito clínico. O trabalho terapêutico eficaz ocorre dentro da janela. Técnicas de regulação ampliam a janela ao longo do tempo. Avaliar a janela do paciente antes de acessar material traumático é imperativo clínico.",
            ref:      "Siegel, D.J. (1999). The Developing Mind. Guilford Press."
        }
    ]
};

// ============================================================================
// ESTADO
// ============================================================================

let tabAtiva   = "estruturas";
let termoBusca = "";

// ============================================================================
// DESTAQUE DO DIA
// ============================================================================

function carregarDestaque() {
    const todos = [...banco.estruturas, ...banco.sistemas, ...banco.neurotransmissores, ...banco.processos];
    const base  = Math.floor(Date.now() / 86400000);
    const item  = todos[base % todos.length];

    document.getElementById("neuroDestaqueSistema").textContent = item.sistema;
    document.getElementById("neuroDestaqueTitulo").textContent  = item.nome;
    document.getElementById("neuroDestaqueDesc").textContent    = item.desc;
    document.getElementById("neuroDestaqueClinica").innerHTML   =
        `<strong>Relevância clínica:</strong> ${item.clinica}`;
}

// ============================================================================
// FILTRAR E RENDERIZAR
// ============================================================================

function filtrar() {
    const lista = banco[tabAtiva] || [];
    if (!termoBusca) return lista;
    return lista.filter(i =>
        i.nome.toLowerCase().includes(termoBusca) ||
        i.desc.toLowerCase().includes(termoBusca) ||
        i.clinica.toLowerCase().includes(termoBusca)
    );
}

function renderizar() {
    const grid    = document.getElementById("neuroGrid");
    const counter = document.getElementById("contadorNeuro");
    if (!grid) return;

    const lista = filtrar();
    counter.textContent = `${lista.length} item${lista.length !== 1 ? "s" : ""} em ${tabAtiva}`;

    if (!lista.length) {
        grid.innerHTML = `
            <div class="ferramentas-vazio">
                <i class="fa-solid fa-magnifying-glass"></i>
                <p>Nenhum resultado encontrado.</p>
            </div>`;
        return;
    }

    grid.innerHTML = lista.map(item => `
        <article class="neuro-card" data-id="${item.id}">
            <div class="neuro-card-topo">
                <span class="ferr-tag">${item.sistema}</span>
            </div>
            <h3 class="ferr-titulo">${item.nome}</h3>
            <p class="ferr-objetivo">${item.desc}</p>
            <div class="neuro-clinica-preview">
                <i class="fa-solid fa-stethoscope"></i>
                <span>${item.clinica.substring(0, 100)}…</span>
            </div>
            <button class="btn-ferr-ver" data-id="${item.id}">
                Ver detalhe <i class="fa-solid fa-arrow-right"></i>
            </button>
        </article>
    `).join("");

    grid.querySelectorAll(".btn-ferr-ver").forEach(btn => {
        btn.addEventListener("click", () => abrirModal(btn.dataset.id));
    });
}

// ============================================================================
// MODAL
// ============================================================================

function abrirModal(id) {
    const todos = [...banco.estruturas, ...banco.sistemas, ...banco.neurotransmissores, ...banco.processos];
    const item  = todos.find(i => i.id === id);
    if (!item) return;

    document.getElementById("modalNeuroTag").textContent    = item.sistema;
    document.getElementById("modalNeuroTitulo").textContent = item.nome;
    document.getElementById("modalNeuroDesc").textContent   = item.desc;
    document.getElementById("modalNeuroAnat").textContent   = item.anatomia;
    document.getElementById("modalNeuroClinica").textContent= item.clinica;
    document.getElementById("modalNeuroRef").textContent    = item.ref;

    document.getElementById("modalNeuro").classList.add("ativo");
    document.getElementById("modalNeuroOverlay").classList.add("ativo");
    document.body.style.overflow = "hidden";
}

function fecharModal() {
    document.getElementById("modalNeuro").classList.remove("ativo");
    document.getElementById("modalNeuroOverlay").classList.remove("ativo");
    document.body.style.overflow = "";
}

// ============================================================================
// TABS E FILTROS
// ============================================================================

function iniciarEventos() {
    document.querySelectorAll(".neuro-tab").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".neuro-tab").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            tabAtiva = btn.dataset.tab;
            renderizar();
        });
    });

    document.getElementById("buscaNeuro")?.addEventListener("input", e => {
        termoBusca = e.target.value.toLowerCase().trim();
        renderizar();
    });

    document.getElementById("modalNeuroClose")?.addEventListener("click", fecharModal);
    document.getElementById("modalNeuroFechar")?.addEventListener("click", fecharModal);
    document.getElementById("modalNeuroOverlay")?.addEventListener("click", fecharModal);
    document.addEventListener("keydown", e => { if (e.key === "Escape") fecharModal(); });
}

// ============================================================================
// INIT
// ============================================================================

document.addEventListener("DOMContentLoaded", () => {
    carregarDestaque();
    renderizar();
    iniciarEventos();
    const total = Object.values(banco).reduce((s, v) => s + v.length, 0);
    console.log("🧠 Neurociência carregada —", total, "itens.");
});