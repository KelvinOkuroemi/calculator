let firstValue = ""; // initialize first input
let secondValue = ""; // initialize second input
let operation = null; // tracks the current operator
let resetScreen = false; // stops the go ahead to reset screen

//DOM INITIALIZATIONS
const calculationScreen = document.getElementById("screen");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.getElementById("equals");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
const decimalButton = document.getElementById("decimal");

//EVALUATE
equalsButton.addEventListener("click", calculate);

//CLEAR screen to 0
clearButton.addEventListener("click", clear);
function clear() {
  calculationScreen.textContent = "0";
  firstValue = "";
  secondValue = "";
  operation = null;
}

//DELETE number
deleteButton.addEventListener("click", deleteNum);
function deleteNum() {
  calculationScreen.textContent = calculationScreen.textContent.toString().slice(0, -1);
}

//ADD decimal
decimalButton.addEventListener("click", addDecimal);
function addDecimal() {
  if (resetScreen) {
    reset();
  }
  if (calculationScreen.textContent === "") {
    calculationScreen.textContent = "0";
  }
  if (!calculationScreen.textContent.includes(".")) {
    calculationScreen.textContent += ".";
  }
}

// ADD numbers to the screen when number button is clicked
numberButtons.forEach((btn) => {
  btn.addEventListener("click", () => addNumber(btn.textContent));
});

function addNumber(number) {
  if (calculationScreen.textContent === "0" || resetScreen == true) {
    reset();
  }
  calculationScreen.textContent += number;
}

//OPERATE when buttons are clicked
operatorButtons.forEach((btn) => {
  btn.addEventListener("click", () => operate(btn.textContent));
});

function operate(operator) {
  if (operation !== null) {
    calculate();
  }
  firstValue = calculationScreen.textContent;
  operation = operator; // allows for calculation on the next press of an operator
  resetScreen = true;
}
// calculation function
function calculate() {
  if (operation === null || resetScreen) {
    return;
  }
  if (operation === "&divide;" && calculationScreen.textContent === "0") {
    alert("Oga no division by ZERO!");
    return;
  }
  secondValue = calculationScreen.textContent;
  calculationScreen.textContent = round(
    calc(operation, firstValue, secondValue)
  );
  operation = null;
}

//round up number
function round(number) {
  return Math.round(number * 1000) / 1000;
}
//___reset screen function - empty the screen so that it can start from a new number
function reset() {
  calculationScreen.textContent = "";
  resetScreen = false;
}

// arithmetic functions
function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

// core calculation

function calc(operator, a, b) {
  a = Number(a);
  b = Number(b);
  switch (operator) {
    case "+":
      return add(a, b);
    case "−":
      return substract(a, b);
    case "×":
      return multiply(a, b);
    case "÷":
      if (b === 0) return null;
      else return divide(a, b);
    default:
      return null;
  }
}
