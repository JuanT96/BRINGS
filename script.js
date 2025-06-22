let prevScrollPos = window.pageYOffset;
const navbar = document.getElementById("navbar");
const loginIcon = document.getElementById("loginIcon");
const logoEst = document.getElementById("logoEst");

window.addEventListener("scroll", () => {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    // Scroll hacia arriba: mostrar barra y elementos
    navbar.style.top = "20px";
    loginIcon.style.top = "20px";

    // El logo debe alinearse con la barra en ambas vistas
    if (window.innerWidth < 960) {
      logoEst.style.top = "70px"; // Ajuste móvil: debajo de la barra
    } else {
      logoEst.style.top = "0px"; // Escritorio: al mismo nivel
    }
  } else {
    // Scroll hacia abajo: ocultar barra y elementos
    navbar.style.top = "-100px";
    loginIcon.style.top = "-100px";
    logoEst.style.top = "-100px"; // Oculta el logo también
  }

  prevScrollPos = currentScrollPos;
});
