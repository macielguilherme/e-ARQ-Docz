// ============================================================
// CRUZAMENTO DE REQUISITOS E-ARQ BRASIL × DocZ
// Baseado no Dicionário de Dados (12/08/2026) e Prints Reais
// ============================================================
// CAPÍTULO 1.1 - CONFIGURAÇÃO E ADMINISTRAÇÃO DO PLANO DE CLASSIFICAÇÃO
// TOTAL: 18 REQUISITOS
// ============================================================

const cruzamentoRequisitos = {};

// ============================================================
// FUNÇÃO AUXILIAR
// ============================================================
function criarRequisito(id, titulo, descricao, status, evidencia, capitulo, subsecao, localizacao, referencia, prints, observacoes, bugs) {
    return {
        id,
        titulo,
        descricao,
        status,
        evidencias: {
            descricao: evidencia,
            localizacao: localizacao || null,
            referencia: referencia || null,
            prints: prints || []
        },
        responsavel: "",
        dataValidacao: "2026-08-27",
        capitulo,
        subsecao,
        observacoes: observacoes || [],
        bugs: bugs || []
    };
}

// ============================================================
// CAPÍTULO 1.1 - CONFIGURAÇÃO E ADMINISTRAÇÃO DO PLANO DE CLASSIFICAÇÃO
// ============================================================

// 1.1.1 - Inclusão e compatibilidade com o plano de classificação
cruzamentoRequisitos["1.1.1"] = criarRequisito(
    "1.1.1",
    "Inclusão e compatibilidade com o plano de classificação",
    "Um SIGAD tem que incluir e ser compatível com o plano de classificação do órgão ou entidade, com as seguintes informações: identificador da classe; nome da classe; código da classe; subordinação da classe; indicação de permissão de uso; indicação de classe ativa/inativa.",
    "Atendido",
    "O sistema possui a rotina Gestão Documental > Tabela de Temporalidade com todos os campos exigidos: Código de Classificação (identificador), Assunto (nome), estrutura hierárquica Classe/SubClasse/Grupo/SubGrupo (subordinação), Permitir Seleção (permissão de uso) e Ativo (classe ativa/inativa).",
    1,
    "1.1 - Configuração e administração do plano de classificação",
    "/Docz/app/crud_temporalidade",
    "Dicionário de Dados - Seção 3 - Classe",
    [
        {
            arquivo: "evidencias/prints/capitulo1/1.1.1_tabela_temporalidade.png",
            descricao: "Tela principal da Tabela de Temporalidade com listagem de classes mostrando todos os campos exigidos",
            data: "2026-08-27"
        },
        {
            arquivo: "evidencias/prints/capitulo1/1.1.1_estrutura_hierarquica.png",
            descricao: "Estrutura hierárquica expandida mostrando Classe/SubClasse/Grupo/SubGrupo",
            data: "2026-08-27"
        }
    ]
);

// 1.1.2 - Criação hierárquica de classes
cruzamentoRequisitos["1.1.2"] = criarRequisito(
    "1.1.2",
    "Criação hierárquica de classes",
    "Um SIGAD tem que garantir a criação de classes, subclasses, grupos e subgrupos nos níveis do plano de classificação de acordo com o método de codificação adotado.",
    "Atendido",
    "O sistema permite a criação de classes, subclasses, grupos e subgrupos através da estrutura hierárquica representada pelos campos Classe, SubClasse, Grupo e SubGrupo no formulário de cadastro da Tabela de Temporalidade.",
    1,
    "1.1 - Configuração e administração do plano de classificação",
    "/Docz/app/crud_temporalidade",
    "Dicionário de Dados - 3.4 - Subordinação da Classe",
    [
        {
            arquivo: "evidencias/prints/capitulo1/1.1.2_nova_classe.png",
            descricao: "Formulário de criação de nova classe com campos hierárquicos (Classe, SubClasse, Grupo, SubGrupo)",
            data: "2026-08-27"
        }
    ]
);

