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
let a = [];
let b = [];
let c = [];
//adding button events
const btns = document.querySelectorAll("button");
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (
      btn.value !== "-" ||
      btn.value !== "+" ||
      btn.value !== "*" ||
      btn.value !== "/"
    ) {
      a.push(btn.value);
      console.log(a.join(""));
    }
  });
});

//to calculate the user can enter as many numbers  as they can
// these numbers are stored in an array
// when the user clicks on the operate keys, the numbers that follow should be put in a new array
// when a user clicks on the equal sign, this should then call the operate function to do the math

//if any of the operating signs are not clicked the number should be put in array a
// if the operating signs are clicked then the number should be put in array b
