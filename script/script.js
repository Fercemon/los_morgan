document.querySelector("#bg-menu").addEventListener("click", () => {
    const overlay = document.querySelector(".overlay");
    overlay.style.width = "19rem";
    overlay.style.overflow = "visible";
    overlay.addEventListener("transitionend", () => {
        document.querySelector(".links-wrapp").classList.add("animation");
    });

});

document.querySelector(".close-nav").addEventListener("click", () => {
    const overlay = document.querySelector(".overlay");
    overlay.style.width = "0";
    overlay.style.overflow = "hidden";
    overlay.addEventListener("transitionend", () => {
        document.querySelector(".links-wrapp").classList.remove("animation");
    });
});