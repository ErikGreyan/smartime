"use strict";

const opinionsBox = document.querySelector(".opinions_box");
const opinionsItems = document.querySelector(".opinions_items");
if (opinions.length > 0) {
    for (let i = 0; i < opinions.length; i++) {
        const el = document.createElement("div");
        el.classList.add("opinions_item");
        const imgDiv = document.createElement("div");
        imgDiv.classList.add("img");
        const img = document.createElement("img");
        img.src = `img/opinions/${opinions[i].img}`;
        const text = document.createElement("p");
        text.textContent = opinions[i].opinions;
        const name = document.createElement("p");
        name.textContent = opinions[i].name;
        const href = document.createElement("a");
        href.href = "opinions.html";
        href.textContent = "Տեսնել Ավելին";
        opinionsItems.append(el);
        el.append(imgDiv);
        el.append(text);
        el.append(name);
        imgDiv.append(img);
        if (i === 1) {
            opinionsBox.append(href);
        }
        if (i === 8) {
            break;
        }
    }
} else {
    const el = document.createElement("p");
    el.classList.add("text");
    el.textContent = "Կարծիքները շուտով հասանելի կլինեն"
    opinionsItems.append(el);
}