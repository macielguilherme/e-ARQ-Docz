// ============================================================
// CRUZAMENTO DE REQUISITOS E-ARQ BRASIL × DocZ
// REQUISITOS FALTANTES - VERSÃO 2
// ============================================================
// ESTES REQUISITOS PRECISAM SER VERIFICADOS
// ============================================================

const cruzamentoRequisitos2 = {};

// ============================================================
// FUNÇÃO AUXILIAR
// ============================================================
function criarRequisito(id, titulo, descricao, status, justificativa, grupo, capitulo, secao, subsecao) {
    return {
        id,
        titulo,
        descricao,
        status: status || 'VERIFICAR!!',
        justificativa: justificativa || 'Requisito pendente de verificação.',
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
        observacoes: ['Pendente de verificação - requisito faltante no levantamento anterior'],
        bugs: []
    };
}

// ============================================================
// CAPÍTULO 1 - ORGANIZAÇÃO DOS DOCUMENTOS ARQUIVÍSTICOS
// Seção 1.1 - Configuração e administração do plano de classificação
// ============================================================

cruzamentoRequisitos2["1.1.4"] = criarRequisito(
    "1.1.4",
    "Registro da data de abertura de nova classe",
    "Um SIGAD tem que registrar a data de abertura de uma nova classe no respectivo metadado.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "1",
    "1.1",
    "Configuração e administração do plano de classificação no SIGAD"
);

cruzamentoRequisitos2["1.1.5"] = criarRequisito(
    "1.1.5",
    "Registro de mudança de nome, identificador e código de classe",
    "Um SIGAD tem que registrar a mudança de nome, identificador e código de uma classe já existente no respectivo metadado.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "1",
    "1.1",
    "Configuração e administração do plano de classificação no SIGAD"
);

cruzamentoRequisitos2["1.1.6"] = criarRequisito(
    "1.1.6",
    "Deslocamento, desmembramento ou fusão de classes",
    "Um SIGAD tem que permitir o deslocamento de uma classe inteira, incluídas as subclasses, grupo, subgrupos e documentos nela classificados, para outro ponto do plano de classificação, bem como o desmembramento ou fusão de classes. Nesse caso, é necessário fazer o registro do deslocamento nos metadados do plano de classificação.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "1",
    "1.1",
    "Configuração e administração do plano de classificação no SIGAD"
);

cruzamentoRequisitos2["1.1.8"] = criarRequisito(
    "1.1.8",
    "Apagamento de classe inativa",
    "Um SIGAD tem que permitir que um usuário autorizado apague uma classe inativa.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "1",
    "1.1",
    "Configuração e administração do plano de classificação no SIGAD"
);

cruzamentoRequisitos2["1.1.9"] = criarRequisito(
    "1.1.9",
    "Impedimento de eliminação de classe com documentos",
    "Um SIGAD tem que impedir a eliminação de uma classe que tenha documentos nela classificados. Essa eliminação pode ocorrer a partir do momento em que todos os documentos ali classificados tenham sido recolhidos ou eliminados ou que esses documentos tenham sido reclassificados.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "1",
    "1.1",
    "Configuração e administração do plano de classificação no SIGAD"
);

cruzamentoRequisitos2["1.1.10"] = criarRequisito(
    "1.1.10",
    "Associação de metadados às classes",
    "Um SIGAD tem que permitir a associação de metadados às classes, conforme estabelecido no padrão de metadados, e deve restringir a inclusão e alteração desses mesmos metadados somente a usuários autorizados.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "1",
    "1.1",
    "Configuração e administração do plano de classificação no SIGAD"
);

cruzamentoRequisitos2["1.1.12"] = criarRequisito(
    "1.1.12",
    "Atributo de permissão de uso da classe",
    "É altamente desejável que um SIGAD preveja um atributo associado às classes para registrar a permissão de uso daquela classe para classificar um documento. Em algumas classes, não é permitido incluir documentos. Nesse caso, os documentos devem ser classificados apenas nos níveis subordinados.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "1",
    "1.1",
    "Configuração e administração do plano de classificação no SIGAD"
);

cruzamentoRequisitos2["1.1.13"] = criarRequisito(
    "1.1.13",
    "Utilização do termo completo para identificar classe",
    "Um SIGAD tem que utilizar o termo completo para identificar uma classe. Entende-se por termo completo toda a hierarquia referente àquela classe.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "1",
    "1.1",
    "Configuração e administração do plano de classificação no SIGAD"
);

cruzamentoRequisitos2["1.1.14"] = criarRequisito(
    "1.1.14",
    "Unicidade dos termos completos",
    "Um SIGAD tem que assegurar que os termos completos, que identificam cada classe, sejam únicos no plano de classificação.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "1",
    "1.1",
    "Configuração e administração do plano de classificação no SIGAD"
);

cruzamentoRequisitos2["1.1.15"] = criarRequisito(
    "1.1.15",
    "Pesquisa e navegação gráfica no plano de classificação",
    "Um SIGAD pode prever pesquisa e navegação na estrutura do plano de classificação por meio de uma interface gráfica.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "Facultativo",
    "1",
    "1.1",
    "Configuração e administração do plano de classificação no SIGAD"
);

cruzamentoRequisitos2["1.1.18"] = criarRequisito(
    "1.1.18",
    "Consulta ao plano de classificação por qualquer atributo",
    "É altamente desejável que um SIGAD possibilite a consulta ao plano de classificação a partir de qualquer atributo ou combinação de atributos, e emita relatório com os resultados obtidos.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "1",
    "1.1",
    "Configuração e administração do plano de classificação no SIGAD"
);

// ============================================================
// Seção 1.2 - Configuração da tabela de temporalidade e destinação
// ============================================================

cruzamentoRequisitos2["1.2.5"] = criarRequisito(
    "1.2.5",
    "Definição dos prazos de guarda em meses ou anos",
    "Um SIGAD tem que prever que a definição dos prazos de guarda seja expressa por: um número inteiro de meses ou um número inteiro de anos.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "1",
    "1.2",
    "Configuração da tabela de temporalidade e destinação de documentos"
);

cruzamentoRequisitos2["1.2.6"] = criarRequisito(
    "1.2.6",
    "Limitação da definição e manutenção da tabela",
    "Um SIGAD tem que limitar a definição e a manutenção (alteração, inclusão e exclusão) da tabela de temporalidade e destinação de documentos a usuários autorizados.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "1",
    "1.2",
    "Configuração da tabela de temporalidade e destinação de documentos"
);

// ============================================================
// Seção 1.3 - Classificação e metadados das unidades de arquivamento
// ============================================================

cruzamentoRequisitos2["1.3.2"] = criarRequisito(
    "1.3.2",
    "Número ilimitado de unidades de arquivamento por classe",
    "Um SIGAD tem que permitir a classificação de um número ilimitado de unidades de arquivamento dentro de uma classe.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "1",
    "1.3",
    "Classificação e metadados das unidades de arquivamento"
);

cruzamentoRequisitos2["1.3.3"] = criarRequisito(
    "1.3.3",
    "Utilização do termo completo da classe",
    "Um SIGAD tem que utilizar o termo completo da classe para identificar uma unidade de arquivamento, tal como especificado no requisito 1.1.13.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "1",
    "1.3",
    "Classificação e metadados das unidades de arquivamento"
);

cruzamentoRequisitos2["1.3.4"] = criarRequisito(
    "1.3.4",
    "Associação de metadados às unidades de arquivamento",
    "Um SIGAD tem que permitir a associação de metadados às unidades de arquivamento e deve restringir a inclusão e alteração desses metadados a usuários autorizados. A alteração de metadado só deve ser realizada para correção de erro.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "1",
    "1.3",
    "Classificação e metadados das unidades de arquivamento"
);

cruzamentoRequisitos2["1.3.5"] = criarRequisito(
    "1.3.5",
    "Associação de metadados conforme padrão",
    "Um SIGAD tem que associar os metadados das unidades de arquivamento conforme estabelecido no padrão de metadados.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "1",
    "1.3",
    "Classificação e metadados das unidades de arquivamento"
);

cruzamentoRequisitos2["1.3.6"] = criarRequisito(
    "1.3.6",
    "Herança de metadados da classe",
    "Um SIGAD tem que permitir que uma nova unidade de arquivamento herde, da classe em que foi classificada, alguns metadados predefinidos. Exemplos desta herança são prazos de guarda previstos na tabela de temporalidade e destinação e restrição de acesso.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "1",
    "1.3",
    "Classificação e metadados das unidades de arquivamento"
);

cruzamentoRequisitos2["1.3.7"] = criarRequisito(
    "1.3.7",
    "Atualização automática de metadados herdados",
    "Um SIGAD tem que relacionar os metadados herdados de forma que uma alteração no metadado de uma classe seja automaticamente incorporada à unidade de arquivamento que herdou esse metadado.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "1",
    "1.3",
    "Classificação e metadados das unidades de arquivamento"
);

cruzamentoRequisitos2["1.3.8"] = criarRequisito(
    "1.3.8",
    "Alteração conjunta de metadados em grupo",
    "Um SIGAD pode permitir a alteração conjunta de um determinado metadado em um grupo de unidades de arquivamento previamente selecionado.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "Facultativo",
    "1",
    "1.3",
    "Classificação e metadados das unidades de arquivamento"
);

cruzamentoRequisitos2["1.3.10"] = criarRequisito(
    "1.3.10",
    "Histórico de posições anteriores à reclassificação",
    "Quando uma unidade de arquivamento ou documento é reclassificado, é altamente desejável que um SIGAD mantenha o registro de suas posições anteriores à reclassificação, de forma a manter um histórico.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "1",
    "1.3",
    "Classificação e metadados das unidades de arquivamento"
);

cruzamentoRequisitos2["1.3.11"] = criarRequisito(
    "1.3.11",
    "Registro das razões para reclassificação",
    "Quando uma unidade de arquivamento ou documento é reclassificado, é altamente desejável que um SIGAD permita que o administrador introduza as razões para a reclassificação.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "1",
    "1.3",
    "Classificação e metadados das unidades de arquivamento"
);

cruzamentoRequisitos2["1.3.12"] = criarRequisito(
    "1.3.12",
    "Referências cruzadas para unidades de arquivamento",
    "Um SIGAD pode permitir que os usuários criem referências cruzadas para unidades de arquivamento afins.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "Facultativo",
    "1",
    "1.3",
    "Classificação e metadados das unidades de arquivamento"
);

// ============================================================
// CAPÍTULO 2 - CAPTURA
// Seção 2.1 - Procedimentos gerais
// ============================================================

cruzamentoRequisitos2["2.1.2"] = criarRequisito(
    "2.1.2",
    "Captura de documentos digitais de diferentes formas",
    "Um SIGAD tem que ser capaz de capturar documentos digitais das formas a seguir: captura de documentos produzidos dentro do SIGAD; captura de documento digital produzido fora do SIGAD; captura de documento produzido em workflow ou em outros sistemas integrados ao SIGAD; captura de documentos em lote.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "2",
    "2.1",
    "Procedimentos gerais de captura"
);

cruzamentoRequisitos2["2.1.7"] = criarRequisito(
    "2.1.7",
    "Formato do número identificador",
    "O formato do número identificador atribuído pelo SIGAD deve ser definido no momento da configuração do SIGAD. O identificador pode ser numérico ou alfanumérico, ou pode incluir os identificadores encadeados das entidades superiores no ramo apropriado da hierarquia.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "2",
    "2.1",
    "Procedimentos gerais de captura"
);

cruzamentoRequisitos2["2.1.8"] = criarRequisito(
    "2.1.8",
    "Geração e validação do número identificador",
    "Num SIGAD, o número identificador atribuído pelo sistema tem que: ser gerado automaticamente, sendo vedada sua introdução manual e alteração posterior; ou ser atribuído pelo usuário e validado pelo SIGAD antes de ser aceito.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "2",
    "2.1",
    "Procedimentos gerais de captura"
);

cruzamentoRequisitos2["2.1.9"] = criarRequisito(
    "2.1.9",
    "Numeração única de processos e documentos oficiais",
    "Um SIGAD tem que prever a adoção da numeração única de processos e/ou documentos oficiais de acordo com a legislação específica a fim de garantir a integridade do número atribuído ao processo e/ou documento na unidade protocolizadora de origem.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "2",
    "2.1",
    "Procedimentos gerais de captura"
);

