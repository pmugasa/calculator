let a = 4;
let b = 5;

// addition function
function add(a, b) {
  return a + b;
}

// subtract function
function subtract(a, b) {
  return a - b;
}

//multiply function
function multiply(a, b) {
  return a * b;
}

//divide function
function divide(a, b) {
  return a / b;
}

// a function that needs to take an operate
// use this operate to call the function above
function operate(c) {
  if (c === "+") {
    console.log(add(a, b));
  } else if (c === "-") {
    console.log(subtract(a, b));
  } else if (c === "*") {
    console.log(multiply(a, b));
  } else if (c === " / ") {
    console.log(divide(a, b));
  }
}