// 1.1.3 - Adição de novas classes
cruzamentoRequisitos["1.1.3"] = criarRequisito(
    "1.1.3",
    "Adição de novas classes",
    "Um SIGAD tem que permitir a usuários autorizados acrescentar novas classes sempre que necessário.",
    "Atendido",
    "A rotina disponibiliza o botão NOVO na Tabela de Temporalidade, permitindo que usuários autorizados acrescentem novas classes sempre que necessário.",
    1,
    "1.1 - Configuração e administração do plano de classificação",
    "/Docz/app/crud_temporalidade",
    "Manual de Operação - Tabela de temporalidade",
    [
        {
            arquivo: "evidencias/prints/capitulo1/1.1.3_botao_novo.png",
            descricao: "Botão NOVO na Tabela de Temporalidade para adicionar novas classes",
            data: "2026-08-27"
        }
    ]
);

// 1.1.4 - Registro de data de abertura
cruzamentoRequisitos["1.1.4"] = criarRequisito(
    "1.1.4",
    "Registro de data de abertura",
    "Um SIGAD tem que registrar a data de abertura de uma nova classe no respectivo metadado.",
    "Atendido",
    "O sistema registra automaticamente a data de criação da classe no momento do cadastro, disponível para consulta no Histórico de Versões da Tabela de Temporalidade.",
    1,
    "1.1 - Configuração e administração do plano de classificação",
    "/Docz/app/crud_temporalidade",
    "Manual de Operação - Histórico de Versões",
    [
        {
            arquivo: "evidencias/prints/capitulo1/1.1.4_data_criacao.png",
            descricao: "Data de criação registrada automaticamente no Histórico de Versões",
            data: "2026-08-27"
        }
    ]
);

// 1.1.5 - Registro de alteração de classe
cruzamentoRequisitos["1.1.5"] = criarRequisito(
    "1.1.5",
    "Registro de alteração de classe",
    "Um SIGAD tem que registrar a mudança de nome, identificador e código de uma classe já existente no respectivo metadado.",
    "Atendido",
    "O Histórico de Alterações da Tabela de Temporalidade registra todas as modificações com: Operação (tipo de alteração), Data (quando ocorreu) e Usuário (quem alterou). O detalhamento mostra os valores anteriores e novos.",
    1,
    "1.1 - Configuração e administração do plano de classificação",
    "/Docz/app/crud_temporalidade",
    "Dicionário de Dados - 4. Evento de Gerenciamento de Classe",
    [
        {
            arquivo: "evidencias/prints/capitulo1/1.1.5_historico_alteracoes.png",
            descricao: "Lista de alterações com Operação, Data e Usuário",
            data: "2026-08-27"
        },
        {
            arquivo: "evidencias/prints/capitulo1/1.1.5_detalhamento_alteracao.png",
            descricao: "Detalhamento da alteração com valores anterior e novo",
            data: "2026-08-27"
        }
    ]
);

// 1.1.6 - Deslocamento de classes
cruzamentoRequisitos["1.1.6"] = criarRequisito(
    "1.1.6",
    "Deslocamento de classes",
    "Um SIGAD tem que permitir o deslocamento de uma classe inteira, incluídas as subclasses, para outro ponto do plano de classificação.",
    "Atendido Parcialmente",
    "A estrutura hierárquica permite reorganização através dos campos Classe/SubClasse/Grupo/SubGrupo. A movimentação de classes pode ser feita alterando a subordinação, mas a movimentação em massa de classes inteiras com todos os documentos pode ser limitada.",
    1,
    "1.1 - Configuração e administração do plano de classificação",
    "/Docz/app/crud_temporalidade",
    "Dicionário de Dados - 3.4 - Subordinação da Classe",
    [
        {
            arquivo: "evidencias/prints/capitulo1/1.1.6_subordinacao_classe.png",
            descricao: "Campos de subordinação hierárquica Classe/SubClasse/Grupo/SubGrupo",
            data: "2026-08-27"
        }
    ],
    ["A movimentação em massa de classes inteiras com todos os documentos pode ser limitada. Recomenda-se validar com a equipe de desenvolvimento."]
);

// 1.1.7 - Inativação de classes
cruzamentoRequisitos["1.1.7"] = criarRequisito(
    "1.1.7",
    "Inativação de classes",
    "Um SIGAD tem que permitir que apenas usuários autorizados tornem inativa uma classe em que não sejam mais classificados documentos.",
    "Atendido",
    "O campo Ativo permite controlar a disponibilidade da classe. Quando desmarcado, a classe fica inativa e não pode mais ser utilizada para classificação de novos documentos. Esta ação é restrita a usuários autorizados.",
    1,
    "1.1 - Configuração e administração do plano de classificação",
    "/Docz/app/crud_temporalidade",
    "Dicionário de Dados - 3.6 - Indicação de Classe Ativa/Inativa",
    [
        {
            arquivo: "evidencias/prints/capitulo1/1.1.7_campo_ativo.png",
            descricao: "Campo Ativo para controle de disponibilidade da classe",
            data: "2026-08-27"
        }
    ]
);

