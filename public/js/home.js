// public/js/home.js

async function carregarWorkspaces() {
  try {
    const resposta = await fetch('/api/workspaces');
    const workspaces = await resposta.json();

    const lista = document.getElementById('workspace-list');
    lista.innerHTML = '';

    workspaces.forEach(w => {
      const item = document.createElement('li');
      item.innerHTML = `
        <strong>${w.nome}</strong>: ${w.descricao}
        <button onclick="deletarWorkspace(${w.id})">🗑️</button>
      `;
      lista.appendChild(item);
    });
  } catch (error) {
    console.error('Erro ao carregar os workspaces:', error);
  }
}

async function deletarWorkspace(id) {
  if (!confirm('Deseja mesmo deletar este workspace?')) return;

  try {
    const resposta = await fetch(`/api/workspaces/${id}`, { method: 'DELETE' });
    if (resposta.status === 204) {
      carregarWorkspaces();
    }
  } catch (error) {
    console.error('Erro ao deletar:', error);
  }
}

document.getElementById('form-workspace')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const nome = document.getElementById('nome').value;
  const descricao = document.getElementById('descricao').value;

  try {
    const resposta = await fetch('/api/workspaces', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, descricao })
    });

    if (resposta.ok) {
      document.getElementById('form-workspace').reset();
      carregarWorkspaces();
    }
  } catch (error) {
    console.error('Erro ao criar workspace:', error);
  }
});

window.onload = carregarWorkspaces;
