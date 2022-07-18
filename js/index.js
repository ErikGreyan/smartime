"use strict";

window.addEventListener("load", () => {
    const link = document.querySelectorAll("a[href='#']");
    link.forEach((elem) => {
        elem.addEventListener("click", (i) => {
            i.preventDefault();
        });
    });

    const menu = document.querySelector(".menu");
    const menuClick = document.querySelector(".btn");

    menuClick.addEventListener("click", () => {
        menu.classList.toggle("active_menu");
        menuClick.classList.toggle("active_btn");
    });

    const header = document.querySelector("header");
    const arr = ["img", "img1", "img2"];
    const arrRandom = Math.floor(Math.random() * arr.length);
    header.classList.toggle(arr[arrRandom]);

    const btnUp = document.querySelector(".btnUp");
    window.addEventListener("scroll", () => {
        window.scrollY >= 300 ? btnUp.classList.add("btnShow") : btnUp.classList.remove("btnShow");
    });

    btnUp.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});