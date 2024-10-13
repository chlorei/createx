const burger = document.querySelector('#burger');
const nav = document.querySelector('#headerNavbar')
burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  nav.classList.toggle('active__nav');
  document.body.classList.toggle('active')
});


