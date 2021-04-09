import { requestWeatherData } from './api';

const searchForm = document.getElementById('search-form');
const searchBar = document.getElementById('search-bar');

searchForm.addEventListener('submit', function () {
  const searchText = searchBar.value;
  searchBar.value = '';

  const response = requestWeatherData(searchText);
  response.then(data => {
    updateWeatherData(data);
    console.log(data);
  });
});

function updateWeatherData (data) {
  const cityName = document.getElementById('city-name');
  cityName.innerHTML = data.name;

  const mainTemp = document.getElementById('main-temp');
  mainTemp.innerHTML = data.main.temp;

  const weatherMain = document.getElementById('weather-main');
  weatherMain.innerHTML = data.weather[0].main;

  const weatherDesc = document.getElementById('weather-desc');
  weatherDesc.innerHTML = data.weather[0].description;

  const highTemp = document.getElementById('high-temp');
  highTemp.innerHTML = data.main.temp_max;

  const lowTemp = document.getElementById('low-temp');
  lowTemp.innerHTML = data.main.temp_min;

  const feelsLike = document.getElementById('feels-like');
  feelsLike.innerHTML = data.main.feels_like;

  const humidity = document.getElementById('humidity');
  humidity.innerHTML = data.main.humidity;
}
