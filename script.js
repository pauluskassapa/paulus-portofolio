const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {
  navLinks.classList.toggle("active");

  const isMenuOpen = navLinks.classList.contains("active");

  menuToggle.setAttribute("aria-expanded", isMenuOpen);

  if (isMenuOpen) {
    menuToggle.textContent = "×";
    menuToggle.setAttribute("aria-label", "Tutup menu navigasi");
  } else {
    menuToggle.textContent = "☰";
    menuToggle.setAttribute("aria-label", "Buka menu navigasi");
  }
});