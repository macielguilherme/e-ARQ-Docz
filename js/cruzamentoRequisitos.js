// ============================================================
// CRUZAMENTO DE REQUISITOS E-ARQ BRASIL × DocZ
// BASEADO NO RELATÓRIO TÉCNICO OFICIAL - 21/08/2026
// ============================================================
// CONFORMIDADE GERAL: 87,01% (152/177 atendidos)
// REQUISITOS AVALIÁVEIS: 157 - CONFORMIDADE: 98,09%
// ============================================================

const cruzamentoRequisitos = {};

// ============================================================
// FUNÇÃO AUXILIAR
// ============================================================
function criarRequisito(id, titulo, descricao, status, justificativa, grupo, capitulo, secao, subsecao) {
    return {
        id,
        titulo,
        descricao,
        status,
        justificativa: justificativa || '',
        grupo: grupo || 'e-ARQ Obrigatório',
        capitulo: capitulo || '',
        secao: secao || '',
        subsecao: subsecao || '',
        evidencias: {
            descricao: justificativa || '',
            prints: []
        },
        responsavel: "",
        dataValidacao: "2026-08-21",
        observacoes: [],
        bugs: []
    };
}

// ============================================================
// CAPÍTULO 1 - PLANO DE CLASSIFICAÇÃO
// ============================================================

// Seção 1.1 - Configuração e administração do plano de classificação
cruzamentoRequisitos["1.1.1"] = criarRequisito(
    "1.1.1",
    "Inclusão e compatibilidade com o plano de classificação",
    "Um SIGAD tem que incluir e ser compatível com o plano de classificação do órgão ou entidade, com as seguintes informações: identificador da classe; nome da classe; código da classe; subordinação da classe; indicação de permissão de uso; indicação de classe ativa/inativa. O plano de classificação dos integrantes do SINAR deve estar de acordo com a legislação e ser aprovado pela instituição arquivística na esfera de competência específica.",
    "Atendido",
    "O sistema possui a rotina Gestão Documental > Tabela de Temporalidade com todos os campos exigidos.",
    "e-ARQ Obrigatório",
    "1",
    "1.1",
    "Configuração e administração do plano de classificação"
);

cruzamentoRequisitos["1.1.2"] = criarRequisito(
    "1.1.2",
    "Criação hierárquica de classes",
    "Um SIGAD tem que garantir a criação de classes, subclasses, grupos e subgrupos nos níveis do plano de classificação de acordo com o método de codificação adotado.",
    "Atendido",
    "O sistema permite a criação de classes, subclasses, grupos e subgrupos através da estrutura hierárquica.",
    "e-ARQ Obrigatório",
    "1",
    "1.1",
    "Configuração e administração do plano de classificação"
);

cruzamentoRequisitos["1.1.3"] = criarRequisito(
    "1.1.3",
    "Adição de novas classes",
    "Um SIGAD tem que permitir a usuários autorizados acrescentar novas classes sempre que necessário.",
    "Atendido",
    "A rotina disponibiliza o botão NOVO na Tabela de Temporalidade.",
    "e-ARQ Obrigatório",
    "1",
    "1.1",
    "Configuração e administração do plano de classificação"
);

cruzamentoRequisitos["1.1.7"] = criarRequisito(
    "1.1.7",
    "Inativação de classes",
    "Um SIGAD tem que permitir que apenas usuários autorizados tornem inativa uma classe em que não sejam mais classificados documentos.",
    "Atendido",
    "O campo Ativo permite controlar a disponibilidade da classe, restrito a usuários autorizados.",
    "e-ARQ Obrigatório",
    "1",
    "1.1",
    "Configuração e administração do plano de classificação"
);

cruzamentoRequisitos["1.1.11"] = criarRequisito(
    "1.1.11",
    "Mecanismos de atribuição de identificadores",
    "Um SIGAD tem que disponibilizar pelo menos dois mecanismos de atribuição de identificadores a classes do plano de classificação, prevendo a possibilidade de se utilizarem ambos, separadamente ou em conjunto, na mesma aplicação:\n• atribuição de um código numérico ou alfanumérico;\n• atribuição de um termo que identifique cada classe.",
    "Atendido",
    "O sistema disponibiliza dois mecanismos: Código de Classificação e Assunto.",
    "e-ARQ Obrigatório",
    "1",
    "1.1",
    "Configuração e administração do plano de classificação"
);

cruzamentoRequisitos["1.1.16"] = criarRequisito(
    "1.1.16",
    "Importação e exportação do plano de classificação",
    "É altamente desejável que um SIGAD seja capaz de importar e exportar, total ou parcialmente, um plano de classificação. Ver capítulo 13 – Interoperabilidade",
    "Atendido",
    "O sistema disponibiliza EXPORTAR DADOS (.xlsx) e IMPORTAR com modelo de planilha disponível.",
    "e-ARQ Desejável",
    "1",
    "1.1",
    "Configuração e administração do plano de classificação"
);

cruzamentoRequisitos["1.1.17"] = criarRequisito(
    "1.1.17",
    "Relatórios do plano de classificação",
    "Um SIGAD tem que prover funcionalidades para elaboração de relatórios de apoio à gestão do plano de classificação, incluindo a capacidade de: gerar relatório completo do plano de classificação; gerar relatório parcial do plano de classificação a partir de um ponto determinado na hierarquia; gerar relatório dos documentos ou dossiês/processos classificados em uma ou mais classes do plano de classificação; gerar relatório de documentos classificados por unidade administrativa.",
    "Atendido",
    "Através da funcionalidade EXPORTAR DADOS, o sistema gera relatórios em Excel com todas as informações.",
    "e-ARQ Obrigatório",
    "1",
    "1.1",
    "Configuração e administração do plano de classificação"
);

// Seção 1.2 - Tabela de temporalidade e destinação
cruzamentoRequisitos["1.2.1"] = criarRequisito(
    "1.2.1",
    "Definição e manutenção de tabela de temporalidade",
    "Um SIGAD tem que prover funcionalidades para definição e manutenção de tabela de temporalidade e destinação de documentos, associada ao plano de classificação do órgão ou entidade.",
    "Atendido",
    "O sistema possui a rotina Tabela de Temporalidade com todos os campos exigidos.",
    "e-ARQ Obrigatório",
    "1",
    "1.2",
    "Tabela de temporalidade e destinação"
);

cruzamentoRequisitos["1.2.2"] = criarRequisito(
    "1.2.2",
    "Informações da tabela de temporalidade",
    "Um SIGAD tem que manter tabela de temporalidade e destinação de documentos com as seguintes informações: identificador da classe; prazo de guarda na idade corrente; evento que determina o início de contagem do prazo de retenção na idade corrente; prazo de guarda na idade intermediária; evento que determina o início de contagem do prazo de retenção na idade intermediária; destinação final; sigilo associado à classe; observações. A tabela de temporalidade e destinação de documentos dos integrantes do SINAR deve estar de acordo com a legislação e ser aprovada pela instituição arquivística na específica esfera de competência.",
    "Atendido",
    "A Tabela de Temporalidade do DocZ contempla todos os campos exigidos.",
    "e-ARQ Obrigatório",
    "1",
    "1.2",
    "Tabela de temporalidade e destinação"
);

cruzamentoRequisitos["1.2.3"] = criarRequisito(
    "1.2.3",
    "Situações para destinação",
    "Um SIGAD tem que prever, pelo menos, as seguintes situações para destinação: apresentação dos documentos para reavaliação em data futura; eliminação; exportação para transferência; exportação para recolhimento (guarda permanente).",
    "Atendido",
    "O sistema prevê as quatro situações de destinação exigidas.",
    "e-ARQ Obrigatório",
    "1",
    "1.2",
    "Tabela de temporalidade e destinação"
);

cruzamentoRequisitos["1.2.4"] = criarRequisito(
    "1.2.4",
    "Iniciação automática da contagem dos prazos de guarda",
    "Um SIGAD tem que prever a iniciação automática da contagem dos prazos de guarda referenciados na tabela de temporalidade e destinação de documentos, pelo menos, a partir dos seguintes eventos: abertura de dossiê/processo; arquivamento de dossiê/processo; desarquivamento de dossiê/processo; inclusão de documento sigiloso em um dossiê/processo, se aplicável. Acontecimentos específicos, descritos na tabela de temporalidade e destinação como, por exemplo, \"cinco anos a contar da data de aprovação das contas\", quando não puderem ser detectados automaticamente pelo sistema, deverão ser informados ao SIGAD por usuário autorizado.",
    "Atendido",
    "O sistema inicia automaticamente a contagem dos prazos de guarda a partir dos eventos definidos.",
    "e-ARQ Obrigatório",
    "1",
    "1.2",
    "Tabela de temporalidade e destinação"
);

cruzamentoRequisitos["1.2.7"] = criarRequisito(
    "1.2.7",
    "Alteração de prazo ou destinação",
    "Um SIGAD tem que permitir que um usuário autorizado altere o prazo ou destinação prevista em um item da tabela de temporalidade e destinação de documentos e garantir que a alteração tenha efeito em todos os documentos ou dossiês/processos associados àquele item. As alterações na tabela de temporalidade e destinação só poderão ser feitas como resultado de um processo de reavaliação realizado pela comissão de avaliação do órgão ou entidade em virtude de mudança do contexto administrativo, jurídico ou cultural. Os integrantes do SINAR deverão ainda ter suas tabelas aprovadas pela instituição arquivística na específica esfera de competência.",
    "Atendido",
    "O sistema permite a alteração de prazos e destinação por usuários autorizados, com efeito em todos os documentos associados.",
    "e-ARQ Obrigatório",
    "1",
    "1.2",
    "Tabela de temporalidade e destinação"
);

cruzamentoRequisitos["1.2.8"] = criarRequisito(
    "1.2.8",
    "Histórico de alterações da tabela de temporalidade",
    "É altamente desejável que um SIGAD seja capaz de manter o histórico das alterações realizadas na tabela de temporalidade e destinação de documentos.",
    "Atendido",
    "O Histórico de Alterações da Tabela de Temporalidade registra todas as modificações.",
    "e-ARQ Desejável",
    "1",
    "1.2",
    "Tabela de temporalidade e destinação"
);

cruzamentoRequisitos["1.2.9"] = criarRequisito(
    "1.2.9",
    "Importação e exportação da tabela de temporalidade",
    "É altamente desejável que um SIGAD seja capaz de importar e exportar total ou parcialmente uma tabela de temporalidade e destinação de documento. Ver capítulo 13 – Interoperabilidade",
    "Atendido",
    "O sistema disponibiliza funcionalidades de importação e exportação da tabela de temporalidade.",
    "e-ARQ Desejável",
    "1",
    "1.2",
    "Tabela de temporalidade e destinação"
);

cruzamentoRequisitos["1.2.10"] = criarRequisito(
    "1.2.10",
    "Relatórios da tabela de temporalidade",
    "Um SIGAD tem que prover funcionalidades para elaboração de relatórios que apoiem a gestão da tabela de temporalidade e destinação, incluindo a capacidade de: gerar relatório completo da tabela de temporalidade e destinação de documentos; gerar relatório parcial da tabela de temporalidade e destinação de documentos a partir de um ponto determinado na hierarquia do plano de classificação; gerar relatório dos documentos ou dossiês/processos aos quais foi atribuído um determinado prazo de guarda.",
    "Atendido",
    "O sistema gera relatórios completo, parcial e por prazo de guarda da tabela de temporalidade.",
    "e-ARQ Obrigatório",
    "1",
    "1.2",
    "Tabela de temporalidade e destinação"
);

// Seção 1.3 - Classificação
cruzamentoRequisitos["1.3.1"] = criarRequisito(
    "1.3.1",
    "Classificação somente em classes autorizadas",
    "Um SIGAD tem que permitir a classificação das unidades de arquivamento somente nas classes autorizadas. Ver requisito 1.1.12",
    "Atendido",
    "O sistema restringe a classificação às classes autorizadas conforme o campo Permitir Seleção.",
    "e-ARQ Obrigatório",
    "1",
    "1.3",
    "Classificação"
);

cruzamentoRequisitos["1.3.9"] = criarRequisito(
    "1.3.9",
    "Reclassificação de unidades de arquivamento",
    "Um SIGAD tem que permitir que uma unidade de arquivamento e seus respectivos volumes e/ou documentos sejam reclassificados por um usuário autorizado e que todos os documentos já inseridos permaneçam nas unidades de arquivamento e nos volumes que estão sendo transferidos, mantendo a relação entre documentos, volumes e unidades de arquivamento.",
    "Atendido",
    "O sistema permite a reclassificação mantendo a relação entre documentos, volumes e unidades de arquivamento.",
    "e-ARQ Obrigatório",
    "1",
    "1.3",
    "Classificação"
);

cruzamentoRequisitos["1.3.13"] = criarRequisito(
    "1.3.13",
    "Associação automática de prazo e destinação",
    "Um SIGAD tem que associar, automaticamente, ao dossiê/processo o prazo e a destinação previstos na classe em que o documento foi inserido.",
    "Atendido",
    "O sistema associa automaticamente o prazo e destinação da classe ao dossiê/processo.",
    "e-ARQ Obrigatório",
    "1",
    "1.3",
    "Classificação"
);

