 
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
let footer = document.querySelector('#footer');
let profileIMG = document.querySelector('#profile');
let resume = document.querySelector('#resume');

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
    if(profileIMG){
        profileIMG.style.backgroundColor = "#0099cc";
        profileIMG.style.border="5px solid #0077aa";
    }
    if(resume){
        resume.style.backgroundColor = "#0099cc";
    }
    activeLink.style.backgroundColor = "#0099cc";
    navBar.style.backgroundColor = "#0077aa";
    footer.style.backgroundColor = "#0077aa";
    
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
    if(profileIMG){
        profileIMG.style.backgroundColor = "#0099cc";
        profileIMG.style.border="5px solid #0077aa";
    }
    if(resume){
        resume.style.backgroundColor = "#0099cc";
    }
    activeLink.style.backgroundColor = "#0099cc";
    navBar.style.backgroundColor = "#0077aa";
    footer.style.backgroundColor = "#0077aa";
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
    if(profileIMG){
        profileIMG.style.backgroundColor = "#0099cc";
        profileIMG.style.border="5px solid #0077aa";
    }
    if(resume){
        resume.style.backgroundColor = "#0099cc";
    }
    activeLink.style.backgroundColor = "#0099cc";
    navBar.style.backgroundColor = "#0077aa";
    footer.style.backgroundColor = "#0077aa";
}

//night from 8PM to 5AM
if((hour>=20 && hour<23) || (hour>=0 && hour<5)){
    if(backgroundIMG){
        backgroundIMG.style.backgroundImage = "url('backgroundEvening.svg')";
        titleScreen.style.textShadow = "none";
        titleScreen.style.backgroundColor = "#0022aa";
    }
    if(sectionTitle){
        sectionTitle.style.backgroundImage = "url('backgroundEvening.svg')";
        sectionTitle.style.textShadow = "none";
        sectionTitle.style.backgroundColor = "#0022aa";
    }
    if(formButt){
        formButt.style.backgroundColor = "#0044cc";
    }
    if(profileIMG){
        profileIMG.style.backgroundColor = "#0022aa";
        profileIMG.style.border="5px solid #0044cc";
    }
    if(resume){
        resume.style.backgroundColor = "#0022aa";
    }
    activeLink.style.backgroundColor = "#0044cc";
    navBar.style.backgroundColor = "#0022aa";
    footer.style.backgroundColor = "#0022aa";
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

function toggleHamburger() {
    let ham = document.querySelector("#ham");
    
    let x = document.getElementById("navLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
      ham.style.color="#0055dd";
    } else {
      x.style.display = "block";
      ham.style.color="white";
    }
  }

