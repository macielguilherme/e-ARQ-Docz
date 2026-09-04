// ============================================================
// CRUZAMENTO DE REQUISITOS E-ARQ BRASIL × DocZ
// REQUISITOS FALTANTES - VERSÃO 3 (COMPLEMENTAR)
// ============================================================
// ESTES REQUISITOS NÃO ESTAVAM PRESENTES NOS ARQUIVOS ANTERIORES
// ============================================================

const cruzamentoRequisitos3 = {};

// ============================================================
// FUNÇÃO AUXILIAR
// ============================================================
function criarRequisito(id, titulo, descricao, status, justificativa, grupo, capitulo, secao, subsecao) {
    return {
        id,
        titulo,
        descricao,
        status: status || 'VERIFICAR!!',
        justificativa: justificativa || 'Requisito pendente de verificação - não constava no levantamento anterior.',
        grupo: grupo || 'e-ARQ Obrigatório',
        capitulo: capitulo || '',
        secao: secao || '',
        subsecao: subsecao || '',
        evidencias: {
            descricao: 'Pendente de verificação',
            prints: []
        },
        responsavel: "",
        dataValidacao: "2026-09-04",
        observacoes: ['Requisito faltante no levantamento anterior - precisa ser verificado'],
        bugs: []
    };
}

// ============================================================
// CAPÍTULO 1 - ORGANIZAÇÃO DOS DOCUMENTOS ARQUIVÍSTICOS
// Seção 1.1 - Configuração e administração do plano de classificação
// ============================================================

cruzamentoRequisitos3["1.1.15"] = criarRequisito(
    "1.1.15",
    "Pesquisa e navegação gráfica no plano de classificação",
    "Um SIGAD pode prever pesquisa e navegação na estrutura do plano de classificação por meio de uma interface gráfica.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "Facultativo",
    "1",
    "1.1",
    "Configuração e administração do plano de classificação no SIGAD"
);

// ============================================================
// Seção 1.3 - Classificação e metadados das unidades de arquivamento
// ============================================================

cruzamentoRequisitos3["1.3.8"] = criarRequisito(
    "1.3.8",
    "Alteração conjunta de metadados em grupo",
    "Um SIGAD pode permitir a alteração conjunta de um determinado metadado em um grupo de unidades de arquivamento previamente selecionado.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "Facultativo",
    "1",
    "1.3",
    "Classificação e metadados das unidades de arquivamento"
);

cruzamentoRequisitos3["1.3.12"] = criarRequisito(
    "1.3.12",
    "Referências cruzadas para unidades de arquivamento",
    "Um SIGAD pode permitir que os usuários criem referências cruzadas para unidades de arquivamento afins.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "Facultativo",
    "1",
    "1.3",
    "Classificação e metadados das unidades de arquivamento"
);

// ============================================================
// CAPÍTULO 2 - CAPTURA
// Seção 2.3 - Captura de mensagens de correio eletrônico
// ============================================================

cruzamentoRequisitos3["2.3.2"] = criarRequisito(
    "2.3.2",
    "Tratamento de mensagens de chegada",
    "Um SIGAD pode permitir que os usuários tratem e capturem as mensagens de chegada a partir do seu próprio sistema de correio eletrônico. O usuário deve poder tratar cada mensagem na caixa de entrada, como se segue:\n• visualizar cada mensagem de correio e uma indicação dos respectivos anexos, caso existam;\n• visualizar os conteúdos dos anexos utilizando um dispositivo para visualização de documentos em diferentes formatos;\n• registrar no SIGAD a mensagem de correio e respectivos anexos como um novo documento de arquivo;\n• relacionar a mensagem e respectivos anexos a um documento existente no SIGAD;\n• capturar automaticamente metadados de data e hora da transmissão da mensagem e todos os destinatários.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "Facultativo",
    "2",
    "2.3",
    "Captura de mensagens de correio eletrônico"
);

// ============================================================
// Seção 2.5 - Formato de arquivo e estrutura dos documentos
// ============================================================

cruzamentoRequisitos3["2.5.3"] = criarRequisito(
    "2.5.3",
    "Captura de diversos tipos de documentos",
    "É altamente desejável que um SIGAD possa capturar, entre outros, os documentos a seguir:\n• agendas eletrônicas;\n• informações de outros aplicativos – contabilidade, folha de pagamento, desenho assistido por computador (CAD);\n• documentos em papel digitalizados por meio de escâner;\n• documentos sonoros;\n• videoclipes;\n• diagramas e mapas digitais;\n• dados estruturados (EDI);\n• bases de dados;\n• documentos multimídia;\n• páginas web. A lista de documentos que um SIGAD tem que suportar varia de órgão para órgão. Quando não for viável o SIGAD capturar o objeto digital, ele tem que ser capaz de realizar a captura por meio do registro do documento, para possibilitar seu gerenciamento.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "2",
    "2.5",
    "Formato de arquivo e estrutura dos documentos a serem capturados"
);

// ============================================================
// CAPÍTULO 3 - AVALIAÇÃO: TEMPORALIDADE E DESTINAÇÃO
// Seção 3.2 - Exportação de documentos
// ============================================================

cruzamentoRequisitos3["3.2.12"] = criarRequisito(
    "3.2.12",
    "Ordenação de documentos a serem exportados",
    "Um SIGAD pode possibilitar a ordenação dos documentos e dossiês/processos digitais a serem exportados de acordo com elementos de metadados selecionados pelo usuário.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "Facultativo",
    "3",
    "3.2",
    "Exportação de documentos"
);

// ============================================================
// CAPÍTULO 4 - PESQUISA, LOCALIZAÇÃO E APRESENTAÇÃO
// Seção 4.2 - Pesquisa e localização
// ============================================================

