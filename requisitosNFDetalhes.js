// requisitosNFDetalhes.js
const detalhesRequisitosNF = {
    // ===== CAPÍTULO 9 - ARMAZENAMENTO =====
    "9.1.1": {
        explicacao: "O SIGAD deve usar tecnologias de armazenamento bem estabelecidas e confiáveis, preferindo padrões abertos (ex: sistemas de arquivos comuns, bancos de dados populares). Isso garante que os dados possam ser acessados mesmo se o fornecedor original mudar ou sair do mercado. Dispositivos maduros têm maior comunidade de suporte e menores riscos de obsolescência.",
        implementacao: "Escolher sistemas de arquivos como EXT4, NTFS, XFS. Para bancos de dados, optar por PostgreSQL, MySQL ou equivalentes. Evitar soluções proprietárias ou experimentais para dados críticos. Manter um catálogo de fornecedores consolidados.",
        exemplo: "Usar discos rígidos de marcas consolidadas (ex: Seagate, Western Digital) com padrões SATA/SAS amplamente adotados. Usar PostgreSQL 15+ para gestão de metadados.",
        dicas: "Documente todas as escolhas tecnológicas. Tenha um plano de migração para substituir dispositivos obsoletos. Realize testes de compatibilidade antes de adotar novas versões."
    },
    "9.1.2": {
        explicacao: "A tecnologia de armazenamento evolui rapidamente. O SIGAD deve reavaliar periodicamente seus dispositivos de armazenamento e planejar substituições proativas para evitar que os dados fiquem em hardware/software incompatível ou sem suporte.",
        implementacao: "Criar um cronograma de revisão tecnológica (ex: a cada 2 anos). Avaliar novas tecnologias (SSDs, NVMe, armazenamento em nuvem). Planejar migrações com antecedência quando tecnologias mostrarem sinais de obsolescência.",
        exemplo: "SSDs estão substituindo HDs magnéticos por maior velocidade. Planejar migração gradual para SSDs em 2025.",
        dicas: "Acompanhe o mercado e tendências. Participe de comunidades e fóruns. Considere um laboratório de testes para novas tecnologias."
    },
    "9.1.3": {
        explicacao: "Quando uma tecnologia de armazenamento ou padrão está ficando obsoleto, o SIGAD deve realizar migrações preventivas dos dados para novas tecnologias antes que o antigo padrão se torne inacessível. Isso preserva o acesso aos documentos.",
        implementacao: "Implementar políticas de migração com cronograma definido. Usar ferramentas de migração automatizada. Validar a migração (integridade dos dados). Manter logs de todas as migrações.",
        exemplo: "Migrar fitas magnéticas DLT (obsoletas) para armazenamento em nuvem S3, antes que os leitores de fita fiquem indisponíveis.",
        dicas: "Planeje migrações fora do horário de pico. Faça backups antes da migração. Teste a migração em ambiente de homologação primeiro."
    },
    "9.1.4": {
        explicacao: "Para discos rígidos (memória secundária), o SIGAD deve registrar o MTBF (tempo médio entre falhas) fornecido pelo fabricante e a data de aquisição. Isso ajuda a prever quando os dispositivos podem falhar e planejar substituições.",
        implementacao: "Criar inventário de dispositivos com campos: tipo, modelo, data_aquisição, MTBF, horas_uso. Calcular previsão de vida útil (MTBF x horas/dia). Gerar alertas quando próximo do MTBF estimado.",
        exemplo: "HD Serial XYZ123, adquirido em 2023-01-15, MTBF = 1.500.000 horas (~171 anos), data_atual = 2024, uso estimado = 8.760 horas/ano. Vida útil prevista ~171 anos (teórico, mas na prática ~5 anos por obsolescência).",
        dicas: "Use o MTBF como referência, mas considere também a data de fabricação e o desgaste real. Monitore SMART dos HDs para detecção precoce de falhas."
    },
    "9.1.5": {
        explicacao: "Para fitas magnéticas e discos ópticos (memória terciária), o SIGAD deve gerenciar cada mídia individualmente, registrando: vida útil prevista pelo fabricante, data de aquisição e histórico de uso (quantas vezes foi lida/escrita). Isso permite substituir mídias antes que falhem.",
        implementacao: "Sistema de inventário de mídias com status: em_uso, reserva, descartada. Registrar cada operação de leitura/escrita. Calcular vida útil baseada em ciclos de uso e tempo desde fabricação.",
        exemplo: "Fita LTO-7 #A1001, adquirida em 2024-01-01, vida útil prevista = 30 anos ou 1.000 leituras, 250 gravações. Usada 50 vezes. Próxima substituição prevista para 2034 ou quando atingir 1.000 leituras.",
        dicas: "Use código de barras ou RFID para identificar mídias. Programe verificações periódicas (ex: a cada 6 meses) para testar legibilidade."
    },
    "9.1.6": {
        explicacao: "Além da vida útil prevista pelo fabricante, é importante registrar a durabilidade que está sendo observada na prática. Isso pode revelar problemas específicos do ambiente ou padrões de desgaste diferentes do esperado.",
        implementacao: "Criar campo 'data_falha_observada' e 'motivo'. Calcular média de vida útil observada. Comparar com o previsto e ajustar planejamento. Gerar relatórios de durabilidade por fabricante/modelo.",
        exemplo: "Fabricante A: vida útil prevista = 30 anos, observada em média = 18 anos. Fabricante B: prevista = 25 anos, observada = 24 anos. Considerar substituir todas do fabricante A mais cedo.",
        dicas: "Solicite relatórios de fornecedores sobre durabilidade real. Participe de grupos de usuários para troca de experiências sobre vida útil."
    },
    "9.1.7": {
        explicacao: "Para economizar vida útil das mídias removíveis (fitas, discos ópticos), o acesso deve ser feito preferencialmente via rede, não por manipulação física direta. Cada vez que uma mídia é tocada/manipulada, há risco de dano e desgaste.",
        implementacao: "Usar bibliotecas de fitas com robôs que acessam as mídias automaticamente. Configurar acesso remoto via rede. Restringir acesso físico apenas a administradores. Registrar cada acesso/manipulação.",
        exemplo: "Solicitação de recuperação de arquivo em fita: robô localiza a fita, insere no leitor, transfere dados via rede. Nenhum operador toca fisicamente na fita.",
        dicas: "Use sistemas de bibliotecas de fitas (ex: Qualstar, IBM). Configure leitores com acesso via SAN/NAS. Mantenha estoque de fitas de reserva."
    },
    "9.1.8": {
        explicacao: "Quando documentos são eliminados, os dados devem ser completamente destruídos/inacessíveis (sanitização). Para discos rígidos, isso significa sobrescrever os dados múltiplas vezes ou destruir fisicamente o disco. Para fitas, pode-se desmagnetizar ou destruir a fita. Isso evita recuperação por terceiros.",
        implementacao: "Criar procedimentos de sanitização por tipo de mídia (HD: DBAN, DoD 5220.22-M, ou trituração física; Fita: desmagnetizador; SSD: comando ATA Secure Erase; Óptico: trituração). Registrar procedimento e responsável.",
        exemplo: "HD de servidor descomissionado: removido, colocado em triturador industrial, certificado de destruição emitido. Fita LTO: passada por desmagnetizador de 10.000 gauss, certificado gerado.",
        dicas: "Contrate empresas especializadas em destruição de dados (ex: Shred-it). Guarde certificados de destruição por 5 anos. Para discos com dados sensíveis, considere trituração física."
    },
    "9.2.1": {
        explicacao: "O sistema deve ter espaço de armazenamento suficiente para todos os documentos e suas cópias de segurança, com margem para crescimento. Para grandes volumes, é melhor usar menos dispositivos de maior capacidade para simplificar o gerenciamento.",
        implementacao: "Calcular capacidade necessária com base: volume atual x taxa de crescimento projetada (ex: 20% ao ano) + margem de segurança (30%). Escolher dispositivos com alta capacidade (ex: HDs de 12TB+).",
        exemplo: "Volume atual = 5TB, crescimento anual = 2TB. Em 5 anos: 15TB. Adicionar 30% margem = 19.5TB. Usar 4 HDs de 12TB (RAID 5 = 36TB brutos, 24TB utilizáveis).",
        dicas: "Monitore o crescimento real e ajuste as projeções. Considere tiers de armazenamento (quente/frio/arquivo) para otimizar custos."
    },
    "9.2.2": {
        explicacao: "O sistema deve poder expandir o armazenamento à medida que o acervo cresce. Memória RAM deve ser superestimada na compra para não ter que interromper o sistema para upgrade. Para backups em fita, use sistemas automáticos (robôs) que trocam fitas sem intervenção manual.",
        implementacao: "Projetar com expansibilidade: servidores com slots de RAM adicionais, bays para HDs extras, controladoras RAID com portas para expansão. Para backups: usar bibliotecas de fitas com robôs (ex: até 100 fitas) para sistemas grandes.",
        exemplo: "Servidor inicial: 64GB RAM, 6 HDs RAID. Planejado para expansão: até 256GB RAM, 12 HDs. Sistema de backup: biblioteca com 50 fitas (50TB) + robô automático.",
        dicas: "Escolha hardware com módulos hot-swap (permite troca sem desligar). Planeje a vida útil de cada componente. Mantenha estoque de peças para expansão."
    },
    "9.2.3": {
        explicacao: "O administrador deve poder definir limites de uso para cada dispositivo de armazenamento (ex: 85% de uso máximo). Isso ajuda a planejar expansões antes que o espaço acabe.",
        implementacao: "Permitir configurar alertas percentuais (ex: 70%, 80%, 90%) e ações automáticas (ex: enviar email ao admin). Mostrar dashboard com capacidade atual de cada dispositivo.",
        exemplo: "Disco D: 80% ocupado (sistema envia alerta). Admin compra novo HD com 30 dias de antecedência, evitando indisponibilidade.",
        dicas: "Configure alertas para níveis diferentes (70% = atenção, 85% = crítico, 95% = emergência). Mantenha histórico para planejamento."
    },
    "9.2.4": {
        explicacao: "O administrador deve poder monitorar facilmente a capacidade de armazenamento em uso, disponível e taxa de ocupação. Isso auxilia no planejamento de expansão e evita surpresas.",
        implementacao: "Dashboard com gráficos: capacidade total, usada, livre, tendência de crescimento. Permitir filtrar por dispositivo. Incluir previsão de quando o espaço vai acabar.",
        exemplo: "Dashboard mostra: 'Disco A - 65% usado, 35% livre. Projeção: 100% em 18 meses'. Admin planeja compra de novos HDs para daqui a 12 meses.",
        dicas: "Use cores: verde (<70%), amarelo (70-85%), vermelho (>85%). Exporte relatórios para planejamento."
    },
    "9.2.5": {
        explicacao: "Alertas automáticos devem ser enviados ao administrador quando dispositivos de armazenamento on-line (acesso imediato) atingirem níveis críticos de ocupação, como 85% ou 90%, para evitar falta de espaço.",
        implementacao: "Integrar sistema de monitoramento (ex: Zabbix, Nagios) ou implementar scheduler que verifica capacidade periodicamente. Enviar notificações por email, SMS ou Telegram.",
        exemplo: "Disco de produção atingiu 90% às 14:00. Admin recebe email: 'ALERTA: Disco D: 90% ocupado. Previsão de esgotamento em 15 dias.'",
        dicas: "Configure múltiplos níveis de alerta. Defina responsáveis de plantão para emergências. Tenha um plano de contingência para esgotamento."
    },
    "9.2.6": {
        explicacao: "Manter estatísticas históricas da taxa de crescimento do uso de armazenamento permite prever quando o espaço vai acabar, auxiliando no planejamento proativo de expansões.",
        implementacao: "Registrar uso diário/semanal/mensal. Calcular taxas de crescimento. Projetar curva de tendência (linear, exponencial). Gerar relatório 'Previsão de esgotamento'.",
        exemplo: "Registro mensal: Jan/2024 = 2TB, Fev = 2.1TB, Mar = 2.2TB, ... Crescimento = 0.1TB/mês. Previsão: em 10 meses, 3TB adicionais necessários.",
        dicas: "Use técnicas de machine learning para previsões mais precisas. Considere sazonalidade (ex: mais documentos em épocas de relatórios)."
    },
    "9.3.1": {
        explicacao: "Os dispositivos de armazenamento devem suportar métodos de detecção de erros (checksums, ECC) para identificar quando dados foram corrompidos durante leitura ou escrita. Isso permite detectar problemas antes que causem perda de dados.",
        implementacao: "Usar sistemas de arquivos com checksum (ex: ZFS, BTRFS) ou RAID com ECC. Configurar verificações periódicas de consistência (scrubbing). Registrar erros detectados.",
        exemplo: "ZFS detecta que um bloco de dados está corrompido (checksum inválido) e automaticamente recupera de outro disco (RAID).",
        dicas: "Monitore logs de erros. Programe scrubbing mensal. Mantenha backup mesmo com detecção de erros."
    },
    "9.3.2": {
        explicacao: "O SIGAD deve usar técnicas para restaurar dados automaticamente quando erros são detectados, como recuperação via RAID, reconstrução de dados ou cópias.",
        implementacao: "Usar RAID 5/6 para tolerância a falhas. Implementar replicação síncrona/assíncrona. Usar sistemas de arquivos com auto-recuperação (ex: ZFS).",
        exemplo: "HD em RAID 6 falha. Sistema detecta, usa dados de paridade para reconstruir em tempo real. Admin substitui HD sem perder dados.",
        dicas: "Teste a recuperação periodicamente (ex: simular falha de HD). Tenha procedimentos documentados para recuperação manual."
    },
    "9.3.3": {
        explicacao: "Os dados armazenados devem ser protegidos contra escrita indevida, seja por erro de software, ataque malicioso ou falha de hardware. Mecanismos como permissões de sistema de arquivos e imutabilidade devem ser implementados.",
        implementacao: "Usar permissões de sistema de arquivos (ex: chmod, chown). Implementar proteção WORM (Write Once Read Many) para documentos arquivísticos. Usar selos de integridade.",
        exemplo: "Documento arquivístico em diretório 'arquivo_permanente' - somente leitura para usuários comuns, apenas admins podem modificar (com registro).",
        dicas: "Use recursos como 'immutable flag' do Linux (chattr +i). Mantenha backups separados para recuperação em caso de falha de proteção."
    },
    "9.3.4": {
        explicacao: "A infraestrutura de armazenamento deve usar técnicas que melhorem confiabilidade e desempenho: espelhamento (mirroring) aumenta confiabilidade duplicando dados em discos diferentes; partição de dados (stripping) melhora desempenho distribuindo dados entre vários discos.",
        implementacao: "Configurar RAID: RAID 1 para sistemas críticos (confiabilidade), RAID 5/6 para bom equilíbrio, RAID 10 para alta performance. Documentar configuração.",
        exemplo: "Sistema crítico: RAID 1 (2 HDs espelhados) - se um falha, outro continua. Banco de dados: RAID 10 (4 HDs striping+mirror) - alta performance e confiabilidade.",
        dicas: "Considere custo x benefício. Monitorar saúde dos discos (SMART). Ter discos de reserva (hot spare)."
    },
    "9.3.5": {
        explicacao: "A integridade dos dispositivos de armazenamento deve ser verificada periodicamente para detectar problemas (ex: setores defeituosos, deterioração, corrupção) antes que causem perda de dados.",
        implementacao: "Programar verificações (ex: weekly). Usar ferramentas como SMART, fsck, ZFS scrubbing. Gerar relatórios e alertas. Documentar resultados.",
        exemplo: "Verificação mensal revela que HD #3 tem 500 setores defeituosos. Admin substitui HD antes que falhe completamente.",
        dicas: "Verifique a integridade dos backups também. Mantenha histórico de verificações para identificar degradação."
    },
    // ===== CAPÍTULO 10 - FUNÇÕES ADMINISTRATIVAS =====
    "10.1.1": {
        explicacao: "Os administradores devem poder gerenciar o sistema facilmente, incluindo recuperar configurações, visualizar status, e reconfigurar parâmetros (ex: limites de usuários, políticas de segurança, integrações) sem precisar de ferramentas complexas ou scripts manuais.",
        implementacao: "Criar painel administrativo com: listagem de usuários, configurações de sistema, logs de atividades, estatísticas. Permitir edição centralizada de parâmetros. Interfaces intuitivas com validação.",
        exemplo: "Admin acessa 'Configurações > Segurança' e altera o tempo de expiração de senha de 90 para 60 dias em poucos cliques.",
        dicas: "Seguir princípios de UX (usabilidade) mesmo para interfaces administrativas. Documente todas as funções. Ofereça busca e filtros."
    },
    "10.1.2": {
        explicacao: "Relatórios administrativos para gestão documental: quantos dossiês/processos existem, volumes, documentos; com filtros por tempo, classe, unidade; estatísticas de transações (criação, modificação, acesso); atividades por usuário. Essencial para gestão e planejamento.",
        implementacao: "Módulo de relatórios com: painéis, gráficos, exportação (Excel, PDF). Filtros: data, tipo, classe, usuário. Métricas: total de documentos, taxas de crescimento, acessos, trâmites.",
        exemplo: "Relatório mensal: 1.500 novos documentos, 20 novos processos, 1.200 consultas. Classe mais usada: 021.1. Crescimento: 8% vs mês anterior. 50 usuários ativos.",
        dicas: "Disponibilize relatórios pré-configurados e permita customização. Agende relatórios para envio automático. Use ferramentas como JasperReports ou Metabase."
    },
    "10.1.3": {
        explicacao: "O SIGAD deve ter documentação completa de administração, incluindo: instalação, configuração, operação, manutenção, backup, recuperação, troubleshooting. Essencial para suporte e continuidade.",
        implementacao: "Criar manual de administração (online e PDF). Incluir: arquitetura, configuração, procedimentos, scripts, políticas, contatos de suporte. Manter atualizado.",
        exemplo: "Manual de administração com capítulos: 'Instalação inicial', 'Configuração de usuários', 'Agendamento de backups', 'Recuperação após falha', 'FAQ de troubleshooting'.",
        dicas: "Use plataformas como Confluence ou GitBook. Inclua vídeos tutoriais. Mantenha histórico de mudanças na documentação."
    },
    // ===== CAPÍTULO 11 - CONFORMIDADE =====
    "11.1": {
        explicacao: "O SIGAD deve estar em conformidade com leis e normas para que os documentos tenham valor probatório (possam ser usados como prova em juízo). Isso inclui lei de arquivos, LGPD, ICP-Brasil, e-PING, entre outras.",
        implementacao: "Mapear todas as leis aplicáveis (federal, estadual, municipal, setorial). Implementar funcionalidades para atender cada uma (ex: assinatura digital, prazos de guarda, proteção de dados). Auditoria regular.",
        exemplo: "Atender à Lei 12.527 (Lei de Acesso à Informação) com funcionalidades de classificação de sigilo e transparência. Atender à LGPD com anonimização e controle de dados pessoais.",
        dicas: "Consulte assessoria jurídica. Mantenha-se atualizado sobre mudanças legislativas. Documente como cada requisito legal é atendido."
    },
    "11.2": {
        explicacao: "O sistema deve estar em conformidade com normas específicas para gestão e acesso de documentos arquivísticos, incluindo resoluções do CONARQ, normas ISO 15489, e padrões do SINAR.",
        implementacao: "Implementar funcionalidades que atendam: classificação documental, tabelas de temporalidade, eliminação autorizada, transferência/recolhimento, acesso controlado. Seguir padrões de metadados.",
        exemplo: "Atender à Resolução CONARQ nº 40 sobre eliminação de documentos: listagem, edital, termo de eliminação, autorização da autoridade arquivística.",
        dicas: "Participe de grupos de trabalho (ex: CONARQ). Consulte arquivistas experientes. Use o e-ARQ Brasil como guia principal."
    },
    "11.3": {
        explicacao: "Além das leis gerais, cada área tem regulamentações específicas (saúde, justiça, educação, previdência). O SIGAD deve ser configurável para atender a esses requisitos setoriais, como prazos de guarda diferenciados, metadados específicos, e restrições de acesso.",
        implementacao: "Tornar o sistema flexível com: campos de metadados configuráveis, tabelas de temporalidade personalizáveis, workflows adaptáveis, controles de acesso granulares.",
        exemplo: "Saúde: prontuários médicos precisam de prazos de guarda estendidos (20 anos) e sigilo absoluto. Educação: históricos escolares precisam de metadados específicos (matrícula, turma, notas).",
        dicas: "Consulte especialistas de cada área. Crie módulos ou configurações por área. Mantenha a flexibilidade para novos requisitos."
    },
    // ===== CAPÍTULO 12 - USABILIDADE =====
    "12.1.1": {
        explicacao: "A documentação do sistema (instalação, configuração, uso) deve ser completa, clara, bem organizada, e facilmente compreensível para diferentes níveis de usuários (administradores, usuários finais, arquivistas).",
        implementacao: "Criar documentação com: guia de instalação, manual do usuário, manual do administrador, glossário, perguntas frequentes, vídeos tutoriais. Estruturar por perfis de usuário.",
        exemplo: "Guia de instalação passo a passo com screenshots. Manual do usuário com seções: 'Como capturar um documento', 'Como pesquisar', 'Como criar um processo'.",
        dicas: "Use linguagem clara e acessível. Mantenha documentação online e atualizada. Permita feedback dos usuários sobre a documentação."
    },
    "12.1.2": {
        explicacao: "O sistema deve ter ajuda integrada (online) acessível de qualquer tela, com informações relevantes para a tarefa que o usuário está realizando no momento.",
        implementacao: "Implementar sistema de help contextual: botão '?' em cada tela; quando acionado, exibir ajuda específica daquela funcionalidade; com busca interna; com links para documentação completa.",
        exemplo: "Na tela de captura, usuário clica em 'Ajuda' e vê: 'Como capturar um documento: preencha os campos...' com video demonstrativo.",
        dicas: "Use tooltips para campos específicos. Ofereça vídeos curtos (1-2 minutos). Mantenha ajuda atualizada com novas funcionalidades."
    },
    "12.1.3": {
        explicacao: "A ajuda on-line deve ser sensível ao contexto: se o usuário está na tela de pesquisa, a ajuda deve mostrar tópicos sobre pesquisa. Se está na tela de captura, tópicos sobre captura. Isso torna a ajuda mais útil e rápida.",
        implementacao: "Mapear cada tela/função a um tópico de ajuda. Usar parâmetros para exibir a ajuda correta. Incluir atalho de teclado (ex: F1).",
        exemplo: "Usuário na tela de 'Classificação' pressiona F1 → abre ajuda explicando como classificar documentos, com exemplos. Usuário na tela de 'Relatórios' pressiona F1 → abre ajuda sobre tipos de relatórios disponíveis.",
        dicas: "Use um sistema de gerenciamento de conteúdo para facilitar atualização. Permita que administradores personalizem a ajuda."
    },
    "12.1.4": {
        explicacao: "Administradores devem poder adicionar ou editar o conteúdo da ajuda, permitindo personalizações específicas da instituição (ex: procedimentos internos, contatos de suporte interno, exemplos próprios).",
        implementacao: "Interface de administração da ajuda com: adição de novos tópicos, edição de tópicos existentes, versionamento, aprovação de alterações. Editor WYSIWYG.",
        exemplo: "Organização adiciona tópico de ajuda: 'Procedimento interno para captura de documentos de RH' com instruções específicas, telas personalizadas e contato do setor de RH.",
        dicas: "Documente as alterações. Permita apenas admins autorizados. Mantenha um backup da ajuda original."
    },
    "12.1.5": {
        explicacao: "Mensagens de erro devem ser claras e úteis, explicando o que deu errado e como o usuário pode corrigir (ex: 'Campo obrigatório não preenchido: Autor' em vez de apenas 'Erro 500'). Mensagens vagas frustram o usuário.",
        implementacao: "Criar um sistema de mensagens de erro com: mensagem amigável, sugestão de ação, código de erro (para suporte). Evitar termos técnicos confusos. Mostrar a mensagem de forma visível.",
        exemplo: "Mensagem boa: 'O campo 'Autor' é obrigatório. Por favor, preencha com o nome do autor antes de salvar.' Mensagem ruim: 'Erro: SQL-1204'.",
        dicas: "Considere a experiência do usuário ao escrever mensagens. Faça testes com usuários reais. Mantenha um glossário de termos técnicos se necessário."
    },
    "12.1.6": {
        explicacao: "A interface deve seguir padrões de design já consolidados e conhecidos (ex: material design), com identidade visual consistente (cores, fontes, posições de elementos). Isso reduz a curva de aprendizado e evita confusão.",
        implementacao: "Definir um guia de estilo (style guide) com: paleta de cores, tipografia, componentes de UI (botões, formulários, tabelas), espaçamento. Utilizar frameworks (ex: Tailwind, Bootstrap) para consistência.",
        exemplo: "Todos os botões principais são azul escuro (#001e40) com texto branco, cantos arredondados e sombra. Todos os títulos usam fonte Public Sans. Todos os campos obrigatórios têm um asterisco (*).",
        dicas: "Siga padrões de acessibilidade (WCAG). Mantenha a identidade visual institucional. Use ferramentas como Figma para definir o design system."
    },
    "12.1.7": {
        explicacao: "O sistema deve usar regras de interface simples e consistentes (ex: sempre usar o mesmo ícone para a mesma função, mesma posição para ações comuns). Isso facilita o aprendizado e a memorização das operações.",
        implementacao: "Definir e documentar regras de interface: por exemplo, 'Todos os botões de ação primária (Salvar, Criar) são azuis', 'Ícone de + sempre significa criar novo', 'Menu de navegação sempre à esquerda'.",
        exemplo: "Em todas as telas, o botão 'Salvar' está no canto inferior direito. O ícone de 'pesquisa' sempre na barra superior. O menu principal sempre com os mesmos itens.",
        dicas: "Evite mudanças radicais de interface sem treinamento. Use os mesmos termos em todo o sistema. Faça testes de usabilidade para validar a consistência."
    },
    "12.1.8": {
        explicacao: "Facilidade de interação: permitir arrastar e soltar arquivos para upload, ou mover documentos entre pastas. Isso torna a operação mais natural e rápida.",
        implementacao: "Implementar drag-and-drop: suporte a múltiplos arquivos, feedback visual (área destacada), barra de progresso, validação (tamanho, tipo), botão para upload tradicional (fallback).",
        exemplo: "Usuário arrasta 10 PDFs de uma pasta do Windows para a área de captura do SIGAD. O sistema lista os arquivos, exibe preview, e permite capturar todos de uma vez.",
        dicas: "Ofereça suporte a touch (móvel). Mostre ícones de tipo de arquivo. Permita reordenar via drag-and-drop também."
    },
    "12.1.9": {
        explicacao: "Permitir visualizar a estrutura de classes e dossiês/processos em diferentes formatos (ex: árvore hierárquica, lista, visualização em grade, mapa conceitual). Isso atende diferentes preferências de usuários e tipos de consulta.",
        implementacao: "Oferecer opções de visualização: tree view (clássico), lista (tabela com filtros), cards (visualização mais visual), mapa (visualização conceitual). Sincronizar seleção entre visualizações.",
        exemplo: "Arquivista prefere tree view para entender hierarquia. Administrador prefere lista para análises em massa. Pesquisador prefere mapa conceitual para navegação por assuntos.",
        dicas: "Mantenha o estado da visualização selecionada. Use animações para transições. Permita salvar visualizações personalizadas."
    },
    "12.1.10": {
        explicacao: "Os usuários devem poder personalizar a interface para seu gosto e necessidades: organização de menus, cores, fontes, tamanhos, funções de teclas, sons. Isso melhora a satisfação e produtividade.",
        implementacao: "Painel de configurações de interface: temas (claro/escuro), tamanho da fonte, atalhos de teclado (configuráveis), sons (ativar/desativar, volume), visibilidade de elementos (ex: ocultar colunas). Salvar per-sistema ou per-usuário.",
        exemplo: "Arquivista: tema claro, fonte grande, menu 'Captura' destacado. Usuário administrativo: tema escuro, barra de ferramentas personalizada com funções de gestão.",
        dicas: "Ofereça opções de acessibilidade (ex: alto contraste). Permita reverter ao padrão (reset). Use cookies/localStorage para persistência."
    },
    "12.1.11": {
        explicacao: "Permitir configurar janelas pop-up e barras de ferramentas: ativar/desativar, posicionar, tamanho. Isso evita sobrecarga visual para usuários que preferem uma interface mais limpa.",
        implementacao: "Cada janela/toolbar com opções: mostrar/ocultar, minimizar, maximizar, fechar. Salvar posições por usuário. Permitir resetar para posição padrão.",
        exemplo: "Usuário não gosta do pop-up de dicas que aparece sempre que faz captura. Desabilita essa função. Administrador remove algumas barras de ferramentas para simplificar a interface para iniciantes.",
        dicas: "Ofereça um tutorial inicial para mostrar todas as opções. Mantenha algumas barras essenciais sempre visíveis."
    },
    "12.1.12": {
        explicacao: "Janelas devem ser redimensionáveis e móveis, com a capacidade de salvar a aparência (posição, tamanho) por perfil de usuário. Isso permite que cada usuário organize seu workspace.",
        implementacao: "Cada janela com: bordas redimensionáveis (drag), cabeçalho móvel (drag), botões de minimizar/maximizar/fechar. Salvar posição e tamanho em localStorage. Reabrir na mesma posição.",
        exemplo: "Usuário coloca a janela de captura no canto superior direito e maximiza. Salva. Na próxima sessão, ao abrir captura, aparece no mesmo lugar e tamanho.",
        dicas: "Use bibliotecas de gerenciamento de janelas (ex: Golden Layout). Mantenha consistência com o sistema operacional."
    },
    "12.1.13": {
        explicacao: "O sistema deve permitir selecionar sons para diferentes eventos (ex: notificações, erros, conclusão de tarefa) e personalizar volume e tom. Isso personaliza a experiência sonora, útil para usuários com preferências específicas.",
        implementacao: "Catálogo de sons para eventos: sucesso, erro, notificação, alerta. Permitir selecionar som (ex: 'sucesso_01.wav'), ajustar volume (0-100%), testar som. Salvar preferências por usuário.",
        exemplo: "Usuário prefere som suave para notificações, mas quer som alto para alertas de erro. Escolhe sons diferentes para cada. Configura volume de notificações em 40%.",
        dicas: "Ofereça opção de desativar todos os sons. Use arquivos de áudio leves (ex: MP3). Considere acessibilidade para deficientes auditivos."
    },
    "12.1.14": {
        explicacao: "Permitir gravar valores padrão para campos frequentemente usados (ex: organização, usuário, data), e automaticamente sugerir esses valores em novas entradas. Isso agiliza o preenchimento e reduz erros.",
        implementacao: "Sistema de default values: campos podem ser preenchidos com: valor fixo (configurado pelo admin), valor derivado (ex: data atual, ID do usuário), valor do último registro, ou seleção de lista configurável.",
        exemplo: "Ao capturar documento, campo 'Organização' preenchido automaticamente com 'Ministério da Educação'. Campo 'Data de Captura' com data atual. Campo 'Unidade' com a última unidade usada pelo usuário.",
        dicas: "Permita edição dos defaults se necessário. Ofereça defaults por perfil de usuário. Documente os defaults na ajuda."
    },
    "12.1.15": {
        explicacao: "A interface deve ser acessível para pessoas com deficiência (visuais, motoras, auditivas, cognitivas) seguindo as diretrizes WCAG (Web Content Accessibility Guidelines). Isso inclui leitores de tela, navegação por teclado, alto contraste, texto redimensionável, legendas, etc.",
        implementacao: "Seguir WCAG 2.1 AA: contraste de cores (4.5:1), navegação por teclado (TAB, ENTER), labels em todos os campos (para leitores de tela), textos alternativos (alt) em imagens, legendas em vídeos, flexibilidade de zoom, remoção de barreiras.",
        exemplo: "Usuário cego usa leitor de tela (NVDA) que lê todos os textos e labels. Navega por TAB e ENTER. Pode acessar todas as funcionalidades. Usuário com baixa visão usa tema de alto contraste e zoom (200%).",
        dicas: "Use ferramentas de validação de acessibilidade (ex: WAVE, Axe). Faça testes com usuários reais. Documente as funcionalidades de acessibilidade."
    },
    "12.1.16": {
        explicacao: "As tarefas mais comuns (ex: capturar documento, pesquisar) devem ser realizadas com o mínimo de cliques e ações, sem necessidade de navegar por várias telas ou menus. Isso economiza tempo e esforço do usuário.",
        implementacao: "Analisar as tarefas mais comuns (top 5). Projetar fluxos curtos com ações diretas. Usar atalhos de teclado. Oferecer barra de ações rápidas. Minimizar mudanças de contexto.",
        exemplo: "Captura de documento: apenas 3 cliques: 1) clicar em 'Capturar' na barra, 2) selecionar arquivo, 3) confirmar. Sem sair da tela principal.",
        dicas: "Monitore o uso para identificar tarefas frequentes. Otimize continuamente. Ofereça atalhos de teclado para ações comuns."
    },
    "12.1.17": {
        explicacao: "Integração com o sistema de email corporativo para: enviar documentos como anexo, receber notificações, compartilhar links para documentos. Isso reduz a necessidade de alternar entre sistemas.",
        implementacao: "Configurar integração SMTP. Botão 'Enviar por Email' que abre novo email no cliente padrão com link/documento. Notificações por email (ex: 'Documento enviado para aprovação').",
        exemplo: "Usuário no SIGAD seleciona documento, clica em 'Compartilhar', sistema abre Outlook com link para o documento. Destinatário recebe link que pede autenticação para acessar.",
        dicas: "Respeite a política de segurança (não enviar documentos sigilosos por email sem criptografia). Use tokens para acesso temporário."
    },
    "12.1.18": {
        explicacao: "No compartilhamento via email, enviar apenas um link/referência para o documento, não o arquivo em si. Isso evita cópias não controladas e problemas de versionamento.",
        implementacao: "Gerar link único (token) com expiração para acesso controlado. O link não deve conter informações do documento no URL. Usar HTTPS para segurança.",
        exemplo: "Link enviado: https://sistema.arquivo.gov/access/xyz123 (token expira em 24h). Não é o arquivo real. O destinatário autentica e acessa a versão mais recente.",
        dicas: "Permita expiração configurável (1h, 24h, 7d). Registre quem acessou o link. Não envie senhas por email."
    },
    "12.1.19": {
        explicacao: "Integração com editores de documentos padrão (ex: Microsoft Word, LibreOffice) para que o usuário possa editar um documento e salvar de volta no SIGAD sem precisar de upload manual.",
        implementacao: "Para documentos editáveis: usar protocolos de integração (ex: WebDAV, APIs) ou plugins. Ao salvar, atualizar automaticamente a versão no SIGAD. Controlar check-in/check-out.",
        exemplo: "Usuário abre documento do SIGAD no Word, edita, salva (Ctrl+S). O SIGAD detecta a mudança e cria nova versão automaticamente, sem necessidade de upload manual.",
        dicas: "Implemente controle de versão automático. Bloqueie edição simultânea (check-out). Ofereça opção de salvar como nova versão ou substituir."
    },
    "12.1.20": {
        explicacao: "Pode ser útil usar OCR (reconhecimento óptico de caracteres) para extrair texto de imagens de documentos impressos, permitindo: busca no conteúdo, extração automática de metadados (ex: autor, data), e melhora da acessibilidade.",
        implementacao: "Integrar com ferramentas de OCR (ex: Tesseract, Google Vision). Ao capturar imagem (JPG, PNG, PDF escaneado), executar OCR. Armazenar texto extraído. Indexar para busca.",
        exemplo: "Usuário captura PDF escaneado de um ofício. Sistema executa OCR, extrai 'Ministério da Saúde', 'Ofício 123/2024', '10/03/2024'. Preenche metadados automaticamente.",
        dicas: "Use OCR apenas para imagens, não para documentos digitais nativos. Ofereça opção de revisão manual do OCR. Armazene o texto extraído separadamente do documento."
    },
    "12.1.21": {
        explicacao: "Permitir criar links (referências cruzadas) entre documentos relacionados, como entre um processo principal e seus anexos, ou entre documentos que tratam do mesmo assunto. Navegação fácil entre eles.",
        implementacao: "Adicionar campo 'Documentos Relacionados' que armazena IDs/referências. Criar hyperlinks com navegação. Mostrar lista de relacionamentos na visualização do documento.",
        exemplo: "Processo 'Contrato 2024-01' tem links para: 'Edital 2024-001' (link), 'Ata de Licitação 2024-003' (link), 'Ordem de Serviço 2024-05' (link). Usuário clica e navega.",
        dicas: "Limitar links para dentro do mesmo contexto (evitar links quebrados). Usar metadados para qualificar o tipo de relação (ex: 'é parte de', 'referencia')."
    },
    "12.1.22": {
        explicacao: "O SIGAD deve ter pelo menos dois perfis de acesso: um para usuário final (operações básicas: capturar, pesquisar, visualizar) e outro para administrador (todas as funções + gestão). Isso separa responsabilidades e segurança.",
        implementacao: "Implementar RBAC (Role-Based Access Control). Perfil padrão: USER (captura, pesquisa, visualização) e ADMIN (tudo). Permissões granulares dentro de cada perfil.",
        exemplo: "Administrador: pode criar classes, aprovar eliminação, gerenciar usuários, ver logs. Usuário final: apenas captura, pesquisa e visualização de documentos autorizados.",
        dicas: "Permita perfis intermediários (ex: GESTOR_DOCUMENTAL). Documente as permissões de cada perfil. Facilite a atribuição de perfis aos usuários."
    },
    "12.1.23": {
        explicacao: "Funções comuns (capturar, pesquisar, acessar) devem ser intuitivas, rápidas, e que qualquer usuário consiga fazer com poucos cliques, idealmente 3 ou menos. Isso reduz frustração e aumenta produtividade.",
        implementacao: "Medir tempo/cliques necessários para tarefas básicas. Otimizar interface: ações principais visíveis e acessíveis, atalhos de teclado, autocomplete, templates, botões de ação rápida.",
        exemplo: "Capturar: 3 cliques (botão Capturar > selecionar arquivo > confirmar). Pesquisar: 2 cliques (clicar no campo de busca > digitar ENTER). Visualizar: 2 cliques (buscar > clicar no resultado).",
        dicas: "Realize testes de usabilidade. Simplifique ao máximo. Ofereça treinamento e documentação."
    },
    "12.1.24": {
        explicacao: "Os usuários finais não devem ver ou acessar funcionalidades administrativas. Isso previne acessos indevidos, reduz sobrecarga visual (menus mais simples), e aumenta segurança.",
        implementacao: "Esconder completamente itens de menu não autorizados. Não mostrar opções desabilitadas. Validar permissão no backend (não apenas na interface).",
        exemplo: "Usuário final não vê 'Gerenciar Usuários', 'Configurações do Sistema', 'Logs de Auditoria' no menu. Apenas o administrador vê estas opções.",
        dicas: "Use uma abordagem de 'feature toggles' para controlar visibilidade. Nunca confie apenas na interface para segurança."
    },
    "12.1.25": {
        explicacao: "A interface deve considerar o ambiente de trabalho do usuário: ruído (evitar menus audíveis em ambientes barulhentos), luminosidade (modo claro/escuro), rapidez (otimizar para tarefas urgentes), dispositivos móveis (responsividade), e instalação (web vs desktop).",
        implementacao: "Configurar adaptações: detecção automática de ambiente (ex: claro/escuro). Modo 'foco' para tarefas urgentes. Interface responsiva (mobile-first). Suporte a dispositivos móveis (touch).",
        exemplo: "Em um arquivo público com muito barulho, o sistema evita usar feedback sonoro para notificações, usando apenas notificações visuais. Em situações de emergência, oferece botão de 'Ação Rápida'.",
        dicas: "Pesquise o ambiente de trabalho dos usuários. Ofereça opções de personalização. Teste em diferentes dispositivos."
    },
    // ===== CAPÍTULO 13 - INTEROPERABILIDADE =====
    "13.1.1": {
        explicacao: "O SIGAD deve se comunicar com outros sistemas: permitir consultar documentos de outros sistemas, importar/exportar, e recuperar informações. Isso permite integração com sistemas legados (ex: sistemas de protocolo antigos) e novos.",
        implementacao: "Oferecer APIs REST ou SOAP. Suportar formatos comuns (JSON, XML). Implementar autenticação segura (ex: OAuth2, JWT). Documentar APIs. Sinalizar versões. Usar padrões de mensagem (ex: REST HATEOAS).",
        exemplo: "Sistema de RH consulta SIGAD para obter documentos de funcionários. Sistema de contabilidade importa relatórios financeiros do SIGAD. Acesso externo respeita políticas de segurança.",
        dicas: "Considere usar uma camada de integração (ESB). Use padrões de interoperabilidade do governo (e-PING). Mantenha compatibilidade com versões anteriores."
    },
    "13.1.2": {
        explicacao: "O SIGAD deve usar padrões abertos de interoperabilidade (e-PING, XML, Dublin Core, OAI-PMH) para garantir compatibilidade com outros sistemas. Padrões abertos permitem que qualquer sistema possa se comunicar sem restrições de licenciamento.",
        implementacao: "Implementar padrões e-PING. Usar XML para troca de metadados. Usar Dublin Core para descrição de documentos. Suportar OAI-PMH para coleta de metadados. Usar formatos abertos (CSV, JSON).",
        exemplo: "Exportar documentos em XML com metadados Dublin Core. Sistema externo coleta via OAI-PMH. Importar CSV com mapeamento de campos.",
        dicas: "Mapeie metadados internos para padrões externos. Documente o esquema XML. Use validação (XSD) para garantir integridade."
    },
    "13.1.3": {
        explicacao: "As operações de interoperabilidade devem respeitar as mesmas regras de segurança que as operações internas: autenticação, autorização, criptografia, auditoria. Isso previne acessos não autorizados e garante integridade.",
        implementacao: "Aplicar mesmas regras: autenticação via token, autorização por perfil, HTTPS (TLS 1.2+), registro de logs, monitoramento de acesso, rate limiting. Não permitir bypass de segurança.",
        exemplo: "API de exportação requer token JWT válido com permissão 'exportar_documentos'. Registra em log quem exportou, o quê e quando. Conexão via HTTPS.",
        dicas: "Use OAuth2 para autenticação. Implemente um gateway de API para segurança centralizada. Faça auditoria regular das integrações."
    },
    // ===== CAPÍTULO 14 - DISPONIBILIDADE =====
    "14.1.1": {
        explicacao: "O SIGAD deve atender aos níveis de disponibilidade (SLA) estabelecidos pela instituição (ex: regime 8x5 para uso em horário comercial ou 24x7 para sistemas de protocolo público e peticionamento). Isso garante que o sistema esteja operante e acessível quando os usuários precisarem, minimizando paralisações inesperadas.",
        implementacao: "Definir acordo de nível de serviço (SLA) formal. Projetar arquitetura com redundância (servidores de aplicação balanceados, failover de banco de dados, geradores/nobreaks). Planejar manutenções preventivas fora do horário de pico e rotinas de backup que não bloqueiem o acesso.",
        exemplo: "Um órgão público define disponibilidade de 99,5% em regime 24x7 para seu SIGAD, com janelas de manutenção exclusivamente aos domingos entre 02:00 e 06:00, assegurando peticionamento contínuo para o público externo.",
        dicas: "Monitore o uptime em tempo real com ferramentas como Zabbix, Prometheus ou Grafana. Tenha planos de contingência bem definidos e divulgue manutenções programadas com antecedência."
    },

    // ===== CAPÍTULO 15 - DESEMPENHO E ESCALABILIDADE =====
    "15.1.1": {
        explicacao: "O sistema deve coletar e registrar estatísticas sobre o tempo de resposta de cada tipo de operação (ex: tempo para abrir páginas, realizar pesquisas, capturar documentos, assinar digitalmente ou exportar dossiês), permitindo identificar gargalos de performance e otimizar a experiência do usuário.",
        implementacao: "Integrar ferramentas de APM (Application Performance Monitoring) como OpenTelemetry, Elastic APM ou Datadog. Registrar tempos de execução por endpoint e consulta no banco de dados. Disponibilizar dashboards com métricas médias e percentis (p95, p99).",
        exemplo: "O sistema identifica que buscas textuais levam em média 200ms, mas a autuação de processos com anexos grandes leva 8s no horário de pico. A equipe de TI atua ajustando a fila assíncrona de processamento.",
        dicas: "Monitore os tempos do ponto de vista do usuário final (rede + backend + renderização). Estabeleça limites aceitáveis de tempo de resposta para operações críticas (ex: busca simples em menos de 2 segundos)."
    },
    "15.1.2": {
        explicacao: "O SIGAD deve ser dimensionado e expansível para suportar o volume máximo previsto de usuários simultâneos sem lentidão excessiva, erros de concorrência ou queda do serviço, mantendo a continuidade do trabalho da instituição.",
        implementacao: "Arquitetura com balanceamento de carga (Load Balancer), sessões stateless ou distribuídas (ex: Redis), pooling de conexões de banco de dados e testes de estresse periódicos (ex: JMeter, k6) para validar a capacidade sob carga máxima.",
        exemplo: "O SIGAD de uma universidade é preparado para suportar até 5.000 servidores e alunos acessando concorrentemente durante o período de matrículas sem degradação do serviço.",
        dicas: "Execute testes de estresse antes de grandes implantações. Implemente limites de requisição (rate limiting) e filas de processamento para proteger o sistema contra picos de tráfego."
    },
    "15.1.3": {
        explicacao: "O sistema deve disponibilizar rotinas administrativas práticas para manutenção de usuários, grupos, perfis de acesso, plano de classificação, banco de dados e tabelas de temporalidade, permitindo que alterações institucionais ocorram sem sobrecarga de esforço manual.",
        implementacao: "Fornecer interfaces para edição em lote e sincronização com serviços de diretório (ex: LDAP/Active Directory), ferramentas visuais para atualização do plano de classificação e tabela de temporalidade (com histórico), e rotinas de otimização de banco de dados (reindexação, vácuo e limpeza).",
        exemplo: "Após uma reestruturação ministerial que extinguiu secretarias e criou novos departamentos, o administrador utiliza as rotinas do SIGAD para remanejar usuários em lote e atualizar a hierarquia do plano de classificação em poucos passos.",
        dicas: "Automatize integrações com o sistema de gestão de pessoas/RH. Registre em trilha de auditoria todas as manutenções estruturais e mantenha o versionamento dos instrumentos técnicos."
    },
    "15.1.4": {
        explicacao: "O SIGAD deve ter arquitetura flexível que permita sua adaptação e crescimento tanto para organizações de pequeno porte quanto para grandes corporações com estruturas complexas, suportando aumento de carga via escalabilidade vertical (CPU/RAM) e horizontal (novos servidores).",
        implementacao: "Desenvolver o sistema em arquitetura modular ou conteinerizada (Docker/Kubernetes) desacoplada, permitindo escalar instâncias de aplicação e criar réplicas de leitura de banco de dados conforme a necessidade do órgão.",
        exemplo: "A mesma solução de SIGAD é implantada em uma autarquia municipal com 40 usuários e 10 mil documentos e em um ministério com 40 mil usuários e milhões de processos, alterando apenas o dimensionamento da infraestrutura.",
        dicas: "Evite dependência de tecnologias proprietárias ou hardwares específicos. Dê preferência a soluções que suportem auto-scaling em nuvem ou em clusters locais."
    },
    "15.1.5": {
        explicacao: "O sistema e a equipe gestora devem apresentar relatórios e evidências quantitativas da capacidade de escalabilidade a longo prazo (projeção de 5 anos), contemplando o crescimento do volume de dados, usuários simultâneos, impacto de reconfigurações e tempo de manutenção.",
        implementacao: "Elaborar plano de capacidade (Capacity Planning) e relatórios técnicos que documentem: tamanho máximo suportado do repositório, limite de conexões simultâneas com SLA garantido, taxa anual estimada de crescimento de dados e impacto de grandes alterações no plano de classificação.",
        exemplo: "Relatório bienal de capacidade demonstra que o repositório suportará até 80TB de dados e 6.000 usuários simultâneos nos próximos 5 anos, prevendo indisponibilidade para manutenção inferior a 0,1% ao ano.",
        dicas: "Considere a taxa de crescimento exponencial de documentos digitais e mídias ricas. Revise as projeções de capacidade a cada 2 anos e mantenha os laudos arquivados para governança de TI."
    }
};