cruzamentoRequisitos2["2.1.13"] = criarRequisito(
    "2.1.13",
    "Inserção automática de metadados",
    "É altamente desejável que um SIGAD seja capaz de inserir, automaticamente, os metadados previstos no SIGAD para o maior número possível de documentos, pois isso diminui as tarefas do usuário do SIGAD e garante maior rigor na inserção dos metadados.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "2",
    "2.1",
    "Procedimentos gerais de captura"
);

cruzamentoRequisitos2["2.1.14"] = criarRequisito(
    "2.1.14",
    "Visualização do registro de entrada",
    "Um SIGAD tem que garantir a visualização do registro de entrada do documento no sistema com todos os metadados inseridos automaticamente e os demais a serem atribuídos pelo usuário.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "2",
    "2.1",
    "Procedimentos gerais de captura"
);

cruzamentoRequisitos2["2.1.16"] = criarRequisito(
    "2.1.16",
    "Registro de versões de documentos",
    "Sempre que um documento tiver mais de uma versão, o SIGAD tem que permitir que os usuários selecionem pelo menos uma das seguintes ações: registrar todas as versões do documento como um só documento arquivístico; registrar uma única versão do documento como um documento arquivístico; registrar cada uma das versões do documento, separadamente, como um documento arquivístico. Um SIGAD não deve considerar minutas como versão. Cada versão deve ser dotada de completeza.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "2",
    "2.1",
    "Procedimentos gerais de captura"
);

cruzamentoRequisitos2["2.1.17"] = criarRequisito(
    "2.1.17",
    "Assistência à classificação de documentos",
    "É altamente desejável que um SIGAD preste assistência aos usuários no que diz respeito à classificação dos documentos, por meio de algumas ou de todas as ações a seguir: tornar acessível ao usuário somente o subconjunto do plano de classificação que diz respeito à sua atividade; indicar as últimas classificações feitas pelo usuário; indicar dossiês que contenham documentos de arquivo relacionados; indicar classificações possíveis a partir dos metadados já inseridos, como, por exemplo, o título; indicar classificações possíveis a partir do conteúdo do documento.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "2",
    "2.1",
    "Procedimentos gerais de captura"
);

cruzamentoRequisitos2["2.1.18"] = criarRequisito(
    "2.1.18",
    "Transmissão de documentos para completar captura",
    "É altamente desejável que um SIGAD permita que um usuário transmita documentos a outro usuário para completar o processo de captura, caso os procedimentos dessa captura sejam distribuídos entre vários usuários.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "2",
    "2.1",
    "Procedimentos gerais de captura"
);

// ============================================================
// Seção 2.3 - Captura de mensagens de correio eletrônico
// ============================================================

cruzamentoRequisitos2["2.3.1"] = criarRequisito(
    "2.3.1",
    "Captura de mensagens de correio eletrônico selecionadas",
    "Um SIGAD tem que capturar mensagens de correio eletrônico após selecionadas quais serão objeto de registro.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "2",
    "2.3",
    "Captura de mensagens de correio eletrônico"
);

cruzamentoRequisitos2["2.3.2"] = criarRequisito(
    "2.3.2",
    "Tratamento de mensagens de chegada",
    "Um SIGAD pode permitir que os usuários tratem e capturem as mensagens de chegada a partir do seu próprio sistema de correio eletrônico. O usuário deve poder tratar cada mensagem na caixa de entrada, como se segue: visualizar cada mensagem de correio e uma indicação dos respectivos anexos, caso existam; visualizar os conteúdos dos anexos utilizando um dispositivo para visualização de documentos em diferentes formatos; registrar no SIGAD a mensagem de correio e respectivos anexos como um novo documento de arquivo; relacionar a mensagem e respectivos anexos a um documento existente no SIGAD; capturar automaticamente metadados de data e hora da transmissão da mensagem e todos os destinatários.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "Facultativo",
    "2",
    "2.3",
    "Captura de mensagens de correio eletrônico"
);

cruzamentoRequisitos2["2.3.3"] = criarRequisito(
    "2.3.3",
    "Captura do nome do originador do correio eletrônico",
    "É altamente desejável que um SIGAD assegure a captura do nome, e não somente do endereço, do originador do correio eletrônico.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "2",
    "2.3",
    "Captura de mensagens de correio eletrônico"
);

// ============================================================
// Seção 2.4 - Captura de documentos não digitais ou híbridos
// ============================================================

cruzamentoRequisitos2["2.4.4"] = criarRequisito(
    "2.4.4",
    "Tratamento de documento híbrido como unidade indivisível",
    "O SIGAD tem que tratar um documento ou processo/dossiê híbrido como uma unidade indivisível, assegurando a relação entre a parte digital e a não digital.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "2",
    "2.4",
    "Captura de documentos não digitais ou híbridos"
);

// ============================================================
// Seção 2.5 - Formato de arquivo e estrutura dos documentos
// ============================================================

cruzamentoRequisitos2["2.5.2"] = criarRequisito(
    "2.5.2",
    "Captura de documentos com estruturas simples e compostas",
    "Um SIGAD tem que capturar documentos que se apresentam com as seguintes estruturas: simples: texto, imagens, mensagens de correio eletrônico, slides digitais, som; composta: mensagens de correio eletrônico com anexos, publicações eletrônicas.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "2",
    "2.5",
    "Formato de arquivo e estrutura dos documentos a serem capturados"
);

cruzamentoRequisitos2["2.5.3"] = criarRequisito(
    "2.5.3",
    "Captura de diversos tipos de documentos",
    "É altamente desejável que um SIGAD possa capturar, entre outros, os documentos a seguir: agendas eletrônicas; informações de outros aplicativos – contabilidade, folha de pagamento, desenho assistido por computador (CAD); documentos em papel digitalizados por meio de escâner; documentos sonoros; videoclipes; diagramas e mapas digitais; dados estruturados (EDI); bases de dados; documentos multimídia; páginas web. A lista de documentos que um SIGAD tem que suportar varia de órgão para órgão. Quando não for viável o SIGAD capturar o objeto digital, ele tem que ser capaz de realizar a captura por meio do registro do documento, para possibilitar seu gerenciamento.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "2",
    "2.5",
    "Formato de arquivo e estrutura dos documentos a serem capturados"
);

cruzamentoRequisitos2["2.5.5"] = criarRequisito(
    "2.5.5",
    "Registro de dependência de software",
    "Um SIGAD tem que ser capaz de registrar em metadados as informações relativas à dependência de software, quando capturar documentos em formatos diferentes dos previstos pelo programa de gestão de documentos do órgão ou entidade.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "2",
    "2.5",
    "Formato de arquivo e estrutura dos documentos a serem capturados"
);

// ============================================================
// Seção 2.6 - Estrutura dos procedimentos de gestão
// ============================================================

cruzamentoRequisitos2["2.6.1"] = criarRequisito(
    "2.6.1",
    "Reconhecimento de três domínios para controle de procedimentos",
    "Em caso do SIGAD apoiar a produção de documentos, ele tem que ser capaz de reconhecer três domínios para o controle dos procedimentos de gestão: espaço individual, espaço do grupo e espaço geral.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "2",
    "2.6",
    "Estrutura dos procedimentos de gestão"
);

cruzamentoRequisitos2["2.6.2"] = criarRequisito(
    "2.6.2",
    "Operacionalização das regras nos três espaços",
    "Em caso do SIGAD apoiar a produção de documentos, ele tem que ser capaz de operacionalizar as regras estabelecidas pelo sistema de gestão arquivística de documentos nos três espaços.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "2",
    "2.6",
    "Estrutura dos procedimentos de gestão"
);

cruzamentoRequisitos2["2.6.5"] = criarRequisito(
    "2.6.5",
    "Aviso sobre autenticidade não verificável no futuro",
    "É altamente desejável que um SIGAD possa emitir um aviso caso se tente capturar um documento cuja autenticidade não possa ser verificada no futuro.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "2",
    "2.6",
    "Estrutura dos procedimentos de gestão"
);

// ============================================================
// CAPÍTULO 3 - AVALIAÇÃO: TEMPORALIDADE E DESTINAÇÃO
// Seção 3.1 - Aplicação da tabela de temporalidade
// ============================================================

cruzamentoRequisitos2["3.1.4"] = criarRequisito(
    "3.1.4",
    "Gerenciamento do processo de destinação",
    "Um SIGAD tem de prover funcionalidades para gerenciar o processo de destinação, que tem de ser iniciado por usuário autorizado e cumprir os seguintes passos: identificar automaticamente os documentos ou dossiês/processos que atingiram os prazos de guarda previstos; informar o usuário autorizado sobre todos os documentos ou dossiês/processos que foram identificados no passo anterior; possibilitar a alteração do prazo ou destinação previstos para aqueles documentos ou dossiês/processos, caso necessário; proceder à ação de destinação quando confirmada pelo usuário autorizado.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "3",
    "3.1",
    "Aplicação da tabela de temporalidade e destinação de documentos"
);

cruzamentoRequisitos2["3.1.5"] = criarRequisito(
    "3.1.5",
    "Confirmação antes de realizar ações de destinação",
    "Um SIGAD tem sempre que pedir confirmação antes de realizar as ações de destinação.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "3",
    "3.1",
    "Aplicação da tabela de temporalidade e destinação de documentos"
);

cruzamentoRequisitos2["3.1.6"] = criarRequisito(
    "3.1.6",
    "Dispositivo de aviso antes de ação de destinação",
    "É altamente desejável que um SIGAD preveja, em determinados casos, dispositivo de aviso antes do início de uma ação de destinação. Por exemplo, emitir aviso ao administrador, caso um documento arquivístico possua restrição de acesso.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "3",
    "3.1",
    "Aplicação da tabela de temporalidade e destinação de documentos"
);

cruzamentoRequisitos2["3.1.7"] = criarRequisito(
    "3.1.7",
    "Restrição das funções de destinação",
    "Um SIGAD tem que restringir as funções de destinação a usuários autorizados.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "3",
    "3.1",
    "Aplicação da tabela de temporalidade e destinação de documentos"
);

cruzamentoRequisitos2["3.1.8"] = criarRequisito(
    "3.1.8",
    "Adoção automática da temporalidade da nova classe",
    "Quando um administrador transfere documentos ou dossiês/processos de uma classe para outra, em virtude de uma reclassificação, o SIGAD tem que adotar automaticamente a temporalidade e a destinação vigentes na nova classe.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "3",
    "3.1",
    "Aplicação da tabela de temporalidade e destinação de documentos"
);

// ============================================================
// Seção 3.2 - Exportação de documentos
// ============================================================

cruzamentoRequisitos2["3.2.3"] = criarRequisito(
    "3.2.3",
    "Exportação sem degradação de conteúdo, contexto e estrutura",
    "Um SIGAD tem que ser capaz de exportar um documento e dossiê/processo ou grupo de documentos e dossiês/processos numa sequência de operações, de modo que: o conteúdo, o contexto e a estrutura dos documentos não se degradem; todos os componentes de um documento digital sejam exportados como uma unidade; todos os metadados do documento sejam relacionados a ele de forma que as ligações possam ser mantidas no novo sistema; todas as ligações entre documentos, volumes e dossiês/processos sejam mantidas.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "3",
    "3.2",
    "Exportação de documentos"
);

cruzamentoRequisitos2["3.2.4"] = criarRequisito(
    "3.2.4",
    "Exportação em formato nativo ou interoperável",
    "É altamente desejável que um SIGAD seja capaz de exportar dossiês/processos: em seu formato nativo (ou no formato para o qual foi migrado); de acordo com os formatos definidos em padrões de interoperabilidade; de acordo com o formato definido pela instituição arquivística que irá receber a documentação, no caso de transferência ou recolhimento.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "3",
    "3.2",
    "Exportação de documentos"
);

cruzamentoRequisitos2["3.2.7"] = criarRequisito(
    "3.2.7",
    "Relatório de falhas na exportação",
    "Um SIGAD tem que produzir um relatório detalhado sobre qualquer falha que ocorra durante uma exportação. O relatório tem que identificar os documentos e dossiês/processos que originaram erros de processamento ou cuja exportação não tenha sido bem sucedida.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "3",
    "3.2",
    "Exportação de documentos"
);

