// ============================================================
// DASHBOARD - Lógica Principal (COM EXPANSÃO DE IMAGEM)
// ============================================================

let requisitosAtuais = [];
let listaIds = [];
let indiceAtual = -1;
let stats = {};

document.addEventListener('DOMContentLoaded', function() {
    stats = getEstatisticas();
    requisitosAtuais = Object.values(cruzamentoRequisitos);
    listaIds = requisitosAtuais.map(r => r.id);
    
    renderDashboard();
    setupNavigation();
    
    const now = new Date();
    document.getElementById('dataAtualizacao').textContent = now.toLocaleString('pt-BR');
    document.getElementById('ultimaAtualizacao').textContent = now.toLocaleDateString('pt-BR');
});

function setupNavigation() {
    document.getElementById('btnDashboard').addEventListener('click', function(e) {
        e.preventDefault();
        setActiveNav(this);
        renderDashboard();
    });
    
    document.getElementById('btnRequisitos').addEventListener('click', function(e) {
        e.preventDefault();
        setActiveNav(this);
        renderTabela();
    });
    
    document.getElementById('btnRelatorios').addEventListener('click', function(e) {
        e.preventDefault();
        setActiveNav(this);
        renderRelatorios();
    });
    
    document.getElementById('btnBugs').addEventListener('click', function(e) {
        e.preventDefault();
        setActiveNav(this);
        renderBugs();
    });
    
    document.addEventListener('keydown', function(e) {
        const modal = document.getElementById('modalEvidencias');
        const isOpen = modal && !modal.classList.contains('hidden');
        if (!isOpen) return;
        if (e.key === 'Escape') fecharModal();
        else if (e.key === 'ArrowLeft') navegarRequisito(-1);
        else if (e.key === 'ArrowRight') navegarRequisito(1);
    });
    
    // Fechar modal de imagem com ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            fecharImageModal();
        }
    });
}

function setActiveNav(el) {
    document.querySelectorAll('.nav-item-ativo, .nav-item-inativo').forEach(item => {
        item.className = 'flex items-center gap-3 nav-item-inativo rounded-xl px-4 py-3 transition-all duration-200';
    });
    el.className = 'flex items-center gap-3 nav-item-ativo rounded-xl px-4 py-3 transition-all duration-200';
}

// ============================================================
// FUNÇÃO PARA EXPANDIR IMAGEM
// ============================================================

function expandirImagem(src, descricao) {
    const modal = document.getElementById('imageModal');
    const img = document.getElementById('expandedImage');
    const info = document.getElementById('imageModalInfo');
    img.src = src;
    info.textContent = descricao || 'Evidência';
    modal.classList.add('active');
    document.body.classList.add('overflow-hidden');
}

function fecharImageModal(event) {
    if (event && event.target && event.target !== event.currentTarget) return;
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    document.body.classList.remove('overflow-hidden');
}

// ============================================================
// DASHBOARD
// ============================================================

function renderDashboard() {
    const main = document.getElementById('main-content');
    
    main.innerHTML = `
        <div class="space-y-8">
            <div>
                <h1 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-2 tracking-tight">
                    Dashboard de Conformidade
                </h1>
                <p class="font-body-lg text-body-lg text-on-surface-variant max-w-4xl leading-relaxed">
                    Cruzamento entre os requisitos do e-ARQ Brasil e as funcionalidades implementadas no DocZ.
                </p>
            </div>
            
            <div class="stats-grid">
                <div class="stat-card primary">
                    <div class="stat-value">${stats.total}</div>
                    <div class="stat-label">Total de Requisitos</div>
                    <div class="stat-sub">Capítulo 1.1</div>
                </div>
                <div class="stat-card success">
                    <div class="stat-value">${stats.atendidos}</div>
                    <div class="stat-label">Atendidos</div>
                    <div class="stat-sub">Requisitos cumpridos</div>
                </div>
                <div class="stat-card warning">
                    <div class="stat-value">${stats.parcial}</div>
                    <div class="stat-label">Atendidos Parcialmente</div>
                    <div class="stat-sub">Em andamento</div>
                </div>
                <div class="stat-card danger">
                    <div class="stat-value">${stats.naoAtendidos}</div>
                    <div class="stat-label">Não Atendidos</div>
                    <div class="stat-sub">Pendentes</div>
                </div>
                <div class="stat-card primary">
                    <div class="stat-value">${stats.conformidade}%</div>
                    <div class="stat-label">Conformidade Geral</div>
                    <div class="progress-bar">
                        <div class="fill" style="width: ${stats.conformidade}%; background: ${stats.conformidade >= 80 ? '#10b981' : stats.conformidade >= 50 ? '#f59e0b' : '#ef4444'};"></div>
                    </div>
                    <div class="stat-sub">Meta: 80%</div>
                </div>
            </div>
            
            <div class="bg-white border border-outline-variant rounded-2xl p-6 shadow-sm">
                <h3 class="font-headline-md text-primary font-bold text-base mb-4">Resumo por Capítulo</h3>
                <div id="resumoCapitulos" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"></div>
            </div>
        </div>
    `;
    
    renderResumoCapitulos();
}

