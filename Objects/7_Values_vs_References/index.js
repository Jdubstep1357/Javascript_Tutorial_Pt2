<<<<<<< HEAD
=======
// ==================================================
// File: Objects/7_Values_vs_References/index.js
// Purpose: Value vs reference types (primitives vs objects).
// Notes:
// - These comments are written for a beginner-friendly walkthrough.
// - I did NOT try to change your learning style; I’m just explaining what each piece does.
// ==================================================


>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
// 2 categories of types: value types or referece tyoes

/* Value Types - Primitives

Number
String
Boolean
Symbol
undefined
null

*/


/* Reference Types */
// Objects
// Function
// Array


/* IMPORTANT

    Primitives are copied by their value
    Objects are copied by their reference, ie stored in memory

*/

let x = 10;
let y = x;

// Output: x is 20. y is 10
x = 20;


x = { value: 10 };
y = x;

// Output x is 20. y is 20
x.value = 20;


let number = 10;

<<<<<<< HEAD
=======
// Regular function `increase(number)`.
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
function increase(number) {
    number++;
}

increase(number);
console.log(number);
// Output: 10
// Primitives are copied by their value


let obj = { value: 10 };

// object passed by reference
<<<<<<< HEAD
=======
// Regular function `increase(obj)`.
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
function increase(obj) {
    obj++;
}

increase(obj);
console.log(obj);
// Output: 11
<<<<<<< HEAD
// Objects copied by their reference
=======
// Objects copied by their reference
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