// ============================================================
// CAPÍTULO 2 - CAPTURA
// ============================================================

cruzamentoRequisitos["2.1.1"] = criarRequisito(
    "2.1.1",
    "Funções de captura",
    "A captura tem que garantir a execução das seguintes funções: registrar e gerenciar todos os documentos não digitais; registrar e gerenciar todos os documentos digitais ou híbridos, independentemente do contexto tecnológico; classificar todos os documentos de acordo com o plano ou código de classificação; controlar e validar a introdução de metadados.",
    "Atendido",
    "O sistema executa todas as funções de captura exigidas.",
    "e-ARQ Obrigatório",
    "2",
    "2.1",
    "Captura"
);

cruzamentoRequisitos["2.1.3"] = criarRequisito(
    "2.1.3",
    "Captura de componentes digitais",
    "Um SIGAD tem que ser capaz de capturar e manter todos os componentes digitais do documento. Os componentes digitais armazenam informações de conteúdo, da forma documental e as relações entre elas.",
    "Atendido",
    "O sistema captura e mantém todos os componentes digitais do documento.",
    "e-ARQ Obrigatório",
    "2",
    "2.1",
    "Captura"
);

cruzamentoRequisitos["2.1.4"] = criarRequisito(
    "2.1.4",
    "Registro de metadados em conformidade",
    "Um SIGAD tem que permitir o registro dos metadados em conformidade com o indicado na seção a eles dedicada nesse modelo de requisitos e garantir que se mantenham associados ao documento, componente digital ou classe.",
    "Parcialmente Atendido",
    "Dicionário de dados fornecido não indica localização do metadado em banco ou API.",
    "e-ARQ Obrigatório",
    "2",
    "2.1",
    "Captura"
);
cruzamentoRequisitos["2.1.4"].observacoes = ["Dicionário de dados não indica localização do metadado em banco ou API."];

cruzamentoRequisitos["2.1.5"] = criarRequisito(
    "2.1.5",
    "Inserção de metadados obrigatórios na captura",
    "Um SIGAD tem que prever a inserção dos metadados obrigatórios, previstos em legislação específica na devida esfera e âmbito de competência, no momento da captura de processos.",
    "Atendido",
    "O sistema prevê a inserção dos metadados obrigatórios no momento da captura.",
    "e-ARQ Obrigatório",
    "2",
    "2.1",
    "Captura"
);

cruzamentoRequisitos["2.1.6"] = criarRequisito(
    "2.1.6",
    "Atribuição de número identificador",
    "Um SIGAD tem que ser capaz de atribuir um número identificador a cada dossiê/processo e documento capturado, que serve para identificá-lo desde o momento da captura até sua destinação final no SIGAD.",
    "Atendido",
    "O sistema atribui um número identificador único a cada dossiê/processo e documento capturado.",
    "e-ARQ Obrigatório",
    "2",
    "2.1",
    "Captura"
);

cruzamentoRequisitos["2.1.10"] = criarRequisito(
    "2.1.10",
    "Uso de tesauro ou vocabulário controlado",
    "É altamente desejável que um SIGAD utilize tesauro ou vocabulário controlado para apoiar a atribuição do metadado assunto/descritor. No caso da administração pública federal, deve ser utilizada a Lista de Assuntos de Governo, conforme orientação dos Padrões de Interoperabilidade de Governo Eletrônico (e-Ping).",
    "Atendido",
    "O sistema utiliza vocabulário controlado para apoio à atribuição de metadados.",
    "e-ARQ Desejável",
    "2",
    "2.1",
    "Captura"
);

cruzamentoRequisitos["2.1.11"] = criarRequisito(
    "2.1.11",
    "Inserção de metadados por usuários autorizados",
    "Um SIGAD tem que garantir que os metadados associados a um documento sejam inseridos somente por usuários autorizados.",
    "Atendido",
    "O sistema restringe a inserção de metadados a usuários autorizados.",
    "e-ARQ Obrigatório",
    "2",
    "2.1",
    "Captura"
);

cruzamentoRequisitos["2.1.12"] = criarRequisito(
    "2.1.12",
    "Alteração de metadados por usuários autorizados",
    "Um SIGAD tem que garantir que os metadados associados a um documento sejam alterados somente por usuários autorizados e devidamente registrados em trilhas de auditoria.",
    "Atendido",
    "O sistema restringe a alteração de metadados a usuários autorizados e registra em trilha de auditoria.",
    "e-ARQ Obrigatório",
    "2",
    "2.1",
    "Captura"
);

cruzamentoRequisitos["2.1.15"] = criarRequisito(
    "2.1.15",
    "Inserção de metadados após a captura",
    "Um SIGAD tem que garantir a inserção de outros metadados após a captura. Por exemplo, data e hora de alteração e mudança de suporte.",
    "Atendido",
    "O sistema permite a inserção de metadados adicionais após a captura.",
    "e-ARQ Obrigatório",
    "2",
    "2.1",
    "Captura"
);

cruzamentoRequisitos["2.1.19"] = criarRequisito(
    "2.1.19",
    "Documentos com múltiplos componentes digitais",
    "No caso de documentos constituídos por mais de um componente digital, o SIGAD tem que: tratar o documento como uma unidade indivisível, assegurando a relação entre os componentes digitais; preservar a integridade do documento, mantendo a relação entre os componentes digitais; garantir a integridade do documento quando de sua recuperação, visualização e gestão posteriores; gerenciar a destinação de todos os componentes digitais que compõem o documento como uma unidade indivisível.",
    "Atendido",
    "O sistema trata documentos com múltiplos componentes digitais como uma unidade indivisível.",
    "e-ARQ Obrigatório",
    "2",
    "2.1",
    "Captura"
);

cruzamentoRequisitos["2.2.1"] = criarRequisito(
    "2.2.1",
    "Captura em lote",
    "Um SIGAD tem que proporcionar a captura em lote de documentos gerados por outros sistemas. Esse procedimento tem que: permitir a importação de transações predefinidas de arquivos em lote; registrar, automaticamente, cada um dos documentos importados contidos no lote; permitir e controlar a edição do registro dos documentos importados; validar a integridade dos metadados. Exemplos de lotes de documento: mensagens de correio eletrônico, correspondência digitalizada por meio de escâner, documentos provenientes de um departamento, grupo ou indivíduo, transações de aplicações de um computador ou, ainda, documentos oriundos de um sistema de gestão de documentos ou sistema de negócio.",
    "Atendido",
    "O sistema proporciona captura em lote com todas as funcionalidades exigidas.",
    "e-ARQ Obrigatório",
    "2",
    "2.2",
    "Captura em lote"
);

cruzamentoRequisitos["2.4.1"] = criarRequisito(
    "2.4.1",
    "Captura de documentos não digitais",
    "O SIGAD tem que ser capaz de capturar também os documentos não digitais e/ou híbridos.",
    "Atendido",
    "O sistema é capaz de capturar documentos não digitais e híbridos.",
    "e-ARQ Obrigatório",
    "2",
    "2.4",
    "Documentos não digitais e híbridos"
);

cruzamentoRequisitos["2.4.2"] = criarRequisito(
    "2.4.2",
    "Informações de localização de documentos não digitais",
    "O SIGAD tem que acrescentar aos metadados dos documentos não digitais informações sobre sua localização. Essa informação só será acessada por usuários autorizados.",
    "Atendido",
    "O sistema permite o registro de localização de documentos não digitais, com restrição de acesso.",
    "e-ARQ Obrigatório",
    "2",
    "2.4",
    "Documentos não digitais e híbridos"
);

cruzamentoRequisitos["2.4.3"] = criarRequisito(
    "2.4.3",
    "Tratamento da parte digital de documentos híbridos",
    "O SIGAD tem que garantir que a parte digital de um documento ou processo/dossiê híbrido seja tratada de forma análoga aos documentos ou processos/dossiês inteiramente digitais.",
    "Atendido",
    "O sistema trata a parte digital de documentos híbridos de forma análoga aos documentos digitais.",
    "e-ARQ Obrigatório",
    "2",
    "2.4",
    "Documentos não digitais e híbridos"
);

cruzamentoRequisitos["2.5.1"] = criarRequisito(
    "2.5.1",
    "Captura de diferentes formatos de arquivo",
    "Um SIGAD tem que possuir a capacidade de capturar documentos com diferentes formatos de arquivo e estruturas.",
    "Atendido",
    "O sistema é capaz de capturar documentos em diferentes formatos de arquivo.",
    "e-ARQ Obrigatório",
    "2",
    "2.5",
    "Formatos de arquivo"
);

cruzamentoRequisitos["2.5.4"] = criarRequisito(
    "2.5.4",
    "Inclusão de novos formatos de arquivo",
    "Um SIGAD tem que ser capaz de incluir novos formatos de arquivos à medida que forem sendo adotados pelo órgão ou entidade.",
    "Atendido",
    "O sistema permite a inclusão de novos formatos de arquivo conforme necessário.",
    "e-ARQ Obrigatório",
    "2",
    "2.5",
    "Formatos de arquivo"
);

cruzamentoRequisitos["2.6.3"] = criarRequisito(
    "2.6.3",
    "Impedimento de alteração de conteúdo",
    "Um SIGAD tem que impedir que o conteúdo de um documento seja alterado por usuários e administradores, exceto se a alteração fizer parte do processo documental. Ver seção 7.12 (e-ARQ) – Alterar, apagar e truncar documentos arquivísticos digitais",
    "Atendido",
    "O sistema impede a alteração de conteúdo de documentos, exceto quando parte do processo documental.",
    "e-ARQ Obrigatório",
    "2",
    "2.6",
    "Integridade documental"
);

cruzamentoRequisitos["2.6.4"] = criarRequisito(
    "2.6.4",
    "Aviso de captura de documento incompleto",
    "É altamente desejável que um SIGAD possa emitir um aviso caso se tente capturar um documento incompleto ou inconsistente a ponto de comprometer sua futura autenticidade. Por exemplo, uma correspondência sem assinatura digital válida ou uma fatura de fornecedor não identificado.",
    "Atendido",
    "O sistema emite aviso ao tentar capturar documento incompleto ou inconsistente.",
    "e-ARQ Desejável",
    "2",
    "2.6",
    "Integridade documental"
);

// ============================================================
// CAPÍTULO 3 - DESTINAÇÃO
// ============================================================

cruzamentoRequisitos["3.1.1"] = criarRequisito(
    "3.1.1",
    "Recursos integrados para ações de destinação",
    "Um SIGAD tem que fornecer recursos integrados à tabela de temporalidade e destinação de documentos para implementar as ações de destinação.",
    "Atendido",
    "O sistema fornece recursos integrados para implementar ações de destinação.",
    "e-ARQ Obrigatório",
    "3",
    "3.1",
    "Destinação"
);

cruzamentoRequisitos["3.1.2"] = criarRequisito(
    "3.1.2",
    "Acompanhamento automático dos prazos de guarda",
    "Para cada dossiê/processo, um SIGAD tem que acompanhar automaticamente os prazos de guarda determinados para a classe à qual pertence.",
    "Atendido",
    "O sistema acompanha automaticamente os prazos de guarda de cada dossiê/processo.",
    "e-ARQ Obrigatório",
    "3",
    "3.1",
    "Destinação"
);

cruzamentoRequisitos["3.1.3"] = criarRequisito(
    "3.1.3",
    "Informação sobre documentos que cumpriram prazo de guarda",
    "Um SIGAD tem que prover funcionalidades para informar ao usuário autorizado sobre os documentos ou dossiês/processos que já cumpriram ou estão para cumprir o prazo de guarda previsto.",
    "Atendido",
    "O sistema informa ao usuário autorizado sobre documentos que cumpriram ou estão para cumprir o prazo de guarda.",
    "e-ARQ Obrigatório",
    "3",
    "3.1",
    "Destinação"
);

cruzamentoRequisitos["3.2.1"] = criarRequisito(
    "3.2.1",
    "Exportação de documentos para outro sistema",
    "Um SIGAD tem que ser capaz de exportar documentos e dossiês/processos digitais e seus metadados para outro sistema dentro ou fora do órgão ou entidade.",
    "Atendido",
    "O sistema é capaz de exportar documentos e metadados para outro sistema.",
    "e-ARQ Obrigatório",
    "3",
    "3.2",
    "Exportação"
);

cruzamentoRequisitos["3.2.2"] = criarRequisito(
    "3.2.2",
    "Exportação para transferência ou recolhimento",
    "Quando um SIGAD exportar os documentos e dossiês/processos de uma classe para executar uma ação de transferência ou recolhimento, tem que ser capaz de exportar todos os documentos e dossiês/processos da classe incluídos na ação de destinação, com seus respectivos volumes, documentos e metadados associados.",
    "Não Avaliado",
    "Requisito não avaliado por depender de etapa posterior do projeto.",
    "e-ARQ Obrigatório",
    "3",
    "3.2",
    "Exportação"
);

