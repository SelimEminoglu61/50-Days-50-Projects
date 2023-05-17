const search = document.getElementsByClassName("search");
const hiddenBtn = document.getElementsByClassName("btn");
const input = document.getElementsByClassName("input");

hiddenBtn[0].addEventListener("click", () => {
  if (search[0].className == "search") {
    search[0].classList.add("active");
  } else {
    search[0].classList.remove("active");
  }
  input[0].focus();
});
