const weatherParagraph = document.getElementById('weatherParagraph');
const imgDiv = document.getElementById('imgDiv');
let name = '';
let country = '';
let description = '';
let wind = '';
let icon = '';
let tempF = 0;
let feelF = 0;
let tempC = 0;
let feelC = 0;

async function fetchCity(city) {
  try {
    imgDiv.classList = 'weather';
    weatherParagraph.innerHTML = `<div class="spinner-border" role="status">
  <span class="sr-only">Loading...</span>
</div>`;
    const response = await fetch(city, { mode: 'cors' });
    const data = await response.json();
    weatherParagraph.innerHTML = `
  <div class="left">
    <h3 class="mt-4">${data.name}, ${data.sys.country}</h3 class="">
     <h1 class="pt-3 text-md-center">${Math.round(data.main.temp - 273.15)} <button type="button" class="change fs-1" id="change"> C</button></h1>
  </div>
  <div class="right">
     <h4 class="">${data.weather[0].main}<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" class="ms-1 pb-2" alt="weather icon"></h4>
     <h4 class="">Wind speed: ${data.wind.speed} m/h</h4>
     <h4 class="mt-4">Real feel: ${Math.round(data.main.feels_like - 273.15)} C</h4>
  </div>`;

    const { id } = data.weather[0];

    if (id < 600) {
      imgDiv.classList = 'rain';
    } else if (id < 700) {
      imgDiv.classList = 'snow';
    } else if (id < 800) {
      imgDiv.classList = 'fog';
    } else if (id === 800) {
      imgDiv.classList = 'sun';
    } else if (id > 800) {
      imgDiv.classList = 'clouds';
    }

    tempF = Math.round((data.main.temp - 273.15) * (9 / 5) + 32);
    feelF = Math.round((data.main.feels_like - 273.15) * (9 / 5) + 32);
    name = data.name;
    country = data.sys.country;
    description = data.weather[0].main;
    wind = data.wind.speed;
    icon = data.weather[0].icon;
    tempC = Math.round(data.main.temp - 273.15);
    feelC = Math.round(data.main.feels_like - 273.15);
  } catch (error) {
    console.error(error);
    alert('City not found');
  }
}

const displayF = () => {
  weatherParagraph.innerHTML = `
  <div class="left">
    <h3 class="mt-4">${name}, ${country}</h3 class="">
    <h1 class="pt-3 text-md-center">${tempF} <button type="button" class="change fs-1" id="change">  F</button></h1>
  </div>
  <div class="right">
    <h4 class="">${description}<img src="https://openweathermap.org/img/wn/${icon}.png" class="ms-1 pb-2" alt="weather icon"></h4>
    <h4 class="">Wind speed: ${wind} m/h</h4>
    <h4 class="mt-4">Real feel: ${feelF} F</h4>
  </div>`;
};

const displayC = () => {
  weatherParagraph.innerHTML = `
  <div class="left">
    <h3 class="mt-4">${name}, ${country}</h3 class="">
    <h1 class="pt-3 text-md-center">${tempC} <button type="button" class="change fs-1" id="change">  C</button></h1>
  </div>
  <div class="right">
    <h4 class="">${description}<img src="http://openweathermap.org/img/wn/${icon}.png" class="ms-1 pb-2" alt="weather icon"></h4>
    <h4 class="">Wind speed: ${wind} m/h</h4>
    <h4 class="mt-4">Real feel: ${feelC} C</h4>
  </div>`;
};

export { fetchCity, displayF, displayC };
