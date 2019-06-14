// const apiKey = 'a37fd266dcf0de1f7a2a058e96a7cabe';

const testResponse = {
  coord: {
    lon: 27.56,
    lat: 53.9,
  },
  weather: [
    {
      id: 800,
      main: 'Clear',
      description: 'clear sky',
      icon: '01d',
    }],
  base: 'stations',
  main: {
    temp: 30,
    pressure: 1018,
    humidity: 51,
    temp_min: 30,
    temp_max: 30,
  },
  visibility: 10000,
  wind: {
    speed: 4,
    deg: 220,
    gust: 7,
  },
  clouds: {
    all: 0,
  },
  dt: 1560504912,
  sys: {
    type: 1,
    id: 8939,
    message: 0.0059,
    country: 'BY',
    sunrise: 1560476278,
    sunset: 1560537723,
  },
  timezone: 10800,
  id: 625144,
  name: 'Minsk',
  cod: 200,
};

async function getResponse() {
  // const request = `https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${apiKey}&units=metric`;
  // const response = await fetch(request)
  //   .then(resp => resp.json());

  return testResponse;
}

async function search() {
  // const q = document.body.querySelector('.search__field').value;
  const response = await getResponse()
    .then(data => data);
  console.log(response);
}

export default function initSearch() {
  const searchButton = document.body.querySelector('.search__button');

  searchButton.addEventListener('click', search);
}
