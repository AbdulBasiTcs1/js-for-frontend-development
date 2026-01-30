// JavaScript compares values using loose (==) and strict (===) comparison. Data type comparison decides whether type conversion is allowed or not.
// 1️⃣ Loose Comparison (==)
console.log(5 == "5");     // Output: true
console.log(true == 1);    // Output: true
console.log(false == 0);   // Output: true
console.log(null == undefined); // Output: true

// 2️⃣ Strict Comparison (===)
console.log(5 === "5");    // Output: false
console.log(true === 1);   // Output: false
console.log(null === undefined); // Output: false

// 3️⃣ Not Equal Comparisons
console.log(5 != "5");   // Output: false
console.log(5 !== "5");  // Output: true

// 4️⃣ Special Data Type Comparisons
console.log(null == undefined);  // Output: true
console.log(null === undefined); // Output: false

console.log(NaN == NaN);  // Output: false
console.log(Number.isNaN(NaN)); // Output: true

/*
🧠 Final Key Points
== → compares value only
=== → compares value + type ✅
NaN is never equal to itself
Always use === in real projects
 */