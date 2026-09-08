// visaogeral.js - Visão Geral do DOCZ
// Baseado no Manual de Operação do DOCZ

const dadosVisaoGeral = {
    // =========================================================================
    // 1. IDENTIFICAÇÃO E CONTEXTO
    // =========================================================================
    identificacao: {
        titulo: "DOCZ",
        subtitulo: "Sistema Inteligente de Gestão Documental",
        versao: "Manual de Operação",
        dataPublicacao: "2026",
        orgaoResponsavel: "Grupo SOS Docs",
        licenca: "Uso exclusivo para clientes e colaboradores do Grupo SOS Docs",
        descricao: "O DOCZ é um sistema inteligente de gestão documental que integra o controle físico e digital dos documentos, organizando, rastreando e protegendo os arquivos em todas as etapas — do armazenamento à digitalização."
    },

    // =========================================================================
    // 2. O QUE É O DOCZ
    // =========================================================================
    oQueE: {
        titulo: "O que é o DOCZ?",
        definicao: "O DOCZ é um sistema inteligente de gestão documental que integra o controle físico e digital dos documentos. Ele organiza, rastreia e protege os arquivos em todas as etapas — do armazenamento à digitalização — garantindo agilidade, segurança e conformidade com as normas de gestão da informação.",
        paraQueServe: [
            "Indexar e localizar documentos com precisão",
            "Solicitar serviços como guarda, retirada e digitalização",
            "Gerenciar Ordens de Serviço com registro digital",
            "Visualizar imagens e fotos de objetos",
            "Gerar relatórios de acompanhamento",
            "Compartilhar objetos com controle de acesso",
            "Identificar materiais com etiquetas inteligentes"
        ]
    },

    // =========================================================================
    // 3. ACESSO AO SISTEMA
    // =========================================================================
    acesso: {
        titulo: "Como Acessar o DOCZ",
        primeiroAcesso: "O sistema DOCZ não permite autocadastro. Para começar a usar, é necessário solicitar a criação do seu usuário.",
        dadosObrigatorios: ["NOME COMPLETO", "CPF", "E-MAIL"],
        passos: [
            "Acesse o endereço informado pelo suporte",
            "No campo Cliente, digite o nome informado no e-mail de primeiro acesso",
            "Em Usuário, informe o e-mail cadastrado",
            "Digite sua senha (ou a senha provisória, caso seja o primeiro acesso)",
            "Clique no botão ENTRAR",
            "Você será levado ao painel inicial da sua instituição"
        ]
    },

    // =========================================================================
    // 4. SEGURANÇA E BOAS PRÁTICAS
    // =========================================================================
    seguranca: {
        titulo: "Recomendações de Uso e Segurança",
        boasPraticas: [
            "Cada usuário deve utilizar apenas sua própria conta de acesso",
            "As permissões devem ser atribuídas conforme a função desempenhada",
            "Acessos de usuários que não utilizam mais o sistema devem ser desativados",
            "As funcionalidades do sistema devem ser utilizadas apenas para fins relacionados às atividades da organização"
        ],
        senha: "Por motivos de segurança, as senhas de acesso ao sistema possuem prazo de validade de 90 dias, sendo necessária sua atualização periódica. A senha é pessoal e intransferível, devendo ser mantida sob sigilo."
    },

    // =========================================================================
    // 5. LGPD E TERMO DE USO
    // =========================================================================
    lgpd: {
        titulo: "Termo de Uso e Proteção de Dados (LGPD)",
        descricao: "O uso do sistema DOCZ está condicionado à aceitação do Termo de Uso e da Política de Privacidade da plataforma, que estabelecem as responsabilidades dos usuários quanto à utilização adequada do sistema e à proteção das informações armazenadas.",
        tratamentoDados: "O tratamento de dados pessoais no DOCZ segue as diretrizes da Lei Geral de Proteção de Dados (LGPD) e das políticas internas de proteção de dados do Grupo SOS Docs, garantindo a confidencialidade, integridade e uso adequado das informações."
    },

    // =========================================================================
    // 6. LIMITAÇÕES E COMPATIBILIDADES
    // =========================================================================
    limitacoes: {
        titulo: "Limitações, Restrições de Uso e Compatibilidades",
        limitacoesTecnicas: [
            "O DOCZ é disponibilizado na modalidade Software como Serviço (SaaS)",
            "Requer conexão com a internet para funcionamento",
            "O acesso ao sistema é realizado exclusivamente por navegador web, sem necessidade de instalação local",
            "Algumas funcionalidades podem depender de integrações com serviços externos"
        ],
        restricoesUso: [
            "Acesso permitido apenas a usuários autenticados e autorizados",
            "Proibição de compartilhamento de credenciais de acesso",
            "Utilização do sistema conforme os níveis de permissão definidos",
            "Uso da plataforma apenas para finalidades autorizadas"
        ],
        navegadores: ["Google Chrome", "Microsoft Edge", "Mozilla Firefox"],
        sistemasOperacionais: ["Windows", "macOS", "Linux"]
    },

    // =========================================================================
    // 7. NAVEGADORES E PAINEL
    // =========================================================================
    painel: {
        titulo: "Painel Inicial",
        descricao: "O painel inicial do DOCZ apresenta um resumo visual das atividades, permitindo acompanhar o desempenho do contrato de forma simples e intuitiva.",
        barraSuperior: "A barra superior está sempre visível no topo da tela. Nela, você confere o nome do projeto ativo, acessa o menu de usuário, notificações e opções adicionais.",
        menuLateral: "O menu lateral é o ponto de partida para acessar as principais funcionalidades do DOCZ. Cada item leva você a uma área específica do sistema.",
        projetos: "Um mesmo cliente pode ter mais de um projeto cadastrado. É necessário selecionar o projeto antes de iniciar o uso do sistema.",
        graficos: [
            "Gráfico de Pizza: apresenta os dados em percentuais",
            "Gráfico de Barras: exibe o volume total dos dados por categoria"
        ]
    },

    // =========================================================================
    // 8. SMARTDOCS
    // =========================================================================
    smartdocs: {
        titulo: "SmartDocs",
        descricao: "O SmartDocs é uma plataforma inteligente 100% web, que une automação de processos e gestão documental em um único ecossistema. Ele transforma fluxos complexos em jornadas digitais simples, seguras e totalmente integradas.",
        recursos: [
            "Precisão e rastreabilidade do início ao fim",
            "Automatize fluxos com inteligência BPMN",
            "Formulários Customizados — sem código, sem complicação",
            "Integração com outros sistemas",
            "Carta de Serviços Digital",
            "Gestão documental automatizada e 360°",
            "Assinatura Digital e Eletrônica (Lei 14.063/2020)"
        ],
        sso: "O SmartDocs oferece integração direta com o DOCZ, permitindo que usuários logados sejam redirecionados automaticamente para o SmartDocs sem precisar fazer um novo login (Single Sign-On)."
    },

    // =========================================================================
    // 9. PERMISSÕES E GRUPOS
    // =========================================================================
    permissoes: {
        titulo: "Permissões do Usuário",
        descricao: "Cada permissão define as funcionalidades e ações que o usuário pode executar dentro do sistema.",
        categorias: [
            {
                nome: "Administração",
                permissoes: [
                    "Administrador: Acesso total ao sistema",
                    "Gerenciar projetos usuários: atribuir permissão de acesso a projetos",
                    "Gerenciar clientes: cadastro e gerenciamento de clientes e contratos",
                    "Visualizar Dados Ocultados pela LGPD: visualizar campos sensíveis protegidos",
                    "Gerenciar Unidades",
                    "Administrar usuários: criar, editar e atribuir usuários a grupos",
                    "Pode gerenciar projetos dos clientes"
                ]
            },
            {
                nome: "Gestão",
                permissoes: [
                    "Alterar documentos em lote: editar até 500 documentos simultaneamente",
                    "Desfazer relacionamentos: remover vínculos entre documentos",
                    "Indexador: edição de metadados dos arquivos",
                    "Gerenciar gestão documental: acesso à área de Gestão Documental",
                    "Realizar upload: carregar documentos para o sistema",
                    "Comentar arquivos: adicionar anotações em documentos",
                    "Realizar download: baixar arquivos do sistema",
                    "Excluir documentos: exclusão lógica de documentos",
                    "Avaliar lotes: revisar e validar lotes de documentos",
                    "Criar formulários dos projetos: configurar formulários de indexação",
                    "Visualizar digitalização: visualizar imagens digitalizadas",
                    "Indexar arquivos: cadastrar e atribuir metadados"
                ]
            },
            {
                nome: "Assinaturas",
                permissoes: [
                    "Realizar assinatura em arquivos: assinar digitalmente documentos",
                    "Realizar chancela em documentos em lote",
                    "Compartilhar pacotes de difusão - DIP",
                    "Compartilhar arquivos: enviar documentos para outros usuários",
                    "Aplicar chancela no arquivo",
                    "Realizar assinatura com certificado de usuário em lote",
                    "Compartilhar pacotes de preservação - AIP"
                ]
            },
            {
                nome: "Guarda",
                permissoes: [
                    "Guarda: acesso total ao armazenamento físico e controle da guarda",
                    "Emitir O.S avulsa: gerar Ordem de Serviço fora do fluxo padrão",
                    "Gerenciar armazém",
                    "Gerenciar transportes",
                    "Gerencia arquivamento: gerenciar o arquivamento de documentos",
                    "Aprova reimpressão: aprovar solicitações de reimpressão de etiquetas"
                ]
            },
            {
                nome: "Solicitação",
                permissoes: [
                    "Visualizar solicitação: acesso ao menu Solicitações",
                    "Realizar solicitação de implantação",
                    "Realizar solicitação: criar solicitações no sistema"
                ]
            },
            {
                nome: "Relatórios",
                permissoes: [
                    "Emitir relatórios: acesso completo à funcionalidade de relatórios",
                    "Visualizar relatórios padrão"
                ]
            }
        ]
    },

    // =========================================================================
    // 10. SOLICITAÇÕES E ORDENS DE SERVIÇO
    // =========================================================================
    solicitacoes: {
        titulo: "Solicitações e Ordens de Serviço",
        descricao: "As solicitações permitem criar e acompanhar Ordens de Serviço (O.S) relacionadas à movimentação de documentos ou caixas no acervo.",
        tipos: [
            "Implantação: solicitar a implantação de caixas/documentos",
            "Suprimento: solicitar insumos",
            "O.S. Avulsa: gerar Ordem de Serviço fora do fluxo padrão"
        ],
        status: ["Aberta", "Em Andamento", "Finalizada", "Cancelada"],
        acoes: [
            "Visualizar O.S.",
            "Atribuir O.S.",
            "Finalizar O.S.",
            "Cancelar O.S.",
            "Confirmar O.S. por Token"
        ]
    },

    // =========================================================================
    // 11. GESTÃO DOCUMENTAL
    // =========================================================================
    gestaoDocumental: {
        titulo: "Gestão Documental",
        funcionalidades: [
            "Gerenciamento de Status: atualização do status das caixas ou documentos",
            "Arquivar Documento: vincular documentos a caixas físicas",
            "Distribuir p/ Indexação: organizar e automatizar a distribuição para indexação",
            "Tabela de Temporalidade: gestão dos prazos de guarda dos documentos",
            "Calcular Prazo de Guarda: gerar listagens com prazos conforme a tabela",
            "Tipos de Arquivo Documento: cadastrar e gerenciar tipos de documentos",
            "Projeto Etapa Indexação: cadastrar etapas no fluxo de gestão documental"
        ]
    },

    // =========================================================================
    // 12. TRANSPORTE
    // =========================================================================
    transporte: {
        titulo: "Transporte",
        descricao: "O módulo de transporte permite registrar e organizar o transporte de Ordens de Serviço (O.S.) com controle de equipe, veículo e itens.",
        funcionalidades: [
            "Gestão de transporte: registrar e organizar o transporte de O.S.",
            "Gerenciar veículos: cadastrar e editar veículos de transporte",
            "Responsáveis pelo transporte: gerenciar colaboradores (motoristas e ajudantes)"
        ]
    },

    // =========================================================================
    // 13. RELATÓRIOS
    // =========================================================================
    relatorios: {
        titulo: "Relatórios",
        descricao: "O módulo de Relatórios permite extrair dados do sistema em formato .xlsx, .csv ou .pdf, com base em filtros específicos.",
        tipos: [
            "Relatório – Caixas: todas as caixas cadastradas",
            "Relatório – Documentos: lista de documentos cadastrados",
            "Relatório – Expurgo / Saída Definitiva: documentos eliminados",
            "Relatório Estatístico – Solicitação: dados estatísticos sobre solicitações",
            "Relatório Estatístico – Tipo de Objeto: agrupamento por tipo",
            "Relatório Estatístico – Status do Objeto: distribuição por status",
            "Relatório Estatístico – Status de Gestão Documental",
            "Relatório Estatístico – Tipo de Objeto e Status",
            "Relatório – Dinâmico: personalização de filtros",
            "Relatório – Relacionamento entre Objetos"
        ],
        centralDownloads: "A Central de Downloads permite localizar e baixar relatórios que foram gerados em segundo plano pelo sistema."
    },

    // =========================================================================
    // 14. APLICATIVO MOBILE
    // =========================================================================
    appMobile: {
        titulo: "App DOCZ Mobile",
        descricao: "O DOCZ Mobile é o aplicativo utilizado para executar operações de gestão documental diretamente no campo ou no ambiente de armazenamento físico.",
        funcionalidades: [
            "Consulta de documentos e caixas",
            "Leitura de códigos de barras ou QR Codes",
            "Movimentação de objetos",
            "Criação de solicitações",
            "Registro de localização",
            "Acompanhamento de histórico e status documental"
        ],
        metodosConsulta: ["Scan (câmera)", "Leitor (scanner externo)", "Texto (digitação manual)"],
        acoes: [
            "Consulta de Objeto",
            "Histórico do Objeto",
            "Expurgo do Objeto",
            "Consulta de Conteúdo de Container",
            "Arquivamento em Container",
            "Solicitações (Ordens de Serviço)"
        ]
    },

    // =========================================================================
    // 15. ETIQPRESS
    // =========================================================================
    etiqpress: {
        titulo: "EtiqPress",
        descricao: "O EtiqPress é um aplicativo desktop integrado ao DOCZ para criar, imprimir e gerenciar etiquetas com dados automáticos como ID SOS e código de localização.",
        funcionalidades: [
            "Gerar etiquetas de caixas, documentos e endereçamento",
            "Impressão rápida e precisa",
            "Integração direta com o DOCZ"
        ]
    },

    // =========================================================================
    // 16. NOVIDADES E RELEASE NOTES
    // =========================================================================
    novidades: {
        titulo: "O que há de novo no DOCZ?",
        descricao: "Acompanhe as release notes com melhorias, correções e novas funcionalidades. As atualizações são publicadas semanalmente.",
        versoes: [
            { data: "31/03/2026", versao: "DocZ v: 2026.03.31.17.1.5.17.1" },
            { data: "26/03/2026", versao: "DocZ v: 2026.03.26.18.1.5.16.1r" },
            { data: "05/03/2026", versao: "DocZ v: 2026.03.04.18.1.5.15.7" },
            { data: "26/02/2026", versao: "DocZ v: 2026.02.26.17.1.5.15.5" },
            { data: "11/02/2026", versao: "DocZ v: 2026.02.11.19.1.5.15.3" },
            { data: "02/02/2026", versao: "DocZ v: 2026.02.02.17.1.5.15.2" },
            { data: "13/01/2026", versao: "DocZ v: 2026.01.13.19.1.5.14.1" }
        ]
    },

    // =========================================================================
    // 17. PERGUNTAS FREQUENTES (FAQ)
    // =========================================================================
    faq: [
        {
            pergunta: "O que é o DOCZ?",
            resposta: "O DOCZ e um sistema inteligente de gestao documental que integra documentos fisicos e digitais. Ele organiza, rastreia e protege os arquivos desde o armazenamento ate a digitalizacao, com recursos para pesquisa, solicitacoes, guarda e acompanhamento operacional."
        },
        {
            pergunta: "Como faço para acessar o DOCZ?",
            resposta: "O DOCZ nao permite autocadastro. Solicite a criacao do usuario ao suporte ou ao Gestor do Projeto do Grupo SOS Docs, informando nome completo, CPF e e-mail. Depois, use o endereco enviado, informe o cliente, o e-mail cadastrado e a senha recebida."
        },
        {
            pergunta: "Quais dados são necessários para criar meu usuário?",
            resposta: "Informe nome completo, CPF e e-mail. Esses dados devem ser enviados ao suporte ou ao Gestor do Projeto para que o cadastro seja criado e as credenciais sejam encaminhadas."
        },
        {
            pergunta: "O que devo fazer no primeiro acesso?",
            resposta: "Acesse o endereco informado pelo suporte, digite o cliente conforme o e-mail recebido, informe seu e-mail de usuario e use a senha provisoria. Depois de entrar, troque a senha para manter a conta protegida."
        },
        {
            pergunta: "Quando devo trocar minha senha?",
            resposta: "As senhas possuem validade de 90 dias e devem ser atualizadas periodicamente. Troque a senha imediatamente se houver suspeita de uso indevido ou comprometimento das credenciais. A senha e pessoal e intransferivel."
        },
        {
            pergunta: "Quais navegadores e sistemas operacionais são compatíveis?",
            resposta: "O DOCZ funciona em navegadores modernos, especialmente Google Chrome, Microsoft Edge e Mozilla Firefox. Pode ser acessado em Windows, macOS e Linux. Recomenda-se manter o navegador atualizado."
        },
        {
            pergunta: "O DOCZ precisa ser instalado no computador?",
            resposta: "Nao. O DOCZ e disponibilizado como Software como Servico (SaaS) e e acessado pelo navegador. E necessario ter conexao com a internet; algumas funcoes podem depender de integracoes externas."
        },
        {
            pergunta: "Como faço para solicitar um serviço no DOCZ?",
            resposta: "No menu lateral, acesse Solicitacoes e escolha o servico desejado, como Implantacao, Suprimento ou O.S. Avulsa. Preencha os campos obrigatorios, adicione os itens quando necessario e clique em Enviar Solicitacao."
        },
        {
            pergunta: "O que são Ordens de Serviço (O.S.)?",
            resposta: "As Ordens de Servico registram pedidos como emprestimo, digitalizacao, movimentacao, devolucao e implantacao de documentos ou caixas. Cada O.S. possui um identificador e pode ser acompanhada conforme avanca no atendimento."
        },
        {
            pergunta: "Como funciona a validação por Token?",
            resposta: "O cliente ou destinatario final recebe um codigo por e-mail. Para confirmar o recebimento, informe no DOCZ o numero da O.S. e o Token recebido. O procedimento registra a confirmacao e aumenta a seguranca e a rastreabilidade da entrega."
        },
        {
            pergunta: "Como pesquisar documentos e caixas?",
            resposta: "Acesse Pesquisar, selecione o projeto e use os filtros disponiveis para combinar criterios de busca. E possivel localizar objetos por metadados e, conforme a configuracao, consultar caixas ou documentos por identificador e endereco."
        },
        {
            pergunta: "O que aparece no Painel Inicial?",
            resposta: "O Painel Inicial apresenta indicadores e graficos sobre a operacao, incluindo caixas e documentos, tipos e status de solicitacao, prioridades, gestao documental e distribuicao por departamento. Os dados mudam conforme os filtros de projeto, unidade e periodo."
        },
        {
            pergunta: "Como funcionam as permissões de acesso?",
            resposta: "As permissoes definem o que cada usuario pode visualizar e executar. Elas devem ser atribuidas conforme a funcao desempenhada, e acessos de pessoas que nao utilizam mais o sistema devem ser desativados. Nao compartilhe credenciais."
        },
        {
            pergunta: "Como funciona a importação de metadados?",
            resposta: "A importacao permite incluir ou atualizar muitos registros usando arquivos CSV ou XLSX. Acesse Importacao, selecione o projeto e a pasta, baixe o modelo, preencha os campos e envie o arquivo. O Identificador SOS vazio cria um novo registro; um identificador existente atualiza o objeto correspondente."
        },
        {
            pergunta: "O que fazer quando uma importação apresenta erro?",
            resposta: "Confira se o arquivo segue o modelo disponibilizado, se os campos obrigatorios foram preenchidos e se os Identificadores SOS sao validos. Registros com identificador desconhecido nao sao importados e devem ser corrigidos antes de uma nova tentativa."
        },
        {
            pergunta: "Como funciona o transporte de documentos?",
            resposta: "O modulo de Transporte permite registrar equipe, veiculo e itens vinculados a uma O.S. Tambem e possivel acompanhar a rota e atualizar situacoes como inicio do atendimento, chegada, atraso ou cancelamento, mantendo o historico da movimentacao."
        },
        {
            pergunta: "Qual a diferença entre DOCZ e SmartDocs?",
            resposta: "O DOCZ e focado em gestao documental, armazenamento, guarda e solicitacoes. O SmartDocs e uma plataforma de automacao de processos com formularios customizados e BPMN. Os dois podem ser integrados por SSO."
        },
        {
            pergunta: "Como faço para baixar o aplicativo DOCZ Mobile?",
            resposta: "O DOCZ Mobile e destinado a operacoes de campo em dispositivos Android. No sistema web, acesse Outros > Componentes e selecione DOCZ Android para localizar o acesso ao aplicativo."
        },
        {
            pergunta: "Como funciona a integração com o SmartDocs?",
            resposta: "Com o SSO (Single Sign-On), usuarios autenticados no DOCZ podem ser direcionados ao SmartDocs sem um novo login. No primeiro acesso integrado, o usuario pode ser cadastrado automaticamente no SmartDocs. A integracao depende de configuracao especifica do ambiente."
        },
        {
            pergunta: "Como o DOCZ trata os dados pessoais?",
            resposta: "O uso do DOCZ segue o Termo de Uso, a Politica de Privacidade e as diretrizes da LGPD. Os usuarios devem utilizar a plataforma apenas para finalidades autorizadas e proteger as informacoes sob sua responsabilidade."
        },
        {
            pergunta: "Com quem devo falar quando precisar de ajuda?",
            resposta: "Procure o suporte do Grupo SOS Docs ou o Gestor do Projeto da sua instituicao. Ao abrir o chamado, informe o cliente, o projeto, a funcionalidade utilizada e uma descricao objetiva do que ocorreu."
        }
    ],

    // =========================================================================
    // 18. CRÉDITOS
    // =========================================================================
    creditos: {
        titulo: "DOCZ — Informações de referência",
        descricao: "Conteúdo baseado no Manual de Operação do DOCZ fornecido pelo Grupo SOS Docs.",
        empresa: "Grupo SOS Docs",
        slogan: "Tudo flui com o DocZ. Sua gestão, mais ágil. Seu trabalho, mais fácil."
    }
};