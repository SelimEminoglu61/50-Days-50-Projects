const splitLeft = document.getElementsByClassName("split left");
const splitRight = document.getElementsByClassName("split right");
const container = document.getElementsByClassName("container");

splitLeft[0].addEventListener("mouseenter", () => {
  container[0].classList.add("hover-left");
});

splitLeft[0].addEventListener("mouseleave", () => {
  container[0].classList.remove("hover-left");
});

splitRight[0].addEventListener("mouseenter", () => {
  container[0].classList.add("hover-right");
});

splitRight[0].addEventListener("mouseleave", () => {
  container[0].classList.remove("hover-right");
});
