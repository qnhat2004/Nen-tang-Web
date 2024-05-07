var navbar = document.querySelector(".home-page .navbar");
var logo = document.querySelector(".logo");
var links = document.querySelectorAll(".home-page .navbar ul li");

window.onscroll = function () {
    if (window.scrollY === 0) {
        navbar.style.backgroundColor = "transparent";
        logo.style.color = "white";
        links.forEach((link) => {
            link.style.color = "white";
            link.classList.remove("hovered");
        });
    } else {
        navbar.style.backgroundColor = "white";
        logo.style.color = "black";
        links.forEach((link) => {
            link.style.color = "black";
            link.classList.add("hovered");
        });
    }
};
navbar.addEventListener('mouseover', function() {
    navbar.style.backgroundColor = "white";
    logo.style.color = "black";
    links.forEach((link) => {
        link.style.color = "black";
        link.classList.add("hovered");
    });
});
window.onload = function() {
    var video = document.querySelector('.call-us .vid video');
    video.playbackRate = 1.5; // 1.5 times the normal speed
};