let nav = document.querySelector(".header__nav");
let burguer = document.querySelector(".hamburger");
let burguerFirstLine = document.querySelector(".hamburger__line:nth-child(1)");
let burguerSecondLine = document.querySelector(".hamburger__line:nth-child(2)");
let burguerThirdLine = document.querySelector(".hamburger__line:nth-child(3)");

burguer.addEventListener("click", function() {
    burguerFirstLine.classList.toggle("hamburger__line--dynamic-1");
    burguerSecondLine.classList.toggle("hamburger__line--dynamic-2");
    burguerThirdLine.classList.toggle("hamburger__line--dynamic-3");

    nav.classList.toggle("display__nav");
});