cruzamentoRequisitos3["4.2.9"] = criarRequisito(
    "4.2.9",
    "Uso de períodos típicos em campos de data",
    "Um SIGAD pode permitir o uso de períodos típicos de pedidos de pesquisa nos campos de data, como, por exemplo, 'semana anterior', 'mês corrente'.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "Facultativo",
    "4",
    "4.2",
    "Pesquisa e localização"
);

// ============================================================
// Seção 4.3 - Apresentação
// ============================================================

cruzamentoRequisitos3["4.3.2"] = criarRequisito(
    "4.3.2",
    "Sugestão de parâmetros aproximados",
    "Quando o resultado de uma pesquisa for nulo, o SIGAD pode sugerir outros parâmetros aproximados que possam ser satisfeitos. Por exemplo: Pesquisa inicial com o parâmetro 'Arquivo Naiconal'. O SIGAD apresenta a seguinte mensagem: Você não quis dizer 'Arquivo Nacional'?",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "Facultativo",
    "4",
    "4.3",
    "Apresentação: visualização, impressão, emissão de som"
);

cruzamentoRequisitos3["4.3.10"] = criarRequisito(
    "4.3.10",
    "Definição de metadados a serem impressos",
    "Um SIGAD pode possibilitar a definição dos metadados a serem impressos.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "Facultativo",
    "4",
    "4.3",
    "Apresentação: visualização, impressão, emissão de som"
);

// ============================================================
// CAPÍTULO 5 - ELABORAÇÃO DE DOCUMENTOS
// Seção 5.1 - Procedimentos gerais
// ============================================================

cruzamentoRequisitos3["5.1.1"] = criarRequisito(
    "5.1.1",
    "Automação da produção de documentos",
    "Um SIGAD pode automatizar a produção de documentos por meio da exibição de formulários e modelos predefinidos pelo programa de gestão arquivística de documentos.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "Facultativo",
    "5",
    "5.1",
    "Procedimentos gerais de elaboração"
);

cruzamentoRequisitos3["5.1.2"] = criarRequisito(
    "5.1.2",
    "Vínculos da automatização da produção",
    "Um SIGAD pode vincular à automatização da produção de documentos:\n• numeração automática por espécie documental;\n• classificação arquivística;\n• marcação de sigilo legal;\n• autuação de processo;\n• outras.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "Facultativo",
    "5",
    "5.1",
    "Procedimentos gerais de elaboração"
);

// ============================================================
// Seção 5.5 - Gerenciamento de documentos não digitais e híbridos
// ============================================================

cruzamentoRequisitos3["5.5.6"] = criarRequisito(
    "5.5.6",
    "Mecanismos de código de barras",
    "Um SIGAD pode incluir mecanismos de impressão e reconhecimento de códigos de barras para automatizar a introdução de dados e acompanhar a movimentação de documentos ou dossiês/processos não digitais.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "Facultativo",
    "5",
    "5.5",
    "Gerenciamento de documentos e processos/dossiês arquivísticos não digitais e híbridos"
);

// ============================================================
// CAPÍTULO 6 - TRAMITAÇÃO E FLUXO DE TRABALHO
// Seção 6.1 - Controle do fluxo de trabalho
// ============================================================

cruzamentoRequisitos3["6.1.13"] = criarRequisito(
    "6.1.13",
    "Interrupção temporária de fluxo",
    "Um recurso de fluxo de trabalho de um SIGAD pode permitir que usuários autorizados interrompam ou suspendam temporariamente um fluxo com o objetivo de executar outro trabalho. O fluxo só prosseguirá com a autorização do usuário.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "Facultativo",
    "6",
    "6.1",
    "Controle do fluxo de trabalho"
);

// ============================================================
// CAPÍTULO 7 - SEGURANÇA
// Seção 7.1 - Cópias de segurança
// ============================================================

cruzamentoRequisitos3["7.1.3"] = criarRequisito(
    "7.1.3",
    "Cópias em suportes equivalentes e off-site",
    "É altamente desejável que as mídias removíveis tenham cópias em suportes equivalentes e armazenamento off-site.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "7",
    "7.1",
    "Cópias de segurança"
);

cruzamentoRequisitos3["7.1.4"] = criarRequisito(
    "7.1.4",
    "Backups em dois locais diferentes",
    "É altamente desejável que os discos rígidos tenham backups armazenados em pelo menos dois locais diferentes e fisicamente distantes.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "7",
    "7.1",
    "Cópias de segurança"
);

cruzamentoRequisitos3["7.1.5"] = criarRequisito(
    "7.1.5",
    "Agendamento automático de backups",
    "É altamente desejável que um SIGAD seja capaz de agendar, automaticamente, os backups com periodicidade estipulada pelo administrador. Deve permitir cópias incrementais ou completas.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "7",
    "7.1",
    "Cópias de segurança"
);

cruzamentoRequisitos3["7.1.6"] = criarRequisito(
    "7.1.6",
    "Garantia de integridade das cópias de segurança",
    "É altamente desejável que um SIGAD disponha de mecanismos que garantam a integridade das cópias de segurança, bem como a identificação do responsável pelo procedimento.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "7",
    "7.1",
    "Cópias de segurança"
);

cruzamentoRequisitos3["7.1.8"] = criarRequisito(
    "7.1.8",
    "Backup de dados críticos",
    "É altamente desejável que dados críticos de configuração e controle do sistema operacional e do gerenciador de bancos de dados sejam especialmente protegidos. Mecanismos especiais de backup devem ser previstos para dados críticos.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "7",
    "7.1",
    "Cópias de segurança"
);

cruzamentoRequisitos3["7.1.9"] = criarRequisito(
    "7.1.9",
    "Cópias de trilhas de auditoria off-site",
    "É altamente desejável que as trilhas de auditoria sejam copiadas com frequência, prevendo-se cópias a serem armazenadas em pelo menos um local off-site.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "7",
    "7.1",
    "Cópias de segurança"
);

// ============================================================
// Seção 7.2 - Controle de acesso
// ============================================================