cruzamentoRequisitos["3.2.5"] = criarRequisito(
    "3.2.5",
    "Exportação de metadados em padrões de interoperabilidade",
    "É altamente desejável que um SIGAD seja capaz de exportar metadados nos formatos previstos em padrões de interoperabilidade de governo.",
    "Atendido",
    "O sistema exporta metadados nos formatos previstos em padrões de interoperabilidade.",
    "e-ARQ Desejável",
    "3",
    "3.2",
    "Exportação"
);

cruzamentoRequisitos["3.2.6"] = criarRequisito(
    "3.2.6",
    "Exportação de todos os tipos de documentos",
    "Um SIGAD tem que ser capaz de exportar todos os tipos de documentos que está apto a capturar.",
    "Atendido",
    "O sistema é capaz de exportar todos os tipos de documentos que captura.",
    "e-ARQ Obrigatório",
    "3",
    "3.2",
    "Exportação"
);

cruzamentoRequisitos["3.2.10"] = criarRequisito(
    "3.2.10",
    "Listagem para descrever documentos exportados",
    "Um SIGAD tem que gerar listagem para descrever documentos e dossiês/processos digitais que estão sendo exportados. Este requisito se aplica principalmente nos casos em que é feita exportação para transferência ou recolhimento a uma instituição arquivística pública. Nesse caso, a listagem deverá ser produzida na forma documental estabelecida pela instituição arquivística recebedora.",
    "Atendido",
    "O sistema gera listagem para descrever documentos exportados.",
    "e-ARQ Obrigatório",
    "3",
    "3.2",
    "Exportação"
);

cruzamentoRequisitos["3.2.11"] = criarRequisito(
    "3.2.11",
    "Inclusão de metadados para arquivo permanente",
    "É altamente desejável que um SIGAD possibilite a inclusão de metadados necessários à gestão do arquivo permanente nos documentos e dossiês/processos que serão exportados para recolhimento.",
    "Atendido",
    "O sistema possibilita a inclusão de metadados para arquivo permanente.",
    "e-ARQ Desejável",
    "3",
    "3.2",
    "Exportação"
);

cruzamentoRequisitos["3.3.1"] = criarRequisito(
    "3.3.1",
    "Restrição da função de eliminação",
    "Um SIGAD tem que restringir a função de eliminação de documentos ou dossiês/processos somente a usuários autorizados.",
    "Atendido",
    "O sistema restringe a função de eliminação a usuários autorizados.",
    "e-ARQ Obrigatório",
    "3",
    "3.3",
    "Eliminação"
);

cruzamentoRequisitos["3.3.3"] = criarRequisito(
    "3.3.3",
    "Impedimento de eliminação fora da tabela de temporalidade",
    "Um SIGAD tem que impedir sempre a eliminação de uma unidade de arquivamento digital ou de qualquer parte de seu conteúdo, a não ser quando estiver de acordo com a tabela de temporalidade e destinação de documentos. A eliminação será devidamente registrada em trilha de auditoria.",
    "Atendido",
    "O sistema impede eliminação fora da tabela de temporalidade e registra em trilha de auditoria.",
    "e-ARQ Obrigatório",
    "3",
    "3.3",
    "Eliminação"
);

cruzamentoRequisitos["3.3.5"] = criarRequisito(
    "3.3.5",
    "Eliminação irreversível",
    "É altamente desejável que um SIGAD permita a eliminação de documentos ou dossiês/processos de forma irreversível a fim de que não possam ser restaurados por meio da utilização normal do SIGAD, nem por meio de rotinas auxiliares do sistema operacional, nem por aplicações especiais de recuperação de dados.",
    "Não Avaliado",
    "Requisito não avaliado por depender de etapa posterior do projeto.",
    "e-ARQ Desejável",
    "3",
    "3.3",
    "Eliminação"
);

cruzamentoRequisitos["3.3.6"] = criarRequisito(
    "3.3.6",
    "Verificação de referências antes de eliminar",
    "Quando um documento tem várias referências armazenadas no sistema, um SIGAD tem que garantir que todas essas referências sejam verificadas antes de eliminar o arquivo digital. Esse requisito deve ser considerado quando um SIGAD relacionar um documento digital a mais de um dossiê ou processo, sem a duplicação física do arquivo digital. Por exemplo, uma lista de alunos aprovados em um concurso de doutorado de determinada universidade estará associada ao dossiê \"Concurso doutorado 2005\" e aos dossiês de cada aluno aprovado. Quando um documento digital estiver associado a mais de um dossiê, o SIGAD deve criar um registro para cada referência desse documento. Cada registro estará vinculado ao mesmo arquivo digital.",
    "Atendido",
    "O sistema verifica todas as referências antes de eliminar um arquivo digital.",
    "e-ARQ Obrigatório",
    "3",
    "3.3",
    "Eliminação"
);

cruzamentoRequisitos["3.3.9"] = criarRequisito(
    "3.3.9",
    "Relatório de documentos eliminados",
    "Um SIGAD tem que gerar relatório com os documentos e dossiês/processos que serão eliminados. Essa listagem deve seguir o formato da Listagem de eliminação conforme o estabelecido na norma vigente.",
    "Atendido",
    "O sistema gera relatório com documentos que serão eliminados.",
    "e-ARQ Obrigatório",
    "3",
    "3.3",
    "Eliminação"
);

cruzamentoRequisitos["3.3.10"] = criarRequisito(
    "3.3.10",
    "Manutenção de metadados de documentos eliminados",
    "Um SIGAD tem que manter metadados relativos a documentos e dossiês/processos eliminados. O administrador deve indicar o subconjunto de metadados que deverá ser mantido.",
    "Atendido",
    "O sistema mantém metadados de documentos eliminados conforme configuração do administrador.",
    "e-ARQ Obrigatório",
    "3",
    "3.3",
    "Eliminação"
);

cruzamentoRequisitos["3.4.1"] = criarRequisito(
    "3.4.1",
    "Aplicação da tabela de temporalidade para todos os documentos",
    "Um SIGAD tem que aplicar a mesma tabela de temporalidade e destinação de documentos para os documentos não digitais, digitais ou híbridos.",
    "Atendido",
    "O sistema aplica a mesma tabela de temporalidade para todos os tipos de documentos.",
    "e-ARQ Obrigatório",
    "3",
    "3.4",
    "Documentos não digitais"
);

cruzamentoRequisitos["3.4.2"] = criarRequisito(
    "3.4.2",
    "Acompanhamento dos prazos de guarda de documentos não digitais",
    "Um SIGAD tem que acompanhar os prazos de guarda dos documentos não digitais e deve dar início aos procedimentos de eliminação ou transferência desses documentos, tomando em consideração suas especificidades.",
    "Atendido",
    "O sistema acompanha os prazos de guarda de documentos não digitais.",
    "e-ARQ Obrigatório",
    "3",
    "3.4",
    "Documentos não digitais"
);

cruzamentoRequisitos["3.4.4"] = criarRequisito(
    "3.4.4",
    "Exportação de metadados de documentos não digitais",
    "É altamente desejável que um SIGAD exporte metadados de documentos e dossiês/processos não digitais.",
    "Atendido",
    "O sistema exporta metadados de documentos não digitais.",
    "e-ARQ Desejável",
    "3",
    "3.4",
    "Documentos não digitais"
);

// ============================================================
// CAPÍTULO 4 - PESQUISA, LOCALIZAÇÃO E APRESENTAÇÃO
// ============================================================

cruzamentoRequisitos["4.1.1"] = criarRequisito(
    "4.1.1",
    "Facilidades para pesquisa, localização e apresentação",
    "Um SIGAD tem que fornecer facilidades para pesquisa, localização e apresentação dos documentos.",
    "Atendido",
    "O sistema fornece facilidades para pesquisa, localização e apresentação de documentos.",
    "e-ARQ Obrigatório",
    "4",
    "4.1",
    "Pesquisa e localização"
);

cruzamentoRequisitos["4.2.1"] = criarRequisito(
    "4.2.1",
    "Funções flexíveis sobre metadados",
    "Um SIGAD tem que fornecer uma série flexível de funções que atuem sobre os metadados relacionados com os diversos níveis de agregação (documento, unidade de arquivamento e classe) e sobre os conteúdos dos documentos arquivísticos por meio de parâmetros definidos pelo usuário, com o objetivo de localizar e acessar os documentos e/ou metadados, seja individualmente ou reunidos em grupo.",
    "Atendido",
    "O sistema fornece funções flexíveis sobre metadados e conteúdos.",
    "e-ARQ Obrigatório",
    "4",
    "4.2",
    "Recuperação da informação"
);

cruzamentoRequisitos["4.2.4"] = criarRequisito(
    "4.2.4",
    "Pesquisa em documentos de texto",
    "É altamente desejável que um SIGAD permita que o conteúdo dos documentos em forma de texto possa ser pesquisado.",
    "Atendido",
    "O sistema permite pesquisa no conteúdo de documentos em formato texto.",
    "e-ARQ Desejável",
    "4",
    "4.2",
    "Recuperação da informação"
);

cruzamentoRequisitos["4.2.6"] = criarRequisito(
    "4.2.6",
    "Recuperação por todas as formas de identificação",
    "Um SIGAD tem que permitir que um documento ou dossiê/processo possa ser recuperado por meio de todas as formas de identificação implementadas, incluindo, no mínimo: identificador; título; assunto; datas; interessado; autor/redator/originador; classificação de acordo com plano ou código de classificação.",
    "Atendido",
    "O sistema permite recuperação por todas as formas de identificação implementadas.",
    "e-ARQ Obrigatório",
    "4",
    "4.2",
    "Recuperação da informação"
);

cruzamentoRequisitos["4.2.8"] = criarRequisito(
    "4.2.8",
    "Qualificação de termos de pesquisa",
    "É altamente desejável que um SIGAD permita que os termos utilizados na pesquisa possam ser qualificados, especificando-se um metadado ou o conteúdo do documento como fonte de busca.",
    "Atendido",
    "O sistema permite qualificação de termos de pesquisa.",
    "e-ARQ Desejável",
    "4",
    "4.2",
    "Recuperação da informação"
);

cruzamentoRequisitos["4.2.14"] = criarRequisito(
    "4.2.14",
    "Refinamento de pesquisas",
    "É altamente desejável que um SIGAD permita que os usuários refinem pesquisas já realizadas.",
    "Atendido",
    "O sistema permite refinamento de pesquisas já realizadas.",
    "e-ARQ Desejável",
    "4",
    "4.2",
    "Recuperação da informação"
);

cruzamentoRequisitos["4.2.19"] = criarRequisito(
    "4.2.19",
    "Limitação de acesso conforme restrições",
    "Um SIGAD tem que limitar o acesso a qualquer informação (metadado ou conteúdo de um documento arquivístico) se restrições de acesso e questões de segurança assim determinarem.",
    "Atendido",
    "O sistema limita o acesso conforme restrições de acesso e segurança.",
    "e-ARQ Obrigatório",
    "4",
    "4.2",
    "Recuperação da informação"
);

cruzamentoRequisitos["4.3.1"] = criarRequisito(
    "4.3.1",
    "Apresentação do resultado da pesquisa",
    "Um SIGAD tem que apresentar o resultado da pesquisa como uma lista de documentos e dossiês/processos digitais, não digitais ou híbridos que cumpram os parâmetros da consulta e deve notificar o usuário se o resultado for nulo.",
    "Atendido",
    "O sistema apresenta resultado da pesquisa em lista e notifica quando vazio.",
    "e-ARQ Obrigatório",
    "4",
    "4.3",
    "Apresentação"
);

cruzamentoRequisitos["4.3.11"] = criarRequisito(
    "4.3.11",
    "Exibição de todos os metadados",
    "Um SIGAD tem que ser capaz de exibir em tela todos os metadados associados aos documentos e dossiês/processos resultantes de uma pesquisa.",
    "Atendido",
    "O sistema exibe todos os metadados associados aos resultados da pesquisa.",
    "e-ARQ Obrigatório",
    "4",
    "4.3",
    "Apresentação"
);

cruzamentoRequisitos["4.3.12"] = criarRequisito(
    "4.3.12",
    "Impressão de lista de resultados",
    "Um SIGAD tem que permitir a impressão de uma lista dos documentos e dossiês/processos resultantes de uma pesquisa.",
    "Atendido",
    "O sistema permite impressão de lista de resultados da pesquisa.",
    "e-ARQ Obrigatório",
    "4",
    "4.3",
    "Apresentação"
);

cruzamentoRequisitos["4.3.13"] = criarRequisito(
    "4.3.13",
    "Impressão de lista de documentos de um dossiê",
    "Um SIGAD tem que permitir a impressão de uma lista dos documentos que compõem um dossiê/processo.",
    "Atendido",
    "O sistema permite impressão de lista de documentos de um dossiê.",
    "e-ARQ Obrigatório",
    "4",
    "4.3",
    "Apresentação"
);

// ============================================================
// CAPÍTULO 5 - GESTÃO DE UNIDADES DE ARQUIVAMENTO
// ============================================================

