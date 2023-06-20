let firstNumber, operator, secondNumber;
let displayValue = "";

const screen = document.querySelector(".screen");
const opBtn = document.querySelectorAll(".op");

// Math buttons
// const addBtn = document.getElementById("add");
// addBtn.addEventListener("click", add);

let brains = [];

function renderOnScreen(e) {
  displayValue += e.target.textContent;
  screen.innerHTML = displayValue;
}

const opSelected = function (e) {
  if (!firstNumber) {
    secondNumber == e.target.textContent;
    console.log(secondNumber);
  }
  operator = e.target.textContent;
  firstNumber = displayValue;
  console.log(operator, firstNumber);
};

Array.from(opBtn).map((btn) => {
  btn.addEventListener("click", opSelected);
});

const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", renderOnScreen);
});

const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const operate = function (x, y, operator) {
  if (operator == "+") {
    return add(x, y);
  } else if (operator == "-") {
    return subtract(x, y);
  } else if (operator == "*") {
    return multiply(x, y);
  } else if (operator == "/") {
    return subtract(x, y);
  }
};
