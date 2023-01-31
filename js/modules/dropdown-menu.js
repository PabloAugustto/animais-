import outsideClick from './outsideClick.js'


export default function initDropDown()  {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');

  dropdownMenus.forEach((item) => {
    ['touchstart', 'click'].forEach(userEvent => {
      item.addEventListener(userEvent, toggleDropdown);
    })
  })

  function toggleDropdown(event) {
    event.preventDefault();
    this.classList.add('ativo');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('ativo');
    });
  };
} 






