const screen = document.getElementsByClassName("screen");

// Math buttons
const addBtn = document.getElementById("add");
addBtn.addEventListener("click", add);

let brains = [];

function putToBrains(e) {
  console.log(e.target.textContent);
}

const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", putToBrains);
});

function add(a, b) {
  console.log(a + b);
  console.log("Time to add");
}

console.log(addBtn);
