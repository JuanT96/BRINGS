let lastScrollTop = 0;
const navbar = document.getElementById('navbar');
const loginIcon = document.getElementById('loginIcon');
const logoEst = document.getElementById('logoEst');

window.addEventListener('scroll', () => {
  let scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scroll hacia abajo: ocultar
    navbar.style.top = '-100px';
    loginIcon.style.top = '-100px';
    if (logoEst) logoEst.style.top = '-100px';
  } else {
    // Scroll hacia arriba: mostrar
    navbar.style.top = '20px';
    loginIcon.style.top = '20px';
    if (logoEst) logoEst.style.top = '20px';
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});