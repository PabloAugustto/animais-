export default function initAnimaNumeros() {
  function animaNumeros(){
    const numeros = document.querySelectorAll('.numeros-grid span');
    numeros.forEach((numero) => {
      const total = +numero.innerText;
      const incremento = Math.floor(total / 100);
      let start = 0;
      const timer = setInterval(() => {
        start = start + incremento;
        numero.innerText = start;
        if(start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      }, 25 * Math.random())
    })
  }
  function handleMutation(mutation) {
    if (mutation[0].target.classList.contains('ativo')) {
      observador.disconnect();
      animaNumeros();
    }
  }
  const observerTarget = document.querySelector('.numeros');
  const observador = new MutationObserver(handleMutation);
  observador.observe(observerTarget, {attributes: true});
}

