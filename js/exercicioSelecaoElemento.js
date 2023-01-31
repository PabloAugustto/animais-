const allImg = document.querySelectorAll('img');

allImg.forEach(function(item) {
  console.log(item);
});


const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"');


imagensAnimais.forEach(function(item) {
  console.log(item);

});



const linkInterno = document.querySelectorAll('[href^="#"]');

linkInterno.forEach(function(item) {
  console.log(item);
});


const primeiroH2 = document.querySelector('.animais-descricao h2');

console.log(primeiroH2);


const lastP = document.querySelectorAll('p');

console.log(lastP[--lastP.length])
