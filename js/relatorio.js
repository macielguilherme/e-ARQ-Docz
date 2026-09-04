// ============================================================
// RELATÓRIOS - Funções de Exportação
// ATUALIZADO PARA USAR window.cruzamentoRequisitosCompleto
// TODAS AS DATAS SÃO DINÂMICAS (BASEADAS NO RELÓGIO DO USUÁRIO)
// ============================================================

console.log('Modulo de relatorios carregado.');

// ============================================================
// CSS COMPLETO PARA PDFs
// ============================================================

const PDF_STYLES = `
<style>
    /* Reset e base */
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
        font-family: -apple-system, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
        max-width: 1000px;
        margin: 0 auto;
        padding: 25px;
        background: #ffffff;
        color: #1a1a2e;
        font-size: 11px;
        line-height: 1.6;
    }
    
    .no-break { page-break-inside: avoid; }
    .break-after { page-break-after: avoid; }
    .break-before { page-break-before: avoid; }
    
    .pdf-header {
        text-align: center;
        padding: 15px 0 18px;
        border-bottom: 3px solid #0D2D8C;
        margin-bottom: 20px;
    }
    .pdf-header .logo {
        max-width: 140px;
        height: auto;
        margin-bottom: 6px;
    }
    .pdf-header h1 {
        font-size: 20px;
        font-weight: 700;
        color: #0D2D8C;
        letter-spacing: -0.5px;
    }
    .pdf-header .subtitle {
        font-size: 13px;
        color: #555;
        margin-top: 4px;
    }
    .pdf-header .meta-info {
        display: flex;
        justify-content: center;
        gap: 15px;
        flex-wrap: wrap;
        font-size: 10px;
        color: #666;
        margin-top: 8px;
    }
    .pdf-header .meta-info span {
        background: #f0f4ff;
        padding: 3px 14px;
        border-radius: 4px;
        border: 1px solid #d0d8ea;
    }
    .pdf-header .badge-conformidade {
        background: #0D2D8C;
        color: #fff;
        font-weight: 600;
        padding: 3px 12px;
        border-radius: 4px;
        border: none;
    }
    
    .section { margin: 18px 0; }
    .section-title {
        font-size: 15px;
        font-weight: 700;
        color: #0D2D8C;
        border-bottom: 2px solid #d0d8ea;
        padding-bottom: 5px;
        margin-bottom: 12px;
    }
    
    .stats-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 8px;
        margin: 10px 0 16px;
    }
    .stat-card {
        background: #f8faff;
        border: 1px solid #e0e8f5;
        border-radius: 6px;
        padding: 10px 8px;
        text-align: center;
        page-break-inside: avoid;
    }
    .stat-card .number {
        font-size: 22px;
        font-weight: 700;
        color: #0D2D8C;
    }
    .stat-card .label {
        font-size: 8px;
        color: #8888aa;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        margin-top: 2px;
    }
    .stat-card.success .number { color: #0D2D8C; }
    .stat-card.warning .number { color: #b45309; }
    .stat-card.danger .number { color: #b91c1c; }
    .stat-card.info .number { color: #1a3a6a; }
    .stat-card.verificar .number { color: #6d28d9; }
    
    .progress-container {
        background: #f8faff;
        border: 1px solid #e0e8f5;
        border-radius: 6px;
        padding: 14px 18px;
        margin: 8px 0 14px;
        page-break-inside: avoid;
    }
    .progress-container .label {
        font-weight: 600;
        color: #0D2D8C;
        font-size: 13px;
    }
    .progress-container .value {
        font-size: 28px;
        font-weight: 700;
        color: #0D2D8C;
    }
    .progress-bar {
        width: 100%;
        height: 10px;
        background: #e0e8f5;
        border-radius: 6px;
        overflow: hidden;
        margin: 6px 0 3px;
    }
    .progress-bar .fill {
        height: 100%;
        border-radius: 6px;
        background: #0D2D8C;
        print-color-adjust: exact;
        -webkit-print-color-adjust: exact;
    }
    
    .group-grid {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 8px;
        margin: 8px 0 14px;
    }
    .group-card {
        background: #f8faff;
        border: 1px solid #e0e8f5;
        border-radius: 6px;
        padding: 10px 12px;
        page-break-inside: avoid;
    }
    .group-card .name {
        font-weight: 600;
        color: #0D2D8C;
        font-size: 11px;
    }
    .group-card .pct {
        font-size: 18px;
        font-weight: 700;
        color: #0D2D8C;
        margin: 2px 0;
    }
    .group-card .detail {
        font-size: 9px;
        color: #8888aa;
    }
    .group-card .mini-bar {
        width: 100%;
        height: 4px;
        background: #e0e8f5;
        border-radius: 3px;
        margin-top: 4px;
        overflow: hidden;
    }
    .group-card .mini-bar .fill {
        height: 100%;
        border-radius: 3px;
        background: #0D2D8C;
        print-color-adjust: exact;
        -webkit-print-color-adjust: exact;
    }
    
    table {
        width: 100%;
        border-collapse: collapse;
        font-size: 9.5px;
        margin: 6px 0;
    }
    th {
        background: #eef2ff;
        color: #0D2D8C;
        padding: 6px 10px;
        text-align: left;
        font-weight: 600;
        border-bottom: 2px solid #d0d8ea;
        font-size: 9px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    td {
        padding: 5px 10px;
        border-bottom: 1px solid #e8edf5;
        font-size: 9.5px;
    }
    tr:nth-child(even) { background: #fafcff; }
    
    .status-badge {
        display: inline-block;
        padding: 1px 10px;
        border-radius: 4px;
        font-size: 8.5px;
        font-weight: 600;
        print-color-adjust: exact;
        -webkit-print-color-adjust: exact;
    }
    .status-badge.atendido { background: #dbeafe; color: #0D2D8C; border: 1px solid #0D2D8C; }
    .status-badge.parcial { background: #fef3c7; color: #92400e; border: 1px solid #d97706; }
    .status-badge.nao-atendido { background: #fecaca; color: #991b1b; border: 1px solid #dc2626; }
    .status-badge.nao-avaliado { background: #f1f4fa; color: #64748b; border: 1px solid #94a3b8; }
    .status-badge.verificar { background: #f3e8ff; color: #6d28d9; border: 1px solid #8b5cf6; }
    
    .pdf-footer {
        margin-top: 30px;
        padding-top: 16px;
        border-top: 2px solid #e0e8f5;
        text-align: center;
        font-size: 9px;
        color: #8888aa;
    }
    .pdf-footer .brand { font-weight: 600; color: #0D2D8C; }
    
    @media print {
        body { padding: 15px; }
        .stats-grid { grid-template-columns: repeat(3, 1fr); }
        .group-grid { grid-template-columns: repeat(2, 1fr); }
        .no-break { page-break-inside: avoid; }
        .break-after { page-break-after: always; }
        .progress-bar .fill {
            print-color-adjust: exact !important;
            -webkit-print-color-adjust: exact !important;
        }
        .group-card .mini-bar .fill {
            print-color-adjust: exact !important;
            -webkit-print-color-adjust: exact !important;
        }
        .status-badge {
            print-color-adjust: exact !important;
            -webkit-print-color-adjust: exact !important;
        }
        .stat-card {
            print-color-adjust: exact !important;
            -webkit-print-color-adjust: exact !important;
        }
    }
</style>
`;

