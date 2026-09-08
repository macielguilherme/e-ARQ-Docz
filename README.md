# e-ARQ Brasil — Modelo de Requisitos

Aplicação web interativa para consulta ao **e-ARQ Brasil**, o Modelo de Requisitos para Sistemas Informatizados de Gestão Arquivística de Documentos, publicado pelo Arquivo Nacional / CONARQ (2ª versão, 2022).

O objetivo do projeto é transformar o documento oficial (PDF) em uma ferramenta de consulta rápida, navegável e responsiva, útil para arquivistas, desenvolvedores e gestores que precisam entender e implementar os requisitos de um SIGAD (Sistema Informatizado de Gestão Arquivística de Documentos).

## ✨ Funcionalidades

- **Visão Geral** — conceitos fundamentais do e-ARQ Brasil, diagramas de organização documental e explicações didáticas.
- **Requisitos Funcionais e Não Funcionais** — lista completa e pesquisável dos requisitos, com detalhamento de cada item (explicação, implementação técnica, exemplo prático e boas práticas).
- **Métricas e Insights** — estatísticas e gráficos sobre a distribuição dos requisitos por capítulo e por obrigatoriedade.
- **Metadados** — esquema de metadados previsto no modelo.
- **Glossário** — termos e definições da terminologia arquivística.
- **Referências** — normas, resoluções e bibliografia utilizadas na elaboração do e-ARQ Brasil.
- **Modelo de Entidades e Relacionamentos (MER)** — diagrama conceitual (via Mermaid.js).
- **Instrumentos Técnicos** — instrumentos de gestão arquivística.
- **Exportação** — geração de PDF com os requisitos selecionados (via jsPDF).
- **Pesquisa global** — busca por requisitos diretamente na barra de navegação.
- **PWA (Progressive Web App)** — instalável, com Service Worker e suporte offline básico.
- **Totalmente responsivo** — menu lateral em formato de gaveta (drawer) no celular, grades e espaçamentos adaptados para telas pequenas.

## 🖥️ Tecnologias utilizadas

- HTML5 + JavaScript (vanilla)
- [Tailwind CSS](https://tailwindcss.com/) (via CDN)
- [Mermaid.js](https://mermaid.js.org/) — diagramas do MER
- [jsPDF](https://github.com/parallax/jsPDF) + [jsPDF-AutoTable](https://github.com/simonbengtsson/jsPDF-AutoTable) — exportação em PDF
- Google Fonts (Inter, Public Sans, Material Symbols)
- Service Worker (PWA)

## 📂 Estrutura do projeto

```
├── index.html                  # Estrutura principal e lógica de navegação
├── styles.css                  # Estilos customizados (além do Tailwind)
├── manifest.json                # Configuração do PWA
├── sw.js                        # Service Worker (cache offline)
│
├── visaogeral.js                 # Dados da seção "Visão Geral"
├── visaogeralDetalhes.js         # Detalhamentos da Visão Geral
├── requisitos.js                 # Requisitos funcionais
├── requisitosDetalhes.js         # Detalhamento dos requisitos funcionais
├── requisitosNF.js               # Requisitos não funcionais
├── requisitosNFDetalhes.js       # Detalhamento dos requisitos não funcionais
├── metadados.js                  # Esquema de metadados
├── glossario.js                  # Termos do glossário
├── referencias.js                # Referências resumidas
├── referenciasCompletas.js       # Bibliografia completa
├── metricas.js                   # Dados estatísticos
├── instrumentos.js               # Instrumentos técnicos de gestão
└── creditos.js                   # Créditos e ficha catalográfica
```

## 🚀 Como executar localmente

Este projeto não requer build nem instalação de dependências — é um site estático.

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
   ```
2. Sirva os arquivos com um servidor local simples. Exemplos:
   ```bash
   # Python
   python3 -m http.server 8080

   # Node.js
   npx serve .
   ```
3. Abra no navegador: `http://localhost:8080`

> ⚠️ Não recomendado abrir o `index.html` diretamente pelo navegador (`file://`), pois o Service Worker e algumas requisições podem não funcionar corretamente sem um servidor HTTP.

## 🌐 Publicação (deploy)

O projeto pode ser publicado como site estático em qualquer serviço de hospedagem, por exemplo:

- **GitHub Pages** — em *Settings > Pages*, selecione a branch `main` e a pasta raiz.
- **Netlify** ou **Vercel** — basta conectar o repositório.

## 📱 Responsividade

A interface foi adaptada para dispositivos móveis, incluindo:

- Menu de navegação em formato de gaveta lateral (drawer), acionado por um botão de menu (☰).
- Tipografia com escala própria para telas pequenas.
- Grades e espaçamentos otimizados para não sobrecarregar telas menores.
- Tabelas e diagramas com rolagem horizontal contida, sem quebrar o layout da página.

## 📄 Fonte oficial

O conteúdo é baseado no documento oficial do Arquivo Nacional:

> **e-ARQ Brasil: Modelo de Requisitos para Sistemas Informatizados de Gestão Arquivística de Documentos** — 2ª versão, Arquivo Nacional, 2022. ISBN 978-85-7009-007-2.

PDF oficial disponível em: https://www.gov.br/arquivonacional/pt-br/servicos/publicacoes/e-arq-brasil_v2.pdf

## 👤 Autoria

Desenvolvido por **Guilherme Farias Maciel Ribeiro**.

## 📝 Licença

Este projeto é uma ferramenta de consulta não oficial baseada em conteúdo público do Arquivo Nacional / CONARQ. Consulte o documento original para fins normativos ou oficiais.