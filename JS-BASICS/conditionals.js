// IF
if (condition) {
  // code executes only if condition is true
}
// example
let age = 20;

if (age >= 18) {
  console.log("You are an adult");
}


// If-Else
if (condition) {
  // runs if true
} else {
  // runs if false
}
// example
let age1 = 15;

if (age1 >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

// Else-If (Multiple Conditions)
if (condition1) {
  // code
} else if (condition2) {
  // code
} else {
  // default code
}
// example
let marks = 85;

if (marks >= 90) {
  console.log("Grade A+");
} else if (marks >= 75) {
  console.log("Grade A");
} else if (marks >= 50) {
  console.log("Grade B");
} else {
  console.log("Fail");
}

// Ternary Operator (Shortcut for If-Else)
condition ? value_if_true : value_if_false;
// example
let age2 = 17;
let status = age2 >= 18 ? "Adult" : "Minor";
console.log(status);

// Switch
switch(expression) {
  case value1:
    // code
    break;
  case value2:
    // code
    break;
  default:
    // code
}
// example
let day = 3;

switch(day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  default:
    console.log("Unknown Day");
}




