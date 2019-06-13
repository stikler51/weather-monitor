/* eslint-disable no-plusplus */
const apiKey = 'a37fd266dcf0de1f7a2a058e96a7cabe';

async function getResponse(q) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${q}&appid=${apiKey}`)
    .then(resp => resp.json())
    .catch(() => {
      alert('NONONO');
    });
  return response;
}

async function search() {
  const q = document.body.querySelector('.search-field').value;
  const response = await getResponse(q)
    .then(data => data);
  console.log(response);
}

export default function initSearch() {
  const searchButton = document.body.querySelector('.search-button');

  searchButton.addEventListener('click', search);
}