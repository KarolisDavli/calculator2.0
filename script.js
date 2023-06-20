let firstNumber, operator, secondNumber;
let displayValue = "";

const screen = document.querySelector(".screen");
const opBtn = document.querySelectorAll(".op");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");

const clearAll = function () {
  screen.innerHTML = "";
  displayValue = "";
};

const equalAction = function () {
  secondNumber = displayValue;
  screen.innerHTML = operate(firstNumber, secondNumber, operator);
  console.log(firstNumber, secondNumber, operator);
  firstNumber = screen.innerHTML;
  secondNumber = "";
  operator = "";
};

equal.addEventListener("click", equalAction);

clear.addEventListener("click", clearAll);

function renderOnScreen(e) {
  displayValue += e.target.textContent;
  screen.innerHTML = displayValue;
}

const opSelected = function (e) {
  operator = e.target.textContent;
  screen.innerHTML = operator;
  if (!firstNumber) {
    firstNumber = displayValue;
  }
  displayValue = "";
};

Array.from(opBtn).map((btn) => {
  btn.addEventListener("click", opSelected);
});

const numbers = document.querySelectorAll(".digits");

numbers.forEach((btn) => {
  btn.addEventListener("click", renderOnScreen);
});

const add = function (a, b) {
  return Number(a) + Number(b);
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
    return divide(x, y);
  }
};
