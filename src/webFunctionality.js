 
//gets the date and time of being accessed
let now = new Date();

let hour = now.getHours();

let backgroundIMG = document.querySelectorAll("#title");


//sets the background image based on the local time of day
//sunrise from 5AM to 9AM
if(hour>=5 && hour<9){
    for(let div of backgroundIMG){
        div.style.backgroundImage = "url('sunrise.png')";
    }
}
//day from 9AM to 5PM
if(hour>=9 && hour<17){
    for(let div of backgroundIMG){
        div.style.backgroundImage = "url('background.svg')";
    }
}

//sunset from 5PM to 8PM
if(hour>=17 && hour<20){
    for(let div of backgroundIMG){
        div.style.backgroundImage = "url('sunset.png')";
    }
}

//night from 8PM to 5AM
if((hour>=20 && hour<23) || (hour>=0 && hour<5)){
    for(let div of backgroundIMG){
        div.style.backgroundImage = "url('backgroundEvening.svg')";
    }
}


// JS Typewriter code from W3Schools: https://www.w3schools.com/howto/howto_js_typewriter.asp
let i=0;
let txt = 'Dev, Designer, Dork';
let speed = 100;

typeWriter();

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("tagline").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

