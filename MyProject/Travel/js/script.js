window.onscroll = function () {
    var navbar = document.querySelector(".home-page .navbar");
    var logo = document.querySelector(".logo");
    var links = document.querySelectorAll(".home-page .navbar ul li");
    if (window.scrollY === 0) {
        navbar.style.backgroundColor = "transparent";
        logo.style.color = "white";
        links.forEach((link) => (link.style.color = "white"));
    } else {
        navbar.style.backgroundColor = "white";
        logo.style.color = "black";
        links.forEach((link) => (link.style.color = "black"));
    }
};