cruzamentoRequisitos["5.2.1"] = criarRequisito(
    "5.2.1",
    "Registro de datas de abertura e encerramento",
    "Um SIGAD tem que registrar nos metadados as datas de abertura e de encerramento do dossiê/processo. Essa data pode servir de parâmetro para aplicação dos prazos de guarda e destinação do dossiê/processo.",
    "Atendido",
    "O sistema registra datas de abertura e encerramento do dossiê/processo.",
    "e-ARQ Obrigatório",
    "5",
    "5.2",
    "Dossiê/Processo"
);

cruzamentoRequisitos["5.2.6"] = criarRequisito(
    "5.2.6",
    "Integridade da relação hierárquica",
    "Um SIGAD tem que garantir sempre a integridade da relação hierárquica entre classe, dossiê/processo, volume e documento, independentemente de atividades de manutenção, ações do usuário ou falha de componentes do SIGAD. Em hipótese alguma pode o",
    "Não Avaliado",
    "Requisito não avaliado por depender de etapa posterior do projeto.",
    "e-ARQ Obrigatório",
    "5",
    "5.2",
    "Dossiê/Processo"
);

cruzamentoRequisitos["5.4.7"] = criarRequisito(
    "5.4.7",
    "Encerramento de volume por usuários autorizados",
    "Um SIGAD tem que permitir que um volume seja encerrado por meio de procedimentos regulamentares e apenas por usuários autorizados.",
    "Atendido",
    "O sistema permite encerramento de volume apenas por usuários autorizados.",
    "e-ARQ Obrigatório",
    "5",
    "5.4",
    "Volume"
);

cruzamentoRequisitos["5.5.1"] = criarRequisito(
    "5.5.1",
    "Captura e gestão de documentos não digitais",
    "Um SIGAD tem que capturar documentos ou dossiês/processos não digitais e gerenciá-los da mesma forma que os digitais. Para o conceito de captura, ver capítulo 2.",
    "Atendido",
    "O sistema captura e gerencia documentos não digitais da mesma forma que os digitais.",
    "e-ARQ Obrigatório",
    "5",
    "5.5",
    "Documentos não digitais"
);

cruzamentoRequisitos["5.5.3"] = criarRequisito(
    "5.5.3",
    "Configuração de metadados para documentos não digitais",
    "Um SIGAD tem que permitir que um conjunto específico de metadados seja configurado para os documentos ou dossiês/processos não digitais e incluir informações sobre o local de arquivamento.",
    "Atendido",
    "O sistema permite configuração de metadados específicos para documentos não digitais.",
    "e-ARQ Obrigatório",
    "5",
    "5.5",
    "Documentos não digitais"
);

cruzamentoRequisitos["5.5.4"] = criarRequisito(
    "5.5.4",
    "Acompanhamento de movimentação de documentos não digitais",
    "Um SIGAD tem que dispor de mecanismos para acompanhar a movimentação do documento arquivístico não digital, de forma que fique evidente para o usuário a localização atual do documento.",
    "Atendido",
    "O sistema dispõe de mecanismos para acompanhar movimentação de documentos não digitais.",
    "e-ARQ Obrigatório",
    "5",
    "5.5",
    "Documentos não digitais"
);

cruzamentoRequisitos["5.5.9"] = criarRequisito(
    "5.5.9",
    "Registro de alterações de metadados de documentos não digitais",
    "Um SIGAD tem que poder registrar na trilha de auditoria todas as alterações efetuadas nos metadados dos documentos ou dossiês/processos não digitais e híbridos.",
    "Atendido",
    "O sistema registra em trilha de auditoria alterações em metadados de documentos não digitais.",
    "e-ARQ Obrigatório",
    "5",
    "5.5",
    "Documentos não digitais"
);

// ============================================================
// CAPÍTULO 6 - FLUXO DE TRABALHO
// ============================================================

cruzamentoRequisitos["6.1.7"] = criarRequisito(
    "6.1.7",
    "Registro de alterações no fluxo de trabalho",
    "Um recurso de fluxo de trabalho de um SIGAD tem que registrar na trilha de auditoria todas as alterações ocorridas neste fluxo.",
    "Atendido",
    "O sistema registra em trilha de auditoria alterações no fluxo de trabalho.",
    "e-ARQ Obrigatório",
    "6",
    "6.1",
    "Fluxo de trabalho"
);

cruzamentoRequisitos["6.2.2"] = criarRequisito(
    "6.2.2",
    "Controle de versões de documentos",
    "Um SIGAD tem que manter o identificador único do documento, e controlar as diversas versões deste documento.",
    "Atendido",
    "O sistema mantém identificador único e controla versões de documentos.",
    "e-ARQ Obrigatório",
    "6",
    "6.2",
    "Versões de documentos"
);

// ============================================================
// CAPÍTULO 7 - SEGURANÇA
// ============================================================

cruzamentoRequisitos["7.1.1"] = criarRequisito(
    "7.1.1",
    "Mecanismos de backup",
    "Um SIGAD tem que permitir que, sob controle do seu administrador, mecanismos de backup criem cópias de todas as informações nele contidas (documentos arquivísticos, metadados e parâmetros do sistema).",
    "Atendido",
    "O sistema permite criação de backup de todas as informações.",
    "e-ARQ Obrigatório",
    "7",
    "7.1",
    "Backup e recuperação"
);

cruzamentoRequisitos["7.1.7"] = criarRequisito(
    "7.1.7",
    "Restituição de documentos e metadados",
    "Um SIGAD tem que incluir funções para restituir os documentos de arquivo e metadados a um estado conhecido, utilizando uma combinação de cópias restauradas e rotinas de auditoria.",
    "Atendido",
    "O sistema inclui funções para restituição de documentos e metadados.",
    "e-ARQ Obrigatório",
    "7",
    "7.1",
    "Backup e recuperação"
);

cruzamentoRequisitos["7.2.1"] = criarRequisito(
    "7.2.1",
    "Atributos de controle de acesso",
    "Para implementar o controle de acesso, um SIGAD tem que manter pelo menos os seguintes atributos dos usuários, de acordo com a política de segurança: identificador do usuário; autorizações de acesso; credenciais de autenticação. Senha, crachá, chave criptográfica, token USB, smartcard, biometria (de impressão digital, de retina etc.) são exemplos de credenciais de autenticação.",
    "Atendido",
    "O sistema mantém todos os atributos de controle de acesso exigidos.",
    "e-ARQ Obrigatório",
    "7",
    "7.2",
    "Controle de acesso"
);

cruzamentoRequisitos["7.2.2"] = criarRequisito(
    "7.2.2",
    "Identificação e autenticação de usuário",
    "Um SIGAD tem que exigir que o usuário esteja devidamente identificado e autenticado antes de iniciar qualquer operação no SIGAD.",
    "Atendido",
    "O sistema exige identificação e autenticação antes de qualquer operação.",
    "e-ARQ Obrigatório",
    "7",
    "7.2",
    "Controle de acesso"
);

cruzamentoRequisitos["7.2.3"] = criarRequisito(
    "7.2.3",
    "Validação de atributos de segurança",
    "Um SIGAD tem que garantir que os valores dos atributos de segurança e controle de acesso, associados ao usuário, estejam dentro de conjuntos de valores válidos.",
    "Atendido",
    "O sistema valida os atributos de segurança e controle de acesso.",
    "e-ARQ Obrigatório",
    "7",
    "7.2",
    "Controle de acesso"
);

cruzamentoRequisitos["7.2.5"] = criarRequisito(
    "7.2.5",
    "Acesso a funções somente por usuários autorizados",
    "Um SIGAD tem que permitir acesso a funções do sistema somente a usuários autorizados e sob controle rigoroso da administração do sistema, a fim de proteger a autenticidade dos documentos arquivísticos digitais.",
    "Atendido",
    "O sistema restringe acesso a funções a usuários autorizados.",
    "e-ARQ Obrigatório",
    "7",
    "7.2",
    "Controle de acesso"
);

cruzamentoRequisitos["7.2.6"] = criarRequisito(
    "7.2.6",
    "Respostas para acesso negado",
    "Se o usuário solicitar o acesso ou pesquisa de um documento arquivístico, volume ou dossiê/processo específico a que não tenha direito de acesso, é altamente desejável que um SIGAD forneça uma das seguintes respostas (estabelecidas durante a configuração): mostrar o título e os metadados do documento; demonstrar a existência do dossiê/processo ou documento, mas não o respectivo título nem outro metadado; não mostrar qualquer informação do documento, nem indicar a sua existência. Essas opções são apresentadas em ordem crescente de segurança. O requisito da terceira opção (isto é, a mais rigorosa) implica que um SIGAD tem que excluir esses documentos de qualquer listagem de resultados de pesquisa. Esse procedimento é, normalmente, adequado para documentos que requeiram elevado grau de segurança e sigilo. O SIGAD deve ser capaz de registrar e informar tentativas indevidas de acesso. Este requisito se aplica tanto a pesquisas em metadados quanto a pesquisas no próprio documento (texto livre).",
    "Atendido",
    "O sistema fornece respostas configuráveis para acesso negado.",
    "e-ARQ Desejável",
    "7",
    "7.2",
    "Controle de acesso"
);

cruzamentoRequisitos["7.2.7"] = criarRequisito(
    "7.2.7",
    "Gerenciamento de permissões por administradores",
    "Somente administradores autorizados têm que ser capazes de criar, alterar, remover ou revogar permissões associadas a papéis de usuários, grupos de usuários ou usuários individuais.",
    "Atendido",
    "O sistema restringe o gerenciamento de permissões a administradores autorizados.",
    "e-ARQ Obrigatório",
    "7",
    "7.2",
    "Controle de acesso"
);

cruzamentoRequisitos["7.2.9"] = criarRequisito(
    "7.2.9",
    "Ferramentas de produtividade ao administrador",
    "É altamente desejável que um SIGAD ofereça ferramentas de aumento de produtividade ao administrador, tais como a realização de operações sobre lotes ou grupos de usuários e lotes de documentos digitais, agenda de tarefas, análises de trilhas e geração de alarmes.",
    "Atendido",
    "O sistema oferece ferramentas de produtividade ao administrador.",
    "e-ARQ Desejável",
    "7",
    "7.2",
    "Controle de acesso"
);

cruzamentoRequisitos["7.2.10"] = criarRequisito(
    "7.2.10",
    "Hierarquia de permissões",
    "Quando um SIGAD controlar o acesso por grupos de usuários, papéis de usuários e usuários individuais, é altamente desejável que obedeça a uma hierarquia de permissões preestabelecida na política de segurança. Controle de acesso por grupos de usuários Grupos são conjuntos de usuários (possivelmente com papéis diferentes) reunidos para a realização de alguma atividade em comum, por tempo determinado. Estes requisitos só são aplicáveis às organizações em que há controle de acesso por grupos de usuários.",
    "Atendido",
    "O sistema obedece a hierarquia de permissões preestabelecida.",
    "e-ARQ Desejável",
    "7",
    "7.2",
    "Controle de acesso"
);

cruzamentoRequisitos["7.2.11"] = criarRequisito(
    "7.2.11",
    "Política de controle de acesso por grupos",
    "Um SIGAD tem que aplicar a política de controle de acesso a documentos por grupos de usuários considerando: a identidade do usuário e sua participação em grupos; os atributos de segurança, associados ao documento arquivístico digital, às classes e/ou aos dossiês/processos.",
    "Atendido",
    "O sistema aplica política de controle de acesso por grupos.",
    "e-ARQ Obrigatório",
    "7",
    "7.2",
    "Controle de acesso"
);

cruzamentoRequisitos["7.2.12"] = criarRequisito(
    "7.2.12",
    "Concessão de acesso por grupo",
    "O acesso a documentos, a dossiês/processos ou classes, tem que ser concedido se a permissão requerida para a operação estiver associada a pelo menos um dos grupos aos quais pertença o usuário.",
    "Atendido",
    "O sistema concede acesso baseado em grupos do usuário.",
    "e-ARQ Obrigatório",
    "7",
    "7.2",
    "Controle de acesso"
);

cruzamentoRequisitos["7.2.13"] = criarRequisito(
    "7.2.13",
    "Usuário em múltiplos grupos",
    "Um SIGAD tem que permitir que um usuário pertença a mais de um grupo.",
    "Atendido",
    "O sistema permite que usuário pertença a múltiplos grupos.",
    "e-ARQ Obrigatório",
    "7",
    "7.2",
    "Controle de acesso"
);

cruzamentoRequisitos["7.2.15"] = criarRequisito(
    "7.2.15",
    "Atributos para controle de acesso por papéis",
    "Um SIGAD tem que usar os seguintes atributos do usuário ao implementar a política de controle de acesso aos documentos digitais por papéis de usuários: identificação do usuário; papéis associados ao usuário.",
    "Atendido",
    "O sistema usa os atributos exigidos para controle de acesso por papéis.",
    "e-ARQ Obrigatório",
    "7",
    "7.2",
    "Controle de acesso"
);

cruzamentoRequisitos["7.2.16"] = criarRequisito(
    "7.2.16",
    "Atributos de documentos para controle de acesso por papéis",
    "Um SIGAD tem que usar os seguintes atributos dos documentos digitais ao implementar a política de controle de acesso por papéis: identificação do documento digital; operações permitidas aos vários papéis de usuários, sobre as classes ou unidades de arquivamento a que o documento pertence.",
    "Atendido",
    "O sistema usa os atributos exigidos para controle de acesso por papéis.",
    "e-ARQ Obrigatório",
    "7",
    "7.2",
    "Controle de acesso"
);

