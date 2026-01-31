// 1️⃣ Creating an Object
let user = {
  name: "Basit",
  age: 21,
  isStudent: true
};

console.log(user);
// Output: { name: "Basit", age: 21, isStudent: true }

// 2️⃣ Accessing Object Properties
console.log(user.name);      // Output: Basit
console.log(user["age"]);    // Output: 21


// 3️⃣ Updating & Adding Properties
user.age = 22;
user.city = "Attock";

console.log(user);
// Output: { name: "Basit", age: 22, isStudent: true, city: "Attock" }

// 4️⃣ Deleting Properties
delete user.isStudent;

console.log(user);
// Output: { name: "Basit", age: 22, city: "Attock" }


// 5️⃣ Object with Methods
let person = {
  name: "Basit",
  greet: function () {
    return "Hello " + this.name;
  }
};

console.log(person.greet()); 
// Output: Hello Basit

// 6️⃣ Looping Through Object
let car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2023
};

for (let key in car) {
  console.log(key + ": " + car[key]);
}
// Output:
// brand: Toyota
// model: Corolla
// year: 2023

// 7️⃣ Object Keys, Values & Entries
console.log(Object.keys(car));   
// Output: ["brand", "model", "year"]

console.log(Object.values(car)); 
// Output: ["Toyota", "Corolla", 2023"]

console.log(Object.entries(car));
// Output: [["brand","Toyota"],["model","Corolla"],["year",2023]]