cruzamentoRequisitos2["3.2.8"] = criarRequisito(
    "3.2.8",
    "Conservação de documentos exportados",
    "Um SIGAD tem que conservar todos os documentos e dossiês/processos digitais que foram exportados, pelo menos até que tenham sido importados no sistema destinatário com êxito.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "3",
    "3.2",
    "Exportação de documentos"
);

cruzamentoRequisitos2["3.2.9"] = criarRequisito(
    "3.2.9",
    "Manutenção de metadados de documentos exportados",
    "Um SIGAD tem que manter metadados relativos a documentos e dossiês/processos que foram exportados. O administrador deve indicar o subconjunto de metadados que deverá ser mantido.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "3",
    "3.2",
    "Exportação de documentos"
);

cruzamentoRequisitos2["3.2.12"] = criarRequisito(
    "3.2.12",
    "Ordenação de documentos a serem exportados",
    "Um SIGAD pode possibilitar a ordenação dos documentos e dossiês/processos digitais a serem exportados de acordo com elementos de metadados selecionados pelo usuário.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "Facultativo",
    "3",
    "3.2",
    "Exportação de documentos"
);

cruzamentoRequisitos2["3.2.13"] = criarRequisito(
    "3.2.13",
    "Confirmação de destinação da parte não digital",
    "Quando se exportarem documentos e dossiês/processos híbridos, é altamente desejável que um SIGAD exija do usuário autorizado a confirmação de que a parte na forma não digital dos mesmos documentos e dossiês/processos tenha passado pelo procedimento de destinação adequado antes de confirmar a exportação da parte na forma digital.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "3",
    "3.2",
    "Exportação de documentos"
);

// ============================================================
// Seção 3.3 - Eliminação
// ============================================================

cruzamentoRequisitos2["3.3.2"] = criarRequisito(
    "3.3.2",
    "Confirmação de eliminação",
    "Um SIGAD tem que pedir confirmação da eliminação a um usuário autorizado antes que qualquer ação seja tomada com relação ao documento e dossiê/processo e cancelar o processo de eliminação se a confirmação não for dada.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "3",
    "3.3",
    "Eliminação"
);

cruzamentoRequisitos2["3.3.4"] = criarRequisito(
    "3.3.4",
    "Aviso sobre documentos relacionados na eliminação",
    "Um SIGAD tem que avisar ao usuário autorizado quando um documento ou dossiê/processo que estiver sendo eliminado se encontrar relacionado a outro; os sistemas também têm de suspender o processo até que seja tomada uma das medidas abaixo: confirmação pelo usuário autorizado para prosseguir ou cancelar o processo; produção de um relatório especificando os documentos ou dossiês/processos envolvidos e todas as ligações com outros documentos ou dossiês/processos.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "3",
    "3.3",
    "Eliminação"
);

cruzamentoRequisitos2["3.3.7"] = criarRequisito(
    "3.3.7",
    "Relatório de falhas na eliminação",
    "Um SIGAD tem que produzir um relatório detalhando qualquer falha que ocorra durante uma eliminação. O relatório tem que identificar os documentos cuja eliminação não tenha sido bem-sucedida.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "3",
    "3.3",
    "Eliminação"
);

cruzamentoRequisitos2["3.3.8"] = criarRequisito(
    "3.3.8",
    "Confirmação de eliminação da parte não digital",
    "Quando eliminar documentos ou dossiês/processos híbridos, é altamente desejável que um SIGAD exija do usuário autorizado a confirmação de que a parte na forma não digital desses documentos ou dossiês/processos seja eliminada também antes de confirmar a eliminação da parte digital.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "3",
    "3.3",
    "Eliminação"
);

// ============================================================
// Seção 3.4 - Avaliação de documentos não digitais e híbridos
// ============================================================

cruzamentoRequisitos2["3.4.3"] = criarRequisito(
    "3.4.3",
    "Alerta sobre parte não digital associada a híbrido",
    "Um SIGAD tem que alertar o administrador sobre a existência e a localização de uma parte não digital associada a um documento híbrido que esteja destinado a ser exportado, transferido ou eliminado.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "3",
    "3.4",
    "Avaliação e destinação de documentos arquivísticos não digitais e híbridos"
);

// ============================================================
// CAPÍTULO 4 - PESQUISA, LOCALIZAÇÃO E APRESENTAÇÃO
// Seção 4.1 - Aspectos gerais
// ============================================================

cruzamentoRequisitos2["4.1.2"] = criarRequisito(
    "4.1.2",
    "Interface de pesquisa via ambiente web",
    "É altamente desejável que um SIGAD forneça outras formas de interface de pesquisa, localização e apresentação opcionais via ambiente web.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "4",
    "4.1",
    "Aspectos gerais"
);

cruzamentoRequisitos2["4.1.3"] = criarRequisito(
    "4.1.3",
    "Navegação gráfica no plano de classificação",
    "É altamente desejável que um SIGAD preveja a navegação gráfica no plano de classificação, a navegação direta de uma classe para os documentos arquivísticos produzidos nesta classe e a seleção, recuperação e apresentação direta dos documentos arquivísticos e de seus conteúdos por meio desse mecanismo.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "4",
    "4.1",
    "Aspectos gerais"
);

// ============================================================
// Seção 4.2 - Pesquisa e localização
// ============================================================

cruzamentoRequisitos2["4.2.2"] = criarRequisito(
    "4.2.2",
    "Pesquisa integrada de documentos digitais, híbridos e não digitais",
    "Um SIGAD tem que executar pesquisa de forma integrada, isto é, apresentar todos os documentos e dossiês/processos, sejam eles digitais, híbridos ou não digitais, que satisfaçam aos parâmetros da pesquisa.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "4",
    "4.2",
    "Pesquisa e localização"
);

cruzamentoRequisitos2["4.2.3"] = criarRequisito(
    "4.2.3",
    "Pesquisa em todos os metadados de gestão",
    "Um SIGAD tem que permitir que todos os metadados de gestão de um documento ou dossiê/processo possam ser pesquisados.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "4",
    "4.2",
    "Pesquisa e localização"
);

cruzamentoRequisitos2["4.2.5"] = criarRequisito(
    "4.2.5",
    "Recuperação por número identificador",
    "Um SIGAD tem que permitir que um documento ou dossiê/processo possa ser recuperado por meio de um número identificador.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "4",
    "4.2",
    "Pesquisa e localização"
);

cruzamentoRequisitos2["4.2.7"] = criarRequisito(
    "4.2.7",
    "Pesquisa combinada com operadores booleanos",
    "É altamente desejável que um SIGAD forneça uma interface que possibilite a pesquisa combinada de metadados e de conteúdo do documento por meio dos operadores booleanos 'e', 'ou' e 'não'.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "4",
    "4.2",
    "Pesquisa e localização"
);

cruzamentoRequisitos2["4.2.9"] = criarRequisito(
    "4.2.9",
    "Uso de períodos típicos em campos de data",
    "Um SIGAD pode permitir o uso de períodos típicos de pedidos de pesquisa nos campos de data, como, por exemplo, 'semana anterior', 'mês corrente'.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "Facultativo",
    "4",
    "4.2",
    "Pesquisa e localização"
);

cruzamentoRequisitos2["4.2.10"] = criarRequisito(
    "4.2.10",
    "Caracteres curinga em metadados",
    "É altamente desejável que um SIGAD permita a utilização de caracteres curinga e de truncamento à direita para pesquisa de metadados.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "4",
    "4.2",
    "Pesquisa e localização"
);

cruzamentoRequisitos2["4.2.11"] = criarRequisito(
    "4.2.11",
    "Caracteres curinga no conteúdo do documento",
    "É altamente desejável que um SIGAD permita a utilização de caracteres curinga e de truncamento à direita para pesquisa no conteúdo do documento.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "4",
    "4.2",
    "Pesquisa e localização"
);

cruzamentoRequisitos2["4.2.12"] = criarRequisito(
    "4.2.12",
    "Pesquisa por proximidade",
    "É altamente desejável que um SIGAD proporcione pesquisa por proximidade, isto é, que uma palavra apareça no conteúdo do documento a uma distância máxima de outra.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "4",
    "4.2",
    "Pesquisa e localização"
);

cruzamentoRequisitos2["4.2.13"] = criarRequisito(
    "4.2.13",
    "Armazenamento de pesquisas para reutilização",
    "É altamente desejável que um SIGAD permita que os usuários armazenem pesquisas para reutilização posterior.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "4",
    "4.2",
    "Pesquisa e localização"
);

cruzamentoRequisitos2["4.2.15"] = criarRequisito(
    "4.2.15",
    "Pesquisa por navegação em tesauros",
    "Quando o órgão ou entidade utilizar tesauros ou vocabulário controlado, é altamente desejável que um SIGAD seja capaz de realizar pesquisa dos documentos e dossiês/processos por meio da navegação nesses instrumentos.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "4",
    "4.2",
    "Pesquisa e localização"
);

cruzamentoRequisitos2["4.2.16"] = criarRequisito(
    "4.2.16",
    "Pesquisa de termos em desuso com vocabulário controlado",
    "É altamente desejável que um SIGAD permita a pesquisa de termos já em desuso, fazendo relação com os termos atualizados, com o apoio de um tesauro ou vocabulário controlado, caso existam.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "4",
    "4.2",
    "Pesquisa e localização"
);

cruzamentoRequisitos2["4.2.17"] = criarRequisito(
    "4.2.17",
    "Configuração de campos default de pesquisa",
    "É altamente desejável que um SIGAD permita que usuários autorizados configurem e alterem os campos default de pesquisa de forma a definir metadados como campos de pesquisa.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "4",
    "4.2",
    "Pesquisa e localização"
);

cruzamentoRequisitos2["4.2.18"] = criarRequisito(
    "4.2.18",
    "Pesquisa e recuperação de unidade de arquivamento completa",
    "Um SIGAD tem que permitir a pesquisa e recuperação de uma unidade de arquivamento completa e exibir a lista de todos os documentos que a compõem, como uma unidade e num único processo de recuperação.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "4",
    "4.2",
    "Pesquisa e localização"
);

// ============================================================
// Seção 4.3 - Apresentação
// ============================================================

cruzamentoRequisitos2["4.3.2"] = criarRequisito(
    "4.3.2",
    "Sugestão de parâmetros aproximados",
    "Quando o resultado de uma pesquisa for nulo, o SIGAD pode sugerir outros parâmetros aproximados que possam ser satisfeitos.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "Facultativo",
    "4",
    "4.3",
    "Apresentação: visualização, impressão, emissão de som"
);

cruzamentoRequisitos2["4.3.3"] = criarRequisito(
    "4.3.3",
    "Opções após apresentação do resultado",
    "Após apresentar o resultado da pesquisa, um SIGAD tem que oferecer ao usuário as opções: visualizar os documentos e dossiês/processos resultantes da pesquisa; redefinir os parâmetros de pesquisa e fazer nova consulta.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "4",
    "4.3",
    "Apresentação: visualização, impressão, emissão de som"
);

cruzamentoRequisitos2["4.3.4"] = criarRequisito(
    "4.3.4",
    "Abertura de documentos com um clique",
    "É altamente desejável que um SIGAD permita que os documentos e dossiês/processos apresentados em uma lista de resultados sejam selecionados e, em seguida, abertos por meio de um clique ou toque de tela ou acionamento de tecla.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "4",
    "4.3",
    "Apresentação: visualização, impressão, emissão de som"
);

cruzamentoRequisitos2["4.3.5"] = criarRequisito(
    "4.3.5",
    "Configuração do formato da lista de resultados",
    "É altamente desejável que um SIGAD permita a configuração do formato da lista de resultados de pesquisa pelo usuário ou administrador, incluindo recursos e funções como: seleção da ordem em que os resultados de pesquisa são apresentados; determinação do número de resultados de pesquisa exibidos em cada tela; estabelecimento do número máximo de resultados para uma pesquisa; armazenamento dos resultados de uma pesquisa; definição dos metadados a serem exibidos nas listas de resultados de pesquisa.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "4",
    "4.3",
    "Apresentação: visualização, impressão, emissão de som"
);

