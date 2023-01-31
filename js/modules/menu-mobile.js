export default function initMenuMobile() {

  
}
const menuMobile = document.querySelector('[data-menu="mobile"]');
const menuMobileLabel = document.querySelector('[data-menu="mobile"] label');
const menuMobileList = document.querySelector('[data-menu="list"]');

function toggleMenuMobile(event) {
  event.preventDefault();
  menuMobileList.classList.toggle('ativo');
  menuMobile.classList.toggle('ativo');
}

menuMobileLabel.addEventListener('click', toggleMenuMobile);
