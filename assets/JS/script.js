let hamburger = document.querySelector(".navigation__hamburger");
let navbar = document.querySelector(".navbar");

hamburger.addEventListener("click",(event)=>{
    navbar.classList.toggle("navbar--show");
    hamburger.classList.toggle("navigation__hamburger--clicked");
});