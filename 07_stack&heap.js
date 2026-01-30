// Stack & Heap Memory in JavaScript
// 1️⃣ Stack Memory
let a = 10;
let b = a;
b = 20;

console.log(a); // Output: 10
console.log(b); // Output: 20

// 2️⃣ Heap Memory
let user1 = { 
    name: "Basit", 
    age: 21 
};
let user2 = user1;

user2.age = 22;

console.log(user1.age); // Output: 22
console.log(user2.age); // Output: 22
// 🧠 Key Point:
// Both variables point to the same memory location.

// ⚖️ Stack vs Heap (Quick Compare)

// Stack example
let x = 5;
let y = x;
y++;

console.log(x); // Output: 5
console.log(y); // Output: 6

// Heap example
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push(4);

console.log(arr1); // Output: [1,2,3,4]
console.log(arr2); // Output: [1,2,3,4]



