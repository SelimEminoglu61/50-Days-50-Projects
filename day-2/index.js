const circles = document.querySelectorAll(".circle");
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const progress = document.getElementById("progress");

prevButton.addEventListener("click", prevButtonClicked);
nextButton.addEventListener("click", nextButtonClicked);

let noneActive = 0;
let active = 0;

function prevButtonClicked() {
  circles.forEach((circle) => {
    circle.classList.forEach((item) => {
      if (item == "active") {
        active -= 1;
      }
    });
  });
  noneActive = circles.length - active;
  progress.getAttribute("style");
  if (noneActive === 2) {
    progress.style.width = "66.6667%";
    nextButton.removeAttribute("disabled");
    removeActiveClass();
  }
  if (noneActive == 5) {
    progress.style.width = "33.3333%";
    removeActiveClass();
  }
  if (noneActive == 7) {
    progress.style.width = "0%";
    prevButton.setAttribute("disabled", "");
    removeActiveClass();
    active = 0;
  }
}

function nextButtonClicked() {
  circles.forEach((circle) => {
    if (circle.className == "circle active") {
      active += 1;
    }
  });
  noneActive = circles.length - active;
  progress.getAttribute("style");
  if (active == 1) {
    progress.style.width = "33.3333%";
    prevButton.removeAttribute("disabled");
    active = circles.length - noneActive;
    addActiveClass();
  }
  if (active == 3) {
    progress.style.width = "66.6667%";
    active = circles.length - noneActive;
    addActiveClass();
  }
  if (active == 6) {
    progress.style.width = "100%";
    nextButton.setAttribute("disabled", "");
    addActiveClass();
    active = 6;
  }
}

function addActiveClass() {
  for (let i = 0; i < circles.length; i++) {
    if (circles[i].className == "circle") {
      circles[i].classList.add("active");
      break;
    }
  }
}

function removeActiveClass() {
  for (let i = circles.length - 1; i > 0; i--) {
    if (circles[i].className == "circle active") {
      circles[i].classList.remove("active");
      break;
    }
  }
}
