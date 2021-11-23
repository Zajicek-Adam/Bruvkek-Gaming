//Burgir
let burgir = document.getElementById("burgir");
let burgir_one = document.getElementById("one");
let burgir_two = document.getElementById("two");
let burgir_three = document.getElementById("three");
let navDiv = document.getElementById("navDiv");
let burgired = false;

burgir.addEventListener("click", e => {
    console.log("burgir");
    if(burgired){ //Menu is opened
        burgired = false;
        burgir_one.style.transform = "rotate(0)";
        burgir_two.style.transform = "rotate(0)";
        burgir_three.style.transform = "rotate(0)";
        
        navDiv.style.display = "none";
        burgir_one.style.top = "0px";
        burgir_three.style.bottom = "0px";
    }
    else{ //Default
        burgired = true;
        burgir_one.style.transform = "rotate(45deg)";
        burgir_two.style.transform = "rotate(-45deg)";
        burgir_three.style.transform = "rotate(135deg)";

        navDiv.style.display = "flex";
        burgir_one.style.top = "11px";
        burgir_three.style.bottom = "11px";
    }
})