cruzamentoRequisitos["7.2.17"] = criarRequisito(
    "7.2.17",
    "Concessão de acesso por papel",
    "O acesso a documentos, dossiês/processos ou classes tem que ser concedido somente se a permissão requerida para a operação estiver presente em pelo menos um dos papéis associados ao usuário.",
    "Atendido",
    "O sistema concede acesso baseado em papéis do usuário.",
    "e-ARQ Obrigatório",
    "7",
    "7.2",
    "Controle de acesso"
);

cruzamentoRequisitos["7.2.18"] = criarRequisito(
    "7.2.18",
    "Impedimento de papéis com direitos conflitantes",
    "Um SIGAD tem que impedir que um usuário assuma papéis com direitos conflitantes.",
    "Atendido",
    "O sistema impede que usuário assuma papéis com direitos conflitantes.",
    "e-ARQ Obrigatório",
    "7",
    "7.2",
    "Controle de acesso"
);

cruzamentoRequisitos["7.4.1"] = criarRequisito(
    "7.4.1",
    "Registro de eventos na trilha de auditoria",
    "Um SIGAD tem que ser capaz de registrar, na trilha de auditoria, informações acerca das ações a seguir: data e hora da captura de todos os documentos; responsável pela captura; reclassificação, desclassificação ou redução do grau de sigilo de um documento ou dossiê/processo, com a classificação inicial e final; qualquer alteração na tabela de temporalidade e destinação de documentos; qualquer ação de reavaliação de documentos; qualquer alteração nos metadados associados a classes, dossiês/processos ou documentos; data e hora de produção, aditamento e eliminação de metadados; ações de exportação e importação envolvendo os documentos; usuário, data e hora de acesso ou tentativa de acesso a documentos e ao SIGAD; tentativas de acesso negado a qualquer documento; ações de eliminação de qualquer documento e seus metadados; tentativas de exportação (inclusive para backup) e importação (inclusive restore); alterações efetuadas nas permissões de acesso que afetem um dossiê/processo, documento ou usuário; infrações cometidas contra mecanismos de controle de acesso; todas as ações administrativas sobre os atributos de segurança (papéis, grupos, permissões etc.); todas as ações administrativas sobre dados de usuários (cadastro, ativação, bloqueio, atualização de dados e permissões, troca de senha etc.); todos os eventos de administração e manutenção das trilhas de auditoria (alarmes, cópias, configuração de parâmetros etc.).",
    "Atendido",
    "O sistema registra todos os eventos exigidos na trilha de auditoria.",
    "e-ARQ Obrigatório",
    "7",
    "7.4",
    "Trilha de auditoria"
);

cruzamentoRequisitos["7.4.2"] = criarRequisito(
    "7.4.2",
    "Identidade do usuário na trilha de auditoria",
    "Um SIGAD tem que registrar, em cada evento auditado, informações sobre a identidade do usuário, desde que essa identificação esteja de acordo com a política de privacidade da organização e a legislação vigente.",
    "Atendido",
    "O sistema registra identidade do usuário em cada evento auditado.",
    "e-ARQ Obrigatório",
    "7",
    "7.4",
    "Trilha de auditoria"
);

cruzamentoRequisitos["7.4.3"] = criarRequisito(
    "7.4.3",
    "Leitura das trilhas de auditoria",
    "Um SIGAD tem que permitir a leitura das trilhas de auditoria apenas a usuários autorizados.",
    "Atendido",
    "O sistema restringe leitura das trilhas de auditoria a usuários autorizados.",
    "e-ARQ Obrigatório",
    "7",
    "7.4",
    "Trilha de auditoria"
);

cruzamentoRequisitos["7.4.4"] = criarRequisito(
    "7.4.4",
    "Disponibilidade das trilhas de auditoria",
    "Um SIGAD tem que assegurar que as informações da trilha de auditoria estejam disponíveis para inspeção, a fim de que uma ocorrência específica possa ser identificada e todas as informações correspondentes sejam claras e compreensíveis.",
    "Atendido",
    "O sistema assegura disponibilidade das trilhas de auditoria para inspeção.",
    "e-ARQ Obrigatório",
    "7",
    "7.4",
    "Trilha de auditoria"
);

cruzamentoRequisitos["7.4.5"] = criarRequisito(
    "7.4.5",
    "Busca em eventos de trilhas de auditoria",
    "É altamente desejável que um SIGAD possua mecanismos para realização de buscas nos eventos das trilhas de auditoria. Para facilitar a visualização do relatório, os resultados podem ser apresentados de modo ordenado, mas essa ordenação não pode alterar os dados incluídos na trilha.",
    "Atendido",
    "O sistema possui mecanismos para busca em eventos de trilhas de auditoria.",
    "e-ARQ Desejável",
    "7",
    "7.4",
    "Trilha de auditoria"
);

cruzamentoRequisitos["7.4.6"] = criarRequisito(
    "7.4.6",
    "Impedimento de modificação na trilha de auditoria",
    "Um SIGAD tem que ser capaz de impedir qualquer modificação na trilha de auditoria.",
    "Atendido",
    "O sistema impede qualquer modificação na trilha de auditoria.",
    "e-ARQ Obrigatório",
    "7",
    "7.4",
    "Trilha de auditoria"
);

cruzamentoRequisitos["7.4.7"] = criarRequisito(
    "7.4.7",
    "Exportação de trilhas de auditoria",
    "Somente administradores autorizados têm que ser capazes de exportar as trilhas de auditoria sem afetar a trilha armazenada, ou transferir as trilhas de auditoria de um suporte de armazenamento para outro. A trilha de auditoria não pode ser excluída antes da data indicada na tabela de temporalidade. Porém, a transferência implica a cópia da trilha para outro espaço de armazenamento, com a subsequente liberação do espaço original. A exportação é a cópia sem liberação do espaço.",
    "Parcialmente Atendido",
    "A exportação das trilhas de auditoria foi validada. Contudo, verificou-se que a solução não restringe adequadamente sua exclusão conforme os critérios de temporalidade previstos.",
    "e-ARQ Obrigatório",
    "7",
    "7.4",
    "Trilha de auditoria"
);
cruzamentoRequisitos["7.4.7"].observacoes = ["A solução não restringe adequadamente a exclusão das trilhas de auditoria conforme critérios de temporalidade."];

cruzamentoRequisitos["7.5.3"] = criarRequisito(
    "7.5.3",
    "Verificação de assinatura digital na captura",
    "Um SIGAD tem que ser capaz de verificar a validade da assinatura digital no momento da captura do documento.",
    "Atendido",
    "O sistema verifica a validade da assinatura digital na captura.",
    "e-ARQ Obrigatório",
    "7",
    "7.5",
    "Assinatura digital"
);

cruzamentoRequisitos["7.5.5"] = criarRequisito(
    "7.5.5",
    "Armazenamento de informações de certificação",
    "É altamente desejável que um SIGAD seja capaz de armazenar, juntamente com o componente digital, conforme os metadados do e-ARQ Brasil, as informações de certificação a seguir: assinatura digital; certificado digital (cadeia de certificação) usado na verificação da assinatura.",
    "Atendido",
    "O sistema armazena informações de certificação com o componente digital.",
    "e-ARQ Desejável",
    "7",
    "7.5",
    "Assinatura digital"
);

cruzamentoRequisitos["7.5.6"] = criarRequisito(
    "7.5.6",
    "Atualizações tecnológicas de assinatura digital",
    "É altamente desejável que um SIGAD seja capaz de receber atualizações tecnológicas quanto à plataforma criptográfica de assinatura digital.",
    "Atendido",
    "O sistema é capaz de receber atualizações tecnológicas quanto à plataforma criptográfica.",
    "e-ARQ Desejável",
    "7",
    "7.5",
    "Assinatura digital"
);

cruzamentoRequisitos["7.6.1"] = criarRequisito(
    "7.6.1",
    "Acesso a relógios e carimbador de tempo",
    "Um SIGAD tem que ter acesso a relógios e carimbador de tempo confiáveis para seu próprio uso.",
    "Não Avaliado",
    "Requisito não avaliado por depender de etapa posterior do projeto.",
    "e-ARQ Obrigatório",
    "7",
    "7.6",
    "Carimbo do tempo"
);

cruzamentoRequisitos["7.6.2"] = criarRequisito(
    "7.6.2",
    "Verificação de carimbo digital do tempo",
    "Um SIGAD tem que ser capaz de verificar a validade do carimbo digital do tempo no momento da captura do documento.",
    "Não Avaliado",
    "Requisito não avaliado por depender de etapa posterior do projeto.",
    "e-ARQ Obrigatório",
    "7",
    "7.6",
    "Carimbo do tempo"
);

cruzamentoRequisitos["7.6.3"] = criarRequisito(
    "7.6.3",
    "Registro de verificação do carimbo digital do tempo",
    "Um SIGAD, no processo de verificação do carimbo digital do tempo, tem que ser capaz de registrar, nos metadados do documento, o seguinte: validade do carimbo digital do tempo; registro da verificação do carimbo digital do tempo; data e hora em que ocorreu a verificação.",
    "Não Avaliado",
    "Requisito não avaliado por depender de etapa posterior do projeto.",
    "e-ARQ Obrigatório",
    "7",
    "7.6",
    "Carimbo do tempo"
);

cruzamentoRequisitos["7.8.1"] = criarRequisito(
    "7.8.1",
    "Garantia de autoria por senha",
    "Um SIGAD tem que ser capaz de garantir a autoria de um documento que tenha sido autenticado por meio da identificação do autor após confirmação de senha, nos documentos produzidos e mantidos dentro do SIGAD.",
    "Atendido",
    "O sistema garante autoria após confirmação de senha.",
    "e-ARQ Obrigatório",
    "7",
    "7.8",
    "Autenticação"
);

cruzamentoRequisitos["7.8.2"] = criarRequisito(
    "7.8.2",
    "Registro de identificação do autor",
    "Um SIGAD tem que registrar a identificação do autor como metadado de autenticação do documento após verificação da senha do usuário.",
    "Atendido",
    "O sistema registra identificação do autor como metadado de autenticação.",
    "e-ARQ Obrigatório",
    "7",
    "7.8",
    "Autenticação"
);

cruzamentoRequisitos["7.8.3"] = criarRequisito(
    "7.8.3",
    "Uso de checksum para verificação de integridade",
    "É altamente desejável que um SIGAD faça uso de checksum para apoiar a verificação da integridade do documento que foi autenticado após confirmação de senha.",
    "Atendido",
    "O sistema faz uso de checksum para verificação de integridade.",
    "e-ARQ Desejável",
    "7",
    "7.8",
    "Autenticação"
);

cruzamentoRequisitos["7.9.3"] = criarRequisito(
    "7.9.3",
    "Metadados de documentos cifrados",
    "Um SIGAD tem que registrar os seguintes metadados sobre um documento cifrado: indicação sobre se está cifrado ou não; algoritmos usados na cifração; identificação do remetente; identificação do destinatário.",
    "Atendido",
    "O sistema registra os metadados exigidos para documentos cifrados.",
    "e-ARQ Obrigatório",
    "7",
    "7.9",
    "Cifração"
);

cruzamentoRequisitos["7.10.2"] = criarRequisito(
    "7.10.2",
    "Acompanhamento de localização de documentos",
    "Um SIGAD tem que fornecer um recurso de acompanhamento para monitorar e registrar informações acerca do local atual e do deslocamento de dossiês/processos digitais e não digitais.",
    "Atendido",
    "O sistema fornece recurso de acompanhamento de localização de documentos.",
    "e-ARQ Obrigatório",
    "7",
    "7.10",
    "Acompanhamento"
);

cruzamentoRequisitos["7.10.3"] = criarRequisito(
    "7.10.3",
    "Metadados de mudança de suporte ou local",
    "A função de acompanhamento de mudança de suporte ou de local tem que registrar metadados que incluam: identificador do documento atribuído pelo SIGAD; localização atual e localizações anteriores (definidas pelo usuário); data e hora do envio/deslocamento; data e hora da recepção no novo local; destinatário; usuário responsável pela mudança de suporte ou de local (sempre que for adequado); método da mudança de suporte ou de local.",
    "Atendido",
    "O sistema registra todos os metadados exigidos para mudança de suporte ou local.",
    "e-ARQ Obrigatório",
    "7",
    "7.10",
    "Acompanhamento"
);

// ============================================================
// CAPÍTULO 8 - PRESERVAÇÃO
// ============================================================

cruzamentoRequisitos["8.2.1"] = criarRequisito(
    "8.2.1",
    "Cópias de segurança",
    "Um SIGAD tem que manter cópias de segurança. As cópias de segurança devem ser guardadas em ambientes seguros, em locais diferentes de onde se encontra a informação original.",
    "Atendido",
    "O sistema mantém cópias de segurança em ambientes seguros.",
    "e-ARQ Obrigatório",
    "8",
    "8.2",
    "Cópias de segurança"
);

