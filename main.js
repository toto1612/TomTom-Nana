let expandButton = document.getElementById('expand-button');
let reduceButton = document.getElementById('reduce-button');
let screenLeft = document.getElementById('screen-l');
let screenRight = document.getElementById('screen-r');
let navBar = document.getElementById("navbar");
let subNav = document.getElementById('subnav');
let subNavContent = document.getElementById('subnav-container');


let expandFunction = function(event) {
    screenLeft.style.width = "0%";
    screenRight.style.width = "100%";
    reduceButton.style.display = "block";
    expandButton.style.display = "none";
    navBar.style.display = "none";
}

let reduceFunction = function(event) {
    screenLeft.style.width = "50%";
    screenRight.style.width = "50%";
    reduceButton.style.display = "none";
    expandButton.style.display = "block";
    navBar.style.display = "flex";
}

let subnavFunction = function(event) {
    subNavContent.style.display = "block";
    subNavContent.style.position = "absolute";
    subNavContent.style.backgroundColor = "#fff";
    subNav.style.backgroundColor = "#fff";
}

expandButton.addEventListener('click',expandFunction);
reduceButton.addEventListener('click',reduceFunction);
//subNav.addEventListener('mouseenter',subnavFunction);//
