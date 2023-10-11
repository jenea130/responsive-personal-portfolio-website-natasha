const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav__menu--open");
  changeToggleIcon();
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.toggle("nav__menu--open");
    changeToggleIcon();
  });
});

// change the nav toggle icon
function changeToggleIcon() {
  if (navMenu.classList.contains("nav__menu--open")) {
    navToggle.classList.replace("ri-menu-4-line", "ri-close-line");
  } else {
    navToggle.classList.replace("ri-close-line", "ri-menu-4-line");
  }
}

// Activate nav link on scroll
function addActiveLink() {
    const section = document.querySelectorAll("section[id]");

    section.forEach((section) => {
        const scrollY = window.scrollY,
        sectionTop = section.offsetTop - 80,
        sectionHeight = section.offsetHeight,
        sectionId = section.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector(".nav__link[href*=" + sectionId + "]")
                .classList.add("nav__link--active");
        } else {
            document
                .querySelector(".nav__link[href*=" + sectionId + "]")
                .classList.remove("nav__link--active");
        }
    });
}

window.addEventListener("scroll", addActiveLink);