cruzamentoRequisitos["8.2.3"] = criarRequisito(
    "8.2.3",
    "Substituição de dados com erros",
    "Um SIGAD tem que permitir a substituição dos dados e documentos armazenados que apresentarem erros.",
    "Atendido",
    "O sistema permite substituição de dados e documentos com erros.",
    "e-ARQ Obrigatório",
    "8",
    "8.2",
    "Cópias de segurança"
);

cruzamentoRequisitos["8.3.1"] = criarRequisito(
    "8.3.1",
    "Registro de operações de preservação",
    "Um SIGAD tem que registrar, em trilhas de auditoria, as operações de preservação realizadas.",
    "Atendido",
    "O sistema registra operações de preservação em trilhas de auditoria.",
    "e-ARQ Obrigatório",
    "8",
    "8.3",
    "Preservação"
);

cruzamentoRequisitos["8.3.6"] = criarRequisito(
    "8.3.6",
    "Metadados relativos à preservação",
    "Um SIGAD tem que gerir metadados relativos à preservação dos documentos e seus respectivos componentes.",
    "Não Avaliado",
    "Requisito não avaliado por depender de etapa posterior do projeto.",
    "e-ARQ Obrigatório",
    "8",
    "8.3",
    "Preservação"
);

// ============================================================
// CAPÍTULO 9 - ARMAZENAMENTO
// ============================================================

cruzamentoRequisitos["9.1.8"] = criarRequisito(
    "9.1.8",
    "Sanitização de memórias",
    "Quando se proceder à eliminação de documentos, as memórias de suporte têm que ser, devidamente, \"sanitizadas\", isto é, ter suas informações, efetivamente, indisponibilizadas. Este requisito aplica-se, principalmente, às memórias secundária e terciária, por sua característica não volátil. As informações devem ser eliminadas de forma irreversível, incluindo, no caso de memória terciária, a possibilidade de destruição física das mídias.",
    "Não Avaliado",
    "Requisito não avaliado por depender de etapa posterior do projeto.",
    "e-ARQ Obrigatório",
    "9",
    "9.1",
    "Armazenamento"
);

cruzamentoRequisitos["9.2.1"] = criarRequisito(
    "9.2.1",
    "Capacidade de armazenamento",
    "Um SIGAD tem que possuir capacidade de armazenamento suficiente para acomodação de todos os documentos e suas cópias de segurança. Para grandes volumes de dados, é conveniente o uso de dispositivos com maior capacidade unitária de armazenamento, a fim de reduzir a sobrecarga operacional.",
    "Atendido",
    "O sistema possui capacidade de armazenamento suficiente.",
    "e-ARQ Obrigatório",
    "9",
    "9.2",
    "Capacidade"
);

cruzamentoRequisitos["9.2.2"] = criarRequisito(
    "9.2.2",
    "Expansão da estrutura de armazenamento",
    "Em um SIGAD, tem que ser prevista a possibilidade de expansão da estrutura de armazenamento. A quantidade de memória primária deve ser superestimada no momento da aquisição, a fim de minimizar as indisponibilidades do SIGAD nas situações de expansão desse tipo de memória. Quando da aquisição de disk arrays, as possibilidades de expansão dos equipamentos de controle devem ser consideradas. Para backups em fita magnética, em sistemas com grande volume de informação, devem ser utilizados sistemas automáticos de seleção, troca e controle de fitas (robots).",
    "Atendido",
    "O sistema prevê possibilidade de expansão da estrutura de armazenamento.",
    "e-ARQ Obrigatório",
    "9",
    "9.2",
    "Capacidade"
);

cruzamentoRequisitos["9.3.2"] = criarRequisito(
    "9.3.2",
    "Técnicas de restauração de dados",
    "Um SIGAD tem que utilizar técnicas de restauração de dados em caso de falhas.",
    "Atendido",
    "O sistema utiliza técnicas de restauração de dados em caso de falhas.",
    "e-ARQ Obrigatório",
    "9",
    "9.3",
    "Integridade"
);

cruzamentoRequisitos["9.3.3"] = criarRequisito(
    "9.3.3",
    "Mecanismos de proteção contra escrita",
    "Um SIGAD tem que utilizar mecanismos de proteção contra escrita, que previnam alterações indevidas e mantenham a integridade dos dados armazenados.",
    "Atendido",
    "O sistema utiliza mecanismos de proteção contra escrita.",
    "e-ARQ Obrigatório",
    "9",
    "9.3",
    "Integridade"
);

// ============================================================
// CAPÍTULO 10 - ADMINISTRAÇÃO DO SISTEMA
// ============================================================

cruzamentoRequisitos["10.1.1"] = criarRequisito(
    "10.1.1",
    "Recuperação e configuração de parâmetros",
    "Um SIGAD tem que permitir que os administradores, de maneira controlada e sem esforço excessivo, recuperem, visualizem e reconfigurem os parâmetros do sistema e os atributos dos usuários.",
    "Atendido",
    "O sistema permite recuperação e configuração de parâmetros por administradores.",
    "e-ARQ Obrigatório",
    "10",
    "10.1",
    "Administração"
);

cruzamentoRequisitos["10.1.2"] = criarRequisito(
    "10.1.2",
    "Relatórios de gerenciamento",
    "Um SIGAD tem que fornecer relatórios flexíveis para que o administrador possa gerenciar os documentos e seu uso. Esses relatórios devem apresentar, no mínimo: quantidade de dossiês/processos, volumes e itens a partir de parâmetros ou atributos definidos (tempo, classe, unidade administrativa etc.); estatísticas de transações relativas a dossiês/processos, volumes e itens; atividades por usuário.",
    "Atendido",
    "O sistema fornece relatórios flexíveis para gerenciamento de documentos.",
    "e-ARQ Obrigatório",
    "10",
    "10.1",
    "Administração"
);

cruzamentoRequisitos["10.1.3"] = criarRequisito(
    "10.1.3",
    "Documentação de administração",
    "Um SIGAD tem que dispor de documentação referente a aspectos de administração do sistema. A documentação deve incluir todas as informações necessárias para o correto gerenciamento do sistema.",
    "Atendido",
    "O sistema dispõe de documentação de administração.",
    "e-ARQ Obrigatório",
    "10",
    "10.1",
    "Administração"
);

// ============================================================
// CAPÍTULO 11 - ASPECTOS LEGAIS
// ============================================================

cruzamentoRequisitos["11.1"] = criarRequisito(
    "11.1",
    "Conformidade com legislação e normas",
    "Um SIGAD tem que estar de acordo com a legislação e as normas pertinentes, tendo em vista a admissibilidade legal e o valor probatório dos documentos arquivísticos.",
    "Atendido",
    "O sistema está de acordo com a legislação e normas pertinentes.",
    "e-ARQ Obrigatório",
    "11",
    "11",
    "Aspectos legais"
);

cruzamentoRequisitos["11.2"] = criarRequisito(
    "11.2",
    "Conformidade com normas de gestão e acesso",
    "Um SIGAD tem que estar de acordo com a legislação e as normas específicas para gestão e acesso de documentos arquivísticos.",
    "Atendido",
    "O sistema está de acordo com normas específicas para gestão e acesso de documentos.",
    "e-ARQ Obrigatório",
    "11",
    "11",
    "Aspectos legais"
);

// ============================================================
// CAPÍTULO 12 - USABILIDADE
// ============================================================

cruzamentoRequisitos["12.1.1"] = criarRequisito(
    "12.1.1",
    "Documentação completa e organizada",
    "É altamente desejável que um SIGAD possua documentação completa, clara, inteligível e organizada para instalação e uso do software.",
    "Atendido",
    "O sistema possui documentação completa para instalação e uso.",
    "e-ARQ Desejável",
    "12",
    "12.1",
    "Usabilidade"
);

cruzamentoRequisitos["12.1.15"] = criarRequisito(
    "12.1.15",
    "Acessibilidade para usuários com deficiência",
    "É altamente desejável que a interface do SIGAD com o usuário seja adequada a adaptações e personalizações que permitam sua utilização por usuários com deficiência ou mobilidade reduzida, de acordo com as políticas de inclusão da organização. Essas opções devem ser compatíveis com software especializado que possa vir a ser acoplado (por exemplo, leitores de tela para cegos), bem como seguir orientações específicas de acessibilidade de interface. Para ambientes e sítios apoiados na web, é importante seguir orientações específicas de acessibilidade. É desejável que o padrão considerado possa ser verificado por meio da aplicação de uma validação manual ou automática, de preferência visando à obtenção de certificação de acessibilidade.",
    "Não Atendido",
    "Não foram apresentadas evidências suficientes para comprovar a conformidade da solução com os requisitos de acessibilidade previstos.",
    "e-ARQ Desejável",
    "12",
    "12.1",
    "Usabilidade"
);

cruzamentoRequisitos["12.1.24"] = criarRequisito(
    "12.1.24",
    "Restrição de acesso a funcionalidades administrativas",
    "Um SIGAD tem que restringir o acesso às funcionalidades administrativas e impossibilitar sua visualização pelo usuário final. Exemplos: as operações não disponíveis aparecem com fonte atenuada nos menus e possuem efeito nulo quando acionadas. O acesso às operações indisponíveis é restringido pela configuração dos menus, que não apresentam essas operações ao usuário sem permissão para executá-las.",
    "Atendido",
    "O sistema restringe acesso a funcionalidades administrativas para usuários finais.",
    "e-ARQ Obrigatório",
    "12",
    "12.1",
    "Usabilidade"
);

// ============================================================
// CAPÍTULO 13 - INTEROPERABILIDADE
// ============================================================

cruzamentoRequisitos["13.1.1"] = criarRequisito(
    "13.1.1",
    "Interoperabilidade com outros sistemas",
    "É altamente desejável que um SIGAD seja capaz de interoperar com outros sistemas informatizados, permitindo, pelo menos, consulta, recuperação, importação e exportação de documentos e seus metadados. As operações de interoperabilidade devem respeitar a legislação vigente e a política de segurança.",
    "Atendido",
    "O sistema é capaz de interoperar com outros sistemas.",
    "e-ARQ Desejável",
    "13",
    "13.1",
    "Interoperabilidade"
);

cruzamentoRequisitos["13.1.2"] = criarRequisito(
    "13.1.2",
    "Interoperabilidade por padrões abertos",
    "É altamente desejável que um SIGAD seja capaz de interoperar com outros sistemas por meio de padrões abertos de interoperabilidade. Por exemplo, padrões abertos como os estabelecidos pela e-PING, XML e Dublin Core.",
    "Atendido",
    "O sistema interoperá com outros sistemas por meio de padrões abertos.",
    "e-ARQ Desejável",
    "13",
    "13.1",
    "Interoperabilidade"
);

cruzamentoRequisitos["13.1.3"] = criarRequisito(
    "13.1.3",
    "Aplicação de requisitos de segurança na interoperabilidade",
    "Um SIGAD tem que aplicar os requisitos de segurança descritos neste documento para executar operações de interoperabilidade. Isso é fundamental para que as operações, feitas em ambiente com interoperabilidade, não afetem a integridade dos documentos e impossibilitem acessos não autorizados.",
    "Atendido",
    "O sistema aplica requisitos de segurança em operações de interoperabilidade.",
    "e-ARQ Obrigatório",
    "13",
    "13.1",
    "Interoperabilidade"
);

// ============================================================
// CAPÍTULO 14 - DISPONIBILIDADE
// ============================================================

cruzamentoRequisitos["14.1.1"] = criarRequisito(
    "14.1.1",
    "Adequação ao grau de disponibilidade",
    "Um SIGAD tem que se adequar ao grau de disponibilidade estabelecido pela organização.",
    "Atendido",
    "O sistema se adequa ao grau de disponibilidade estabelecido.",
    "e-ARQ Obrigatório",
    "14",
    "14.1",
    "Disponibilidade"
);

// ============================================================
// CAPÍTULO 15 - ESCALABILIDADE
// ============================================================

cruzamentoRequisitos["15.1.4"] = criarRequisito(
    "15.1.4",
    "Escalabilidade",
    "É altamente desejável que um SIGAD seja escalável, a fim de permitir adaptação a organizações de diferentes tamanhos e complexidades.",
    "Atendido",
    "O sistema é escalável para diferentes tamanhos e complexidades.",
    "e-ARQ Desejável",
    "15",
    "15.1",
    "Escalabilidade"
);

cruzamentoRequisitos["15.1.5"] = criarRequisito(
    "15.1.5",
    "Evidências de escalabilidade",
    "É altamente desejável que um SIGAD forneça evidências do grau de escalabilidade ao longo do tempo. Avaliações quantitativas devem incluir: tamanho máximo do repositório que pode ser suportado com desempenho adequado; o número máximo de usuários simultâneos que podem ser atendidos com desempenho adequado; sobrecarga administrativa prevista para um período de cinco anos, permitindo o crescimento do número de usuários e da quantidade de registros; quantidade de reconfigurações e indisponibilidades previstas para um período de cinco anos, permitindo o crescimento do número de usuários e da quantidade de registros; quantidade de reconfigurações e indisponibilidades previstas para um período de cinco anos, permitindo mudanças substanciais na estrutura da organização, nos esquemas de classificação e na administração de usuários.",
    "Não Avaliado",
    "Requisito não avaliado por depender de etapa posterior do projeto.",
    "e-ARQ Desejável",
    "15",
    "15.1",
    "Escalabilidade"
);

