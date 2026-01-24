var c=2;

// hoisting - variable and functions are hoisted which means their declarations is 
//            moved on the top of the code.

var a = 4;
console.log(a);

// but this will work 

console.log(b)
var b =3;

// This will also work but it will not give value or error it will give as undefined 

console.log(c);
// Now the value of the c is moved on the top of the code that's how actually the hoisting 
//      work and doesn't give any error - instead gives that it is undefined
