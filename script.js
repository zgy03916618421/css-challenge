const menuIcon = document.querySelector(".icon");
let hasRemovedNoAnimation = false;

menuIcon.addEventListener("click", function () {
  this.classList.toggle("active");
  if (!hasRemovedNoAnimation) {
    const childDivs = this.querySelectorAll("div");
    childDivs.forEach((div) => {
      div.classList.remove("no-animation");
    });
    hasRemovedNoAnimation = true;
  }
});
