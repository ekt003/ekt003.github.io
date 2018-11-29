 
//gets the date and time of being accessed
let now = new Date();

let hour = now.getHours();

//all of the things to be changed based on time of day
let backgroundIMG = document.querySelector("#title");
let activeLink = document.querySelector('.active');
let titleScreen = document.querySelector('#title');
let sectionTitle = document.querySelector('#sectionTitle');
let navBar = document.querySelector('#navbarDiv');
let formButt = document.querySelector('#formButton');

//sets the background image based on the local time of day
//sunrise from 5AM to 9AM
if(hour>=5 && hour<9){
    if(backgroundIMG){
        backgroundIMG.style.backgroundImage = "url('background.svg')";
        titleScreen.style.textShadow = "#0077aa 2.5px 2.5px";
        titleScreen.style.backgroundColor = "#0077aa";
    }
    if(sectionTitle){
        sectionTitle.style.backgroundImage = "url('background.svg')";
        sectionTitle.style.textShadow = "#0077aa 2.5px 2.5px";
        sectionTitle.style.backgroundColor = "#0077aa";
    }
    if(formButt){
        formButt.style.backgroundColor = "#0099cc";
    }
    activeLink.style.backgroundColor = "#0099cc";
    navBar.style.backgroundColor = "#0077aa";
    
}
//day from 9AM to 5PM
if(hour>=9 && hour<17){
    if(backgroundIMG){
        backgroundIMG.style.backgroundImage = "url('background.svg')";
        titleScreen.style.textShadow = "#0077aa 2.5px 2.5px";
        titleScreen.style.backgroundColor = "#0077aa";
    }
    if(sectionTitle){
        sectionTitle.style.backgroundImage = "url('background.svg')";
        sectionTitle.style.textShadow = "#0077aa 2.5px 2.5px";
        sectionTitle.style.backgroundColor = "#0077aa";
    }
    if(formButt){
        formButt.style.backgroundColor = "#0099cc";
    }
    activeLink.style.backgroundColor = "#0099cc";
    navBar.style.backgroundColor = "#0077aa";
}

//sunset from 5PM to 8PM
if(hour>=17 && hour<20){
    if(backgroundIMG){
        backgroundIMG.style.backgroundImage = "url('background.svg')";
        titleScreen.style.textShadow = "#0077aa 2.5px 2.5px";
        titleScreen.style.backgroundColor = "#0077aa";
    }
    if(sectionTitle){
        sectionTitle.style.backgroundImage = "url('background.svg')";
        sectionTitle.style.textShadow = "#0077aa 2.5px 2.5px";
        sectionTitle.style.backgroundColor = "#0077aa";
    }
    if(formButt){
        formButt.style.backgroundColor = "#0099cc";
    }
    activeLink.style.backgroundColor = "#0099cc";
    navBar.style.backgroundColor = "#0077aa";
}

//night from 8PM to 5AM
if((hour>=20 && hour<23) || (hour>=0 && hour<5)){
    backgroundIMG.style.backgroundImage = "url('backgroundEvening.svg')";
    sectionTitle.style.backgroundImage = "url('backgroundEvening.svg')";
    activeLink.style.backgroundColor = "#0022aa";
    titleScreen.style.textShadow = "none";
    navBar.style.backgroundColor = "#0022aa";
}


// JS Typewriter code from W3Schools: https://www.w3schools.com/howto/howto_js_typewriter.asp
let i=0;
let txt = 'Dev, Designer, Dork';
let speed = 100;

if(backgroundIMG){
    typeWriter();
}


function typeWriter() {
  if (i < txt.length) {
    document.getElementById("tagline").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

