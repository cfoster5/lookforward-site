let button = document.getElementById("navButton");
button.addEventListener("click", () => {
  let children = button.children;
  children[0].classList.toggle("rotate-45");
  children[0].classList.toggle("-translate-y-1.5");
  children[0].classList.toggle("duration-200");
  children[1].classList.toggle("opacity-0");
  children[1].classList.toggle("duration-200");
  children[2].classList.toggle("-rotate-45");
  children[2].classList.toggle("translate-y-1.5");
  children[2].classList.toggle("duration-200");
  let navbarItems = document.getElementById("navbarItems");
  navbarItems.classList.toggle("block");
});
