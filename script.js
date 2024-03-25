const button = document.querySelector(".btn");
const container = document.querySelector(".container");
let index = 0;
const colors = ["violet", "red", "yellow", "blue"];

button.addEventListener("click", () => {
  if (index === 4) {
    index = 0;
  } else {
    index++;
  }
  button.style.backgroundColor = colors[index];
});
