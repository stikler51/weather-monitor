/* eslint-disable no-use-before-define,null */
import State from '../state/state';
import showModal from '../modal/modal';

const apiKey = 'a37fd266dcf0de1f7a2a058e96a7cabe';

const validationModalMessage = '<p>Looks like something went wrong.</p>'
  + '<p>You can search only Minsk, Warsaw, Berlin and Paris</p>'
  + '<p>To disable validation check "Disable validation" checkbox.</p>';

const validatedValues = ['minsk', 'warsaw', 'berlin', 'paris'];

async function getResponse(q) {
  const request = `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${apiKey}&units=metric`;

  const response = await fetch(request)
    .then(resp => resp.json());

  return response;
}

async function search() {
  const disableValidation = document.body.querySelector('.disable-validation').checked;
  const q = document.body.querySelector('.search__field').value.toLowerCase();

  if (disableValidation) {
    const response = await getResponse(q)
      .then(data => data);
    if (response.message) {
      showModal(`<p>${response.message}</p>`);
    } else {
      const state = new State(response);
      state.updateState();
    }
  } else if (validatedValues.includes(q)) {
    const response = await getResponse(q)
      .then(data => data);
    const state = new State(response);
    state.updateState();
  } else {
    showModal(validationModalMessage);
  }
}

function searchOnEnterOrCloseModal(e) {
  const modal = document.body.querySelector('.modal');
  if (e.key === 'Enter' && !modal) {
    search();
  } else if (e.key === 'Enter' && modal) {
    modal.remove();
  }
}

export default function initSearch() {
  const searchButton = document.body.querySelector('.search__button');

  searchButton.addEventListener('click', search);
  document.body.addEventListener('keypress', searchOnEnterOrCloseModal);
}
