document.querySelector("#bg-menu").addEventListener("click", () => {
    const overlay = document.querySelector(".overlay");
    overlay.style.width = "19rem";
    overlay.style.overflow = "visible";
    overlay.addEventListener("transitionend", () => {
        document.querySelector(".links-wrapp").classList.add("animation");
        document.querySelector(".links-wrapp").classList.add("line-height");

    });

});

document.querySelector(".close-nav").addEventListener("click", () => {
    const overlay = document.querySelector(".overlay");
    overlay.style.width = "0";
    overlay.style.overflow = "hidden";
    overlay.addEventListener("transitionend", () => {
        document.querySelector(".links-wrapp").classList.remove("animation");
        document.querySelector(".links-wrapp").classList.remove("line-height");

    });
});


// vide slider

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    let i;
    let x = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    if (n > x.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove("active");
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    x[slideIndex - 1].classList.add("active");
}