function renderResumoCapitulos() {
    const container = document.getElementById('resumoCapitulos');
    
    const reqs = Object.values(cruzamentoRequisitos);
    const total = reqs.length;
    const atendidos = reqs.filter(r => r.status === 'Atendido').length;
    const pct = total > 0 ? Math.round((atendidos / total) * 100) : 0;
    
    container.innerHTML = `
        <div class="p-4 bg-surface-container-low rounded-xl border border-outline-variant/60 text-center">
            <div class="text-sm font-bold text-primary">Capítulo 1.1</div>
            <div class="text-xs text-on-surface-variant">Configuração do Plano de Classificação</div>
            <div class="text-xl font-bold text-primary mt-2">${pct}%</div>
            <div class="text-xs text-on-surface-variant">${atendidos}/${total} atendidos</div>
            <div class="progress-bar mt-2">
                <div class="fill" style="width: ${pct}%; background: ${pct >= 80 ? '#10b981' : pct >= 50 ? '#f59e0b' : '#ef4444'};"></div>
            </div>
        </div>
    `;
}

// ============================================================
// TABELA DE REQUISITOS
// ============================================================

function renderTabela() {
    const main = document.getElementById('main-content');
    const requisitos = Object.values(cruzamentoRequisitos);
    
    let html = `
        <div class="space-y-4">
            <div>
                <h2 class="font-headline-md text-headline-md text-primary font-bold">Lista de Requisitos</h2>
                <p class="text-sm text-on-surface-variant">${requisitos.length} requisitos mapeados</p>
            </div>
            
            <div class="filters-bar">
                <div class="search-box">
                    <span class="material-symbols-outlined icon">search</span>
                    <input type="text" id="searchInput" placeholder="Pesquisar requisito..." />
                </div>
                <select id="filtroStatus">
                    <option value="">Todos os Status</option>
                    <option value="Atendido">Atendido</option>
                    <option value="Atendido Parcialmente">Atendido Parcialmente</option>
                    <option value="Nao Atendido">Não Atendido</option>
                    <option value="Em Desenvolvimento">Em Desenvolvimento</option>
                </select>
                <span id="contadorResultados" class="text-sm text-on-surface-variant ml-auto">${requisitos.length} requisitos</span>
            </div>
            
            <div class="requisitos-table-container">
                <table class="requisitos-table">
                    <thead>
                        <tr>
                            <th style="width: 80px;">ID</th>
                            <th>Requisito</th>
                            <th style="width: 180px;">Status</th>
                            <th style="width: 100px;">Prints</th>
                            <th style="width: 120px;">Evidências</th>
                        </tr>
                    </thead>
                    <tbody id="tabelaRequisitos">
                    </tbody>
                </table>
            </div>
        </div>
    `;
    
    main.innerHTML = html;
    
    // Renderizar linhas
    const tbody = document.getElementById('tabelaRequisitos');
    requisitos.forEach(req => {
        const tr = document.createElement('tr');
        tr.dataset.id = req.id;
        tr.dataset.status = req.status;
        
        const statusClass = getStatusClass(req.status);
        const statusLabel = getStatusLabel(req.status);
        const qtdPrints = req.evidencias && req.evidencias.prints ? req.evidencias.prints.length : 0;
        
        tr.innerHTML = `
            <td><strong>${req.id}</strong></td>
            <td>${req.titulo}</td>
            <td><span class="status-badge ${statusClass}">${statusLabel}</span></td>
            <td class="text-center">${qtdPrints > 0 ? qtdPrints : '-'}</td>
            <td>
                <button class="btn-evidencia" onclick="abrirModal('${req.id}')">
                    <span class="material-symbols-outlined">visibility</span>
                    Ver
                </button>
            </td>
        `;
        
        tbody.appendChild(tr);
    });
    
    // Configurar filtros
    document.getElementById('filtroStatus').addEventListener('change', aplicarFiltros);
    document.getElementById('searchInput').addEventListener('input', aplicarFiltros);
}

