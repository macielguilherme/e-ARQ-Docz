const detalhesRequisitos = {
    // =========================================================================
    // ===== CAPÍTULO 1 - ORGANIZAÇÃO DOS DOCUMENTOS ARQUIVÍSTICOS =====
    // =========================================================================

    // --- 1.1 Configuração e administração do plano de classificação no SIGAD ---
    "1.1.1": {
        explicacao: "O SIGAD deve ser compatível e conter a estrutura do plano de classificação da instituição, armazenando: identificador, nome, código, subordinação hierárquica, permissão de uso e indicador de classe ativa/inativa. Para órgãos do SINAR, deve ser aprovado pela instituição arquivística competente.",
        implementacao: "Criar tabela de classes com campos: ID, nome, código, parent_id, permite_classificacao (bool), ativa (bool). Validar a árvore no cadastro e registrar o ato formal de aprovação arquivística.",
        exemplo: "Classe 021.1 'Candidatos a cargo e emprego públicos' - subordinada a 021, ativa e com permissão direta para classificação.",
        dicas: "Garanta integridade referencial para evitar classes órfãs. Mantenha controle de versão do plano."
    },
    "1.1.2": {
        explicacao: "O sistema tem que suportar a criação de todos os níveis da hierarquia arquivística: classes, subclasses, grupos e subgrupos, conforme o método de codificação adotado.",
        implementacao: "Estrutura em árvore auto-relacionada (parent_id) permitindo profundidade multinível flexível e gerador automático de código de nível.",
        exemplo: "000 (Classe) -> 020 (Subclasse) -> 021 (Grupo) -> 021.1 (Subgrupo).",
        dicas: "Evite limitar a profundidade no banco; modele com CTEs recursivas para navegação e consultas rápidas."
    },
    "1.1.3": {
        explicacao: "Usuários autorizados (arquivistas/administradores) devem poder incluir novas classes no plano sempre que surgirem novas funções ou atividades na organização.",
        implementacao: "Módulo administrativo com permissão 'CRIAR_CLASSE', formulário de cadastro com validação de duplicidade e registro do criador.",
        exemplo: "Criação da classe '050 - GESTÃO DE DADOS E INTELIGÊNCIA ARTIFICIAL' para atender novas atribuições do órgão.",
        dicas: "Exija justificativa arquivística antes de submeter uma nova classe para homologação."
    },
    "1.1.4": {
        explicacao: "O SIGAD tem que registrar automaticamente a data e hora de abertura/criação de uma nova classe em seu respectivo metadado.",
        implementacao: "Campo `data_abertura` timestamp preenchido automaticamente pelo servidor via trigger ou ORM (ISO 8601).",
        exemplo: "Classe 021.1 criada em 2024-03-15T14:30:00Z pelo usuário 'gestor.arquivo'.",
        dicas: "Bloqueie edições retroativas no campo de data de criação para fins de auditoria."
    },
    "1.1.5": {
        explicacao: "O sistema tem que registrar qualquer alteração de nome, código ou identificador de uma classe existente no respectivo metadado de histórico.",
        implementacao: "Tabela de histórico de alterações gravando valor anterior, valor novo, data/hora e identificador do agente modificador.",
        exemplo: "Nome da classe 021.1 alterado de 'Recrutamento' para 'Recrutamento e Seleção de Pessoal'.",
        dicas: "Nunca altere o identificador primário interno (UUID/ID numérico) ao renomear códigos ou títulos."
    },
    "1.1.6": {
        explicacao: "Permitir o deslocamento, desmembramento ou fusão de classes inteiras (com todas as subclasses e documentos associados) para outro ponto do plano, registrando tudo nos metadados.",
        implementacao: "Transação atômica que atualiza o `parent_id` da classe e o caminho hierárquico de todos os documentos subordinados, gerando logs de evento.",
        exemplo: "Mover a subclasse 021.3 de '020 - ADMINISTRAÇÃO' para '050 - GESTÃO DE PESSOAS' após reforma administrativa.",
        dicas: "Implemente validação rigorosa para evitar ciclos (uma classe se tornar filha de si mesma ou de seus descendentes)."
    },
    "1.1.7": {
        explicacao: "Permitir que apenas usuários autorizados inativem classes que não receberão mais novos documentos, preservando a integridade dos já classificados.",
        implementacao: "Campo booleano `ativa: false`. No fluxo de autuação/captura, filtrar para impedir a seleção de classes inativas.",
        exemplo: "Inativação da classe '030.1 - Pagamento via Cheque' devido à modernização bancária.",
        dicas: "Mantenha documentos antigos sob classes inativas 100% pesquisáveis e legíveis."
    },
    "1.1.8": {
        explicacao: "Permitir que usuários autorizados apaguem uma classe inativa, desde que ela não contenha documentos nem subclasses ativas vinculadas.",
        implementacao: "Validação pré-exclusão: verificar se `COUNT(documentos) == 0` e `COUNT(subclasses) == 0`. Aplicar exclusão lógica (soft delete).",
        exemplo: "Exclusão de uma classe de teste criada por engano e inativada sem nenhum documento arquivado.",
        dicas: "Prefira arquivar ou desativar a excluir permanentemente para preservar rastreabilidade."
    },
    "1.1.9": {
        explicacao: "O SIGAD tem que impedir a eliminação de qualquer classe que possua documentos classificados nela até que todos tenham sido recolhidos, eliminados legalmente ou reclassificados.",
        implementacao: "Restrição de chave estrangeira (Foreign Key Constraint) no banco e validação na camada de aplicação antes de qualquer ação de exclusão.",
        exemplo: "O sistema exibe erro impeditivo ao tentar excluir a classe 021.1 contendo 500 processos em andamento.",
        dicas: "Crie relatórios com a contagem de acervo por classe para subsidiar análises prévias."
    },
    "1.1.10": {
        explicacao: "Permitir a associação de metadados às classes conforme o padrão e-ARQ Brasil, restringindo inclusão e alteração a usuários autorizados.",
        implementacao: "Entidade de metadados de classe mapeada com campos para descrição, vocabulário e regras de uso, protegida por ACL/RBAC.",
        exemplo: "Metadado `earq.classe.indicadorUso` associado à classe com valor 'Permitido'.",
        dicas: "Valide os tipos de dados e esquemas de metadados antes de persistir."
    },
    "1.1.11": {
        explicacao: "Disponibilizar pelo menos dois mecanismos de identificação para cada classe: código estruturado (numérico/alfanumérico) e termo descritivo (nome).",
        implementacao: "Campos `codigo` (ex: '021.1') e `nome` (ex: 'Recrutamento e Seleção') indexados com busca combinada.",
        exemplo: "Busca no SIGAD permite localizar tanto digitando '021.1' quanto digitando 'Recrutamento'.",
        dicas: "Permita ao usuário configurar se prefere ver código + nome ou apenas nome nas listagens."
    },
    "1.1.12": {
        explicacao: "É altamente desejável prever um atributo associado à classe para registrar a permissão de uso direto na classificação de documentos (classes agrupadoras vs. classes finais).",
        implementacao: "Flag `permite_classificacao` (booleano). Bloquear a captura direta em classes intermediárias/agrupadoras.",
        exemplo: "Classe 020 (Administração Geral) = NÃO permite classificar; Subclasse 020.1 (Comunicação) = SIM permite.",
        dicas: "Destaque visualmente com ícones diferentes na árvore (ex: pastas para agrupadoras e ícones de arquivo para terminais)."
    },
    "1.1.13": {
        explicacao: "O SIGAD tem que utilizar o termo completo para identificar a classe, contemplando toda a cadeia hierárquica desde o nível raiz.",
        implementacao: "Função que constrói a string hierárquica completa concatenada por dois-pontos ou barras.",
        exemplo: "'MATERIAL: AQUISIÇÃO: MATERIAL PERMANENTE: COMPRA'.",
        dicas: "Armazene o termo completo em cache ou coluna calculada para otimizar pesquisas e relatórios."
    },
    "1.1.14": {
        explicacao: "Garantir que os termos completos que identificam cada classe sejam únicos em todo o plano de classificação.",
        implementacao: "Índice único no banco de dados para a combinação de código hierárquico e validação na criação.",
        exemplo: "Não é permitido criar duas classes distintas com o termo completo idêntico.",
        dicas: "Valide a unicidade em tempo real durante a digitação no formulário administrativo."
    },
    "1.1.15": {
        explicacao: "O SIGAD pode fornecer interface gráfica para pesquisa e navegação na árvore da estrutura do plano de classificação.",
        implementacao: "Componente UI de TreeView com nós colapsáveis, busca instantânea e carregamento assíncrono (lazy loading).",
        exemplo: "Navegação visual onde o usuário clica nos nós para expandir classes e ver os subgrupos.",
        dicas: "Adicione busca rápida com destaque (highlight) no nó encontrado."
    },
    "1.1.16": {
        explicacao: "É altamente desejável que o SIGAD seja capaz de importar e exportar o plano de classificação total ou parcialmente em formatos interoperáveis.",
        implementacao: "Rotinas de importação/exportação em XML/JSON compatíveis com os esquemas do e-PMG e e-PING.",
        exemplo: "Exportação do plano de classificação do Ministério para compartilhamento com suas autarquias vinculadas.",
        dicas: "Valide o esquema XML via XSD antes de efetivar a importação."
    },
    "1.1.17": {
        explicacao: "O SIGAD tem que gerar relatórios de apoio à gestão do plano: plano completo, recorte hierárquico, documentos por classe e classificação por unidade.",
        implementacao: "Módulo de relatórios parametrizável com exportação para PDF, CSV e XLSX.",
        exemplo: "Relatório listando o total de processos autuados em cada classe no último trimestre pelo setor financeiro.",
        dicas: "Permita agendamento automático de relatórios periódicos para os arquivistas."
    },
    "1.1.18": {
        explicacao: "É altamente desejável permitir consultas avançadas ao plano de classificação por qualquer atributo ou combinação de atributos, emitindo relatórios.",
        implementacao: "Filtro dinâmico com operadores lógicos (AND/OR) combinando nome, código, data de criação, status e permissão.",
        exemplo: "Consulta por classes ativas criadas após 2022 que contenham o termo 'Licitação'.",
        dicas: "Salve os filtros mais utilizados como 'Favoritos de Pesquisa'."
    },

    // --- 1.2 Configuração da tabela de temporalidade e destinação de documentos ---
    "1.2.1": {
        explicacao: "O SIGAD tem que prover funcionalidades para definição e manutenção da tabela de temporalidade e destinação associada ao plano de classificação.",
        implementacao: "Módulo de temporalidade vinculado 1:1 com as classes terminais do plano de classificação.",
        exemplo: "Vínculo da classe 021.1 às regras de guarda de 5 anos corrente, 10 anos intermediária e guarda permanente.",
        dicas: "Exija que a tabela de temporalidade esteja formalmente aprovada antes de liberar para produção."
    },
    "1.2.2": {
        explicacao: "A tabela de temporalidade deve conter obrigatoriamente: identificador, prazo corrente, evento inicial corrente, prazo intermediário, evento inicial intermediário, destinação final, sigilo e observações.",
        implementacao: "Tabela no banco de dados estruturada com todos os campos exigidos e validação de preenchimento.",
        exemplo: "Classe 033.1: Corrente = 2 anos (a contar do encerramento); Intermediária = 5 anos; Destinação = Eliminação.",
        dicas: "No caso do Poder Executivo federal, siga as tabelas aprovadas pelo Arquivo Nacional."
    },
    "1.2.3": {
        explicacao: "O sistema tem que prever pelo menos quatro situações de destinação: reavaliação futura, eliminação, exportação para transferência e recolhimento.",
        implementacao: "Enum de destinação no modelo de dados: `REAVALIACAO`, `ELIMINACAO`, `TRANSFERENCIA`, `RECOLHIMENTO`.",
        exemplo: "Processos de valor histórico marcados com destinação final de 'Recolhimento' (guarda permanente).",
        dicas: "Trate a transferência como etapa intermediária e o recolhimento como permanente."
    },
    "1.2.4": {
        explicacao: "O SIGAD tem que disparar automaticamente a contagem dos prazos de guarda a partir de eventos do sistema (abertura, arquivamento, desarquivamento) ou permitir informar eventos externos.",
        implementacao: "Triggers e rotinas cron que calculam a data de expiração da guarda com base na data do evento disparador.",
        exemplo: "Ao registrar o evento de arquivamento de um processo de prestação de contas, inicia-se a contagem de 5 anos de retenção.",
        dicas: "Permita que o arquivista insira manualmente a data de eventos externos como 'Aprovação pelo Tribunal de Contas'."
    },
    "1.2.5": {
        explicacao: "A definição dos prazos de guarda deve ser obrigatoriamente expressa em número inteiro de meses ou número inteiro de anos.",
        implementacao: "Campos numéricos inteiros para quantidade acompanhados de unidade de medida ('meses' ou 'anos').",
        exemplo: "Prazo: 60 meses ou 5 anos.",
        dicas: "Converta internamente para dias nos cálculos de sistema para garantir precisão matemática."
    },
    "1.2.6": {
        explicacao: "A criação, alteração e exclusão da tabela de temporalidade deve ser restrita estritamente a usuários autorizados.",
        implementacao: "Permissão de segurança `GERENCIAR_TEMPORALIDADE` associada a papéis de arquivista e administrador.",
        exemplo: "Usuários comuns podem visualizar a temporalidade, mas apenas a CPAD pode alterar prazos.",
        dicas: "Registre em auditoria qualquer alteração em regras de retenção documental."
    },
    "1.2.7": {
        explicacao: "Quando um item da tabela for alterado por usuário autorizado, o SIGAD deve atualizar automaticamente o prazo e destinação em todos os documentos e processos vinculados.",
        implementacao: "Rotina transacional que atualiza os cálculos de temporalidade de todos os dossiês vinculados à classe modificada.",
        exemplo: "Aumento do prazo de guarda da classe de contratos de 5 para 10 anos atualiza imediatamente a previsão de expurgo de 300 processos.",
        dicas: "Gere um relatório de impacto antes de confirmar alterações em massa na tabela."
    },
    "1.2.8": {
        explicacao: "É altamente desejável que o SIGAD mantenha o histórico completo de todas as alterações feitas na tabela de temporalidade.",
        implementacao: "Tabela de versionamento registrando versão da regra, valor anterior, valor novo, responsável e data/hora.",
        exemplo: "Histórico mostra que a classe 012 teve sua destinação alterada de 'Eliminação' para 'Guarda Permanente' em 2023.",
        dicas: "Disponibilize a visualização do histórico na própria tela da classe."
    },
    "1.2.9": {
        explicacao: "É altamente desejável que o SIGAD consiga importar e exportar a tabela de temporalidade total ou parcialmente.",
        implementacao: "Exportador e importador em formato XML/JSON com validação de esquema de dados.",
        exemplo: "Importar a Tabela de Temporalidade de Documentos das Atividades-Meio oficial do governo federal.",
        dicas: "Facilite a homologação e intercâmbio entre órgãos do mesmo sistema de arquivos."
    },
    "1.2.10": {
        explicacao: "O SIGAD tem que emitir relatórios de gestão da temporalidade: tabela completa, recorte hierárquico e lista de documentos agrupados por prazo de guarda.",
        implementacao: "Gerador de relatórios com filtros por classe, período de vigência e status de expiração.",
        exemplo: "Relatório de 'Documentos com Prazo de Guarda Vencido em 2024' para subsidiar abertura de edital de eliminação.",
        dicas: "Permita exportar relatórios em formato aberto para tratamento em planilhas."
    },

    // --- 1.3 Classificação e metadados das unidades de arquivamento ---
    "1.3.1": {
        explicacao: "As unidades de arquivamento (dossiês/processos) só podem ser classificadas nas classes autorizadas do plano de classificação.",
        implementacao: "Validação na autuação: permitir seleção apenas de classes marcadas com `permite_classificacao = true`.",
        exemplo: "Tentativa de autuar processo na classe raiz '000 - ADMINISTRAÇÃO' é bloqueada, exigindo selecionar a subclasse específica.",
        dicas: "Desabilite nós não classificáveis na interface de árvore para evitar erros."
    },
    "1.3.2": {
        explicacao: "O SIGAD tem que permitir a classificação de um número ilimitado de unidades de arquivamento dentro de uma mesma classe.",
        implementacao: "Modelagem de dados relacional 1:N sem limites artificiais de quantidade.",
        exemplo: "A classe 022.1 contém mais de 100.000 processos individuais de férias ao longo dos anos.",
        dicas: "Utilize paginação e índices eficientes no banco para não degradar a performance."
    },
    "1.3.3": {
        explicacao: "O SIGAD tem que utilizar o termo completo da classe para identificar a unidade de arquivamento no contexto hierárquico.",
        implementacao: "Persistir ou renderizar o caminho hierárquico completo nos detalhes da unidade de arquivamento.",
        exemplo: "'020.1.1 - PESSOAL: PAGAMENTO: FOLHA MENSAL'.",
        dicas: "Exiba o caminho completo no cabeçalho de visualização do processo."
    },
    "1.3.4": {
        explicacao: "Permitir a associação de metadados às unidades de arquivamento, restringindo a inclusão e alteração a usuários autorizados (apenas para correção de erros).",
        implementacao: "Formulário de metadados com validação de perfil e trava de edição após autuação, permitindo ajustes apenas com justificativa.",
        exemplo: "Retificação do metadado 'Interessado' realizada pelo chefe do protocolo com registro de motivo.",
        dicas: "Grave na trilha de auditoria qualquer retificação de metadado efetuada."
    },
    "1.3.5": {
        explicacao: "Associar os metadados das unidades de arquivamento em rigorosa conformidade com o padrão estabelecido no e-ARQ Brasil.",
        implementacao: "Mapeamento estruturado das entidades de banco aos rótulos oficiais (`earq.processoDossie.id`, `dc.title`, etc.).",
        exemplo: "Metadados mínimos obrigatórios (número de protocolo, classe, interessado, data) validados no salvamento.",
        dicas: "Utilize validação automatizada de esquemas para garantir integridade."
    },
    "1.3.6": {
        explicacao: "A nova unidade de arquivamento deve herdar automaticamente metadados da classe onde foi classificada (prazos de guarda e restrições de acesso).",
        implementacao: "Preenchimento automático via backend dos campos de temporalidade e nível de sigilo a partir da classe selecionada.",
        exemplo: "Processo criado na classe 'Processo Disciplinar' herda automaticamente prazo de 5 anos e nível de acesso restrito.",
        dicas: "Evite que o usuário precise preencher dados que já estão definidos na classe."
    },
    "1.3.7": {
        explicacao: "Os metadados herdados devem ser sincronizados de modo que uma alteração na classe seja automaticamente refletida na unidade de arquivamento.",
        implementacao: "Relacionamento dinâmico via chaves estrangeiras ou trigger de atualização em cascata.",
        exemplo: "Alteração do prazo da classe na tabela de temporalidade atualiza imediatamente os processos vinculados.",
        dicas: "Mantenha distinção clara entre atributos próprios do processo e atributos herdados da classe."
    },
    "1.3.8": {
        explicacao: "O SIGAD pode permitir a alteração conjunta de um determinado metadado em um lote de unidades de arquivamento selecionadas.",
        implementacao: "Interface de seleção múltipla com funcionalidade 'Editar Metadado em Lote' protegida por permissão administrativa.",
        exemplo: "Alterar a unidade de custódia de 50 processos selecionados para 'Arquivo Central'.",
        dicas: "Exija confirmação explícita com o resumo de quantos itens serão modificados."
    },
    "1.3.9": {
        explicacao: "Permitir que unidades de arquivamento, volumes e documentos sejam reclassificados por usuário autorizado, mantendo intactos todos os documentos e suas relações.",
        implementacao: "Rotina de reclassificação que atualiza o vínculo de classe sem alterar os identificadores internos, documentos ou volumes existentes.",
        exemplo: "Processo autuado como 'Consulta Jurídica' reclassificado para 'Contencioso Administrativo' mantendo todos os pareceres anexados.",
        dicas: "Gere evento de gerenciamento na trilha de auditoria para rastrear a mudança."
    },
    "1.3.10": {
        explicacao: "É altamente desejável manter o histórico das classificações anteriores de unidades de arquivamento ou documentos reclassificados.",
        implementacao: "Tabela de histórico de classificação com: ID da unidade, classe anterior, classe nova, data/hora e usuário.",
        exemplo: "Aba de histórico do processo exibe: 'Reclassificado de 021.1 para 021.3 em 10/04/2024'.",
        dicas: "Permita buscar processos também pelas suas classificações históricas."
    },
    "1.3.11": {
        explicacao: "É altamente desejável que o sistema exija do administrador/usuário a inserção das razões/justificativa para a reclassificação.",
        implementacao: "Campo obrigatório 'Motivo da Reclassificação' no diálogo modal de alteração de classe.",
        exemplo: "'Reclassificado para a classe correta conforme despacho do arquivista no expediente nº 45/2024'.",
        dicas: "Armazene a justificativa no evento correspondente de gerenciamento de classe."
    },
    "1.3.12": {
        explicacao: "O SIGAD pode permitir que os usuários criem referências cruzadas e vínculos entre unidades de arquivamento afins.",
        implementacao: "Tabela de relacionamentos N:N entre processos/dossiês com tipos de ligação (ex: 'relacionado a', 'referência').",
        exemplo: "Vínculo de referência entre o Processo de Licitação nº 10/2024 e o Processo de Execução Orçamentária nº 44/2024.",
        dicas: "Diferencie referências cruzadas simples de procedimentos de apensação formal."
    },
    "1.3.13": {
        explicacao: "O SIGAD tem que associar automaticamente ao dossiê/processo o prazo e a destinação final previstos na classe onde foi inserido.",
        implementacao: "Atribuição automática dos valores de temporalidade da classe no momento da persistência da unidade de arquivamento.",
        exemplo: "Ao autuar processo na classe 021.2, o sistema fixa prazo corrente de 2 anos e destinação de 'Eliminação'.",
        dicas: "Elimine o risco de erro humano impedindo preenchimento manual desses campos por usuários comuns."
    },

    // =========================================================================
    // ===== CAPÍTULO 2 - CAPTURA =====
    // =========================================================================

    // --- 2.1 Procedimentos gerais ---
    "2.1.1": {
        explicacao: "A captura oficializa o documento no SIGAD: registra e gerencia documentos não digitais, digitais e híbridos, classifica no plano e valida metadados obrigatórios.",
        implementacao: "Fluxo de captura integrado com validação de campos obrigatórios, seleção de classe, atribuição de nível de acesso e gravação no banco.",
        exemplo: "Captura de ofício digital: preenchimento de metadados, seleção de classe 021.1, definição de nível ostensivo e geração de registro.",
        dicas: "Valide metadados em tempo real na interface antes de submeter a captura."
    },
    "2.1.2": {
        explicacao: "O SIGAD tem que capturar documentos produzidos dentro do sistema, produzidos fora (upload), gerados em fluxos integrados e importados em lote.",
        implementacao: "Módulos de editor interno, upload via web/API, conectores de integração e processador de lotes assíncrono.",
        exemplo: "Captura automática de relatórios financeiros mensais via API REST integrada ao ERP.",
        dicas: "Aplique os mesmos critérios arquivísticos e validações em qualquer método de entrada."
    },
    "2.1.3": {
        explicacao: "O sistema tem que capturar e manter todos os componentes digitais que integram o documento arquivístico como uma unidade complexa indivisível.",
        implementacao: "Entidade documento relacionando 1:N arquivos binários com metadados próprios de cada componente digital.",
        exemplo: "Documento composto por um PDF de texto principal, uma planilha ODS de cálculos e uma imagem JPG de anexo.",
        dicas: "Gere e valide hashes individuais para cada componente digital e do conjunto."
    },
    "2.1.4": {
        explicacao: "O SIGAD tem que registrar metadados conforme o padrão e-ARQ Brasil e garantir que se mantenham permanentemente associados ao documento, componente digital ou classe.",
        implementacao: "Banco de dados relacional com integridade referencial estrita e esquemas padronizados de metadados.",
        exemplo: "Metadados de autor, data, protocolo e hash permanentemente indexados ao registro do documento.",
        dicas: "Nunca armazene metadados em arquivos soltos desacoplados do banco de dados."
    },
    "2.1.5": {
        explicacao: "O sistema tem que prever a inserção de todos os metadados obrigatórios previstos em legislação específica no momento da captura de processos.",
        implementacao: "Validação síncrona: bloquear autuação de processo se campos obrigatórios (interessado, assunto, classe, data) estiverem vazios.",
        exemplo: "Bloqueio de abertura de processo administrativo sem informar o CPF/CNPJ do interessado.",
        dicas: "Destaque visualmente os campos obrigatórios com asterisco (*) no formulário."
    },
    "2.1.6": {
        explicacao: "O SIGAD tem que atribuir um número identificador único e persistente a cada processo, dossiê e documento capturado, válido por todo seu ciclo de vida.",
        implementacao: "Geração de UUID v4 ou chave primária sequencial atômica imutável no momento da inserção no banco de dados.",
        exemplo: "Documento recebe o identificador único permanente `f81d4fae-7dec-11d0-a765-00a0c91e6bf6`.",
        dicas: "O identificador interno do sistema não deve ser confundido com o número de protocolo visível ao usuário."
    },
    "2.1.7": {
        explicacao: "O formato da estrutura do número identificador do SIGAD deve ser definido durante a configuração inicial do sistema.",
        implementacao: "Módulo de parametrização no painel administrativo definindo a máscara do identificador (ex: `ANO.UNIDADE.SEQUENCIAL`).",
        exemplo: "Formato configurado como `SIGAD-2024-DOC-000001`.",
        dicas: "Garanta flexibilidade para suportar diferentes padrões institucionais de numeração."
    },
    "2.1.8": {
        explicacao: "O número identificador tem que ser gerado automaticamente pelo sistema (sendo vedada alteração manual) ou atribuído pelo usuário com validação de unicidade.",
        implementacao: "Sequenciador transacional atômico no banco para geração concorrente sem risco de duplicidade de identificadores.",
        exemplo: "Dois servidores capturam documentos no mesmo milissegundo e o sistema atribui sequenciais 1001 e 1002 sem colisão.",
        dicas: "Prefira a geração automática para mitigar erros humanos."
    },
    "2.1.9": {
        explicacao: "O SIGAD tem que prever a adoção da numeração única de processos (NUP) e documentos oficiais conforme a legislação para garantir sua integridade.",
        implementacao: "Gerador de NUP com cálculo automático de dígitos verificadores pelo algoritmo módulo 11.",
        exemplo: "Geração do NUP oficial `00400.001412/2024-26` para processo protocolado.",
        dicas: "Valide o dígito verificador na importação de processos de órgãos externos."
    },
    "2.1.10": {
        explicacao: "É altamente desejável utilizar tesauro ou vocabulário controlado (ex: Lista de Assuntos de Governo do e-PING) para apoiar a indexação por assunto.",
        implementacao: "Integração do campo de assunto com serviço de autocompletar conectado à base de termos controlados.",
        exemplo: "Ao digitar 'vacina', o sistema sugere o termo oficial 'Imunização e Controle de Epidemias'.",
        dicas: "Evite sinônimos livres para garantir recuperação precisa de informações."
    },
    "2.1.11": {
        explicacao: "O SIGAD tem que garantir que os metadados associados a um documento sejam inseridos exclusivamente por usuários autorizados.",
        implementacao: "Validação de autenticação de sessão e checagem de permissão RBAC em todas as rotas de criação de metadados.",
        exemplo: "Usuários anônimos ou sem permissão de captura são impedidos de submeter metadados.",
        dicas: "Vincule o ID do usuário logado ao registro de autoria do metadado."
    },
    "2.1.12": {
        explicacao: "O SIGAD tem que garantir que metadados sejam alterados apenas por usuários autorizados e com registro obrigatório na trilha de auditoria.",
        implementacao: "Gatilhos de auditoria que interceptam atualizações e gravam autor, data/hora, valores antigos e novos.",
        exemplo: "Retificação do metadado 'Título' gera registro detalhado na trilha de auditoria do processo.",
        dicas: "Torne a tabela de trilha de auditoria imutável (apenas INSERT)."
    },
    "2.1.13": {
        explicacao: "É altamente desejável que o sistema extraia e preencha automaticamente o maior número possível de metadados no momento da captura.",
        implementacao: "Extratores de metadados de arquivos (parser de PDF/Office), dados de sessão do usuário e modelos de documentos.",
        exemplo: "Ao enviar um arquivo, o sistema preenche autor, data atual, formato MIME e tamanho em bytes automaticamente.",
        dicas: "Reduza formulários manuais para aumentar a produtividade do usuário."
    },
    "2.1.14": {
        explicacao: "O SIGAD tem que garantir a visualização da tela de registro de entrada do documento com todos os metadados automáticos e manuais preenchidos.",
        implementacao: "Tela de revisão e confirmação prévia exibindo o espelho completo de metadados antes de concluir a captura.",
        exemplo: "Tela exibe: 'Número: 2024/10 | Autor: João | Formato: PDF | Confirma a captura do documento?'.",
        dicas: "Permita ao usuário corrigir dados pendentes antes da gravação definitiva."
    },
    "2.1.15": {
        explicacao: "O sistema tem que garantir a capacidade de inserir novos metadados após a captura inicial (ex: data de alteração, mudança de suporte).",
        implementacao: "Módulo de aditamento de metadados preservando os metadados originais de entrada intactos.",
        exemplo: "Registro posterior de metadado de microfilmagem em documento capturado digitalmente há 2 anos.",
        dicas: "Diferencie metadados originários de metadados gerados durante o ciclo de vida."
    },
    "2.1.16": {
        explicacao: "Quando um documento tiver mais de uma versão, permitir registrar: todas como um só documento; apenas uma versão; ou cada uma como documento separado. Minutas não são versões.",
        implementacao: "Opções no controle de versão: agrupar versões sob mesmo ID, selecionar versão definitiva ou desmembrar em documentos autônomos.",
        exemplo: "Três minutas de despacho consolidadas em uma única versão final assinada capturada oficialmente.",
        dicas: "Exija que cada versão registrada tenha completeza formal."
    },
    "2.1.17": {
        explicacao: "É altamente desejável prestar assistência ao usuário na classificação: exibir subconjunto de classes da sua área, últimas usadas, processos relacionados e sugestões por conteúdo.",
        implementacao: "Assistente inteligente de classificação baseado no setor do usuário, histórico recente e busca semântica no título/conteúdo.",
        exemplo: "Ao anexar um arquivo com nome 'Relatório de Viagem', o sistema destaca a classe '024.1 - Diárias e Passagens'.",
        dicas: "Apresente uma lista de 'Classes Mais Utilizadas' no topo do seletor."
    },
    "2.1.18": {
        explicacao: "É altamente desejável permitir que um usuário transmita a captura a outro para completar o processo, se os procedimentos forem distribuídos entre servidores.",
        implementacao: "Status de 'Captura em Rascunho' com funcionalidade de encaminhamento interno de tarefas de protocolo.",
        exemplo: "A recepção escaneia o documento e encaminha o rascunho para o arquivista classificar e indexar.",
        dicas: "Rascunhos de captura não devem ter validade documental até a finalização formal."
    },
    "2.1.19": {
        explicacao: "Documentos compostos por múltiplos componentes digitais têm que ser tratados como unidade indivisível: integridade preservada, visualização conjunta e destinação unificada.",
        implementacao: "Encapsulamento lógico que mantém todos os arquivos componentes vinculados a um identificador pai no banco.",
        exemplo: "Um processo contendo edital (PDF), planilha (ODS) e maquete (DWG) é transferido ou recolhido em conjunto.",
        dicas: "Impeça a exclusão ou movimentação isolada de um único componente do documento complexo."
    },

    // --- 2.2 Captura em lote ---
    "2.2.1": {
        explicacao: "O SIGAD tem que permitir a captura em lote de documentos de outros sistemas: importar transações, registrar cada documento, permitir edição e validar metadados.",
        implementacao: "Processador de lotes via upload de pacote (ZIP/XML/JSON) ou API em lote com processamento em fila assíncrona.",
        exemplo: "Importação mensal de 5.000 contracheques em PDF gerados automaticamente pelo sistema de folha de pagamento.",
        dicas: "Disponibilize relatório pós-processamento detalhando sucessos e erros por item do lote."
    },

    // --- 2.3 Captura de mensagens de correio eletrônico ---
    "2.3.1": {
        explicacao: "O SIGAD tem que capturar mensagens de correio eletrônico oficiais selecionadas pelos usuários para registro no sistema.",
        implementacao: "Parser de arquivos `.eml`/`.msg` com extração de metadados de cabeçalho e armazenamento da mensagem como documento.",
        exemplo: "Captura de e-mail com autorização formal de compra enviado pelo diretor financeiro.",
        dicas: "Oriente os servidores a capturar apenas e-mails de relevância arquivística e comprobatória."
    },
    "2.3.2": {
        explicacao: "O SIGAD pode permitir tratar mensagens direto do cliente de e-mail: visualizar mensagem e anexos, registrar como novo documento ou vincular a processo existente.",
        implementacao: "Plugin/Add-in para clientes de e-mail (Outlook, Thunderbird, Webmail) com botões 'Registrar no SIGAD' e 'Anexar a Processo'.",
        exemplo: "Servidor clica no botão do SIGAD dentro do Outlook e vincula o e-mail diretamente ao processo nº 123/2024.",
        dicas: "Capture anexos do e-mail automaticamente como componentes digitais da mensagem."
    },
    "2.3.3": {
        explicacao: "É altamente desejável capturar o nome do originador do e-mail e não apenas seu endereço eletrônico.",
        implementacao: "Extração estruturada do campo `From:` separando nome de exibição (`earq.documento.autor`) e endereço de e-mail (`earq.documento.originador`).",
        exemplo: "Registro de 'Carlos Alberto Santos' como autor e `carlos.santos@orgao.gov.br` como endereço eletrônico.",
        dicas: "Evite metadados com apenas o e-mail quando o nome da pessoa física estiver disponível."
    },

    // --- 2.4 Captura de documentos não digitais ou híbridos ---
    "2.4.1": {
        explicacao: "O SIGAD tem que ser capaz de capturar e gerenciar documentos não digitais (físicos) e documentos/processos híbridos.",
        implementacao: "Formulário de captura com seletor de meio: 'Digital', 'Não Digital' e 'Híbrido', aplicando as regras arquivísticas correspondentes.",
        exemplo: "Cadastro dos metadados de um livro de posse original em papel arquivado no arquivo central.",
        dicas: "Utilize o mesmo plano de classificação para documentos físicos e digitais."
    },
    "2.4.2": {
        explicacao: "O SIGAD tem que registrar a localização física dos documentos não digitais nos metadados, com acesso restrito a usuários autorizados.",
        implementacao: "Campos de endereço topográfico físico (prédio, sala, estante, prateleira, caixa) protegidos por permissão de acesso.",
        exemplo: "Localização: 'Arquivo Geral, Sala 04, Estante 12, Caixa 450'.",
        dicas: "Integre com impressão de etiquetas com código de barras para as caixas físicas."
    },
    "2.4.3": {
        explicacao: "A parte digital de um documento ou processo híbrido tem que receber o mesmo tratamento e segurança dispensados aos processos 100% digitais.",
        implementacao: "Aplicação dos módulos de assinatura, trilha de auditoria e validação de integridade nos componentes digitais de processos híbridos.",
        exemplo: "As peças digitalizadas de um processo híbrido contam com hash SHA-256 e controle de versão no sistema.",
        dicas: "Identifique na interface visual que o processo possui partes físicas correlacionadas."
    },
    "2.4.4": {
        explicacao: "O SIGAD tem que tratar o processo híbrido como uma unidade indivisível, assegurando o vínculo entre a parte física e a digital.",
        implementacao: "Atribuição do mesmo número de protocolo e identificador único a ambas as frações, unificando a gestão do ciclo de vida.",
        exemplo: "O processo nº 2024/0080 possui Volume 1 em papel e Volume 2 em meio digital, ambos compondo o mesmo processo.",
        dicas: "Impeça a eliminação da parte digital sem a conferência e baixa da parte física correspondente."
    },

    // --- 2.5 Formato de arquivo e estrutura dos documentos a serem capturados ---
    "2.5.1": {
        explicacao: "O SIGAD tem que possuir capacidade de capturar documentos com diferentes formatos de arquivo e estruturas técnicas.",
        implementacao: "Motor de captura desacoplado com suporte a múltiplos tipos MIME e formatos multimídia.",
        exemplo: "Captura de arquivos PDF, DOCX, ODF, PNG, MP3, MP4 e DWG.",
        dicas: "Mantenha uma política institucional de formatos recomendados para orientar os usuários."
    },
    "2.5.2": {
        explicacao: "O sistema tem que capturar estruturas simples (um arquivo de texto, imagem, som) e compostas (e-mails com anexos, publicações eletrônicas).",
        implementacao: "Modelo de dados hierárquico capaz de representar arquivos individuais ou contêineres de múltiplos arquivos.",
        exemplo: "Captura de relatório técnico composto pelo documento principal e pacote anexo com dados abertos.",
        dicas: "Garanta que a integridade de todos os arquivos de uma estrutura composta seja validada."
    },
    "2.5.3": {
        explicacao: "É altamente desejável capturar agendas, dados de aplicativos de negócio (RH, contabilidade), plantas CAD, escaneamentos, áudio, vídeo, mapas, EDI, bases de dados e páginas web.",
        implementacao: "Conectores específicos e visualizadores integrados capazes de interpretar e renderizar mídias complexas.",
        exemplo: "Captura e reprodução de gravação em vídeo de uma sessão plenária oficial do tribunal.",
        dicas: "Quando não for viável capturar o objeto digital bruto, capture seus metadados de registro para gerenciamento."
    },
    "2.5.4": {
        explicacao: "O SIGAD tem que permitir a inclusão de novos formatos de arquivos à medida que forem sendo adotados pela organização.",
        implementacao: "Tabela de formatos configurável pelo administrador no painel do sistema sem necessidade de alterações no código-fonte.",
        exemplo: "Adição do formato AVIF e suporte a novas versões de PDF/A no catálogo de extensões permitidas.",
        dicas: "Mantenha o catálogo sincronizado com padrões internacionais como PRONOM e IANA MIME."
    },
    "2.5.5": {
        explicacao: "O SIGAD tem que registrar em metadados as dependências de software ao capturar formatos diferentes dos previstos no programa de gestão.",
        implementacao: "Campos `earq.componente.sw` e `earq.componente.hw` para registro de aplicativo, versão e sistema operacional necessários.",
        exemplo: "Metadados indicam: 'Arquivo CAD gerado no AutoCAD 2023, necessita visualizador DWG'.",
        dicas: "Documente dependências de codecs e fontes especiais para assegurar acesso no futuro."
    },

    // --- 2.6 Estrutura dos procedimentos de gestão ---
    "2.6.1": {
        explicacao: "Caso apoie a produção de documentos, o SIGAD tem que reconhecer três domínios de gestão: espaço individual, espaço do grupo e espaço geral.",
        implementacao: "Permissões de acesso e interfaces segregadas para: Área Individual de Rascunhos, Área Setorial da Unidade e Repositório Geral Oficial.",
        exemplo: "Servidor redige minuta no espaço individual, revisa com a equipe no espaço do grupo e publica no espaço geral ao protocolar.",
        dicas: "No espaço geral, o documento atinge validade oficial e não pode mais sofrer alterações."
    },
    "2.6.2": {
        explicacao: "O SIGAD tem que operacionalizar as regras de controle e transição de documentos entre esses três espaços.",
        implementacao: "Workflows de transição de status com validação de autoria e bloqueio de edições na passagem de domínio.",
        exemplo: "A publicação de minuta no espaço geral exige assinatura eletrônica e autuação formal.",
        dicas: "Registre a data/hora e o autor de cada mudança de domínio."
    },
    "2.6.3": {
        explicacao: "O SIGAD tem que impedir que o conteúdo de um documento oficial capturado seja alterado por usuários ou administradores.",
        implementacao: "Armazenamento em modo somente leitura (Read-Only) com verificação de hash SHA-256 e controle de integridade.",
        exemplo: "Após a captura e protocolo de uma portaria, nenhum usuário consegue alterar seu texto original.",
        dicas: "Qualquer retificação deve ocorrer por documento de aditamento formal, nunca por edição direta."
    },
    "2.6.4": {
        explicacao: "É altamente desejável que o sistema emita avisos ao tentar capturar documentos incompletos ou inconsistentes que possam comprometer a autenticidade.",
        implementacao: "Validador prévio de conformidade documental exibindo alertas caso falte assinatura válida ou metadados essenciais.",
        exemplo: "Alerta: 'Atenção: O documento não possui assinatura digital válida associada. Deseja prosseguir?'.",
        dicas: "Destaque inconsistências antes da confirmação final pelo usuário."
    },
    "2.6.5": {
        explicacao: "É altamente desejável emitir avisos ao tentar capturar documentos cuja autenticidade não possa ser verificada no futuro (ex: arquivos com macros automodificáveis).",
        implementacao: "Verificador de segurança e estabilidade que detecta scripts, fontes não incorporadas ou formatos não padronizados.",
        exemplo: "Aviso: 'A planilha contém macros que podem alterar dados na visualização. Recomenda-se converter para PDF/A'.",
        dicas: "Incentive a conversão prévia para formatos de preservação digital de longo prazo."
    },

    // =========================================================================
    // ===== CAPÍTULO 3 - AVALIAÇÃO: TEMPORALIDADE E DESTINAÇÃO =====
    // =========================================================================

    // --- 3.1 Aplicação da tabela de temporalidade e destinação de documentos ---
    "3.1.1": {
        explicacao: "O SIGAD tem que fornecer recursos integrados à tabela de temporalidade para implementar e controlar as ações de destinação final.",
        implementacao: "Motor de ciclo de vida que cruza datas de arquivamento com prazos da tabela e programa ações de expurgo/transferência.",
        exemplo: "Rotina automática que identifica processos com prazos de guarda vencidos e prepara a lista de destinação.",
        dicas: "Programe verificações automáticas periódicas para manter os prazos atualizados."
    },
    "3.1.2": {
        explicacao: "Para cada dossiê/processo, o SIGAD tem que acompanhar automaticamente os prazos de guarda determinados para sua classe.",
        implementacao: "Cálculo do término do prazo de guarda no banco com base na data do evento disparador e nos anos/meses da classe.",
        exemplo: "Processo arquivado em 10/01/2020 com prazo de 5 anos tem vencimento calculado automaticamente para 10/01/2025.",
        dicas: "Mantenha a data de expiração calculada indexada para relatórios rápidos."
    },
    "3.1.3": {
        explicacao: "O SIGAD tem que informar e listar aos usuários autorizados os documentos e processos que já cumpriram ou estão para cumprir o prazo de guarda.",
        implementacao: "Painel de alertas e notificações para os arquivistas listando lotes prontos para análise de destinação.",
        exemplo: "Notificação: 'Existem 250 processos com prazo de guarda cumprido aguardando análise para eliminação'.",
        dicas: "Envie alertas com antecedência configurável (ex: 60 ou 90 dias antes do vencimento)."
    },
    "3.1.4": {
        explicacao: "O processo de destinação tem que ser gerenciado por usuário autorizado com os passos: identificar vencidos, informar o usuário, permitir prorrogação justificada e executar após confirmação.",
        implementacao: "Fluxo formal de destinação com telas para: listagem de corte, justificativa de prorrogações da CPAD e confirmação final.",
        exemplo: "A comissão analisa 100 processos vencidos, prorroga a guarda de 5 devido a ação judicial e autoriza a eliminação dos outros 95.",
        dicas: "Nenhuma ação de destinação deve ocorrer sem intervenção e homologação expressa do arquivista."
    },
    "3.1.5": {
        explicacao: "O SIGAD tem sempre que pedir confirmação explícita antes de realizar qualquer ação definitiva de destinação.",
        implementacao: "Modal de confirmação com resumo dos itens afetados e exigência de confirmação de senha do usuário autorizado.",
        exemplo: "Aviso: 'Confirma a destinação final de 150 processos do lote 2024/01? Digite sua senha para confirmar'.",
        dicas: "Evite execuções acidentais com travas de segurança na interface."
    },
    "3.1.6": {
        explicacao: "É altamente desejável que o SIGAD emita avisos especiais antes de iniciar a destinação de documentos com restrição de sigilo.",
        implementacao: "Verificação de nível de acesso no lote de destinação; se houver itens sigilosos, exibir alerta destacado de segurança.",
        exemplo: "Alerta: 'Atenção: 2 processos deste lote estão classificados como RESERVADO e necessitam de desclassificação prévia'.",
        dicas: "Documentos sigilosos devem se tornar ostensivos antes de serem submetidos à eliminação."
    },
    "3.1.7": {
        explicacao: "O SIGAD tem que restringir as funções de destinação exclusivamente a usuários autorizados (arquivistas e comissão de avaliação).",
        implementacao: "Controle de autorização por perfil no backend com permissão estrita `EXECUTAR_DESTINACAO`.",
        exemplo: "Usuários comuns das áreas operacionais não visualizam menus de eliminação ou transferência.",
        dicas: "Audite todas as tentativas de acesso às funções de destinação documental."
    },
    "3.1.8": {
        explicacao: "Ao reclassificar um processo para outra classe, o SIGAD tem que recalcular e adotar automaticamente a temporalidade e destinação da nova classe.",
        implementacao: "Gatilho de atualização que recalcula a data de expiração e destinação final com base nas regras da nova classe.",
        exemplo: "Processo reclassificado para classe de guarda permanente tem sua destinação alterada de 'Eliminação' para 'Recolhimento'.",
        dicas: "Gere notificação informando as novas datas calculadas após a reclassificação."
    },

    // --- 3.2 Exportação de documentos ---
    "3.2.1": {
        explicacao: "O SIGAD tem que ser capaz de exportar documentos, dossiês/processos digitais e seus metadados para outros sistemas dentro ou fora da organização.",
        implementacao: "Módulo de exportação que gera pacotes estruturados (ZIP/XML/JSON/METS) contendo arquivos e esquemas de metadados.",
        exemplo: "Exportação de lote de processos para o Repositório Arquivístico Digital Confiável (RDC-Arq) da instituição.",
        dicas: "Utilize pacotes de submissão arquivística no padrão OAIS (SIP - Submission Information Package)."
    },
    "3.2.2": {
        explicacao: "Ao exportar documentos de uma classe para transferência ou recolhimento, exportar todos os itens da classe incluídos com volumes, documentos e metadados completos.",
        implementacao: "Exportador hierárquico recursivo que empacota processos, volumes, documentos, componentes e histórico de auditoria.",
        exemplo: "Exportação de 40 processos de licitação de 2012 com todas as suas peças e despachos associados.",
        dicas: "Valide a integridade do pacote exportado por meio de checksums do manifesto."
    },
    "3.2.3": {
        explicacao: "A exportação deve garantir a integridade de conteúdo, contexto e estrutura: arquivos sem degradação, componentes indivisíveis juntos e vínculos preservados.",
        implementacao: "Manifesto XML que descreve a estrutura física e lógica e mapeia todas as relações entre peças e volumes.",
        exemplo: "A exportação preserva que o documento B é anexo do documento A dentro do Volume 2 do Processo nº 500.",
        dicas: "Teste a importação dos pacotes em ambiente de homologação para validar a fidelidade estrutural."
    },
    "3.2.4": {
        explicacao: "É altamente desejável exportar dossiês/processos em formato nativo, em formatos abertos de interoperabilidade ou no padrão da instituição arquivística de destino.",
        implementacao: "Opções de exportação parametrizáveis: formato original, normalizado para PDF/A e pacotes no padrão MNI ou e-ARQ.",
        exemplo: "Exportação de processos judiciais no padrão do Modelo Nacional de Interoperabilidade (MNI).",
        dicas: "Consulte previamente os requisitos técnicos da instituição arquivística recebedora."
    },
    "3.2.5": {
        explicacao: "É altamente desejável que o SIGAD seja capaz de exportar metadados nos formatos previstos em padrões de interoperabilidade de governo (e-PMG).",
        implementacao: "Mapeador de metadados para XML em conformidade com o esquema e-PMG/Dublin Core.",
        exemplo: "Exportação de metadados com tags `<dc:title>`, `<dc:creator>`, `<earq:classeId>` e `<dc:date>`.",
        dicas: "Disponibilize esquemas XSD públicos para validação por sistemas parceiros."
    },
    "3.2.6": {
        explicacao: "O SIGAD tem que ser capaz de exportar todos os tipos e formatos de documentos que ele é capaz de capturar.",
        implementacao: "Exportador agnóstico de formato com suporte a arquivos de texto, mídias ricas, áudios, vídeos e bancos de dados.",
        exemplo: "Exportação de processos contendo arquivos de vídeo MP4 e projetos CAD sem corrupção binária.",
        dicas: "Garanta que não haja truncamento de metadados técnicos de mídias complexas."
    },
    "3.2.7": {
        explicacao: "O SIGAD tem que gerar relatório detalhado sobre qualquer falha ocorrida durante a exportação, identificando os documentos com erro.",
        implementacao: "Tratamento de exceções com captura de erros por item e geração de relatório analítico de falhas.",
        exemplo: "Relatório: 'Exportação concluída com 98 sucessos e 2 falhas (Doc #450 corrompido, Doc #712 sem permissão)'.",
        dicas: "Permita reexecutar a exportação apenas para os itens que falharam."
    },
    "3.2.8": {
        explicacao: "O SIGAD tem que manter os documentos originais intactos após a exportação, pelo menos até que tenham sido importados com êxito no sistema destinatário.",
        implementacao: "Manter documentos com status 'Exportado' e travar exclusões até confirmação formal de recebimento (handshake).",
        exemplo: "Documentos recolhidos ao Arquivo Nacional são mantidos no SIGAD até emissão do Termo de Recebimento Definitivo.",
        dicas: "Nunca configure rotinas de exclusão automática no ato do download da exportação."
    },
    "3.2.9": {
        explicacao: "O SIGAD tem que manter metadados relativos a documentos e processos que foram exportados, conforme definido pelo administrador.",
        implementacao: "Persistência do registro no banco com metadados de histórico e indicação do destino para onde os dados foram transferidos.",
        exemplo: "Busca no SIGAD localiza o processo antigo e indica: 'Processo recolhido ao Arquivo Público sob o Termo nº 12/2024'.",
        dicas: "A preservação dos metadados de itens exportados assegura a continuidade da memória institucional."
    },
    "3.2.10": {
        explicacao: "O SIGAD tem que gerar listagem oficial para descrever documentos e processos digitais exportados (Guia de Transferência/Recolhimento).",
        implementacao: "Gerador de relatórios em PDF com cabeçalho oficial, número de ordem, número do processo, assunto e datas-limite.",
        exemplo: "Emissão da 'Guia de Recolhimento nº 08/2024' pronta para assinatura dos dirigentes.",
        dicas: "Siga o modelo documental exigido pela instituição arquivística pública recebedora."
    },
    "3.2.11": {
        explicacao: "É altamente desejável possibilitar a inclusão de metadados de gestão do arquivo permanente nos documentos exportados para recolhimento.",
        implementacao: "Formulário pré-exportação para inserção de metadados como: código de fundo, série, quadro de arranjo e condições de acesso.",
        exemplo: "Inclusão do metadado `Fundo: Ministério da Saúde, Série: Gabinete` no pacote de recolhimento.",
        dicas: "Facilite a ingestão direta em sistemas como Archivematica e AtoM."
    },
    "3.2.12": {
        explicacao: "O SIGAD pode possibilitar a ordenação dos documentos digitais a serem exportados de acordo com metadados selecionados pelo usuário.",
        implementacao: "Controles de ordenação na interface de exportação (por data de produção, por número de protocolo, por assunto).",
        exemplo: "Ordenar a exportação por ordem cronológica crescente de autuação dos processos.",
        dicas: "Mantenha como padrão a ordenação da numeração sequencial das peças processuais."
    },
    "3.2.13": {
        explicacao: "Ao exportar processos híbridos, o sistema deve exigir do usuário autorizado a confirmação de que a parte física passou pela destinação adequada antes de exportar a digital.",
        implementacao: "Checkbox com confirmação obrigatória: 'Confirmo que a fração em papel deste processo foi destinada conjuntamente'.",
        exemplo: "O sistema bloqueia a conclusão da exportação até a marcação da conformidade física do processo.",
        dicas: "Evite o descompasso entre o acervo físico e o digital em processos híbridos."
    },

    // --- 3.3 Eliminação ---
    "3.3.1": {
        explicacao: "O SIGAD tem que restringir a função de eliminação de documentos ou processos exclusivamente a usuários autorizados.",
        implementacao: "Permissão de segurança `ELIMINAR_DOCUMENTOS` concedida apenas a membros da Comissão Permanente de Avaliação.",
        exemplo: "Apenas o presidente da CPAD e o arquivista-chefe possuem perfil para executar a eliminação.",
        dicas: "Exija autenticação de duplo fator (2FA) para autorizar ações de expurgo."
    },
    "3.3.2": {
        explicacao: "O SIGAD tem que pedir confirmação da eliminação a usuário autorizado antes de qualquer ação e cancelar o processo se a confirmação não for dada.",
        implementacao: "Modal de confirmação com resumo dos processos e cancelamento seguro com rollback de transações.",
        exemplo: "Aviso: 'Confirma a eliminação definitiva de 120 processos? Esta operação é irreversível'.",
        dicas: "Previna acidentes exigindo a digitação da senha ou palavra de confirmação."
    },
    "3.3.3": {
        explicacao: "O SIGAD tem que impedir sempre a eliminação de qualquer unidade de arquivamento fora do previsto na tabela de temporalidade, registrando na auditoria.",
        implementacao: "Validação programática de prazo de guarda e destinação antes de liberar qualquer rotina de exclusão.",
        exemplo: "Bloqueio automático de tentativa de excluir processo cujo prazo de retenção ainda não expirou.",
        dicas: "Impeça a eliminação de processos que estejam sob litígio judicial ou auditoria externa."
    },
    "3.3.4": {
        explicacao: "O sistema tem que avisar quando um documento a ser eliminado possuir links com outros documentos e suspender o processo até confirmação ou relatório.",
        implementacao: "Verificação de integridade referencial antes do expurgo, exibindo lista de dependências e links encontrados.",
        exemplo: "Alerta: 'O documento #305 está referenciado no Processo nº 500 (ativo). Confirma a desvinculação e eliminação?'.",
        dicas: "Mantenha registros indicativos de desvinculação nos documentos que faziam referência ao item eliminado."
    },
    "3.3.5": {
        explicacao: "É altamente desejável que a eliminação ocorra de forma irreversível (sanitização), impedindo a restauração por lixeiras, SO ou ferramentas de recuperação.",
        implementacao: "Sobrescrita segura de blocos de disco (secure wipe conforme normas NIST SP 800-88 ou DoD 5220.22-M).",
        exemplo: "Sobrescrita de dados com padrões aleatórios nos blocos de armazenamento onde o PDF estava gravado.",
        dicas: "Assegure que fitas e discos de backup antigos também expirem conforme a política de segurança."
    },
    "3.3.6": {
        explicacao: "Quando um arquivo digital for referenciado por múltiplos processos (sem duplicação física), verificar se todas as referências expiraram antes de eliminar o arquivo físico.",
        implementacao: "Contador de referências ativas (reference counting): o arquivo no disco só é destruído quando `referencias_ativas == 0`.",
        exemplo: "Um edital compartilhado entre 80 processos de candidatos só é apagado do disco após a eliminação do último processo.",
        dicas: "Trate a contagem de referências de forma transacional para evitar exclusão acidental."
    },
    "3.3.7": {
        explicacao: "O SIGAD tem que produzir relatório detalhado sobre qualquer falha que ocorra durante uma eliminação, identificando os documentos que falharam.",
        implementacao: "Log de erros estruturado com emissão de relatório analítico de falhas de I/O ou permissão.",
        exemplo: "Relatório: 'Erro ao eliminar arquivo do Doc #401: arquivo bloqueado por outro processo'.",
        dicas: "Notifique imediatamente o administrador de sistemas para correção de inconsistências no storage."
    },
    "3.3.8": {
        explicacao: "Ao eliminar processos híbridos, é altamente desejável exigir do usuário a confirmação de que a parte não digital (papel) também foi destruída fisicamente.",
        implementacao: "Checkbox com confirmação obrigatória da destruição física antes da confirmação do expurgo digital.",
        exemplo: "Confirmação: 'Declaro que as 2 caixas físicas do processo foram fragmentadas conforme Termo de Eliminação'.",
        dicas: "Anexe o termo de fragmentação física ao registro do lote eliminado."
    },
    "3.3.9": {
        explicacao: "O SIGAD tem que gerar o relatório oficial de eliminação (Listagem de Eliminação) conforme o modelo estabelecido nas resoluções do CONARQ.",
        implementacao: "Módulo gerador de peças formais em PDF com numeração oficial, datas-limite e espaço para assinatura da autoridade.",
        exemplo: "Geração da 'Listagem de Eliminação nº 04/2024' para publicação em edital no Diário Oficial.",
        dicas: "Siga a Resolução CONARQ nº 40/2014 para a estrutura da listagem."
    },
    "3.3.10": {
        explicacao: "O SIGAD tem que manter os metadados relativos aos documentos e processos eliminados, comprovando a legalidade da destruição.",
        implementacao: "Atualização do status para 'Eliminado', mantendo o registro no banco com dados do termo e edital de eliminação.",
        exemplo: "Consulta a processo antigo retorna: 'Processo eliminado em 12/03/2024 conforme Termo de Eliminação nº 03/2024'.",
        dicas: "A preservação dos metadados de eliminação é a prova jurídica contra alegações de extravio culposo."
    },

    // --- 3.4 Avaliação e destinação de documentos não digitais e híbridos ---
    "3.4.1": {
        explicacao: "O SIGAD tem que aplicar a mesma tabela de temporalidade para documentos não digitais, digitais e híbridos.",
        implementacao: "Mecanismo único de avaliação arquivística independente do tipo de suporte cadastrado.",
        exemplo: "Contratos em papel e contratos nato-digitais da mesma classe possuem o mesmo prazo de retenção de 10 anos.",
        dicas: "Mantenha a gestão arquivística unificada para evitar duplicidade de regras."
    },
    "3.4.2": {
        explicacao: "O SIGAD tem que acompanhar os prazos de guarda dos documentos físicos e dar início aos procedimentos de eliminação ou transferência considerando suas especificidades.",
        implementacao: "Relatórios de temporalidade física agrupados por galpão, estante e número de caixa.",
        exemplo: "Relatório: 'Caixas 40 a 55 do Galpão 1 completaram o prazo de guarda e estão aptas para eliminação física'.",
        dicas: "Planeje os editais de eliminação física em conjunto com a comissão de arquivo."
    },
    "3.4.3": {
        explicacao: "O sistema tem que alertar o administrador sobre a existência e a localização de peças físicas associadas a processos híbridos destinados a exportação, transferência ou eliminação.",
        implementacao: "Alerta em destaque exibindo a localização física do volume de papel ao selecionar o processo híbrido para destinação.",
        exemplo: "Aviso: 'O Processo nº 50 possui Volume 1 físico na Caixa 120 da Sala de Arquivo que deve ser destinado conjuntamente'.",
        dicas: "Evite o esquecimento de peças físicas em depósitos durante a destinação de processos híbridos."
    },
    "3.4.4": {
        explicacao: "É altamente desejável que o SIGAD exporte metadados descritivos de documentos e processos não digitais (físicos).",
        implementacao: "Exportação de catálogo de documentos físicos em formato XML/CSV com dados de localização e temporalidade.",
        exemplo: "Exportação da base de processos físicos antigos para integração com o catálogo do Arquivo Público do Estado.",
        dicas: "Utilize padrões como ISAD(G) e Nobrade para descrição de acervos físicos."
    },

    // =========================================================================
    // ===== CAPÍTULO 4 - PESQUISA, LOCALIZAÇÃO E APRESENTAÇÃO =====
    // =========================================================================

    // --- 4.1 Aspectos gerais ---
    "4.1.1": {
        explicacao: "O SIGAD tem que fornecer facilidades intuitivas para pesquisa, localização e apresentação dos documentos arquivísticos.",
        implementacao: "Interface de busca unificada com filtros rápidos e visualizador de documentos integrado na aplicação.",
        exemplo: "Barra de busca global que permite localizar processos por número, interessado ou palavra-chave em poucos segundos.",
        dicas: "Garanta tempos de resposta rápidos para consultas frequentes."
    },
    "4.1.2": {
        explicacao: "É altamente desejável que o SIGAD forneça interfaces opcionais de pesquisa e localização via ambiente web.",
        implementacao: "Portal de consulta web responsivo acessível via navegadores modernos sem necessidade de instalar softwares locais.",
        exemplo: "Portal de consulta processual acessível por servidores via navegador de internet.",
        dicas: "Projete uma interface limpa e intuitiva para usuários com diferentes níveis de conhecimento."
    },
    "4.1.3": {
        explicacao: "É altamente desejável permitir a navegação gráfica no plano de classificação, com recuperação e apresentação direta dos documentos de cada classe.",
        implementacao: "Navegador visual de árvore onde o clique em uma classe carrega a grade de documentos daquele assunto.",
        exemplo: "Clicar na classe '021.1 - Concursos' abre imediatamente a listagem de todos os editais e processos daquela categoria.",
        dicas: "Integre paginação assíncrona na listagem de documentos da classe selecionada."
    },

    // --- 4.2 Pesquisa e localização ---
    "4.2.1": {
        explicacao: "O SIGAD tem que fornecer funções flexíveis que atuem sobre metadados em todos os níveis (documento, volume, processo e classe) e sobre o conteúdo dos documentos.",
        implementacao: "Motor de busca indexado (ex: Elasticsearch, OpenSearch ou PostgreSQL FTS) cobrindo tabelas de metadados e textos extraídos.",
        exemplo: "Busca combinada localiza processos pela classe 'Financeiro' e que contenham a palavra 'Auditoria' no texto do parecer.",
        dicas: "Mantenha os índices atualizados em tempo real a cada nova captura."
    },
    "4.2.2": {
        explicacao: "O sistema tem que executar pesquisa integrada, apresentando resultados que incluam documentos digitais, híbridos e físicos.",
        implementacao: "Resultado de busca consolidado com identificador visual do suporte de cada item (ícones: 📄 Digital, 📦 Físico, 📑 Híbrido).",
        exemplo: "Pesquisa por 'Contrato de Aluguel' retorna 5 processos digitais recentes e 2 processos físicos arquivados em caixas.",
        dicas: "Permita ao usuário filtrar os resultados por tipo de suporte se desejar."
    },
    "4.2.3": {
        explicacao: "O SIGAD tem que permitir a pesquisa por todos os metadados de gestão de um documento ou processo.",
        implementacao: "Indexação de todos os campos de metadados (temporalidade, destinação, unidade geradora, status, autor, etc.).",
        exemplo: "Pesquisar todos os documentos criados pelo setor 'Gabinete' com prazo de guarda de '5 anos'.",
        dicas: "Disponibilize tela de 'Busca Avançada' com campos estruturados para cada metadado."
    },
    "4.2.4": {
        explicacao: "É altamente desejável que o SIGAD permita pesquisar no conteúdo textual dos documentos arquivísticos.",
        implementacao: "Extração de texto via OCR para imagens e parsers de texto (PDF, DOCX) com indexação de texto completo (Full-Text Search).",
        exemplo: "Usuário pesquisa pela frase 'termo de cooperação técnica internacional' e localiza o PDF que contém esse texto.",
        dicas: "Implemente realce visual dos termos encontrados dentro do visualizador do documento."
    },
    "4.2.5": {
        explicacao: "O SIGAD tem que permitir a recuperação direta e imediata de qualquer documento ou processo pelo seu número identificador único.",
        implementacao: "Busca exata indexada pelo identificador primário/UUID com redirecionamento direto para a tela do documento.",
        exemplo: "Digitar o número `2024.00459` na busca rápida abre instantaneamente o processo correspondente.",
        dicas: "Permita colar identificadores com ou sem formatação de pontuação."
    },
    "4.2.6": {
        explicacao: "O sistema tem que permitir recuperar documentos por todas as formas implementadas: identificador, título, assunto, datas, interessado, autor/redator/originador e classe.",
        implementacao: "Formulário de pesquisa avançada com filtros dedicados para cada um dos atributos essenciais.",
        exemplo: "Buscar processos do interessado 'Empresa Alfa Ltda', com assunto 'Licitação', autuados entre 01/01/2024 e 31/03/2024.",
        dicas: "Permita combinações de múltiplos campos para refinar resultados específicos."
    },
    "4.2.7": {
        explicacao: "É altamente desejável fornecer interface de busca combinada com operadores booleanos ('E', 'OU', 'NÃO').",
        implementacao: "Interpretador de sintaxe de consulta com suporte a operadores: `AND`, `OR`, `NOT` e agrupamento por parênteses.",
        exemplo: "Consulta: `(Reforma OR Ampliação) AND Escola NOT Ensino Superior`.",
        dicas: "Forneça exemplos de uso da sintaxe booleana na tela de ajuda de pesquisa."
    },
    "4.2.8": {
        explicacao: "É altamente desejável que os termos de busca possam ser qualificados, especificando se a fonte é um metadado específico ou o corpo do documento.",
        implementacao: "Sintaxe com prefixos de campos (ex: `autor:Silva AND texto:orçamento`).",
        exemplo: "Buscar por 'Silva' apenas no campo 'Autor', ignorando ocorrências no texto do documento.",
        dicas: "Facilite o uso com seletores visuais do tipo 'Buscar em: [Título | Conteúdo | Autor]'."
    },
    "4.2.9": {
        explicacao: "O SIGAD pode permitir o uso de períodos relativos pré-configurados nas buscas por data (ex: 'semana anterior', 'mês corrente', 'último ano').",
        implementacao: "Filtros rápidos de intervalo temporal com cálculo dinâmico de datas relativas à data atual.",
        exemplo: "Seleção rápida no dropdown de data: 'Últimos 30 dias'.",
        dicas: "Aumente a produtividade dos usuários operacionais com atalhos de períodos comuns."
    },
    "4.2.10": {
        explicacao: "É altamente desejável permitir o uso de caracteres curinga (*) e truncamento à direita na pesquisa de metadados.",
        implementacao: "Consultas SQL com operador `LIKE 'termo%'` ou regex/wildcards no motor de busca.",
        exemplo: "Buscar `Bra*il` recupera 'Brasil' e 'Brazil'; buscar `Arq*` recupera 'Arquivo' e 'Arquivística'.",
        dicas: "Otimize os índices de texto para não sobrecarregar o banco com wildcards no início da palavra."
    },
    "4.2.11": {
        explicacao: "É altamente desejável permitir o uso de caracteres curinga e truncamento na pesquisa no conteúdo textual dos documentos.",
        implementacao: "Consultas com wildcard no mecanismo de busca textual (Full-Text Search).",
        exemplo: "Buscar `licit*` no conteúdo localiza 'licitação', 'licitante', 'licitatório' no corpo dos PDFs.",
        dicas: "Configure stemming/lematização na língua portuguesa para busca por variações de palavras."
    },
    "4.2.12": {
        explicacao: "É altamente desejável proporcionar pesquisa por proximidade (palavras que aparecem a uma distância máxima configurada no texto).",
        implementacao: "Operador de proximidade (ex: `\"recurso extraordinário\"~5` no Elasticsearch/Lucene).",
        exemplo: "Buscar 'recurso' a menos de 5 palavras de 'provido' no texto da sentença.",
        dicas: "Recurso essencial para análise jurídica e localização precisa de teses documentais."
    },
    "4.2.13": {
        explicacao: "É altamente desejável que o SIGAD permita aos usuários salvar consultas frequentes para reutilização posterior.",
        implementacao: "Tabela `pesquisas_salvas` vinculada ao usuário com nome personalizado e parâmetros da consulta em JSON.",
        exemplo: "Usuário salva a pesquisa 'Meus processos pendentes de análise' na barra lateral.",
        dicas: "Permita fixar pesquisas salvas como atalhos no dashboard principal."
    },
    "4.2.14": {
        explicacao: "É altamente desejável que o SIGAD permita aos usuários refinar buscas já realizadas adicionando novos filtros sobre os resultados.",
        implementacao: "Interface de busca facetada com filtros laterais (por data, autor, classe, unidade) aplicados sobre a lista atual.",
        exemplo: "Após buscar por 'Licitação' (500 resultados), o usuário clica no filtro 'Ano: 2024' e reduz para 45 resultados.",
        dicas: "Exiba a contagem de itens ao lado de cada faceta para orientar o usuário."
    },
    "4.2.15": {
        explicacao: "Quando a instituição utilizar tesauros/vocabulários controlados, é altamente desejável realizar pesquisas navegando nesses instrumentos.",
        implementacao: "Interface visual para explorar termos hierárquicos e sinônimos do tesauro e disparar a busca pelo termo escolhido.",
        exemplo: "Navegar na categoria 'Saúde Pública' -> 'Vigilância Sanitária' e clicar para ver os documentos indexados.",
        dicas: "Mantenha o tesauro integrado com o catálogo de autoridades do sistema."
    },
    "4.2.16": {
        explicacao: "É altamente desejável permitir a pesquisa por termos em desuso, mapeando automaticamente para os termos atualizados por meio do tesauro.",
        implementacao: "Mapeamento de sinonímia histórica no motor de busca (termos equivalentes e remissivas 'Ver' / 'Ver Também').",
        exemplo: "Pesquisa pelo termo histórico 'DASP' recupera documentos relacionados a 'Ministério do Planejamento'.",
        dicas: "Evite que mudanças de terminologia impeçam a recuperação de documentos antigos."
    },
    "4.2.17": {
        explicacao: "É altamente desejável permitir que usuários autorizados personalizem quais campos de metadados aparecem como padrão nas telas de pesquisa.",
        implementacao: "Painel de configuração de campos de busca com seleção de campos visíveis por perfil ou usuário.",
        exemplo: "Setor de RH define 'Matrícula do Servidor' como campo de busca padrão na sua tela inicial.",
        dicas: "Salve as preferências do usuário no banco ou localStorage."
    },
    "4.2.18": {
        explicacao: "O SIGAD tem que permitir a recuperação de uma unidade de arquivamento completa e exibir a lista de todos os documentos que a compõem em um único processo de busca.",
        implementacao: "Tela de detalhes do processo que carrega e renderiza a árvore de todas as peças, despachos e volumes ordenados.",
        exemplo: "Abrir o Processo nº 2024/001 lista todas as 45 peças documentais em sequência cronológica.",
        dicas: "Permita visualizar o índice de peças e navegar diretamente para qualquer página."
    },
    "4.2.19": {
        explicacao: "O SIGAD tem que limitar rigorosamente o acesso a qualquer metadado ou conteúdo de documento se restrições de sigilo e segurança assim determinarem.",
        implementacao: "Filtro de autorização a nível de registro (Row-Level Security) na camada de dados antes de retornar os resultados da consulta.",
        exemplo: "Usuário sem credencial de segurança não visualiza processos classificados como 'Secreto' na lista de busca.",
        dicas: "Nunca confie apenas em ocultar elementos na interface; valide as permissões no servidor."
    },

    // --- 4.3 Apresentação: visualização, impressão, emissão de som ---
    "4.3.1": {
        explicacao: "O SIGAD tem que apresentar os resultados da pesquisa como uma lista estruturada de documentos/processos e notificar o usuário se nenhum resultado for encontrado.",
        implementacao: "Tabela de resultados paginada com mensagem amigável 'Nenhum documento encontrado para os parâmetros informados'.",
        exemplo: "Exibição de grade com 15 processos encontrados ou aviso claro de resultado nulo.",
        dicas: "Ao retornar resultado nulo, sugira dicas de busca (ex: verificar termos digitados ou ampliar datas)."
    },
    "4.3.2": {
        explicacao: "Quando a pesquisa for nula, o SIGAD pode sugerir termos aproximados para correção ortográfica ('Você quis dizer...?').",
        implementacao: "Algoritmo de distância Levenshtein ou sugestão fonética integrado ao motor de busca.",
        exemplo: "Pesquisa por 'Arquvio Naiconal' exibe: 'Você quis dizer: Arquivo Nacional?'.",
        dicas: "Facilite a correção com um link clicável na sugestão que reexecuta a busca."
    },
    "4.3.3": {
        explicacao: "Após apresentar os resultados, o SIGAD tem que oferecer opções para visualizar os documentos ou redefinir os parâmetros para nova consulta.",
        implementacao: "Botões de ação rápida 'Visualizar Documento', 'Abrir Processo' e 'Refinar Pesquisa' na barra superior.",
        exemplo: "Usuário visualiza a lista e clica em 'Editar Filtros' para ajustar o intervalo de datas.",
        dicas: "Mantenha os filtros previamente preenchidos ao abrir a tela de redefinição."
    },
    "4.3.4": {
        explicacao: "É altamente desejável que os documentos listados possam ser abertos com um único clique, toque na tela ou atalho de teclado.",
        implementacao: "Abertura direta do visualizador ao clicar na linha da tabela ou pressionar tecla Enter.",
        exemplo: "Clique duplo na linha do resultado abre imediatamente o PDF no visualizador.",
        dicas: "Adicione suporte a navegação por teclado (setas para cima/baixo e Enter) para agilidade."
    },
    "4.3.5": {
        explicacao: "É altamente desejável permitir a configuração do formato da lista de resultados: ordem de apresentação, quantidade de itens por tela, limite máximo e colunas de metadados exibidas.",
        implementacao: "Painel de preferências da tabela permitindo reordenar colunas, escolher itens por página (10, 25, 50, 100) e ordenar por cabeçalho.",
        exemplo: "Usuário configura para ver 50 processos por página ordenados por 'Data de Abertura' decrescente.",
        dicas: "Persista a configuração de visualização no perfil do usuário."
    },
    "4.3.6": {
        explicacao: "É altamente desejável fornecer recursos que permitam ao usuário navegar entre níveis hierárquicos (documento -> volume -> processo -> classe e vice-versa).",
        implementacao: "Navegação por trilha de pão (Breadcrumbs) no topo da visualização do documento.",
        exemplo: "Trilha: `Classe 021.1 > Processo nº 2024/100 > Volume 1 > Parecer Jurídico nº 12` (cada nível com link clicável).",
        dicas: "Permita ao usuário voltar a qualquer nível hierárquico com um clique."
    },
    "4.3.7": {
        explicacao: "O SIGAD tem que apresentar o conteúdo dos documentos digitais preservando sua aparência visual original e exibindo todos os componentes juntos; se o formato não for suportado, permitir download.",
        implementacao: "Visualizadores integrados (PDF.js, renderizadores de imagens, players de áudio/vídeo) com botão de download para formatos externos.",
        exemplo: "Visualização direta de PDF assinado na tela com layout idêntico ao original gerado.",
        dicas: "Utilize tecnologias web padrão (HTML5/Canvas) para evitar necessidade de plugins externos proprietários."
    },
    "4.3.8": {
        explicacao: "Ao imprimir documentos, o SIGAD tem que manter a forma documental fiel apresentada pelas aplicações geradoras; se o formato não for suportado, permitir download.",
        implementacao: "Geração de layout de impressão de alta fidelidade via CSS `@media print` ou conversão fiel em PDF para impressão.",
        exemplo: "Impressão de ofício contendo brasão, margens regulamentares e assinaturas nas posições exatas.",
        dicas: "Inclua rodapé com identificador de validação eletrônica da impressão."
    },
    "4.3.9": {
        explicacao: "É altamente desejável que o SIGAD seja capaz de reproduzir documentos que incluam imagens fixas, imagens em movimento (vídeo) e sons (áudio).",
        implementacao: "Reprodutores HTML5 nativos de áudio e vídeo com controles de reprodução, volume e tela cheia.",
        exemplo: "Player integrado para ouvir gravação de áudio de depoimento sem sair da tela do processo.",
        dicas: "Forneça pré-visualização de miniaturas (thumbnails) para vídeos e imagens."
    },
    "4.3.10": {
        explicacao: "O SIGAD pode possibilitar a seleção de quais metadados devem ser impressos junto com os documentos ou relatórios.",
        implementacao: "Caixa de diálogo pré-impressão com seleção de metadados a incluir (número, data, autor, interessado, classe).",
        exemplo: "Opção de imprimir o documento acompanhado da folha de rosto com os metadados do processo.",
        dicas: "Disponibilize modelos pré-configurados de folha de rosto e termos de juntada."
    },
    "4.3.11": {
        explicacao: "O SIGAD tem que ser capaz de exibir em tela todos os metadados associados aos documentos e processos resultantes de uma pesquisa.",
        implementacao: "Aba lateral ou modal 'Metadados' exibindo a lista completa de atributos e valores do item selecionado.",
        exemplo: "Painel de detalhes exibe todos os 30 metadados cadastrados para o documento em conformidade com o e-ARQ.",
        dicas: "Organize os metadados em blocos lógicos (Identificação, Contexto, Segurança, Preservação)."
    },
    "4.3.12": {
        explicacao: "O sistema tem que permitir a impressão de uma lista dos documentos e processos resultantes de uma pesquisa.",
        implementacao: "Botão 'Imprimir Resultados' gerando relatório formatado com os itens listados na tela.",
        exemplo: "Impressão da relação de processos pendentes de resposta para controle em reunião de equipe.",
        dicas: "Inclua no cabeçalho da impressão a data da consulta e os filtros utilizados."
    },
    "4.3.13": {
        explicacao: "O SIGAD tem que permitir a impressão da lista (índice) dos documentos que compõem um dossiê ou processo.",
        implementacao: "Geração do Termo de Abertura/Índice de Peças Processuais em PDF para impressão.",
        exemplo: "Impressão do índice de peças do processo com número de ordem, tipo de documento, data e quantidade de folhas.",
        dicas: "Mantenha a numeração sequencial das peças rigorosamente idêntica à ordem do processo digital."
    },
    "4.3.14": {
        explicacao: "É altamente desejável permitir que os metadados exibidos nas listas de impressão sejam definidos pelo próprio usuário.",
        implementacao: "Seletor de colunas na tela de impressão permitindo marcar quais metadados devem sair no relatório.",
        exemplo: "Usuário escolhe imprimir a listagem contendo apenas as colunas 'Número', 'Interessado' e 'Data'.",
        dicas: "Permita salvar o modelo de relatório de impressão configurado."
    },
    "4.3.15": {
        explicacao: "O SIGAD tem que permitir que todos os documentos de um dossiê/processo sejam impressos em uma única operação (impressão em lote).",
        implementacao: "Rotina que mescla todas as peças em um único arquivo PDF consolidado com numeração contínua de páginas para impressão.",
        exemplo: "Clicar em 'Imprimir Processo Completo' gera o PDF com todas as 120 páginas do processo para envio à impressora.",
        dicas: "Exiba o tamanho total e quantidade de páginas antes de disparar impressões muito grandes."
    },
    "4.3.16": {
        explicacao: "O SIGAD tem que ter mecanismos para exportar, para fins de reprodução, documentos que não podem ser impressos (áudios, vídeos e multimídia).",
        implementacao: "Botão de exportação/download de mídias em formato padrão acompanhado de arquivo de metadados.",
        exemplo: "Exportar gravação de audiência em formato MP4 para reprodução em outro dispositivo.",
        dicas: "Gere um arquivo de checksum MD5/SHA-256 junto com a mídia exportada para validação."
    },
    "4.3.17": {
        explicacao: "É altamente desejável apresentar documentos em outros formatos abertos além do nativo (HTML, XML ou formatos aprovados por órgãos padronizadores).",
        implementacao: "Mecanismo de conversão e publicação em formatos web abertos e acessíveis.",
        exemplo: "Visualização de uma portaria em formato HTML limpo e responsivo para publicação no portal da transparência.",
        dicas: "Garanta conformidade com as diretrizes de acessibilidade eMAG/WCAG nas páginas HTML geradas."
    },
    "4.3.18": {
        explicacao: "O SIGAD tem que ser capaz de realizar pesquisa e exibição de documentos e processos simultaneamente para diversos usuários concorrentes.",
        implementacao: "Arquitetura com pool de conexões otimizado, cache de consultas frequentes e leitura não bloqueante no banco.",
        exemplo: "Centenas de servidores realizam consultas simultâneas no sistema sem degradação do tempo de resposta.",
        dicas: "Utilize réplicas de leitura de banco de dados para distribuir a carga de pesquisas pesadas."
    },
    "4.3.19": {
        explicacao: "É altamente desejável permitir que o administrador configure para que todas as cópias impressas de documentos saiam acompanhadas de metadados pré-selecionados.",
        implementacao: "Parametrização global que insere carimbo ou cabeçalho automático de autenticidade em todas as impressões.",
        exemplo: "Todas as impressões saem com rodapé automático contendo: 'Impresso por Fulano em 15/05/2024 às 10:30 - Chave de Validação: ABCD-1234'.",
        dicas: "Inclua QR Code de autenticidade para consulta rápida da versão digital original."
    },

    // =========================================================================
    // ===== CAPÍTULO 5 - ELABORAÇÃO DE DOCUMENTOS =====
    // =========================================================================

    // --- 5.1 Procedimentos gerais ---
    "5.1.1": {
        explicacao: "O SIGAD pode automatizar a produção de documentos exibindo formulários e modelos (templates) predefinidos pelo programa de gestão.",
        implementacao: "Editor de texto web integrado com catálogo de modelos institucionais (ofício, memorando, parecer, despacho).",
        exemplo: "Usuário clica em 'Novo Ofício' e o sistema carrega o modelo oficial com brasão, margens e campos padrão.",
        dicas: "Permita que o arquivista gerencie os modelos oficiais centralizadamente."
    },
    "5.1.2": {
        explicacao: "O SIGAD pode vincular à produção de documentos: numeração automática por espécie, classificação arquivística, marcação de sigilo e autuação de processo.",
        implementacao: "Fluxo de criação com geradores de sequenciais atômicos por tipo documental e vínculo automático com a classe arquivística.",
        exemplo: "Ao salvar um novo ofício, o sistema gera o número 'Ofício nº 45/2024-GAB' e vincula à classe correspondente.",
        dicas: "Automatize o preenchimento de datas e identificação da unidade emissora."
    },

    // --- 5.2 Gerenciamento dos dossiês/processos ---
    "5.2.1": {
        explicacao: "O SIGAD tem que registrar nos metadados as datas de abertura e de encerramento do dossiê/processo para fins de contagem de prazos de guarda.",
        implementacao: "Campos `data_abertura` e `data_encerramento` gravados automaticamente na mudança de status do processo.",
        exemplo: "Processo aberto em 10/01/2023 e encerrado em 15/12/2023 após conclusão do trâmite.",
        dicas: "A data de encerramento é fundamental para disparar a contagem de temporalidade."
    },
    "5.2.2": {
        explicacao: "O SIGAD tem que emitir um aviso caso o usuário tente anexar um documento que já tenha sido anexado anteriormente no mesmo processo.",
        implementacao: "Verificação de duplicação por hash de conteúdo ou identificador do documento antes de concluir a inserção da peça.",
        exemplo: "Aviso: 'O documento selecionado (relatorio.pdf) já foi inserido como a Peça nº 3 deste processo. Deseja duplicar?'.",
        dicas: "Evite sobrecarga desnecessária de armazenamento e confusão na leitura dos autos."
    },
    "5.2.3": {
        explicacao: "O SIGAD tem que permitir que um dossiê/processo seja encerrado por meio de procedimentos regulamentares e somente por usuários autorizados.",
        implementacao: "Ação 'Encerrar Processo' com exigência de termo de encerramento e validação de permissão de perfil.",
        exemplo: "O gestor da unidade homologa a conclusão da instrução processual e aplica o encerramento formal.",
        dicas: "Verifique se não existem tarefas pendentes ou despachos não assinados antes de permitir o encerramento."
    },
    "5.2.4": {
        explicacao: "O SIGAD tem que permitir a consulta aos dossiês/processos já encerrados por usuários autorizados.",
        implementacao: "Manter processos encerrados indexados e acessíveis para leitura conforme a política de controle de acesso.",
        exemplo: "Servidor autorizado pesquisa e visualiza a íntegra de um processo de compras encerrado no ano anterior.",
        dicas: "Processos encerrados devem ser exibidos em modo somente leitura."
    },
    "5.2.5": {
        explicacao: "O SIGAD tem que impedir o acréscimo de novos documentos a dossiês/processos já encerrados (exigindo reabertura formal se necessário).",
        implementacao: "Bloqueio de inserção de novas peças em processos com status 'Encerrado' ou 'Arquivado', liberando apenas após 'Reabertura'.",
        exemplo: "Tentativa de anexar comprovante em processo encerrado é bloqueada com aviso: 'Processo encerrado. Reabra o processo formalmente para juntar novas peças'.",
        dicas: "A reabertura deve exigir justificativa formal e gerar registro na trilha de auditoria."
    },
    "5.2.6": {
        explicacao: "O SIGAD tem que garantir sempre a integridade da relação hierárquica entre classe, processo, volume e documento, impedindo inconsistências no banco de dados.",
        implementacao: "Uso de chaves estrangeiras com integridade referencial estrita e transações atômicas (ACID).",
        exemplo: "Falha de conexão durante o salvamento de uma peça cancela toda a operação sem corromper a sequência do processo.",
        dicas: "Realize rotinas periódicas de checagem de consistência estrutural da base de dados."
    },

    // --- 5.3 Requisitos adicionais para o gerenciamento de processos ---
    "5.3.1": {
        explicacao: "O SIGAD tem que prever a formação e autuação oficial de processos por usuário autorizado conforme a legislação.",
        implementacao: "Módulo de autuação com registro de termo de abertura, atribuição de NUP e vinculação de interessados.",
        exemplo: "Autuação de processo administrativo com geração de capa oficial e termo de autuação.",
        dicas: "Exija o preenchimento de todos os dados formais antes de gerar o número do processo."
    },
    "5.3.2": {
        explicacao: "É altamente desejável apoiar a identificação de processos relativos à mesma ação ou interessado e emitir aviso para evitar duplicidades.",
        implementacao: "Busca automática por CPF/CNPJ ou assunto no momento da autuação exibindo lista de processos pré-existentes.",
        exemplo: "Aviso: 'Já existem 2 processos ativos para este interessado sobre o mesmo assunto. Deseja consultar antes de prosseguir?'.",
        dicas: "Ajude a prevenir a abertura inadvertida de processos concorrentes sobre o mesmo objeto."
    },
    "5.3.3": {
        explicacao: "Os documentos integrantes do processo digital devem receber numeração sequencial sem falhas (peça 1, 2, 3...), não se admitindo duplicidades.",
        implementacao: "Sequenciador transacional atômico que numera as peças do processo progressivamente na ordem cronológica de inserção.",
        exemplo: "Processo com 10 documentos numerados de Peça nº 1 até Peça nº 10 sequencialmente.",
        dicas: "Nunca permita que documentos diferentes recebam o mesmo número de ordem dentro dos autos."
    },
    "5.3.4": {
        explicacao: "O SIGAD tem que impedir a renumeração dos documentos integrantes de um processo digital, salvo hipóteses legais específicas.",
        implementacao: "Trava imutável no número de ordem da peça após sua inserção oficial no processo.",
        exemplo: "Tentativa de alterar o número da Peça nº 5 é bloqueada para evitar adulteração na cronologia dos autos.",
        dicas: "A integridade da sequência numérica é garantia fundamental da autenticidade processual."
    },
    "5.3.5": {
        explicacao: "O SIGAD tem que prever procedimentos para juntada de processos segundo a legislação: por anexação (união definitiva) ou por apensação (união provisória), registrando em metadados.",
        implementacao: "Funcionalidades formais de 'Juntada por Anexação' e 'Juntada por Apensação' com geração dos termos oficiais correspondentes.",
        exemplo: "Juntada por apensação do Processo B ao Processo Principal A para deliberação conjunta.",
        dicas: "Na anexação, o processo acessório é incorporado definitivamente; na apensação, mantém sua numeração própria."
    },
    "5.3.6": {
        explicacao: "O SIGAD tem que prever procedimentos formais para desapensação de processos, registrando o ato nos metadados.",
        implementacao: "Operação 'Desapensar Processo' com emissão de Termo de Desapensação e separação do trâmite dos autos.",
        exemplo: "Desapensação do processo após a conclusão do estudo conjunto da matéria.",
        dicas: "Grave na trilha de ambos os processos o histórico do período em que estiveram apensados."
    },
    "5.3.7": {
        explicacao: "O SIGAD tem que prever procedimentos para desentranhamento de documentos de um processo conforme norma específica, registrando nos metadados.",
        implementacao: "Ação 'Desentranhar Documento' com inclusão de Certidão de Desentranhamento no lugar da peça original.",
        exemplo: "Desentranhamento de cheque caução devolvido à empresa licitante com lavratura de certidão.",
        dicas: "Mantenha a numeração original dos autos inalterada, registrando a certidão no local da peça desentranhada."
    },
    "5.3.8": {
        explicacao: "O SIGAD tem que prever procedimentos para desmembramento de documentos para formar novo processo, registrando nos metadados.",
        implementacao: "Rotina de 'Desmembrar Peças' gerando cópia autenticada dos documentos para formação de novo processo autônomo.",
        exemplo: "Desmembramento de denúncia apartada para instauração de novo procedimento investigativo.",
        dicas: "Registre referências cruzadas mútuas entre o processo originário e o novo processo desmembrado."
    },
    "5.3.9": {
        explicacao: "O SIGAD tem que prever o encerramento de processos, incluindo seus volumes e metadados.",
        implementacao: "Rotina de encerramento que congela todos os volumes e peças em status final.",
        exemplo: "Encerramento formal de processo de sindicância após julgamento da autoridade competente.",
        dicas: "O encerramento finaliza a tramitação e fixa a data de corte para início da contagem da temporalidade."
    },
    "5.3.10": {
        explicacao: "O sistema tem que prever o desarquivamento para reativação de processos por usuário autorizado, garantindo que apenas o último volume receba novos documentos.",
        implementacao: "Funcionalidade 'Reativar/Desarquivar Processo' com justificativa formal, abrindo novo volume ou habilitando apenas o último volume ativo.",
        exemplo: "Reativação de processo arquivado devido a recurso administrativo tempestivo.",
        dicas: "Volumes anteriores ao desarquivamento devem permanecer permanentemente fechados."
    },

    // --- 5.4 Volumes: abertura, encerramento e metadados ---
    "5.4.1": {
        explicacao: "É altamente desejável que o SIGAD gerencie volumes para subdividir processos, fazendo distinção clara entre processo e volume.",
        implementacao: "Entidade `Volume` subordinada ao `Processo` (1:N) gerenciando lotes de folhas/peças.",
        exemplo: "Processo nº 100/2024 dividido em Volume 1 (Peças 1 a 100) e Volume 2 (Peças 101 a 200).",
        dicas: "Facilite a manipulação e visualização de processos extensos subdividindo em volumes."
    },
    "5.4.2": {
        explicacao: "É altamente desejável permitir associar metadados aos volumes e restringir sua inclusão e alteração a usuários autorizados.",
        implementacao: "Campos de metadados do volume (`earq.volume.id`, `earq.volume.numero`, data de abertura e encerramento) com controle de acesso.",
        exemplo: "Metadado do Volume 2 registrando 'Data de Abertura: 10/05/2024'.",
        dicas: "Registre os responsáveis pela abertura e fechamento de cada volume."
    },
    "5.4.3": {
        explicacao: "O volume tem que herdar automaticamente metadados do processo ao qual pertence (classe, temporalidade e sigilo).",
        implementacao: "Propagação automática dos atributos do processo pai para as entidades filhas de volume.",
        exemplo: "O Volume 3 herda automaticamente a classe '021.1' e o nível 'Ostensivo' do processo principal.",
        dicas: "Evite redundância garantindo herança em tempo de execução."
    },
    "5.4.4": {
        explicacao: "O SIGAD tem que permitir a abertura de novos volumes para qualquer processo que não esteja encerrado.",
        implementacao: "Botão 'Abrir Novo Volume' ativo apenas quando o processo estiver com status em tramitação.",
        exemplo: "Abertura do Volume 2 quando o processo atinge o limite de 200 folhas estipulado pelas normas internas.",
        dicas: "Automatize a sugestão de abertura de novo volume ao atingir a quantidade limite de folhas/peças."
    },
    "5.4.5": {
        explicacao: "É altamente desejável registrar metadados correspondentes às datas de abertura e de encerramento de cada volume.",
        implementacao: "Campos timestamp preenchidos automaticamente na criação e encerramento do volume.",
        exemplo: "Volume 1: Aberto em 01/02/2024, Encerrado em 15/04/2024.",
        dicas: "Inclua esses dados nos termos de abertura e encerramento do volume."
    },
    "5.4.6": {
        explicacao: "O volume só pode conter documentos; não é permitido que um volume contenha outro volume ou outro processo.",
        implementacao: "Validação estrita no modelo de dados impedindo aninhamento recursivo de volumes dentro de volumes.",
        exemplo: "Estrutura aceita: Processo -> Volumes -> Documentos.",
        dicas: "Mantenha a hierarquia limpa e em estrita conformidade com as normas processuais."
    },
    "5.4.7": {
        explicacao: "O encerramento de um volume só pode ser realizado por procedimentos regulamentares e por usuários autorizados.",
        implementacao: "Ação 'Encerrar Volume' com geração do Termo de Encerramento e trava de permissão por perfil.",
        exemplo: "Lavratura do Termo de Encerramento do Volume 1 pelo chefe de cartório/secretaria.",
        dicas: "Impeça o encerramento de volumes se houver documentos sem assinatura."
    },
    "5.4.8": {
        explicacao: "Ao ser aberto um novo volume, o volume precedente tem que ser encerrado automaticamente. Apenas o volume mais recente pode estar aberto.",
        implementacao: "Trigger que atualiza o status do volume anterior para 'Encerrado' no momento em que o volume N+1 é criado.",
        exemplo: "Ao criar o Volume 2, o Volume 1 é automaticamente fechado para novas juntadas.",
        dicas: "Garanta que nunca existam dois volumes simultaneamente abertos no mesmo processo."
    },
    "5.4.9": {
        explicacao: "O SIGAD tem que impedir a reabertura de um volume já encerrado para acréscimo de novos documentos.",
        implementacao: "Trava lógica que rejeita inserção de peças em volumes que não sejam o volume ativo mais recente.",
        exemplo: "Tentativa de juntar documento no Volume 1 já encerrado é bloqueada pelo sistema.",
        dicas: "Novos documentos devem ser inseridos obrigatoriamente no último volume aberto."
    },

    // --- 5.5 Gerenciamento de documentos e processos não digitais e híbridos ---
    "5.5.1": {
        explicacao: "O SIGAD tem que capturar e gerenciar documentos e processos não digitais (em suporte papel) da mesma forma que os digitais.",
        implementacao: "Registro de metadados completos de documentos físicos aplicando o mesmo plano de classificação e tabela de temporalidade.",
        exemplo: "Cadastro de processo físico antigo no sistema com controle de tramitação e localização.",
        dicas: "Unifique a pesquisa para que o usuário localize acervos físicos e digitais na mesma consulta."
    },
    "5.5.2": {
        explicacao: "O SIGAD tem que gerenciar a parte física e a digital de processos híbridos associando-as com o mesmo número identificador e título, indicando o caráter híbrido.",
        implementacao: "Metadado `earq.processo.meio: Hibrido` vinculando os volumes físicos e digitais sob o mesmo NUP.",
        exemplo: "Processo nº 2024/050 sinalizado com tag 'HÍBRIDO' contendo 1 volume em papel e 1 volume digital.",
        dicas: "Destaque na capa do processo digital que existem peças físicas no arquivo."
    },
    "5.5.3": {
        explicacao: "Permitir configurar conjunto específico de metadados para documentos físicos, incluindo informações sobre o local de arquivamento.",
        implementacao: "Campos específicos de localização física (depósito, armário, prateleira, caixa) visíveis para documentos em papel.",
        exemplo: "Registro: 'Caixa nº 45, Prateleira 2, Arquivo Setorial de Recursos Humanos'.",
        dicas: "Mantenha o cadastro das salas e depósitos da instituição padronizado."
    },
    "5.5.4": {
        explicacao: "O SIGAD tem que dispor de mecanismos para acompanhar a movimentação do documento físico, deixando evidente a sua localização atual.",
        implementacao: "Controle de trâmite físico com registro de envio, recebimento, unidade detentora e responsável pela custódia.",
        exemplo: "Histórico indica: 'Processo físico recebido na Divisão de Finanças em 12/05/2024 por Maria'.",
        dicas: "Exija confirmação eletrônica de recebimento pelo destinatário ao receber a pasta física."
    },
    "5.5.5": {
        explicacao: "Oferecer funcionalidades para solicitar ou reservar consulta a documento físico, enviando mensagem ao detentor atual ou administrador.",
        implementacao: "Módulo de 'Solicitação de Empréstimo / Despacho Físico' com notificações por e-mail/sistema ao setor de custódia.",
        exemplo: "Servidor solicita empréstimo do Processo Físico nº 123 e o arquivista recebe a notificação para separação da pasta.",
        dicas: "Controle prazos de devolução para empréstimos de pastas físicas."
    },
    "5.5.6": {
        explicacao: "O SIGAD pode incluir mecanismos de impressão e leitura de código de barras para automatizar a movimentação de documentos físicos.",
        implementacao: "Gerador de etiquetas térmicas com código de barras Code 128 / QR Code e suporte a leitor óptico nas telas de trâmite.",
        exemplo: "Leitura rápida do código de barras da capa do processo para registrar a entrada na mesa do analista.",
        dicas: "Agilize rotinas de protocolo com leitores de código de barras USB."
    },
    "5.5.7": {
        explicacao: "Garantir que a recuperação de um processo híbrido retorne simultaneamente os metadados da parte digital e da parte não digital.",
        implementacao: "Tela de consulta que agrega os arquivos digitais e exibe o quadro de localização da parte física correspondente.",
        exemplo: "Ao abrir o processo, o usuário visualiza os PDFs do Volume 2 e a informação de que o Volume 1 está na estante 05.",
        dicas: "Evite que o usuário desconheça a existência de peças físicas relevantes."
    },
    "5.5.8": {
        explicacao: "Documentos e processos híbridos classificados quanto ao sigilo têm que ter o mesmo grau de sigilo aplicado tanto na parte física quanto na digital.",
        implementacao: "Sincronização obrigatória da classificação de sigilo entre os volumes físicos e digitais.",
        exemplo: "Se o processo digital for marcado como 'Reservado', o sistema gera guia de tramitação física com a marca d'água 'RESERVADO'.",
        dicas: "Garanta cautela no manuseio físico com capas especiais para processos sigilosos."
    },
    "5.5.9": {
        explicacao: "O SIGAD tem que registrar na trilha de auditoria todas as alterações feitas nos metadados de documentos físicos e híbridos.",
        implementacao: "Auditoria automática de qualquer atualização de endereço físico, custodiante ou status de processos em papel.",
        exemplo: "Log grava: 'Localização da Caixa física alterada de Sala 1 para Galpão Central em 14/05/2024'.",
        dicas: "A auditoria é indispensável para evitar perdas ou extravios de autos em papel."
    },

    // =========================================================================
    // ===== CAPÍTULO 6 - TRAMITAÇÃO E FLUXO DE TRABALHO =====
    // =========================================================================

    // --- 6.1 Controle do fluxo de trabalho ---
    "6.1.1": {
        explicacao: "O recurso de workflow tem que fornecer os passos necessários para cumprimento de trâmites preestabelecidos ou aleatórios entre participantes.",
        implementacao: "Motor de fluxo de trabalho (BPMN) suportando rotas sequenciais fixas, paralelas e envios sob demanda (ad-hoc).",
        exemplo: "Fluxo de aprovação de compras: Protocolo -> Análise Financeira -> Parecer Jurídico -> Ordenador de Despesas.",
        dicas: "Permita flexibilidade para encaminhamentos pontuais fora do fluxo padrão quando justificado."
    },
    "6.1.2": {
        explicacao: "O SIGAD tem que ter capacidade ilimitada para estabelecer o número necessário de trâmites e etapas nos fluxos de trabalho.",
        implementacao: "Estrutura de dados dinâmica no motor de workflow sem limites de nós e transições.",
        exemplo: "Processo complexo tramita por mais de 50 setores e comissões ao longo de sua instrução.",
        dicas: "Monitore os tempos médios de cada nó do fluxo para identificar gargalos."
    },
    "6.1.3": {
        explicacao: "O fluxo de trabalho tem que disponibilizar funcionalidade para avisar o destinatário quando um documento lhe for enviado, indicando a ação necessária.",
        implementacao: "Envio de notificação push no sistema e e-mail com resumo da tarefa e link direto para o processo.",
        exemplo: "Aviso na caixa de entrada: 'Você recebeu o Processo nº 450 para emissão de parecer técnico até 20/05/2024'.",
        dicas: "Inclua instruções claras sobre o que o usuário precisa executar na notificação."
    },
    "6.1.4": {
        explicacao: "É altamente desejável permitir integração com correio eletrônico para avisar usuários sobre processos que demandam sua atenção.",
        implementacao: "Serviço de mensageria SMTP disparando e-mails com resumo e botão de acesso direto ao processo.",
        exemplo: "E-mail de alerta: 'Processo urgente atribuído à sua responsabilidade'.",
        dicas: "Não envie anexos confidenciais por e-mail; envie apenas o link seguro para acesso autenticado."
    },
    "6.1.5": {
        explicacao: "Os fluxos de trabalho pré-programados devem ser definidos, alterados e mantidos exclusivamente por usuários autorizados.",
        implementacao: "Modelador de processos acessível apenas com permissão de 'ADMINISTRADOR_WORKFLOW'.",
        exemplo: "Apenas a equipe de gestão estratégica edita as etapas do fluxo oficial de licitações.",
        dicas: "Mantenha o versionamento dos fluxos de trabalho para não afetar processos já em andamento."
    },
    "6.1.6": {
        explicacao: "É altamente desejável que o administrador possa autorizar usuários a redistribuir tarefas para outro usuário ou grupo em situações excepcionais (ex: licença).",
        implementacao: "Funcionalidade de delegação/redistribuição de tarefas com registro de motivo e prazo da substituição.",
        exemplo: "Redistribuição dos 15 processos da mesa do auditor de licença médica para seu substituto legal.",
        dicas: "Registre o responsável pela redistribuição na trilha de auditoria."
    },
    "6.1.7": {
        explicacao: "O SIGAD tem que registrar na trilha de auditoria todas as alterações ocorridas na configuração e execução dos fluxos.",
        implementacao: "Log de eventos de workflow capturando: criação de fluxo, edição de rota, reatribuição e cancelamento.",
        exemplo: "Registro de que a etapa 'Aprovação Prévia' foi excluída do fluxo de compras em 10/02/2024.",
        dicas: "Assegure rastreabilidade total sobre as decisões de desenho do processo de negócio."
    },
    "6.1.8": {
        explicacao: "O SIGAD tem que registrar a tramitação de cada documento para que os usuários possam consultar sua situação e localização exata.",
        implementacao: "Linha do tempo visual do processo com histórico de envios, recebimentos, despachos e status atual.",
        exemplo: "Aba 'Tramitação' exibe: 'Enviado por Gabinete em 10/05/2024, Recebido por Recursos Humanos em 11/05/2024'.",
        dicas: "Destaque visualmente a unidade que atualmente está com a custódia do processo."
    },
    "6.1.9": {
        explicacao: "É altamente desejável gerenciar documentos em filas de espera setoriais que possam ser controladas pelo gestor da unidade.",
        implementacao: "Caixa de entrada departamental com fila de processos recebidos aguardando distribuição para os analistas.",
        exemplo: "Painel do setor com 12 processos na fila de triagem aguardando distribuição pelo chefe de seção.",
        dicas: "Permita ordenar a fila por urgência, prazo legal e data de entrada."
    },
    "6.1.10": {
        explicacao: "É altamente desejável permitir que os usuários visualizem sua fila de trabalho e selecionem itens para execução.",
        implementacao: "Visão 'Minhas Tarefas / Meus Processos' com filtros por prioridade e prazo de resposta.",
        exemplo: "Analista visualiza sua fila com 4 processos atribuídos e clica para iniciar a instrução do primeiro.",
        dicas: "Destaque processos com prazos legais próximos do vencimento em cores de alerta."
    },
    "6.1.11": {
        explicacao: "É altamente desejável suportar fluxos condicionais baseados em dados de entrada do usuário ou valores calculados pelo sistema.",
        implementacao: "Gateways lógicos exclusivos (XOR) e inclusivos (OR) no motor de workflow avaliando variáveis do processo.",
        exemplo: "Se o valor da despesa for maior que R$ 50.000, tramita para o Diretor-Geral; caso contrário, vai para o Gerente.",
        dicas: "Documente as regras de negócio de cada ramificação condicional."
    },
    "6.1.12": {
        explicacao: "O SIGAD tem que fornecer histórico completo de movimentação com datas de envio e recebimento, responsáveis e providências adotadas.",
        implementacao: "Relatório de histórico de trâmite cronológico exportável em PDF e integrado aos autos.",
        exemplo: "Extrato de movimentação processual com carimbos eletrônicos de passagem por cada setor.",
        dicas: "Mantenha esse histórico permanentemente vinculado aos autos."
    },
    "6.1.13": {
        explicacao: "O recurso de workflow pode permitir a interrupção ou suspensão temporária justificada de um fluxo para executar outro trabalho.",
        implementacao: "Ação 'Sobrestar / Suspender Processo' com campo de justificativa e trava de contagem de prazos operacionais.",
        exemplo: "Suspensão de processo licitatório por 15 dias aguardando julgamento de impugnação de edital.",
        dicas: "A reativação do fluxo deve exigir despacho formal da autoridade."
    },
    "6.1.14": {
        explicacao: "O SIGAD tem que incluir processamento condicional, permitindo suspender um fluxo para aguardar a chegada de documento externo e retomar automaticamente.",
        implementacao: "Eventos intermediários de captura/mensagem que desbloqueiam o fluxo quando o documento aguardado for protocolado.",
        exemplo: "Fluxo aguarda o upload do 'Laudo Pericial' para avançar automaticamente para a etapa de 'Sentença'.",
        dicas: "Configure alarmes para avisar caso o documento aguardado não chegue no prazo previsto."
    },
    "6.1.15": {
        explicacao: "É altamente desejável associar limites de tempo (SLA) a trâmites e comunicar os responsáveis quando os prazos expirarem.",
        implementacao: "Temporizadores com disparadores de e-mail e alertas na tela quando o processo exceder os dias úteis previstos.",
        exemplo: "Alerta: 'O prazo de 5 dias para emissão do parecer no Processo nº 123 expirou hoje'.",
        dicas: "Forneça relatórios de cumprimento de prazos para a gestão setorial."
    },
    "6.1.16": {
        explicacao: "O SIGAD tem que reconhecer indivíduos e grupos de trabalho (unidades/comissões) como participantes válidos dos fluxos.",
        implementacao: "Atribuição flexível de tarefas para `User_ID` ou `Group_ID` / `Role_ID`.",
        exemplo: "Encaminhar processo para o usuário 'Maria Silva' ou para a unidade 'Comissão Permanente de Licitação'.",
        dicas: "Permita que qualquer membro do grupo assuma processos atribuídos à unidade."
    },
    "6.1.17": {
        explicacao: "É altamente desejável prever a distribuição de documentos do grupo entre seus membros (por rodízio circular ou por puxada da fila conforme disponibilidade).",
        implementacao: "Regras de distribuição automática: Round-Robin (circular) ou Pull (analista puxa da fila quando conclui tarefa anterior).",
        exemplo: "Distribuição automática e balanceada de 20 processos entre 4 analistas do setor de protocolo.",
        dicas: "Considere a complexidade dos processos ou a capacidade individual ao configurar o balanceamento."
    },
    "6.1.18": {
        explicacao: "É altamente desejável que a captura de determinados documentos desencadeie automaticamente o início de fluxos de trabalho específicos.",
        implementacao: "Gatilhos de evento na captura que iniciam instâncias de workflow baseadas na classe ou tipo de documento capturado.",
        exemplo: "A captura de um 'Requerimento de Licença-Prêmio' inicia automaticamente o fluxo de concessão de licença.",
        dicas: "Reduza etapas manuais de protocolo vinculando tipos documentais aos seus fluxos padrão."
    },
    "6.1.19": {
        explicacao: "O SIGAD tem que fornecer relatórios gerenciais para monitorar a tramitação de documentos e o desempenho dos participantes.",
        implementacao: "Dashboard analítico com tempo médio de atendimento, processos parados, volume por setor e taxa de conclusão.",
        exemplo: "Relatório gerencial mostrando que a assessoria jurídica conclui pareceres em média em 4,2 dias.",
        dicas: "Utilize gráficos de acompanhamento para subsidiar decisões de remanejamento de pessoal."
    },
    "6.1.20": {
        explicacao: "O SIGAD tem que registrar a tramitação de um documento em seus metadados: data e hora de envio/recebimento e identificação dos usuários.",
        implementacao: "Campos de metadados do evento de processo (`earq.eventoProc.dataHora`, `earq.eventoProc.agenteId`).",
        exemplo: "Metadado registra que o trâmite ocorreu em 15/05/2024 às 16:45 pelo usuário 'protocolo.central'.",
        dicas: "Garanta que esses metadados façam parte do pacote de exportação e preservação."
    },
    "6.1.21": {
        explicacao: "É altamente desejável manter versões de fluxos alterados e estabelecer vínculos com os documentos processados sob regras antigas.",
        implementacao: "Motor de BPM com suporte a versionamento de esquemas de processos em paralelo.",
        exemplo: "Processos iniciados na 'Versão 1 do Fluxo de Compras' continuam sob as regras antigas, enquanto novos usam a 'Versão 2'.",
        dicas: "Evite que alterações em fluxos novos quebrem a rastreabilidade de processos em andamento."
    },
    "6.1.22": {
        explicacao: "O SIGAD tem que assegurar que qualquer modificação nos atributos dos fluxos leve em consideração os documentos já vinculados.",
        implementacao: "Verificação de impacto e regras de migração de instâncias ativas antes de publicar alterações no fluxo.",
        exemplo: "Ao remover uma etapa do fluxo, o sistema migra com segurança os processos que estavam parados naquela fase.",
        dicas: "Homologue as mudanças de workflow em ambiente de testes antes da aplicação em produção."
    },

    // --- 6.2 Controle de versões e do status do documento ---
    "6.2.1": {
        explicacao: "O SIGAD tem que registrar o status do documento em relação à sua formalização e transmissão: minuta, original ou cópia.",
        implementacao: "Campo de metadado `earq.documento.status` com valores sugeridos: `minuta`, `original`, `copia`.",
        exemplo: "Documento em elaboração no setor tem status 'Minuta'; após assinado e transmitido torna-se 'Original'.",
        dicas: "Assegure que documentos com status de minuta não sejam transmitidos para fora da instituição."
    },
    "6.2.2": {
        explicacao: "O SIGAD tem que manter o identificador único do documento e controlar as diversas versões e revisões deste documento.",
        implementacao: "Identificador raiz imutável associado a um número sequencial de versão (`versao: 1.0, 1.1, 2.0`).",
        exemplo: "O documento UUID `1234` possui a versão 1 (minuta inicial) e versão 2 (minuta revisada após parecer).",
        dicas: "Permita ao usuário comparar o texto entre duas versões diferentes do documento."
    },

    // =========================================================================
    // ===== CAPÍTULO 7 - SEGURANÇA =====
    // =========================================================================

    // --- 7.1 Cópias de segurança ---
    "7.1.1": {
        explicacao: "O SIGAD tem que permitir que rotinas de backup criem cópias regulares de todas as informações: documentos digitais, metadados e parâmetros do sistema.",
        implementacao: "Scripts de backup automatizados integrando dump de banco de dados e sincronização de storage/blobs.",
        exemplo: "Rotina noturna de backup salva a base de metadados e todos os PDFs armazenados no storage.",
        dicas: "Inclua no plano de backup os arquivos de configuração do sistema operacional e do SGBD."
    },
    "7.1.2": {
        explicacao: "O administrador tem que manter o controle das cópias de segurança e executar testes periódicos de restauração (restore).",
        implementacao: "Ambiente isolado de homologação para testes automáticos ou manuais de restauração de backups a cada 3 meses.",
        exemplo: "Simulação de desastre onde o backup de sexta-feira é restaurado com 100% de sucesso em servidor de testes.",
        dicas: "Backup sem teste de restauração não garante segurança; formalize laudos dos testes."
    },
    "7.1.3": {
        explicacao: "É altamente desejável que mídias removíveis de backup tenham cópias em suportes equivalentes e armazenamento externo (off-site).",
        implementacao: "Replicação de backups para fita LTO ou armazenamento em cofre de segurança externo à sede da organização.",
        exemplo: "Envio semanal de fitas de backup para empresa de custódia em cofre à prova de fogo.",
        dicas: "Proteja as mídias físicas em ambiente climatizado com controle de umidade."
    },
    "7.1.4": {
        explicacao: "É altamente desejável que discos rígidos tenham backups armazenados em pelo menos dois locais diferentes e fisicamente distantes.",
        implementacao: "Replicação geográfica de dados entre Data Centers principais e secundários ou em regiões de nuvem distintas.",
        exemplo: "Servidor em Brasília com replicação síncrona em Data Center no Rio de Janeiro.",
        dicas: "Garanta que a distância geográfica proteja contra desastres naturais regionais."
    },
    "7.1.5": {
        explicacao: "É altamente desejável que o SIGAD agende automaticamente backups completos ou incrementais com periodicidade definida pelo administrador.",
        implementacao: "Agendador de tarefas (Cron/Systemd/Job Scheduler) com políticas de backup completo semanal e incremental diário.",
        exemplo: "Execução automática de backup incremental diário às 01:00 e backup full aos sábados às 22:00.",
        dicas: "Monitore o espaço em disco do servidor de backup para evitar falhas por falta de storage."
    },
    "7.1.6": {
        explicacao: "É altamente desejável dispor de mecanismos que garantam a integridade das cópias de segurança e identifiquem o responsável pelo procedimento.",
        implementacao: "Geração de hash SHA-512 dos arquivos de backup e assinatura digital do arquivo de manifesto de backup.",
        exemplo: "Validação automática do hash do backup ao término da rotina registrando o sucesso no log.",
        dicas: "Associe o log de backup à conta de serviço do operador de TI responsável."
    },
    "7.1.7": {
        explicacao: "O SIGAD tem que incluir funções para restituir documentos e metadados a um estado conhecido seguro usando cópias restauradas e rotinas de auditoria.",
        implementacao: "Procedimento documentado de Disaster Recovery combinando restauração de snapshot com aplicação de logs transacionais.",
        exemplo: "Restauração do banco até o ponto anterior à falha ocorrida às 15:30.",
        dicas: "Defina metas claras de RPO (Recovery Point Objective) e RTO (Recovery Time Objective)."
    },
    "7.1.8": {
        explicacao: "É altamente desejável que dados críticos de configuração do SO e do banco sejam especialmente protegidos com backups dedicados.",
        implementacao: "Backup isolado e criptografado de chaves criptográficas, arquivos `.conf`, parâmetros do SGBD e esquemas de permissões.",
        exemplo: "Cópia de segurança em cofre digital dos arquivos de configuração e chaves privadas do servidor.",
        dicas: "Restrinja o acesso a esses backups apenas aos administradores seniores de segurança."
    },
    "7.1.9": {
        explicacao: "É altamente desejável que as trilhas de auditoria sejam copiadas frequentemente e guardadas em local seguro externo (off-site).",
        implementacao: "Envio contínuo de logs de auditoria para servidor centralizado de logs (Syslog seguro / SIEM / Elasticsearch) em local externo.",
        exemplo: "Transmissão em tempo real de todos os eventos de auditoria para Data Center secundário.",
        dicas: "Garanta que os logs no servidor externo sejam imutáveis (Write-Once)."
    },

    // --- 7.2 Controle de acesso ---
    "7.2.1": {
        explicacao: "O SIGAD tem que manter atributos dos usuários: identificador único, autorizações de acesso (perfis/papéis) e credenciais de autenticação.",
        implementacao: "Tabela de usuários integrada a diretório corporativo (LDAP/Active Directory/OAuth2/Gov.br) com RBAC granular.",
        exemplo: "Usuário 'joao.silva', papel 'Arquivista', credencial via certificado digital ICP-Brasil.",
        dicas: "Nunca armazene senhas em texto puro; utilize algoritmos robustos de hash como Argon2 ou bcrypt."
    },
    "7.2.2": {
        explicacao: "O SIGAD tem que exigir identificação e autenticação obrigatória do usuário antes de iniciar qualquer operação no sistema.",
        implementacao: "Middleware de autenticação que intercepta todas as requisições e bloqueia acessos anônimos.",
        exemplo: "Tentativa de acessar URL interna do sistema sem login redireciona imediatamente para a tela de autenticação.",
        dicas: "Implemente expiração automática de sessão por inatividade (ex: 15 ou 30 minutos)."
    },
    "7.2.3": {
        explicacao: "Garantir que os valores dos atributos de segurança associados ao usuário estejam dentro de conjuntos de valores válidos.",
        implementacao: "Validação de esquema de dados e listas de autoridade para perfis, unidades e níveis de sigilo atribuíveis.",
        exemplo: "O sistema bloqueia a atribuição de um papel de segurança que não esteja cadastrado na política da instituição.",
        dicas: "Evite campos de permissão em texto livre; utilize enums ou tabelas de domínio controlado."
    },
    "7.2.4": {
        explicacao: "É altamente desejável que as credenciais sejam alteradas pelo próprio usuário ou pelo administrador com anuência e política de segurança.",
        implementacao: "Funcionalidade de troca de senha autoatendimento com exigência de senha atual e regras de complexidade.",
        exemplo: "Usuário altera sua própria senha cumprindo a regra de conter letras, números e símbolos.",
        dicas: "Force a troca periódica de senhas conforme as diretrizes de segurança da informação."
    },
    "7.2.5": {
        explicacao: "O SIGAD tem que permitir acesso a funções apenas a usuários autorizados sob controle rigoroso da administração para proteger a autenticidade.",
        implementacao: "Matriz de controle de acesso a nível de rotas e métodos de API (RBAC/ABAC).",
        exemplo: "Apenas usuários com a função 'Protocolista' podem autuar novos processos oficiais.",
        dicas: "Adote o princípio do menor privilégio (least privilege) em todas as atribuições."
    },
    "7.2.6": {
        explicacao: "Se o usuário pesquisar documento sem direito de acesso, o sistema deve responder com: 1) mostrar metadados; 2) mostrar existência sem metadados; ou 3) ocultar completamente a existência.",
        implementacao: "Configuração do nível de resposta a acessos não autorizados: a opção 3 (mais rigorosa) remove o item das listagens de busca.",
        exemplo: "Processo secreto não é exibido nas buscas para quem não tem credencial de acesso correspondente.",
        dicas: "Registre na trilha de auditoria todas as tentativas de acesso a itens sigilosos."
    },
    "7.2.7": {
        explicacao: "Somente administradores autorizados têm que ser capazes de criar, alterar, remover ou revogar permissões e perfis de segurança.",
        implementacao: "Permissão especial `ADMINISTRAR_SEGURANCA` restrita aos administradores de segurança da informação.",
        exemplo: "Tentativa de um gerente de setor de conceder perfil de administrador é bloqueada pelo sistema.",
        dicas: "Exija autorização formal antes de conceder permissões privilegiadas."
    },
    "7.2.8": {
        explicacao: "É altamente desejável que alterações ou revogações de permissões sejam aplicadas imediatamente em tempo real.",
        implementacao: "Invalidação imediata de sessões/tokens JWT ativos do usuário no momento em que seu perfil for revogado.",
        exemplo: "Ao desligar um servidor, o administrador revoga o acesso e a sessão ativa do usuário é derrubada instantaneamente.",
        dicas: "Utilize listas de revogação de tokens (token blacklist) com Redis para resposta em milissegundos."
    },
    "7.2.9": {
        explicacao: "É altamente desejável oferecer ferramentas de produtividade ao administrador: gestão em lote de usuários, agenda de tarefas, análise de trilhas e alarmes.",
        implementacao: "Painel administrativo avançado com operações em massa, filtros de auditoria e dashboard de alarmes de segurança.",
        exemplo: "Administrador atribui permissão de leitura para 50 novos servidores em um único clique.",
        dicas: "Disponibilize gráficos de tendências de incidentes de segurança no painel."
    },
    "7.2.10": {
        explicacao: "Ao controlar acesso por grupos, papéis e indivíduos, é altamente desejável obedecer a uma hierarquia de permissões preestabelecida.",
        implementacao: "Mecanismo de herança de direitos: Regras Individuais > Regras de Papel > Regras de Grupo.",
        exemplo: "Uma restrição explícita no perfil individual do usuário prevalece sobre a permissão genérica do seu grupo.",
        dicas: "Documente a matriz de precedência na política de segurança da instituição."
    },
    "7.2.11": {
        explicacao: "O SIGAD tem que aplicar controle de acesso por grupos considerando: identidade do usuário no grupo e atributos de segurança dos documentos/classes.",
        implementacao: "Mapeamento de usuários em grupos funcionais cruzados com as restrições atribuídas aos processos e classes.",
        exemplo: "Membros do grupo 'Assessoria Jurídica' têm acesso a processos da classe 'Consultas Jurídicas'.",
        dicas: "Organize grupos por unidades administrativas ou projetos institucionais."
    },
    "7.2.12": {
        explicacao: "O acesso a documentos ou classes tem que ser concedido se a permissão requerida estiver associada a pelo menos um dos grupos do usuário.",
        implementacao: "União lógica de permissões dos múltiplos grupos aos quais o usuário pertence.",
        exemplo: "Usuário pertence aos grupos 'Protocolo' e 'Arquivo Central', herdando as permissões de ambos.",
        dicas: "Evite conflitos de regras adotando a política de concessão por pertinência temática."
    },
    "7.2.13": {
        explicacao: "O SIGAD tem que permitir que um mesmo usuário pertença a mais de um grupo simultaneamente.",
        implementacao: "Tabela de relacionamento N:N entre `Usuarios` e `Grupos`.",
        exemplo: "Servidor pertence ao grupo 'Comissão de Licitação' e ao grupo 'Departamento de Compras'.",
        dicas: "Facilite a gestão permitindo vincular usuários a grupos temporários de projetos."
    },
    "7.2.14": {
        explicacao: "O SIGAD pode permitir que certos usuários concedam acesso temporário a documentos sob sua responsabilidade para outros usuários ou grupos.",
        implementacao: "Funcionalidade 'Conceder Vista / Acesso Externo' parametrizada pela política de segurança.",
        exemplo: "O relator do processo concede acesso de leitura a um perito externo durante 15 dias.",
        dicas: "Defina data de expiração automática para acessos concedidos sob demanda."
    },
    "7.2.15": {
        explicacao: "Ao controlar acesso por papéis (funções/cargos), o SIGAD tem que usar os atributos: identificação do usuário e papéis associados.",
        implementacao: "Implementação formal de RBAC (Role-Based Access Control) mapeando usuários a papéis institucionais.",
        exemplo: "Usuário 'Ana' associada ao papel 'Arquivista Chefe'.",
        dicas: "Mantenha a lista de papéis alinhada com as funções formais da organização."
    },
    "7.2.16": {
        explicacao: "O SIGAD tem que usar atributos dos documentos (ID e operações permitidas aos papéis) ao implementar o controle por papéis.",
        implementacao: "Matriz de operações por papel: Criar, Ler, Editar, Assinar, Tramitar, Eliminar.",
        exemplo: "Papel 'Estagiário' pode apenas ler documentos; papel 'Diretor' pode assinar e deliberar.",
        dicas: "Defina permissões granulares por espécie e classe documental."
    },
    "7.2.17": {
        explicacao: "O acesso tem que ser concedido apenas se a permissão para a operação estiver presente em pelo menos um dos papéis do usuário.",
        implementacao: "Validador de autorização que consulta a lista de papéis ativos do usuário antes de liberar a ação.",
        exemplo: "Ação de 'Assinar Portaria' só é liberada se o usuário possuir o papel 'Autoridade Emissora'.",
        dicas: "Bloqueie a execução no backend se nenhuma permissão correspondente for encontrada."
    },
    "7.2.18": {
        explicacao: "O SIGAD tem que impedir que um usuário assuma papéis com direitos conflitantes (Segregação de Funções - SoD).",
        implementacao: "Regras de SoD (Segregation of Duties) que bloqueiam a atribuição simultânea de perfis incompatíveis.",
        exemplo: "O mesmo usuário é impedido de possuir simultaneamente o papel de 'Solicitante de Despesa' e 'Aprovador de Pagamento'.",
        dicas: "Implemente a segregação de funções para prevenir fraudes e erros operacionais."
    },
    "7.2.19": {
        explicacao: "O SIGAD pode permitir a criação de hierarquias de papéis com herança de permissões.",
        implementacao: "Estrutura hierárquica onde um papel superior herda automaticamente os privilégios dos papéis subordinados.",
        exemplo: "O papel 'Gerente de Protocolo' herda todas as permissões do papel 'Operador de Protocolo'.",
        dicas: "Simplifique a administração criando árvores de papéis lógicas."
    },

    // --- 7.3 Classificação da informação quanto ao grau de sigilo e restrição de acesso ---
    "7.3.1": {
        explicacao: "O SIGAD tem que implementar a classificação de graus de sigilo (Reservado, Secreto, Ultrassecreto) e restrições de acesso (LGPD, sigilo fiscal/bancário) em documentos, processos e classes.",
        implementacao: "Módulo de segurança com atribuição de graus de sigilo formal e hipóteses legais de sigilo (LAI nº 12.527/2011 e LGPD nº 13.709/2018).",
        exemplo: "Classificação de processo como 'Reservado' com base no art. 23 da Lei de Acesso à Informação.",
        dicas: "Exija a indicação do dispositivo legal que fundamenta cada marcação de sigilo."
    },
    "7.3.2": {
        explicacao: "Implementar a identificação de restrições legais baseando-se no tipo de restrição (dados pessoais, sigilo comercial, judicial) e na credencial do usuário.",
        implementacao: "Campos estruturados de tipo de sigilo combinados com checagem de credencial de segurança do operador.",
        exemplo: "Prontuário médico marcado como 'Restrição de Acesso - Informação Pessoal', acessível apenas por médicos credenciados.",
        dicas: "Controle o acesso a dados pessoais sensíveis conforme a LGPD."
    },
    "7.3.3": {
        explicacao: "Tratar a classificação de sigilo baseando-se no grau de sigilo, credencial de segurança do usuário e autoridade classificadora.",
        implementacao: "Validação de credenciamento: o usuário só abre documentos sigilosos se sua credencial for igual ou superior ao grau do documento.",
        exemplo: "Documento 'Secreto' só pode ser visualizado por servidores com credencial de segurança nível Secreto ou superior.",
        dicas: "Exija que a autoridade classificadora seja formalmente identificada nos metadados."
    },
    "7.3.4": {
        explicacao: "É altamente desejável formalizar a decisão de classificação de sigilo emitindo o Termo de Classificação de Informação (TCI) com dados legais, prazos e justificativas.",
        implementacao: "Gerador automático de TCI em conformidade com o Decreto federal nº 7.724/2012.",
        exemplo: "Emissão e assinatura eletrônica do TCI nº 01/2024 ao classificar documento como Secreto.",
        dicas: "Mantenha os TCIs organizados e auditáveis para prestação de contas aos órgãos de controle."
    },
    "7.3.5": {
        explicacao: "O SIGAD tem que recusar o acesso de usuários a documentos que possuam grau de sigilo superior à sua credencial de segurança.",
        implementacao: "Bloqueio automático de visualização e download na camada de serviço caso `credencial_usuario < grau_sigilo_doc`.",
        exemplo: "Servidor com credencial 'Reservado' tenta abrir processo 'Ultrassecreto' e recebe mensagem de acesso negado.",
        dicas: "Gere evento de alerta na trilha de auditoria para cada tentativa de acesso negado."
    },
    "7.3.6": {
        explicacao: "Documentos externos sem classificação explícita que entrarem no SIGAD devem ser submetidos às políticas de controle de acesso e análise de sigilo.",
        implementacao: "Atribuição de status inicial padrão (ex: 'Pendente de Classificação de Sigilo') até a revisão do protocolo.",
        exemplo: "Correspondência externa recebida é triada para verificar se contém dados pessoais antes de se tornar pública.",
        dicas: "Adote a transparência como regra e o sigilo como exceção legalmente motivada."
    },
    "7.3.7": {
        explicacao: "O SIGAD tem que manter a marcação de restrição de acesso original durante a importação de documentos de fontes externas.",
        implementacao: "Mapeamento dos metadados de sigilo do pacote de importação para os campos de segurança do SIGAD.",
        exemplo: "Processo importado de outro órgão com marcação 'Reservado' mantém o status de 'Reservado' automaticamente.",
        dicas: "Valide as credenciais de segurança do usuário que recebe a documentação importada."
    },
    "7.3.8": {
        explicacao: "É altamente desejável garantir que não haja ambiguidade entre as marcações de sigilo e os atributos de segurança do documento importado.",
        implementacao: "Tabela de equivalência (de-para) que normaliza taxonomias de sigilo entre sistemas distintos.",
        exemplo: "Mapeamento automático de 'Confidencial' de sistema externo para 'Reservado' conforme a legislação federal.",
        dicas: "Exiba aviso ao administrador caso encontre marcações de sigilo desconhecidas na importação."
    },
    "7.3.9": {
        explicacao: "Permitir configurar durante a implantação se as classes e processos terão regras de sigilo atribuídas ou se serão ostensivos por padrão.",
        implementacao: "Parâmetro do sistema definindo a política padrão de acesso inicial (Ostensivo vs. Restrito).",
        exemplo: "Configuração em órgão de inteligência adota restrição por padrão; órgão de educação adota ostensivo por padrão.",
        dicas: "Documente a política adotada nas diretrizes de segurança da instituição."
    },
    "7.3.10": {
        explicacao: "O administrador autorizado tem que poder alterar o grau de sigilo ou desclassificar todos os documentos de um processo ou classe em uma única operação.",
        implementacao: "Funcionalidade 'Desclassificação/Reclassificação em Lote' com registro obrigatório do ato formal.",
        exemplo: "Desclassificação de lote de processos de 2014 que atingiram o término do prazo de 10 anos de sigilo.",
        dicas: "Registre a data, o executor e a fundamentação da desclassificação em massa."
    },
    "7.3.11": {
        explicacao: "Garantir que o documento sigiloso importado seja destinado a usuário com credencial de segurança pertinente para recebê-lo.",
        implementacao: "Validação da credencial do destinatário antes de concluir a transferência ou encaminhamento do documento.",
        exemplo: "O sistema impede o trâmite de ofício Secreto para a caixa de um servidor sem credenciamento de segurança.",
        dicas: "Avise o remetente caso o destinatário selecionado não possua a credencial necessária."
    },
    "7.3.12": {
        explicacao: "Somente administradores autorizados têm que ser capazes de revogar atributos de segurança de documentos ou alterar credenciais de usuários.",
        implementacao: "Restrição de acesso a nível de rota administrativa protegida por perfil exclusivo de segurança.",
        exemplo: "Apenas a autoridade máxima de segurança altera o nível de credenciamento dos servidores.",
        dicas: "Audite compulsoriamente qualquer concessão ou revogação de credenciais."
    },
    "7.3.13": {
        explicacao: "Permitir a desclassificação, redução de sigilo ou alteração de restrição apenas a usuário autorizado mediante confirmação formal.",
        implementacao: "Fluxo formal de desclassificação com exigência de termo motivado e confirmação de senha.",
        exemplo: "Comissão de reavaliação desclassifica processo de 'Secreto' para 'Ostensivo' após término do prazo legal.",
        dicas: "Disponibilize o documento para consulta pública imediatamente após a desclassificação."
    },
    "7.3.14": {
        explicacao: "É altamente desejável que o SIGAD permita o armazenamento de documentos sigilosos em meios físicos ou lógicos distintos dos documentos ostensivos.",
        implementacao: "Storage particionado ou bucket criptografado exclusivo para acervo classificado em grau de sigilo.",
        exemplo: "Documentos secretos são salvos em volume de disco isolado com criptografia de hardware.",
        dicas: "Isole os dados sigilosos para conter impactos em caso de vazamento no ambiente geral."
    },
    "7.3.15": {
        explicacao: "O SIGAD tem que impedir que documentos com classificação de sigilo sejam eliminados antes de se tornarem ostensivos.",
        implementacao: "Trava de segurança: a rotina de eliminação rejeita itens com `grau_sigilo > 0` até que ocorra a desclassificação formal.",
        exemplo: "Bloqueio de tentativa de expurgo de documento Reservado sem prévio termo de desclassificação.",
        dicas: "A desclassificação prévia é requisito de transparência antes de qualquer eliminação de documentos públicos."
    },
    "7.3.16": {
        explicacao: "Implementar metadados nos níveis de dossiê, documento ou cópia truncada para controlar o acesso à informação sensível.",
        implementacao: "Controle de visibilidade a nível de página ou parágrafo permitindo gerar versões tarjadas para acesso público.",
        exemplo: "Geração de cópia com ocultação do CPF do cidadão para atendimento a pedido via Lei de Acesso à Informação.",
        dicas: "Mantenha o documento original intacto e armazene a cópia truncada como objeto derivado."
    },

    // --- 7.4 Trilhas de auditoria ---
    "7.4.1": {
        explicacao: "O SIGAD tem que registrar na trilha de auditoria: captura, responsáveis, reclassificações, alterações na temporalidade, exportações, acessos/tentativas de acesso, eliminações e atos administrativos.",
        implementacao: "Mecanismo centralizado de auditoria capturando todos os eventos com timestamp atômico, usuário, IP, ação e objeto.",
        exemplo: "Registro de quem visualizou, imprimiu, baixou ou tentou acessar o processo sigiloso.",
        dicas: "Projete a auditoria para cobrir tanto o uso regular quanto as ações administrativas privilegiadas."
    },
    "7.4.2": {
        explicacao: "O SIGAD tem que registrar a identidade do usuário em cada evento auditado, respeitando a política de privacidade e a legislação.",
        implementacao: "Associação do ID do usuário, login e perfil ativo ao registro de log de auditoria.",
        exemplo: "Log grava: `Evento: Leitura de Peça #5 | Usuário: 04589214700 (Carlos Silva) | 10:15:30`.",
        dicas: "Armazene dados suficientes para responsabilização legal e administrativa inequívoca."
    },
    "7.4.3": {
        explicacao: "O SIGAD tem que permitir a leitura e visualização das trilhas de auditoria apenas a usuários autorizados (auditores e administradores).",
        implementacao: "Módulo de consulta de auditoria protegido por permissão estrita `CONSULTAR_AUDITORIA`.",
        exemplo: "Apenas auditores internos e administradores de segurança acessam os relatórios de logs.",
        dicas: "Usuários comuns não devem visualizar quem consultou seus documentos para evitar constrangimentos."
    },
    "7.4.4": {
        explicacao: "As informações da trilha de auditoria devem estar claras, inteligíveis e disponíveis para inspeção pericial.",
        implementacao: "Interface de visualização com tradução de códigos técnicos para linguagem compreensível e filtros estruturados.",
        exemplo: "Exibição de: 'Documento baixado via web pelo usuário Maria em 12/05/2024 às 14:22' em vez de texto bruto indecifrável.",
        dicas: "Facilite o trabalho de auditorias externas com filtros por período e tipo de ocorrência."
    },
    "7.4.5": {
        explicacao: "É altamente desejável possuir mecanismos para realizar buscas avançadas nos eventos das trilhas de auditoria.",
        implementacao: "Motor de busca indexado (ex: Elasticsearch/Kibana) dedicado para consultas rápidas sobre milhões de logs de auditoria.",
        exemplo: "Busca de todos os acessos ao Processo nº 50 ocorridos durante o último final de semana.",
        dicas: "A ordenação dos resultados não pode alterar a integridade dos dados registrados."
    },
    "7.4.6": {
        explicacao: "O SIGAD tem que ser capaz de impedir qualquer modificação ou exclusão nas trilhas de auditoria.",
        implementacao: "Armazenamento em banco de dados WORM (Write-Once-Read-Many) ou tabelas append-only com permissão revogada de UPDATE/DELETE.",
        exemplo: "Mesmo o administrador do banco de dados não consegue editar ou apagar registros de log de auditoria.",
        dicas: "Utilize encadeamento criptográfico (hash chaining / blockchain) para garantir a imutabilidade dos logs."
    },
    "7.4.7": {
        explicacao: "Somente administradores autorizados podem exportar ou transferir trilhas de auditoria de um suporte para outro sem afetar a integridade.",
        implementacao: "Rotina de arquivamento de logs com assinatura digital do arquivo exportado.",
        exemplo: "Transferência anual de logs de auditoria para armazenamento em repositório de longa duração.",
        dicas: "A trilha de auditoria é documento arquivístico e não pode ser eliminada antes do prazo de temporalidade."
    },
    "7.4.8": {
        explicacao: "É altamente desejável gerar alarmes automáticos aos administradores se o tamanho da trilha de auditoria atingir limites críticos de armazenamento.",
        implementacao: "Monitor de capacidade que emite alertas ao atingir 80%, 90% e 95% do espaço alocado aos logs.",
        exemplo: "E-mail urgente ao administrador: 'Alerta: Volume de auditoria com 90% de ocupação'.",
        dicas: "Evite a interrupção do sistema por falta de espaço de log com alertas preventivos."
    },
    "7.4.9": {
        explicacao: "Se o espaço da trilha de auditoria se esgotar, é altamente desejável permitir apenas operações originadas por administradores, bloqueando usuários comuns.",
        implementacao: "Modo de segurança operacional: se o log falhar, o sistema entra em modo de manutenção e rejeita novas transações comuns.",
        exemplo: "Bloqueio de novas capturas com aviso: 'Sistema temporariamente indisponível para manutenção de segurança'.",
        dicas: "Nunca permita operações no SIGAD sem o devido registro em auditoria."
    },
    "7.4.10": {
        explicacao: "É altamente desejável aplicar regras de monitoramento nos eventos auditados para detectar e alertar sobre possíveis violações de segurança.",
        implementacao: "Motor SIEM com regras de correlação de eventos que identifica comportamentos anômalos.",
        exemplo: "Alerta de segurança disparado após usuário tentar baixar 500 processos confidenciais em menos de 2 minutos.",
        dicas: "Integre com sistemas corporativos de monitoramento de incidentes de segurança (SOC)."
    },
    "7.4.11": {
        explicacao: "É altamente desejável monitorar: tentativas consecutivas de login com erro, múltiplos logins simultâneos em computadores diferentes e acessos fora do horário.",
        implementacao: "Regras de detecção de invasão: bloquear usuário após 5 erros de senha; alertar login concorrente em IPs distintos.",
        exemplo: "Bloqueio temporário de conta após 5 senhas incorretas consecutivas.",
        dicas: "Envie e-mail de alerta ao usuário quando for detectado login em novo dispositivo."
    },
    "7.4.12": {
        explicacao: "O SIGAD tem que fornecer relatórios cronológicos de auditoria organizados por: documento/classe, usuário e tipo de operação.",
        implementacao: "Módulo de relatórios analíticos permitindo filtrar e exportar a linha de vida de qualquer documento.",
        exemplo: "Relatório de todas as ações executadas pelo usuário 'Pedro' no mês de março.",
        dicas: "Disponibilize relatórios prontos para atender solicitações de auditorias e órgãos de controle."
    },
    "7.4.13": {
        explicacao: "O SIGAD pode fornecer relatórios de ações organizados por posto de trabalho, endereço de rede (IP) ou interface de acesso utilizada.",
        implementacao: "Registro do IP, User-Agent e tipo de cliente (Web, Mobile, Desktop) em cada ação auditada.",
        exemplo: "Relatório listando acessos a documentos realizados a partir de IPs externos fora da VPN do órgão.",
        dicas: "Utilize essas informações para investigação de incidentes de segurança cibernética."
    },
    "7.4.14": {
        explicacao: "Somente administradores autorizados têm que ser capazes de configurar quais eventos e atributos são auditáveis no sistema.",
        implementacao: "Painel de configuração de auditoria restrito com ativação seletiva de categorias de log.",
        exemplo: "Administrador ativa o registro detalhado de eventos de impressão de documentos.",
        dicas: "Mantenha os eventos obrigatórios do e-ARQ sempre ativados por padrão."
    },
    "7.4.15": {
        explicacao: "O SIGAD tem que ser capaz de arquivar periodicamente a trilha de auditoria como documento arquivístico oficial.",
        implementacao: "Fechamento periódico de blocos de auditoria, consolidação em formato PDF/A ou XML e autuação como processo de gestão.",
        exemplo: "Autuação anual do 'Processo de Trilhas de Auditoria do Exercício de 2023' para preservação permanente.",
        dicas: "Aplique prazos de guarda e destinação específicos para os registros de auditoria."
    },

    // --- 7.5 Assinatura digital ---
    "7.5.1": {
        explicacao: "É altamente desejável prover meios para verificar a origem, autoria e integridade de documentos com assinatura digital ICP-Brasil.",
        implementacao: "Validador de assinaturas digitais integrado verificando integridade do hash, cadeia de certificados e lista de revogação (LCR/OCSP).",
        exemplo: "Exibição de painel visual verde indicando: 'Assinatura Digital Válida - Certificado Emitido por AC Autoridade Certificadora ICP-Brasil'.",
        dicas: "Utilize bibliotecas padrão como BouncyCastle ou serviços de validação oficiais do ITI."
    },
    "7.5.2": {
        explicacao: "Somente administradores autorizados têm que ser capazes de incluir, remover ou atualizar no SIGAD os certificados digitais de servidores e da instituição.",
        implementacao: "Módulo de gestão de chaves públicas e certificados acessível apenas por administradores de segurança.",
        exemplo: "Atualização anual do certificado de assinatura de servidor da instituição após renovação na AC.",
        dicas: "Monitore a data de expiração dos certificados para evitar interrupções nos serviços de assinatura."
    },
    "7.5.3": {
        explicacao: "O SIGAD tem que verificar a validade da assinatura digital no momento da captura de documentos externos.",
        implementacao: "Rotina de verificação no ato do upload que valida a cadeia criptográfica e rejeita documentos com assinaturas corrompidas.",
        exemplo: "Ao anexar contrato assinado digitalmente, o sistema valida a conformidade antes de confirmar a juntada aos autos.",
        dicas: "Armazene o relatório de validação da assinatura nos metadados de preservação."
    },
    "7.5.4": {
        explicacao: "O SIGAD tem que registrar como metadados: validade da assinatura verificada, registro da verificação e data/hora em que ocorreu.",
        implementacao: "Persistência estruturada dos atributos `earq.componente.assinatura` no momento da verificação.",
        exemplo: "Metadado grava: 'Assinatura válida em 10/05/2024 às 14:00 por João da Silva via ICP-Brasil'.",
        dicas: "Esse registro comprova que a assinatura era válida no momento da entrada no sistema."
    },
    "7.5.5": {
        explicacao: "É altamente desejável armazenar com o componente digital as informações completas da assinatura e da cadeia de certificação.",
        implementacao: "Armazenamento do pacote de assinatura CAdES/PAdES completo com carimbo de tempo e certificados da cadeia.",
        exemplo: "O arquivo PDF armazena o envelope criptográfico completo permitindo validação offline futura.",
        dicas: "Adote o padrão PAdES LTV (Long Term Validation) para preservação de longo prazo."
    },
    "7.5.6": {
        explicacao: "É altamente desejável que o SIGAD possua arquitetura capaz de receber atualizações tecnológicas na plataforma criptográfica de assinatura.",
        implementacao: "Design em camadas desacopladas que permite substituir algoritmos (ex: migrar de SHA-256 para SHA-512 ou criptografia pós-quântica).",
        exemplo: "Atualização do módulo de criptografia para suportar novas curvas elípticas aprovadas pelo ITI.",
        dicas: "Evite dependência de implementações criptográficas legadas ou não padronizadas."
    },

    // --- 7.6 Carimbo digital do tempo ---
    "7.6.1": {
        explicacao: "O SIGAD tem que ter acesso a relógios confiáveis (NTP.br) e servidor de carimbo do tempo emitido por ACT credenciada.",
        implementacao: "Sincronização com servidores NTP oficiais do Observatório Nacional e conector com Autoridade de Carimbo do Tempo (ACT).",
        exemplo: "Assinatura de documentos acompanhada de carimbo do tempo oficial emitido por ACT credenciada na ICP-Brasil.",
        dicas: "Mantenha a sincronização NTP ativa em todos os nós do cluster do SIGAD."
    },
    "7.6.2": {
        explicacao: "O SIGAD tem que ser capaz de verificar a validade do carimbo digital do tempo no momento da captura do documento.",
        implementacao: "Validação do token de timestamp (RFC 3161) confrontando o hash do arquivo e o certificado da ACT emissora.",
        exemplo: "Verificação de que o carimbo do tempo aposto no contrato é autêntico e foi emitido dentro do período de validade da ACT.",
        dicas: "Comprove a existência do documento em uma data e hora exata no passado."
    },
    "7.6.3": {
        explicacao: "No processo de verificação do carimbo do tempo, registrar como metadado: validade, registro da verificação e data/hora da checagem.",
        implementacao: "Gravação dos metadados de conferência do timestamp nos eventos de preservação do documento.",
        exemplo: "Metadado grava: 'Carimbo do tempo verificado com sucesso em 12/05/2024 às 09:30'.",
        dicas: "O carimbo do tempo garante a presunção de irrefutabilidade temporal do documento."
    },

    // --- 7.7 Marcas d’água digitais ---
    "7.7.1": {
        explicacao: "O SIGAD tem que ser capaz de recuperar e exibir informações contidas em marcas d'água digitais em documentos de imagem e som.",
        implementacao: "Algoritmo de extração de esteganografia ou leitura de metadados visuais de marca d'água.",
        exemplo: "Recuperação do código de direitos autorais embutido de forma invisível em uma fotografia histórica digital.",
        dicas: "Utilize marcas d'água para proteção de propriedade intelectual e combate a vazamentos."
    },
    "7.7.2": {
        explicacao: "O SIGAD tem que ser capaz de armazenar documentos arquivísticos digitais que contenham marcas d'água digitais.",
        implementacao: "Preservação bit a bit sem compressão destrutiva para não corromper os dados da marca d'água.",
        exemplo: "Armazenamento de imagens PNG/TIFF de alta resolução com marcas d'água de autenticidade.",
        dicas: "Evite rotinas de recompressão de imagens que possam degradar a marca d'água."
    },
    "7.7.3": {
        explicacao: "É altamente desejável possuir arquitetura capaz de receber atualizações tecnológicas na plataforma de geração e detecção de marcas d'água.",
        implementacao: "Arquitetura modular de plugins de processamento de imagem e áudio.",
        exemplo: "Adição de novo plugin de marca d'água dinâmica para aplicação em arquivos de vídeo.",
        dicas: "Permita atualizar bibliotecas de mídia sem afetar o núcleo do SIGAD."
    },

    // --- 7.8 Assinatura cadastrada mediante identificação do usuário e senha ---
    "7.8.1": {
        explicacao: "O SIGAD tem que garantir a autoria de documento autenticado por login e senha nos documentos produzidos e mantidos no sistema.",
        implementacao: "Mecanismo de assinatura eletrônica simples/avançada: confirmação de senha do usuário ativo no ato da assinatura gerando declaração de autoria.",
        exemplo: "Servidor digita sua senha de rede para assinar despacho interno, gerando termo de assinatura eletrônica.",
        dicas: "Atenda à Lei nº 14.063/2020 sobre assinaturas eletrônicas na administração pública."
    },
    "7.8.2": {
        explicacao: "O SIGAD tem que registrar a identificação do autor como metadado de autenticação do documento após verificação da senha.",
        implementacao: "Gravação do nome, cargo, CPF e timestamp no metadado de assinatura e no rodapé do documento gerado.",
        exemplo: "Rodapé exibe: 'Documento assinado eletronicamente por Maria Souza, Diretora, em 10/05/2024 às 11:20'.",
        dicas: "Gere código verificador e QR Code para validação pública da autenticidade do documento impresso."
    },
    "7.8.3": {
        explicacao: "É altamente desejável fazer uso de checksum/hash para apoiar a verificação da integridade do documento autenticado por senha.",
        implementacao: "Cálculo e armazenamento do hash SHA-256 do documento no exato instante da confirmação da assinatura por senha.",
        exemplo: "O sistema congela o documento e salva o hash `a591a6d40bf420404a...` no banco.",
        dicas: "Qualquer alteração posterior no conteúdo invalidará a conferência do hash com o registro da assinatura."
    },

    // --- 7.9 Criptografia ---
    "7.9.1": {
        explicacao: "O SIGAD tem que usar criptografia no armazenamento, transmissão e apresentação de documentos ao implementar a política de sigilo.",
        implementacao: "Uso de HTTPS (TLS 1.3) na transmissão e criptografia AES-256 em repouso nos arquivos sigilosos.",
        exemplo: "Documentos de investigações internas são armazenados criptografados no disco e transmitidos via canal seguro.",
        dicas: "Em documentos de guarda longa (mais de 5 anos), evite criptografia permanente no storage devido ao risco de obsolescência das chaves."
    },
    "7.9.2": {
        explicacao: "O SIGAD tem que limitar o acesso aos documentos cifrados exclusivamente aos usuários portadores da chave de decifração.",
        implementacao: "Gestão de chaves criptográficas com KMS (Key Management Service) liberando decifração apenas para usuários com perfil.",
        exemplo: "Tentativa de abrir processo cifrado por usuário sem a chave de acesso retorna dados criptografados ilegíveis.",
        dicas: "Tenha planos de contingência para custódia segura das chaves institucionais."
    },
    "7.9.3": {
        explicacao: "O SIGAD tem que registrar metadados sobre o documento cifrado: indicação de cifração, algoritmo usado, remetente e destinatário.",
        implementacao: "Campos `earq.componente.inibidor` gravando: algoritmo (ex: AES-256), data de cifração e identificadores dos agentes.",
        exemplo: "Metadado indica: 'Documento cifrado com AES-GCM pelo remetente Gabinete para o destinatário Corregedoria'.",
        dicas: "Mantenha metadados descritivos desprotegidos para permitir a localização e identificação do item."
    },
    "7.9.4": {
        explicacao: "É altamente desejável assegurar a captura direta de documentos cifrados a partir de softwares que disponham dessa funcionalidade.",
        implementacao: "Conectores e APIs capazes de receber pacotes criptografados (PGP/S-MIME) e gerenciar seus metadados de entrada.",
        exemplo: "Captura direta de mensagens cifradas recebidas via canal seguro de comunicação entre agências.",
        dicas: "Exija que o software de origem forneça os metadados técnicos necessários para futura decifração."
    },
    "7.9.5": {
        explicacao: "Somente usuários autorizados podem configurar parâmetros criptográficos, substituir chaves, cifrar documentos ou remover criptografia.",
        implementacao: "Permissão de 'ADMINISTRADOR_CRIPTOGRAFIA' com dupla custódia para procedimentos críticos de chave.",
        exemplo: "Apenas o responsável pela segurança remove a criptografia de documento que foi desclassificado.",
        dicas: "Remova a criptografia antes de recolher documentos ao arquivo permanente para garantir acesso futuro."
    },
    "7.9.6": {
        explicacao: "Em caso de remoção da cifração do documento, registrar na trilha de auditoria: data/hora, executor e motivo da remoção.",
        implementacao: "Gatilho de auditoria disparado no ato da decifração permanente gravando todos os dados da operação.",
        exemplo: "Auditoria registra: 'Criptografia removida em 15/05/2024 por Admin por motivo de desclassificação legal do processo'.",
        dicas: "Essa trilha comprova que o documento foi decifrado de forma legítima e autorizada."
    },
    "7.9.7": {
        explicacao: "É altamente desejável possuir arquitetura capaz de receber atualizações tecnológicas na plataforma criptográfica.",
        implementacao: "Camada de abstração de serviços criptográficos permitindo adicionar novos algoritmos e substituir cifras obsoletas.",
        exemplo: "Substituição do algoritmo RSA de 2048 bits por chaves de 4096 bits sem alterar a lógica da aplicação.",
        dicas: "Acompanhe as recomendações normativas de segurança criptográfica governamentais."
    },

    // --- 7.10 Acompanhamento de mudança de suporte ou de local ---
    "7.10.1": {
        explicacao: "É altamente desejável manter para cada documento ou processo o histórico de todas as mudanças de mídia/suporte sofridas.",
        implementacao: "Tabela de histórico de preservação registrando cada conversão de mídia ou regravação (refreshing).",
        exemplo: "Histórico mostra que o arquivo foi gravado originalmente em disco óptico em 2010 e migrado para SSD corporativo em 2020.",
        dicas: "O registro de mudanças de mídia assegura a comprovação da cadeia de custódia ininterrupta."
    },
    "7.10.2": {
        explicacao: "O SIGAD tem que fornecer recurso para monitorar e registrar informações sobre o local atual e o deslocamento de processos digitais e físicos.",
        implementacao: "Módulo de rastreamento de custódia física e lógica com histórico de transferências entre depósitos e servidores.",
        exemplo: "Rastreamento indica que o volume físico foi transferido do Arquivo Geral para a Unidade Regional.",
        dicas: "Mantenha o status de localização atualizado em tempo real."
    },
    "7.10.3": {
        explicacao: "A função de acompanhamento de mudança de local tem que registrar: identificador, localização atual e anteriores, data/hora de envio e recepção, destinatário, responsável e método.",
        implementacao: "Metadado de evento de movimentação (`earq.eventoProc.tipo: Tramitacao`) com todos os campos estruturados.",
        exemplo: "Registro: 'Documento #100 deslocado do Storage On-line para Storage Frio (Glacier) em 10/05/2024 por rotina automática'.",
        dicas: "Garanta que a trilha de deslocamento não possa ser apagada."
    },

    // --- 7.11 Autoproteção ---
    "7.11.1": {
        explicacao: "É altamente desejável que o SIGAD faça a verificação de vírus ou pragas digitais antes da efetivação da captura do documento.",
        implementacao: "Scanner antivírus (ClamAV / Windows Defender API) integrado no pipeline de upload antes de persistir o arquivo.",
        exemplo: "Upload de arquivo infectado com malware é bloqueado com mensagem: 'Arquivo infectado. Captura rejeitada'.",
        dicas: "Mantenha a base de vacinas do antivírus atualizada diariamente."
    },
    "7.11.2": {
        explicacao: "É altamente desejável possuir procedimentos que reduzam erros, falhas e descontinuidades capazes de causar perda de documentos.",
        implementacao: "Arquitetura resiliente com redundância de servidores, failover automático e discos espelhados (RAID).",
        exemplo: "Falha na controladora de um servidor de aplicação redireciona automaticamente as requisições para o nó secundário.",
        dicas: "Realize testes de caos e simulações de queda de infraestrutura."
    },
    "7.11.3": {
        explicacao: "Após falha, quando a recuperação automática não for possível, o SIGAD tem que entrar em modo de manutenção e permitir restauração para estado seguro sem perda de transações recentes.",
        implementacao: "Modo de recuperação com bloqueio de conexões de usuários, verificação de consistência e aplicação de WAL (Write-Ahead Logging).",
        exemplo: "Queda de energia inesperada: o sistema inicia em modo de manutenção, valida as tabelas e restaura a consistência dos dados.",
        dicas: "Mantenha procedimentos operacionais padrão (POP) de recuperação documentados para a equipe de TI."
    },
    "7.11.4": {
        explicacao: "É altamente desejável garantir que dados de segurança (permissões, chaves, parâmetros) sejam mantidos consistentes quando replicados.",
        implementacao: "Replicação transacional síncrona com consenso distribuído (ex: Raft/Paxos) para nós de controle de segurança.",
        exemplo: "A revogação de um usuário é propagada atomicamente para todos os nós de autenticação em milissegundos.",
        dicas: "Evite consistência eventual em tabelas de controle de acesso a dados sigilosos."
    },
    "7.11.5": {
        explicacao: "O SIGAD tem que preservar estado seguro de funcionamento, interrompendo a interação com usuários comuns em caso de: falha cliente-servidor, perda de integridade de acessos ou falta de espaço para auditoria.",
        implementacao: "Mecanismo Fail-Safe: ao detectar corrupção na tabela de permissões ou disco de log cheio, o sistema desativa rotas de escrita e alerta a equipe.",
        exemplo: "Falta de espaço para gravar trilha de auditoria coloca o SIGAD em modo somente leitura imediatamente.",
        dicas: "Nunca permita que o sistema opere 'às cegas' sem conseguir auditar as ações dos usuários."
    },
    "7.11.6": {
        explicacao: "Quando não for possível escrever na trilha de auditoria, é altamente desejável impedir qualquer operação e passar para o modo de manutenção.",
        implementacao: "Circuit Breaker no subsistema de auditoria: se a gravação do log falhar, rejeitar a transação de negócio.",
        exemplo: "Erro ao gravar na tabela de auditoria cancela o salvamento do documento para não haver operação não registrada.",
        dicas: "Configure alarmes prioritários para a equipe de infraestrutura em falhas de log."
    },
    "7.11.7": {
        explicacao: "O SIGAD pode atribuir a cada componente digital, no momento da captura, um código de manutenção de integridade baseado em criptografia robusta.",
        implementacao: "Geração automática de hash SHA-256 gravado no metadado `earq.componente.fixidade` no momento do upload.",
        exemplo: "Cálculo de hash SHA-256 do arquivo e gravação em tabela protegida.",
        dicas: "Utilize esse código para checagens periódicas automáticas de integridade de bits."
    },

    // --- 7.12 Alterar, apagar e truncar documentos arquivísticos digitais ---
    "7.12.1": {
        explicacao: "Permitir a administrador autorizado anular uma operação em caso de erro do usuário ou sistema. Anular não significa apagar documento, e a anulação de eliminação definitiva não é possível.",
        implementacao: "Funcionalidade de cancelamento de ato administrativo com registro da certidão de anulação e preservação do histórico.",
        exemplo: "Anulação de uma juntada indevida com lavratura de termo de cancelamento nos autos.",
        dicas: "Anulações devem ser registradas expressamente na trilha de auditoria."
    },
    "7.12.2": {
        explicacao: "É altamente desejável inibir a eliminação de grupos ou lotes de documentos fora do processo regular previsto na tabela de temporalidade.",
        implementacao: "Bloqueio de botões de exclusão em massa fora do fluxo oficial de destinação homologado pela CPAD.",
        exemplo: "Tentativa de usuário de selecionar 20 processos e clicar em 'Deletar' é bloqueada pelo sistema.",
        dicas: "Previna desastres e expurgos acidentais com travas no software."
    },
    "7.12.3": {
        explicacao: "Em situações excepcionais, o administrador pode apagar/corrigir registros: registrar tudo na auditoria, emitir relatório de anomalias, eliminar todo o conteúdo do dossiê e manter a integridade dos demais.",
        implementacao: "Módulo administrativo excepcional de expurgo técnico com confirmação, justificativa obrigatória e log pericial.",
        exemplo: "Exclusão judicial de documento inserido por engano que continha segredo de justiça absoluto de terceiros.",
        dicas: "Exija autorização da assessoria jurídica antes de acionar esse procedimento excepcional."
    },
    "7.12.4": {
        explicacao: "Em caso de erro na inserção de metadados, o administrador terá que corrigi-lo e o SIGAD tem que registrar a ação na trilha de auditoria.",
        implementacao: "Formulário de retificação de metadados que grava o valor antigo, novo valor, usuário e data na auditoria.",
        exemplo: "Correção da grafia do nome do interessado com registro de retificação na trilha do processo.",
        dicas: "Apresente o histórico de retificações na aba de auditoria do processo."
    },
    "7.12.5": {
        explicacao: "O SIGAD tem que permitir a usuário autorizado fazer cópia truncada de documento para publicação, sem alterar o documento original.",
        implementacao: "Ferramenta de edição de cópia derivada (redaction) que gera um novo arquivo com tarjamento permanente sem modificar o original.",
        exemplo: "Geração de versão pública de contrato com ocultação de dados bancários e CPF para o portal da transparência.",
        dicas: "O documento original deve permanecer íntegro e restrito no repositório."
    },
    "7.12.6": {
        explicacao: "Possibilitar a ocultação de informação sigilosa no documento: retirada de páginas, retângulos opacos (tarjas) sem possibilidade de visualização ou recuperação sob qualquer manipulação.",
        implementacao: "Processamento gráfico que renderiza e queima as tarjas pretas diretamente no bitmap/vetor do PDF, expurgando o texto subjacente.",
        exemplo: "Aplicação de tarja preta sobre o endereço de testemunha protegida, eliminando a camada de texto oculta.",
        dicas: "Nunca utilize sobreposição de retângulos simples em PDF sem remover o texto digital por baixo."
    },
    "7.12.7": {
        explicacao: "Ao produzir cópia truncada, registrar a ação nos metadados do documento original e da cópia: data, hora, motivo e responsável.",
        implementacao: "Associação nos metadados vinculando a cópia truncada ao documento pai com justificativa do tarjamento.",
        exemplo: "Metadado grava: 'Cópia truncada gerada em 10/05/2024 por João para atendimento a pedido LAI nº 45'.",
        dicas: "Mantenha a rastreabilidade entre o documento completo e sua versão pública."
    },
    "7.12.8": {
        explicacao: "É altamente desejável registrar referência cruzada à cópia truncada nos mesmos processos em que se encontra o documento original.",
        implementacao: "Vínculo no processo exibindo: `Documento nº 15 (Original - Restrito)` e `Documento nº 15.1 (Cópia Pública Truncada)`.",
        exemplo: "Usuários com acesso comum visualizam a cópia truncada; usuários credenciados acessam o original.",
        dicas: "Facilite a gestão das versões controlando o acesso por perfil."
    },
    "7.12.9": {
        explicacao: "O SIGAD tem que armazenar na trilha de auditoria qualquer alteração efetuada para satisfazer os requisitos de anulação, correção e truncamento.",
        implementacao: "Log detalhado de todas as operações de tarjamento, retificação de metadados e cancelamento de atos.",
        exemplo: "Auditoria registra a criação da cópia truncada e a retificação de metadados com todos os detalhes.",
        dicas: "Garante a comprovação da legalidade e conformidade de todo o processo de tratamento de dados."
    },

    // =========================================================================
    // ===== CAPÍTULO 8 - PRESERVAÇÃO =====
    // =========================================================================

    // --- 8.1 Aspectos físicos ---
    "8.1.1": {
        explicacao: "Os suportes de armazenamento do SIGAD têm que ser acondicionados, manipulados e utilizados em condições ambientais compatíveis com sua vida útil prevista.",
        implementacao: "Diretrizes e controles físicos de Data Center: controle de climatização (temperatura entre 18°C e 22°C, umidade relativa entre 40% e 50%) e nobreaks.",
        exemplo: "Monitoramento ambiental contínuo na sala de servidores e cofre de fitas magnéticas.",
        dicas: "Instale sensores ambientais integrados a alertas automáticos de temperatura e umidade."
    },
    "8.1.2": {
        explicacao: "É altamente desejável que o SIGAD permita ao administrador especificar a vida útil prevista e pretendida dos suportes de armazenamento.",
        implementacao: "Módulo de inventário de hardware e mídias no SIGAD com campos para data de fabricação, data de ativação e vida útil estimada em anos.",
        exemplo: "Cadastro de storage SSD com vida útil estimada pelo fabricante de 5 anos.",
        dicas: "Baseie as estimativas em laudos técnicos de órgãos independentes e recomendações dos fabricantes."
    },
    "8.1.3": {
        explicacao: "O SIGAD tem que permitir o controle da vida útil dos suportes para auxiliar a implementação da estratégia de atualização de suportes (refreshing).",
        implementacao: "Painel de controle de obsolescência física de mídias calculando tempo restante de operação segura de cada disco/fita.",
        exemplo: "O sistema indica que as fitas magnéticas do lote 2019 atingiram 5 anos de uso e devem ser regravadas.",
        dicas: "Programe a migração de mídia antes de atingir 80% do tempo de vida útil previsto."
    },
    "8.1.4": {
        explicacao: "É altamente desejável que o SIGAD informe automaticamente quais são os suportes cuja vida útil se encontra próxima do fim.",
        implementacao: "Gatilhos temporais que disparam alertas visuais e notificações aos administradores 6 meses antes da expiração da mídia.",
        exemplo: "Alerta: 'Atenção: O storage primário atingirá o limite de vida útil em 90 dias. Planeje a substituição'.",
        dicas: "Evite perdas catastróficas com monitoramento proativo da idade do hardware."
    },

    // --- 8.2 Aspectos lógicos ---
    "8.2.1": {
        explicacao: "O SIGAD tem que manter cópias de segurança guardadas em ambientes seguros e em locais diferentes de onde se encontra a informação original.",
        implementacao: "Rotinas de backup automatizadas com replicação externa para Data Center secundário ou nuvem segura.",
        exemplo: "Cópia diária de segurança dos documentos mantida em cofre externo a 50 km de distância da sede.",
        dicas: "Siga a regra 3-2-1 de backup (3 cópias, 2 mídias diferentes, 1 cópia externa)."
    },
    "8.2.2": {
        explicacao: "O SIGAD tem que possuir funcionalidades para verificação periódica dos dados e documentos armazenados (scrubbing), detectando possíveis erros ou corrupções.",
        implementacao: "Rotina periódica de integridade (Fixity Check) que recalcula o hash SHA-256 de todos os arquivos e compara com o valor original.",
        exemplo: "Verificação mensal recalcula o hash de 500.000 arquivos e confirma 100% de integridade.",
        dicas: "Utilize checksums criptográficos robustos para detectar degradação de bits (bit rot)."
    },
    "8.2.3": {
        explicacao: "O SIGAD tem que permitir a substituição dos dados e documentos armazenados que apresentarem erros ou corrupção.",
        implementacao: "Rotina de recuperação que restaura automaticamente o arquivo danificado a partir da cópia de segurança íntegra.",
        exemplo: "Identificado bloco corrompido em um PDF, o sistema restaura a cópia idêntica do backup e registra a correção.",
        dicas: "Mantenha múltiplas cópias íntegras para garantir a restauração imediata."
    },
    "8.2.4": {
        explicacao: "O SIGAD pode permitir a correção de erros detectados nos dados e documentos armazenados (restauração de dados corrompidos).",
        implementacao: "Ferramentas automáticas de restauração baseadas em paridade RAID ou blocos de redundância (ZFS/BTRFS self-healing).",
        exemplo: "O sistema de arquivos ZFS detecta erro de leitura em um bloco e reconstrói o arquivo automaticamente a partir do espelho.",
        dicas: "Monitore logs do sistema de arquivos para identificar falhas físicas incipientes em discos."
    },
    "8.2.5": {
        explicacao: "É altamente desejável que o SIGAD informe os resultados da verificação periódica dos dados, incluindo erros detectados e correções realizadas.",
        implementacao: "Relatório e painel de controle de fixidade exibindo total de arquivos checados, status de integridade e correções.",
        exemplo: "Relatório mensal: '100.000 arquivos verificados, 0 inconsistências detectadas em 01/05/2024'.",
        dicas: "Envie alertas imediatos para a equipe de preservação digital caso algum hash divirja."
    },
    "8.2.6": {
        explicacao: "É altamente desejável manter um histórico permanente dos resultados de todas as verificações periódicas de integridade realizadas.",
        implementacao: "Tabela de histórico de eventos de fixidade (`earq.ePres.tipo: VerificacaoDeFixidade`) com registro de cada checagem.",
        exemplo: "Histórico do documento comprova que seu hash permaneceu inalterado em todas as checagens realizadas desde 2018.",
        dicas: "Esse histórico é prova essencial para auditorias e presunção de autenticidade no longo prazo."
    },
    "8.2.7": {
        explicacao: "Ações de preservação (migração de formatos, atualização de suporte) têm que ser efetivadas sempre que a obsolescência tecnológica se tornar patente ou previsível.",
        implementacao: "Plano de preservação digital com monitoramento de formatos obsoletos e rotinas de conversão em lote para novos formatos abertos.",
        exemplo: "Conversão em lote de documentos legados em formato `.doc` (Word 97) para o padrão de preservação `PDF/A-1b`.",
        dicas: "Execute a conversão antes que os visualizadores do formato antigo deixem de funcionar no mercado."
    },
    "8.2.8": {
        explicacao: "O SIGAD tem que suportar a transferência em bloco de documentos e seus metadados para outros suportes ou sistemas, de acordo com as normas dos formatos utilizados.",
        implementacao: "Exportador em lote com empacotamento aberto (ZIP/METS) garantindo a migração sem aprisionamento tecnológico (vendor lock-in).",
        exemplo: "Migração de 2 milhões de documentos do storage legado para uma nova infraestrutura de nuvem sem perda de metadados.",
        dicas: "Adote formatos padronizados para garantir a portabilidade total do acervo."
    },

    // --- 8.3 Aspectos gerais ---
    "8.3.1": {
        explicacao: "O SIGAD tem que registrar em trilhas de auditoria todas as operações de preservação realizadas (conversões, checagens de hash, migrações).",
        implementacao: "Gravação de eventos de preservação (`earq.ePres.tipo`) com detalhes do software conversor, versão, data/hora e responsável.",
        exemplo: "Auditoria registra a conversão de formato de imagem TIFF para PDF/A realizada pelo software conversor v2.1.",
        dicas: "A comprovação técnica da cadeia de custódia na migração é indispensável para a validade jurídica dos novos formatos."
    },
    "8.3.2": {
        explicacao: "É altamente desejável que o SIGAD utilize suportes de armazenamento e recursos de hardware e software maduros, estáveis no mercado e amplamente disponíveis.",
        implementacao: "Seleção de tecnologias consolidadas (PostgreSQL, Linux, storages corporativos, formatos abertos de ampla adoção).",
        exemplo: "Opção pelo SGBD PostgreSQL e sistemas de arquivos amplamente testados em vez de soluções proprietárias experimentais.",
        dicas: "Evite tecnologias de nicho ou sem suporte técnico continuado no mercado."
    },
    "8.3.3": {
        explicacao: "Modificações no SIGAD e na base tecnológica têm que ser verificadas em ambiente exclusivo de testes, garantindo que os dados continuem sendo acessados sem alteração de conteúdo.",
        implementacao: "Ambiente de homologação (Staging) idêntico ao de produção para validação de atualizações de versão antes do deploy.",
        exemplo: "Atualização de versão do banco de dados é testada em homologação durante 15 dias antes de ir para produção.",
        dicas: "Execute baterias de testes automatizados de regressão e integridade de leitura de documentos antigos."
    },
    "8.3.4": {
        explicacao: "É altamente desejável que o SIGAD utilize normas amplamente aceitas e especificações abertas públicas para codificação, armazenamento e banco de dados.",
        implementacao: "Adoção de padrões ISO/ABNT (ISO 15489, ISO 14721/OAIS, PDF/A ISO 19005, SQL ANSI, XML/JSON).",
        exemplo: "Uso de codificação de caracteres UTF-8 e armazenamento de metadados em esquemas abertos XML/JSON.",
        dicas: "A aderência a normas abertas assegura a perenidade dos dados através das décadas."
    },
    "8.3.5": {
        explicacao: "É altamente desejável evitar o uso de estruturas proprietárias para codificação, armazenamento ou banco; caso utilizadas, devem estar plenamente documentadas para o administrador.",
        implementacao: "Priorização de código aberto e formatos públicos; documentação detalhada de esquemas e APIs de eventuais componentes fechados.",
        exemplo: "Disponibilização do dicionário de dados completo e diagramas de entidade-relacionamento (DER) para a equipe técnica.",
        dicas: "Garanta que a instituição nunca fique dependente de um único fornecedor de software para acessar seus próprios documentos."
    },
    "8.3.6": {
        explicacao: "O SIGAD tem que gerir metadados relativos à preservação dos documentos e de seus respectivos componentes digitais conforme o esquema do e-ARQ Brasil.",
        implementacao: "Mapeamento e persistência de todas as entidades de eventos de preservação (`earq.ePres.*`: fixidade, software de criação, tamanho, formato, eventos de migração).",
        exemplo: "Gravação completa dos metadados de preservação PREMIS para cada arquivo anexado a processos.",
        dicas: "A gestão ativa de metadados de preservação garante que documentos digitais permaneçam autênticos, inteligíveis e acessíveis pelo tempo que for necessário."
    }
};
