let button = document.getElementById("button");
let circle = document.getElementById("circle");
let rectangle;

button.addEventListener("click", e => {
    effect(e);
})
function effect(e){
    let x = e.clientX;
    let y = e.clientY;
    rectangle = button.getBoundingClientRect();
    circle.style.left = x - rectangle.left + 'px';
    circle.style.top = y - rectangle.top + 'px';
    circle.classList.add("circle");
    setTimeout(function (){

        circle.classList.remove("circle");
      }, 500);
}