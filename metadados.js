// metadados.js - Versão Completa com todas as fichas de metadados
const dadosMetadados = {
    descricao: "Esquema completo de metadados definido pelo e-ARQ Brasil, organizado por entidades e elementos. Cada ficha detalha a designação, rótulo, definição, objetivo, obrigatoriedade e regras de preenchimento.",
    totalEntidades: 8,
    totalElementos: 96,
    entidades: [
        // =====================================================================
        // ENTIDADE 1 - DOCUMENTO
        // =====================================================================
        {
            id: "1",
            nome: "Documento",
            descricao: "Informações referentes à identidade e à integridade (componentes da autenticidade) do documento e apoiam sua identificação no sistema de gestão arquivística de documentos.",
            elementos: 37,
            itens: [
                {
                    id: "1.1",
                    nome: "Identificador do documento",
                    rotulo: "earq.documento.id",
                    definicao: "Identificador único atribuído pelo SIGAD ao documento no ato de sua captura para o sistema.",
                    objetivo: "Identificar de forma unívoca o documento para que o SIGAD possa gerenciá-lo.",
                    aplica_se: {
                        processo: "NA - Ver elemento 1.4",
                        volume: "NA - Ver elemento 1.6",
                        documento: "O"
                    },
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "Aplicável no âmbito do SIGAD. Esse identificador tem de ser unívoco e persistente. Esse metadado deve ser registrado de forma estruturada, em dois subelementos: documento.idTipo e documento.idValor. Caso seja utilizado somente um tipo de identificador no SIGAD, não é necessário explicitá-lo, bastando registrar o valor do identificador. Pode ser um elemento identificador simples e conter um componente para localização em ambiente eletrônico.",
                    exemplo: "documento.idTipo: handle; documento.idValor: loc.music/gottlieb.09601",
                    regra_preenchimento: "Deve, preferencialmente, ser gerado de forma automática pelo SIGAD. As instituições devem seguir normas específicas em seu âmbito de atuação ou esfera de competência para geração desse identificador.",
                    obrigatoriedade: "O"
                },
                {
                    id: "1.2",
                    nome: "Número do documento",
                    rotulo: "earq.documento.numero",
                    definicao: "Número ou código alfanumérico atribuído ao documento no ato da sua produção.",
                    objetivo: "Permitir a identificação precisa de um documento.",
                    aplica_se: {
                        processo: "NA - Ver elemento 1.5",
                        volume: "NA - Ver elemento 1.7",
                        documento: "O"
                    },
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "Em geral é uma numeração seriada correspondente a uma espécie documental, tal como memorandos, ofícios, avisos, portarias, ordens de serviço e outros. Pode ser acrescido da data de produção e da sigla do órgão produtor.",
                    exemplo: "Mem.119/COAD/DIRHU; Ofício n. 78/2008/GABIN-AN; Aviso 123/2008-SCT-PR.",
                    regra_preenchimento: "Deve, preferencialmente, ser gerado de forma automática pelo SIGAD. As instituições devem seguir normas específicas em seu âmbito de atuação ou esfera de competência para geração desse número.",
                    obrigatoriedade: "O"
                },
                {
                    id: "1.3",
                    nome: "Número do protocolo",
                    rotulo: "earq.documento.protocolo",
                    definicao: "Número ou código alfanumérico atribuído ao documento no ato do seu registro no protocolo.",
                    objetivo: "Permitir a identificação e o controle da tramitação do documento.",
                    aplica_se: {
                        processo: "NA - Ver elemento 1.5",
                        volume: "NA - Ver elemento 1.7",
                        documento: "OA"
                    },
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "Pode ser acrescido da data de registro. Esse número deve estar visível para o usuário.",
                    exemplo: "Carta: AB/11.000/2008; Número de protocolo: 00400.001412/2000-26",
                    regra_preenchimento: "Os órgãos e entidades devem seguir normas específicas em seu âmbito de atuação ou esfera de competência. Deve, preferencialmente, ser gerado automaticamente pelo SIGAD.",
                    obrigatoriedade: "OA"
                },
                {
                    id: "1.4",
                    nome: "Identificador do processo/dossiê",
                    rotulo: "earq.processoDossie.id",
                    definicao: "Identificador único atribuído pelo SIGAD ao processo ou dossiê no ato de sua captura para o sistema.",
                    objetivo: "Identificar de forma unívoca e persistente o processo ou dossiê para que o SIGAD possa gerenciá-lo. Estabelecer a relação entre o processo ou dossiê e os volumes e documentos que os integram.",
                    aplica_se: {
                        processo: "O",
                        volume: "NA",
                        documento: "NA"
                    },
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "Aplicável no âmbito do SIGAD. Pode ser um elemento identificador simples e conter um componente para localização em ambiente eletrônico. Esse identificador não está disponível para o usuário. É um controle interno do sistema. Esse identificador tem de ser unívoco e persistente.",
                    exemplo: "--",
                    regra_preenchimento: "Deve, preferencialmente, ser gerado automaticamente pelo SIGAD. As instituições devem seguir normas específicas em seu âmbito de atuação ou esfera de competência.",
                    obrigatoriedade: "O"
                },
                {
                    id: "1.5",
                    nome: "Número de protocolo do processo",
                    rotulo: "earq.processo.protocolo",
                    definicao: "Número ou código alfanumérico de registro no protocolo do processo.",
                    objetivo: "Identificar o número de registro no protocolo do processo. Permitir o controle dos registros de autuações de processos. Permitir a pesquisa sobre processos.",
                    aplica_se: {
                        processo: "O",
                        volume: "NA",
                        documento: "NA - Ver elemento 1.3"
                    },
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "Em alguns casos o número de registro no protocolo do documento avulso é atribuído seguindo a mesma sistemática do processo. Assim, os metadados 1.5 e 1.3 podem ser tratados como o mesmo elemento de metadados e registrados no mesmo campo. Dossiê não recebe número de protocolo.",
                    exemplo: "Processo n. 00302.000125/2008; Processo n. 04060.001412/2000-26",
                    regra_preenchimento: "As instituições devem seguir normas específicas em seu âmbito de atuação ou esfera de competência. Deve, preferencialmente, ser gerado automaticamente pelo SIGAD.",
                    obrigatoriedade: "O"
                },
                {
                    id: "1.6",
                    nome: "Identificador do volume",
                    rotulo: "earq.volume.id",
                    definicao: "Identificador único atribuído ao volume do processo ou dossiê no ato de sua captura para o SIGAD.",
                    objetivo: "Identificar de forma unívoca o volume do processo ou dossiê para que o SIGAD possa gerenciá-lo. Estabelecer a relação entre o processo ou dossiê e os volumes e documentos que os integram.",
                    aplica_se: {
                        processo: "NA - Ver elemento 1.4",
                        volume: "O",
                        documento: "NA - Ver elemento 1.1"
                    },
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "Aplicável no âmbito do SIGAD. Deve, preferencialmente, ser gerado automaticamente pelo SIGAD. Pode ser um elemento identificador simples e conter um componente para localização em ambiente eletrônico. É recomendável que possa se integrar a sistemas de identificadores persistentes. O identificador de volume não se aplica aos documentos avulsos, ou seja, os que não foram inseridos em processos ou dossiês.",
                    exemplo: "--",
                    regra_preenchimento: "Deve, preferencialmente, ser gerado automaticamente pelo SIGAD. As instituições devem seguir normas específicas em seu âmbito de atuação ou esfera de competência.",
                    obrigatoriedade: "O"
                },
                {
                    id: "1.7",
                    nome: "Número do volume",
                    rotulo: "earq.volume.numero",
                    definicao: "Número de registro do volume do processo ou dossiê.",
                    objetivo: "Identificar o volume do processo ou dossiê.",
                    aplica_se: {
                        processo: "NA - Ver elemento 1.5",
                        volume: "O",
                        documento: "NA - Ver elemento 1.2"
                    },
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "O controle de volumes deve obedecer às normas das instituições.",
                    exemplo: "--",
                    regra_preenchimento: "Deve, preferencialmente, ser gerado automaticamente pelo SIGAD.",
                    obrigatoriedade: "O"
                },
                {
                    id: "1.8",
                    nome: "Tipo de meio",
                    rotulo: "earq.documento.meio / earq.processo.meio",
                    definicao: "Identificação do meio do documento/volume/processo/dossiê: digital, não digital ou híbrido.",
                    objetivo: "Identificar se o documento/volume/processo/dossiê é digital, não digital ou híbrido para controlar as relações entre os meios e o monitoramento de preservação.",
                    aplica_se: {
                        processo: "F",
                        volume: "NA",
                        documento: "O"
                    },
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "No documento/volume/processo/dossiê híbrido, os relacionamentos deverão ser registrados para identificar a parte não digital e a parte digital. Ver elemento 1.29 (Relação com outros documentos).",
                    exemplo: "--",
                    regra_preenchimento: "--",
                    obrigatoriedade: "O"
                },
                {
                    id: "1.9",
                    nome: "Status",
                    rotulo: "earq.documento.status",
                    definicao: "Indicação do grau de formalização do documento: minuta - versão preliminar do documento; original - primeiro documento completo e efetivo; cópia - resultado da reprodução do documento.",
                    objetivo: "Identificar o grau de formalização do documento e as relações existentes entre os originais, as minutas e as cópias. Manter um controle sobre a disposição de cópias.",
                    aplica_se: {
                        processo: "NA",
                        volume: "NA",
                        documento: "O"
                    },
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "Deverá haver relacionamento entre os vários graus de formalização dos documentos. A organização deverá ter um plano de organização e registro do status dos documentos e da forma de relacioná-los. No caso do SIGAD apoiar a elaboração de documentos, o metadado status registra o grau de formalização do documento: minuta, quando ainda está sendo elaborado; original, quando se torna completo e efetivo; cópia, quando é feita uma reprodução a partir do original. Em geral, as minutas não são capturadas, ou seja, não são registradas e arquivadas no espaço geral. No entanto, em alguns casos, minutas de documentos avulsos são inseridas em um processo/dossiê, para fins de análise e prosseguimento da ação.",
                    exemplo: "--",
                    regra_preenchimento: "Deve, preferencialmente, ser gerado automaticamente pelo SIGAD. Valores sugeridos: minuta, original, cópia.",
                    obrigatoriedade: "O"
                },
                {
                    id: "1.10",
                    nome: "Identificador de versão",
                    rotulo: "earq.documento.versao",
                    definicao: "Identificação da versão do documento.",
                    objetivo: "Identificar a versão do documento e estabelecer a relação entre as versões anteriores e posteriores.",
                    aplica_se: {
                        processo: "NA",
                        volume: "NA",
                        documento: "OA"
                    },
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "Registrar informações relativas a: identificador da versão, descrição de alterações, data/hora da produção da versão e da transmissão, e o relacionamento entre as versões. Versões de documentos podem integrar processos e/ou dossiês.",
                    exemplo: "--",
                    regra_preenchimento: "É recomendável que seja gerado automaticamente pelo SIGAD.",
                    obrigatoriedade: "OA"
                },
                {
                    id: "1.11",
                    nome: "Título",
                    rotulo: "dc.title",
                    definicao: "Elemento de descrição que nomeia o documento ou processo/dossiê. Pode ser formal ou atribuído: formal - designação registrada no documento; atribuído - designação providenciada para identificação de um documento formalmente desprovido de título.",
                    objetivo: "Identificar o documento. Servir como elemento de acesso ao documento.",
                    aplica_se: {
                        processo: "F",
                        volume: "NA",
                        documento: "O"
                    },
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "--",
                    exemplo: "Processo de aquisição de equipamentos de informática; Balancete da Universidade ACD 2007.",
                    regra_preenchimento: "Cada instituição deverá fixar critérios para títulos atribuídos.",
                    obrigatoriedade: "O"
                },
                {
                    id: "1.12",
                    nome: "Descrição",
                    rotulo: "dc.description",
                    definicao: "Exposição concisa do conteúdo do documento, processo ou dossiê.",
                    objetivo: "Identificar o conteúdo do documento. Facilitar a pesquisa.",
                    aplica_se: {
                        processo: "F",
                        volume: "NA",
                        documento: "F"
                    },
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "--",
                    exemplo: "Convênio de cooperação para desenvolvimento de aplicações do laser entre a instituição A e a instituição B, com recursos do Programa Nacional ABC.",
                    regra_preenchimento: "Cada instituição deverá fixar critérios e modelos com elementos básicos para a elaboração da descrição.",
                    obrigatoriedade: "F"
                },
                {
                    id: "1.13",
                    nome: "Assunto",
                    rotulo: "dc.subject",
                    definicao: "Palavras-chave que representam o conteúdo do documento. Diferente do já estabelecido no código de classificação.",
                    objetivo: "Referir de forma sucinta o teor geral do documento.",
                    aplica_se: {
                        processo: "F",
                        volume: "NA",
                        documento: "F"
                    },
                    repetibilidade: "Repetível",
                    nota_aplicacao: "As instituições devem definir sua política de indexação.",
                    exemplo: "--",
                    regra_preenchimento: "Pode ser de preenchimento livre ou com o uso de vocabulário controlado ou tesauro.",
                    obrigatoriedade: "F"
                },
                {
                    id: "1.14",
                    nome: "Autor",
                    rotulo: "earq.documento.autor / earq.processo.autor",
                    definicao: "Pessoa física ou jurídica com autoridade para emitir o documento e em cujo nome ou sob cuja ordem ou responsabilidade o documento é emitido.",
                    objetivo: "Identificar o autor do documento. Fornecer informação sobre o contexto de produção do documento. Demonstrar a autenticidade de um documento, indicando o responsável direto pela sua produção.",
                    aplica_se: {
                        processo: "O",
                        volume: "NA",
                        documento: "O"
                    },
                    repetibilidade: "Repetível",
                    nota_aplicacao: "Não confundir com autor de processo judicial (autor x réu).",
                    exemplo: "Santos, José ou José Santos; Ministério da Justiça",
                    regra_preenchimento: "As instituições devem estabelecer normas para controlar as entradas de nomes.",
                    obrigatoriedade: "O"
                },
                {
                    id: "1.15",
                    nome: "Destinatário",
                    rotulo: "earq.documento.destinatario / earq.processo.destinatario",
                    definicao: "Pessoa física e/ou jurídica a quem foi dirigida a informação contida no documento. Pode ser nominal ou geral: nominal - pessoas específicas; geral - refere-se a uma entidade maior, indeterminada. Ex.: cidadãos, povo, estudantes, a quem possa interessar, a todos os envolvidos.",
                    objetivo: "Identificar o destinatário do documento. Fornecer informação sobre o contexto de produção do documento. Demonstrar a autenticidade de um documento, indicando a quem ele é dirigido.",
                    aplica_se: {
                        processo: "F",
                        volume: "NA",
                        documento: "O"
                    },
                    repetibilidade: "Repetível",
                    nota_aplicacao: "--",
                    exemplo: "Santos, José ou José Santos; Ministério da Economia; Cidadãos brasileiros",
                    regra_preenchimento: "As instituições devem estabelecer normas para controlar as entradas de nomes.",
                    obrigatoriedade: "O"
                },
                {
                    id: "1.16",
                    nome: "Originador",
                    rotulo: "earq.documento.originador",
                    definicao: "Pessoa física ou jurídica designada no endereço eletrônico ou login em que o documento é gerado e/ou enviado.",
                    objetivo: "Identificar o originador do documento. Fornecer informação sobre o contexto de produção do documento. Demonstrar a autenticidade de um documento, indicando o responsável legal pela sua emissão.",
                    aplica_se: {
                        processo: "NA",
                        volume: "NA",
                        documento: "OA"
                    },
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "Aplica-se quando o nome do originador for diferente do nome do autor ou do redator.",
                    exemplo: "Santos, José ou José Santos",
                    regra_preenchimento: "As instituições devem estabelecer normas para controlar as entradas de nomes.",
                    obrigatoriedade: "OA"
                },
                {
                    id: "1.17",
                    nome: "Redator",
                    rotulo: "earq.documento.redator",
                    definicao: "Responsável pela elaboração do conteúdo do documento.",
                    objetivo: "Identificar o redator do documento. Fornecer informação sobre o contexto de produção do documento. Demonstrar a autenticidade de um documento, indicando o responsável pela articulação de seu conteúdo.",
                    aplica_se: {
                        processo: "NA",
                        volume: "NA",
                        documento: "O"
                    },
                    repetibilidade: "Repetível",
                    nota_aplicacao: "Registrar mesmo quando o nome do redator for igual ao nome do autor.",
                    exemplo: "Santos, José ou José Santos",
                    regra_preenchimento: "As instituições devem estabelecer normas para controlar as entradas de nomes.",
                    obrigatoriedade: "O"
                },
                {
                    id: "1.18",
                    nome: "Interessado",
                    rotulo: "earq.documento.interessado",
                    definicao: "Nome e/ou identificação da pessoa física ou jurídica que tem envolvimento ou a quem interessa o assunto do documento.",
                    objetivo: "Facilitar a pesquisa.",
                    aplica_se: {
                        processo: "O",
                        volume: "NA",
                        documento: "NA"
                    },
                    repetibilidade: "Repetível",
                    nota_aplicacao: "O interessado pode ser qualificado como, por exemplo: réu, vítima, inventariante, inventariado, apelante, apelado, requerente, solicitante. Esse metadado deve ser registrado de forma estruturada, em dois subelementos: interessadoNome, interessadoTipo, interessadoId.",
                    exemplo: "interessadoNome: José da Silva; interessadoTipo: solicitante; interessadoId: 987.745.465-73 (CPF); interessadoTipo: requerente; interessadoId: 59873/0001-38 (CNPJ); interessadoTipo: apelado; interessadoId: 8783000238 (número de matrícula); interessadoTipo: vítima",
                    regra_preenchimento: "As instituições devem estabelecer normas para controlar as entradas de nomes. Pode-se fazer o cadastro de interessados internos da organização por categorias para facilitar o registro automático, com dados de identificação. Ex.: número de matrícula, nome, documento de identificação.",
                    obrigatoriedade: "O"
                },
                {
                    id: "1.19",
                    nome: "Identificador do componente digital",
                    rotulo: "earq.componente.id",
                    definicao: "Identificador dos componentes digitais que integram o documento.",
                    objetivo: "Estabelecer a relação entre o documento e os componentes digitais necessários para apresentá-lo.",
                    aplica_se: {
                        processo: "NA",
                        volume: "NA",
                        documento: "O"
                    },
                    repetibilidade: "Repetível",
                    nota_aplicacao: "Um documento pode ser formado por um ou mais componentes digitais, que são os componentes físicos do documento. De forma geral, pode se dizer que os componentes digitais são os arquivos de computador que formam um documento. Cada componente deve ser identificado individualmente a fim de que o documento possa ser recuperado de maneira completa. Um documento multimídia pode estar armazenado em diversos arquivos com as informações de texto, imagens, som e relação entre eles. É necessário que o sistema computacional leia cada um deles para apresentá-lo ao usuário.",
                    exemplo: "Um documento em formato .pdf com assinatura digital externa a ele, armazenado em dois componentes digitais. A mesma situação aplica-se a documentos estruturados em bases de dados.",
                    regra_preenchimento: "Deve ser preenchido a partir do metadado Identificador do componente digital: componente.Id.",
                    obrigatoriedade: "O"
                },
                {
                    id: "1.20",
                    nome: "Gênero",
                    rotulo: "earq.documento.genero",
                    definicao: "Indica o gênero documental, ou seja, a configuração da informação no documento de acordo com o sistema de signos utilizado na comunicação do documento.",
                    objetivo: "Monitorar os diversos gêneros documentais de um acervo para fins de gestão arquivística. Facilitar a pesquisa.",
                    aplica_se: {
                        processo: "NA",
                        volume: "NA",
                        documento: "F"
                    },
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "--",
                    exemplo: "Audiovisual; textual; cartográfico; iconográfico; multimídia",
                    regra_preenchimento: "É necessário que a instituição elabore uma tabela com os gêneros e suas designações, para facilitar sua indicação no registro.",
                    obrigatoriedade: "F"
                },
                {
                    id: "1.21",
                    nome: "Espécie",
                    rotulo: "earq.documento.especie",
                    definicao: "Indica a espécie documental, ou seja, a configuração da informação no documento de acordo com a disposição e a natureza das informações nele contidas.",
                    objetivo: "Complementar a descrição do documento ou a identificação de título. Facilitar a pesquisa.",
                    aplica_se: {
                        processo: "NA",
                        volume: "NA",
                        documento: "F"
                    },
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "As instituições podem preparar, como instrumento complementar de gestão, glossários de espécies de documentos que são produzidos no cumprimento de suas funções e atividades. A existência de tabelas pode facilitar o registro desse elemento. Relaciona-se com tipo documental; descrição e título.",
                    exemplo: "Processo; ofício; ata; relatório; projeto; prontuário.",
                    regra_preenchimento: "--",
                    obrigatoriedade: "F"
                },
                {
                    id: "1.22",
                    nome: "Tipo",
                    rotulo: "earq.documento.tipo",
                    definicao: "Indica o tipo documental, ou seja, a configuração da espécie documental de acordo com a atividade que a gerou.",
                    objetivo: "Complementar à descrição do documento ou à identificação do título. Permite a pesquisa limitada a um determinado tipo.",
                    aplica_se: {
                        processo: "NA",
                        volume: "NA",
                        documento: "F"
                    },
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "Há instituições que preparam, como instrumento complementar de gestão de seus documentos, glossários de tipos documentais que são produzidos no cumprimento de suas funções e atividades. A existência dessas tabelas pode facilitar o registro desse elemento. Relaciona-se com espécie documental.",
                    exemplo: "Relatório de pesquisa; carta precatória; ofício-circular; prontuário médico; prontuário de funcionário.",
                    regra_preenchimento: "--",
                    obrigatoriedade: "F"
                },
                {
                    id: "1.23",
                    nome: "Idioma",
                    rotulo: "dc.language",
                    definicao: "Idioma(s) em que é expresso o conteúdo do documento.",
                    objetivo: "Identificar o(s) idioma(s) do conteúdo do documento. Permitir a pesquisa limitada a um determinado idioma.",
                    aplica_se: {
                        processo: "NA",
                        volume: "NA",
                        documento: "F"
                    },
                    repetibilidade: "Repetível",
                    nota_aplicacao: "Pode ser registrado mais de um idioma no caso de documentos multilíngues.",
                    exemplo: "--",
                    regra_preenchimento: "As instituições devem, preferencialmente, utilizar padrões para identificar idiomas, como, por exemplo, a norma ISO 639-2: 1998 - Part 2: alpha-3 code (Codes for the representation of names of languages).",
                    obrigatoriedade: "F"
                },
                {
                    id: "1.24",
                    nome: "Quantidade de folhas",
                    rotulo: "earq.documento.folhaNum / earq.volume.folhaNum / earq.processo.folhaNum",
                    definicao: "Indicação da quantidade de folhas de um documento.",
                    objetivo: "Permitir o controle de folhas por processo e por volume. Facilitar o registro e o acesso a um documento específico dentro do processo ou dossiê.",
                    aplica_se: {
                        processo: "OA",
                        volume: "OA",
                        documento: "F"
                    },
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "Usado especialmente para gerenciamento de processos não digitais, que limitam a quantidade de folhas, sugerindo a abertura de volumes. As instituições devem determinar as normas para esse tipo de ação.",
                    exemplo: "--",
                    regra_preenchimento: "--",
                    obrigatoriedade: "OA"
                },
                {
                    id: "1.25",
                    nome: "Numeração sequencial dos documentos",
                    rotulo: "earq.documento.sequencia",
                    definicao: "Numeração sequencial dos documentos inseridos em um processo.",
                    objetivo: "Ordenar os documentos em um processo. Controlar a integridade do processo. Facilitar a referência a um documento específico.",
                    aplica_se: {
                        processo: "NA",
                        volume: "NA",
                        documento: "OA (aplica-se somente aos documentos que integram um processo)"
                    },
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "Usado para ordenar os documentos (e não as folhas) nos processos digitais.",
                    exemplo: "--",
                    regra_preenchimento: "Devem-se numerar os documentos na ordem em que são inseridos no processo a fim de garantir sua integridade.",
                    obrigatoriedade: "OA"
                },
                {
                    id: "1.26",
                    nome: "Indicação de anexos",
                    rotulo: "earq.documento.anexo",
                    definicao: "Indica se o documento tem anexos.",
                    objetivo: "Registrar a existência de anexos de um determinado documento para apoiar o controle de sua integridade e facilitar o acesso.",
                    aplica_se: {
                        processo: "NA",
                        volume: "NA",
                        documento: "OA"
                    },
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "--",
                    exemplo: "--",
                    regra_preenchimento: "--",
                    obrigatoriedade: "OA"
                },
                {
                    id: "1.27",
                    nome: "Indicação de anotação",
                    rotulo: "earq.documento.anotacao",
                    definicao: "Indica se o documento tem anotações.",
                    objetivo: "Registrar a existência de anotações feitas em um documento após sua emissão, para apoiar sua autenticidade.",
                    aplica_se: {
                        processo: "NA",
                        volume: "NA",
                        documento: "O"
                    },
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "Algumas anotações comuns são: ciente, circular para ciência, grifos, atribuição de tarefas.",
                    exemplo: "--",
                    regra_preenchimento: "O sistema indica apenas se existe anotação. Os valores possíveis são: sim / não. A anotação em si é registrada em outro metadado ou em campo específico e deve ser exibida junto com o documento.",
                    obrigatoriedade: "O"
                },
                {
                    id: "1.28",
                    nome: "Unidade responsável pela execução da ação",
                    rotulo: "earq.documento.unidadeExecucao",
                    definicao: "Registra a unidade responsável pela execução da ação registrada no documento.",
                    objetivo: "Indicar a principal unidade responsável pela ação e que fica responsável pela guarda do documento antes da sua transferência, recolhimento ou eliminação.",
                    aplica_se: {
                        processo: "NA",
                        volume: "NA",
                        documento: "O"
                    },
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "--",
                    exemplo: "Setor de compras e licitação (no caso de processos de aquisição), unidade de recursos humanos (no caso de dossiê funcional), unidade de administração escolar (dossiês dos alunos).",
                    regra_preenchimento: "Preencher com o nome da unidade.",
                    obrigatoriedade: "O"
                },
                {
                    id: "1.29",
                    nome: "Relação com outros documentos",
                    rotulo: "dc.Relation",
                    qualificadores: [
                        "dc.Relation.isReferencedBy - Referências a outros documentos",
                        "dc.Relation.References - Referências a outros documentos",
                        "dc.Relation.isPartOf - Relaciona extrato de documento com o documento original",
                        "dc.Relation.hasPart - Relaciona extrato de documento com o documento original"
                    ],
                    definicao: "Registro das relações significantes de um documento com outros documentos.",
                    objetivo: "Tornar explícito o relacionamento e facilitar o processamento automático e o gerenciamento arquivístico. Demonstrar a relação orgânica dos documentos. Facilitar a pesquisa de informações de documentos relacionados.",
                    aplica_se: {
                        processo: "OA",
                        volume: "NA",
                        documento: "OA"
                    },
                    repetibilidade: "Repetível",
                    nota_aplicacao: "As instituições devem estabelecer os tipos de relacionamentos que deverão ser controlados e suas restrições ou condições. Estas relações podem ser expressas das seguintes formas: referenciado ou ver também; tem extrato, é extrato de. Os relacionamentos entre documento, volume e processo/dossiê são registrados em metadados específicos, tais como identificador do processo e identificador do dossiê.",
                    exemplo: "--",
                    regra_preenchimento: "--",
                    obrigatoriedade: "OA"
                },
                {
                    id: "1.30",
                    nome: "Níveis de acesso",
                    rotulo: "earq.nivelDeAcesso",
                    definicao: "Indicação dos níveis de acesso ao documento a partir da classificação de sigilo e da proteção de dados pessoais.",
                    objetivo: "Garantir o acesso somente a pessoas autorizadas.",
                    aplica_se: {
                        processo: "O",
                        volume: "NA",
                        documento: "O"
                    },
                    repetibilidade: "Repetível",
                    nota_aplicacao: "As instituições devem estabelecer as normas para as condições de acesso e indicação de sigilo, de acordo com seu contexto e com base na legislação. Relaciona-se com tabela de classificação de segurança.",
                    exemplo: "Ostensivo; Reservado; Secreto; Ultrassecreto; Sigilo fiscal; Informação pessoal; Patente",
                    regra_preenchimento: "Deve ser informado se o documento é ostensivo ou se possui algum grau de sigilo, indicando o nível de sigilo e demais hipóteses de sigilo.",
                    obrigatoriedade: "O"
                },
                {
                    id: "1.31",
                    nome: "Previsão de desclassificação",
                    rotulo: "earq.documento.previsaoDesclassificacao / earq.processo.nivelDeAcesso",
                    definicao: "Indicação da data prevista para término da restrição de acesso.",
                    objetivo: "Permitir a identificação dos documentos que podem se tornar ostensivos por decurso de prazo.",
                    aplica_se: {
                        processo: "O",
                        volume: "NA",
                        documento: "O"
                    },
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "--",
                    exemplo: "--",
                    regra_preenchimento: "É recomendável seguir o padrão da ISO 8601.",
                    obrigatoriedade: "O"
                },
                {
                    id: "1.32",
                    nome: "Data de produção",
                    rotulo: "dc.date.created",
                    definicao: "Registro cronológico (data e hora) da produção do documento.",
                    objetivo: "Indicar local e data em que foi produzido o documento.",
                    aplica_se: {
                        processo: "O",
                        volume: "NA",
                        documento: "O"
                    },
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "--",
                    exemplo: "--",
                    regra_preenchimento: "É recomendável seguir o padrão da ISO 8601.",
                    obrigatoriedade: "O"
                },
                {
                    id: "1.33",
                    nome: "Local de produção",
                    rotulo: "earq.documento.local",
                    definicao: "Registro do local da produção do documento, também denominado de data tópica.",
                    objetivo: "Indicar local em que foi produzido o documento.",
                    aplica_se: {
                        processo: "NA",
                        volume: "NA",
                        documento: "O"
                    },
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "--",
                    exemplo: "--",
                    regra_preenchimento: "--",
                    obrigatoriedade: "O"
                },
                {
                    id: "1.34",
                    nome: "Classe",
                    rotulo: "earq.classeId",
                    definicao: "Identificação da classe do documento com base em um plano de classificação.",
                    objetivo: "Identificar a localização intelectual do documento no âmbito da estrutura orgânica ou funcional.",
                    aplica_se: {
                        processo: "O",
                        volume: "NA",
                        documento: "O"
                    },
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "As instituições devem estabelecer um plano de classificação para aplicar esse elemento.",
                    exemplo: "--",
                    regra_preenchimento: "Pode se registrar o código e/ou o nome completo da classe em que o documento está classificado.",
                    obrigatoriedade: "O"
                },
                {
                    id: "1.35",
                    nome: "Destinação prevista",
                    rotulo: "earq.documento.destinacao / earq.processo.destinacao",
                    definicao: "Indicação da próxima ação de destinação (transferência, eliminação ou recolhimento) prevista para o documento, em cumprimento à tabela de temporalidade.",
                    objetivo: "Apoiar o controle do ciclo de vida do documento.",
                    aplica_se: {
                        processo: "O",
                        volume: "NA",
                        documento: "O"
                    },
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "Para a finalidade deste instrumento, considera-se a transferência como uma ação de destinação. As instituições devem estabelecer uma tabela de temporalidade associada ao plano de classificação para aplicar este elemento. Este elemento está relacionado ao 1.33.",
                    exemplo: "--",
                    regra_preenchimento: "Deve ser preenchido de forma automática pelo SIGAD. Valores permitidos: eliminação, transferência e recolhimento.",
                    obrigatoriedade: "O"
                },
                {
                    id: "1.36",
                    nome: "Prazo de guarda",
                    rotulo: "earq.documento.prazoGuarda / earq.processo.prazoGuarda",
                    definicao: "Indicação do prazo estabelecido em tabela de temporalidade e destinação de documentos para o cumprimento da destinação.",
                    objetivo: "Apoiar o controle do ciclo de vida do documento.",
                    aplica_se: {
                        processo: "O",
                        volume: "NA",
                        documento: "O"
                    },
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "As instituições devem estabelecer uma tabela de temporalidade e destinação de documentos associada ao plano de classificação para aplicar esse elemento. Este elemento está relacionado ao 1.32.",
                    exemplo: "--",
                    regra_preenchimento: "Deve ser preenchido de forma automática pelo SIGAD.",
                    obrigatoriedade: "O"
                },
                {
                    id: "1.37",
                    nome: "Localização",
                    rotulo: "earq.documento.localizacao / earq.volume.localizacao / earq.processo.localizacao",
                    definicao: "Local de armazenamento atual do documento. Pode ser um lugar (depósito, estante, repositório digital), uma notação física.",
                    objetivo: "Permitir a localização dos documentos em qualquer mídia. Monitorar o armazenamento de documentos.",
                    aplica_se: {
                        processo: "OA",
                        volume: "F",
                        documento: "OA"
                    },
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "Deve ser utilizado, obrigatoriamente, quando o documento é mantido em outra área de armazenamento, seja virtual ou física. Utilizado principalmente para os documentos não digitais, para a parte não digital dos documentos híbridos.",
                    exemplo: "Depósito 201, estante 8, prateleira 2; Caixa 3.456; Centro de documentação do IFP, repositório alfa; Notação XY.2540.",
                    regra_preenchimento: "As instituições devem estabelecer normas para o registro da localização dos documentos não digitais, de acordo com seu ambiente de guarda e armazenamento.",
                    obrigatoriedade: "OA"
                }
            ]
        },
        // =====================================================================
        // ENTIDADE 2 - EVENTOS DE GESTÃO DO CICLO DE VIDA
        // =====================================================================
        {
            id: "2",
            nome: "Eventos de Gestão do Ciclo de Vida",
            descricao: "Registra os eventos de captura, movimentação e controle do ciclo de vida do documento e processo/dossiê. Cada evento deve ser registrado com identificador, tipo, data/hora, agente responsável e detalhes.",
            elementos: 8,
            itens: [
                {
                    id: "2.1.1",
                    nome: "Identificador do evento",
                    rotulo: "earq.eventoCv.id",
                    definicao: "Identificador do evento de ciclo de vida que está sendo registrado no SIGAD.",
                    objetivo: "Identificar univocamente o evento.",
                    obrigatoriedade: "O",
                    repetibilidade: "Não repetível",
                    regra_preenchimento: "Deve ser registrado automaticamente pelo SIGAD.",
                    exemplo: "EVT-2024-001"
                },
                {
                    id: "2.1.2",
                    nome: "Tipo de evento",
                    rotulo: "earq.eventoCv.tipo",
                    definicao: "Identificação do tipo de evento de gestão do ciclo de vida.",
                    objetivo: "Categorizar o evento ocorrido.",
                    obrigatoriedade: "O",
                    repetibilidade: "Não repetível",
                    regra_preenchimento: "Este elemento poderá assumir os seguintes valores: Captura; Transferência - Envio; Transferência - Recebimento; Recolhimento - Envio; Eliminação; Atribuição de restrição de acesso; Desclassificação de Sigilo; Reclassificação de Sigilo",
                    exemplo: "Captura, Eliminação"
                },
                {
                    id: "2.1.3",
                    nome: "Identificador do processo/dossiê",
                    rotulo: "earq.eventoCv.processoId",
                    definicao: "Identificador do processo/dossiê que está sendo afetado pelo evento.",
                    objetivo: "Vincular o evento ao processo/dossiê afetado.",
                    obrigatoriedade: "OA",
                    repetibilidade: "Repetível",
                    regra_preenchimento: "O código deve ser obtido no metadado 1.4 identificador do processo/dossiê.",
                    exemplo: "PROC-2024-001"
                },
                {
                    id: "2.1.4",
                    nome: "Identificador do documento",
                    rotulo: "earq.eventoCv.documentoId",
                    definicao: "Identificador do documento afetado pelo evento.",
                    objetivo: "Vincular o evento ao documento afetado.",
                    obrigatoriedade: "O",
                    repetibilidade: "Repetível",
                    regra_preenchimento: "O código deve ser obtido no metadado 1.1 identificador do documento. Obrigatório para eventos de transferência (ECV4 e ECV5), para identificar os documentos transferidos.",
                    exemplo: "DOC-2024-001"
                },
                {
                    id: "2.1.5",
                    nome: "Identificador do lote",
                    rotulo: "earq.eventoCv.loteId",
                    definicao: "Identificador do lote que está sendo afetado pelo evento.",
                    objetivo: "Agrupar documentos processados em lote.",
                    obrigatoriedade: "O",
                    repetibilidade: "Não repetível",
                    regra_preenchimento: "O código pode ser gerado automaticamente no evento Transferência-envio, Transferência-recebimento, Recolhimento e Eliminação.",
                    exemplo: "LOTE-2024-001"
                },
                {
                    id: "2.1.6",
                    nome: "Data e hora do evento",
                    rotulo: "earq.eventoCv.dataHora",
                    definicao: "Data e hora que o evento foi realizado.",
                    objetivo: "Registrar quando o evento ocorreu.",
                    obrigatoriedade: "O",
                    repetibilidade: "Não repetível",
                    regra_preenchimento: "É recomendável seguir o padrão da ISO 8601:2019 - Data elements and interchange formats - Information interchange - Representation of dates and times.",
                    exemplo: "2024-03-15T14:30:00Z"
                },
                {
                    id: "2.1.7",
                    nome: "Agente responsável pelo evento",
                    rotulo: "earq.eventoCv.agenteId",
                    definicao: "Agente responsável pela realização do evento. Captura: responsável pela captura; Transferência - envio: responsável pelo envio dos documentos para guarda intermediária; Transferência - recebimento: responsável pelo recebimento dos documentos para guarda intermediária; Recolhimento - envio: responsável pelo envio dos documentos para guarda permanente; Eliminação: responsável pela eliminação dos documentos; Restrição de acesso: responsável pela restrição de acesso; Alteração da restrição de acesso: responsável pela restrição de acesso.",
                    objetivo: "Identificar quem executou a ação.",
                    obrigatoriedade: "O",
                    repetibilidade: "Não repetível",
                    regra_preenchimento: "O código deve ser obtido no metadado 4.2 identificador do agente.",
                    exemplo: "AG-001 (João Silva)"
                },
                {
                    id: "2.1.8",
                    nome: "Detalhes do evento",
                    rotulo: "earq.eventoCv.detalhe",
                    definicao: "Registro de informações adicionais a respeito do evento de gestão do ciclo de vida.",
                    objetivo: "Complementar a descrição do evento.",
                    obrigatoriedade: "OA",
                    repetibilidade: "Não repetível",
                    regra_preenchimento: "Podem ser registradas informações tais como: identificador do método de transferência; termo de transferência; identificador do termo de recolhimento; identificador do edital; fundamentação legal da classificação; motivação da desclassificação; justificativas; suporte; localização.",
                    exemplo: "Termo de Eliminação nº 03/2024, Edital nº 05/2024"
                }
            ]
        },
        // =====================================================================
        // ENTIDADE 3 - EVENTOS DE GESTÃO DO PROCESSO/DOSSIÊ
        // =====================================================================
        {
            id: "3",
            nome: "Eventos de Gestão do Processo/Dossiê",
            descricao: "Registra os eventos relacionados aos procedimentos de protocolo realizados com os processos. Inclui abertura, encerramento, reabertura, juntada, desapensação, desentranhamento, desmembramento e tramitação.",
            elementos: 7,
            itens: [
                {
                    id: "2.2.1",
                    nome: "Identificador do evento",
                    rotulo: "earq.eventoProc.id",
                    definicao: "Identificador do evento de gestão de processo que está sendo registrado no SIGAD.",
                    objetivo: "Identificar univocamente o evento.",
                    obrigatoriedade: "O",
                    repetibilidade: "Não repetível",
                    regra_preenchimento: "Deve ser registrado automaticamente pelo SIGAD.",
                    exemplo: "EPROC-2024-001"
                },
                {
                    id: "2.2.2",
                    nome: "Tipo de evento",
                    rotulo: "earq.eventoProc.tipo",
                    definicao: "Identificação do tipo de evento de gestão do processo.",
                    objetivo: "Categorizar o evento ocorrido.",
                    obrigatoriedade: "O",
                    repetibilidade: "Não repetível",
                    regra_preenchimento: "Este elemento poderá assumir os seguintes valores: EPROC1. Abertura de volume/processo/dossiê; EPROC2. Encerramento de volume/processo/dossiê; EPROC3. Reabertura processo/dossiê; EPROC4. Juntada anexação; EPROC5. Juntada apensação; EPROC6. Desapensação; EPROC7. Desentranhamento; EPROC8. Desmembramento; EPROC9. Tramitação - Envio; EPROC10. Tramitação - Recebimento.",
                    exemplo: "AberturaVolume, TramitacaoEnvio"
                },
                {
                    id: "2.2.3",
                    nome: "Identificador do processo/dossiê",
                    rotulo: "earq.eventoProc.processoId",
                    definicao: "Identificador do processo afetado pelo evento.",
                    objetivo: "Vincular o evento ao processo afetado.",
                    obrigatoriedade: "O",
                    repetibilidade: "Não repetível",
                    regra_preenchimento: "O código deve ser obtido no metadado 1.4 identificador do processo/dossiê.",
                    exemplo: "PROC-2024-001"
                },
                {
                    id: "2.2.4",
                    nome: "Identificador do volume",
                    rotulo: "earq.eventoProc.volumeId",
                    definicao: "Identificador do volume afetado pelo evento.",
                    objetivo: "Vincular o evento ao volume afetado.",
                    obrigatoriedade: "OA",
                    repetibilidade: "Não repetível",
                    regra_preenchimento: "O código deve ser obtido no metadado 1.7 número do volume. Esse metadado só deve ser registrado nos eventos de abertura e encerramento de volume.",
                    exemplo: "VOL-001"
                },
                {
                    id: "2.2.5",
                    nome: "Data e hora do evento",
                    rotulo: "earq.eventoProc.dataHora",
                    definicao: "Data e hora que o evento foi realizado.",
                    objetivo: "Registrar quando o evento ocorreu.",
                    obrigatoriedade: "O",
                    repetibilidade: "Não repetível",
                    regra_preenchimento: "É recomendável seguir o padrão da ISO 8601:2019 - Data elements and interchange formats - Information interchange - Representation of dates and times.",
                    exemplo: "2024-03-15T14:30:00Z"
                },
                {
                    id: "2.2.6",
                    nome: "Agente responsável pelo evento",
                    rotulo: "earq.eventoProc.agenteId",
                    definicao: "Agente responsável pela realização do evento.",
                    objetivo: "Identificar quem executou a ação.",
                    obrigatoriedade: "OA",
                    repetibilidade: "Não repetível",
                    regra_preenchimento: "O código deve ser obtido no metadado 4.2 identificador do agente.",
                    exemplo: "AG-001 (João Silva)"
                },
                {
                    id: "2.2.7",
                    nome: "Identificador do documento",
                    rotulo: "earq.eventoProc.docId",
                    definicao: "Identificador do documento afetado pelo evento.",
                    objetivo: "Vincular o evento ao documento afetado.",
                    obrigatoriedade: "OA",
                    repetibilidade: "Repetível",
                    regra_preenchimento: "Obrigatório para o evento EPROC7 para registrar os documentos que foram desentranhados.",
                    exemplo: "DOC-2024-001"
                }
            ]
        },
        // =====================================================================
        // ENTIDADE 4 - CLASSE
        // =====================================================================
        {
            id: "4",
            nome: "Classe",
            descricao: "Informações referentes à configuração e à administração do plano ou código de classificação e da tabela de temporalidade e destinação de documentos.",
            elementos: 13,
            itens: [
                {
                    id: "3.1",
                    nome: "Identificador da classe",
                    rotulo: "earq.classe.id",
                    definicao: "Identificador único atribuído pelo SIGAD à classe no ato de sua criação no sistema.",
                    objetivo: "Identificar de forma unívoca a classe para que o SIGAD possa gerenciá-la.",
                    obrigatoriedade: "O",
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "Refere-se às classes, subclasses, grupos e subgrupos.",
                    exemplo: "CLS-021-001",
                    regra_preenchimento: "Deve, preferencialmente, ser gerado de forma automática pelo SIGAD."
                },
                {
                    id: "3.2",
                    nome: "Nome da classe",
                    rotulo: "earq.classe.nome",
                    definicao: "Nome de uma divisão de um plano ou de um código de classificação.",
                    objetivo: "Registrar a denominação das diversas classes do plano de classificação.",
                    obrigatoriedade: "O",
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "Refere-se às classes, subclasses, grupos e subgrupos.",
                    exemplo: "Pessoal, Recrutamento e seleção, Material permanente",
                    regra_preenchimento: "Registrar a denominação específica da classe, sem repetir a do nível hierárquico superior."
                },
                {
                    id: "3.3",
                    nome: "Código da classe",
                    rotulo: "earq.classe.codigo",
                    definicao: "Código relativo a uma divisão de um plano ou de um código de classificação.",
                    objetivo: "Registrar o código atribuído à classe respectiva.",
                    obrigatoriedade: "O",
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "Refere-se às classes, subclasses, grupos e subgrupos.",
                    exemplo: "020, 021, 033.1, 033.11",
                    regra_preenchimento: "--"
                },
                {
                    id: "3.4",
                    nome: "Subordinação da classe",
                    rotulo: "earq.classe.subordinacao",
                    definicao: "Subordinação da classe na hierarquia do plano de classificação ou do código de classificação.",
                    objetivo: "Recuperar a relação hierárquica das diversas classes de um plano ou código de classificação.",
                    obrigatoriedade: "O",
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "A obrigatoriedade não se aplica às classes de primeiro nível.",
                    exemplo: "033 (código hierárquico superior ao 033.1)",
                    regra_preenchimento: "Registrar o código da classe imediatamente superior."
                },
                {
                    id: "3.5",
                    nome: "Indicação de permissão de uso",
                    rotulo: "earq.classe.indicadorUso",
                    definicao: "Indicação se a classe pode ser utilizada para classificar documentos ou se é apenas parte da estrutura hierárquica do plano de classificação.",
                    objetivo: "Apoiar o SIGAD para restringir o uso apenas das classes autorizadas para classificar documentos.",
                    obrigatoriedade: "O",
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "Uma classe sem permissão de uso para classificar não pode ser subordinada a uma classe com permissão de uso.",
                    exemplo: "--",
                    regra_preenchimento: "Valores previstos: sim ou não."
                },
                {
                    id: "3.6",
                    nome: "Indicação de classe ativa/inativa",
                    rotulo: "earq.classe.indicadorAtiva",
                    definicao: "Indicação se a classe está ativa ou inativa para uso.",
                    objetivo: "Apoiar o SIGAD para restringir o uso apenas das classes ativas na classificação de novos documentos.",
                    obrigatoriedade: "O",
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "As classes inativas são aquelas que não são mais utilizadas, mas que não podem ser eliminadas devido ao fato de existirem documentos nela classificados anteriormente.",
                    exemplo: "--",
                    regra_preenchimento: "Valores previstos: ativa ou inativa."
                },
                {
                    id: "3.7",
                    nome: "Prazo na idade corrente",
                    rotulo: "earq.classe.prazoCorrente",
                    definicao: "Prazo de guarda previsto para a idade corrente.",
                    objetivo: "Apoiar o SIGAD na contagem do tempo de guarda do documento na idade corrente.",
                    obrigatoriedade: "O",
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "Esse elemento é utilizado pelo SIGAD em conjunto com o elemento Evento de contagem na idade corrente para identificar os documentos que já atingiram o prazo previsto.",
                    exemplo: "6 meses, 2 anos, 7 anos",
                    regra_preenchimento: "Preencher conforme o prazo previsto na tabela de temporalidade e destinação de documentos. No caso do prazo previsto na tabela de temporalidade e destinação de documentos ser 'enquanto vigora', o valor do elemento Prazo na idade corrente será 0 (zero), associado ao evento 'fim da vigência do documento'."
                },
                {
                    id: "3.8",
                    nome: "Evento de contagem na idade corrente",
                    rotulo: "earq.classe.eventoCorrente",
                    definicao: "Evento que dispara o início da contagem do prazo de guarda na idade corrente.",
                    objetivo: "Apoiar o SIGAD na contagem do tempo de guarda do documento na idade corrente.",
                    obrigatoriedade: "OA",
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "Esse elemento é utilizado pelo SIGAD em conjunto com o elemento Prazo na idade corrente para identificar os documentos que já atingiram o prazo previsto.",
                    exemplo: "Eventos: aprovação de contas, fim da vigência do documento, permanência do servidor público na instituição, conclusão do caso, trânsito em julgado.",
                    regra_preenchimento: "Preencher conforme previsto na tabela de temporalidade e destinação de documentos. Quando o evento não for especificado, considera-se o arquivamento como evento de início da contagem do prazo de guarda."
                },
                {
                    id: "3.9",
                    nome: "Prazo na idade intermediária",
                    rotulo: "earq.classe.prazoIntermediaria",
                    definicao: "Prazo de guarda previsto para a idade intermediária.",
                    objetivo: "Apoiar o SIGAD na contagem do tempo de guarda do documento na idade intermediária.",
                    obrigatoriedade: "OA",
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "Esse elemento é utilizado pelo SIGAD em conjunto com o elemento Evento de contagem na idade intermediária para identificar os documentos que já atingiram o prazo previsto.",
                    exemplo: "6 meses, 2 anos, 7 anos",
                    regra_preenchimento: "Preencher conforme o prazo previsto na tabela de temporalidade e destinação de documentos."
                },
                {
                    id: "3.10",
                    nome: "Evento de contagem na idade intermediária",
                    rotulo: "earq.classe.eventoIntermediaria",
                    definicao: "Evento que dispara o início da contagem do prazo de guarda na idade intermediária.",
                    objetivo: "Apoiar o SIGAD na contagem do tempo de guarda do documento na idade intermediária.",
                    obrigatoriedade: "OA",
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "Esse elemento é utilizado pelo SIGAD em conjunto com o elemento Prazo na idade intermediária para identificar os documentos que já atingiram o prazo previsto.",
                    exemplo: "Eventos: aprovação de contas, vigência do contrato, permanência do servidor público na instituição, conclusão do caso, trânsito em julgado.",
                    regra_preenchimento: "Preencher conforme previsto na tabela de temporalidade e destinação de documentos. Quando o evento não for especificado, considera-se a transferência como evento de início da contagem do prazo de guarda."
                },
                {
                    id: "3.11",
                    nome: "Destinação final",
                    rotulo: "earq.classe.destinacao",
                    definicao: "Destinação final prevista para o documento: preservação ou eliminação.",
                    objetivo: "Apoiar o SIGAD na produção das listagens de eliminação e de recolhimento.",
                    obrigatoriedade: "O",
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "--",
                    exemplo: "--",
                    regra_preenchimento: "Preencher conforme previsto na tabela de temporalidade e destinação de documentos. Valores previstos: eliminação ou preservação."
                },
                {
                    id: "3.12",
                    nome: "Sigilo associado à classe",
                    rotulo: "earq.classe.sigilo",
                    definicao: "Restrição de acesso aos documentos, aplicada de forma geral aos documentos de uma classe.",
                    objetivo: "Automatizar a atribuição de restrição de acesso a documentos que possuam informação pessoal, sensível e outras previstas em legislação vigente.",
                    obrigatoriedade: "OA",
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "Aplica-se a restrição de acesso aos documentos que possuam informação pessoal, sensível e outras previstas em legislação vigente. O valor previsto nesse elemento da classe deve ser herdado automaticamente pelo documento (elemento de identificação do documento - Níveis de acesso) no momento da classificação. Não confundir com a atribuição de grau de sigilo (confidencial, reservado, secreto e ultrassecreto) a documentos.",
                    exemplo: "Informação pessoal (no caso da classe Apuração de responsabilidade e ação disciplinar)",
                    regra_preenchimento: "Utilizar os valores previstos para o elemento de identificação do documento - Níveis de acesso, excetuando-se os relativos à atribuição de grau de sigilo (confidencial, reservado, secreto e ultrassecreto)."
                },
                {
                    id: "3.13",
                    nome: "Observação",
                    rotulo: "earq.classe.observacao",
                    definicao: "Registra informações adicionais sobre a classe.",
                    objetivo: "Registrar informações não previstas que podem ser relevantes para a gestão de documentos.",
                    obrigatoriedade: "F",
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "--",
                    exemplo: "Informações complementares tais como: previsão de conversão de suporte, legislação sobre os prazos de guarda.",
                    regra_preenchimento: "--"
                }
            ]
        },
        // =====================================================================
        // ENTIDADE 5 - EVENTOS DE GERENCIAMENTO DA CLASSE
        // =====================================================================
        {
            id: "5",
            nome: "Eventos de Gerenciamento da Classe",
            descricao: "Registra os eventos de gerenciamento do plano ou do código de classificação, incluindo abertura, desativação, reativação, mudança de nome, deslocamento e extinção de classes.",
            elementos: 6,
            itens: [
                {
                    id: "4.1",
                    nome: "Identificador do evento",
                    rotulo: "earq.eventoClasse.id",
                    definicao: "Identificador do evento de gerenciamento de classe que está sendo registrado.",
                    objetivo: "Identificar univocamente o evento.",
                    obrigatoriedade: "O",
                    repetibilidade: "Não repetível",
                    regra_preenchimento: "Deve ser registrado automaticamente pelo SIGAD.",
                    exemplo: "EGC-2024-001"
                },
                {
                    id: "4.2",
                    nome: "Tipo de evento",
                    rotulo: "earq.eventoClasse.tipo",
                    definicao: "Identificação do tipo de evento de gerenciamento de classe.",
                    objetivo: "Categorizar o evento ocorrido.",
                    obrigatoriedade: "O",
                    repetibilidade: "Não repetível",
                    regra_preenchimento: "Este elemento poderá assumir os seguintes valores: Abertura de classe; Desativação de classe; Reativação de classe; Mudança de nome de classe; Deslocamento de classe; Extinção de classe; Alteração de prazo corrente; Alteração de evento corrente; Alteração de prazo intermediária; Alteração de evento intermediária; Alteração de destinação; Alteração de sigilo associado à classe.",
                    exemplo: "AberturaClasse, MudancaNome"
                },
                {
                    id: "4.3",
                    nome: "Identificador da classe afetada",
                    rotulo: "earq.eventoClasse.classeId",
                    definicao: "Identificador da classe afetada pelo evento de gerenciamento de classe que está sendo registrado.",
                    objetivo: "Vincular o evento à classe afetada.",
                    obrigatoriedade: "O",
                    repetibilidade: "Não repetível",
                    regra_preenchimento: "O identificador deve ser obtido no elemento 3.1.1 earq.classe.id.",
                    exemplo: "CLS-021-001"
                },
                {
                    id: "4.4",
                    nome: "Data e hora do evento",
                    rotulo: "earq.eventoClasse.dataHora",
                    definicao: "Data e hora que o evento foi realizado.",
                    objetivo: "Registrar quando o evento ocorreu.",
                    obrigatoriedade: "O",
                    repetibilidade: "Não repetível",
                    regra_preenchimento: "É recomendável seguir o padrão da ISO 8601:2019 - Data elements and interchange formats - Information interchange - Representation of dates and times.",
                    exemplo: "2024-03-15T14:30:00Z"
                },
                {
                    id: "4.5",
                    nome: "Agente responsável pelo evento",
                    rotulo: "earq.eventoClasse.agenteId",
                    definicao: "Identificar o agente responsável pelo evento.",
                    objetivo: "Identificar quem executou a ação.",
                    obrigatoriedade: "O",
                    repetibilidade: "Não repetível",
                    regra_preenchimento: "O identificador deve ser obtido no elemento 4.1 identificador do agente.",
                    exemplo: "AG-001 (João Silva)"
                },
                {
                    id: "4.6",
                    nome: "Valor anterior do atributo",
                    rotulo: "earq.eventoClasse.valorAnterior",
                    definicao: "O valor do elemento antes da realização do evento.",
                    objetivo: "Possibilitar a recuperação histórica dos conteúdos alterados.",
                    obrigatoriedade: "OA",
                    repetibilidade: "Não repetível",
                    regra_preenchimento: "Antes de realizar a alteração, copiar o valor do elemento específico de Identificação da classe que está sendo alterado (earq.classe.nome, earq.classe.codigo, earq.classe.subordinacao, earq.classe.indicatorUso, earq.classe.indicatorAtiva, earq.classe.prazoCorrente, earq.classe.eventoCorrente, earq.classe.prazoIntermediaria, earq.classe.eventoIntermedia, earq.classe.destinacao, earq.classe.sigilo, earq.classe.observacao). Obrigatórios para os eventos EGC7, EGC8, EGC9, EGC10, EGC11 e EGC12.",
                    exemplo: "Nome anterior: 'Recrutamento', Nome novo: 'Recrutamento e Seleção'"
                }
            ]
        },
        // =====================================================================
        // ENTIDADE 6 - COMPONENTE DIGITAL
        // =====================================================================
        {
            id: "6",
            nome: "Componente Digital",
            descricao: "Informações referentes à identidade e às características do componente digital e possibilitam a identificação destes componentes no sistema de gestão arquivística, além de apoiar as ações de preservação de documentos digitais.",
            elementos: 15,
            itens: [
                {
                    id: "5.1",
                    nome: "Identificador do componente digital",
                    rotulo: "earq.componente.id",
                    definicao: "Designação usada para identificar no SIGAD os componentes digitais que integram o documento.",
                    objetivo: "Identificar de forma unívoca e persistente os componentes digitais dos documentos armazenados pelo SIGAD. Cada componente digital mantido no repositório tem que possuir um identificador único para relacioná-lo aos metadados descritivos e técnicos de forma que o SIGAD possa gerenciá-lo.",
                    obrigatoriedade: "O",
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "O identificador do componente digital tem que ser único no âmbito do SIGAD.",
                    exemplo: "IU24548; 10.1016/S1057-2317(03)00016-X; http://purl.oclc.org/OCLC/PURL/FAQ",
                    regra_preenchimento: "Pode ser utilizado um identificador persistente, tal como DOI, Handle System, mas isso não é obrigatório. Esta é uma decisão de implementação, e o tipo de identificador e a regra de formação deste devem estar claramente documentados."
                },
                {
                    id: "5.2",
                    nome: "Nome original",
                    rotulo: "earq.componente.nomeOriginal",
                    definicao: "Nome original do arquivo referente ao componente digital no momento em que foi capturado no SIGAD, antes de ser renomeado com o identificador do SIGAD.",
                    objetivo: "Possibilitar a identificação do componente digital por meio de seu nome original devido a razões diversas: o nome utilizado dentro do SIGAD pode não ser conhecido externamente; um produtor de arquivos pode procurar um documento pelo nome original do arquivo ou, ainda, o SIGAD pode necessitar reconstruir links originais com objetivo de acesso.",
                    obrigatoriedade: "F",
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "Quando um SIGAD está importando documento de outro SIGAD, deve-se registrar o nome original do componente para verificação posterior.",
                    exemplo: "0078NR.TIF",
                    regra_preenchimento: "O conteúdo deve ser obtido automaticamente no momento da captura do documento para o SIGAD."
                },
                {
                    id: "5.3",
                    nome: "Tamanho",
                    rotulo: "earq.componente.tamanho",
                    definicao: "Informa o tamanho do componente digital em bytes.",
                    objetivo: "Esta informação é útil para garantir a previsão de espaço de memória suficiente para mover ou processar arquivos, bem como para previsão de capacidade de armazenamento.",
                    obrigatoriedade: "F",
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "O tamanho deve ser sempre indicado na mesma unidade (bytes), pois dessa forma fica dispensado o registro da unidade de medida. No caso de transferência desse metadado para outro sistema, é necessário que a outra parte esteja ciente da unidade de medida.",
                    exemplo: "Tamanho: 345687",
                    regra_preenchimento: "Deve ser obtido automaticamente pelo SIGAD."
                },
                {
                    id: "5.4",
                    nome: "Software de criação",
                    rotulo: "earq.componente.softwareCriacao",
                    definicao: "Informação a respeito do software utilizado para criar o componente digital.",
                    objetivo: "Fornecer informações a respeito do software que criou o componente, para identificação de um software compatível para apresentação do documento ou para fins de conversão visando à preservação.",
                    obrigatoriedade: "F",
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "Devem ser informados o nome do software, a versão e a data da criação do componente digital. Esse metadado deve ser registrado de forma estruturada, em três subelementos: earq.componente.softwareCriacaoNome; earq.componente.softwareCriacaoVersao; earq.componente.softwareCriacaoData.",
                    exemplo: "earq.componente.softwareCriacaoNome: MS Word; earq.componente.softwareCriacaoVersao: 7; earq.componente.softwareCriacaoVersao: 2009-10-06",
                    regra_preenchimento: "Pode ser extraído automaticamente do arquivo no momento da captura, uma vez que esse metadado é comumente registrado internamente no arquivo."
                },
                {
                    id: "5.5",
                    nome: "Nível de composição",
                    rotulo: "earq.componente.nivelComposicao",
                    definicao: "Informação sobre se o componente digital está sujeito a um ou mais processos de compressão, criptografia ou empacotamento, bem como qual é esse nível.",
                    objetivo: "Fornecer informações para orientar as intervenções necessárias para o acesso ao documento.",
                    obrigatoriedade: "OA",
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "Nível de composição <0> (zero) indica que o componente digital não está sujeito a nenhum desses processos. Nível de composição <1> (um) ou maior indica que o componente digital foi submetido a um ou mais processos de compressão, criptografia ou empacotamento e que deve ser processado para que o documento possa ser acessado.",
                    exemplo: "0, 1, 2, ..., desconhecido",
                    regra_preenchimento: "Zero, números inteiros positivos ou 'desconhecido'."
                },
                {
                    id: "5.6",
                    nome: "Inibidor",
                    rotulo: "earq.componente.inibidor",
                    definicao: "Recursos que inibem o acesso, uso ou migração do componente digital.",
                    objetivo: "Informar se um arquivo está criptografado, se tem proteção por senha, bem como as informações necessárias para sua decifração e acesso.",
                    obrigatoriedade: "F",
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "Devem ser informados o tipo de inibidor, o alvo e a chave de acesso. Esse metadado deve ser registrado de forma estruturada, em três subelementos: Componente.InibidorTipo - refere-se ao método utilizado; Componente.InibidorAlvo - refere-se ao conteúdo ou à função protegida pelo inibidor; Componente.InibidorChave - refere-se à chave ou senha para decifração. A chave deve ser indicada, quando conhecida. No entanto, não é recomendável ser armazenada na forma de texto em um banco de dados não seguro.",
                    exemplo: "Componente.InibidorTipo: DES; Componente.InibidorAlvo: All content; Componente.Inibidorchave: 65kgedr5",
                    regra_preenchimento: "Quando um documento produzido externamente ao SIGAD tem um inibidor, é preciso que estas informações sejam fornecidas como metadados e enviadas juntamente com o documento capturado. Recomenda-se o uso de formas controladas para o subelemento 'InibidorTipo', preferencialmente a tabela sugerida no PREMIS Data dictionary: DES, PGP, Blowfish e Password Protection. Quando o subelemento 'InibidorAlvo' não é informado, assume-se que é todo o conteúdo do componente digital. Recomenda-se o uso de formas controladas para o subelemento 'InibidorAlvo', preferencialmente a tabela sugerida no PREMIS Data dictionary: All content, Function:play, Function:print."
                },
                {
                    id: "5.7",
                    nome: "Formato de arquivo",
                    rotulo: "earq.componente.formato",
                    definicao: "Identificação do formato de arquivo do componente digital.",
                    objetivo: "O conhecimento do formato de arquivo do componente digital é essencial para o planejamento e a implementação de diversas ações de preservação como, por exemplo, a conversão devido à obsolescência do formato.",
                    obrigatoriedade: "O",
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "Esse metadado deve ser registrado de forma estruturada, em dois subelementos: earq.componente.formatoNome; earq.componente.formatoVersao. Informações adicionais sobre o formato também podem ser registradas. Nos casos em que não for possível identificar o formato, este deve ser registrado como 'desconhecido', e posteriormente identificado.",
                    exemplo: "earq.componente.formatoNome: Adobe PDF; earq.componente.formatoVersao: 6.0",
                    regra_preenchimento: "Recomenda-se o uso de formas controladas para a designação do formato, como bases de dados de registro de formato. Ex.: PRONOM, MIME. Deve ser identificado automaticamente pelo SIGAD no momento da captura."
                },
                {
                    id: "5.8",
                    nome: "Localização",
                    rotulo: "earq.componente.localizacao",
                    definicao: "Informações sobre a localização do componente digital.",
                    objetivo: "As informações sobre localização são necessárias para encontrar o componente digital no sistema de armazenamento.",
                    obrigatoriedade: "OA",
                    repetibilidade: "Repetível",
                    nota_aplicacao: "Caso o SIGAD utilize um identificador como o handle, a localização estará implícita no identificador e não será necessário registrá-la novamente. Esse metadado deve ser registrado de forma estruturada, em dois subelementos: earq.componente.localizacaoTipo; earq.componente.localizacaoValor.",
                    exemplo: "earq.componente.localizacaoTipo: URI; earq.componente.localizacaoValor: https://www.gov.br/conarq/pt-br; earq.componente.localizacaoTipo: NTFS; earq.componente.localizacaoValor: C:\MyDocuments\Textos\Preservacao_digital",
                    regra_preenchimento: "De forma geral, a localização deve ser preenchida automaticamente pelo SIGAD."
                },
                {
                    id: "5.9",
                    nome: "Suporte",
                    rotulo: "earq.componente.suporte",
                    definicao: "Suporte físico no qual o componente digital está armazenado.",
                    objetivo: "As informações sobre o suporte em que o componente digital está armazenado apoiam o monitoramento das ações de preservação necessárias, como, por exemplo, a atualização de suporte.",
                    obrigatoriedade: "F",
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "Quanto ao suporte, devem ser registradas informações a respeito do tipo de suporte utilizado e sua vida útil. Os responsáveis pela preservação digital devem gerenciar a obsolescência das mídias de armazenamento. Em geral, esse monitoramento é realizado no nível do sistema de armazenamento, e não especificamente para cada item documental ou componente digital.",
                    exemplo: "Fita magnética, HD, CD-ROM, DVD.",
                    regra_preenchimento: "--"
                },
                {
                    id: "5.10",
                    nome: "Dependência de software",
                    rotulo: "earq.componente.sw",
                    definicao: "Informações sobre o ambiente de software necessário para apresentar e/ou usar os componentes digitais, incluindo a aplicação e o sistema operacional.",
                    objetivo: "Dar conhecimento do ambiente de software necessário para uso do recurso.",
                    obrigatoriedade: "OA",
                    repetibilidade: "Repetível",
                    nota_aplicacao: "Esse metadado deve ser registrado de forma estruturada, em quatro subelementos: earq.componente.swNome; earq.componente.swVersao; earq.componente.swTipo; earq.componente.swDocumentacao.",
                    exemplo: "earq.componente.swNome: Windows; earq.componente.swVersao: XP; earq.componente.swTipo: sistema operacional; earq.componente.swDocumentacao: manual do sistema; earq.componente.swNome: Word; earq.componente.swVersao: 7; earq.componente.swTipo: aplicativo/visualizador",
                    regra_preenchimento: "No caso de não haver uma versão formal do software, pode se indicar o ano em que foi lançado. Valores sugeridos para tipo de software: sistema operacional, aplicativo/visualizador, driver, biblioteca. Com relação à documentação, pode se indicar um identificador persistente que aponte para documentação do software, dentro ou fora do SIGAD."
                },
                {
                    id: "5.11",
                    nome: "Dependência de hardware",
                    rotulo: "earq.componente.hw",
                    definicao: "Informações sobre os componentes de hardware necessários para operar o software referenciado em earq.componente.sw, incluindo periféricos.",
                    objetivo: "Dar conhecimento do ambiente de hardware necessário para uso do recurso.",
                    obrigatoriedade: "OA",
                    repetibilidade: "Repetível",
                    nota_aplicacao: "Esse metadado deve ser registrado de forma estruturada, em três subelementos: earq.componente.hwNome; earq.componente.hwTipo; earq.componente.hwOutrasInformacoes.",
                    exemplo: "earq.componente.hwNome: Intel x86; earq.componente.hwTipo: processador; earq.componente.hwOutrasInformacoes: configuração mínima 60 Mhz; earq.componente.hwNome: RAM; earq.componente.hwTipo: memória; earq.componente.hwOutrasInformacoes: configuração mínima 64 Mb",
                    regra_preenchimento: "Na informação sobre o nome do hardware, deve se registrar o fabricante, o modelo e a versão, quando pertinente. Valores sugeridos para tipo de hardware: processador, memória, dispositivos de entrada/saída, dispositivo de armazenamento. Outras informações podem incluir a configuração mínima recomendada ou documentação pertinente. Com relação à documentação, pode se indicar um identificador persistente que aponte para documentação do hardware, dentro ou fora do SIGAD."
                },
                {
                    id: "5.12",
                    nome: "Outras dependências",
                    rotulo: "earq.componente.outrasDependencias",
                    definicao: "Informações sobre outras dependências, que não sejam as de software e hardware, necessárias para apresentar ou usar os documentos (por exemplo, DTD, XML Schema, fontes, folha de estilo).",
                    objetivo: "Dar informação sobre outros tipos de dependências, além de software e hardware, necessárias para uso do recurso.",
                    obrigatoriedade: "OA",
                    repetibilidade: "Repetível",
                    nota_aplicacao: "Esse metadado deve ser registrado de forma estruturada, em dois subelementos: earq.componente.outrasDependenciasTipo; earq.componente.outrasDependenciasId. Em alguns casos o identificador do recurso já torna evidente o tipo do componente necessário.",
                    exemplo: "earq.componente.outrasDependenciasTipo: URI; earq.componente.outrasDependenciasId: http://www.arquivonacional.gov.br/XYZ/DTD/ojns.dtd",
                    regra_preenchimento: "--"
                },
                {
                    id: "5.13",
                    nome: "Relação com outros componentes digitais",
                    rotulo: "earq.componente.relacao",
                    definicao: "Registro das relações de um componente digital com outros componentes digitais.",
                    objetivo: "Tornar explícito o relacionamento entre componentes digitais para possibilitar o processamento e acesso aos documentos. Alguns documentos são formados por diversos componentes digitais relacionados. Estas relações são estruturais.",
                    obrigatoriedade: "OA",
                    repetibilidade: "Repetível",
                    nota_aplicacao: "As relações estruturais são fundamentais para apresentar o documento ao usuário. Devem ser registradas as seguintes informações para cada relacionamento: identificação dos objetos relacionados, tipo da relação (por exemplo, é parte de). As instituições devem estabelecer os tipos de relacionamentos mais relevantes, que deverão ser controlados nos metadados. Estas relações podem ser expressas das seguintes formas: tem parte de, é parte de (expressa as relações estruturais); tem fonte de (um componente digital é uma versão de outro componente, criado por uma transformação), é fonte de (um componente derivado de outro componente por um processo de transformação).",
                    exemplo: "'relat_2009.pdf' é fonte de 'relat_2009.zip'",
                    regra_preenchimento: "--"
                },
                {
                    id: "5.14",
                    nome: "Fixidade",
                    rotulo: "earq.componente.fixidade",
                    definicao: "Informações utilizadas para verificar se o componente digital sofreu mudanças não documentadas.",
                    objetivo: "Verificar se o componente digital foi alterado de forma não documentada ou não autorizada, comprometendo sua autenticidade.",
                    obrigatoriedade: "O",
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "Esse elemento registra informações do código hash do componente digital, e de como este foi gerado, de forma a permitir a verificação da fixidade no futuro. Esse elemento não se refere à verificação da fixidade, que deve ser registrada no evento correspondente. Para se realizar a verificação da fixidade, um código hash deve ser previamente gerado e armazenado, para ser comparado a outro gerado posteriormente. Se os códigos coincidirem, significa que o objeto não foi alterado nesse intervalo de tempo. Esse metadado deve ser registrado de forma estruturada, em três subelementos: earq.componente.fixidadeAlgoritmo; earq.componente.fixidadeCodigoHash; earq.componente.fixidadeOriginador. Originador refere-se ao agente que fez o cálculo do código hash armazenado, que pode ser calculado pelo próprio SIGAD ou ter sido enviado junto com o documento.",
                    exemplo: "earq.componente.fixidadeAlgoritmo: MD5; earq.componente.fixidadeCodigoHash: da4f2ebd436f1cf88e5a39b3a257edf4a22be3c955ac49da2e2; earq.componente.fixidadeOriginador: MD5",
                    regra_preenchimento: "Calculado e armazenado automaticamente pelo SIGAD. Recomenda-se o uso de formas controladas para a designação do algoritmo usado para gerar o código hash, preferencialmente a tabela sugerida no PREMIS Data Dictionary. O originador deve ser representado por um identificador do agente que realizou o cálculo hash. Caso o originador seja um agente conhecido do SIGAD, pode se usar o Id do agente."
                },
                {
                    id: "5.15",
                    nome: "Assinatura digital",
                    rotulo: "earq.componente.assinatura",
                    definicao: "Informações sobre a assinatura digital aplicada aos componentes digitais.",
                    objetivo: "Usada para autenticar quem assinou o componente digital e/ou a informação contida nele. Também é usado para armazenar as informações relacionadas a essa assinatura de forma a apoiar validações posteriores.",
                    obrigatoriedade: "OA",
                    repetibilidade: "Repetível",
                    nota_aplicacao: "Esse metadado deve ser registrado de forma estruturada, em seis subelementos: earq.componente.assinaturaCodificacao; earq.signatario; earq.componente.assinaturaMetodo; earq.componente.assinaturaValor; earq.componente.assinaturaRegrasValidacao; earq.componente.assinaturaChave. A informação da codificação utilizada é essencial para se interpretar corretamente o valor da assinatura e a chave. O signatário é o indivíduo, instituição ou autoridade responsável por gerar a assinatura. Método refere-se aos algoritmos utilizados para criptografar e calcular o hash na geração da assinatura digital. Regras de validação são as operações que devem ser realizadas para validar a assinatura digital. Chave refere-se à chave pública do signatário necessária para validar a assinatura.",
                    exemplo: "earq.componente.assinaturaCodificacao: Base64; earq.signatario: Ministério da Saúde; earq.componente.assinaturaMetodo: DSA-SHAI; earq.componente.assinaturaValor: da4f2ebd436f1cf88e5a39b3a257edf4a22be3c955ac49",
                    regra_preenchimento: "Calculado e armazenado automaticamente pelo SIGAD. Recomenda-se o uso de formas controladas para a designação da codificação, preferencialmente a tabela sugerida no PREMIS Data Dictionary. Caso o signatário seja um agente conhecido do SIGAD, pode se usar o Id do agente. Recomenda-se o uso de formas controladas para a designação do método, preferencialmente a tabela sugerida no PREMIS Data Dictionary. As regras de validação podem incluir informações tais como: o método de canonização usado antes de calcular o resumo da mensagem ou se o objeto foi normalizado antes de assinar. Esse metadado pode apontar para um arquivo com a documentação dessas regras."
                }
            ]
        },
        // =====================================================================
        // ENTIDADE 7 - EVENTOS DE PRESERVAÇÃO
        // =====================================================================
        {
            id: "7",
            nome: "Eventos de Preservação",
            descricao: "Informações referentes a eventos de preservação ocorridos com o componente digital: compressão, decifração, validação de assinatura, cálculo hash, verificação de fixidade, migração, replicação e verificação de vírus.",
            elementos: 7,
            itens: [
                {
                    id: "6.1",
                    nome: "Identificador do evento",
                    rotulo: "earq.ePres.id",
                    definicao: "Identificador do evento de preservação que está sendo registrado.",
                    objetivo: "Identificar univocamente o evento.",
                    obrigatoriedade: "O",
                    repetibilidade: "Não repetível",
                    regra_preenchimento: "Deve ser registrado automaticamente pelo SIGAD.",
                    exemplo: "EPRES-2024-001"
                },
                {
                    id: "6.2",
                    nome: "Tipo de evento",
                    rotulo: "earq.ePres.tipo",
                    definicao: "Categoriza o tipo de evento de preservação.",
                    objetivo: "Categorizar o evento ocorrido.",
                    obrigatoriedade: "O",
                    repetibilidade: "Não repetível",
                    regra_preenchimento: "Este elemento poderá assumir, no mínimo, os seguintes valores: Compressão; Decifração; Validação de assinatura digital; Cálculo hash; Verificação de fixidade; Migração; Replicação; Verificação de vírus; Validação.",
                    exemplo: "Migracao, CalculoHash"
                },
                {
                    id: "6.3",
                    nome: "Componente digital",
                    rotulo: "earq.ePres.componenteId",
                    definicao: "Identificador do componente digital afetado pelo evento de preservação.",
                    objetivo: "Vincular o evento ao componente afetado.",
                    obrigatoriedade: "O",
                    repetibilidade: "Repetível",
                    regra_preenchimento: "O código deve ser obtido no metadado earq.componente.id.",
                    exemplo: "IU24548"
                },
                {
                    id: "6.4",
                    nome: "Data e hora do evento",
                    rotulo: "earq.ePres.dataHora",
                    definicao: "Data e hora que o evento foi realizado, ou de seu início.",
                    objetivo: "Registrar quando o evento ocorreu.",
                    obrigatoriedade: "O",
                    repetibilidade: "Não repetível",
                    regra_preenchimento: "É recomendável seguir o padrão da ISO 8601:2019 - Data elements and interchange formats - Information interchange - Representation of dates and times.",
                    exemplo: "2024-03-15T14:30:00Z"
                },
                {
                    id: "6.5",
                    nome: "Agente responsável pelo evento",
                    rotulo: "earq.ePres.agenteId",
                    definicao: "Agente responsável pelo evento.",
                    objetivo: "Identificar quem executou a ação.",
                    obrigatoriedade: "O",
                    repetibilidade: "Repetível",
                    regra_preenchimento: "O identificador deve ser obtido no metadado earq.agente.id.",
                    exemplo: "AG-001 (Sistema)"
                },
                {
                    id: "6.6",
                    nome: "Resultado do evento",
                    rotulo: "earq.ePres.resultado",
                    definicao: "Resultado do evento de preservação.",
                    objetivo: "Registrar o resultado da ação de preservação.",
                    obrigatoriedade: "OA",
                    repetibilidade: "Repetível",
                    regra_preenchimento: "Recomenda-se o uso de tabela com os resultados possíveis para padronização do preenchimento do elemento de metadado.",
                    exemplo: "00 [código para registrar que a ação foi completada com sucesso]; CV-01 [código para registrar que o checksum foi validado]"
                },
                {
                    id: "6.7",
                    nome: "Detalhes do evento",
                    rotulo: "earq.ePres.detalhe",
                    definicao: "Registro de informações adicionais a respeito do evento de preservação.",
                    objetivo: "Complementar a descrição do evento.",
                    obrigatoriedade: "F",
                    repetibilidade: "Repetível",
                    nota_aplicacao: "Pode se registrar a metodologia e/ou tecnologia (software e hardware) utilizada no evento, bem como eventuais consequências no documento.",
                    exemplo: "Migração de formato DOC para PDF/A, software conversor v2.1",
                    regra_preenchimento: "--"
                }
            ]
        },
        // =====================================================================
        // ENTIDADE 8 - AGENTE
        // =====================================================================
        {
            id: "8",
            nome: "Agente",
            descricao: "Metadados que identificam os agentes envolvidos na captura e no acesso aos documentos, bem como em todos os eventos de gestão do ciclo de vida, gestão de processos, gerenciamento do plano de classificação e de preservação.",
            elementos: 3,
            itens: [
                {
                    id: "7.1",
                    nome: "Identificador do agente",
                    rotulo: "earq.agente.id",
                    definicao: "Código que identifica univocamente o agente no SIGAD.",
                    objetivo: "Identificar univocamente o agente no SIGAD.",
                    obrigatoriedade: "O",
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "Recomenda-se utilizar o código identificador já utilizado na instituição, tais como o número de matrícula, CPF etc.",
                    exemplo: "999.999.999-99; 65418932",
                    regra_preenchimento: "--"
                },
                {
                    id: "7.2",
                    nome: "Nome do agente",
                    rotulo: "earq.agente.nome",
                    definicao: "Nome do agente que interage com o SIGAD.",
                    objetivo: "Identificar o nome do agente.",
                    obrigatoriedade: "O",
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "Um agente pode ser uma pessoa física, jurídica ou um sistema informatizado.",
                    exemplo: "João da Silva; Ministério da Educação; SIAFI",
                    regra_preenchimento: "--"
                },
                {
                    id: "7.3",
                    nome: "Status do agente",
                    rotulo: "earq.agente.status",
                    definicao: "Indicação se o agente está ativo ou inativo.",
                    objetivo: "Apoiar o SIGAD para permitir ações somente de agentes ativos.",
                    obrigatoriedade: "O",
                    repetibilidade: "Não repetível",
                    nota_aplicacao: "Este metadado refere-se ao status do agente no SIGAD e não à sua situação em outros contextos da organização.",
                    exemplo: "--",
                    regra_preenchimento: "Valores previstos: ativo ou inativo."
                }
            ]
        }
    ]
};