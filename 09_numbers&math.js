// If we have a condition where like we must had to generate the value between two numbers so we can do thi :
console.log(Math.floor((Math.random.apply() * 10 (max - min +1) + min)));

// 1️⃣ Numbers Basics
let a = 10;
let b = 3.5;

console.log(a); // Output: 10
console.log(b); // Output: 3.5
console.log(typeof a); // Output: number

// 2️⃣ Number Methods
let num = 12.678;

console.log(num.toFixed(2));    // Output: 12.68
console.log(num.toString());    // Output: "12.678"
console.log(Number.isInteger(num)); // Output: false

// 3️⃣ Parsing Numbers
let n1 = "100";
let n2 = "50.5px";

console.log(Number(n1));     // Output: 100
console.log(parseInt(n2));   // Output: 50
console.log(parseFloat(n2)); // Output: 50.5

// 4️⃣ Math Object (Common Methods)
console.log(Math.PI);        // Output: 3.141592653589793
console.log(Math.round(4.6)); // Output: 5
console.log(Math.floor(4.9)); // Output: 4
console.log(Math.ceil(4.1));  // Output: 5
console.log(Math.abs(-10));   // Output: 10

// 5️⃣ Power, Min, Max, Random
console.log(Math.pow(2, 3));   // Output: 8
console.log(Math.min(3, 7, 1)); // Output: 1
console.log(Math.max(3, 7, 1)); // Output: 7

console.log(Math.random()); 
// Output: random number between 0 and 1

// 6️⃣ Random Number in Range
// Random number between 1 and 10
let random = Math.floor(Math.random() * 10) + 1;
console.log(random); // Output: 1 to 10
