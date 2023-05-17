const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const container = document.getElementsByClassName("container");

openBtn.addEventListener("click", () => {
  console.log(container[0]);
  if (container[0].className != "container show-nav") {
    container[0].classList.add("show-nav");
  }
});

closeBtn.addEventListener("click", () => {
  if (container[0].className == "container show-nav") {
    container[0].classList.remove("show-nav");
  }
});
