// conformidade.js
// Status de conformidade dos requisitos do e-ARQ Brasil
// true = Atende, false = Não Atende, null = Parcial/Não Avaliado

const conformidadeRequisitos = {
    // =====================================================================
    // REQUISITOS FUNCIONAIS (Capítulos 1 a 8)
    // =====================================================================

    // --- 1.1 Configuração e administração do plano de classificação ---
    "1.1.1": true,
    "1.1.2": true,
    "1.1.3": true,
    "1.1.4": true,
    "1.1.5": true,
    "1.1.6": true,
    "1.1.7": true,
    "1.1.8": true,
    "1.1.9": true,
    "1.1.10": true,
    "1.1.11": true,
    "1.1.12": true,
    "1.1.13": true,
    "1.1.14": true,
    "1.1.15": true,
    "1.1.16": true,
    "1.1.17": true,
    "1.1.18": true,

    // --- 1.2 Configuração da tabela de temporalidade ---
    "1.2.1": true,
    "1.2.2": true,
    "1.2.3": true,
    "1.2.4": true,
    "1.2.5": true,
    "1.2.6": true,
    "1.2.7": true,
    "1.2.8": true,
    "1.2.9": true,
    "1.2.10": true,

    // --- 1.3 Classificação e metadados das unidades de arquivamento ---
    "1.3.1": true,
    "1.3.2": true,
    "1.3.3": true,
    "1.3.4": true,
    "1.3.5": true,
    "1.3.6": true,
    "1.3.7": true,
    "1.3.8": true,
    "1.3.9": true,
    "1.3.10": true,
    "1.3.11": true,
    "1.3.12": false,
    "1.3.13": true,

    // --- 2.1 Procedimentos gerais de captura ---
    "2.1.1": true,
    "2.1.2": true,
    "2.1.3": true,
    "2.1.4": true,
    "2.1.5": true,
    "2.1.6": true,
    "2.1.7": true,
    "2.1.8": true,
    "2.1.9": true,
    "2.1.10": true,
    "2.1.11": true,
    "2.1.12": true,
    "2.1.13": true,
    "2.1.14": true,
    "2.1.15": true,
    "2.1.16": true,
    "2.1.17": false,
    "2.1.18": false,
    "2.1.19": true,

    // --- 2.2 Captura em lote ---
    "2.2.1": true,

    // --- 2.3 Captura de mensagens de correio eletrônico ---
    "2.3.1": true,
    "2.3.2": false,
    "2.3.3": false,

    // --- 2.4 Captura de documentos não digitais ou híbridos ---
    "2.4.1": true,
    "2.4.2": true,
    "2.4.3": true,
    "2.4.4": true,

    // --- 2.5 Formato de arquivo e estrutura dos documentos ---
    "2.5.1": true,
    "2.5.2": true,
    "2.5.3": true,
    "2.5.4": true,
    "2.5.5": true,

    // --- 2.6 Estrutura dos procedimentos de gestão ---
    "2.6.1": false,
    "2.6.2": false,
    "2.6.3": true,
    "2.6.4": true,
    "2.6.5": false,

    // --- 3.1 Aplicação da tabela de temporalidade ---
    "3.1.1": true,
    "3.1.2": true,
    "3.1.3": true,
    "3.1.4": false,
    "3.1.5": false,
    "3.1.6": false,
    "3.1.7": false,
    "3.1.8": false,

    // --- 3.2 Exportação de documentos ---
    "3.2.1": true,
    "3.2.2": true,
    "3.2.3": false,
    "3.2.4": false,
    "3.2.5": true,
    "3.2.6": true,
    "3.2.7": true,
    "3.2.8": true,
    "3.2.9": false,
    "3.2.10": true,
    "3.2.11": true,
    "3.2.12": false,
    "3.2.13": false,

    // --- 3.3 Eliminação ---
    "3.3.1": true,
    "3.3.2": true,
    "3.3.3": true,
    "3.3.4": true,
    "3.3.5": true,
    "3.3.6": true,
    "3.3.7": true,
    "3.3.8": true,
    "3.3.9": true,
    "3.3.10": true,

    // --- 3.4 Documentos não digitais e híbridos ---
    "3.4.1": true,
    "3.4.2": true,
    "3.4.3": true,
    "3.4.4": true,

    // --- 4.1 Aspectos gerais de pesquisa ---
    "4.1.1": true,
    "4.1.2": true,
    "4.1.3": true,

    // --- 4.2 Pesquisa e localização ---
    "4.2.1": true,
    "4.2.2": true,
    "4.2.3": true,
    "4.2.4": true,
    "4.2.5": true,
    "4.2.6": true,
    "4.2.7": true,
    "4.2.8": true,
    "4.2.9": false,
    "4.2.10": false,
    "4.2.11": false,
    "4.2.12": false,
    "4.2.13": true,
    "4.2.14": true,
    "4.2.15": true,
    "4.2.16": false,
    "4.2.17": true,
    "4.2.18": true,
    "4.2.19": true,

    // --- 4.3 Apresentação ---
    "4.3.1": true,
    "4.3.2": false,
    "4.3.3": true,
    "4.3.4": true,
    "4.3.5": true,
    "4.3.6": true,
    "4.3.7": true,
    "4.3.8": true,
    "4.3.9": true,
    "4.3.10": false,
    "4.3.11": true,
    "4.3.12": true,
    "4.3.13": true,
    "4.3.14": true,
    "4.3.15": true,
    "4.3.16": true,
    "4.3.17": false,
    "4.3.18": true,
    "4.3.19": false,

    // --- 5.1 Procedimentos gerais de elaboração ---
    "5.1.1": false,
    "5.1.2": false,

    // --- 5.2 Gerenciamento dos dossiês/processos ---
    "5.2.1": true,
    "5.2.2": true,
    "5.2.3": true,
    "5.2.4": true,
    "5.2.5": true,
    "5.2.6": true,

    // --- 5.3 Requisitos adicionais para gerenciamento de processos ---
    "5.3.1": false,
    "5.3.2": false,
    "5.3.3": false,
    "5.3.4": true,
    "5.3.5": true,
    "5.3.6": true,
    "5.3.7": true,
    "5.3.8": true,
    "5.3.9": false,
    "5.3.10": false,

    // --- 5.4 Volumes ---
    "5.4.1": false,
    "5.4.2": false,
    "5.4.3": false,
    "5.4.4": false,
    "5.4.5": true,
    "5.4.6": false,
    "5.4.7": true,
    "5.4.8": false,
    "5.4.9": false,

    // --- 5.5 Documentos e processos não digitais e híbridos ---
    "5.5.1": true,
    "5.5.2": true,
    "5.5.3": true,
    "5.5.4": true,
    "5.5.5": true,
    "5.5.6": true,
    "5.5.7": true,
    "5.5.8": false,
    "5.5.9": true,

    // --- 6.1 Controle do fluxo de trabalho ---
    "6.1.1": false,
    "6.1.2": false,
    "6.1.3": false,
    "6.1.4": false,
    "6.1.5": true,
    "6.1.6": false,
    "6.1.7": true,
    "6.1.8": false,
    "6.1.9": false,
    "6.1.10": false,
    "6.1.11": false,
    "6.1.12": false,
    "6.1.13": false,
    "6.1.14": false,
    "6.1.15": false,
    "6.1.16": false,
    "6.1.17": false,
    "6.1.18": false,
    "6.1.19": false,
    "6.1.20": false,
    "6.1.21": false,
    "6.1.22": true,

    // --- 6.2 Controle de versões ---
    "6.2.1": false,
    "6.2.2": true,

    // --- 7.1 Cópias de segurança ---
    "7.1.1": true,
    "7.1.2": true,
    "7.1.3": true,
    "7.1.4": true,
    "7.1.5": false,
    "7.1.6": false,
    "7.1.7": true,
    "7.1.8": true,
    "7.1.9": true,

    // --- 7.2 Controle de acesso ---
    "7.2.1": true,
    "7.2.2": true,
    "7.2.3": true,
    "7.2.4": false,
    "7.2.5": true,
    "7.2.6": true,
    "7.2.7": true,
    "7.2.8": true,
    "7.2.9": true,
    "7.2.10": true,
    "7.2.11": true,
    "7.2.12": true,
    "7.2.13": true,
    "7.2.14": true,
    "7.2.15": true,
    "7.2.16": true,
    "7.2.17": true,
    "7.2.18": true,
    "7.2.19": true,

    // --- 7.3 Classificação de sigilo ---
    "7.3.1": false,
    "7.3.2": true,
    "7.3.3": false,
    "7.3.4": false,
    "7.3.5": false,
    "7.3.6": true,
    "7.3.7": true,
    "7.3.8": true,
    "7.3.9": true,
    "7.3.10": true,
    "7.3.11": false,
    "7.3.12": true,
    "7.3.13": false,
    "7.3.14": false,
    "7.3.15": false,
    "7.3.16": true,

    // --- 7.4 Trilhas de auditoria ---
    "7.4.1": true,
    "7.4.2": true,
    "7.4.3": true,
    "7.4.4": true,
    "7.4.5": true,
    "7.4.6": true,
    "7.4.7": true,
    "7.4.8": true,
    "7.4.9": true,
    "7.4.10": false,
    "7.4.11": true,
    "7.4.12": true,
    "7.4.13": false,
    "7.4.14": false,
    "7.4.15": true,

    // --- 7.5 Assinatura digital ---
    "7.5.1": true,
    "7.5.2": true,
    "7.5.3": true,
    "7.5.4": false,
    "7.5.5": true,
    "7.5.6": true,

    // --- 7.6 Carimbo digital do tempo ---
    "7.6.1": null,  // Parcial/Não Avaliado
    "7.6.2": null,  // Parcial/Não Avaliado
    "7.6.3": true,

    // --- 7.7 Marcas d'água digitais ---
    "7.7.1": false,
    "7.7.2": true,
    "7.7.3": true,

    // --- 7.8 Assinatura cadastrada ---
    "7.8.1": true,
    "7.8.2": true,
    "7.8.3": true,

    // --- 7.9 Criptografia ---
    "7.9.1": false,
    "7.9.2": false,
    "7.9.3": true,
    "7.9.4": false,
    "7.9.5": false,
    "7.9.6": true,
    "7.9.7": true,

    // --- 7.10 Acompanhamento de mudança de suporte ---
    "7.10.1": false,
    "7.10.2": true,
    "7.10.3": true,

    // --- 7.11 Autoproteção ---
    "7.11.1": true,
    "7.11.2": false,
    "7.11.3": false,
    "7.11.4": false,
    "7.11.5": false,
    "7.11.6": true,
    "7.11.7": false,

    // --- 7.12 Alterar, apagar e truncar ---
    "7.12.1": true,
    "7.12.2": true,
    "7.12.3": true,
    "7.12.4": false,
    "7.12.5": true,
    "7.12.6": false,
    "7.12.7": false,
    "7.12.8": false,
    "7.12.9": true,

    // --- 8.1 Aspectos físicos de preservação ---
    "8.1.1": false,
    "8.1.2": false,
    "8.1.3": true,
    "8.1.4": true,

    // --- 8.2 Aspectos lógicos de preservação ---
    "8.2.1": true,
    "8.2.2": false,
    "8.2.3": true,
    "8.2.4": true,
    "8.2.5": false,
    "8.2.6": false,
    "8.2.7": true,
    "8.2.8": true,

    // --- 8.3 Aspectos gerais de preservação ---
    "8.3.1": true,
    "8.3.2": true,
    "8.3.3": false,
    "8.3.4": false,
    "8.3.5": false,
    "8.3.6": true,

    // =====================================================================
    // REQUISITOS NÃO FUNCIONAIS (Capítulos 9 a 15)
    // =====================================================================

    // --- 9.1 Durabilidade ---
    "9.1.1": true,
    "9.1.2": true,
    "9.1.3": true,
    "9.1.4": true,
    "9.1.5": false,
    "9.1.6": false,
    "9.1.7": true,
    "9.1.8": true,

    // --- 9.2 Capacidade ---
    "9.2.1": true,
    "9.2.2": true,
    "9.2.3": false,
    "9.2.4": false,
    "9.2.5": true,
    "9.2.6": true,

    // --- 9.3 Efetividade de armazenamento ---
    "9.3.1": true,
    "9.3.2": true,
    "9.3.3": true,
    "9.3.4": true,
    "9.3.5": true,

    // --- 10.1 Funções administrativas ---
    "10.1.1": true,
    "10.1.2": true,
    "10.1.3": true,

    // --- 11.1 Conformidade com a legislação ---
    "11.1": true,
    "11.2": true,
    "11.3": true,

    // --- 12.1 Usabilidade ---
    "12.1.1": true,
    "12.1.2": false,
    "12.1.3": true,
    "12.1.4": true,
    "12.1.5": true,
    "12.1.6": true,
    "12.1.7": false,
    "12.1.8": true,
    "12.1.9": false,
    "12.1.10": false,
    "12.1.11": false,
    "12.1.12": true,
    "12.1.13": false,
    "12.1.14": false,
    "12.1.15": false,
    "12.1.16": true,
    "12.1.17": true,
    "12.1.18": true,
    "12.1.19": true,
    "12.1.20": true,
    "12.1.21": true,
    "12.1.22": false,
    "12.1.23": false,
    "12.1.24": true,
    "12.1.25": true,

    // --- 13.1 Interoperabilidade ---
    "13.1.1": true,
    "13.1.2": true,
    "13.1.3": true,

    // --- 14.1 Disponibilidade ---
    "14.1.1": true,

    // --- 15.1 Desempenho e escalabilidade ---
    "15.1.1": true,
    "15.1.2": false,
    "15.1.3": false,
    "15.1.4": true,
    "15.1.5": null   // Parcial/Não Avaliado
};

// Forma de demonstração - preenchimento manual pelo usuário
const formaDemonstracao = {};