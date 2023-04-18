// const article = document.querySelector('.article')
// console.log(article);

// client

// console.log(article.clientWidth, article.clientHeight);
// console.log(article.clientTop, article.clientLeft);

// offset

// console.log(article.offsetWidth, article.offsetHeight);
// console.log(article.offsetTop, article.offsetLeft);

// const button = document.querySelector('.menu-button');
// const menu = document.querySelector('.menu');

// console.log(menu, button);

// function openMenu(){
//     menu.style.marginLeft = '0px';
// }

// function closeMenu(){
//     menu.style.marginLeft = '-300px';
// }

// button.addEventListener('mouseover', openMenu);
// menu.addEventListener('mouseleave', closeMenu);
let player = document.querySelector(".player");

let mgLeft = 0;
let mgTop = 0;
let step = 10;

function moveTop() {
  mgTop -= step;
}
function moveTop() {
  mgTop += step;
}
function moveTop() {
  mgLeft -= step;
}
function moveTop() {
  mgLeft += step;
}

function reverseHandler() {
  player.style.marginLeft = mgLeft + "px";
  player.style.marginTop = mgTop + "px";
}

function reverse() {
  mgLeft = 0;
  mgTop = 0;
}

function moveHandler(event) {
  switch (event.code) {
    case "KeyW":
      moveTop();
      break;
    case "KeyQ":
      moveTop();
      break;
    case "KeyA":
      moveTop();
      break;
    case "KeyG":
      moveTop();
      break;
    case "KeyD":
      moveTop();
      break;
    case "KeySpace":
      reverse();
  }
  reverseHandler();
  console.log(mgLeft, mgTop);
}

document.addEventListener("keydown", moveHandler);
document.addEventListener("keydown", reverse);
