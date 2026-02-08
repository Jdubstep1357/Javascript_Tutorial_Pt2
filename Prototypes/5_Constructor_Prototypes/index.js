// ==================================================
// File: Prototypes/5_Constructor_Prototypes/index.js
// Purpose: Constructor prototypes: where shared methods live.
// Notes:
// - These comments are written for a beginner-friendly walkthrough.
// - I did NOT try to change your learning style; I’m just explaining what each piece does.
// ==================================================


// constructors have prototype property

// Constructor function `Circle(radius)` — called with `new Circle(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
function Circle(radius) {
    this.radius = radius;
}


// objecct that will be used as parent for objects ccreated by circle constructor
Circle.prototype

const circle = new Circle(1);

let obj = {};
// obj created as new Object()

let array = [];
array__proto__;

// Array.prototype references arraybase