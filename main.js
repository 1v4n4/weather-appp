(()=>{"use strict";const e=document.getElementById("weatherParagraph");let t="",n="",a="",s="",h="",c=0,i=0,l=0,r=0;async function o(o){const d=await fetch(o,{mode:"cors"}),m=await d.json();e.innerHTML=`<h3 class="">${m.name}, ${m.sys.country}</h3 class="">\n     <h1 class="">${Math.round(m.main.temp-273.15)} <button type="button" class="change btn btn-light fs-1 ms-2" id="change"> C</button></h1>\n     <h4 class="">${m.weather[0].main}<img src="http://openweathermap.org/img/wn/${m.weather[0].icon}@2x.png" alt="weather icon"></h4>\n     <h4 class="">Wind speed: ${m.wind.speed} m/h</h4>\n     <h4 class="">Real feel: ${Math.round(m.main.feels_like-273.15)} C</h4>`,c=Math.round(1.8*(m.main.temp-273.15)+32),i=Math.round(1.8*(m.main.feels_like-273.15)+32),t=m.name,n=m.sys.country,a=m.weather[0].main,s=m.wind.speed,h=m.weather[0].icon,l=Math.round(m.main.temp-273.15),r=Math.round(m.main.feels_like-273.15)}document.addEventListener("DOMContentLoaded",o("http://api.openweathermap.org/data/2.5/weather?q=Ulcinj&APPID=ea056517cfd579edd873aeaf2255944e"));const d=document.querySelector("form");let m=!1;d.addEventListener("submit",(e=>{e.preventDefault(),o(`http://api.openweathermap.org/data/2.5/weather?q=${d[0].value}&APPID=ea056517cfd579edd873aeaf2255944e`),m=!0})),document.getElementById("weatherParagraph").addEventListener("click",(o=>{o.preventDefault(),o.target.classList.contains("change")&&(m?(e.innerHTML=`<h3 class="">${t}, ${n}</h3 class="">\n  <h1 class="">${c} <button type="button" class="change btn btn-light fs-1 ms-2" id="change">  F</button></h1>\n  <h4 class="">${a}<img src="http://openweathermap.org/img/wn/${h}@2x.png" alt="weather icon"></h4>\n  <h4 class="">Wind speed: ${s} m/h</h4>\n  <h4 class="">Real feel: ${i} F</h4>`,m=!1):(e.innerHTML=`<h3 class="">${t}, ${n}</h3 class="">\n  <h1 class="">${l} <button type="button" class="change btn btn-light fs-1 ms-2" id="change">  F</button></h1>\n  <h4 class="">${a}<img src="http://openweathermap.org/img/wn/${h}@2x.png" alt="weather icon"></h4>\n  <h4 class="">Wind speed: ${s} m/h</h4>\n  <h4 class="">Real feel: ${r} F</h4>`,m=!0))}))})();