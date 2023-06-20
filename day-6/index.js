const boxDiv = document.querySelectorAll(".box");
let lastScroll = 0;

window.onscroll = (e) => {
  let currentScroll = scrollY;
  let scrollDelta = currentScroll - lastScroll;

  console.log(window.innerHeight);
  if (currentScroll % 19.5 == 0) {
    // can develop part of control
    if (scrollDelta > 0) {
      for (let i = 0; i < boxDiv.length; i++) {
        if (boxDiv[i].classList != "box show") {
          boxDiv[i].classList.add("show");
          break;
        }
      }
    } else if (scrollDelta < 0) {
      for (let i = boxDiv.length - 1; i >= 2; i--) {
        if (boxDiv[i].classList == "box show") {
          boxDiv[i].classList.remove("show");
          break;
        }
      }
    }
  }

  lastScroll = currentScroll;
};
