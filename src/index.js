import { requestWeatherData } from './api';
import { kelvinToFahr, kelvinToCelsius } from './convert';

let currentCityData = null;
let currentTempSetting = 'C';
const converters = {
  C: kelvinToCelsius,
  F: kelvinToFahr
};

const searchForm = document.getElementById('search-form');
const searchBar = document.getElementById('search-bar');

searchForm.addEventListener('submit', function () {
  const searchText = searchBar.value;
  searchBar.value = '';

  const response = requestWeatherData(searchText);
  response.then(data => {
    currentCityData = data;
    updateWeatherData(data, converters[currentTempSetting]);
  });
});

const tempToggle = document.getElementById('temp-toggle');
tempToggle.addEventListener('click', function () {
  currentTempSetting = currentTempSetting === 'C' ? 'F' : 'C';
  tempToggle.innerHTML = currentTempSetting;
  updateWeatherData(currentCityData, converters[currentTempSetting]);
});

function updateWeatherData (data, convert) {
  const cityName = document.getElementById('city-name');
  cityName.innerHTML = `${data.name}, ${data.sys.country}`;

  const mainTemp = document.getElementById('main-temp');
  mainTemp.innerHTML = `${Math.round(convert(data.main.temp))}°${currentTempSetting}`;

  const weatherMain = document.getElementById('weather-main');
  weatherMain.innerHTML = data.weather[0].main;

  const weatherDesc = document.getElementById('weather-desc');
  weatherDesc.innerHTML = data.weather[0].description;

  const highTemp = document.getElementById('high-temp');
  highTemp.innerHTML = `High: ${Math.round(convert(data.main.temp_max))}°${currentTempSetting}`;

  const lowTemp = document.getElementById('low-temp');
  lowTemp.innerHTML = `Low: ${Math.round(convert(data.main.temp_min))}°${currentTempSetting}`;

  const feelsLike = document.getElementById('feels-like');
  feelsLike.innerHTML = `Feel: ${Math.round(convert(data.main.feels_like))}°${currentTempSetting}`;

  const humidity = document.getElementById('humidity');
  humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
}
