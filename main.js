let button = document.getElementById("button");
let circle = document.getElementById("circle");
let bruvkek = document.getElementById("bruvkek");
let bruvkekheading = document.getElementById("bruvkek-heading");
let section = document.getElementById("section");
let rectangle;
let active = false;

button.addEventListener("click", (e) => {
    setTimeout(function () {
        if (active == false) {
            section.style.transform = "translateY(-100%)";
            bruvkek.style.transform = "translateY(-750px)";
            button.style.transform = "translateY(200px)";
            active = true;
            bruvkekheading.textContent = "UNBRUVKEK";
            button.style.zIndex = "3";
        }
        else{
            active = false; 
            section.style.transform = "translateY(0px)";
            bruvkek.style.transform = "translateY(0px)";
            button.style.transform = "translateY(0px)";
            bruvkekheading.textContent = "BRUVKEK";
        }
    }, 100);
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
    }, 300);
}

//Carousel



let jsondata2 = '{ "champions" : [' +
    '{ "name":"Ashe" , "text": "Iceborn warmother of the Avarosan tribe, Ashe commands the most populous horde in the north. Stoic, intelligent, and idealistic, yet uncomfortable with her role as leader, she taps into the ancestral magics of her lineage to wield a bow of True Ice..." },' +
    '{ "name":"Samira" , "text": "Samira stares death in the eye with unyielding confidence, seeking thrill wherever she goes. After her Shuriman home was destroyed as a child, Samira found her true calling in Noxus, where she built a reputation as a stylish daredevil taking on..." },' +
    '{ "name":"Miss Fortune" , "text": "A Bilgewater captain famed for her looks but feared for her ruthlessness, Sarah Fortune paints a stark figure among the hardened criminals of the port city. As a child, she witnessed the reaver king Gangplank murder her family..." },' +
    '{ "name":"Xayah" , "text": "Deadly and precise, Xayah is a vastayan revolutionary waging a personal war to save her people. She uses her speed, guile, and razor-sharp feather blades to cut down anyone who stands in her way. Xayah fights alongside her partner and lover, Rakan..." },' +
    '{ "name":"KaiSa" ,  "text": "To survive among predators, Kai’Sa became one. Stranded for years with no hope of rescue, Kai’Sa endured through sheer will and a symbiotic second skin adapted from a living Void creature..." },' +
    '{ "name":"Jhin" , "text": "Jhin is a meticulous criminal psychopath who believes murder is art. Once an Ionian prisoner, but freed by shadowy elements within Ionia’s ruling council, the serial killer now works as their cabal\'s assassin. Using his gun as his paintbrush..." } ]}';

const obj = JSON.parse(jsondata2);

let count = 0; //Add or subtract '1' when pressing buttons
let heading = document.getElementById("champ-name");
let descriptionP = document.getElementById("champ-description");

heading.innerText = obj.champions[count].name;
descriptionP.innerText = obj.champions[count].text

let img = [];
img = document.getElementsByClassName("img"); //Array of all images
const buttonPrev = document.getElementById("prev");
const buttonNext = document.getElementById("next");

function moveRight() {
    if (count < 5) {
        console.log(img[0]);
        img[0].style.transform += "translate(-500px)";
        img[1].style.transform += "translate(-500px)";
        img[2].style.transform += "translate(-500px)";
        img[3].style.transform += "translate(-500px)";
        img[4].style.transform += "translate(-500px)";
        img[5].style.transform += "translate(-500px)";
        count++;
    } else {
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
    } else {
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

function checkActive() {
    img[0].style.opacity = "0";
    img[1].style.opacity = "0";
    img[2].style.opacity = "0";
    img[3].style.opacity = "0";
    img[4].style.opacity = "0";
    img[5].style.opacity = "0";

    img[count].style.opacity = "1";

    heading.innerText = obj.champions[count].name;
    descriptionP.innerText = obj.champions[count].text
}
