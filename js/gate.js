// Mineora — Password Gate
const GATE_PASSWORD = 'Mineora2026';

function initGate() {
  const overlay = document.getElementById('gate-overlay');
  const content = document.getElementById('page-content');
  if (!overlay || !content) return;

  const input = document.getElementById('gate-password');
  const btn   = document.getElementById('gate-submit');
  const err   = document.getElementById('gate-error');

  function unlock() {
    overlay.style.opacity = '0';
    overlay.style.transition = 'opacity 0.4s ease';
    setTimeout(() => { overlay.style.display = 'none'; }, 400);
    content.classList.add('unlocked');
  }

  function attempt() {
    const val = input.value.trim();
    if (val === GATE_PASSWORD) {
      input.classList.remove('error');
      err.classList.remove('visible');
      unlock();
    } else {
      input.classList.add('error');
      err.classList.add('visible');
      input.value = '';
      input.focus();
    }
  }

  btn.addEventListener('click', attempt);
  input.addEventListener('keydown', (e) => { if (e.key === 'Enter') attempt(); });
}

document.addEventListener('DOMContentLoaded', initGate);
