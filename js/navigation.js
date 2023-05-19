// Menu Navbar

var hamburger = document.querySelector(".hamburger");
hamburger.onclick = function () {
  var navBar = document.querySelector(".nav-bar");
  var header = document.querySelector("header");
  navBar.classList.toggle("active");
  header.classList.toggle("active");
  hamburger.classList.toggle("active");
}

// Smooth Scroll Home

var logo = document.querySelector(".logo");
var home = document.querySelector(".slider");
logo.onclick = function () {
  home.scrollIntoView({
    behavior: 'smooth'
  });
}