cruzamentoRequisitos3["7.2.4"] = criarRequisito(
    "7.2.4",
    "Alteração de credenciais de autenticação",
    "É altamente desejável que as credenciais de autenticação sejam alteradas pelo usuário proprietário ou pelo administrador, com a anuência do proprietário e em conformidade com a política de segurança.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "7",
    "7.2",
    "Controle de acesso"
);

cruzamentoRequisitos3["7.2.8"] = criarRequisito(
    "7.2.8",
    "Aplicação imediata de alterações de segurança",
    "É altamente desejável que um SIGAD aplique, imediatamente, alterações ou revogações dos atributos de segurança de usuários e de documentos digitais.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "7",
    "7.2",
    "Controle de acesso"
);

cruzamentoRequisitos3["7.2.10"] = criarRequisito(
    "7.2.10",
    "Hierarquia de permissões",
    "Quando um SIGAD controlar o acesso por grupos de usuários, papéis de usuários e usuários individuais, é altamente desejável que obedeça a uma hierarquia de permissões preestabelecida na política de segurança.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "7",
    "7.2",
    "Controle de acesso"
);

cruzamentoRequisitos3["7.2.14"] = criarRequisito(
    "7.2.14",
    "Concessão de acesso por usuários responsáveis",
    "Um SIGAD pode permitir que alguns usuários estipulem que outros usuários, papéis ou grupos de usuários podem ter acesso aos documentos sob sua responsabilidade. Essa permissão deve ser atribuída pelo administrador, de acordo com a política de segurança do órgão ou entidade.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "Facultativo",
    "7",
    "7.2",
    "Controle de acesso"
);

cruzamentoRequisitos3["7.2.19"] = criarRequisito(
    "7.2.19",
    "Hierarquias de papéis e herança de permissões",
    "Um SIGAD pode permitir a criação de hierarquias de papéis e o conceito de herança de permissões entre eles.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "Facultativo",
    "7",
    "7.2",
    "Controle de acesso"
);

// ============================================================
// Seção 7.3 - Classificação da informação quanto ao grau de sigilo
// ============================================================

cruzamentoRequisitos3["7.3.4"] = criarRequisito(
    "7.3.4",
    "Formalização da decisão de classificação",
    "É altamente desejável que um SIGAD formalize a decisão de classificação da informação em qualquer grau de sigilo, conforme legislação vigente. A título de exemplo, o Poder Executivo federal utiliza o Termo de Classificação de Informação - TCI, conforme estabelecido no decreto n. 7.724, de 16 de maio de 2012, que registra as seguintes informações: código de indexação de documento; grau de sigilo; categoria na qual se enquadra a informação; tipo de documento; data da produção do documento; indicação de dispositivo legal que fundamenta a classificação; razões da classificação; indicação do prazo de sigilo, contado em anos, meses ou dias, ou do evento que defina o seu termo final; data da classificação; identificação da autoridade que classificou a informação.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "7",
    "7.3",
    "Classificação da informação quanto ao grau de sigilo e restrição de acesso"
);

cruzamentoRequisitos3["7.3.8"] = criarRequisito(
    "7.3.8",
    "Inexistência de ambiguidade nas marcações de sigilo",
    "É altamente desejável que um SIGAD garanta que não haja ambiguidade na associação entre as marcações de grau de sigilo e outros atributos de segurança (permissões) do documento importado.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "7",
    "7.3",
    "Classificação da informação quanto ao grau de sigilo e restrição de acesso"
);

cruzamentoRequisitos3["7.3.14"] = criarRequisito(
    "7.3.14",
    "Armazenamento de documentos sigilosos em meios distintos",
    "É altamente desejável que um SIGAD permita o armazenamento dos documentos sigilosos em meios físicos ou lógicos distintos dos documentos não sigilosos.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "7",
    "7.3",
    "Classificação da informação quanto ao grau de sigilo e restrição de acesso"
);

// ============================================================
// Seção 7.4 - Trilhas de auditoria
// ============================================================

cruzamentoRequisitos3["7.4.8"] = criarRequisito(
    "7.4.8",
    "Alarme para tamanho da trilha de auditoria",
    "É altamente desejável que um SIGAD seja capaz de gerar um alarme para os administradores apropriados se o tamanho da trilha de auditoria exceder um limite preestabelecido. Esse alarme deve ser usado para indicar a proximidade do esgotamento do espaço reservado à trilha de auditoria.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "7",
    "7.4",
    "Trilhas de auditoria"
);

cruzamentoRequisitos3["7.4.9"] = criarRequisito(
    "7.4.9",
    "Bloqueio de operações ao atingir limite da trilha",
    "Quando o espaço de armazenamento da trilha de auditoria atingir o limite preestabelecido, é altamente desejável que um SIGAD permita somente operações auditáveis originadas por administradores. Todas as outras operações estarão bloqueadas até a liberação pelo administrador.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "7",
    "7.4",
    "Trilhas de auditoria"
);

cruzamentoRequisitos3["7.4.10"] = criarRequisito(
    "7.4.10",
    "Monitoração de eventos auditados",
    "É altamente desejável que um SIGAD seja capaz de aplicar um conjunto de regras na monitoração de eventos auditados e, com base nelas, indicar a possível violação da segurança.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "7",
    "7.4",
    "Trilhas de auditoria"
);

cruzamentoRequisitos3["7.4.11"] = criarRequisito(
    "7.4.11",
    "Regras para monitoração de eventos auditados",
    "É altamente desejável que um SIGAD garanta pelo menos as seguintes regras para monitoração dos eventos auditados:\n• acumulação de um número predeterminado de tentativas consecutivas de login com erro (autenticação malsucedida), conforme especificado pela política de segurança;\n• ocorrência de vários login simultâneos do mesmo usuário em locais (computadores) diferentes;\n• login do usuário fora do horário autorizado, após logoff no período normal.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "7",
    "7.4",
    "Trilhas de auditoria"
);

