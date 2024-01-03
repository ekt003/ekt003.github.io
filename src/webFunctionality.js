 "use strict";


window.onload = init;

// JS Typewriter code from W3Schools: https://www.w3schools.com/howto/howto_js_typewriter.asp
let i=0;
let txt = 'Dev, Designer, Dork';
let speed = 100;

function init(){
    //gets the date and time of being accessed
    let now = new Date();

    let hour = now.getHours();

    let styleSheet= document.querySelector("#theme");
    
    //sunrise from 4AM to 7AM
    if(hour>=4 && hour<7){
      styleSheet.setAttribute("href", "css/themes/sunrise.css");
    }
       
    //day from 7AM to 6PM
    if(hour>=7 && hour<18){
      styleSheet.setAttribute("href", "css/themes/day.css");
    }


    //sunset from 6PM to 8PM
    if(hour>=18 && hour<20){
      styleSheet.setAttribute("href", "css/themes/sunset.css");
    }

    //night from 8PM to 5AM
    if((hour>=20 && hour<=23) || (hour>=0 && hour<4)){
      styleSheet.setAttribute("href", "css/themes/night.css");
    }
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

