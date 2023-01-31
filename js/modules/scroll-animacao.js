export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[ data-anime="scroll"]');

  if(sections.length){
    const windowMetade = window.innerHeight * 0.5;

    function animaScroll() {
     sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isVisible = (sectionTop - windowMetade) < 0;
      if(isVisible){
        section.classList.add('ativo');
      } else if(section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
     });
    }

    window.addEventListener('scroll', animaScroll);
  }
}
