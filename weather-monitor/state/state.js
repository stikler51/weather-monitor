import thunderStormIcon from '../assets/icons/animated/thunder.svg';
import drizzleIcon from '../assets/icons/animated/rainy-7.svg';
import rainyIcon from '../assets/icons/animated/rainy-6.svg';
import snowIcon from '../assets/icons/animated/snowy-3.svg';
import clearIcon from '../assets/icons/animated/day.svg';
import cloudsIcon from '../assets/icons/animated/cloudy-day-3.svg';

let isFirstSearch = true;

function changeMonitor() {
  const monitor = document.body.querySelector('.monitor');
  monitor.classList.remove('fadeOutLeft');
  monitor.classList.remove('faster');
  monitor.classList.add('fadeInRight');
}

function updateIcon(status) {
  const container = document.body.querySelector('.monitor__left');
  const oldIcon = document.body.querySelector('.weather-icon');
  if (oldIcon) {
    oldIcon.remove();
  }
  const icon = document.createElement('img');
  icon.classList.add('weather-icon');
  switch (status) {
    case 'Thunderstorm':
      icon.src = thunderStormIcon;
      break;
    case 'Drizzle':
      icon.src = drizzleIcon;
      break;
    case 'Rain':
      icon.src = rainyIcon;
      break;
    case 'Snow':
      icon.src = snowIcon;
      break;
    case 'Clear':
      icon.src = clearIcon;
      break;
    case 'Clouds':
      icon.src = cloudsIcon;
      break;
    default:
      break;
  }
  container.appendChild(icon);
// <img class="weather-icon" src="weather-monitor/assets/icons/animated/cloudy-day-1.svg">
}

export default class State {
  constructor(response) {
    this.city = response.name;
    this.temperature = response.main.temp;
    this.humidity = response.main.humidity;
    this.wind = response.wind.speed;
    this.weatherStatus = response.weather[0].main;
  }

  updateState() {
    const monitor = document.body.querySelector('.monitor');

    if (!isFirstSearch) {
      monitor.classList.remove('fadeInRight');
      monitor.classList.add('fadeOutLeft', 'faster');
      monitor.addEventListener('animationend', changeMonitor);
    }

    const city = document.body.querySelector('.city');
    city.innerHTML = this.city;

    const temperature = document.body.querySelector('.temperature');
    temperature.innerHTML = Math.ceil(this.temperature);

    const wind = document.body.querySelector('.wind-value');
    wind.innerHTML = `${this.wind} m/s`;

    const humidity = document.body.querySelector('.humidity-value');
    humidity.innerHTML = `${this.humidity} %`;

    const weatherStatus = document.body.querySelector('.weather-definition');
    weatherStatus.innerHTML = this.weatherStatus;
    updateIcon(this.weatherStatus);

    if (isFirstSearch) {
      monitor.classList.add('animated', 'fadeInRight');
      isFirstSearch = false;
    }
  }
}
