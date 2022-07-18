"use strict";

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
        opinionsItems.append(el);
        el.append(imgDiv);
        el.append(text);
        el.append(name);
        imgDiv.append(img);
    }
} else {
    const el = document.createElement("p");
    el.classList.add("text");
    el.textContent = "Կարծիքները շուտով հասանելի կլինեն"
    opinionsItems.append(el);
}