 "use strict";


window.onload = init;

function init(){
    //gets the date and time of being accessed
    let now = new Date();

    let hour = now.getHours();

    let styleSheet= document.querySelector("#theme");
    

    //day from 9AM to 4PM
    if(hour>=5 && hour<16){
      styleSheet.setAttribute("href", "css/themes/day.css");
    }


    //sunset from 4PM to 8PM
    if(hour>=16 && hour<20){
      styleSheet.setAttribute("href", "css/themes/sunset.css");
    }

    //night from 8PM to 5AM
    if((hour>=20 && hour<=23) || (hour>=0 && hour<5)){
      styleSheet.setAttribute("href", "css/themes/night.css");
    }

}



//all of the things to be changed based on time of day
let backgroundIMG = document.querySelector("#title");

//sets the background image based on the local time of day
//sunrise from 5AM to 9AM
// if(hour>=5 && hour<9){
//     if(backgroundIMG){
//         backgroundIMG.style.backgroundImage = "url('background.svg')";
//         titleScreen.style.textShadow = "#0077aa 2.5px 2.5px";
//         titleScreen.style.backgroundColor = "#0077aa";
//     }
//     if(sectionTitle){
//         sectionTitle.style.backgroundImage = "url('background.svg')";
//         sectionTitle.style.textShadow = "#0077aa 2.5px 2.5px";
//         sectionTitle.style.backgroundColor = "#0077aa";
//     }
//     if(formButt){
//         formButt.style.backgroundColor = "#0099cc";
//     }
//     if(profileIMG){
//         profileIMG.style.backgroundColor = "#0099cc";
//         profileIMG.style.border="5px solid #0077aa";
//     }
//     if(resume){
//         resume.style.backgroundColor = "#0099cc";
//     }
//     for(let link of links){
//         link.style.color="#0077aa";
//     }
//     activeLink.style.backgroundColor = "#0099cc";
//     navBar.style.backgroundColor = "#0077aa";
//     footer.style.backgroundColor = "#0077aa";
    
// }

// //sunset from 4PM to 8PM
// if(hour>=16 && hour<20){
//     if(backgroundIMG){
//         backgroundIMG.style.backgroundImage = "url('background.svg')";
//         titleScreen.style.textShadow = "#ff89ac 2.5px 2.5px";
//         titleScreen.style.backgroundColor = "#ff89ac";
//     }
//     if(sectionTitle){
//         sectionTitle.style.backgroundImage = "url('background.svg')";
//         sectionTitle.style.textShadow = "#ff89ac 2.5px 2.5px";
//         sectionTitle.style.backgroundColor = "#ff89ac";
//     }
//     if(formButt){
//         formButt.style.backgroundColor = "#ff89ac";
//     }
//     if(profileIMG){
//         profileIMG.style.backgroundColor = "#ff89ac";
//         profileIMG.style.border="5px solid #ff89ac";
//     }
//     if(resume){
//         resume.style.backgroundColor = "#ffabcd";
//     }
//     for(let link of links){
//         link.style.color="#ff89ac";
//     }
//     activeLink.style.backgroundColor = "#ffabcd";
//     navBar.style.backgroundColor = "#ff89ac";
//     footer.style.backgroundColor = "#ff89ac";
// }




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

