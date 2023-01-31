function mudarClass() {
  document.body.classList.toggle('ativo');
}
setInterval(mudarClass, 10);


const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const tempo = document.querySelector('.tempo');

iniciar.addEventListener('click', iniciarTempo);
pausar.addEventListener('click', pausarTempo);
pausar.addEventListener('dblclick', resetarTempo);

let i = 0;
let timer = 0;

function iniciarTempo() {
  timer = setInterval(() => {
    tempo.innerHTML = i++;
  }, 100);
  iniciar.setAttribute('disabled', '');
}

function pausarTempo() {
  clearInterval(timer);
  iniciar.removeAttribute('disabled');
}

function resetarTempo() {
  i = 0;
  tempo.innerHTML = 0;
}