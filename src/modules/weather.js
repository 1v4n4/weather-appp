const weatherParagraph = document.getElementById('weatherParagraph');

// async function fetchCity {
//   const response = await fetch('city');
//   const data = await response.json();  return data;
// }
// async function getCats() {
//   const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=YOUR_KEY_HERE&s=cats', {mode: 'cors'});
//   response.json().then(function(response) {
//     img.src = response.data.images.original.url;
//   });
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
  const response = await fetch(city, { mode: 'cors' });
  const data = await response.json();
  console.log('data', data);
  weatherParagraph.innerHTML = `<h3 class="">${data.name}, ${data.sys.country}</h3 class="">
     <h1 class="">${Math.round(data.main.temp - 273.15)} <button type="button" class="change btn btn-light fs-1 ms-2" id="change"> C</button></h1>
     <h4 class="">${data.weather[0].main}<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather icon"></h4>
     <h4 class="">Wind speed: ${data.wind.speed} m/h</h4>
     <h4 class="">Real feel: ${Math.round(data.main.feels_like - 273.15)} C</h4>`;
  tempF = Math.round((data.main.temp - 273.15) * (9 / 5) + 32);
  feelF = Math.round((data.main.feels_like - 273.15) * (9 / 5) + 32);
  name = data.name;
  country = data.sys.country;
  description = data.weather[0].main;
  wind = data.wind.speed;
  icon = data.weather[0].icon;
  tempC = Math.round(data.main.temp - 273.15);
  feelC = Math.round(data.main.feels_like - 273.15);
}
// const fetchCity = (city) => {
//   fetch(city, { mode: 'cors' })
//   .then((response) => response.json())
//   .then((data) => {
//     name = data.name;
//      country = data.sys.country;
//      description = data.weather[0].main;
//     celsius = Math.round(data.main.temp-273.15);
//     feel = Math.round(data.main.feels_like-273.15);
//     wind = data.wind.speed;
//     icon = data.weather[0].icon;
//       })
//   .catch((err) =>  console.error(err))
// };

// const displayWeatherC = () => {
//   weatherParagraph.innerHTML = `<h3 class="">${name}, ${country}</h3 class="">
//   <h1 class="">${celsius} <button type="button" class="change btn btn-light fs-1 ms-2" id="change"> C</button></h1>
//   <h4 class="">${description}<img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="weather icon"></h4>
//   <h4 class="">Wind speed: ${wind} m/h</h4>
//   <h4 class="">Real feel: ${feel} C</h4>`
// }

const displayF = () => {
  weatherParagraph.innerHTML = `<h3 class="">${name}, ${country}</h3 class="">
  <h1 class="">${tempF} <button type="button" class="change btn btn-light fs-1 ms-2" id="change">  F</button></h1>
  <h4 class="">${description}<img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="weather icon"></h4>
  <h4 class="">Wind speed: ${wind} m/h</h4>
  <h4 class="">Real feel: ${feelF} F</h4>`;
};

const displayC = () => {
  weatherParagraph.innerHTML = `<h3 class="">${name}, ${country}</h3 class="">
  <h1 class="">${tempC} <button type="button" class="change btn btn-light fs-1 ms-2" id="change">  F</button></h1>
  <h4 class="">${description}<img src="http://openweathermap.org/img/wn/${icon}@2x.png" alt="weather icon"></h4>
  <h4 class="">Wind speed: ${wind} m/h</h4>
  <h4 class="">Real feel: ${feelC} F</h4>`;
};

export { fetchCity, displayF, displayC };
