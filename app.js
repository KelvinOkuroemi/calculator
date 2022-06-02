// Basic calculation functions
function add(a, b) {
  return a + b;
}

add(3, 4);

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(func, a, b) {
  return func(a, b);
}

// Work don start

const calculator = document.querySelector(".calculator");
let previousKey = calculator.dataset.previousKeyType;// allows to detect operator button

console.log(previousKey)
const screen = document.getElementById("screen");
const buttons = document.querySelector(".calculator-keys");

buttons.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    const keyContent = key.textContent;
    console.log(keyContent);
    //if it is a number button
    if (!action) {
      //input number
      display(keyContent);
    }
    // decimal button
    if (action === "decimal") {
      screen.textContent = screen.textContent + ".";
    }
    // operator button
    if (
      action === "add" ||
      action === "subtract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      key.classList.add("pressed");
      previousKey = "operator"
    }
    // remove pressed class
    Array.from(key.parentNode.children).forEach((k) => {
      k.classList.remove("pressed");
    });
  }
});



function display(value) {
  if (screen.textContent === "0" || previousKey === "operator") {
    screen.textContent = value;
  } else {
    screen.textContent = screen.textContent + value;
  }
}
