const btnScrollLeft = document.querySelector(".scroll-left-btn");
const btnScrollRight = document.querySelector(".scroll-right-btn");
const btnSideMenu = document.querySelector(".nav-btn");
const sideMenu = document.getElementById("sidemenu");

btnSideMenu.addEventListener("click", function () {
  if (!sideMenu.classList.contains("open")) {
    sideMenu.classList.toggle("open");
    sideMenu.classList.toggle("close");
    document.querySelector(".sidemenu-collapse").style.display = "none";
  } else {
    sideMenu.classList.toggle("open");
    sideMenu.classList.toggle("close");
    document.querySelector(".sidemenu-collapse").style.display = "block";
  }
});

function slide(direction) {
  var categoriesSection = document.querySelector(".categories-section");
  scrollCompleted = 0;
  var slideVar = setInterval(function () {
    if (direction == "left") {
      categoriesSection.scrollLeft -= 50;
    } else {
      document.querySelector(".scroll-left-btn-backgound").style.display =
        "inline-flex";
      btnScrollLeft.style.display = "inline-flex";
      categoriesSection.scrollLeft += 50;
    }
    scrollCompleted += 50;
    if (scrollCompleted >= 500) {
      window.clearInterval(slideVar);
    }
  }, 50);
}
