import thunderStormIcon from '../assets/icons/animated/thunder.svg';
import drizzleIcon from '../assets/icons/animated/rainy-7.svg';
import rainyIcon from '../assets/icons/animated/rainy-6.svg';
import snowIcon from '../assets/icons/animated/snowy-3.svg';
import clearIcon from '../assets/icons/animated/day.svg';
import cloudsIcon from '../assets/icons/animated/cloudy-day-3.svg';
import thunder from '../assets/pictures/weather-states/thunder.jpg';
import drizzle from '../assets/pictures/weather-states/drizzle.jpg';
import rain from '../assets/pictures/weather-states/rain.jpg';
import snow from '../assets/pictures/weather-states/snow.jpg';
import clear from '../assets/pictures/weather-states/clear.jpg';
import clouds from '../assets/pictures/weather-states/clouds.jpg';
import defaultPicture from '../assets/pictures/weather-states/default.jpg';
import cold from '../assets/pictures/bg/0.jpg';
import warmer from '../assets/pictures/bg/10.jpg';
import warm from '../assets/pictures/bg/20.jpg';
import hot from '../assets/pictures/bg/30.jpg';
import hell from '../assets/pictures/bg/40.jpg';

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
  const leftMonitor = document.body.querySelector('.monitor__left');
  if (oldIcon) {
    oldIcon.remove();
  }
  const icon = document.createElement('img');
  icon.classList.add('weather-icon');
  switch (status) {
    case 'Thunderstorm':
      icon.src = thunderStormIcon;
      leftMonitor.style.background = `url(${thunder})`;
      break;
    case 'Drizzle':
      icon.src = drizzleIcon;
      leftMonitor.style.background = `url(${drizzle})`;
      break;
    case 'Rain':
      icon.src = rainyIcon;
      leftMonitor.style.background = `url(${rain})`;
      break;
    case 'Snow':
      icon.src = snowIcon;
      leftMonitor.style.background = `url(${snow})`;
      break;
    case 'Clear':
      icon.src = clearIcon;
      leftMonitor.style.background = `url(${clear})`;
      break;
    case 'Clouds':
      icon.src = cloudsIcon;
      leftMonitor.style.background = `url(${clouds})`;
      break;
    default:
      leftMonitor.style.background = `url(${defaultPicture})`;
      break;
  }
  leftMonitor.style.backgroundSize = 'cover';
  container.appendChild(icon);
}

function changeBg(temp) {
  if (temp < 0) {
    document.body.style.background = `url(${cold})`;
  } else if (temp >= 0 && temp < 10) {
    document.body.style.background = `url(${warmer})`;
  } else if (temp >= 10 && temp < 20) {
    document.body.style.background = `url(${warm})`;
  } else if (temp >= 20 && temp < 30) {
    document.body.style.background = `url(${hot})`;
  } else {
    document.body.style.background = `url(${hell})`;
  }
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundAttachment = 'fixed';
  document.body.style.backgroundRepeat = 'no-repeat';
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
    changeBg(this.temperature);

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
