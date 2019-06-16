/* eslint-disable no-use-before-define */
import State from '../state/state';
import showModal from '../modal/modal';

const apiKey = 'a37fd266dcf0de1f7a2a058e96a7cabe';

// const testResponse = {
//   coord: {
//     lon: 27.56,
//     lat: 53.9,
//   },
//   weather: [
//     {
//       id: 800,
//       main: 'Clear',
//       description: 'clearIcon sky',
//       icon: '01d',
//     }],
//   base: 'stations',
//   main: {
//     temp: 30,
//     pressure: 1018,
//     humidity: 51,
//     temp_min: 30,
//     temp_max: 30,
//   },
//   visibility: 10000,
//   wind: {
//     speed: 4,
//     deg: 220,
//     gust: 7,
//   },
//   cloudsIcon: {
//     all: 0,
//   },
//   dt: 1560504912,
//   sys: {
//     type: 1,
//     id: 8939,
//     message: 0.0059,
//     country: 'BY',
//     sunrise: 1560476278,
//     sunset: 1560537723,
//   },
//   timezone: 10800,
//   id: 625144,
//   name: 'Minsk',
//   cod: 200,
// };

const validationModalMessage = '<p>Looks like something went wrong.</p>'
  + '<p>You can search only Minsk, Warszaw, Berlin and Paris</p>'
  + '<p>To disable validation check "Disable validation" checkbox.</p>';

const validatedValues = ['minsk', 'warszaw', 'berlin', 'paris'];

async function getResponse(q) {
  const request = `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${apiKey}&units=metric`;
  const response = await fetch(request)
    .then(resp => resp.json());
  return response;
  // return testResponse;
}

async function search() {
  const disableValidation = document.body.querySelector('.disable-validation').checked;
  const q = document.body.querySelector('.search__field').value.toLowerCase();
  // console.log(q);
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
    // document.body.removeEventListener('keypress', searchOnEnter);
    showModal(validationModalMessage);
  }
}

function searchOnEnterOrCloseModal(e) {
  const modal = document.body.querySelector('.modal');
  if (e.key === 'Enter' && !modal) {
    search();
  } else if (e.key === 'Enter' && modal) {
    const monitor = document.querySelector('.monitor');
    monitor.style.display = 'block';
    modal.remove();
  }
}

export default function initSearch() {
  const searchButton = document.body.querySelector('.search__button');

  searchButton.addEventListener('click', search);
  document.body.addEventListener('keypress', searchOnEnterOrCloseModal);
}
