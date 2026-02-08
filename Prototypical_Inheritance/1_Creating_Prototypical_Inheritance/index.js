// ==================================================
// File: Prototypical_Inheritance/1_Creating_Prototypical_Inheritance/index.js
// Purpose: Setting up inheritance between constructors using Object.create.
// Notes:
// - These comments are written for a beginner-friendly walkthrough.
// - I did NOT try to change your learning style; I’m just explaining what each piece does.
// ==================================================


// ----------------------------------
// PARENT "CLASS"
// ----------------------------------
// Constructor function `Shape()` — called with `new Shape(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
function Shape() {

}

// Method shared by all Shapes
// Shared method: `Shape.prototype.duplicate()` — stored once and shared by all `Shape` instances.
Shape.prototype.duplicate = function () {
    console.log('duplicate');
};



// ----------------------------------
// CHILD "CLASS"
// ----------------------------------
// Constructor function `Circle(radius)` — called with `new Circle(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
function Circle(radius) {
    this.radius = radius;
}



// ----------------------------------
// UNDERSTANDING THE PROTOTYPE CHAIN
// ----------------------------------

/*
Every object in JavaScript ultimately inherits from Object.prototype.

Prototype chain we WANT:

c (Circle object)
   -> Circle.prototype
       -> Shape.prototype
           -> Object.prototype
               -> null
*/

// Make Circle inherit from Shape
// Inheritance step: make `Circle.prototype` inherit from `Shape.prototype` (so `Circle` instances can use parent methods).
// After this line, remember to reset the constructor: `Child.prototype.constructor = Child`.
Circle.prototype = Object.create(Shape.prototype);

// Reset constructor after replacing prototype
Circle.prototype.constructor = Circle;



// Circle-specific method
// Shared method: `Circle.prototype.draw()` — stored once and shared by all `Circle` instances.
Circle.prototype.draw = function () {
    console.log('draw');
};



// ----------------------------------
// CREATE OBJECTS
// ----------------------------------
const s = new Shape();
const c = new Circle(1);