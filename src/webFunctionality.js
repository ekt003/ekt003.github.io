 "use strict";


window.onload = init;

function init(){
    //gets the date and time of being accessed
    let now = new Date();

    let hour = now.getHours();

    let styleSheet= document.querySelector("#theme");
    
    //sunrise from 4AM to 9AM
    if(hour>=4 && hour<9){
      styleSheet.setAttribute("href", "css/themes/sunrise.css");
    }
       
    //day from 9AM to 4PM
    if(hour>=9 && hour<16){
      styleSheet.setAttribute("href", "css/themes/day.css");
    }


    //sunset from 4PM to 8PM
    if(hour>=16 && hour<20){
      styleSheet.setAttribute("href", "css/themes/sunset.css");
    }

    //night from 8PM to 5AM
    if((hour>=20 && hour<=23) || (hour>=0 && hour<4)){
      styleSheet.setAttribute("href", "css/themes/night.css");
    }

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

