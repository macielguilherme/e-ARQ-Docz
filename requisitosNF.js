// requisitosNF.js
const dadosRequisitosNF = {
    secoes: [
        {
            id: "armazenamento",
            titulo: "9. Armazenamento",
            icone: "storage",
            totalRequisitos: 19,
            subsecoes: [
                {
                    id: "9.1",
                    titulo: "Durabilidade",
                    requisitos: [
                        {
                            referencia: "9.1.1",
                            titulo: "Dispositivos e padrões maduros",
                            texto: "É altamente desejável que um SIGAD utilize, preferencialmente, dispositivos e padrões de armazenamento maduros, estáveis no mercado e amplamente disponíveis. Um SIGAD deve utilizar, preferencialmente, padrões abertos de armazenamento. A escolha dos dispositivos de armazenamento deve contemplar padrões estáveis de mercado e fornecedores consolidados.",
                            obrigatoriedade: "Altamente Desejável"
                        },
                        {
                            referencia: "9.1.2",
                            titulo: "Revisão de dispositivos conforme evolução tecnológica",
                            texto: "A escolha de dispositivos tem que ser revista sempre que a evolução tecnológica indicar mudanças importantes.",
                            obrigatoriedade: "Obrigatório"
                        },
                        {
                            referencia: "9.1.3",
                            titulo: "Migração preventiva contra obsolescência",
                            texto: "Atividades de migração têm que ser efetivadas, preventivamente, sempre que se torne patente ou previsível a obsolescência do padrão corrente.",
                            obrigatoriedade: "Obrigatório"
                        },
                        {
                            referencia: "9.1.4",
                            titulo: "Registro de MTBF e data de aquisição",
                            texto: "Para as memórias secundárias, um SIGAD tem que manter registro de MTBF (mean time between failure), bem como suas datas de aquisição.",
                            obrigatoriedade: "Obrigatório"
                        },
                        {
                            referencia: "9.1.5",
                            titulo: "Gerenciamento de mídias",
                            texto: "Para as memórias secundárias e terciárias, um SIGAD tem que fazer o gerenciamento das mídias por meio do registro de durabilidade prevista, data de aquisição e histórico de utilização. As informações técnicas sobre previsibilidade de duração de mídias referidas no requisito 9.1.3 devem ser obtidas, preferencialmente, a partir de órgãos independentes. Quando isso não for possível, podem ser utilizadas informações de fornecedores. Em ambos os casos deve ficar registrada a origem da informação.",
                            obrigatoriedade: "Obrigatório"
                        },
                        {
                            referencia: "9.1.6",
                            titulo: "Estatísticas de durabilidade observada",
                            texto: "Para as memórias secundárias e terciárias, é altamente desejável que um SIGAD mantenha estatísticas da durabilidade efetivamente observada.",
                            obrigatoriedade: "Altamente Desejável"
                        },
                        {
                            referencia: "9.1.7",
                            titulo: "Acesso a memória terciária via rede",
                            texto: "O acesso às informações armazenadas em memória terciária deve ser efetuado, preferencialmente, mediante o uso de rede de dados. O objetivo é minimizar o acesso físico às mídias, visando à diminuição do desgaste. A manipulação direta das mídias deve ser restrita aos administradores do SIGAD, e não aos usuários comuns.",
                            obrigatoriedade: "Altamente Desejável"
                        },
                        {
                            referencia: "9.1.8",
                            titulo: "Sanitização de memórias na eliminação",
                            texto: "Quando se proceder à eliminação de documentos, as memórias de suporte têm que ser, devidamente, 'sanitizadas', isto é, ter suas informações, efetivamente, indisponibilizadas. Este requisito aplica-se, principalmente, às memórias secundária e terciária, por sua característica não volátil. As informações devem ser eliminadas de forma irreversível, incluindo, no caso de memória terciária, a possibilidade de destruição física das mídias.",
                            obrigatoriedade: "Obrigatório"
                        }
                    ]
                },
                {
                    id: "9.2",
                    titulo: "Capacidade",
                    requisitos: [
                        {
                            referencia: "9.2.1",
                            titulo: "Capacidade de armazenamento suficiente",
                            texto: "Um SIGAD tem que possuir capacidade de armazenamento suficiente para acomodação de todos os documentos e suas cópias de segurança. Para grandes volumes de dados, é conveniente o uso de dispositivos com maior capacidade unitária de armazenamento, a fim de reduzir a sobrecarga operacional.",
                            obrigatoriedade: "Obrigatório"
                        },
                        {
                            referencia: "9.2.2",
                            titulo: "Expansibilidade da estrutura de armazenamento",
                            texto: "Em um SIGAD, tem que ser prevista a possibilidade de expansão da estrutura de armazenamento. A quantidade de memória primária deve ser superestimada no momento da aquisição, a fim de minimizar as indisponibilidades do SIGAD nas situações de expansão desse tipo de memória. Quando da aquisição de disk arrays, as possibilidades de expansão dos equipamentos de controle devem ser consideradas. Para backups em fita magnética, em sistemas com grande volume de informação, devem ser utilizados sistemas automáticos de seleção, troca e controle de fitas (robots).",
                            obrigatoriedade: "Obrigatório"
                        },
                        {
                            referencia: "9.2.3",
                            titulo: "Configuração de limites de capacidade",
                            texto: "É altamente desejável que um SIGAD permita ao administrador configurar os limites de capacidade de armazenamento dos diversos dispositivos.",
                            obrigatoriedade: "Altamente Desejável"
                        },
                        {
                            referencia: "9.2.4",
                            titulo: "Monitoração da capacidade de armazenamento",
                            texto: "É altamente desejável que um SIGAD ofereça ao administrador facilidades para monitoração da capacidade de armazenamento. Esse controle indica, por exemplo, capacidade utilizada, capacidade disponível e taxa de ocupação. Tais informações são úteis para subsidiar ações de expansão em tempo hábil.",
                            obrigatoriedade: "Altamente Desejável"
                        },
                        {
                            referencia: "9.2.5",
                            titulo: "Alerta de níveis críticos de ocupação",
                            texto: "É altamente desejável que um SIGAD informe, automaticamente, ao administrador quando os dispositivos de armazenamento on-line atingirem níveis críticos de ocupação.",
                            obrigatoriedade: "Altamente Desejável"
                        },
                        {
                            referencia: "9.2.6",
                            titulo: "Estatísticas de taxa de crescimento",
                            texto: "É altamente desejável que um SIGAD mantenha estatísticas de taxa de crescimento de utilização de memória secundária e terciária para informar ao administrador previsões de exaustão de recursos. Este tipo de estimativa possibilita ao administrador antecipar ações de expansão antes que a utilização atinja níveis críticos.",
                            obrigatoriedade: "Altamente Desejável"
                        }
                    ]
                },
                {
                    id: "9.3",
                    titulo: "Efetividade de armazenamento",
                    requisitos: [
                        {
                            referencia: "9.3.1",
                            titulo: "Detecção de erros para leitura e escrita",
                            texto: "É altamente desejável que os dispositivos de armazenamento de um SIGAD suportem métodos de detecção de erros para leitura e escrita de dados.",
                            obrigatoriedade: "Altamente Desejável"
                        },
                        {
                            referencia: "9.3.2",
                            titulo: "Restauração de dados em caso de falhas",
                            texto: "Um SIGAD tem que utilizar técnicas de restauração de dados em caso de falhas.",
                            obrigatoriedade: "Obrigatório"
                        },
                        {
                            referencia: "9.3.3",
                            titulo: "Proteção contra escrita",
                            texto: "Um SIGAD tem que utilizar mecanismos de proteção contra escrita, que previnam alterações indevidas e mantenham a integridade dos dados armazenados.",
                            obrigatoriedade: "Obrigatório"
                        },
                        {
                            referencia: "9.3.4",
                            titulo: "Técnicas de confiabilidade e desempenho",
                            texto: "É altamente desejável que a infraestrutura de um SIGAD preveja o uso de técnicas para garantir maior confiabilidade e desempenho. As técnicas recomendadas incluem: • espelhamento (mirroring) nas memórias secundárias para maior confiabilidade; • partição de dados (data stripping) nas memórias secundárias para maior desempenho.",
                            obrigatoriedade: "Altamente Desejável"
                        },
                        {
                            referencia: "9.3.5",
                            titulo: "Verificação periódica da integridade",
                            texto: "A integridade dos dispositivos de armazenamento tem que ser, periodicamente, verificada.",
                            obrigatoriedade: "Obrigatório"
                        }
                    ]
                }
            ]
        },
        {
            id: "funcoes_administrativas",
            titulo: "10. Funções administrativas",
            icone: "admin_panel_settings",
            totalRequisitos: 3,
            subsecoes: [
                {
                    id: "10.1",
                    titulo: "Funções administrativas",
                    requisitos: [
                        {
                            referencia: "10.1.1",
                            titulo: "Recuperação e reconfiguração de parâmetros",
                            texto: "Um SIGAD tem que permitir que os administradores, de maneira controlada e sem esforço excessivo, recuperem, visualizem e reconfigurem os parâmetros do sistema e os atributos dos usuários.",
                            obrigatoriedade: "Obrigatório"
                        },
                        {
                            referencia: "10.1.2",
                            titulo: "Relatórios de gerenciamento",
                            texto: "Um SIGAD tem que fornecer relatórios flexíveis para que o administrador possa gerenciar os documentos e seu uso. Esses relatórios devem apresentar, no mínimo: • quantidade de dossiês/processos, volumes e itens a partir de parâmetros ou atributos definidos (tempo, classe, unidade administrativa etc.); • estatísticas de transações relativas a dossiês/processos, volumes e itens; • atividades por usuário.",
                            obrigatoriedade: "Obrigatório"
                        },
                        {
                            referencia: "10.1.3",
                            titulo: "Documentação de administração do sistema",
                            texto: "Um SIGAD tem que dispor de documentação referente a aspectos de administração do sistema. A documentação deve incluir todas as informações necessárias para o correto gerenciamento do sistema.",
                            obrigatoriedade: "Obrigatório"
                        }
                    ]
                }
            ]
        },
        {
            id: "conformidade",
            titulo: "11. Conformidade com a legislação e regulamentações",
            icone: "gavel",
            totalRequisitos: 3,
            subsecoes: [
                {
                    id: "11.1",
                    titulo: "Conformidade com a legislação",
                    requisitos: [
                        {
                            referencia: "11.1",
                            titulo: "Conformidade com legislação para admissibilidade legal",
                            texto: "Um SIGAD tem que estar de acordo com a legislação e as normas pertinentes, tendo em vista a admissibilidade legal e o valor probatório dos documentos arquivísticos.",
                            obrigatoriedade: "Obrigatório"
                        },
                        {
                            referencia: "11.2",
                            titulo: "Conformidade com normas específicas de gestão e acesso",
                            texto: "Um SIGAD tem que estar de acordo com a legislação e as normas específicas para gestão e acesso de documentos arquivísticos.",
                            obrigatoriedade: "Obrigatório"
                        },
                        {
                            referencia: "11.3",
                            titulo: "Conformidade com requisitos regulamentares específicos",
                            texto: "Um SIGAD tem que estar em conformidade com requisitos regulamentares específicos e códigos de boa prática necessários para a execução de determinadas atividades. Este requisito pode ser personalizado para cada contexto, como, por exemplo, saúde, justiça, educação, previdência.",
                            obrigatoriedade: "Obrigatório"
                        }
                    ]
                }
            ]
        },
        {
            id: "usabilidade",
            titulo: "12. Usabilidade",
            icone: "accessibility",
            totalRequisitos: 25,
            subsecoes: [
                {
                    id: "12.1",
                    titulo: "Usabilidade",
                    requisitos: [
                        {
                            referencia: "12.1.1",
                            titulo: "Documentação completa e clara",
                            texto: "É altamente desejável que um SIGAD possua documentação completa, clara, inteligível e organizada para instalação e uso do software.",
                            obrigatoriedade: "Altamente Desejável"
                        },
                        {
                            referencia: "12.1.2",
                            titulo: "Sistema de ajuda on-line",
                            texto: "É altamente desejável que um SIGAD possua sistema de ajuda on-line.",
                            obrigatoriedade: "Altamente Desejável"
                        },
                        {
                            referencia: "12.1.3",
                            titulo: "Ajuda vinculada à função executada",
                            texto: "É altamente desejável que o sistema de ajuda on-line fornecido pelo SIGAD seja vinculado à função ou tarefa executada, em todo o sistema. Exemplo: se o usuário estiver executando uma operação de edição, uma vez acionada a ajuda, ela deve remeter ao tópico de ajuda sobre edição.",
                            obrigatoriedade: "Altamente Desejável"
                        },
                        {
                            referencia: "12.1.4",
                            titulo: "Personalização do conteúdo de ajuda",
                            texto: "É altamente desejável que um SIGAD permita a personalização de conteúdo de ajuda on-line por adição de texto ou edição do texto existente. Exemplo: o responsável pela administração do conteúdo da ajuda pode adicionar esclarecimentos ou alterar o conteúdo das descrições, de modo a facilitar o entendimento das funções.",
                            obrigatoriedade: "Altamente Desejável"
                        },
                        {
                            referencia: "12.1.5",
                            titulo: "Mensagens de erro claras",
                            texto: "É altamente desejável que toda mensagem de erro produzida pelo SIGAD seja clara e significativa, de modo a permitir que o usuário se recupere do erro ou cancele a operação.",
                            obrigatoriedade: "Altamente Desejável"
                        },
                        {
                            referencia: "12.1.6",
                            titulo: "Padrões de interface consolidados",
                            texto: "É altamente desejável que a interface de um SIGAD siga padrões preestabelecidos e consolidados como boas práticas de projeto gráfico. Normas ou regras de interface podem ser relativas à utilização de padrão de identidade visual (ligado à 'marca' da instituição ou a alguma legislação específica do estado, município ou órgão federal), bem como de guias de estilo para implementação e verificação da padronização da interface. Exemplo: em 2000, o Conselho Nacional de Arquivos (CONARQ) elaborou o documento 'Diretrizes gerais para a construção de websites de instituições arquivísticas', que procura fornecer um referencial básico às entidades interessadas em criar ou redefinir seus sítios na internet.",
                            obrigatoriedade: "Altamente Desejável"
                        },
                        {
                            referencia: "12.1.7",
                            titulo: "Regras de interface consistentes",
                            texto: "É altamente desejável que um SIGAD empregue um conjunto simples e consistente de regras de interface, privilegiando a facilidade de aprendizado das operações pelos seus usuários. O uso de um conjunto de regras em conformidade com o ambiente operacional em que o SIGAD será executado permite que ele apresente menus, comandos e outras facilidades consistentes em toda a aplicação. Essas regras de interface, quando compatíveis com outras aplicações principais já instaladas, levam à padronização da terminologia utilizada para funções, rótulos e ações no sistema.",
                            obrigatoriedade: "Altamente Desejável"
                        },
                        {
                            referencia: "12.1.8",
                            titulo: "Recurso de arrastar e soltar",
                            texto: "É altamente desejável que a interface de visualização dos documentos arquivísticos forneça o recurso de arrastar e soltar, se for apropriado no ambiente operacional do SIGAD.",
                            obrigatoriedade: "Altamente Desejável"
                        },
                        {
                            referencia: "12.1.9",
                            titulo: "Visualização da estrutura de classes em diferentes formas",
                            texto: "É altamente desejável que o SIGAD permita que sua estrutura de classes e dossiês/processos possa ser visualizada em diferentes formas de apresentação.",
                            obrigatoriedade: "Altamente Desejável"
                        },
                        {
                            referencia: "12.1.10",
                            titulo: "Personalização da interface gráfica",
                            texto: "É altamente desejável que o usuário possa personalizar a interface gráfica de um SIGAD. A personalização deve incluir, pelo menos, as seguintes possibilidades: • conteúdo de menus; • formatos de tela; • utilização de teclas de função; • alteração de cor, fonte e tamanho de letra em telas e janelas; • avisos sonoros.",
                            obrigatoriedade: "Altamente Desejável"
                        },
                        {
                            referencia: "12.1.11",
                            titulo: "Configuração de janelas pop-up e barras de ferramentas",
                            texto: "É altamente desejável que um SIGAD, sempre que utilizar janelas pop-up e barras de ferramentas, ofereça ao usuário a possibilidade de configurar e habilitar/desabilitar esse tipo de recurso. Porém, é preciso não infringir a recomendação de uso de um conjunto simples e consistente de regras de interface.",
                            obrigatoriedade: "Altamente Desejável"
                        },
                        {
                            referencia: "12.1.12",
                            titulo: "Movimentação e redimensionamento de janelas",
                            texto: "É altamente desejável que, sempre que um SIGAD permitir o uso de janelas, admita sua movimentação, redimensionamento e gravação das modificações da aparência, possibilitando a personalização por perfil de usuário.",
                            obrigatoriedade: "Altamente Desejável"
                        },
                        {
                            referencia: "12.1.13",
                            titulo: "Personalização de avisos sonoros",
                            texto: "É altamente desejável que um SIGAD permita a seleção de avisos sonoros e a personalização de tom e volume, bem como a gravação dessas escolhas no perfil do usuário.",
                            obrigatoriedade: "Altamente Desejável"
                        },
                        {
                            referencia: "12.1.14",
                            titulo: "Gravação de opções default para entrada de dados",
                            texto: "É altamente desejável que um SIGAD permita a gravação de opções default para entrada de dados de configuração, como: • valores de variáveis definidas pelo usuário; • valores iguais aos de um item anterior; • valores que possam ser selecionados em uma lista configurável; • valores derivados do contexto, como data, referência do dossiê/processo, identificador do usuário; • valores predefinidos por um administrador (para campos de metadados como, por exemplo, o nome da organização que está utilizando o sistema).",
                            obrigatoriedade: "Altamente Desejável"
                        },
                        {
                            referencia: "12.1.15",
                            titulo: "Acessibilidade para usuários com deficiência",
                            texto: "É altamente desejável que a interface do SIGAD com o usuário seja adequada a adaptações e personalizações que permitam sua utilização por usuários com deficiência ou mobilidade reduzida, de acordo com as políticas de inclusão da organização. Essas opções devem ser compatíveis com software especializado que possa vir a ser acoplado (por exemplo, leitores de tela para cegos), bem como seguir orientações específicas de acessibilidade de interface. Para ambientes e sítios apoiados na web, é importante seguir orientações específicas de acessibilidade. É desejável que o padrão considerado possa ser verificado por meio da aplicação de uma validação manual ou automática, de preferência visando à obtenção de certificação de acessibilidade.",
                            obrigatoriedade: "Altamente Desejável"
                        },
                        {
                            referencia: "12.1.16",
                            titulo: "Tarefas com poucas interações",
                            texto: "É altamente desejável que um SIGAD permita a realização de transações ou tarefas mais frequentemente executadas com um pequeno número de interações (por exemplo, cliques de mouse) e sem mudanças excessivas de contexto.",
                            obrigatoriedade: "Altamente Desejável"
                        },
                        {
                            referencia: "12.1.17",
                            titulo: "Integração com correio eletrônico",
                            texto: "É altamente desejável que um SIGAD esteja fortemente integrado ao sistema de correio eletrônico da organização, de forma a permitir a geração de mensagens com possibilidade de manipular documentos digitais, sem necessidade de sair do SIGAD. Este requisito deve estar de acordo com as normas de segurança.",
                            obrigatoriedade: "Altamente Desejável"
                        },
                        {
                            referencia: "12.1.18",
                            titulo: "Referência a documentos sem cópias adicionais",
                            texto: "Em caso de integração do SIGAD com o sistema de correio eletrônico, é altamente desejável que seja possível fazer referências a documentos arquivísticos sem necessidade de envio de cópias adicionais.",
                            obrigatoriedade: "Altamente Desejável"
                        },
                        {
                            referencia: "12.1.19",
                            titulo: "Integração com sistema de edição de documentos",
                            texto: "É altamente desejável que um SIGAD esteja integrado com o sistema padrão de edição de documentos, de modo que possa fazer uso da facilidade de gravação.",
                            obrigatoriedade: "Altamente Desejável"
                        },
                        {
                            referencia: "12.1.20",
                            titulo: "Reconhecimento óptico de caracteres",
                            texto: "Um SIGAD pode fornecer recursos que possibilitem o reconhecimento óptico de caracteres (como, por exemplo, OCR – optical character recognition e ICR – intelligent character recognition), quando for necessária a introdução de metadados a partir de imagens de documentos impressos ou etiquetas identificadoras de documentos.",
                            obrigatoriedade: "Facultativo"
                        },
                        {
                            referencia: "12.1.21",
                            titulo: "Referências cruzadas entre documentos",
                            texto: "É altamente desejável que um SIGAD permita a definição e utilização de referências cruzadas entre documentos arquivísticos digitais correlacionados, bem como a fácil navegação entre eles, inclusive com o uso de hyperlinks. O uso de hiperlinks deve ser limitado a documentos dentro do mesmo processo/dossiê. Hiperlinks com documentos externos ao ambiente, ou mesmo em outros processos/dossiês, podem ficar obsoletos ao longo do tempo, comprometendo a completitude do processo/dossiê.",
                            obrigatoriedade: "Altamente Desejável"
                        },
                        {
                            referencia: "12.1.22",
                            titulo: "Papéis de acesso diferenciados",
                            texto: "É altamente desejável que um SIGAD disponibilize pelo menos dois papéis de acesso diferenciados, um para usuário final e outro para administrador de sistema.",
                            obrigatoriedade: "Altamente Desejável"
                        },
                        {
                            referencia: "12.1.23",
                            titulo: "Funções intuitivas e poucas ações para tarefas padrão",
                            texto: "É altamente desejável que um SIGAD forneça a usuários finais e administradores funções intuitivas e fáceis de usar, que requeiram poucas ações para completar uma tarefa padrão. Sobretudo durante sua operação normal, um SIGAD deve ser capaz de: capturar e declarar um documento arquivístico com no máximo três cliques de mouse ou acionamentos de tecla; apresentar todos os elementos de metadados obrigatórios para a captura do documento com mínima demanda para o usuário; apresentar o conteúdo de um documento arquivístico, a partir de uma lista de pesquisa, com no máximo três cliques de mouse ou acionamentos de tecla; apresentar os metadados de um documento arquivístico com no máximo três cliques de mouse ou acionamentos de tecla.",
                            obrigatoriedade: "Altamente Desejável"
                        },
                        {
                            referencia: "12.1.24",
                            titulo: "Restrição de acesso a funcionalidades administrativas",
                            texto: "Um SIGAD tem que restringir o acesso às funcionalidades administrativas e impossibilitar sua visualização pelo usuário final. Exemplos: as operações não disponíveis aparecem com fonte atenuada nos menus e possuem efeito nulo quando acionadas. O acesso às operações indisponíveis é restringido pela configuração dos menus, que não apresentam essas operações ao usuário sem permissão para executá-las.",
                            obrigatoriedade: "Obrigatório"
                        },
                        {
                            referencia: "12.1.25",
                            titulo: "Condições de operação para configuração da interface",
                            texto: "É altamente desejável que um SIGAD leve em consideração as condições de operação, como ruído, luminosidade, necessidade de rapidez na conclusão da tarefa, demandas específicas para dispositivos móveis, ambiente desktop/web e necessidade de instalação automática, para configurar as formas de interação com o usuário. Exemplo: não devem ser utilizados menus audíveis em ambientes que apresentam alto volume de ruído próximo aos terminais de usuários.",
                            obrigatoriedade: "Altamente Desejável"
                        }
                    ]
                }
            ]
        },
        {
            id: "interoperabilidade",
            titulo: "13. Interoperabilidade",
            icone: "sync_alt",
            totalRequisitos: 3,
            subsecoes: [
                {
                    id: "13.1",
                    titulo: "Interoperabilidade",
                    requisitos: [
                        {
                            referencia: "13.1.1",
                            titulo: "Interoperabilidade com outros sistemas",
                            texto: "É altamente desejável que um SIGAD seja capaz de interoperar com outros sistemas informatizados, permitindo, pelo menos, consulta, recuperação, importação e exportação de documentos e seus metadados. As operações de interoperabilidade devem respeitar a legislação vigente e a política de segurança.",
                            obrigatoriedade: "Altamente Desejável"
                        },
                        {
                            referencia: "13.1.2",
                            titulo: "Padrões abertos de interoperabilidade",
                            texto: "É altamente desejável que um SIGAD seja capaz de interoperar com outros sistemas por meio de padrões abertos de interoperabilidade. Por exemplo, padrões abertos como os estabelecidos pela e-PING, XML e Dublin Core.",
                            obrigatoriedade: "Altamente Desejável"
                        },
                        {
                            referencia: "13.1.3",
                            titulo: "Aplicação de requisitos de segurança na interoperabilidade",
                            texto: "Um SIGAD tem que aplicar os requisitos de segurança descritos neste documento para executar operações de interoperabilidade. Isso é fundamental para que as operações, feitas em ambiente com interoperabilidade, não afetem a integridade dos documentos e impossibilitem acessos não autorizados.",
                            obrigatoriedade: "Obrigatório"
                        }
                    ]
                }
            ]
        },
        {
            id: "disponibilidade",
            titulo: "14. Disponibilidade",
            icone: "check_circle",
            totalRequisitos: 1,
            subsecoes: [
                {
                    id: "14.1",
                    titulo: "Disponibilidade",
                    requisitos: [
                        {
                            referencia: "14.1.1",
                            titulo: "Adequação ao grau de disponibilidade",
                            texto: "Um SIGAD tem que se adequar ao grau de disponibilidade estabelecido pela organização.",
                            obrigatoriedade: "Obrigatório"
                        }
                    ]
                }
            ]
        },
        {
            id: "desempenho",
            titulo: "15. Desempenho e escalabilidade",
            icone: "speed",
            totalRequisitos: 5,
            subsecoes: [
                {
                    id: "15.1",
                    titulo: "Desempenho e escalabilidade",
                    requisitos: [
                        {
                            referencia: "15.1.1",
                            titulo: "Estatísticas de tempos de atendimento",
                            texto: "É altamente desejável que um SIGAD mantenha estatísticas dos tempos de atendimento, discriminadas por tipo de operação.",
                            obrigatoriedade: "Altamente Desejável"
                        },
                        {
                            referencia: "15.1.2",
                            titulo: "Expansibilidade para usuários simultâneos",
                            texto: "É altamente desejável que um SIGAD seja expansível até comportar um número máximo, preestabelecido, de usuários simultâneos, provendo a continuidade efetiva dos serviços.",
                            obrigatoriedade: "Altamente Desejável"
                        },
                        {
                            referencia: "15.1.3",
                            titulo: "Rotinas de manutenção",
                            texto: "Um SIGAD tem que incluir rotina de manutenção de: dados de usuários e de grupos; perfis de acesso; plano de classificação; bases de dados; tabelas de temporalidade. Essas tarefas devem atender às mudanças planejadas da organização, sem causar grande sobrecarga de administração.",
                            obrigatoriedade: "Obrigatório"
                        },
                        {
                            referencia: "15.1.4",
                            titulo: "Escalabilidade para diferentes tamanhos",
                            texto: "É altamente desejável que um SIGAD seja escalável, a fim de permitir adaptação a organizações de diferentes tamanhos e complexidades.",
                            obrigatoriedade: "Altamente Desejável"
                        },
                        {
                            referencia: "15.1.5",
                            titulo: "Evidências de escalabilidade",
                            texto: "É altamente desejável que um SIGAD forneça evidências do grau de escalabilidade ao longo do tempo. Avaliações quantitativas devem incluir: • tamanho máximo do repositório que pode ser suportado com desempenho adequado; • o número máximo de usuários simultâneos que podem ser atendidos com desempenho adequado; • sobrecarga administrativa prevista para um período de cinco anos, permitindo o crescimento do número de usuários e da quantidade de registros; • quantidade de reconfigurações e indisponibilidades previstas para um período de cinco anos, permitindo o crescimento do número de usuários e da quantidade de registros; • quantidade de reconfigurações e indisponibilidades previstas para um período de cinco anos, permitindo mudanças substanciais na estrutura da organização, nos esquemas de classificação e na administração de usuários.",
                            obrigatoriedade: "Altamente Desejável"
                        }
                    ]
                }
            ]
        }
    ]
};
