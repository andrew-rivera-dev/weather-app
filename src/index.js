import { requestWeatherData } from './api';

const searchForm = document.getElementById('search-form');
const searchBar = document.getElementById('search-bar');

searchForm.addEventListener('submit', function () {
  const searchText = searchBar.value;
  searchBar.value = '';

  const response = requestWeatherData(searchText);
  response.then(data => {
    console.log(data.main.temp);
  });
});
