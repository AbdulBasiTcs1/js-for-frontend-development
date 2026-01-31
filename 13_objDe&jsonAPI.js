// 1️⃣ Object Destructuring (Short Concept)
let user = {
  name: "Basit",
  age: 21,
  city: "Attock"
};

let { name, age } = user;

console.log(name); // Output: Basit
console.log(age);  // Output: 21

// 2️⃣ JSON (JavaScript Object Notation)
let jsonData = `{
  "name": "Basit",
  "age": 21,
  "skills": ["HTML", "CSS", "JS"]
}`;


// 3️⃣ JSON ↔ JavaScript Conversion
// JSON → JS Object
let obj = JSON.parse(jsonData);

console.log(obj.name); // Output: Basit

// JS Object → JSON
let backToJson = JSON.stringify(obj);

console.log(backToJson);
// Output: {"name":"Basit","age":21,"skills":["HTML","CSS","JS"]}


// 4️⃣ Working with APIs (Basic Fetch)
fetch("https://api.example.com/users")
  .then(response => response.json())
  .then(data => {
    console.log(data); // Output: API data (object/array)
  })
  .catch(error => {
    console.log(error);
  });

//   5️⃣ Destructuring API Response (Common Pattern)
let apiUser = {
  id: 1,
  name: "Basit",
  email: "basit@email.com"
};

let { id, email } = apiUser;

console.log(id);    // Output: 1
console.log(email); // Output: basit@email.com
