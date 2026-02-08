// ==================================================
// File: Prototypical_Inheritance/5_Method_Overriding/index.js
// Purpose: Method overriding + calling the parent method.
// Notes:
// - These comments are written for a beginner-friendly walkthrough.
// - I did NOT try to change your learning style; I’m just explaining what each piece does.
// ==================================================


// --------------------------------------------
// HELPER FUNCTION: sets up inheritance
// --------------------------------------------
// This lets any Child "inherit" from a Parent
// Regular function `extend(Child, Parent)`.
function extend(Child, Parent) {

    // Create a new prototype object for Child
    // that inherits from Parent.prototype
    // (This is the core of JavaScript inheritance)
// Inheritance step: make `Child.prototype` inherit from `Parent.prototype` (so `Child` instances can use parent methods).
// After this line, remember to reset the constructor: `Child.prototype.constructor = Child`.
    Child.prototype = Object.create(Parent.prototype);

    // After replacing the prototype, we must fix the constructor
    // Otherwise it would incorrectly point to Parent.
    Child.prototype.constructor = Child;
}



// --------------------------------------------
// PARENT "CLASS"
// --------------------------------------------
// Constructor function `Shape()` — called with `new Shape(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
function Shape() {

}

// Method shared by ALL shapes
// Shared method: `Shape.prototype.duplicate()` — stored once and shared by all `Shape` instances.
Shape.prototype.duplicate = function () {
    console.log('duplicate from Shape');
};



// --------------------------------------------
// CHILD "CLASS"
// --------------------------------------------
// Constructor function `Circle()` — called with `new Circle(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
function Circle() {

}

// Make Circle inherit from Shape
extend(Circle, Shape);



// --------------------------------------------
// METHOD OVERRIDING
// --------------------------------------------
// Circle already inherited duplicate() from Shape,
// but now we REPLACE it with a new version.
//
// This is called "method overriding".
// Shared method: `Circle.prototype.duplicate()` — stored once and shared by all `Circle` instances.
Circle.prototype.duplicate = function () {

    // Call the parent version FIRST
    // This is like calling super.duplicate() in other languages
    Shape.prototype.duplicate.call(this);

    // Then run Circle's own behavior
    console.log('duplicate from Circle');
};



// --------------------------------------------
// CREATE OBJECT
// --------------------------------------------
const c = new Circle();