cruzamentoRequisitos3["7.4.13"] = criarRequisito(
    "7.4.13",
    "Relatórios por posto de trabalho",
    "Um SIGAD pode fornecer relatórios referentes a ações que afetem documentos e dossiês/processos organizados por posto de trabalho (nos casos em que for tecnicamente adequado), endereço de rede ou outra interface de acesso. Alguns sistemas podem oferecer diversas interfaces de acesso aos documentos. Por exemplo, interface web externa, interface da intranet e interface desktop. Pode ser interessante o registro da interface de acesso usada.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "Facultativo",
    "7",
    "7.4",
    "Trilhas de auditoria"
);

// ============================================================
// Seção 7.5 - Assinatura digital
// ============================================================

cruzamentoRequisitos3["7.5.1"] = criarRequisito(
    "7.5.1",
    "Verificação de origem e integridade com assinatura digital",
    "É altamente desejável que um SIGAD seja capaz de prover meios para se verificar a origem e a integridade dos documentos com assinatura digital.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "7",
    "7.5",
    "Assinatura digital"
);

cruzamentoRequisitos3["7.5.2"] = criarRequisito(
    "7.5.2",
    "Inclusão e remoção de certificados digitais",
    "Somente administradores autorizados têm que ser capazes de incluir, remover ou atualizar no SIGAD os certificados digitais de computadores ou de usuários.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "Facultativo",
    "7",
    "7.5",
    "Assinatura digital"
);

// ============================================================
// Seção 7.7 - Marcas d'água digitais
// ============================================================

cruzamentoRequisitos3["7.7.3"] = criarRequisito(
    "7.7.3",
    "Atualizações tecnológicas de marcas d'água",
    "É altamente desejável que um SIGAD possua arquitetura capaz de receber atualizações tecnológicas no que se refere à plataforma de geração e detecção de marca d'água digital.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "7",
    "7.7",
    "Marcas d'água digitais"
);

// ============================================================
// Seção 7.9 - Criptografia
// ============================================================

cruzamentoRequisitos3["7.9.1"] = criarRequisito(
    "7.9.1",
    "Uso de criptografia para sigilo",
    "Um SIGAD tem que usar criptografia no armazenamento, na transmissão e na apresentação de documentos arquivísticos digitais ao implementar a política de sigilo.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "Facultativo",
    "7",
    "7.9",
    "Criptografia"
);

cruzamentoRequisitos3["7.9.2"] = criarRequisito(
    "7.9.2",
    "Acesso a documentos cifrados",
    "Um SIGAD tem que limitar o acesso aos documentos cifrados somente àqueles usuários portadores da chave de decifração.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "Facultativo",
    "7",
    "7.9",
    "Criptografia"
);

cruzamentoRequisitos3["7.9.4"] = criarRequisito(
    "7.9.4",
    "Captura direta de documentos cifrados",
    "É altamente desejável que um SIGAD possa assegurar a captura de documentos cifrados, diretamente, de uma aplicação de software que disponha da funcionalidade de cifração.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "7",
    "7.9",
    "Criptografia"
);

cruzamentoRequisitos3["7.9.5"] = criarRequisito(
    "7.9.5",
    "Operações com criptografia",
    "Somente usuários autorizados têm que ser capazes de realizar as operações a seguir:\n• incluir, remover ou alterar parâmetros dos algoritmos criptográficos instalados no SIGAD;\n• incluir, remover ou substituir chaves criptográficas de programas ou usuários do SIGAD;\n• cifrar e alterar a criptografia de documentos;\n• remover a criptografia de um documento.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "Facultativo",
    "7",
    "7.9",
    "Criptografia"
);

cruzamentoRequisitos3["7.9.6"] = criarRequisito(
    "7.9.6",
    "Registro de remoção de cifração",
    "Em caso de remoção da cifração do documento, os seguintes metadados adicionais têm que ser registrados na trilha de auditoria:\n• data e hora da remoção da cifração;\n• identificação do executor da operação;\n• motivo da remoção da cifração.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "Facultativo",
    "7",
    "7.9",
    "Criptografia"
);

cruzamentoRequisitos3["7.9.7"] = criarRequisito(
    "7.9.7",
    "Atualizações tecnológicas de criptografia",
    "É altamente desejável que um SIGAD possua arquitetura capaz de receber atualizações tecnológicas no que se refere à plataforma criptográfica.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "7",
    "7.9",
    "Criptografia"
);

// ============================================================
// Seção 7.10 - Acompanhamento de mudança de suporte ou de local
// ============================================================

cruzamentoRequisitos3["7.10.1"] = criarRequisito(
    "7.10.1",
    "Histórico de mudanças de mídia",
    "É altamente desejável que um SIGAD seja capaz de manter, para cada documento ou dossiê/processo, o histórico das mudanças de mídia sofridas por esse documento ou dossiê/processo.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "7",
    "7.10",
    "Acompanhamento de mudança de suporte ou de local"
);

// ============================================================
// Seção 7.11 - Autoproteção
// ============================================================

cruzamentoRequisitos3["7.11.1"] = criarRequisito(
    "7.11.1",
    "Verificação de vírus antes da captura",
    "É altamente desejável que um SIGAD faça a verificação de vírus ou pragas antes da efetivação da captura.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "7",
    "7.11",
    "Autoproteção"
);

cruzamentoRequisitos3["7.11.2"] = criarRequisito(
    "7.11.2",
    "Redução de possibilidade de erros e falhas",
    "É altamente desejável que um SIGAD tenha dispositivos e procedimentos que reduzam a possibilidade de erros, falhas e descontinuidades no seu funcionamento, capazes de causar danos ou perdas aos documentos arquivísticos digitais.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "7",
    "7.11",
    "Autoproteção"
);

