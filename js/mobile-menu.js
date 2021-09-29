(() => {
  const refs = {
    openMenuBtn: document.querySelector('.header-button'),
    closeMenuBtn: document.querySelector('.button-close'),
    menu: document.querySelector('.mobile-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();