function getStatusClass(status) {
    const map = {
        'Atendido': 'atendido',
        'Atendido Parcialmente': 'parcial',
        'Nao Atendido': 'nao-atendido',
        'Em Desenvolvimento': 'em-desenvolvimento'
    };
    return map[status] || '';
}

function getStatusLabel(status) {
    const map = {
        'Atendido': 'Atendido',
        'Atendido Parcialmente': 'Atendido Parcialmente',
        'Nao Atendido': 'Não Atendido',
        'Em Desenvolvimento': 'Em Desenvolvimento'
    };
    return map[status] || status;
}

function aplicarFiltros() {
    const status = document.getElementById('filtroStatus').value;
    const search = document.getElementById('searchInput').value.toLowerCase();
    
    const linhas = document.querySelectorAll('#tabelaRequisitos tr');
    let visiveis = 0;
    
    linhas.forEach(tr => {
        const id = tr.dataset.id;
        const req = cruzamentoRequisitos[id];
        if (!req) return;
        
        let show = true;
        if (status && req.status !== status) show = false;
        if (search) {
            const match = req.id.toLowerCase().includes(search) ||
                          req.titulo.toLowerCase().includes(search) ||
                          req.descricao.toLowerCase().includes(search);
            if (!match) show = false;
        }
        
        tr.style.display = show ? '' : 'none';
        if (show) visiveis++;
    });
    
    document.getElementById('contadorResultados').textContent = `${visiveis} requisitos`;
}

// ============================================================
// MODAL DE EVIDÊNCIAS (COM BOTÃO EXPANDIR)
// ============================================================

