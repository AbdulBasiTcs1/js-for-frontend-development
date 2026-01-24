// FOR LOOP
for(initialization; condition; increment/decrement){
  // code to run each iteration
}
// EXAMPLE :
for(let i = 1; i <= 5; i++){
  console.log("Number: " + i);
}

// WHILE LOOP
while(condition){
  // code
}
// EXAMPLE
let i = 1;
while(i <= 5){
  console.log("Number: " + i);
  i++;
}

// DO-WHILE LOOP
do {
  // code
} while(condition);
// EXAMPLE :
let a = 1;
do {
  console.log("Number: " + a);
  a++;
} while(a <= 5);

// FOR EACH LOOP
// EXAMPLE :
let fruits = ["Apple", "Banana", "Mango"];

for(let fruit of fruits){
  console.log(fruit);
}

// EXAMPLE 
let person = {name: "Ali", age: 25};

for(let key in person){
  console.log(key + ": " + person[key]);
}



