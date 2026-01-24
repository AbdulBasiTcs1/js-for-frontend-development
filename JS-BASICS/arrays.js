// What is an Array?

// An array is a special variable that can hold multiple values in a single variable.

// Values are ordered and indexed starting from 0.

// EXAMPLE :
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);

// ACCESSING ARRAY ELEMENTS BU INDEX STARTING FROM THE 0
let fruits1 = ["Apple", "Banana", "Mango"];
console.log(fruits1[0]); // Apple
console.log(fruits1[2]); // Mango

// MODIFYING ARRAY ELEMENTS 
let fruits2 = ["Apple", "Banana", "Mango"];
fruits2[1] = "Orange"; // change Banana to Orange
console.log(fruits2);  // ["Apple", "Orange", "Mango"]


// ARRAY PROPERTIES
// LENGTH OF THE ARRAY 
let fruits3 = ["Apple", "Banana", "Mango"];
console.log(fruits3.length); // 3

// EXAMPLE :
let fruits4 = ["Apple", "Banana", "Mango"];

fruits4.push("Orange");   // add at end
fruits4.pop();            // remove last
fruits4.shift();          // remove first
fruits4.unshift("Grapes");// add at start

console.log(fruits4);     // ["Grapes", "Banana", "Mango"]

// LOOPING THROUG AN ARRAY
let fruits5 = ["Apple", "Banana", "Mango"];

for(let i = 0; i < fruits5.length; i++){
    console.log(fruits[i]);
}

// Using foR EACH LOOP HERE 
for(let fruit of fruits){
    console.log(fruit);
}

// ARRAY CAN STORE ANY DATA TYPE 
let arr = [1, "Hello", true, null];







