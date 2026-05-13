window.MindFlow = window.MindFlow || {};

MindFlow.openModal = (id) => {
  const el = document.getElementById(id);
  if (el) el.classList.add('is-open');
};

MindFlow.closeModal = (id) => {
  const el = document.getElementById(id);
  if (el) el.classList.remove('is-open');
};

MindFlow.switchTab = (btn, id) => {
  document.querySelectorAll('.modal-tab').forEach((x) => x.classList.remove('active'));
  document.querySelectorAll('.modal-tab-content').forEach((x) => x.classList.remove('active'));
  btn.classList.add('active');
  document.getElementById(id)?.classList.add('active');
};

MindFlow.acessarVisitante = () => {
  window.location.href = 'dashboard.html?modo=visitante';
};

MindFlow.toggleTheme = () => {
  const html = document.documentElement;
  html.setAttribute('data-theme', html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
};

MindFlow.togglePassword = (id) => {
  const input = document.getElementById(id);
  if (!input) return;
  input.type = input.type === 'password' ? 'text' : 'password';
};

MindFlow.handleLogin = (e) => {
  e.preventDefault();
  alert('Login em desenvolvimento.');
};

window.addEventListener('DOMContentLoaded', () => {
  const timeEl = document.getElementById('previewTime');

  const tick = () => {
    if (!timeEl) return;
    timeEl.textContent = new Date().toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  tick();
  setInterval(tick, 30000);

  if (window.lucide) lucide.createIcons();
});