function abrirModal(id) {
    const req = cruzamentoRequisitos[id];
    if (!req) return;
    
    // Atualizar lista de navegação
    const linhas = document.querySelectorAll('#tabelaRequisitos tr');
    if (linhas.length > 0) {
        listaIds = [];
        linhas.forEach(tr => {
            if (tr.style.display !== 'none') {
                listaIds.push(tr.dataset.id);
            }
        });
    } else {
        listaIds = Object.keys(cruzamentoRequisitos);
    }
    indiceAtual = listaIds.indexOf(id);
    
    const modal = document.getElementById('modalEvidencias');
    const corpo = document.getElementById('modalCorpo');
    
    // Header
    document.getElementById('modalRequisitoId').textContent = `Requisito ${req.id}`;
    const statusClass = getStatusClass(req.status);
    const statusLabel = getStatusLabel(req.status);
    document.getElementById('modalStatus').className = `status-badge-modal ${statusClass}`;
    document.getElementById('modalStatus').textContent = statusLabel;
    
    // ===== CONTEÚDO DO MODAL =====
    let html = `
        <!-- Título -->
        <h3 class="modal-title">${req.titulo}</h3>
        
        <!-- Descrição -->
        <div class="modal-section">
            <div class="modal-section-title">
                <span class="material-symbols-outlined">description</span>
                Descrição do Requisito
            </div>
            <div class="modal-section-content">${req.descricao}</div>
        </div>
        
        <!-- Status -->
        <div class="modal-section">
            <div class="modal-section-title">
                <span class="material-symbols-outlined">check_circle</span>
                Status de Atendimento
            </div>
            <div class="modal-section-content">
                <span class="status-badge ${statusClass}" style="font-size:0.8rem;padding:0.3rem 1rem;">${statusLabel}</span>
            </div>
        </div>
    `;
    
    // Como atende
    if (req.evidencias && req.evidencias.descricao) {
        html += `
            <div class="modal-section">
                <div class="modal-section-title">
                    <span class="material-symbols-outlined">lightbulb</span>
                    Como atende
                </div>
                <div class="modal-section-content">${req.evidencias.descricao}</div>
            </div>
        `;
    }
    
    // Onde (localização)
    if (req.evidencias && req.evidencias.localizacao) {
        html += `
            <div class="modal-section">
                <div class="modal-section-title">
                    <span class="material-symbols-outlined">location_on</span>
                    Localização no sistema
                </div>
                <div class="modal-section-content">
                    <code style="background:#f1f2f4;padding:0.2rem 0.6rem;border-radius:0.25rem;font-size:0.8rem;color:#191c1d;">${req.evidencias.localizacao}</code>
                    ${req.evidencias.referencia ? `<div style="margin-top:0.25rem;font-size:0.75rem;color:#737780;">Referência: ${req.evidencias.referencia}</div>` : ''}
                </div>
            </div>
        `;
    }
    
    // Prints (com botão expandir)
    const prints = req.evidencias && req.evidencias.prints ? req.evidencias.prints : [];
    if (prints.length > 0) {
        html += `
            <div class="modal-section" style="background:white;border-color:#e1e3e4;">
                <div class="modal-section-title">
                    <span class="material-symbols-outlined">photo_library</span>
                    Evidências visuais (${prints.length})
                </div>
                <div style="margin-top:0.5rem;">
        `;
        prints.forEach(p => {
            const caminhoCompleto = p.arquivo;
            html += `
                <div class="print-item">
                    <div class="print-header">
                        <span class="material-symbols-outlined">image</span>
                        <span class="print-label">${p.descricao || 'Print de evidência'}</span>
                        ${p.data ? `<span class="print-date">${p.data}</span>` : ''}
                    </div>
                    <img src="${caminhoCompleto}" 
                         alt="${p.descricao || 'Evidência'}" 
                         onclick="expandirImagem('${caminhoCompleto}', '${p.descricao || 'Evidência'}')"
                         onerror="this.style.display='none'; this.parentElement.innerHTML += '<div style=\\'text-align:center;padding:1rem;color:#737780;font-size:0.8rem;\\'><span style=\\'font-size:1.5rem;\\'>🖼️</span><br>Imagem não encontrada<br><span style=\\'font-size:0.7rem;font-family:monospace;\\'>${caminhoCompleto}</span></div>';" />
                    <div class="print-actions">
                        <button class="expand-btn" onclick="expandirImagem('${caminhoCompleto}', '${p.descricao || 'Evidência'}')">
                            <span class="material-symbols-outlined" style="font-size:1rem;">open_in_full</span>
                            Expandir imagem
                        </button>
                    </div>
                </div>
            `;
        });
        html += `
                </div>
            </div>
        `;
    } else {
        html += `
            <div class="no-prints">
                <span class="material-symbols-outlined">image_not_supported</span>
                <p>Nenhuma evidência visual disponível para este requisito.</p>
            </div>
        `;
    }
    
    // Observações
    if (req.observacoes && req.observacoes.length > 0) {
        html += `
            <div class="modal-section" style="border-color:#fde68a;background:#fffbeb;">
                <div class="modal-section-title" style="color:#92400e;">
                    <span class="material-symbols-outlined" style="color:#92400e;">note</span>
                    Observações
                </div>
                <div class="modal-section-content">
                    <ul style="margin:0;padding:0;list-style:none;">
                        ${req.observacoes.map(o => `<li class="observacao-item">${o}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    }
    
    // Bugs
    if (req.bugs && req.bugs.length > 0) {
        html += `
            <div class="modal-section" style="border-color:#fca5a5;background:#fef2f2;">
                <div class="modal-section-title" style="color:#991b1b;">
                    <span class="material-symbols-outlined" style="color:#991b1b;">bug_report</span>
                    Bugs relacionados
                </div>
                <div class="modal-section-content">
                    <ul style="margin:0;padding:0;list-style:none;">
                        ${req.bugs.map(b => `<li class="bug-item">${b}</li>`).join('')}
                    </ul>
                </div>
            </div>
        `;
    }
    
    // Metadados
    html += `
        <div class="modal-meta-grid">
            <div>Responsável: <span>${req.responsavel || '-'}</span></div>
            <div>Data de Validação: <span>${req.dataValidacao || '-'}</span></div>
            <div>Capítulo: <span>${req.capitulo}</span></div>
            <div>Subseção: <span>${req.subsecao || '-'}</span></div>
        </div>
    `;
    
    corpo.innerHTML = html;
    
    // Navegação
    document.getElementById('modalNavegacao').textContent = `${indiceAtual + 1} de ${listaIds.length}`;
    document.getElementById('btnAnterior').disabled = indiceAtual <= 0;
    document.getElementById('btnProximo').disabled = indiceAtual >= listaIds.length - 1;
    
    modal.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    corpo.scrollTop = 0;
}

function navegarRequisito(direcao) {
    const novoIndice = indiceAtual + direcao;
    if (novoIndice >= 0 && novoIndice < listaIds.length) {
        abrirModal(listaIds[novoIndice]);
    }
}

function fecharModal(event) {
    if (event && event.target && event.target !== event.currentTarget) return;
    const modal = document.getElementById('modalEvidencias');
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
}

