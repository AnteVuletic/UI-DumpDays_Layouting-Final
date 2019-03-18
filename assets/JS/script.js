let hamburger = document.querySelector(".navigation__hamburger");
let navbar = document.querySelector(".navbar");

hamburger.addEventListener("click",(event)=>{
    navbar.classList.toggle("navbar--show");
    hamburger.classList.toggle("navigation__hamburger--clicked");
});

document.addEventListener("scroll", (event)=>{
    if(window.pageYOffset !== 0)
        navbar.classList.add("navbar--scrolled");
    else
        navbar.classList.remove("navbar--scrolled");
});