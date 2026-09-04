// ============================================================
// RELATÓRIOS - Funções de Exportação (Compatibilidade)
// ATUALIZADO CONFORME RELATÓRIO TÉCNICO - 21/08/2026
// ============================================================

// As funções de exportação estão integradas no dashboard.js
// Este arquivo é mantido para compatibilidade e como módulo
// de relatórios independente

console.log('📊 Módulo de relatórios carregado.');

// ============================================================
// FUNÇÕES DE RELATÓRIO ADICIONAIS (Extras)
// ============================================================

/**
 * Gera um relatório em formato HTML para visualização no navegador
 */
function gerarRelatorioHTML() {
    const stats = getEstatisticas();
    const requisitos = Object.values(cruzamentoRequisitos);
    const resumoGrupos = getResumoPorGrupo();

    let html = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Relatório de Conformidade - DocZ</title>
        <style>
            body { font-family: Arial, sans-serif; max-width: 1200px; margin: 0 auto; padding: 20px; background: #f8f9fa; }
            h1 { color: #05143B; border-bottom: 3px solid #0D2D8C; padding-bottom: 10px; }
            h2 { color: #0A2472; margin-top: 30px; }
            .stats { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin: 20px 0; }
            .stat-box { background: white; padding: 15px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); text-align: center; }
            .stat-box .number { font-size: 28px; font-weight: bold; color: #05143B; }
            .stat-box .label { font-size: 12px; color: #64748b; text-transform: uppercase; }
            table { width: 100%; border-collapse: collapse; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
            th { background: #eef2ff; color: #05143B; padding: 12px 15px; text-align: left; font-size: 12px; text-transform: uppercase; }
            td { padding: 10px 15px; border-bottom: 1px solid #e2e8f0; font-size: 14px; }
            tr:hover { background: #f1f5ff; }
            .status { display: inline-block; padding: 3px 10px; border-radius: 20px; font-size: 12px; font-weight: 600; }
            .status.atendido { background: #e8edff; color: #0D2D8C; }
            .status.parcial { background: #fff7e6; color: #92400e; }
            .status.nao-atendido { background: #feecec; color: #991b1b; }
            .status.nao-avaliado { background: #f1f4fa; color: #64748b; }
            .grupo { font-size: 12px; padding: 2px 8px; border-radius: 4px; background: #eef2ff; color: #0A2472; }
            .footer { margin-top: 30px; padding-top: 20px; border-top: 1px solid #dbe3f5; text-align: center; font-size: 12px; color: #64748b; }
            .summary { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); margin: 20px 0; }
            .progress { width: 100%; height: 8px; background: #e2e8f0; border-radius: 4px; overflow: hidden; margin: 5px 0; }
            .progress .fill { height: 100%; border-radius: 4px; transition: width 0.5s; }
    `;

    // Adicionar cores dinamicamente
    html += `
        </style>
    </head>
    <body>
        <h1>📋 Relatório de Conformidade e-ARQ Brasil</h1>
        <p><strong>DocZ</strong> - Sistema Informatizado de Gestão Arquivística de Documentos</p>
        <p>Data de Geração: ${new Date().toLocaleString('pt-BR')}</p>
        <p>Data da Avaliação: 21 de agosto de 2026</p>
        
        <h2>📊 Estatísticas Gerais</h2>
        <div class="stats">
            <div class="stat-box">
                <div class="number">${stats.total}</div>
                <div class="label">Total de Requisitos</div>
            </div>
            <div class="stat-box" style="border-left: 4px solid #10b981;">
                <div class="number" style="color: #10b981;">${stats.atendidos}</div>
                <div class="label">Atendidos</div>
            </div>
            <div class="stat-box" style="border-left: 4px solid #f59e0b;">
                <div class="number" style="color: #f59e0b;">${stats.parcial}</div>
                <div class="label">Parcialmente Atendidos</div>
            </div>
            <div class="stat-box" style="border-left: 4px solid #ef4444;">
                <div class="number" style="color: #ef4444;">${stats.naoAtendidos}</div>
                <div class="label">Não Atendidos</div>
            </div>
            <div class="stat-box" style="border-left: 4px solid #64748b;">
                <div class="number" style="color: #64748b;">${stats.naoAvaliados}</div>
                <div class="label">Não Avaliados</div>
            </div>
        </div>
        
        <div class="summary">
            <h3 style="margin:0 0 10px 0;">Conformidade Geral</h3>
            <div style="display:flex;align-items:center;gap:20px;">
                <span style="font-size:32px;font-weight:bold;color:#0D2D8C;">${stats.conformidadeGeral}%</span>
                <div style="flex:1;">
                    <div class="progress">
                        <div class="fill" style="width:${stats.conformidadeGeral}%;background:${stats.conformidadeGeral >= 80 ? '#10b981' : stats.conformidadeGeral >= 50 ? '#f59e0b' : '#ef4444'};"></div>
                    </div>
                    <div style="display:flex;justify-content:space-between;font-size:12px;color:#64748b;">
                        <span>${stats.atendidos} atendidos</span>
                        <span>${stats.avaliados} avaliados</span>
                    </div>
                </div>
            </div>
        </div>
        
        <h2>📈 Resumo por Grupo</h2>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:15px;margin:20px 0;">
    `;

    for (const [grupo, dados] of Object.entries(resumoGrupos)) {
        const total = dados.total;
        const avaliados = total - dados.naoAvaliados;
        const peso = dados.atendidos + (dados.parcial * 0.5);
        const pct = avaliados > 0 ? Math.round((peso / avaliados) * 100) : 0;
        const cor = pct >= 90 ? '#10b981' : pct >= 70 ? '#f59e0b' : '#ef4444';

        html += `
            <div style="background:white;padding:15px;border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,0.1);">
                <div style="font-weight:bold;color:#05143B;">${grupo}</div>
                <div style="font-size:24px;font-weight:bold;color:#0D2D8C;">${pct}%</div>
                <div class="progress">
                    <div class="fill" style="width:${pct}%;background:${cor};"></div>
                </div>
                <div style="font-size:12px;color:#64748b;">
                    ${dados.atendidos}/${total} atendidos
                    ${dados.naoAvaliados > 0 ? ` · ${dados.naoAvaliados} não avaliados` : ''}
                </div>
            </div>
        `;
    }

    html += `
        </div>
        
        <h2>📋 Lista de Requisitos</h2>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Requisito</th>
                    <th>Status</th>
                    <th>Grupo</th>
                </tr>
            </thead>
            <tbody>
    `;

    requisitos.sort((a, b) => a.id.localeCompare(b.id));
    requisitos.forEach(r => {
        const statusClass = getStatusClass ? getStatusClass(r.status) : 'atendido';
        const statusLabel = getStatusLabel ? getStatusLabel(r.status) : r.status;
        html += `
            <tr>
                <td><strong>${r.id}</strong></td>
                <td>${r.titulo}</td>
                <td><span class="status ${statusClass}">${statusLabel}</span></td>
                <td><span class="grupo">${r.grupo}</span></td>
            </tr>
        `;
    });

    html += `
            </tbody>
        </table>
        
        <div class="footer">
            <p>Relatório gerado automaticamente pelo DocZ · Conformidade e-ARQ Brasil</p>
            <p>Documento: Dicionário de Dados · Data: 21/08/2026</p>
        </div>
    </body>
    </html>
    `;

    return html;
}

/**
 * Exporta o relatório em HTML
 */
function exportarHTML() {
    const html = gerarRelatorioHTML();
    downloadArquivo(html, `relatorio_conformidade_${new Date().toISOString().slice(0, 10)}.html`, 'text/html');
}

/**
 * Gera um relatório resumido em Markdown
 */
function exportarMarkdown() {
    const stats = getEstatisticas();
    const requisitos = Object.values(cruzamentoRequisitos);
    const resumoGrupos = getResumoPorGrupo();

    let md = `# Relatório de Conformidade e-ARQ Brasil\n\n`;
    md += `**DocZ** - Sistema Informatizado de Gestão Arquivística de Documentos\n\n`;
    md += `Data de Geração: ${new Date().toLocaleString('pt-BR')}\n\n`;
    md += `## Estatísticas Gerais\n\n`;
    md += `| Indicador | Valor |\n`;
    md += `|-----------|-------|\n`;
    md += `| Total de Requisitos | ${stats.total} |\n`;
    md += `| Atendidos | ${stats.atendidos} |\n`;
    md += `| Parcialmente Atendidos | ${stats.parcial} |\n`;
    md += `| Não Atendidos | ${stats.naoAtendidos} |\n`;
    md += `| Não Avaliados | ${stats.naoAvaliados} |\n`;
    md += `| Conformidade Geral | ${stats.conformidadeGeral}% |\n`;
    md += `| Conformidade (Avaliáveis) | ${stats.conformidade}% |\n\n`;

    md += `## Resumo por Grupo\n\n`;
    md += `| Grupo | Atendidos | Total | Conformidade |\n`;
    md += `|-------|-----------|-------|--------------|\n`;
    for (const [grupo, dados] of Object.entries(resumoGrupos)) {
        const total = dados.total;
        const avaliados = total - dados.naoAvaliados;
        const peso = dados.atendidos + (dados.parcial * 0.5);
        const pct = avaliados > 0 ? Math.round((peso / avaliados) * 100) : 0;
        md += `| ${grupo} | ${dados.atendidos} | ${total} | ${pct}% |\n`;
    }

    md += `\n## Lista de Requisitos\n\n`;
    md += `| ID | Requisito | Status | Grupo |\n`;
    md += `|----|-----------|--------|-------|\n`;
    requisitos.sort((a, b) => a.id.localeCompare(b.id));
    requisitos.forEach(r => {
        md += `| ${r.id} | ${r.titulo} | ${r.status} | ${r.grupo} |\n`;
    });

    return md;
}

// ============================================================
// FUNÇÃO DE DOWNLOAD (Compatível com dashboard.js)
// ============================================================

function downloadArquivo(conteudo, nomeArquivo, tipo) {
    const blob = new Blob([conteudo], { type: `${tipo};charset=utf-8` });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = nomeArquivo;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
}

// ============================================================
// EXPORTAÇÃO DE RELATÓRIO COMPLETO (Tudo em um)
// ============================================================

function exportarRelatorioCompleto() {
    // Exportar todos os formatos
    exportarConformidade();
    exportarPendencias();
    exportarResumo();
    exportarCSV();
    exportarHTML();

    console.log('📊 Todos os relatórios foram gerados!');
    alert('✅ Todos os relatórios foram gerados e baixados!');
}

// ============================================================
// FUNÇÕES DE RELATÓRIO POR CAPÍTULO
// ============================================================

function exportarRelatorioCapitulo(capituloKey) {
    const todosRequisitos = Object.values(cruzamentoRequisitos);
    const requisitos = todosRequisitos.filter(r => r.capitulo === capituloKey);
    const capitulos = getCapitulos();
    const capitulo = capitulos[capituloKey];

    if (!capitulo || requisitos.length === 0) {
        alert(`Nenhum requisito encontrado para o capítulo ${capituloKey}`);
        return;
    }

    const nomeCapitulo = capituloKey === 'GT' ? 'GT Preservação Digital' : `Capítulo ${capituloKey}`;
    const total = requisitos.length;
    const atendidos = requisitos.filter(r => r.status === 'Atendido').length;
    const parcial = requisitos.filter(r => r.status === 'Parcialmente Atendido').length;
    const naoAtendidos = requisitos.filter(r => r.status === 'Não Atendido').length;
    const naoAvaliados = requisitos.filter(r => r.status === 'Não Avaliado').length;
    const avaliados = total - naoAvaliados;
    const peso = atendidos + (parcial * 0.5);
    const pct = avaliados > 0 ? Math.round((peso / avaliados) * 100) : 0;

    let relatorio = `========================================\n`;
    relatorio += `RELATÓRIO - ${nomeCapitulo}\n`;
    relatorio += `DocZ - Conformidade e-ARQ Brasil\n`;
    relatorio += `========================================\n\n`;
    relatorio += `Data de Geração: ${new Date().toLocaleString('pt-BR')}\n`;
    relatorio += `Data da Avaliação: 21 de agosto de 2026\n\n`;

    relatorio += `=== ESTATÍSTICAS ===\n`;
    relatorio += `Total de Requisitos: ${total}\n`;
    relatorio += `Atendidos: ${atendidos}\n`;
    relatorio += `Parcialmente Atendidos: ${parcial}\n`;
    relatorio += `Não Atendidos: ${naoAtendidos}\n`;
    relatorio += `Não Avaliados: ${naoAvaliados}\n`;
    relatorio += `Conformidade: ${pct}%\n\n`;

    relatorio += `=== REQUISITOS ===\n`;
    relatorio += `------------------------------------------------------------\n`;
    relatorio += `ID       | Status                 | Título\n`;
    relatorio += `------------------------------------------------------------\n`;

    requisitos.sort((a, b) => a.id.localeCompare(b.id));
    requisitos.forEach(r => {
        const status = r.status.padEnd(20);
        relatorio += `${r.id.padEnd(8)} | ${status} | ${r.titulo}\n`;
    });

    downloadArquivo(relatorio, `capitulo_${capituloKey}_${new Date().toISOString().slice(0, 10)}.txt`, 'text/plain');
}

// ============================================================
// INICIALIZAÇÃO - Adicionar botões extras se necessário
// ============================================================

console.log('📊 Módulo de relatórios pronto para uso.');
console.log('📊 Funções disponíveis:');
console.log('  - exportarConformidade()');
console.log('  - exportarPendencias()');
console.log('  - exportarResumo()');
console.log('  - exportarCSV()');
console.log('  - exportarHTML()');
console.log('  - exportarMarkdown()');
console.log('  - exportarRelatorioCompleto()');
console.log('  - exportarRelatorioCapitulo(capituloKey)');
console.log('  - gerarRelatorioHTML()');