cruzamentoRequisitos2["4.3.6"] = criarRequisito(
    "4.3.6",
    "Navegação entre níveis de agregação",
    "É altamente desejável que um SIGAD forneça recursos que permitam ao usuário 'navegar' para o nível de agregação imediatamente superior ou inferior, como, por exemplo: de um documento para a unidade de arquivamento em que está incluído; de uma unidade de arquivamento para os documentos nela incluídos; de uma unidade de arquivamento para a respectiva classe; de uma classe para as unidades de arquivamento a ela relacionadas.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "4",
    "4.3",
    "Apresentação: visualização, impressão, emissão de som"
);

cruzamentoRequisitos2["4.3.7"] = criarRequisito(
    "4.3.7",
    "Apresentação do conteúdo preservando características",
    "Um SIGAD tem que ser capaz de apresentar o conteúdo de todos os documentos arquivísticos digitais definidos pelo programa de gestão de documentos, de forma que: preserve as características de exibição visual e de formato apresentados pela aplicação geradora; exiba todos os componentes do documento digital em conjunto, como uma unidade. No caso de necessidade de captura de documentos em formatos de arquivo não previstos no programa de gestão de documentos, o SIGAD tem que permitir o download do documento para que possa ser visualizado em outro ambiente.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "4",
    "4.3",
    "Apresentação: visualização, impressão, emissão de som"
);

cruzamentoRequisitos2["4.3.8"] = criarRequisito(
    "4.3.8",
    "Impressão mantendo a forma documental",
    "Em caso do SIGAD imprimir os documentos, tem que manter a forma documental apresentada pelas aplicações geradoras. No caso de necessidade de captura de documentos em formatos de arquivo não previstos no programa de gestão de documentos, o SIGAD tem que permitir o download do documento para que possa ser visualizado em outro ambiente.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "4",
    "4.3",
    "Apresentação: visualização, impressão, emissão de som"
);

cruzamentoRequisitos2["4.3.9"] = criarRequisito(
    "4.3.9",
    "Exibição de imagem fixa, em movimento e som",
    "É altamente desejável que o SIGAD seja capaz de exibir/reproduzir o conteúdo de documentos que incluam imagem fixa, imagem em movimento e som.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "4",
    "4.3",
    "Apresentação: visualização, impressão, emissão de som"
);

cruzamentoRequisitos2["4.3.10"] = criarRequisito(
    "4.3.10",
    "Definição de metadados a serem impressos",
    "Um SIGAD pode possibilitar a definição dos metadados a serem impressos.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "Facultativo",
    "4",
    "4.3",
    "Apresentação: visualização, impressão, emissão de som"
);

cruzamentoRequisitos2["4.3.14"] = criarRequisito(
    "4.3.14",
    "Definição de metadados exibidos pelo usuário",
    "É altamente desejável que um SIGAD permita que os metadados exibidos nas listas a que se referem os requisitos 4.3.12 e 4.3.13 possam ser definidos pelo usuário.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "4",
    "4.3",
    "Apresentação: visualização, impressão, emissão de som"
);

cruzamentoRequisitos2["4.3.15"] = criarRequisito(
    "4.3.15",
    "Impressão de todos os documentos de um dossiê",
    "Um SIGAD tem que permitir que todos os documentos de um dossiê/processo sejam impressos em uma ou mais operações.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "4",
    "4.3",
    "Apresentação: visualização, impressão, emissão de som"
);

cruzamentoRequisitos2["4.3.16"] = criarRequisito(
    "4.3.16",
    "Exportação para reprodução de documentos não imprimíveis",
    "Um SIGAD tem que ter mecanismos destinados a exportar, para fins de reprodução, documentos que não possam ser impressos, tais como documentos sonoros, vídeos e multimídia.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "4",
    "4.3",
    "Apresentação: visualização, impressão, emissão de som"
);

cruzamentoRequisitos2["4.3.17"] = criarRequisito(
    "4.3.17",
    "Apresentação em outros formatos",
    "É altamente desejável que um SIGAD seja capaz de apresentar os documentos arquivísticos em outros formatos além do nativo, tais como: formato .xml adequado para publicação; formato .html adequado para publicação; formato aprovado por organismos padronizadores na sua esfera de competência.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "4",
    "4.3",
    "Apresentação: visualização, impressão, emissão de som"
);

cruzamentoRequisitos2["4.3.18"] = criarRequisito(
    "4.3.18",
    "Pesquisa e exibição simultânea para diversos usuários",
    "Um SIGAD tem que ser capaz de realizar pesquisa e exibição de documentos e dossiês/processos, simultaneamente, para diversos usuários.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "4",
    "4.3",
    "Apresentação: visualização, impressão, emissão de som"
);

cruzamentoRequisitos2["4.3.19"] = criarRequisito(
    "4.3.19",
    "Impressão de cópias em papel com metadados",
    "É altamente desejável que um SIGAD permita ao administrador determinar que todas as cópias em papel de documentos e dossiês/processos sejam impressas junto com metadados pré-selecionados.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "4",
    "4.3",
    "Apresentação: visualização, impressão, emissão de som"
);

// ============================================================
// CAPÍTULO 5 - ELABORAÇÃO DE DOCUMENTOS
// Seção 5.1 - Procedimentos gerais
// ============================================================

cruzamentoRequisitos2["5.1.1"] = criarRequisito(
    "5.1.1",
    "Automação da produção de documentos",
    "Um SIGAD pode automatizar a produção de documentos por meio da exibição de formulários e modelos predefinidos pelo programa de gestão arquivística de documentos.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "Facultativo",
    "5",
    "5.1",
    "Procedimentos gerais de elaboração"
);

cruzamentoRequisitos2["5.1.2"] = criarRequisito(
    "5.1.2",
    "Vínculos da automatização da produção",
    "Um SIGAD pode vincular à automatização da produção de documentos: numeração automática por espécie documental; classificação arquivística; marcação de sigilo legal; autuação de processo; outras.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "Facultativo",
    "5",
    "5.1",
    "Procedimentos gerais de elaboração"
);

// ============================================================
// Seção 5.2 - Gerenciamento dos dossiês/processos
// ============================================================

cruzamentoRequisitos2["5.2.2"] = criarRequisito(
    "5.2.2",
    "Aviso sobre documento já anexado",
    "Um SIGAD tem que emitir um aviso caso o usuário anexe um documento que já tenha sido anexado no mesmo dossiê/processo.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "5",
    "5.2",
    "Gerenciamento dos dossiês/processos"
);

cruzamentoRequisitos2["5.2.3"] = criarRequisito(
    "5.2.3",
    "Encerramento de dossiê/processo por usuário autorizado",
    "Um SIGAD tem que permitir que um dossiê/processo seja encerrado por meio de procedimentos regulamentares e somente por usuários autorizados.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "5",
    "5.2",
    "Gerenciamento dos dossiês/processos"
);

cruzamentoRequisitos2["5.2.4"] = criarRequisito(
    "5.2.4",
    "Consulta a dossiês/processos encerrados",
    "Um SIGAD tem que permitir a consulta aos dossiês/processos já encerrados por usuários autorizados.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "5",
    "5.2",
    "Gerenciamento dos dossiês/processos"
);

cruzamentoRequisitos2["5.2.5"] = criarRequisito(
    "5.2.5",
    "Impedimento de acréscimo a dossiês/processos encerrados",
    "Um SIGAD tem que impedir o acréscimo de novos documentos a dossiês/processos já encerrados. Dossiês/processos encerrados devem ser reabertos para receber novos documentos.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "5",
    "5.2",
    "Gerenciamento dos dossiês/processos"
);

// ============================================================
// Seção 5.3 - Requisitos adicionais para gerenciamento de processos
// ============================================================

cruzamentoRequisitos2["5.3.1"] = criarRequisito(
    "5.3.1",
    "Formação/autuação de processos",
    "Um SIGAD tem que prever a formação/autuação de processos, por usuário autorizado conforme estabelecido em legislação específica.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "5",
    "5.3",
    "Requisitos adicionais para o gerenciamento de processos"
);

cruzamentoRequisitos2["5.3.2"] = criarRequisito(
    "5.3.2",
    "Identificação de processos relativos à mesma ação",
    "É altamente desejável que um SIGAD preveja funcionalidades para apoiar a identificação de processos relativos à mesma ação ou interessado, e emita um aviso. Essa funcionalidade pode ser utilizada sob demanda do usuário, para identificar a existência de processos específicos, ou para apoiar controles/restrições do sistema na execução de atividade específica, como, por exemplo, juntada de processos por anexação.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "5",
    "5.3",
    "Requisitos adicionais para o gerenciamento de processos"
);

cruzamentoRequisitos2["5.3.3"] = criarRequisito(
    "5.3.3",
    "Numeração sequencial sem falhas",
    "Um SIGAD tem que prever que os documentos integrantes do processo digital recebam numeração sequencial sem falhas, não se admitindo que documentos diferentes recebam a mesma numeração.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "5",
    "5.3",
    "Requisitos adicionais para o gerenciamento de processos"
);

cruzamentoRequisitos2["5.3.4"] = criarRequisito(
    "5.3.4",
    "Impedimento de renumeração de documentos",
    "Um SIGAD tem que impedir a renumeração dos documentos integrantes de um processo digital. Este requisito tem por objetivo impedir a exclusão não autorizada de documentos de um processo. Casos especiais que autorizem a renumeração, como no caso dos documentos do processo acessório na juntada por anexação, devem obedecer à legislação específica na devida esfera e âmbito de competência.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "5",
    "5.3",
    "Requisitos adicionais para o gerenciamento de processos"
);

cruzamentoRequisitos2["5.3.5"] = criarRequisito(
    "5.3.5",
    "Procedimentos para juntada de processos",
    "Um SIGAD tem que prever procedimentos para juntada de processos segundo a legislação específica na devida esfera e âmbito de competência. A juntada pode ser por anexação ou apensação. Este procedimento deve ser registrado nos metadados do processo.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "5",
    "5.3",
    "Requisitos adicionais para o gerenciamento de processos"
);

cruzamentoRequisitos2["5.3.6"] = criarRequisito(
    "5.3.6",
    "Procedimentos para desapensação de processos",
    "Um SIGAD tem que prever procedimentos para desapensação de processos segundo a legislação específica na devida esfera e âmbito de competência. Esse procedimento deve ser registrado nos metadados do processo.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "5",
    "5.3",
    "Requisitos adicionais para o gerenciamento de processos"
);

cruzamentoRequisitos2["5.3.7"] = criarRequisito(
    "5.3.7",
    "Procedimentos para desentranhamento de documentos",
    "Um SIGAD tem que prever procedimentos para desentranhamento de documentos integrantes de um processo, segundo norma específica na devida esfera e âmbito de competência. Esse procedimento deve ser registrado nos metadados do processo.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "5",
    "5.3",
    "Requisitos adicionais para o gerenciamento de processos"
);

cruzamentoRequisitos2["5.3.8"] = criarRequisito(
    "5.3.8",
    "Procedimentos para desmembramento de documentos",
    "Um SIGAD tem que prever procedimentos para desmembramento de documentos integrantes de um processo, segundo norma específica na devida esfera e âmbito de competência. Esse procedimento deve ser registrado nos metadados do processo.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "5",
    "5.3",
    "Requisitos adicionais para o gerenciamento de processos"
);

cruzamentoRequisitos2["5.3.9"] = criarRequisito(
    "5.3.9",
    "Encerramento de processos",
    "Um SIGAD tem que prever o encerramento dos processos incluídos seus volumes e metadados.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "5",
    "5.3",
    "Requisitos adicionais para o gerenciamento de processos"
);

cruzamentoRequisitos2["5.3.10"] = criarRequisito(
    "5.3.10",
    "Desarquivamento para reativação de processos",
    "Um SIGAD tem que prever o desarquivamento para reativação dos processos, por usuário autorizado e obedecendo a procedimentos legais e administrativos. Para manter a integridade do processo, somente o último volume receberá novos documentos ou peças.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "5",
    "5.3",
    "Requisitos adicionais para o gerenciamento de processos"
);

