// ==================================================
// File: Prototypical_Inheritance/4_Intermediate_Function_Inheritance/index.js
// Purpose: Intermediate function (extend helper) to reuse inheritance setup.
// Notes:
// - These comments are written for a beginner-friendly walkthrough.
// - I did NOT try to change your learning style; I’m just explaining what each piece does.
// ==================================================


// ----------------------------------
// PARENT "CLASS"
// ----------------------------------
// Every shape should have a color
// Constructor function `Shape(color)` — called with `new Shape(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
function Shape(color) {
    this.color = color;
}


// ----------------------------------
// REUSABLE INHERITANCE HELPER
// ----------------------------------
// This function sets up inheritance between any Child and Parent.
// It prevents us from repeating the same prototype code over and over.
// Regular function `extend(Child, Parent)`.
function extend(Child, Parent) {

    // Create a new prototype object for the Child
    // that inherits from the Parent prototype.
    // This gives the child access to the parent's methods.
// Inheritance step: make `Child.prototype` inherit from `Parent.prototype` (so `Child` instances can use parent methods).
// After this line, remember to reset the constructor: `Child.prototype.constructor = Child`.
    Child.prototype = Object.create(Parent.prototype);

    // After replacing the prototype, we must reset constructor.
    // Otherwise it would incorrectly point to Parent.
    Child.prototype.constructor = Child;
}


// Shared method for ALL shapes
// Shared method: `Shape.prototype.duplicate()` — stored once and shared by all `Shape` instances.
Shape.prototype.duplicate = function () {
    console.log('duplicate');
};



// ----------------------------------
// CIRCLE CHILD CLASS
// ----------------------------------
// Constructor function `Circle(radius, color)` — called with `new Circle(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
function Circle(radius, color) {

    // Call the parent constructor to copy the "color" property
    // Equivalent to super(color)
// `.call(thisArg, ...)` runs a function but lets you choose what `this` should be inside it.
    Shape.call(this, color);

    // Property unique to Circle
    this.radius = radius;
}

// Make Circle inherit from Shape using our helper
extend(Circle, Shape);


// Circle-specific method
// Shared method: `Circle.prototype.draw()` — stored once and shared by all `Circle` instances.
Circle.prototype.draw = function () {
    console.log('draw');
};



// ----------------------------------
// SQUARE CHILD CLASS
// ----------------------------------
// Constructor function `Square(size)` — called with `new Square(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
function Square(size) {
    this.size = size;
}

// Instead of writing prototype code again,
// we reuse the extend() helper
extend(Square, Shape);



// ----------------------------------
// CREATING OBJECTS
// ----------------------------------
const s = new Shape('blue');
const c = new Circle(1, 'red');