cruzamentoRequisitos3["7.11.4"] = criarRequisito(
    "7.11.4",
    "Garantia de recuperação de perdas",
    "Na restauração ao estado seguro, um SIGAD deve ser capaz de garantir a recuperação de perdas ocorridas, inclusive dos documentos de transações mais recentes.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "7",
    "7.11",
    "Autoproteção"
);

cruzamentoRequisitos3["7.11.5"] = criarRequisito(
    "7.11.5",
    "Consistência dos dados de segurança replicados",
    "É altamente desejável que um SIGAD garanta que os dados de segurança, quando replicados, sejam consistentes.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "7",
    "7.11",
    "Autoproteção"
);

cruzamentoRequisitos3["7.11.9"] = criarRequisito(
    "7.11.9",
    "Bloqueio de operações se não for possível escrever na trilha",
    "Quando não for possível escrever na trilha de auditoria, é altamente desejável que um SIGAD impeça toda operação de qualquer usuário e passe para o modo de manutenção.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "7",
    "7.11",
    "Autoproteção"
);

cruzamentoRequisitos3["7.11.10"] = criarRequisito(
    "7.11.10",
    "Código de manutenção de integridade",
    "Um SIGAD pode atribuir a cada componente digital do documento, no momento da captura, um código de manutenção de integridade baseado em criptografia robusta.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "Facultativo",
    "7",
    "7.11",
    "Autoproteção"
);

// ============================================================
// Seção 7.12 - Alterar, apagar e truncar documentos
// ============================================================

cruzamentoRequisitos3["7.12.2"] = criarRequisito(
    "7.12.2",
    "Inibição de eliminação em lote fora do processo regular",
    "É altamente desejável que um SIGAD, para evitar erros irrecuperáveis, iniba a eliminação (permanente ou lógica) de grupos ou lotes de documentos fora do processo regular de eliminação previsto na tabela de temporalidade e destinação de documentos.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "7",
    "7.12",
    "Alterar, apagar e truncar documentos arquivísticos digitais"
);

cruzamentoRequisitos3["7.12.9"] = criarRequisito(
    "7.12.9",
    "Referência cruzada à cópia truncada",
    "É altamente desejável que um SIGAD registre uma referência cruzada a uma cópia truncada nos mesmos dossiês/processos e documentos em que se encontra o documento original.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "7",
    "7.12",
    "Alterar, apagar e truncar documentos arquivísticos digitais"
);

// ============================================================
// CAPÍTULO 8 - PRESERVAÇÃO
// Seção 8.1 - Aspectos físicos
// ============================================================

cruzamentoRequisitos3["8.1.2"] = criarRequisito(
    "8.1.2",
    "Especificação da vida útil dos suportes",
    "É altamente desejável que um SIGAD permita ao administrador especificar a vida útil prevista/pretendida dos suportes.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "8",
    "8.1",
    "Aspectos físicos da preservação"
);

cruzamentoRequisitos3["8.1.4"] = criarRequisito(
    "8.1.4",
    "Informação automática sobre fim de vida útil",
    "É altamente desejável que um SIGAD informe, automaticamente, quais são os suportes cuja vida útil se encontra perto do fim.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "8",
    "8.1",
    "Aspectos físicos da preservação"
);

// ============================================================
// Seção 8.2 - Aspectos lógicos
// ============================================================

cruzamentoRequisitos3["8.2.4"] = criarRequisito(
    "8.2.4",
    "Correção de erros em dados armazenados",
    "Um SIGAD pode permitir a correção dos erros detectados nos dados e documentos armazenados. Nesse contexto, a correção de erros refere-se à restauração de dados corrompidos.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "Facultativo",
    "8",
    "8.2",
    "Aspectos lógicos da preservação"
);

cruzamentoRequisitos3["8.2.5"] = criarRequisito(
    "8.2.5",
    "Informação sobre verificação periódica",
    "É altamente desejável que um SIGAD informe os resultados da verificação periódica dos dados armazenados, incluindo os erros detectados, bem como as substituições e correções de dados realizadas.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "8",
    "8.2",
    "Aspectos lógicos da preservação"
);

cruzamentoRequisitos3["8.2.6"] = criarRequisito(
    "8.2.6",
    "Histórico de verificação periódica",
    "É altamente desejável que um SIGAD mantenha um histórico dos resultados da verificação periódica dos dados e documentos armazenados.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "8",
    "8.2",
    "Aspectos lógicos da preservação"
);

// ============================================================
// Seção 8.3 - Aspectos gerais
// ============================================================

cruzamentoRequisitos3["8.3.2"] = criarRequisito(
    "8.3.2",
    "Uso de suportes e recursos maduros e estáveis",
    "É altamente desejável que um SIGAD utilize suportes de armazenamento e recursos de hardware e software que sejam maduros, estáveis no mercado e amplamente disponíveis.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "8",
    "8.3",
    "Aspectos gerais da preservação"
);

cruzamentoRequisitos3["8.3.4"] = criarRequisito(
    "8.3.4",
    "Uso de normas abertas",
    "É altamente desejável que um SIGAD utilize normas amplamente aceitas, descritas em especificações abertas e disponíveis publicamente, no que se refere a estruturas para codificação, armazenamento e banco de dados.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "8",
    "8.3",
    "Aspectos gerais da preservação"
);

cruzamentoRequisitos3["8.3.5"] = criarRequisito(
    "8.3.5",
    "Documentação de estruturas proprietárias",
    "É altamente desejável que um SIGAD evite o uso de estruturas proprietárias para codificação, armazenamento ou banco de dados. Caso venha a utilizá-las, devem estar plenamente documentadas, e essa documentação, disponível para o administrador.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "8",
    "8.3",
    "Aspectos gerais da preservação"
);

// ============================================================
// CAPÍTULO 9 - ARMAZENAMENTO
// Seção 9.1 - Durabilidade
// ============================================================

