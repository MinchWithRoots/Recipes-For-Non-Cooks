function hamburgerMenu(x) {
  x.classList.toggle("change");
}

const hamburgerButton = document.getElementById("hamburgerMenu");

const navList = document.getElementById("hamburgerMenuOpen");

function hamburgerMenuOpen() {
  navList.classList.toggle("show");
}

hamburgerButton.addEventListener("click", hamburgerMenuOpen);