// ============================================================
// Seção 5.4 - Volumes: abertura, encerramento e metadados
// ============================================================

cruzamentoRequisitos2["5.4.1"] = criarRequisito(
    "5.4.1",
    "Gerenciamento de volumes para subdividir dossiês/processos",
    "É altamente desejável que um SIGAD seja capaz de gerenciar volumes para subdividir dossiês/processos, fazendo a distinção entre dossiês/processos e volumes.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "5",
    "5.4",
    "Volumes: abertura, encerramento e metadados"
);

cruzamentoRequisitos2["5.4.2"] = criarRequisito(
    "5.4.2",
    "Associação de metadados aos volumes",
    "É altamente desejável que um SIGAD permita a associação de metadados aos volumes e restrinja a inclusão e alteração desses metadados apenas a usuários autorizados.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "5",
    "5.4",
    "Volumes: abertura, encerramento e metadados"
);

cruzamentoRequisitos2["5.4.3"] = criarRequisito(
    "5.4.3",
    "Herança de metadados do dossiê/processo para o volume",
    "Um SIGAD tem que permitir que um volume herde, automaticamente, do dossiê/processo ao qual pertence, alguns metadados predefinidos, como, por exemplo, classes e temporalidade.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "5",
    "5.4",
    "Volumes: abertura, encerramento e metadados"
);

cruzamentoRequisitos2["5.4.4"] = criarRequisito(
    "5.4.4",
    "Abertura de volumes para dossiês/processos não encerrados",
    "Um SIGAD tem que permitir a abertura de volumes para qualquer dossiê/processo que não esteja encerrado.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "5",
    "5.4",
    "Volumes: abertura, encerramento e metadados"
);

cruzamentoRequisitos2["5.4.5"] = criarRequisito(
    "5.4.5",
    "Registro de datas de abertura e encerramento de volumes",
    "É altamente desejável que um SIGAD permita o registro de metadados correspondentes às datas de abertura e encerramento de volumes.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "5",
    "5.4",
    "Volumes: abertura, encerramento e metadados"
);

cruzamentoRequisitos2["5.4.6"] = criarRequisito(
    "5.4.6",
    "Volume contém somente documentos",
    "Um SIGAD tem que assegurar que um volume conterá somente documentos. Não é permitido que um volume contenha outro volume ou outro dossiê/processo. Em caso de juntada por anexação de processo a processo, o sistema deverá encerrar o último volume do processo principal e, na sequência, incluir cada um dos volumes do processo anexado.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "5",
    "5.4",
    "Volumes: abertura, encerramento e metadados"
);

cruzamentoRequisitos2["5.4.8"] = criarRequisito(
    "5.4.8",
    "Encerramento automático do volume precedente",
    "Um SIGAD tem que assegurar que, ao ser aberto um novo volume, o precedente seja automaticamente encerrado.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "5",
    "5.4",
    "Volumes: abertura, encerramento e metadados"
);

cruzamentoRequisitos2["5.4.9"] = criarRequisito(
    "5.4.9",
    "Apenas o volume mais recente pode estar aberto",
    "Apenas o volume produzido mais recentemente pode estar aberto; os demais volumes existentes no dossiê/processo têm que estar encerrados.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "5",
    "5.4",
    "Volumes: abertura, encerramento e metadados"
);

cruzamentoRequisitos2["5.4.10"] = criarRequisito(
    "5.4.10",
    "Impedimento de reabertura de volume encerrado",
    "Um SIGAD tem que impedir a reabertura, para acréscimo de documentos, de um volume já encerrado.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "5",
    "5.4",
    "Volumes: abertura, encerramento e metadados"
);

// ============================================================
// Seção 5.5 - Gerenciamento de documentos não digitais e híbridos
// ============================================================

cruzamentoRequisitos2["5.5.2"] = criarRequisito(
    "5.5.2",
    "Gerenciamento de documentos híbridos",
    "Um SIGAD tem que ser capaz de gerenciar a parte não digital e a parte digital integrantes de dossiês/processos híbridos, associando-as com o mesmo número identificador atribuído pelo sistema e o mesmo título, além de indicar que se trata de um documento arquivístico híbrido.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "5",
    "5.5",
    "Gerenciamento de documentos e processos/dossiês arquivísticos não digitais e híbridos"
);

cruzamentoRequisitos2["5.5.5"] = criarRequisito(
    "5.5.5",
    "Solicitação de consulta a documento não digital",
    "Um SIGAD tem que ser capaz de oferecer ao usuário funcionalidades para solicitar ou reservar a consulta a um documento arquivístico não digital, enviando uma mensagem para o detentor atual do documento ou para o administrador.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "5",
    "5.5",
    "Gerenciamento de documentos e processos/dossiês arquivísticos não digitais e híbridos"
);

cruzamentoRequisitos2["5.5.6"] = criarRequisito(
    "5.5.6",
    "Mecanismos de código de barras",
    "Um SIGAD pode incluir mecanismos de impressão e reconhecimento de códigos de barras para automatizar a introdução de dados e acompanhar a movimentação de documentos ou dossiês/processos não digitais.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "Facultativo",
    "5",
    "5.5",
    "Gerenciamento de documentos e processos/dossiês arquivísticos não digitais e híbridos"
);

cruzamentoRequisitos2["5.5.7"] = criarRequisito(
    "5.5.7",
    "Recuperação de metadados de documento híbrido",
    "Um SIGAD tem que assegurar que a recuperação de um documento ou dossiê/processo híbrido permita, igualmente, a recuperação dos metadados da parte digital e da não digital.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "5",
    "5.5",
    "Gerenciamento de documentos e processos/dossiês arquivísticos não digitais e híbridos"
);

cruzamentoRequisitos2["5.5.8"] = criarRequisito(
    "5.5.8",
    "Classificação de sigilo em documentos híbridos",
    "Sempre que os documentos ou dossiês/processos híbridos estiverem classificados quanto ao grau de sigilo, um SIGAD tem que garantir que a parte não digital e a parte digital correspondente recebam a mesma classificação de sigilo.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "5",
    "5.5",
    "Gerenciamento de documentos e processos/dossiês arquivísticos não digitais e híbridos"
);

// ============================================================
// CAPÍTULO 6 - TRAMITAÇÃO E FLUXO DE TRABALHO
// Seção 6.1 - Controle do fluxo de trabalho
// ============================================================

cruzamentoRequisitos2["6.1.1"] = criarRequisito(
    "6.1.1",
    "Passos para cumprimento de trâmites",
    "Um recurso de fluxo de trabalho de um SIGAD tem que fornecer os passos necessários para o cumprimento de trâmites preestabelecidos ou aleatórios. Nesse caso, cada passo significa o deslocamento de um documento ou dossiê/processo de um participante para outro, a fim de serem objeto de ações.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "Facultativo",
    "6",
    "6.1",
    "Controle do fluxo de trabalho"
);

cruzamentoRequisitos2["6.1.2"] = criarRequisito(
    "6.1.2",
    "Número ilimitado de trâmites",
    "Um SIGAD tem que ter capacidade, sem limitações, de estabelecer o número necessário de trâmites nos fluxos de trabalho.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "Facultativo",
    "6",
    "6.1",
    "Controle do fluxo de trabalho"
);

cruzamentoRequisitos2["6.1.3"] = criarRequisito(
    "6.1.3",
    "Aviso de envio de documento",
    "O fluxo de trabalho de um SIGAD tem que disponibilizar uma função para avisar um participante do fluxo de que um documento lhe foi enviado, especificando a ação necessária.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "Facultativo",
    "6",
    "6.1",
    "Controle do fluxo de trabalho"
);

cruzamentoRequisitos2["6.1.4"] = criarRequisito(
    "6.1.4",
    "Uso de correio eletrônico para informar",
    "É altamente desejável que o fluxo de trabalho de um SIGAD permita o uso do correio eletrônico, para que um usuário possa informar a outros usuários sobre documentos que requeiram sua atenção. Esse requisito requer a integração com um sistema de correio eletrônico existente.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "6",
    "6.1",
    "Controle do fluxo de trabalho"
);

cruzamentoRequisitos2["6.1.5"] = criarRequisito(
    "6.1.5",
    "Definição e alteração de fluxos por usuário autorizado",
    "O recurso de fluxo de trabalho de um SIGAD tem que permitir que fluxos de trabalho pré-programados sejam definidos, alterados e mantidos exclusivamente por usuário autorizado.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "Facultativo",
    "6",
    "6.1",
    "Controle do fluxo de trabalho"
);

cruzamentoRequisitos2["6.1.6"] = criarRequisito(
    "6.1.6",
    "Redistribuição de tarefas",
    "É altamente desejável que o administrador possa autorizar usuários individuais a redistribuir tarefas ou ações de um fluxo de trabalho a um usuário ou grupo diferente do previsto. Um usuário pode precisar enviar um documento a outro usuário, devido ao seu conteúdo específico ou caso o usuário responsável se encontre em licença.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "6",
    "6.1",
    "Controle do fluxo de trabalho"
);

cruzamentoRequisitos2["6.1.8"] = criarRequisito(
    "6.1.8",
    "Registro da tramitação",
    "Um recurso de fluxo de trabalho de um SIGAD tem que registrar a tramitação de um documento a fim de que os usuários possam conhecer a situação de cada documento no fluxo.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "Facultativo",
    "6",
    "6.1",
    "Controle do fluxo de trabalho"
);

cruzamentoRequisitos2["6.1.9"] = criarRequisito(
    "6.1.9",
    "Gerenciamento de filas de espera",
    "É altamente desejável que um recurso de fluxo de trabalho de um SIGAD gerencie os documentos em filas de espera que possam ser examinadas e controladas por usuário autorizado.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "6",
    "6.1",
    "Controle do fluxo de trabalho"
);

cruzamentoRequisitos2["6.1.10"] = criarRequisito(
    "6.1.10",
    "Visualização de fila de espera",
    "É altamente desejável que um recurso de fluxo de trabalho de um SIGAD tenha a capacidade de deixar que os usuários visualizem a fila de espera de trabalhos a eles destinados e selecionem os itens a serem trabalhados.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "6",
    "6.1",
    "Controle do fluxo de trabalho"
);

cruzamentoRequisitos2["6.1.11"] = criarRequisito(
    "6.1.11",
    "Fluxos condicionais",
    "É altamente desejável que um recurso de fluxo de trabalho de um SIGAD forneça fluxos condicionais de acordo com os dados de entrada do usuário ou a partir dos dados do SIGAD. Os fluxos que remetem o documento a um dos participantes dependem de uma condição determinada por um deles. Por exemplo, um fluxo pode levar um documento a um participante ou a outro, conforme os dados de entrada do participante anterior; ou a definição do fluxo pode depender de um valor calculado pelo sistema.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "6",
    "6.1",
    "Controle do fluxo de trabalho"
);

cruzamentoRequisitos2["6.1.12"] = criarRequisito(
    "6.1.12",
    "Histórico de movimentação",
    "Um recurso de fluxo de trabalho de um SIGAD tem que fornecer um histórico de movimentação dos documentos. O histórico de movimentação corresponde a um conjunto de metadados de datas de entrada e saída, nomes de responsáveis, título do documento, providências etc.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "Facultativo",
    "6",
    "6.1",
    "Controle do fluxo de trabalho"
);

cruzamentoRequisitos2["6.1.13"] = criarRequisito(
    "6.1.13",
    "Interrupção temporária de fluxo",
    "Um recurso de fluxo de trabalho de um SIGAD pode permitir que usuários autorizados interrompam ou suspendam temporariamente um fluxo com o objetivo de executar outro trabalho. O fluxo só prosseguirá com a autorização do usuário.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "Facultativo",
    "6",
    "6.1",
    "Controle do fluxo de trabalho"
);

cruzamentoRequisitos2["6.1.14"] = criarRequisito(
    "6.1.14",
    "Processamento condicional",
    "Um recurso de fluxo de trabalho de um SIGAD tem que incluir processamento condicional, isto é, permitir que um fluxo de trabalho seja suspenso para aguardar a chegada de um documento e prossiga automaticamente quando este for recebido.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "Facultativo",
    "6",
    "6.1",
    "Controle do fluxo de trabalho"
);