cruzamentoRequisitos3["9.1.1"] = criarRequisito(
    "9.1.1",
    "Dispositivos maduros e estáveis",
    "É altamente desejável que um SIGAD utilize, preferencialmente, dispositivos e padrões de armazenamento maduros, estáveis no mercado e amplamente disponíveis. Um SIGAD deve utilizar, preferencialmente, padrões abertos de armazenamento. A escolha dos dispositivos de armazenamento deve contemplar padrões estáveis de mercado e fornecedores consolidados.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "9",
    "9.1",
    "Durabilidade do armazenamento"
);

cruzamentoRequisitos3["9.1.6"] = criarRequisito(
    "9.1.6",
    "Estatísticas de durabilidade observada",
    "Para as memórias secundárias e terciárias, é altamente desejável que um SIGAD mantenha estatísticas da durabilidade efetivamente observada.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "9",
    "9.1",
    "Durabilidade do armazenamento"
);

cruzamentoRequisitos3["9.1.7"] = criarRequisito(
    "9.1.7",
    "Acesso a memória terciária via rede",
    "O acesso às informações armazenadas em memória terciária deve ser efetuado, preferencialmente, mediante o uso de rede de dados. O objetivo é minimizar o acesso físico às mídias, visando à diminuição do desgaste. A manipulação direta das mídias deve ser restrita aos administradores do SIGAD, e não aos usuários comuns.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "9",
    "9.1",
    "Durabilidade do armazenamento"
);

// ============================================================
// Seção 9.2 - Capacidade
// ============================================================

cruzamentoRequisitos3["9.2.3"] = criarRequisito(
    "9.2.3",
    "Configuração de limites de capacidade",
    "É altamente desejável que um SIGAD permita ao administrador configurar os limites de capacidade de armazenamento dos diversos dispositivos.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "9",
    "9.2",
    "Capacidade de armazenamento"
);

cruzamentoRequisitos3["9.2.4"] = criarRequisito(
    "9.2.4",
    "Monitoração da capacidade de armazenamento",
    "É altamente desejável que um SIGAD ofereça ao administrador facilidades para monitoração da capacidade de armazenamento. Esse controle indica, por exemplo, capacidade utilizada, capacidade disponível e taxa de ocupação. Tais informações são úteis para subsidiar ações de expansão em tempo hábil.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "9",
    "9.2",
    "Capacidade de armazenamento"
);

cruzamentoRequisitos3["9.2.5"] = criarRequisito(
    "9.2.5",
    "Informação automática sobre níveis críticos",
    "É altamente desejável que um SIGAD informe, automaticamente, ao administrador quando os dispositivos de armazenamento on-line atingirem níveis críticos de ocupação.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "9",
    "9.2",
    "Capacidade de armazenamento"
);

cruzamentoRequisitos3["9.2.6"] = criarRequisito(
    "9.2.6",
    "Estatísticas de taxa de crescimento",
    "É altamente desejável que um SIGAD mantenha estatísticas de taxa de crescimento de utilização de memória secundária e terciária para informar ao administrador previsões de exaustão de recursos. Este tipo de estimativa possibilita ao administrador antecipar ações de expansão antes que a utilização atinja níveis críticos.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "9",
    "9.2",
    "Capacidade de armazenamento"
);

// ============================================================
// Seção 9.3 - Efetividade de armazenamento
// ============================================================

cruzamentoRequisitos3["9.3.1"] = criarRequisito(
    "9.3.1",
    "Métodos de detecção de erros",
    "É altamente desejável que os dispositivos de armazenamento de um SIGAD suportem métodos de detecção de erros para leitura e escrita de dados.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "9",
    "9.3",
    "Efetividade de armazenamento"
);

cruzamentoRequisitos3["9.3.4"] = criarRequisito(
    "9.3.4",
    "Técnicas para maior confiabilidade e desempenho",
    "É altamente desejável que a infraestrutura de um SIGAD preveja o uso de técnicas para garantir maior confiabilidade e desempenho. As técnicas recomendadas incluem:\n• espelhamento (mirroring) nas memórias secundárias para maior confiabilidade;\n• partição de dados (data stripping) nas memórias secundárias para maior desempenho.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "9",
    "9.3",
    "Efetividade de armazenamento"
);

// ============================================================
// CAPÍTULO 12 - USABILIDADE
// ============================================================

cruzamentoRequisitos3["12.1.2"] = criarRequisito(
    "12.1.2",
    "Sistema de ajuda on-line",
    "É altamente desejável que um SIGAD possua sistema de ajuda on-line.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "12",
    "12.1",
    "Usabilidade"
);

cruzamentoRequisitos3["12.1.3"] = criarRequisito(
    "12.1.3",
    "Ajuda vinculada à função ou tarefa",
    "É altamente desejável que o sistema de ajuda on-line fornecido pelo SIGAD seja vinculado à função ou tarefa executada, em todo o sistema. Exemplo: se o usuário estiver executando uma operação de edição, uma vez acionada a ajuda, ela deve remeter ao tópico de ajuda sobre edição.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "12",
    "12.1",
    "Usabilidade"
);

cruzamentoRequisitos3["12.1.4"] = criarRequisito(
    "12.1.4",
    "Personalização do conteúdo de ajuda",
    "É altamente desejável que um SIGAD permita a personalização de conteúdo de ajuda on-line por adição de texto ou edição do texto existente. Exemplo: o responsável pela administração do conteúdo da ajuda pode adicionar esclarecimentos ou alterar o conteúdo das descrições, de modo a facilitar o entendimento das funções.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "12",
    "12.1",
    "Usabilidade"
);

cruzamentoRequisitos3["12.1.5"] = criarRequisito(
    "12.1.5",
    "Mensagens de erro claras e significativas",
    "É altamente desejável que toda mensagem de erro produzida pelo SIGAD seja clara e significativa, de modo a permitir que o usuário se recupere do erro ou cancele a operação.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "12",
    "12.1",
    "Usabilidade"
);

