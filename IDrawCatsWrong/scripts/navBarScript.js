"use strict";


window.onload = init;

let navBar;

function init(){

    navBar = document.querySelector('#mobileNavbarLinks');

}

function showNav(){
    if(navBar.style.display=="block"){
        navBar.style.display="none";
    } else{
        navBar.style.display="block";
    }
}