// ============================================================
// RELATÓRIOS
// ============================================================

function renderRelatorios() {
    const main = document.getElementById('main-content');
    
    main.innerHTML = `
        <div class="space-y-6">
            <div>
                <h1 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-2 tracking-tight">
                    Relatórios de Conformidade
                </h1>
                <p class="font-body-lg text-body-lg text-on-surface-variant max-w-4xl leading-relaxed">
                    Exporte relatórios detalhados sobre a conformidade do DocZ com o e-ARQ Brasil.
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="report-card">
                    <div class="icon-wrapper primary">
                        <span class="material-symbols-outlined">assessment</span>
                    </div>
                    <h3 class="font-bold text-primary text-base">Relatório de Conformidade</h3>
                    <p class="text-sm text-on-surface-variant mt-1 mb-4">
                        Relatório completo com todos os requisitos, status e evidências.
                    </p>
                    <button onclick="exportarConformidade()" class="btn-primary w-full justify-center">
                        <span class="material-symbols-outlined text-base">download</span>
                        Gerar Relatório
                    </button>
                </div>
                
                <div class="report-card">
                    <div class="icon-wrapper danger">
                        <span class="material-symbols-outlined">bug_report</span>
                    </div>
                    <h3 class="font-bold text-primary text-base">Relatório de Bugs</h3>
                    <p class="text-sm text-on-surface-variant mt-1 mb-4">
                        Lista detalhada de todos os bugs identificados.
                    </p>
                    <button onclick="exportarBugs()" class="btn-primary w-full justify-center">
                        <span class="material-symbols-outlined text-base">download</span>
                        Gerar Relatório
                    </button>
                </div>
                
                <div class="report-card">
                    <div class="icon-wrapper warning">
                        <span class="material-symbols-outlined">summarize</span>
                    </div>
                    <h3 class="font-bold text-primary text-base">Resumo Executivo</h3>
                    <p class="text-sm text-on-surface-variant mt-1 mb-4">
                        Resumo executivo com estatísticas principais e indicadores.
                    </p>
                    <button onclick="exportarResumo()" class="btn-primary w-full justify-center">
                        <span class="material-symbols-outlined text-base">download</span>
                        Gerar Resumo
                    </button>
                </div>
                
                <div class="report-card">
                    <div class="icon-wrapper primary">
                        <span class="material-symbols-outlined">table_view</span>
                    </div>
                    <h3 class="font-bold text-primary text-base">Exportar Dados</h3>
                    <p class="text-sm text-on-surface-variant mt-1 mb-4">
                        Exporte todos os dados em formato CSV para análise externa.
                    </p>
                    <button onclick="exportarCSV()" class="btn-primary w-full justify-center">
                        <span class="material-symbols-outlined text-base">table_rows</span>
                        Exportar CSV
                    </button>
                </div>
            </div>
        </div>
    `;
}

// ============================================================
// BUGS
// ============================================================

function renderBugs() {
    const main = document.getElementById('main-content');
    const bugs = getBugsAbertos();
    
    main.innerHTML = `
        <div class="space-y-6">
            <div>
                <h1 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-2 tracking-tight">
                    Bugs Abertos
                </h1>
                <p class="font-body-lg text-body-lg text-on-surface-variant max-w-4xl leading-relaxed">
                    Lista de bugs identificados durante a validação dos requisitos.
                </p>
            </div>
            
            <div class="bg-white border border-outline-variant rounded-2xl overflow-hidden shadow-sm">
                ${bugs.length === 0 ? `
                    <div class="p-8 text-center text-on-surface-variant">
                        <span class="material-symbols-outlined text-4xl text-[#10b981]">check_circle</span>
                        <p class="mt-2 font-medium">Nenhum bug aberto encontrado.</p>
                    </div>
                ` : `
                    <div class="divide-y divide-outline-variant">
                        ${bugs.map(b => `
                            <div class="p-4 hover:bg-surface-container-low transition-colors">
                                <div class="flex items-center gap-3">
                                    <span class="font-mono-sm font-bold text-tertiary px-2.5 py-1 bg-tertiary-fixed rounded-lg text-sm">${b.id}</span>
                                    <span class="font-medium text-on-surface">${b.titulo}</span>
                                </div>
                                <ul class="mt-2 ml-4 space-y-1">
                                    ${b.bugs.map(bug => `
                                        <li class="text-sm text-on-surface-variant flex items-center gap-2">
                                            <span class="material-symbols-outlined text-[#ef4444] text-sm">bug_report</span>
                                            ${bug}
                                        </li>
                                    `).join('')}
                                </ul>
                            </div>
                        `).join('')}
                    </div>
                `}
            </div>
        </div>
    `;
}