cruzamentoRequisitos3["12.1.6"] = criarRequisito(
    "12.1.6",
    "Interface segue padrões de boas práticas",
    "É altamente desejável que a interface de um SIGAD siga padrões preestabelecidos e consolidados como boas práticas de projeto gráfico. Normas ou regras de interface podem ser relativas à utilização de padrão de identidade visual (ligado à 'marca' da instituição ou a alguma legislação específica do estado, município ou órgão federal), bem como de guias de estilo para implementação e verificação da padronização da interface.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "12",
    "12.1",
    "Usabilidade"
);

cruzamentoRequisitos3["12.1.7"] = criarRequisito(
    "12.1.7",
    "Conjunto simples e consistente de regras de interface",
    "É altamente desejável que um SIGAD empregue um conjunto simples e consistente de regras de interface, privilegiando a facilidade de aprendizado das operações pelos seus usuários. O uso de um conjunto de regras em conformidade com o ambiente operacional em que o SIGAD será executado permite que ele apresente menus, comandos e outras facilidades consistentes em toda a aplicação. Essas regras de interface, quando compatíveis com outras aplicações principais já instaladas, levam à padronização da terminologia utilizada para funções, rótulos e ações no sistema.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "12",
    "12.1",
    "Usabilidade"
);

cruzamentoRequisitos3["12.1.8"] = criarRequisito(
    "12.1.8",
    "Recurso de arrastar e soltar",
    "É altamente desejável que a interface de visualização dos documentos arquivísticos forneça o recurso de arrastar e soltar, se for apropriado no ambiente operacional do SIGAD.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "12",
    "12.1",
    "Usabilidade"
);

cruzamentoRequisitos3["12.1.9"] = criarRequisito(
    "12.1.9",
    "Visualização da estrutura em diferentes formas",
    "É altamente desejável que o SIGAD permita que sua estrutura de classes e dossiês/processos possa ser visualizada em diferentes formas de apresentação.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "12",
    "12.1",
    "Usabilidade"
);

cruzamentoRequisitos3["12.1.10"] = criarRequisito(
    "12.1.10",
    "Personalização da interface gráfica",
    "É altamente desejável que o usuário possa personalizar a interface gráfica de um SIGAD. A personalização deve incluir, pelo menos, as seguintes possibilidades:\n• conteúdo de menus;\n• formatos de tela;\n• utilização de teclas de função;\n• alteração de cor, fonte e tamanho de letra em telas e janelas;\n• avisos sonoros.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "12",
    "12.1",
    "Usabilidade"
);

cruzamentoRequisitos3["12.1.11"] = criarRequisito(
    "12.1.11",
    "Configuração de janelas pop-up e barras de ferramentas",
    "É altamente desejável que um SIGAD, sempre que utilizar janelas pop-up e barras de ferramentas, ofereça ao usuário a possibilidade de configurar e habilitar/desabilitar esse tipo de recurso. Porém, é preciso não infringir a recomendação de uso de um conjunto simples e consistente de regras de interface.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "12",
    "12.1",
    "Usabilidade"
);

cruzamentoRequisitos3["12.1.12"] = criarRequisito(
    "12.1.12",
    "Movimentação e redimensionamento de janelas",
    "É altamente desejável que, sempre que um SIGAD permitir o uso de janelas, admita sua movimentação, redimensionamento e gravação das modificações da aparência, possibilitando a personalização por perfil de usuário.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "12",
    "12.1",
    "Usabilidade"
);

cruzamentoRequisitos3["12.1.13"] = criarRequisito(
    "12.1.13",
    "Personalização de avisos sonoros",
    "É altamente desejável que um SIGAD permita a seleção de avisos sonoros e a personalização de tom e volume, bem como a gravação dessas escolhas no perfil do usuário.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "12",
    "12.1",
    "Usabilidade"
);

cruzamentoRequisitos3["12.1.14"] = criarRequisito(
    "12.1.14",
    "Gravação de opções default",
    "É altamente desejável que um SIGAD permita a gravação de opções default para entrada de dados de configuração, como:\n• valores de variáveis definidas pelo usuário;\n• valores iguais aos de um item anterior;\n• valores que possam ser selecionados em uma lista configurável;\n• valores derivados do contexto, como data, referência do dossiê/processo, identificador do usuário;\n• valores predefinidos por um administrador (para campos de metadados como, por exemplo, o nome da organização que está utilizando o sistema).",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "12",
    "12.1",
    "Usabilidade"
);

cruzamentoRequisitos3["12.1.16"] = criarRequisito(
    "12.1.16",
    "Transações com pequeno número de interações",
    "É altamente desejável que um SIGAD permita a realização de transações ou tarefas mais frequentemente executadas com um pequeno número de interações (por exemplo, cliques de mouse) e sem mudanças excessivas de contexto.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "12",
    "12.1",
    "Usabilidade"
);

cruzamentoRequisitos3["12.1.17"] = criarRequisito(
    "12.1.17",
    "Integração com sistema de correio eletrônico",
    "É altamente desejável que um SIGAD esteja fortemente integrado ao sistema de correio eletrônico da organização, de forma a permitir a geração de mensagens com possibilidade de manipular documentos digitais, sem necessidade de sair do SIGAD. Este requisito deve estar de acordo com as normas de segurança.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "12",
    "12.1",
    "Usabilidade"
);

cruzamentoRequisitos3["12.1.18"] = criarRequisito(
    "12.1.18",
    "Referência a documentos sem envio de cópias",
    "Em caso de integração do SIGAD com o sistema de correio eletrônico, é altamente desejável que seja possível fazer referências a documentos arquivísticos sem necessidade de envio de cópias adicionais.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "12",
    "12.1",
    "Usabilidade"
);

cruzamentoRequisitos3["12.1.19"] = criarRequisito(
    "12.1.19",
    "Integração com sistema de edição de documentos",
    "É altamente desejável que um SIGAD esteja integrado com o sistema padrão de edição de documentos, de modo que possa fazer uso da facilidade de gravação.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "12",
    "12.1",
    "Usabilidade"
);

