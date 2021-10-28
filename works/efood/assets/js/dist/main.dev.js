"use strict";

var chips = document.querySelectorAll(".chip");

for (var i = 0; i < chips.length; i++) {
  var chip = chips[i];
  chip.addEventListener("click", function (e) {
    for (var j = 0; j < chips.length; j++) {
      chips[j].classList.remove("active-chip");
    }

    e.target.classList.add("active-chip");
  });
}

document.getElementById("year").textContent = new Date().getFullYear();