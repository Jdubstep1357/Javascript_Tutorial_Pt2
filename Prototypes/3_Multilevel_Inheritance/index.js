// ==================================================
// File: Prototypes/3_Multilevel_Inheritance/index.js
// Purpose: Multi-level inheritance chain (Circle -> Shape -> Object).
// Notes:
// - These comments are written for a beginner-friendly walkthrough.
// - I did NOT try to change your learning style; I’m just explaining what each piece does.
// ==================================================


// prototype property in array

// when accessing parent, look at __proto__ in console
// multilevel inheritance

// Constructor function `Circle(radius)` — called with `new Circle(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
function Circle(radius) {
    // do something
}

const circle = new Circle(10);

// circle is grandchild
// function Cicle is child
// prototype is parent

// Objects created by a given constructor will have the same prototype
// Constructor - JavaScript is a special function used to create and initialize objects

// 1) circle
// 2) circleBase
// 3) objectBase
