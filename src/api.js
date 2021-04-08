const API_KEY = 'd644270adbe9c25e44edbe1e955d3bd4';

export async function requestWeatherData (city) {
  try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units="metric"&appid=${API_KEY}`, { mode: 'cors' });
    return response.json();
  } catch (error) {
    console.log('Bad search');
  }
}
