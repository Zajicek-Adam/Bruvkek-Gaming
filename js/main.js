let button = document.getElementById("button");
let circle = document.getElementById("circle");
let bruvkek = document.getElementById("bruvkek");
let myChart = document.getElementById("myChart");
let bruvkekheading = document.getElementById("bruvkek-heading");
let section = document.getElementById("section");
let mediaQueryMobile = window.matchMedia("(max-width: 600px)");
let translateAmount = 500;
let active = false;

function handleResponsive(x) {
    if (x.matches) {
        translateAmount = 300;
        if(myChart != null){
        myChart.style.height = '300px';
        myChart.style.width = '300px';
        }
    }
    else {
        translateAmount = 500;
        if(myChart != null){
            myChart.style.height = '800px';
            myChart.style.width = '800px';
            }
    }
}
handleResponsive(mediaQueryMobile);
//mediaQueryMobile.addEventListener(handleResponsive);
document.addEventListener("resize", e => {
    handleResponsive(mediaQueryMobile);
})

button.addEventListener("click", e => {
    setTimeout(function () {
        if (active == false) {
            section.style.transform = "translateY(-100%)";
            bruvkek.style.transform = "translateY(-750px)";
            button.style.transform = "translateY(200px)";
            active = true;
            bruvkekheading.textContent = "HIDE";
            button.style.zIndex = "3";
        }
        else {
            active = false;
            section.style.transform = "translateY(0px)";
            bruvkek.style.transform = "translateY(0px)";
            button.style.transform = "translateY(0px)";
            bruvkekheading.textContent = "BRUVKEK";
        }
    }, 0);
    effect(e);
});
function effect(e) {
    let x = e.clientX;
    let y = e.clientY;
    let rectangle = button.getBoundingClientRect();
    circle.style.left = x - rectangle.left + 'px';
    circle.style.top = y - rectangle.top + 'px';
    circle.classList.add("circle");
    setTimeout(function () {
        circle.classList.remove("circle");
    }, 500);
}

//Carousel



let jsondata2 = '{ "champions" : [' +
    '{ "name":"Ashe" , "text": "Iceborn warmother of the Avarosan tribe, Ashe commands the most populous horde in the north. Stoic, intelligent, and idealistic, yet uncomfortable with her role as leader, she taps into the ancestral magics of her lineage to wield a bow of True Ice..." },' +
    '{ "name":"Samira" , "text": "Samira stares death in the eye with unyielding confidence, seeking thrill wherever she goes. After her Shuriman home was destroyed as a child, Samira found her true calling in Noxus, where she built a reputation as a stylish daredevil taking on..." },' +
    '{ "name":"Miss Fortune" , "text": "A Bilgewater captain famed for her looks but feared for her ruthlessness, Sarah Fortune paints a stark figure among the hardened criminals of the port city. As a child, she witnessed the reaver king Gangplank murder her family..." },' +
    '{ "name":"Xayah" , "text": "Deadly and precise, Xayah is a vastayan revolutionary waging a personal war to save her people. She uses her speed, guile, and razor-sharp feather blades to cut down anyone who stands in her way. Xayah fights alongside her partner and lover, Rakan..." },' +
    '{ "name":"Kai\'Sa" ,  "text": "To survive among predators, Kai’Sa became one. Stranded for years with no hope of rescue, Kai’Sa endured through sheer will and a symbiotic second skin adapted from a living Void creature..." },' +
    '{ "name":"Jinx" ,  "text": "A manic and impulsive criminal from Zaun, Jinx lives to wreak havoc without care for the consequences. With an arsenal of deadly weapons, she unleashes the loudest blasts and brightest explosions to leave a trail of mayhem and panic in her wake." },' +
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

buttonPrev.addEventListener("click", e => {
    buttonPrev.style.animation = "opacityDec 300ms ease";
    setTimeout(function(){
        buttonPrev.style.animation = "";
    }, 300)
})

buttonNext.addEventListener("click", e => {
    buttonNext.style.animation = "opacityDec 300ms ease";
    setTimeout(function(){
        buttonNext.style.animation = "";
    }, 300)
})

function moveRight() {
    if (count < img.length - 1) {
        for (let index = 0; index < img.length; index++) {
            img[index].style.transform += `translate(-${translateAmount}px)`;
        }
        count++;
    } else {
        count = 0;
        for (let index = 0; index < img.length; index++) {
            img[index].style.transform = `translate(0px)`;
        }
    }

    checkActive();
}

function moveLeft() {
    if (count == 0) {
        for (let index = 0; index < img.length; index++) {
            img[index].style.transform = `translate(-${translateAmount * (img.length-1)}px)`;
        }
        count = img.length-1;
    } else {
        for (let index = 0; index < img.length; index++) {
            img[index].style.transform += `translate(+${translateAmount}px)`;
        }
        count--;
    }
    checkActive();
}

function checkActive() {
    for (let index = 0; index < img.length; index++) {
        img[index].style.opacity = "0";
    }

    img[count].style.opacity = "1";

    heading.innerText = obj.champions[count].name;
    descriptionP.innerText = obj.champions[count].text
}
