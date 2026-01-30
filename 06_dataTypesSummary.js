// 1️⃣ Primitive Data Types
let name = "Basit";        // String
let age = 21;             // Number
let isStudent = true;     // Boolean
let value = null;         // Null
let city;                 // Undefined
let id = Symbol("id");    // Symbol
let big = 123n;           // BigInt

console.log(typeof name); // Output: string
console.log(typeof value); // Output: object (JS bug)

// 2️⃣ Non-Primitive (Reference) Data Types
let arr = [1, 2, 3];              // Array
let obj = { name: "Basit" };      // Object
let func = function () {};        // Function

console.log(typeof arr);  // Output: object
console.log(typeof func); // Output: function

// ⚖️ Primitive vs Reference (Quick)
let a = 10;
let b = a;
b = 20;

console.log(a); // Output: 10
console.log(b); // Output: 20

let x = { val: 10 };
let y = x;
y.val = 20;

console.log(x.val); // Output: 20
