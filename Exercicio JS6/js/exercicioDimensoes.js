const img = document.querySelector('img');
const imgTop = img.offsetTop;

console.log(imgTop);


function somaImagens(){
const imagens = document.querySelectorAll('img');
let soma = 0;
imagens.forEach((imagem) => {
  soma += imagem.offsetWidth;

});
  console.log(soma);
}

window.onload = function() {
  somaImagens()
}


const links = document.querySelectorAll('a');

links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if(linkWidth >= 48 && linkHeight >= 48) {
    console.log('Possui boa Acessibilidade')
  } else {
    console.log('Não possui boa Acessibilidade')
  }
});

console.log(links);



const small = window.matchMedia('(max-width: 720px)').matches;

if(small) {
  const menuMobile = document.querySelector('.menu');
  menuMobile.classList.add('menu-mobile');
}