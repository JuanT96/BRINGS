let lastScrollTop = 0;
const navbar = document.getElementById("navbar");
const loginIcon = document.getElementById("loginIcon");

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-100px";
    loginIcon.style.top = "-100px";
  } else {
    navbar.style.top = "20px";
    loginIcon.style.top = "20px";
  }
  lastScrollTop = scrollTop;
});
