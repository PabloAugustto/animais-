const linkInterno = document.querySelectorAll('a[href^="#"]');

function handleLink(event) {
  event.preventDefault();
  linkInterno.forEach((link) => {
    link.classList.remove('ativo');
  });
  event.currentTarget.classList.add('ativo');
}


linkInterno.forEach((link) => {
  link.addEventListener('click', handleLink);
});


const elementos = document.querySelectorAll('body *');

function handleElemento(event) {
  // event.currentTarget.remove();
}

elementos.forEach((elemento) => {
  elemento.addEventListener('click', handleElemento);
});

function handleClickT(event) {
  console.log(event.key);
  if(event.key === 't') {
    document.documentElement.classList.toggle('textomaior');
  }
}

addEventListener('keydown', handleClickT);