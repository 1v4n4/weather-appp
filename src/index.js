import { fetchCity, displayF, displayC } from './modules/weather';

document.addEventListener('DOMContentLoaded', fetchCity('http://api.openweathermap.org/data/2.5/weather?q=Ulcinj&APPID=ea056517cfd579edd873aeaf2255944e'));

const form = document.querySelector('form');
let countTemp = false;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = form[0].value;

  const city = `http://api.openweathermap.org/data/2.5/weather?q=${input}&APPID=ea056517cfd579edd873aeaf2255944e`;

  fetchCity(city);
  countTemp = true;
});
const change = document.getElementById('weatherParagraph');

change.addEventListener('click', (e) => {
  e.preventDefault();
  const clicked = e.target;
  if (clicked.classList.contains('change')) {
    if (countTemp) {
      displayF();
      countTemp = false;
    } else {
      displayC();
      countTemp = true;
    }
  }
});
