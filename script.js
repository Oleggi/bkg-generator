"use strict";

let css = document.querySelector('h3');
let color1 = document.querySelector(".color1"); 
let color2 = document.querySelector(".color2"); 
let body = document.getElementById('gradient');
let header = document.querySelector(".header");
let button = document.querySelector('button');


function randomColor() {
body.style.background = 
    "linear-gradient(to right, " 
    + '#' + (function co(lor){   return (lor +=
  [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
  && (lor.length == 6) ?  lor : co(lor); })('') 
    +", " 
    + '#' + (function co(lor){   return (lor +=
  [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
  && (lor.length == 6) ?  lor : co(lor); })('') + ")";
    css.textContent = body.style.background + ";"

   button.style.background = '#' + (function co(lor){   return (lor +=
  [0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'][Math.floor(Math.random()*16)])
  && (lor.length == 6) ?  lor : co(lor); })('');
    }



function setGradient() {
	body.style.background = 
    "linear-gradient(to right, " 
    + color1.value 
    +", " 
    + color2.value + ")";
    css.textContent = body.style.background + ";"
    }


color1.addEventListener("input", setGradient, randomColor);
color2.addEventListener("input", setGradient, randomColor);
button.addEventListener("click", randomColor);
body.addEventListener('wheel', randomColor);