// 1.1.8 - Exclusão de classes inativas
cruzamentoRequisitos["1.1.8"] = criarRequisito(
    "1.1.8",
    "Exclusão de classes inativas",
    "Um SIGAD tem que permitir que um usuário autorizado apague uma classe inativa.",
    "Atendido",
    "Classes inativas podem ser excluídas através do ícone de exclusão (X) disponível na Tabela de Temporalidade. A exclusão só é permitida se a classe não possuir documentos vinculados.",
    1,
    "1.1 - Configuração e administração do plano de classificação",
    "/Docz/app/crud_temporalidade",
    "Manual de Operação - Tabela de temporalidade",
    [
        {
            arquivo: "evidencias/prints/capitulo1/1.1.8_excluir_classe.png",
            descricao: "Ícone de exclusão (X) disponível para classes inativas",
            data: "2026-08-27"
        }
    ]
);

// 1.1.9 - Impedimento de eliminação de classes com documentos
cruzamentoRequisitos["1.1.9"] = criarRequisito(
    "1.1.9",
    "Impedimento de eliminação de classes com documentos",
    "Um SIGAD tem que impedir a eliminação de uma classe que tenha documentos nela classificados.",
    "Atendido",
    "O sistema possui validação de integridade referencial que impede a exclusão de classes que possuam documentos classificados. Ao tentar excluir, o sistema exibe mensagem de erro.",
    1,
    "1.1 - Configuração e administração do plano de classificação",
    "/Docz/app/crud_temporalidade",
    "Dicionário de Dados - Seção 3 - Classe",
    [
        {
            arquivo: "evidencias/prints/capitulo1/1.1.9_erro_exclusao.png",
            descricao: "Mensagem de erro ao tentar excluir classe com documentos vinculados",
            data: "2026-08-27"
        }
    ]
);

// 1.1.10 - Associação de metadados às classes
cruzamentoRequisitos["1.1.10"] = criarRequisito(
    "1.1.10",
    "Associação de metadados às classes",
    "Um SIGAD tem que permitir a associação de metadados às classes, conforme estabelecido no padrão de metadados.",
    "Atendido",
    "O sistema permite a configuração de campos personalizáveis através da rotina Projetos > Campos, onde é possível associar metadados adicionais às classes conforme o padrão e-ARQ Brasil.",
    1,
    "1.1 - Configuração e administração do plano de classificação",
    "/Docz/app/projeto",
    "Dicionário de Dados - Configuração de Metadados Personalizáveis",
    [
        {
            arquivo: "evidencias/prints/capitulo1/1.1.10_campos_personalizaveis.png",
            descricao: "Tela de configuração de campos personalizáveis para metadados",
            data: "2026-08-27"
        }
    ]
);

// 1.1.11 - Mecanismos de atribuição de identificadores
cruzamentoRequisitos["1.1.11"] = criarRequisito(
    "1.1.11",
    "Mecanismos de atribuição de identificadores",
    "Um SIGAD tem que disponibilizar pelo menos dois mecanismos de atribuição de identificadores a classes do plano de classificação.",
    "Atendido",
    "O sistema disponibiliza dois mecanismos de identificação: Código de Classificação (numérico/alfanumérico estruturado) e Assunto (nome descritivo da classe).",
    1,
    "1.1 - Configuração e administração do plano de classificação",
    "/Docz/app/crud_temporalidade",
    "Dicionário de Dados - 3.1 e 3.2",
    [
        {
            arquivo: "evidencias/prints/capitulo1/1.1.11_codigo_assunto.png",
            descricao: "Código de Classificação e Assunto como identificadores da classe",
            data: "2026-08-27"
        }
    ]
);

