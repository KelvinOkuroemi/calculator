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
      calculator.dataset.previousValue = screen.textContent;
      calculator.dataset.action = action;
      previousKey = "operator"
    }
    if(action === "equals"){
      let previousValue = calculator.dataset.previousValue
      let action = calculator.dataset.action
      let currentValue = screen.textContent;

      console.log(previousValue,action,currentValue)
      calculate(previousValue,action,currentValue)
      
    }
  }
});



function display(value) {
  if (screen.textContent === "0" || previousKey === "operator") {
    screen.textContent = value;
  } else {
    screen.textContent = screen.textContent + value;
  }
}

function calculate(num1,calc,num2){
  let result;
  if(calc === "add"){
    result = num1 + num2
  }
  if(calc === "subtract"){
    result = num1 - num2
  }
  if(calc === "divide"){
    result = num1/num2
  }
  if(calc === "multiply"){
    result = num1*num2
  }
  return screen.textContent = result;
}

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
