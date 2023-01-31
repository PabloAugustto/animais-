import Countdown from "./module/countdownl.js"

const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

const diasParaONatal = new Countdown('19 June 2021 23:59:59 GMT-0300');



function changeDays() {
  days.innerText = diasParaONatal.Total.Days + " Dias" + ", ";
  hours.innerText = diasParaONatal.Total.Hour + " Horas" + ", ";
  minutes.innerText = diasParaONatal.Total.Minutes + " Minutos" + ", ";
  seconds.innerText = diasParaONatal.Total.Seconds + " Segundos";
}
setInterval(() => {
  changeDays();
}, 1000);



