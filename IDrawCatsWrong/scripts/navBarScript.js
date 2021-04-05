"use strict";

let navBar = document.querySelector('#mobileNavbarLinks');

function showNav(){
    if(navBar.style.display=="block"){
        navBar.style.display="none";
    } else{
        navBar.style.display="block";
    }
}