const bg = document.getElementsByClassName("bg");
const loadingText = document.getElementsByClassName("loading-text");

let i = 30;
let j = 1;
let a = 0;

bgİnterval = setInterval(function () {
  bg[0].style.filter = `blur(${i}px)`;
  i -= 0.1;
  if (i <= 0.0) {
    clearInterval(bgİnterval);
  }
}, 5);

loadingİnterval = setInterval(function () {
  loadingText[0].style.opacity = `${j}`;
  loadingText[0].innerHTML = `${a}%`;
  j -= 0.01;
  a++;
  if (j <= 0 && a == 100) {
    clearInterval(loadingİnterval);
  }
}, 15);
