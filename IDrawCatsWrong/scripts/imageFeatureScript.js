"use strict";

window.onload = init;

let images=[];

let indexBody=[];

let featureBackground;
let featureImage;
let prevNextText;

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if(evt.keyCode == 27){
        backToPage();
    }
    else if(evt.keyCode == 68 || evt.keyCode == 39){
        updateFeatureImage(1);
    }
    else if(evt.keyCode == 65 || evt.keyCode == 37){
        updateFeatureImage(-1)
    }
};

function init(){

    featureBackground = document.querySelector('#featureBackground');

    featureImage = document.querySelector('#featuredImage');

    prevNextText = document.querySelector('#prevNextText');

    images = document.querySelector("#cats").children;

    indexBody = document.querySelector('body');

}

function showLargeImage(image){
    //window.scrollTo(0,0);

    featureBackground.style.opacity = "1";
    featureBackground.style.zIndex = "2";

    featureImage.setAttribute("src", image.src);

    document.querySelector("#navbarLinks").style.display="none";
    document.querySelector("#leave").style.display="block";

    indexBody.style.overflow="hidden";

}

function backToPage(){
    featureBackground.style.opacity = "0";
    featureBackground.style.zIndex = "-1";

    document.querySelector("#navbarLinks").style.display="block";
    document.querySelector("#leave").style.display="none";

    indexBody.style.overflow="scroll";
}

function prevImage(){

    updateFeatureImage(-1);
}

function nextImage(){

    updateFeatureImage(1);
}

function updateFeatureImage(indexChange){

    let currentIndex=-1;

    for(let i=0; i<images.length; i++){
        if(images[i].src == featureImage.src){
            currentIndex = i;
            break;
        }
    }

    if(currentIndex<=0 && indexChange<0){
        featureImage.src = images[images.length-1].src;
    }
    else if(currentIndex>images.length-2 && indexChange>0){
        featureImage.src = images[0].src;
    }
    else{
        featureImage.src = images[currentIndex+indexChange].src;
    }
}