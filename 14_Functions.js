// 1️⃣ Function Declaration
function greet() {
  console.log("Hello JavaScript");
}

greet(); 
// Output: Hello JavaScript



// 2️⃣ Function with Parameters
function add(a, b) {
  return a + b;
}

console.log(add(5, 3)); 
// Output: 8




// 3️⃣ Function Expression
const multiply = function (a, b) {
  return a * b;
};

console.log(multiply(4, 5)); 
// Output: 20




// 4️⃣ Arrow Function
const subtract = (a, b) => a - b;

console.log(subtract(10, 4)); 
// Output: 6




// 5️⃣ Default Parameters
function welcome(name = "Guest") {
  return "Welcome " + name;
}

console.log(welcome());       
// Output: Welcome Guest
console.log(welcome("Basit")); 
// Output: Welcome Basit


// 6️⃣ Return vs Console.log
function square(n) {
  return n * n;
}

let result = square(5);
console.log(result); 
// Output: 25


// 7️⃣ Callback Function
function process(fn) {
  fn();
}

process(function () {
  console.log("Callback executed");
});
// Output: Callback executed
