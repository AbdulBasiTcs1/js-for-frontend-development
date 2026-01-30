// 1️⃣ Creating Arrays
let arr1 = [1, 2, 3, 4];
let arr2 = ["HTML", "CSS", "JS"];

console.log(arr1); // Output: [1, 2, 3, 4]
console.log(arr2); // Output: ["HTML", "CSS", "JS"]

// 2️⃣ Accessing & Updating Elements
let skills = ["HTML", "CSS", "JS"];

console.log(skills[0]); // Output: HTML

skills[2] = "JavaScript";
console.log(skills); // Output: ["HTML", "CSS", "JavaScript"]

// 3️⃣ Array Length
let nums = [10, 20, 30];

console.log(nums.length); // Output: 3

// 4️⃣ Basic Array Methods
let fruits = ["Apple", "Banana"];

fruits.push("Mango");
console.log(fruits); // Output: ["Apple", "Banana", "Mango"]

fruits.pop();
console.log(fruits); // Output: ["Apple", "Banana"]

fruits.unshift("Orange");
console.log(fruits); // Output: ["Orange", "Apple", "Banana"]

fruits.shift();
console.log(fruits); // Output: ["Apple", "Banana"]

// 5️⃣ Checking Array Type
let data = [];

console.log(Array.isArray(data)); // Output: true

// 6️⃣ Looping Through Arrays
let numbers = [1, 2, 3];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
// Output:
// 1
// 2
// 3