cruzamentoRequisitos2["6.1.15"] = criarRequisito(
    "6.1.15",
    "Associação de limites de tempo",
    "É altamente desejável que um recurso de fluxo de trabalho de um SIGAD possa associar limites de tempo a trâmites e/ou procedimentos individuais em cada fluxo e comunicar os itens que expiraram de acordo com esses limites.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "6",
    "6.1",
    "Controle do fluxo de trabalho"
);

cruzamentoRequisitos2["6.1.16"] = criarRequisito(
    "6.1.16",
    "Reconhecimento de indivíduos e grupos como participantes",
    "Um recurso de fluxo de trabalho de um SIGAD tem que reconhecer indivíduos e grupos de trabalho como participantes.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "Facultativo",
    "6",
    "6.1",
    "Controle do fluxo de trabalho"
);

cruzamentoRequisitos2["6.1.17"] = criarRequisito(
    "6.1.17",
    "Distribuição de documentos entre membros do grupo",
    "Sempre que o participante for um grupo de trabalho, é altamente desejável que um recurso de fluxo de trabalho de um SIGAD preveja a forma de distribuição dos documentos entre os membros do grupo. Essa distribuição pode ser de duas formas: de acordo com uma sequência circular predefinida, o SIGAD envia o próximo documento independentemente da conclusão da tarefa anterior; ou à medida que cada membro conclui a tarefa, o SIGAD lhe envia o próximo documento da fila do grupo.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "6",
    "6.1",
    "Controle do fluxo de trabalho"
);

cruzamentoRequisitos2["6.1.18"] = criarRequisito(
    "6.1.18",
    "Captura como gatilho de fluxos",
    "É altamente desejável que um recurso de fluxo de trabalho de um SIGAD permita que a captura de documentos desencadeie, automaticamente, fluxos de trabalho.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "6",
    "6.1",
    "Controle do fluxo de trabalho"
);

cruzamentoRequisitos2["6.1.19"] = criarRequisito(
    "6.1.19",
    "Relatórios para monitoramento",
    "Um recurso de fluxo de trabalho de um SIGAD tem que fornecer meios de elaboração de relatórios completos para permitir que gestores monitorem a tramitação dos documentos e o desempenho dos participantes.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "Facultativo",
    "6",
    "6.1",
    "Controle do fluxo de trabalho"
);

cruzamentoRequisitos2["6.1.20"] = criarRequisito(
    "6.1.20",
    "Registro da tramitação em metadados",
    "Um recurso de fluxo de trabalho de um SIGAD tem que registrar a tramitação de um documento em seus metadados. Os metadados referentes à tramitação devem registrar data e hora de envio e recebimento, e a identificação do usuário.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "Facultativo",
    "6",
    "6.1",
    "Controle do fluxo de trabalho"
);

cruzamentoRequisitos2["6.1.21"] = criarRequisito(
    "6.1.21",
    "Versões de fluxos alterados",
    "É altamente desejável que um SIGAD mantenha versões dos fluxos alterados e estabeleça vínculos entre os documentos já processados ou em processamento nos fluxos alterados.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "6",
    "6.1",
    "Controle do fluxo de trabalho"
);

cruzamentoRequisitos2["6.1.22"] = criarRequisito(
    "6.1.22",
    "Modificações em atributos dos fluxos",
    "O SIGAD tem que assegurar que qualquer modificação nos atributos dos fluxos leve em conta os documentos a ele vinculados.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "Facultativo",
    "6",
    "6.1",
    "Controle do fluxo de trabalho"
);

// ============================================================
// Seção 6.2 - Controle de versões e do status do documento
// ============================================================

cruzamentoRequisitos2["6.2.1"] = criarRequisito(
    "6.2.1",
    "Registro do status de transmissão",
    "Um recurso de fluxo de trabalho de um SIGAD tem que ser capaz de registrar o status de transmissão do documento, ou seja, se é minuta, original ou cópia.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "Facultativo",
    "6",
    "6.2",
    "Controle de versões e do status do documento"
);

// ============================================================
// CAPÍTULO 7 - SEGURANÇA
// Seção 7.1 - Cópias de segurança
// ============================================================

cruzamentoRequisitos2["7.1.2"] = criarRequisito(
    "7.1.2",
    "Controle das cópias de segurança",
    "O administrador do SIGAD tem que manter o controle das cópias de segurança, prevendo testes de restauração.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "7",
    "7.1",
    "Cópias de segurança"
);

cruzamentoRequisitos2["7.1.3"] = criarRequisito(
    "7.1.3",
    "Cópias em suportes equivalentes e off-site",
    "É altamente desejável que as mídias removíveis tenham cópias em suportes equivalentes e armazenamento off-site.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "7",
    "7.1",
    "Cópias de segurança"
);

cruzamentoRequisitos2["7.1.4"] = criarRequisito(
    "7.1.4",
    "Backups em dois locais diferentes",
    "É altamente desejável que os discos rígidos tenham backups armazenados em pelo menos dois locais diferentes e fisicamente distantes.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "7",
    "7.1",
    "Cópias de segurança"
);

cruzamentoRequisitos2["7.1.5"] = criarRequisito(
    "7.1.5",
    "Agendamento automático de backups",
    "É altamente desejável que um SIGAD seja capaz de agendar, automaticamente, os backups com periodicidade estipulada pelo administrador. Deve permitir cópias incrementais ou completas.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "7",
    "7.1",
    "Cópias de segurança"
);

cruzamentoRequisitos2["7.1.6"] = criarRequisito(
    "7.1.6",
    "Garantia de integridade das cópias de segurança",
    "É altamente desejável que um SIGAD disponha de mecanismos que garantam a integridade das cópias de segurança, bem como a identificação do responsável pelo procedimento.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "7",
    "7.1",
    "Cópias de segurança"
);

cruzamentoRequisitos2["7.1.8"] = criarRequisito(
    "7.1.8",
    "Backup de dados críticos",
    "É altamente desejável que dados críticos de configuração e controle do sistema operacional e do gerenciador de bancos de dados sejam especialmente protegidos. Mecanismos especiais de backup devem ser previstos para dados críticos.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "7",
    "7.1",
    "Cópias de segurança"
);

cruzamentoRequisitos2["7.1.9"] = criarRequisito(
    "7.1.9",
    "Cópias de trilhas de auditoria off-site",
    "É altamente desejável que as trilhas de auditoria sejam copiadas com frequência, prevendo-se cópias a serem armazenadas em pelo menos um local off-site.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "7",
    "7.1",
    "Cópias de segurança"
);

// ============================================================
// Seção 7.2 - Controle de acesso - Identificação e autenticação
// ============================================================

cruzamentoRequisitos2["7.2.4"] = criarRequisito(
    "7.2.4",
    "Alteração de credenciais de autenticação",
    "É altamente desejável que as credenciais de autenticação sejam alteradas pelo usuário proprietário ou pelo administrador, com a anuência do proprietário e em conformidade com a política de segurança.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "7",
    "7.2",
    "Controle de acesso"
);

cruzamentoRequisitos2["7.2.8"] = criarRequisito(
    "7.2.8",
    "Aplicação imediata de alterações de segurança",
    "É altamente desejável que um SIGAD aplique, imediatamente, alterações ou revogações dos atributos de segurança de usuários e de documentos digitais.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "7",
    "7.2",
    "Controle de acesso"
);

cruzamentoRequisitos2["7.2.14"] = criarRequisito(
    "7.2.14",
    "Concessão de acesso por usuários responsáveis",
    "Um SIGAD pode permitir que alguns usuários estipulem que outros usuários, papéis ou grupos de usuários podem ter acesso aos documentos sob sua responsabilidade. Essa permissão deve ser atribuída pelo administrador, de acordo com a política de segurança do órgão ou entidade.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "Facultativo",
    "7",
    "7.2",
    "Controle de acesso"
);

cruzamentoRequisitos2["7.2.19"] = criarRequisito(
    "7.2.19",
    "Hierarquias de papéis e herança de permissões",
    "Um SIGAD pode permitir a criação de hierarquias de papéis e o conceito de herança de permissões entre eles.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "Facultativo",
    "7",
    "7.2",
    "Controle de acesso"
);

// ============================================================
// Seção 7.3 - Classificação da informação quanto ao grau de sigilo
// ============================================================

cruzamentoRequisitos2["7.3.1"] = criarRequisito(
    "7.3.1",
    "Implementação de classificação de sigilo",
    "Um SIGAD tem que implementar a classificação de grau de sigilo e demais caracterizações de restrição de acesso de documentos, dossiês/processos e classes do plano de classificação, e de todas as operações de usuários nos documentos.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "7",
    "7.3",
    "Classificação da informação quanto ao grau de sigilo e restrição de acesso"
);

cruzamentoRequisitos2["7.3.2"] = criarRequisito(
    "7.3.2",
    "Identificação de restrições legais de acesso",
    "Um SIGAD tem que implementar a identificação de restrições legais de acesso baseando-se nos seguintes atributos de segurança: tipo de restrição legal de acesso; credencial de segurança do usuário. Os tipos de restrição legal podem ser documentos preparatórios, dados pessoais, sigilo comercial, bancário, industrial, telefônico, segredo de justiça etc.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "7",
    "7.3",
    "Classificação da informação quanto ao grau de sigilo e restrição de acesso"
);

cruzamentoRequisitos2["7.3.3"] = criarRequisito(
    "7.3.3",
    "Atributos para classificação de sigilo",
    "Um SIGAD tem que tratar a classificação de grau de sigilo baseando-se nos seguintes atributos de segurança: grau de sigilo do documento; credencial de segurança do usuário; identificação da autoridade classificadora. O grau de sigilo tem que estar associado à credencial de segurança. Incluem-se também os documentos recebidos com classificação de grau de sigilo.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "7",
    "7.3",
    "Classificação da informação quanto ao grau de sigilo e restrição de acesso"
);

cruzamentoRequisitos2["7.3.4"] = criarRequisito(
    "7.3.4",
    "Formalização da decisão de classificação",
    "É altamente desejável que um SIGAD formalize a decisão de classificação da informação em qualquer grau de sigilo, conforme legislação vigente. A título de exemplo, o Poder Executivo federal utiliza o Termo de Classificação de Informação - TCI, conforme estabelecido no decreto n. 7.724, de 16 de maio de 2012.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "7",
    "7.3",
    "Classificação da informação quanto ao grau de sigilo e restrição de acesso"
);

cruzamentoRequisitos2["7.3.5"] = criarRequisito(
    "7.3.5",
    "Recusa de acesso por credencial insuficiente",
    "Um SIGAD tem que recusar o acesso de usuários a documentos que possuam grau de sigilo superior à sua credencial de segurança.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "7",
    "7.3",
    "Classificação da informação quanto ao grau de sigilo e restrição de acesso"
);

cruzamentoRequisitos2["7.3.6"] = criarRequisito(
    "7.3.6",
    "Documentos sem sigilo sujeitos a políticas de acesso",
    "Um SIGAD tem que garantir que documentos sem atribuição de grau de sigilo ou identificação de outras restrições de acesso, provenientes de fontes externas ao SIGAD, estejam sujeitos às políticas de controle de acesso e de sigilo.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "7",
    "7.3",
    "Classificação da informação quanto ao grau de sigilo e restrição de acesso"
);

cruzamentoRequisitos2["7.3.7"] = criarRequisito(
    "7.3.7",
    "Manutenção da marcação de restrição de acesso original",
    "Um SIGAD tem que ser capaz de manter a marcação de restrição de acesso original durante a importação de documentos a partir de fontes externas ao SIGAD.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "7",
    "7.3",
    "Classificação da informação quanto ao grau de sigilo e restrição de acesso"
);

cruzamentoRequisitos2["7.3.8"] = criarRequisito(
    "7.3.8",
    "Inexistência de ambiguidade nas marcações de sigilo",
    "É altamente desejável que um SIGAD garanta que não haja ambiguidade na associação entre as marcações de grau de sigilo e outros atributos de segurança (permissões) do documento importado.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "7",
    "7.3",
    "Classificação da informação quanto ao grau de sigilo e restrição de acesso"
);

