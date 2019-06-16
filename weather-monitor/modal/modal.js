export default function showModal() {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = '<div class="modal__window">'
    + '<div class="message">'
    + '<p>Looks like something went wrong.</p>'
    + '<p>You can search only Minsk, Warszaw, Berlin and Paris</p>'
    + '<p>To disable validation check "Disable validation" checkbox.</p>'
    + '<button class="modal__close">OK</button></div>'
    + '</div>';
  document.body.appendChild(modal);
  const closeModalButton = document.body.querySelector('.modal__close');
  closeModalButton.addEventListener('click', () => {
    modal.remove();
  });
}
