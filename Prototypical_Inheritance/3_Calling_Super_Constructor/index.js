<<<<<<< HEAD
=======
// ==================================================
// File: Prototypical_Inheritance/3_Calling_Super_Constructor/index.js
// Purpose: Calling a parent constructor with call() (super constructor).
// Notes:
// - These comments are written for a beginner-friendly walkthrough.
// - I did NOT try to change your learning style; I’m just explaining what each piece does.
// ==================================================


>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
// -----------------------------
// PARENT "CLASS"
// -----------------------------
// This is a constructor function.
// It creates Shape objects.
<<<<<<< HEAD
=======
// Constructor function `Shape(color)` — called with `new Shape(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
function Shape(color) {
    // "this" refers to the new object being created
    // Every Shape will have a color property
    this.color = color;
}


// Methods that should be shared by ALL Shapes
// are put on the prototype (so they are not duplicated in memory)
<<<<<<< HEAD
=======
// Shared method: `Shape.prototype.duplicate()` — stored once and shared by all `Shape` instances.
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
Shape.prototype.duplicate = function () {
    console.log('duplicate');
};



// -----------------------------
// CHILD "CLASS"
// -----------------------------
// Circle will INHERIT from Shape
<<<<<<< HEAD
=======
// Constructor function `Circle(radius, color)` — called with `new Circle(...)` to create an object.
// Inside a constructor, `this` becomes the new object being created.
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
function Circle(radius, color) {

    // Call the Shape constructor and pass "this"
    // This gives Circle objects the "color" property
    // Equivalent to: super(color) in other languages
<<<<<<< HEAD
=======
// `.call(thisArg, ...)` runs a function but lets you choose what `this` should be inside it.
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
    Shape.call(this, color);

    // Property specific to Circle objects
    this.radius = radius;
}



// -----------------------------
// SETTING UP INHERITANCE
// -----------------------------

// Make Circle inherit from Shape
// This creates a new object whose prototype is Shape.prototype
<<<<<<< HEAD
=======
// Inheritance step: make `Circle.prototype` inherit from `Shape.prototype` (so `Circle` instances can use parent methods).
// After this line, remember to reset the constructor: `Child.prototype.constructor = Child`.
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
Circle.prototype = Object.create(Shape.prototype);

// After replacing the prototype, we must reset constructor.
// Otherwise Circle.prototype.constructor would incorrectly point to Shape.
Circle.prototype.constructor = Circle;



// -----------------------------
// METHODS SPECIFIC TO CIRCLE
// -----------------------------

// This method will exist only on Circle objects
<<<<<<< HEAD
Circle.prototype.draw = function () {
    console.log('draw');
};
=======
// Shared method: `Circle.prototype.draw()` — stored once and shared by all `Circle` instances.
Circle.prototype.draw = function () {
    console.log('draw');
};
>>>>>>> 4f977151a8bcef78118b8e0a7cb6459340820c29
