const burger = document.querySelector(".burger");
const drawer = document.querySelector(".drawer");

burger.addEventListener("click", (e) => {
  burger.classList.toggle("activated");
  drawer.classList.toggle("open");
});
