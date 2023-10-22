let Showtf2;
let displayImg;
let spel

function init() {
    displayImg = [];
    displayImg [1] = "pics\tf2.png";
    spel = document.getElementById("spel")
    Showtf2 = document.getElementById("tf2");
    Showtf2.addEventListener("click", display);
}
window.onload = init

function display() {
    spel.src = "pics/tf2.png"
}





/*
function display() {
    let link;

    link = getLink();
}

function getLink() {
    let link;
}




function display() {
    if(displayImg.style.display == "none") {
        displayImg.style.display = "block";
    }else {
        displayImg.style.display = "none";
    }
}

function remove() {
    displayImg.style.display = "none"
}
*/