// ============================================================
// FUNÇÃO AUXILIAR - PEGA OS DADOS CORRETOS
// ============================================================

function getDados() {
    return window.cruzamentoRequisitosCompleto || cruzamentoRequisitos || {};
}

function getListaRequisitos() {
    return Object.values(getDados());
}

function getStats(dados) {
    if (typeof getEstatisticas === 'function') {
        return getEstatisticas(dados || getDados());
    }
    // Fallback
    const lista = dados || getDados();
    const total = Object.keys(lista).length;
    const atendidos = Object.values(lista).filter(r => r.status === 'Atendido').length;
    const parcial = Object.values(lista).filter(r => r.status === 'Parcialmente Atendido').length;
    const naoAtendidos = Object.values(lista).filter(r => r.status === 'Não Atendido').length;
    const aVerificar = Object.values(lista).filter(r => r.status === 'VERIFICAR!!').length;
    const naoAvaliados = Object.values(lista).filter(r => r.status === 'Não Avaliado').length;
    const avaliados = total - naoAvaliados - aVerificar;
    const pesoTotal = atendidos + (parcial * 0.5);
    const conformidade = avaliados > 0 ? (pesoTotal / (avaliados + aVerificar) * 100) : 0;
    const conformidadeGeral = total > 0 ? (pesoTotal / total * 100) : 0;
    return {
        total, atendidos, parcial, naoAtendidos, aVerificar, naoAvaliados,
        avaliados,
        conformidade: parseFloat(conformidade.toFixed(2)),
        conformidadeGeral: parseFloat(conformidadeGeral.toFixed(2))
    };
}

function getGrupos(dados) {
    if (typeof getResumoPorGrupo === 'function') {
        return getResumoPorGrupo(dados || getDados());
    }
    return {};
}

function getCaps(dados) {
    if (typeof getCapitulos === 'function') {
        return getCapitulos(dados || getDados());
    }
    return {};
}

function getStatusClass(status) {
    const map = {
        'Atendido': 'atendido',
        'Parcialmente Atendido': 'parcial',
        'Não Atendido': 'nao-atendido',
        'Não Avaliado': 'nao-avaliado',
        'VERIFICAR!!': 'verificar'
    };
    return map[status] || '';
}

function getStatusLabel(status) {
    const map = {
        'Atendido': 'Atendido',
        'Parcialmente Atendido': 'Parcialmente Atendido',
        'Não Atendido': 'Não Atendido',
        'Não Avaliado': 'Não Avaliado',
        'VERIFICAR!!': 'VERIFICAR!!'
    };
    return map[status] || status;
}

function getDataStr() {
    return new Date().toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
}

function getDataHoraStr() {
    return new Date().toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
}

// ============================================================
// FUNÇÃO AUXILIAR - GERA PDF
// ============================================================

function gerarPDF(html, nomeArquivo) {
    const win = window.open('', '_blank', 'width=1100,height=900');
    if (!win) {
        alert('Por favor, permita pop-ups para gerar o PDF.');
        return;
    }

    const htmlCompleto = html.replace(
        '</head>',
        PDF_STYLES + '</head>'
    );

    win.document.write(htmlCompleto);
    win.document.close();

    setTimeout(() => {
        if (typeof html2pdf === 'undefined') {
            alert('A biblioteca html2pdf nao esta carregada. Usando impressao.');
            win.print();
            return;
        }

        const element = win.document.getElementById('relatorio-content');
        if (!element) {
            alert('Erro: Elemento relatorio-content nao encontrado.');
            win.print();
            return;
        }

        const opt = {
            margin: [8, 8, 8, 8],
            filename: nomeArquivo,
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: {
                scale: 2,
                useCORS: true,
                letterRendering: true,
                backgroundColor: '#ffffff',
                logging: false,
                width: 1100,
                height: element.scrollHeight + 100,
                onclone: function (doc) {
                    const style = doc.createElement('style');
                    style.textContent = PDF_STYLES;
                    doc.head.appendChild(style);
                }
            },
            jsPDF: {
                unit: 'mm',
                format: 'a4',
                orientation: 'portrait',
                compress: true,
                hotfixes: ['px_scaling']
            }
        };

        html2pdf().set(opt).from(element).save().then(() => {
            win.close();
        }).catch((err) => {
            console.error('Erro ao gerar PDF:', err);
            alert('Erro ao gerar PDF. Usando impressao como fallback.');
            win.print();
        });
    }, 1500);
}

// ============================================================
// RELATÓRIO DE CONFORMIDADE
// ============================================================