cruzamentoRequisitos3["12.1.21"] = criarRequisito(
    "12.1.21",
    "Referências cruzadas entre documentos",
    "É altamente desejável que um SIGAD permita a definição e utilização de referências cruzadas entre documentos arquivísticos digitais correlacionados, bem como a fácil navegação entre eles, inclusive com o uso de hyperlinks. O uso de hiperlinks deve ser limitado a documentos dentro do mesmo processo/dossiê. Hiperlinks com documentos externos ao ambiente, ou mesmo em outros processos/dossiês, podem ficar obsoletos ao longo do tempo, comprometendo a completitude do processo/dossiê.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "12",
    "12.1",
    "Usabilidade"
);

cruzamentoRequisitos3["12.1.22"] = criarRequisito(
    "12.1.22",
    "Papéis de acesso diferenciados",
    "É altamente desejável que um SIGAD disponibilize pelo menos dois papéis de acesso diferenciados, um para usuário final e outro para administrador de sistema.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "12",
    "12.1",
    "Usabilidade"
);

cruzamentoRequisitos3["12.1.23"] = criarRequisito(
    "12.1.23",
    "Funções intuitivas e fáceis de usar",
    "É altamente desejável que um SIGAD forneça a usuários finais e administradores funções intuitivas e fáceis de usar, que requeiram poucas ações para completar uma tarefa padrão. Sobretudo durante sua operação normal, um SIGAD deve ser capaz de:\n• capturar e declarar um documento arquivístico com no máximo três cliques de mouse ou acionamentos de tecla;\n• apresentar todos os elementos de metadados obrigatórios para a captura do documento com mínima demanda para o usuário;\n• apresentar o conteúdo de um documento arquivístico, a partir de uma lista de pesquisa, com no máximo três cliques de mouse ou acionamentos de tecla;\n• apresentar os metadados de um documento arquivístico com no máximo três cliques de mouse ou acionamentos de tecla.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "12",
    "12.1",
    "Usabilidade"
);

cruzamentoRequisitos3["12.1.25"] = criarRequisito(
    "12.1.25",
    "Condições de operação",
    "É altamente desejável que um SIGAD leve em consideração as condições de operação, como ruído, luminosidade, necessidade de rapidez na conclusão da tarefa, demandas específicas para dispositivos móveis, ambiente desktop/web e necessidade de instalação automática, para configurar as formas de interação com o usuário. Exemplo: não devem ser utilizados menus audíveis em ambientes que apresentam alto volume de ruído próximo aos terminais de usuários.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "12",
    "12.1",
    "Usabilidade"
);

// ============================================================
// CAPÍTULO 15 - DESEMPENHO E ESCALABILIDADE
// ============================================================

cruzamentoRequisitos3["15.1.1"] = criarRequisito(
    "15.1.1",
    "Estatísticas de tempos de atendimento",
    "É altamente desejável que um SIGAD mantenha estatísticas dos tempos de atendimento, discriminadas por tipo de operação.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "15",
    "15.1",
    "Desempenho e escalabilidade"
);

cruzamentoRequisitos3["15.1.2"] = criarRequisito(
    "15.1.2",
    "Expansibilidade para usuários simultâneos",
    "É altamente desejável que um SIGAD seja expansível até comportar um número máximo, preestabelecido, de usuários simultâneos, provendo a continuidade efetiva dos serviços.",
    "VERIFICAR!!",
    "Requisito pendente de verificação - não constava no levantamento anterior.",
    "e-ARQ Desejável",
    "15",
    "15.1",
    "Desempenho e escalabilidade"
);

// ============================================================
// FUNÇÕES AUXILIARES
// ============================================================

function getRequisitosPorStatus(status) {
    return Object.values(cruzamentoRequisitos3).filter(r => r.status === status);
}

function getRequisitosPorGrupo(grupo) {
    return Object.values(cruzamentoRequisitos3).filter(r => r.grupo === grupo);
}

function getRequisitosPorCapitulo(capitulo) {
    return Object.values(cruzamentoRequisitos3).filter(r => r.capitulo === capitulo);
}

function getRequisitosPorSecao(secao) {
    return Object.values(cruzamentoRequisitos3).filter(r => r.secao === secao);
}

function getEstatisticas() {
    const total = Object.keys(cruzamentoRequisitos3).length;
    const aVerificar = getRequisitosPorStatus('VERIFICAR!!').length;

    return {
        total,
        aVerificar,
    };
}

function getBugsAbertos() {
    const bugs = [];
    Object.values(cruzamentoRequisitos3).forEach(req => {
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
    return Object.values(cruzamentoRequisitos3).filter(r =>
        r.status === 'VERIFICAR!!' || r.status === 'Não Atendido' || r.status === 'Parcialmente Atendido'
    );
}

function getResumoPorGrupo() {
    const grupos = {};
    Object.values(cruzamentoRequisitos3).forEach(r => {
        if (!grupos[r.grupo]) {
            grupos[r.grupo] = { total: 0, aVerificar: 0 };
        }
        grupos[r.grupo].total++;
        if (r.status === 'VERIFICAR!!') grupos[r.grupo].aVerificar++;
    });
    return grupos;
}

function getCapitulos() {
    const capitulos = {};
    Object.values(cruzamentoRequisitos3).forEach(r => {
        const key = r.capitulo;
        if (!capitulos[key]) {
            capitulos[key] = {
                nome: r.capitulo,
                secao: r.secao,
                total: 0,
                aVerificar: 0,
                requisitos: []
            };
        }
        capitulos[key].total++;
        capitulos[key].requisitos.push(r);
        if (r.status === 'VERIFICAR!!') capitulos[key].aVerificar++;
    });
    return capitulos;
}

// Exportar para uso
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        cruzamentoRequisitos3,
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