// FUNCTIONS
// -->> functions mainly 3 kaam k lye hote hein 
// 1) jab apka code aap turant nahi chalana chate bad mein chalana chhate ho 
// 2) jab aapka code aap reuse karna chahte ho 
// 3) jab aap code chalana chaahte ho har bar with different data 


// 1.  ==>

// function ka matlab aap code likh ker uss code ko koi naam dedo

// for example i dont want to write on the screen this and exeute it now ; so whenever i call this function it will exeucute my code

console.log("Hello"); // abhi nai chalana chahta


// to isay aesy banao 

function hellobolo(){
    console.log("Hello");
}

// ab jab b chalana hua simple ye kam karo 
hellobolo();


// 2.  ==>
// with parameters and arguments
function abcd(a,b,c,c){
    console.log(a,b,c,d);
}
abcd(1,2,3,4);

// EXAMPLE :
// Function declaration
function calculateArea(length, width) {
    let area = length * width;  // calculate area
    return area;                // return the result
}

// Calling the function with different values
let area1 = calculateArea(5, 3);
let area2 = calculateArea(10, 4);

console.log("Area 1: " + area1); // Output: Area 1: 15
console.log("Area 2: " + area2); // Output: Area 2: 40