cruzamentoRequisitos2["7.3.9"] = criarRequisito(
    "7.3.9",
    "Seleção de graus de sigilo durante configuração",
    "Um SIGAD tem que permitir que um dos itens abaixo seja selecionado durante a configuração: graus de sigilo e restrições de acesso a serem atribuídos a classes e dossiês/processos; classes e dossiês/processos sem grau de sigilo ou outras restrições de acesso.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "7",
    "7.3",
    "Classificação da informação quanto ao grau de sigilo e restrição de acesso"
);

cruzamentoRequisitos2["7.3.10"] = criarRequisito(
    "7.3.10",
    "Alteração de sigilo em uma operação",
    "Em caso de erro ou reavaliação, o administrador autorizado tem que ser capaz de alterar o grau de sigilo ou outra restrição de acesso de todos os documentos arquivísticos de um dossiê/processo ou de uma classe, numa única operação. A informação quanto à desclassificação, reclassificação, redução do prazo de sigilo ou alteração de restrição de acesso deverá ser registrada conforme legislação em vigor.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "7",
    "7.3",
    "Classificação da informação quanto ao grau de sigilo e restrição de acesso"
);

cruzamentoRequisitos2["7.3.11"] = criarRequisito(
    "7.3.11",
    "Associação de sigilo a usuário autorizado na importação",
    "Um SIGAD tem que garantir que o grau de sigilo ou outra restrição de acesso de um documento importado esteja associado a um usuário autorizado com a credencial de segurança pertinente para receber o documento.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "7",
    "7.3",
    "Classificação da informação quanto ao grau de sigilo e restrição de acesso"
);

cruzamentoRequisitos2["7.3.12"] = criarRequisito(
    "7.3.12",
    "Ações de administração de segurança",
    "Um SIGAD tem que permitir que somente administradores autorizados sejam capazes de realizar as seguintes ações: remover ou revogar os atributos de segurança dos documentos; criar, alterar, remover ou revogar as credenciais de segurança dos usuários.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "7",
    "7.3",
    "Classificação da informação quanto ao grau de sigilo e restrição de acesso"
);

cruzamentoRequisitos2["7.3.13"] = criarRequisito(
    "7.3.13",
    "Desclassificação e redução de sigilo",
    "Um SIGAD tem que permitir somente ao usuário autorizado, mediante confirmação, a desclassificação, redução do grau de sigilo ou alteração de restrição de acesso de um documento. A informação quanto à desclassificação, reclassificação, redução do prazo de sigilo ou alteração de restrição de acesso deverá ser registrada conforme legislação em vigor.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "7",
    "7.3",
    "Classificação da informação quanto ao grau de sigilo e restrição de acesso"
);

cruzamentoRequisitos2["7.3.14"] = criarRequisito(
    "7.3.14",
    "Armazenamento de documentos sigilosos em meios distintos",
    "É altamente desejável que um SIGAD permita o armazenamento dos documentos sigilosos em meios físicos ou lógicos distintos dos documentos não sigilosos.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "7",
    "7.3",
    "Classificação da informação quanto ao grau de sigilo e restrição de acesso"
);

cruzamentoRequisitos2["7.3.15"] = criarRequisito(
    "7.3.15",
    "Impedimento de eliminação de documento sigiloso",
    "Um SIGAD tem que impedir que um documento com classificação de sigilo seja eliminado. Os documentos com classificação de sigilo têm que se tornar ostensivos antes de receberem a destinação prevista.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "7",
    "7.3",
    "Classificação da informação quanto ao grau de sigilo e restrição de acesso"
);

cruzamentoRequisitos2["7.3.16"] = criarRequisito(
    "7.3.16",
    "Metadados para controle de acesso",
    "Um SIGAD tem que implementar metadados nos níveis de dossiê, documento ou cópia truncada de documento para controlar o acesso à informação com restrição de acesso.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "7",
    "7.3",
    "Classificação da informação quanto ao grau de sigilo e restrição de acesso"
);

// ============================================================
// Seção 7.4 - Trilhas de auditoria
// ============================================================

cruzamentoRequisitos2["7.4.8"] = criarRequisito(
    "7.4.8",
    "Alarme para tamanho da trilha de auditoria",
    "É altamente desejável que um SIGAD seja capaz de gerar um alarme para os administradores apropriados se o tamanho da trilha de auditoria exceder um limite preestabelecido. Esse alarme deve ser usado para indicar a proximidade do esgotamento do espaço reservado à trilha de auditoria.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "7",
    "7.4",
    "Trilhas de auditoria"
);

cruzamentoRequisitos2["7.4.9"] = criarRequisito(
    "7.4.9",
    "Bloqueio de operações ao atingir limite da trilha",
    "Quando o espaço de armazenamento da trilha de auditoria atingir o limite preestabelecido, é altamente desejável que um SIGAD permita somente operações auditáveis originadas por administradores. Todas as outras operações estarão bloqueadas até a liberação pelo administrador.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "7",
    "7.4",
    "Trilhas de auditoria"
);

cruzamentoRequisitos2["7.4.10"] = criarRequisito(
    "7.4.10",
    "Monitoração de eventos auditados",
    "É altamente desejável que um SIGAD seja capaz de aplicar um conjunto de regras na monitoração de eventos auditados e, com base nelas, indicar a possível violação da segurança.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "7",
    "7.4",
    "Trilhas de auditoria"
);

cruzamentoRequisitos2["7.4.11"] = criarRequisito(
    "7.4.11",
    "Regras para monitoração de eventos auditados",
    "É altamente desejável que um SIGAD garanta pelo menos as seguintes regras para monitoração dos eventos auditados: acumulação de um número predeterminado de tentativas consecutivas de login com erro (autenticação malsucedida), conforme especificado pela política de segurança; ocorrência de vários login simultâneos do mesmo usuário em locais (computadores) diferentes; login do usuário fora do horário autorizado, após logoff no período normal.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "7",
    "7.4",
    "Trilhas de auditoria"
);

cruzamentoRequisitos2["7.4.12"] = criarRequisito(
    "7.4.12",
    "Relatórios de ações por documento, classe ou usuário",
    "Um SIGAD tem que fornecer relatórios sobre as ações que afetam classes, unidades de arquivamento e documentos, em ordem cronológica e organizados por: documento arquivístico, unidade de arquivamento ou classe; usuário; tipo de ação ou operação.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "7",
    "7.4",
    "Trilhas de auditoria"
);

cruzamentoRequisitos2["7.4.13"] = criarRequisito(
    "7.4.13",
    "Relatórios por posto de trabalho",
    "Um SIGAD pode fornecer relatórios referentes a ações que afetem documentos e dossiês/processos organizados por posto de trabalho (nos casos em que for tecnicamente adequado), endereço de rede ou outra interface de acesso. Alguns sistemas podem oferecer diversas interfaces de acesso aos documentos. Por exemplo, interface web externa, interface da intranet e interface desktop. Pode ser interessante o registro da interface de acesso usada.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "Facultativo",
    "7",
    "7.4",
    "Trilhas de auditoria"
);

cruzamentoRequisitos2["7.4.14"] = criarRequisito(
    "7.4.14",
    "Configuração de eventos auditáveis",
    "Somente administradores autorizados têm que ser capazes de configurar o conjunto de eventos auditáveis e seus atributos.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "7",
    "7.4",
    "Trilhas de auditoria"
);

cruzamentoRequisitos2["7.4.15"] = criarRequisito(
    "7.4.15",
    "Arquivamento periódico da trilha de auditoria",
    "Um SIGAD tem que ser capaz de arquivar periodicamente a trilha de auditoria como documento arquivístico.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "7",
    "7.4",
    "Trilhas de auditoria"
);

// ============================================================
// Seção 7.5 - Assinatura digital
// ============================================================

cruzamentoRequisitos2["7.5.1"] = criarRequisito(
    "7.5.1",
    "Verificação de origem e integridade com assinatura digital",
    "É altamente desejável que um SIGAD seja capaz de prover meios para se verificar a origem e a integridade dos documentos com assinatura digital.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "7",
    "7.5",
    "Assinatura digital"
);

cruzamentoRequisitos2["7.5.2"] = criarRequisito(
    "7.5.2",
    "Inclusão e remoção de certificados digitais",
    "Somente administradores autorizados têm que ser capazes de incluir, remover ou atualizar no SIGAD os certificados digitais de computadores ou de usuários.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "Facultativo",
    "7",
    "7.5",
    "Assinatura digital"
);

cruzamentoRequisitos2["7.5.4"] = criarRequisito(
    "7.5.4",
    "Registro da verificação da assinatura digital",
    "Um SIGAD, no processo de verificação da assinatura digital, tem que ser capaz de registrar, como metadado, o seguinte: validade da assinatura verificada; registro da verificação da assinatura; data e hora em que ocorreu a verificação.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "Facultativo",
    "7",
    "7.5",
    "Assinatura digital"
);

// ============================================================
// Seção 7.7 - Marcas d'água digitais
// ============================================================

cruzamentoRequisitos2["7.7.1"] = criarRequisito(
    "7.7.1",
    "Recuperação de informação em marcas d'água",
    "Um SIGAD tem que ser capaz de recuperar informação contida em marcas d'água digitais.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "Facultativo",
    "7",
    "7.7",
    "Marcas d'água digitais"
);

cruzamentoRequisitos2["7.7.2"] = criarRequisito(
    "7.7.2",
    "Armazenamento de documentos com marcas d'água",
    "Um SIGAD tem que ser capaz de armazenar documentos arquivísticos digitais que contenham marcas d'água digitais.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "Facultativo",
    "7",
    "7.7",
    "Marcas d'água digitais"
);

cruzamentoRequisitos2["7.7.3"] = criarRequisito(
    "7.7.3",
    "Atualizações tecnológicas de marcas d'água",
    "É altamente desejável que um SIGAD possua arquitetura capaz de receber atualizações tecnológicas no que se refere à plataforma de geração e detecção de marca d'água digital.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "7",
    "7.7",
    "Marcas d'água digitais"
);

// ============================================================
// Seção 7.9 - Criptografia
// ============================================================

cruzamentoRequisitos2["7.9.1"] = criarRequisito(
    "7.9.1",
    "Uso de criptografia para sigilo",
    "Um SIGAD tem que usar criptografia no armazenamento, na transmissão e na apresentação de documentos arquivísticos digitais ao implementar a política de sigilo.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "Facultativo",
    "7",
    "7.9",
    "Criptografia"
);

cruzamentoRequisitos2["7.9.2"] = criarRequisito(
    "7.9.2",
    "Acesso a documentos cifrados",
    "Um SIGAD tem que limitar o acesso aos documentos cifrados somente àqueles usuários portadores da chave de decifração.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "Facultativo",
    "7",
    "7.9",
    "Criptografia"
);

cruzamentoRequisitos2["7.9.4"] = criarRequisito(
    "7.9.4",
    "Captura direta de documentos cifrados",
    "É altamente desejável que um SIGAD possa assegurar a captura de documentos cifrados, diretamente, de uma aplicação de software que disponha da funcionalidade de cifração.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "7",
    "7.9",
    "Criptografia"
);

cruzamentoRequisitos2["7.9.5"] = criarRequisito(
    "7.9.5",
    "Operações com criptografia",
    "Somente usuários autorizados têm que ser capazes de realizar as operações a seguir: incluir, remover ou alterar parâmetros dos algoritmos criptográficos instalados no SIGAD; incluir, remover ou substituir chaves criptográficas de programas ou usuários do SIGAD; cifrar e alterar a criptografia de documentos; remover a criptografia de um documento.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "Facultativo",
    "7",
    "7.9",
    "Criptografia"
);

cruzamentoRequisitos2["7.9.6"] = criarRequisito(
    "7.9.6",
    "Registro de remoção de cifração",
    "Em caso de remoção da cifração do documento, os seguintes metadados adicionais têm que ser registrados na trilha de auditoria: data e hora da remoção da cifração; identificação do executor da operação; motivo da remoção da cifração.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "Facultativo",
    "7",
    "7.9",
    "Criptografia"
);

cruzamentoRequisitos2["7.9.7"] = criarRequisito(
    "7.9.7",
    "Atualizações tecnológicas de criptografia",
    "É altamente desejável que um SIGAD possua arquitetura capaz de receber atualizações tecnológicas no que se refere à plataforma criptográfica.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "7",
    "7.9",
    "Criptografia"
);