// ============================================================
// REQUISITOS DO GRUPO DE TRABALHO DE PRESERVAÇÃO DIGITAL
// ============================================================

cruzamentoRequisitos["GT.1.1"] = criarRequisito(
    "GT.1.1",
    "API para todas as funcionalidades",
    "Prover API para todas as funcionalidades de manipulação de documentos, pastas e conteúdo.",
    "Parcialmente Atendido",
    "Foram identificadas inconsistências entre a documentação Swagger e os comportamentos observados nas APIs, além de erros internos em determinadas operações, impedindo a validação integral do requisito.",
    "GT Preservação Digital",
    "GT",
    "GT.1",
    "APIs"
);
cruzamentoRequisitos["GT.1.1"].observacoes = ["Inconsistências entre documentação Swagger e comportamentos observados; erros internos em determinadas operações."];

cruzamentoRequisitos["GT.1.3"] = criarRequisito(
    "GT.1.3",
    "Interoperabilidade com o SEI",
    "Capacidade de interoperar com o SEI, possibilitando atividades de gestão aos processos eletrônicos, inclusive, preparando-os para destinação final (eliminação ou preservação em RDC-Arq via Archivematica).",
    "Não Avaliado",
    "Requisito não avaliado por depender de etapa posterior do projeto.",
    "GT Preservação Digital",
    "GT",
    "GT.1",
    "APIs"
);

cruzamentoRequisitos["GT.1.4"] = criarRequisito(
    "GT.1.4",
    "Funcionalidades via APIs sem componentes visuais",
    "As funcionalidades devem estar disponíveis via APIs, sem exigir a utilização de componentes visuais próprios do produto (formulários, telas etc.), de modo que se possa executá-las a partir de componentes de software desenvolvidos.",
    "Atendido",
    "As funcionalidades estão disponíveis via APIs sem exigir componentes visuais.",
    "GT Preservação Digital",
    "GT",
    "GT.1",
    "APIs"
);

cruzamentoRequisitos["GT.2.1"] = criarRequisito(
    "GT.2.1",
    "Inclusão de metadados complementares de indexação",
    "Permitir a inclusão de metadados complementares de indexação.",
    "Atendido",
    "O sistema permite inclusão de metadados complementares de indexação.",
    "GT Preservação Digital",
    "GT",
    "GT.2",
    "Metadados"
);

cruzamentoRequisitos["GT.2.2"] = criarRequisito(
    "GT.2.2",
    "Individualização de conjuntos documentais por órgão",
    "Possibilitar a individualização de conjuntos documentais por órgão.",
    "Atendido",
    "O sistema possibilita individualização de conjuntos documentais por órgão.",
    "GT Preservação Digital",
    "GT",
    "GT.2",
    "Metadados"
);

cruzamentoRequisitos["GT.2.3"] = criarRequisito(
    "GT.2.3",
    "Garantia de integridade com soma de verificação",
    "Admitir objetos digitais de modo condicionado à garantia de integridade (uso de soma de verificação).",
    "Atendido",
    "O sistema utiliza soma de verificação para garantir integridade.",
    "GT Preservação Digital",
    "GT",
    "GT.2",
    "Metadados"
);

cruzamentoRequisitos["GT.2.5"] = criarRequisito(
    "GT.2.5",
    "Controle de versões de documentos",
    "Controlar versões de documentos.",
    "Atendido",
    "O sistema controla versões de documentos.",
    "GT Preservação Digital",
    "GT",
    "GT.2",
    "Metadados"
);

cruzamentoRequisitos["GT.2.6"] = criarRequisito(
    "GT.2.6",
    "Classificação em graus de sigilo",
    "Possibilitar a classificação de documentos em graus de sigilo.",
    "Atendido",
    "O sistema possibilita classificação de documentos em graus de sigilo.",
    "GT Preservação Digital",
    "GT",
    "GT.2",
    "Metadados"
);

cruzamentoRequisitos["GT.2.7"] = criarRequisito(
    "GT.2.7",
    "Autenticação com assinatura eletrônica qualificada",
    "Autenticar documentos de assinatura eletrônica qualificada, conforme Res. CONARQ nº 48/2021.",
    "Atendido",
    "O sistema autentica documentos com assinatura eletrônica qualificada.",
    "GT Preservação Digital",
    "GT",
    "GT.2",
    "Metadados"
);

cruzamentoRequisitos["GT.2.8"] = criarRequisito(
    "GT.2.8",
    "Estruturação do repositório por tipos de documentos",
    "Prover estruturação do repositório por meio de um modelo baseado em tipos de documentos, de pastas e de outros objetos, para os quais se definam metadados, regras, comportamentos e permissões.",
    "Atendido",
    "O sistema provê estruturação do repositório por tipos de documentos e pastas.",
    "GT Preservação Digital",
    "GT",
    "GT.2",
    "Metadados"
);

cruzamentoRequisitos["GT.2.9"] = criarRequisito(
    "GT.2.9",
    "Criação de metadados com tipos e validações",
    "Suportar a criação de metadados dos tipos texto (string), numérico (inteiro e decimal), verdadeiro/falso (booleano), data/hora, com possibilidade de configurar validações e restrições de integridade aos valores;",
    "Atendido",
    "O sistema suporta criação de metadados com tipos e validações.",
    "GT Preservação Digital",
    "GT",
    "GT.2",
    "Metadados"
);

cruzamentoRequisitos["GT.2.10"] = criarRequisito(
    "GT.2.10",
    "Nomes com espaços, hífen e acentos",
    "Nomes de pastas, documentos e outros elementos de organização devem poder conter espaços, hífen, parênteses e caracteres acentuados da língua portuguesa, distintos de seus identificadores internos ou mnemônicos.",
    "Atendido",
    "O sistema permite nomes com espaços, hífen, parênteses e acentos.",
    "GT Preservação Digital",
    "GT",
    "GT.2",
    "Metadados"
);

cruzamentoRequisitos["GT.2.11"] = criarRequisito(
    "GT.2.11",
    "Indexação de conteúdo com suporte a caracteres",
    "Deve suportar a indexação de conteúdo de todos os formatos conforme Quadro de formatos com capacidade de identificar e tratar adequadamente os conjuntos de caracteres codificados em UTF-8, ISO-8859-1 e Windows-1252.",
    "Atendido",
    "O sistema suporta indexação com tratamento de caracteres UTF-8, ISO-8859-1 e Windows-1252.",
    "GT Preservação Digital",
    "GT",
    "GT.2",
    "Metadados"
);

cruzamentoRequisitos["GT.2.12"] = criarRequisito(
    "GT.2.12",
    "Armazenamento de documentos sem conteúdo",
    "Deve suportar o armazenamento de documentos sem conteúdo (somente metadados).",
    "Atendido",
    "O sistema suporta armazenamento de documentos somente com metadados.",
    "GT Preservação Digital",
    "GT",
    "GT.2",
    "Metadados"
);

cruzamentoRequisitos["GT.2.13"] = criarRequisito(
    "GT.2.13",
    "Exportação e importação de documentos",
    "Deve possuir funcionalidade de exportação e importação de documentos do repositório, individualmente e em lote, de modo que um ou mais documentos de um repositório possam ser copiados ou movidos para outro ou restaurados a partir de cópia.",
    "Atendido",
    "O sistema possui funcionalidade de exportação e importação de documentos individualmente e em lote.",
    "GT Preservação Digital",
    "GT",
    "GT.2",
    "Metadados"
);

cruzamentoRequisitos["GT.3.1"] = criarRequisito(
    "GT.3.1",
    "Capacidade para 14 milhões de documentos",
    "Capacidade para 14.000.000 (catorze milhões) de documentos em um único repositório.",
    "Não Avaliado",
    "Requisito não avaliado por depender de etapa posterior do projeto.",
    "GT Preservação Digital",
    "GT",
    "GT.3",
    "Capacidade"
);

cruzamentoRequisitos["GT.3.2"] = criarRequisito(
    "GT.3.2",
    "Capacidade para 2.000 sessões simultâneas",
    "Capacidade de atender 2.000 sessões/requisições simultaneamente.",
    "Não Avaliado",
    "Requisito não avaliado por depender de etapa posterior do projeto.",
    "GT Preservação Digital",
    "GT",
    "GT.3",
    "Capacidade"
);

cruzamentoRequisitos["GT.3.3"] = criarRequisito(
    "GT.3.3",
    "Mecanismos de verificação de integridade",
    "Deve oferecer mecanismos para assegurar e verificar a integridade do conteúdo, como utilização de algoritmos de checksum.",
    "Atendido",
    "O sistema oferece mecanismos de verificação de integridade com algoritmos de checksum.",
    "GT Preservação Digital",
    "GT",
    "GT.3",
    "Capacidade"
);

cruzamentoRequisitos["GT.3.4"] = criarRequisito(
    "GT.3.4",
    "Configuração de diversas áreas de armazenamento",
    "Deve suportar a configuração de diversas áreas de armazenamento de conteúdo ('data stores') para um mesmo repositório, com suporte a sistemas de arquivos locais e de rede.",
    "Não Avaliado",
    "Requisito não avaliado por depender de etapa posterior do projeto.",
    "GT Preservação Digital",
    "GT",
    "GT.3",
    "Capacidade"
);

cruzamentoRequisitos["GT.3.6"] = criarRequisito(
    "GT.3.6",
    "Configurações independentes do sistema operacional",
    "Deve ter todas as configurações e parametrizações armazenadas de forma independente das configurações do sistema operacional.",
    "Atendido",
    "O sistema armazena configurações independentemente do sistema operacional.",
    "GT Preservação Digital",
    "GT",
    "GT.3",
    "Capacidade"
);

cruzamentoRequisitos["GT.3.7"] = criarRequisito(
    "GT.3.7",
    "Alteração de senhas mestras",
    "Deve prever a possibilidade de alteração das senhas mestras (senha do super-usuário e/ou usuário de instalação) sem necessidade de reinstalação ou reconfiguração significativa do produto.",
    "Atendido",
    "O sistema permite alteração de senhas mestras sem reinstalação.",
    "GT Preservação Digital",
    "GT",
    "GT.3",
    "Capacidade"
);

cruzamentoRequisitos["GT.3.8"] = criarRequisito(
    "GT.3.8",
    "Registros de auditoria de todas as operações",
    "Deve ser capaz de efetuar registros de auditoria de todas as operações sobre documentos, tipos documentais, pastas, permissões, usuários e das configurações da própria auditoria, contendo no mínimo a data/hora da operação, o usuário que executou, a operação e qual o objeto afetado, mesmo que excluído.",
    "Atendido",
    "O sistema efetua registros de auditoria de todas as operações.",
    "GT Preservação Digital",
    "GT",
    "GT.3",
    "Capacidade"
);

cruzamentoRequisitos["GT.3.9"] = criarRequisito(
    "GT.3.9",
    "Registro de tentativas de acesso não autorizado",
    "Deve ser capaz de registrar tentativas de acesso não autorizado ao repositório.",
    "Atendido",
    "O sistema registra tentativas de acesso não autorizado ao repositório.",
    "GT Preservação Digital",
    "GT",
    "GT.3",
    "Capacidade"
);

cruzamentoRequisitos["GT.3.10"] = criarRequisito(
    "GT.3.10",
    "Integridade do repositório independente do meio",
    "Assegurar a integridade do repositório com relação ao seu modelo independentemente do meio pela qual as operações forem acionadas (como interfaces de usuário, APIs e operações internas), incluindo obediência à estrutura, cumprimento de regras e correta execução de comportamentos.",
    "Atendido",
    "O sistema assegura integridade do repositório independentemente do meio de acesso.",
    "GT Preservação Digital",
    "GT",
    "GT.3",
    "Capacidade"
);

cruzamentoRequisitos["GT.4.1"] = criarRequisito(
    "GT.4.1",
    "Multiusuário com interface web",
    "Ser multiusuário com interface de acesso via web, com diferentes perfis de permissões.",
    "Atendido",
    "O sistema é multiusuário com interface web e diferentes perfis de permissões.",
    "GT Preservação Digital",
    "GT",
    "GT.4",
    "Interface"
);

cruzamentoRequisitos["GT.4.2"] = criarRequisito(
    "GT.4.2",
    "Painel de configurações para administradores",
    "Disponibilizar painel de configurações e preferências exclusivo para administradores.",
    "Atendido",
    "O sistema disponibiliza painel de configurações exclusivo para administradores.",
    "GT Preservação Digital",
    "GT",
    "GT.4",
    "Interface"
);

cruzamentoRequisitos["GT.4.3"] = criarRequisito(
    "GT.4.3",
    "Diferenciação de acessos por perfil",
    "Diferenciar os acessos a funcionalidades conforme perfil do usuário.",
    "Atendido",
    "O sistema diferencia acessos a funcionalidades conforme perfil do usuário.",
    "GT Preservação Digital",
    "GT",
    "GT.4",
    "Interface"
);

