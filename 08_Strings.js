// Strings in JavaScript
// 1️⃣ Creating Strings
let s1 = "Hello";
let s2 = 'World';
let s3 = `Hello World`;

console.log(s1); // Output: Hello
console.log(s2); // Output: World
console.log(s3); // Output: Hello World

// 2️⃣ String Length & Access
let name = "Basit";

console.log(name.length); // Output: 5
console.log(name[0]);     // Output: B


// 3️⃣ String Methods (Common)
let text = "JavaScript";

console.log(text.toUpperCase()); // Output: JAVASCRIPT
console.log(text.toLowerCase()); // Output: javascript
console.log(text.includes("Script")); // Output: true
console.log(text.indexOf("S"));  // Output: 4
console.log(text.slice(0, 4));   // Output: Java

// 4️⃣ Template Literals (Backticks)
let user = "Basit";
let age = 21;

console.log(`My name is ${user} and I am ${age} years old.`);
// Output: My name is Basit and I am 21 years old.

// 5️⃣ Strings are Immutable
let str = "Hi";
str[0] = "B";

console.log(str); // Output: Hi
// 🧠 Key Point:
// String cannot be changed directly.

// STRING METHODS DEEP:
// 1️⃣ Changing Case
let text1 = "JavaScript";

console.log(text1.toUpperCase()); // Output: JAVASCRIPT
console.log(text1.toLowerCase()); // Output: javascript

// 2️⃣ Accessing Characters
let name1 = "Basit";

console.log(name1.charAt(0));   // Output: B
console.log(name1[2]);          // Output: s
console.log(name1.charCodeAt(0)); // Output: 66 (Unicode of 'B')

// 3️⃣ Searching Inside Strings
let str = "Learn JavaScript";

console.log(str.indexOf("Java"));  // Output: 6
console.log(str.lastIndexOf("a")); // Output: 9
console.log(str.includes("Script"));// Output: true
console.log(str.startsWith("Learn"));// Output: true
console.log(str.endsWith("Script")); // Output: true

// 4️⃣ Extracting Parts
let str = "JavaScript";

console.log(str.slice(0, 4));    // Output: Java
console.log(str.substring(4, 10));// Output: Script
console.log(str.substr(4, 6));   // Output: Script

// 5️⃣ Replacing & Repeating
let str = "I love JS";

console.log(str.replace("JS", "JavaScript")); // Output: I love JavaScript
console.log(str.replaceAll("JS", "JavaScript")); // Replaces all occurrences
console.log("Hi! ".repeat(3));               // Output: Hi! Hi! Hi! 

// 6️⃣ Trimming & Padding
let str = "   Hello   ";

console.log(str.trim());      // Output: Hello
console.log(str.trimStart()); // Output: Hello   
console.log(str.trimEnd());   // Output:    Hello

let num = "5";
console.log(num.padStart(3, "0")); // Output: 005
console.log(num.padEnd(3, "0"));   // Output: 500

// 7️⃣ Splitting & Joining
let str = "HTML, CSS, JS";
let arr = str.split(", ");  
console.log(arr);          // Output: ["HTML", "CSS", "JS"]

let joined = arr.join(" & ");
console.log(joined);       // Output: HTML & CSS & JS