// ============================================================
// Seção 7.10 - Acompanhamento de mudança de suporte ou de local
// ============================================================

cruzamentoRequisitos2["7.10.1"] = criarRequisito(
    "7.10.1",
    "Histórico de mudanças de mídia",
    "É altamente desejável que um SIGAD seja capaz de manter, para cada documento ou dossiê/processo, o histórico das mudanças de mídia sofridas por esse documento ou dossiê/processo.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "7",
    "7.10",
    "Acompanhamento de mudança de suporte ou de local"
);

// ============================================================
// Seção 7.11 - Autoproteção
// ============================================================

cruzamentoRequisitos2["7.11.1"] = criarRequisito(
    "7.11.1",
    "Verificação de vírus antes da captura",
    "É altamente desejável que um SIGAD faça a verificação de vírus ou pragas antes da efetivação da captura.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "7",
    "7.11",
    "Autoproteção"
);

cruzamentoRequisitos2["7.11.2"] = criarRequisito(
    "7.11.2",
    "Redução de possibilidade de erros e falhas",
    "É altamente desejável que um SIGAD tenha dispositivos e procedimentos que reduzam a possibilidade de erros, falhas e descontinuidades no seu funcionamento, capazes de causar danos ou perdas aos documentos arquivísticos digitais.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "7",
    "7.11",
    "Autoproteção"
);

cruzamentoRequisitos2["7.11.3"] = criarRequisito(
    "7.11.3",
    "Modo de manutenção para restauração",
    "Após falha ou descontinuidade do SIGAD, quando a recuperação automática não for possível, um SIGAD tem que ser capaz de entrar em modo de manutenção, no qual é oferecida a possibilidade de restaurar o SIGAD para um estado seguro.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "Facultativo",
    "7",
    "7.11",
    "Autoproteção"
);

cruzamentoRequisitos2["7.11.4"] = criarRequisito(
    "7.11.4",
    "Garantia de recuperação de perdas",
    "Na restauração ao estado seguro, um SIGAD deve ser capaz de garantir a recuperação de perdas ocorridas, inclusive dos documentos de transações mais recentes.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "7",
    "7.11",
    "Autoproteção"
);

cruzamentoRequisitos2["7.11.5"] = criarRequisito(
    "7.11.5",
    "Consistência dos dados de segurança replicados",
    "É altamente desejável que um SIGAD garanta que os dados de segurança, quando replicados, sejam consistentes.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "7",
    "7.11",
    "Autoproteção"
);

cruzamentoRequisitos2["7.11.6"] = criarRequisito(
    "7.11.6",
    "Exemplos de dados de segurança",
    "Permissões de controle de acesso, chaves criptográficas e parâmetros de algoritmos criptográficos são exemplos de dados de segurança.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "7",
    "7.11",
    "Autoproteção"
);

cruzamentoRequisitos2["7.11.7"] = criarRequisito(
    "7.11.7",
    "Preservação de estado seguro",
    "Um SIGAD tem que preservar um estado seguro de funcionamento, interrompendo completamente a interação com usuários comuns, quando ocorrer um dos erros a seguir: falha de comunicação entre cliente e servidor; perda de integridade das informações de controle de acesso; falta de espaço para registro nas trilhas de auditoria.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "Facultativo",
    "7",
    "7.11",
    "Autoproteção"
);

cruzamentoRequisitos2["7.11.8"] = criarRequisito(
    "7.11.8",
    "Erros que exigem interrupção",
    "falha de comunicação entre cliente e servidor; perda de integridade das informações de controle de acesso; falta de espaço para registro nas trilhas de auditoria.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "Facultativo",
    "7",
    "7.11",
    "Autoproteção"
);

cruzamentoRequisitos2["7.11.9"] = criarRequisito(
    "7.11.9",
    "Bloqueio de operações se não for possível escrever na trilha",
    "Quando não for possível escrever na trilha de auditoria, é altamente desejável que um SIGAD impeça toda operação de qualquer usuário e passe para o modo de manutenção.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "7",
    "7.11",
    "Autoproteção"
);

cruzamentoRequisitos2["7.11.10"] = criarRequisito(
    "7.11.10",
    "Código de manutenção de integridade",
    "Um SIGAD pode atribuir a cada componente digital do documento, no momento da captura, um código de manutenção de integridade baseado em criptografia robusta.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "Facultativo",
    "7",
    "7.11",
    "Autoproteção"
);

// ============================================================
// Seção 7.12 - Alterar, apagar e truncar documentos
// ============================================================

cruzamentoRequisitos2["7.12.1"] = criarRequisito(
    "7.12.1",
    "Anulação de operação em caso de erro",
    "Um SIGAD tem que permitir, a um administrador autorizado, anular a operação em caso de erro do usuário ou do sistema. Anular uma operação não significa apagar um documento arquivístico capturado pelo SIGAD. A anulação da eliminação definitiva de documentos, por ser irreversível, não é possível.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "7",
    "7.12",
    "Alterar, apagar e truncar documentos arquivísticos digitais"
);

cruzamentoRequisitos2["7.12.2"] = criarRequisito(
    "7.12.2",
    "Inibição de eliminação em lote fora do processo regular",
    "É altamente desejável que um SIGAD, para evitar erros irrecuperáveis, iniba a eliminação (permanente ou lógica) de grupos ou lotes de documentos fora do processo regular de eliminação previsto na tabela de temporalidade e destinação de documentos.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "7",
    "7.12",
    "Alterar, apagar e truncar documentos arquivísticos digitais"
);

cruzamentoRequisitos2["7.12.3"] = criarRequisito(
    "7.12.3",
    "Apagamento ou correção excepcional",
    "Em situações excepcionais, o administrador tem que ser autorizado a apagar ou corrigir dossiês/processos, volumes e documentos. Nesse caso, um SIGAD tem que: registrar integralmente a ação de apagar ou corrigir na trilha de auditoria; produzir um relatório de anomalias para o administrador; eliminar todo o conteúdo de um dossiê/processo ou volume, quando forem eliminados; garantir que nenhum documento seja eliminado se tal ação resultar na alteração de outro documento arquivístico; informar o administrador sobre a existência de ligação entre um dossiê/processo ou documento prestes a ser apagado e qualquer outro dossiê/processo ou documento, solicitando confirmação antes de concluir a operação; manter a integridade total do metadado, a qualquer momento.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "7",
    "7.12",
    "Alterar, apagar e truncar documentos arquivísticos digitais"
);

cruzamentoRequisitos2["7.12.4"] = criarRequisito(
    "7.12.4",
    "Correção de erro de metadados",
    "Em caso de erro na inserção de metadados, o administrador terá que corrigi-lo, e o SIGAD tem que registrar essa ação na trilha de auditoria.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "7",
    "7.12",
    "Alterar, apagar e truncar documentos arquivísticos digitais"
);

cruzamentoRequisitos2["7.12.5"] = criarRequisito(
    "7.12.5",
    "Cópia truncada de documento",
    "Um SIGAD tem que permitir a um usuário autorizado fazer uma cópia truncada de um documento, com o objetivo de não alterar o original. Se o SIGAD não fornecer, diretamente, esses recursos, tem que permitir que outros pacotes de software os proporcionem.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "7",
    "7.12",
    "Alterar, apagar e truncar documentos arquivísticos digitais"
);

cruzamentoRequisitos2["7.12.6"] = criarRequisito(
    "7.12.6",
    "Ocultação de informação sigilosa",
    "Se o SIGAD não fornecer, diretamente, esses recursos, tem que permitir que outros pacotes de software os proporcionem. Um SIGAD tem que possibilitar a ocultação de informação sigilosa contida no documento original, permitindo: retirada de páginas de um documento; adição de retângulos opacos para ocultar nomes ou palavras sensíveis; quaisquer outros recursos necessários para formatos de vídeo ou áudio, caso existam.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "7",
    "7.12",
    "Alterar, apagar e truncar documentos arquivísticos digitais"
);

cruzamentoRequisitos2["7.12.7"] = criarRequisito(
    "7.12.7",
    "Impossibilidade de visualização na cópia truncada",
    "É essencial que, quando os recursos para truncar documentos forem empregados, nenhuma informação retirada ou ocultada seja passível de visualização na cópia truncada, na tela, nem quando impressa ou reproduzida por meios audiovisuais, independentemente da utilização de quaisquer recursos, tais como rotação, variação focal ou qualquer outra manipulação.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "7",
    "7.12",
    "Alterar, apagar e truncar documentos arquivísticos digitais"
);

cruzamentoRequisitos2["7.12.8"] = criarRequisito(
    "7.12.8",
    "Registro da produção de cópia truncada",
    "Quando uma cópia truncada é produzida, um SIGAD tem que registrar essa ação nos metadados do documento e da cópia truncada, incluindo, pelo menos, data, hora, motivo e quem a produziu.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "7",
    "7.12",
    "Alterar, apagar e truncar documentos arquivísticos digitais"
);

cruzamentoRequisitos2["7.12.9"] = criarRequisito(
    "7.12.9",
    "Referência cruzada à cópia truncada",
    "É altamente desejável que um SIGAD registre uma referência cruzada a uma cópia truncada nos mesmos dossiês/processos e documentos em que se encontra o documento original.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "7",
    "7.12",
    "Alterar, apagar e truncar documentos arquivísticos digitais"
);

// ============================================================
// CAPÍTULO 8 - PRESERVAÇÃO
// Seção 8.1 - Aspectos físicos
// ============================================================

cruzamentoRequisitos2["8.1.1"] = criarRequisito(
    "8.1.1",
    "Acondicionamento em condições ambientais compatíveis",
    "Os suportes de armazenamento de um SIGAD têm que ser acondicionados, manipulados e utilizados em condições ambientais compatíveis com sua vida útil prevista e/ou pretendida, de acordo com as especificações técnicas do fabricante e de entidades isentas, e com base em estatísticas de uso. A vida útil pretendida de um suporte pode ser menor que sua vida útil prevista, o que permite condições ambientais mais flexíveis.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "8",
    "8.1",
    "Aspectos físicos da preservação"
);

cruzamentoRequisitos2["8.1.2"] = criarRequisito(
    "8.1.2",
    "Especificação da vida útil dos suportes",
    "É altamente desejável que um SIGAD permita ao administrador especificar a vida útil prevista/pretendida dos suportes.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "8",
    "8.1",
    "Aspectos físicos da preservação"
);

cruzamentoRequisitos2["8.1.3"] = criarRequisito(
    "8.1.3",
    "Controle da vida útil dos suportes",
    "Um SIGAD tem que permitir o controle da vida útil dos suportes para auxiliar a implementação da estratégia de atualização de suportes.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "8",
    "8.1",
    "Aspectos físicos da preservação"
);

cruzamentoRequisitos2["8.1.4"] = criarRequisito(
    "8.1.4",
    "Informação automática sobre fim de vida útil",
    "É altamente desejável que um SIGAD informe, automaticamente, quais são os suportes cuja vida útil se encontra perto do fim.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Desejável",
    "8",
    "8.1",
    "Aspectos físicos da preservação"
);

// ============================================================
// Seção 8.2 - Aspectos lógicos
// ============================================================

cruzamentoRequisitos2["8.2.2"] = criarRequisito(
    "8.2.2",
    "Verificação periódica de dados armazenados",
    "Um SIGAD tem que possuir funcionalidades para verificação periódica dos dados e documentos armazenados, visando à detecção de possíveis erros. Nesse caso, recomenda-se o uso de um checksum robusto, ou seja, que permita a constatação da integridade dos dados e seja seguro quanto a fraudes.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "e-ARQ Obrigatório",
    "8",
    "8.2",
    "Aspectos lógicos da preservação"
);

cruzamentoRequisitos2["8.2.4"] = criarRequisito(
    "8.2.4",
    "Correção de erros em dados armazenados",
    "Um SIGAD pode permitir a correção dos erros detectados nos dados e documentos armazenados. Nesse contexto, a correção de erros refere-se à restauração de dados corrompidos.",
    "VERIFICAR!!",
    "Pendente de verificação.",
    "Facultativo",
    "8",
    "8