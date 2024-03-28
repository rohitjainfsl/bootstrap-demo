// const menu = document.querySelector("#mainMenu");
// window.addEventListener("scroll", changeHeader);

// function changeHeader() {
//   if (window.scrollY > 100) menu.classList.add("small");
//   else menu.classList.remove("small");
// }


$(window).scroll(function () {
  var scrollY = $(window).scrollTop();
  var menu = $("#mainMenu");

  if (scrollY > 100) {
    menu.addClass("small");
  } else {
    menu.removeClass("small");
  }
});
