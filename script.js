const btnScrollLeft = document.querySelector(".scroll-left-btn");
const btnScrollRight = document.querySelector(".scroll-right-btn");
const btnSideMenu = document.querySelector(".nav-btn");
const sideMenu = document.getElementById("sidemenu");

btnSideMenu.addEventListener("click", function () {
  if (!sideMenu.classList.contains("open")) {
    sideMenu.classList.toggle("open");
    sideMenu.classList.toggle("close");
    document.querySelector(".sidemenu-collapse").style.display = "none";
    document.querySelector(".categories").style.marginLeft = "22rem";
    document.querySelector(".videos").style.marginLeft = "22rem";
  } else {
    sideMenu.classList.toggle("open");
    sideMenu.classList.toggle("close");
    document.querySelector(".sidemenu-collapse").style.display = "block";
    document.querySelector(".categories").style.marginLeft = "8rem";
    document.querySelector(".videos").style.marginLeft = "8rem";
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

document.querySelectorAll(".video").forEach((ele) => {
  ele.addEventListener("click", function () {
    let url = ele.getAttribute("data-link");
    // console.log(url);
    var myWindow = window.open("", "_self");
    myWindow.document.write(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>YouTube</title>
        <!-- Required meta tags -->
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        <link rel="icon" href="img/logo.png" type="image/png" />


        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />

        <script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

        <link rel="stylesheet" href="css/general.css" />
        <link rel="stylesheet" href="css/style.css" />

        <!-- Bootstrap CSS -->
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
      </head>
      <body>
        <!-- ================ HEADER ================ -->
        <header class="header-detail row align-items-center sticky-top">
          <div class="nav-group-detail .col-4 .col-sm-3">
            <button
              type="button"
              class="nav-btn-detail"
              data-toggle="collapse"
              aria-expanded="false"
              data-bs-toggle="offcanvas"
              data-bs-target="#sidemenu-canvas"
              aria-controls="sidemenu-canvas"
            >
              <ion-icon name="menu" class="nav-icon-detail"></ion-icon>
            </button>
            <a href="#" class="youtube-logo" data-bs-toggle="offcanvas">
          <img src="img/logo-dark.png" alt="Youtube logo" class="youtube-img" />
        </a>
          </div>
          <div class="input-group-detail col search-bar-detail">
            <input
              type="text"
              class="search-input-detail"
              placeholder="Search"
              aria-label="search"
              aria-describedby="search-btn"
            />
            <button class="search-btn-detail" type="button" id="search-btn">
              <ion-icon name="search" class="search-icon-detail"></ion-icon>
            </button>
            <button type="button" class="mic-btn-detail">
              <ion-icon name="mic" class="mic-icon-detail"></ion-icon>
            </button>
          </div>
          <div class="menu-group-detail .col-4 .col-sm-3">
            <button class="menu-btn-detail">
              <ion-icon name="apps-outline" class="menu-icon-detail"></ion-icon>
            </button>
            <button class="menu-btn-detail">
              <ion-icon
                name="ellipsis-vertical"
                class="menu-icon-detail"
              ></ion-icon>
            </button>

            <button type="submit" class="signin-btn-detail">
              <ion-icon
                name="person-circle-outline"
                class="signin-btn-icon-detail"
              ></ion-icon>
              sign in
            </button>
          </div>
        </header>

        <!-- ================ SIDE MENU OFF CANVAS ================ -->
        <section
          class="side-menu collapse-open bs-canvas-left offcanvas offcanvas-start"
          data-bs-spy="scroll"
          data-bs-offset="0"
          tabindex="-1"
          id="sidemenu-canvas"
        >
          <div class="list-group">
            <a href="#" class="list-group-item d-flex align-items-center active">
              <ion-icon name="home" class="side-menu-icon"></ion-icon>
              <span>Home</span>
            </a>
            <a href="#" class="list-group-item d-flex align-items-center">
              <ion-icon name="compass-outline" class="side-menu-icon"></ion-icon>
              <span>Explore</span>
            </a>
            <a href="#" class="list-group-item d-flex align-items-center">
              <ion-icon name="cut-outline" class="side-menu-icon"></ion-icon>
              <span>Shorts</span>
            </a>
            <a href="#" class="list-group-item d-flex align-items-center">
              <ion-icon
                name="file-tray-stacked-outline"
                class="side-menu-icon"
              ></ion-icon>
              <span>Subcriptions</span>
            </a>
          </div>
          <div class="list-group">
            <a href="#" class="list-group-item d-flex align-items-center">
              <ion-icon name="library-outline" class="side-menu-icon"></ion-icon>
              <span>Library</span>
            </a>
            <a href="#" class="list-group-item d-flex align-items-center">
              <ion-icon name="timer-outline" class="side-menu-icon"></ion-icon>
              <span>History</span>
            </a>
          </div>
          <div class="signin-group">
            Sign in to like videos, comment and subscribe.
            <button type="submit" class="signin-btn">
              <ion-icon
                name="person-circle-outline"
                class="signin-btn-icon"
              ></ion-icon>
              sign in
            </button>
          </div>
          <div class="list-group">
            <div class="group-title pt-2 px-4 mx-1 text-uppercase text-muted">
              BEST OF YOUTUBE
            </div>
            <a href="#" class="list-group-item d-flex align-items-center">
              <ion-icon name="musical-notes" class="side-menu-icon"></ion-icon>
              <span>Music</span>
            </a>
            <a href="#" class="list-group-item d-flex align-items-center">
              <ion-icon name="trophy" class="side-menu-icon"></ion-icon>
              <span>Sport</span>
            </a>
            <a href="#" class="list-group-item d-flex align-items-center">
              <ion-icon name="game-controller" class="side-menu-icon"></ion-icon>
              <span>Gaming</span>
            </a>
            <a href="#" class="list-group-item d-flex align-items-center">
              <ion-icon name="newspaper" class="side-menu-icon"></ion-icon>
              <span>News</span>
            </a>
            <a href="#" class="list-group-item d-flex align-items-center">
              <ion-icon name="radio" class="side-menu-icon"></ion-icon>
              <span>Live</span>
            </a>
            <a href="#" class="list-group-item d-flex align-items-center">
              <ion-icon name="cube" class="side-menu-icon"></ion-icon>
              <span>360° Video</span>
            </a>
          </div>
          <div class="list-group">
            <a href="#" class="list-group-item d-flex align-items-center">
              <ion-icon name="add-circle-outline" class="side-menu-icon"></ion-icon>
              <span>Browse channels</span>
            </a>
          </div>
          <div class="list-group">
            <a href="#" class="list-group-item d-flex align-items-center">
              <ion-icon name="settings-outline" class="side-menu-icon"></ion-icon>
              <span>Settings</span>
            </a>
            <a href="#" class="list-group-item d-flex align-items-center">
              <ion-icon name="flag-outline" class="side-menu-icon"></ion-icon>
              <span>Report history</span>
            </a>
            <a href="#" class="list-group-item d-flex align-items-center">
              <ion-icon
                name="help-circle-outline"
                class="side-menu-icon"
              ></ion-icon>
              <span>Help</span>
            </a>
            <a href="#" class="list-group-item d-flex align-items-center">
              <ion-icon
                name="alert-circle-outline"
                class="side-menu-icon"
              ></ion-icon>
              <span>Send feedback</span>
            </a>
          </div>
        </section>

        <!-- ================ VIDEO PLAYER IFRAME ================ -->
        <iframe
          width="100%"
          height="570"
          src="${url}"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>

        <!-- ================ DETAILS VIDEO ================ -->
        <div class="bottom-section row">
          <div class="left-section col-8">
            <div class="video-play-detail">
              <a href="#" class="video-play-hashtag">#10 on trending for music</a>
              <div class="video-play-title">
                Video Title
              </div>
              <div class="video-play-metadata">
                <span>1,541,530 views • Premiered on 26 Feb 2022</span>
                <div class="video-play-group-btn">
                  <button type="button" class="video-play-btn">
                    <ion-icon name="thumbs-up-outline"></ion-icon>
                    22k like
                  </button>
                  <button type="button" class="video-play-btn">
                    <ion-icon name="thumbs-down-outline"></ion-icon>
                    dislike
                  </button>
                  <button type="button" class="video-play-btn">
                    <ion-icon name="arrow-redo-outline"></ion-icon>
                    share
                  </button>
                  <button type="button" class="video-play-btn">
                    <ion-icon name="duplicate-outline"></ion-icon>
                    saved
                  </button>
                  <button type="button" class="video-play-btn">
                    <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
                  </button>
                </div>
              </div>
              <div class="channel-video">
                <div class="channel">
                  <img
                    src="img/channel-img.png"
                    alt="Channel Image"
                    class="channel-img"
                  />
                  <a href="#" class="channel-name">Channel Name</a>
                </div>
                <button type="button" class="subcribe-btn">subcribe</button>
              </div>
            </div>
          </div>

          <div class="right-section col-3">
            <div class="more-video row">
              <a href="#">
                <img
                  src="img/thumbnail/6-way-winter.jpg"
                  alt="Thumbnail"
                  class="more-video-img"
                />
              </a>
              <div class="more-video-info col">
                <div class="video-details">
                  <div class="video-title">
                    6 DAYS WINTER BUSHCRAFT - ARTISTS CHARCOAL
                  </div>
                  <div class="video-channel-name">Swedwood</div>
                  <div class="video-metadata">
                    <span>12M views</span>
                    •
                    <span>2 months ago</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="more-video row">
              <a href="#">
                <img
                  src="img/thumbnail/6-way-winter.jpg"
                  alt="Thumbnail"
                  class="more-video-img"
                />
              </a>
              <div class="more-video-info col">
                <div class="video-details">
                  <div class="video-title">
                    6 DAYS WINTER BUSHCRAFT - ARTISTS CHARCOAL
                  </div>
                  <div class="video-channel-name">Swedwood</div>
                  <div class="video-metadata">
                    <span>12M views</span>
                    •
                    <span>2 months ago</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="more-video row">
              <a href="#">
                <img
                  src="img/thumbnail/6-way-winter.jpg"
                  alt="Thumbnail"
                  class="more-video-img"
                />
              </a>
              <div class="more-video-info col">
                <div class="video-details">
                  <div class="video-title">
                    6 DAYS WINTER BUSHCRAFT - ARTISTS CHARCOAL
                  </div>
                  <div class="video-channel-name">Swedwood</div>
                  <div class="video-metadata">
                    <span>12M views</span>
                    •
                    <span>2 months ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Optional JavaScript -->

        <script src="script.js"></script>
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script
          src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
          integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
          integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
          crossorigin="anonymous"
        ></script>
        <script
          src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
          integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
          crossorigin="anonymous"
        ></script>
      </body>
    </html>
    `);
  });
});
