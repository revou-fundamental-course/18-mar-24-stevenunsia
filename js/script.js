window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
        document.body.classList.add("sticky-padding");
    } else {
        navbar.classList.remove("sticky");
        document.body.classList.remove("sticky-padding");
    }
}