// 1.1.12 - Permissão de uso de classes
cruzamentoRequisitos["1.1.12"] = criarRequisito(
    "1.1.12",
    "Permissão de uso de classes",
    "É altamente desejável que um SIGAD preveja um atributo associado às classes para registrar a permissão de uso daquela classe para classificar um documento.",
    "Atendido",
    "O campo Permitir Seleção indica se a classe está disponível para classificação de documentos. Classes agrupadoras podem ter esta opção desmarcada, enquanto classes terminais (que recebem documentos) devem tê-la marcada.",
    1,
    "1.1 - Configuração e administração do plano de classificação",
    "/Docz/app/crud_temporalidade",
    "Dicionário de Dados - 3.5 - Indicação de Permissão de Uso",
    [
        {
            arquivo: "evidencias/prints/capitulo1/1.1.12_permitir_selecao.png",
            descricao: "Campo Permitir Seleção para controle de uso da classe",
            data: "2026-08-27"
        }
    ]
);

// 1.1.13 - Identificação de classe por termo completo
cruzamentoRequisitos["1.1.13"] = criarRequisito(
    "1.1.13",
    "Identificação de classe por termo completo",
    "Um SIGAD tem que utilizar o termo completo para identificar uma classe.",
    "Atendido",
    "O termo completo da classe é formado pela concatenação de todos os níveis hierárquicos (Classe > SubClasse > Grupo > SubGrupo). O sistema exibe o termo completo na visualização da classe através da estrutura hierárquica.",
    1,
    "1.1 - Configuração e administração do plano de classificação",
    "/Docz/app/crud_temporalidade",
    "Dicionário de Dados - 3.4 - Subordinação da Classe",
    [
        {
            arquivo: "evidencias/prints/capitulo1/1.1.1_estrutura_hierarquica.png",
            descricao: "Termo completo da classe exibido através da estrutura hierárquica expandida",
            data: "2026-08-27"
        }
    ]
);

// 1.1.14 - Unicidade dos termos completos
cruzamentoRequisitos["1.1.14"] = criarRequisito(
    "1.1.14",
    "Unicidade dos termos completos",
    "Um SIGAD tem que assegurar que os termos completos, que identificam cada classe, sejam únicos no plano de classificação.",
    "Atendido",
    "O sistema possui validação de unicidade que impede a criação de classes com códigos duplicados. Cada classe deve ter um código único dentro do plano de classificação, conforme demonstrado na listagem da Tabela de Temporalidade.",
    1,
    "1.1 - Configuração e administração do plano de classificação",
    "/Docz/app/crud_temporalidade",
    "Manual de Operação - Tabela de temporalidade",
    [
        {
            arquivo: "evidencias/prints/capitulo1/1.1.1_tabela_temporalidade.png",
            descricao: "Listagem mostrando que todos os códigos de classificação são únicos",
            data: "2026-08-27"
        }
    ]
);

// 1.1.15 - Pesquisa e navegação gráfica
cruzamentoRequisitos["1.1.15"] = criarRequisito(
    "1.1.15",
    "Pesquisa e navegação gráfica",
    "Um SIGAD pode prever pesquisa e navegação na estrutura do plano de classificação por meio de uma interface gráfica.",
    "Atendido",
    "A Tabela de Temporalidade possui interface gráfica com árvore hierárquica expansível e campo de busca para localização rápida de classes.",
    1,
    "1.1 - Configuração e administração do plano de classificação",
    "/Docz/app/crud_temporalidade",
    "Manual de Operação - Tabela de temporalidade",
    [
        {
            arquivo: "evidencias/prints/capitulo1/1.1.1_estrutura_hierarquica.png",
            descricao: "Árvore hierárquica expansível para navegação gráfica",
            data: "2026-08-27"
        },
        {
            arquivo: "evidencias/prints/capitulo1/1.1.15_campo_busca.png",
            descricao: "Campo de busca para localização rápida de classes",
            data: "2026-08-27"
        }
    ]
);

// 1.1.16 - Importação e exportação do plano de classificação
cruzamentoRequisitos["1.1.16"] = criarRequisito(
    "1.1.16",
    "Importação e exportação do plano de classificação",
    "É altamente desejável que um SIGAD seja capaz de importar e exportar, total ou parcialmente, um plano de classificação.",
    "Atendido",
    "O sistema disponibiliza: EXPORTAR DADOS (gera arquivo .xlsx com o plano completo) e IMPORTAR com modelo de planilha disponível para download (BAIXAR MODELO PLANILHA IMPORTACÃO).",
    1,
    "1.1 - Configuração e administração do plano de classificação",
    "/Docz/app/crud_temporalidade",
    "Manual de Operação - Tabela de temporalidade - Ações Disponíveis",
    [
        {
            arquivo: "evidencias/prints/capitulo1/1.1.16_exportar_dados.png",
            descricao: "Botão EXPORTAR DADOS para exportar o plano de classificação",
            data: "2026-08-27"
        },
        {
            arquivo: "evidencias/prints/capitulo1/1.1.16_importar_modelo.png",
            descricao: "Botões IMPORTAR e BAIXAR MODELO PLANILHA IMPORTACÃO",
            data: "2026-08-27"
        }
    ]
);

