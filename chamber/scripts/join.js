function openModal(id) {
  document.getElementById(id).classList.add('active');
  document.getElementById('modalBackdrop').classList.add('active');
}

function closeModal() {
  document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
  document.getElementById('modalBackdrop').classList.remove('active');
}