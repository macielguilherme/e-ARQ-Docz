// ============================================================
// DASHBOARD - Lógica Principal (COM NAVEGAÇÃO EM NÍVEIS)
// ATUALIZADO CONFORME RELATÓRIO TÉCNICO - 21/08/2026
// ============================================================

let requisitosAtuais = [];
let listaIds = [];
let indiceAtual = -1;
let stats = {};
let nivelAtual = 'dashboard'; // dashboard, capitulo, secao, requisito

document.addEventListener('DOMContentLoaded', function () {
    stats = getEstatisticas();
    requisitosAtuais = Object.values(cruzamentoRequisitos);
    listaIds = requisitosAtuais.map(r => r.id);

    renderDashboard();
    setupNavigation();

    const now = new Date();
    document.getElementById('dataAtualizacao').textContent = now.toLocaleString('pt-BR');
    document.getElementById('ultimaAtualizacao').textContent = '21/08/2026';
});

function setupNavigation() {
    document.getElementById('btnDashboard').addEventListener('click', function (e) {
        e.preventDefault();
        setActiveNav(this);
        nivelAtual = 'dashboard';
        renderDashboard();
    });

    document.getElementById('btnRequisitos').addEventListener('click', function (e) {
        e.preventDefault();
        setActiveNav(this);
        nivelAtual = 'capitulo';
        renderCapitulos();
    });

    document.getElementById('btnRelatorios').addEventListener('click', function (e) {
        e.preventDefault();
        setActiveNav(this);
        renderRelatorios();
    });

    document.addEventListener('keydown', function (e) {
        const modal = document.getElementById('modalEvidencias');
        const isOpen = modal && !modal.classList.contains('hidden');
        if (!isOpen) return;
        if (e.key === 'Escape') fecharModal();
        else if (e.key === 'ArrowLeft') navegarRequisito(-1);
        else if (e.key === 'ArrowRight') navegarRequisito(1);
    });

    document.addEventListener('keydown', function (e) {
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
    const resumoGrupos = getResumoPorGrupo();

    let gruposHtml = '';
    for (const [grupo, dados] of Object.entries(resumoGrupos)) {
        const total = dados.total;
        const avaliados = total - dados.naoAvaliados;
        const peso = dados.atendidos + (dados.parcial * 0.5);
        const pct = avaliados > 0 ? Math.round((peso / avaliados) * 100) : 0;
        const cor = pct >= 90 ? '#10b981' : pct >= 70 ? '#f59e0b' : '#ef4444';

        gruposHtml += `
            <div class="p-4 bg-surface-container-low rounded-xl border border-outline-variant/60">
                <div class="text-sm font-bold text-primary">${grupo}</div>
                <div class="text-xs text-on-surface-variant">${dados.atendidos}/${total} atendidos</div>
                <div class="text-xl font-bold text-primary mt-1">${pct}%</div>
                <div class="progress-bar mt-2">
                    <div class="fill" style="width: ${pct}%; background: ${cor};"></div>
                </div>
                <div class="text-xs text-on-surface-variant mt-1">
                    ${dados.naoAvaliados > 0 ? dados.naoAvaliados + ' não avaliados' : ''}
                </div>
            </div>
        `;
    }

    main.innerHTML = `
        <div class="space-y-8">
            <div>
                <h1 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-2 tracking-tight">
                    Dashboard de Conformidade
                </h1>
                <p class="font-body-lg text-body-lg text-on-surface-variant max-w-4xl leading-relaxed">
                    Cruzamento entre os requisitos do e-ARQ Brasil e as funcionalidades implementadas no DocZ.
                    <br />
                    <span class="text-sm font-semibold text-primary">Relatório Técnico - 21 de agosto de 2026</span>
                </p>
            </div>
            
            <div class="bg-primary-container/10 border border-primary-fixed-dim rounded-2xl p-4 md:p-6">
                <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                        <span class="text-sm font-semibold text-primary">Conformidade Geral</span>
                        <div class="text-3xl font-bold text-primary">${stats.conformidadeGeral}%</div>
                        <div class="text-xs text-on-surface-variant">${stats.atendidos} atendidos · ${stats.parcial} parciais · ${stats.naoAtendidos} não atendidos · ${stats.naoAvaliados} não avaliados</div>
                    </div>
                    <div class="flex flex-wrap gap-4">
                        <div class="text-center">
                            <div class="text-2xl font-bold text-[#10b981]">${stats.atendidos}</div>
                            <div class="text-xs text-on-surface-variant">Atendidos</div>
                        </div>
                        <div class="text-center">
                            <div class="text-2xl font-bold text-[#f59e0b]">${stats.parcial}</div>
                            <div class="text-xs text-on-surface-variant">Parciais</div>
                        </div>
                        <div class="text-center">
                            <div class="text-2xl font-bold text-[#ef4444]">${stats.naoAtendidos}</div>
                            <div class="text-xs text-on-surface-variant">Não Atendidos</div>
                        </div>
                        <div class="text-center">
                            <div class="text-2xl font-bold text-[#64748b]">${stats.naoAvaliados}</div>
                            <div class="text-xs text-on-surface-variant">Não Avaliados</div>
                        </div>
                    </div>
                </div>
                <div class="mt-4">
                    <div class="progress-bar h-3">
                        <div class="fill h-3" style="width: ${stats.conformidadeGeral}%; background: ${stats.conformidadeGeral >= 80 ? '#10b981' : stats.conformidadeGeral >= 50 ? '#f59e0b' : '#ef4444'};"></div>
                    </div>
                    <div class="flex justify-between text-xs text-on-surface-variant mt-1">
                        <span>0%</span>
                        <span>Meta: 80%</span>
                        <span>100%</span>
                    </div>
                </div>
            </div>
            
            <div class="stats-grid">
                <div class="stat-card primary">
                    <div class="stat-value">${stats.total}</div>
                    <div class="stat-label">Total de Requisitos</div>
                    <div class="stat-sub">177 requisitos mapeados</div>
                </div>
                <div class="stat-card success">
                    <div class="stat-value">${stats.atendidos}</div>
                    <div class="stat-label">Atendidos</div>
                    <div class="stat-sub">Requisitos cumpridos</div>
                </div>
                <div class="stat-card warning">
                    <div class="stat-value">${stats.parcial}</div>
                    <div class="stat-label">Parcialmente Atendidos</div>
                    <div class="stat-sub">Em correção</div>
                </div>
                <div class="stat-card danger">
                    <div class="stat-value">${stats.naoAtendidos}</div>
                    <div class="stat-label">Não Atendidos</div>
                    <div class="stat-sub">Pendentes</div>
                </div>
                <div class="stat-card info">
                    <div class="stat-value">${stats.naoAvaliados}</div>
                    <div class="stat-label">Não Avaliados</div>
                    <div class="stat-sub">Etapas futuras</div>
                </div>
                <div class="stat-card primary">
                    <div class="stat-value">${stats.conformidade}%</div>
                    <div class="stat-label">Conformidade (Avaliáveis)</div>
                    <div class="stat-sub">${stats.avaliados} requisitos avaliados</div>
                    <div class="progress-bar">
                        <div class="fill" style="width: ${stats.conformidade}%; background: ${stats.conformidade >= 80 ? '#10b981' : stats.conformidade >= 50 ? '#f59e0b' : '#ef4444'};"></div>
                    </div>
                </div>
            </div>
            
            <div class="bg-white border border-outline-variant rounded-2xl p-6 shadow-sm">
                <h3 class="font-headline-md text-primary font-bold text-base mb-4">Resumo por Grupo</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    ${gruposHtml}
                </div>
            </div>
            
            <div class="bg-white border border-outline-variant rounded-2xl p-6 shadow-sm">
                <h3 class="font-headline-md text-primary font-bold text-base mb-4">Requisitos com Pendências (${stats.parcial + stats.naoAtendidos})</h3>
                ${renderPendencias()}
            </div>
        </div>
    `;
}

function renderPendencias() {
    const pendentes = Object.values(cruzamentoRequisitos).filter(r =>
        r.status === 'Parcialmente Atendido' || r.status === 'Não Atendido'
    );

    if (pendentes.length === 0) {
        return `
            <div class="text-center py-6 text-on-surface-variant">
                <span class="material-symbols-outlined text-4xl text-[#10b981]">check_circle</span>
                <p class="mt-2 font-medium">Nenhum requisito com pendência.</p>
            </div>
        `;
    }

    let html = '<div class="space-y-2">';
    pendentes.forEach(r => {
        const statusClass = r.status === 'Parcialmente Atendido' ? 'parcial' : 'nao-atendido';
        const statusIcon = r.status === 'Parcialmente Atendido' ? 'warning' : 'error';
        const corStatus = r.status === 'Parcialmente Atendido' ? '#f59e0b' : '#ef4444';

        html += `
            <div class="flex items-center gap-3 p-3 bg-surface-container-low rounded-xl border border-outline-variant/60 hover:bg-surface-container transition-colors cursor-pointer" onclick="abrirModal('${r.id}')">
                <span class="material-symbols-outlined" style="color: ${corStatus}">${statusIcon}</span>
                <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2 flex-wrap">
                        <span class="font-mono-sm text-xs font-bold text-tertiary px-2 py-0.5 bg-tertiary-fixed rounded-lg">${r.id}</span>
                        <span class="text-sm font-medium text-on-surface truncate">${r.titulo}</span>
                        <span class="status-badge ${statusClass}" style="font-size:0.6rem;padding:0.1rem 0.6rem;">${r.status}</span>
                    </div>
                    <div class="text-xs text-on-surface-variant mt-0.5">${r.justificativa ? r.justificativa.substring(0, 120) + (r.justificativa.length > 120 ? '...' : '') : 'Sem justificativa'}</div>
                </div>
                <span class="material-symbols-outlined text-on-surface-variant text-sm">chevron_right</span>
            </div>
        `;
    });
    html += '</div>';
    return html;
}

// ============================================================
// NAVEGAÇÃO EM NÍVEIS - CAPÍTULOS
// ============================================================

function renderCapitulos() {
    const main = document.getElementById('main-content');
    const capitulos = getCapitulos();

    const ordem = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', 'GT'];
    const capitulosOrdenados = ordem.filter(k => capitulos[k]).map(k => ({ key: k, ...capitulos[k] }));

    let html = `
        <div class="space-y-6">
            <div>
                <h2 class="font-headline-md text-headline-md text-primary font-bold">Requisitos por Capítulo</h2>
                <p class="text-sm text-on-surface-variant">Navegue pelos capítulos do e-ARQ Brasil para ver os requisitos</p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    `;

    capitulosOrdenados.forEach(c => {
        const total = c.total;
        const avaliados = total - c.naoAvaliados;
        const peso = c.atendidos + (c.parcial * 0.5);
        const pct = avaliados > 0 ? Math.round((peso / avaliados) * 100) : 0;
        const cor = pct >= 90 ? '#10b981' : pct >= 70 ? '#f59e0b' : '#ef4444';
        const nomeCapitulo = c.nome || c.key;
        const label = c.key === 'GT' ? 'GT Preservação Digital' : `Capítulo ${c.key}`;

        html += `
            <div class="bg-white border border-outline-variant rounded-2xl p-5 shadow-sm hover:shadow-md transition-all cursor-pointer" onclick="renderSecoes('${c.key}')">
                <div class="flex items-center justify-between mb-2">
                    <span class="font-bold text-primary text-lg">${label}</span>
                    <span class="text-xs text-on-surface-variant">${total} requisitos</span>
                </div>
                <div class="text-sm text-on-surface-variant line-clamp-2">${nomeCapitulo}</div>
                <div class="mt-3 flex items-center gap-3">
                    <span class="text-2xl font-bold text-primary">${pct}%</span>
                    <div class="flex-1 progress-bar h-2">
                        <div class="fill h-2" style="width: ${pct}%; background: ${cor};"></div>
                    </div>
                </div>
                <div class="mt-2 flex flex-wrap gap-2 text-xs">
                    <span class="text-[#10b981]">${c.atendidos} atendidos</span>
                    ${c.parcial > 0 ? `<span class="text-[#f59e0b]">${c.parcial} parciais</span>` : ''}
                    ${c.naoAtendidos > 0 ? `<span class="text-[#ef4444]">${c.naoAtendidos} não atendidos</span>` : ''}
                    ${c.naoAvaliados > 0 ? `<span class="text-[#64748b]">${c.naoAvaliados} não avaliados</span>` : ''}
                </div>
                <div class="mt-3 text-xs text-primary font-medium flex items-center gap-1">
                    Ver requisitos <span class="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
            </div>
        `;
    });

    html += `
            </div>
        </div>
    `;

    main.innerHTML = html;
}

// ============================================================
// NAVEGAÇÃO EM NÍVEIS - SEÇÕES
// ============================================================

function renderSecoes(capituloKey) {
    const main = document.getElementById('main-content');
    const capitulos = getCapitulos();
    const capitulo = capitulos[capituloKey];

    if (!capitulo) {
        renderCapitulos();
        return;
    }

    const secoes = {};
    capitulo.requisitos.forEach(r => {
        const secaoKey = r.secao || r.capitulo;
        if (!secoes[secaoKey]) {
            secoes[secaoKey] = {
                key: secaoKey,
                nome: r.subsecao || r.secao || r.capitulo,
                total: 0,
                atendidos: 0,
                parcial: 0,
                naoAtendidos: 0,
                naoAvaliados: 0,
                requisitos: []
            };
        }
        secoes[secaoKey].total++;
        secoes[secaoKey].requisitos.push(r);
        if (r.status === 'Atendido') secoes[secaoKey].atendidos++;
        else if (r.status === 'Parcialmente Atendido') secoes[secaoKey].parcial++;
        else if (r.status === 'Não Atendido') secoes[secaoKey].naoAtendidos++;
        else if (r.status === 'Não Avaliado') secoes[secaoKey].naoAvaliados++;
    });

    const total = capitulo.total;
    const avaliados = total - capitulo.naoAvaliados;
    const peso = capitulo.atendidos + (capitulo.parcial * 0.5);
    const pct = avaliados > 0 ? Math.round((peso / avaliados) * 100) : 0;
    const nomeCapitulo = capituloKey === 'GT' ? 'GT Preservação Digital' : `Capítulo ${capituloKey}`;

    let html = `
        <div class="space-y-6">
            <div>
                <div class="flex items-center gap-2 mb-2">
                    <button onclick="renderCapitulos()" class="text-sm text-primary hover:underline flex items-center gap-1">
                        <span class="material-symbols-outlined text-sm">arrow_back</span>
                        Voltar aos Capítulos
                    </button>
                </div>
                <h2 class="font-headline-md text-headline-md text-primary font-bold">${nomeCapitulo}</h2>
                <p class="text-sm text-on-surface-variant">${capitulo.nome || ''} · ${total} requisitos · ${pct}% de conformidade</p>
            </div>
            
            <div class="bg-primary-container/10 border border-primary-fixed-dim rounded-2xl p-4">
                <div class="flex flex-wrap gap-4 text-sm">
                    <span class="text-[#10b981]">${capitulo.atendidos} atendidos</span>
                    ${capitulo.parcial > 0 ? `<span class="text-[#f59e0b]">${capitulo.parcial} parciais</span>` : ''}
                    ${capitulo.naoAtendidos > 0 ? `<span class="text-[#ef4444]">${capitulo.naoAtendidos} não atendidos</span>` : ''}
                    ${capitulo.naoAvaliados > 0 ? `<span class="text-[#64748b]">${capitulo.naoAvaliados} não avaliados</span>` : ''}
                </div>
                <div class="mt-2 progress-bar h-2">
                    <div class="fill h-2" style="width: ${pct}%; background: ${pct >= 80 ? '#10b981' : pct >= 50 ? '#f59e0b' : '#ef4444'};"></div>
                </div>
            </div>
            
            <div class="space-y-3">
    `;

    const secoesOrdenadas = Object.values(secoes).sort((a, b) => a.key.localeCompare(b.key));

    secoesOrdenadas.forEach(s => {
        const sTotal = s.total;
        const sAvaliados = sTotal - s.naoAvaliados;
        const sPeso = s.atendidos + (s.parcial * 0.5);
        const sPct = sAvaliados > 0 ? Math.round((sPeso / sAvaliados) * 100) : 0;
        const cor = sPct >= 90 ? '#10b981' : sPct >= 70 ? '#f59e0b' : '#ef4444';

        html += `
            <div class="bg-white border border-outline-variant rounded-2xl p-4 shadow-sm hover:shadow-md transition-all cursor-pointer" onclick="renderRequisitosSecao('${capituloKey}', '${s.key}')">
                <div class="flex items-center justify-between">
                    <div>
                        <span class="font-semibold text-primary">${s.key}</span>
                        <span class="text-sm text-on-surface-variant ml-2">${s.nome || s.key}</span>
                    </div>
                    <span class="text-xs text-on-surface-variant">${sTotal} requisitos</span>
                </div>
                <div class="mt-2 flex items-center gap-3">
                    <span class="text-lg font-bold text-primary">${sPct}%</span>
                    <div class="flex-1 progress-bar h-1.5">
                        <div class="fill h-1.5" style="width: ${sPct}%; background: ${cor};"></div>
                    </div>
                </div>
                <div class="mt-1 flex flex-wrap gap-2 text-xs">
                    <span class="text-[#10b981]">${s.atendidos} atendidos</span>
                    ${s.parcial > 0 ? `<span class="text-[#f59e0b]">${s.parcial} parciais</span>` : ''}
                    ${s.naoAtendidos > 0 ? `<span class="text-[#ef4444]">${s.naoAtendidos} não atendidos</span>` : ''}
                    ${s.naoAvaliados > 0 ? `<span class="text-[#64748b]">${s.naoAvaliados} não avaliados</span>` : ''}
                </div>
            </div>
        `;
    });

    html += `
            </div>
        </div>
    `;

    main.innerHTML = html;
}

// ============================================================
// NAVEGAÇÃO EM NÍVEIS - REQUISITOS DA SEÇÃO (CORRIGIDO)
// ============================================================

function renderRequisitosSecao(capituloKey, secaoKey) {
    const main = document.getElementById('main-content');
    const todosRequisitos = Object.values(cruzamentoRequisitos);

    // CORREÇÃO: Filtrar APENAS os requisitos da seção específica
    const requisitos = todosRequisitos.filter(r => r.secao === secaoKey);

    // Se não encontrou nenhum requisito com essa seção exata, tenta buscar por subsecao
    let requisitosFiltrados = requisitos;
    if (requisitos.length === 0) {
        requisitosFiltrados = todosRequisitos.filter(r => r.subsecao === secaoKey || r.secao === capituloKey);
    }

    const nomeSecao = requisitosFiltrados.length > 0 ?
        (requisitosFiltrados[0].subsecao || requisitosFiltrados[0].secao || secaoKey) :
        secaoKey;
    const nomeCapitulo = capituloKey === 'GT' ? 'GT Preservação Digital' : `Capítulo ${capituloKey}`;

    let html = `
        <div class="space-y-4">
            <div>
                <div class="flex items-center gap-2 mb-2">
                    <button onclick="renderSecoes('${capituloKey}')" class="text-sm text-primary hover:underline flex items-center gap-1">
                        <span class="material-symbols-outlined text-sm">arrow_back</span>
                        Voltar para ${nomeCapitulo}
                    </button>
                </div>
                <h2 class="font-headline-md text-headline-md text-primary font-bold">${secaoKey} - ${nomeSecao}</h2>
                <p class="text-sm text-on-surface-variant">${requisitosFiltrados.length} requisitos</p>
            </div>
            
            <div class="filters-bar">
                <div class="search-box">
                    <span class="material-symbols-outlined icon">search</span>
                    <input type="text" id="searchInput" placeholder="Pesquisar requisito..." />
                </div>
                <select id="filtroStatus">
                    <option value="">Todos os Status</option>
                    <option value="Atendido">Atendido</option>
                    <option value="Parcialmente Atendido">Parcialmente Atendido</option>
                    <option value="Não Atendido">Não Atendido</option>
                    <option value="Não Avaliado">Não Avaliado</option>
                </select>
                <span id="contadorResultados" class="text-sm text-on-surface-variant ml-auto">${requisitosFiltrados.length} requisitos</span>
            </div>
            
            <div class="requisitos-table-container">
                <table class="requisitos-table">
                    <thead>
                        <tr>
                            <th style="width: 70px;">ID</th>
                            <th>Requisito</th>
                            <th style="width: 180px;">Status</th>
                            <th style="width: 100px;">Detalhes</th>
                        </tr>
                    </thead>
                    <tbody id="tabelaRequisitos">
                    </tbody>
                </table>
            </div>
        </div>
    `;

    main.innerHTML = html;

    const tbody = document.getElementById('tabelaRequisitos');
    requisitosFiltrados.forEach(req => {
        const tr = document.createElement('tr');
        tr.dataset.id = req.id;
        tr.dataset.status = req.status;

        const statusClass = getStatusClass(req.status);
        const statusLabel = getStatusLabel(req.status);

        tr.innerHTML = `
            <td><strong class="text-xs">${req.id}</strong></td>
            <td class="text-sm">${req.titulo}</td>
            <td><span class="status-badge ${statusClass}">${statusLabel}</span></td>
            <td>
                <button class="btn-evidencia" onclick="abrirModal('${req.id}')">
                    <span class="material-symbols-outlined">visibility</span>
                    Ver
                </button>
            </td>
        `;

        tbody.appendChild(tr);
    });

    const rows = tbody.querySelectorAll('tr');
    rows.forEach((row) => {
        row.addEventListener('click', function () {
            const id = this.dataset.id;
            if (id) abrirModal(id);
        });
        row.style.cursor = 'pointer';
    });

    document.getElementById('filtroStatus').addEventListener('change', function () {
        aplicarFiltrosSecao();
    });
    document.getElementById('searchInput').addEventListener('input', function () {
        aplicarFiltrosSecao();
    });
}

function aplicarFiltrosSecao() {
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

function getStatusClass(status) {
    const map = {
        'Atendido': 'atendido',
        'Parcialmente Atendido': 'parcial',
        'Não Atendido': 'nao-atendido',
        'Não Avaliado': 'nao-avaliado'
    };
    return map[status] || '';
}

function getStatusLabel(status) {
    const map = {
        'Atendido': 'Atendido',
        'Parcialmente Atendido': 'Parcialmente Atendido',
        'Não Atendido': 'Não Atendido',
        'Não Avaliado': 'Não Avaliado'
    };
    return map[status] || status;
}

// ============================================================
// MODAL DE EVIDÊNCIAS
// ============================================================

function abrirModal(id) {
    const req = cruzamentoRequisitos[id];
    if (!req) return;

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
    if (listaIds.length === 0) {
        listaIds = Object.keys(cruzamentoRequisitos);
    }
    indiceAtual = listaIds.indexOf(id);
    if (indiceAtual === -1) {
        indiceAtual = 0;
        listaIds = Object.keys(cruzamentoRequisitos);
    }

    const modal = document.getElementById('modalEvidencias');
    const corpo = document.getElementById('modalCorpo');

    document.getElementById('modalRequisitoId').textContent = `Requisito ${req.id}`;
    const statusClass = getStatusClass(req.status);
    const statusLabel = getStatusLabel(req.status);
    document.getElementById('modalStatus').className = `status-badge-modal ${statusClass}`;
    document.getElementById('modalStatus').textContent = statusLabel;

    let html = `
        <div class="flex items-center gap-2 text-xs text-on-surface-variant mb-3">
            <span class="bg-surface-container-low px-2 py-0.5 rounded">${req.capitulo}</span>
            <span>›</span>
            <span>${req.secao || req.capitulo}</span>
            ${req.subsecao ? `<span>›</span><span>${req.subsecao}</span>` : ''}
        </div>
        
        <h3 class="modal-title">${req.titulo}</h3>
        
        <div class="modal-section">
            <div class="modal-section-title">
                <span class="material-symbols-outlined">description</span>
                Descrição do Requisito
            </div>
            <div class="modal-section-content" style="white-space: pre-wrap;">${req.descricao}</div>
        </div>
        
        <div class="modal-section">
            <div class="modal-section-title">
                <span class="material-symbols-outlined">check_circle</span>
                Status de Atendimento
            </div>
            <div class="modal-section-content">
                <span class="status-badge ${statusClass}" style="font-size:0.8rem;padding:0.3rem 1rem;">${statusLabel}</span>
                <span class="ml-3 text-xs text-on-surface-variant">${req.grupo}</span>
            </div>
        </div>
    `;

    if (req.justificativa) {
        html += `
            <div class="modal-section">
                <div class="modal-section-title">
                    <span class="material-symbols-outlined">lightbulb</span>
                    Como o DocZ atende este requisito
                </div>
                <div class="modal-section-content">${req.justificativa}</div>
            </div>
        `;
    }

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

    html += `
        <div class="modal-meta-grid">
            <div>Grupo: <span>${req.grupo}</span></div>
            <div>Data de Validação: <span>${req.dataValidacao || '-'}</span></div>
            <div>Capítulo: <span>${req.capitulo}</span></div>
            <div>Seção: <span>${req.secao || '-'}</span></div>
        </div>
    `;

    corpo.innerHTML = html;

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
    const stats = getEstatisticas();

    main.innerHTML = `
        <div class="space-y-6">
            <div>
                <h1 class="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-2 tracking-tight">
                    Relatórios de Conformidade
                </h1>
                <p class="font-body-lg text-body-lg text-on-surface-variant max-w-4xl leading-relaxed">
                    Exporte relatórios detalhados sobre a conformidade do DocZ com o e-ARQ Brasil.
                    <br />
                    <span class="text-sm font-semibold text-primary">Conformidade Geral: ${stats.conformidadeGeral}% (${stats.atendidos}/${stats.total})</span>
                </p>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="report-card">
                    <div class="icon-wrapper primary">
                        <span class="material-symbols-outlined">assessment</span>
                    </div>
                    <h3 class="font-bold text-primary text-base">Relatório de Conformidade</h3>
                    <p class="text-sm text-on-surface-variant mt-1 mb-4">
                        Relatório completo com todos os ${stats.total} requisitos, status e justificativas.
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
                    <h3 class="font-bold text-primary text-base">Relatório de Pendências</h3>
                    <p class="text-sm text-on-surface-variant mt-1 mb-4">
                        Lista detalhada de todos os requisitos não atendidos ou parcialmente atendidos (${stats.parcial + stats.naoAtendidos}).
                    </p>
                    <button onclick="exportarPendencias()" class="btn-primary w-full justify-center">
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
                        Resumo executivo com estatísticas principais e indicadores por grupo.
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
                    <h3 class="font-bold text-primary text-base">Exportar Dados (CSV)</h3>
                    <p class="text-sm text-on-surface-variant mt-1 mb-4">
                        Exporte todos os dados em formato CSV para análise externa.
                    </p>
                    <button onclick="exportarCSV()" class="btn-primary w-full justify-center">
                        <span class="material-symbols-outlined text-base">table_rows</span>
                        Exportar CSV
                    </button>
                </div>
            </div>
            
            <div class="bg-white border border-outline-variant rounded-2xl p-6 shadow-sm">
                <h3 class="font-headline-md text-primary font-bold text-base mb-4">Resumo da Avaliação</h3>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                        <div class="text-2xl font-bold text-[#10b981]">${stats.atendidos}</div>
                        <div class="text-xs text-on-surface-variant">Atendidos</div>
                    </div>
                    <div>
                        <div class="text-2xl font-bold text-[#f59e0b]">${stats.parcial}</div>
                        <div class="text-xs text-on-surface-variant">Parciais</div>
                    </div>
                    <div>
                        <div class="text-2xl font-bold text-[#ef4444]">${stats.naoAtendidos}</div>
                        <div class="text-xs text-on-surface-variant">Não Atendidos</div>
                    </div>
                    <div>
                        <div class="text-2xl font-bold text-[#64748b]">${stats.naoAvaliados}</div>
                        <div class="text-xs text-on-surface-variant">Não Avaliados</div>
                    </div>
                </div>
                <div class="mt-4 text-center text-sm text-on-surface-variant">
                    ${stats.avaliados} requisitos avaliados · Conformidade: ${stats.conformidade}%
                </div>
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
    const resumoGrupos = getResumoPorGrupo();

    let relatorio = `========================================\n`;
    relatorio += `RELATÓRIO DE CONFORMIDADE E-ARQ BRASIL\n`;
    relatorio += `DocZ - Sistema de Gestão Arquivística\n`;
    relatorio += `========================================\n\n`;
    relatorio += `Data de Geração: ${new Date().toLocaleString('pt-BR')}\n`;
    relatorio += `Data da Avaliação: 21 de agosto de 2026\n\n`;

    relatorio += `=== ESTATÍSTICAS GERAIS ===\n`;
    relatorio += `Total de Requisitos: ${stats.total}\n`;
    relatorio += `Atendidos: ${stats.atendidos}\n`;
    relatorio += `Parcialmente Atendidos: ${stats.parcial}\n`;
    relatorio += `Não Atendidos: ${stats.naoAtendidos}\n`;
    relatorio += `Não Avaliados: ${stats.naoAvaliados}\n`;
    relatorio += `Conformidade Geral: ${stats.conformidadeGeral}%\n`;
    relatorio += `Conformidade (Avaliáveis): ${stats.conformidade}%\n\n`;

    relatorio += `=== RESUMO POR GRUPO ===\n`;
    for (const [grupo, dados] of Object.entries(resumoGrupos)) {
        const total = dados.total;
        const avaliados = total - dados.naoAvaliados;
        const peso = dados.atendidos + (dados.parcial * 0.5);
        const pct = avaliados > 0 ? Math.round((peso / avaliados) * 100) : 0;
        relatorio += `${grupo}: ${dados.atendidos}/${total} (${pct}%)\n`;
    }
    relatorio += `\n`;

    relatorio += `=== DETALHAMENTO POR REQUISITO ===\n`;
    relatorio += `------------------------------------------------------------\n`;
    relatorio += `ID       | Status                 | Grupo\n`;
    relatorio += `------------------------------------------------------------\n`;

    requisitos.sort((a, b) => a.id.localeCompare(b.id));
    requisitos.forEach(r => {
        const status = r.status.padEnd(20);
        relatorio += `${r.id.padEnd(8)} | ${status} | ${r.grupo}\n`;
    });

    downloadArquivo(relatorio, `conformidade_${new Date().toISOString().slice(0, 10)}.txt`, 'text/plain');
}

function exportarPendencias() {
    const pendentes = Object.values(cruzamentoRequisitos).filter(r =>
        r.status === 'Parcialmente Atendido' || r.status === 'Não Atendido'
    );

    let relatorio = `========================================\n`;
    relatorio += `RELATÓRIO DE PENDÊNCIAS - E-ARQ × DocZ\n`;
    relatorio += `========================================\n\n`;
    relatorio += `Data de Geração: ${new Date().toLocaleString('pt-BR')}\n`;
    relatorio += `Total de Pendências: ${pendentes.length}\n`;
    relatorio += `  - Parcialmente Atendidos: ${pendentes.filter(r => r.status === 'Parcialmente Atendido').length}\n`;
    relatorio += `  - Não Atendidos: ${pendentes.filter(r => r.status === 'Não Atendido').length}\n\n`;

    pendentes.forEach(r => {
        relatorio += `--- Requisito ${r.id}: ${r.titulo} ---\n`;
        relatorio += `Status: ${r.status}\n`;
        relatorio += `Justificativa: ${r.justificativa || 'N/A'}\n`;
        if (r.observacoes && r.observacoes.length > 0) {
            relatorio += `Observações:\n`;
            r.observacoes.forEach(o => relatorio += `  * ${o}\n`);
        }
        if (r.bugs && r.bugs.length > 0) {
            relatorio += `Bugs:\n`;
            r.bugs.forEach(b => relatorio += `  * ${b}\n`);
        }
        relatorio += `\n`;
    });

    downloadArquivo(relatorio, `pendencias_${new Date().toISOString().slice(0, 10)}.txt`, 'text/plain');
}

function exportarResumo() {
    const stats = getEstatisticas();
    const resumoGrupos = getResumoPorGrupo();
    const pendentes = Object.values(cruzamentoRequisitos).filter(r =>
        r.status === 'Parcialmente Atendido' || r.status === 'Não Atendido'
    );

    let relatorio = `========================================\n`;
    relatorio += `RESUMO EXECUTIVO - CONFORMIDADE E-ARQ\n`;
    relatorio += `DocZ - Avaliação Técnica\n`;
    relatorio += `========================================\n\n`;
    relatorio += `Data: ${new Date().toLocaleString('pt-BR')}\n`;
    relatorio += `Data da Avaliação: 21 de agosto de 2026\n\n`;

    relatorio += `=== INDICADORES PRINCIPAIS ===\n`;
    relatorio += `Conformidade Geral: ${stats.conformidadeGeral}%\n`;
    relatorio += `Conformidade (Avaliáveis): ${stats.conformidade}%\n`;
    relatorio += `Requisitos Atendidos: ${stats.atendidos}/${stats.total}\n`;
    relatorio += `Pendências: ${stats.naoAtendidos + stats.parcial}\n`;
    relatorio += `Não Avaliados: ${stats.naoAvaliados}\n\n`;

    relatorio += `=== RESULTADOS POR GRUPO ===\n`;
    for (const [grupo, dados] of Object.entries(resumoGrupos)) {
        const total = dados.total;
        const avaliados = total - dados.naoAvaliados;
        const peso = dados.atendidos + (dados.parcial * 0.5);
        const pct = avaliados > 0 ? Math.round((peso / avaliados) * 100) : 0;
        relatorio += `${grupo}: ${pct}% (${dados.atendidos}/${total})\n`;
    }
    relatorio += `\n`;

    if (pendentes.length > 0) {
        relatorio += `=== REQUISITOS COM PENDÊNCIAS (${pendentes.length}) ===\n`;
        pendentes.forEach(r => relatorio += `- ${r.id}: ${r.titulo} (${r.status})\n`);
        relatorio += `\n`;
    }

    downloadArquivo(relatorio, `resumo_executivo_${new Date().toISOString().slice(0, 10)}.txt`, 'text/plain');
}

function exportarCSV() {
    const requisitos = Object.values(cruzamentoRequisitos);
    const cabecalho = ['ID', 'Título', 'Status', 'Justificativa', 'Grupo', 'Capítulo', 'Seção', 'Responsável', 'Data Validação'];
    const linhas = requisitos.map(r => [
        r.id,
        `"${r.titulo}"`,
        r.status,
        `"${(r.justificativa || '').replace(/"/g, '""')}"`,
        r.grupo,
        r.capitulo || '',
        r.secao || '',
        r.responsavel || '',
        r.dataValidacao || ''
    ]);

    const csv = [cabecalho.join(','), ...linhas.map(l => l.join(','))].join('\n');
    downloadArquivo(csv, `conformidade_${new Date().toISOString().slice(0, 10)}.csv`, 'text/csv');
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