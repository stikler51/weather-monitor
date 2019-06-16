export default function showModal(message) {
  // const monitor = document.querySelector('.monitor');
  // monitor.style.display = 'none';

  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = '<div class="modal__window">'
    + `<div class="message">${message}`
    + '<button class="modal__close">OK</button></div>'
    + '</div>';
  document.body.appendChild(modal);

  const closeModalButton = document.body.querySelector('.modal__close');
  closeModalButton.addEventListener('click', () => {
    // monitor.style.display = 'block';
    modal.remove();
  });
}
