import { requestWeatherData } from './api';

// let currentCityData = null;

const searchForm = document.getElementById('search-form');
const searchBar = document.getElementById('search-bar');

searchForm.addEventListener('submit', function () {
  const searchText = searchBar.value;
  searchBar.value = '';

  const response = requestWeatherData(searchText);
  response.then(data => {
    updateWeatherData(data);
  });
});

function updateWeatherData (data) {
  const cityName = document.getElementById('city-name');
  cityName.innerHTML = `${data.name}, ${data.sys.country}`;

  const mainTemp = document.getElementById('main-temp');
  mainTemp.innerHTML = `${Math.round(data.main.temp)}°`;

  const weatherMain = document.getElementById('weather-main');
  weatherMain.innerHTML = data.weather[0].main;

  const weatherDesc = document.getElementById('weather-desc');
  weatherDesc.innerHTML = data.weather[0].description;

  const highTemp = document.getElementById('high-temp');
  highTemp.innerHTML = `High: ${Math.round(data.main.temp_max)}°`;

  const lowTemp = document.getElementById('low-temp');
  lowTemp.innerHTML = `Low: ${Math.round(data.main.temp_min)}°`;

  const feelsLike = document.getElementById('feels-like');
  feelsLike.innerHTML = `Feel: ${Math.round(data.main.feels_like)}°`;

  const humidity = document.getElementById('humidity');
  humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
}
