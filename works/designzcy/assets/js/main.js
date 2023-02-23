const burger = document.querySelector(".burger");
const drawer = document.querySelector(".drawer");

const copyrightElement = document.querySelector(".copyright-year");
copyrightElement.innerHTML = new Date().getFullYear();

burger.addEventListener("click", (e) => {
  burger.classList.toggle("activated");
  drawer.classList.toggle("open");
});
