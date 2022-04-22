const btnBurguer = document.querySelector('.btn-burguer');
const navbar = document.querySelector('.navbar');

btnBurguer.addEventListener('click', () => {
  navbar.classList.toggle('is-active');
})