// 1.1.17 - Relatórios do plano de classificação
cruzamentoRequisitos["1.1.17"] = criarRequisito(
    "1.1.17",
    "Relatórios do plano de classificação",
    "Um SIGAD tem que prover funcionalidades para elaboração de relatórios de apoio à gestão do plano de classificação.",
    "Atendido",
    "Através da funcionalidade EXPORTAR DADOS, o sistema gera relatórios em Excel com todas as informações do plano de classificação, apoiando a gestão documental.",
    1,
    "1.1 - Configuração e administração do plano de classificação",
    "/Docz/app/crud_temporalidade",
    "Manual de Operação - Tabela de temporalidade",
    [
        {
            arquivo: "evidencias/prints/capitulo1/1.1.17_relatorio_exportado.png",
            descricao: "Relatório exportado em Excel com o plano de classificação",
            data: "2026-08-27"
        }
    ]
);

// 1.1.18 - Consulta e relatórios do plano de classificação
cruzamentoRequisitos["1.1.18"] = criarRequisito(
    "1.1.18",
    "Consulta e relatórios do plano de classificação",
    "É altamente desejável que um SIGAD possibilite a consulta ao plano de classificação a partir de qualquer atributo ou combinação de atributos.",
    "Atendido",
    "A Tabela de Temporalidade disponibiliza filtros de consulta como Buscar (por qualquer atributo) e Exibir Apenas Ativos (filtro por status), permitindo consultas personalizadas.",
    1,
    "1.1 - Configuração e administração do plano de classificação",
    "/Docz/app/crud_temporalidade",
    "Manual de Operação - Tabela de temporalidade - Funcionalidades de Filtro",
    [
        {
            arquivo: "evidencias/prints/capitulo1/1.1.18_filtros_consulta.png",
            descricao: "Filtros de consulta: Buscar e Exibir Apenas Ativos",
            data: "2026-08-27"
        }
    ]
);

// ============================================================
// FUNÇÕES AUXILIARES
// ============================================================

function getRequisitosPorStatus(status) {
    return Object.values(cruzamentoRequisitos).filter(r => r.status === status);
}

function getRequisitosPorCapitulo(capitulo) {
    return Object.values(cruzamentoRequisitos).filter(r => r.capitulo === capitulo);
}

function getEstatisticas() {
    const total = Object.keys(cruzamentoRequisitos).length;
    const atendidos = getRequisitosPorStatus('Atendido').length;
    const parcial = getRequisitosPorStatus('Atendido Parcialmente').length;
    const naoAtendidos = getRequisitosPorStatus('Nao Atendido').length;
    const emDesenvolvimento = getRequisitosPorStatus('Em Desenvolvimento').length;
    
    const pesoTotal = atendidos + (parcial * 0.5);
    const conformidade = total > 0 ? (pesoTotal / total * 100).toFixed(1) : 0;
    
    return {
        total,
        atendidos,
        parcial,
        naoAtendidos,
        emDesenvolvimento,
        conformidade: parseFloat(conformidade)
    };
}

function getBugsAbertos() {
    const bugs = [];
    Object.values(cruzamentoRequisitos).forEach(req => {
        if (req.bugs && req.bugs.length > 0) {
            bugs.push({
                id: req.id,
                titulo: req.titulo,
                bugs: req.bugs
            });
        }
    });
    return bugs;
}

function getRequisitosComEvidencias() {
    return Object.values(cruzamentoRequisitos).filter(r => 
        r.evidencias && r.evidencias.descricao && r.evidencias.prints && r.evidencias.prints.length > 0
    );
}

// Exportar para uso
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        cruzamentoRequisitos,
        getRequisitosPorStatus,
        getRequisitosPorCapitulo,
        getEstatisticas,
        getBugsAbertos,
        getRequisitosComEvidencias
    };
}