function exportarPDFViaPrint() {
    const dados = getDados();
    const stats = getStats(dados);
    const requisitos = getListaRequisitos();
    const resumoGrupos = getGrupos(dados);
    const dataStr = getDataStr();
    const dataHoraStr = getDataHoraStr();

    let html = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Relatorio de Conformidade - DocZ</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body {
                font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
                max-width: 1000px;
                margin: 0 auto;
                padding: 20px;
                background: #ffffff;
                color: #1a1a2e;
                font-size: 11px;
                line-height: 1.5;
            }
            .header {
                text-align: center;
                padding: 20px 0;
                border-bottom: 3px solid #0D2D8C;
                margin-bottom: 20px;
            }
            .header .logo { max-width: 120px; height: auto; margin-bottom: 5px; }
            .header h1 { font-size: 20px; color: #0D2D8C; }
            .header .subtitle { font-size: 13px; color: #555; }
            .header .meta { font-size: 10px; color: #666; margin-top: 5px; }
            .header .badge { background: #0D2D8C; color: #fff; padding: 2px 12px; border-radius: 4px; }
            .stats-grid {
                display: grid;
                grid-template-columns: repeat(7, 1fr);
                gap: 8px;
                margin: 10px 0;
            }
            .stat-card {
                background: #f8faff;
                border: 1px solid #e0e8f5;
                border-radius: 6px;
                padding: 10px;
                text-align: center;
            }
            .stat-card .number { font-size: 18px; font-weight: 700; color: #0D2D8C; }
            .stat-card .label { font-size: 8px; color: #888; text-transform: uppercase; }
            .stat-card.success .number { color: #0D2D8C; }
            .stat-card.warning .number { color: #b45309; }
            .stat-card.danger .number { color: #b91c1c; }
            .stat-card.info .number { color: #1a3a6a; }
            .stat-card.verificar .number { color: #6d28d9; }
            .progress-container {
                background: #f8faff;
                border: 1px solid #e0e8f5;
                border-radius: 6px;
                padding: 15px 20px;
                margin: 10px 0;
            }
            .progress-container .label { font-weight: 600; color: #0D2D8C; font-size: 12px; }
            .progress-container .value { font-size: 24px; font-weight: 700; color: #0D2D8C; }
            .progress-bar {
                width: 100%;
                height: 8px;
                background: #e0e8f5;
                border-radius: 4px;
                overflow: hidden;
                margin: 5px 0;
            }
            .progress-bar .fill {
                height: 100%;
                background: #0D2D8C;
                print-color-adjust: exact;
            }
            .group-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 8px;
                margin: 10px 0;
            }
            .group-card {
                background: #f8faff;
                border: 1px solid #e0e8f5;
                border-radius: 6px;
                padding: 10px 12px;
            }
            .group-card .name { font-weight: 600; color: #0D2D8C; font-size: 11px; }
            .group-card .pct { font-size: 18px; font-weight: 700; color: #0D2D8C; margin: 2px 0; }
            .group-card .detail { font-size: 9px; color: #888; }
            .group-card .mini-bar {
                width: 100%;
                height: 4px;
                background: #e0e8f5;
                border-radius: 2px;
                margin-top: 4px;
                overflow: hidden;
            }
            .group-card .mini-bar .fill {
                height: 100%;
                background: #0D2D8C;
                print-color-adjust: exact;
            }
            table {
                width: 100%;
                border-collapse: collapse;
                font-size: 8px;
                margin: 10px 0;
            }
            th {
                background: #eef2ff;
                color: #0D2D8C;
                padding: 4px 6px;
                text-align: left;
                border-bottom: 2px solid #d0d8ea;
                font-size: 7px;
                text-transform: uppercase;
            }
            td {
                padding: 3px 6px;
                border-bottom: 1px solid #e8edf5;
            }
            .status-badge {
                display: inline-block;
                padding: 1px 6px;
                border-radius: 3px;
                font-size: 7px;
                font-weight: 600;
                print-color-adjust: exact;
            }
            .status-badge.atendido { background: #dbeafe; color: #0D2D8C; border: 1px solid #0D2D8C; }
            .status-badge.parcial { background: #fef3c7; color: #92400e; border: 1px solid #d97706; }
            .status-badge.nao-atendido { background: #fecaca; color: #991b1b; border: 1px solid #dc2626; }
            .status-badge.nao-avaliado { background: #f1f4fa; color: #64748b; border: 1px solid #94a3b8; }
            .status-badge.verificar { background: #f3e8ff; color: #6d28d9; border: 1px solid #8b5cf6; }
            .footer {
                margin-top: 20px;
                padding-top: 15px;
                border-top: 2px solid #e0e8f5;
                text-align: center;
                font-size: 9px;
                color: #888;
            }
            .footer .brand { font-weight: 600; color: #0D2D8C; }
            @media print {
                body { padding: 10px; }
                .stats-grid { grid-template-columns: repeat(3, 1fr); }
                .group-grid { grid-template-columns: repeat(2, 1fr); }
                .progress-bar .fill { print-color-adjust: exact; }
                .group-card .mini-bar .fill { print-color-adjust: exact; }
                .status-badge { print-color-adjust: exact; }
            }
        </style>
    </head>
    <body>
        <div id="relatorio-content">
            <div class="header">
                <img src="https://docz.sosdocs.com.br/Docz/web/images/logo.png" alt="DocZ" class="logo">
                <h1>Relatório de Conformidade e-ARQ Brasil</h1>
                <div class="subtitle">DocZ - Sistema de Gestão Arquivística</div>
                <div class="meta">
                    <span>Data da Avaliação: ${dataStr}</span>
                    <span class="badge">${stats.conformidadeGeral}% Conformidade Geral</span>
                </div>
            </div>

            <div class="stats-grid">
                <div class="stat-card"><div class="number">${stats.total}</div><div class="label">Total</div></div>
                <div class="stat-card success"><div class="number">${stats.atendidos}</div><div class="label">Atendidos</div></div>
                <div class="stat-card warning"><div class="number">${stats.parcial}</div><div class="label">Parciais</div></div>
                <div class="stat-card danger"><div class="number">${stats.naoAtendidos}</div><div class="label">Não Atendidos</div></div>
                <div class="stat-card verificar"><div class="number">${stats.aVerificar}</div><div class="label">A Verificar</div></div>
                <div class="stat-card info"><div class="number">${stats.naoAvaliados}</div><div class="label">Não Avaliados</div></div>
                <div class="stat-card success"><div class="number">${stats.conformidade}%</div><div class="label">Conformidade (Avaliáveis)</div></div>
            </div>

            <div class="progress-container">
                <div style="display:flex;justify-content:space-between;">
                    <span class="label">Conformidade Geral</span>
                    <span class="value">${stats.conformidadeGeral}%</span>
                </div>
                <div class="progress-bar"><div class="fill" style="width:${stats.conformidadeGeral}%;"></div></div>
                <div style="display:flex;justify-content:space-between;font-size:9px;color:#888;">
                    <span>${stats.atendidos} atendidos</span>
                    <span>${stats.avaliados} avaliados</span>
                </div>
            </div>

            <div class="group-grid">`;

    for (const [grupo, dados] of Object.entries(resumoGrupos)) {
        const total = dados.total;
        const avaliados = total - dados.naoAvaliados - dados.aVerificar;
        const peso = dados.atendidos + (dados.parcial * 0.5);
        const pct = avaliados > 0 ? Math.round((peso / (avaliados + dados.aVerificar)) * 100) : 0;
        html += `
            <div class="group-card">
                <div class="name">${grupo}</div>
                <div class="pct">${pct}%</div>
                <div class="detail">${dados.atendidos}/${total} atendidos</div>
                <div class="mini-bar"><div class="fill" style="width:${pct}%;"></div></div>
            </div>`;
    }

    html += `
            </div>

            <table>
                <thead><tr><th>ID</th><th>Requisito</th><th>Status</th><th>Grupo</th></tr></thead>
                <tbody>`;

    requisitos.sort((a, b) => a.id.localeCompare(b.id));
    requisitos.forEach(r => {
        const statusClass = getStatusClass(r.status);
        const statusLabel = getStatusLabel(r.status);
        html += `
            <tr>
                <td><strong>${r.id}</strong></td>
                <td>${r.titulo}</td>
                <td><span class="status-badge ${statusClass}">${statusLabel}</span></td>
                <td style="color:#888;font-size:7px;">${r.grupo}</td>
            </tr>`;
    });

    html += `
                </tbody>
            </table>

            <div class="footer">
                <p>Relatório gerado pelo <span class="brand">DocZ</span> - Conformidade e-ARQ Brasil</p>
                <p>Data da Avaliação: ${dataStr}</p>
                <p>Gerado em: ${dataHoraStr}</p>
            </div>
        </div>

        <script>
            window.onload = function() {
                setTimeout(function() {
                    window.print();
                }, 500);
            };
        <\/script>
    </body>
    </html>`;

    const win = window.open('', '_blank', 'width=1100,height=900');
    if (win) {
        win.document.write(html);
        win.document.close();
    } else {
        alert('Por favor, permita pop-ups para gerar o relatório.');
    }
}

// ============================================================
// RELATÓRIO DE PENDÊNCIAS (inclui VERIFICAR!!)
// ============================================================

function exportarPendenciasPDF() {
    const dados = getDados();
    const stats = getStats(dados);
    const pendentes = getListaRequisitos().filter(r =>
        r.status === 'Parcialmente Atendido' || r.status === 'Não Atendido' || r.status === 'VERIFICAR!!'
    );
    const dataStr = getDataStr();
    const dataHoraStr = getDataHoraStr();

    let html = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Relatorio de Pendencias - DocZ</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body {
                font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
                max-width: 1000px;
                margin: 0 auto;
                padding: 20px;
                background: #ffffff;
                color: #1a1a2e;
                font-size: 11px;
                line-height: 1.5;
            }
            .header {
                text-align: center;
                padding: 20px 0;
                border-bottom: 3px solid #0D2D8C;
                margin-bottom: 20px;
            }
            .header h1 { font-size: 20px; color: #0D2D8C; }
            .header .subtitle { font-size: 13px; color: #555; }
            .header .meta { font-size: 10px; color: #666; margin-top: 5px; }
            .stats-grid {
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 8px;
                margin: 10px 0;
            }
            .stat-card {
                background: #f8faff;
                border: 1px solid #e0e8f5;
                border-radius: 6px;
                padding: 10px;
                text-align: center;
            }
            .stat-card .number { font-size: 20px; font-weight: 700; color: #0D2D8C; }
            .stat-card .label { font-size: 8px; color: #888; text-transform: uppercase; }
            .stat-card.danger .number { color: #b91c1c; }
            .stat-card.warning .number { color: #b45309; }
            .stat-card.verificar .number { color: #6d28d9; }
            table {
                width: 100%;
                border-collapse: collapse;
                font-size: 9px;
                margin: 10px 0;
            }
            th {
                background: #eef2ff;
                color: #0D2D8C;
                padding: 5px 8px;
                text-align: left;
                border-bottom: 2px solid #d0d8ea;
                font-size: 8px;
                text-transform: uppercase;
            }
            td {
                padding: 4px 8px;
                border-bottom: 1px solid #e8edf5;
            }
            .status-badge {
                display: inline-block;
                padding: 1px 8px;
                border-radius: 3px;
                font-size: 8px;
                font-weight: 600;
                print-color-adjust: exact;
            }
            .status-badge.parcial { background: #fef3c7; color: #92400e; border: 1px solid #d97706; }
            .status-badge.nao-atendido { background: #fecaca; color: #991b1b; border: 1px solid #dc2626; }
            .status-badge.verificar { background: #f3e8ff; color: #6d28d9; border: 1px solid #8b5cf6; }
            .footer {
                margin-top: 20px;
                padding-top: 15px;
                border-top: 2px solid #e0e8f5;
                text-align: center;
                font-size: 9px;
                color: #888;
            }
            .footer .brand { font-weight: 600; color: #0D2D8C; }
            .obs { font-size: 8px; color: #888; }
            @media print {
                body { padding: 10px; }
                .stats-grid { grid-template-columns: repeat(2, 1fr); }
                .status-badge { print-color-adjust: exact; }
            }
        </style>
    </head>
    <body>
        <div id="relatorio-content">
            <div class="header">
                <h1>Relatório de Pendências</h1>
                <div class="subtitle">DocZ - Sistema de Gestão Arquivística</div>
                <div class="meta">
                    <span>Data da Avaliação: ${dataStr}</span>
                    <span>Total de Pendências: ${pendentes.length}</span>
                </div>
            </div>

            <div class="stats-grid">
                <div class="stat-card danger"><div class="number">${pendentes.filter(r => r.status === 'Não Atendido').length}</div><div class="label">Não Atendidos</div></div>
                <div class="stat-card warning"><div class="number">${pendentes.filter(r => r.status === 'Parcialmente Atendido').length}</div><div class="label">Parcialmente Atendidos</div></div>
                <div class="stat-card verificar"><div class="number">${pendentes.filter(r => r.status === 'VERIFICAR!!').length}</div><div class="label">A Verificar</div></div>
                <div class="stat-card"><div class="number">${pendentes.length}</div><div class="label">Total de Pendências</div></div>
            </div>

            <table>
                <thead><tr><th>ID</th><th>Requisito</th><th>Status</th><th>Observação</th></tr></thead>
                <tbody>`;

    if (pendentes.length === 0) {
        html += `<tr><td colspan="4" style="text-align:center;color:#888;padding:20px;">Nenhum requisito com pendência encontrado.</td></tr>`;
    } else {
        pendentes.sort((a, b) => a.id.localeCompare(b.id));
        pendentes.forEach(r => {
            let statusClass = 'nao-atendido';
            if (r.status === 'Parcialmente Atendido') statusClass = 'parcial';
            else if (r.status === 'VERIFICAR!!') statusClass = 'verificar';
            const obs = r.observacoes && r.observacoes.length > 0 ? r.observacoes[0] : r.justificativa || '-';
            html += `
                <tr>
                    <td><strong>${r.id}</strong></td>
                    <td>${r.titulo}</td>
                    <td><span class="status-badge ${statusClass}">${r.status}</span></td>
                    <td class="obs">${obs.substring(0, 120)}${obs.length > 120 ? '...' : ''}</td>
                </tr>`;
        });
    }

    html += `
                </tbody>
            </table>

            <div class="footer">
                <p>Relatório gerado pelo <span class="brand">DocZ</span> - Conformidade e-ARQ Brasil</p>
                <p>Data da Avaliação: ${dataStr}</p>
                <p>Gerado em: ${dataHoraStr}</p>
            </div>
        </div>

        <script>
            window.onload = function() {
                setTimeout(function() {
                    window.print();
                }, 500);
            };
        <\/script>
    </body>
    </html>`;

    const win = window.open('', '_blank', 'width=1100,height=900');
    if (win) {
        win.document.write(html);
        win.document.close();
    } else {
        alert('Por favor, permita pop-ups para gerar o relatório.');
    }
}

// ============================================================
// RESUMO EXECUTIVO
// ============================================================

function exportarResumoPDF() {
    const dados = getDados();
    const stats = getStats(dados);
    const resumoGrupos = getGrupos(dados);
    const dataStr = getDataStr();
    const dataHoraStr = getDataHoraStr();

    let html = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Resumo Executivo - DocZ</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body {
                font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
                max-width: 900px;
                margin: 0 auto;
                padding: 20px;
                background: #ffffff;
                color: #1a1a2e;
                font-size: 11px;
                line-height: 1.5;
            }
            .header {
                text-align: center;
                padding: 20px 0;
                border-bottom: 3px solid #0D2D8C;
                margin-bottom: 20px;
            }
            .header h1 { font-size: 20px; color: #0D2D8C; }
            .header .subtitle { font-size: 13px; color: #555; }
            .header .meta { font-size: 10px; color: #666; margin-top: 5px; }
            .header .badge { background: #0D2D8C; color: #fff; padding: 2px 12px; border-radius: 4px; }
            .stats-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 8px;
                margin: 10px 0;
            }
            .stat-card {
                background: #f8faff;
                border: 1px solid #e0e8f5;
                border-radius: 6px;
                padding: 10px;
                text-align: center;
            }
            .stat-card .number { font-size: 20px; font-weight: 700; color: #0D2D8C; }
            .stat-card .label { font-size: 8px; color: #888; text-transform: uppercase; }
            .stat-card.success .number { color: #0D2D8C; }
            .stat-card.warning .number { color: #b45309; }
            .stat-card.danger .number { color: #b91c1c; }
            .stat-card.info .number { color: #1a3a6a; }
            .stat-card.verificar .number { color: #6d28d9; }
            .progress-container {
                background: #f8faff;
                border: 1px solid #e0e8f5;
                border-radius: 6px;
                padding: 15px 20px;
                margin: 10px 0;
            }
            .progress-container .label { font-weight: 600; color: #0D2D8C; font-size: 12px; }
            .progress-container .value { font-size: 24px; font-weight: 700; color: #0D2D8C; }
            .progress-bar {
                width: 100%;
                height: 8px;
                background: #e0e8f5;
                border-radius: 4px;
                overflow: hidden;
                margin: 5px 0;
            }
            .progress-bar .fill {
                height: 100%;
                background: #0D2D8C;
                print-color-adjust: exact;
            }
            .group-grid {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 8px;
                margin: 10px 0;
            }
            .group-card {
                background: #f8faff;
                border: 1px solid #e0e8f5;
                border-radius: 6px;
                padding: 10px 12px;
            }
            .group-card .name { font-weight: 600; color: #0D2D8C; font-size: 11px; }
            .group-card .pct { font-size: 18px; font-weight: 700; color: #0D2D8C; margin: 2px 0; }
            .group-card .detail { font-size: 9px; color: #888; }
            .group-card .mini-bar {
                width: 100%;
                height: 4px;
                background: #e0e8f5;
                border-radius: 2px;
                margin-top: 4px;
                overflow: hidden;
            }
            .group-card .mini-bar .fill {
                height: 100%;
                background: #0D2D8C;
                print-color-adjust: exact;
            }
            .footer {
                margin-top: 20px;
                padding-top: 15px;
                border-top: 2px solid #e0e8f5;
                text-align: center;
                font-size: 9px;
                color: #888;
            }
            .footer .brand { font-weight: 600; color: #0D2D8C; }
            @media print {
                body { padding: 10px; }
                .stats-grid { grid-template-columns: repeat(3, 1fr); }
                .group-grid { grid-template-columns: repeat(2, 1fr); }
                .progress-bar .fill { print-color-adjust: exact; }
                .group-card .mini-bar .fill { print-color-adjust: exact; }
            }
        </style>
    </head>
    <body>
        <div id="relatorio-content">
            <div class="header">
                <h1>Resumo Executivo</h1>
                <div class="subtitle">DocZ - Sistema de Gestão Arquivística</div>
                <div class="meta">
                    <span>Data da Avaliação: ${dataStr}</span>
                    <span class="badge">${stats.conformidadeGeral}% Conformidade Geral</span>
                </div>
            </div>

            <div class="stats-grid">
                <div class="stat-card success"><div class="number">${stats.conformidadeGeral}%</div><div class="label">Conformidade Geral</div></div>
                <div class="stat-card"><div class="number">${stats.total}</div><div class="label">Total de Requisitos</div></div>
                <div class="stat-card success"><div class="number">${stats.atendidos}</div><div class="label">Atendidos</div></div>
                <div class="stat-card warning"><div class="number">${stats.parcial}</div><div class="label">Parciais</div></div>
                <div class="stat-card danger"><div class="number">${stats.naoAtendidos}</div><div class="label">Não Atendidos</div></div>
                <div class="stat-card verificar"><div class="number">${stats.aVerificar}</div><div class="label">A Verificar</div></div>
            </div>

            <div class="progress-container">
                <div style="display:flex;justify-content:space-between;">
                    <span class="label">Conformidade Geral</span>
                    <span class="value">${stats.conformidadeGeral}%</span>
                </div>
                <div class="progress-bar"><div class="fill" style="width:${stats.conformidadeGeral}%;"></div></div>
                <div style="display:flex;justify-content:space-between;font-size:9px;color:#888;">
                    <span>${stats.atendidos} atendidos</span>
                    <span>${stats.avaliados} avaliados</span>
                </div>
            </div>

            <div class="group-grid">`;

    for (const [grupo, dados] of Object.entries(resumoGrupos)) {
        const total = dados.total;
        const avaliados = total - dados.naoAvaliados - dados.aVerificar;
        const peso = dados.atendidos + (dados.parcial * 0.5);
        const pct = avaliados > 0 ? Math.round((peso / (avaliados + dados.aVerificar)) * 100) : 0;
        html += `
            <div class="group-card">
                <div class="name">${grupo}</div>
                <div class="pct">${pct}%</div>
                <div class="detail">${dados.atendidos}/${total} atendidos</div>
                <div class="mini-bar"><div class="fill" style="width:${pct}%;"></div></div>
            </div>`;
    }

    html += `
            </div>

            <div class="footer">
                <p>Relatório gerado pelo <span class="brand">DocZ</span> - Conformidade e-ARQ Brasil</p>
                <p>Data da Avaliação: ${dataStr}</p>
                <p>Gerado em: ${dataHoraStr}</p>
            </div>
        </div>

        <script>
            window.onload = function() {
                setTimeout(function() {
                    window.print();
                }, 500);
            };
        <\/script>
    </body>
    </html>`;

    const win = window.open('', '_blank', 'width=1100,height=900');
    if (win) {
        win.document.write(html);
        win.document.close();
    } else {
        alert('Por favor, permita pop-ups para gerar o relatório.');
    }
}

// ============================================================
// RELATÓRIO EM HTML
// ============================================================

function exportarHTML() {
    const dados = getDados();
    const stats = getStats(dados);
    const requisitos = getListaRequisitos();
    const resumoGrupos = getGrupos(dados);
    const dataStr = getDataStr();
    const dataHoraStr = getDataHoraStr();

    let html = `
    <!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title>Relatorio de Conformidade - DocZ</title>
        <style>
            * { margin: 0; padding: 0; box-sizing: border-box; }
            body {
                font-family: 'Segoe UI', 'Helvetica Neue', Arial, sans-serif;
                max-width: 1000px;
                margin: 0 auto;
                padding: 30px;
                background: #ffffff;
                color: #222222;
                font-size: 12px;
                line-height: 1.5;
            }
            .header {
                text-align: center;
                padding: 25px 0 20px;
                border-bottom: 2px solid #1a3a6a;
                margin-bottom: 25px;
            }
            .header .logo { max-width: 150px; height: auto; margin-bottom: 8px; }
            .header h1 { font-size: 20px; font-weight: 700; color: #0D2D8C; }
            .header .subtitle { font-size: 13px; color: #555555; margin-top: 4px; }
            .header .date { font-size: 11px; color: #888888; margin-top: 3px; }
            .header .meta {
                display: flex; justify-content: center; gap: 20px; margin-top: 10px;
                flex-wrap: wrap; font-size: 11px; color: #555555;
            }
            .header .meta span { background: #f0f4ff; padding: 3px 12px; border-radius: 4px; border: 1px solid #d0d8ea; }
            .header .meta .badge { background: #0D2D8C; color: white; font-weight: 600; padding: 3px 10px; border: 1px solid #0D2D8C; }
            .section { margin: 22px 0; }
            .section-title {
                font-size: 15px; font-weight: 600; color: #0D2D8C;
                border-bottom: 2px solid #d0d8ea; padding-bottom: 6px; margin-bottom: 12px;
            }
            .stats-grid {
                display: grid; grid-template-columns: repeat(7, 1fr); gap: 8px; margin: 10px 0 16px;
            }
            .stat-card {
                background: #f8faff; border: 1px solid #e0e8f5;
                border-radius: 6px; padding: 12px 8px; text-align: center;
            }
            .stat-card .number { font-size: 22px; font-weight: 700; color: #0D2D8C; }
            .stat-card .label { font-size: 9px; color: #6a6a8a; text-transform: uppercase; letter-spacing: 0.3px; margin-top: 2px; }
            .stat-card.success .number { color: #0D2D8C; }
            .stat-card.warning .number { color: #b45309; }
            .stat-card.danger .number { color: #b91c1c; }
            .stat-card.info .number { color: #1a3a6a; }
            .stat-card.verificar .number { color: #6d28d9; }

            .progress-container {
                background: #f8faff; border: 1px solid #e0e8f5;
                border-radius: 6px; padding: 14px 18px; margin: 10px 0 16px;
            }
            .progress-container .label { font-weight: 600; color: #0D2D8C; font-size: 13px; }
            .progress-container .value { font-size: 28px; font-weight: 700; color: #0D2D8C; }
            .progress-bar {
                width: 100%; height: 8px; background: #e0e8f5;
                border-radius: 4px; overflow: hidden; margin: 6px 0 3px;
            }
            .progress-bar .fill { height: 100%; border-radius: 4px; background: #0D2D8C; }

            .group-grid {
                display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin: 8px 0 14px;
            }
            .group-card {
                background: #f8faff; border: 1px solid #e0e8f5;
                border-radius: 6px; padding: 12px 14px;
            }
            .group-card .name { font-weight: 600; color: #0D2D8C; font-size: 12px; }
            .group-card .pct { font-size: 18px; font-weight: 700; color: #0D2D8C; margin: 2px 0; }
            .group-card .detail { font-size: 10px; color: #6a6a8a; }
            .group-card .mini-bar {
                width: 100%; height: 4px; background: #e0e8f5;
                border-radius: 2px; margin-top: 4px; overflow: hidden;
            }
            .group-card .mini-bar .fill { height: 100%; border-radius: 2px; background: #0D2D8C; }

            table {
                width: 100%; border-collapse: collapse; font-size: 10.5px; margin: 8px 0;
            }
            th {
                background: #eef2ff; color: #0D2D8C; padding: 6px 10px; text-align: left;
                font-weight: 600; border-bottom: 2px solid #d0d8ea; font-size: 10px;
                text-transform: uppercase; letter-spacing: 0.3px;
            }
            td { padding: 5px 10px; border-bottom: 1px solid #e8edf5; font-size: 10.5px; }
            tr:hover { background: #f8faff; }
            .status-badge {
                display: inline-block; padding: 1px 10px; border-radius: 3px;
                font-size: 9.5px; font-weight: 600;
            }
            .status-badge.atendido { background: #dbeafe; color: #0D2D8C; }
            .status-badge.parcial { background: #fef3c7; color: #92400e; }
            .status-badge.nao-atendido { background: #fecaca; color: #991b1b; }
            .status-badge.nao-avaliado { background: #f1f4fa; color: #64748b; }
            .status-badge.verificar { background: #f3e8ff; color: #6d28d9; }

            .footer {
                margin-top: 30px; padding-top: 16px; border-top: 2px solid #e0e8f5;
                text-align: center; font-size: 10px; color: #8888aa;
            }
            .footer .brand { font-weight: 600; color: #0D2D8C; }
        </style>
    </head>
    <body>
        <div class="header">
            <img src="https://docz.sosdocs.com.br/Docz/web/images/logo.png" alt="DocZ" style="max-width:150px;height:auto;margin-bottom:8px;">
            <h1>Relatorio de Conformidade e-ARQ Brasil</h1>
            <div class="subtitle">DocZ - Sistema Informatizado de Gestao Arquivistica de Documentos</div>
            <div class="date">Data da Avaliacao: ${dataStr}</div>
            <div class="meta">
                <span>Gerado em: ${dataHoraStr}</span>
                <span class="badge">${stats.conformidadeGeral}% Conformidade Geral</span>
            </div>
        </div>

        <div class="section">
            <div class="section-title">Estatisticas Gerais</div>
            <div class="stats-grid">
                <div class="stat-card"><div class="number">${stats.total}</div><div class="label">Total</div></div>
                <div class="stat-card success"><div class="number">${stats.atendidos}</div><div class="label">Atendidos</div></div>
                <div class="stat-card warning"><div class="number">${stats.parcial}</div><div class="label">Parciais</div></div>
                <div class="stat-card danger"><div class="number">${stats.naoAtendidos}</div><div class="label">Nao Atendidos</div></div>
                <div class="stat-card verificar"><div class="number">${stats.aVerificar}</div><div class="label">A Verificar</div></div>
                <div class="stat-card info"><div class="number">${stats.naoAvaliados}</div><div class="label">Nao Avaliados</div></div>
                <div class="stat-card success"><div class="number">${stats.conformidade}%</div><div class="label">Conformidade</div></div>
            </div>
        </div>

        <div class="progress-container">
            <div style="display:flex;justify-content:space-between;align-items:center;">
                <span class="label">Conformidade Geral</span>
                <span class="value">${stats.conformidadeGeral}%</span>
            </div>
            <div class="progress-bar"><div class="fill" style="width:${stats.conformidadeGeral}%;"></div></div>
            <div style="display:flex;justify-content:space-between;font-size:10px;color:#6a6a8a;">
                <span>${stats.atendidos} atendidos</span>
                <span>${stats.avaliados} avaliados</span>
            </div>
        </div>

        <div class="section">
            <div class="section-title">Resumo por Grupo</div>
            <div class="group-grid">`;

    for (const [grupo, dados] of Object.entries(resumoGrupos)) {
        const total = dados.total;
        const avaliados = total - dados.naoAvaliados - dados.aVerificar;
        const peso = dados.atendidos + (dados.parcial * 0.5);
        const pct = avaliados > 0 ? Math.round((peso / (avaliados + dados.aVerificar)) * 100) : 0;
        html += `
            <div class="group-card">
                <div class="name">${grupo}</div>
                <div class="pct">${pct}%</div>
                <div class="detail">${dados.atendidos}/${total} atendidos</div>
                <div class="mini-bar"><div class="fill" style="width:${pct}%;"></div></div>
            </div>`;
    }

    html += `
            </div>
        </div>

        <div class="section">
            <div class="section-title">Lista de Requisitos</div>
            <table>
                <thead><tr><th>ID</th><th>Requisito</th><th>Status</th><th>Grupo</th></tr></thead>
                <tbody>`;

    requisitos.sort((a, b) => a.id.localeCompare(b.id));
    requisitos.forEach(r => {
        const statusClass = getStatusClass(r.status);
        const statusLabel = getStatusLabel(r.status);
        html += `
            <tr>
                <td><strong>${r.id}</strong></td>
                <td>${r.titulo}</td>
                <td><span class="status-badge ${statusClass}">${statusLabel}</span></td>
                <td style="font-size:10px;color:#6a6a8a;">${r.grupo}</td>
            </tr>`;
    });

    html += `
                </tbody>
            </table>
        </div>

        <div class="footer">
            <p>Relatorio gerado automaticamente pelo <span class="brand">DocZ</span> - Conformidade e-ARQ Brasil</p>
            <p>Data da Avaliacao: ${dataStr}</p>
        </div>
    </body>
    </html>`;

    const win = window.open('', '_blank', 'width=1100,height=800');
    if (win) {
        win.document.write(html);
        win.document.close();
    } else {
        alert('Por favor, permita pop-ups para visualizar o relatorio.');
    }
}

// ============================================================
// FUNÇÃO DE DOWNLOAD (TXT)
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
// FUNÇÕES DE RELATÓRIO POR CAPÍTULO
// ============================================================

function exportarRelatorioCapitulo(capituloKey) {
    const dados = getDados();
    const requisitos = getListaRequisitos().filter(r => r.capitulo === capituloKey);
    const capitulos = getCaps(dados);
    const capitulo = capitulos[capituloKey];
    const dataStr = getDataStr();
    const dataHoraStr = getDataHoraStr();

    if (!capitulo || requisitos.length === 0) {
        alert(`Nenhum requisito encontrado para o capitulo ${capituloKey}`);
        return;
    }

    const nomeCapitulo = capituloKey === 'GT' ? 'GT Preservacao Digital' : `Capitulo ${capituloKey}`;
    const total = requisitos.length;
    const atendidos = requisitos.filter(r => r.status === 'Atendido').length;
    const parcial = requisitos.filter(r => r.status === 'Parcialmente Atendido').length;
    const naoAtendidos = requisitos.filter(r => r.status === 'Não Atendido').length;
    const aVerificar = requisitos.filter(r => r.status === 'VERIFICAR!!').length;
    const naoAvaliados = requisitos.filter(r => r.status === 'Não Avaliado').length;
    const avaliados = total - naoAvaliados;
    const peso = atendidos + (parcial * 0.5);
    const pct = avaliados > 0 ? Math.round((peso / avaliados) * 100) : 0;

    let relatorio = `========================================\n`;
    relatorio += `RELATORIO - ${nomeCapitulo}\n`;
    relatorio += `DocZ - Conformidade e-ARQ Brasil\n`;
    relatorio += `========================================\n\n`;
    relatorio += `Data de Geracao: ${dataHoraStr}\n`;
    relatorio += `Data da Avaliacao: ${dataStr}\n\n`;

    relatorio += `=== ESTATISTICAS ===\n`;
    relatorio += `Total de Requisitos: ${total}\n`;
    relatorio += `Atendidos: ${atendidos}\n`;
    relatorio += `Parcialmente Atendidos: ${parcial}\n`;
    relatorio += `Não Atendidos: ${naoAtendidos}\n`;
    relatorio += `A Verificar: ${aVerificar}\n`;
    relatorio += `Não Avaliados: ${naoAvaliados}\n`;
    relatorio += `Conformidade: ${pct}%\n\n`;

    relatorio += `=== REQUISITOS ===\n`;
    relatorio += `------------------------------------------------------------\n`;
    relatorio += `ID       | Status                 | Titulo\n`;
    relatorio += `------------------------------------------------------------\n`;

    requisitos.sort((a, b) => a.id.localeCompare(b.id));
    requisitos.forEach(r => {
        const status = r.status.padEnd(20);
        relatorio += `${r.id.padEnd(8)} | ${status} | ${r.titulo}\n`;
    });

    downloadArquivo(relatorio, `capitulo_${capituloKey}_${new Date().toISOString().slice(0, 10)}.txt`, 'text/plain');
}

// ============================================================
// EXPORTAÇÃO DE RELATÓRIO COMPLETO
// ============================================================

function exportarRelatorioCompleto() {
    exportarPDFViaPrint();
    setTimeout(() => exportarPendenciasPDF(), 1000);
    setTimeout(() => exportarResumoPDF(), 2000);
}

// ============================================================
// INICIALIZAÇÃO
// ============================================================

console.log('Modulo de relatorios pronto para uso.');
console.log('Funcoes disponiveis:');
console.log('  - exportarPDFViaPrint() - Relatorio de Conformidade');
console.log('  - exportarPendenciasPDF() - Relatorio de Pendencias (inclui VERIFICAR!!)');
console.log('  - exportarResumoPDF() - Resumo Executivo');
console.log('  - exportarHTML() - Visualizar em HTML');
console.log('  - exportarRelatorioCompleto() - Todos os PDFs');
console.log('  - exportarRelatorioCapitulo("1") - Relatorio por capitulo');