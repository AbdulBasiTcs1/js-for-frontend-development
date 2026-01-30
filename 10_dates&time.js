// 1️⃣ Creating Date
let now = new Date();

console.log(now); 
// Output: current date & time (depends on system)

let customDate = new Date("2026-01-30");

console.log(customDate);
// Output: Fri Jan 30 2026 ...

// 2️⃣ Getting Date & Time Values
let d = new Date();

console.log(d.getFullYear()); // Output: 2026
console.log(d.getMonth());    // Output: 0 (Jan → 0)
console.log(d.getDate());     // Output: 30
console.log(d.getDay());      // Output: 5 (Friday)

// 3️⃣ Getting Time Values
let d1 = new Date();

console.log(d1.getHours());   // Output: current hour
console.log(d1.getMinutes()); // Output: current minutes
console.log(d1.getSeconds()); // Output: current seconds

// 4️⃣ Setting Date & Time
let d2 = new Date();

d2.setFullYear(2030);
d2.setMonth(11); // December
d2.setDate(25);

console.log(d);
// Output: Tue Dec 25 2030 ...

// 5️⃣ Timestamps
let timeStamp = Date.now();

console.log(timeStamp);
// Output: milliseconds since 1 Jan 1970

// 6️⃣ Formatting Date
let d3 = new Date();

console.log(d3.toDateString()); 
// Output: Fri Jan 30 2026

console.log(d.toLocaleString()); 
// Output: 30/1/2026, 10:15:20 AM (varies)

