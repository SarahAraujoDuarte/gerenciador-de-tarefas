let currentTaskStatus = '';
let workspaceData = window.workspaceData || { id: null, name: '', description: '', tasks: [] };

// Função para abrir modal de nova tarefa
function openAddTaskModal(status) {
    currentTaskStatus = status;
    const modal = document.getElementById('addTaskModal');
    const statusInput = document.getElementById('taskStatus');
    
    statusInput.value = status;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    
    // Focar no primeiro input
    setTimeout(() => {
        document.getElementById('taskTitle').focus();
    }, 300);
}

// Função para fechar modal de nova tarefa
function closeAddTaskModal() {
    const modal = document.getElementById('addTaskModal');
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
    
    // Limpar formulário
    document.getElementById('addTaskForm').reset();
    currentTaskStatus = '';
}

// Fechar modal ao clicar fora dele
document.getElementById('addTaskModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeAddTaskModal();
    }
});

// Fechar modal com ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeAddTaskModal();
    }
});

// Manipular envio do formulário de nova tarefa
document.getElementById('addTaskForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    if (!workspaceData.id) {
        alert('Erro: ID do workspace não encontrado');
        return;
    }
    
    const formData = new FormData(this);
    const taskData = {
        title: formData.get('title'),
        description: formData.get('description'),
        priority: formData.get('priority'),
        status: formData.get('status'),
        workspaceId: workspaceData.id
    };
    
    // Fazer requisição para criar a tarefa
    fetch(`/workspace/${workspaceData.id}/task`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            console.log('Tarefa criada:', data.task);
            createTaskCard(data.task);
            closeAddTaskModal();
        } else {
            alert('Erro ao criar tarefa: ' + (data.error || 'Erro desconhecido'));
        }
    })
    .catch(error => {
        console.error('Erro:', error);
        alert('Erro ao criar tarefa');
    });
});

// Função para criar card de tarefa
function createTaskCard(taskData) {
    const taskCard = document.createElement('div');
    taskCard.className = 'task-card';
    taskCard.innerHTML = `
        <div class="task-title">${escapeHtml(taskData.title)}</div>
        ${taskData.description ? `<div class="task-description">${escapeHtml(taskData.description)}</div>` : ''}
        <div class="task-meta">
            <span class="task-priority ${taskData.priority}">${getPriorityText(taskData.priority)}</span>
            <span class="task-date">${new Date().toLocaleDateString('pt-BR')}</span>
        </div>
    `;
    
    // Adicionar à coluna correta
    const container = document.getElementById(`${taskData.status}-tasks`);
    if (container) {
        container.appendChild(taskCard);
    } else {
        console.error('Container não encontrado para status:', taskData.status);
    }
    
    // Adicionar evento de clique para editar tarefa
    taskCard.addEventListener('click', function() {
        console.log('Editando tarefa:', taskData.title);
        // Aqui você implementaria a edição da tarefa
    });
}

// Função auxiliar para escapar HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Função auxiliar para texto da prioridade
function getPriorityText(priority) {
    const priorities = {
        'low': 'Baixa',
        'medium': 'Média',
        'high': 'Alta'
    };
    return priorities[priority] || 'Média';
}

// Função para carregar tarefas existentes
function loadExistingTasks() {
    if (workspaceData.tasks && workspaceData.tasks.length > 0) {
        workspaceData.tasks.forEach(task => {
            createTaskCard(task);
        });
    }
}

// Inicialização da página
document.addEventListener('DOMContentLoaded', function() {
    console.log('Workspace carregado');
    console.log('Dados do workspace:', workspaceData);
    
    // Carregar tarefas existentes
    loadExistingTasks();
});