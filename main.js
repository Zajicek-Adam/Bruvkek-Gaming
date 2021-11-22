let button = document.getElementById("button");
let circle = document.getElementById("circle");
let rectangle;

button.addEventListener("click", (e) => {
    effect(e);
});
function effect(e) {
    let x = e.clientX;
    let y = e.clientY;
    rectangle = button.getBoundingClientRect();
    circle.style.left = x - rectangle.left + "px";
    circle.style.top = y - rectangle.top + "px";
    circle.classList.add("circle");
    setTimeout(function () {
        circle.classList.remove("circle");
    }, 500);
}

//Carousel

let count = 0; //Add or subtract '1' when pressing buttons
let img = [];
img = document.getElementsByClassName("img"); //Array of all images
const buttonPrev = document.getElementById("prev");
const buttonNext = document.getElementById("next");

function moveRight() {
    if (count < 5) {
        console.log(img[0])
        img[0].style.transform += "translate(-500px)";
        img[1].style.transform += "translate(-500px)";
        img[2].style.transform += "translate(-500px)";
        img[3].style.transform += "translate(-500px)";
        img[4].style.transform += "translate(-500px)";
        img[5].style.transform += "translate(-500px)";
        count++;
    }
    else {
        count = 0;
        img[0].style.transform = "translate(0px)";
        img[1].style.transform = "translate(0px)";
        img[2].style.transform = "translate(0px)";
        img[3].style.transform = "translate(0px)";
        img[4].style.transform = "translate(0px)";
        img[5].style.transform = "translate(0px)";
    }
    checkActive();
}

function moveLeft() {
    if (count == 0) {
        img[0].style.transform = "translate(-2500px)";
        img[1].style.transform = "translate(-2500px)";
        img[2].style.transform = "translate(-2500px)";
        img[3].style.transform = "translate(-2500px)";
        img[4].style.transform = "translate(-2500px)";
        img[5].style.transform = "translate(-2500px)";
        count = 5;
    }
    else {
        img[0].style.transform += "translate(+500px)";
        img[1].style.transform += "translate(+500px)";
        img[2].style.transform += "translate(+500px)";
        img[3].style.transform += "translate(+500px)";
        img[4].style.transform += "translate(+500px)";
        img[5].style.transform += "translate(+500px)";
        count--;
    }
    checkActive();
}
function checkActive(){
    img[count].style.opacity = "1";
}