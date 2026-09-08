// requisitos.js
const dadosRequisitos = {
    "secoes": [
        {
            "id": "organizacao",
            "titulo": "1. Organização dos documentos arquivísticos",
            "icone": "folder",
            "totalRequisitos": 43,
            "subsecoes": [
                {
                    "id": "1.1",
                    "titulo": "Configuração e administração do plano de classificação",
                    "requisitos": [
                        {
                            "referencia": "1.1.1",
                            "titulo": "Inclusão e compatibilidade com o plano de classificação",
                            "texto": "Um SIGAD tem que incluir e ser compatível com o plano de classificação do órgão ou entidade, com as seguintes informações: identificador da classe; nome da classe; código da classe; subordinação da classe; indicação de permissão de uso; indicação de classe ativa/inativa. O plano de classificação dos integrantes do SINAR deve estar de acordo com a legislação e ser aprovado pela instituição arquivística na esfera de competência específica.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "1.1.2",
                            "titulo": "Criação hierárquica de classes",
                            "texto": "Um SIGAD tem que garantir a criação de classes, subclasses, grupos e subgrupos nos níveis do plano de classificação de acordo com o método de codificação adotado.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "1.1.3",
                            "titulo": "Adição de novas classes",
                            "texto": "Um SIGAD tem que permitir a usuários autorizados acrescentar novas classes sempre que necessário.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "1.1.4",
                            "titulo": "Registro de data de abertura",
                            "texto": "Um SIGAD tem que registrar a data de abertura de uma nova classe no respectivo metadado.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "1.1.5",
                            "titulo": "Registro de alteração de classe",
                            "texto": "Um SIGAD tem que registrar a mudança de nome, identificador e código de uma classe já existente no respectivo metadado.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "1.1.6",
                            "titulo": "Deslocamento de classes",
                            "texto": "Um SIGAD tem que permitir o deslocamento de uma classe inteira, incluídas as subclasses, grupo, subgrupos e documentos nela classificados, para outro ponto do plano de classificação, bem como o desmembramento ou fusão de classes. Nesse caso, é necessário fazer o registro do deslocamento nos metadados do plano de classificação.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "1.1.7",
                            "titulo": "Inativação de classes",
                            "texto": "Um SIGAD tem que permitir que apenas usuários autorizados tornem inativa uma classe em que não sejam mais classificados documentos.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "1.1.8",
                            "titulo": "Exclusão de classes inativas",
                            "texto": "Um SIGAD tem que permitir que um usuário autorizado apague uma classe inativa.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "1.1.9",
                            "titulo": "Impedimento de eliminação de classes com documentos",
                            "texto": "Um SIGAD tem que impedir a eliminação de uma classe que tenha documentos nela classificados. Essa eliminação pode ocorrer a partir do momento em que todos os documentos ali classificados tenham sido recolhidos ou eliminados ou que esses documentos tenham sido reclassificados.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "1.1.10",
                            "titulo": "Associação de metadados às classes",
                            "texto": "Um SIGAD tem que permitir a associação de metadados às classes, conforme estabelecido no padrão de metadados, e deve restringir a inclusão e alteração desses mesmos metadados somente a usuários autorizados.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "1.1.11",
                            "titulo": "Mecanismos de atribuição de identificadores",
                            "texto": "Um SIGAD tem que disponibilizar pelo menos dois mecanismos de atribuição de identificadores a classes do plano de classificação, prevendo a possibilidade de se utilizarem ambos, separadamente ou em conjunto, na mesma aplicação: atribuição de um código numérico ou alfanumérico; atribuição de um termo que identifique cada classe.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "1.1.12",
                            "titulo": "Permissão de uso de classes",
                            "texto": "É altamente desejável que um SIGAD preveja um atributo associado às classes para registrar a permissão de uso daquela classe para classificar um documento. Em algumas classes, não é permitido incluir documentos. Nesse caso, os documentos devem ser classificados apenas nos níveis subordinados.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "1.1.13",
                            "titulo": "Identificação de classe por termo completo",
                            "texto": "Um SIGAD tem que utilizar o termo completo para identificar uma classe. Entende-se por termo completo toda a hierarquia referente àquela classe.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "1.1.14",
                            "titulo": "Unicidade dos termos completos",
                            "texto": "Um SIGAD tem que assegurar que os termos completos, que identificam cada classe, sejam únicos no plano de classificação.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "1.1.15",
                            "titulo": "Pesquisa e navegação gráfica",
                            "texto": "Um SIGAD pode prever pesquisa e navegação na estrutura do plano de classificação por meio de uma interface gráfica.",
                            "obrigatoriedade": "Facultativo"
                        },
                        {
                            "referencia": "1.1.16",
                            "titulo": "Importação e exportação do plano de classificação",
                            "texto": "É altamente desejável que um SIGAD seja capaz de importar e exportar, total ou parcialmente, um plano de classificação.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "1.1.17",
                            "titulo": "Relatórios do plano de classificação",
                            "texto": "Um SIGAD tem que prover funcionalidades para elaboração de relatórios de apoio à gestão do plano de classificação, incluindo a capacidade de: gerar relatório completo do plano de classificação; gerar relatório parcial do plano de classificação a partir de um ponto determinado na hierarquia; gerar relatório dos documentos ou dossiês/processos classificados em uma ou mais classes do plano de classificação; gerar relatório de documentos classificados por unidade administrativa.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "1.1.18",
                            "titulo": "Consulta e relatórios do plano de classificação",
                            "texto": "É altamente desejável que um SIGAD possibilite a consulta ao plano de classificação a partir de qualquer atributo ou combinação de atributos, e emita relatório com os resultados obtidos.",
                            "obrigatoriedade": "Altamente Desejável"
                        }
                    ]
                },
                {
                    "id": "1.2",
                    "titulo": "Configuração da tabela de temporalidade e destinação",
                    "requisitos": [
                        {
                            "referencia": "1.2.1",
                            "titulo": "Definição e manutenção da tabela de temporalidade",
                            "texto": "Um SIGAD tem que prover funcionalidades para definição e manutenção de tabela de temporalidade e destinação de documentos, associada ao plano de classificação do órgão ou entidade.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "1.2.2",
                            "titulo": "Informações da tabela de temporalidade",
                            "texto": "Um SIGAD tem que manter tabela de temporalidade e destinação de documentos com as seguintes informações: identificador da classe; prazo de guarda na idade corrente; evento que determina o início de contagem do prazo de retenção na idade corrente; prazo de guarda na idade intermediária; evento que determina o início de contagem do prazo de retenção na idade intermediária; destinação final; sigilo associado à classe; observações. A tabela de temporalidade e destinação de documentos dos integrantes do SINAR deve estar de acordo com a legislação e ser aprovada pela instituição arquivística na específica esfera de competência.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "1.2.3",
                            "titulo": "Situações de destinação",
                            "texto": "Um SIGAD tem que prever, pelo menos, as seguintes situações para destinação: apresentação dos documentos para reavaliação em data futura; eliminação; exportação para transferência; exportação para recolhimento (guarda permanente).",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "1.2.4",
                            "titulo": "Iniciação automática da contagem dos prazos",
                            "texto": "Um SIGAD tem que prever a iniciação automática da contagem dos prazos de guarda referenciados na tabela de temporalidade e destinação de documentos, pelo menos, a partir dos seguintes eventos: abertura de dossiê/processo; arquivamento de dossiê/processo; desarquivamento de dossiê/processo; inclusão de documento sigiloso em um dossiê/processo, se aplicável. Acontecimentos específicos, descritos na tabela de temporalidade e destinação como, por exemplo, 'cinco anos a contar da data de aprovação das contas', quando não puderem ser detectados automaticamente pelo sistema, deverão ser informados ao SIGAD por usuário autorizado.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "1.2.5",
                            "titulo": "Definição de prazos de guarda",
                            "texto": "Um SIGAD tem que prever que a definição dos prazos de guarda seja expressa por: um número inteiro de meses ou um número inteiro de anos.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "1.2.6",
                            "titulo": "Restrição de manutenção da tabela",
                            "texto": "Um SIGAD tem que limitar a definição e a manutenção (alteração, inclusão e exclusão) da tabela de temporalidade e destinação de documentos a usuários autorizados.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "1.2.7",
                            "titulo": "Alteração de prazos e destinação",
                            "texto": "Um SIGAD tem que permitir que um usuário autorizado altere o prazo ou destinação prevista em um item da tabela de temporalidade e destinação de documentos e garantir que a alteração tenha efeito em todos os documentos ou dossiês/processos associados àquele item. As alterações na tabela de temporalidade e destinação só poderão ser feitas como resultado de um processo de reavaliação realizado pela comissão de avaliação do órgão ou entidade em virtude de mudança do contexto administrativo, jurídico ou cultural. Os integrantes do SINAR deverão ainda ter suas tabelas aprovadas pela instituição arquivística na específica esfera de competência.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "1.2.8",
                            "titulo": "Histórico da tabela de temporalidade",
                            "texto": "É altamente desejável que um SIGAD seja capaz de manter o histórico das alterações realizadas na tabela de temporalidade e destinação de documentos.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "1.2.9",
                            "titulo": "Importação e exportação da tabela",
                            "texto": "É altamente desejável que um SIGAD seja capaz de importar e exportar total ou parcialmente uma tabela de temporalidade e destinação de documento.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "1.2.10",
                            "titulo": "Relatórios da tabela de temporalidade",
                            "texto": "Um SIGAD tem que prover funcionalidades para elaboração de relatórios que apoiem a gestão da tabela de temporalidade e destinação, incluindo a capacidade de: gerar relatório completo da tabela de temporalidade e destinação de documentos; gerar relatório parcial da tabela de temporalidade e destinação de documentos a partir de um ponto determinado na hierarquia do plano de classificação; gerar relatório dos documentos ou dossiês/processos aos quais foi atribuído um determinado prazo de guarda.",
                            "obrigatoriedade": "Obrigatório"
                        }
                    ]
                },
                {
                    "id": "1.3",
                    "titulo": "Classificação e metadados das unidades de arquivamento",
                    "requisitos": [
                        {
                            "referencia": "1.3.1",
                            "titulo": "Classificação em classes autorizadas",
                            "texto": "Um SIGAD tem que permitir a classificação das unidades de arquivamento somente nas classes autorizadas.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "1.3.2",
                            "titulo": "Número ilimitado de unidades por classe",
                            "texto": "Um SIGAD tem que permitir a classificação de um número ilimitado de unidades de arquivamento dentro de uma classe.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "1.3.3",
                            "titulo": "Identificação da unidade por termo completo",
                            "texto": "Um SIGAD tem que utilizar o termo completo da classe para identificar uma unidade de arquivamento.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "1.3.4",
                            "titulo": "Associação de metadados às unidades",
                            "texto": "Um SIGAD tem que permitir a associação de metadados às unidades de arquivamento e deve restringir a inclusão e alteração desses metadados a usuários autorizados. A alteração de metadado só deve ser realizada para correção de erro.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "1.3.5",
                            "titulo": "Metadados das unidades conforme padrão",
                            "texto": "Um SIGAD tem que associar os metadados das unidades de arquivamento conforme estabelecido no padrão de metadados.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "1.3.6",
                            "titulo": "Herança de metadados da classe",
                            "texto": "Um SIGAD tem que permitir que uma nova unidade de arquivamento herde, da classe em que foi classificada, alguns metadados predefinidos. Exemplos desta herança são prazos de guarda previstos na tabela de temporalidade e destinação e restrição de acesso.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "1.3.7",
                            "titulo": "Atualização automática de metadados herdados",
                            "texto": "Um SIGAD tem que relacionar os metadados herdados de forma que uma alteração no metadado de uma classe seja automaticamente incorporada à unidade de arquivamento que herdou esse metadado.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "1.3.8",
                            "titulo": "Alteração conjunta de metadados",
                            "texto": "Um SIGAD pode permitir a alteração conjunta de um determinado metadado em um grupo de unidades de arquivamento previamente selecionado.",
                            "obrigatoriedade": "Facultativo"
                        },
                        {
                            "referencia": "1.3.9",
                            "titulo": "Reclassificação de unidades",
                            "texto": "Um SIGAD tem que permitir que uma unidade de arquivamento e seus respectivos volumes e/ou documentos sejam reclassificados por um usuário autorizado e que todos os documentos já inseridos permaneçam nas unidades de arquivamento e nos volumes que estão sendo transferidos, mantendo a relação entre documentos, volumes e unidades de arquivamento.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "1.3.10",
                            "titulo": "Histórico de reclassificação",
                            "texto": "Quando uma unidade de arquivamento ou documento é reclassificado, é altamente desejável que um SIGAD mantenha o registro de suas posições anteriores à reclassificação, de forma a manter um histórico.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "1.3.11",
                            "titulo": "Registro das razões de reclassificação",
                            "texto": "Quando uma unidade de arquivamento ou documento é reclassificado, é altamente desejável que um SIGAD permita que o administrador introduza as razões para a reclassificação.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "1.3.12",
                            "titulo": "Referências cruzadas",
                            "texto": "Um SIGAD pode permitir que os usuários criem referências cruzadas para unidades de arquivamento afins.",
                            "obrigatoriedade": "Facultativo"
                        },
                        {
                            "referencia": "1.3.13",
                            "titulo": "Associação automática de prazo e destinação",
                            "texto": "Um SIGAD tem que associar, automaticamente, ao dossiê/processo o prazo e a destinação previstos na classe em que o documento foi inserido.",
                            "obrigatoriedade": "Obrigatório"
                        }
                    ]
                }
            ]
        },
        {
            "id": "captura",
            "titulo": "2. Captura",
            "icone": "document_scanner",
            "totalRequisitos": 35,
            "subsecoes": [
                {
                    "id": "2.1",
                    "titulo": "Procedimentos gerais",
                    "requisitos": [
                        {
                            "referencia": "2.1.1",
                            "titulo": "Funções da captura",
                            "texto": "A captura tem que garantir a execução das seguintes funções: registrar e gerenciar todos os documentos não digitais; registrar e gerenciar todos os documentos digitais ou híbridos, independentemente do contexto tecnológico; classificar todos os documentos de acordo com o plano ou código de classificação; controlar e validar a introdução de metadados.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "2.1.2",
                            "titulo": "Formas de captura de documentos digitais",
                            "texto": "Um SIGAD tem que ser capaz de capturar documentos digitais das formas a seguir: captura de documentos produzidos dentro do SIGAD; captura de documento digital produzido fora do SIGAD; captura de documento produzido em workflow ou em outros sistemas integrados ao SIGAD; captura de documentos em lote.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "2.1.3",
                            "titulo": "Captura de componentes digitais",
                            "texto": "Um SIGAD tem que ser capaz de capturar e manter todos os componentes digitais do documento. Os componentes digitais armazenam informações de conteúdo, da forma documental e as relações entre elas.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "2.1.4",
                            "titulo": "Registro de metadados",
                            "texto": "Um SIGAD tem que permitir o registro dos metadados em conformidade com o indicado na seção a eles dedicada nesse modelo de requisitos e garantir que se mantenham associados ao documento, componente digital ou classe.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "2.1.5",
                            "titulo": "Inserção de metadados obrigatórios",
                            "texto": "Um SIGAD tem que prever a inserção dos metadados obrigatórios, previstos em legislação específica na devida esfera e âmbito de competência, no momento da captura de processos.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "2.1.6",
                            "titulo": "Número identificador",
                            "texto": "Um SIGAD tem que ser capaz de atribuir um número identificador a cada dossiê/processo e documento capturado, que serve para identificá-lo desde o momento da captura até sua destinação final no SIGAD.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "2.1.7",
                            "titulo": "Formato do número identificador",
                            "texto": "O formato do número identificador atribuído pelo SIGAD deve ser definido no momento da configuração do SIGAD. O identificador pode ser numérico ou alfanumérico, ou pode incluir os identificadores encadeados das entidades superiores no ramo apropriado da hierarquia.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "2.1.8",
                            "titulo": "Geração do número identificador",
                            "texto": "Num SIGAD, o número identificador atribuído pelo sistema tem que: • ser gerado automaticamente, sendo vedada sua introdução manual e alteração posterior; ou • ser atribuído pelo usuário e validado pelo SIGAD antes de ser aceito. Uma opção seria gerar o número identificador automaticamente, mas, nesse caso, ocultando-o do usuário e permitindo a este introduzir uma sequência não necessariamente única como um 'identificador'. O usuário empregaria essa sequência como um identificador, mas o SIGAD a consideraria um metadado pesquisável, definido pelo usuário.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "2.1.9",
                            "titulo": "Numeração única de processos",
                            "texto": "Um SIGAD tem que prever a adoção da numeração única de processos e/ou documentos oficiais de acordo com a legislação específica a fim de garantir a integridade do número atribuído ao processo e/ou documento na unidade protocolizadora de origem.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "2.1.10",
                            "titulo": "Tesauro ou vocabulário controlado",
                            "texto": "É altamente desejável que um SIGAD utilize tesauro ou vocabulário controlado para apoiar a atribuição do metadado assunto/descritor. No caso da administração pública federal, deve ser utilizada a Lista de Assuntos de Governo, conforme orientação dos Padrões de Interoperabilidade de Governo Eletrônico (e-Ping).",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "2.1.11",
                            "titulo": "Inserção de metadados por usuários autorizados",
                            "texto": "Um SIGAD tem que garantir que os metadados associados a um documento sejam inseridos somente por usuários autorizados.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "2.1.12",
                            "titulo": "Alteração de metadados com auditoria",
                            "texto": "Um SIGAD tem que garantir que os metadados associados a um documento sejam alterados somente por usuários autorizados e devidamente registrados em trilhas de auditoria.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "2.1.13",
                            "titulo": "Inserção automática de metadados",
                            "texto": "É altamente desejável que um SIGAD seja capaz de inserir, automaticamente, os metadados previstos no SIGAD para o maior número possível de documentos, pois isso diminui as tarefas do usuário do SIGAD e garante maior rigor na inserção dos metadados. Por exemplo, no caso de documentos com forma padronizada (formulários, modelos de requerimento, de memorando etc.), alguns metadados podem ser inseridos automaticamente, tais como número identificador, título, classificação, prazo de guarda.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "2.1.14",
                            "titulo": "Visualização do registro de entrada",
                            "texto": "Um SIGAD tem que garantir a visualização do registro de entrada do documento no sistema com todos os metadados inseridos automaticamente e os demais a serem atribuídos pelo usuário. Por exemplo, o SIGAD pode atribuir, automaticamente, o número identificador, a data de captura, o título, o originador, e requerer que o usuário preencha os demais metadados.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "2.1.15",
                            "titulo": "Inserção de metadados após a captura",
                            "texto": "Um SIGAD tem que garantir a inserção de outros metadados após a captura. Por exemplo, data e hora de alteração e mudança de suporte.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "2.1.16",
                            "titulo": "Registro de versões de documentos",
                            "texto": "Sempre que um documento tiver mais de uma versão, o SIGAD tem que permitir que os usuários selecionem pelo menos uma das seguintes ações: • registrar todas as versões do documento como um só documento arquivístico; • registrar uma única versão do documento como um documento arquivístico; • registrar cada uma das versões do documento, separadamente, como um documento arquivístico. Um SIGAD não deve considerar minutas como versão. Cada versão deve ser dotada de completeza.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "2.1.17",
                            "titulo": "Assistência à classificação",
                            "texto": "É altamente desejável que um SIGAD preste assistência aos usuários no que diz respeito à classificação dos documentos, por meio de algumas ou de todas as ações a seguir: • tornar acessível ao usuário somente o subconjunto do plano de classificação que diz respeito à sua atividade; • indicar as últimas classificações feitas pelo usuário; • indicar dossiês que contenham documentos de arquivo relacionados; • indicar classificações possíveis a partir dos metadados já inseridos, como, por exemplo, o título; • indicar classificações possíveis a partir do conteúdo do documento.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "2.1.18",
                            "titulo": "Transmissão entre usuários",
                            "texto": "É altamente desejável que um SIGAD permita que um usuário transmita documentos a outro usuário para completar o processo de captura, caso os procedimentos dessa captura sejam distribuídos entre vários usuários.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "2.1.19",
                            "titulo": "Documentos com múltiplos componentes digitais",
                            "texto": "No caso de documentos constituídos por mais de um componente digital, o SIGAD tem que: • tratar o documento como uma unidade indivisível, assegurando a relação entre os componentes digitais; • preservar a integridade do documento, mantendo a relação entre os componentes digitais; • garantir a integridade do documento quando de sua recuperação, visualização e gestão posteriores; • gerenciar a destinação de todos os componentes digitais que compõem o documento como uma unidade indivisível.",
                            "obrigatoriedade": "Obrigatório"
                        }
                    ]
                },
                {
                    "id": "2.2",
                    "titulo": "Captura em lote",
                    "requisitos": [
                        {
                            "referencia": "2.2.1",
                            "titulo": "Captura em lote de documentos",
                            "texto": "Um SIGAD tem que proporcionar a captura em lote de documentos gerados por outros sistemas. Esse procedimento tem que: permitir a importação de transações predefinidas de arquivos em lote; registrar, automaticamente, cada um dos documentos importados contidos no lote; permitir e controlar a edição do registro dos documentos importados; validar a integridade dos metadados. Exemplos de lotes de documento: mensagens de correio eletrônico, correspondência digitalizada por meio de escâner, documentos provenientes de um departamento, grupo ou indivíduo, transações de aplicações de um computador ou, ainda, documentos oriundos de um sistema de gestão de documentos ou sistema de negócio.",
                            "obrigatoriedade": "Obrigatório"
                        }
                    ]
                },
                {
                    "id": "2.3",
                    "titulo": "Captura de mensagens de correio eletrônico",
                    "requisitos": [
                        {
                            "referencia": "2.3.1",
                            "titulo": "Captura de mensagens de correio eletrônico",
                            "texto": "Um SIGAD tem que capturar mensagens de correio eletrônico após selecionadas quais serão objeto de registro.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "2.3.2",
                            "titulo": "Tratamento de mensagens na caixa de entrada",
                            "texto": "Um SIGAD pode permitir que os usuários tratem e capturem as mensagens de chegada a partir do seu próprio sistema de correio eletrônico. O usuário deve poder tratar cada mensagem na caixa de entrada, como se segue: visualizar cada mensagem de correio e uma indicação dos respectivos anexos, caso existam; visualizar os conteúdos dos anexos utilizando um dispositivo para visualização de documentos em diferentes formatos; registrar no SIGAD a mensagem de correio e respectivos anexos como um novo documento de arquivo; relacionar a mensagem e respectivos anexos a um documento existente no SIGAD; capturar automaticamente metadados de data e hora da transmissão da mensagem e todos os destinatários.",
                            "obrigatoriedade": "Facultativo"
                        },
                        {
                            "referencia": "2.3.3",
                            "titulo": "Captura do nome do originador",
                            "texto": "É altamente desejável que um SIGAD assegure a captura do nome, e não somente do endereço, do originador do correio eletrônico. Por exemplo, 'Luís Santos', além de 'Isa25@ab.br'.",
                            "obrigatoriedade": "Altamente Desejável"
                        }
                    ]
                },
                {
                    "id": "2.4",
                    "titulo": "Captura de documentos não digitais ou híbridos",
                    "requisitos": [
                        {
                            "referencia": "2.4.1",
                            "titulo": "Captura de documentos não digitais",
                            "texto": "O SIGAD tem que ser capaz de capturar também os documentos não digitais e/ou híbridos.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "2.4.2",
                            "titulo": "Localização de documentos não digitais",
                            "texto": "O SIGAD tem que acrescentar aos metadados dos documentos não digitais informações sobre sua localização. Essa informação só será acessada por usuários autorizados.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "2.4.3",
                            "titulo": "Tratamento da parte digital de documentos híbridos",
                            "texto": "O SIGAD tem que garantir que a parte digital de um documento ou processo/dossiê híbrido seja tratada de forma análoga aos documentos ou processos/dossiês inteiramente digitais.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "2.4.4",
                            "titulo": "Documentos híbridos como unidade indivisível",
                            "texto": "O SIGAD tem que tratar um documento ou processo/dossiê híbrido como uma unidade indivisível, assegurando a relação entre a parte digital e a não digital.",
                            "obrigatoriedade": "Obrigatório"
                        }
                    ]
                },
                {
                    "id": "2.5",
                    "titulo": "Formato de arquivo e estrutura dos documentos",
                    "requisitos": [
                        {
                            "referencia": "2.5.1",
                            "titulo": "Captura de diferentes formatos de arquivo",
                            "texto": "Um SIGAD tem que possuir a capacidade de capturar documentos com diferentes formatos de arquivo e estruturas.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "2.5.2",
                            "titulo": "Estruturas de documentos",
                            "texto": "Um SIGAD tem que capturar documentos que se apresentam com as seguintes estruturas: simples: texto, imagens, mensagens de correio eletrônico, slides digitais, som. composta: mensagens de correio eletrônico com anexos, publicações eletrônicas.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "2.5.3",
                            "titulo": "Tipos de documentos capturáveis",
                            "texto": "É altamente desejável que um SIGAD possa capturar, entre outros, os documentos a seguir: agendas eletrônicas; informações de outros aplicativos – contabilidade, folha de pagamento, desenho assistido por computador (CAD); documentos em papel digitalizados por meio de escâner; documentos sonoros; videoclipes; diagramas e mapas digitais; dados estruturados (EDI); bases de dados; documentos multimídia; páginas web. A lista de documentos que um SIGAD tem que suportar varia de órgão para órgão. Quando não for viável o SIGAD capturar o objeto digital, ele tem que ser capaz de realizar a captura por meio do registro do documento, para possibilitar seu gerenciamento.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "2.5.4",
                            "titulo": "Inclusão de novos formatos",
                            "texto": "Um SIGAD tem que ser capaz de incluir novos formatos de arquivos à medida que forem sendo adotados pelo órgão ou entidade.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "2.5.5",
                            "titulo": "Dependência de software",
                            "texto": "Um SIGAD tem que ser capaz de registrar em metadados as informações relativas à dependência de software, quando capturar documentos em formatos diferentes dos previstos pelo programa de gestão de documentos do órgão ou entidade.",
                            "obrigatoriedade": "Obrigatório"
                        }
                    ]
                },
                {
                    "id": "2.6",
                    "titulo": "Estrutura dos procedimentos de gestão",
                    "requisitos": [
                        {
                            "referencia": "2.6.1",
                            "titulo": "Domínios para controle de produção",
                            "texto": "Em caso do SIGAD apoiar a produção de documentos, ele tem que ser capaz de reconhecer três domínios para o controle dos procedimentos de gestão: espaço individual, espaço do grupo e espaço geral.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "2.6.2",
                            "titulo": "Operacionalização das regras nos espaços",
                            "texto": "Em caso do SIGAD apoiar a produção de documentos, ele tem que ser capaz de operacionalizar as regras estabelecidas pelo sistema de gestão arquivística de documentos nos três espaços.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "2.6.3",
                            "titulo": "Impedimento de alteração de conteúdo",
                            "texto": "Um SIGAD tem que impedir que o conteúdo de um documento seja alterado por usuários e administradores, exceto se a alteração fizer parte do processo documental.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "2.6.4",
                            "titulo": "Aviso de documento incompleto",
                            "texto": "É altamente desejável que um SIGAD possa emitir um aviso caso se tente capturar um documento incompleto ou inconsistente a ponto de comprometer sua futura autenticidade. Por exemplo, uma correspondência sem assinatura digital válida ou uma fatura de fornecedor não identificado.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "2.6.5",
                            "titulo": "Aviso de autenticidade futura",
                            "texto": "É altamente desejável que um SIGAD possa emitir um aviso caso se tente capturar um documento cuja autenticidade não possa ser verificada no futuro.",
                            "obrigatoriedade": "Altamente Desejável"
                        }
                    ]
                }
            ]
        },
        {
            "id": "avaliacao",
            "titulo": "3. Avaliação: temporalidade e destinação",
            "icone": "assessment",
            "totalRequisitos": 34,
            "subsecoes": [
                {
                    "id": "3.1",
                    "titulo": "Aplicação da tabela de temporalidade e destinação",
                    "requisitos": [
                        {
                            "referencia": "3.1.1",
                            "titulo": "Recursos integrados para destinação",
                            "texto": "Um SIGAD tem que fornecer recursos integrados à tabela de temporalidade e destinação de documentos para implementar as ações de destinação.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "3.1.2",
                            "titulo": "Acompanhamento automático de prazos",
                            "texto": "Para cada dossiê/processo, um SIGAD tem que acompanhar automaticamente os prazos de guarda determinados para a classe à qual pertence.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "3.1.3",
                            "titulo": "Informação sobre prazos vencidos ou a vencer",
                            "texto": "Um SIGAD tem que prover funcionalidades para informar ao usuário autorizado sobre os documentos ou dossiês/processos que já cumpriram ou estão para cumprir o prazo de guarda previsto.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "3.1.4",
                            "titulo": "Gerenciamento do processo de destinação",
                            "texto": "Um SIGAD tem de prover funcionalidades para gerenciar o processo de destinação, que tem de ser iniciado por usuário autorizado e cumprir os seguintes passos: • identificar automaticamente os documentos ou dossiês/processos que atingiram os prazos de guarda previstos; • informar o usuário autorizado sobre todos os documentos ou dossiês/processos que foram identificados no passo anterior; • possibilitar a alteração do prazo ou destinação previstos para aqueles documentos ou dossiês/processos, caso necessário; • proceder à ação de destinação quando confirmada pelo usuário autorizado.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "3.1.5",
                            "titulo": "Confirmação antes da destinação",
                            "texto": "Um SIGAD tem sempre que pedir confirmação antes de realizar as ações de destinação.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "3.1.6",
                            "titulo": "Dispositivo de aviso para destinação",
                            "texto": "É altamente desejável que um SIGAD preveja, em determinados casos, dispositivo de aviso antes do início de uma ação de destinação. Por exemplo, emitir aviso ao administrador, caso um documento arquivístico possua restrição de acesso.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "3.1.7",
                            "titulo": "Restrição de funções de destinação",
                            "texto": "Um SIGAD tem que restringir as funções de destinação a usuários autorizados.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "3.1.8",
                            "titulo": "Adoção automática da nova temporalidade",
                            "texto": "Quando um administrador transfere documentos ou dossiês/processos de uma classe para outra, em virtude de uma reclassificação, o SIGAD tem que adotar automaticamente a temporalidade e a destinação vigentes na nova classe.",
                            "obrigatoriedade": "Obrigatório"
                        }
                    ]
                },
                {
                    "id": "3.2",
                    "titulo": "Exportação de documentos",
                    "requisitos": [
                        {
                            "referencia": "3.2.1",
                            "titulo": "Exportação para outro sistema",
                            "texto": "Um SIGAD tem que ser capaz de exportar documentos e dossiês/processos digitais e seus metadados para outro sistema dentro ou fora do órgão ou entidade.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "3.2.2",
                            "titulo": "Exportação de classe completa",
                            "texto": "Quando um SIGAD exportar os documentos e dossiês/processos de uma classe para executar uma ação de transferência ou recolhimento, tem que ser capaz de exportar todos os documentos e dossiês/processos da classe incluídos na ação de destinação, com seus respectivos volumes, documentos e metadados associados.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "3.2.3",
                            "titulo": "Integridade na exportação",
                            "texto": "Um SIGAD tem que ser capaz de exportar um documento e dossiê/processo ou grupo de documentos e dossiês/processos numa sequência de operações, de modo que: • o conteúdo, o contexto e a estrutura dos documentos não se degradem; • todos os componentes de um documento digital sejam exportados como uma unidade. Por exemplo, uma mensagem de correio eletrônico e seus respectivos anexos; • todos os metadados do documento sejam relacionados a ele de forma que as ligações possam ser mantidas no novo sistema; • todas as ligações entre documentos, volumes e dossiês/processos sejam mantidas.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "3.2.4",
                            "titulo": "Formatos de exportação",
                            "texto": "É altamente desejável que um SIGAD seja capaz de exportar dossiês/processos: • em seu formato nativo (ou no formato para o qual foi migrado); • de acordo com os formatos definidos em padrões de interoperabilidade; • de acordo com o formato definido pela instituição arquivística que irá receber a documentação, no caso de transferência ou recolhimento.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "3.2.5",
                            "titulo": "Exportação de metadados em padrões",
                            "texto": "É altamente desejável que um SIGAD seja capaz de exportar metadados nos formatos previstos em padrões de interoperabilidade de governo.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "3.2.6",
                            "titulo": "Exportação de todos os tipos de documentos",
                            "texto": "Um SIGAD tem que ser capaz de exportar todos os tipos de documentos que está apto a capturar.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "3.2.7",
                            "titulo": "Relatório de falhas na exportação",
                            "texto": "Um SIGAD tem que produzir um relatório detalhado sobre qualquer falha que ocorra durante uma exportação. O relatório tem que identificar os documentos e dossiês/processos que originaram erros de processamento ou cuja exportação não tenha sido bem sucedida.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "3.2.8",
                            "titulo": "Conservação após exportação",
                            "texto": "Um SIGAD tem que conservar todos os documentos e dossiês/processos digitais que foram exportados, pelo menos até que tenham sido importados no sistema destinatário com êxito.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "3.2.9",
                            "titulo": "Manutenção de metadados de exportação",
                            "texto": "Um SIGAD tem que manter metadados relativos a documentos e dossiês/processos que foram exportados. O administrador deve indicar o subconjunto de metadados que deverá ser mantido.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "3.2.10",
                            "titulo": "Listagem para exportação",
                            "texto": "Um SIGAD tem que gerar listagem para descrever documentos e dossiês/processos digitais que estão sendo exportados. Este requisito se aplica principalmente nos casos em que é feita exportação para transferência ou recolhimento a uma instituição arquivística pública. Nesse caso, a listagem deverá ser produzida na forma documental estabelecida pela instituição arquivística recebedora.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "3.2.11",
                            "titulo": "Metadados para arquivo permanente",
                            "texto": "É altamente desejável que um SIGAD possibilite a inclusão de metadados necessários à gestão do arquivo permanente nos documentos e dossiês/processos que serão exportados para recolhimento.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "3.2.12",
                            "titulo": "Ordenação de documentos exportados",
                            "texto": "Um SIGAD pode possibilitar a ordenação dos documentos e dossiês/processos digitais a serem exportados de acordo com elementos de metadados selecionados pelo usuário.",
                            "obrigatoriedade": "Facultativo"
                        },
                        {
                            "referencia": "3.2.13",
                            "titulo": "Confirmação para documentos híbridos",
                            "texto": "Quando se exportarem documentos e dossiês/processos híbridos, é altamente desejável que um SIGAD exija do usuário autorizado a confirmação de que a parte na forma não digital dos mesmos documentos e dossiês/processos tenha passado pelo procedimento de destinação adequado antes de confirmar a exportação da parte na forma digital.",
                            "obrigatoriedade": "Altamente Desejável"
                        }
                    ]
                },
                {
                    "id": "3.3",
                    "titulo": "Eliminação",
                    "requisitos": [
                        {
                            "referencia": "3.3.1",
                            "titulo": "Restrição da função de eliminação",
                            "texto": "Um SIGAD tem que restringir a função de eliminação de documentos ou dossiês/processos somente a usuários autorizados.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "3.3.2",
                            "titulo": "Confirmação de eliminação",
                            "texto": "Um SIGAD tem que pedir confirmação da eliminação a um usuário autorizado antes que qualquer ação seja tomada com relação ao documento e dossiê/processo e cancelar o processo de eliminação se a confirmação não for dada.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "3.3.3",
                            "titulo": "Eliminação conforme tabela",
                            "texto": "Um SIGAD tem que impedir sempre a eliminação de uma unidade de arquivamento digital ou de qualquer parte de seu conteúdo, a não ser quando estiver de acordo com a tabela de temporalidade e destinação de documentos. A eliminação será devidamente registrada em trilha de auditoria.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "3.3.4",
                            "titulo": "Aviso de relacionamento entre documentos",
                            "texto": "Um SIGAD tem que avisar ao usuário autorizado quando um documento ou dossiê/processo que estiver sendo eliminado se encontrar relacionado a outro; os sistemas também têm de suspender o processo até que seja tomada uma das medidas abaixo: confirmação pelo usuário autorizado para prosseguir ou cancelar o processo; produção de um relatório especificando os documentos ou dossiês/processos envolvidos e todas as ligações com outros documentos ou dossiês/processos.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "3.3.5",
                            "titulo": "Eliminação irreversível",
                            "texto": "É altamente desejável que um SIGAD permita a eliminação de documentos ou dossiês/processos de forma irreversível a fim de que não possam ser restaurados por meio da utilização normal do SIGAD, nem por meio de rotinas auxiliares do sistema operacional, nem por aplicações especiais de recuperação de dados.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "3.3.6",
                            "titulo": "Verificação de referências múltiplas",
                            "texto": "Quando um documento tem várias referências armazenadas no sistema, um SIGAD tem que garantir que todas essas referências sejam verificadas antes de eliminar o arquivo digital. Esse requisito deve ser considerado quando um SIGAD relacionar um documento digital a mais de um dossiê ou processo, sem a duplicação física do arquivo digital. Por exemplo, uma lista de alunos aprovados em um concurso de doutorado de determinada universidade estará associada ao dossiê 'Concurso doutorado 2005' e aos dossiês de cada aluno aprovado. Quando um documento digital estiver associado a mais de um dossiê, o SIGAD deve criar um registro para cada referência desse documento. Cada registro estará vinculado ao mesmo arquivo digital.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "3.3.7",
                            "titulo": "Relatório de falhas na eliminação",
                            "texto": "Um SIGAD tem que produzir um relatório detalhando qualquer falha que ocorra durante uma eliminação. O relatório tem que identificar os documentos cuja eliminação não tenha sido bem-sucedida.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "3.3.8",
                            "titulo": "Confirmação para documentos híbridos",
                            "texto": "Quando eliminar documentos ou dossiês/processos híbridos, é altamente desejável que um SIGAD exija do usuário autorizado a confirmação de que a parte na forma não digital desses documentos ou dossiês/processos seja eliminada também antes de confirmar a eliminação da parte digital.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "3.3.9",
                            "titulo": "Listagem de eliminação",
                            "texto": "Um SIGAD tem que gerar relatório com os documentos e dossiês/processos que serão eliminados. Essa listagem deve seguir o formato da Listagem de eliminação conforme o estabelecido na norma vigente.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "3.3.10",
                            "titulo": "Manutenção de metadados de eliminação",
                            "texto": "Um SIGAD tem que manter metadados relativos a documentos e dossiês/processos eliminados. O administrador deve indicar o subconjunto de metadados que deverá ser mantido.",
                            "obrigatoriedade": "Obrigatório"
                        }
                    ]
                },
                {
                    "id": "3.4",
                    "titulo": "Documentos não digitais e híbridos",
                    "requisitos": [
                        {
                            "referencia": "3.4.1",
                            "titulo": "Mesma tabela para todos os documentos",
                            "texto": "Um SIGAD tem que aplicar a mesma tabela de temporalidade e destinação de documentos para os documentos não digitais, digitais ou híbridos.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "3.4.2",
                            "titulo": "Acompanhamento de documentos não digitais",
                            "texto": "Um SIGAD tem que acompanhar os prazos de guarda dos documentos não digitais e deve dar início aos procedimentos de eliminação ou transferência desses documentos, tomando em consideração suas especificidades.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "3.4.3",
                            "titulo": "Alerta sobre parte não digital",
                            "texto": "Um SIGAD tem que alertar o administrador sobre a existência e a localização de uma parte não digital associada a um documento híbrido que esteja destinado a ser exportado, transferido ou eliminado.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "3.4.4",
                            "titulo": "Exportação de metadados de documentos não digitais",
                            "texto": "É altamente desejável que um SIGAD exporte metadados de documentos e dossiês/processos não digitais.",
                            "obrigatoriedade": "Altamente Desejável"
                        }
                    ]
                }
            ]
        },
        {
            "id": "pesquisa",
            "titulo": "4. Pesquisa, localização e apresentação dos documentos",
            "icone": "search",
            "totalRequisitos": 26,
            "subsecoes": [
                {
                    "id": "4.1",
                    "titulo": "Aspectos gerais",
                    "requisitos": [
                        {
                            "referencia": "4.1.1",
                            "titulo": "Facilidades para pesquisa, localização e apresentação",
                            "texto": "Um SIGAD tem que fornecer facilidades para pesquisa, localização e apresentação dos documentos.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "4.1.2",
                            "titulo": "Interface via ambiente web",
                            "texto": "É altamente desejável que um SIGAD forneça outras formas de interface de pesquisa, localização e apresentação opcionais via ambiente web.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "4.1.3",
                            "titulo": "Navegação gráfica no plano de classificação",
                            "texto": "É altamente desejável que um SIGAD preveja a navegação gráfica no plano de classificação, a navegação direta de uma classe para os documentos arquivísticos produzidos nesta classe e a seleção, recuperação e apresentação direta dos documentos arquivísticos e de seus conteúdos por meio desse mecanismo.",
                            "obrigatoriedade": "Altamente Desejável"
                        }
                    ]
                },
                {
                    "id": "4.2",
                    "titulo": "Pesquisa e localização",
                    "requisitos": [
                        {
                            "referencia": "4.2.1",
                            "titulo": "Funções de pesquisa",
                            "texto": "Um SIGAD tem que fornecer uma série flexível de funções que atuem sobre os metadados relacionados com os diversos níveis de agregação (documento, unidade de arquivamento e classe) e sobre os conteúdos dos documentos arquivísticos por meio de parâmetros definidos pelo usuário, com o objetivo de localizar e acessar os documentos e/ou metadados, seja individualmente ou reunidos em grupo.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "4.2.2",
                            "titulo": "Pesquisa integrada",
                            "texto": "Um SIGAD tem que executar pesquisa de forma integrada, isto é, apresentar todos os documentos e dossiês/processos, sejam eles digitais, híbridos ou não digitais, que satisfaçam aos parâmetros da pesquisa.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "4.2.3",
                            "titulo": "Pesquisa de metadados de gestão",
                            "texto": "Um SIGAD tem que permitir que todos os metadados de gestão de um documento ou dossiê/processo possam ser pesquisados.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "4.2.4",
                            "titulo": "Pesquisa de conteúdo textual",
                            "texto": "É altamente desejável que um SIGAD permita que o conteúdo dos documentos em forma de texto possa ser pesquisado.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "4.2.5",
                            "titulo": "Recuperação por número identificador",
                            "texto": "Um SIGAD tem que permitir que um documento ou dossiê/processo possa ser recuperado por meio de um número identificador.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "4.2.6",
                            "titulo": "Campos de recuperação",
                            "texto": "Um SIGAD tem que permitir que um documento ou dossiê/processo possa ser recuperado por meio de todas as formas de identificação implementadas, incluindo, no mínimo: identificador; título; assunto; datas; interessado; autor/redator/originador; classificação de acordo com plano ou código de classificação.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "4.2.7",
                            "titulo": "Pesquisa combinada com operadores booleanos",
                            "texto": "É altamente desejável que um SIGAD forneça uma interface que possibilite a pesquisa combinada de metadados e de conteúdo do documento por meio dos operadores booleanos 'e', 'ou' e 'não'.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "4.2.8",
                            "titulo": "Qualificação de termos de pesquisa",
                            "texto": "É altamente desejável que um SIGAD permita que os termos utilizados na pesquisa possam ser qualificados, especificando-se um metadado ou o conteúdo do documento como fonte de busca.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "4.2.9",
                            "titulo": "Períodos típicos para pesquisa de datas",
                            "texto": "Um SIGAD pode permitir o uso de períodos típicos de pedidos de pesquisa nos campos de data, como, por exemplo, 'semana anterior', 'mês corrente'.",
                            "obrigatoriedade": "Facultativo"
                        },
                        {
                            "referencia": "4.2.10",
                            "titulo": "Caracteres curinga e truncamento para metadados",
                            "texto": "É altamente desejável que um SIGAD permita a utilização de caracteres curinga e de truncamento à direita para pesquisa de metadados. Por exemplo, o argumento de pesquisa 'Bra*il' pode recuperar 'Brasil' e 'Brazil', e o argumento de pesquisa 'Arq*' pode recuperar 'Arquivo', 'Arquivística'.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "4.2.11",
                            "titulo": "Caracteres curinga e truncamento para conteúdo",
                            "texto": "É altamente desejável que um SIGAD permita a utilização de caracteres curinga e de truncamento à direita para pesquisa no conteúdo do documento.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "4.2.12",
                            "titulo": "Pesquisa por proximidade",
                            "texto": "É altamente desejável que um SIGAD proporcione pesquisa por proximidade, isto é, que uma palavra apareça no conteúdo do documento a uma distância máxima de outra.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "4.2.13",
                            "titulo": "Armazenamento de pesquisas",
                            "texto": "É altamente desejável que um SIGAD permita que os usuários armazenem pesquisas para reutilização posterior.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "4.2.14",
                            "titulo": "Refinamento de pesquisas",
                            "texto": "É altamente desejável que um SIGAD permita que os usuários refinem pesquisas já realizadas.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "4.2.15",
                            "titulo": "Pesquisa por tesauro ou vocabulário controlado",
                            "texto": "Quando o órgão ou entidade utilizar tesauros ou vocabulário controlado, é altamente desejável que um SIGAD seja capaz de realizar pesquisa dos documentos e dossiês/processos por meio da navegação nesses instrumentos.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "4.2.16",
                            "titulo": "Pesquisa de termos em desuso",
                            "texto": "É altamente desejável que um SIGAD permita a pesquisa de termos já em desuso, fazendo relação com os termos atualizados, com o apoio de um tesauro ou vocabulário controlado, caso existam.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "4.2.17",
                            "titulo": "Configuração de campos de pesquisa",
                            "texto": "É altamente desejável que um SIGAD permita que usuários autorizados configurem e alterem os campos default de pesquisa de forma a definir metadados como campos de pesquisa.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "4.2.18",
                            "titulo": "Recuperação de unidade de arquivamento",
                            "texto": "Um SIGAD tem que permitir a pesquisa e recuperação de uma unidade de arquivamento completa e exibir a lista de todos os documentos que a compõem, como uma unidade e num único processo de recuperação.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "4.2.19",
                            "titulo": "Limitação de acesso por segurança",
                            "texto": "Um SIGAD tem que limitar o acesso a qualquer informação (metadado ou conteúdo de um documento arquivístico) se restrições de acesso e questões de segurança assim determinarem.",
                            "obrigatoriedade": "Obrigatório"
                        }
                    ]
                },
                {
                    "id": "4.3",
                    "titulo": "Apresentação: visualização, impressão, emissão de som",
                    "requisitos": [
                        {
                            "referencia": "4.3.1",
                            "titulo": "Apresentação de resultados",
                            "texto": "Um SIGAD tem que apresentar o resultado da pesquisa como uma lista de documentos e dossiês/processos digitais, não digitais ou híbridos que cumpram os parâmetros da consulta e deve notificar o usuário se o resultado for nulo.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "4.3.2",
                            "titulo": "Sugestão de parâmetros aproximados",
                            "texto": "Quando o resultado de uma pesquisa for nulo, o SIGAD pode sugerir outros parâmetros aproximados que possam ser satisfeitos. Por exemplo: Pesquisa inicial com o parâmetro 'Arquivo Naiconal'. O SIGAD apresenta a seguinte mensagem: Você não quis dizer 'Arquivo Nacional'?",
                            "obrigatoriedade": "Facultativo"
                        },
                        {
                            "referencia": "4.3.3",
                            "titulo": "Opções após pesquisa",
                            "texto": "Após apresentar o resultado da pesquisa, um SIGAD tem que oferecer ao usuário as opções: • visualizar os documentos e dossiês/processos resultantes da pesquisa; • redefinir os parâmetros de pesquisa e fazer nova consulta.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "4.3.4",
                            "titulo": "Seleção e abertura de resultados",
                            "texto": "É altamente desejável que um SIGAD permita que os documentos e dossiês/processos apresentados em uma lista de resultados sejam selecionados e, em seguida, abertos por meio de um clique ou toque de tela ou acionamento de tecla.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "4.3.5",
                            "titulo": "Configuração da lista de resultados",
                            "texto": "É altamente desejável que um SIGAD permita a configuração do formato da lista de resultados de pesquisa pelo usuário ou administrador, incluindo recursos e funções como: • seleção da ordem em que os resultados de pesquisa são apresentados; • determinação do número de resultados de pesquisa exibidos em cada tela; • estabelecimento do número máximo de resultados para uma pesquisa; • armazenamento dos resultados de uma pesquisa; • definição dos metadados a serem exibidos nas listas de resultados de pesquisa.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "4.3.6",
                            "titulo": "Navegação entre níveis de agregação",
                            "texto": "É altamente desejável que um SIGAD forneça recursos que permitam ao usuário 'navegar' para o nível de agregação imediatamente superior ou inferior, como, por exemplo: • de um documento para a unidade de arquivamento em que está incluído; • de uma unidade de arquivamento para os documentos nela incluídos; • de uma unidade de arquivamento para a respectiva classe; • de uma classe para as unidades de arquivamento a ela relacionadas.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "4.3.7",
                            "titulo": "Apresentação de documentos digitais",
                            "texto": "Um SIGAD tem que ser capaz de apresentar o conteúdo de todos os documentos arquivísticos digitais definidos pelo programa de gestão de documentos, de forma que: • preserve as características de exibição visual e de formato apresentados pela aplicação geradora; • exiba todos os componentes do documento digital em conjunto, como uma unidade. No caso de necessidade de captura de documentos em formatos de arquivo não previstos no programa de gestão de documentos, o SIGAD tem que permitir o download do documento para que possa ser visualizado em outro ambiente.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "4.3.8",
                            "titulo": "Impressão de documentos",
                            "texto": "Em caso do SIGAD imprimir os documentos, tem que manter a forma documental apresentada pelas aplicações geradoras. No caso de necessidade de captura de documentos em formatos de arquivo não previstos no programa de gestão de documentos, o SIGAD tem que permitir o download do documento para que possa ser visualizado em outro ambiente.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "4.3.9",
                            "titulo": "Exibição de imagem e som",
                            "texto": "É altamente desejável que o SIGAD seja capaz de exibir/reproduzir o conteúdo de documentos que incluam imagem fixa, imagem em movimento e som.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "4.3.10",
                            "titulo": "Definição de metadados para impressão",
                            "texto": "Um SIGAD pode possibilitar a definição dos metadados a serem impressos.",
                            "obrigatoriedade": "Facultativo"
                        },
                        {
                            "referencia": "4.3.11",
                            "titulo": "Exibição de metadados",
                            "texto": "Um SIGAD tem que ser capaz de exibir em tela todos os metadados associados aos documentos e dossiês/processos resultantes de uma pesquisa.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "4.3.12",
                            "titulo": "Impressão de lista de resultados",
                            "texto": "Um SIGAD tem que permitir a impressão de uma lista dos documentos e dossiês/processos resultantes de uma pesquisa.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "4.3.13",
                            "titulo": "Impressão de lista de documentos do dossiê",
                            "texto": "Um SIGAD tem que permitir a impressão de uma lista dos documentos que compõem um dossiê/processo.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "4.3.14",
                            "titulo": "Definição de metadados para listas impressas",
                            "texto": "É altamente desejável que um SIGAD permita que os metadados exibidos nas listas a que se referem os requisitos 4.3.12 e 4.3.13 possam ser definidos pelo usuário.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "4.3.15",
                            "titulo": "Impressão de todos os documentos do dossiê",
                            "texto": "Um SIGAD tem que permitir que todos os documentos de um dossiê/processo sejam impressos em uma ou mais operações.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "4.3.16",
                            "titulo": "Exportação para reprodução",
                            "texto": "Um SIGAD tem que ter mecanismos destinados a exportar, para fins de reprodução, documentos que não possam ser impressos, tais como documentos sonoros, vídeos e multimídia.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "4.3.17",
                            "titulo": "Apresentação em outros formatos",
                            "texto": "É altamente desejável que um SIGAD seja capaz de apresentar os documentos arquivísticos em outros formatos além do nativo, tais como: • formato .xml adequado para publicação; • formato .html adequado para publicação; • formato aprovado por organismos padronizadores na sua esfera de competência.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "4.3.18",
                            "titulo": "Pesquisa e exibição simultânea para diversos usuários",
                            "texto": "Um SIGAD tem que ser capaz de realizar pesquisa e exibição de documentos e dossiês/processos, simultaneamente, para diversos usuários.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "4.3.19",
                            "titulo": "Impressão com metadados",
                            "texto": "É altamente desejável que um SIGAD permita ao administrador determinar que todas as cópias em papel de documentos e dossiês/processos sejam impressas junto com metadados pré-selecionados.",
                            "obrigatoriedade": "Altamente Desejável"
                        }
                    ]
                }
            ]
        },
        {
            "id": "elaboracao",
            "titulo": "5. Elaboração de documentos",
            "icone": "edit",
            "totalRequisitos": 23,
            "subsecoes": [
                {
                    "id": "5.1",
                    "titulo": "Procedimentos gerais",
                    "requisitos": [
                        {
                            "referencia": "5.1.1",
                            "titulo": "Automação da produção de documentos",
                            "texto": "Um SIGAD pode automatizar a produção de documentos por meio da exibição de formulários e modelos predefinidos pelo programa de gestão arquivística de documentos.",
                            "obrigatoriedade": "Facultativo"
                        },
                        {
                            "referencia": "5.1.2",
                            "titulo": "Vinculação à automatização",
                            "texto": "Um SIGAD pode vincular à automatização da produção de documentos: numeração automática por espécie documental; classificação arquivística; marcação de sigilo legal; autuação de processo; outras.",
                            "obrigatoriedade": "Facultativo"
                        }
                    ]
                },
                {
                    "id": "5.2",
                    "titulo": "Gerenciamento dos dossiês/processos",
                    "requisitos": [
                        {
                            "referencia": "5.2.1",
                            "titulo": "Registro de datas de abertura e encerramento",
                            "texto": "Um SIGAD tem que registrar nos metadados as datas de abertura e de encerramento do dossiê/processo. Essa data pode servir de parâmetro para aplicação dos prazos de guarda e destinação do dossiê/processo.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "5.2.2",
                            "titulo": "Aviso de anexação duplicada",
                            "texto": "Um SIGAD tem que emitir um aviso caso o usuário anexe um documento que já tenha sido anexado no mesmo dossiê/processo.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "5.2.3",
                            "titulo": "Encerramento de dossiê/processo",
                            "texto": "Um SIGAD tem que permitir que um dossiê/processo seja encerrado por meio de procedimentos regulamentares e somente por usuários autorizados.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "5.2.4",
                            "titulo": "Consulta a dossiês encerrados",
                            "texto": "Um SIGAD tem que permitir a consulta aos dossiês/processos já encerrados por usuários autorizados.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "5.2.5",
                            "titulo": "Impedimento de acréscimo a dossiês encerrados",
                            "texto": "Um SIGAD tem que impedir o acréscimo de novos documentos a dossiês/processos já encerrados. Dossiês/processos encerrados devem ser reabertos para receber novos documentos.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "5.2.6",
                            "titulo": "Integridade da relação hierárquica",
                            "texto": "Um SIGAD tem que garantir sempre a integridade da relação hierárquica entre classe, dossiê/processo, volume e documento, independentemente de atividades de manutenção, ações do usuário ou falha de componentes do SIGAD. Em hipótese alguma pode o SIGAD permitir que uma ação do usuário ou falha do SIGAD dê origem a inconsistência em sua base de dados.",
                            "obrigatoriedade": "Obrigatório"
                        }
                    ]
                },
                {
                    "id": "5.3",
                    "titulo": "Requisitos adicionais para o gerenciamento de processos",
                    "requisitos": [
                        {
                            "referencia": "5.3.1",
                            "titulo": "Formação/autuação de processos",
                            "texto": "Um SIGAD tem que prever a formação/autuação de processos, por usuário autorizado conforme estabelecido em legislação específica.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "5.3.2",
                            "titulo": "Identificação de processos relativos à mesma ação",
                            "texto": "É altamente desejável que um SIGAD preveja funcionalidades para apoiar a identificação de processos relativos à mesma ação ou interessado, e emita um aviso. Essa funcionalidade pode ser utilizada sob demanda do usuário, para identificar a existência de processos específicos, ou para apoiar controles/restrições do sistema na execução de atividade específica, como, por exemplo, juntada de processos por anexação.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "5.3.3",
                            "titulo": "Numeração sequencial dos documentos do processo",
                            "texto": "Um SIGAD tem que prever que os documentos integrantes do processo digital recebam numeração sequencial sem falhas, não se admitindo que documentos diferentes recebam a mesma numeração.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "5.3.4",
                            "titulo": "Impedimento de renumeração",
                            "texto": "Um SIGAD tem que impedir a renumeração dos documentos integrantes de um processo digital. Este requisito tem por objetivo impedir a exclusão não autorizada de documentos de um processo. Casos especiais que autorizem a renumeração, como no caso dos documentos do processo acessório na juntada por anexação, devem obedecer à legislação específica na devida esfera e âmbito de competência.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "5.3.5",
                            "titulo": "Juntada de processos",
                            "texto": "Um SIGAD tem que prever procedimentos para juntada de processos segundo a legislação específica na devida esfera e âmbito de competência. A juntada pode ser por anexação ou apensação. Este procedimento deve ser registrado nos metadados do processo.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "5.3.6",
                            "titulo": "Desapensação de processos",
                            "texto": "Um SIGAD tem que prever procedimentos para desapensação de processos segundo a legislação específica na devida esfera e âmbito de competência. Esse procedimento deve ser registrado nos metadados do processo.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "5.3.7",
                            "titulo": "Desentranhamento de documentos",
                            "texto": "Um SIGAD tem que prever procedimentos para desentranhamento de documentos integrantes de um processo, segundo norma específica na devida esfera e âmbito de competência. Esse procedimento deve ser registrado nos metadados do processo.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "5.3.8",
                            "titulo": "Desmembramento de documentos",
                            "texto": "Um SIGAD tem que prever procedimentos para desmembramento de documentos integrantes de um processo, segundo norma específica na devida esfera e âmbito de competência. Esse procedimento deve ser registrado nos metadados do processo.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "5.3.9",
                            "titulo": "Encerramento de processos",
                            "texto": "Um SIGAD tem que prever o encerramento dos processos incluídos seus volumes e metadados.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "5.3.10",
                            "titulo": "Desarquivamento para reativação",
                            "texto": "Um SIGAD tem que prever o desarquivamento para reativação dos processos, por usuário autorizado e obedecendo a procedimentos legais e administrativos. Para manter a integridade do processo, somente o último volume receberá novos documentos ou peças.",
                            "obrigatoriedade": "Obrigatório"
                        }
                    ]
                },
                {
                    "id": "5.4",
                    "titulo": "Volumes: abertura, encerramento e metadados",
                    "requisitos": [
                        {
                            "referencia": "5.4.1",
                            "titulo": "Gerenciamento de volumes",
                            "texto": "É altamente desejável que um SIGAD seja capaz de gerenciar volumes para subdividir dossiês/processos, fazendo a distinção entre dossiês/processos e volumes.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "5.4.2",
                            "titulo": "Associação de metadados aos volumes",
                            "texto": "É altamente desejável que um SIGAD permita a associação de metadados aos volumes e restrinja a inclusão e alteração desses metadados apenas a usuários autorizados.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "5.4.3",
                            "titulo": "Herança de metadados do dossiê/processo",
                            "texto": "Um SIGAD tem que permitir que um volume herde, automaticamente, do dossiê/processo ao qual pertence, alguns metadados predefinidos, como, por exemplo, classes e temporalidade.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "5.4.4",
                            "titulo": "Abertura de volumes",
                            "texto": "Um SIGAD tem que permitir a abertura de volumes para qualquer dossiê/processo que não esteja encerrado.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "5.4.5",
                            "titulo": "Registro de datas de abertura e encerramento de volumes",
                            "texto": "É altamente desejável que um SIGAD permita o registro de metadados correspondentes às datas de abertura e encerramento de volumes.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "5.4.6",
                            "titulo": "Conteúdo de volumes",
                            "texto": "Um SIGAD tem que assegurar que um volume conterá somente documentos. Não é permitido que um volume contenha outro volume ou outro dossiê/processo. Em caso de juntada por anexação de processo a processo, o sistema deverá encerrar o último volume do processo principal e, na sequência, incluir cada um dos volumes do processo anexado.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "5.4.7",
                            "titulo": "Encerramento de volumes",
                            "texto": "Um SIGAD tem que permitir que um volume seja encerrado por meio de procedimentos regulamentares e apenas por usuários autorizados.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "5.4.8",
                            "titulo": "Abertura automática de novo volume",
                            "texto": "Um SIGAD tem que assegurar que, ao ser aberto um novo volume, o precedente seja automaticamente encerrado. Apenas o volume produzido mais recentemente pode estar aberto; os demais volumes existentes no dossiê/processo têm que estar encerrados.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "5.4.9",
                            "titulo": "Impedimento de reabertura de volumes",
                            "texto": "Um SIGAD tem que impedir a reabertura, para acréscimo de documentos, de um volume já encerrado.",
                            "obrigatoriedade": "Obrigatório"
                        }
                    ]
                },
                {
                    "id": "5.5",
                    "titulo": "Documentos e processos/dossiês não digitais e híbridos",
                    "requisitos": [
                        {
                            "referencia": "5.5.1",
                            "titulo": "Captura e gerenciamento de documentos não digitais",
                            "texto": "Um SIGAD tem que capturar documentos ou dossiês/processos não digitais e gerenciá-los da mesma forma que os digitais.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "5.5.2",
                            "titulo": "Gerenciamento de dossiês híbridos",
                            "texto": "Um SIGAD tem que ser capaz de gerenciar a parte não digital e a parte digital integrantes de dossiês/processos híbridos, associando-as com o mesmo número identificador atribuído pelo sistema e o mesmo título, além de indicar que se trata de um documento arquivístico híbrido.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "5.5.3",
                            "titulo": "Configuração de metadados para documentos não digitais",
                            "texto": "Um SIGAD tem que permitir que um conjunto específico de metadados seja configurado para os documentos ou dossiês/processos não digitais e incluir informações sobre o local de arquivamento.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "5.5.4",
                            "titulo": "Acompanhamento de movimentação",
                            "texto": "Um SIGAD tem que dispor de mecanismos para acompanhar a movimentação do documento arquivístico não digital, de forma que fique evidente para o usuário a localização atual do documento.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "5.5.5",
                            "titulo": "Solicitação e reserva de documentos não digitais",
                            "texto": "Um SIGAD tem que ser capaz de oferecer ao usuário funcionalidades para solicitar ou reservar a consulta a um documento arquivístico não digital, enviando uma mensagem para o detentor atual do documento ou para o administrador.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "5.5.6",
                            "titulo": "Impressão e reconhecimento de códigos de barras",
                            "texto": "Um SIGAD pode incluir mecanismos de impressão e reconhecimento de códigos de barras para automatizar a introdução de dados e acompanhar a movimentação de documentos ou dossiês/processos não digitais.",
                            "obrigatoriedade": "Facultativo"
                        },
                        {
                            "referencia": "5.5.7",
                            "titulo": "Recuperação de documentos híbridos",
                            "texto": "Um SIGAD tem que assegurar que a recuperação de um documento ou dossiê/processo híbrido permita, igualmente, a recuperação dos metadados da parte digital e da não digital.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "5.5.8",
                            "titulo": "Classificação de sigilo para híbridos",
                            "texto": "Sempre que os documentos ou dossiês/processos híbridos estiverem classificados quanto ao grau de sigilo, um SIGAD tem que garantir que a parte não digital e a parte digital correspondente recebam a mesma classificação de sigilo.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "5.5.9",
                            "titulo": "Auditoria de metadados de não digitais",
                            "texto": "Um SIGAD tem que poder registrar na trilha de auditoria todas as alterações efetuadas nos metadados dos documentos ou dossiês/processos não digitais e híbridos.",
                            "obrigatoriedade": "Obrigatório"
                        }
                    ]
                }
            ]
        },
        {
            "id": "tramitacao",
            "titulo": "6. Tramitação e fluxo de trabalho",
            "icone": "swap_horiz",
            "totalRequisitos": 22,
            "subsecoes": [
                {
                    "id": "6.1",
                    "titulo": "Controle do fluxo de trabalho",
                    "requisitos": [
                        {
                            "referencia": "6.1.1",
                            "titulo": "Passos para cumprimento de trâmites",
                            "texto": "Um recurso de fluxo de trabalho de um SIGAD tem que fornecer os passos necessários para o cumprimento de trâmites preestabelecidos ou aleatórios. Nesse caso, cada passo significa o deslocamento de um documento ou dossiê/processo de um participante para outro, a fim de serem objeto de ações.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "6.1.2",
                            "titulo": "Número ilimitado de trâmites",
                            "texto": "Um SIGAD tem que ter capacidade, sem limitações, de estabelecer o número necessário de trâmites nos fluxos de trabalho.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "6.1.3",
                            "titulo": "Aviso de envio de documento",
                            "texto": "O fluxo de trabalho de um SIGAD tem que disponibilizar uma função para avisar um participante do fluxo de que um documento lhe foi enviado, especificando a ação necessária.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "6.1.4",
                            "titulo": "Uso de correio eletrônico no fluxo",
                            "texto": "É altamente desejável que o fluxo de trabalho de um SIGAD permita o uso do correio eletrônico, para que um usuário possa informar a outros usuários sobre documentos que requeiram sua atenção. Esse requisito requer a integração com um sistema de correio eletrônico existente.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "6.1.5",
                            "titulo": "Definição e manutenção de fluxos",
                            "texto": "O recurso de fluxo de trabalho de um SIGAD tem que permitir que fluxos de trabalho pré-programados sejam definidos, alterados e mantidos exclusivamente por usuário autorizado.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "6.1.6",
                            "titulo": "Redistribuição de tarefas",
                            "texto": "É altamente desejável que o administrador possa autorizar usuários individuais a redistribuir tarefas ou ações de um fluxo de trabalho a um usuário ou grupo diferente do previsto. Um usuário pode precisar enviar um documento a outro usuário, devido ao seu conteúdo específico ou caso o usuário responsável se encontre em licença.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "6.1.7",
                            "titulo": "Auditoria de alterações no fluxo",
                            "texto": "Um recurso de fluxo de trabalho de um SIGAD tem que registrar na trilha de auditoria todas as alterações ocorridas neste fluxo.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "6.1.8",
                            "titulo": "Registro de tramitação",
                            "texto": "Um recurso de fluxo de trabalho de um SIGAD tem que registrar a tramitação de um documento a fim de que os usuários possam conhecer a situação de cada documento no fluxo.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "6.1.9",
                            "titulo": "Filas de espera",
                            "texto": "É altamente desejável que um recurso de fluxo de trabalho de um SIGAD regencie os documentos em filas de espera que possam ser examinadas e controladas por usuário autorizado.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "6.1.10",
                            "titulo": "Visualização de fila de espera",
                            "texto": "É altamente desejável que um recurso de fluxo de trabalho de um SIGAD tenha a capacidade de deixar que os usuários visualizem a fila de espera de trabalhos a eles destinados e selecionem os itens a serem trabalhados.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "6.1.11",
                            "titulo": "Fluxos condicionais",
                            "texto": "É altamente desejável que um recurso de fluxo de trabalho de um SIGAD forneça fluxos condicionais de acordo com os dados de entrada do usuário ou a partir dos dados do SIGAD. Os fluxos que remetem o documento a um dos participantes dependem de uma condição determinada por um deles. Por exemplo, um fluxo pode levar um documento a um participante ou a outro, conforme os dados de entrada do participante anterior; ou a definição do fluxo pode depender de um valor calculado pelo sistema.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "6.1.12",
                            "titulo": "Histórico de movimentação",
                            "texto": "Um recurso de fluxo de trabalho de um SIGAD tem que fornecer um histórico de movimentação dos documentos. O histórico de movimentação corresponde a um conjunto de metadados de datas de entrada e saída, nomes de responsáveis, título do documento, providências etc.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "6.1.13",
                            "titulo": "Interrupção de fluxo",
                            "texto": "Um recurso de fluxo de trabalho de um SIGAD pode permitir que usuários autorizados interrompam ou suspendam temporariamente um fluxo com o objetivo de executar outro trabalho. O fluxo só prosseguirá com a autorização do usuário.",
                            "obrigatoriedade": "Facultativo"
                        },
                        {
                            "referencia": "6.1.14",
                            "titulo": "Processamento condicional",
                            "texto": "Um recurso de fluxo de trabalho de um SIGAD tem que incluir processamento condicional, isto é, permitir que um fluxo de trabalho seja suspenso para aguardar a chegada de um documento e prossiga automaticamente quando este for recebido.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "6.1.15",
                            "titulo": "Limites de tempo e expiração",
                            "texto": "É altamente desejável que um recurso de fluxo de trabalho de um SIGAD possa associar limites de tempo a trâmites e/ou procedimentos individuais em cada fluxo e comunicar os itens que expiraram de acordo com esses limites.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "6.1.16",
                            "titulo": "Reconhecimento de participantes",
                            "texto": "Um recurso de fluxo de trabalho de um SIGAD tem que reconhecer indivíduos e grupos de trabalho como participantes.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "6.1.17",
                            "titulo": "Distribuição de documentos em grupos",
                            "texto": "Sempre que o participante for um grupo de trabalho, é altamente desejável que um recurso de fluxo de trabalho de um SIGAD preveja a forma de distribuição dos documentos entre os membros do grupo. Essa distribuição pode ser de duas formas: de acordo com uma sequência circular predefinida, o SIGAD envia o próximo documento independentemente da conclusão da tarefa anterior; ou à medida que cada membro conclui a tarefa, o SIGAD lhe envia o próximo documento da fila do grupo.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "6.1.18",
                            "titulo": "Captura como gatilho de fluxo",
                            "texto": "É altamente desejável que um recurso de fluxo de trabalho de um SIGAD permita que a captura de documentos desencadeie, automaticamente, fluxos de trabalho.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "6.1.19",
                            "titulo": "Relatórios de monitoramento",
                            "texto": "Um recurso de fluxo de trabalho de um SIGAD tem que fornecer meios de elaboração de relatórios completos para permitir que gestores monitorem a tramitação dos documentos e o desempenho dos participantes.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "6.1.20",
                            "titulo": "Metadados de tramitação",
                            "texto": "Um recurso de fluxo de trabalho de um SIGAD tem que registrar a tramitação de um documento em seus metadados. Os metadados referentes à tramitação devem registrar data e hora de envio e recebimento, e a identificação do usuário.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "6.1.21",
                            "titulo": "Versões de fluxos alterados",
                            "texto": "É altamente desejável que um SIGAD mantenha versões dos fluxos alterados e estabeleça vínculos entre os documentos já processados ou em processamento nos fluxos alterados.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "6.1.22",
                            "titulo": "Modificações em atributos de fluxos",
                            "texto": "O SIGAD tem que assegurar que qualquer modificação nos atributos dos fluxos leve em conta os documentos a ele vinculados.",
                            "obrigatoriedade": "Obrigatório"
                        }
                    ]
                },
                {
                    "id": "6.2",
                    "titulo": "Controle de versões e status do documento",
                    "requisitos": [
                        {
                            "referencia": "6.2.1",
                            "titulo": "Registro de status do documento",
                            "texto": "Um recurso de fluxo de trabalho de um SIGAD tem que ser capaz de registrar o status de transmissão do documento, ou seja, se é minuta, original ou cópia.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "6.2.2",
                            "titulo": "Controle de versões",
                            "texto": "Um SIGAD tem que manter o identificador único do documento, e controlar as diversas versões deste documento.",
                            "obrigatoriedade": "Obrigatório"
                        }
                    ]
                }
            ]
        },
        {
            "id": "seguranca",
            "titulo": "7. Segurança",
            "icone": "lock",
            "totalRequisitos": 82,
            "subsecoes": [
                {
                    "id": "7.1",
                    "titulo": "Cópias de segurança",
                    "requisitos": [
                        {
                            "referencia": "7.1.1",
                            "titulo": "Criação de cópias de segurança",
                            "texto": "Um SIGAD tem que permitir que, sob controle do seu administrador, mecanismos de backup criem cópias de todas as informações nele contidas (documentos arquivísticos, metadados e parâmetros do sistema).",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.1.2",
                            "titulo": "Controle e testes de restauração",
                            "texto": "O administrador do SIGAD tem que manter o controle das cópias de segurança, prevendo testes de restauração.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.1.3",
                            "titulo": "Cópias em suportes equivalentes",
                            "texto": "É altamente desejável que as mídias removíveis tenham cópias em suportes equivalentes e armazenamento off-site.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "7.1.4",
                            "titulo": "Backups em locais distintos",
                            "texto": "É altamente desejável que os discos rígidos tenham backups armazenados em pelo menos dois locais diferentes e fisicamente distantes.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "7.1.5",
                            "titulo": "Agendamento automático de backups",
                            "texto": "É altamente desejável que um SIGAD seja capaz de agendar, automaticamente, os backups com periodicidade estipulada pelo administrador. Deve permitir cópias incrementais ou completas.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "7.1.6",
                            "titulo": "Integridade das cópias de segurança",
                            "texto": "É altamente desejável que um SIGAD disponha de mecanismos que garantam a integridade das cópias de segurança, bem como a identificação do responsável pelo procedimento.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "7.1.7",
                            "titulo": "Restituição a estado conhecido",
                            "texto": "Um SIGAD tem que incluir funções para restituir os documentos de arquivo e metadados a um estado conhecido, utilizando uma combinação de cópias restauradas e rotinas de auditoria.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.1.8",
                            "titulo": "Proteção de dados críticos",
                            "texto": "É altamente desejável que dados críticos de configuração e controle do sistema operacional e do gerenciador de bancos de dados sejam especialmente protegidos. Mecanismos especiais de backup devem ser previstos para dados críticos.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "7.1.9",
                            "titulo": "Cópias de trilhas de auditoria",
                            "texto": "É altamente desejável que as trilhas de auditoria sejam copiadas com frequência, prevendo-se cópias a serem armazenadas em pelo menos um local off-site.",
                            "obrigatoriedade": "Altamente Desejável"
                        }
                    ]
                },
                {
                    "id": "7.2",
                    "titulo": "Controle de acesso",
                    "requisitos": [
                        {
                            "referencia": "7.2.1",
                            "titulo": "Atributos de usuários para controle de acesso",
                            "texto": "Para implementar o controle de acesso, um SIGAD tem que manter pelo menos os seguintes atributos dos usuários, de acordo com a política de segurança: identificador do usuário; autorizações de acesso; credenciais de autenticação. Senha, crachá, chave criptográfica, token USB, smartcard, biometria (de impressão digital, de retina etc.) são exemplos de credenciais de autenticação.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.2.2",
                            "titulo": "Identificação e autenticação",
                            "texto": "Um SIGAD tem que exigir que o usuário esteja devidamente identificado e autenticado antes de iniciar qualquer operação no SIGAD.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.2.3",
                            "titulo": "Validação de atributos de segurança",
                            "texto": "Um SIGAD tem que garantir que os valores dos atributos de segurança e controle de acesso, associados ao usuário, estejam dentro de conjuntos de valores válidos.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.2.4",
                            "titulo": "Alteração de credenciais de autenticação",
                            "texto": "É altamente desejável que as credenciais de autenticação sejam alteradas pelo usuário proprietário ou pelo administrador, com a anuência do proprietário e em conformidade com a política de segurança.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "7.2.5",
                            "titulo": "Acesso a funções do sistema",
                            "texto": "Um SIGAD tem que permitir acesso a funções do sistema somente a usuários autorizados e sob controle rigoroso da administração do sistema, a fim de proteger a autenticidade dos documentos arquivísticos digitais.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.2.6",
                            "titulo": "Respostas a solicitação de acesso não autorizado",
                            "texto": "Se o usuário solicitar o acesso ou pesquisa de um documento arquivístico, volume ou dossiê/processo específico a que não tenha direito de acesso, é altamente desejável que um SIGAD forneça uma das seguintes respostas (estabelecidas durante a configuração): mostrar o título e os metadados do documento; demonstrar a existência do dossiê/processo ou documento, mas não o respectivo título nem outro metadado; não mostrar qualquer informação do documento, nem indicar a sua existência. Essas opções são apresentadas em ordem crescente de segurança. O requisito da terceira opção (isto é, a mais rigorosa) implica que um SIGAD tem que excluir esses documentos de qualquer listagem de resultados de pesquisa. Esse procedimento é, normalmente, adequado para documentos que requeiram elevado grau de segurança e sigilo. O SIGAD deve ser capaz de registrar e informar tentativas indevidas de acesso. Este requisito se aplica tanto a pesquisas em metadados quanto a pesquisas no próprio documento (texto livre).",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "7.2.7",
                            "titulo": "Administração de permissões",
                            "texto": "Somente administradores autorizados têm que ser capazes de criar, alterar, remover ou revogar permissões associadas a papéis de usuários, grupos de usuários ou usuários individuais.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.2.8",
                            "titulo": "Aplicação imediata de alterações",
                            "texto": "É altamente desejável que um SIGAD aplique, imediatamente, alterações ou revogações dos atributos de segurança de usuários e de documentos digitais.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "7.2.9",
                            "titulo": "Ferramentas de produtividade para administrador",
                            "texto": "É altamente desejável que um SIGAD ofereça ferramentas de aumento de produtividade ao administrador, tais como a realização de operações sobre lotes ou grupos de usuários e lotes de documentos digitais, agenda de tarefas, análises de trilhas e geração de alarmes.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "7.2.10",
                            "titulo": "Hierarquia de permissões",
                            "texto": "Quando um SIGAD controlar o acesso por grupos de usuários, papéis de usuários e usuários individuais, é altamente desejável que obedeça a uma hierarquia de permissões preestabelecida na política de segurança.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "7.2.11",
                            "titulo": "Controle de acesso por grupos",
                            "texto": "Um SIGAD tem que aplicar a política de controle de acesso a documentos por grupos de usuários considerando: a identidade do usuário e sua participação em grupos; os atributos de segurança, associados ao documento arquivístico digital, às classes e/ou aos dossiês/processos.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.2.12",
                            "titulo": "Concessão de acesso por grupos",
                            "texto": "O acesso a documentos, a dossiês/processos ou classes, tem que ser concedido se a permissão requerida para a operação estiver associada a pelo menos um dos grupos aos quais pertença o usuário.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.2.13",
                            "titulo": "Usuário em múltiplos grupos",
                            "texto": "Um SIGAD tem que permitir que um usuário pertença a mais de um grupo.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.2.14",
                            "titulo": "Concessão de acesso por usuários responsáveis",
                            "texto": "Um SIGAD pode permitir que alguns usuários estipulem que outros usuários, papéis ou grupos de usuários podem ter acesso aos documentos sob sua responsabilidade. Essa permissão deve ser atribuída pelo administrador, de acordo com a política de segurança do órgão ou entidade.",
                            "obrigatoriedade": "Facultativo"
                        },
                        {
                            "referencia": "7.2.15",
                            "titulo": "Atributos para controle por papéis",
                            "texto": "Um SIGAD tem que usar os seguintes atributos do usuário ao implementar a política de controle de acesso aos documentos digitais por papéis de usuários: identificação do usuário; papéis associados ao usuário.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.2.16",
                            "titulo": "Atributos de documentos para controle por papéis",
                            "texto": "Um SIGAD tem que usar os seguintes atributos dos documentos digitais ao implementar a política de controle de acesso por papéis: identificação do documento digital; operações permitidas aos vários papéis de usuários, sobre as classes ou unidades de arquivamento a que o documento pertence.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.2.17",
                            "titulo": "Concessão de acesso por papéis",
                            "texto": "O acesso a documentos, dossiês/processos ou classes tem que ser concedido somente se a permissão requerida para a operação estiver presente em pelo menos um dos papéis associados ao usuário.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.2.18",
                            "titulo": "Impedimento de papéis conflitantes",
                            "texto": "Um SIGAD tem que impedir que um usuário assuma papéis com direitos conflitantes.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.2.19",
                            "titulo": "Hierarquias e herança de permissões",
                            "texto": "Um SIGAD pode permitir a criação de hierarquias de papéis e o conceito de herança de permissões entre eles.",
                            "obrigatoriedade": "Facultativo"
                        }
                    ]
                },
                {
                    "id": "7.3",
                    "titulo": "Classificação da informação quanto ao grau de sigilo",
                    "requisitos": [
                        {
                            "referencia": "7.3.1",
                            "titulo": "Implementação de classificação de sigilo",
                            "texto": "Um SIGAD tem que implementar a classificação de grau de sigilo e demais caracterizações de restrição de acesso de documentos, dossiês/processos e classes do plano de classificação, e de todas as operações de usuários nos documentos.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.3.2",
                            "titulo": "Identificação de restrições legais de acesso",
                            "texto": "Um SIGAD tem que implementar a identificação de restrições legais de acesso baseando-se nos seguintes atributos de segurança: tipo de restrição legal de acesso; credencial de segurança do usuário. Os tipos de restrição legal podem ser documentos preparatórios, dados pessoais, sigilo comercial, bancário, industrial, telefônico, segredo de justiça etc.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.3.3",
                            "titulo": "Tratamento da classificação de sigilo",
                            "texto": "Um SIGAD tem que tratar a classificação de grau de sigilo baseando-se nos seguintes atributos de segurança: grau de sigilo do documento; credencial de segurança do usuário; identificação da autoridade classificadora. O grau de sigilo tem que estar associado à credencial de segurança. Incluem-se também os documentos recebidos com classificação de grau de sigilo.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.3.4",
                            "titulo": "Formalização da decisão de classificação",
                            "texto": "É altamente desejável que um SIGAD formalize a decisão de classificação da informação em qualquer grau de sigilo, conforme legislação vigente. A título de exemplo, o Poder Executivo federal utiliza o Termo de Classificação de Informação - TCI, conforme estabelecido no decreto n. 7.724, de 16 de maio de 2012, que registra as seguintes informações: código de indexação de documento; grau de sigilo; categoria na qual se enquadra a informação; tipo de documento; data da produção do documento; indicação de dispositivo legal que fundamenta a classificação; razões da classificação; indicação do prazo de sigilo, contado em anos, meses ou dias, ou do evento que defina o seu termo final; data da classificação; identificação da autoridade que classificou a informação.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "7.3.5",
                            "titulo": "Recusa de acesso por sigilo superior",
                            "texto": "Um SIGAD tem que recusar o acesso de usuários a documentos que possuam grau de sigilo superior à sua credencial de segurança.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.3.6",
                            "titulo": "Documentos externos sem classificação",
                            "texto": "Um SIGAD tem que garantir que documentos sem atribuição de grau de sigilo ou identificação de outras restrições de acesso, provenientes de fontes externas ao SIGAD, estejam sujeitos às políticas de controle de acesso e de sigilo.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.3.7",
                            "titulo": "Manutenção de restrição de acesso original",
                            "texto": "Um SIGAD tem que ser capaz de manter a marcação de restrição de acesso original durante a importação de documentos a partir de fontes externas ao SIGAD.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.3.8",
                            "titulo": "Não ambiguidade na associação de marcações",
                            "texto": "É altamente desejável que um SIGAD garanta que não haja ambiguidade na associação entre as marcações de grau de sigilo e outros atributos de segurança (permissões) do documento importado.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "7.3.9",
                            "titulo": "Seleção de graus de sigilo na configuração",
                            "texto": "Um SIGAD tem que permitir que um dos itens abaixo seja selecionado durante a configuração: • graus de sigilo e restrições de acesso a serem atribuídos a classes e dossiês/processos; • classes e dossiês/processos sem grau de sigilo ou outras restrições de acesso.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.3.10",
                            "titulo": "Alteração em lote de sigilo",
                            "texto": "Em caso de erro ou reavaliação, o administrador autorizado tem que ser capaz de alterar o grau de sigilo ou outra restrição de acesso de todos os documentos arquivísticos de um dossiê/processo ou de uma classe, numa única operação. A informação quanto à desclassificação, reclassificação, redução do prazo de sigilo ou alteração de restrição de acesso deverá ser registrada conforme legislação em vigor.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.3.11",
                            "titulo": "Associação de sigilo a usuário autorizado",
                            "texto": "Um SIGAD tem que garantir que o grau de sigilo ou outra restrição de acesso de um documento importado esteja associado a um usuário autorizado com a credencial de segurança pertinente para receber o documento.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.3.12",
                            "titulo": "Administração de atributos de segurança",
                            "texto": "Um SIGAD tem que permitir que somente administradores autorizados sejam capazes de realizar as seguintes ações: • remover ou revogar os atributos de segurança dos documentos; • criar, alterar, remover ou revogar as credenciais de segurança dos usuários.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.3.13",
                            "titulo": "Desclassificação e alteração de restrição",
                            "texto": "Um SIGAD tem que permitir somente ao usuário autorizado, mediante confirmação, a desclassificação, redução do grau de sigilo ou alteração de restrição de acesso de um documento. A informação quanto à desclassificação, reclassificação, redução do prazo de sigilo ou alteração de restrição de acesso deverá ser registrada conforme legislação em vigor.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.3.14",
                            "titulo": "Armazenamento separado para sigilosos",
                            "texto": "É altamente desejável que um SIGAD permita o armazenamento dos documentos sigilosos em meios físicos ou lógicos distintos dos documentos não sigilosos.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "7.3.15",
                            "titulo": "Impedimento de eliminação de sigilosos",
                            "texto": "Um SIGAD tem que impedir que um documento com classificação de sigilo seja eliminado. Os documentos com classificação de sigilo têm que se tornar ostensivos antes de receberem a destinação prevista.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.3.16",
                            "titulo": "Metadados para controle de acesso",
                            "texto": "Um SIGAD tem que implementar metadados nos níveis de dossiê, documento ou cópia truncada de documento para controlar o acesso à informação com restrição de acesso.",
                            "obrigatoriedade": "Obrigatório"
                        }
                    ]
                },
                {
                    "id": "7.4",
                    "titulo": "Trilhas de auditoria",
                    "requisitos": [
                        {
                            "referencia": "7.4.1",
                            "titulo": "Registro de ações na trilha de auditoria",
                            "texto": "Um SIGAD tem que ser capaz de registrar, na trilha de auditoria, informações acerca das ações a seguir: data e hora da captura de todos os documentos; responsável pela captura; reclassificação, desclassificação ou redução do grau de sigilo de um documento ou dossiê/processo, com a classificação inicial e final; qualquer alteração na tabela de temporalidade e destinação de documentos; qualquer ação de reavaliação de documentos; qualquer alteração nos metadados associados a classes, dossiês/processos ou documentos; data e hora de produção, aditamento e eliminação de metadados; ações de exportação e importação envolvendo os documentos; usuário, data e hora de acesso ou tentativa de acesso a documentos e ao SIGAD; tentativas de acesso negado a qualquer documento; ações de eliminação de qualquer documento e seus metadados; tentativas de exportação (inclusive para backup) e importação (inclusive restore); alterações efetuadas nas permissões de acesso que afetem um dossiê/processo, documento ou usuário; infrações cometidas contra mecanismos de controle de acesso; todas as ações administrativas sobre os atributos de segurança (papéis, grupos, permissões etc.); todas as ações administrativas sobre dados de usuários (cadastro, ativação, bloqueio, atualização de dados e permissões, troca de senha etc.); todos os eventos de administração e manutenção das trilhas de auditoria (alarmes, cópias, configuração de parâmetros etc.).",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.4.2",
                            "titulo": "Identidade do usuário nos eventos",
                            "texto": "Um SIGAD tem que registrar, em cada evento auditado, informações sobre a identidade do usuário, desde que essa identificação esteja de acordo com a política de privacidade da organização e a legislação vigente.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.4.3",
                            "titulo": "Leitura restrita de trilhas",
                            "texto": "Um SIGAD tem que permitir a leitura das trilhas de auditoria apenas a usuários autorizados.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.4.4",
                            "titulo": "Disponibilidade e clareza das trilhas",
                            "texto": "Um SIGAD tem que assegurar que as informações da trilha de auditoria estejam disponíveis para inspeção, a fim de que uma ocorrência específica possa ser identificada e todas as informações correspondentes sejam claras e compreensíveis.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.4.5",
                            "titulo": "Busca nas trilhas de auditoria",
                            "texto": "É altamente desejável que um SIGAD possua mecanismos para realização de buscas nos eventos das trilhas de auditoria. Para facilitar a visualização do relatório, os resultados podem ser apresentados de modo ordenado, mas essa ordenação não pode alterar os dados incluídos na trilha.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "7.4.6",
                            "titulo": "Impedimento de modificação na trilha",
                            "texto": "Um SIGAD tem que ser capaz de impedir qualquer modificação na trilha de auditoria.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.4.7",
                            "titulo": "Exportação e transferência de trilhas",
                            "texto": "Somente administradores autorizados têm que ser capazes de exportar as trilhas de auditoria sem afetar a trilha armazenada, ou transferir as trilhas de auditoria de um suporte de armazenamento para outro. A trilha de auditoria não pode ser excluída antes da data indicada na tabela de temporalidade. Porém, a transferência implica a cópia da trilha para outro espaço de armazenamento, com a subsequente liberação do espaço original. A exportação é a cópia sem liberação do espaço.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.4.8",
                            "titulo": "Alarme por tamanho da trilha",
                            "texto": "É altamente desejável que um SIGAD seja capaz de gerar um alarme para os administradores apropriados se o tamanho da trilha de auditoria exceder um limite preestabelecido. Esse alarme deve ser usado para indicar a proximidade do esgotamento do espaço reservado à trilha de auditoria.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "7.4.9",
                            "titulo": "Bloqueio por esgotamento de espaço",
                            "texto": "Quando o espaço de armazenamento da trilha de auditoria atingir o limite preestabelecido, é altamente desejável que um SIGAD permita somente operações auditáveis originadas por administradores. Todas as outras operações estarão bloqueadas até a liberação pelo administrador.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "7.4.10",
                            "titulo": "Monitoração e detecção de violações",
                            "texto": "É altamente desejável que um SIGAD seja capaz de aplicar um conjunto de regras na monitoração de eventos auditados e, com base nelas, indicar a possível violação da segurança.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "7.4.11",
                            "titulo": "Regras para monitoração",
                            "texto": "É altamente desejável que um SIGAD garanta pelo menos as seguintes regras para monitoração dos eventos auditados: acumulação de um número predeterminado de tentativas consecutivas de login com erro (autenticação malsucedida), conforme especificado pela política de segurança; ocorrência de vários login simultâneos do mesmo usuário em locais (computadores) diferentes; login do usuário fora do horário autorizado, após logoff no período normal.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "7.4.12",
                            "titulo": "Relatórios cronológicos",
                            "texto": "Um SIGAD tem que fornecer relatórios sobre as ações que afetam classes, unidades de arquivamento e documentos, em ordem cronológica e organizados por: documento arquivístico, unidade de arquivamento ou classe; usuário; tipo de ação ou operação.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.4.13",
                            "titulo": "Relatórios por interface de acesso",
                            "texto": "Um SIGAD pode fornecer relatórios referentes a ações que afetem documentos e dossiês/processos organizados por posto de trabalho (nos casos em que for tecnicamente adequado), endereço de rede ou outra interface de acesso. Alguns sistemas podem oferecer diversas interfaces de acesso aos documentos. Por exemplo, interface web externa, interface da intranet e interface desktop. Pode ser interessante o registro da interface de acesso usada.",
                            "obrigatoriedade": "Facultativo"
                        },
                        {
                            "referencia": "7.4.14",
                            "titulo": "Configuração de eventos auditáveis",
                            "texto": "Somente administradores autorizados têm que ser capazes de configurar o conjunto de eventos auditáveis e seus atributos.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.4.15",
                            "titulo": "Arquivamento periódico de trilhas",
                            "texto": "Um SIGAD tem que ser capaz de arquivar periodicamente a trilha de auditoria como documento arquivístico.",
                            "obrigatoriedade": "Obrigatório"
                        }
                    ]
                },
                {
                    "id": "7.5",
                    "titulo": "Assinatura digital",
                    "requisitos": [
                        {
                            "referencia": "7.5.1",
                            "titulo": "Verificação de origem e integridade",
                            "texto": "É altamente desejável que um SIGAD seja capaz de prover meios para se verificar a origem e a integridade dos documentos com assinatura digital.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "7.5.2",
                            "titulo": "Gestão de certificados digitais",
                            "texto": "Somente administradores autorizados têm que ser capazes de incluir, remover ou atualizar no SIGAD os certificados digitais de computadores ou de usuários.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.5.3",
                            "titulo": "Verificação de assinatura na captura",
                            "texto": "Um SIGAD tem que ser capaz de verificar a validade da assinatura digital no momento da captura do documento.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.5.4",
                            "titulo": "Registro da verificação de assinatura",
                            "texto": "Um SIGAD, no processo de verificação da assinatura digital, tem que ser capaz de registrar, como metadado, o seguinte: validade da assinatura verificada; registro da verificação da assinatura; data e hora em que ocorreu a verificação.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.5.5",
                            "titulo": "Armazenamento de informações de certificação",
                            "texto": "É altamente desejável que um SIGAD seja capaz de armazenar, juntamente com o componente digital, conforme os metadados do e-ARQ Brasil, as informações de certificação a seguir: assinatura digital; certificado digital (cadeia de certificação) usado na verificação da assinatura.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "7.5.6",
                            "titulo": "Atualização tecnológica da plataforma criptográfica",
                            "texto": "É altamente desejável que um SIGAD seja capaz de receber atualizações tecnológicas quanto à plataforma criptográfica de assinatura digital.",
                            "obrigatoriedade": "Altamente Desejável"
                        }
                    ]
                },
                {
                    "id": "7.6",
                    "titulo": "Carimbo digital do tempo",
                    "requisitos": [
                        {
                            "referencia": "7.6.1",
                            "titulo": "Acesso a relógios e carimbador confiáveis",
                            "texto": "Um SIGAD tem que ter acesso a relógios e carimbador de tempo confiáveis para seu próprio uso.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.6.2",
                            "titulo": "Verificação de carimbo na captura",
                            "texto": "Um SIGAD tem que ser capaz de verificar a validade do carimbo digital do tempo no momento da captura do documento.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.6.3",
                            "titulo": "Registro da verificação do carimbo",
                            "texto": "Um SIGAD, no processo de verificação do carimbo digital do tempo, tem que ser capaz de registrar, nos metadados do documento, o seguinte: validade do carimbo digital do tempo; registro da verificação do carimbo digital do tempo; data e hora em que ocorreu a verificação.",
                            "obrigatoriedade": "Obrigatório"
                        }
                    ]
                },
                {
                    "id": "7.7",
                    "titulo": "Marcas d'água digitais",
                    "requisitos": [
                        {
                            "referencia": "7.7.1",
                            "titulo": "Recuperação de informação em marcas d'água",
                            "texto": "Um SIGAD tem que ser capaz de recuperar informação contida em marcas d'água digitais.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.7.2",
                            "titulo": "Armazenamento de documentos com marcas d'água",
                            "texto": "Um SIGAD tem que ser capaz de armazenar documentos arquivísticos digitais que contenham marcas d'água digitais.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.7.3",
                            "titulo": "Atualização tecnológica para marcas d'água",
                            "texto": "É altamente desejável que um SIGAD possua arquitetura capaz de receber atualizações tecnológicas no que se refere à plataforma de geração e detecção de marca d'água digital.",
                            "obrigatoriedade": "Altamente Desejável"
                        }
                    ]
                },
                {
                    "id": "7.8",
                    "titulo": "Assinatura cadastrada mediante identificação do usuário e senha",
                    "requisitos": [
                        {
                            "referencia": "7.8.1",
                            "titulo": "Garantia de autoria com senha",
                            "texto": "Um SIGAD tem que ser capaz de garantir a autoria de um documento que tenha sido autenticado por meio da identificação do autor após confirmação de senha, nos documentos produzidos e mantidos dentro do SIGAD.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.8.2",
                            "titulo": "Registro do autor como metadado",
                            "texto": "Um SIGAD tem que registrar a identificação do autor como metadado de autenticação do documento após verificação da senha do usuário.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.8.3",
                            "titulo": "Uso de checksum para integridade",
                            "texto": "É altamente desejável que um SIGAD faça uso de checksum para apoiar a verificação da integridade do documento que foi autenticado após confirmação de senha.",
                            "obrigatoriedade": "Altamente Desejável"
                        }
                    ]
                },
                {
                    "id": "7.9",
                    "titulo": "Criptografia",
                    "requisitos": [
                        {
                            "referencia": "7.9.1",
                            "titulo": "Uso de criptografia no armazenamento e transmissão",
                            "texto": "Um SIGAD tem que usar criptografia no armazenamento, na transmissão e na apresentação de documentos arquivísticos digitais ao implementar a política de sigilo.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.9.2",
                            "titulo": "Limitação de acesso a documentos cifrados",
                            "texto": "Um SIGAD tem que limitar o acesso aos documentos cifrados somente àqueles usuários portadores da chave de decifração.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.9.3",
                            "titulo": "Metadados de documentos cifrados",
                            "texto": "Um SIGAD tem que registrar os seguintes metadados sobre um documento cifrado: indicação sobre se está cifrado ou não; algoritmos usados na cifração; identificação do remetente; identificação do destinatário.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.9.4",
                            "titulo": "Captura de documentos cifrados",
                            "texto": "É altamente desejável que um SIGAD possa assegurar a captura de documentos cifrados, diretamente, de uma aplicação de software que disponha da funcionalidade de cifração.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "7.9.5",
                            "titulo": "Autorização para operações criptográficas",
                            "texto": "Somente usuários autorizados têm que ser capazes de realizar as operações a seguir: incluir, remover ou alterar parâmetros dos algoritmos criptográficos instalados no SIGAD; incluir, remover ou substituir chaves criptográficas de programas ou usuários do SIGAD; cifrar e alterar a criptografia de documentos; remover a criptografia de um documento.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.9.6",
                            "titulo": "Registro de remoção de cifração",
                            "texto": "Em caso de remoção da cifração do documento, os seguintes metadados adicionais têm que ser registrados na trilha de auditoria: data e hora da remoção da cifração; identificação do executor da operação; motivo da remoção da cifração.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.9.7",
                            "titulo": "Atualização da plataforma criptográfica",
                            "texto": "É altamente desejável que um SIGAD possua arquitetura capaz de receber atualizações tecnológicas no que se refere à plataforma criptográfica.",
                            "obrigatoriedade": "Altamente Desejável"
                        }
                    ]
                },
                {
                    "id": "7.10",
                    "titulo": "Acompanhamento de mudança de suporte ou de local",
                    "requisitos": [
                        {
                            "referencia": "7.10.1",
                            "titulo": "Histórico de mudanças de mídia",
                            "texto": "É altamente desejável que um SIGAD seja capaz de manter, para cada documento ou dossiê/processo, o histórico das mudanças de mídia sofridas por esse documento ou dossiê/processo.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "7.10.2",
                            "titulo": "Monitoramento de localização",
                            "texto": "Um SIGAD tem que fornecer um recurso de acompanhamento para monitorar e registrar informações acerca do local atual e do deslocamento de dossiês/processos digitais e não digitais.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.10.3",
                            "titulo": "Metadados de mudança de local",
                            "texto": "A função de acompanhamento de mudança de suporte ou de local tem que registrar metadados que incluam: identificador do documento atribuído pelo SIGAD; localização atual e localizações anteriores (definidas pelo usuário); data e hora do envio/deslocamento; data e hora da recepção no novo local; destinatário; usuário responsável pela mudança de suporte ou de local (sempre que for adequado); método da mudança de suporte ou de local.",
                            "obrigatoriedade": "Obrigatório"
                        }
                    ]
                },
                {
                    "id": "7.11",
                    "titulo": "Autoproteção",
                    "requisitos": [
                        {
                            "referencia": "7.11.1",
                            "titulo": "Verificação de vírus na captura",
                            "texto": "É altamente desejável que um SIGAD faça a verificação de vírus ou pragas antes da efetivação da captura.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "7.11.2",
                            "titulo": "Redução de erros e falhas",
                            "texto": "É altamente desejável que um SIGAD tenha dispositivos e procedimentos que reduzam a possibilidade de erros, falhas e descontinuidades no seu funcionamento, capazes de causar danos ou perdas aos documentos arquivísticos digitais.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "7.11.3",
                            "titulo": "Modo de manutenção após falha",
                            "texto": "Após falha ou descontinuidade do SIGAD, quando a recuperação automática não for possível, um SIGAD tem que ser capaz de entrar em modo de manutenção, no qual é oferecida a possibilidade de restaurar o SIGAD para um estado seguro. Na restauração ao estado seguro, um SIGAD deve ser capaz de garantir a recuperação de perdas ocorridas, inclusive dos documentos de transações mais recentes.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.11.4",
                            "titulo": "Consistência de dados de segurança replicados",
                            "texto": "É altamente desejável que um SIGAD garanta que os dados de segurança, quando replicados, sejam consistentes. Permissões de controle de acesso, chaves criptográficas e parâmetros de algoritmos criptográficos são exemplos de dados de segurança.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "7.11.5",
                            "titulo": "Interrupção de interação em caso de erro",
                            "texto": "Um SIGAD tem que preservar um estado seguro de funcionamento, interrompendo completamente a interação com usuários comuns, quando ocorrer um dos erros a seguir: falha de comunicação entre cliente e servidor; perda de integridade das informações de controle de acesso; falta de espaço para registro nas trilhas de auditoria.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.11.6",
                            "titulo": "Modo de manutenção por falha na trilha",
                            "texto": "Quando não for possível escrever na trilha de auditoria, é altamente desejável que um SIGAD impeça toda operação de qualquer usuário e passe para o modo de manutenção.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "7.11.7",
                            "titulo": "Código de integridade por criptografia",
                            "texto": "Um SIGAD pode atribuir a cada componente digital do documento, no momento da captura, um código de manutenção de integridade baseado em criptografia robusta.",
                            "obrigatoriedade": "Facultativo"
                        }
                    ]
                },
                {
                    "id": "7.12",
                    "titulo": "Alterar, apagar e truncar documentos arquivísticos digitais",
                    "requisitos": [
                        {
                            "referencia": "7.12.1",
                            "titulo": "Anulação de operações",
                            "texto": "Um SIGAD tem que permitir, a um administrador autorizado, anular a operação em caso de erro do usuário ou do sistema. Anular uma operação não significa apagar um documento arquivístico capturado pelo SIGAD. A anulação da eliminação definitiva de documentos, por ser irreversível, não é possível.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.12.2",
                            "titulo": "Inibição de eliminação em lote",
                            "texto": "É altamente desejável que um SIGAD, para evitar erros irrecuperáveis, iniba a eliminação (permanente ou lógica) de grupos ou lotes de documentos fora do processo regular de eliminação previsto na tabela de temporalidade e destinação de documentos.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "7.12.3",
                            "titulo": "Eliminação excepcional por administrador",
                            "texto": "Em situações excepcionais, o administrador tem que ser autorizado a apagar ou corrigir dossiês/processos, volumes e documentos. Nesse caso, um SIGAD tem que: registrar integralmente a ação de apagar ou corrigir na trilha de auditoria; produzir um relatório de anomalias para o administrador; eliminar todo o conteúdo de um dossiê/processo ou volume, quando forem eliminados; garantir que nenhum documento seja eliminado se tal ação resultar na alteração de outro documento arquivístico; informar o administrador sobre a existência de ligação entre um dossiê/processo ou documento prestes a ser apagado e qualquer outro dossiê/processo ou documento, solicitando confirmação antes de concluir a operação; manter a integridade total do metadado, a qualquer momento.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.12.4",
                            "titulo": "Correção de erros em metadados",
                            "texto": "Em caso de erro na inserção de metadados, o administrador terá que corrigi-lo, e o SIGAD tem que registrar essa ação na trilha de auditoria.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.12.5",
                            "titulo": "Cópia truncada de documentos",
                            "texto": "Um SIGAD tem que permitir a um usuário autorizado fazer uma cópia truncada de um documento, com o objetivo de não alterar o original. Se o SIGAD não fornecer, diretamente, esses recursos, tem que permitir que outros pacotes de software os proporcionem.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.12.6",
                            "titulo": "Ocultação de informação sigilosa",
                            "texto": "Um SIGAD tem que possibilitar a ocultação de informação sigilosa contida no documento original, permitindo: • retirada de páginas de um documento; • adição de retângulos opacos para ocultar nomes ou palavras sensíveis; • quaisquer outros recursos necessários para formatos de vídeo ou áudio, caso existam. É essencial que, quando os recursos para truncar documentos forem empregados, nenhuma informação retirada ou ocultada seja passível de visualização na cópia truncada, na tela, nem quando impressa ou reproduzida por meios audiovisuais, independentemente da utilização de quaisquer recursos, tais como rotação, variação focal ou qualquer outra manipulação.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.12.7",
                            "titulo": "Registro de produção de cópia truncada",
                            "texto": "Quando uma cópia truncada é produzida, um SIGAD tem que registrar essa ação nos metadados do documento e da cópia truncada, incluindo, pelo menos, data, hora, motivo e quem a produziu.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "7.12.8",
                            "titulo": "Referência cruzada a cópia truncada",
                            "texto": "É altamente desejável que um SIGAD registre uma referência cruzada a uma cópia truncada nos mesmos dossiês/processos e documentos em que se encontra o documento original.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "7.12.9",
                            "titulo": "Auditoria de alterações",
                            "texto": "Um SIGAD tem que armazenar, na trilha de auditoria, qualquer alteração efetuada para satisfazer os requisitos desta seção.",
                            "obrigatoriedade": "Obrigatório"
                        }
                    ]
                }
            ]
        },
        {
            "id": "preservacao",
            "titulo": "8. Preservação",
            "icone": "settings",
            "totalRequisitos": 19,
            "subsecoes": [
                {
                    "id": "8.1",
                    "titulo": "Aspectos físicos",
                    "requisitos": [
                        {
                            "referencia": "8.1.1",
                            "titulo": "Condições ambientais para suportes",
                            "texto": "Os suportes de armazenamento de um SIGAD têm que ser acondicionados, manipulados e utilizados em condições ambientais compatíveis com sua vida útil prevista e/ou pretendida, de acordo com as especificações técnicas do fabricante e de entidades isentas, e com base em estatísticas de uso. A vida útil pretendida de um suporte pode ser menor que sua vida útil prevista, o que permite condições ambientais mais flexíveis.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "8.1.2",
                            "titulo": "Especificação da vida útil dos suportes",
                            "texto": "É altamente desejável que um SIGAD permita ao administrador especificar a vida útil prevista/pretendida dos suportes.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "8.1.3",
                            "titulo": "Controle da vida útil dos suportes",
                            "texto": "Um SIGAD tem que permitir o controle da vida útil dos suportes para auxiliar a implementação da estratégia de atualização de suportes.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "8.1.4",
                            "titulo": "Informe automático sobre fim de vida útil",
                            "texto": "É altamente desejável que um SIGAD informe, automaticamente, quais são os suportes cuja vida útil se encontra perto do fim.",
                            "obrigatoriedade": "Altamente Desejável"
                        }
                    ]
                },
                {
                    "id": "8.2",
                    "titulo": "Aspectos lógicos",
                    "requisitos": [
                        {
                            "referencia": "8.2.1",
                            "titulo": "Manutenção de cópias de segurança",
                            "texto": "Um SIGAD tem que manter cópias de segurança. As cópias de segurança devem ser guardadas em ambientes seguros, em locais diferentes de onde se encontra a informação original.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "8.2.2",
                            "titulo": "Verificação periódica de dados",
                            "texto": "Um SIGAD tem que possuir funcionalidades para verificação periódica dos dados e documentos armazenados, visando à detecção de possíveis erros. Nesse caso, recomenda-se o uso de um checksum robusto, ou seja, que permita a constatação da integridade dos dados e seja seguro quanto a fraudes.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "8.2.3",
                            "titulo": "Substituição de dados com erros",
                            "texto": "Um SIGAD tem que permitir a substituição dos dados e documentos armazenados que apresentarem erros.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "8.2.4",
                            "titulo": "Correção de erros detectados",
                            "texto": "Um SIGAD pode permitir a correção dos erros detectados nos dados e documentos armazenados. Nesse contexto, a correção de erros refere-se à restauração de dados corrompidos.",
                            "obrigatoriedade": "Facultativo"
                        },
                        {
                            "referencia": "8.2.5",
                            "titulo": "Informe dos resultados de verificação",
                            "texto": "É altamente desejável que um SIGAD informe os resultados da verificação periódica dos dados armazenados, incluindo os erros detectados, bem como as substituições e correções de dados realizadas.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "8.2.6",
                            "titulo": "Histórico de verificações",
                            "texto": "É altamente desejável que um SIGAD mantenha um histórico dos resultados da verificação periódica dos dados e documentos armazenados.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "8.2.7",
                            "titulo": "Ações de preservação contra obsolescência",
                            "texto": "Ações de preservação têm que ser efetivadas sempre que se torne patente ou previsível a obsolescência da tecnologia utilizada pelo SIGAD.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "8.2.8",
                            "titulo": "Transferência em bloco de documentos",
                            "texto": "Um SIGAD tem que suportar a transferência em bloco de documentos (incluindo as demais informações associadas a cada documento) para outros suportes e/ou sistemas, de acordo com as normas aplicáveis aos formatos utilizados.",
                            "obrigatoriedade": "Obrigatório"
                        }
                    ]
                },
                {
                    "id": "8.3",
                    "titulo": "Aspectos gerais",
                    "requisitos": [
                        {
                            "referencia": "8.3.1",
                            "titulo": "Registro de operações de preservação",
                            "texto": "Um SIGAD tem que registrar, em trilhas de auditoria, as operações de preservação realizadas.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "8.3.2",
                            "titulo": "Uso de recursos maduros e estáveis",
                            "texto": "É altamente desejável que um SIGAD utilize suportes de armazenamento e recursos de hardware e software que sejam maduros, estáveis no mercado e amplamente disponíveis.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "8.3.3",
                            "titulo": "Verificação de modificações em ambiente exclusivo",
                            "texto": "As modificações em um SIGAD e em sua base tecnológica têm que ser verificadas num ambiente exclusivo para essa finalidade, de modo a garantir que, após a implantação das alterações, os dados continuem sendo acessados sem alteração de conteúdo.",
                            "obrigatoriedade": "Obrigatório"
                        },
                        {
                            "referencia": "8.3.4",
                            "titulo": "Uso de normas abertas",
                            "texto": "É altamente desejável que um SIGAD utilize normas amplamente aceitas, descritas em especificações abertas e disponíveis publicamente, no que se refere a estruturas para codificação, armazenamento e banco de dados.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "8.3.5",
                            "titulo": "Evitar estruturas proprietárias",
                            "texto": "É altamente desejável que um SIGAD evite o uso de estruturas proprietárias para codificação, armazenamento ou banco de dados. Caso venha a utilizá-las, devem estar plenamente documentadas, e essa documentação, disponível para o administrador.",
                            "obrigatoriedade": "Altamente Desejável"
                        },
                        {
                            "referencia": "8.3.6",
                            "titulo": "Gestão de metadados de preservação",
                            "texto": "Um SIGAD tem que gerir metadados relativos à preservação dos documentos e seus respectivos componentes.",
                            "obrigatoriedade": "Obrigatório"
                        }
                    ]
                }
            ]
        }
    ]
};
