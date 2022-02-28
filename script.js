const btnScrollLeft = document.querySelector(".scroll-left-btn");
const btnScrollRight = document.querySelector(".scroll-right-btn");
const btnSideMenu = document.querySelector(".nav-btn");

btnSideMenu.addEventListener("click", function sideMenu() {
  btnSideMenu.classList.toggle(open);
});

function slide(direction) {
  var categoriesSection = document.querySelector(".categories-section");
  scrollCompleted = 0;
  var slideVar = setInterval(function () {
    if (direction == "left") {
      categoriesSection.scrollLeft -= 10;
    } else {
      document.querySelector(".scroll-left-btn-backgound").style.display =
        "inline-flex";
      btnScrollLeft.style.display = "inline-flex";
      categoriesSection.scrollLeft += 10;
    }
    scrollCompleted += 10;
    if (scrollCompleted >= 100) {
      window.clearInterval(slideVar);
    }
  }, 50);
}
