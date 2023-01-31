const inputCep = document.querySelector("#cep");
const btnCep = document.querySelector('#btn-Cep');
const resultadoCep = document.querySelector('.resultado-cep');

btnCep.addEventListener('click', handleClick);

function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  buscaCep(cep);
}

function buscaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
  .then(response => response.text())
  .then(body => {
    resultadoCep.innerText = body;
  })
}

const btcDisplay = document.querySelector('.btc')


function fetchBtc() {
  fetch('https://blockchain.info/ticker')
  .then(response => response.json())
  .then(btcJson => {
    btcDisplay.innerText = ('R$ ' + btcJson.BRL.buy).replace('.', ',');
  })
}

// setInterval(fetchBtc, 100);


fetchBtc();

const btnProxima = document.querySelector('.proxima');
const paragrafoPiada = document.querySelector('.piada');

btnProxima.addEventListener('click', puxarPiada);

function puxarPiada() {
  fetch('https://api.chucknorris.io/jokes/random')
  .then(r => r.json())
  .then(piada => {
    paragrafoPiada.innerText = piada.value;
  })
}
puxarPiada();



const links = document.querySelectorAll('a');

function handleClick(event) {
  event.preventDefault();
  fetchPage(event.target.href);
  window.history.pushState(null, null, event.target.href);
}

async function fetchPage(url) {
  document.querySelector('.content').innerHTML = 'carregando...';
  const pageResponse = await fetch(url);
  const pageText = await pageResponse.text();
  // console.log(pageText);
  replaceContent(pageText)
}

function replaceContent(newText) {
  const newHtml = document.createElement('div');
  const oldContent = document.querySelector('.content');
  newHtml.innerHTML = newText;
  const newContent = newHtml.querySelector('.content');

  oldContent.innerHTML = newContent.innerHTML;
  document.title = newHtml.querySelector('title').innerText

  console.log(newHtml)
}

window.addEventListener('popstate', () => {
  fetchPage(window.location.href)
})


links.forEach(link => {
  link.addEventListener('click', handleClick);
})


