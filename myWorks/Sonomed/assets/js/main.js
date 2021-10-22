let theme = localStorage.getItem("theme");
let toggleCheck = document.getElementById("toggle");
let table = document.getElementById("js-table");

if (theme) {
  document.body.classList.add(`${theme}-theme`);
  toggleCheck.checked = theme === "dark";
  if (table) {
    table.classList.add(theme === "dark" && "table-dark");
  }
} else {
  localStorage.setItem("theme", "light");
  document.body.classList.add(`${theme}-theme`);
}

toggleCheck.addEventListener("change", () => {
  localStorage.setItem("theme", toggleCheck.checked ? "dark" : "light");
  location.reload();
});

if (document.getElementById("js-form")) {
  let formHeight = document.getElementById("js-form").clientHeight;
  let formWrapper = document.querySelector(".form__wrapper");
  if (formHeight < 600) {
    formWrapper.style.height = "100%";
    formWrapper.style.display = "flex";
    formWrapper.style.flexDirection = "column";
    formWrapper.style.justifyContent = "center";
  }
}