cruzamentoRequisitos["GT.5.1"] = criarRequisito(
    "GT.5.1",
    "Documentação detalhada",
    "Deve fornecer documentação detalhada (instalação, configuração, administração, customização, desenvolvimento e utilização) em PDF ou HTML, em português e, se possível, também em inglês.",
    "Atendido",
    "O sistema fornece documentação detalhada em português.",
    "GT Preservação Digital",
    "GT",
    "GT.5",
    "Documentação"
);

cruzamentoRequisitos["GT.6.1"] = criarRequisito(
    "GT.6.1",
    "Módulo para requisições de serviços de atendimento",
    "Módulo para requisições de serviços de atendimento em arquivo, que além de contemplar os requisitos 2.4.1 e 2.4.2 listados no Anexo I do Modelo e-ARQ Brasil (versão 2), possibilite o apoio a atendimento de pesquisa controlando, por meio de vocabulário topográfico, a movimentação de caixas-arquivo por diferentes espaços e setores do APERS.",
    "Não Avaliado",
    "Requisito não avaliado por depender de etapa posterior do projeto.",
    "GT Preservação Digital",
    "GT",
    "GT.6",
    "Atendimento"
);

cruzamentoRequisitos["GT.7.1"] = criarRequisito(
    "GT.7.1",
    "Visualização de conteúdo aderente a padrões W3C",
    "O componente de visualização de conteúdo deve ser aderente aos padrões do World Wide Web Consortium (W3C) e compatível com os navegadores Chrome, Firefox, Safari e Microsoft Edge.",
    "Atendido",
    "O componente de visualização é aderente a padrões W3C e compatível com navegadores modernos.",
    "GT Preservação Digital",
    "GT",
    "GT.7",
    "Visualização"
);

cruzamentoRequisitos["GT.7.2"] = criarRequisito(
    "GT.7.2",
    "Visualização em dispositivos móveis",
    "O componente de visualização de conteúdo deve funcionar corretamente em dispositivos móveis (smartphones e tablets) com sistemas operacionais Android e iOS.",
    "Atendido",
    "O componente de visualização funciona em dispositivos móveis Android e iOS.",
    "GT Preservação Digital",
    "GT",
    "GT.7",
    "Visualização"
);

cruzamentoRequisitos["GT.7.3"] = criarRequisito(
    "GT.7.3",
    "API para ações de administração automatizada",
    "Deve fornecer API HTTP RESTful, Java ou de linha de comando que permita acionar ações de administração do produto de forma automatizada, incluindo inicialização, parada e consulta ao estado de execução dos seus serviços/componentes.",
    "Atendido",
    "O sistema fornece API para ações de administração automatizada.",
    "GT Preservação Digital",
    "GT",
    "GT.7",
    "Visualização"
);

cruzamentoRequisitos["GT.7.4"] = criarRequisito(
    "GT.7.4",
    "Upgrades e correções incrementais",
    "Deve permitir a implantação de upgrades e correções de forma incremental, sem exigir reinstalação ou reconfiguração significativa do produto, e sem perda de customizações e configurações já realizadas.",
    "Atendido",
    "O sistema permite upgrades e correções incrementais.",
    "GT Preservação Digital",
    "GT",
    "GT.7",
    "Visualização"
);

cruzamentoRequisitos["GT.7.5"] = criarRequisito(
    "GT.7.5",
    "Indexação e busca textual e estruturada",
    "Deve prover a indexação de conteúdo e metadados dos documentos, incluindo todas as suas versões, e oferecer busca textual e estruturada sobre esses índices com ordenação de resultados por relevância, por metadados, com uso de operadores booleanos, caracteres coringa e combinações de palavras.",
    "Atendido",
    "O sistema provê indexação e busca textual e estruturada com ordenação e operadores.",
    "GT Preservação Digital",
    "GT",
    "GT.7",
    "Visualização"
);

cruzamentoRequisitos["GT.8.1"] = criarRequisito(
    "GT.8.1",
    "Compatibilidade com Linux",
    "Todos os componentes da solução a serem executados em ambiente servidor devem ser compatíveis com o sistema operacional Linux, em máquina virtual em serviços de nuvem.",
    "Atendido",
    "Os componentes são compatíveis com Linux em serviços de nuvem.",
    "GT Preservação Digital",
    "GT",
    "GT.8",
    "Infraestrutura"
);

cruzamentoRequisitos["GT.8.2"] = criarRequisito(
    "GT.8.2",
    "Compatibilidade para containers",
    "Deve ser compatível para implementação em containers.",
    "Atendido",
    "O sistema é compatível para implementação em containers.",
    "GT Preservação Digital",
    "GT",
    "GT.8",
    "Infraestrutura"
);

cruzamentoRequisitos["GT.8.3"] = criarRequisito(
    "GT.8.3",
    "Segregação de dados de negócio e configuração",
    "Deve armazenar separadamente os dados de negócio e de configuração do produto, de modo a permitir cópia e restauração independente de cada um deles.",
    "Parcialmente Atendido",
    "Os dados de negócio e configuração encontram-se segregados logicamente, porém armazenados na mesma instância de banco de dados, caracterizando atendimento parcial ao requisito.",
    "GT Preservação Digital",
    "GT",
    "GT.8",
    "Infraestrutura"
);
cruzamentoRequisitos["GT.8.3"].observacoes = ["Dados de negócio e configuração armazenados na mesma instância de banco de dados."];

cruzamentoRequisitos["GT.8.4"] = criarRequisito(
    "GT.8.4",
    "Suporte a IPv4 e IPv6",
    "Deve utilizar a pilha de protocolos TCP/IP de forma nativa para comunicação entre seus componentes e deles com seus clientes, suportando IPv4 e IPv6 (ambos).",
    "Atendido",
    "O sistema suporta IPv4 e IPv6.",
    "GT Preservação Digital",
    "GT",
    "GT.8",
    "Infraestrutura"
);

cruzamentoRequisitos["GT.9.1"] = criarRequisito(
    "GT.9.1",
    "Fornecimento de código-fonte",
    "Fornecer código-fonte.",
    "Não Avaliado",
    "Requisito não avaliado por depender de etapa posterior do projeto.",
    "GT Preservação Digital",
    "GT",
    "GT.9",
    "Serviços"
);

cruzamentoRequisitos["GT.9.2"] = criarRequisito(
    "GT.9.2",
    "Implementação do SIGAD com integração RDC-Arq",
    "Prestar serviço de implementação do SIGAD, integrando-o a RDC-Arq gerido pela SPGG (ver teste de aceitação).",
    "Não Avaliado",
    "Requisito não avaliado por depender de etapa posterior do projeto.",
    "GT Preservação Digital",
    "GT",
    "GT.9",
    "Serviços"
);

cruzamentoRequisitos["GT.9.3"] = criarRequisito(
    "GT.9.3",
    "Implantação em três ambientes",
    "Prestar serviço de implantação em três ambientes: desenvolvimento, homologação e produção, conforme descrito nas seções 5 e 6 deste Termo.",
    "Não Avaliado",
    "Requisito não avaliado por depender de etapa posterior do projeto.",
    "GT Preservação Digital",
    "GT",
    "GT.9",
    "Serviços"
);

cruzamentoRequisitos["GT.9.4"] = criarRequisito(
    "GT.9.4",
    "Prazo de 120 dias para execução",
    "Prazo máximo de 120 dias para execução do serviço, incluindo a finalização das etapas específicas de implementação em produção. A contagem do prazo inicia a partir da emissão da ordem de início dos serviços",
    "Não Avaliado",
    "Requisito não avaliado por depender de etapa posterior do projeto.",
    "GT Preservação Digital",
    "GT",
    "GT.9",
    "Serviços"
);

cruzamentoRequisitos["GT.9.5"] = criarRequisito(
    "GT.9.5",
    "Treinamento/capacitação",
    "O treinamento/capacitação deverá ser realizado com foco nos públicos-alvo de TI e usuários administradores abordando todos os recursos e funcionalidades da solução, incluindo aspectos relacionados à administração, suporte, segurança, desenvolvimento e integração com outros sistemas. A carga horária mínima é de 160h, com divisão específica para cada um dos públicos-alvo, na modalidade síncrona, com horários a combinar",
    "Não Avaliado",
    "Requisito não avaliado por depender de etapa posterior do projeto.",
    "GT Preservação Digital",
    "GT",
    "GT.9",
    "Serviços"
);

cruzamentoRequisitos["GT.9.6"] = criarRequisito(
    "GT.9.6",
    "Suporte Técnico Remoto por 12 meses",
    "Suporte Técnico Remoto será prestado pelo prazo de 12 (doze) meses. O serviço de Suporte Técnico Remoto consiste na realização de atividades de administração, manutenção, monitoramento e operação da solução, em todos os seus ambientes, visando assegurar o seu adequado funcionamento e atendimento a seus usuários",
    "Não Avaliado",
    "Requisito não avaliado por depender de etapa posterior do projeto.",
    "GT Preservação Digital",
    "GT",
    "GT.9",
    "Serviços"
);

// ============================================================
// FUNÇÕES AUXILIARES
// ============================================================

function getRequisitosPorStatus(status) {
    return Object.values(cruzamentoRequisitos).filter(r => r.status === status);
}

function getRequisitosPorGrupo(grupo) {
    return Object.values(cruzamentoRequisitos).filter(r => r.grupo === grupo);
}

function getRequisitosPorCapitulo(capitulo) {
    return Object.values(cruzamentoRequisitos).filter(r => r.capitulo === capitulo);
}

function getRequisitosPorSecao(secao) {
    return Object.values(cruzamentoRequisitos).filter(r => r.secao === secao);
}

function getEstatisticas() {
    const total = Object.keys(cruzamentoRequisitos).length;
    const atendidos = getRequisitosPorStatus('Atendido').length;
    const parcial = getRequisitosPorStatus('Parcialmente Atendido').length;
    const naoAtendidos = getRequisitosPorStatus('Não Atendido').length;
    const naoAvaliados = getRequisitosPorStatus('Não Avaliado').length;

    const avaliados = total - naoAvaliados;
    const pesoTotal = atendidos + (parcial * 0.5);
    const conformidade = avaliados > 0 ? (pesoTotal / avaliados * 100) : 0;
    const conformidadeGeral = total > 0 ? (pesoTotal / total * 100) : 0;

    return {
        total,
        atendidos,
        parcial,
        naoAtendidos,
        naoAvaliados,
        avaliados,
        conformidade: parseFloat(conformidade.toFixed(2)),
        conformidadeGeral: parseFloat(conformidadeGeral.toFixed(2))
    };
}

function getBugsAbertos() {
    const bugs = [];
    Object.values(cruzamentoRequisitos).forEach(req => {
        if (req.bugs && req.bugs.length > 0) {
            bugs.push({
                id: req.id,
                titulo: req.titulo,
                bugs: req.bugs,
                status: req.status
            });
        }
    });
    return bugs;
}

function getRequisitosNaoAtendidos() {
    return Object.values(cruzamentoRequisitos).filter(r =>
        r.status === 'Não Atendido' || r.status === 'Parcialmente Atendido'
    );
}

function getResumoPorGrupo() {
    const grupos = {};
    Object.values(cruzamentoRequisitos).forEach(r => {
        if (!grupos[r.grupo]) {
            grupos[r.grupo] = { total: 0, atendidos: 0, parcial: 0, naoAtendidos: 0, naoAvaliados: 0 };
        }
        grupos[r.grupo].total++;
        if (r.status === 'Atendido') grupos[r.grupo].atendidos++;
        else if (r.status === 'Parcialmente Atendido') grupos[r.grupo].parcial++;
        else if (r.status === 'Não Atendido') grupos[r.grupo].naoAtendidos++;
        else if (r.status === 'Não Avaliado') grupos[r.grupo].naoAvaliados++;
    });
    return grupos;
}

function getCapitulos() {
    const capitulos = {};
    Object.values(cruzamentoRequisitos).forEach(r => {
        const key = r.capitulo;
        if (!capitulos[key]) {
            capitulos[key] = {
                nome: r.capitulo,
                secao: r.secao,
                total: 0,
                atendidos: 0,
                parcial: 0,
                naoAtendidos: 0,
                naoAvaliados: 0,
                requisitos: []
            };
        }
        capitulos[key].total++;
        capitulos[key].requisitos.push(r);
        if (r.status === 'Atendido') capitulos[key].atendidos++;
        else if (r.status === 'Parcialmente Atendido') capitulos[key].parcial++;
        else if (r.status === 'Não Atendido') capitulos[key].naoAtendidos++;
        else if (r.status === 'Não Avaliado') capitulos[key].naoAvaliados++;
    });
    return capitulos;
}

// Exportar para uso
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        cruzamentoRequisitos,
        getRequisitosPorStatus,
        getRequisitosPorGrupo,
        getRequisitosPorCapitulo,
        getRequisitosPorSecao,
        getEstatisticas,
        getBugsAbertos,
        getRequisitosNaoAtendidos,
        getResumoPorGrupo,
        getCapitulos
    };
}