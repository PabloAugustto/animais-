const menu = document.querySelectorAll('.menu a');

menu.forEach((item) => {
  console.log(item.classList.add('ativo'));
});

menu.forEach((item) => {
  console.log(item.classList.remove('ativo'))
});

menu[0].classList.add('ativo');

const altImg = document.querySelectorAll('img');

altImg.forEach((item) => {
  console.log(item.hasAttribute('alt'));
});

const linkExterno = document.querySelector('a[href^="http"]');

linkExterno.setAttribute('href', 'http://www.google.com.br')

console.log(linkExterno)