// ============================================================
// EXPORTAÇÕES
// ============================================================

function exportarConformidade() {
    const stats = getEstatisticas();
    const requisitos = Object.values(cruzamentoRequisitos);
    
    let relatorio = `========================================\n`;
    relatorio += `RELATÓRIO DE CONFORMIDADE E-ARQ BRASIL\n`;
    relatorio += `DocZ - Sistema de Gestão Arquivística\n`;
    relatorio += `========================================\n\n`;
    relatorio += `Data de Geração: ${new Date().toLocaleString('pt-BR')}\n\n`;
    
    relatorio += `=== ESTATÍSTICAS GERAIS ===\n`;
    relatorio += `Total de Requisitos: ${stats.total}\n`;
    relatorio += `Atendidos: ${stats.atendidos}\n`;
    relatorio += `Atendidos Parcialmente: ${stats.parcial}\n`;
    relatorio += `Não Atendidos: ${stats.naoAtendidos}\n`;
    relatorio += `Em Desenvolvimento: ${stats.emDesenvolvimento}\n`;
    relatorio += `Conformidade Geral: ${stats.conformidade}%\n\n`;
    
    relatorio += `=== DETALHAMENTO POR REQUISITO ===\n`;
    relatorio += `------------------------------------------------------------\n`;
    relatorio += `ID       | Status                 \n`;
    relatorio += `------------------------------------------------------------\n`;
    
    requisitos.sort((a, b) => a.id.localeCompare(b.id));
    requisitos.forEach(r => {
        const status = r.status.padEnd(20);
        relatorio += `${r.id.padEnd(8)} | ${status}\n`;
    });
    
    downloadArquivo(relatorio, `conformidade_${new Date().toISOString().slice(0,10)}.txt`, 'text/plain');
}

function exportarBugs() {
    const bugs = getBugsAbertos();
    
    let relatorio = `========================================\n`;
    relatorio += `RELATÓRIO DE BUGS - E-ARQ BRASIL × DocZ\n`;
    relatorio += `========================================\n\n`;
    relatorio += `Data de Geração: ${new Date().toLocaleString('pt-BR')}\n`;
    relatorio += `Total de Bugs: ${bugs.reduce((acc, b) => acc + b.bugs.length, 0)}\n\n`;
    
    bugs.forEach(b => {
        relatorio += `--- Requisito ${b.id}: ${b.titulo} ---\n`;
        b.bugs.forEach(bug => {
            relatorio += `  * ${bug}\n`;
        });
        relatorio += `\n`;
    });
    
    downloadArquivo(relatorio, `bugs_${new Date().toISOString().slice(0,10)}.txt`, 'text/plain');
}

function exportarResumo() {
    const stats = getEstatisticas();
    
    let relatorio = `========================================\n`;
    relatorio += `RESUMO EXECUTIVO - CONFORMIDADE E-ARQ\n`;
    relatorio += `========================================\n\n`;
    relatorio += `Data: ${new Date().toLocaleString('pt-BR')}\n\n`;
    
    relatorio += `=== INDICADORES ===\n`;
    relatorio += `Conformidade Geral: ${stats.conformidade}%\n`;
    relatorio += `Requisitos Atendidos: ${stats.atendidos}/${stats.total}\n`;
    relatorio += `Bugs Abertos: ${getBugsAbertos().reduce((acc, b) => acc + b.bugs.length, 0)}\n\n`;
    
    downloadArquivo(relatorio, `resumo_executivo_${new Date().toISOString().slice(0,10)}.txt`, 'text/plain');
}

function exportarCSV() {
    const requisitos = Object.values(cruzamentoRequisitos);
    const cabecalho = ['ID', 'Título', 'Status', 'Responsável', 'Data Validação', 'Capítulo', 'Subseção'];
    const linhas = requisitos.map(r => [
        r.id,
        `"${r.titulo}"`,
        r.status,
        r.responsavel || '',
        r.dataValidacao || '',
        r.capitulo,
        `"${r.subsecao || ''}"`
    ]);
    
    const csv = [cabecalho.join(','), ...linhas.map(l => l.join(','))].join('\n');
    downloadArquivo(csv, `conformidade_${new Date().toISOString().slice(0,10)}.csv`, 'text/csv');
}

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