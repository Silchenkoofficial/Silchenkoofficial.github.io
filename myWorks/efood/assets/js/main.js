let chips = document.querySelectorAll(".chip");

for (let i = 0; i < chips.length; i++) {
  let chip = chips[i];

  chip.addEventListener("click", (e) => {
    for (let j = 0; j < chips.length; j++) {
      chips[j].classList.remove("active-chip");
    }
    e.target.classList.add("active-chip");
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
